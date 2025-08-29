'use client'

interface QuarterNamesToggleProps {
  showQuarterNames: boolean
  onToggle: (show: boolean) => void
}

export default function QuarterNamesToggle({ showQuarterNames, onToggle }: QuarterNamesToggleProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
      <button
        onClick={() => onToggle(!showQuarterNames)}
        className={`w-full px-3 py-2 text-xs font-medium rounded-md transition-colors ${
          showQuarterNames 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {showQuarterNames ? 'Hide Names' : 'Show Names'}
      </button>
    </div>
  )
}