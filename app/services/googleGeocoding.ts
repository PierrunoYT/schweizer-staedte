// Google Maps Geocoding API Service
export interface GoogleGeocodingResult {
  formatted_address: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
    viewport?: {
      northeast: { lat: number; lng: number }
      southwest: { lat: number; lng: number }
    }
  }
  place_id: string
  types: string[]
  address_components: Array<{
    long_name: string
    short_name: string
    types: string[]
  }>
}

export interface GoogleGeocodingResponse {
  results: GoogleGeocodingResult[]
  status: string
  error_message?: string
}

export interface SearchResult {
  id: string
  name: string
  type: 'address' | 'street' | 'city' | 'poi'
  coordinates: [number, number]
  description: string
  importance: number
}

export async function searchWithGoogleGeocoding(query: string, signal?: AbortSignal): Promise<SearchResult[]> {
  if (!query.trim() || query.length < 2) {
    return []
  }

  // Check if Google API key is available
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    console.warn('Google Maps API key not found, falling back to Nominatim')
    // Import and use Nominatim as fallback
    const { searchAddresses } = await import('./geocoding')
    return searchAddresses(query, signal)
  }

  try {
    // Construct Google Geocoding API URL
    const url = new URL('https://maps.googleapis.com/maps/api/geocode/json')
    url.searchParams.set('address', query)
    url.searchParams.set('key', apiKey)
    url.searchParams.set('region', 'ch') // Bias results towards Switzerland
    url.searchParams.set('language', 'de') // Prefer German for Swiss addresses
    url.searchParams.set('components', 'country:CH') // Restrict to Switzerland only

    const response = await fetch(url.toString(), {
      signal
    })

    if (!response.ok) {
      throw new Error(`Google Geocoding API error: ${response.status}`)
    }

    const data: GoogleGeocodingResponse = await response.json()

    if (data.status !== 'OK') {
      if (data.status === 'ZERO_RESULTS') {
        return []
      }
      throw new Error(`Google Geocoding API error: ${data.status} - ${data.error_message || 'Unknown error'}`)
    }

    // Transform Google results to our SearchResult format
    return data.results.map((result) => {
      const lat = result.geometry.location.lat
      const lng = result.geometry.location.lng
      
      // Determine result type based on Google's types
      let type: SearchResult['type'] = 'address'
      const types = result.types
      
      if (types.includes('locality') || types.includes('administrative_area_level_2')) {
        type = 'city'
      } else if (types.includes('route') || types.includes('street_address')) {
        type = types.includes('street_number') ? 'address' : 'street'
      } else if (types.includes('point_of_interest') || types.includes('establishment')) {
        type = 'poi'
      }

      // Extract main name from address components
      const getMainName = (result: GoogleGeocodingResult): string => {
        // For addresses, try to get street + number
        const streetNumber = result.address_components.find(c => c.types.includes('street_number'))
        const route = result.address_components.find(c => c.types.includes('route'))
        
        if (streetNumber && route) {
          return `${route.long_name} ${streetNumber.long_name}`
        }
        
        if (route) {
          return route.long_name
        }

        // For POIs or other places, try to get establishment name
        const establishment = result.address_components.find(c => 
          c.types.includes('establishment') || c.types.includes('point_of_interest')
        )
        if (establishment) {
          return establishment.long_name
        }

        // For localities, get the city name
        const locality = result.address_components.find(c => c.types.includes('locality'))
        if (locality) {
          return locality.long_name
        }

        // Fallback to first component of formatted address
        const parts = result.formatted_address.split(',')
        return parts[0] || result.formatted_address
      }

      // Calculate importance based on types (higher = more important)
      let importance = 0.5
      if (types.includes('locality')) importance = 0.9
      else if (types.includes('route')) importance = 0.7
      else if (types.includes('street_address')) importance = 0.8
      else if (types.includes('point_of_interest')) importance = 0.6

      return {
        id: `google-${result.place_id}`,
        name: getMainName(result),
        type: type as SearchResult['type'],
        coordinates: [lat, lng] as [number, number],
        description: result.formatted_address,
        importance
      }
    }).sort((a, b) => b.importance - a.importance) // Sort by importance

  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      throw error
    }
    
    console.error('Google Geocoding error, falling back to Nominatim:', error)
    
    // Fallback to Nominatim on error
    try {
      const { searchAddresses } = await import('./geocoding')
      return searchAddresses(query, signal)
    } catch (fallbackError) {
      console.error('Fallback to Nominatim also failed:', fallbackError)
      return []
    }
  }
}

// Usage tracking for monitoring API costs
export function trackGoogleGeocodingUsage() {
  if (typeof window !== 'undefined') {
    const currentCount = parseInt(localStorage.getItem('google_geocoding_usage') || '0', 10)
    localStorage.setItem('google_geocoding_usage', (currentCount + 1).toString())
    
    // Log warning if approaching free tier limit
    if (currentCount > 8000) { // 80% of 10,000 free requests
      console.warn(`Google Geocoding usage: ${currentCount}/10,000 monthly requests. Consider monitoring costs.`)
    }
  }
}