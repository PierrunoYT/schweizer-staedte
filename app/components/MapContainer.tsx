'use client'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import SidePanel from './SidePanel'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import QuarterToggle from './QuarterToggle'
import ZoomControls from './ZoomControls'

type MapTheme = 'neutral' | 'light' | 'dark'

const Map = dynamic(() => import('./Map'), { ssr: false })

interface MapRef {
  setZoom: (zoom: number) => void
  getZoom: () => number
}

export default function MapContainer() {
  const [mapTheme, setMapTheme] = useState<MapTheme>('neutral')
  const [showQuarters, setShowQuarters] = useState(true)
  const mapRef = useRef<MapRef>(null)

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // TODO: Implement search functionality
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

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <SidePanel>
        <></>
        {/* Empty sidebar for now */}
      </SidePanel>
      
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative">
        <div className="mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="h-[calc(100%-4rem)] relative">
          <div className="absolute bottom-2 left-2 z-50">
            <ThemeToggle currentTheme={mapTheme} onThemeChange={setMapTheme} />
          </div>
          <div className="absolute top-2 left-2 z-50">
            <QuarterToggle showQuarters={showQuarters} onToggle={setShowQuarters} />
          </div>
          <div className="absolute top-2 right-2 z-50">
            <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
          </div>
          <Map theme={mapTheme} showQuarters={showQuarters} ref={mapRef} />
        </div>
      </div>
    </div>
  )
}