import closeIcon from '../assets/icons/close-icon.png'

export default function ModelSettings() {
  return (
    <div
      id="model-settings"
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50 hidden"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 relative">
        <button
          className="absolute top-3 right-3"
          onClick={() =>
            document.getElementById('model-settings')?.classList.add('hidden')
          }
        >
          <img src={closeIcon} className="w-5 h-5" alt="Close" />
        </button>
        <h2 className="font-serif text-lg mb-2">Model Settings</h2>
        <p className="text-sm text-gray-600 italic">Settings for this model (coming soon...)</p>
      </div>
    </div>
  )
}