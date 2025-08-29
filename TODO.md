# Swiss Cities Map - TODO

## Current Issues & Improvements

### API & Performance
- [x] ~~**Google Maps Geocoding API implemented**~~ - Added Google Geocoding with Nominatim fallback:
  - ✅ Google Maps Geocoding API integration (faster, more accurate)
  - ✅ Automatic fallback to Nominatim if Google API fails or no API key
  - ✅ Swiss-focused results with `region=ch` and `country:CH` filtering
  - ✅ Usage tracking to monitor API costs (warns at 80% of free tier)
  - ✅ Environment variable configuration (.env.example provided)
  
**Setup Instructions:**
1. Get Google Maps API key from [Google Cloud Console](https://developers.google.com/maps/documentation/geocoding/get-api-key)
2. Enable Geocoding API in your project
3. Copy `.env.example` to `.env.local` and add your API key
4. Free tier: 10,000 requests/month, then $5.00 per 1,000 requests

**Alternative APIs to consider:**
  - MapBox Geocoding API (good free tier)
  - HERE Geocoding API
  - Swiss-specific APIs for even better local results

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

## Setup Instructions

### Environment Configuration
1. Copy `.env.example` to `.env.local`
2. Add your Google Maps API key (optional - app works without it)
3. Run `npm run dev` to start development server

### Google Maps API Setup (Optional but Recommended)
```bash
# 1. Go to Google Cloud Console
# 2. Create new project or select existing
# 3. Enable "Geocoding API" 
# 4. Create credentials (API Key)
# 5. Restrict API key to your domain
# 6. Add to .env.local:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Benefits of Google API:**
- ⚡ Much faster search responses
- 🎯 More accurate Swiss address results  
- 📍 Better POI and landmark coverage
- 🔄 Graceful fallback to Nominatim if quota exceeded

## Completed Features
- [x] Quarter toggle functionality
- [x] Theme switching (neutral, light, dark)
- [x] Comprehensive search (cities, cantons, addresses)
- [x] Search result markers with color coding
- [x] Move controls to sidebar
- [x] Performance optimizations for search
- [x] Google Maps Geocoding API integration with fallback