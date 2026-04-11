import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Layers,
  Lightbulb,
  Trees,
  Tractor,
  Fish,
  Droplets,
  Pickaxe,
  Gem,
  Mountain,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  Sun,
  Flame,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const sdaDapatDiperbarui = [
  {
    icon: Trees,
    name: 'Hutan',
    examples: 'Kayu, rotan, damar, getah pinus',
    description: 'Hutan menghasilkan berbagai bahan baku industri dan kebutuhan sehari-hari. Hutan juga berfungsi sebagai paru-paru dunia.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-800',
  },
  {
    icon: Tractor,
    name: 'Pertanian',
    examples: 'Padi, jagung, sayur, buah, rempah',
    description: 'Indonesia dikenal sebagai negara agraris dengan hasil pertanian yang melimpah untuk kebutuhan pangan nasional.',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-800',
  },
  {
    icon: Fish,
    name: 'Perikanan',
    examples: 'Ikan tangkap (laut) & ikan budi daya (tambak/kolam)',
    description: 'Perikanan tangkap di laut dan budi daya di tambak seperti Tambak Udang di Sulawesi menghasilkan protein hewani berkualitas.',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
  },
  {
    icon: Droplets,
    name: 'Air dan Tanah',
    examples: 'Air bersih, tanah subur, tanah liat',
    description: 'Air dan tanah merupakan sumber daya alam dasar yang menopang kehidupan dan pertanian.',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-300',
    textColor: 'text-teal-800',
  },
]

const sdaTidakDiperbarui = [
  {
    icon: Flame,
    name: 'Barang Tambang Energi',
    examples: 'Minyak bumi, batubara, gas alam',
    description: 'Digunakan sebagai sumber energi untuk transportasi, industri, dan pembangkit listrik. Terbentuk selama jutaan tahun.',
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-800',
  },
  {
    icon: Gem,
    name: 'Mineral Logam',
    examples: 'Emas, perak, tembaga, besi, nikel',
    description: 'Digunakan untuk industri, perhiasan, dan bahan baku teknologi. Contoh: Tambang Freeport di Papua.',
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    textColor: 'text-yellow-800',
  },
  {
    icon: Mountain,
    name: 'Mineral Non-Logam',
    examples: 'Pasir, batu, kapur, belerang',
    description: 'Digunakan sebagai bahan bangunan dan konstruksi serta bahan baku industri.',
    color: 'from-stone-500 to-gray-600',
    bgColor: 'bg-stone-50',
    borderColor: 'border-stone-300',
    textColor: 'text-stone-800',
  },
]

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

// Sorting game items
const sortItems = [
  { name: 'Kayu Jati', category: 'renewable' as const, icon: Trees },
  { name: 'Minyak Bumi', category: 'nonrenewable' as const, icon: Droplets },
  { name: 'Ikan Laut', category: 'renewable' as const, icon: Fish },
  { name: 'Batubara', category: 'nonrenewable' as const, icon: Pickaxe },
  { name: 'Padi', category: 'renewable' as const, icon: Tractor },
  { name: 'Emas', category: 'nonrenewable' as const, icon: Gem },
  { name: 'Air Bersih', category: 'renewable' as const, icon: Droplets },
  { name: 'Tembaga', category: 'nonrenewable' as const, icon: Pickaxe },
  { name: 'Rotan', category: 'renewable' as const, icon: Trees },
  { name: 'Gas Alam', category: 'nonrenewable' as const, icon: FlameIcon },
]

