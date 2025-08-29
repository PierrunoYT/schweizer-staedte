# Swiss Cities Map - TODO

## Current Issues & Improvements

### API & Performance
- [ ] **Consider switching geocoding API** - Current Nominatim API can be slow, explore alternatives:
  - Google Maps Geocoding API (paid but faster)
  - MapBox Geocoding API (good free tier)
  - HERE Geocoding API
  - Swiss-specific APIs for better local results

### UI/UX Improvements
- [ ] Make pinpoint markers more Google Maps-like (classic red pin style)
- [ ] Add loading states for slow API responses
- [ ] Improve mobile responsiveness
- [ ] Add keyboard navigation for search results

### Features
- [ ] Add search history/recent searches
- [ ] Implement search suggestions/autocomplete
- [ ] Add ability to clear/remove markers
- [ ] Support for multiple markers on map

### Technical Debt
- [ ] Optimize bundle size
- [ ] Add error boundaries
- [ ] Improve TypeScript types
- [ ] Add unit tests for components

### Performance
- [x] ~~Add debouncing to search (300ms)~~
- [x] ~~Implement request cancellation~~
- [x] ~~Add result caching~~
- [ ] Consider lazy loading for heavy components

## Completed Features
- [x] Quarter toggle functionality
- [x] Theme switching (neutral, light, dark)
- [x] Comprehensive search (cities, cantons, addresses)
- [x] Search result markers with color coding
- [x] Move controls to sidebar
- [x] Performance optimizations for search