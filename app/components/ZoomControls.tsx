'use client'
import { Plus, Minus } from 'lucide-react'

interface ZoomControlsProps {
  onZoomIn: () => void
  onZoomOut: () => void
}

export default function ZoomControls({ onZoomIn, onZoomOut }: ZoomControlsProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <button
        onClick={onZoomIn}
        className="block w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors border-b border-gray-200"
        title="Zoom in"
        aria-label="Zoom in"
      >
        <Plus size={16} className="text-gray-700" />
      </button>
      <button
        onClick={onZoomOut}
        className="block w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
        title="Zoom out"
        aria-label="Zoom out"
      >
        <Minus size={16} className="text-gray-700" />
      </button>
    </div>
  )
}