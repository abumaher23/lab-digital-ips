import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Users,
  Handshake,
  MessageCircle,
  CheckCircle,
  XCircle,
  RotateCcw,
  UserCheck,
  UserX,
  HeartHandshake,
  Swords,
  AlertTriangle,
  Globe,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const interactionRequirements = [
  {
    icon: 'kontak',
    title: 'Kontak Sosial',
    description: 'Hubungan antara satu pihak dengan pihak lain sebagai awal interaksi',
    types: [
      {
        name: 'Kontak Primer (Langsung)',
        example: 'Bertatap muka, berjabat tangan, mengobrol langsung dengan teman',
        icon: 'direct',
      },
      {
        name: 'Kontak Sekunder (Tidak Langsung)',
        example: 'Melalui telepon, media sosial, surat, atau perantara orang lain',
        icon: 'indirect',
      },
    ],
  },
  {
    icon: 'komunikasi',
    title: 'Komunikasi',
    description: 'Proses penyampaian pesan atau ide dari satu pihak ke pihak lain',
    types: [
      {
        name: 'Komunikasi Verbal',
        example: 'Berbicara, menulis pesan, membuat pengumuman',
        icon: 'verbal',
      },
      {
        name: 'Komunikasi Nonverbal',
        example: 'Bahasa tubuh, ekspresi wajah, gerakan tangan, nada bicara',
        icon: 'nonverbal',
      },
    ],
  },
]

const associativeForms = [
  {
    name: 'Kerja Sama (Kooperasi)',
    icon: HeartHandshake,
    color: '#10b981',
    bgColor: '#10b98110',
    borderColor: '#10b98140',
    description:
      'Usaha bersama antarindividu atau antarkelompok untuk mencapai tujuan bersama.',
    examples: [
      'Gotong royong membersihkan lingkungan desa',
      'Kerja bakti membangun jembatan di kampung',
      'Kerja sama antarnegara dalam perdagangan internasional',
    ],
  },
  {
    name: 'Akomodasi',
    icon: Handshake,
    color: '#3b82f6',
    bgColor: '#3b82f610',
    borderColor: '#3b82f640',
    description:
      'Upaya untuk meredakan atau menyelesaikan pertentangan guna mencapai keseimbangan.',
    examples: [
      'Mediasi ketua RT menyelesaikan perselisihan warga',
      'Arbitrase: pihak ketiga menjadi penengah dalam konflik',
      'Toleransi: saling menghargai perbedaan pendapat',
    ],
  },
  {
    name: 'Akulturasi',
    icon: Globe,
    color: '#a855f7',
    bgColor: '#a855f710',
    borderColor: '#a855f740',
    description:
      'Perpaduan dua kebudayaan berbeda yang membentuk kebudayaan baru tanpa menghilangkan ciri khas budaya aslinya.',
    examples: [
      'Candi Borobudur: perpaduan budaya Hindu-Buddha dengan budaya lokal',
      'Masjid Menara Kudus: arsitektur Hindu-Islam',
      'Musik dangdut: perpaduan musik Melayu, India, dan lokal',
    ],
  },
]

const dissociativeForms = [
  {
    name: 'Persaingan (Kompetisi)',
    icon: UserCheck,
    color: '#f59e0b',
    bgColor: '#f59e0b10',
    borderColor: '#f59e0b40',
    description:
      'Proses sosial ketika individu atau kelompok bersaing untuk mencapai tujuan tertentu tanpa kekerasan.',
    examples: [
      'Lomba cerdas cermat antarsekolah',
      'Kompetisi bisnis yang sehat antarperusahaan',
      'Olimpiade Olahraga antarprovinsi',
    ],
  },
  {
    name: 'Kontravensi',
    icon: AlertTriangle,
    color: '#f97316',
    bgColor: '#f9731610',
    borderColor: '#f9731640',
    description:
      'Perasaan tidak suka atau ketidakpercayaan yang disembunyikan terhadap pihak lain.',
    examples: [
      'Menyebarkan gosip di belakang teman',
      'Menghasut orang lain agar memusuhi seseorang',
      'Menyangkal janji yang sudah disepakati',
    ],
  },
  {
    name: 'Konflik (Pertentangan)',
    icon: Swords,
    color: '#ef4444',
    bgColor: '#ef444410',
    borderColor: '#ef444440',
    description:
      'Proses sosial ketika individu atau kelompok berusaha memenuhi keinginannya dengan cara menentang pihak lain, sering disertai kekerasan.',
    examples: [
      'Tawuran antarpelajar',
      'Perang antarnegara',
      'Demonstrasi yang berujung kerusuhan',
    ],
  },
]

