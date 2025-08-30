'use client'
import { useState } from 'react'
import { luzernCantonData, luzernMunicipalities } from '../../cities/luzern/data'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function LuzernCantonPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { id: 'overview', name: 'Übersicht', icon: '🌍' },
    { id: 'municipalities', name: 'Gemeinden', icon: '🏘️' },
    { id: 'economy', name: 'Wirtschaft', icon: '💼' },
    { id: 'geography', name: 'Geografie', icon: '🗺️' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCantonData.stats.totalPopulation.toLocaleString()}</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">Einwohner</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCantonData.stats.area} km²</div>
                <div className="text-sm text-green-800 dark:text-green-200">Fläche</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCantonData.stats.municipalities}</div>
                <div className="text-sm text-purple-800 dark:text-purple-200">Gemeinden</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800/30">
                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">CHF {luzernCantonData.stats.gdpPerCapita.toLocaleString()}</div>
                <div className="text-sm text-orange-800 dark:text-orange-200">BIP pro Kopf</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kanton Luzern</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Der Kanton Luzern liegt im Herzen der Schweiz und ist bekannt für seine vielfältige Landschaft von Bergen bis zu Seen. 
                Mit {luzernCantonData.stats.municipalities} Gemeinden ist er einer der wichtigsten Wirtschaftsstandorte der Zentralschweiz.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Wirtschaftszentren</h4>
                  <div className="space-y-2">
                    {luzernCantonData.stats.economicCenters.map((center, index) => (
                      <Link 
                        key={index}
                        href={center === 'Luzern' ? '/cities/luzern' : '#'}
                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          center === 'Luzern' 
                            ? 'hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer' 
                            : 'cursor-default'
                        }`}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className={`${center === 'Luzern' ? 'text-blue-700 dark:text-blue-300 hover:underline' : 'text-gray-700 dark:text-gray-300'}`}>
                          {center}
                        </span>
                        {center === 'Luzern' && (
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Kantonsdaten</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Kürzel:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{luzernCantonData.abbreviation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Hauptort:</span>
                      <Link href="/cities/luzern" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        {luzernCantonData.stats.capital}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Arbeitslosenquote:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{luzernCantonData.stats.unemploymentRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Sprachen:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{luzernCantonData.stats.officialLanguages.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'municipalities':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Größte Gemeinden</h3>
              <div className="grid grid-cols-1 gap-4">
                {luzernMunicipalities.map((municipality, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    municipality.type === 'city' 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30' 
                      : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">
                          {municipality.type === 'city' ? '🏛️' : '🏘️'}
                        </div>
                        <div>
                          {municipality.name === 'Luzern' ? (
                            <Link href="/cities/luzern" className="hover:underline">
                              <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                                {municipality.name}
                              </h4>
                            </Link>
                          ) : (
                            <Link href={`/municipalities/${municipality.name.toLowerCase()}`} className="hover:underline">
                              <h4 className={`font-semibold hover:text-blue-600 dark:hover:text-blue-400 ${
                                municipality.type === 'city'
                                  ? 'text-blue-900 dark:text-blue-100'
                                  : 'text-gray-900 dark:text-white'
                              }`}>
                                {municipality.name}
                              </h4>
                            </Link>
                          )}
                          <p className={`text-sm ${
                            municipality.type === 'city'
                              ? 'text-blue-700 dark:text-blue-200'
                              : 'text-gray-600 dark:text-gray-400'
                          }`}>
                            {municipality.type === 'city' ? 'Stadt' : 'Gemeinde'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          municipality.type === 'city'
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {municipality.population.toLocaleString()}
                        </div>
                        <div className={`text-sm ${
                          municipality.type === 'city'
                            ? 'text-blue-700 dark:text-blue-200'
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          Einwohner
                        </div>
                        <div className={`text-xs ${
                          municipality.type === 'city'
                            ? 'text-blue-600 dark:text-blue-300'
                            : 'text-gray-500 dark:text-gray-500'
                        }`}>
                          {municipality.area} km²
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'economy':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kantonale Wirtschaft</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">CHF {luzernCantonData.stats.gdpPerCapita.toLocaleString()}</div>
                  <div className="text-sm text-blue-800 dark:text-blue-200 mt-1">BIP pro Kopf</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-900 dark:text-green-100">{luzernCantonData.stats.unemploymentRate}%</div>
                  <div className="text-sm text-green-800 dark:text-green-200 mt-1">Arbeitslosigkeit</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">{luzernCantonData.stats.economicCenters.length}</div>
                  <div className="text-sm text-purple-800 dark:text-purple-200 mt-1">Wirtschaftszentren</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'geography':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Geografische Lage</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Basisdaten</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Fläche:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{luzernCantonData.stats.area} km²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Koordinaten:</span>
                      <span className="font-medium text-gray-900 dark:text-white text-xs">
                        {luzernCantonData.coordinates[0]}°N, {luzernCantonData.coordinates[1]}°E
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Gemeinden:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{luzernCantonData.stats.municipalities}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Lage</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Der Kanton Luzern liegt in der Zentralschweiz und grenzt an die Kantone Aargau, Zug, Schwyz, 
                    Obwalden, Nidwalden und Bern. Er umfasst Teile des Vierwaldstättersees und verschiedene 
                    Landschaftsformen von Hügeln bis zu Bergregionen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Section not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Zurück zur Karte</span>
              </Link>
              <div className="hidden sm:block h-6 border-l border-gray-300 dark:border-gray-600"></div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 truncate">
                🌍 <span className="hidden xs:inline">Kanton</span> Luzern
              </h1>
            </div>
            <Link 
              href="/cities/luzern"
              className="px-2 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 flex-shrink-0"
            >
              🏛️ <span className="hidden sm:inline">Stadt Luzern besuchen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium"
          >
            <span className="flex items-center gap-2">
              {sections.find(s => s.id === activeSection)?.icon}
              {sections.find(s => s.id === activeSection)?.name}
            </span>
            <svg 
              className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="mt-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-h-80 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0 ${
                    activeSection === section.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <span>{section.icon}</span>
                  {section.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sticky top-24">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{section.icon}</span>
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}