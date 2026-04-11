import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Target,
  Home,
  Utensils,
  Shirt,
  Scale,
  Check,
  Heart,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const masalahSosial = [
  {
    name: 'Kesenjangan Sosial',
    icon: TrendingUp,
    color: 'from-red-600 to-rose-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    iconColor: 'text-red-600',
    borderColor: 'border-red-300',
    definition: 'Perbedaan tingkat pendapatan dan kesejahteraan yang mencolok antarkelompok masyarakat.',
    details: [
      'Ketimpangan (inequality) antara kelompok kaya dan miskin',
      'Perbedaan akses terhadap pendidikan, kesehatan, dan pekerjaan',
      'Kesenjangan antara perkotaan dan pedesaan',
      'Kesenjangan antara Indonesia bagian barat dan timur',
      'Kesenjangan menyebabkan ketidakadilan sosial',
    ],
    example: 'Di Jakarta, gedung pencakar langit berdampingan dengan permukiman kumuh yang tidak memiliki akses air bersih.',
  },
  {
    name: 'Kemiskinan',
    icon: AlertTriangle,
    color: 'from-rose-600 to-pink-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-800',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-300',
    definition: 'Kondisi ketika seseorang atau keluarga tidak mampu memenuhi kebutuhan dasar hidup.',
    details: [
      'Tidak mampu memenuhi kebutuhan dasar: sandang (pakaian), pangan (makanan), dan papan (tempat tinggal)',
      'Akses terbatas terhadap pendidikan dan layanan kesehatan',
      'Rentan terhadap masalah sosial: pengangguran, putus sekolah, gizi buruk',
      'Kemiskinan dapat bersifat struktural (disebabkan sistem) maupun kultural (disebabkan budaya)',
    ],
    example: 'Keluarga yang tidak memiliki rumah layak huni, kesulitan mendapatkan makanan bergizi, dan anak-anaknya tidak bisa bersekolah.',
  },
  {
    name: 'Ketimpangan Gender',
    icon: Scale,
    color: 'from-pink-600 to-red-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-300',
    definition: 'Diskriminasi berdasarkan jenis kelamin dalam akses dan kesempatan.',
    details: [
      'Indonesia menempati peringkat 85 dari 153 negara dalam kesetaraan gender (2020)',
      'Perempuan menghadapi hambatan dalam pendidikan, pekerjaan, dan kepemimpinan',
      'Peran perempuan sering dibatasi pada ranah domestik',
      'Upah perempuan masih lebih rendah dibanding laki-laki untuk pekerjaan yang sama',
    ],
    example: 'Perempuan berkualifikasi sama tetapi tidak mendapat kesempatan yang sama dalam pekerjaan dan kepemimpinan.',
  },
]

const kebutuhanDasar = [
  {
    name: 'Sandang (Pakaian)',
    icon: Shirt,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    iconColor: 'text-red-600',
    description: 'Pakaian adalah kebutuhan dasar untuk melindungi tubuh dari cuaca dan lingkungan.',
    facts: [
      'Keluarga miskin sering tidak mampu membeli pakaian yang layak dan layak pakai',
      'Anak-anak di keluarga miskin mungkin tidak memiliki seragam sekolah',
      'Pakaian yang tidak layak dapat memengaruhi kesehatan dan kepercayaan diri',
    ],
  },
  {
    name: 'Pangan (Makanan)',
    icon: Utensils,
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-800',
    iconColor: 'text-rose-600',
    description: 'Makanan bergizi adalah kebutuhan dasar untuk kesehatan dan pertumbuhan tubuh.',
    facts: [
      'Keluarga miskin sulit memenuhi gizi seimbang setiap hari',
      'Kekurangan gizi pada anak menyebabkan stunting (pertumbuhan terhambat)',
      'Indonesia masih menghadapi masalah stunting pada balita',
    ],
  },
  {
    name: 'Papan (Tempat Tinggal)',
    icon: Home,
    color: 'from-pink-500 to-red-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    description: 'Tempat tinggal yang layak adalah kebutuhan dasar untuk keamanan dan kenyamanan.',
    facts: [
      'Keluarga miskin sering tinggal di rumah tidak layak huni',
      'Banyak yang tinggal di permukiman kumuh tanpa akses air bersih',
      'Ada yang tidak memiliki rumah sendiri dan tinggal di kolong jembatan',
    ],
  },
]

