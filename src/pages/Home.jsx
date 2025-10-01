import { Link } from 'react-router-dom'
import { ShoppingCart, BookOpen, Users, Star, ArrowRight, Award, TrendingUp, Heart, Sprout, Recycle, Globe } from 'lucide-react'
// import { products } from '../data/products'

// Sementara gunakan data dummy sampai products.js tersedia
const products = [
  {
    id: 1,
    name: "Mie Jagung Premium",
    price: 15000,
    vendor: "Bu Sari",
    image: "/images/products/mie-jagung.jpg",
    category: "Makanan Olahan",
    description: "Mie sehat berbahan jagung lokal yang bergizi tinggi"
  },
  {
    id: 2,
    name: "Hydroton Media Tanam",
    price: 25000,
    vendor: "Pak Bambang",
    image: "/images/products/hydroton.jpg",
    category: "Media Tanam",
    description: "Media tanam hidroponik dari limbah genteng"
  },
  {
    id: 3,
    name: "Es Krim Tahu",
    price: 12000,
    vendor: "Bu Ani",
    image: "/images/products/es-krim-tahu.jpg",
    category: "Makanan Olahan",
    description: "Es krim sehat berbahan dasar tahu dengan berbagai rasa"
  },
  {
    id: 4,
    name: "Aksesoris Perca Batik",
    price: 35000,
    vendor: "Bu Lestari",
    image: "/images/products/aksesoris-batik.jpg",
    category: "Kerajinan",
    description: "Aksesoris fashion dari limbah kain perca batik"
  },
  {
    id: 5,
    name: "Nugget Tahu",
    price: 18000,
    vendor: "Bu Wati",
    image: "/images/products/nugget-tahu.jpg",
    category: "Makanan Olahan",
    description: "Nugget sehat berbahan dasar tahu yang crispy dan lezat"
  },
  {
    id: 6,
    name: "Cookies Jagung",
    price: 20000,
    vendor: "Bu Rina",
    image: "/images/products/cookies-jagung.jpg",
    category: "Makanan Ringan",
    description: "Cookies renyah berbahan tepung jagung lokal"
  }
]

