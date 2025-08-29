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

  return (
    <>
      <SidePanel>
        <></>
        {/* Empty sidebar for now */}
      </SidePanel>
      
      <div className="ml-80 h-screen bg-white rounded-lg shadow-lg p-6 relative">
        <div className="h-full relative">
          <div className="absolute bottom-2 left-2 z-50">
            <ThemeToggle currentTheme={mapTheme} onThemeChange={setMapTheme} />
          </div>
          <div className="absolute bottom-2 left-44 z-50">
            <QuarterToggle showQuarters={showQuarters} onToggle={setShowQuarters} />
          </div>
          <div className="absolute top-2 right-2 z-50">
            <ZoomControls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
          </div>
          <Map theme={mapTheme} showQuarters={showQuarters} ref={mapRef} />
        </div>
      </div>
    </>
  )
}