const quizQuestions = [
  {
    question: 'Manakah yang termasuk Sumber Daya Alam dapat diperbarui?',
    options: [
      'Minyak bumi, batubara, dan emas',
      'Hutan, pertanian, perikanan, dan air',
      'Besi, tembaga, dan nikel',
      'Gas alam dan pasir',
    ],
    correctAnswer: 1,
    explanation:
      'SDA dapat diperbarui adalah SDA yang jumlahnya tidak akan habis karena dapat dihasilkan kembali. Contohnya: hutan, pertanian, perikanan, dan air.',
  },
  {
    question: 'Mengapa minyak bumi dan batubara disebut SDA tidak dapat diperbarui?',
    options: [
      'Karena harganya sangat mahal',
      'Karena terletak jauh di dalam bumi',
      'Karena memerlukan waktu jutaan tahun untuk terbentuk kembali',
      'Karena sulit untuk ditambang',
    ],
    correctAnswer: 2,
    explanation:
      'Minyak bumi dan batubara terbentuk dari sisa-sisa organisme yang terpendam selama jutaan tahun. Proses pembentukan ini sangat lama sehingga jumlahnya terbatas dan tidak bisa dibuat ulang dalam waktu singkat.',
  },
  {
    question: 'Apa perbedaan utama antara SDA dapat diperbarui dan tidak dapat diperbarui?',
    options: [
      'SDA dapat diperbarui lebih mahal harganya',
      'SDA dapat diperbarui dapat dihasilkan kembali, sedangkan SDA tidak dapat diperbarui jumlahnya terbatas',
      'SDA tidak dapat diperbarui hanya ada di laut',
      'SDA dapat diperbarui hanya berasal dari hewan',
    ],
    correctAnswer: 1,
    explanation:
      'Perbedaan utamanya terletak pada kemampuan pembaruan. SDA dapat diperbarui dapat dihasilkan kembali (seperti tanaman yang bisa ditanam ulang), sedangkan SDA tidak dapat diperbarui jumlahnya terbatas dan butuh waktu sangat lama untuk terbentuk.',
  },
  {
    question: 'Pelestarian hutan penting karena hutan berfungsi sebagai...',
    options: [
      'Sumber bahan tambang utama',
      'Tempat pembangunan industri',
      'Paru-paru dunia dan penghasil oksigen',
      'Area pemukiman yang luas',
    ],
    correctAnswer: 2,
    explanation:
      'Hutan berfungsi sebagai paru-paru dunia karena menghasilkan oksigen melalui fotosintesis. Hutan juga mencegah erosi, mengatur siklus air, dan menjadi habitat keanekaragaman hayati.',
  },
]

// ============================================================
// Klasifikasi Tab - Sorting Game
// ============================================================

