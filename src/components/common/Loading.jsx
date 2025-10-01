// 1. src/components/Common/Loading.jsx
import { Loader2 } from 'lucide-react'

const Loading = ({ size = 'medium', text = 'Memuat...', className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600 mb-2`} />
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  )
}

// Loading overlay untuk full screen
export const LoadingOverlay = ({ isVisible, text = 'Memuat...' }) => {
  if (!isVisible) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  )
}

// Loading skeleton untuk cards
export const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
      <div className="h-6 bg-gray-200 rounded mb-3 w-1/2"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
)

export default Loading