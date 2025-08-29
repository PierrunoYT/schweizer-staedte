import { luzernCity } from '../data'

export default function TourismSection() {
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
}