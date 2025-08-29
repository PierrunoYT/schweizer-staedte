interface QuarterToggleProps {
  showQuarters: boolean
  onToggle: (show: boolean) => void
}

export default function QuarterToggle({ showQuarters, onToggle }: QuarterToggleProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
      <button
        type="button"
        onClick={() => onToggle(!showQuarters)}
        className={`px-3 py-2 text-xs font-medium rounded-md transition-colors ${
          showQuarters 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title={showQuarters ? 'Hide quarters' : 'Show quarters'}
      >
        {showQuarters ? 'Hide Quarters' : 'Show Quarters'}
      </button>
    </div>
  )
}