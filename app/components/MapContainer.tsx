'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import SidePanel from './SidePanel'
import ThemeToggle from './ThemeToggle'

type MapTheme = 'neutral' | 'light' | 'dark'

const Map = dynamic(() => import('./Map'), { ssr: false })

export default function MapContainer() {
  const [mapTheme, setMapTheme] = useState<MapTheme>('neutral')

  return (
    <>
      <SidePanel>
        {/* Empty sidebar for now */}
      </SidePanel>
      
      <div className="ml-80 h-screen bg-white rounded-lg shadow-lg p-6 relative">
        <div className="h-full relative">
          <div className="absolute top-2 right-2 z-50">
            <ThemeToggle currentTheme={mapTheme} onThemeChange={setMapTheme} />
          </div>
          <Map theme={mapTheme} />
        </div>
      </div>
    </>
  )
}