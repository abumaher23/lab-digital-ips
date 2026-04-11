import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  MapPin,
  Globe,
  Thermometer,
  Shirt,
  Utensils,
  Building2,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Check,
  Target,
  Users,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const geografisFactors = [
  {
    name: 'Isolasi Geografis',
    icon: MapPin,
    color: 'from-teal-600 to-emerald-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-800',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-300',
    description: 'Indonesia terdiri dari ribuan pulau yang terpisah lautan, menyebabkan setiap daerah berkembang secara unik.',
    details: [
      'Lebih dari 17.000 pulau terpisah oleh lautan dan selat',
      'Masyarakat di setiap pulau mengembangkan budaya sendiri',
      'Suku-suku di pedalaman tetap mempertahankan tradisi asli',
      'Lautan menjadi penghambat interaksi antar masyarakat',
      'Contoh: Suku Asmat di Papua memiliki budaya yang sangat berbeda dari Suku Jawa',
    ],
  },
  {
    name: 'Kondisi Iklim',
    icon: Thermometer,
    color: 'from-emerald-600 to-green-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-800',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-300',
    description: 'Perbedaan kondisi iklim dan cuaca memengaruhi cara masyarakat beradaptasi dalam kehidupan sehari-hari.',
    details: [
      'Daerah dataran rendah tropis: pakaian tipis, rumah terbuka',
      'Daerah pegunungan dingin: pakaian tebal, rumah berdinding rapat',
      'Makanan khas disesuaikan dengan kondisi iklim setempat',
      'Contoh: Rumah Gadang di Sumatra dirancang untuk iklim tropis basah',
      'Masyarakat Papua di dataran tinggi mengenakan pakaian dari serat kulit kayu',
    ],
  },
  {
    name: 'Letak Geografis',
    icon: Globe,
    color: 'from-cyan-600 to-teal-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-800',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-300',
    description: 'Posisi Indonesia di persilangan jalur perdagangan internasional memicu akulturasi budaya dari berbagai bangsa.',
    details: [
      'Terletak di antara dua benua (Asia dan Australia) dan dua samudra',
      'Pedagang dari India, Tiongkok, Arab, dan Eropa singgah berabad-abad',
      'Percampuran budaya: Hindu-Buddha, Islam, Kristen, dan budaya lokal',
      'Contoh: Candi Borobudur (Buddha + lokal), Masjid Menara Kudus (Islam + Hindu)',
      'Hasil: kebudayaan Indonesia yang unik, beragam, dan kaya akan pengaruh asing',
    ],
  },
]

const culturalTraits = [
  {
    trait: 'Pakaian tebal dan berlapis di daerah pegunungan',
    factor: 'iklim',
    explanation: 'Masyarakat pegunungan mengenakan pakaian tebal untuk menahan suhu dingin. Di dataran tinggi Dieng atau Papua, suhu bisa sangat rendah.',
  },
  {
    trait: 'Rumah panggung di daerah rawa dan pesisir',
    factor: 'iklim',
    explanation: 'Rumah panggung melindungi dari banjir, air pasang, dan binatang buas. Bentuk ini umum di Kalimantan dan Sumatra.',
  },
  {
    trait: 'Bahasa berbeda di setiap pulau',
    factor: 'isolasi',
    explanation: 'Karena terpisah lautan, setiap pulau mengembangkan bahasa sendiri. Indonesia memiliki 1.100+ bahasa daerah.',
  },
  {
    trait: 'Masjid dengan arsitektur Hindu di Jawa',
    factor: 'letak',
    explanation: 'Letak di jalur perdagangan membawa pengaruh Hindu-Islam. Masjid Menara Kudus adalah contoh akulturasi ini.',
  },
  {
    trait: 'Makanan pedas di daerah tropis lembap',
    factor: 'iklim',
    explanation: 'Rempah-rempah dan cabai membantu tubuh menyesuaikan diri dengan iklim tropis lembap. Contoh: masakan Padang dan Manado.',
  },
  {
    trait: 'Upacara adat unik di pedalaman Papua',
    factor: 'isolasi',
    explanation: 'Isolasi geografis membuat suku-suku pedalaman Papua mempertahankan tradisi kuno yang tidak ditemukan di tempat lain.',
  },
  {
    trait: 'Senjata tradisional berbeda di setiap daerah',
    factor: 'isolasi',
    explanation: 'Setiap daerah mengembangkan senjata sendiri sesuai kebutuhan: Keris (Jawa), Mandau (Dayak), Badik (Bugis).',
  },
  {
    trait: 'Pengaruh arsitektur Tiongkok pada rumah di Semarang',
    factor: 'letak',
    explanation: 'Posisi di jalur perdagangan membawa pedagang Tiongkok yang memengaruhi arsitektur lokal, terlihat di Kota Lama Semarang.',
  },
]

