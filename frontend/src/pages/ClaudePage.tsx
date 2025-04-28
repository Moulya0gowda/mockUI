export default function ClaudePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcf9] text-center px-6">
        <h1 className="text-5xl font-serif font-bold mb-4">Welcome to Claude</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-xl">
          Claude is your thoughtful, trustworthy AI companion — made to help you write, code,
          create, and understand the world.
        </p>
  
        <div className="animate-pulse text-2xl font-mono text-clay">
          ⚡ Scroll down to explore...
        </div>
  
        <div className="mt-12 space-y-6 animate-fade-in-up">
          <p className="text-3xl font-light italic">"Write me a story..."</p>
          <p className="text-2xl font-semibold text-gray-600">"Explain dark matter in simple terms"</p>
          <p className="text-4xl font-bold text-clay">"Be my code reviewer!"</p>
        </div>
      </div>
    )
  }