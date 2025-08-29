'use client'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import SidePanel from './SidePanel'
import SearchBar from './SearchBar'
import { City } from '../data/cities'
import ThemeToggle from './ThemeToggle'
import QuarterToggle from './QuarterToggle'
import ZoomControls from './ZoomControls'

type MapTheme = 'neutral' | 'light' | 'dark'

const Map = dynamic(() => import('./Map'), { ssr: false })

interface MapRef {
  setZoom: (zoom: number) => void
  getZoom: () => number
  panTo: (coordinates: [number, number], zoom?: number) => void
}

export default function MapContainer() {
  const [mapTheme, setMapTheme] = useState<MapTheme>('neutral')
  const [showQuarters, setShowQuarters] = useState(true)
  const [searchMarker, setSearchMarker] = useState<{
    coordinates: [number, number]
    label: string
    type: 'city' | 'city-stats'
  } | undefined>(undefined)
  const mapRef = useRef<MapRef>(null)

  const handleCitySelect = (city: City) => {
    console.log('Selected city:', city, 'Map ref:', mapRef.current)
    
    // Set search marker
    setSearchMarker({
      coordinates: city.coordinates,
      label: city.name,
      type: 'city'
    })
    
    // Add a small delay to ensure map is ready
    setTimeout(() => {
      if (mapRef.current) {
        console.log('Attempting to pan to:', city.coordinates)
        // Pan to selected city with appropriate zoom level
        mapRef.current.panTo(city.coordinates, 13)
      } else {
        console.log('Map ref is still not available after timeout')
      }
    }, 100)
  }

  const handleLuzernSelect = (result: any) => {
    console.log('Selected Luzern result:', result, 'Map ref:', mapRef.current)
    
    // Set search marker with round marker for statistical data
    setSearchMarker({
      coordinates: result.coordinates,
      label: result.name,
      type: 'city-stats'
    })
    
    // Add a small delay to ensure map is ready
    setTimeout(() => {
      if (mapRef.current) {
        console.log('Attempting to pan to Luzern:', result.coordinates)
        // Pan to Luzern with city view zoom
        mapRef.current.panTo(result.coordinates, 13)
      } else {
        console.log('Map ref is still not available after timeout')
      }
    }, 100)
  }

  const handleSearch = (query: string) => {
    console.log('Searching for canton or general query:', query)
    
    // For cantons, we could pan to a central location or show all cities in that canton
    // For now, let's create a simple canton center mapping
    const cantonCenters: Record<string, [number, number]> = {
      'Zürich': [47.3769, 8.5417],
      'Geneva': [46.2044, 6.1432], 
      'Genève': [46.2044, 6.1432],
      'Bern': [46.9481, 7.4474],
      'Basel-Stadt': [47.5596, 7.5886],
      'Vaud': [46.5197, 6.6323],
      'Luzern': [47.0502, 8.3093],
      'St. Gallen': [47.4239, 9.3767],
      'Ticino': [46.0037, 8.9511],
      'Valais': [46.2276, 7.3589],
      'Neuchâtel': [47.0012, 6.9320],
      'Fribourg': [46.8059, 7.1512],
      'Graubünden': [46.8570, 9.5331],
      'Schaffhausen': [47.6962, 8.6344]
    }
    
    const center = cantonCenters[query]
    if (center && mapRef.current) {
      console.log('Panning to canton center:', center)
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.panTo(center, 10) // Zoom out more for canton view
        }
      }, 100)
    }
  }

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() + 1)
    }
  }

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.setZoom(mapRef.current.getZoom() - 1)
    }
  }

  const mapControls = (
    <div className="space-y-3">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">🗺️ Map Style</span>
        </div>
        <ThemeToggle currentTheme={mapTheme} onThemeChange={setMapTheme} />
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">🏘️ Quarters</span>
        </div>
        <QuarterToggle showQuarters={showQuarters} onToggle={setShowQuarters} />
      </div>
      
      <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          <span className="font-medium">App Theme:</span> Use header toggle (top-right)
          <br />
          <span className="font-medium">Map Style:</span> Choose map appearance above
        </p>
      </div>
    </div>
  )

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <SidePanel mapControls={mapControls}>
        <SearchBar 
          onCitySelect={handleCitySelect} 
          onLuzernSelect={handleLuzernSelect}
          onSearch={handleSearch} 
        />
      </SidePanel>
      
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative transition-colors duration-200">
        <div className="h-full relative">
          <div className="absolute top-2 right-2 z-50">
            <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
          </div>
          <Map theme={mapTheme} showQuarters={showQuarters} searchMarker={searchMarker} ref={mapRef} />
        </div>
      </div>
    </div>
  )
}