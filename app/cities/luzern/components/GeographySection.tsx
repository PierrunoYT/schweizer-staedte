import { luzernCity } from '../data'

export default function GeographySection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏔️ Topografie & Lage</h3>
          <div className="space-y-3">
            <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-sm text-blue-700 dark:text-blue-300">{luzernCity.stats.geography.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Höhenbereich:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.heightRange.min}m - {luzernCity.stats.geography.heightRange.max}m ü.M.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Stadtzentrum:</span>
              <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.centerElevation}m ü.M.</span>
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

      {/* Urban-Rural Land Use Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏙️ Urban-Ländliche Flächenverteilung</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Hauptkategorien</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Urban:</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.urbanPercentage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Ländlich:</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.ruralPercentage}%</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                Eine der höchsten Urbanisierungsraten in der Schweiz
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Detaillierte Aufteilung</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Siedlungsfläche:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.settlement}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Überbaut (netto):</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.builtUpArea}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Landwirtschaft:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.agriculture}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Wald:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.forest}%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Dichte & Effizienz</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Siedlung pro Kopf:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.geography.landUse.settlementPerCapita}m²</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                <strong>Niedrigster Wert</strong> im Kanton Luzern - höchste Siedlungseffizienz
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                Ranking: <strong>Höchste Bevölkerungsdichte</strong> im Kanton
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settlement Development Trends */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">📈 Siedlungsentwicklung (1982-2016)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Historische Entwicklung</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Ausgangsfläche (1982):</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.development.settlementGrowth1982to2016.fromKm2} km²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Endfläche (2016):</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.development.settlementGrowth1982to2016.toKm2} km²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Wachstum:</span>
                <span className="font-medium text-green-600 dark:text-green-400">+{luzernCity.stats.development.settlementGrowth1982to2016.increase}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Zeitspanne:</span>
                <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.development.settlementGrowth1982to2016.yearsSpan} Jahre</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Analyse & Kontext</h4>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>+1,49 km²</strong> Siedlungsfläche in 34 Jahren
                </div>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="text-sm text-red-800 dark:text-red-200">
                  Wachstum hauptsächlich <strong>auf Kosten landwirtschaftlicher Flächen</strong>
                </div>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  {luzernCity.stats.development.urbanDensityRanking}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Climate Data */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌿 Klimadaten & Temperaturen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Temperaturverteilung</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{luzernCity.stats.geography.climate.averageTemp}°C</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jahresmittel</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <div className="font-medium text-blue-900 dark:text-blue-100">{luzernCity.stats.geography.climate.coldestMonth.temp}°C</div>
                  <div className="text-xs text-blue-700 dark:text-blue-300">{luzernCity.stats.geography.climate.coldestMonth.month}</div>
                </div>
                <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
                  <div className="font-medium text-red-900 dark:text-red-100">{luzernCity.stats.geography.climate.warmestMonth.temp}°C</div>
                  <div className="text-xs text-red-700 dark:text-red-300">{luzernCity.stats.geography.climate.warmestMonth.month}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}