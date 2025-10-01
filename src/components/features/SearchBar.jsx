// 5. src/components/Features/SearchBar.jsx - Enhanced search component
import { useState } from 'react'
import { Search, X } from 'lucide-react'

const SearchBar = ({ onSearch, placeholder = "Cari produk...", className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearch('')
    setIsActive(false)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className={`h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            isActive ? 'border-blue-500 shadow-md' : 'border-gray-300'
          }`}
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {/* Search suggestions could be added here */}
      {searchTerm && isActive && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-2 text-sm text-gray-600">
            Mencari: "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar