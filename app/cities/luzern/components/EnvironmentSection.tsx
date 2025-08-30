import { luzernCity } from '../data'

export default function EnvironmentSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
}