const Home = () => {
  // Ambil 6 produk unggulan secara random dari products.js
  const getFeaturedProducts = () => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }

  const featuredProducts = getFeaturedProducts();

  const testimonials = [
    { 
      name: "Bu Sari Widayanti", 
      text: "Sejak bergabung dengan Pojok Cerdas BERSINAR, usaha mie jagung saya berkembang pesat! Sekarang saya bisa menjual online ke seluruh Indonesia.", 
      role: "Pelaku UMKM Mie Jagung",
      location: "Desa Kalianyar"
    },
    { 
      name: "Pak Andi Susanto", 
      text: "Program pelatihan digital marketing dan e-commerce sangat membantu. Penjualan tahu saya meningkat 200% dalam 6 bulan!", 
      role: "Produsen Tahu Lokal",
      location: "Desa Kalianyar"
    },
    { 
      name: "Ibu Lestari", 
      text: "Berkat pelatihan aksesoris dari limbah perca, sekarang saya punya penghasilan tambahan Rp 2 juta per bulan dari rumah.", 
      role: "Pengrajin Aksesoris Batik",
      location: "Desa Kalianyar"
    },
    { 
      name: "Pak Bambang", 
      text: "Inovasi hydroton dari limbah genteng membuka peluang bisnis baru. Kini saya tidak hanya produksi genteng, tapi juga media tanam!", 
      role: "Produsen Genteng & Hydroton",
      location: "Desa Kalianyar"
    }
  ]

  // Handler untuk image error dengan fallback yang lebih aman
  const handleImageError = (e) => {
    const target = e.target;
    if (!target.src.includes('placeholder.jpg')) {
      target.src = '/images/products/placeholder.jpg';
    } else {
      target.style.display = 'none';
      const fallbackDiv = target.parentNode.querySelector('.fallback-div');
      if (fallbackDiv) {
        fallbackDiv.style.display = 'flex';
      }
    }
  }

  // Fungsi untuk format harga
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-blue-600/20"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff'/%3E%3C/svg%3E\")",
            backgroundSize: '100px 100px'
          }}
        ></div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Program PPK ORMAWA - Universitas Jember
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-12 animate-fade-in-up delay-200">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                Pojok Cerdas
              </span>
            </h1>
            
            <div className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              <span className="relative">
                BERSINAR
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-emerald-200 font-light tracking-wide mt-6">
              Desa Kalianyar • Tamanan • Bondowoso
            </p>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light">
              Transformasi digital untuk pemberdayaan ekonomi kreatif keluarga eks buruh migran melalui 
              <span className="text-yellow-400 font-semibold"> inovasi berkelanjutan</span> dan 
              <span className="text-emerald-400 font-semibold"> teknologi adaptif</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-600">
            <Link 
              to="/marketplace"
              className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3">
                <ShoppingCart size={22} />
                Jelajahi Produk Lokal
              </div>
            </Link>
            
            <Link 
              to="/learning"
              className="group relative bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center gap-3">
                <BookOpen size={22} />
                Mulai Pembelajaran
              </div>
            </Link>
          </div>

          {/* Stats preview */}
          <div className="mt-20 animate-fade-in-up delay-800">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-emerald-200 font-medium">Keluarga Terberdayakan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">35+</div>
                <div className="text-sm text-emerald-200 font-medium">Produk Inovatif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">70%</div>
                <div className="text-sm text-emerald-200 font-medium">Literasi Digital</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fade-in-up {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
          .delay-1000 { animation-delay: 1s; }
          .delay-2000 { animation-delay: 2s; }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dampak Nyata Program</h2>
            <p className="text-gray-600 text-lg">Pencapaian Pojok Cerdas BERSINAR dalam pemberdayaan masyarakat</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Keluarga Terberdayakan</div>
              <div className="text-sm text-gray-500 mt-1">Eks Buruh Migran</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-2">35+</div>
              <div className="text-gray-600 font-medium">Produk Inovatif</div>
              <div className="text-sm text-gray-500 mt-1">Dari Potensi Lokal</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-600 mb-2">16</div>
              <div className="text-gray-600 font-medium">Sesi Pelatihan</div>
              <div className="text-sm text-gray-500 mt-1">Intensif & Terstruktur</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-600 mb-2">70%</div>
              <div className="text-gray-600 font-medium">Literasi Digital</div>
              <div className="text-sm text-gray-500 mt-1">Dari 15% Baseline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produk Unggulan Desa Kalianyar</h2>
            <p className="text-gray-600 text-lg">Inovasi produk berkualitas dari limbah menjadi berkah</p>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                    onError={handleImageError}
                  />
                  <div 
                    className="fallback-div absolute inset-0 bg-gradient-to-br from-green-300 to-blue-400 flex items-center justify-center text-white font-medium"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <Sprout size={32} className="mx-auto mb-2 opacity-70" />
                      <span className="text-sm">{product.name}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Lokal
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">Oleh: {product.vendor}</p>
                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{product.description}</p>
                  <div className="text-xl font-bold text-green-600 mb-4">
                    {formatPrice(product.price)}
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all font-semibold flex items-center justify-center transform hover:scale-105">
                    <ShoppingCart size={16} className="mr-2" />
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/marketplace" className="inline-flex items-center text-green-600 hover:text-green-800 font-bold text-lg transition-colors group">
              Jelajahi Semua Produk Inovatif 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Mengapa Pojok Cerdas BERSINAR?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="text-green-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Inovasi Berkelanjutan</h3>
              <p className="text-gray-600 leading-relaxed">
                Mengubah limbah menjadi produk bernilai tinggi dengan teknologi ramah lingkungan dan pendekatan circular economy
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Platform Digital Terpadu</h3>
              <p className="text-gray-600 leading-relaxed">
                Website dan mobile app yang user-friendly untuk pembelajaran, pemasaran, dan networking bisnis digital
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Pemberdayaan Holistik</h3>
              <p className="text-gray-600 leading-relaxed">
                Mentoring berkelanjutan, peer-to-peer learning, dan community building untuk transformasi sosial ekonomi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Testimoni Keluarga Berdaya</h2>
            <p className="text-gray-600 text-lg">Kisah nyata transformasi hidup melalui program Pojok Cerdas BERSINAR</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-green-600 font-semibold">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">📍 {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Dampak Transformatif</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">52%</div>
              <div className="text-gray-300">Peningkatan Rata-rata Pendapatan</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-gray-300">Penurunan Migrasi Tenaga Kerja</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Pengurangan Limbah Lokal</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bergabunglah dengan Revolusi Ekonomi Kreatif!</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Jadilah bagian dari transformasi Desa Kalianyar menuju kemandirian ekonomi dan keberlanjutan lingkungan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/marketplace" 
              className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              <ShoppingCart size={20} className="mr-2" />
              Dukung Produk Lokal
            </Link>
            <Link 
              to="/learning" 
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 inline-flex items-center justify-center backdrop-blur-sm"
            >
              <BookOpen size={20} className="mr-2" />
              Mulai Belajar Sekarang
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            💡 Program PPK ORMAWA HMP Pendidikan IPA - Universitas Jember
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home