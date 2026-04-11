import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  Anchor,
  Fish,
  Waves,
  ShipWheel,
  Sailboat,
  Wind,
  Droplets,
  ThermometerSun,
  CheckCircle,
  XCircle,
  RotateCcw,
  ChevronRight,
  MapPin,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const kemaritimanItems = [
  {
    icon: Fish,
    name: 'Perikanan Laut',
    description: 'Indonesia memiliki potensi perikanan yang sangat besar dengan wilayah laut yang luas. Perikanan tradisional menggunakan perahu dan jala, sedangkan perikanan modern menggunakan kapal besar dan alat tangkap canggih.',
    examples: [
      'Tradisional: Perahu jukung, jaring, pancing',
      'Modern: Kapal pukat, purse seine, rawai',
      'Budi daya: Tambak udang (Sulawesi), kolam lele (Jawa)',
    ],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
  },
  {
    icon: Waves,
    name: 'Energi Kelautan',
    description: 'Laut menyimpan berbagai potensi energi yang dapat dimanfaatkan untuk kebutuhan masa depan. Indonesia sebagai negara kepulauan memiliki potensi energi laut yang sangat besar.',
    examples: [
      'Energi gelombang (ombak) - memanfaatkan gerakan ombak untuk menghasilkan listrik',
      'Energi pasang surut air laut - memanfaatkan perbedaan tinggi rendah air laut',
      'Energi arus laut - memanfaatkan gerakan arus laut yang konsisten',
      'Energi panas laut (OTEC) - memanfaatkan perbedaan suhu air laut permukaan dan dalam',
    ],
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-300',
    textColor: 'text-teal-800',
  },
  {
    icon: Sailboat,
    name: 'Wisata Bahari',
    description: 'Indonesia memiliki keindahan laut yang mendunia, menjadikannya destinasi wisata bahari unggulan. Dari pantai yang indah hingga terumbu karang yang memukau.',
    examples: [
      'Pantai: Kuta (Bali), Tanjung Kelayang (Belitung), Pantai Pink (Lombok)',
      'Terumbu karang: Bunaken (Sulawesi), Raja Ampat (Papua), Wakatobi',
      'Diving spot: Gili Trawangan, Komodo, Derawan (Kalimantan)',
    ],
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-300',
    textColor: 'text-violet-800',
  },
]

const quizQuestions = [
  {
    question: 'Perbedaan perikanan tradisional dan modern terletak pada...',
    options: [
      'Jenis ikan yang ditangkap',
      'Alat dan metode penangkapan yang digunakan',
      'Laut tempat menangkap ikan',
      'Jumlah nelayan yang bekerja',
    ],
    correctAnswer: 1,
    explanation:
      'Perbedaan utama terletak pada alat dan metode. Perikanan tradisional menggunakan perahu kecil, jaring, dan pancing sederhana. Sementara perikanan modern menggunakan kapal besar, pukat, purse seine, dan alat tangkap canggih.',
  },
  {
    question: 'Energi kelautan yang memanfaatkan perbedaan suhu air laut permukaan dan dalam disebut...',
    options: [
      'Energi gelombang (wave energy)',
      'Energi pasang surut (tidal energy)',
      'Energi arus laut (ocean current energy)',
      'Energi panas laut (OTEC)',
    ],
    correctAnswer: 3,
    explanation:
      'OTEC (Ocean Thermal Energy Conversion) memanfaatkan perbedaan suhu antara air laut permukaan yang hangat dan air laut dalam yang dingin untuk menghasilkan energi listrik.',
  },
  {
    question: 'Destinasi wisata bahari Raja Ampat terkenal karena...',
    options: [
      'Memiliki pasir pantai terputih di dunia',
      'Memiliki keanekaragaman terumbu karang tertinggi di dunia',
      'Memiliki gelombang terbesar untuk selancar',
      'Merupakan tempat penangkapan ikan terbesar',
    ],
    correctAnswer: 1,
    explanation:
      'Raja Ampat di Papua dikenal memiliki keanekaragaman terumbu karang tertinggi di dunia dengan lebih dari 600 jenis karang keras dan 1.500 jenis ikan. Ini menjadikannya surga bagi penyelam.',
  },
  {
    question: 'Manakah yang BUKAN merupakan potensi SDA kemaritiman Indonesia?',
    options: [
      'Perikanan tangkap dan budi daya',
      'Energi gelombang dan pasang surut',
      'Pertambangan batubara di pedalaman',
      'Wisata bahari dan terumbu karang',
    ],
    correctAnswer: 2,
    explanation:
      'Pertambangan batubara di pedalaman bukan SDA kemaritiman karena berada di daratan, bukan di wilayah laut. SDA kemaritiman meliputi perikanan laut, energi kelautan, dan wisata bahari.',
  },
]

