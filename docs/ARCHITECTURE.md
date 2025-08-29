# Swiss Cities Map - Architecture Documentation

## Overview

The Swiss Cities Map application is a Next.js-based interactive web application that presents comprehensive statistical data about Swiss cities, municipalities, and cantons, with a primary focus on Luzern and its administrative region.

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Next.js Frontend                           │
├─────────────────────────────────────────────────────────────────┤
│  Interactive Map (Leaflet) │  Administrative Pages             │
│  ├─ LuzernMarker           │  ├─ Cities (/cities/luzern)       │
│  ├─ MapControlsDropdown    │  ├─ Municipalities (/munic...)    │
│  └─ Quarter Overlays       │  └─ Cantons (/cantons/luzern)     │
├─────────────────────────────────────────────────────────────────┤
│                    Modular Component System                     │
│  ├─ Overview Section       ├─ Geography Section               │
│  ├─ Demographics Section   ├─ Economy Section                 │
│  ├─ Districts Section      ├─ Education Section               │
│  ├─ Tourism Section        └─ Environment Section             │
├─────────────────────────────────────────────────────────────────┤
│                     Data Layer                                 │
│  └─ Swiss Statistical Data (/data/cantons/luzern)             │
└─────────────────────────────────────────────────────────────────┘
```

## Core Design Principles

### 1. **Swiss Administrative Hierarchy**
The application follows the official Swiss administrative structure:
- **Confederation** (Switzerland)
- **Canton** (Luzern)
- **Municipality/City** (Luzern, Kriens, Emmen, Horw, Ebikon)

### 2. **Modular Component Architecture**
- **Single Responsibility**: Each component handles one specific concern
- **Reusability**: Components can be used across different administrative levels
- **Maintainability**: Easy to update, test, and extend individual sections

### 3. **Data-Driven Design**
- **Centralized Data Source**: All statistics from `/cities/luzern/data/index.ts`
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Real Data**: Based on official 2024 Swiss federal statistics

## Technical Stack

### Frontend Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with enhanced features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS v4** - Latest utility-first styling with dark mode support

### Map & Geospatial
- **React-Leaflet 5.0.0** - React wrapper for Leaflet maps
- **Leaflet 1.9.4** - Core mapping library
- **GeoJSON** - Quarter/district boundaries (quartiers.geojson)
- **Swiss Coordinate Systems**: WGS84 and CH1903/LV95

### State Management
- **React Context** - Theme management (light/dark modes)
- **Local State** - Component-level state with React hooks
- **LocalStorage** - Theme persistence

## Directory Structure

```
schweizer-staedte/
├── app/                          # Next.js App Router
│   │       ├── OverviewSection.tsx
│   │       ├── GeographySection.tsx
│   │       ├── DemographicsSection.tsx
│   │       ├── EconomySection.tsx
│   │       ├── DistrictsSection.tsx
│   │       ├── MunicipalitiesSection.tsx
│   │       ├── TourismSection.tsx
│   │       ├── EducationSection.tsx
│   │       └── EnvironmentSection.tsx
│   ├── municipalities/          # Municipality pages
│   │   ├── kriens/page.tsx
│   │   ├── emmen/page.tsx
│   │   ├── horw/page.tsx
│   │   └── ebikon/page.tsx
│   ├── cantons/luzern/         # Canton overview
│   ├── components/             # Shared components
│   │   ├── Map.tsx             # Main React-Leaflet map
│   │   ├── MapContainer.tsx    # Map container wrapper
│   │   ├── LuzernMarker.tsx    # Interactive city marker
│   │   ├── MapControlsDropdown.tsx # Bottom-left controls
│   │   ├── Header.tsx          # Application header
│   │   ├── HeaderThemeToggle.tsx # Header theme control
│   │   ├── SidePanel.tsx       # Map sidebar with statistics
│   │   ├── ThemeToggle.tsx     # Standalone theme toggle
│   │   ├── QuarterToggle.tsx   # Quarter overlay control
│   │   └── ZoomControls.tsx    # Legacy zoom controls (unused)
│   ├── cities/luzern/          # City-level pages  
│   │   ├── page.tsx            # Main controller (127 lines)
│   │   ├── data/               # City-specific statistical data
│   │   │   └── index.ts        # Swiss statistical data
│   │   └── components/         # Modular section components
│   ├── context/                # React Context providers
│   │   └── ThemeContext.tsx    # Theme management (light/dark)
│   └── services/               # Legacy services (unused)
│       ├── geocoding.ts        # Legacy geocoding
│       └── googleGeocoding.ts  # Legacy Google API
├── docs/                       # Documentation
├── public/                     # Static assets
└── config files               # Next.js, TypeScript, etc.
```

## Component Architecture

### Page-Level Components
- **Main Controller**: Minimal logic, delegates to sections
- **Section Components**: Self-contained, focused responsibilities
- **Shared Components**: Reusable across different pages

### Data Flow
```
Data Source → TypeScript Interfaces → Components → UI
```

### Component Lifecycle
1. **Data Import**: Static data from centralized source
2. **Type Checking**: TypeScript ensures data structure
3. **Render**: Component displays formatted data
4. **Interaction**: User interactions trigger state changes

## Key Technical Decisions

### 1. **React-Leaflet Integration**
**Problem**: Need interactive maps with React component lifecycle  
**Solution**: React-Leaflet 5.0.0 wrapper with Leaflet 1.9.4 core  
**Benefits**: React component patterns, ref forwarding, theme integration

### 2. **Modular Component Split**
**Problem**: Single 600+ line component was hard to maintain  
**Solution**: Split into 9 focused components (50-150 lines each)  
**Benefits**: Better maintainability, team collaboration, testing

### 3. **Static Data Approach**
**Problem**: Need reliable Swiss statistical data  
**Solution**: Curated static data from official sources  
**Benefits**: Fast loading, offline capability, data quality control

### 4. **Swiss-Specific Design**
**Problem**: Generic mapping solutions don't fit Swiss context  
**Solution**: Custom administrative hierarchy and coordinate systems  
**Benefits**: Accurate representation of Swiss government structure

## Performance Considerations

### Current Optimizations
- **Static Generation**: Pre-rendered pages for fast loading
- **Component Separation**: Smaller bundles, better caching
- **Efficient Rendering**: React keys and memo where appropriate

### Future Optimizations
- **Lazy Loading**: Load sections on demand
- **Image Optimization**: Next.js Image component
- **Bundle Splitting**: Per-route code splitting

## Security Considerations

- **No External APIs**: Reduces attack surface
- **Static Data**: No user-generated content risks
- **Type Safety**: Prevents runtime errors
- **CSP Headers**: Content Security Policy (future)

## Scalability Strategy

### Adding New Cantons
1. Create data structure in `/data/cantons/[new-canton]/`
2. Add canton page in `/cantons/[new-canton]/`
3. Create municipality pages for major cities
4. Add interactive markers to main map

### Adding New Features
1. Create new section component
2. Add to section navigation
3. Update data interfaces if needed
4. Test across all administrative levels

## Development Workflow

### Component Development
1. **Design** - Plan component responsibility
2. **Data** - Define TypeScript interfaces
3. **Implementation** - Create focused component
4. **Integration** - Add to parent controller
5. **Testing** - Manual and automated testing

### Quality Assurance
- **TypeScript** - Compile-time type checking
- **ESLint** - Code quality and consistency
- **Manual Testing** - Cross-browser and device testing
- **Code Review** - Team collaboration and knowledge sharing

## Monitoring & Maintenance

### Key Metrics
- **Page Load Speed** - Core Web Vitals
- **Component Size** - Bundle analysis
- **User Interactions** - Analytics (future)

### Maintenance Tasks
- **Data Updates** - Annual Swiss statistics refresh
- **Security Updates** - Dependency management
- **Performance Monitoring** - Regular performance audits

## Future Architecture Evolution

### Phase 1: Enhanced Interactivity
- Multiple municipality markers
- Advanced filtering and search
- Real-time data integration

### Phase 2: Multi-Canton Expansion  
- Zurich, Bern, Geneva cantons
- Shared component templates
- Unified navigation system

### Phase 3: Advanced Features
- Historical data visualization
- Multilingual support
- Mobile-first redesign
- API integration with official Swiss data sources

---

**Last Updated**: August 2025  
**Architecture Version**: 2.0 (Post-Modular Refactor)