function KlasifikasiTab() {
  const [sorted, setSorted] = useState<Record<number, 'renewable' | 'nonrenewable'>>({})
  const [showResults, setShowResults] = useState(false)

  const handleSort = (index: number, category: 'renewable' | 'nonrenewable') => {
    if (showResults) return
    setSorted((prev) => ({ ...prev, [index]: category }))
  }

  const handleCheck = () => {
    if (Object.keys(sorted).length < sortItems.length) return
    setShowResults(true)
  }

  const handleReset = () => {
    setSorted({})
    setShowResults(false)
  }

  const score = Object.entries(sorted).filter(([idx, cat]) => sortItems[Number(idx)].category === cat).length
  const allDone = Object.keys(sorted).length === sortItems.length

  return (
    <div className="space-y-4">
      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green-900 text-lg">Game Klasifikasi SDA</h4>
            <p className="text-green-800 text-sm mt-1">
              Klik setiap item dan tentukan apakah termasuk SDA <strong>dapat diperbarui</strong> atau <strong>tidak dapat diperbarui</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Score */}
      {allDone && (
        <div className="bg-white rounded-lg p-4 border-2 border-green-200">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>{Object.keys(sorted).length}</strong> / <strong>{sortItems.length}</strong> item diklasifikasikan
            </p>
            {!showResults ? (
              <button onClick={handleCheck} className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                Cek Hasil
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">Skor: {score}/{sortItems.length}</span>
                {score === sortItems.length ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-amber-600" />
                )}
              </div>
            )}
          </div>
          {showResults && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
              {score === sortItems.length ? (
                <p className="text-green-700 font-medium">Sempurna! Kamu menguasai klasifikasi SDA dengan baik!</p>
              ) : (
                <p className="text-amber-700 font-medium">
                  Kamu mendapat {score} dari {sortItems.length} benar. Perhatikan item yang salah dan coba lagi!
                </p>
              )}
            </motion.div>
          )}
        </div>
      )}

      {/* Items grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {sortItems.map((item, idx) => {
          const ItemIcon = item.icon
          const userChoice = sorted[idx]
          const isCorrect = showResults && userChoice === item.category

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-xl p-3 border-2 transition-all text-center ${
                showResults
                  ? isCorrect
                    ? 'bg-green-50 border-green-400'
                    : 'bg-red-50 border-red-400'
                  : userChoice
                    ? userChoice === 'renewable'
                      ? 'bg-green-50 border-green-300'
                      : 'bg-red-50 border-red-300'
                    : 'bg-white border-gray-200'
              }`}
            >
              <ItemIcon className={`w-6 h-6 mx-auto mb-2 ${
                showResults ? (isCorrect ? 'text-green-600' : 'text-red-600') : 'text-gray-600'
              }`} />
              <p className="text-sm font-semibold text-gray-900">{item.name}</p>

              {!showResults && !userChoice && (
                <div className="flex gap-1 mt-2">
                  <button
                    onClick={() => handleSort(idx, 'renewable')}
                    className="flex-1 text-xs bg-green-100 text-green-700 hover:bg-green-200 py-1 rounded font-medium transition-colors"
                  >
                    Diperbarui
                  </button>
                  <button
                    onClick={() => handleSort(idx, 'nonrenewable')}
                    className="flex-1 text-xs bg-red-100 text-red-700 hover:bg-red-200 py-1 rounded font-medium transition-colors"
                  >
                    Tidak
                  </button>
                </div>
              )}

              {userChoice && !showResults && (
                <button
                  onClick={() => setSorted((prev) => {
                    const next = { ...prev }
                    delete next[idx]
                    return next
                  })}
                  className="text-xs text-gray-500 hover:text-gray-700 mt-1 underline"
                >
                  Ubah
                </button>
              )}

              {showResults && (
                <p className={`text-xs mt-1 font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? 'Benar!' : `Salah. Jawaban: ${item.category === 'renewable' ? 'Diperbarui' : 'Tidak Diperbarui'}`}
                </p>
              )}
            </motion.div>
          )
        })}
      </div>

      {showResults && (
        <button onClick={handleReset} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors inline-flex items-center gap-2">
          <RotateCcw className="w-4 h-4" />
          Main Ulang
        </button>
      )}
    </div>
  )
}

// ============================================================
// Kuis Tab
// ============================================================

function KuisTab() {
  return (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-green-900">Kuis Pemanfaatan & Pelestarian SDA</h3>
            <p className="text-green-800 text-sm mt-1">
              Uji pemahamanmu tentang SDA dapat diperbarui dan tidak dapat diperbarui. Jawab 4 soal berikut!
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
        <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-green-50 border-2 border-green-400'
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
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export default function LabSDA() {
  const [activeTab, setActiveTab] = useState<'materi' | 'klasifikasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Trees className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Pemanfaatan & Pelestarian SDA</h2>
            <p className="text-green-100">Tema III - Pelajaran 1: Pemanfaatan & Pelestarian Potensi SDA</p>
          </div>
        </div>
        <p className="text-green-100 text-sm">
          IPS Kelas 7 — Memahami potensi Sumber Daya Alam Indonesia dan cara melestarikannya
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('klasifikasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'klasifikasi'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Layers className="w-4 h-4 inline mr-2" />
            Klasifikasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
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
                <h3 className="text-2xl font-bold text-gray-900">Pemanfaatan & Pelestarian Potensi SDA</h3>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800">
                        Sumber Daya Alam (SDA) adalah segala sesuatu dari alam yang dapat dimanfaatkan manusia untuk memenuhi kebutuhannya.
                        Berdasarkan kemampuan pembaruannya, SDA dibagi menjadi dua jenis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SDA Dapat Diperbarui */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Sun className="w-6 h-6 text-green-600" />
                    1. SDA Dapat Diperbarui
                  </h4>
                  <p className="text-gray-700 mb-3">
                    SDA yang jumlahnya tidak akan habis karena dapat dihasilkan kembali atau terus-menerus ada.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sdaDapatDiperbarui.map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-4 border-2 ${item.bgColor} ${item.borderColor}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                              <ItemIcon className="w-5 h-5 text-white" />
                            </div>
                            <h5 className={`font-bold ${item.textColor}`}>{item.name}</h5>
                          </div>
                          <p className={`text-sm ${item.textColor} opacity-80`}>
                            <strong>Contoh:</strong> {item.examples}
                          </p>
                          <p className={`text-sm mt-1 ${item.textColor} opacity-75`}>{item.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* SDA Tidak Dapat Diperbarui */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Pickaxe className="w-6 h-6 text-red-600" />
                    2. SDA Tidak Dapat Diperbarui
                  </h4>
                  <p className="text-gray-700 mb-3">
                    SDA yang jumlahnya terbatas dan memerlukan waktu sangat lama (jutaan tahun) untuk terbentuk kembali.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {sdaTidakDiperbarui.map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`rounded-xl p-4 border-2 ${item.bgColor} ${item.borderColor}`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                              <ItemIcon className="w-5 h-5 text-white" />
                            </div>
                            <h5 className={`font-bold ${item.textColor}`}>{item.name}</h5>
                          </div>
                          <p className={`text-sm ${item.textColor} opacity-80`}>
                            <strong>Contoh:</strong> {item.examples}
                          </p>
                          <p className={`text-sm mt-1 ${item.textColor} opacity-75`}>{item.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Pelestarian */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300">
                    <div className="flex items-start gap-3">
                      <Trees className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-green-900 text-lg">Pentingnya Pelestarian SDA</h4>
                        <p className="text-green-800 text-sm mt-1">
                          Pelestarian SDA penting agar kekayaan alam Indonesia dapat dinikmati oleh generasi sekarang dan mendatang.
                          Upaya pelestarian meliputi: penghijauan kembali (reboisasi), pengurangan sampah, hemat energi,
                          dan pemanfaatan SDA secara berkelanjutan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================== KLASIFIKASI TAB ===================== */}
            {activeTab === 'klasifikasi' && (
              <motion.div
                key="klasifikasi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <KlasifikasiTab />
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