const quizQuestions = [
  {
    question: 'Isolasi geografis menyebabkan keragaman budaya Indonesia. Hal ini terjadi karena...',
    options: [
      'Setiap pulau memiliki iklim yang sama persis',
      'Masyarakat di pulau berbeda terpisah lautan dan mengembangkan budaya sendiri',
      'Pemerintah memisahkan budaya setiap daerah',
      'Indonesia tidak memiliki hubungan dengan negara lain',
    ],
    correctAnswer: 1,
    explanation:
      'Isolasi geografis terjadi karena Indonesia terdiri dari 17.000+ pulau terpisah lautan. Setiap kelompok masyarakat mengembangkan budaya, bahasa, dan adat sendiri tanpa banyak pengaruh dari luar.',
  },
  {
    question: 'Mengapa masyarakat di daerah pegunungan cenderung mengenakan pakaian tebal dan rumah berdinding rapat?',
    options: [
      'Karena pengaruh budaya asing',
      'Karena mengikuti tren fashion modern',
      'Karena kondisi iklim pegunungan yang dingin',
      'Karena peraturan adat setempat',
    ],
    correctAnswer: 2,
    explanation:
      'Kondisi iklim memengaruhi cara berpakaian dan bentuk rumah. Di pegunungan yang dingin, masyarakat mengenakan pakaian tebal dan membuat rumah berdinding rapat untuk menahan suhu dingin.',
  },
  {
    question: 'Masjid Menara Kudus yang memiliki arsitektur mirip candi Hindu merupakan contoh pengaruh dari...',
    options: [
      'Isolasi geografis masyarakat Kudus',
      'Kondisi iklim tropis di Jawa Tengah',
      'Letak geografis Indonesia di jalur perdagangan internasional',
      'Kebijakan pemerintah setempat',
    ],
    correctAnswer: 2,
    explanation:
      'Letak geografis Indonesia di persilangan jalur perdagangan internasional menyebabkan masuknya berbagai budaya asing. Masjid Menara Kudus menunjukkan akulturasi budaya Islam dan Hindu akibat interaksi dengan pedagang asing.',
  },
  {
    question: 'Etnosentrisme adalah sikap menganggap budaya sendiri paling baik dan merendahkan budaya lain. Sikap ini dapat menyebabkan...',
    options: [
      'Peningkatan kerukunan antar suku',
      'Pelestarian budaya daerah secara alami',
      'Konflik dan perpecahan antarkelompok masyarakat',
      'Kemajuan ekonomi masyarakat',
    ],
    correctAnswer: 2,
    explanation:
      'Etnosentrisme yang berlebihan dapat memicu konflik antarkelompok karena masing-masing merasa budaya sendiri paling unggul. Kita perlu mengembangkan sikap saling menghargai keberagaman budaya.',
  },
]

// ============================================================
// Matching Game Component
// ============================================================

