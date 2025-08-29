'use client'
import { useState } from 'react'
import { luzernCity, luzernCantonData, luzernMunicipalities } from '../../data/cantons/luzern'
import Link from 'next/link'

export default function LuzernPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Übersicht', icon: '🏛️' },
    { id: 'demographics', name: 'Demografie', icon: '👥' },
    { id: 'geography', name: 'Geografie', icon: '🌍' },
    { id: 'economy', name: 'Wirtschaft', icon: '💼' },
    { id: 'districts', name: 'Stadtteile', icon: '🏘️' },
    { id: 'municipalities', name: 'Umgebung', icon: '🏘️' },
    { id: 'tourism', name: 'Tourismus', icon: '🎯' },
    { id: 'education', name: 'Bildung', icon: '🎓' },
    { id: 'environment', name: 'Umwelt & Politik', icon: '🌱' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
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

      case 'geography':
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

      case 'demographics':
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

      case 'economy':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

      case 'districts':
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

      case 'tourism':
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

      case 'municipalities':
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

      case 'education':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.education.hsluStudents.toLocaleString()}</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">HSLU Studierende</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCity.stats.education.hsluWeiterbildung.toLocaleString()}</div>
                <div className="text-sm text-green-800 dark:text-green-200">Weiterbildung</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCity.stats.education.hsluDepartments.length}</div>
                <div className="text-sm text-purple-800 dark:text-purple-200">HSLU Departemente</div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎓 Hochschule Luzern (HSLU)</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Mit {luzernCity.stats.education.hsluStudents.toLocaleString()} Studierenden ist die HSLU die grösste Bildungsinstitution der Zentralschweiz.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {luzernCity.stats.education.hsluDepartments.map((department, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-lg">📚</div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{department}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏫 Bildungseinrichtungen</h3>
                <div className="space-y-4">
                  {luzernCity.stats.universities.map((university, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-xl">🎓</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{university}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Höhere Bildungseinrichtung</p>
                      </div>
                    </div>
                  ))}
                  {luzernCity.stats.education.phLuzern && (
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="text-xl">👨‍🏫</div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Pädagogische Hochschule Luzern</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Lehrerbildung für alle Schulstufen</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🚌 Öffentlicher Verkehr</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{luzernCity.stats.publicTransport.trainStations}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bahnhöfe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{luzernCity.stats.publicTransport.busLines}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Buslinien</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{luzernCity.stats.publicTransport.boatConnections}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Schiffsverbindungen</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Luzern verfügt über ein umfassendes öffentliches Verkehrsnetz mit Bahn-, Bus- und Schiffsverbindungen.
                </p>
              </div>
            </div>
          </div>
        )

      case 'environment':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{luzernCity.stats.environment.netZeroTarget}</div>
                <div className="text-sm text-green-800 dark:text-green-200">Netto-Null Ziel</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">{luzernCity.stats.environment.sportClubs}+</div>
                <div className="text-sm text-blue-800 dark:text-blue-200">Sportvereine</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{luzernCity.stats.politics.cityCouncilMembers}</div>
                <div className="text-sm text-purple-800 dark:text-purple-200">Stadtrat Mitglieder</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌱 Klimaschutz & Umwelt</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Klimaziel:</span>
                    <span className="font-medium text-gray-900 dark:text-white">Netto null bis {luzernCity.stats.environment.netZeroTarget}</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Klimapolitik:</strong> {luzernCity.stats.environment.climateGoal}
                    </p>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Open Government Data</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="font-bold text-gray-900 dark:text-white">{luzernCity.stats.openData.themes}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Themen</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <div className="font-bold text-gray-900 dark:text-white">{luzernCity.stats.openData.cityDatasets}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Datensätze</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🏛️ Politik & Verwaltung</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Stadtrat (Exekutive):</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.politics.cityCouncilMembers} Mitglieder</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Grosser Stadtrat:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{luzernCity.stats.politics.cityParliamentMembers} Mitglieder</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {luzernCity.stats.politics.isCantonalCapital ? 'Kantonshauptstadt' : 'Stadt'}
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Sport & Freizeit:</strong> Über {luzernCity.stats.environment.sportClubs} Sportvereine und -clubs bieten vielfältige Aktivitäten für alle Altersgruppen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Section not found</div>
    }
  }

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
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  🏛️ Stadt Luzern
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">Kanton Luzern</span>
              </div>
            </div>
            <Link 
              href="/cantons/luzern"
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              🌍 Kanton Luzern
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                        activeSection === section.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{section.icon}</span>
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  )
}