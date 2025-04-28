import TypingDots from './TypingDots'
import { useEffect, useRef, useState } from 'react'
import ChatInput from './ChatInput'

// Fake LLM response after delay
const FAKE_DELAY = 2000

export default function ChatPage({ initialMessage }: { initialMessage?: string }) {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [isThinking, setIsThinking] = useState(false)
  const hasHandledInitial = useRef(false)

  useEffect(() => {
    if (initialMessage && !hasHandledInitial.current) {
      handleSend(initialMessage)
      hasHandledInitial.current = true
    }
  }, [initialMessage])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    setMessages((prev) => [...prev, { sender: 'user', text }])
    setIsThinking(true)

    // Simulate LLM response delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: generateBotReply(text) },
      ])
      setIsThinking(false)
    }, FAKE_DELAY)
  }

  const generateBotReply = (userText: string) => {
    return `You said: "${userText}". Here's a thoughtful reply.`
  }

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Centered Chat Thread */}
      <div className="flex-1 overflow-y-auto flex justify-center px-6">
        <div className="w-full max-w-3xl py-6 flex flex-col space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-lg ${
                msg.sender === 'user'
                  ? 'self-end bg-gray-100 text-black'
                  : 'self-start bg-white text-black'
              } shadow max-w-[80%]`}
            >
              {msg.text}
            </div>
          ))}
  
          {isThinking && (
            <div className="self-start">
              <TypingDots />
            </div>
          )}
        </div>
      </div>
  
      {/* Chat Input stays at bottom */}
      <ChatInput onSend={handleSend} />
    </div>
  )
}