import { luzernCity } from '../../../data/cantons/luzern'

export default function GeographySection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏔️ Topografie & Lage</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Höhenbereich:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.heightRange.min}m - {luzernCity.stats.geography.heightRange.max}m ü.M.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Stadtzentrum:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.elevation}m ü.M.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Höchster Punkt:</span>
              <span className="font-medium text-gray-900 dark:text-white">Bürgenstock ({luzernCity.stats.geography.heightRange.max}m)</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌡️ Klima (1991-2020)</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Jahresmittel:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.averageTemp}°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Kältester Monat:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.coldestMonth.month} ({luzernCity.stats.geography.climate.coldestMonth.temp}°C)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Wärmster Monat:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.warmestMonth.month} ({luzernCity.stats.geography.climate.warmestMonth.temp}°C)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌿 Flächennutzung & Klimadaten</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Flächenaufteilung</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Siedlungsfläche:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.settlement}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Landwirtschaft:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.agriculture}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Wald:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.forest}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Unproduktiv:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.unproductive}%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Jährliche Klimatage</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Frosttage:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.frostDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Eistage:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.iceDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Sommertage:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.summerDays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Hitzetage:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.hotDays}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}