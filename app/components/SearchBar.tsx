'use client'
import { useState, useRef, useEffect } from 'react'
import { searchCities, searchCantons, City } from '../data/cities'
import { searchAddresses, SearchResult } from '../services/geocoding'

interface SearchBarProps {
  placeholder?: string
  onCitySelect?: (city: City) => void
  onAddressSelect?: (address: SearchResult) => void
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({ 
  placeholder = "Search cities, streets, addresses...", 
  onCitySelect,
  onAddressSelect,
  onSearch,
  className = ""
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<City[]>([])
  const [cantonResults, setCantonResults] = useState<string[]>([])
  const [addressResults, setAddressResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    if (query.trim().length >= 2) {
      setIsSearching(true)
      
      // Search local cities and cantons
      const cities = searchCities(query)
      const cantons = searchCantons(query)
      
      // Search addresses via Nominatim (for streets, POIs, etc.)
      const addresses = await searchAddresses(query)
      
      setSearchResults(cities.slice(0, 5)) // Limit to 5 cities
      setCantonResults(cantons.slice(0, 3)) // Limit to 3 cantons  
      setAddressResults(addresses.slice(0, 6)) // Limit to 6 addresses
      setShowResults(true)
      setIsSearching(false)
    } else {
      setSearchResults([])
      setCantonResults([])
      setAddressResults([])
      setShowResults(false)
      setIsSearching(false)
    }
  }

  const handleCityClick = (city: City) => {
    setSearchQuery(city.name)
    setShowResults(false)
    if (onCitySelect) {
      onCitySelect(city)
    }
  }

  const handleCantonClick = (canton: string) => {
    setSearchQuery(canton)
    setShowResults(false)
    if (onSearch) {
      onSearch(canton)
    }
  }

  const handleAddressClick = (address: SearchResult) => {
    setSearchQuery(address.name)
    setShowResults(false)
    if (onAddressSelect) {
      onAddressSelect(address)
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full px-5 py-4 pr-14 text-base border border-gray-300 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white shadow-sm transition-all duration-200 placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Search Results Dropdown */}
      {showResults && (searchResults.length > 0 || cantonResults.length > 0 || addressResults.length > 0 || isSearching) && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto mt-2">
          {isSearching && (
            <div className="px-4 py-4 text-center text-sm text-gray-600">
              <div className="animate-spin inline-block w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full mr-3"></div>
              <span className="font-medium">Searching Switzerland...</span>
            </div>
          )}

          {!isSearching && cantonResults.length > 0 && (
            <div>
              <div className="px-4 py-3 text-xs font-bold text-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 uppercase tracking-wider">
                🏛️ Cantons
              </div>
              {cantonResults.map((canton) => (
                <button
                  key={canton}
                  onClick={() => handleCantonClick(canton)}
                  className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-blue-900">{canton}</div>
                  <div className="text-sm text-gray-600 group-hover:text-blue-700">Canton • Regional View</div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div>
              <div className="px-4 py-3 text-xs font-bold text-gray-700 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 uppercase tracking-wider">
                🏙️ Major Cities
              </div>
              {searchResults.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCityClick(city)}
                  className="w-full px-4 py-3 text-left hover:bg-green-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-green-900">{city.name}</div>
                  <div className="text-sm text-gray-600 group-hover:text-green-700">
                    {city.canton} • {city.population.toLocaleString()} inhabitants
                  </div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && addressResults.length > 0 && (
            <div>
              <div className="px-4 py-3 text-xs font-bold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 uppercase tracking-wider">
                📍 Addresses & Places
              </div>
              {addressResults.map((address) => (
                <button
                  key={address.id}
                  onClick={() => handleAddressClick(address)}
                  className="w-full px-4 py-3 text-left hover:bg-purple-50 border-b border-gray-100 last:border-b-0 transition-colors duration-150 group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-purple-900">{address.name}</div>
                  <div className="text-sm text-gray-600 group-hover:text-purple-700 truncate flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-600"></span>
                    {address.description}
                  </div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && searchResults.length === 0 && cantonResults.length === 0 && addressResults.length === 0 && (
            <div className="px-4 py-6 text-center">
              <div className="text-gray-400 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-sm font-medium text-gray-500">No results found</div>
              <div className="text-xs text-gray-400 mt-1">Try searching for cities, streets, or landmarks</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}