const classificationScenarios = [
  {
    scenario: 'Warga desa bergotong royong membersihkan saluran irigasi bersama-sama.',
    type: 'asosiatif',
    subType: 'Kerja Sama',
    explanation:
      'Gotong royong adalah bentuk kerja sama (kooperasi) di mana warga bekerja bersama untuk kepentingan bersama.',
  },
  {
    scenario: 'Ketua RT menengahi perselisihan antara dua keluarga yang bertikai.',
    type: 'asosiatif',
    subType: 'Akomodasi',
    explanation:
      'Mediasi oleh ketua RT merupakan bentuk akomodasi, yaitu upaya menyelesaikan pertentangan.',
  },
  {
    scenario: 'Dua kelompok siswa saling ejek melalui media sosial tanpa bertatap muka.',
    type: 'disosiatif',
    subType: 'Kontravensi',
    explanation:
      'Saling ejek tanpa konfrontasi langsung merupakan bentuk kontravensi, yaitu perasaan tidak suka yang diekspresikan secara tersembunyi.',
  },
  {
    scenario: 'Arsitektur Masjid Agung Demak memadukan gaya Jawa dengan unsur Islami.',
    type: 'asosiatif',
    subType: 'Akulturasi',
    explanation:
      'Perpaduan dua budaya (Jawa dan Islam) tanpa menghilangkan ciri khas masing-masing adalah akulturasi.',
  },
  {
    scenario: 'Beberapa siswa berlomba menjadi yang terbaik dalam ujian akhir semester.',
    type: 'asosiatif',
    subType: 'Persaingan (Kompetisi)',
    explanation:
      'Persaingan dalam kompetisi akademik merupakan bentuk interaksi yang mengarah pada peningkatan prestasi.',
  },
  {
    scenario: 'Terjadi tawuran antara dua kelompok pelajar yang saling berebut wilayah.',
    type: 'disosiatif',
    subType: 'Konflik',
    explanation:
      'Tawuran adalah bentuk konflik, yaitu pertentangan yang menggunakan kekerasan.',
  },
  {
    scenario: 'Pedagang di pasar bersaing menurunkan harga agar pembeli tertarik.',
    type: 'asosiatif',
    subType: 'Persaingan (Kompetisi)',
    explanation:
      'Persaingan harga yang sehat merupakan bentuk kompetisi yang wajar dan positif.',
  },
  {
    scenario: 'Seseorang menyebarkan berita tidak benar tentang temannya.',
    type: 'disosiatif',
    subType: 'Kontravensi',
    explanation:
      'Menyebarkan berita tidak benar tentang orang lain termasuk kontravensi, yaitu perbuatan tersembunyi yang merugikan.',
  },
]