// ============================================================
// Jelajahi Tab - Maritime Showcase
// ============================================================

function JelajahiTab() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="space-y-4">
      <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-cyan-900 text-lg">Jelajahi Potensi Kemaritiman Indonesia</h4>
            <p className="text-cyan-800 text-sm mt-1">
              Indonesia sebagai negara kepulauan memiliki potensi laut yang sangat besar. Jelajahi setiap kategori!
            </p>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2">
        {kemaritimanItems.map((item, idx) => {
          const ItemIcon = item.icon
          const isActive = idx === activeItem

          return (
            <button
              key={idx}
              onClick={() => setActiveItem(idx)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg border-2 transition-all text-sm font-medium ${
                isActive
                  ? `bg-gradient-to-r ${item.color} text-white border-transparent shadow-md`
                  : 'bg-white border-gray-200 text-gray-700 hover:border-cyan-300'
              }`}
            >
              <ItemIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`rounded-xl p-5 border-2 ${kemaritimanItems[activeItem].bgColor} ${kemaritimanItems[activeItem].borderColor}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${kemaritimanItems[activeItem].color} flex items-center justify-center`}>
              {(() => { const IC = kemaritimanItems[activeItem].icon; return <IC className="w-6 h-6 text-white" /> })()}
            </div>
            <div>
              <h5 className={`font-bold text-lg ${kemaritimanItems[activeItem].textColor}`}>
                {kemaritimanItems[activeItem].name}
              </h5>
            </div>
          </div>
          <p className={`${kemaritimanItems[activeItem].textColor} mb-4`}>
            {kemaritimanItems[activeItem].description}
          </p>
          <div>
            <h6 className={`font-bold text-sm ${kemaritimanItems[activeItem].textColor} mb-2`}>Detail:</h6>
            <ul className="space-y-2">
              {kemaritimanItems[activeItem].examples.map((ex, exIdx) => (
                <motion.li
                  key={exIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: exIdx * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-0.5 ${kemaritimanItems[activeItem].textColor}`} />
                  <span className={`${kemaritimanItems[activeItem].textColor} text-sm`}>{ex}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ============================================================
// Kuis Tab
// ============================================================

function KuisTab() {
  return (
    <div className="space-y-6">
      <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-cyan-900">Kuis Potensi & Pemanfaatan SDA Kemaritiman</h3>
            <p className="text-cyan-800 text-sm mt-1">
              Uji pemahamanmu tentang potensi kelautan Indonesia. Jawab 4 soal berikut!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {quizQuestions.map((q, idx) => (
          <QuizCard
            key={idx}
            question={q.question}
            options={q.options}
            correctAnswer={q.correctAnswer}
            explanation={q.explanation}
            questionNumber={idx + 1}
          />
        ))}
      </div>
    </div>
  )
}

function QuizCard({
  question,
  options,
  correctAnswer,
  explanation,
  questionNumber,
}: {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  questionNumber: number
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleCheck = () => {
    if (selected !== null) setShowResult(true)
  }

  const handleReset = () => {
    setSelected(null)
    setShowResult(false)
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="bg-cyan-100 text-cyan-700 text-sm font-bold px-3 py-1 rounded-full">
          Soal {questionNumber}
        </span>
      </div>

      <h4 className="font-semibold text-gray-900 mb-4 text-lg">{question}</h4>

      <div className="space-y-2 mb-4">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !showResult && setSelected(idx)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              selected === idx
                ? showResult
                  ? idx === correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : 'bg-red-100 border-2 border-red-500'
                  : 'bg-cyan-50 border-2 border-cyan-400'
                : showResult && idx === correctAnswer
                  ? 'bg-green-100 border-2 border-green-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
            disabled={showResult}
          >
            <span className="font-medium mr-2 text-gray-700">{String.fromCharCode(65 + idx)}.</span>
            <span className="text-gray-800">{option}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-4 ${
            selected === correctAnswer
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {selected === correctAnswer ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="font-bold">
              {selected === correctAnswer ? 'Jawaban Benar!' : 'Jawaban Belum Tepat'}
            </span>
          </div>
          <p className="text-sm">{explanation}</p>
        </motion.div>
      )}

      <div className="flex space-x-2">
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cek Jawaban
          </button>
        ) : (
          <button onClick={handleReset} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors inline-flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Coba Lagi
          </button>
        )}
      </div>
    </div>
  )
}

// ============================================================
// Main Component
// ============================================================

export default function LabKemaritiman() {
  const [activeTab, setActiveTab] = useState<'materi' | 'jelajahi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Anchor className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab SDA Kemaritiman</h2>
            <p className="text-blue-100">Tema III - Pelajaran 3: Potensi & Pemanfaatan SDA Kemaritiman</p>
          </div>
        </div>
        <p className="text-blue-100 text-sm">
          IPS Kelas 7 — Menjajahi kekayaan laut Indonesia: perikanan, energi kelautan, dan wisata bahari
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-cyan-50 text-cyan-700 border-b-2 border-cyan-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('jelajahi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'jelajahi'
                ? 'bg-cyan-50 text-cyan-700 border-b-2 border-cyan-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Jelajahi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-cyan-50 text-cyan-700 border-b-2 border-cyan-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Kuis
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* ===================== MATERI TAB ===================== */}
            {activeTab === 'materi' && (
              <motion.div
                key="materi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Potensi & Pemanfaatan SDA Kemaritiman</h3>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Anchor className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-blue-800">
                        Indonesia sebagai negara kepulauan terbesar di dunia memiliki wilayah laut yang sangat luas.
                        Laut Indonesia menyimpan potensi luar biasa berupa perikanan, energi kelautan, dan keindahan wisata bahari.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Perikanan Laut */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Fish className="w-6 h-6 text-blue-600" />
                    1. Perikanan Laut
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Indonesia memiliki potensi perikanan yang sangat besar. Terdapat dua jenis perikanan berdasarkan metode yang digunakan:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tradisional */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl p-5 border-2 bg-blue-50 border-blue-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                          <Sailboat className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-bold text-blue-800">Perikanan Tradisional</h5>
                      </div>
                      <p className="text-sm text-blue-800 opacity-80 mb-2">
                        Menggunakan alat dan metode sederhana yang telah diwariskan turun-temurun.
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-blue-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Perahu jukung (perahu kecil)
                        </li>
                        <li className="text-sm text-blue-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Jaring dan jala tradisional
                        </li>
                        <li className="text-sm text-blue-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Pancing sederhana
                        </li>
                      </ul>
                    </motion.div>

                    {/* Modern */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-xl p-5 border-2 bg-teal-50 border-teal-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                          <ShipWheel className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-bold text-teal-800">Perikanan Modern</h5>
                      </div>
                      <p className="text-sm text-teal-800 opacity-80 mb-2">
                        Menggunakan teknologi dan alat canggih untuk hasil tangkapan yang lebih besar.
                      </p>
                      <ul className="space-y-1">
                        <li className="text-sm text-teal-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Kapal pukat (trawl)
                        </li>
                        <li className="text-sm text-teal-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Purse seine (jaring cincin)
                        </li>
                        <li className="text-sm text-teal-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          Rawai (tali panjang)
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Energi Kelautan */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Waves className="w-6 h-6 text-teal-600" />
                    2. Energi Kelautan
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Laut menyimpan berbagai potensi energi yang dapat dimanfaatkan untuk kebutuhan masa depan.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Waves,
                        name: 'Energi Gelombang',
                        desc: 'Memanfaatkan gerakan ombak untuk menghasilkan listrik melalui alat konverter gelombang.',
                        color: 'from-blue-500 to-cyan-600',
                        bgColor: 'bg-blue-50',
                        textColor: 'text-blue-800',
                      },
                      {
                        icon: Droplets,
                        name: 'Energi Pasang Surut',
                        desc: 'Memanfaatkan perbedaan tinggi rendah air laut saat pasang dan surut untuk menggerakkan turbin.',
                        color: 'from-indigo-500 to-blue-600',
                        bgColor: 'bg-indigo-50',
                        textColor: 'text-indigo-800',
                      },
                      {
                        icon: Wind,
                        name: 'Energi Arus Laut',
                        desc: 'Memanfaatkan gerakan arus laut yang konsisten untuk memutar turbin bawah laut.',
                        color: 'from-teal-500 to-emerald-600',
                        bgColor: 'bg-teal-50',
                        textColor: 'text-teal-800',
                      },
                      {
                        icon: ThermometerSun,
                        name: 'Energi Panas Laut (OTEC)',
                        desc: 'Memanfaatkan perbedaan suhu air laut permukaan dan dalam untuk menghasilkan energi.',
                        color: 'from-orange-500 to-amber-600',
                        bgColor: 'bg-orange-50',
                        textColor: 'text-orange-800',
                      },
                    ].map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-4 border-2 ${item.bgColor} border-transparent`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                              <ItemIcon className="w-5 h-5 text-white" />
                            </div>
                            <h5 className={`font-bold ${item.textColor}`}>{item.name}</h5>
                          </div>
                          <p className={`text-sm ${item.textColor} opacity-80`}>{item.desc}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Wisata Bahari */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sailboat className="w-6 h-6 text-violet-600" />
                    3. Wisata Bahari
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Indonesia memiliki keindahan laut yang mendunia, menjadikannya destinasi wisata bahari unggulan.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: 'Pantai',
                        examples: 'Kuta (Bali), Tanjung Kelayang (Belitung), Pantai Pink (Lombok)',
                        color: 'from-violet-500 to-purple-600',
                        bgColor: 'bg-violet-50',
                        textColor: 'text-violet-800',
                      },
                      {
                        name: 'Terumbu Karang',
                        examples: 'Bunaken (Sulawesi), Raja Ampat (Papua), Wakatobi',
                        color: 'from-cyan-500 to-blue-600',
                        bgColor: 'bg-cyan-50',
                        textColor: 'text-cyan-800',
                      },
                      {
                        name: 'Diving Spot',
                        examples: 'Gili Trawangan, Komodo, Derawan (Kalimantan)',
                        color: 'from-teal-500 to-emerald-600',
                        bgColor: 'bg-teal-50',
                        textColor: 'text-teal-800',
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`rounded-xl p-4 border-2 ${item.bgColor} border-transparent`}
                      >
                        <h5 className={`font-bold ${item.textColor} mb-1`}>{item.name}</h5>
                        <p className={`text-sm ${item.textColor} opacity-80`}>{item.examples}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================== JELAJAHI TAB ===================== */}
            {activeTab === 'jelajahi' && (
              <motion.div
                key="jelajahi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <JelajahiTab />
              </motion.div>
            )}

            {/* ===================== KUIS TAB ===================== */}
            {activeTab === 'kuis' && (
              <motion.div
                key="kuis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KuisTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
