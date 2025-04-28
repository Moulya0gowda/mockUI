import { useState } from 'react'
import sendIcon from '../assets/icons/send-icon.jpg'


type Props = {
  onSend: (msg: string) => void
}

export default function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    onSend(input)
    setInput('')
  }

  return (
    <div className="bg-[#fdfcf9] p-4 border-t">
      <div className="max-w-3xl mx-auto bg-white p-4 rounded-2xl shadow-sm">
        <textarea
          className="w-full p-4 text-lg focus:outline-none rounded-lg"
          style={{ backgroundColor: 'transparent' }}
          rows={2}
          placeholder="Reply to Claude..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
        />
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <button className="bg-gray-100 p-2 rounded-lg">+</button>
            <button className="bg-gray-100 p-2 rounded-lg">✍️</button>
          </div>
          <button
            className="bg-[#e7d7ce] text-white p-3 rounded-full"
            onClick={handleSubmit}
          >
            <img src={sendIcon} alt="t" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}