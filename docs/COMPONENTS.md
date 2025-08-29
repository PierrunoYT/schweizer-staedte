# Component Documentation

## Overview

This document provides comprehensive documentation for all components in the Swiss Cities Map application, with special focus on the modular architecture implemented for the Luzern city page.

## Component Architecture

### Modular Section Components

The city page uses a modular architecture where each section is a self-contained component:

```typescript
// Main Controller Pattern
const renderContent = () => {
  switch (activeSection) {
    case 'overview': return <OverviewSection />
    case 'geography': return <GeographySection />
    // ... other sections
  }
}
```

## City Page Components

### OverviewSection.tsx
**Purpose**: Display basic city statistics and introduction  
**Size**: 47 lines  
**Dependencies**: `luzernCity` data  

```typescript
import { luzernCity } from '../../../data/cantons/luzern'

export default function OverviewSection() {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Population, Area, Density, Founded */}
      </div>
      
      {/* About Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {/* City description and canton link */}
      </div>
    </div>
  )
}
```

**Key Features**:
- 4 statistical cards (population, area, density, founded)
- City description with link to canton page
- Responsive grid layout
- Theme-aware styling

### GeographySection.tsx
**Purpose**: Comprehensive geographical and climate data  
**Size**: 93 lines  
**Dependencies**: `luzernCity.stats.geography`

```typescript
export default function GeographySection() {
  return (
    <div className="space-y-6">
      {/* Topography & Climate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Elevation, climate data */}
      </div>
      
      {/* Land Use & Climate Days */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {/* Detailed breakdowns */}
      </div>
    </div>
  )
}
```

**Key Features**:
- Elevation range (419m - 1,127m)
- Climate data (1991-2020 normal period)
- Land use breakdown (settlement, agriculture, forest)
- Annual climate days (frost, ice, summer, hot days)

### DemographicsSection.tsx  
**Purpose**: Population statistics and demographic breakdown  
**Size**: 76 lines  
**Dependencies**: `luzernCity.stats.demographics`

```typescript
export default function DemographicsSection() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Swiss citizens, foreigners, growth */}
      </div>
      
      {/* Detailed Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Population structure, age structure */}
      </div>
      
      {/* Major Nationalities */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {/* Nationality breakdown */}
      </div>
    </div>
  )
}
```

**Key Features**:
- Swiss/foreign population split (62,526 / 23,708)
- Age structure breakdown
- Major nationality percentages
- Population growth metrics

### EconomySection.tsx
**Purpose**: Economic data and business structure  
**Size**: 84 lines  
**Dependencies**: `luzernCity.stats.economy`

```typescript
export default function EconomySection() {
  return (
    <div className="space-y-6">
      {/* Economic Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Companies, employees, exports, growth */}
      </div>
      
      {/* Detailed Economic Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Economic indicators, SME structure */}
      </div>
      
      {/* Economic Sectors */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {/* Sector breakdown */}
      </div>
    </div>
  )
}
```

**Key Features**:
- 30,000 companies (canton-wide)
- 153,771 employees
- SME structure (97.2% SMEs providing 58.6% of jobs)
- Export volume and growth metrics

### EducationSection.tsx
**Purpose**: Educational institutions and transport  
**Size**: 84 lines  
**Dependencies**: `luzernCity.stats.education`

```typescript
export default function EducationSection() {
  return (
    <div className="space-y-6">
      {/* HSLU Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Students, continuing education, departments */}
      </div>
      
      {/* HSLU Departments */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        {/* Department grid */}
      </div>
      
      {/* Education & Transport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Universities, public transport */}
      </div>
    </div>
  )
}
```

**Key Features**:
- HSLU with 8,333 students and 6 departments
- PH Luzern (teacher training)
- Public transport statistics (3 train stations, 12 bus lines, 5 boat connections)

### Other Section Components

#### DistrictsSection.tsx (16 lines)
- Simple grid of city districts/quarters
- Minimal component focusing on district names

#### MunicipalitiesSection.tsx (73 lines)
- Links to surrounding municipalities
- Population and area data for each
- Call-to-action for canton exploration

#### TourismSection.tsx (19 lines)
- Tourist attractions grid
- Simple icon + text layout

#### EnvironmentSection.tsx (77 lines)
- Climate goals and environmental policy
- Political structure (5-member council, 48-member parliament)
- Open Government Data statistics

## Map Components

### Map.tsx
**Purpose**: Main interactive Leaflet map  
**Key Features**:
- Leaflet integration with React
- Quarter overlay toggle
- Theme-aware map tiles
- Marker management

```typescript
interface MapProps {
  quarters?: any[]
  showQuarters: boolean
  theme: 'light' | 'dark' | 'neutral'
}
```

### LuzernMarker.tsx
**Purpose**: Interactive city marker with comprehensive data  
**Key Features**:
- Precise coordinates (47.050545, 8.305468)
- Theme-aware hover tooltip
- Direct navigation to city details
- Both WGS84 and CH1903/LV95 coordinates

```typescript
interface LuzernMarkerProps {
  map: L.Map | null
  coordinates: [number, number]
  label?: string
  showLabel?: boolean
  theme?: 'light' | 'dark' | 'neutral'
}
```

### MapControlsDropdown.tsx
**Purpose**: Map control interface in bottom-left corner  
**Key Features**:
- Theme selection controls
- Quarter toggle functionality
- Smooth animations
- Responsive design

```typescript
interface MapControlsProps {
  onThemeChange: (theme: string) => void
  currentTheme: string
  // ... other props
}
```

## Shared Components

### Header.tsx & HeaderThemeToggle.tsx
- Application header with navigation
- Theme toggle functionality
- Responsive design

### ThemeToggle.tsx
- Standalone theme switching component
- Used in multiple contexts

## Component Design Patterns

### 1. **Data Import Pattern**
```typescript
import { luzernCity } from '../../../data/cantons/luzern'
```
All components import data from centralized source

### 2. **Responsive Grid Pattern**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```
Consistent responsive breakpoints across components

### 3. **Theme-Aware Styling Pattern**
```typescript
className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
```
All components support light/dark themes

### 4. **Card Layout Pattern**
```typescript
<div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
```
Consistent card styling across sections

## Component Testing Strategy

### Unit Testing Approach
Each component should be testable in isolation:

```typescript
// Example test structure
describe('OverviewSection', () => {
  it('displays population correctly', () => {
    render(<OverviewSection />)
    expect(screen.getByText('86,234')).toBeInTheDocument()
  })
  
  it('has link to canton page', () => {
    render(<OverviewSection />)
    expect(screen.getByRole('link', { name: /kanton luzern/i })).toHaveAttribute('href', '/cantons/luzern')
  })
})
```

### Integration Testing
Test component interactions within the main page controller

### Visual Regression Testing
Ensure consistent styling across theme changes

## Performance Considerations

### Component Size Optimization
- Keep components focused and lightweight
- Avoid unnecessary re-renders with React.memo where appropriate
- Use efficient data structures

### Lazy Loading Potential
Components are architected for future lazy loading:

```typescript
const GeographySection = lazy(() => import('./components/GeographySection'))
```

## Styling Guidelines

### Tailwind CSS Classes
- **Cards**: `bg-white dark:bg-gray-800 rounded-lg p-6 border`
- **Statistics**: `text-2xl font-bold text-[color]-900 dark:text-[color]-100`
- **Grids**: `grid grid-cols-1 md:grid-cols-[n] gap-4`

### Color Coding
- **Blue**: Population and general statistics
- **Green**: Area, environmental, growth data
- **Purple**: Density and calculated metrics
- **Orange**: Historical data (founded dates)

## Future Component Development

### Adding New Sections
1. Create new component in `/components/` directory
2. Follow established patterns (data import, responsive grid, theme-aware)
3. Add to main controller's switch statement
4. Update navigation array

### Component Reusability
Consider creating shared component templates for:
- Statistical cards
- Data grids
- Information panels

These can be reused across different administrative levels (city, municipality, canton).

---

**Last Updated**: August 2025  
**Component Architecture**: Modular (Post-Refactor)