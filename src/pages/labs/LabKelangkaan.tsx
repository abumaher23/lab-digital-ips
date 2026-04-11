import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ListTodo,
  Wallet,
  ShoppingCart,
  Package,
  Truck,
  Coins,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const budgetItems = [
  { id: 1, name: 'Buku Sekolah', price: 25000, category: 'need', icon: BookOpen },
  { id: 2, name: 'Makan Siang', price: 15000, category: 'need', icon: ShoppingCart },
  { id: 3, name: 'Alat Tulis', price: 10000, category: 'need', icon: Package },
  { id: 4, name: 'Es Krim', price: 10000, category: 'want', icon: ShoppingCart },
  { id: 5, name: 'Stiker Motor', price: 20000, category: 'want', icon: Package },
  { id: 6, name: 'Mainan Game', price: 30000, category: 'want', icon: Lightbulb },
  { id: 7, name: 'Minuman Ringan', price: 5000, category: 'want', icon: ShoppingCart },
  { id: 8, name: 'Transportasi', price: 10000, category: 'need', icon: Truck },
]

const quizQuestions = [
  {
    question: 'Kelangkaan terjadi ketika...',
    options: [
      'Barang-barang tersedia melimpah di pasar',
      'Kebutuhan manusia tidak terbatas tetapi alat pemuas kebutuhan terbatas',
      'Pemerintah mencetak uang sebanyak-banyaknya',
      'Semua kebutuhan manusia dapat terpenuhi dengan mudah',
    ],
    correctAnswer: 1,
    explanation: 'Kelangkaan terjadi karena kebutuhan manusia yang hampir tidak terbatas tidak mampu dipenuhi oleh alat pemuas kebutuhan yang jumlahnya terbatas.',
  },
  {
    question: 'Pertanyaan "Apa yang diproduksi?" dalam masalah pokok ekonomi berkaitan dengan...',
    options: [
      'Metode produksi yang digunakan',
      'Target konsumen barang',
      'Jenis dan jumlah barang yang akan diproduksi',
      'Cara mendistribusikan barang',
    ],
    correctAnswer: 2,
    explanation: 'Masalah "What" (Apa yang diproduksi) berkaitan dengan penentuan jenis, jumlah, dan waktu produksi barang atau jasa.',
  },
  {
    question: 'Berikut yang termasuk contoh kebutuhan (need) adalah...',
    options: [
      'Membeli es krim di mall',
      'Membeli buku pelajaran untuk sekolah',
      'Membeli mainan game terbaru',
      'Membeli stiker untuk menghias motor',
    ],
    correctAnswer: 1,
    explanation: 'Buku pelajaran merupakan kebutuhan utama untuk mendukung proses belajar di sekolah. Kebutuhan adalah hal yang harus dipenuhi untuk hidup layak.',
  },
  {
    question: 'Skala prioritas membantu kita dalam menghadapi kelangkaan dengan cara...',
    options: [
      'Meningkatkan jumlah barang yang diproduksi',
      'Menghilangkan semua keinginan kita',
      'Mengurutkan kebutuhan dari yang paling mendesak ke yang bisa ditunda',
      'Meminta pemerintah menyediakan semua kebutuhan',
    ],
    correctAnswer: 2,
    explanation: 'Skala prioritas membantu kita mengurutkan kebutuhan berdasarkan tingkat kepentingannya, sehingga kita dapat memenuhi yang paling mendesak terlebih dahulu.',
  },
]

// ============================================================
// Components
// ============================================================

