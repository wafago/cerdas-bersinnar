// 3. src/components/Features/WhatsAppButton.jsx - Enhanced WhatsApp button
import { MessageCircle, ExternalLink } from 'lucide-react'
import { createWhatsAppLink } from '../../utils/whatsapp'

const WhatsAppButton = ({ 
  phoneNumber, 
  message, 
  productName, 
  productPrice,
  className = "",
  size = "medium",
  variant = "primary"
}) => {
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  }
  
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "border border-green-500 text-green-500 hover:bg-green-50",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50"
  }

  const handleClick = () => {
    let finalMessage = message
    
    if (!message && productName) {
      finalMessage = `Halo, saya tertarik dengan produk ${productName}`
      if (productPrice) {
        finalMessage += ` seharga Rp ${productPrice.toLocaleString()}`
      }
      finalMessage += '. Bisakah kita diskusi lebih lanjut?'
    }
    
    const whatsappUrl = createWhatsAppLink(phoneNumber, finalMessage || 'Halo!')
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${className}
        rounded-lg font-medium transition-colors flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
      `}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Pesan via WhatsApp
      <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
    </button>
  )
}

// Floating WhatsApp button untuk customer service
export const FloatingWhatsApp = ({ phoneNumber = "6281234567890" }) => {
  const handleClick = () => {
    const message = "Halo! Saya ingin bertanya tentang CerdasBersinar."
    const whatsappUrl = createWhatsAppLink(phoneNumber, message)
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
      title="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

export default WhatsAppButton