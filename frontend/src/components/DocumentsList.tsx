import { useState } from 'react'

type Document = {
  id: number
  name: string
  pages: number
  uploadDate: string
  sizeMB: number
  fileUrl: string
}

type Props = {
  documents: Document[]
  onView: (doc: Document) => void
  onRemove: (docId: number) => void
}

export default function DocumentsList({ documents, onView, onRemove }: Props) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-md"
        >
          <div>
            <p className="font-semibold">{doc.name}</p>
            <p className="text-xs text-gray-500">
              {doc.pages} pages • Uploaded: {doc.uploadDate} • {doc.sizeMB.toFixed(2)} MB
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onView(doc)}
              className="text-blue-600 hover:underline"
            >
              👁️ View
            </button>
            <button
              onClick={() => onRemove(doc.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌ Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}