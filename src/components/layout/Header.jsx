import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, ShoppingBag, BookOpen, Users, Phone } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Beranda', href: '/', icon: Home },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
    { name: 'Pembelajaran', href: '/learning', icon: BookOpen },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Tentang Kami', href: '/about', icon: Users },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  // Get current page name based on pathname
  const getCurrentPageName = () => {
    const currentNav = navigation.find(nav => nav.href === location.pathname)
    return currentNav ? currentNav.name : 'Beranda'
  }

  return (
    <>
      {/* Desktop Header - Hidden on Mobile */}
      <div className="hidden lg:block">
        {/* Premium animated top bar with emerald theme */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white text-sm py-3 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-blue-600/20 animate-pulse"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2 font-medium">
                <span>Platform Pembelajaran Kalianyar Bersinar</span>
              </span>
            </div>
            <div className="flex items-center space-x-6 text-xs">
              <span className="flex items-center space-x-1 opacity-90 hover:opacity-100 transition-opacity">
              
              </span>
              <span className="flex items-center space-x-1 opacity-90 hover:opacity-100 transition-opacity">
                <span>✉️</span>
                <span>info@cerdasbersinar.com</span>
              </span>
            </div>
          </div>
        </div>

        <header className={`bg-gradient-to-r from-slate-900/98 via-emerald-900/98 to-slate-800/98 backdrop-blur-2xl sticky top-0 z-50 transition-all duration-500 border-b ${scrolled
          ? 'shadow-2xl shadow-emerald-500/20 border-emerald-100/60 py-3'
          : 'shadow-xl shadow-emerald-500/10 border-transparent py-4'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {/* Enhanced Premium Logo with emerald theme */}
              <div className="flex items-center group">
                <Link to="/" className="flex items-center space-x-3 transition-all duration-500 group-hover:scale-105">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <img src="/cerdas.png" alt="Icon" className="w-6 h-6 object-contain filter invert brightness-0" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-400 rounded-2xl blur-md opacity-30 group-hover:opacity-60 group-hover:blur-lg transition-all duration-500"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-yellow-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                      Pojok Cerdas
                    </span>
                    <span className="text-4xl lg:text-6xl font-bold text-white tracking-wide relative">
                      BERSINAR
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
                    </span>
                  </div>
                </Link>
              </div>

              {/* Enhanced Desktop Navigation with emerald theme */}
              <nav className="flex items-center space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 group overflow-hidden ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/40'
                        : 'text-emerald-200 hover:text-white hover:bg-emerald-500/20'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {location.pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-emerald-500/0 group-hover:from-emerald-600/10 group-hover:to-emerald-500/10 transition-all duration-500 rounded-2xl"></div>
                    )}
                    {location.pathname === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl"></div>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Enhanced CTA Buttons with emerald theme */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/learning"
                  className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 group overflow-hidden transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Mulai Belajar</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced border gradient with emerald animation */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent">
            <div className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-400 opacity-60 animate-pulse"></div>
          </div>
        </header>
      </div>

      {/* Mobile Header - Only Logo, simplified */}
      <div className="lg:hidden">
        <header className="bg-gradient-to-r from-slate-900/98 via-emerald-900/98 to-slate-800/98 backdrop-blur-2xl sticky top-0 z-50 border-b border-emerald-100/60 shadow-lg shadow-emerald-500/10 py-3">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            {/* Mobile Logo - Compact with emerald theme */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <img src="/cerdas.png" alt="Icon" className="w-6 h-6 object-contain filter invert brightness-0" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                    Pojok Cerdas
                  </span>
                  <span className="text-sm font-bold text-white">BERSINAR</span>
                  <span className="text-xs text-emerald-200 font-medium -mt-1">Desa Kalianyar</span>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-500/20 rounded-xl transition-all duration-300 lg:hidden"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-emerald-100/20 bg-gradient-to-r from-slate-900/98 via-emerald-900/98 to-slate-800/98 backdrop-blur-2xl">
              <div className="px-4 py-3 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg'
                        : 'text-emerald-200 hover:text-white hover:bg-emerald-500/20'
                    }`}
                  >
                    <item.icon size={20} strokeWidth={2.5} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-emerald-100/20">
                  <Link
                    to="/learning"
                    onClick={handleNavClick}
                    className="block w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Mulai Belajar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Mobile Bottom Navigation - Sticky with emerald theme */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-r from-slate-900/98 via-emerald-900/98 to-slate-800/98 backdrop-blur-2xl border-t border-emerald-100/20 shadow-2xl shadow-emerald-500/20">
          <div className="px-4 py-2">
            <div className="flex justify-around items-center">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/40'
                        : 'text-emerald-200 hover:text-white'
                    }`}
                  >
                    <div className={`transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      <IconComponent size={20} strokeWidth={2.5} />
                    </div>
                    <span className={`text-xs font-semibold mt-1 transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-emerald-200'
                    }`}>
                      {item.name === 'Tentang Kami' ? 'Tentang' : item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}

                    {/* Hover effect background */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Premium gradient border for mobile bottom nav with emerald */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-emerald-400 opacity-60"></div>
        </div>
      </div>

      {/* Mobile Content Padding Bottom - to prevent content being hidden behind bottom nav */}
      <div className="lg:hidden h-20"></div>

      {/* Custom keyframes for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Smooth bounce animation for active mobile nav */
        .mobile-nav-active {
          animation: bounceIn 0.3s ease-out;
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Add safe area for devices with home indicator */
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .mobile-bottom-nav {
            padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </>
  )
}

export default Header