const scenarioData = [
  {
    scenario: 'Sebuah keluarga di pinggir kota tidak mampu membeli makanan bergizi. Anak-anaknya sering tidak sekolah karena harus bekerja membantu orang tua.',
    type: 'kemiskinan',
    explanation:
      'Ini adalah contoh kemiskinan — keluarga tidak mampu memenuhi kebutuhan dasar pangan dan pendidikan. Mereka tidak memiliki akses terhadap makanan bergizi dan anak-anak putus sekolah.',
  },
  {
    scenario: 'Di kota yang sama, ada permukiman mewah berdampingan dengan permukiman kumuh. Penduduk permukiman kumuh tidak memiliki akses air bersih yang layak.',
    type: 'kesenjangan',
    explanation:
      'Ini adalah contoh kesenjangan sosial — perbedaan tingkat kesejahteraan yang mencolok antarkelompok masyarakat yang tinggal di wilayah yang sama.',
  },
  {
    scenario: 'Seorang perempuan memiliki kualifikasi dan pengalaman kerja yang sama dengan rekan laki-lakinya, tetapi ia mendapat gaji lebih rendah dan tidak dipertimbangkan untuk promosi jabatan.',
    type: 'gender',
    explanation:
      'Ini adalah contoh ketimpangan gender — diskriminasi berdasarkan jenis kelamin dalam akses dan kesempatan kerja.',
  },
  {
    scenario: 'Masyarakat di daerah pedalaman Papua sulit mengakses layanan kesehatan dan pendidikan karena jarak yang jauh dan infrastruktur yang minim.',
    type: 'kesenjangan',
    explanation:
      'Ini adalah contoh kesenjangan sosial antara daerah perkotaan dan pedalaman. Ketimpangan akses terhadap layanan dasar menunjukkan kesenjangan pembangunan antarwilayah.',
  },
  {
    scenario: 'Di sebuah desa, anak perempuan lebih sering diminta berhenti sekolah untuk membantu pekerjaan rumah tangga, sementara anak laki-laki terus disekolahkan.',
    type: 'gender',
    explanation:
      'Ini adalah contoh ketimpangan gender dalam pendidikan. Anak perempuan dibatasi akses pendidikannya karena stereotip peran gender.',
  },
  {
    scenario: 'Seorang pekerja bangunan di kota besar tinggal di kolong jembatan, tidak memiliki penghasilan tetap, dan tidak memiliki jaminan kesehatan.',
    type: 'kemiskinan',
    explanation:
      'Ini adalah contoh kemiskinan — pekerja tidak mampu memenuhi kebutuhan dasar papan, pangan, dan akses kesehatan.',
  },
]

