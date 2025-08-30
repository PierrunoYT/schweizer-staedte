'use client'
import Link from 'next/link'
import { luzernMunicipalities } from '../../cities/luzern/data'
import Footer from '../../components/Footer'

export default function KriensPage() {
  const municipality = luzernMunicipalities.find(m => m.name === 'Kriens')
  
  if (!municipality) return <div>Municipality not found</div>

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
              <Link 
                href="/cantons/luzern"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Kanton Luzern
              </Link>
              <span className="text-gray-400">›</span>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 truncate">
                🏘️ <span className="truncate">{municipality.name}</span>
              </h1>
            </div>
            <Link 
              href="/cities/luzern"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              🏛️ Stadt Luzern
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">{municipality.population.toLocaleString()}</div>
              <div className="text-sm text-blue-800 dark:text-blue-200">Einwohner</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800/30">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100">{municipality.area} km²</div>
              <div className="text-sm text-green-800 dark:text-green-200">Fläche</div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">{Math.round(municipality.population / municipality.area).toLocaleString()}</div>
              <div className="text-sm text-purple-800 dark:text-purple-200">Einw./km²</div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Gemeinde {municipality.name}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {municipality.name} ist eine Gemeinde im Kanton Luzern mit {municipality.population.toLocaleString()} Einwohnern 
              auf einer Fläche von {municipality.area} km². Die Gemeinde liegt in der Agglomeration Luzern und ist 
              eine wichtige Wohngemeinde in der Region.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Basisdaten</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Typ:</span>
                    <span className="font-medium text-gray-900 dark:text-white capitalize">{municipality.type === 'municipality' ? 'Gemeinde' : municipality.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Kanton:</span>
                    <Link href="/cantons/luzern" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">Luzern</Link>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Bevölkerungsdichte:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{Math.round(municipality.population / municipality.area)} Einw./km²</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Vergleich mit anderen Gemeinden</h3>
                <div className="space-y-2">
                  {luzernMunicipalities
                    .filter(m => m.name !== municipality.name)
                    .slice(0, 3)
                    .map((otherMunicipality, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{otherMunicipality.name}:</span>
                        <span className="text-gray-700 dark:text-gray-300">{otherMunicipality.population.toLocaleString()} Einw.</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to other municipalities */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Andere Gemeinden im Kanton Luzern</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {luzernMunicipalities
                .filter(m => m.name !== municipality.name)
                .map((otherMunicipality, index) => {
                  const href = otherMunicipality.name === 'Luzern' 
                    ? '/cities/luzern' 
                    : `/municipalities/${otherMunicipality.name.toLowerCase()}`
                  
                  return (
                    <Link
                      key={index}
                      href={href}
                      className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      <span className="text-lg">{otherMunicipality.type === 'city' ? '🏛️' : '🏘️'}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{otherMunicipality.name}</span>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}