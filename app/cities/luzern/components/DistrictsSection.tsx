import { useState } from 'react'
import { quartiers, stadtkreise, stadtteile, administrativeStructure, populationRankings } from '../data/quarters'

export default function DistrictsSection() {
  const [activeView, setActiveView] = useState('overview')

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Stadtgliederung</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">{administrativeStructure.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{administrativeStructure.totalCityDistricts}</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Stadtteile</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{administrativeStructure.totalCityCircles}</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Stadtkreise</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{administrativeStructure.totalQuarters}</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Quartiere</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{administrativeStructure.totalSmallQuarters}</div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Kleinquartiere</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stadtteile.map((stadtteil, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{stadtteil.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{stadtteil.description}</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-500">Quartiere: {stadtteil.quartiers.length}</span>
              <span className="font-medium text-gray-900 dark:text-white">{stadtteil.totalPopulation.toLocaleString('de-CH')} Einwohner</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStadtkreise = () => (
    <div className="space-y-6">
      <div className="grid gap-6">
        {stadtkreise.map((stadtkreis) => (
          <div key={stadtkreis.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {stadtkreis.id}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{stadtkreis.name}</h3>
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{stadtkreis.quartiers.length} Quartiere</span>
                  <span className="font-medium text-gray-900 dark:text-white">{stadtkreis.totalPopulation.toLocaleString('de-CH')} Einwohner</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {stadtkreis.quartiers.map((quartier, index) => {
                const quarterData = quartiers.find(q => q.name === quartier)
                return (
                  <div key={index} className="flex items-center justify-between gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded font-mono">
                        {quarterData?.number.toString().padStart(2, '0')}
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{quartier}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {quarterData?.population?.toLocaleString('de-CH')}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderQuartiere = () => (
    <div className="space-y-6">
      <div className="grid gap-4">
        {quartiers.map((quartier) => (
          <div key={quartier.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {quartier.number.toString().padStart(2, '0')}
                  </span>
                  <div className="w-6 h-6 bg-blue-600 text-white rounded text-xs flex items-center justify-center font-bold">
                    {quartier.stadtkreis.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{quartier.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {quartier.stadtkreis.name} • {quartier.stadtteil}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900 dark:text-white">{quartier.population.toLocaleString('de-CH')}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Einwohner</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderRankings = () => (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            🏆 Top 5 Quartiere
          </h3>
          <div className="space-y-3">
            {populationRankings.topQuarters.map((quarter, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {quarter.rank}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{quarter.quarter}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quartier {quarter.number.toString().padStart(2, '0')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-700 dark:text-green-300 text-lg">{quarter.population.toLocaleString('de-CH')}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Einwohner</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            📉 Bottom 5 Quartiere
          </h3>
          <div className="space-y-3">
            {populationRankings.bottomQuarters.map((quarter, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {quarter.rank}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{quarter.quarter}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quartier {quarter.number.toString().padStart(2, '0')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-700 dark:text-orange-300 text-lg">{quarter.population.toLocaleString('de-CH')}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Einwohner</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Bevölkerungsverteilung</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          Stadt Luzern zählt {administrativeStructure.totalPopulation.toLocaleString('de-CH')} Einwohner (Stand {administrativeStructure.populationDataYear}).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold text-blue-900 dark:text-blue-100">Größtes Quartier:</div>
            <div className="text-blue-700 dark:text-blue-300">Neustadt / Voltastrasse</div>
            <div className="text-blue-600 dark:text-blue-400">6&apos;548 Einwohner</div>
          </div>
          <div>
            <div className="font-semibold text-blue-900 dark:text-blue-100">Kleinstes Quartier:</div>
            <div className="text-blue-700 dark:text-blue-300">Littauerberg</div>
            <div className="text-blue-600 dark:text-blue-400">218 Einwohner</div>
          </div>
          <div>
            <div className="font-semibold text-blue-900 dark:text-blue-100">Verhältnis:</div>
            <div className="text-blue-700 dark:text-blue-300">30:1</div>
            <div className="text-blue-600 dark:text-blue-400">Größtes zu Kleinstem</div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
        {[
          { id: 'overview', name: 'Übersicht' },
          { id: 'stadtkreise', name: 'Stadtkreise' },
          { id: 'quartiere', name: 'Alle Quartiere' },
          { id: 'rankings', name: 'Top & Bottom' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeView === tab.id
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeView === 'overview' && renderOverview()}
      {activeView === 'stadtkreise' && renderStadtkreise()}
      {activeView === 'quartiere' && renderQuartiere()}
      {activeView === 'rankings' && renderRankings()}
    </div>
  )
}