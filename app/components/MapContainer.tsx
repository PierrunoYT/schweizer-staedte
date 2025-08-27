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
        <ThemeToggle currentTheme={mapTheme} onThemeChange={setMapTheme} />
      </SidePanel>
      
      <div className="ml-80 h-screen bg-white rounded-lg shadow-lg p-6">
        <div className="h-full">
          <Map theme={mapTheme} />
        </div>
      </div>
    </>
  )
}