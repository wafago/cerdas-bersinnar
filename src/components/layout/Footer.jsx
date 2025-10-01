// src/components/Layout/Footer.jsx
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-yellow-600/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 mr-4">
                <img src="/cerdas.png" alt="Icon" className="w-7 h-7 object-contain filter invert brightness-0" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                  Pojok Cerdas
                </h3>
                <div className="text-lg font-bold text-white">BERSINAR</div>
              </div>
            </div>
            <p className="text-emerald-200 text-lg leading-relaxed mb-6">
              Platform pemberdayaan UMKM Desa Kalianyar untuk transformasi digital ekonomi kreatif 
              keluarga eks buruh migran melalui <span className="text-yellow-400 font-semibold">inovasi berkelanjutan</span>.
            </p>
            <div className="text-emerald-300/80 text-sm">
              <div className="bg-gradient-to-r from-yellow-400 to-emerald-400 h-1 w-16 rounded-full mb-2"></div>
              Program PPK ORMAWA HMPS S1 Pendidikan Ipa - Universitas Jember
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Menu Utama</h4>
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Beranda</span>
              </Link>
              <Link 
                to="/marketplace" 
                className="block text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Marketplace</span>
              </Link>
              <Link 
                to="/learning" 
                className="block text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Pembelajaran</span>
              </Link>
              <Link 
                to="/about" 
                className="block text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Tentang Kami</span>
              </Link>
              <Link 
                to="/contact" 
                className="block text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Kontak</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:bg-emerald-500/30 transition-colors">
                  <MapPin size={16} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Desa Kalianyar</div>
                  <div className="text-emerald-200">Kec. Tamanan, Kab. Bondowoso</div>
                  <div className="text-emerald-200">Jawa Timur, Indonesia</div>
                </div>
              </div>
              
              {/* <div className="flex items-center group">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/30 transition-colors">
                  <Phone size={16} className="text-emerald-400" />
                </div>
                <a href="tel:+6281234567890" className="text-emerald-200 hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </div> */}
              
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/30 transition-colors">
                  <Mail size={16} className="text-emerald-400" />
                </div>
                <a href="mailto:info@cerdasbersinar.com" className="text-emerald-200 hover:text-white transition-colors">
                  info@cerdasbersinar.com
                </a>
              </div>

              <div className="mt-6">
                <a 
                  href="https://wa.me/6281234567890?text=Halo, saya ingin mengetahui lebih lanjut tentang program Pojok Cerdas Bersinar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Phone className="mr-2" size={16} />
                  WhatsApp
                  <ExternalLink className="ml-1" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-600/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-300/80 text-center md:text-left mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start">
                ©2025 Pojok Cerdas Bersinar. Dibuat dengan Love dan Penuh Semangat
                <Heart className="text-red-400 mx-2 fill-current" size={16} />
                untuk kemajuan UMKM Desa Kalianyar.
              </p>
              <p className="text-sm mt-1">
                Powered by <span className="text-yellow-400 font-semibold">PPK ORMAWA HMPS S1 Pendidikan Ipa X Fslkm</span> - 
                <span className="text-emerald-400 font-semibold"> Universitas Jember</span>
              </p>
            </div> 
            
            <div className="flex items-center space-x-4">
              <span className="text-emerald-300/60 text-sm">Ikuti Kami:</span>
              <div className="flex space-x-3">
                <a     
                  href="https://www.instagram.com/ppkormawa.hmpipa2025/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg flex items-center justify-center transition-colors group"
                  title="Instagram"
                >
                  <span className="text-emerald-400 group-hover:text-emerald-300 font-bold text-sm">IG</span>
                </a>
                <a 
                  href="https://facebook.com/cerdasbersinar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg flex items-center justify-center transition-colors group"
                  title="Facebook"
                >
                  <span className="text-emerald-400 group-hover:text-emerald-300 font-bold text-sm">FB</span>
                </a>
                <a 
                  href="https://youtube.com/@cerdasbersinar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg flex items-center justify-center transition-colors group"
                  title="YouTube"
                >
                  <span className="text-emerald-400 group-hover:text-emerald-300 font-bold text-sm">YT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer