import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, Tag, ArrowRight, Search, Clock, ExternalLink, ChevronRight } from 'lucide-react'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  const WORDPRESS_API_URL = 'https://blog.cerdasbersinar.com/wp-json/wp/v2'

  // Fetch posts from WordPress REST API
  const fetchPosts = async (page = 1, category = '', search = '') => {
    try {
      setLoading(true)
      let url = `${WORDPRESS_API_URL}/posts?_embed&per_page=9&page=${page}`
      
      if (category) {
        url += `&categories=${category}`
      }
      
      if (search) {
        url += `&search=${search}`
      }

      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      const data = await response.json()
      const totalPagesHeader = response.headers.get('X-WP-TotalPages')
      
      setPosts(data)
      setTotalPages(parseInt(totalPagesHeader) || 1)
      setError(null)
    } catch (err) {
      setError('Gagal memuat artikel. Pastikan koneksi internet Anda stabil.')
      console.error('Error fetching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${WORDPRESS_API_URL}/categories?per_page=20`)
      const data = await response.json()
      setCategories(data)
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }

  useEffect(() => {
    fetchPosts(currentPage, selectedCategory, searchTerm)
  }, [currentPage, selectedCategory, searchTerm])

  useEffect(() => {
    fetchCategories()
  }, [])

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    fetchPosts(1, selectedCategory, searchTerm)
  }

  // Handle category filter
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  // Extract featured image
  const getFeaturedImage = (post) => {
    if (post._embedded && post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0]?.source_url
    }
    return '/images/blog/default-blog.jpg'
  }

  // Extract excerpt
  const getExcerpt = (post) => {
    const excerpt = post.excerpt.rendered.replace(/<[^>]*>/g, '')
    return excerpt.length > 150 ? excerpt.substring(0, 150) + '...' : excerpt
  }

  // Format date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('id-ID', options)
  }

  // Calculate reading time
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>/g, '').split(' ').length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    return readingTime
  }

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden animate-pulse">
          <div className="h-48 bg-white/20"></div>
          <div className="p-6">
            <div className="h-4 bg-white/20 rounded mb-2"></div>
            <div className="h-6 bg-white/20 rounded mb-4"></div>
            <div className="h-4 bg-white/20 rounded mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff'/%3E%3C/svg%3E\")",
          backgroundSize: '100px 100px'
        }}
      ></div>

      {/* Header Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Pojok Cerdas BERSINAR - Blog
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
              Blog Cerdas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Artikel, tips, dan insight seputar ekonomi kreatif, UMKM, dan pemberdayaan masyarakat 
            <span className="text-yellow-400 font-medium"> Desa Kalianyar</span>
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari artikel..."
                className="w-full px-6 py-4 pr-12 text-slate-800 bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:border-emerald-400 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                <Search size={24} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4">Kategori:</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryChange('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === ''
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
                }`}
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16">
            <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-sm">
              <p className="text-red-200 font-medium mb-4">{error}</p>
              <button
                onClick={() => fetchPosts(currentPage, selectedCategory, searchTerm)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && <LoadingSkeleton />}

        {/* Blog Posts Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Featured Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getFeaturedImage(post)}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/blog/default-blog.jpg'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {calculateReadingTime(post.content.rendered)} min
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-3 text-white line-clamp-2 group-hover:text-emerald-300 transition-colors">
                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm line-clamp-3 mb-4">
                    {getExcerpt(post)}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors group/link"
                    >
                      Baca Selengkapnya
                      <ArrowRight 
                        size={16} 
                        className="ml-1 group-hover/link:translate-x-1 transition-transform" 
                      />
                    </Link>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white/60 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-white/50" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-white/70 mb-6">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('')
                  setCurrentPage(1)
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-3 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-sm"
              >
                Sebelumnya
              </button>
              
              {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                const pageNum = currentPage <= 3 ? index + 1 : currentPage - 2 + index
                if (pageNum > totalPages) return null
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      currentPage === pageNum
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-3 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors backdrop-blur-sm"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        )}

        {/* Visit Blog CTA */}
      </div>
    </div>
  )
}

export default Blog