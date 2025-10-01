// src/pages/Learning.jsx - Learning Platform dengan Dropdown Materi
import { useState } from 'react'
import { Clock, Users, Star, BookOpen, FileText, Award, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { learningModules, categories } from '../data/learning'

const Learning = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [selectedModule, setSelectedModule] = useState(null)
  const [expandedLessons, setExpandedLessons] = useState([])

  const filteredModules = learningModules.filter(module => 
    selectedCategory === 'Semua' || module.category === selectedCategory
  )

  const toggleLesson = (index) => {
    setExpandedLessons(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const ModuleCard = ({ module }) => (
    <div className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
         onClick={() => {
           setSelectedModule(module)
           setExpandedLessons([])
         }}>
      <div className="h-48 bg-gradient-to-br from-emerald-100 to-yellow-50 flex items-center justify-center relative overflow-hidden">
        <img 
          src={module.image} 
          alt={module.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=' + encodeURIComponent(module.title)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
            module.level === 'Pemula' ? 'bg-emerald-100 text-emerald-800' :
            module.level === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
            'bg-slate-100 text-slate-800'
          }`}>
            {module.level}
          </span>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm text-slate-600 ml-1 font-medium">{module.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3">{module.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{module.description}</p>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-emerald-500" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1 text-emerald-500" />
            <span>{module.lessons} materi</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1 text-emerald-500" />
            <span>{module.students}</span>
          </div>
        </div>
        
        <div className="text-sm text-slate-600 mb-4">
          Instruktur: <span className="font-semibold text-emerald-600">{module.instructor}</span>
        </div>
        
        <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25">
          <FileText className="mr-2" size={20} />
          Baca Modul
        </button>
      </div>
    </div>
  )

  const LessonAccordion = ({ lesson, index, isExpanded, onToggle }) => (
    <div className="border border-emerald-100/50 rounded-xl overflow-hidden bg-white/80 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 hover:bg-emerald-50/50 transition-colors group"
      >
        <div className="flex items-center flex-1">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 group-hover:scale-110 transition-transform">
            {index + 1}
          </div>
          <span className="text-slate-800 font-semibold text-left">{lesson.title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="text-emerald-600 flex-shrink-0 ml-4" size={24} />
        ) : (
          <ChevronDown className="text-emerald-600 flex-shrink-0 ml-4" size={24} />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-5 pb-5 pt-2 bg-gradient-to-br from-slate-50 to-emerald-50/30">
          <div className="prose prose-slate max-w-none">
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {lesson.text}
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const ModuleDetail = ({ module, onBack }) => (
    <div className="max-w-5xl mx-auto">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-emerald-600 hover:text-emerald-800 font-semibold transition-colors group"
      >
        <ArrowRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" size={20} />
        Kembali ke Daftar Modul
      </button>
      
      <div className="bg-white/90 backdrop-blur-sm border border-emerald-100/50 rounded-2xl shadow-xl overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-emerald-100 to-yellow-50 flex items-center justify-center relative">
          <img 
            src={module.image} 
            alt={module.title} 
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = 'https://via.placeholder.com/800x300?text=' + encodeURIComponent(module.title)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className={`text-sm px-4 py-2 rounded-full font-semibold ${
              module.level === 'Pemula' ? 'bg-emerald-100 text-emerald-800' :
              module.level === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
              'bg-slate-100 text-slate-800'
            }`}>
              {module.level}
            </span>
            <div className="flex items-center">
              <Star className="text-yellow-400 fill-current" size={24} />
              <span className="text-xl font-bold ml-2">{module.rating}</span>
              <span className="text-slate-500 ml-2">({module.students} peserta)</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">{module.title}</h1>
          <p className="text-slate-600 text-xl mb-8 leading-relaxed">{module.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 p-6 bg-gradient-to-br from-emerald-50 to-yellow-50/50 rounded-2xl border border-emerald-100/50">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-emerald-600" size={32} />
              <div className="font-bold text-lg text-slate-800">{module.duration}</div>
              <div className="text-sm text-slate-600">Waktu Baca</div>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto mb-3 text-yellow-600" size={32} />
              <div className="font-bold text-lg text-slate-800">{module.lessons} Materi</div>
              <div className="text-sm text-slate-600">Pembelajaran</div>
            </div>
            <div className="text-center">
              <Award className="mx-auto mb-3 text-emerald-600" size={32} />
              <div className="font-bold text-lg text-slate-800">Sertifikat</div>
              <div className="text-sm text-slate-600">Setelah Selesai</div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Instruktur</h2>
            <div className="flex items-center bg-gradient-to-r from-emerald-50 to-yellow-50/50 p-6 rounded-2xl border border-emerald-100/50">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-6">
                <Users className="text-white" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-800">{module.instructor}</h3>
                <p className="text-slate-600 text-lg">Bidang {module.category}</p>
                <div className="flex items-center mt-2">
                  <Star className="text-yellow-400 fill-current mr-1" size={16} />
                  <span className="text-sm text-slate-600">Rating instruktur: {module.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-slate-800">Materi Pembelajaran</h2>
              <button 
                onClick={() => {
                  if (expandedLessons.length === module.content.length) {
                    setExpandedLessons([])
                  } else {
                    setExpandedLessons(module.content.map((_, i) => i))
                  }
                }}
                className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm flex items-center"
              >
                {expandedLessons.length === module.content.length ? 'Tutup Semua' : 'Buka Semua'}
              </button>
            </div>
            
            <div className="space-y-4">
              {module.content.map((lesson, index) => (
                <LessonAccordion
                  key={index}
                  lesson={lesson}
                  index={index}
                  isExpanded={expandedLessons.includes(index)}
                  onToggle={() => toggleLesson(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sticky bottom-6 z-10">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-8 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-emerald-500/25">
              <Award className="mr-3" size={24} />
              Selesaikan Modul
            </button>
            <button className="flex-1 bg-white/80 border-2 border-emerald-200 text-emerald-700 py-4 px-8 rounded-2xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center font-bold text-lg">
              <BookOpen className="mr-3" size={24} />
              Simpan ke Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  if (selectedModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-yellow-50/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <ModuleDetail module={selectedModule} onBack={() => setSelectedModule(null)} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-yellow-50/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl">
              Platform
            </span>
          </h1>
          <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-wide">
            <span className="relative">
              PEMBELAJARAN BERSINAR
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"></div>
            </span>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Tingkatkan kemampuan bisnis dan keterampilan 
            <span className="text-emerald-600 font-semibold"> UMKM Anda</span> dengan pembelajaran yang 
            <span className="text-yellow-600 font-semibold"> praktis</span> dan 
            <span className="text-emerald-600 font-semibold"> aplikatif</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-2">25+</div>
            <div className="text-slate-600 text-sm font-medium">Modul Pembelajaran</div>
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-slate-600 text-sm font-medium">Peserta Aktif</div>
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-slate-600 text-sm font-medium">Tingkat Kepuasan</div>
          </div>
          <div className="text-center bg-white/90 backdrop-blur-sm border border-emerald-100/50 p-8 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-emerald-500 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-slate-600 text-sm font-medium">Gratis</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Pilih Kategori</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-white/80 text-slate-700 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredModules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-yellow-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-300 bg-clip-text text-transparent">
                Siap Mengembangkan Usaha Anda?
              </span>
            </h2>
            <p className="text-xl mb-8 text-emerald-200 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelaku UMKM yang telah merasakan manfaat dari 
              <span className="text-yellow-400 font-semibold"> pembelajaran berkualitas</span>
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
              Mulai Pembelajaran Gratis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learning