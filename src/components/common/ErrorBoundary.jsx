// 2. src/components/Common/ErrorBoundary.jsx
import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  handleRefresh = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Oops! Terjadi Kesalahan</h1>
              <p className="text-gray-600">
                Maaf, terjadi kesalahan yang tidak terduga. Tim kami akan segera memperbaikinya.
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRefresh}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Muat Ulang Halaman
              </button>
              
              <a
                href="/"
                className="w-full bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <p>Kode Error: {this.state.error?.message || 'Unknown'}</p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary