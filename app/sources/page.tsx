import Link from 'next/link'

export default function Sources() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Data Sources & Attribution
        </h1>

        {/* Official Statistics */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Official Statistics
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">LUSTAT Statistik Luzern</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://www.lustat.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Portal</a></li>
                <li>• <a href="https://www.lustat.ch/analysen/bevoelkerung/2023/wohnbevoelkerung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Population Statistics</a></li>
                <li>• <a href="https://www.lustat.ch/analysen?fachbereich=153" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Analyses</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/wirtschaft-und-arbeit/kmu-anteil" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SME Statistics</a></li>
                <li>• <a href="https://www.lustat.ch/analysen/bevoelkerung/2023/altersstruktur-der-bevoelkerung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Age Structure</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-kanton-luzern/bevoelkerung/auslaenderanteil" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Foreign Population</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/bevoelkerung/bevoelkerungsszenario" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Population Scenarios</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/bevoelkerung/bevoelkerungsentwicklung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Population Development</a></li>
                <li>• <a href="https://www.lustat.ch/services/informationen-fuer-erhebungsstellen/bildungsstatistik-luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Education Statistics</a></li>
                <li>• <a href="https://www.lustat.ch/services/lexikon/raumgliederungen/stadtkreise-und-quartiere" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">City Districts & Quarters</a></li>
                <li>• <a href="https://www.lustat.ch/analysen/querschnittsthemen/regionale-disparitaeten-2019/demografie" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Regional Demographic Disparities</a></li>
                <li>• <a href="https://www.lustat.ch/services/lexikon/raumgliederungen/gemeindetypologie" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Municipal Typology</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-stadt-luzern/raum-und-umwelt/ueberbaute-flaeche-pro-kopf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Built Area per Capita</a></li>
                <li>• <a href="https://www.lustat.ch/monitoring/kennzahlen-kanton-luzern/raum-und-umwelt/ueberbaute-flaeche" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Canton Built Area</a></li>
                <li>• <a href="https://www.lustat.ch/services/lexikon/definitionen?id=1006" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Definitions</a></li>
                <li>• <a href="https://lustat.ch/analysen/raum-umwelt/2015/arealstatistik" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Areal Statistics</a></li>
                <li>• <a href="https://www.lustat.ch/analysen/querschnittsthemen/regionale-disparitaeten-2020/raumwirtschaftliche-disparitaeten/bodennutzung-und-siedlungsentwicklung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spatial Economic Disparities</a></li>
                <li>• <a href="https://www.lustat.ch/files/lustat/analysen/statistikportal/statistikportal_2008.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Statistical Portal</a></li>
                <li>• <a href="https://newsletter.lu.ch/files/SK/Mitteilungen%202018/03_Maerz/20180308_MM_Siedlungsflaeche_lustatnews_2018_03_08b.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Settlement Area News</a></li>
                <li>• <a href="https://www.lustat.ch/services/informationen-fuer-erhebungsstellen/spitex-statistik" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Spitex Statistics</a></li>
                <li>• <a href="https://www.lustat.ch/services/lexikon/raumgliederungen/institutionelle-gliederung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Institutional Spatial Structure</a></li>
                <li>• <a href="https://www.lustat.ch/files_ftp/daten/gd/1061/w012_008t_gd1061_qu_d_2019.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Quarter Data 2019</a></li>
                <li>• <a href="https://www.lustat.ch/files/lustat/analysen/focus/lustatfocus_02.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Focus Regional Analysis</a></li>
                <li>• <a href="https://www.lustat.ch/files_ftp/daten/gd/1061/w012_008t_gd1061_qu_d_2024.xlsx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Quarter Data 2024 Excel</a></li>
                <li>• <a href="https://www.lustat.ch/files/lustat/analysen/jahrbuch/2024/jbkt_2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT Yearbook 2024</a></li>
                <li>• <a href="https://www.lustat.ch/files/lustat/analysen/news/2024/lustatnews_2024_08_22.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUSTAT News 2024</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Federal & Municipal Sources</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bundesamt für Statistik</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/nachhaltige-entwicklung/cercle-indicateurs/staedte/partner/luzern.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Sustainability</a></li>
                <li>• <a href="https://www.bfs.admin.ch/asset/de/3262708" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Assets</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfsstatic/dam/assets/345204/master" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Statistical Data</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfsstatic/dam/assets/177856/master" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Municipal Statistics</a></li>
                <li>• <a href="https://dam-api.bfs.admin.ch/hub/api/dam/assets/30486999/master" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Population Statistics API</a></li>
                <li>• <a href="https://www.atlas.bfs.admin.ch/maps/122.76/map/mapIdOnly/26313_de.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Statistical Atlas</a></li>
                <li>• <a href="https://www.are.admin.ch/are/de/home/raumentwicklung-und-raumplanung/grundlagen-und-daten/raumbeobachtung/siedlung/siedlungsflaechen.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ARE Settlement Areas</a></li>
                <li>• <a href="https://www.are.admin.ch/dam/are/it/dokumente/raumplanung/publikationen/trends_der_siedlungsflaechenentwicklunginderschweiz.pdf.download.pdf/trends_der_siedlungsflaechenentwicklunginderschweiz.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ARE Settlement Development Trends</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch/identifikatoren-gemeinde.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Municipality Identifiers</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfs/de/home/grundlagen/agvch.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Municipality Registry</a></li>
                <li>• <a href="https://www.bfs.admin.ch/bfsstatic/dam/assets/17884688/master" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Municipality Data</a></li>
                <li>• <a href="https://www.agvchapp.bfs.admin.ch/de/communes/query" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BFS Municipality Query</a></li>
                <li>• <a href="https://www.stadtluzern.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern</a></li>
                <li>• <a href="https://www.stadtluzern.ch/opengovernmentdata" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Open Government Data</a></li>
                <li>• <a href="https://www.stadtluzern.ch/politikverwaltung" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Politics & Administration</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/3642" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Services</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_rte/information/1291177" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Information</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_docn/2612188/BA_10_vom_1._April_2020.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Building Regulations</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_doc/351483" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Documents</a></li>
                <li>• <a href="https://map.stadtluzern.ch/citymap/?l=e20bc422d0fc4f71b237f705c179fef3" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern City Map</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_docn/5063326/Beilage_1_Statistische_Beobachtungen_und_Analysen.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Statistical Analysis</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/3529" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Population Services</a></li>
                <li>• <a href="https://www.stadtluzern.ch/index.php/_rte/information/2540332" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Population Information</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_docn/3189556/BA_20_vom_9._Juni_2021.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Building Report 2021</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_docn/1690160/REK-Broschure-2018_StadtLuzern_reduziert.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Development Concept</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_docn/4585477/Antwort_auf_die_Interpellation_230.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Interpellation Answer</a></li>
                <li>• <a href="https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/dienstabteilungenbereiche/10523" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Department Structure</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/14420" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Service Information</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/3779" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern City Planning</a></li>
                <li>• <a href="https://www.stadtluzern.ch/projekte/weitereprojekte/8213" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Urban Projects</a></li>
                <li>• <a href="https://poi.stadtluzern.ch/portal/apps/storymaps/stories/986fe0eb461144958e192f8a0cfb301f" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Story Maps</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/459" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Environmental Services</a></li>
                <li>• <a href="https://opendata.swiss" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">opendata.swiss</a></li>
                <li>• <a href="https://staedteverband.ch/882/de/mehr-wald-und-landwirtschaftsboden-als-siedlungsflache-in-den-stadten-statistik-der-schweizer-stadte-2022-zum-thema-bodennutzung?share=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Cities Association Land Use</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Geographic Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Geographic Data
          </h2>
          

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">GIS & Mapping</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://daten.geo.lu.ch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GeoData Kanton Luzern</a></li>
                <li>• <a href="https://geoportal.lu.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geoportal Luzern</a></li>
                <li>• <a href="https://geoportal.lu.ch/karten" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geoportal Maps</a></li>
                <li>• <a href="https://geoportal.lu.ch/Karten/Hilfe" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geoportal Help</a></li>
                <li>• <a href="https://geoportal.lu.ch/3D/geodaten" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">3D Geographic Data</a></li>
                <li>• <a href="https://www.geo.lu.ch/meta?metauid=GRZSDTKR_DS&version=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geographic Metadata</a></li>
                <li>• <a href="https://map.stadtluzern.ch/citymap" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern Citymap</a></li>
                <li>• <a href="https://commons.wikimedia.org/wiki/File:Switzerland.svg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikimedia Commons</a></li>
                <li>• <a href="https://www.laengengrad-breitengrad.de/gps-koordinaten-von-luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GPS Coordinates Lucerne</a></li>
                <li>• <a href="https://www.weltkugel-globus.de/ort/luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geographic Location Lucerne</a></li>
                <li>• <a href="https://www.gpskoordinaten.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GPS Coordinates</a></li>
                <li>• <a href="https://coordvert.com/de/koordinaten-umrechnen/place-A0Rqhkrmyw/all" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Coordinate Conversion</a></li>
                <li>• <a href="https://www.geoplaner.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geographic Planner</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/einzbaum_ds_v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Lucerne Geographic Products</a></li>
                <li>• <a href="https://www.46north.ch/projekte/kantonshoehepunkte" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Canton Peak Points</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/grzgemlu_ds_v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Municipal Boundaries Dataset</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/grzsdtxx_col_v2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">City Districts Collection v2</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/grzsdtxx_col_v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">City Districts Collection v1</a></li>
                <li>• <a href="https://www.geo.lu.ch/meta?metauid=GRZSDTXX_COL" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geo Metadata City Districts</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/gdgbkate_ds_v2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geographic Categories Dataset</a></li>
                <li>• <a href="https://daten.geo.lu.ch/produkt/gemtypox_ds_v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Municipality Typology Dataset</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Topographic Maps</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://www.das-landkartenhaus.de/1150-luzern-topographische-karte-schweiz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Topographic Map Lucerne</a></li>
                <li>• <a href="https://www.das-landkartenhaus.de/102-basel-luzern-topographische-karte-schweiz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Basel-Lucerne Map</a></li>
                <li>• <a href="https://weberverlag.ch/products/swisstopo-25016-luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swisstopo Lucerne</a></li>
                <li>• <a href="https://diercke.de/content/luzern-und-umgebung-landeskarte-1-50-000-978-3-14-100919-4-11-4-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Diercke Map</a></li>
                <li>• <a href="https://www.hydrodaten.admin.ch/de/seen-und-fluesse/stationen-und-daten/2207" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Federal Hydro Data</a></li>
                <li>• <a href="https://www.wandersite.ch/geographischer_mittelpunkt.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geographic Center Switzerland</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Schweizer_Landeskoordinaten" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Coordinate System</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Mittelpunkt_der_Schweiz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Center of Switzerland</a></li>
                <li>• <a href="https://www.myswitzerland.com/de-ch/erlebnisse/der-mittelpunkt-der-schweiz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">MySwitzerland Center</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Vierwaldstättersee" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Lake Lucerne</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Gemeinden_des_Kantons_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Municipalities of Canton Lucerne</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Wahlkreis_Luzern-Land" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Electoral District Lucerne-Land</a></li>
                <li>• <a href="https://de-de.topographic-map.com/map-vxmt6/Luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Topographic Map Lucerne</a></li>
                <li>• <a href="https://de-de.topographic-map.com/place-hdrgp/Luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Topographic Place Lucerne</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Natural Features */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Natural Features - Luzern
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Lakes, Rivers & Geography</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://mein-lernen.at/schweiz-ueberblick/schweiz-kanton-luzern-steckbrief/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kanton Luzern Steckbrief</a></li>
                <li>• <a href="https://www.luzern.com/de/poi/vierwaldstaettersee" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - Vierwaldstättersee</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Vierwaldst%C3%A4ttersee" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Vierwaldstättersee</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Luzern</a></li>
                <li>• <a href="https://www.luzern.com/de/stadt/sehenswuerdigkeiten/see-berge" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - See & Berge</a></li>
                <li>• <a href="https://schweizerfluss.ch/reuss/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Schweizerfluss.ch - Reuss</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Reuss_(Fluss)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Reuss (Fluss)</a></li>
                <li>• <a href="https://uwe.lu.ch/themen/gewaesser/seen_und_fliessgewaesser/reuss" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">UWE Luzern - Reuss</a></li>
                <li>• <a href="https://schweizerfluss.ch/gemeinde/luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Schweizerfluss.ch - Gemeinde Luzern</a></li>
                <li>• <a href="https://uwe.lu.ch/themen/gewaesser/seen_und_fliessgewaesser/vierwaldstaettersee" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">UWE Luzern - Vierwaldstättersee</a></li>
                <li>• <a href="https://www.alpenpaesse-wasserscheiden.at/schweiz/rhein-gebiet/reuss-gebiet-flussverlauf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Alpenpässe - Reuss Gebiet</a></li>
                <li>• <a href="https://hls-dhs-dss.ch/de/articles/008771/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">HLS - Historisches Lexikon</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Wissenbach_(Reuss)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Wissenbach</a></li>
                <li>• <a href="https://schweizerfluss.ch/kanton/luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Schweizerfluss.ch - Kanton Luzern</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Mountains, Hills & Recreation</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://de.wikipedia.org/wiki/Exklave_B%C3%BCrgenstock" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Exklave Bürgenstock</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Sonnenberg_(Kriens)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Sonnenberg (Kriens)</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Dietschiberg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Dietschiberg</a></li>
                <li>• <a href="https://hikeanddine.com/de/sonnenberg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Hike and Dine - Sonnenberg</a></li>
                <li>• <a href="https://www.luzern.com/de/tour/vom-guetsch-ueber-den-sonnenberg-nach-kriens" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - Gütsch Tour</a></li>
                <li>• <a href="https://www.luzern.com/de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - Startseite</a></li>
                <li>• <a href="https://www.luzern.com/de/highlights/hopping" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - Highlights</a></li>
                <li>• <a href="https://www.stadtluzern.ch/dienstleistungeninformation/27" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern - Dienstleistungen</a></li>
                <li>• <a href="https://www.switzerland-highlights.com/de/ausflugsberge-rund-um-luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Switzerland Highlights - Ausflugsberge</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Pilatus_(Bergmassiv)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia - Pilatus</a></li>
                <li>• <a href="https://maps.luzern.com/mobile/de/tour/wanderung/vom-guetsch-ueber-den-sonnenberg-nach-kriens/24896587/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Maps Luzern - Gütsch Wanderung</a></li>
                <li>• <a href="https://www.myswisstrek.ch/zentralschweiz/berge--gipfel/index.php" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">MySwissTrek - Berge & Gipfel</a></li>
                <li>• <a href="https://www.luzern.com/de/erlebnisregion/ausfluege/ab-auf-den-berg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern.com - Ab auf den Berg</a></li>
                <li>• <a href="https://www.prorigi.ch/berg/geographie/geographie-details" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ProRigi - Geographie Details</a></li>
                <li>• <a href="https://switzerlanding.com/de/berge-nahe-luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Switzerlanding - Berge nahe Luzern</a></li>
                <li>• <a href="https://www.nw.ch/schaufensterarchiv/5641" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Nidwalden - Schaufensterarchiv</a></li>
                <li>• <a href="https://www.outdooractive.com/mobile/de/berggipfel/luzern-vierwaldstaettersee/berggipfel-rund-um-luzern-vierwaldstaettersee/275174615/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">OutdoorActive - Berggipfel</a></li>
                <li>• <a href="https://www.stadtluzern.ch/_doc/351483" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Stadt Luzern - Dokument</a></li>
                <li>• <a href="https://www.zentralplus.ch/gesellschaft/exklave-buergenstock-ein-luzerner-kuriosum-am-fusse-des-luxusresorts-1884487/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Zentralplus - Exklave Bürgenstock</a></li>
                <li>• <a href="https://www.luzerner-wanderwege.ch/de/wandervorschlaege/2829/Rundwanderung-uber-den-Sonneberg" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzerner Wanderwege - Sonnenberg</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Business & Economic Data */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Business & Economic Data
          </h2>
          <ul className="space-y-1 text-sm">
            <li>• <a href="https://www.luzern-business.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern Business</a></li>
            <li>• <a href="https://www.luzern-business.ch/pdf/downloads/Publikation_Eine%20starke%20Wirtschaft.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Strong Economy Publication</a></li>
            <li>• <a href="https://www.luzern-business.ch/de/blog/fachkraeftemangel-als-groesstes-risiko-6481" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Skills Shortage Analysis</a></li>
            <li>• <a href="https://www.luzern-business.ch/de/warum-luzern/gut-zu-wissen/nachhaltigkeit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Sustainability Report</a></li>
            <li>• <a href="https://www.luzern-business.ch/de/news/kanton-luzern-richtet-koordinationsstelle-fuer-oeffentlich-nutzbare-verwaltungsdaten-ein-12553" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Open Data Coordination</a></li>
            <li>• <a href="https://www.luzern-business.ch/de/news/schweizer-broker-joint-venture-mit-chinesischer-beteiligung-2480" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Broker Joint Venture News</a></li>
            <li>• <a href="https://www.luzernplus.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern Plus</a></li>
            <li>• <a href="https://rawi.lu.ch/-/media/RAWI/Dokumente/Downloads/Wirtschaftsentwicklung/Regionsprofile.pdf?rev=d36eeecc680641dc8787cc306fdef391" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">RAWI Regional Profiles</a></li>
          </ul>
        </section>

        {/* Historical & Academic Sources */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Historical & Academic Sources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Archives & History</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://hls-dhs-dss.ch/de/articles/000624/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">HLS - Luzern</a></li>
                <li>• <a href="https://staatsarchiv.lu.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Staatsarchiv Luzern</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Luzern</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Kanton_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Kanton</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/LUSTAT_Statistik_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia LUSTAT</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Hochschule_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia University</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Geographie_der_Schweiz" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Geography of Switzerland</a></li>
                <li>• <a href="https://de.wikivoyage.org/wiki/Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikivoyage Luzern</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Bahnhof_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Lucerne Station</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Zytturm_(Luzern)" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Zytturm</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Wahlkreis_Luzern-Stadt" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Electoral District</a></li>
                <li>• <a href="https://www.wikiwand.com/de/articles/Kanton_Luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikiwand Canton Lucerne</a></li>
                <li>• <a href="https://de.wikipedia.org/wiki/Gemeindenummer" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Wikipedia Municipality Numbers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Academic Institutions</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://www.phlu.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">PH Luzern</a></li>
                <li>• <a href="https://edudoc.ch/record/238427/files/jbkt_2024_bi.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">EduDoc Research</a></li>
                <li>• <a href="https://www.unterrichtsmaterial.ch/arbeitsblatt/174785-geographie-schweiz-kanton-luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Educational Materials</a></li>
                <li>• <a href="https://www.berufsberatung.ch/dyn/show/5045" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Career Counseling</a></li>
                <li>• <a href="https://www.zentralschweiz.sia.ch/sites/zch.sia.ch/files/Handbuch_Stadtmodell.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SIA Central Switzerland Handbook</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Sources */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Additional Sources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">External Statistics</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://de.statista.com/statistik/daten/studie/745441/umfrage/bevoelkerungsentwicklung-im-kanton-luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Statista Population</a></li>
                <li>• <a href="https://de.statista.com/statistik/daten/studie/293759/umfrage/auslaenderanteil-in-der-schweiz-nach-kantonen/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Statista Foreign Pop</a></li>
                <li>• <a href="https://datacommons.org/place/nuts/CH061?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Data Commons</a></li>
                <li>• <a href="https://www.swiss-finest.de/kanton/luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Finest Lucerne</a></li>
                <li>• <a href="https://www.kuessnacht.ch/bezirk/herzlich-willkommen/kuessnacht.html/113" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Küssnacht Canton Info</a></li>
                <li>• <a href="https://schweizerkantone.ch/luzern-staat/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Cantons Lucerne</a></li>
                <li>• <a href="https://www.schweizer-regionen.ch/bfs/1061" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Regions BFS</a></li>
                <li>• <a href="https://ugeo.urbistat.com/AdminStat/de/ch/demografia/dati-sintesi/wahlkreis-luzern-stadt/311/3" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Urbistat Electoral District</a></li>
                <li>• <a href="https://ugeo.urbistat.com/AdminStat/de/ch/demografia/dati-sintesi/luzern/3/2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Urbistat Lucerne Demographics</a></li>
                <li>• <a href="https://www.schweizer-regionen.ch/index?cmsuche=BFS+1061&seite=2" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Regions BFS Search</a></li>
                <li>• <a href="https://spitex-statistik-luzern.ch/dokumentation" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spitex Statistics Lucerne</a></li>
                <li>• <a href="https://migration.lu.ch/Kontakt/Zahlen_und_Fakten" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Migration Statistics Canton Lucerne</a></li>
                <li>• <a href="https://www.zg.ch/behoerden/gesundheitsdirektion/statistikfachstelle/fachstelle/open-government-data-1/downloads/ogd-strategie" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">OGD Strategy Canton Zug</a></li>
                <li>• <a href="https://www.citypopulation.de/de/switzerland/luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">CityPopulation Lucerne Statistics</a></li>
                <li>• <a href="https://www.zentralplus.ch/wirtschaft/so-wohnt-es-sich-in-den-luzerner-stadtteilen-682577/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Zentralplus District Living Report</a></li>
                <li>• <a href="https://www.zentralplus.ch/gesellschaft/so-wappnet-sich-die-stadt-luzern-fuer-100000-einwohner-837227/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Zentralplus 100k Residents Preparation</a></li>
                <li>• <a href="https://www.zentralplus.ch/gesellschaft/der-kanton-luzern-waechst-2024-um-5200-personen-2798686/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Zentralplus Canton Growth 2024</a></li>
                <li>• <a href="https://de.statista.com/statistik/daten/studie/743833/umfrage/bevoelkerung-des-kantons-luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Statista Canton Population</a></li>
                <li>• <a href="https://www.wuerzenbach.ch/clubdesk/w_home/fileservlet?id=1003084&s=djEt-nQlPP9-M18MBia8Z6ORhNggwvC7yWH_eqZZiDlxXCE%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Würzenbach District Document</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Recreation & Culture</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://gruezi.lu.ch/kanton_luzern/freizeit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Grüezi Recreation</a></li>
                <li>• <a href="https://gruezi.lu.ch/kanton_luzern/kurzportrait" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Grüezi Short Portrait</a></li>
                <li>• <a href="https://www.freizeit-luzern.ch" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Recreation Luzern</a></li>
                <li>• <a href="https://dialogluzern.ch/assemblies/KUSsport" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Dialog Sport</a></li>
                <li>• <a href="https://www.luzern.com/de/informieren/planung/anreise-mobilitaet/reisebusverkehr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern Tourism Transport</a></li>
                <li>• <a href="https://www.umingo.de/schweiz/lucerne/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Lucerne Travel Guide</a></li>
                <li>• <a href="https://www.timeanddate.de/stadt/naehe?n=1426" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Time and Date Lucerne</a></li>
                <li>• <a href="https://www.reisen-und-tipps.de/Laender/Schweiz/Staedte/Luzern/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Travel Tips Lucerne</a></li>
                <li>• <a href="https://hikeanddine.com/de/sonnenberg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Hike and Dine Sonnenberg</a></li>
                <li>• <a href="https://www.luzern.com/de/highlights/hopping/kleinstadt/luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Luzern Tourism Highlights</a></li>
                <li>• <a href="https://www.gruppenhaus.ch/de/luzern" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Group House Lucerne</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Politics & Environment</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://sp-luzern.ch/themen/sicherheit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SP Luzern Security</a></li>
                <li>• <a href="https://gruene-luzern.ch/wahlprogramm/fuer-den-konsequenten-schutz-von-klima-und-umwelt" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Green Environment</a></li>
                <li>• <a href="https://www.luga.ch/de/p/stadt-luzern-umweltschutz.137087" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LUGA Environment</a></li>
                <li>• <a href="https://support.google.com/maps/answer/18539?hl=de&co=GENIE.Platform%3DiOS" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Maps Support</a></li>
                <li>• <a href="https://uwe.lu.ch/themen/Bodenschutz/Bodenkarte" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Canton Lucerne Soil Protection</a></li>
                <li>• <a href="https://www.vogelwarte.ch/modx/de/atlas/entwicklung/siedlungsraum" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Swiss Ornithological Institute Settlement</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Attribution */}
        <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Attribution
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            This application uses publicly available data from official Swiss sources in accordance with their respective terms and licenses. 
            All data is used for educational and informational purposes, providing accurate information about Swiss cities and cantons.
          </p>
        </section>
      </div>
    </div>
  )
}