const quizQuestions = [
  {
    question: 'Interaksi sosial dapat terjadi jika memenuhi dua syarat utama, yaitu...',
    options: [
      'Kontak sosial dan komunikasi',
      'Pertemuan langsung dan persetujuan',
      'Hubungan keluarga dan kerja sama',
      'Persaingan dan konflik',
    ],
    correctAnswer: 0,
    explanation:
      'Interaksi sosial memerlukan dua syarat utama: kontak sosial (hubungan antar pihak) dan komunikasi (penyampaian pesan). Tanpa keduanya, interaksi tidak dapat terjadi.',
  },
  {
    question: 'Perpaduan dua kebudayaan berbeda menjadi satu kebudayaan baru tanpa menghilangkan ciri khas budaya aslinya disebut...',
    options: [
      'Asimilasi',
      'Akulturasi',
      'Akomodasi',
      'Difusi',
    ],
    correctAnswer: 1,
    explanation:
      'Akulturasi adalah perpaduan dua kebudayaan yang menghasilkan kebudayaan baru tanpa menghilangkan ciri khas budaya aslinya. Contohnya Candi Borobudur yang memadukan budaya Hindu-Buddha dengan budaya lokal.',
  },
  {
    question: 'Upaya ketua RT untuk menyelesaikan perselisihan antarwarga merupakan bentuk...',
    options: [
      'Kerja sama',
      'Persaingan',
      'Akomodasi',
      'Kontravensi',
    ],
    correctAnswer: 2,
    explanation:
      'Akomodasi adalah upaya meredakan atau menyelesaikan pertentangan. Mediasi oleh ketua RT merupakan contoh nyata akomodasi dalam kehidupan sehari-hari.',
  },
  {
    question: 'Menyebarkan gosip tentang teman tanpa konfrontasi langsung termasuk bentuk...',
    options: [
      'Konflik',
      'Persaingan',
      'Akomodasi',
      'Kontravensi',
    ],
    correctAnswer: 3,
    explanation:
      'Kontravensi adalah perasaan tidak suka atau ketidakpercayaan yang diekspresikan secara tersembunyi, seperti menyebarkan gosip atau menghasut.',
  },
]


// ============================================================
// Interaction Requirements Visual Component
// ============================================================

