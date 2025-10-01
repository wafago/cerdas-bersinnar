// 6. src/utils/constants.js - App constants
export const APP_CONFIG = {
  name: "CerdasBersinar",
  tagline: "Platform Pemberdayaan UMKM Desa Kalianyar",
  version: "1.0.0",
  description: "Platform digital untuk pemberdayaan mantan buruh migran melalui UMKM",
  
  // Contact
  whatsappNumber: "6281234567890",
  email: "info@cerdasbersinar.com",
  
  // Social Media
  socialMedia: {
    facebook: "https://facebook.com/cerdasbersinar",
    instagram: "https://instagram.com/cerdasbersinar",
    youtube: "https://youtube.com/c/cerdasbersinar",
    whatsapp: "https://wa.me/6281234567890"
  },
  
  // SEO
  seo: {
    keywords: "UMKM, Desa Kalianyar, Jember, Buruh Migran, Pemberdayaan, Marketplace",
    author: "Tim PPK ORMAWA Universitas Jember"
  }
}

export const ROUTES = {
  HOME: '/',
  MARKETPLACE: '/marketplace',
  LEARNING: '/learning',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRODUCT_DETAIL: '/product/:id',
  MODULE_DETAIL: '/learning/:id'
}

export const COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  }
}