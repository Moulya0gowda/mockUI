import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'

export default function FloatingMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 flex flex-col items-start space-y-4">
      {/* Floating main button */}
      <div
        onClick={toggleMenu}
        className={classNames(
          'bg-[#d6b7a3] text-white w-16 h-16 rounded-xl flex items-center justify-center shadow-xl cursor-pointer transition-transform duration-500',
          open ? 'rotate-45' : 'rotate-0'
        )}
      >
        ☰
      </div>

      {/* Floating Links expanding downward with spacing */}
      <div
        className={`transition-all duration-700 ease-in-out transform origin-top-left ${
          open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'
        } flex flex-col items-start space-y-4`}
      >
        <button
          style={{ transitionDelay: open ? '100ms' : '0ms' }}
          className="px-5 py-2 text-white bg-[#d6b7a3] rounded-full shadow-md hover:shadow-lg transition-all duration-500"
          onClick={() => {
            navigate('/claude')
            setOpen(false)
          }}
        >
          Claude
        </button>

        <button
          style={{ transitionDelay: open ? '300ms' : '0ms' }}
          className="px-5 py-2 text-white bg-[#d6b7a3] rounded-full shadow-md hover:shadow-lg transition-all duration-500"
          onClick={() => {
            navigate('/chat')
            setOpen(false)
          }}
        >
          Chat
        </button>
      </div>
    </div>
  )
}