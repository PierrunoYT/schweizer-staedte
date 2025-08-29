import { luzernCity } from '../../../data/cantons/luzern'

export default function DistrictsSection() {
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
}