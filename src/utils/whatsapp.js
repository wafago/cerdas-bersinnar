// 6. src/utils/whatsapp.js
export const createWhatsAppLink = (phoneNumber, productName, productPrice) => {
  const message = `Halo, saya tertarik dengan produk ${productName} seharga Rp ${productPrice.toLocaleString()}. Bisakah kita diskusi lebih lanjut?`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

export const openWhatsApp = (phoneNumber, productName, productPrice) => {
  const link = createWhatsAppLink(phoneNumber, productName, productPrice)
  window.open(link, '_blank')
}