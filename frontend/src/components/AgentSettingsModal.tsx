import { useState } from 'react'
import DocumentsList from './DocumentsList'
import DocumentViewerModal from './DocumentViewerModal'

// Your custom document type (renamed to avoid conflict with react-pdf)
type AgentDocument = {
  id: number
  name: string
  pages: number
  uploadDate: string
  sizeMB: number
  fileUrl: string
}

type AgentSettingsModalProps = {
  isOpen: boolean
  onClose: () => void
  agentName: string
}

export default function AgentSettingsModal({ isOpen, onClose, agentName }: AgentSettingsModalProps) {
  const [activeTab, setActiveTab] = useState('info')
  const [uploadedDocuments, setUploadedDocuments] = useState<AgentDocument[]>([
    {
      id: 1,
      name: 'research_paper_1.pdf',
      pages: 12,
      uploadDate: 'April 20, 2025',
      sizeMB: 1.5,
      fileUrl: '/uploads/research_paper_1.pdf',
    },
    {
      id: 2,
      name: 'market_report.pdf',
      pages: 8,
      uploadDate: 'April 18, 2025',
      sizeMB: 0.9,
      fileUrl: '/uploads/market_report.pdf',
    },
  ])
  const [selectedDocument, setSelectedDocument] = useState<AgentDocument | null>(null)

  const handleRemoveDoc = (id: number) => {
    setUploadedDocuments((prev) => prev.filter((doc) => doc.id !== id))
  }

  const handleViewDoc = (doc: AgentDocument) => {
    setSelectedDocument(doc)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-3xl shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ×
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-6 text-center">Agent Settings: {agentName}</h2>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 justify-center">
          {['info', 'instructions', 'documents', 'analytics', 'users'].map((tab) => (
            <button
              key={tab}
              className={`capitalize px-4 py-2 rounded-full ${
                activeTab === tab
                  ? 'bg-[#d6b7a3] text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'documents' && (
          <>
            <div className="space-y-6">
              <button className="bg-[#d6b7a3] text-white px-4 py-2 rounded-lg">
                Upload New Document
              </button>

              <DocumentsList
                documents={uploadedDocuments}
                onView={handleViewDoc}
                onRemove={handleRemoveDoc}
              />
            </div>

            {/* View Document Modal */}
            <DocumentViewerModal
              document={selectedDocument}
              onClose={() => setSelectedDocument(null)}
            />
          </>
        )}

        {activeTab === 'info' && (
          <div className="p-4 bg-gray-50 rounded-xl min-h-[200px]">
            <h3 className="font-bold mb-2">Agent Info</h3>
            <p>Agent Name, Type, Model (editable later).</p>
          </div>
        )}

        {activeTab === 'instructions' && (
          <div className="p-4 bg-gray-50 rounded-xl min-h-[200px]">
            <h3 className="font-bold mb-2">Agent Instructions</h3>
            <p>System prompt, temperature, creativity settings (coming soon).</p>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-4 bg-gray-50 rounded-xl min-h-[200px]">
            <h3 className="font-bold mb-2">Usage Analytics</h3>
            <p>Queries made, tokens consumed, etc. (coming soon)</p>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="p-4 bg-gray-50 rounded-xl min-h-[200px]">
            <h3 className="font-bold mb-2">Access Control</h3>
            <p>Assign users who can access this agent (coming soon).</p>
          </div>
        )}
      </div>
    </div>
  )
}