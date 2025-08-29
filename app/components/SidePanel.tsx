'use client'
import Link from 'next/link'

export default function SidePanel() {
  return (
    <div className="w-80 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl border-r border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-colors duration-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Schweizer Städte</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Interactive Map Explorer</p>
          </div>
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🗺️</span> Navigation
            </h3>
            <div className="space-y-2">
              <Link 
                href="/cantons/luzern" 
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
              >
                <span className="text-blue-600 dark:text-blue-400">🏛️</span>
                <div>
                  <div className="text-sm font-medium text-blue-900 dark:text-blue-100">Kanton Luzern</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">Overview & Municipalities</div>
                </div>
              </Link>
              
              <Link 
                href="/cities/luzern" 
                className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors group"
              >
                <span className="text-red-600 dark:text-red-400">🏙️</span>
                <div>
                  <div className="text-sm font-medium text-red-900 dark:text-red-100">Stadt Luzern</div>
                  <div className="text-xs text-red-700 dark:text-red-300">Detailed Statistics & Sections</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Current Location Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>📍</span> Current Focus: Luzern
            </h3>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800/30 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <div className="text-red-900 dark:text-red-100">
                    <span className="font-medium">👥 Einwohner:</span>
                    <br />86,234 (2024)
                  </div>
                  <div className="text-red-900 dark:text-red-100">
                    <span className="font-medium">📐 Fläche:</span>
                    <br />29.11 km²
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-red-900 dark:text-red-100">
                    <span className="font-medium">📍 Höhe:</span>
                    <br />436m ü.M.
                  </div>
                  <div className="text-red-900 dark:text-red-100">
                    <span className="font-medium">🏢 Dichte:</span>
                    <br />2,962/km²
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-800/30">
                <div className="text-xs text-red-800 dark:text-red-200">
                  <span className="font-medium">📍 Lage:</span> Zentralschweiz, Vierwaldstättersee
                </div>
              </div>
            </div>
          </div>

          {/* Municipality Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🏘️</span> Municipalities
            </h3>
            <div className="space-y-2">
              {[
                { name: 'Kriens', population: '27,513', path: '/municipalities/kriens' },
                { name: 'Emmen', population: '30,854', path: '/municipalities/emmen' },
                { name: 'Horw', population: '13,956', path: '/municipalities/horw' },
                { name: 'Ebikon', population: '13,523', path: '/municipalities/ebikon' }
              ].map((municipality) => (
                <Link 
                  key={municipality.name}
                  href={municipality.path}
                  className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{municipality.name}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{municipality.population}</span>
                </Link>
              ))}
            </div>
          </div>


          {/* Map Legend */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span>🎨</span> Map Legend
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white shadow"></div>
                <span className="text-gray-700 dark:text-gray-300">Stadt Luzern (clickable)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-500 bg-blue-500/20 rounded"></div>
                <span className="text-gray-700 dark:text-gray-300">City quarters/districts</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 p-2 bg-gray-100 dark:bg-gray-800/50 rounded">
                💡 <strong>Tip:</strong> Click the red marker for detailed city information, or use map controls (bottom-left) to toggle quarters and themes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}