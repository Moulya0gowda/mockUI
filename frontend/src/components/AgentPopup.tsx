import settingsIcon from '../assets/icons/settings-icon.png'

type Agent = {
  name: string
  desc: string
}

type Props = {
  agents: Agent[]
  onSelect: (name: string) => void
  onClose: () => void
  onSettings: (name: string) => void
}

export default function AgentPopup({ agents, onSelect, onClose, onSettings }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">All Agents</h2>

        {/* Agent List */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
        {agents.map((agent) => (
  <div
    key={agent.name}
    className="flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
  >
    {/* Left side */}
    <div
      className="cursor-pointer"
      onClick={() => onSelect(agent.name)}
    >
      <div className="font-medium">{agent.name}</div>
      <div className="text-xs text-gray-600">{agent.desc}</div>
    </div>

    {/* Right side */}
    <img
      src={settingsIcon}
      alt="Settings"
      className="w-5 h-5 cursor-pointer ml-4"
      onClick={() => onSettings(agent.name)}
    />
  </div>
))}
        </div>
      </div>
    </div>
  )
}