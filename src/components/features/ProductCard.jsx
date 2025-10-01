// src/components/Features/ProductCard.jsx - Updated with enhanced features
import { Star, MapPin, Heart, ShoppingCart, Eye, Badge } from 'lucide-react'
import { useState } from 'react'
import { openWhatsApp } from '../../utils/whatsapp'
import { formatCurrency } from '../../utils/helpers'

const ProductCard = ({ 
  product, 
  isFavorite = false, 
  onFavoriteToggle,
  showQuickView = true,
  className = "",
  variant = "default" // "default", "compact", "featured"
}) => {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = (e) => {
    e.stopPropagation()
    openWhatsApp(product.vendor.whatsapp, product.name, product.price)
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    onFavoriteToggle && onFavoriteToggle(product.id)
  }

  const handleQuickView = (e) => {
    e.stopPropagation()
    // TODO: Implement quick view modal
    console.log('Quick view for:', product.name)
  }

  // Variant styles
  const getCardClasses = () => {
    const baseClasses = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
    
    switch(variant) {
      case "compact":
        return `${baseClasses} transform hover:scale-105`
      case "featured":
        return `${baseClasses} ring-2 ring-yellow-400 relative`
      default:
        return `${baseClasses} hover:-translate-y-1`
    }
  }

  const getImageClasses = () => {
    switch(variant) {
      case "compact":
        return "h-36"
      case "featured":
        return "h-56"
      default:
        return "h-48"
    }
  }

  return (
    <div 
      className={`${getCardClasses()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {variant === "featured" && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold z-10">
          <Badge className="inline mr-1" size={12} />
          Unggulan
        </div>
      )}

      {/* Image Container */}
      <div className={`relative ${getImageClasses()} bg-gray-200 overflow-hidden`}>
        {!imageError ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <ShoppingCart className="mx-auto mb-2 text-gray-400" size={32} />
              <span className="text-sm text-gray-500">No Image</span>
            </div>
          </div>
        )}

        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleFavoriteClick}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            title={isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
          >
            <Heart 
              className={`${isFavorite ? 'fill-current text-red-500' : 'text-gray-600'}`} 
              size={18} 
            />
          </button>
          
          {showQuickView && (
            <button
              onClick={handleQuickView}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              title="Lihat detail cepat"
            >
              <Eye className="text-gray-600" size={18} />
            </button>
          )}
        </div>

        {/* Stock Badge */}
        {product.stock && (
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium">
            {product.stock > 10 ? (
              <span className="text-green-600">Tersedia</span>
            ) : product.stock > 0 ? (
              <span className="text-orange-600">Stok Terbatas</span>
            ) : (
              <span className="text-red-600">Habis</span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={14} />
            <span className="text-sm text-gray-600 ml-1">
              {product.vendor.rating || 4.5}
            </span>
          </div>
        </div>
        
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Description */}
        {variant !== "compact" && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {/* Vendor Info */}
        <div className="flex items-center mb-3">
          <MapPin size={14} className="text-gray-400 mr-1 flex-shrink-0" />
          <div className="text-sm text-gray-500 truncate">
            <span className="font-medium">{product.vendor.name}</span>
            <span className="mx-1">•</span>
            <span>{product.vendor.location}</span>
          </div>
        </div>
        
        {/* Vendor Experience */}
        {product.vendor.experience && variant === "featured" && (
          <div className="text-xs text-gray-500 mb-2">
            Berpengalaman {product.vendor.experience}
          </div>
        )}

        {/* Price */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-blue-600">
            {formatCurrency(product.price)}
          </div>
          {product.originalPrice && (
            <div className="text-sm text-gray-500 line-through">
              {formatCurrency(product.originalPrice)}
            </div>
          )}
        </div>

        {/* Tags */}
        {product.tags && variant === "featured" && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleWhatsAppClick}
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          <ShoppingCart className="mr-2" size={18} />
          {product.stock === 0 ? 'Stok Habis' : 'Pesan via WhatsApp'}
        </button>
      </div>
    </div>
  )
}

// Compact version for mobile or sidebar
export const ProductCardCompact = ({ product, onFavoriteToggle, isFavorite }) => (
  <ProductCard 
    product={product}
    onFavoriteToggle={onFavoriteToggle}
    isFavorite={isFavorite}
    variant="compact"
    showQuickView={false}
  />
)

// Featured version for homepage
export const ProductCardFeatured = ({ product, onFavoriteToggle, isFavorite }) => (
  <ProductCard 
    product={product}
    onFavoriteToggle={onFavoriteToggle}
    isFavorite={isFavorite}
    variant="featured"
  />
)

export default ProductCard