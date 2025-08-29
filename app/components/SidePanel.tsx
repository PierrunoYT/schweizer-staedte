import { ReactNode } from 'react'

interface SidePanelProps {
  children: ReactNode
}

export default function SidePanel({ children }: SidePanelProps) {
  return (
    <div className="w-80 bg-white shadow-lg p-6 border-r border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Map Controls</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}