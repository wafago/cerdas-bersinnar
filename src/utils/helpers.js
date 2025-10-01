// 8. src/utils/helpers.js - Utility helper functions
export const formatCurrency = (amount, currency = 'IDR') => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export const formatNumber = (number) => {
  return new Intl.NumberFormat('id-ID').format(number)
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export const timeAgo = (date) => {
  const now = new Date()
  const diffInMs = now - new Date(date)
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Hari ini'
  if (diffInDays === 1) return 'Kemarin'
  if (diffInDays < 7) return `${diffInDays} hari yang lalu`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu yang lalu`
  return `${Math.floor(diffInDays / 30)} bulan yang lalu`
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone) => {
  const phoneRegex = /^(\+62|62|0)[\s-]?(\d{2,3})[\s-]?(\d{3,4})[\s-]?(\d{3,4})[\s-]?(\d{0,3})$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const getImageUrl = (imagePath, fallback = '/images/placeholder.jpg') => {
  if (!imagePath) return fallback
  
  // Check if it's already a full URL
  if (imagePath.startsWith('http')) return imagePath
  
  // For local images
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}

// SEO helpers
export const updateMetaTags = ({ title, description, keywords, ogImage }) => {
  if (title) {
    document.title = `${title} | CerdasBersinar`
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = title
  }
  
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.content = description
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.content = description
  }
  
  if (keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) metaKeywords.content = keywords
  }
  
  if (ogImage) {
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (ogImageMeta) ogImageMeta.content = ogImage
  }
}