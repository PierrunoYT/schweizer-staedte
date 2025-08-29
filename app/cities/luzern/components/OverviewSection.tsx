import Link from 'next/link'
import { luzernCity } from '../data'

export default function OverviewSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.population.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Einwohner (2024)</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCity.stats.area} km²</div>
          <div className="text-sm text-green-800 dark:text-green-200">Fläche</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCity.stats.density.toLocaleString()}</div>
          <div className="text-sm text-purple-800 dark:text-purple-200">Einw./km²</div>
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
}