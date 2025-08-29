import { luzernCity } from '../../../data/cantons/luzern'

export default function DemographicsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.demographics.swissPopulation.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Schweizer Bürger</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800/30">
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{luzernCity.stats.demographics.foreignPopulation.toLocaleString()}</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Ausländer</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">+{luzernCity.stats.demographics.populationGrowth}%</div>
          <div className="text-sm text-green-800 dark:text-green-200">Wachstum 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">👥 Bevölkerungsstruktur</h3>
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
              <span className="text-gray-600 dark:text-gray-400">Ausländeranteil:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.demographics.foreignerPercentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Arbeitslosenquote:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.unemployment}%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎂 Altersstruktur</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Unter 20 Jahre:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.demographics.ageStructure.under20}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">20-64 Jahre:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.demographics.ageStructure.between20and64}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Über 64 Jahre:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.demographics.ageStructure.over64}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌍 Hauptnationalitäten (Ausländer)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {luzernCity.stats.demographics.majorNationalities.map((nationality, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="text-lg font-bold text-gray-900 dark:text-white">{nationality.percentage}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{nationality.country}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}