export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Swiss Cities Explorer</span>
          <span className="hidden sm:block">•</span>
          <span>Discover Switzerland's municipalities and regions</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="/sources" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Data Sources
          </a>
          
          <div className="text-xs text-gray-500 dark:text-gray-500">
            © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}