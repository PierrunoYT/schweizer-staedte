# SVG Icon Generator Prompts for Swiss Cities Map

## Overview

This document contains prompts for generating SVG icons suitable for the Swiss Cities Map application, specifically focused on Luzern and Swiss geographic/administrative themes.

## General Requirements

**Technical Specifications:**
- Viewbox: `0 0 24 24` (standard)
- Format: Clean, minimalist SVG paths
- Colors: Use `currentColor` for theme compatibility
- Style: Line-based icons (stroke-based preferred)
- Weight: Medium stroke weight (1.5-2px)

## Map & Navigation Icons

### 1. Swiss Map with Boundaries
```
Create an SVG icon showing Switzerland's outline with internal canton boundaries. Include dotted lines for administrative divisions. Style: minimalist outline, 24x24 viewbox, stroke-based design.
```

### 2. Topographic Map with Contour Lines
```
Design an SVG icon representing a topographic map with elevation contour lines and a mountain peak. Include wavy lines suggesting Lake Lucerne. Style: clean line art, geographic theme.
```

### 3. City Districts/Quarters
```
Create an SVG icon showing a city divided into colored quarters/districts, like a pie chart but with organic boundaries. Include 4-6 irregular sections. Style: minimal geometric.
```

### 4. Interactive Map Layers
```
Design an SVG icon showing stacked transparent layers representing different map overlays (municipalities, quarters, boundaries). Style: overlapping rectangles with transparency effect.
```

## Swiss/Luzern Specific Icons

### 5. Chapel Bridge (Kapellbrücke)
```
Create a minimalist SVG icon of Chapel Bridge in Lucerne - a covered wooden bridge with distinctive tower. Include water waves underneath. Style: iconic landmark representation.
```

### 6. Mount Pilatus Silhouette
```
Design an SVG icon showing Mount Pilatus mountain silhouette with distinctive jagged peaks. Include a small city at the base. Style: clean mountain outline.
```

### 7. Lake Lucerne with Mountains
```
Create an SVG icon combining Lake Lucerne (wavy water lines) surrounded by mountain silhouettes. Include a small dot for the city. Style: landscape composition.
```

### 8. Swiss Cross with Map
```
Design an SVG icon featuring the Swiss cross integrated with a map outline or compass rose. Style: patriotic geographic theme.
```

## Administrative & Statistical Icons

### 9. Municipality Boundaries
```
Create an SVG icon showing administrative boundaries - irregular polygons connected like puzzle pieces. Include a small building icon in center. Style: clean geometric lines.
```

### 10. BFS Statistical Regions
```
Design an SVG icon representing statistical data regions - hexagonal or irregular shapes with small chart/graph elements. Style: data visualization theme.
```

### 11. Population Density Grid
```
Create an SVG icon showing a grid with varying density dots or squares, representing population distribution. Style: data visualization with gradient intensity.
```

### 12. Urban Planning Zones
```
Design an SVG icon showing different land use zones - residential (houses), commercial (buildings), industrial (factory), green space (trees). Style: city planning theme.
```

## Interactive Control Icons

### 13. Layer Toggle Switch
```
Create an SVG icon showing an eye with layers behind it, representing show/hide functionality for map layers. Style: interface control element.
```

### 14. Boundary Visibility Toggle
```
Design an SVG icon with dashed lines that can appear solid or transparent, representing boundary visibility toggle. Style: interactive control.
```

### 15. Theme Switcher (Light/Dark)
```
Create an SVG icon combining sun and moon elements for theme switching, with a small map in the center. Style: UI toggle element.
```

### 16. Zoom In/Out Controls
```
Design matching SVG icons for zoom controls - one with plus sign over map area, one with minus sign. Style: map navigation controls.
```

## Data & Information Icons

### 17. Statistical Dashboard
```
Create an SVG icon combining bar chart, pie chart, and map outline elements. Represent data visualization for city statistics. Style: dashboard/analytics theme.
```

### 18. Demographics Chart
```
Design an SVG icon showing population figures - simple human silhouettes of different sizes with chart elements. Style: demographic data visualization.
```

### 19. Economic Sectors
```
Create an SVG icon representing different economic sectors - factory (industry), office building (services), tractor (agriculture). Style: economic overview.
```

### 20. Transportation Network
```
Design an SVG icon showing interconnected transportation - train tracks, bus routes, boat lines on lake. Style: public transport network.
```

## Technical Utilities

### 21. Geocoding/GPS
```
Create an SVG icon combining GPS satellite signals with a map pin location marker. Style: technical location services.
```

### 22. Coordinate System
```
Design an SVG icon showing coordinate grid lines with latitude/longitude markings. Style: surveying/mapping technical.
```

### 23. GeoJSON Data
```
Create an SVG icon representing geographic data - bracket symbols "{}" combined with map outline. Style: developer/technical theme.
```

### 24. API Integration
```
Design an SVG icon showing data flow between server and map - arrows connecting database symbol to map outline. Style: technical integration.
```

## Tourism & Attractions Icons

### 25. Tourist Attractions
```
Create an SVG icon combining camera, mountain, and lake elements representing Luzern tourism. Style: travel/tourism theme.
```

### 26. Cultural Sites
```
Design an SVG icon showing museum/cultural building with Swiss flag element. Style: cultural heritage theme.
```

### 27. Recreational Areas
```
Create an SVG icon combining forest trees, mountain trails, and lake activities. Style: outdoor recreation theme.
```

## Usage Instructions

### Implementation Steps:
1. **Choose Prompt**: Select appropriate prompt based on your needs
2. **Generate SVG**: Use AI image generator with the prompt
3. **Optimize**: Clean up generated SVG code for web use
4. **Integrate**: Add to `/public/` directory
5. **Implement**: Use in components with proper `currentColor` support

### File Naming Convention:
```
map-[description].svg
icon-[function].svg
luzern-[landmark].svg
swiss-[element].svg
```

### Example Usage:
```tsx
// In React component
<svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600">
  {/* Generated SVG paths */}
</svg>
```

## Quality Checklist

- [ ] **Scalable**: Works at different sizes (16px to 64px)
- [ ] **Theme Compatible**: Uses `currentColor` for stroke/fill
- [ ] **Minimalist**: Clean, not overly detailed
- [ ] **Consistent**: Matches existing design language
- [ ] **Semantic**: Clearly represents intended concept
- [ ] **Accessible**: Works with screen readers
- [ ] **Optimized**: Minimal file size, clean SVG code

---

**Document Version**: 1.0  
**Last Updated**: August 2025  
**Purpose**: SVG icon generation for Swiss Cities Map application  
**Target**: Luzern city mapping interface