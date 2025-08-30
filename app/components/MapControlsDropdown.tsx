'use client'
import { useState } from 'react'

interface MapControlsDropdownProps {
  mapControls?: React.ReactNode
  theme?: 'light' | 'dark' | 'neutral'
}

export default function MapControlsDropdown({ mapControls, theme = 'neutral' }: MapControlsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Theme-based styling
  const isDark = theme === 'dark'
  
  const buttonBg = isDark 
    ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' 
    : 'bg-white hover:bg-gray-50 border-gray-200'
  
  const buttonText = isDark ? 'text-gray-200' : 'text-gray-700'
  const buttonShadow = isDark 
    ? 'shadow-lg shadow-black/20' 
    : 'shadow-lg shadow-gray-900/10'
  
  const dropdownBg = isDark 
    ? 'bg-gray-800 border-gray-600' 
    : 'bg-white border-gray-200'
  
  const dropdownShadow = isDark 
    ? 'shadow-xl shadow-black/30' 
    : 'shadow-xl shadow-gray-900/15'

  return (
    <div className="relative z-50">
      {/* Dropdown panel */}
      {isOpen && (
        <div 
          className={`
            mb-2 p-4 rounded-lg border backdrop-blur-sm
            ${dropdownBg} ${dropdownShadow}
            transition-all duration-200 ease-in-out
            transform origin-bottom-left
            animate-in slide-in-from-bottom-2 fade-in-0
            min-w-[260px] max-w-[280px] md:min-w-[280px] md:max-w-[320px]
          `}
        >
          <div className="mb-3">
            <h4 className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-3 uppercase tracking-wide`}>
              Map Controls
            </h4>
            {mapControls}
          </div>
          
          {/* Close button inside dropdown */}
          <button
            onClick={toggleDropdown}
            className={`
              w-full px-3 py-2 text-xs font-medium rounded-md
              ${isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 border-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600 border-gray-300'
              }
              border transition-colors duration-150
              flex items-center justify-center gap-2
            `}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Close Controls
          </button>
        </div>
      )}

      {/* Toggle button */}
      <div className="relative group">
        <button
          onClick={toggleDropdown}
          className={`
            flex items-center justify-center w-12 h-12 rounded-full border
            ${buttonBg} ${buttonText} ${buttonShadow}
            transition-all duration-200 ease-in-out
            hover:scale-105 active:scale-95
            backdrop-blur-sm
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
          title={isOpen ? 'Close map controls' : 'Open map controls'}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            )}
          </svg>
        </button>

        {/* Hover tooltip */}
        <div
          className={`
            absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
            px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap
            ${isDark 
              ? 'bg-gray-700 text-gray-200 border-gray-600' 
              : 'bg-gray-900 text-white border-gray-700'
            }
            border shadow-lg backdrop-blur-sm
            opacity-0 group-hover:opacity-100
            pointer-events-none
            transition-opacity duration-200 ease-in-out
            z-50
          `}
        >
          {isOpen ? 'Close Controls' : 'Map Controls'}
          <div 
            className={`
              absolute top-full left-1/2 transform -translate-x-1/2
              w-0 h-0 border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent
              ${isDark ? 'border-t-gray-700' : 'border-t-gray-900'}
            `}
          />
        </div>
      </div>
    </div>
  )
}