function BudgetSimulation() {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [showAnalysis, setShowAnalysis] = useState(false)

  const budget = 100000
  const totalSpent = selectedItems.reduce((sum, id) => {
    const item = budgetItems.find((i) => i.id === id)
    return sum + (item?.price || 0)
  }, 0)
  const remaining = budget - totalSpent

  const needsSelected = selectedItems.filter((id) => budgetItems.find((i) => i.id === id)?.category === 'need').length
  const wantsSelected = selectedItems.filter((id) => budgetItems.find((i) => i.id === id)?.category === 'want').length

  const toggleItem = (id: number) => {
    if (showAnalysis) return
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id)
      }
      const item = budgetItems.find((i) => i.id === id)
      if (item && totalSpent + item.price <= budget) {
        return [...prev, id]
      }
      return prev
    })
  }

  const handleAnalyze = () => {
    setShowAnalysis(true)
  }

  const handleReset = () => {
    setSelectedItems([])
    setShowAnalysis(false)
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 border-2 border-indigo-200">
        <div className="flex items-start gap-3 mb-3">
          <Wallet className="w-7 h-7 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 text-lg">Atur Anggaranmu!</h4>
            <p className="text-indigo-800 mt-2 leading-relaxed">
              Kamu punya <strong>Rp{budget.toLocaleString('id-ID')}</strong>. Pilih barang yang ingin kamu beli. Perhatikan prioritas antara <strong>kebutuhan</strong> dan <strong>keinginan</strong>!
            </p>
          </div>
        </div>
      </div>

      {/* Budget display */}
      <div className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">Anggaran</p>
            <p className="text-2xl font-bold text-indigo-700">Rp{budget.toLocaleString('id-ID')}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Terpakai</p>
            <p className={`text-2xl font-bold ${totalSpent > 50000 ? 'text-amber-600' : 'text-green-600'}`}>
              Rp{totalSpent.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Sisa</p>
            <p className={`text-2xl font-bold ${remaining === 0 ? 'text-red-600' : remaining > 30000 ? 'text-green-600' : 'text-amber-600'}`}>
              Rp{remaining.toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full rounded-full transition-all ${
              totalSpent / budget > 0.8 ? 'bg-red-500' : totalSpent / budget > 0.5 ? 'bg-amber-500' : 'bg-green-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((totalSpent / budget) * 100, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {budgetItems.map((item) => {
          const isSelected = selectedItems.includes(item.id)
          const Icon = item.icon
          const isNeed = item.category === 'need'

          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              disabled={!isSelected && totalSpent + item.price > budget}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? isNeed
                    ? 'bg-green-100 border-green-500 shadow-md'
                    : 'bg-amber-100 border-amber-500 shadow-md'
                  : totalSpent + item.price > budget
                    ? 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed'
                    : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-sm'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isNeed ? 'bg-green-200' : 'bg-amber-200'
                }`}>
                  <Icon className={`w-5 h-5 ${isNeed ? 'text-green-700' : 'text-amber-700'}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-indigo-700">Rp{item.price.toLocaleString('id-ID')}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      isNeed
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {isNeed ? 'Kebutuhan' : 'Keinginan'}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        {!showAnalysis ? (
          <button
            onClick={handleAnalyze}
            disabled={selectedItems.length === 0}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Analisis Pilihanku
          </button>
        ) : null}
        <button onClick={handleReset} className="btn-secondary flex items-center space-x-2">
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
        <span className="text-sm text-gray-500 self-center">
          {selectedItems.length} barang dipilih | {needsSelected} kebutuhan, {wantsSelected} keinginan
        </span>
      </div>

      {/* Analysis */}
      <AnimatePresence>
        {showAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-5 border-2 border-indigo-200"
          >
            <h5 className="font-bold text-indigo-900 text-lg mb-3">Analisis Pilihanmu</h5>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-green-800 font-medium">Kebutuhan dipilih:</span>
                <span className="text-green-800 font-bold text-lg">{needsSelected}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <span className="text-amber-800 font-medium">Keinginan dipilih:</span>
                <span className="text-amber-800 font-bold text-lg">{wantsSelected}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                <span className="text-indigo-800 font-medium">Total pengeluaran:</span>
                <span className="text-indigo-800 font-bold text-lg">Rp{totalSpent.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800 font-medium">Sisa anggaran:</span>
                <span className="text-blue-800 font-bold text-lg">Rp{remaining.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Feedback message */}
            <div className={`mt-4 p-4 rounded-lg ${
              needsSelected >= wantsSelected && remaining >= 0
                ? 'bg-green-50 border-2 border-green-200'
                : wantsSelected > needsSelected
                  ? 'bg-amber-50 border-2 border-amber-200'
                  : 'bg-red-50 border-2 border-red-200'
            }`}>
              {needsSelected >= wantsSelected && remaining >= 0 && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-800">Bagus! Prioritasmu sudah tepat.</p>
                    <p className="text-sm text-green-700 mt-1">
                      Kamu mengutamakan kebutuhan daripada keinginan. Ini adalah cara bijak menghadapi kelangkaan!
                    </p>
                  </div>
                </div>
              )}
              {wantsSelected > needsSelected && (
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800">Hati-hati dengan prioritasmu.</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Kamu lebih banyak memilih keinginan daripada kebutuhan. Ingat, dalam kelangkaan kita harus mengutamakan hal yang paling penting dulu!
                    </p>
                  </div>
                </div>
              )}
              {remaining < 0 && (
                <div className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800">Anggaran terlampaui!</p>
                    <p className="text-sm text-red-700 mt-1">
                      Ini menunjukkan konsep kelangkaan: sumber daya terbatas tidak bisa memenuhi semua keinginan. Coba kurangi beberapa pilihan!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-indigo-50 border-2 border-indigo-400'
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
              <CheckCircle2 className="w-5 h-5 text-green-600" />
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

export default function LabKelangkaan() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Coins className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Masalah Pokok Ekonomi - Kelangkaan</h2>
            <p className="text-indigo-100">Tema II - Pelajaran 7: Masalah Pokok Ekonomi - Kelangkaan</p>
          </div>
        </div>
        <p className="text-indigo-100 text-sm">
          IPS Kelas 7 — Memahami konsep kelangkaan, tiga masalah pokok ekonomi, dan skala prioritas
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-700'
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
                ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Wallet className="w-4 h-4 inline mr-2" />
            Simulasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-700'
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
            {activeTab === 'materi' && (
              <motion.div key="materi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MateriTab />
              </motion.div>
            )}
            {activeTab === 'simulasi' && (
              <motion.div key="simulasi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SimulasiTab />
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
      <h3 className="text-2xl font-bold text-gray-900">Masalah Pokok Ekonomi - Kelangkaan</h3>

      {/* A. Konsep Kelangkaan */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-200">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-900 text-lg">A. Konsep Kelangkaan</h4>
            <p className="text-amber-800 mt-2 leading-relaxed">
              Kelangkaan merupakan masalah pokok ekonomi yang terjadi ketika <strong>kebutuhan manusia yang hampir tidak terbatas</strong> tidak mampu dipenuhi oleh <strong>alat pemuas kebutuhan yang sifatnya terbatas</strong>.
            </p>
          </div>
        </div>

        {/* Visual: Kebutuhan vs Alat Pemuas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-300 text-center">
            <div className="text-3xl mb-2">∞</div>
            <h5 className="font-bold text-red-800">Kebutuhan Manusia</h5>
            <p className="text-sm text-red-700 mt-1">Hampir tidak terbatas, selalu ada</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center">
            <div className="text-3xl mb-2">💰</div>
            <h5 className="font-bold text-blue-800">Alat Pemuas Kebutuhan</h5>
            <p className="text-sm text-blue-700 mt-1">Terbatas jumlahnya</p>
          </div>
        </div>

        {/* Contoh sehari-hari */}
        <div className="bg-white rounded-lg p-4 mt-4 border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>Contoh sehari-hari:</strong> Uang sak terbatas tapi mau beli banyak jajanan.
            Itulah kelangkaan dalam kehidupan kita!
          </p>
        </div>
      </div>

      {/* B. Tiga Masalah Pokok Ekonomi Modern */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <ListTodo className="w-6 h-6 text-indigo-600" />
          B. Tiga Masalah Pokok Ekonomi Modern
        </h3>
        <p className="text-gray-700">
          Setiap masyarakat ekonomi harus menjawab tiga pertanyaan fundamental berikut:
        </p>

        <div className="grid grid-cols-1 gap-4">
          {/* What */}
          <div className="bg-emerald-50 rounded-xl p-5 border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 text-lg">APA yang Diproduksi? (What)</h4>
                <p className="text-sm text-emerald-700">Menentukan jenis, jumlah, dan waktu produksi</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border border-emerald-100">
                <p className="text-sm text-emerald-800">
                  <strong>Pertimbangan:</strong> Apakah barang/jasa ini bermanfaat? Menguntungkan? Sesuai kebutuhan masyarakat?
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>Contoh salah:</strong> Memproduksi jaket tebal di daerah pantai — tidak sesuai kebutuhan!
                </p>
              </div>
            </div>
          </div>

          {/* How */}
          <div className="bg-sky-50 rounded-xl p-5 border-2 border-sky-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h4 className="font-bold text-sky-900 text-lg">BAGAIMANA Cara Memproduksi? (How)</h4>
                <p className="text-sm text-sky-700">Menentukan metode dan proses produksi</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border border-sky-100">
                <p className="text-sm text-sky-800">
                  <strong>Sumber daya:</strong> Ketersediaan bahan baku, lokasi produksi, dan harga bahan.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-sky-100">
                <p className="text-sm text-sky-800">
                  <strong>Teknologi:</strong> Apakah menggunakan tenaga manual dengan manusia atau mesin modern?
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-sky-100">
                <p className="text-sm text-sky-800">
                  <strong>Tenaga kerja:</strong> Memilih pekerja yang kompeten dan terampil.
                </p>
              </div>
            </div>
          </div>

          {/* For Whom */}
          <div className="bg-violet-50 rounded-xl p-5 border-2 border-violet-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h4 className="font-bold text-violet-900 text-lg">UNTUK SIAPA Barang Diproduksi? (For Whom)</h4>
                <p className="text-sm text-violet-700">Menentukan target pasar dan konsumen</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border border-violet-100">
                <p className="text-sm text-violet-800">
                  <strong>Segmentasi pasar:</strong> Menengah ke bawah, menengah, atau menengah ke atas?
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-violet-100">
                <p className="text-sm text-violet-800">
                  <strong>Pertimbangan:</strong> Jenis produk yang akan dibuat dan harga yang sesuai dengan target pasar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C. Skala Prioritas */}
      <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
        <div className="flex items-start gap-3 mb-3">
          <Wallet className="w-7 h-7 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 text-lg">C. Skala Prioritas</h4>
            <p className="text-indigo-800 mt-2 leading-relaxed">
              Di dunia yang memiliki sumber daya terbatas, <strong>kemampuan menentukan skala prioritas adalah kunci utama</strong>.
              Kita harus bisa membedakan antara <strong>kebutuhan</strong> (yang harus dipenuhi) dan <strong>keinginan</strong> (yang bisa ditunda).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <h5 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Kebutuhan (Needs)
            </h5>
            <p className="text-sm text-green-700">Hal yang HARUS dipenuhi untuk hidup layak.</p>
            <p className="text-sm text-green-700 mt-2">
              <strong>Contoh:</strong> Buku sekolah, makan, transportasi ke sekolah.
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
            <h5 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Keinginan (Wants)
            </h5>
            <p className="text-sm text-orange-700">Hal yang DIINGINKAN tapi tidak mendesak.</p>
            <p className="text-sm text-orange-700 mt-2">
              <strong>Contoh:</strong> Mainan, es krim, stiker motor.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== SIMULASI TAB ====================
function SimulasiTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">Simulasi: Atur Anggaranmu</h3>
        <p className="text-gray-700">
          Terapkan konsep kelangkaan dan skala prioritas dengan mengatur anggaran Rp100.000. Pilih barang yang ingin kamu beli dan lihat bagaimana kamu memprioritaskan kebutuhan vs keinginan!
        </p>
      </div>

      <BudgetSimulation />
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Kuis Kelangkaan</h3>
      <p className="text-gray-700">
        Uji pemahamanmu tentang kelangkaan, masalah pokok ekonomi, dan skala prioritas!
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
