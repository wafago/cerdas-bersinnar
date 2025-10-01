// src/pages/Marketplace.jsx - Complete Marketplace Implementation
import { useState, useEffect } from 'react'
import { Search, Filter, MapPin, Star, Heart, Grid, List, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/features/ProductCard'
import SearchBar from '../components/features/SearchBar'
import CategoryFilter from '../components/features/CategoryFilter'
import EmptyState from '../components/common/EmptyState'
import Loading, { ProductCardSkeleton } from '../components/common/Loading'
import { products, categories } from '../data/products'
import { debounce } from '../utils/helpers'

const Marketplace = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [favorites, setFavorites] = useState([])

  // Simulated loading on mount
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Debounced search function
  const debouncedSearch = debounce((term) => {
    setSearchTerm(term)
  }, 300)

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return (b.vendor.rating || 0) - (a.vendor.rating || 0)
      case 'name': return a.name.localeCompare(b.name)
      case 'newest':
      default: return b.id - a.id
    }
  })

  const handleFavoriteToggle = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const sortOptions = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'price-low', label: 'Harga Terendah' },
    { value: 'price-high', label: 'Harga Tertinggi' },
    { value: 'rating', label: 'Rating Tertinggi' },
    { value: 'name', label: 'Nama A-Z' }
  ]

  const StatsBar = () => (
    <div className="bg-gradient-to-br from-emerald-50 via-yellow-50/50 to-emerald-50 border border-emerald-200/50 p-6 rounded-2xl mb-8 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">{products.length}</div>
          <div className="text-sm text-slate-600 font-medium">Total Produk</div>
        </div>
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent">{new Set(products.map(p => p.vendor.name)).size}</div>
          <div className="text-sm text-slate-600 font-medium">Penjual UMKM</div>
        </div>
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">{categories.length - 1}</div>
          <div className="text-sm text-slate-600 font-medium">Kategori</div>
        </div>
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-emerald-500 bg-clip-text text-transparent">4.8</div>
          <div className="text-sm text-slate-600 font-medium">Rating Rata-rata</div>
        </div>
      </div>
    </div>
  )

  const ProductGrid = () => {
    if (isLoading) {
      return (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )
    }

    if (sortedProducts.length === 0) {
      return (
        <EmptyState
          type="search"
          title="Tidak Ada Produk Ditemukan"
          description={`Maaf, tidak ada produk yang sesuai dengan pencarian "${searchTerm}" dalam kategori "${selectedCategory}".`}
          actionText="Reset Filter"
          onAction={() => {
            setSearchTerm('')
            setSelectedCategory('Semua')
            setPriceRange([0, 200000])
          }}
        />
      )
    }

    if (viewMode === 'grid') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard 
                product={product} 
                isFavorite={favorites.includes(product.id)}
                onFavoriteToggle={() => handleFavoriteToggle(product.id)}
              />
            </div>
          ))}
        </div>
      )
    }

    // List view
    return (
      <div className="space-y-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-300">
            <div className="w-full md:w-48 h-48 md:h-32 bg-gradient-to-br from-emerald-100 to-yellow-50 rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(product.name)}
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl text-slate-800">{product.name}</h3>
                <button
                  onClick={() => handleFavoriteToggle(product.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                >
                  <Heart className={favorites.includes(product.id) ? 'fill-current text-red-500' : ''} size={20} />
                </button>
              </div>
              <p className="text-slate-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center mb-2">
                <MapPin size={14} className="text-emerald-500 mr-1" />
                <span className="text-sm text-slate-600">{product.vendor.location}</span>
                <Star className="text-yellow-400 fill-current ml-4" size={14} />
                <span className="text-sm text-slate-600 ml-1">{product.vendor.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-1">
                    Rp {product.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-600">
                    Oleh: <span className="font-semibold text-emerald-600">{product.vendor.name}</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const FilterPanel = () => (
    <div className={`${showFilters ? 'block' : 'hidden'} md:block bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-lg p-6 mb-6 md:mb-0`}>
      <h3 className="font-bold text-xl text-slate-800 mb-6">Filter & Urutkan</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showLabel={true}
        />
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Rentang Harga
        </label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-emerald-500"
          />
          <div className="flex justify-between text-sm text-slate-600">
            <span>Rp 0</span>
            <span className="font-semibold">Rp {priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Urutkan Berdasarkan
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/80"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setSearchTerm('')
          setSelectedCategory('Semua')
          setPriceRange([0, 200000])
          setSortBy('newest')
        }}
        className="w-full bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 py-3 px-4 rounded-xl font-semibold hover:from-slate-300 hover:to-slate-400 transition-all duration-300"
      >
        Reset Semua Filter
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-yellow-50/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
              Marketplace
            </span>
          </h1>
          <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-wide">
            <span className="relative">
              UMKM BERSINAR
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
            </span>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Dukung produk lokal berkualitas langsung dari pelaku 
            <span className="text-emerald-600 font-semibold"> UMKM Desa Kalianyar</span> yang 
            <span className="text-yellow-600 font-semibold"> inovatif</span> dan 
            <span className="text-emerald-600 font-semibold"> berkelanjutan</span>
          </p>
        </div>

        {/* Stats Bar */}
        <StatsBar />

        {/* Search and Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-grow">
              <SearchBar 
                onSearch={debouncedSearch}
                placeholder="Cari produk, penjual, atau kategori..."
                className="w-full"
              />
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex bg-white/80 border border-emerald-200 rounded-xl p-1 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                  title="Grid View"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                  title="List View"
                >
                  <List size={20} />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg"
              >
                <SlidersHorizontal className="mr-2" size={16} />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-slate-600 font-medium">
            Menampilkan <span className="text-emerald-600 font-bold">{sortedProducts.length}</span> dari <span className="text-slate-800 font-bold">{products.length}</span> produk
            {searchTerm && <span className="text-emerald-600"> untuk "{searchTerm}"</span>}
            {selectedCategory !== 'Semua' && <span className="text-yellow-600"> dalam kategori "{selectedCategory}"</span>}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block">
            <FilterPanel />
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <FilterPanel />
          </div>

          {/* Products Grid/List */}
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>

        {/* Load More Button (for future pagination) */}
        {sortedProducts.length >= 12 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
              Muat Lebih Banyak Produk
            </button>
          </div>
        )}

        {/* Call to Action for Vendors */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-yellow-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                Punya Produk UMKM?
              </span>
            </h2>
            <p className="text-xl mb-8 text-emerald-200 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan pelaku UMKM lainnya dan jangkau lebih banyak pembeli melalui 
              <span className="text-yellow-400 font-semibold"> platform digital terpercaya</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Daftar Sebagai Penjual
              </a>
              <a 
                href="https://wa.me/6281234567890?text=Halo, saya ingin mendaftarkan produk UMKM saya" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace