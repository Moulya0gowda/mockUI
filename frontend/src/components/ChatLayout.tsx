import Sidebar from './Sidebar'
import ChatPage from './ChatPage'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  initialMessage?: string
}

export default function ChatLayout({ initialMessage }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const handleNewChat = () => {
    navigate('/chat')
  }

  const handleHomeClick = () => {
    navigate('/claude')
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat}
        onHomeClick={handleHomeClick}
      />
      <ChatPage initialMessage={initialMessage} />
    </div>
  )
}