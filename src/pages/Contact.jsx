// 3. src/pages/Contact.jsx - Complete Contact Page
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - could integrate with WhatsApp or email
    const whatsappMessage = `Halo, saya ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: ["Desa Kalianyar", "Kecamatan Tamanan", "Kabupaten Bondowoso, Jawa Timur"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cerdasbersinar.com", "admin@cerdasbersinar.com"]
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai cara berikut
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <info.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">Kontak Cepat</h3>
            <a 
              href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20CerdasBersinar"
              className="flex items-center w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3" size={20} />
              WhatsApp Kami
            </a>
            <a 
              href="mailto:info@cerdasbersinar.com"
              className="flex items-center w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Mail className="mr-3" size={20} />
              Email Kami
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="umkm">Informasi UMKM</option>
                    <option value="program">Program Pelatihan</option>
                    <option value="kerjasama">Kerjasama</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Kirim Pesan via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Lokasi Kami</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126146.23829308288!2d113.61439687299005!3d-8.160073890777394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd695b617d8f623%3A0xf6c4437632474338!2sJember%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1695000000000!5m2"
              width="100%"
              height="400"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Desa Kalianyar, Jember"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              <MapPin className="inline mr-2" size={16} />
              Desa Kalianyar, Kecamatan Bangsalsari, Kabupaten Jember, Jawa Timur
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Pertanyaan Yang Sering Diajukan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Apakah layanan ini gratis?</h3>
            <p className="text-gray-600">Ya, semua layanan pembelajaran dan akses marketplace adalah gratis untuk semua pengguna.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Bagaimana cara bergabung menjadi penjual?</h3>
            <p className="text-gray-600">Hubungi kami melalui WhatsApp atau email untuk proses pendaftaran sebagai penjual UMKM.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Apakah ada program pelatihan offline?</h3>
            <p className="text-gray-600">Ya, kami mengadakan pelatihan offline secara rutin di Balai Desa Kalianyar.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Bagaimana sistem pembayaran produk?</h3>
            <p className="text-gray-600">Pembayaran dilakukan langsung dengan penjual melalui WhatsApp atau COD (Cash on Delivery).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact