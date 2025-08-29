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
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            className="w-80 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
        <div className="absolute top-full left-0 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {isSearching && (
            <div className="px-4 py-3 text-center text-sm text-gray-500">
              <div className="animate-spin inline-block w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full mr-2"></div>
              Searching...
            </div>
          )}

          {!isSearching && cantonResults.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                Cantons
              </div>
              {cantonResults.map((canton) => (
                <button
                  key={canton}
                  onClick={() => handleCantonClick(canton)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-gray-900">{canton}</div>
                  <div className="text-sm text-gray-500">Canton</div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                Major Cities
              </div>
              {searchResults.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCityClick(city)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-gray-900">{city.name}</div>
                  <div className="text-sm text-gray-500">
                    {city.canton} • {city.population.toLocaleString()} inhabitants
                  </div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && addressResults.length > 0 && (
            <div>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50 border-b">
                Addresses & Places
              </div>
              {addressResults.map((address) => (
                <button
                  key={address.id}
                  onClick={() => handleAddressClick(address)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                >
                  <div className="font-medium text-gray-900">{address.name}</div>
                  <div className="text-sm text-gray-500 truncate">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
                    {address.description}
                  </div>
                </button>
              ))}
            </div>
          )}

          {!isSearching && searchResults.length === 0 && cantonResults.length === 0 && addressResults.length === 0 && (
            <div className="px-4 py-3 text-center text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}