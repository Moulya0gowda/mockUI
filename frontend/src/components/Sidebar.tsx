type Props = {
  isOpen: boolean
  onNewChat: () => void
  toggleSidebar: () => void
  onHomeClick: () => void
}

export default function Sidebar({ isOpen, onNewChat, toggleSidebar, onHomeClick }: Props) {
  return (
    <div className={`transition-all duration-300 h-full bg-[#f7f6f3] ${isOpen ? 'w-64' : 'w-16'} shadow-md`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <button onClick={toggleSidebar} className="text-2xl">☰</button>
          {isOpen && (
            <h1 className="text-xl font-serif cursor-pointer" onClick={onHomeClick}>
              Claude
            </h1>
          )}
        </div>

        <button
          onClick={onNewChat}
          className="bg-[#d5825e] hover:bg-[#c66b47] text-white rounded-full mx-4 my-2 py-2"
        >
          {isOpen ? '+ New chat' : '+'}
        </button>

        {isOpen && (
          <div className="mt-4 px-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Recents</h2>
            <ul className="text-sm space-y-2">
              <li>Contract Review</li>
              <li>ESG Analysis</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}