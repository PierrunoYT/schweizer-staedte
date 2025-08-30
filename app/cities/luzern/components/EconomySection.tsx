import { luzernCity } from '../data'

export default function EconomySection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCity.stats.economy.totalCompanies.toLocaleString()}</div>
          <div className="text-sm text-green-800 dark:text-green-200">Unternehmen (Kanton)</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.economy.employees.toLocaleString()}</div>
          <div className="text-sm text-blue-800 dark:text-blue-200">Beschäftigte</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCity.stats.economy.exportVolume.toLocaleString()} Mio</div>
          <div className="text-sm text-purple-800 dark:text-purple-200">Export CHF</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800/30">
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">+{luzernCity.stats.economy.companyGrowthPercentage}%</div>
          <div className="text-sm text-orange-800 dark:text-orange-200">Unternehmenswachstum</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">💰 Wirtschaftsdaten</h3>
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
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Arbeitslosenquote:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.unemployment}%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏢 KMU-Struktur</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">KMU-Anteil:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.economy.smePercentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Arbeitsplätze in KMU:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.economy.smeJobsPercentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Neue Unternehmen (15J):</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.economy.newCompaniesLast15Years}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Neue Arbeitsplätze (15J):</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.economy.newJobsLast15Years.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏭 Hauptwirtschaftssektoren</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {luzernCity.stats.economicSectors.map((sector, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}