'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type AppTheme = 'light' | 'dark'

interface ThemeContextType {
  theme: AppTheme
  setTheme: (theme: AppTheme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<AppTheme>('light')
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as AppTheme
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: AppTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const handleSetTheme = (newTheme: AppTheme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('app-theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme: AppTheme = theme === 'light' ? 'dark' : 'light'
    handleSetTheme(newTheme)
  }

  // Prevent hydration mismatch by not rendering context until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'light', setTheme: () => {}, toggleTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}