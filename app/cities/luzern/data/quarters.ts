export interface Quarter {
  id: string
  number: number
  name: string
  population: number
  stadtkreis: {
    id: string
    name: string
  }
  stadtteil: string
}

export interface Stadtkreis {
  id: string
  name: string
  quartiers: string[]
  totalPopulation: number
}

export interface Stadtteil {
  name: string
  description: string
  quartiers: number[]
  totalPopulation: number
}

export const quartiers: Quarter[] = [
  { id: "01", number: 1, name: "Oberseeburg / Rebstock", population: 2664, stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "02", number: 2, name: "Würzenbach / Schädrüti", population: 4746, stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "03", number: 3, name: "Bellerive / Schlössli", population: 1166, stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "04", number: 4, name: "Halde / Lützelmatt", population: 2695, stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "05", number: 5, name: "Wesemlin / Dreilinden", population: 5161, stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "06", number: 6, name: "Maihof / Rotsee", population: 3855, stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "07", number: 7, name: "Hochwacht / Zürichstrasse", population: 2334, stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "08", number: 8, name: "Kantonsspital / Ibach", population: 723, stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "09", number: 9, name: "Bramberg / St. Karli", population: 2420, stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "10", number: 10, name: "Altstadt / Wey", population: 2232, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "11", number: 11, name: "Bruch / Gibraltar", population: 4024, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "12", number: 12, name: "Hirschmatt / Kleinstadt", population: 3122, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "13", number: 13, name: "Bahnhof / Werft", population: 418, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "14", number: 14, name: "Neustadt / Voltastrasse", population: 6548, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "15", number: 15, name: "Unterlachen / Tribschen", population: 4345, stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "16", number: 16, name: "Ober- / Untergütsch", population: 2248, stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "17", number: 17, name: "Obergrund / Allmend", population: 3364, stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "18", number: 18, name: "Sternmatt / Hochrüti", population: 4897, stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "19", number: 19, name: "Langensand / Matthof", population: 6141, stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "20", number: 20, name: "Basel- / Bernstrasse", population: 4043, stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "21", number: 21, name: "Udelboden", population: 3158, stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "22", number: 22, name: "Reussbühl", population: 3248, stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "23", number: 23, name: "Ruopigen", population: 3781, stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "24", number: 24, name: "Matt", population: 4144, stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "25", number: 25, name: "Littau Dorf", population: 2017, stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "26", number: 26, name: "An der Emme", population: 2099, stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "27", number: 27, name: "Littauerberg", population: 218, stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" }
]

export const stadtkreise: Stadtkreis[] = [
  {
    id: "A",
    name: "Rechte Seeseite",
    quartiers: ["Oberseeburg / Rebstock", "Würzenbach / Schädrüti", "Bellerive / Schlössli", "Halde / Lützelmatt"],
    totalPopulation: 11271
  },
  {
    id: "B", 
    name: "Rechtes Reussufer",
    quartiers: ["Wesemlin / Dreilinden", "Maihof / Rotsee", "Hochwacht / Zürichstrasse", "Kantonsspital / Ibach", "Bramberg / St. Karli"],
    totalPopulation: 14493
  },
  {
    id: "C",
    name: "Innenstadt", 
    quartiers: ["Altstadt / Wey", "Bruch / Gibraltar", "Hirschmatt / Kleinstadt", "Bahnhof / Werft", "Neustadt / Voltastrasse", "Unterlachen / Tribschen"],
    totalPopulation: 20689
  },
  {
    id: "D",
    name: "Linke Seeseite",
    quartiers: ["Ober- / Untergütsch", "Obergrund / Allmend", "Sternmatt / Hochrüti", "Langensand / Matthof"],
    totalPopulation: 16650
  },
  {
    id: "E",
    name: "Linkes Reussufer", 
    quartiers: ["Basel- / Bernstrasse", "Udelboden", "Reussbühl", "Ruopigen"],
    totalPopulation: 14230
  },
  {
    id: "F",
    name: "Littau",
    quartiers: ["Matt", "Littau Dorf", "An der Emme", "Littauerberg"],
    totalPopulation: 8478
  }
]

export const stadtteile: Stadtteil[] = [
  {
    name: "Luzern",
    description: "Hauptstadtteil mit 23 Quartieren in 5 Stadtkreisen",
    quartiers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    totalPopulation: 77756
  },
  {
    name: "Littau", 
    description: "Stadtteil seit der Fusion 2010 mit 4 Quartieren im Stadtkreis F",
    quartiers: [24, 25, 26, 27],
    totalPopulation: 8478
  }
]

// Administrative structure overview
export const administrativeStructure = {
  description: "Die Stadt Luzern ist seit 2023 auf intrakommunaler Ebene in 2 Stadtteile, 6 Stadtkreise, 27 Quartiere und 191 Kleinquartiere eingeteilt.",
  totalArea: "29,1 km²",
  totalPopulation: 86234,
  populationDataYear: "2024",
  lastUpdate: "2023",
  created: "In Zusammenarbeit mit LUSTAT Statistik Luzern",
  totalQuarters: 27,
  totalCityCircles: 6,
  totalCityDistricts: 2,
  totalSmallQuarters: 191
}

// Population rankings
export const populationRankings = {
  topQuarters: [
    { rank: 1, quarter: "Neustadt / Voltastrasse", number: 14, population: 6548 },
    { rank: 2, quarter: "Langensand / Matthof", number: 19, population: 6141 },
    { rank: 3, quarter: "Wesemlin / Dreilinden", number: 5, population: 5161 },
    { rank: 4, quarter: "Sternmatt / Hochrüti", number: 18, population: 4897 },
    { rank: 5, quarter: "Würzenbach / Schädrüti", number: 2, population: 4746 }
  ],
  bottomQuarters: [
    { rank: 1, quarter: "Littauerberg", number: 27, population: 218 },
    { rank: 2, quarter: "Bahnhof / Werft", number: 13, population: 418 },
    { rank: 3, quarter: "Kantonsspital / Ibach", number: 8, population: 723 },
    { rank: 4, quarter: "Bellerive / Schlössli", number: 3, population: 1166 },
    { rank: 5, quarter: "Littau Dorf", number: 25, population: 2017 }
  ]
}