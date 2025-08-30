import HeaderThemeToggle from './HeaderThemeToggle'

interface HeaderProps {
  onMenuToggle: () => void
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-200 relative z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img 
            src="/switzerland.svg" 
            alt="Switzerland" 
            className="w-16 h-12 flex-shrink-0 block dark:hidden"
            style={{ objectFit: 'contain' }}
          />
          <img 
            src="/switzerlandwhite.svg" 
            alt="Switzerland" 
            className="w-16 h-12 flex-shrink-0 hidden dark:block"
            style={{ objectFit: 'contain', transform: 'scale(1.8)' }}
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            <span className="hidden sm:inline">Swiss </span>Cities
          </h1>
        </div>
        <HeaderThemeToggle />
      </div>
    </header>
  )
}