const quizQuestions = [
  {
    question: 'Kondisi ketika seseorang atau keluarga tidak mampu memenuhi kebutuhan dasar seperti sandang, pangan, dan papan disebut...',
    options: [
      'Kesenjangan sosial',
      'Ketimpangan gender',
      'Kemiskinan',
      'Diskriminasi sosial',
    ],
    correctAnswer: 2,
    explanation:
      'Kemiskinan adalah kondisi ketika seseorang atau keluarga tidak mampu memenuhi kebutuhan dasar hidup: sandang (pakaian), pangan (makanan), dan papan (tempat tinggal).',
  },
  {
    question: 'Perbedaan tingkat pendapatan dan kesejahteraan yang mencolok antarkelompok masyarakat sehingga menimbulkan ketimpangan disebut...',
    options: [
      'Kemiskinan',
      'Kesenjangan sosial',
      'Ketimpangan gender',
      'Ketidakadilan hukum',
    ],
    correctAnswer: 1,
    explanation:
      'Kesenjangan sosial adalah perbedaan tingkat pendapatan dan kesejahteraan yang mencolok antarkelompok masyarakat. Hal ini menyebabkan ketimpangan dalam akses terhadap pendidikan, kesehatan, dan kesempatan.',
  },
  {
    question: 'Indonesia menempati peringkat 85 dari 153 negara dalam kesetaraan gender pada tahun 2020. Hal ini menunjukkan bahwa...',
    options: [
      'Indonesia sudah sangat maju dalam kesetaraan gender',
      'Indonesia masih memiliki tantangan besar dalam kesetaraan gender',
      'Gender tidak menjadi masalah di Indonesia',
      'Indonesia adalah negara terbaik di dunia untuk perempuan',
    ],
    correctAnswer: 1,
    explanation:
      'Peringkat 85 dari 153 menunjukkan bahwa Indonesia masih memiliki tantangan besar dalam kesetaraan gender. Perempuan masih menghadapi hambatan dalam pendidikan, pekerjaan, dan kepemimpinan.',
  },
  {
    question: 'Contoh ketimpangan gender dalam kehidupan sehari-hari adalah...',
    options: [
      'Anak laki-laki dan perempuan mendapat perlakuan yang sama di sekolah',
      'Perempuan dan laki-laki mendapat upah yang sama untuk pekerjaan yang sama',
      'Anak perempuan diminta berhenti sekolah untuk membantu pekerjaan rumah, sementara anak laki-laki terus disekolahkan',
      'Semua anak mendapat kesempatan yang sama untuk bersekolah',
    ],
    correctAnswer: 2,
    explanation:
      'Ketimpangan gender terjadi ketika ada perlakuan berbeda berdasarkan jenis kelamin. Contoh: anak perempuan diminta berhenti sekolah sementara anak laki-laki terus disekolahkan merupakan bentuk diskriminasi gender.',
  },
]

// ============================================================
// Classification Game Component
// ============================================================

function IdentifikasiMasalah() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentScenario = scenarioData[currentIndex]

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    if (answer === currentScenario.type) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < scenarioData.length - 1) {
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
    const percentage = Math.round((score / scenarioData.length) * 100)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center">
            <Target className="w-10 h-10 text-red-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Identifikasi Selesai!</h3>
        <p className="text-gray-600 mb-4">
          Skor kamu: <span className="font-bold text-red-700">{score}/{scenarioData.length}</span> ({percentage}%)
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
            ? 'Luar biasa! Kamu sudah memahami permasalahan sosial dengan baik.'
            : percentage >= 50
            ? 'Bagus! Terus pelajari materi untuk meningkatkan pemahaman.'
            : 'Jangan menyerah! Coba baca kembali materi tentang permasalahan sosial.'}
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
      key: 'kesenjangan',
      label: 'Kesenjangan Sosial',
      icon: TrendingUp,
      bg: 'bg-red-50',
      border: 'border-red-300',
      iconColor: 'text-red-600',
    },
    {
      key: 'kemiskinan',
      label: 'Kemiskinan',
      icon: AlertTriangle,
      bg: 'bg-rose-50',
      border: 'border-rose-300',
      iconColor: 'text-rose-600',
    },
    {
      key: 'gender',
      label: 'Ketimpangan Gender',
      icon: Scale,
      bg: 'bg-pink-50',
      border: 'border-pink-300',
      iconColor: 'text-pink-600',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">
          Kasus {currentIndex + 1} dari {scenarioData.length}
        </span>
        <span className="text-sm font-medium text-red-700">Skor: {score}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-red-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / scenarioData.length) * 100}%` }}
        />
      </div>

      {/* Scenario Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
            {currentIndex + 1}
          </div>
          <p className="text-base text-gray-800 leading-relaxed">{currentScenario.scenario}</p>
        </div>
        <p className="text-sm text-gray-500 italic mt-3 ml-11">
          Jenis permasalahan sosial apakah ini?
        </p>
      </motion.div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {answerOptions.map((opt) => {
          const Icon = opt.icon
          const isCorrect = opt.key === currentScenario.type
          const isSelected = selectedAnswer === opt.key

          return (
            <button
              key={opt.key}
              onClick={() => !showResult && handleAnswer(opt.key)}
              disabled={showResult}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                showResult
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : isSelected
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50 border-gray-200 opacity-50'
                  : `${opt.bg} ${opt.border} hover:shadow-md`
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-5 h-5 ${showResult && isCorrect ? 'text-green-600' : opt.iconColor}`} />
                <span className="font-bold text-gray-900">{opt.label}</span>
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
            selectedAnswer === currentScenario.type
              ? 'bg-green-50 border-green-300'
              : 'bg-orange-50 border-orange-300'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {selectedAnswer === currentScenario.type ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600" />
            )}
            <span className="font-bold text-gray-900">
              {selectedAnswer === currentScenario.type ? 'Benar!' : 'Kurang Tepat'}
            </span>
          </div>
          <p className="text-sm text-gray-700">{currentScenario.explanation}</p>
          <button
            onClick={handleNext}
            className="mt-4 btn-primary flex items-center space-x-2"
          >
            <span>{currentIndex < scenarioData.length - 1 ? 'Kasus Berikutnya' : 'Lihat Hasil'}</span>
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
        <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-red-50 border-2 border-red-400'
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

