'use client'
import { useState } from 'react'
import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header onMenuToggle={() => setIsSidePanelOpen(!isSidePanelOpen)} />
      <div className="h-[calc(100vh-4rem)]">
        <MapContainer 
          isSidePanelOpen={isSidePanelOpen}
          onSidePanelClose={() => setIsSidePanelOpen(false)}
        />
      </div>
      <Footer />
    </div>
  )
}