function InteractionRequirementsVisual() {
  const [activeRequirement, setActiveRequirement] = useState(0)
  const [activeType, setActiveType] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900 flex items-center">
        <MessageCircle className="w-5 h-5 mr-2 text-purple-600" />
        Syarat Terjadinya Interaksi Sosial
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interactionRequirements.map((req, idx) => {
          const IconComponent = idx === 0 ? Users : MessageCircle
          return (
            <button
              key={idx}
              onClick={() => {
                setActiveRequirement(idx)
                setActiveType(null)
              }}
              className={`rounded-xl p-5 text-left transition-all border-2 ${
                activeRequirement === idx
                  ? 'bg-purple-100 border-purple-400 shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeRequirement === idx ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-gray-900">{req.title}</h5>
              </div>
              <p className="text-sm text-gray-600">{req.description}</p>
            </button>
          )
        })}
      </div>

      {/* Types Detail */}
      <AnimatePresence mode="wait">
        {activeType === null && (
          <motion.div
            key="types-overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-purple-50 rounded-xl p-5 border border-purple-200"
          >
            <h5 className="font-bold text-purple-900 mb-3">
              Jenis-jenis {interactionRequirements[activeRequirement].title}
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {interactionRequirements[activeRequirement].types.map((t, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => setActiveType(tIdx)}
                  className="bg-white rounded-lg p-4 border border-purple-200 hover:border-purple-400 transition-all text-left"
                >
                  <span className="font-semibold text-purple-900 block mb-1">{t.name}</span>
                  <span className="text-sm text-purple-700">{t.example}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ============================================================
// Classification Game Component
// ============================================================

function ClassificationGame() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentScenario = classificationScenarios[currentIndex]

  const handleAnswer = (category: string) => {
    setSelectedCategory(category)
    setShowResult(true)
    if (category === currentScenario.type) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < classificationScenarios.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedCategory(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setSelectedCategory(null)
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
            <Users className="w-10 h-10 text-purple-600" />
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
            ? 'Luar biasa! Kamu sudah memahami bentuk interaksi sosial dengan baik.'
            : percentage >= 50
            ? 'Bagus! Terus pelajari materi untuk meningkatkan pemahaman.'
            : 'Jangan menyerah! Coba baca kembali materi tentang bentuk interaksi sosial.'}
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
        <p className="text-sm text-gray-500 italic ml-11">Klasifikasikan interaksi sosial di atas!</p>
      </motion.div>

      {/* Classification Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => handleAnswer('asosiatif')}
          disabled={showResult}
          className={`p-5 rounded-xl border-2 transition-all text-left ${
            showResult
              ? currentScenario.type === 'asosiatif'
                ? 'bg-green-100 border-green-500'
                : selectedCategory === 'asosiatif'
                ? 'bg-red-100 border-red-500'
                : 'bg-gray-100 border-gray-200 opacity-50'
              : 'bg-white border-green-300 hover:border-green-500 hover:bg-green-50'
          }`}
        >
          <div className="flex items-center space-x-3 mb-2">
            <UserCheck className={`w-6 h-6 ${showResult && currentScenario.type === 'asosiatif' ? 'text-green-600' : 'text-green-600'}`} />
            <span className="font-bold text-gray-900">Asosiatif</span>
          </div>
          <span className="text-sm text-gray-600">Mengarah pada persatuan dan kebersamaan</span>
        </button>

        <button
          onClick={() => handleAnswer('disosiatif')}
          disabled={showResult}
          className={`p-5 rounded-xl border-2 transition-all text-left ${
            showResult
              ? currentScenario.type === 'disosiatif'
                ? 'bg-green-100 border-green-500'
                : selectedCategory === 'disosiatif'
                ? 'bg-red-100 border-red-500'
                : 'bg-gray-100 border-gray-200 opacity-50'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center space-x-3 mb-2">
            <UserX className={`w-6 h-6 ${showResult && currentScenario.type === 'disosiatif' ? 'text-green-600' : 'text-red-600'}`} />
            <span className="font-bold text-gray-900">Disosiatif</span>
          </div>
          <span className="text-sm text-gray-600">Mengarah pada perpecahan dan pertentangan</span>
        </button>
      </div>

      {/* Result */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-5 border-2 ${
            selectedCategory === currentScenario.type
              ? 'bg-green-50 border-green-300'
              : 'bg-orange-50 border-orange-300'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {selectedCategory === currentScenario.type ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600" />
            )}
            <span className="font-bold text-gray-900">
              {selectedCategory === currentScenario.type
                ? 'Benar!'
                : 'Kurang Tepat'}
            </span>
          </div>
          <p className="text-gray-700">
            Jawaban: <span className="font-semibold">{currentScenario.subType}</span>
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

export default function LabSosial() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Interaksi Sosial</h2>
            <p className="text-purple-100">Dasar-Dasar Interaksi Sosial dalam Masyarakat</p>
          </div>
        </div>
        <p className="text-purple-100 text-sm">
          IPS Kelas 7 — Memahami bentuk-bentuk interaksi sosial: asosiatif dan disosiatif
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
            onClick={() => setActiveTab('simulasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'simulasi'
                ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Handshake className="w-4 h-4 inline mr-2" />
            Simulasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
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
            {/* MATERI TAB */}
            {activeTab === 'materi' && (
              <motion.div
                key="materi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">A. Hakikat Interaksi Sosial</h3>
                  <p className="text-gray-700 mb-4">
                    Manusia adalah <strong>makhluk sosial</strong> yang sejak lahir sudah terlibat dalam hubungan dengan
                    orang lain. Interaksi sosial merupakan hubungan-hubungan sosial yang dinamis menyangkut hubungan
                    antarperorangan, antara kelompok manusia, maupun antara perorangan dengan kelompok. Interaksi ini
                    menyebabkan pihak-pihak yang terlibat <strong>saling memengaruhi</strong> satu sama lain.
                  </p>

                  {/* Interaction Requirements */}
                  <InteractionRequirementsVisual />

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    B. Bentuk-Bentuk Interaksi Sosial
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Interaksi sosial di masyarakat dapat dikelompokkan menjadi dua bentuk besar, yaitu{' '}
                    <span className="text-green-700 font-semibold">asosiatif</span> (mengarah pada persatuan) dan{' '}
                    <span className="text-red-700 font-semibold">disosiatif</span> (mengarah pada perpecahan).
                  </p>

                  {/* Associative Forms */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                      <UserCheck className="w-5 h-5 mr-2" />
                      1. Interaksi Asosiatif (Mengarah pada Persatuan)
                    </h4>
                    <div className="space-y-4">
                      {associativeForms.map((form, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-xl p-5 border-2"
                          style={{
                            backgroundColor: form.bgColor,
                            borderColor: form.borderColor,
                          }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: form.color }}
                            >
                              <form.icon className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="font-bold text-gray-900 text-lg">{form.name}</h5>
                          </div>
                          <p className="text-gray-700 mb-3">{form.description}</p>
                          <div className="space-y-2">
                            <span className="text-sm font-semibold text-gray-600">Contoh:</span>
                            <ul className="space-y-1">
                              {form.examples.map((ex, exIdx) => (
                                <li key={exIdx} className="flex items-start space-x-2 text-sm text-gray-700">
                                  <ArrowRight className="w-3.5 h-3.5 mt-1 flex-shrink-0" style={{ color: form.color }} />
                                  <span>{ex}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dissociative Forms */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                      <UserX className="w-5 h-5 mr-2" />
                      2. Interaksi Disosiatif (Mengarah pada Perpecahan)
                    </h4>
                    <div className="space-y-4">
                      {dissociativeForms.map((form, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-xl p-5 border-2"
                          style={{
                            backgroundColor: form.bgColor,
                            borderColor: form.borderColor,
                          }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: form.color }}
                            >
                              <form.icon className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="font-bold text-gray-900 text-lg">{form.name}</h5>
                          </div>
                          <p className="text-gray-700 mb-3">{form.description}</p>
                          <div className="space-y-2">
                            <span className="text-sm font-semibold text-gray-600">Contoh:</span>
                            <ul className="space-y-1">
                              {form.examples.map((ex, exIdx) => (
                                <li key={exIdx} className="flex items-start space-x-2 text-sm text-gray-700">
                                  <ArrowRight className="w-3.5 h-3.5 mt-1 flex-shrink-0" style={{ color: form.color }} />
                                  <span>{ex}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5 mt-6">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Rangkuman
                    </h4>
                    <div className="space-y-2 text-sm text-purple-800">
                      <p>
                        <strong>Interaksi sosial</strong> adalah hubungan sosial yang dinamis dan saling memengaruhi,
                        terjadi jika ada <strong>kontak sosial</strong> dan <strong>komunikasi</strong>.
                      </p>
                      <p>
                        <strong>Asosiatif</strong>: Kerja sama, akomodasi, akulturasi (menuju persatuan).
                      </p>
                      <p>
                        <strong>Disosiatif</strong>: Persaingan, kontravensi, konflik (menuju perpecahan).
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* SIMULASI TAB */}
            {activeTab === 'simulasi' && (
              <motion.div
                key="simulasi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Simulasi Klasifikasi Interaksi Sosial
                  </h3>
                  <p className="text-gray-600">
                    Bacalah setiap skenario, lalu klasifikasikan apakah termasuk interaksi{' '}
                    <span className="text-green-700 font-semibold">asosiatif</span> atau{' '}
                    <span className="text-red-700 font-semibold">disosiatif</span>.
                  </p>
                </div>

                <ClassificationGame />
              </motion.div>
            )}

            {/* KUIS TAB */}
            {activeTab === 'kuis' && (
              <motion.div
                key="kuis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kuis Interaksi Sosial</h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang bentuk-bentuk interaksi sosial dalam masyarakat.
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
