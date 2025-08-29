# Contributing to Swiss Cities Map

Thank you for your interest in contributing to the Swiss Cities Map project! This guide will help you get started with contributing to our interactive Swiss statistical data visualization application.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contribution Guidelines](#contribution-guidelines)
- [Component Development](#component-development)
- [Data Contributions](#data-contributions)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project follows a professional and inclusive environment. Please be respectful in all interactions, provide constructive feedback, and help maintain a welcoming community for contributors of all backgrounds and experience levels.

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- Basic knowledge of **TypeScript**, **React**, and **Next.js**

### Development Setup

1. **Fork and Clone**
```bash
git clone https://github.com/yourusername/schweizer-staedte.git
cd schweizer-staedte
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

4. **Open Browser**
Navigate to `http://localhost:3000`

## Project Structure

```
schweizer-staedte/
├── app/                          # Next.js App Router
│   ├── cities/luzern/           # City-level pages
│   │   ├── page.tsx             # Main controller
│   │   └── components/          # Modular section components
│   ├── municipalities/          # Municipality pages
│   ├── cantons/                 # Canton pages
│   ├── components/              # Shared components
│   └── data/                    # Statistical data
├── docs/                        # Documentation
├── public/                      # Static assets
└── [config files]              # Next.js, TypeScript, etc.
```

## Contribution Guidelines

### Types of Contributions

1. **Bug Fixes** - Fix issues with existing functionality
2. **Feature Additions** - New sections, components, or capabilities
3. **Data Updates** - Swiss statistical data improvements
4. **Documentation** - Improve or add documentation
5. **Performance** - Optimize loading, rendering, or bundle size
6. **Accessibility** - Improve screen reader support and keyboard navigation

### Before You Start

1. **Check Issues** - Look for existing issues or create a new one
2. **Discuss Large Changes** - For major features, discuss the approach first
3. **Follow Architecture** - Maintain the modular component structure
4. **Swiss Context** - Ensure contributions fit Swiss administrative structure

## Component Development

### Creating New Section Components

Follow the established modular pattern:

```typescript
// Template for new section component
import { luzernCity } from '../../../data/cantons/luzern'

export default function NewSection() {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Responsive card grid */}
      </div>
      
      {/* Content Sections */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Section Title
        </h3>
        {/* Section content */}
      </div>
    </div>
  )
}
```

### Component Requirements

1. **TypeScript** - All components must be written in TypeScript
2. **Responsive Design** - Support mobile, tablet, and desktop
3. **Theme Support** - Include dark mode styling
4. **Data Import** - Use centralized data sources
5. **Accessibility** - Include ARIA labels and semantic HTML

### Adding Components to Pages

1. **Create Component** - In appropriate `/components/` directory
2. **Import in Controller** - Add to main page component
3. **Update Navigation** - Add to sections array
4. **Test Integration** - Ensure smooth navigation and styling

## Data Contributions

### Swiss Statistical Data

Our data follows official Swiss statistical standards:

```typescript
// Data structure example
interface LuzernStats {
  population: number           // Official 2024 data
  area: number                // in km²
  density: number             // people per km²
  demographics: {
    swissPopulation: number
    foreignPopulation: number
    // ...
  }
  // ...
}
```

### Data Source Requirements

1. **Official Sources** - Use Swiss Federal Statistical Office (BFS) data
2. **Attribution** - Include proper source citations
3. **Current Data** - Prefer most recent available statistics
4. **Accuracy** - Verify data accuracy before submission
5. **Consistency** - Follow existing data structure patterns

### Adding New Cantons or Municipalities

1. **Create Data Structure** - Follow existing patterns in `/data/cantons/`
2. **Add Pages** - Create corresponding page structure
3. **Update Navigation** - Add links in parent pages
4. **Add Map Markers** - Create interactive map elements

## Styling Guidelines

### Tailwind CSS Standards

We use Tailwind CSS with consistent patterns:

```typescript
// Standard patterns to follow
const cardClasses = "bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
const statisticClasses = "text-2xl font-bold text-blue-900 dark:text-blue-100"
const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
```

### Color Coding System

- **Blue** - Population and general statistics
- **Green** - Area, environmental, and growth data
- **Purple** - Density and calculated metrics
- **Orange** - Historical data and time-based information

### Theme Support

All components must support light and dark themes:

```typescript
// Always include dark mode variants
className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
```

## Testing

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] **Functionality** - Component works as expected
- [ ] **Responsive Design** - Mobile, tablet, desktop layouts
- [ ] **Theme Support** - Light, dark, and neutral themes
- [ ] **Navigation** - Links work correctly
- [ ] **Data Display** - Statistics show correctly
- [ ] **Cross-browser** - Chrome, Firefox, Safari, Edge

### Automated Testing (Future)

We're planning to add:
- Unit tests for individual components
- Integration tests for page functionality
- Visual regression testing

## Pull Request Process

### 1. Prepare Your Changes

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Clear description of changes"

# Push to your fork
git push origin feature/your-feature-name
```

### 2. Submit Pull Request

1. **Clear Title** - Describe what the PR does
2. **Detailed Description** - Explain changes and reasoning
3. **Screenshots** - Include before/after images for UI changes
4. **Testing** - Describe how you tested the changes
5. **Breaking Changes** - Note any breaking changes

### 3. PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Data update
- [ ] Documentation
- [ ] Performance improvement

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Theme testing

## Screenshots
[Include relevant screenshots]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
```

## Specific Contribution Areas

### High-Priority Contributions

1. **Municipality Markers** - Add interactive markers for Kriens, Emmen, Horw, Ebikon
2. **Other Cantons** - Expand to Zurich, Bern, Geneva
3. **Mobile Optimization** - Improve touch interactions
4. **Performance** - Bundle size optimization
5. **Accessibility** - Screen reader and keyboard navigation

### Medium-Priority Contributions

1. **Data Visualizations** - Charts and graphs for statistics
2. **Historical Data** - Timeline views for population changes
3. **Enhanced Search** - Smart search across all locations
4. **Multilingual Support** - French, Italian, Romansh versions

### Technical Improvements

1. **Testing Infrastructure** - Unit and integration tests
2. **SEO Optimization** - Better meta tags and structured data
3. **Bundle Optimization** - Code splitting and lazy loading
4. **Error Handling** - Graceful error boundaries and fallbacks

## Questions and Support

### Getting Help

1. **Documentation** - Check existing docs in `/docs/`
2. **Issues** - Search existing GitHub issues
3. **Discussions** - Use GitHub Discussions for questions
4. **Code Review** - Ask for feedback on draft PRs

### Communication

- **Clear Communication** - Use descriptive commit messages and PR descriptions
- **Ask Questions** - Don't hesitate to ask for clarification
- **Be Patient** - Allow time for code review and feedback
- **Stay Updated** - Keep your fork synchronized with main branch

## Recognition

Contributors will be recognized in:
- GitHub contributor list
- Project documentation
- Release notes for significant contributions

Thank you for contributing to the Swiss Cities Map project! Your contributions help create a valuable resource for understanding Swiss administrative data and geography.

---

**Last Updated**: August 2025  
**Contributing Guidelines Version**: 1.0