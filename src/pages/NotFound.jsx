// 5. src/pages/NotFound.jsx - 404 Page
import { Home, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman tersebut telah dipindahkan atau tidak pernah ada.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="mr-2" size={20} />
            Kembali ke Beranda
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Kembali ke Halaman Sebelumnya
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Atau coba kunjungi:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/marketplace" className="text-blue-600 hover:underline">Marketplace</Link>
            <Link to="/learning" className="text-blue-600 hover:underline">Pembelajaran</Link>
            <Link to="/about" className="text-blue-600 hover:underline">Tentang Kami</Link>
            <Link to="/contact" className="text-blue-600 hover:underline">Kontak</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound