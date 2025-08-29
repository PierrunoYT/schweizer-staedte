export interface GeocodingResult {
  id: string
  display_name: string
  lat: string
  lon: string
  type: string
  importance: number
  address?: {
    house_number?: string
    road?: string
    suburb?: string
    city?: string
    municipality?: string
    postcode?: string
    state?: string
    country?: string
  }
}

export interface SearchResult {
  id: string
  name: string
  type: 'address' | 'street' | 'city' | 'poi'
  coordinates: [number, number]
  description: string
  importance: number
}

export async function searchAddresses(query: string): Promise<SearchResult[]> {
  if (!query.trim() || query.length < 3) {
    return []
  }

  try {
    // Use Nominatim API with Swiss focus
    const url = new URL('https://nominatim.openstreetmap.org/search')
    url.searchParams.set('q', query)
    url.searchParams.set('format', 'json')
    url.searchParams.set('addressdetails', '1')
    url.searchParams.set('limit', '8')
    url.searchParams.set('countrycodes', 'ch') // Restrict to Switzerland
    url.searchParams.set('accept-language', 'de,fr,it,en') // Swiss languages
    
    const response = await fetch(url.toString(), {
      headers: {
        'User-Agent': 'Swiss Cities Map Application'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`)
    }
    
    const results: GeocodingResult[] = await response.json()
    
    return results.map((result, index) => {
      const lat = parseFloat(result.lat)
      const lon = parseFloat(result.lon)
      
      // Determine result type
      let type: SearchResult['type'] = 'address'
      if (result.type === 'way' && result.address?.road) {
        type = 'street'
      } else if (result.type === 'relation' && (result.address?.city || result.address?.municipality)) {
        type = 'city'
      } else if (['amenity', 'shop', 'tourism'].includes(result.type)) {
        type = 'poi'
      }
      
      // Create description based on address components
      let description = ''
      if (result.address) {
        const parts = []
        if (result.address.road) parts.push(result.address.road)
        if (result.address.house_number) parts[parts.length - 1] += ` ${result.address.house_number}`
        if (result.address.suburb) parts.push(result.address.suburb)
        if (result.address.city || result.address.municipality) {
          parts.push(result.address.city || result.address.municipality)
        }
        if (result.address.postcode) parts.push(result.address.postcode)
        description = parts.join(', ')
      }
      
      if (!description) {
        description = result.display_name
      }
      
      return {
        id: `nominatim-${result.lat}-${result.lon}-${index}`,
        name: getMainName(result),
        type,
        coordinates: [lat, lon],
        description,
        importance: result.importance || 0
      }
    }).sort((a, b) => b.importance - a.importance) // Sort by importance
    
  } catch (error) {
    console.error('Geocoding error:', error)
    return []
  }
}

function getMainName(result: GeocodingResult): string {
  if (result.address) {
    // For addresses, prioritize the most specific location
    if (result.address.house_number && result.address.road) {
      return `${result.address.road} ${result.address.house_number}`
    }
    if (result.address.road) {
      return result.address.road
    }
    if (result.address.city || result.address.municipality) {
      return result.address.city || result.address.municipality || ''
    }
  }
  
  // Fallback to display name, but shorten it
  const parts = result.display_name.split(',')
  return parts[0] || result.display_name
}