export default function LabPermasalahanSosial() {
  const [activeTab, setActiveTab] = useState<'materi' | 'identifikasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <AlertTriangle className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Permasalahan Sosial</h2>
            <p className="text-red-100">Tema IV — Pelajaran 4: Permasalahan Sosial</p>
          </div>
        </div>
        <p className="text-red-100 text-sm">
          IPS Kelas 7 — Mengenal dan mengidentifikasi permasalahan sosial di masyarakat
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('identifikasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'identifikasi'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-4 h-4 inline mr-2" />
            Identifikasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
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
                    <AlertTriangle className="w-7 h-7 text-red-600" />
                    A. Permasalahan Sosial di Indonesia
                  </h3>
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-5 border-2 border-red-200 mb-6">
                    <p className="text-gray-700 mb-3">
                      Seiring dengan pembangunan dan perkembangan masyarakat, muncul berbagai{' '}
                      <strong>permasalahan sosial</strong> yang perlu diatasi. Permasalahan sosial adalah kondisi yang
                      tidak sesuai dengan nilai dan norma masyarakat, menimbulkan dampak negatif, dan memerlukan
                      tindakan bersama untuk mengatasinya.
                    </p>
                    <p className="text-gray-700">
                      Tiga permasalahan sosial utama yang dihadapi Indonesia: <strong>kesenjangan sosial</strong>,{' '}
                      <strong>kemiskinan</strong>, dan <strong>ketimpangan gender</strong>.
                    </p>
                  </div>
                </div>

                {/* 3 Masalah Sosial */}
                <div>
                  <div className="space-y-6">
                    {masalahSosial.map((masalah, idx) => {
                      const IconComponent = masalah.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-6 border-2 ${masalah.bgColor} ${masalah.borderColor}`}
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${masalah.color} flex items-center justify-center`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-gray-500">Masalah {idx + 1}</span>
                              <h4 className={`text-xl font-bold ${masalah.textColor}`}>{masalah.name}</h4>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4">{masalah.definition}</p>

                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h5 className="font-semibold text-gray-900 mb-3 text-sm">Penjelasan:</h5>
                            <ul className="space-y-2">
                              {masalah.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${masalah.iconColor}`} />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className={`mt-4 bg-white rounded-lg p-3 border border-gray-200`}>
                            <span className="text-xs font-semibold text-gray-500">Contoh: </span>
                            <span className="text-sm text-gray-700">{masalah.example}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Kebutuhan Dasar */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Home className="w-7 h-7 text-rose-600" />
                    B. Kemiskinan dan Kebutuhan Dasar
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Kemiskinan berkaitan erat dengan ketidakmampuan memenuhi <strong>kebutuhan dasar</strong>: sandang,
                    pangan, dan papan. Ketiganya merupakan hak dasar setiap manusia.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {kebutuhanDasar.map((kebutuhan, idx) => {
                      const IconComponent = kebutuhan.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-5 border-2 ${kebutuhan.bgColor}`}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${kebutuhan.color} flex items-center justify-center mb-3`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h5 className={`font-bold text-base mb-2 ${kebutuhan.textColor}`}>{kebutuhan.name}</h5>
                          <p className="text-sm text-gray-700 mb-3">{kebutuhan.description}</p>
                          <ul className="space-y-1.5">
                            {kebutuhan.facts.map((fact, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-1.5 text-xs text-gray-600">
                                <Check className={`w-3 h-3 mt-0.5 flex-shrink-0 ${kebutuhan.iconColor}`} />
                                <span>{fact}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Kesetaraan Gender */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Scale className="w-7 h-7 text-pink-600" />
                    C. Kesetaraan Gender
                  </h3>
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-5 border-2 border-pink-200">
                    <p className="text-gray-700 mb-4">
                      <strong>Kesetaraan gender</strong> berarti setiap orang, baik laki-laki maupun perempuan,
                      memiliki hak dan kesempatan yang sama dalam semua bidang kehidupan.
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-pink-200 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">85</span>
                        </div>
                        <div>
                          <h5 className="font-bold text-pink-900">Peringkat Indonesia</h5>
                          <p className="text-sm text-gray-600">dari 153 negara dalam kesetaraan gender (2020)</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">
                        Angka ini menunjukkan Indonesia masih memiliki tantangan besar dalam mewujudkan kesetaraan gender.
                      </p>
                    </div>

                    <h5 className="font-bold text-pink-900 mb-2">Contoh Ketimpangan Gender:</h5>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {[
                        'Anak perempuan dibatasi akses pendidikannya',
                        'Upah perempuan lebih rendah untuk pekerjaan yang sama',
                        'Perempuan jarang mendapat posisi kepemimpinan',
                        'Peran perempuan dibatasi pada ranah domestik',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-pink-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 bg-green-50 rounded-lg p-3 border border-green-200">
                      <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Upaya Pemberdayaan Perempuan:
                      </h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        {[
                          'Memberikan akses pendidikan yang setara',
                          'Mendorong partisipasi perempuan dalam kepemimpinan',
                          'Menghilangkan stereotip peran gender',
                          'Menjamin hak dan perlindungan hukum yang sama',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-5 border-2 border-red-300">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Rangkuman
                  </h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Kemiskinan</strong>: ketidakmampuan memenuhi kebutuhan dasar (sandang, pangan, papan).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Kesenjangan sosial</strong>: perbedaan kesejahteraan yang mencolok antarkelompok masyarakat.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Ketimpangan gender</strong>: diskriminasi berdasarkan jenis kelamin dalam akses dan kesempatan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Indonesia peringkat <strong>85 dari 153</strong> dalam kesetaraan gender — masih banyak pekerjaan rumah.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ==================== IDENTIFIKASI TAB ==================== */}
            {activeTab === 'identifikasi' && (
              <motion.div
                key="identifikasi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Identifikasi Permasalahan Sosial
                  </h3>
                  <p className="text-gray-600">
                    Bacalah setiap skenario, lalu identifikasi jenis permasalahan sosial yang terjadi.
                  </p>
                </div>
                <IdentifikasiMasalah />
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
                    Kuis Permasalahan Sosial
                  </h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang kesenjangan sosial, kemiskinan, dan ketimpangan gender.
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
