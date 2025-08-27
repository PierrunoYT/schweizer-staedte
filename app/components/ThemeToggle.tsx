type MapTheme = 'neutral' | 'light' | 'dark'

interface ThemeToggleProps {
  currentTheme: MapTheme
  onThemeChange: (theme: MapTheme) => void
}

export default function ThemeToggle({ currentTheme, onThemeChange }: ThemeToggleProps) {
  const themes: { value: MapTheme; label: string }[] = [
    { value: 'neutral', label: 'Neutral' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ]

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
      <div className="flex space-x-1">
        {themes.map((theme) => (
          <button
            key={theme.value}
            type="button"
            onClick={() => onThemeChange(theme.value)}
            className={`px-3 py-2 text-xs font-medium rounded-md transition-colors ${
              currentTheme === theme.value 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title={`Switch to ${theme.label} theme`}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  )
}