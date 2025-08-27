import { ReactNode } from 'react'

interface SidePanelProps {
  children: ReactNode
}

export default function SidePanel({ children }: SidePanelProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-white shadow-lg p-6 z-10 border-r border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Map Controls</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}