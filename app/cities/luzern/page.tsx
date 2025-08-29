'use client'
import { useState } from 'react'
import { luzernCity, luzernCantonData, luzernMunicipalities } from '../data/cantons/luzern'
import Link from 'next/link'

export default function LuzernPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Übersicht', icon: '🏛️' },
    { id: 'demographics', name: 'Demografie', icon: '👥' },
    { id: 'economy', name: 'Wirtschaft', icon: '💼' },
    { id: 'districts', name: 'Stadtteile', icon: '🏘️' },
    { id: 'tourism', name: 'Tourismus', icon: '🎯' },
    { id: 'education', name: 'Bildung', icon: '🎓' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.population.toLocaleString()}</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">Einwohner</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCity.stats.area} km²</div>
                <div className="text-sm text-green-800 dark:text-green-200">Fläche</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCity.stats.elevation}m</div>
                <div className="text-sm text-purple-800 dark:text-purple-200">Höhe ü.M.</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800/30">
                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{luzernCity.stats.founded}</div>
                <div className="text-sm text-orange-800 dark:text-orange-200">Gegründet</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Über die Stadt Luzern</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Luzern ist eine Stadt im gleichnamigen Schweizer Kanton und liegt am nordwestlichen Ende des Vierwaldstättersees. 
                Die Stadt ist berühmt für ihre gut erhaltene mittelalterliche Architektur und liegt dramatisch am Fuße des Berges Pilatus. 
                Als wichtige Tourismusstadt der Schweiz bietet Luzern eine einzigartige Kombination aus Kultur, Geschichte und natürlicher Schönheit.
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link 
                  href="/cantons/luzern"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  🌍 Mehr über den Kanton Luzern erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )

      case 'demographics':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Bevölkerung</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Gesamtbevölkerung:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.population.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bevölkerungsdichte:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.density.toLocaleString()}/km²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Arbeitslosenquote:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.unemployment}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sprachen</h3>
                <div className="space-y-2">
                  {luzernCity.stats.languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'economy':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wirtschaftsdaten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Durchschnittseinkommen:</span>
                    <span className="font-medium text-gray-900 dark:text-white">CHF {luzernCity.stats.averageIncome.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Mietkosten (pro m²):</span>
                    <span className="font-medium text-gray-900 dark:text-white">CHF {luzernCity.stats.housingCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Steuersatz:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.taxRate}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wirtschaftssektoren</h3>
                <div className="space-y-2">
                  {luzernCity.stats.economicSectors.map((sector, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'districts':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {luzernCity.stats.districts.map((district, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white">{district}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Stadtteil von Luzern</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'tourism':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sehenswürdigkeiten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {luzernCity.stats.touristAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl">🎯</div>
                    <span className="text-gray-700 dark:text-gray-300">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'education':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hochschulen</h3>
              <div className="space-y-4">
                {luzernCity.stats.universities.map((university, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/30">
                    <div className="text-2xl">🎓</div>
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-100">{university}</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-200">Höhere Bildungseinrichtung</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Öffentlicher Verkehr</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{luzernCity.stats.publicTransport.trainStations}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bahnhöfe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{luzernCity.stats.publicTransport.busLines}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Buslinien</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{luzernCity.stats.publicTransport.boatConnections}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Schiffsverbindungen</div>
                  </div>
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
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zurück zur Karte
              </Link>
              <div className="h-6 border-l border-gray-300 dark:border-gray-600"></div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  🏛️ Stadt Luzern
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">Kanton Luzern</span>
              </div>
            </div>
            <Link 
              href="/cantons/luzern"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              🌍 Kanton Luzern
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
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
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  )
}