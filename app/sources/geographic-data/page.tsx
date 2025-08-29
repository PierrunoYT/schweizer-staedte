import Link from 'next/link'

export default function GeographicData() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <Link 
          href="/sources"
          className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Sources
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 dark:from-white dark:via-green-100 dark:to-emerald-100 bg-clip-text text-transparent mb-6">
            Geographic Data
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            GIS systems, topographic maps, boundaries, and coordinate data sources.
          </p>
        </div>

        <div className="grid gap-8">
          {/* GeoData Kanton Luzern */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  GeoData Kanton Luzern
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Official geographic data for municipalities, quarters, and administrative boundaries in the Canton of Lucerne.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Source:</span>
                    <a 
                      href="https://daten.geo.lu.ch/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      daten.geo.lu.ch
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Format:</span>
                    <span className="text-gray-600 dark:text-gray-400">GeoJSON files</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Usage:</span>
                    <span className="text-gray-600 dark:text-gray-400">Geographic boundaries & divisions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geoportal Luzern */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Geoportal Luzern</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Geographic Information System portal for the Canton of Lucerne.
            </p>
            <div className="space-y-2">
              <a href="https://geoportal.lu.ch" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Main Portal</a>
              <a href="https://geoportal.lu.ch/karten" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Maps</a>
              <a href="https://geoportal.lu.ch/3D/geodaten" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• 3D Geographic Data</a>
            </div>
          </div>

          {/* Stadt Luzern Citymap */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stadt Luzern Citymap</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Official city mapping system with detailed municipal boundaries and features.
            </p>
            <div className="space-y-2">
              <a href="https://map.stadtluzern.ch/citymap" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Interactive Citymap</a>
            </div>
          </div>

          {/* Topographic Maps & Cartography */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Topographic Maps & Cartography</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Professional topographic maps, cartographic resources, and geographic references.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Official Maps</h3>
                <a href="https://www.das-landkartenhaus.de/1150-luzern-topographische-karte-schweiz" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [1] Topographic Map Lucerne</a>
                <a href="https://www.das-landkartenhaus.de/102-basel-luzern-topographische-karte-schweiz" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [4] Basel-Lucerne Map</a>
                <a href="https://weberverlag.ch/products/swisstopo-25016-luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [11] Swisstopo Lucerne</a>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Educational Maps</h3>
                <a href="https://diercke.de/content/luzern-und-umgebung-landeskarte-1-50-000-978-3-14-100919-4-11-4-1" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [12] Diercke Lucerne Map</a>
                <a href="https://de-de.topographic-map.com/map-vxmt6/Luzern/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Topographic Map Online</a>
                <a href="https://www.unterrichtsmaterial.ch/arbeitsblatt/174785-geographie-schweiz-kanton-luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [41] Educational Geography Materials</a>
              </div>
            </div>
          </div>

          {/* Coordinate Systems & GPS Data */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Coordinate Systems & GPS Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              GPS coordinates, coordinate conversion tools, and geographic reference systems.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GPS Coordinates</h3>
                <a href="https://www.laengengrad-breitengrad.de/gps-koordinaten-von-luzern" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• GPS Coordinates Lucerne</a>
                <a href="https://www.weltkugel-globus.de/ort/luzern/" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Globe Location Data</a>
                <a href="https://www.gpskoordinaten.de" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• GPS Coordinates Portal</a>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Coordinate Tools</h3>
                <a href="https://coordvert.com/de/koordinaten-umrechnen/place-A0Rqhkrmyw/all" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Coordinate Converter</a>
                <a href="https://www.geoplaner.de" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Geographic Planner</a>
                <a href="https://www.wandersite.ch/geographischer_mittelpunkt.html" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Geographic Center</a>
              </div>
            </div>
          </div>

          {/* Environmental & Water Data */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Environmental & Water Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hydrological data, environmental monitoring, and climate information.
            </p>
            <div className="space-y-2">
              <a href="https://www.hydrodaten.admin.ch/de/seen-und-fluesse/stationen-und-daten/2207" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Federal Hydro Data - Lake Lucerne</a>
              <a href="https://www.timeanddate.de/stadt/naehe?n=1426" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• Location & Time Data</a>
              <a href="https://de.wikipedia.org/wiki/Geographie_der_Schweiz" target="_blank" rel="noopener noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline">• [7] Geography of Switzerland</a>
            </div>
          </div>

          {/* Switzerland Geographic Context */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20 dark:border-gray-700/50">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Switzerland Outline
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  High-quality SVG outline of Switzerland for geographic context and location visualization.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Source:</span>
                    <a 
                      href="https://commons.wikimedia.org/wiki/File:Switzerland.svg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      Wikimedia Commons
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">License:</span>
                    <span className="text-gray-600 dark:text-gray-400">Public Domain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900 dark:text-white">Usage:</span>
                    <span className="text-gray-600 dark:text-gray-400">Context visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}