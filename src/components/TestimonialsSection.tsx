import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  school: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Rina Amelia',
    role: 'Siswa',
    school: 'SMPN 1 Jakarta',
    content: 'Lab Digital IPS sangat membantu saya memahami materi IPS dengan cara yang menyenangkan. Simulasi interaktif membuat belajar jadi tidak membosankan!',
    rating: 5,
    avatar: '👧',
  },
  {
    name: 'Andi Pratama',
    role: 'Siswa',
    school: 'SMPN 5 Bandung',
    content: 'Materi yang disajikan lengkap dan mudah dipahami. Kuis-kuisnya juga membantu saya mengukur pemahaman saya di setiap pelajaran.',
    rating: 5,
    avatar: '👦',
  },
  {
    name: 'Dewi Sartika',
    role: 'Guru IPS',
    school: 'SMPN 3 Surabaya',
    content: 'Sebagai guru, platform ini sangat membantu dalam proses pembelajaran. Siswa-siswa saya jadi lebih antusias belajar IPS.',
    rating: 5,
    avatar: '👩‍🏫',
  },
  {
    name: 'Fajar Hidayat',
    role: 'Siswa',
    school: 'SMPN 12 Medan',
    content: 'Tampilan yang menarik dan mudah digunakan. Saya bisa belajar di mana saja dan kapan saja. Sangat direkomendasikan!',
    rating: 5,
    avatar: '👨‍🎓',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-warm-50 text-warm-700 font-semibold text-sm rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimoni dari siswa dan guru yang telah menggunakan Lab Digital IPS
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12">
            <Quote className="w-12 h-12 text-primary-300 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-soft">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].school}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warm-500 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center hover:shadow-medium transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center hover:shadow-medium transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
