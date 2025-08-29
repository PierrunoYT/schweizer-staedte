interface MunicipalityToggleProps {
  showMunicipalities: boolean
  onToggle: (show: boolean) => void
}

export default function MunicipalityToggle({ showMunicipalities, onToggle }: MunicipalityToggleProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
      <button
        type="button"
        onClick={() => onToggle(!showMunicipalities)}
        className={`w-full px-3 py-2 text-xs font-medium rounded-md transition-colors ${
          showMunicipalities 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        title={showMunicipalities ? 'Hide municipalities' : 'Show municipalities'}
      >
        {showMunicipalities ? 'Hide Boundaries' : 'Show Boundaries'}
      </button>
    </div>
  )
}