import { luzernCity } from '../../../data/cantons/luzern'

export default function EducationSection() {
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
}