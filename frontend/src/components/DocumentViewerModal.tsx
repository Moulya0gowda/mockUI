// Corrected type (AgentDocument)
type AgentDocument = {
  id: number
  name: string
  pages: number
  uploadDate: string
  sizeMB: number
  fileUrl: string
}

type Props = {
  document: AgentDocument | null
  onClose: () => void
}

export default function DocumentViewerModal({ document, onClose }: Props) {
  if (!document) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-5xl shadow-2xl relative h-[90vh] flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ×
        </button>

        {/* Metadata */}
        <h2 className="text-2xl font-bold mb-2 text-center">{document.name}</h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          {document.pages} pages • Uploaded: {document.uploadDate} • {document.sizeMB.toFixed(2)} MB
        </p>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden rounded-md border bg-gray-100 p-4">
          <iframe
            src={document.fileUrl}
            title={document.name}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  )
}