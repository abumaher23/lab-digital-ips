import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Apa itu Lab Digital IPS?',
    answer: 'Lab Digital IPS adalah platform pembelajaran interaktif untuk siswa kelas 7 yang mencakup 4 tema utama dengan 28 pelajaran lengkap, simulasi interaktif, dan kuis.',
  },
  {
    question: 'Bagaimana cara menggunakan platform ini?',
    answer: 'Pilih tema yang ingin dipelajari, kemudian pilih pelajaran spesifik. Setiap pelajaran memiliki materi lengkap, simulasi interaktif, dan kuis untuk menguji pemahaman.',
  },
  {
    question: 'Apakah materi sesuai dengan kurikulum?',
    answer: 'Ya, semua materi disusun sesuai dengan kurikulum IPS Kelas 7 terkini dan mencakup 4 tema: Sosial & Lingkungan, Keberagaman, Potensi Ekonomi, dan Pemberdayaan Masyarakat.',
  },
  {
    question: 'Apakah ada biaya untuk menggunakan platform ini?',
    answer: 'Platform ini gratis untuk digunakan oleh siswa dan guru. Tidak ada biaya berlangganan atau pembayaran tersembunyi.',
  },
  {
    question: 'Bagaimana cara melacak progress belajar?',
    answer: 'Setiap pelajaran memiliki kuis dengan skor otomatis. Anda dapat melihat progress di setiap pelajaran dan tema yang telah diselesaikan.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang Lab Digital IPS
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
