import { luzernCity } from '../data'

export default function GeographySection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

      {/* Natural Features */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          🌊 Natürliche Merkmale innerhalb der Stadtgrenzen
        </h2>
        
        {/* Lakes Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            🏞️ Seen
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Vierwaldstättersee</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Das bedeutendste Gewässer der Stadt Luzern. Die Stadt liegt am nordwestlichen Ufer beim Ausfluss der Reuss.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Fläche:</span>
                  <br />114 km²
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Höhe:</span>
                  <br />433 m ü.M.
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Max. Tiefe:</span>
                  <br />214 m
                </div>
                <div>
                  <span className="font-medium text-gray-900 dark:text-white">Charakteristik:</span>
                  <br />Fjordartig verzweigt
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Rotsee</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tiefster Punkt des Stadtgebiets auf 419 m ü.M. im nördlichen Teil der Stadt.
              </p>
            </div>
          </div>
        </div>

        {/* Rivers and Streams */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            💧 Flüsse und Bäche
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Reuss</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Der grösste Fluss im Kanton Luzern. Verlässt den Vierwaldstättersee bei der Seebrücke, 
                teilt die Stadt in Altstadt und Neustadt und unterquert die berühmte Kapellbrücke.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Kleine Emme</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Mündet am Reusszopf zwischen Reussbühl und Emmenbrücke in die Reuss. Länge: 36 km.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Weitere Gewässer</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
                <div className="space-y-1">
                  <div><strong>Krienbach:</strong> Lokaler Bach durch das Stadtgebiet</div>
                  <div><strong>Rotbach (Rothenburg):</strong> 20 km Länge</div>
                  <div><strong>Würzenbach:</strong> 8 km Länge (Kleiner Bach)</div>
                </div>
                <div className="space-y-1">
                  <div><strong>Emmenweidkanal:</strong> Kleinerer Kanal</div>
                  <div><strong>Limbach:</strong> Lokales Gewässer</div>
                  <div><strong>Ränggbach:</strong> Lokales Gewässer</div>
                  <div><strong>Schachenkanal:</strong> Kleinerer Kanal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mountains and Hills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            ⛰️ Berge und Hügel
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Bürgenstock (Exklave) - 1127.8 m ü.M.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Höchster Punkt der Gemeinde Luzern in der Exklave Bürgenstock. 
                Erstreckt sich über 3,3 km entlang des Südufers des Vierwaldstättersees.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><strong>Fläche:</strong> 145,8 Hektaren</div>
                <div><strong>Zu Luzern seit:</strong> 1378</div>
              </div>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Sonnenberg - 800 m ü.M.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Wander- und Erholungsgebiet zwischen Kriens und Luzern. Höchster trigonometrischer Punkt 
                <em> Chrüzhöchi</em> auf 775,7 m ü.M.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Dietschiberg - 684 m ü.M.</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Früher «Kleine Rigi» genannt, liegt am nordöstlichen Rand der Stadt. 
                Gipfel <em>Hombrig</em> erreicht 684 m ü.M.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Gütsch</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hügel westlich des Stadtzentrums mit dem Château Gütsch. 
                Ausgangspunkt für Wanderungen zum Sonnenberg.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Stadtgebiet Übersicht</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Das Zentrum Luzerns liegt zwischen den Naherholungsgebieten Dietschiberg im Nordosten 
              und Gütsch im Westen. Die Stadt erstreckt sich über 29,1 km² mit vielfältiger Topografie 
              vom Seeufer bis zu den Berghängen.
            </p>
          </div>
        </div>

      </div>

      {/* Urban-Rural Land Use Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏙️ Urban-Ländliche Flächenverteilung</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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