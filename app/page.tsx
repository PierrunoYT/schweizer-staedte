import MapContainer from './components/MapContainer'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <MapContainer />
    </div>
  )
}
