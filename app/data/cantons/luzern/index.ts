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
  // Enhanced comprehensive data
  geography: {
    location: string // geographic location description
    heightRange: { min: number, max: number } // elevation range in meters
    centerElevation: number // elevation of city center
    landUse: {
      settlement: number // percentage
      agriculture: number // percentage
      forest: number // percentage
      unproductive: number // percentage
    }
    climate: {
      averageTemp: number // °C
      coldestMonth: { month: string, temp: number }
      warmestMonth: { month: string, temp: number }
      frostDays: number
      iceDays: number
      summerDays: number
      hotDays: number
    }
  }
  demographics: {
    swissPopulation: number
    foreignPopulation: number
    foreignerPercentage: number
    populationGrowth: number // percentage
    ageStructure: {
      under20: number // percentage
      between20and64: number // percentage
      over64: number // percentage
    }
    majorNationalities: { country: string, percentage: number }[]
  }
  economy: {
    totalCompanies: number
    smePercentage: number // KMU percentage
    smeJobsPercentage: number // jobs in SMEs
    employees: number
    exportVolume: number // in millions CHF
    newCompaniesLast15Years: number
    newJobsLast15Years: number
    companyGrowthPercentage: number
  }
  education: {
    hsluStudents: number
    hsluWeiterbildung: number
    hsluDepartments: string[]
    phLuzern: boolean
  }
  politics: {
    cityCouncilMembers: number // Stadtrat
    cityParliamentMembers: number // Grosser Stadtrat
    isCantonalCapital: boolean
  }
  environment: {
    netZeroTarget: number // year
    climateGoal: string
    sportClubs: number
  }
  openData: {
    cityDatasets: number
    cantonDatasets: number
    themes: number
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
  coordinates: [47.050545, 8.305468] as [number, number], // Precise city center coordinates
  stats: {
    totalPopulation: 438000, // Updated 2024 data
    area: 1493.4,
    capital: 'Luzern',
    officialLanguages: ['German'],
    municipalities: 80,
    economicCenters: ['Luzern', 'Emmen', 'Kriens', 'Horw'],
    gdpPerCapita: 78500,
    unemploymentRate: 2.4,
    populationGrowth: 1.2, // 2024 growth rate
    foreignerPercentage: 21.5,
    foreignPopulation: 94271,
    ageStructure: {
      under20: 20.3,
      between20and64: 61.0,
      over64: 18.7
    }
  }
}

export const luzernCity: LuzernCity = {
  id: 'lucerne',
  name: 'Luzern',
  coordinates: [47.050545, 8.305468], // Precise city center coordinates
  postalCode: '6000',
  stats: {
    population: 86234, // Updated 2024 official data
    area: 29.11, // Precise area data
    density: 2938, // Updated density
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
    },
    // Enhanced comprehensive data
    geography: {
      location: 'Zentralschweiz, Vierwaldstättersee, zwischen Dietschiberg und Gütsch',
      heightRange: { min: 419, max: 1124 }, // Updated precise range
      centerElevation: 436, // City center elevation
      landUse: {
        settlement: 48.8,
        agriculture: 27.0,
        forest: 22.0,
        unproductive: 2.2
      },
      climate: {
        averageTemp: 10.1,
        coldestMonth: { month: 'Januar', temp: 1.1 },
        warmestMonth: { month: 'Juli', temp: 19.5 },
        frostDays: 78,
        iceDays: 15,
        summerDays: 50,
        hotDays: 9
      }
    },
    demographics: {
      swissPopulation: 62526,
      foreignPopulation: 23708,
      foreignerPercentage: 27.5,
      populationGrowth: 0.8,
      ageStructure: {
        under20: 20.3,
        between20and64: 61.0,
        over64: 18.7
      },
      majorNationalities: [
        { country: 'Deutschland', percentage: 17.1 },
        { country: 'Italien', percentage: 10.1 },
        { country: 'Kosovo', percentage: 8.6 },
        { country: 'Portugal', percentage: 8.5 }
      ]
    },
    economy: {
      totalCompanies: 30000,
      smePercentage: 97.2,
      smeJobsPercentage: 58.6,
      employees: 153771,
      exportVolume: 1207,
      newCompaniesLast15Years: 320,
      newJobsLast15Years: 4000,
      companyGrowthPercentage: 65
    },
    education: {
      hsluStudents: 8333,
      hsluWeiterbildung: 5253,
      hsluDepartments: [
        'Technik & Architektur',
        'Wirtschaft',
        'Design & Kunst',
        'Musik',
        'Soziale Arbeit',
        'Informatik'
      ],
      phLuzern: true
    },
    politics: {
      cityCouncilMembers: 5,
      cityParliamentMembers: 48,
      isCantonalCapital: true
    },
    environment: {
      netZeroTarget: 2050,
      climateGoal: 'Netto null Treibhausgasemissionen bis 2050',
      sportClubs: 200
    },
    openData: {
      cityDatasets: 200,
      cantonDatasets: 500,
      themes: 70
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