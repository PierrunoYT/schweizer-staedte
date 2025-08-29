'use client'
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import SidePanel from './SidePanel'
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
  const mapRef = useRef<MapRef>(null)


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
      <SidePanel mapControls={mapControls} />
      
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative transition-colors duration-200">
        <div className="h-full relative">
          <div className="absolute top-2 right-2 z-50">
            <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
          </div>
          <Map theme={mapTheme} showQuarters={showQuarters} ref={mapRef} />
        </div>
      </div>
    </div>
  )
}