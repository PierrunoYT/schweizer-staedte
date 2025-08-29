import Link from 'next/link'

export default function OfficialStatistics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <Link 
          href="/sources"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sources
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-6">
            Official Statistics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Government and institutional statistical data sources from Switzerland.
          </p>
        </div>

        <div className="grid gap-8">
          {/* LUSTAT */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">LUSTAT Statistik Luzern</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Official statistical office of the Canton of Lucerne providing comprehensive demographic, economic, and social data.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Core Statistics</h3>
                <a href="https://www.lustat.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [53] Main Portal</a>
                <a href="https://www.lustat.ch/analysen/bevoelkerung/2023/wohnbevoelkerung" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [2] Population Statistics</a>
                <a href="https://www.lustat.ch/analysen?fachbereich=153" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [5] LUSTAT Analyses</a>
                <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/wirtschaft-und-arbeit/kmu-anteil" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [9] SME Share</a>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Specialized Reports</h3>
                <a href="https://www.lustat.ch/analysen/bevoelkerung/2023/altersstruktur-der-bevoelkerung" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [25] Age Structure</a>
                <a href="https://www.lustat.ch/monitoring/kennzahlen-kanton-luzern/bevoelkerung/auslaenderanteil" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [37] Foreign Population</a>
                <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/bevoelkerung/bevoelkerungsszenario" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [48] Population Scenarios</a>
                <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/bevoelkerung/bevoelkerungsentwicklung" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [50] Population Development</a>
              </div>
            </div>
          </div>

          {/* BFS */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bundesamt für Statistik (BFS)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Federal Statistical Office providing national statistics and data for Switzerland.
            </p>
            <div className="space-y-2">
              <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Main Portal</a>
              <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/nachhaltige-entwicklung/cercle-indicateurs/staedte/partner/luzern.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [22] Sustainable Development Indicators</a>
              <a href="https://www.bfs.admin.ch/asset/de/3262708" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [46] BFS Statistical Assets</a>
            </div>
          </div>

          {/* Stadt Luzern */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stadt Luzern</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Municipal government data and official city statistics.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Administration</h3>
                <a href="https://www.stadtluzern.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Official Website</a>
                <a href="https://www.stadtluzern.ch/opengovernmentdata" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [29] Open Government Data</a>
                <a href="https://www.stadtluzern.ch/politikverwaltung" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [18] Politics & Administration</a>
                <a href="https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/dienstabteilungenbereiche/8215" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [21] Departments</a>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Services & Data</h3>
                <a href="https://www.stadtluzern.ch/dienstleistungeninformation/3524" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [20] Services Information</a>
                <a href="https://www.stadtluzern.ch/dienstleistungeninformation/3522" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [24] Information Services</a>
                <a href="https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/dienstabteilungenbereiche/7627" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [30] Administrative Areas</a>
                <a href="https://www.stadtluzern.ch/_doc/5252752" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [13] Official Documents</a>
              </div>
            </div>
          </div>

          {/* opendata.swiss */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">opendata.swiss</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Central portal for open government data in Switzerland.
            </p>
            <div className="space-y-2">
              <a href="https://opendata.swiss" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Open Data Portal</a>
            </div>
          </div>

          {/* Business & Economic Data */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business & Economic Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Economic development, business statistics, and employment data.
            </p>
            <div className="space-y-2">
              <a href="https://www.luzern-business.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Luzern Business Portal</a>
              <a href="https://www.luzern-business.ch/pdf/downloads/Publikation_Eine%20starke%20Wirtschaft.pdf" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [3] Strong Economy Publication</a>
              <a href="https://www.luzern-business.ch/de/blog/fachkraeftemangel-als-groesstes-risiko-6481" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [6] Skills Shortage Analysis</a>
              <a href="https://www.luzern-business.ch/de/warum-luzern/gut-zu-wissen/nachhaltigkeit" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [14] Sustainability Report</a>
              <a href="https://www.luzern-business.ch/de/news/kanton-luzern-richtet-koordinationsstelle-fuer-oeffentlich-nutzbare-verwaltungsdaten-ein-12553" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [26] Open Data Coordination</a>
            </div>
          </div>

          {/* Additional Statistical Sources */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Statistical Sources</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Specialized statistical data from various institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">External Statistics</h3>
                <a href="https://de.statista.com/statistik/daten/studie/745441/umfrage/bevoelkerungsentwicklung-im-kanton-luzern/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [8] Statista Population Development</a>
                <a href="https://de.statista.com/statistik/daten/studie/293759/umfrage/auslaenderanteil-in-der-schweiz-nach-kantonen/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [42] Statista Foreign Population</a>
                <a href="https://datacommons.org/place/nuts/CH061?hl=de" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [51] Data Commons</a>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Specialized Services</h3>
                <a href="https://spitex-statistik-luzern.ch/dokumentation" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [43] Spitex Statistics</a>
                <a href="https://migration.lu.ch/Kontakt/Zahlen_und_Fakten" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [16] Migration Statistics</a>
                <a href="https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/fachstelle/open-government-data-1/downloads/ogd-strategie" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [32] OGD Strategy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}