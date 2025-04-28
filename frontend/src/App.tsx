import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ClaudePage from './pages/ClaudePage'
import Welcome from './components/Welcome'
import ChatLayout from './components/ChatLayout'
import FloatingMenu from './components/FloatingMenu'
import { useState } from 'react'

function App() {
  const [initialMessage, setInitialMessage] = useState<string | undefined>()

  return (
    <Router>
      <FloatingMenu /> {/* 🔥 Always floating on all pages */}

      <Routes>
        <Route path="/" element={<Navigate to="/claude" />} />
        <Route path="/claude" element={<ClaudePage />} />
        <Route path="/chat" element={<WelcomeWrapper setInitialMessage={setInitialMessage} />} />
        <Route path="/chat/session" element={<ChatLayout initialMessage={initialMessage} />} />
      </Routes>
    </Router>
  )
}

function WelcomeWrapper({ setInitialMessage }: { setInitialMessage: (msg: string) => void }) {
  const navigate = useNavigate()

  return (
    <Welcome
      onStart={(msg) => {
        setInitialMessage(msg)
        navigate('/chat/session')
      }}
    />
  )
}

export default App