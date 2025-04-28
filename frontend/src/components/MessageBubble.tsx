type Props = {
    sender: 'user' | 'bot'
    text: string
  }
  
  export default function MessageBubble({ sender, text }: Props) {
    const isUser = sender === 'user'
  
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
        <div
          className={`max-w-[75%] px-4 py-3 rounded-lg text-base ${
            isUser
              ? 'bg-gray-200 text-black'
              : 'bg-white text-black border border-gray-200'
          }`}
        >
          {text}
        </div>
      </div>
    )
  }