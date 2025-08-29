'use client'
import { useEffect, useRef } from 'react'
import L from 'leaflet'

interface LuzernMarkerProps {
  map: L.Map | null
  coordinates: [number, number]
  label?: string
  showLabel?: boolean
  theme?: 'light' | 'dark' | 'neutral'
}

interface CoordinateSystem {
  decimal: [number, number] // WGS84 decimal degrees
  ch1903: [number, number] // Swiss coordinate system CH1903/LV95
}

const LUZERN_COORDINATES: CoordinateSystem = {
  decimal: [47.050168, 8.309307], // Stadtzentrum Luzern
  ch1903: [666254, 211241] // Swiss LV95 coordinates
}

export default function LuzernMarker({ 
  map, 
  coordinates = LUZERN_COORDINATES.decimal,
  label = "Luzern",
  showLabel = true,
  theme = 'neutral'
}: LuzernMarkerProps) {
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (!map) return

    // Check if map is properly initialized
    try {
      if (!map.getPane('overlayPane')) {
        console.warn('Map panes not ready yet, skipping marker creation')
        return
      }
    } catch (error) {
      console.warn('Map not ready for marker creation:', error)
      return
    }

    // Remove existing marker
    if (markerRef.current) {
      try {
        map.removeLayer(markerRef.current)
      } catch (error) {
        console.warn('Error removing existing marker:', error)
      }
      markerRef.current = null
    }

    // Create custom Luzern marker icon
    const createLuzernIcon = () => {
      // Theme-based styling
      const isLightMode = theme === 'light' || theme === 'neutral'
      
      const tooltipBg = isLightMode
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(30, 30, 30, 0.95))'
      
      const tooltipTextColor = isLightMode ? '#1f2937' : 'white'
      const tooltipBorder = isLightMode
        ? '2px solid rgba(0, 0, 0, 0.1)'
        : '2px solid rgba(255, 255, 255, 0.15)'
      
      const tooltipShadow = isLightMode
        ? '0 8px 32px rgba(0, 0, 0, 0.15)'
        : '0 8px 32px rgba(0, 0, 0, 0.4)'
      
      const arrowColor = isLightMode
        ? 'rgba(255, 255, 255, 0.95)'
        : 'rgba(0, 0, 0, 0.95)'
      
      const footerTextColor = isLightMode
        ? 'rgba(0, 0, 0, 0.6)' 
        : 'rgba(255, 255, 255, 0.7)'
      
      const borderSeparator = isLightMode
        ? '1px solid rgba(0, 0, 0, 0.1)'
        : '1px solid rgba(255, 255, 255, 0.2)'

      return L.divIcon({
        html: `
          <div class="luzern-marker-container" style="
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div class="luzern-marker-circle" style="
              background: linear-gradient(135deg, #DC2626, #B91C1C);
              width: 28px;
              height: 28px;
              border-radius: 50%;
              border: 4px solid white;
              box-shadow: 0 4px 16px rgba(220, 38, 38, 0.4), 
                          0 2px 8px rgba(0, 0, 0, 0.2);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              animation: pulse 2s infinite;
              cursor: pointer;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 50%;
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
              "></div>
            </div>
            
            <!-- Hover tooltip -->
            <div class="luzern-hover-tooltip" style="
              position: absolute;
              bottom: 42px;
              left: 50%;
              transform: translateX(-50%);
              background: ${tooltipBg};
              color: ${tooltipTextColor};
              padding: 16px 20px;
              border-radius: 12px;
              font-size: 14px;
              font-weight: 500;
              white-space: nowrap;
              pointer-events: none;
              z-index: 1001;
              box-shadow: ${tooltipShadow};
              border: ${tooltipBorder};
              opacity: 0;
              transition: opacity 0.3s ease, transform 0.3s ease;
              backdrop-filter: blur(10px);
              min-width: 280px;
            ">
              <div style="
                font-size: 16px;
                font-weight: 700;
                color: #DC2626;
                margin-bottom: 8px;
                text-align: center;
              ">🏛️ ${label}</div>
              <div style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                font-size: 13px;
                line-height: 1.4;
              ">
                <div><strong>👥 Einwohner:</strong><br>86,234</div>
                <div><strong>📍 Höhe:</strong><br>436m ü.M.</div>
                <div><strong>📐 Fläche:</strong><br>29.11 km²</div>
                <div><strong>🏢 Dichte:</strong><br>2,962/km²</div>
                <div><strong>💰 Ø Einkommen:</strong><br>CHF 75,000</div>
                <div><strong>🎓 Universität:</strong><br>Uni Luzern</div>
              </div>
              <div style="
                margin-top: 8px;
                padding-top: 8px;
                border-top: ${borderSeparator};
                font-size: 11px;
                color: ${footerTextColor};
                text-align: center;
              ">Gegründet 840 n.Chr. • Kanton Luzern</div>
              <div style="
                margin-top: 10px;
                text-align: center;
              ">
                <a href="/cities/luzern" style="
                  display: inline-flex;
                  align-items: center;
                  gap: 4px;
                  padding: 6px 12px;
                  background: #DC2626;
                  color: white;
                  text-decoration: none;
                  border-radius: 6px;
                  font-size: 11px;
                  font-weight: 600;
                  transition: background-color 0.2s ease;
                  pointer-events: auto;
                " onmouseover="this.style.background='#B91C1C'" onmouseout="this.style.background='#DC2626'">
                  📊 Mehr Details
                  <svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              <div style="
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid ${arrowColor};
              "></div>
            </div>
            
            ${showLabel ? `
            <div style="
              position: absolute;
              top: 36px;
              left: 50%;
              transform: translateX(-50%);
              background: linear-gradient(135deg, rgba(220, 38, 38, 0.95), rgba(185, 28, 28, 0.95));
              color: white;
              padding: 6px 12px;
              border-radius: 8px;
              font-size: 13px;
              font-weight: 600;
              white-space: nowrap;
              pointer-events: none;
              z-index: 1000;
              box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(255, 255, 255, 0.2);
            ">${label}</div>
            ` : ''}
          </div>
          
          <style>
            @keyframes pulse {
              0% { box-shadow: 0 4px 16px rgba(220, 38, 38, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2); }
              50% { box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6), 0 3px 12px rgba(0, 0, 0, 0.3); }
              100% { box-shadow: 0 4px 16px rgba(220, 38, 38, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2); }
            }
            
            .luzern-marker-container:hover .luzern-hover-tooltip {
              opacity: 1;
            }
            
            .luzern-marker-circle:hover {
              transform: scale(1.1);
              transition: transform 0.2s ease;
            }
          </style>
        `,
        className: 'luzern-marker',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })
    }

    // Create and add marker
    const marker = L.marker(coordinates, { 
      icon: createLuzernIcon(),
      zIndexOffset: 2000 // Ensure Luzern marker appears above all others
    })

    // Add hover handlers for tooltip
    marker.on('mouseover', () => {
      const markerElement = marker.getElement()
      if (markerElement) {
        const tooltip = markerElement.querySelector('.luzern-hover-tooltip') as HTMLElement
        if (tooltip) {
          tooltip.style.opacity = '1'
        }
        const circle = markerElement.querySelector('.luzern-marker-circle') as HTMLElement
        if (circle) {
          circle.style.transform = 'scale(1.1)'
          circle.style.transition = 'transform 0.2s ease'
        }
      }
    })

    marker.on('mouseout', () => {
      const markerElement = marker.getElement()
      if (markerElement) {
        const tooltip = markerElement.querySelector('.luzern-hover-tooltip') as HTMLElement
        if (tooltip) {
          tooltip.style.opacity = '0'
        }
        const circle = markerElement.querySelector('.luzern-marker-circle') as HTMLElement
        if (circle) {
          circle.style.transform = 'scale(1)'
        }
      }
    })

    // Click handler - no popup needed since we have hover tooltip with details link
    marker.on('click', () => {
      // Navigate directly to details page on click
      window.location.href = '/cities/luzern'
    })

    // Add small delay to ensure map is fully ready
    const timeoutId = setTimeout(() => {
      try {
        marker.addTo(map)
        markerRef.current = marker
      } catch (error) {
        console.warn('Error adding marker to map:', error)
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (markerRef.current && map) {
        try {
          map.removeLayer(markerRef.current)
        } catch (error) {
          console.warn('Error removing marker during cleanup:', error)
        }
        markerRef.current = null
      }
    }
  }, [map, coordinates, label, showLabel, theme])

  return null // This component doesn't render JSX directly
}

// Export coordinate data for use in other components
export { LUZERN_COORDINATES }
export type { CoordinateSystem }