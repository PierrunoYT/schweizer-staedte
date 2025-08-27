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
    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-3">Map Theme</h3>
      <div className="space-y-2">
        {themes.map((theme) => (
          <button
            key={theme.value}
            type="button"
            onClick={() => onThemeChange(theme.value)}
            className={`w-full px-4 py-3 text-sm font-medium rounded-lg border transition-colors text-left ${
              currentTheme === theme.value 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100'
            }`}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  )
}