function AnalisisGeografis() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentTrait = culturalTraits[currentIndex]

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    if (answer === currentTrait.factor) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < culturalTraits.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / culturalTraits.length) * 100)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-teal-100 flex items-center justify-center">
            <Target className="w-10 h-10 text-teal-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Analisis Selesai!</h3>
        <p className="text-gray-600 mb-4">
          Skor kamu: <span className="font-bold text-teal-700">{score}/{culturalTraits.length}</span> ({percentage}%)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6 max-w-xs mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className={`h-4 rounded-full ${percentage >= 75 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {percentage >= 75
            ? 'Luar biasa! Kamu memahami hubungan geografi dan budaya dengan sangat baik.'
            : percentage >= 50
            ? 'Bagus! Terus pelajari materi untuk meningkatkan pemahaman.'
            : 'Jangan menyerah! Coba baca kembali materi tentang faktor geografis.'}
        </p>
        <button onClick={handleReset} className="btn-secondary flex items-center space-x-2 mx-auto">
          <RotateCcw className="w-4 h-4" />
          <span>Coba Lagi</span>
        </button>
      </motion.div>
    )
  }

  const answerOptions = [
    {
      key: 'isolasi',
      label: 'Isolasi Geografis',
      icon: MapPin,
      bg: 'bg-teal-50',
      border: 'border-teal-300',
      hover: 'hover:border-teal-500 hover:bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      key: 'iklim',
      label: 'Kondisi Iklim',
      icon: Thermometer,
      bg: 'bg-emerald-50',
      border: 'border-emerald-300',
      hover: 'hover:border-emerald-500 hover:bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      key: 'letak',
      label: 'Letak Geografis',
      icon: Globe,
      bg: 'bg-cyan-50',
      border: 'border-cyan-300',
      hover: 'hover:border-cyan-500 hover:bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          Soal {currentIndex + 1} dari {culturalTraits.length}
        </span>
        <span className="text-sm font-medium text-teal-700">Skor: {score}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-teal-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / culturalTraits.length) * 100}%` }}
        />
      </div>

      {/* Scenario Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 border-2 border-teal-200"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            {currentIndex + 1}
          </div>
          <p className="text-base text-gray-800 leading-relaxed">{currentTrait.trait}</p>
        </div>
        <p className="text-sm text-gray-500 italic mt-3 ml-11">
          Faktor geografis apakah yang memengaruhi ciri budaya ini?
        </p>
      </motion.div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {answerOptions.map((opt) => {
          const Icon = opt.icon
          const isCorrect = opt.key === currentTrait.factor
          const isSelected = selectedAnswer === opt.key

          return (
            <button
              key={opt.key}
              onClick={() => !showResult && handleAnswer(opt.key)}
              disabled={showResult}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                showResult
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : isSelected
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50 border-gray-200 opacity-50'
                  : `${opt.bg} ${opt.border} ${opt.hover}`
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${showResult && isCorrect ? 'text-green-600' : opt.iconColor}`} />
              <span className="font-bold text-gray-900">{opt.label}</span>
            </button>
          )
        })}
      </div>

      {/* Result */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-5 border-2 ${
            selectedAnswer === currentTrait.factor
              ? 'bg-green-50 border-green-300'
              : 'bg-orange-50 border-orange-300'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {selectedAnswer === currentTrait.factor ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600" />
            )}
            <span className="font-bold text-gray-900">
              {selectedAnswer === currentTrait.factor ? 'Benar!' : 'Kurang Tepat'}
            </span>
          </div>
          <p className="text-sm text-gray-700">{currentTrait.explanation}</p>
          <button
            onClick={handleNext}
            className="mt-4 btn-primary flex items-center space-x-2"
          >
            <span>{currentIndex < culturalTraits.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  )
}

// ============================================================
// Quiz Card Component
// ============================================================

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
        <span className="bg-teal-100 text-teal-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-teal-50 border-2 border-teal-400'
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

      {showResult && selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-4 flex items-start gap-2 ${
            selected === correctAnswer
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {selected === correctAnswer ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-medium">
              {selected === correctAnswer
                ? 'Jawaban Benar!'
                : `Jawaban Belum Tepat. Jawaban yang benar: ${String.fromCharCode(65 + correctAnswer)}`}
            </p>
            <p className="text-sm mt-1">{explanation}</p>
          </div>
        </motion.div>
      )}

      <div className="flex space-x-2">
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cek Jawaban
          </button>
        ) : (
          <button onClick={handleReset} className="btn-secondary flex items-center space-x-2">
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi</span>
          </button>
        )}
      </div>
    </div>
  )
}

// ============================================================
// Main Component
// ============================================================

export default function LabFaktorGeografis() {
  const [activeTab, setActiveTab] = useState<'materi' | 'analisis' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <MapPin className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Faktor Geografis & Keragaman Budaya</h2>
            <p className="text-teal-100">Tema IV — Pelajaran 2: Faktor Geografis & Keragaman Budaya</p>
          </div>
        </div>
        <p className="text-teal-100 text-sm">
          IPS Kelas 7 — Menganalisis hubungan kondisi geografis dengan keragaman budaya Indonesia
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('analisis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'analisis'
                ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-4 h-4 inline mr-2" />
            Analisis
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Award className="w-4 h-4 inline mr-2" />
            Kuis
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* ==================== MATERI TAB ==================== */}
            {activeTab === 'materi' && (
              <motion.div
                key="materi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Intro */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-7 h-7 text-teal-600" />
                    A. Faktor Geografis dan Keragaman Budaya
                  </h3>
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border-2 border-teal-200 mb-6">
                    <p className="text-gray-700 mb-3">
                      Keragaman budaya Indonesia tidak terjadi secara kebetulan. Kondisi <strong>geografis</strong> negara
                      kepulauan menjadi faktor utama yang membentuk keunikan setiap daerah. Tiga faktor geografis utama
                      memengaruhi keragaman budaya Indonesia.
                    </p>
                  </div>
                </div>

                {/* 3 Factors */}
                <div>
                  <div className="space-y-6">
                    {geografisFactors.map((faktor, idx) => {
                      const IconComponent = faktor.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-6 border-2 ${faktor.bgColor} ${faktor.borderColor}`}
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faktor.color} flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-gray-500">Faktor {idx + 1}</span>
                              <h4 className={`text-xl font-bold ${faktor.textColor}`}>{faktor.name}</h4>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4">{faktor.description}</p>

                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Penjelasan Detail:</h5>
                            <ul className="space-y-2">
                              {faktor.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${faktor.iconColor}`} />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Pengaruh Terhadap Budaya */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-7 h-7 text-emerald-600" />
                    B. Pengaruh Geografis Terhadap Budaya
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Kondisi geografis memengaruhi berbagai aspek kehidupan masyarakat, mulai dari cara berpakaian, jenis
                    makanan, hingga bentuk bangunan tradisional.
                  </p>

                  {/* Pakaian */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Shirt className="w-5 h-5 text-teal-600" />
                      1. Pengaruh Terhadap Pakaian Adat
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                        <h5 className="font-bold text-teal-900 mb-2">Daerah Tropis (Dataran Rendah)</h5>
                        <p className="text-sm text-gray-700">
                          Pakaian tipis dan ringan dengan ventilasi lebar. Contoh: baju batik Jawa, kain tenun NTT.
                        </p>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                        <h5 className="font-bold text-emerald-900 mb-2">Daerah Dingin (Pegunungan)</h5>
                        <p className="text-sm text-gray-700">
                          Pakaian tebal dan berlapis. Contoh: pakaian dari serat kulit kayu di Papua, selimut tradisional di Dieng.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Makanan */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Utensils className="w-5 h-5 text-emerald-600" />
                      2. Pengaruh Terhadap Makanan Khas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                        <h5 className="font-bold text-emerald-900 mb-2">Daerah Pesisir</h5>
                        <p className="text-sm text-gray-700">
                          Makanan berbahan dasar ikan dan hasil laut. Contoh: papeda (Papua), ikan bakar (Sulawesi), pempek (Palembang).
                        </p>
                      </div>
                      <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                        <h5 className="font-bold text-teal-900 mb-2">Daerah Pertanian (Pedalaman)</h5>
                        <p className="text-sm text-gray-700">
                          Makanan berbahan nasi dan hasil pertanian. Contoh: nasi liwet (Jawa), soto (Jawa Tengah), rendang (Sumatra).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arsitektur */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-cyan-600" />
                      3. Pengaruh Terhadap Arsitektur Rumah Adat
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          name: 'Rumah Gadang (Sumatra Barat)',
                          desc: 'Atap gonjong runcing untuk menahan hujan tropis, dinding kayu untuk kelembapan.',
                          factor: 'Iklim tropis basah',
                        },
                        {
                          name: 'Rumah Panggung (Kalimantan)',
                          desc: 'Tiang tinggi menghindari banjir dan binatang buas di daerah rawa.',
                          factor: 'Kondisi rawa dan sungai',
                        },
                        {
                          name: 'Honai (Papua)',
                          desc: 'Bulat kecil dengan atap jerami untuk menahan dingin dataran tinggi.',
                          factor: 'Suhu dingin pegunungan',
                        },
                        {
                          name: 'Rumah Joglo (Jawa)',
                          desc: 'Atap tinggi dan ventilasi lebar untuk sirkulasi udara di daerah tropis.',
                          factor: 'Iklim tropis panas',
                        },
                      ].map((item, rIdx) => (
                        <motion.div
                          key={rIdx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: rIdx * 0.05 }}
                          className="bg-white rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {rIdx + 1}
                            </span>
                            <div>
                              <h5 className="font-bold text-gray-900">{item.name}</h5>
                              <p className="text-sm text-gray-700">{item.desc}</p>
                              <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full inline-block mt-1">
                                Faktor: {item.factor}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Etnosentrisme */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-7 h-7 text-rose-600" />
                    C. Etnosentrisme: Sikap yang Perlu Dihindari
                  </h3>
                  <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-5 border-2 border-rose-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Etnosentrisme</strong> adalah sikap menganggap budaya sendiri sebagai yang paling baik
                      dan benar, sementara budaya lain dianggap lebih rendah. Sikap ini sangat berbahaya karena dapat
                      memicu <strong>konflik dan perpecahan</strong> antarkelompok masyarakat.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-rose-200">
                      <h5 className="font-bold text-rose-900 mb-2">Mengapa Etnosentrisme Harus Dihindari?</h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        {[
                          'Menghargai keragaman sebagai kekayaan bangsa',
                          'Setiap budaya memiliki keunikan dan nilai yang sama',
                          'Bhinneka Tunggal Ika — berbeda-beda tetapi tetap satu',
                          'Indonesia kuat karena keberagamannya, bukan keseragamannya',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border-2 border-teal-300">
                  <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Rangkuman
                  </h4>
                  <ul className="space-y-2 text-sm text-teal-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Tiga faktor geografis</strong>: isolasi geografis, kondisi iklim, dan letak geografis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Geografi memengaruhi <strong>pakaian, makanan, dan arsitektur</strong> setiap daerah.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Etnosentrisme</strong> harus dihindari untuk menjaga persatuan dan kerukunan.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ==================== ANALISIS TAB ==================== */}
            {activeTab === 'analisis' && (
              <motion.div
                key="analisis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Analisis: Cocokkan Ciri Budaya & Faktor Geografis
                  </h3>
                  <p className="text-gray-600">
                    Bacalah setiap ciri budaya, lalu tentukan faktor geografis yang memengaruhinya.
                  </p>
                </div>
                <AnalisisGeografis />
              </motion.div>
            )}

            {/* ==================== KUIS TAB ==================== */}
            {activeTab === 'kuis' && (
              <motion.div
                key="kuis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Kuis Faktor Geografis & Keragaman Budaya
                  </h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang pengaruh geografis terhadap keragaman budaya Indonesia.
                  </p>
                </div>

                <div className="space-y-6">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
