// 4. src/components/Features/LearningCard.jsx - Learning module card component
import { Clock, Users, Star, BookOpen, PlayCircle } from 'lucide-react'

const LearningCard = ({ module, onClick, className = "" }) => {
  const getLevelColor = (level) => {
    switch(level) {
      case 'Pemula': return 'bg-green-100 text-green-800'
      case 'Menengah': return 'bg-blue-100 text-blue-800'
      case 'Lanjutan': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={() => onClick && onClick(module)}
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
        {module.image ? (
          <img 
            src={module.image} 
            alt={module.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentNode.querySelector('.fallback-bg').style.display = 'flex'
            }}
          />
        ) : null}
        <div className="fallback-bg absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white opacity-50" />
        </div>
        {module.featured && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-semibold">
            Unggulan
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(module.level)}`}>
            {module.level}
          </span>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm text-gray-600 ml-1">{module.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{module.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{module.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center">
              <BookOpen size={14} className="mr-1" />
              <span>{module.lessons} pelajaran</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users size={14} className="mr-1" />
            <span>{module.students} peserta</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          Instruktur: <span className="font-medium">{module.instructor}</span>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
          <PlayCircle className="mr-2" size={18} />
          Mulai Belajar
        </button>
      </div>
    </div>
  )
}

export default LearningCard