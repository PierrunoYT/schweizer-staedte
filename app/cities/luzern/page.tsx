'use client'
import { useState } from 'react'
import Link from 'next/link'

// Import all section components
import OverviewSection from './components/OverviewSection'
import GeographySection from './components/GeographySection'
import DemographicsSection from './components/DemographicsSection'
import EconomySection from './components/EconomySection'
import DistrictsSection from './components/DistrictsSection'
import MunicipalitiesSection from './components/MunicipalitiesSection'
import TourismSection from './components/TourismSection'
import EducationSection from './components/EducationSection'
import EnvironmentSection from './components/EnvironmentSection'

export default function LuzernPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Übersicht', icon: '🏛️' },
    { id: 'demographics', name: 'Demografie', icon: '👥' },
    { id: 'geography', name: 'Geografie', icon: '🌍' },
    { id: 'economy', name: 'Wirtschaft', icon: '💼' },
    { id: 'districts', name: 'Quartiere', icon: '🏘️' },
    { id: 'municipalities', name: 'Umgebung', icon: '🏘️' },
    { id: 'tourism', name: 'Tourismus', icon: '🎯' },
    { id: 'education', name: 'Bildung', icon: '🎓' },
    { id: 'environment', name: 'Umwelt & Politik', icon: '🌱' }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />
      case 'geography':
        return <GeographySection />
      case 'demographics':
        return <DemographicsSection />
      case 'economy':
        return <EconomySection />
      case 'districts':
        return <DistrictsSection />
      case 'municipalities':
        return <MunicipalitiesSection />
      case 'tourism':
        return <TourismSection />
      case 'education':
        return <EducationSection />
      case 'environment':
        return <EnvironmentSection />
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