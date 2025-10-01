// 6. src/components/Common/EmptyState.jsx - Empty state component
import { Package, Search, BookOpen, Users, ShoppingCart } from 'lucide-react'

const EmptyState = ({ 
  type = 'general',
  title,
  description,
  actionText,
  onAction,
  className = ""
}) => {
  const getIcon = () => {
    switch(type) {
      case 'search': return <Search className="w-16 h-16 text-gray-400" />
      case 'products': return <Package className="w-16 h-16 text-gray-400" />
      case 'learning': return <BookOpen className="w-16 h-16 text-gray-400" />
      case 'community': return <Users className="w-16 h-16 text-gray-400" />
      case 'cart': return <ShoppingCart className="w-16 h-16 text-gray-400" />
      default: return <Package className="w-16 h-16 text-gray-400" />
    }
  }

  const getDefaultContent = () => {
    switch(type) {
      case 'search':
        return {
          title: 'Tidak Ada Hasil',
          description: 'Maaf, pencarian Anda tidak menemukan hasil. Coba kata kunci yang berbeda.'
        }
      case 'products':
        return {
          title: 'Belum Ada Produk',
          description: 'Saat ini belum ada produk dalam kategori ini. Silakan cek kategori lain.'
        }
      case 'learning':
        return {
          title: 'Modul Pembelajaran Kosong',
          description: 'Belum ada modul pembelajaran tersedia. Kami sedang menyiapkan konten terbaik untuk Anda.'
        }
      default:
        return {
          title: 'Tidak Ada Data',
          description: 'Saat ini tidak ada data yang tersedia.'
        }
    }
  }

  const defaultContent = getDefaultContent()

  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 ${className}`}>
      <div className="mb-6">
        {getIcon()}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title || defaultContent.title}
      </h3>
      
      <p className="text-gray-600 text-center mb-6 max-w-md">
        {description || defaultContent.description}
      </p>
      
      {actionText && onAction && (
        <button
          onClick={onAction}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {actionText}
        </button>
      )}
    </div>
  )
}

export default EmptyState