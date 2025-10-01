// src/pages/About.jsx - Complete About Page
import { Users, Target, Award, MapPin, Lightbulb, Heart, Star, ArrowRight } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { name: "Zakaria Sandy Pamungkas, S. Pd., M.Pd.", role: "Dosen Pendamping", education: "Universitas Jember" },
    { name: "Lailiatul Qomariah", role: "Ketua Pelaksana", education: "Universitas Jember" },
    { name: "Desi Ummi Rusdiana", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Sitti Widatul Hasanah", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Fatah An Noufal", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Sania Nurhafidah", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Vriska Rif’atul Aini", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Puji Lestari", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Dina Nabilatul Azmi", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Bayu Choirurroziqin", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Zulfa Nadiya ", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Bintang Hudasaksana", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Rifki Dwi Setyawan", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: " Shinta Dewi Suci   ", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Shintia Wati Djini Mantros ", role: "Tim Pelaksana", education: "Universitas Jember" },
    { name: "Mohammad Aly Al Wafa", role: "Tim Pelaksana", education: "Universitas Jember" },
  ]

  const achievements = [
    { icon: Users, number: "80+", label: "Pelaku UMKM Diberdayakan" },
    { icon: Award, number: "68+", label: "Pelatihan Terselenggara" },
    { icon: Target, number: "+%", label: "Peningkatan Pendapatan" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-yellow-50/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
              Tentang
            </span>
          </h1>
          <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-wide">
            <span className="relative">
              POJOK CERDAS BERSINAR
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
            </span>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Platform digital pemberdayaan 
            <span className="text-emerald-600 font-semibold"> UMKM</span> untuk 
            <span className="text-yellow-600 font-semibold"> transformasi ekonomi kreatif</span> 
            keluarga eks buruh migran Desa Kalianyar, Tamanan, Bondowoso
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-emerald-800">Visi Kami</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              Menjadi platform digital terdepan dalam pemberdayaan ekonomi keluarga eks buruh migran 
              melalui pengembangan <span className="text-emerald-600 font-semibold">UMKM berkelanjutan</span> dan 
              <span className="text-yellow-600 font-semibold">inovatif</span> di Desa Kalianyar.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border border-yellow-200/50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-yellow-800">Misi Kami</h2>
            </div>
            <ul className="text-slate-700 space-y-3 text-lg">
              <li className="flex items-start">
                <ArrowRight className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
                Memberikan platform marketplace untuk produk UMKM lokal
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
                Menyediakan pendidikan dan pelatihan keterampilan digital
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
                Membangun komunitas yang saling mendukung
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
                Meningkatkan kesejahteraan masyarakat desa
              </li>
            </ul>
          </div>
        </div>

        {/* About Desa Kalianyar */}
        <div className="mb-20">
          <div className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-xl p-10">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-800">Desa Kalianyar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Profil Desa</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3"></div>
                    <div>
                      <strong className="text-slate-700">Lokasi:</strong>
                      <span className="text-slate-600 ml-2">Kec. Tamanan, Kab. Bondowoso, Jawa Timur</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3"></div>
                    <div>
                      <strong className="text-slate-700">Luas Wilayah:</strong>
                      <span className="text-slate-600 ml-2">12.5 km²</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3"></div>
                    <div>
                      <strong className="text-slate-700">Jumlah Penduduk:</strong>
                      <span className="text-slate-600 ml-2">±3,500 jiwa</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-3"></div>
                    <div>
                      <strong className="text-slate-700">Mata Pencaharian:</strong>
                      <span className="text-slate-600 ml-2">Pertanian, UMKM, Eks Buruh Migran</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Potensi Unggulan</h3>
                <div className="space-y-3">
                  {[
                    "Produksi tahu dan tempe berkualitas",
                    "Kerajinan genteng tanah liat",
                    "Pertanian hidroponik modern", 
                    "Makanan olahan tradisional",
                    "Potensi wisata desa"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Star className="text-yellow-500 fill-current mr-3" size={16} />
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program PPK ORMAWA */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 text-slate-800">Program PPK ORMAWA</h2>
          <div className="bg-gradient-to-br from-slate-100 via-emerald-50 to-yellow-50/50 border border-emerald-200/50 p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Program Pemberdayaan Kepada Masyarakat (PPK)</h3>
            <p className="text-slate-700 mb-8 leading-relaxed text-lg">
              Program ini merupakan inisiatif dari <span className="text-emerald-600 font-semibold">Organisasi Mahasiswa (ORMAWA) Universitas Jember</span> 
              yang bertujuan memberdayakan keluarga eks buruh migran melalui pengembangan UMKM dan 
              keterampilan digital. Program ini didanai oleh <span className="text-yellow-600 font-semibold">Kementerian Pendidikan dan Kebudayaan 
              Republik Indonesia</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm border border-emerald-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-slate-800">Fase 1</h4>
                  <p className="text-slate-600">Identifikasi & Pelatihan Dasar</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm border border-yellow-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-slate-800">Fase 2</h4>
                  <p className="text-slate-600">Pengembangan Produk & Digital</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/90 backdrop-blur-sm border border-emerald-200/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-bold text-lg mb-3 text-slate-800">Fase 3</h4>
                  <p className="text-slate-600">Pemasaran & Keberlanjutan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 text-slate-800">Pencapaian Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-3">
                  {achievement.number}
                </div>
                <div className="text-slate-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 text-slate-800">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-slate-500">{member.education}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-yellow-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                Tertarik Bergabung?
              </span>
            </h2>
            <p className="mb-8 text-emerald-200 text-xl max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut tentang 
              <span className="text-yellow-400 font-semibold"> program pemberdayaan UMKM</span> yang 
              <span className="text-emerald-400 font-semibold"> inovatif</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Hubungi Kami
              </a>
              <a 
                href="/marketplace" 
                className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Lihat Produk UMKM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About