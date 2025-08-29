import { ReactNode } from 'react'

interface SidePanelProps {
  children: ReactNode
  mapControls?: ReactNode
}

export default function SidePanel({ children, mapControls }: SidePanelProps) {
  return (
    <div className="w-80 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl border-r border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-colors duration-200">
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Swiss Cities</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explore Switzerland</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">Search</h3>
          {children}
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Quick Search Tips</h4>
            <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Try "Bahnhofstrasse" for streets</li>
              <li>• Search "ETH Zürich" for landmarks</li>
              <li>• Enter postal codes like "8001"</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Map Controls</h4>
            {mapControls}
          </div>
        </div>
      </div>
    </div>
  )
}