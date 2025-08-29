'use client'
import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import LuzernMarker from './LuzernMarker'

type MapTheme = 'neutral' | 'light' | 'dark'

interface MapProps {
  theme: MapTheme
  showQuarters: boolean
  showQuarterNames: boolean
  showMunicipalities: boolean
}

interface MapRef {
  setZoom: (zoom: number) => void
  getZoom: () => number
  panTo: (coordinates: [number, number], zoom?: number) => void
}

const Map = forwardRef<MapRef, MapProps>(({ theme, showQuarters, showQuarterNames, showMunicipalities }, ref) => {
  const [isClient, setIsClient] = useState(false)
  const [mapReady, setMapReady] = useState(false)
  const [quartierData, setQuartierData] = useState(null)
  const [municipalityData, setMunicipalityData] = useState(null)
  const mapRef = useRef<LeafletMap>(null)
  const markersRef = useRef<L.Marker[]>([]) // Quarter markers

  useEffect(() => {
    setIsClient(true)
    
    const loadQuartierData = async () => {
      try {
        const response = await fetch('/quartiers.geojson')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setQuartierData(data)
        console.log('Quartier data loaded successfully')
      } catch (error) {
        console.warn('Quartier data not available - quarters will be disabled:', error)
        setQuartierData(null)
      }
    }

    const loadMunicipalityData = async () => {
      try {
        const response = await fetch('/municipalities-luzern.geojson')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setMunicipalityData(data)
        console.log('Municipality data loaded successfully')
      } catch (error) {
        console.warn('Municipality data not available - boundaries disabled:', error)
        setMunicipalityData(null)
      }
    }
    
    loadQuartierData()
    loadMunicipalityData()
  }, [])

  useEffect(() => {
    // Immediately clear markers when quarter names are hidden
    if (!showQuarterNames && mapRef.current) {
      markersRef.current.forEach(marker => {
        mapRef.current?.removeLayer(marker)
      })
      markersRef.current = []
    }
  }, [showQuarterNames])

  useEffect(() => {
    // Clear all markers when theme changes
    return () => {
      if (mapRef.current) {
        markersRef.current.forEach(marker => {
          mapRef.current?.removeLayer(marker)
        })
        markersRef.current = []
      }
    }
  }, [theme])

  useEffect(() => {
    // Add quarter name markers when data is available and quarter names should be shown
    if (mapRef.current && quartierData && showQuarterNames && isClient) {
      // Add a small delay to ensure the map is fully initialized
      const timeoutId = setTimeout(() => {
        if (!mapRef.current) return
        
        // Clear existing markers first
        markersRef.current.forEach(marker => {
          if (mapRef.current) {
            mapRef.current.removeLayer(marker)
          }
        })
        markersRef.current = []

        // Add new markers
        if (quartierData.features) {
          quartierData.features.forEach((feature: any) => {
            if (feature.properties && feature.geometry && feature.geometry.type === 'Polygon') {
              // Calculate bounds manually for polygon
              const coordinates = feature.geometry.coordinates[0]
              let minLat = Infinity, maxLat = -Infinity, minLng = Infinity, maxLng = -Infinity
              
              coordinates.forEach((coord: [number, number]) => {
                const [lng, lat] = coord
                minLat = Math.min(minLat, lat)
                maxLat = Math.max(maxLat, lat)
                minLng = Math.min(minLng, lng)
                maxLng = Math.max(maxLng, lng)
              })
              
              const center = L.latLng((minLat + maxLat) / 2, (minLng + maxLng) / 2)
              const quartierName = feature.properties.QNAME || 'Quartier'
              
              // Split long names into multiple lines
              const words = quartierName.split(/[\s\/]+/)
              let displayName = quartierName
              if (words.length > 1) {
                displayName = words.join('<br>')
              }
              
              // Calculate area to determine font size
              const area = feature.properties.Shape_Area || 0
              const fontSize = area > 1000000 ? 12 : area > 500000 ? 10 : 9
              
              // Create text label
              const textColor = theme === 'dark' ? '#ffffff' : '#000000'
              const textShadow = theme === 'dark' ? '2px 2px 4px rgba(0,0,0,0.9)' : '2px 2px 4px rgba(255,255,255,0.9)'
              
              const textMarker = L.divIcon({
                html: `<div style="
                  font-size: ${fontSize}px;
                  font-weight: bold;
                  color: ${textColor};
                  text-shadow: ${textShadow};
                  text-align: center;
                  pointer-events: none;
                  line-height: 1.1;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  height: 100%;
                ">${displayName}</div>`,
                className: 'quartier-label',
                iconSize: [150, 40],
                iconAnchor: [75, 20]
              })

              const marker = L.marker(center, { icon: textMarker })
              if (mapRef.current) {
                marker.addTo(mapRef.current)
                markersRef.current.push(marker)
              }
            }
          })
        }
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [quartierData, showQuarterNames, theme, isClient])


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
    },
    panTo: (coordinates: [number, number], zoom?: number) => {
      console.log('panTo called with:', coordinates, zoom, 'mapRef.current:', mapRef.current)
      if (mapRef.current) {
        const currentZoom = mapRef.current.getZoom()
        const targetZoom = zoom || currentZoom
        console.log('Setting view to:', coordinates, 'zoom:', targetZoom)
        mapRef.current.setView(coordinates, targetZoom, { animate: true, duration: 1 })
      } else {
        console.log('Map ref is null in panTo')
      }
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

  const getQuartierColors = () => {
    // 27 highly distinct colors - same for all themes to maintain consistency
    return [
      '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6',
      '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3',
      '#808000', '#ffd8b1', '#000075', '#808080', '#ff4500', '#1e90ff', '#daa520', '#32cd32',
      '#ff69b4', '#8b4513', '#2f4f4f'
    ]
  }

  const getQuartierStyle = (feature: any) => {
    const colors = getQuartierColors()
    const quartierNr = feature?.properties?.QUARTIERNR || 0
    const colorIndex = (quartierNr - 1) % colors.length
    
    const baseOpacity = theme === 'dark' ? 0.3 : 0.2
    
    return {
      color: colors[colorIndex],
      weight: 2,
      fillColor: colors[colorIndex],
      fillOpacity: baseOpacity
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
    <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200 relative z-0">
      {!isClient ? (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Loading map...</div>
        </div>
      ) : (
        <MapContainer
          ref={mapRef}
          center={[47.050168, 8.309307]} // Precise center of Luzern city  
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
          zoomControl={false} // Disable default zoom controls to avoid conflicts
          whenReady={() => {
            console.log('Map is ready!')
            setMapReady(true)
          }}
        >
          {mapReady && (
            <>
              <TileLayer
                key={theme} // Force re-render when theme changes
                url={tileLayer.url}
                attribution={tileLayer.attribution}
              />
              {municipalityData && showMunicipalities && (
                <GeoJSON
                  key={`${theme}-municipalities`}
                  data={municipalityData}
                  style={{
                    color: '#2563eb',
                    weight: 2,
                    fillColor: 'transparent',
                    fillOpacity: 0,
                    dashArray: '8,4',
                    interactive: true
                  }}
                  onEachFeature={(feature, layer) => {
                    if (feature.properties) {
                      layer.bindPopup(`
                        <div>
                          <h3 style="margin: 0 0 8px 0; font-weight: bold;">
                            ${feature.properties.NAME || feature.properties.GEMEINDE || 'Municipality'}
                          </h3>
                          <p style="margin: 2px 0;"><strong>Type:</strong> Municipality Boundary</p>
                          ${feature.properties.BFS_NR ? `<p style="margin: 2px 0;"><strong>BFS Nr:</strong> ${feature.properties.BFS_NR}</p>` : ''}
                        </div>
                      `)
                    }
                  }}
                />
              )}
              {quartierData && showQuarters && (
                <GeoJSON
                  key={`${theme}-${showQuarters}-geojson`}
                  data={quartierData}
                  style={getQuartierStyle}
                  onEachFeature={(feature, layer) => {
                    if (feature.properties) {
                      // Add popup
                      layer.bindPopup(`
                        <div>
                          <h3 style="margin: 0 0 8px 0; font-weight: bold;">
                            ${feature.properties.QNAME || 'Quartier'}
                          </h3>
                          <p style="margin: 2px 0;"><strong>Quartier Nr:</strong> ${feature.properties.QUARTIERNR || 'N/A'}</p>
                          <p style="margin: 2px 0;"><strong>Area:</strong> ${Math.round(feature.properties.Shape_Area || 0)} m²</p>
                        </div>
                      `)
                    }
                  }}
                />
              )}
              <LuzernMarker map={mapRef.current} theme={theme} />
            </>
          )}
        </MapContainer>
      )}
    </div>
  )
})

Map.displayName = 'Map'

export default Map