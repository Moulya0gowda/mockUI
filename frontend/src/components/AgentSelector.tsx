import { useState } from 'react'
import AgentSettingsModal from './AgentSettingsModal'
import settingsIcon from '../assets/icons/settings-icon.png'
import AgentPopup from './AgentPopup' // The "More agents" popup (previously ModelPopup)

const agents = [
  { name: 'Claude Research', desc: 'Research-focused reasoning agent' },
  { name: 'Claude Assistant', desc: 'Daily task assistant agent' },
  { name: 'Claude Summarizer', desc: 'Fast text summarization agent' },
  { name: 'Custom RAG Agent', desc: 'Document-based retrieval agent' },
  { name: 'Financial Analysis Bot', desc: 'Finance-specific Claude agent' },
  { name: 'Medical Expert Bot', desc: 'Medical QA and research agent' },
  { name: 'Marketing Brainstormer', desc: 'Creative marketing ideas' },
  { name: 'Code Explainer', desc: 'Explain code snippets' },
  { name: 'Legal Contract Analyzer', desc: 'Analyze contracts and legal docs' },
  { name: 'Abstract Writer', desc: 'Academic abstract generator' },
]

export default function AgentSelector() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState(agents[0].name)
  const [openSettingsFor, setOpenSettingsFor] = useState<string | null>(null)
  const [showMorePopup, setShowMorePopup] = useState(false)

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev)
  }

  const handleAgentSelect = (name: string) => {
    setSelectedAgent(name)
    setShowDropdown(false)
  }

  const handleOpenSettings = (name: string) => {
    setOpenSettingsFor(name)
    setShowDropdown(false)
  }

  const handleCloseSettings = () => {
    setOpenSettingsFor(null)
  }

  return (
    <div className="relative text-sm text-gray-800 font-medium">
      {/* Dropdown Button */}
      <button
        className="flex items-center space-x-1"
        onClick={handleDropdownToggle}
      >
        <span>{selectedAgent}</span>
        <span>▼</span>
      </button>

      {/* Dropdown Content */}
      {showDropdown && (
        <div className="absolute z-10 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-md p-4">
          <h4 className="text-md font-semibold mb-2">Agents</h4>

          {/* Top 2 Agents */}
          {agents.slice(0, 2).map((agent) => (
  <div
    key={agent.name}
    className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100"
  >
    {/* Left-aligned text */}
    <div
      className="cursor-pointer"
      onClick={() => handleAgentSelect(agent.name)}
    >
      <div className="font-medium">{agent.name}</div>
      <div className="text-xs text-gray-500">{agent.desc}</div>
    </div>

    {/* Right-aligned settings icon */}
    <img
      src={settingsIcon}
      alt="Settings"
      className="w-4 h-4 cursor-pointer ml-4"
      onClick={() => handleOpenSettings(agent.name)}
    />
  </div>
))}

          {/* More Agents Link */}
          <div
            onClick={() => {
              setShowDropdown(false)
              setTimeout(() => setShowMorePopup(true), 100) // ← Important trick!!
            }}
            className="mt-3 text-sm text-blue-600 underline cursor-pointer"
          >
            More agents →
          </div>
        </div>
      )}

      {/* More Agents Popup */}
      {showMorePopup && (
        <AgentPopup
          agents={agents.slice(2)}
          onSelect={(name) => {
            handleAgentSelect(name)
            setShowMorePopup(false)
          }}
          onClose={() => setShowMorePopup(false)}
          onSettings={(name) => {
            handleOpenSettings(name)
            setShowMorePopup(false)
          }}
        />
      )}

      {/* Settings Modal */}
      {openSettingsFor && (
        <AgentSettingsModal
          isOpen={true}
          onClose={handleCloseSettings}
          agentName={openSettingsFor}
        />
      )}
    </div>
  )
}