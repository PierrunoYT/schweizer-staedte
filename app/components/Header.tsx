import HeaderThemeToggle from './HeaderThemeToggle'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Swiss Cities
          </h1>
        </div>
        <HeaderThemeToggle />
      </div>
    </header>
  )
}