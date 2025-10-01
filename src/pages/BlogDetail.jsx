import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Clock, 
  Share2, 
  BookOpen,
  ExternalLink,
  ChevronRight,
  Eye
} from 'lucide-react'

const BlogDetail = () => {
  const { slug } = useParams() // Menggunakan slug bukan id
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [author, setAuthor] = useState(null)
  const [categories, setCategories] = useState([])

  const WORDPRESS_API_URL = 'https://blog.cerdasbersinar.com/wp-json/wp/v2'

  // Fetch single post by slug
  const fetchPost = async () => {
    try {
      setLoading(true)
      // Mencari post berdasarkan slug
      const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`)
      
      if (!response.ok) {
        throw new Error('Post not found')
      }

      const data = await response.json()
      
      // WordPress API mengembalikan array, ambil post pertama
      if (data.length === 0) {
        throw new Error('Post not found')
      }
      
      const postData = data[0]
      setPost(postData)
      
      // Extract author info
      if (postData._embedded && postData._embedded.author) {
        setAuthor(postData._embedded.author[0])
      }

      // Extract categories
      if (postData._embedded && postData._embedded['wp:term']) {
        const postCategories = postData._embedded['wp:term'].flat().filter(term => term.taxonomy === 'category')
        setCategories(postCategories)
      }

      // Fetch related posts
      if (postData.categories && postData.categories.length > 0) {
        fetchRelatedPosts(postData.categories[0], postData.id)
      }

      setError(null)
    } catch (err) {
      setError('Artikel tidak ditemukan atau gagal dimuat')
      console.error('Error fetching post:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch related posts
  const fetchRelatedPosts = async (categoryId, currentPostId) => {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/posts?categories=${categoryId}&exclude=${currentPostId}&per_page=3&_embed`
      )
      if (response.ok) {
        const data = await response.json()
        setRelatedPosts(data)
      }
    } catch (err) {
      console.error('Error fetching related posts:', err)
    }
  }

  useEffect(() => {
    if (slug) {
      fetchPost()
    }
  }, [slug])

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
    return Math.ceil(wordCount / wordsPerMinute)
  }

  // Get featured image
  const getFeaturedImage = (post) => {
    if (post._embedded && post._embedded['wp:featuredmedia']) {
      return post._embedded['wp:featuredmedia'][0]?.source_url
    }
    return '/images/blog/default-blog.jpg'
  }

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title.rendered,
          text: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
          url: window.location.href
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      alert('Link artikel telah disalin!')
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="mb-8">
              <div className="h-4 bg-white/20 rounded w-32 mb-4"></div>
              <div className="h-12 bg-white/20 rounded mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-48"></div>
            </div>
            
            {/* Image skeleton */}
            <div className="h-64 md:h-96 bg-white/20 rounded-2xl mb-8"></div>
            
            {/* Content skeleton */}
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="text-white/50" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Artikel Tidak Ditemukan</h2>
          <p className="text-white/70 mb-8">{error}</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/blog')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Kembali ke Blog
            </button>
            <button
              onClick={fetchPost}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <ChevronRight size={16} />
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight size={16} />
            <span className="text-emerald-400">Artikel</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          {/* Back button */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Kembali ke Blog
            </button>
          </div>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </h1>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm mb-8">
            {author && (
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{calculateReadingTime(post.content.rendered)} menit baca</span>
            </div>
          </div>

          {/* Share button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-colors backdrop-blur-sm border border-white/10"
            >
              <Share2 size={16} />
              Bagikan
            </button>
            
          </div>
        </header>

        {/* Featured image */}
        <div className="mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={getFeaturedImage(post)}
              alt={post.title.rendered}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/blog/default-blog.jpg'
              }}
            />
          </div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-white/90 leading-relaxed"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>

        {/* Article footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-white/70 text-sm">
              Dipublikasikan pada {formatDate(post.date)}
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Share2 size={16} />
              Bagikan artikel ini
            </button>
          </div>
        </footer>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Artikel Terkait
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={getFeaturedImage(relatedPost)}
                      alt={relatedPost.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/images/blog/default-blog.jpg'
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                      <Calendar size={12} />
                      {formatDate(relatedPost.date)}
                    </div>
                    
                    <h4 className="font-semibold text-white mb-3 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                      <div dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }} />
                    </h4>
                    
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                    >
                      Baca artikel
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <BookOpen size={20} />
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Custom styles for article content */}
      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: white;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .prose h2 {
          font-size: 1.875rem;
          border-bottom: 2px solid rgba(16, 185, 129, 0.3);
          padding-bottom: 0.5rem;
        }
        
        .prose h3 {
          font-size: 1.5rem;
          color: rgb(52, 211, 153);
        }
        
        .prose p {
          margin-bottom: 1.5rem;
        }
        
        .prose a {
          color: rgb(52, 211, 153);
          text-decoration: underline;
        }
        
        .prose a:hover {
          color: rgb(16, 185, 129);
        }
        
        .prose ul, .prose ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
        
        .prose blockquote {
          border-left: 4px solid rgb(16, 185, 129);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
        }
        
        .prose img {
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        
        .prose code {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          color: rgb(251, 191, 36);
        }
        
        .prose pre {
          background: rgba(0, 0, 0, 0.3);
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .prose table {
          width: 100%;
          margin: 2rem 0;
          border-collapse: collapse;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .prose th, .prose td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
        }
        
        .prose th {
          background: rgba(16, 185, 129, 0.2);
          font-weight: 600;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default BlogDetail