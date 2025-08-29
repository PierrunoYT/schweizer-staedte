export interface City {
  id: string
  name: string
  canton: string
  coordinates: [number, number] // [latitude, longitude]
  population: number
  postalCode?: string
  district?: string
}

export const swissCities: City[] = [
  // Major Swiss Cities
  {
    id: 'zurich',
    name: 'Zürich',
    canton: 'Zürich',
    coordinates: [47.3769, 8.5417],
    population: 421878,
    postalCode: '8001',
  },
  {
    id: 'geneva',
    name: 'Genève',
    canton: 'Genève',
    coordinates: [46.2044, 6.1432],
    population: 201818,
    postalCode: '1200',
  },
  {
    id: 'basel',
    name: 'Basel',
    canton: 'Basel-Stadt',
    coordinates: [47.5596, 7.5886],
    population: 177595,
    postalCode: '4001',
  },
  {
    id: 'lausanne',
    name: 'Lausanne',
    canton: 'Vaud',
    coordinates: [46.5197, 6.6323],
    population: 139111,
    postalCode: '1000',
  },
  {
    id: 'bern',
    name: 'Bern',
    canton: 'Bern',
    coordinates: [46.9481, 7.4474],
    population: 133115,
    postalCode: '3000',
  },
  {
    id: 'winterthur',
    name: 'Winterthur',
    canton: 'Zürich',
    coordinates: [47.5034, 8.7240],
    population: 114220,
    postalCode: '8400',
  },
  {
    id: 'lucerne',
    name: 'Luzern',
    canton: 'Luzern',
    coordinates: [47.0502, 8.3093],
    population: 82257,
    postalCode: '6000',
  },
  {
    id: 'st-gallen',
    name: 'St. Gallen',
    canton: 'St. Gallen',
    coordinates: [47.4239, 9.3767],
    population: 75833,
    postalCode: '9000',
  },
  {
    id: 'lugano',
    name: 'Lugano',
    canton: 'Ticino',
    coordinates: [46.0037, 8.9511],
    population: 62315,
    postalCode: '6900',
  },
  {
    id: 'biel',
    name: 'Biel/Bienne',
    canton: 'Bern',
    coordinates: [47.1368, 7.2444],
    population: 55206,
    postalCode: '2500',
  },
  {
    id: 'thun',
    name: 'Thun',
    canton: 'Bern',
    coordinates: [46.7581, 7.6284],
    population: 43476,
    postalCode: '3600',
  },
  {
    id: 'koniz',
    name: 'Köniz',
    canton: 'Bern',
    coordinates: [46.9246, 7.4127],
    population: 42093,
    postalCode: '3098',
  },
  {
    id: 'la-chaux-de-fonds',
    name: 'La Chaux-de-Fonds',
    canton: 'Neuchâtel',
    coordinates: [47.1057, 6.8256],
    population: 36915,
    postalCode: '2300',
  },
  {
    id: 'schaffhausen',
    name: 'Schaffhausen',
    canton: 'Schaffhausen',
    coordinates: [47.6962, 8.6344],
    population: 36952,
    postalCode: '8200',
  },
  {
    id: 'fribourg',
    name: 'Fribourg',
    canton: 'Fribourg',
    coordinates: [46.8059, 7.1512],
    population: 38039,
    postalCode: '1700',
  },
  {
    id: 'chur',
    name: 'Chur',
    canton: 'Graubünden',
    coordinates: [46.8570, 9.5331],
    population: 36336,
    postalCode: '7000',
  },
  {
    id: 'neuchatel',
    name: 'Neuchâtel',
    canton: 'Neuchâtel',
    coordinates: [47.0012, 6.9320],
    population: 33712,
    postalCode: '2000',
  },
  {
    id: 'uster',
    name: 'Uster',
    canton: 'Zürich',
    coordinates: [47.3468, 8.7208],
    population: 35337,
    postalCode: '8610',
  },
  {
    id: 'sion',
    name: 'Sion',
    canton: 'Valais',
    coordinates: [46.2276, 7.3589],
    population: 34978,
    postalCode: '1950',
  },
  {
    id: 'lancy',
    name: 'Lancy',
    canton: 'Genève',
    coordinates: [46.1907, 6.1096],
    population: 32791,
    postalCode: '1212',
  }
]

export const swissCantons = [
  'Aargau', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'Basel-Landschaft', 
  'Basel-Stadt', 'Bern', 'Fribourg', 'Genève', 'Glarus', 'Graubünden', 
  'Jura', 'Luzern', 'Neuchâtel', 'Nidwalden', 'Obwalden', 'Schaffhausen', 
  'Schwyz', 'Solothurn', 'St. Gallen', 'Thurgau', 'Ticino', 'Uri', 
  'Valais', 'Vaud', 'Zug', 'Zürich'
]

export function searchCities(query: string): City[] {
  if (!query.trim()) return []
  
  const searchTerm = query.toLowerCase().trim()
  
  return swissCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm) ||
    city.canton.toLowerCase().includes(searchTerm) ||
    city.postalCode?.includes(searchTerm) ||
    city.district?.toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    // Prioritize exact name matches
    const aNameMatch = a.name.toLowerCase().startsWith(searchTerm)
    const bNameMatch = b.name.toLowerCase().startsWith(searchTerm)
    
    if (aNameMatch && !bNameMatch) return -1
    if (!aNameMatch && bNameMatch) return 1
    
    // Then sort by population (largest first)
    return b.population - a.population
  })
}

export function searchCantons(query: string): string[] {
  if (!query.trim()) return []
  
  const searchTerm = query.toLowerCase().trim()
  
  return swissCantons.filter(canton =>
    canton.toLowerCase().includes(searchTerm)
  )
}