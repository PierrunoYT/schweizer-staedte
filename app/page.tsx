import MapContainer from './components/MapContainer'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MapContainer />
    </div>
  )
}
