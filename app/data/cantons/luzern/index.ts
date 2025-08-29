export interface LuzernStats {
  population: number
  area: number // in km²
  density: number // people per km²
  elevation: number // in meters
  unemployment: number // percentage
  averageIncome: number // in CHF
  housingCost: number // average rent per m² in CHF
  taxRate: number // municipal tax rate percentage
  founded?: number // year founded
  languages: string[] // official languages
  districts: string[] // city districts/quarters
  economicSectors: string[] // main economic activities
  touristAttractions: string[] // notable attractions
  universities: string[] // educational institutions
  publicTransport: {
    trainStations: number
    busLines: number
    boatConnections: number
  }
}

export interface LuzernCity {
  id: string
  name: string
  coordinates: [number, number] // [latitude, longitude]
  postalCode: string
  stats: LuzernStats
}

export const luzernCantonData = {
  id: 'luzern',
  name: 'Luzern',
  abbreviation: 'LU',
  capital: 'Luzern',
  coordinates: [47.0502, 8.3093] as [number, number],
  stats: {
    totalPopulation: 416347,
    area: 1493.4,
    capital: 'Luzern',
    officialLanguages: ['German'],
    municipalities: 80,
    economicCenters: ['Luzern', 'Emmen', 'Kriens', 'Horw'],
    gdpPerCapita: 78500,
    unemploymentRate: 2.4
  }
}

export const luzernCity: LuzernCity = {
  id: 'lucerne',
  name: 'Luzern',
  coordinates: [47.0502, 8.3093],
  postalCode: '6000',
  stats: {
    population: 82257,
    area: 37.4,
    density: 2200,
    elevation: 436,
    unemployment: 2.6,
    averageIncome: 75000,
    housingCost: 18.50,
    taxRate: 20.9,
    founded: 840,
    languages: ['German'],
    districts: [
      'Altstadt',
      'Neustadt', 
      'Hirschmatt-Neustadt',
      'Maihof',
      'Tribschen-Langensand',
      'Littau',
      'Reussbühl'
    ],
    economicSectors: [
      'Tourism',
      'Financial Services',
      'Manufacturing',
      'Transportation',
      'Education',
      'Healthcare'
    ],
    touristAttractions: [
      'Chapel Bridge (Kapellbrücke)',
      'Mount Pilatus',
      'Lake Lucerne',
      'Lion Monument',
      'Swiss Museum of Transport',
      'Lucerne Culture and Convention Centre (KKL)',
      'Musegg Wall',
      'Rosengart Collection'
    ],
    universities: [
      'University of Lucerne',
      'Lucerne University of Applied Sciences and Arts'
    ],
    publicTransport: {
      trainStations: 3,
      busLines: 12,
      boatConnections: 5
    }
  }
}

export const luzernMunicipalities = [
  {
    name: 'Luzern',
    population: 82257,
    area: 37.4,
    type: 'city'
  },
  {
    name: 'Emmen',
    population: 30854,
    area: 20.4,
    type: 'municipality'
  },
  {
    name: 'Kriens',
    population: 27513,
    area: 27.2,
    type: 'municipality'
  },
  {
    name: 'Horw',
    population: 13956,
    area: 10.3,
    type: 'municipality'
  },
  {
    name: 'Ebikon',
    population: 13523,
    area: 13.4,
    type: 'municipality'
  }
]