import React from 'react'

export default function TypingDots() {
  return (
    <div className="flex space-x-1 px-4 py-2">
      <span className="w-2 h-2 bg-[#d6b7a3] rounded-full animate-bounce [animation-delay:0ms]"></span>
      <span className="w-2 h-2 bg-[#d6b7a3] rounded-full animate-bounce [animation-delay:200ms]"></span>
      <span className="w-2 h-2 bg-[#d6b7a3] rounded-full animate-bounce [animation-delay:400ms]"></span>
    </div>
  )
}