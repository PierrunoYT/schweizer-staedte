import Link from 'next/link'
import { luzernMunicipalities } from '../data'

export default function MunicipalitiesSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gemeinden in der Umgebung</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Entdecken Sie die umliegenden Gemeinden im Kanton Luzern in der Nähe der Stadt Luzern.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {luzernMunicipalities
            .filter(m => m.name !== 'Luzern')
            .map((municipality, index) => {
              const href = `/municipalities/${municipality.name.toLowerCase()}`
              
              return (
                <Link
                  key={index}
                  href={href}
                  className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🏘️</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {municipality.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Gemeinde</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Einwohner:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{municipality.population.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Fläche:</span>
                      <div className="font-medium text-gray-900 dark:text-white">{municipality.area} km²</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>Mehr Details</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800/30">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">🌍 Kanton Luzern erkunden</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          Erfahren Sie mehr über alle Gemeinden und Statistiken des Kantons Luzern.
        </p>
        <Link 
          href="/cantons/luzern"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          🏛️ Kanton Luzern Übersicht
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      </div>
    </div>
  )
}