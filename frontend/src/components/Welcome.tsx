import { useState } from 'react'
import sendIcon from '../assets/icons/send-icon.jpg'
import AgentSelector from "./AgentSelector"

type Props = {
  onStart: (msg: string) => void
}

export default function Welcome({ onStart }: Props) {
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) onStart(input)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fdfcf9]">
      <div className="text-4xl font-serif text-gray-800 mb-2">🌼</div>
      <h1 className="text-3xl font-serif font-semibold mb-4">What’s new, Moulya?</h1>

      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-xl">
        <textarea
          rows={2}
          placeholder="How can I help you today?"
          className="w-full p-4 text-lg focus:outline-none rounded-lg"
          style={{ backgroundColor: 'transparent' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-between items-center mt-4">
  <div className="text-sm text-right">
    <AgentSelector />
  </div>
  <button
    className="bg-[#e7d7ce] p-3 rounded-full"
    onClick={handleSend}
  >
    <img src={sendIcon} className="w-5 h-5" />
  </button>
</div>
      </div>

      
    </div>
  )
}