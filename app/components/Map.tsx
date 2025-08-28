'use client'
import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'

type MapTheme = 'neutral' | 'light' | 'dark'

interface MapProps {
  theme: MapTheme
}

interface MapRef {
  setZoom: (zoom: number) => void
  getZoom: () => number
}

const Map = forwardRef<MapRef, MapProps>(({ theme }, ref) => {
  const [isClient, setIsClient] = useState(false)
  const [quartierData, setQuartierData] = useState(null)
  const mapRef = useRef<LeafletMap>(null)

  useEffect(() => {
    setIsClient(true)
    
    const loadQuartierData = async () => {
      try {
        const response = await fetch('/quartiers.geojson')
        const data = await response.json()
        setQuartierData(data)
      } catch (error) {
        console.error('Error loading quartier data:', error)
      }
    }
    
    loadQuartierData()
  }, [])

  useImperativeHandle(ref, () => ({
    setZoom: (zoom: number) => {
      if (mapRef.current) {
        mapRef.current.setZoom(zoom)
      }
    },
    getZoom: () => {
      if (mapRef.current) {
        return mapRef.current.getZoom()
      }
      return 8
    }
  }))

  const getTileLayer = () => {
    switch (theme) {
      case 'light':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      case 'dark':
        return {
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      default: // neutral
        return {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    }
  }

  const tileLayer = getTileLayer()

  const getQuartierStyle = () => {
    switch (theme) {
      case 'dark':
        return {
          color: '#60a5fa',
          weight: 2,
          fillColor: '#1e40af',
          fillOpacity: 0.2
        }
      case 'light':
        return {
          color: '#2563eb',
          weight: 2,
          fillColor: '#3b82f6',
          fillOpacity: 0.1
        }
      default:
        return {
          color: '#1d4ed8',
          weight: 2,
          fillColor: '#2563eb',
          fillOpacity: 0.15
        }
    }
  }

  if (!isClient) {
    return (
      <div className="h-full w-full rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }

  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200 relative z-10">
      <MapContainer
        ref={mapRef}
        center={[47.0502, 8.3093]} // Center of Lucerne area  
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={false} // Disable default zoom controls to avoid conflicts
      >
        <TileLayer
          key={theme} // Force re-render when theme changes
          url={tileLayer.url}
          attribution={tileLayer.attribution}
        />
        {quartierData && (
          <GeoJSON
            key={`${theme}-geojson`}
            data={quartierData}
            style={getQuartierStyle()}
            onEachFeature={(feature, layer) => {
              if (feature.properties) {
                layer.bindPopup(`
                  <div>
                    <h3 style="margin: 0 0 8px 0; font-weight: bold;">
                      ${feature.properties.Name || feature.properties.name || 'Quartier'}
                    </h3>
                    ${Object.entries(feature.properties)
                      .filter(([key]) => key.toLowerCase() !== 'name')
                      .map(([key, value]) => `<p style="margin: 2px 0;"><strong>${key}:</strong> ${value}</p>`)
                      .join('')}
                  </div>
                `)
              }
            }}
          />
        )}
      </MapContainer>
    </div>
  )
})

Map.displayName = 'Map'

export default Map