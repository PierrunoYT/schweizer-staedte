export interface Quarter {
  id: string
  number: number
  name: string
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
}

export interface Stadtteil {
  name: string
  description: string
  quartiers: number[]
}

export const quartiers: Quarter[] = [
  { id: "01", number: 1, name: "Oberseeburg / Rebstock", stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "02", number: 2, name: "Würzenbach / Schädrüti", stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "03", number: 3, name: "Bellerive / Schlössli", stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "04", number: 4, name: "Halde / Lützelmatt", stadtkreis: { id: "A", name: "Rechte Seeseite" }, stadtteil: "Luzern" },
  { id: "05", number: 5, name: "Wesemlin / Dreilinden", stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "06", number: 6, name: "Maihof / Rotsee", stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "07", number: 7, name: "Hochwacht / Zürichstrasse", stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "08", number: 8, name: "Kantonsspital / Ibach", stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "09", number: 9, name: "Bramberg / St. Karli", stadtkreis: { id: "B", name: "Rechtes Reussufer" }, stadtteil: "Luzern" },
  { id: "10", number: 10, name: "Altstadt / Wey", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "11", number: 11, name: "Bruch / Gibraltar", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "12", number: 12, name: "Hirschmatt / Kleinstadt", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "13", number: 13, name: "Bahnhof / Werft", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "14", number: 14, name: "Neustadt / Voltastrasse", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "15", number: 15, name: "Unterlachen / Tribschen", stadtkreis: { id: "C", name: "Innenstadt" }, stadtteil: "Luzern" },
  { id: "16", number: 16, name: "Ober- / Untergütsch", stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "17", number: 17, name: "Obergrund / Allmend", stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "18", number: 18, name: "Sternmatt / Hochrüti", stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "19", number: 19, name: "Langensand / Matthof", stadtkreis: { id: "D", name: "Linke Seeseite" }, stadtteil: "Luzern" },
  { id: "20", number: 20, name: "Basel- / Bernstrasse", stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "21", number: 21, name: "Udelboden", stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "22", number: 22, name: "Reussbühl", stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "23", number: 23, name: "Ruopigen", stadtkreis: { id: "E", name: "Linkes Reussufer" }, stadtteil: "Luzern" },
  { id: "24", number: 24, name: "Matt", stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "25", number: 25, name: "Littau Dorf", stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "26", number: 26, name: "An der Emme", stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" },
  { id: "27", number: 27, name: "Littauerberg", stadtkreis: { id: "F", name: "Littau" }, stadtteil: "Littau" }
]

export const stadtkreise: Stadtkreis[] = [
  {
    id: "A",
    name: "Rechte Seeseite",
    quartiers: ["Oberseeburg / Rebstock", "Würzenbach / Schädrüti", "Bellerive / Schlössli", "Halde / Lützelmatt"]
  },
  {
    id: "B", 
    name: "Rechtes Reussufer",
    quartiers: ["Wesemlin / Dreilinden", "Maihof / Rotsee", "Hochwacht / Zürichstrasse", "Kantonsspital / Ibach", "Bramberg / St. Karli"]
  },
  {
    id: "C",
    name: "Innenstadt", 
    quartiers: ["Altstadt / Wey", "Bruch / Gibraltar", "Hirschmatt / Kleinstadt", "Bahnhof / Werft", "Neustadt / Voltastrasse", "Unterlachen / Tribschen"]
  },
  {
    id: "D",
    name: "Linke Seeseite",
    quartiers: ["Ober- / Untergütsch", "Obergrund / Allmend", "Sternmatt / Hochrüti", "Langensand / Matthof"]
  },
  {
    id: "E",
    name: "Linkes Reussufer", 
    quartiers: ["Basel- / Bernstrasse", "Udelboden", "Reussbühl", "Ruopigen"]
  },
  {
    id: "F",
    name: "Littau",
    quartiers: ["Matt", "Littau Dorf", "An der Emme", "Littauerberg"]
  }
]

export const stadtteile: Stadtteil[] = [
  {
    name: "Luzern",
    description: "Hauptstadtteil mit 23 Quartieren in 5 Stadtkreisen",
    quartiers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    name: "Littau", 
    description: "Stadtteil seit der Fusion 2010 mit 4 Quartieren im Stadtkreis F",
    quartiers: [24, 25, 26, 27]
  }
]

// Administrative structure overview
export const administrativeStructure = {
  description: "Die Stadt Luzern ist seit 2023 auf intrakommunaler Ebene in 2 Stadtteile, 6 Stadtkreise, 27 Quartiere und 191 Kleinquartiere eingeteilt.",
  totalArea: "29,1 km²",
  lastUpdate: "2023",
  created: "In Zusammenarbeit mit LUSTAT Statistik Luzern",
  totalQuarters: 27,
  totalCityCircles: 6,
  totalCityDistricts: 2,
  totalSmallQuarters: 191
}