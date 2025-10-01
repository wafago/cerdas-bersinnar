// 5. src/components/Features/CategoryFilter.jsx - Category filter component
import { useState } from 'react'
import { ChevronDown, Filter } from 'lucide-react'

const CategoryFilter = ({ 
  categories = [], 
  selectedCategory, 
  onCategoryChange,
  showLabel = true,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {showLabel && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Filter className="inline mr-1" size={16} />
          Filter Kategori
        </label>
      )}
      
      {/* Desktop - Button style */}
      <div className="hidden md:flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile - Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center justify-between"
        >
          <span>{selectedCategory || 'Pilih Kategori'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                  selectedCategory === category ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryFilter