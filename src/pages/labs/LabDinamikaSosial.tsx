import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Users,
  Globe,
  Brain,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  TrendingUp,
  AlertTriangle,
  Flame,
  Zap,
  Radio,
  Swords,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const internalFactors = [
  {
    name: 'Perubahan Penduduk',
    icon: Users,
    color: '#a855f7',
    description: 'Bertambah atau berkurangnya jumlah penduduk memengaruhi struktur masyarakat.',
    example: 'Urbanisasi: penduduk desa pindah ke kota, mengubah tata kehidupan di kedua wilayah.',
  },
  {
    name: 'Penemuan Baru (Inovasi)',
    icon: Zap,
    color: '#7c3aed',
    description: 'Inovasi teknologi atau sosial mengubah cara hidup masyarakat.',
    example: 'Penemuan smartphone mengubah cara orang berkomunikasi dan berbisnis.',
  },
  {
    name: 'Konflik Sosial',
    icon: Swords,
    color: '#ef4444',
    description: 'Pertentangan dalam masyarakat dapat memicu perubahan struktur sosial.',
    example: 'Reformasi 1998 di Indonesia mengubah sistem pemerintahan dari otoriter ke demokratis.',
  },
  {
    name: 'Revolusi',
    icon: Flame,
    color: '#f97316',
    description: 'Perubahan yang terjadi secara cepat dan menyangkut dasar-dasar kehidupan masyarakat.',
    example: 'Revolusi Industri mengubah cara produksi dari manual ke mekanis.',
  },
]

const externalFactors = [
  {
    name: 'Bencana Alam',
    icon: AlertTriangle,
    color: '#ef4444',
    description: 'Gangguan alam yang memaksa masyarakat beradaptasi dan berubah.',
    example: 'Letusan gunung berapi memaksa penduduk berpindah dan membentuk pemukiman baru.',
  },
  {
    name: 'Perang',
    icon: Swords,
    color: '#f59e0b',
    description: 'Konflik bersenjata antarnegara yang membawa perubahan besar.',
    example: 'Perang Dunia II mengubah tatanan politik dan ekonomi dunia.',
  },
  {
    name: 'Pengaruh Budaya Asing',
    icon: Radio,
    color: '#3b82f6',
    description: 'Masuknya unsur kebudayaan dari luar melalui globalisasi.',
    example: 'Masuknya budaya Barat melalui film, musik, dan media sosial.',
  },
]

const perubahanBudayaTypes = [
  {
    name: 'Difusi',
    icon: TrendingUp,
    color: '#3b82f6',
    bgColor: '#3b82f610',
    borderColor: '#3b82f640',
    description: 'Penyebaran unsur kebudayaan dari satu individu ke individu lain, atau dari satu kelompok ke kelompok lain.',
    example: 'Penyebaran musik K-Pop dari Korea ke seluruh dunia melalui media sosial.',
    keywords: ['penyebaran', 'menyebar', 'merambat', 'viral', 'populer'],
  },
  {
    name: 'Akulturasi',
    icon: Globe,
    color: '#a855f7',
    bgColor: '#a855f710',
    borderColor: '#a855f740',
    description: 'Perpaduan dua kebudayaan berbeda tanpa menghilangkan ciri khas budaya asli.',
    example: 'Arsitektur Masjid Menara Kudus yang memadukan gaya Hindu dengan Islam.',
    keywords: ['perpaduan', 'gabungan', 'campuran', 'paduan', 'memadukan'],
  },
  {
    name: 'Asimilasi',
    icon: Users,
    color: '#10b981',
    bgColor: '#10b98110',
    borderColor: '#10b98140',
    description: 'Percampuran dua kebudayaan atau lebih yang menghasilkan kebudayaan baru yang berbeda dari budaya asal.',
    example: 'Perkawinan antarsuku yang menghasilkan budaya keluarga baru yang berbeda.',
    keywords: ['baru', 'berbeda', 'melebur', 'menjadi satu', 'lebur'],
  },
  {
    name: 'Sosialisasi',
    icon: HeartHandshake,
    color: '#f59e0b',
    bgColor: '#f59e0b10',
    borderColor: '#f59e0b40',
    description: 'Proses mempelajari nilai, norma, dan kebiasaan agar dapat berperan di masyarakat.',
    example: 'Anak belajar sopan santun dan tata krama dari orang tua dan lingkungan.',
    keywords: ['belajar', 'mempelajari', 'mengajarkan', 'latihan', 'didik'],
  },
  {
    name: 'Internalisasi',
    icon: Brain,
    color: '#ef4444',
    bgColor: '#ef444410',
    borderColor: '#ef444440',
    description: 'Penyerapan nilai-nilai sosial secara mendalam ke dalam diri seseorang sehingga menjadi bagian dari kepribadian.',
    example: 'Seseorang yang secara tulus menghayati nilai gotong royong dan mengamalkannya.',
    keywords: ['menghayati', 'menjiwai', 'mendalam', 'tulus', 'kepribadian'],
  },
]

const classificationScenarios = [
  {
    scenario: 'Musik K-Pop dari Korea Selatan menjadi populer dan didengarkan oleh remaja di seluruh dunia.',
    type: 'Difusi',
    explanation: 'Penyebaran unsur budaya (musik K-Pop) dari satu negara ke negara lain tanpa perubahan berarti.',
  },
  {
    scenario: 'Masjid Menara Kudus memiliki bentuk atap tumpang seperti candi Hindu, namun fungsinya sebagai tempat ibadah Islam.',
    type: 'Akulturasi',
    explanation: 'Perpaduan arsitektur Hindu dan Islam tanpa menghilangkan ciri khas masing-masing budaya.',
  },
  {
    scenario: 'Pernikahan antarsuku Jawa dan Batak menghasilkan kebiasaan baru dalam keluarga yang memadukan kedua budaya.',
    type: 'Asimilasi',
    explanation: 'Dua budaya bercampur menghasilkan budaya baru yang berbeda dari budaya asal keduanya.',
  },
  {
    scenario: 'Seorang anak belajar menghormati orang yang lebih tua melalui ajaran orang tua dan guru.',
    type: 'Sosialisasi',
    explanation: 'Proses mempelajari nilai dan norma agar dapat berperan sebagai anggota masyarakat.',
  },
  {
    scenario: 'Seorang aktivis lingkungan benar-benar menjadikan gaya hidup ramah lingkungan sebagai bagian dari kepribadiannya.',
    type: 'Internalisasi',
    explanation: 'Nilai-nilai lingkungan diserap secara mendalam menjadi bagian dari kepribadian.',
  },
  {
    scenario: 'Makanan Indonesia seperti rendang dan nasi goreng dikenal dan dijual di berbagai negara.',
    type: 'Difusi',
    explanation: 'Penyebaran unsur budaya kuliner dari Indonesia ke mancanegara.',
  },
  {
    scenario: 'Budaya perayaan Imlek di Indonesia memadukan tradisi Tionghoa dengan elemen budaya lokal.',
    type: 'Akulturasi',
    explanation: 'Perayaan Imlek di Indonesia merupakan perpaduan budaya Tionghoa dengan budaya lokal.',
  },
  {
    scenario: 'Generasi muda di kota besar mulai kehilangan identitas budaya daerah karena bercampur dengan budaya global.',
    type: 'Asimilasi',
    explanation: 'Budaya daerah melebur dengan budaya global menghasilkan budaya baru yang berbeda.',
  },
]

const cultureShockInfo = {
  title: 'Culture Shock (Gegar Budaya)',
  icon: AlertTriangle,
  description: 'Gegar budaya terjadi ketika seseorang menghadapi kebudayaan yang berbeda secara drastis dan merasa terkejut, bingung, atau cemas.',
  stages: [
    {
      name: 'Tahap Bulan Madu (Honeymoon)',
      description: 'Merasa kagum dan tertarik dengan budaya baru.',
      icon: '😊',
    },
    {
      name: 'Tahap Frustrasi (Frustration)',
      description: 'Mulai merasa kesulitan beradaptasi, cemas, dan bingung.',
      icon: '😰',
    },
    {
      name: 'Tahap Penyesuaian (Adjustment)',
      description: 'Mulai belajar dan menyesuaikan diri dengan budaya baru.',
      icon: '🙂',
    },
    {
      name: 'Tahap Adaptasi (Adaptation)',
      description: 'Sudah nyaman dan dapat berfungsi dalam budaya baru.',
      icon: '😄',
    },
  ],
  example: 'Seseorang dari desa kecil yang pertama kali pindah ke kota besar akan mengalami culture shock: kagum dengan gedung tinggi, lalu frustrasi dengan kemacetan dan keramaian, kemudian perlahan menyesuaikan diri.',
}

const quizQuestions = [
  {
    question: 'Perubahan yang terjadi pada masyarakat dari waktu ke waktu disebut...',
    options: [
      'Statis sosial',
      'Dinamika sosial',
      'Struktur sosial',
      'Fungsi sosial',
    ],
    correctAnswer: 1,
    explanation: 'Dinamika sosial adalah perubahan yang terjadi pada masyarakat dari waktu ke waktu. Masyarakat senantiasa mengalami perubahan.',
  },
  {
    question: 'Perpaduan dua kebudayaan berbeda tanpa menghilangkan ciri khas budaya aslinya disebut...',
    options: [
      'Difusi',
      'Asimilasi',
      'Akulturasi',
      'Internalisasi',
    ],
    correctAnswer: 2,
    explanation: 'Akulturasi adalah perpaduan dua kebudayaan berbeda yang membentuk kebudayaan baru tanpa menghilangkan ciri khas budaya aslinya. Contohnya Masjid Menara Kudus.',
  },
  {
    question: 'Berikut yang termasuk faktor INTERNAL penyebab perubahan sosial adalah...',
    options: [
      'Bencana alam',
      'Pengaruh budaya asing',
      'Perang dengan negara lain',
      'Penemuan baru (inovasi)',
    ],
    correctAnswer: 3,
    explanation: 'Faktor internal berasal dari dalam masyarakat sendiri, seperti perubahan penduduk, penemuan baru (inovasi), konflik sosial, dan revolusi.',
  },
  {
    question: 'Tahap culture shock ketika seseorang merasa kesulitan beradaptasi dan mengalami kecemasan disebut tahap...',
    options: [
      'Honeymoon',
      'Frustrasi',
      'Penyesuaian',
      'Adaptasi',
    ],
    correctAnswer: 1,
    explanation: 'Tahap frustrasi terjadi ketika seseorang mulai merasa kesulitan beradaptasi, mengalami kecemasan dan kebingungan面对 budaya baru.',
  },
]

// ============================================================
// Classification Game Component
// ============================================================

function ClassificationGame() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentScenario = classificationScenarios[currentIndex]

  const handleAnswer = (type: string) => {
    setSelectedType(type)
    setShowResult(true)
    if (type === currentScenario.type) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < classificationScenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedType(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setSelectedType(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    const percentage = Math.round((score / classificationScenarios.length) * 100)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
            <Globe className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Simulasi Selesai!</h3>
        <p className="text-gray-600 mb-4">
          Skor kamu: <span className="font-bold text-purple-700">{score}/{classificationScenarios.length}</span> ({percentage}%)
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
            ? 'Luar biasa! Kamu sudah memahami jenis perubahan budaya dengan baik.'
            : percentage >= 50
            ? 'Bagus! Terus pelajari materi untuk meningkatkan pemahaman.'
            : 'Jangan menyerah! Coba baca kembali materi tentang perubahan budaya.'}
        </p>
        <button onClick={handleReset} className="btn-secondary flex items-center space-x-2 mx-auto">
          <RotateCcw className="w-4 h-4" />
          <span>Coba Lagi</span>
        </button>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          Soal {currentIndex + 1} dari {classificationScenarios.length}
        </span>
        <span className="text-sm font-medium text-purple-700">
          Skor: {score}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / classificationScenarios.length) * 100}%` }}
        />
      </div>

      {/* Scenario Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border-2 border-purple-200"
      >
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            {currentIndex + 1}
          </div>
          <p className="text-lg text-gray-800 font-medium">{currentScenario.scenario}</p>
        </div>
        <p className="text-sm text-gray-500 italic ml-11">Klasifikasikan perubahan budaya di atas!</p>
      </motion.div>

      {/* Classification Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {perubahanBudayaTypes.map((t) => {
          const IconComponent = t.icon
          const isCorrect = t.name === currentScenario.type
          const isSelected = selectedType === t.name

          return (
            <button
              key={t.name}
              onClick={() => handleAnswer(t.name)}
              disabled={showResult}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                showResult
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : isSelected
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-100 border-gray-200 opacity-50'
                  : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center space-x-3 mb-1">
                <IconComponent className={`w-5 h-5 ${showResult && isCorrect ? 'text-green-600' : ''}`} style={showResult && !isCorrect && !isSelected ? {} : { color: t.color }} />
                <span className="font-bold text-gray-900">{t.name}</span>
              </div>
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
            selectedType === currentScenario.type
              ? 'bg-green-50 border-green-300'
              : 'bg-orange-50 border-orange-300'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {selectedType === currentScenario.type ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600" />
            )}
            <span className="font-bold text-gray-900">
              {selectedType === currentScenario.type
                ? 'Benar!'
                : 'Kurang Tepat'}
            </span>
          </div>
          <p className="text-gray-700">
            Jawaban: <span className="font-semibold">{currentScenario.type}</span>
          </p>
          <p className="text-sm text-gray-600 mt-1">{currentScenario.explanation}</p>
          <button
            onClick={handleNext}
            className="mt-4 btn-primary flex items-center space-x-2"
          >
            <span>{currentIndex < classificationScenarios.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil'}</span>
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
        <span className="bg-purple-100 text-purple-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-purple-50 border-2 border-purple-400'
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

export default function LabDinamikaSosial() {
  const [activeTab, setActiveTab] = useState<'materi' | 'analisis' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Globe className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Dinamika Sosial dan Perubahan Budaya</h2>
            <p className="text-purple-100">Tema II - Pelajaran 6: Dinamika Sosial dan Perubahan Budaya</p>
          </div>
        </div>
        <p className="text-purple-100 text-sm">
          IPS Kelas 7 — Memahami perubahan sosial, faktor penyebab, dan jenis perubahan budaya
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
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
                ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Analisis
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Kuis
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'materi' && (
              <motion.div key="materi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MateriTab />
              </motion.div>
            )}
            {activeTab === 'analisis' && (
              <motion.div key="analisis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AnalisisTab />
              </motion.div>
            )}
            {activeTab === 'kuis' && (
              <motion.div key="kuis" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <KuisTab />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ==================== MATERI TAB ====================
function MateriTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Dinamika Sosial dan Perubahan Budaya</h3>

      {/* Hakikat Dinamika Sosial */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-200">
        <div className="flex items-start space-x-3 mb-3">
          <TrendingUp className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-lg font-bold text-blue-900">Hakikat Dinamika Sosial</h4>
            <p className="text-blue-800 mt-2">
              Kondisi masyarakat senantiasa mengalami <strong>perubahan dari waktu ke waktu</strong>. Dinamika sosial
              adalah perubahan yang terjadi pada masyarakat yang dipengaruhi oleh berbagai faktor. Perubahan ini dapat
              berlangsung cepat atau lambat, kecil atau besar.
            </p>
          </div>
        </div>
      </div>

      {/* Faktor Internal */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-600" />
          Faktor Internal (Dari Dalam Masyarakat)
        </h4>
        <p className="text-gray-700">Faktor yang berasal dari dalam masyarakat itu sendiri:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {internalFactors.map((factor) => {
            const IconComponent = factor.icon
            return (
              <div
                key={factor.name}
                className="bg-white rounded-xl p-5 border-2 shadow-sm"
                style={{ borderColor: factor.color + '40' }}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: factor.color + '20' }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: factor.color }} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{factor.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{factor.description}</p>
                    <p className="text-xs text-gray-500 italic">
                      <strong>Contoh:</strong> {factor.example}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Faktor Eksternal */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-600" />
          Faktor Eksternal (Dari Luar Masyarakat)
        </h4>
        <p className="text-gray-700">Faktor yang berasal dari luar masyarakat:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {externalFactors.map((factor) => {
            const IconComponent = factor.icon
            return (
              <div
                key={factor.name}
                className="bg-white rounded-xl p-5 border-2 shadow-sm"
                style={{ borderColor: factor.color + '40' }}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: factor.color + '20' }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: factor.color }} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">{factor.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{factor.description}</p>
                    <p className="text-xs text-gray-500 italic">
                      <strong>Contoh:</strong> {factor.example}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Jenis Perubahan Budaya */}
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <HeartHandshake className="w-6 h-6 text-green-600" />
          Jenis-Jenis Perubahan Budaya
        </h4>
        {perubahanBudayaTypes.map((t) => {
          const IconComponent = t.icon
          return (
            <div
              key={t.name}
              className="rounded-xl p-5 border-2"
              style={{ backgroundColor: t.bgColor, borderColor: t.borderColor }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white">
                  <IconComponent className="w-5 h-5" style={{ color: t.color }} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">{t.name}</h5>
                  <p className="text-sm text-gray-700 mb-2">{t.description}</p>
                  <p className="text-xs text-gray-500 italic">
                    <strong>Contoh:</strong> {t.example}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Culture Shock */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border-2 border-orange-200">
        <div className="flex items-start space-x-3 mb-4">
          <AlertTriangle className="w-7 h-7 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-lg font-bold text-orange-900">{cultureShockInfo.title}</h4>
            <p className="text-orange-800 mt-2">{cultureShockInfo.description}</p>
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-3 mb-4">
          {cultureShockInfo.stages.map((stage, idx) => (
            <div
              key={stage.name}
              className="bg-white rounded-lg p-4 border border-orange-200 flex items-center space-x-3"
            >
              <span className="text-2xl">{stage.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h5 className="font-bold text-gray-900">{stage.name}</h5>
                </div>
                <p className="text-sm text-gray-600 mt-1 ml-8">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 border border-orange-200">
          <p className="text-sm text-orange-900">
            <strong>Contoh:</strong> {cultureShockInfo.example}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== ANALISIS TAB ====================
function AnalisisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">Klasifikasi Perubahan Budaya</h3>
        <p className="text-gray-700">
          Baca setiap situasi di bawah ini, kemudian klasifikasikan jenis perubahan budaya yang terjadi: <strong>Difusi</strong>, <strong>Akulturasi</strong>, <strong>Asimilasi</strong>, <strong>Sosialisasi</strong>, atau <strong>Internalisasi</strong>.
        </p>
      </div>

      {/* Quick Reference */}
      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
        <h4 className="font-bold text-purple-900 mb-2">Panduan Singkat:</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3b82f6' }} />
            <span className="text-gray-700">Difusi = Penyebaran</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#a855f7' }} />
            <span className="text-gray-700">Akulturasi = Perpaduan</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10b981' }} />
            <span className="text-gray-700">Asimilasi = Peleburan</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} />
            <span className="text-gray-700">Sosialisasi = Belajar</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
            <span className="text-gray-700">Internalisasi = Menghayati</span>
          </div>
        </div>
      </div>

      <ClassificationGame />
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Kuis Dinamika Sosial</h3>
      <p className="text-gray-700">
        Uji pemahamanmu tentang dinamika sosial dan perubahan budaya!
      </p>

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
  )
}
