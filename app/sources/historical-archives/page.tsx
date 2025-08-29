import Link from 'next/link'

export default function HistoricalArchives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <Link 
          href="/sources"
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sources
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-amber-900 to-orange-900 dark:from-white dark:via-amber-100 dark:to-orange-100 bg-clip-text text-transparent mb-6">
            Historical Archives
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Historical documents, academic sources, and archival materials about Switzerland and Lucerne.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Historical Lexicon of Switzerland */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Historisches Lexikon der Schweiz (HLS)</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive historical encyclopedia providing detailed information about Swiss history, culture, and places.
            </p>
            <div className="space-y-2">
              <a href="https://hls-dhs-dss.ch/de/articles/000624/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Luzern (Stadt)</a>
              <a href="https://hls-dhs-dss.ch/de/articles/000597/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Kanton Luzern</a>
            </div>
          </div>

          {/* State Archives */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Staatsarchiv Luzern</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Official state archives of Canton Lucerne containing historical documents and records.
            </p>
            <div className="space-y-2">
              <a href="https://staatsarchiv.lu.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• State Archives Portal</a>
            </div>
          </div>

          {/* Wikipedia */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Wikipedia</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Collaborative encyclopedia with comprehensive articles about Swiss geography, history, and institutions.
            </p>
            <div className="space-y-2">
              <a href="https://de.wikipedia.org/wiki/Luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Luzern</a>
              <a href="https://de.wikipedia.org/wiki/Kanton_Luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Kanton Luzern</a>
              <a href="https://de.wikipedia.org/wiki/LUSTAT_Statistik_Luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• LUSTAT Statistik Luzern</a>
              <a href="https://de.wikipedia.org/wiki/Hochschule_Luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Hochschule Luzern</a>
              <a href="https://de.wikipedia.org/wiki/Geographie_der_Schweiz" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Geography of Switzerland</a>
            </div>
          </div>

          {/* Academic Institutions */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Institutions</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Educational and research institutions providing academic resources and publications.
            </p>
            <div className="space-y-2">
              <a href="https://www.phlu.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• PH Luzern (University of Teacher Education)</a>
              <a href="https://edudoc.ch/record/238427/files/jbkt_2024_bi.pdf" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• EduDoc Research Publications</a>
              <a href="https://www.unterrichtsmaterial.ch/arbeitsblatt/174785-geographie-schweiz-kanton-luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Educational Materials</a>
            </div>
          </div>

          {/* Additional Historical Sources */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Additional Historical Sources</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Specialized historical and cultural information sources.
            </p>
            <div className="space-y-2">
              <a href="https://stadtführungen-luzern.ch/geschichte-luzern/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• City Tours - History of Lucerne</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}