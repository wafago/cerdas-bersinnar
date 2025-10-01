// 7. src/components/Common/BackToTop.jsx - Back to top button
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTop = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110 z-30"
      title="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}

export default BackToTop