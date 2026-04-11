import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Wallet,
  ShoppingCart,
  PiggyBank,
  ArrowRight,
  AlertCircle,
  Banknote,
  Shield,
  TrendingDown,
  FileText,
  FolderOpen,
  DollarSign,
  Target,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const budgetItems = [
  { id: 1, name: 'Beras & Bahan Pokok', price: 500000, category: 'need', icon: ShoppingCart },
  { id: 2, name: 'Listrik & Air', price: 200000, category: 'need', icon: Banknote },
  { id: 3, name: 'Biaya Sekolah Anak', price: 300000, category: 'need', icon: BookOpen },
  { id: 4, name: 'Tabungan Darurat', price: 200000, category: 'need', icon: PiggyBank },
  { id: 5, name: 'Makan di Restoran', price: 200000, category: 'want', icon: ShoppingCart },
  { id: 6, name: 'Langganan Streaming', price: 100000, category: 'want', icon: Lightbulb },
  { id: 7, name: 'Baju Baru Trendy', price: 150000, category: 'want', icon: ShoppingCart },
  { id: 8, name: 'Liburan Keluarga', price: 300000, category: 'want', icon: Lightbulb },
]

const quizQuestions = [
  {
    question: 'Pinjaman online (pinjol) ilegal sering kali berbahaya karena...',
    options: [
      'Pinjol ilegal hanya tersedia untuk orang dewasa',
      'Pinjol ilegal menawarkan bunga rendah dan syarat transparan',
      'Pinjol ilegal mengenakan bunga sangat tinggi, cara penagihan kasar, dan tidak terdaftar di OJK sehingga tidak dilindungi hukum',
      'Pinjol ilegal hanya menagih melalui surat resmi',
    ],
    correctAnswer: 2,
    explanation: 'Pinjaman online ilegal tidak terdaftar di OJK, mengenakan bunga dan biaya tersembunyi yang sangat tinggi, melakukan penagihan dengan cara intimidasi, dan tidak memiliki perlindungan hukum bagi peminjam. Selalu pastikan pinjol terdaftar di OJK sebelum meminjam!',
  },
  {
    question: 'Investasi "bodong" memiliki ciri-ciri berikut, KECUALI...',
    options: [
      'Menjanjikan keuntungan sangat besar dalam waktu singkat',
      'Memiliki izin resmi dari OJK dan bukti pendaftaran yang jelas',
      'Tidak ada produk atau jasa nyata yang diperdagangkan',
      'Menggunakan sistem piramida (mengandalkan anggota baru untuk membayar anggota lama)',
    ],
    correctAnswer: 1,
    explanation: 'Investasi bodong TIDAK memiliki izin resmi dari OJK atau regulator keuangan. Ciri-ciri investasi bodong: menjanjikan keuntungan besar dan pasti dalam waktu singkat, tidak ada produk nyata, mengandalkan perekrutan anggota baru (skema piramida), dan tidak transparan tentang cara kerja investasinya.',
  },
  {
    question: 'Dalam sistem amplop pengelolaan keuangan, setiap amplop digunakan untuk...',
    options: [
      'Menyimpan uang darurat yang tidak boleh disentuh',
      'Mengalokasikan sejumlah uang untuk kategori pengeluaran tertentu',
      'Membayar cicilan pinjaman online',
      'Menabung dalam bentuk deposito berjangka',
    ],
    correctAnswer: 1,
    explanation: 'Sistem amplop adalah metode pengelolaan keuangan di mana uang dibagi ke dalam beberapa amplop berdasarkan kategori pengeluaran (misalnya: makanan, transportasi, hiburan). Setiap amplop memiliki batas tertentu, dan ketika uangnya habis, tidak boleh mengambil dari amplop lain. Ini membantu mengontrol pengeluaran.',
  },
  {
    question: 'Buku kas harian bermanfaat karena...',
    options: [
      'Hanya berguna untuk perusahaan besar, bukan keluarga',
      'Mencatat semua pemasukan dan pengeluaran sehingga bisa mengontrol dan mengevaluasi keuangan',
      'Digunakan untuk menghitung pajak tahunan secara otomatis',
      'Menjadi alat untuk meminjam uang dari bank',
    ],
    correctAnswer: 1,
    explanation: 'Buku kas harian mencatat semua pemasukan dan pengeluaran secara rutin. Dengan buku kas, keluarga bisa melihat kemana uang mereka pergi, mengidentifikasi pengeluaran yang tidak perlu, membuat anggaran yang lebih baik, dan mengevaluasi kebiasaan keuangan mereka secara berkala.',
  },
]

// ============================================================
// Components
// ============================================================

function BudgetSimulation() {
  const [income, setIncome] = useState(2000000)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [showAnalysis, setShowAnalysis] = useState(false)

  const totalSpent = selectedItems.reduce((sum, id) => {
    const item = budgetItems.find((i) => i.id === id)
    return sum + (item?.price || 0)
  }, 0)
  const remaining = income - totalSpent

  const needsSelected = selectedItems.filter((id) => budgetItems.find((i) => i.id === id)?.category === 'need')
  const wantsSelected = selectedItems.filter((id) => budgetItems.find((i) => i.id === id)?.category === 'want')
  const needsTotal = needsSelected.reduce((sum, id) => {
    const item = budgetItems.find((i) => i.id === id)
    return sum + (item?.price || 0)
  }, 0)
  const wantsTotal = wantsSelected.reduce((sum, id) => {
    const item = budgetItems.find((i) => i.id === id)
    return sum + (item?.price || 0)
  }, 0)

  const toggleItem = (id: number) => {
    if (showAnalysis) return
    setSelectedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id)
      }
      const item = budgetItems.find((i) => i.id === id)
      if (item && totalSpent + item.price <= income) {
        return [...prev, id]
      }
      return prev
    })
  }

  const handleAnalyze = () => setShowAnalysis(true)
  const handleReset = () => {
    setSelectedItems([])
    setShowAnalysis(false)
  }

  const incomeOptions = [1500000, 2000000, 3000000, 4000000, 5000000]

  return (
    <div className="space-y-6">
      {/* Income selector */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-5 border-2 border-cyan-200">
        <div className="flex items-start gap-3 mb-3">
          <Wallet className="w-7 h-7 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-cyan-900 text-lg">Simulasi: Menjadi Manajer Keuangan Keluarga</h4>
            <p className="text-cyan-800 mt-2 leading-relaxed">
              Bayangkan kamu menjadi manajer keuangan keluarga! Pilih jumlah pendapatan bulanan keluarga, lalu alokasikan untuk kebutuhan dan keinginan. Bisakah kamu membuat anggaran yang sehat dan masih bisa menabung?
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-cyan-800 mb-2">Pilih Pendapatan Keluarga Per Bulan:</p>
          <div className="flex flex-wrap gap-2">
            {incomeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setIncome(opt)
                  setSelectedItems([])
                  setShowAnalysis(false)
                }}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  income === opt
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'bg-white text-cyan-700 border border-cyan-300 hover:bg-cyan-100'
                }`}
              >
                Rp{opt.toLocaleString('id-ID')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Budget display */}
      <div className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Pendapatan</p>
            <p className="text-xl font-bold text-cyan-700">Rp{income.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Terpakai</p>
            <p className="text-xl font-bold text-amber-600">Rp{totalSpent.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Sisa</p>
            <p className={`text-xl font-bold ${remaining >= income * 0.2 ? 'text-green-600' : remaining > 0 ? 'text-amber-600' : 'text-red-600'}`}>
              Rp{remaining.toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full rounded-full transition-all ${
              totalSpent / income > 0.8 ? 'bg-red-500' : totalSpent / income > 0.5 ? 'bg-amber-500' : 'bg-cyan-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((totalSpent / income) * 100, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-xs text-green-700">Kebutuhan</p>
            <p className="text-lg font-bold text-green-800">Rp{needsTotal.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3 text-center">
            <p className="text-xs text-orange-700">Keinginan</p>
            <p className="text-lg font-bold text-orange-800">Rp{wantsTotal.toLocaleString('id-ID')}</p>
          </div>
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
              disabled={!isSelected && totalSpent + item.price > income}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                isSelected
                  ? isNeed
                    ? 'bg-cyan-100 border-cyan-500 shadow-md'
                    : 'bg-orange-100 border-orange-500 shadow-md'
                  : totalSpent + item.price > income
                    ? 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed'
                    : 'bg-white border-gray-200 hover:border-cyan-300 hover:shadow-sm'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isNeed ? 'bg-cyan-200' : 'bg-orange-200'
                }`}>
                  <Icon className={`w-5 h-5 ${isNeed ? 'text-cyan-700' : 'text-orange-700'}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-cyan-700">Rp{item.price.toLocaleString('id-ID')}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      isNeed ? 'bg-cyan-100 text-cyan-700' : 'bg-orange-100 text-orange-700'
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
      <div className="flex flex-wrap gap-2 items-center">
        {!showAnalysis ? (
          <button
            onClick={handleAnalyze}
            disabled={selectedItems.length === 0}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Analisis Anggaran
          </button>
        ) : null}
        <button onClick={handleReset} className="btn-secondary flex items-center space-x-2">
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
        <span className="text-sm text-gray-500">
          {selectedItems.length} barang | {needsSelected.length} kebutuhan, {wantsSelected.length} keinginan
        </span>
      </div>

      {/* Analysis */}
      <AnimatePresence>
        {showAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-5 border-2 border-cyan-200"
          >
            <h5 className="font-bold text-cyan-900 text-lg mb-3">Analisis Anggaran Keluargamu</h5>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                <span className="text-cyan-800 font-medium">Pendapatan:</span>
                <span className="text-cyan-800 font-bold text-lg">Rp{income.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-green-800 font-medium">Kebutuhan:</span>
                <span className="text-green-800 font-bold text-lg">Rp{needsTotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-orange-800 font-medium">Keinginan:</span>
                <span className="text-orange-800 font-bold text-lg">Rp{wantsTotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                <span className="text-teal-800 font-medium">Sisa (bisa ditabung):</span>
                <span className="text-teal-800 font-bold text-lg">Rp{remaining.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Percentage breakdown */}
            {totalSpent > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Persentase dari Pendapatan:</p>
                <div className="flex gap-2 h-6 rounded-full overflow-hidden bg-gray-200">
                  {needsTotal > 0 && (
                    <motion.div
                      className="bg-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(needsTotal / income) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      title={`Kebutuhan: ${((needsTotal / income) * 100).toFixed(0)}%`}
                    />
                  )}
                  {wantsTotal > 0 && (
                    <motion.div
                      className="bg-orange-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${(wantsTotal / income) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      title={`Keinginan: ${((wantsTotal / income) * 100).toFixed(0)}%`}
                    />
                  )}
                  {remaining > 0 && (
                    <motion.div
                      className="bg-teal-300"
                      initial={{ width: 0 }}
                      animate={{ width: `${(remaining / income) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      title={`Sisa: ${((remaining / income) * 100).toFixed(0)}%`}
                    />
                  )}
                </div>
                <div className="flex gap-4 mt-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-cyan-500 rounded-sm inline-block" /> Kebutuhan
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-orange-500 rounded-sm inline-block" /> Keinginan
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-teal-300 rounded-sm inline-block" /> Tabungan
                  </span>
                </div>
              </div>
            )}

            {/* Feedback */}
            <div className={`mt-4 p-4 rounded-lg ${
              needsSelected.length >= wantsSelected.length && remaining >= income * 0.2
                ? 'bg-green-50 border-2 border-green-200'
                : wantsSelected.length > needsSelected.length
                  ? 'bg-amber-50 border-2 border-amber-200'
                  : remaining < income * 0.1 && remaining >= 0
                    ? 'bg-yellow-50 border-2 border-yellow-200'
                    : 'bg-red-50 border-2 border-red-200'
            }`}>
              {needsSelected.length >= wantsSelected.length && remaining >= income * 0.2 && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-green-800">Luar biasa! Anggaran keluarga yang bijak.</p>
                    <p className="text-sm text-green-700 mt-1">
                      Kamu mengutamakan kebutuhan dasar keluarga dan masih bisa menabung {((remaining / income) * 100).toFixed(0)}% dari pendapatan. Prioritasmu sudah tepat! Keluarga dengan anggaran yang baik akan lebih siap menghadapi tantangan keuangan.
                    </p>
                  </div>
                </div>
              )}
              {wantsSelected.length > needsSelected.length && (
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800">Perlu mempertimbangkan ulang prioritas keluarga.</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Kamu lebih banyak mengalokasikan untuk keinginan daripada kebutuhan. Ingat, kebutuhan dasar seperti makanan, listrik, dan pendidikan anak harus dipenuhi dulu. Coba ubah pendapatanmu dan lihat perbedaannya!
                    </p>
                  </div>
                </div>
              )}
              {remaining < income * 0.1 && remaining >= 0 && wantsSelected.length <= needsSelected.length && (
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-yellow-800">Sisa anggaran sangat tipis.</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Meskipun prioritasmu sudah baik, sisa yang bisa ditabung sangat kecil. Tabungan darurat penting untuk menghadapi pengeluaran tak terduga. Coba kurangi beberapa keinginan!
                    </p>
                  </div>
                </div>
              )}
              {remaining < 0 && (
                <div className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800">Pengeluaran melebihi pendapatan!</p>
                    <p className="text-sm text-red-700 mt-1">
                      Ini menunjukkan pentingnya mengelola keuangan. Jika pengeluaran {'>'} pendapatan, akan terjadi defisit yang bisa berujung pada utang. Kurangi pengeluaran atau tingkatkan pendapatan!
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

export default function LabPengelolaanKeuangan() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Wallet className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Pengelolaan Keuangan Keluarga & Literasi Finansial</h2>
            <p className="text-teal-100">Tema IV - Pelajaran 6: Pengelolaan Keuangan Keluarga dan Literasi Finansial</p>
          </div>
        </div>
        <p className="text-teal-100 text-sm">
          IPS Kelas 7 — Memahami risiko pinjaman online, investasi bodong, sistem amplop, dan buku kas harian
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
            onClick={() => setActiveTab('simulasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'simulasi'
                ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <DollarSign className="w-4 h-4 inline mr-2" />
            Simulasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-700'
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
      <h3 className="text-2xl font-bold text-gray-900">Pengelolaan Keuangan Keluarga & Literasi Finansial</h3>

      {/* A. Literasi Keuangan: Risiko Pinjaman Online */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200">
        <div className="flex items-start gap-3 mb-3">
          <Shield className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-red-900 text-lg">A. Literasi Keuangan: Waspadai Risiko Pinjaman Online</h4>
            <p className="text-red-800 mt-2 leading-relaxed">
              Di era digital, pinjaman online (pinjol) semakin mudah diakses. Namun, banyak pinjol <strong>ilegal</strong> yang justru merugikan masyarakat. Mari kita kenali risikonya!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Pinjol Legal */}
          <div className="bg-white rounded-lg p-4 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h5 className="font-bold text-green-800 text-lg">Pinjol Legal (Terdaftar di OJK)</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Terdaftar dan diawasi oleh <strong>OJK</strong> (Otoritas Jasa Keuangan)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Bunga dan biaya <strong>transparan</strong> dan sesuai batas peraturan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Penagihan dilakukan secara <strong>sopan dan profesional</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Memiliki <strong>perlindungan hukum</strong> bagi peminjam</span>
              </li>
            </ul>
          </div>

          {/* Pinjol Ilegal */}
          <div className="bg-white rounded-lg p-4 border-2 border-red-300">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h5 className="font-bold text-red-800 text-lg">Pinjol Ilegal (Tidak Terdaftar)</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tidak terdaftar</strong> di OJK atau instansi resmi manapun</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Bunga sangat tinggi dan <strong>biaya tersembunyi</strong> yang membingungkan</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Penagihan dengan cara <strong>intimidasi, ancaman,</strong> dan menyebar data pribadi</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tidak ada perlindungan hukum</strong> — korban sulit menuntut</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Warning box */}
        <div className="bg-red-100 rounded-lg p-4 mt-4 border-2 border-red-300">
          <div className="flex items-start gap-3">
            <TrendingDown className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-900">Bahaya Pinjol Ilegal:</p>
              <p className="text-sm text-red-800 mt-1">
                Banyak korban pinjol ilegal yang terjebak dalam <strong>lingkaran utang</strong> karena bunga yang terus membengkak. Dari pinjaman awal Rp500.000, utang bisa membengkak menjadi jutaan rupiah. Selain itu, data pribadi sering disalahgunakan untuk meneror kontak darurat. <strong>Selalu cek legalitas pinjol di website OJK (ojk.go.id) sebelum meminjam!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* B. Investasi Bodong */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-200">
        <div className="flex items-start gap-3 mb-3">
          <AlertCircle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-900 text-lg">B. Mengenal dan Menghindari Investasi Bodong</h4>
            <p className="text-amber-800 mt-2 leading-relaxed">
              Investasi bodong (investasi penipuan) banyak mengatasnamakan investasi menguntungkan, padahal hanya merugikan. Mari kita kenali ciri-cirinya!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mt-3 border border-amber-200">
          <h5 className="font-bold text-amber-900 mb-2">Ciri-ciri Investasi Bodong:</h5>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">1</span>
              <span><strong>Menjanjikan keuntungan besar dan pasti</strong> dalam waktu singkat (misalnya: "untung 30% per bulan!"). Investasi yang sah tidak pernah menjanjikan keuntungan pasti.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">2</span>
              <span><strong>Tidak memiliki izin resmi</strong> dari OJK, Bappebti, atau lembaga berwenang lainnya.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">3</span>
              <span><strong>Tidak ada produk atau jasa nyata</strong> yang diperdagangkan. Uang hanya berputar dari anggota baru ke anggota lama.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">4</span>
              <span><strong>Sistem piramida</strong> — keuntungan berasal dari merekrut anggota baru, bukan dari produk atau usaha nyata.</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">5</span>
              <span><strong>Tidak transparan</strong> tentang cara kerja investasi. Tidak bisa menjelaskan bagaimana keuntungan dihasilkan.</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mt-4 border-2 border-green-200">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-green-900">Tips Menghindari Investasi Bodong:</p>
              <ol className="text-sm text-green-800 mt-2 space-y-1 list-decimal list-inside">
                <li>Selalu cek <strong>legalitas di OJK</strong> (ojk.go.id) atau Bappebti</li>
                <li>Waspadai janji <strong>keuntungan besar dan pasti</strong></li>
                <li>Pahami <strong>produk atau jasa</strong> yang ditawarkan</li>
                <li>Konsultasi dengan <strong>ahli keuangan</strong> terpercaya</li>
                <li>Jangan terburu-buru — investasi bodong sering menekan agar cepat memutuskan</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* C. Pengelolaan Keuangan */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-5 border-2 border-cyan-200">
        <div className="flex items-start gap-3 mb-3">
          <Target className="w-7 h-7 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-cyan-900 text-lg">C. Pengelolaan Keuangan Keluarga</h4>
            <p className="text-cyan-800 mt-2 leading-relaxed">
              Pengelolaan keuangan yang baik adalah fondasi kesejahteraan keluarga. Tanpa perencanaan, pendapatan berapapun bisa habis tanpa bekas. Mari pelajari prinsip-prinsipnya!
            </p>
          </div>
        </div>

        {/* 1. Tujuan Keuangan */}
        <div className="bg-white rounded-lg p-4 mt-4 border-2 border-cyan-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
            <h5 className="font-bold text-cyan-900 text-lg">Menetapkan Tujuan Keuangan</h5>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Setiap keluarga perlu memiliki <strong>tujuan keuangan</strong> yang jelas agar pengelolaan uang lebih terarah:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
              <p className="font-bold text-cyan-800 text-sm">Jangka Pendek</p>
              <p className="text-xs text-cyan-700 mt-1">Kebutuhan harian/bulanan: makan, transportasi, belanja kebutuhan</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p className="font-bold text-teal-800 text-sm">Jangka Menengah</p>
              <p className="text-xs text-teal-700 mt-1">Biaya pendidikan anak, renovasi rumah, beli kendaraan</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <p className="font-bold text-emerald-800 text-sm">Jangka Panjang</p>
              <p className="text-xs text-emerald-700 mt-1">Tabungan hari tua, dana pensiun, investasi pendidikan</p>
            </div>
          </div>
        </div>

        {/* 2. Kebutuhan vs Keinginan */}
        <div className="bg-white rounded-lg p-4 mt-4 border-2 border-teal-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <h5 className="font-bold text-teal-900 text-lg">Membedakan Kebutuhan dan Keinginan</h5>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Kemampuan membedakan <strong>kebutuhan</strong> (needs) dan <strong>keinginan</strong> (wants) adalah kunci pengelolaan keuangan yang baik:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h6 className="font-bold text-green-800">Kebutuhan (Needs)</h6>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- Makanan pokok, air bersih</li>
                <li>- Tempat tinggal, listrik</li>
                <li>- Pendidikan, kesehatan</li>
                <li>- Transportasi dasar</li>
              </ul>
              <p className="text-xs text-green-700 mt-2 italic">Harus dipenuhi untuk kelangsungan hidup</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <h6 className="font-bold text-orange-800">Keinginan (Wants)</h6>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>- Makan di restoran mewah</li>
                <li>- Gadget terbaru</li>
                <li>- Liburan ke luar kota</li>
                <li>- Langganan hiburan premium</li>
              </ul>
              <p className="text-xs text-orange-700 mt-2 italic">Bisa ditunda atau dikurangi tanpa mengganggu kehidupan</p>
            </div>
          </div>
        </div>

        {/* 3. Membuat Anggaran */}
        <div className="bg-white rounded-lg p-4 mt-4 border-2 border-cyan-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <h5 className="font-bold text-cyan-900 text-lg">Membuat Anggaran Keluarga</h5>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Anggaran (budget) adalah rencana pengeluaran yang membantu keluarga mengalokasikan pendapatan secara bijak. Langkah-langkahnya:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">1</span>
              <span><strong>Catat total pendapatan</strong> — hitung semua sumber pendapatan keluarga per bulan</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">2</span>
              <span><strong>Daftar kebutuhan prioritas</strong> — mulai dari yang paling penting (makanan, tempat tinggal, pendidikan)</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">3</span>
              <span><strong>Alokasikan untuk keinginan</strong> — setelah kebutuhan terpenuhi, sisakan untuk keinginan</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">4</span>
              <span><strong>Sisihkan untuk tabungan</strong> — minimal 10-20% dari pendapatan, bahkan jika terasa berat</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">5</span>
              <span><strong>Evaluasi secara berkala</strong> — cek apakah anggaran berjalan sesuai rencana, dan sesuaikan</span>
            </div>
          </div>
        </div>
      </div>

      {/* D. Sistem Amplop */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-5 border-2 border-violet-200">
        <div className="flex items-start gap-3 mb-3">
          <FolderOpen className="w-7 h-7 text-violet-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-violet-900 text-lg">D. Sistem Amplop dalam Pengelolaan Keuangan</h4>
            <p className="text-violet-800 mt-2 leading-relaxed">
              Sistem amplop adalah metode tradisional yang sangat efektif untuk mengelola keuangan keluarga. Metode ini membantu mengontrol pengeluaran secara visual dan fisik.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mt-3 border border-violet-200">
          <h5 className="font-bold text-violet-900 mb-2">Cara Kerja Sistem Amplop:</h5>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">1</span>
              <span><strong>Siapkan beberapa amplop</strong> — beri label untuk setiap kategori pengeluaran (Makanan, Transportasi, Pendidikan, Hiburan, dll.)</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">2</span>
              <span><strong>Tentukan jumlah per amplop</strong> — berdasarkan anggaran yang sudah dibuat, masukkan uang ke setiap amplop</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">3</span>
              <span><strong>Belanja hanya dari amplop yang sesuai</strong> — saat butuh makanan, ambil dari amplop Makanan saja</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">4</span>
              <span><strong>Jangan pinjam antar amplop!</strong> — jika uang di satu amplop habis, tunggu bulan depan atau kurangi kategori lain</span>
            </div>
          </div>
        </div>

        {/* Visual amplop representation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div className="bg-red-100 rounded-lg p-3 text-center border-2 border-red-300">
            <ShoppingCart className="w-8 h-8 text-red-600 mx-auto mb-1" />
            <p className="font-bold text-red-800 text-sm">Makanan</p>
            <p className="text-xs text-red-700">Rp500.000</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-3 text-center border-2 border-blue-300">
            <Banknote className="w-8 h-8 text-blue-600 mx-auto mb-1" />
            <p className="font-bold text-blue-800 text-sm">Transportasi</p>
            <p className="text-xs text-blue-700">Rp200.000</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 text-center border-2 border-green-300">
            <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-1" />
            <p className="font-bold text-green-800 text-sm">Pendidikan</p>
            <p className="text-xs text-green-700">Rp300.000</p>
          </div>
          <div className="bg-purple-100 rounded-lg p-3 text-center border-2 border-purple-300">
            <PiggyBank className="w-8 h-8 text-purple-600 mx-auto mb-1" />
            <p className="font-bold text-purple-800 text-sm">Tabungan</p>
            <p className="text-xs text-purple-700">Rp200.000</p>
          </div>
        </div>

        <div className="bg-violet-50 rounded-lg p-4 mt-4 border border-violet-200">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-violet-900">Kelebihan Sistem Amplop:</p>
              <ul className="text-sm text-violet-800 mt-1 space-y-1 list-disc list-inside">
                <li>Mudah dipahami dan diterapkan, bahkan oleh yang awam keuangan</li>
                <li>Membuat batas pengeluaran <strong>nyata dan terlihat</strong></li>
                <li>Mencegah <em>overspending</em> (pengeluaran berlebih)</li>
                <li>Versi modern: bisa menggunakan <strong>rekening terpisah</strong> atau <strong>e-wallet berbeda</strong> untuk setiap kategori</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* E. Buku Kas Harian */}
      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-xl p-5 border-2 border-sky-200">
        <div className="flex items-start gap-3 mb-3">
          <FileText className="w-7 h-7 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sky-900 text-lg">E. Buku Kas Harian Keluarga</h4>
            <p className="text-sky-800 mt-2 leading-relaxed">
              Buku kas harian adalah catatan rutin yang mencatat semua <strong>pemasukan</strong> dan <strong>pengeluaran</strong> keluarga. Ini adalah alat paling mendasar namun paling penting dalam pengelolaan keuangan!
            </p>
          </div>
        </div>

        {/* Example table */}
        <div className="bg-white rounded-lg p-4 mt-3 border border-sky-200 overflow-x-auto">
          <h5 className="font-bold text-sky-900 mb-3">Contoh Buku Kas Harian:</h5>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-sky-100">
                <th className="border-2 border-sky-200 p-2 text-left text-sky-800">Tanggal</th>
                <th className="border-2 border-sky-200 p-2 text-left text-sky-800">Keterangan</th>
                <th className="border-2 border-sky-200 p-2 text-right text-sky-800">Masuk (+)</th>
                <th className="border-2 border-sky-200 p-2 text-right text-sky-800">Keluar (-)</th>
                <th className="border-2 border-sky-200 p-2 text-right text-sky-800">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-sky-100 p-2">1 Apr</td>
                <td className="border-2 border-sky-100 p-2">Gaji Ayah</td>
                <td className="border-2 border-sky-100 p-2 text-right text-green-700 font-medium">Rp3.000.000</td>
                <td className="border-2 border-sky-100 p-2 text-right">-</td>
                <td className="border-2 border-sky-100 p-2 text-right font-bold">Rp3.000.000</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border-2 border-sky-100 p-2">2 Apr</td>
                <td className="border-2 border-sky-100 p-2">Belanja Bulanan</td>
                <td className="border-2 border-sky-100 p-2 text-right">-</td>
                <td className="border-2 border-sky-100 p-2 text-right text-red-700 font-medium">Rp500.000</td>
                <td className="border-2 border-sky-100 p-2 text-right font-bold">Rp2.500.000</td>
              </tr>
              <tr>
                <td className="border-2 border-sky-100 p-2">5 Apr</td>
                <td className="border-2 border-sky-100 p-2">Listrik & Air</td>
                <td className="border-2 border-sky-100 p-2 text-right">-</td>
                <td className="border-2 border-sky-100 p-2 text-right text-red-700 font-medium">Rp200.000</td>
                <td className="border-2 border-sky-100 p-2 text-right font-bold">Rp2.300.000</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border-2 border-sky-100 p-2">8 Apr</td>
                <td className="border-2 border-sky-100 p-2">Jajan Anak</td>
                <td className="border-2 border-sky-100 p-2 text-right">-</td>
                <td className="border-2 border-sky-100 p-2 text-right text-red-700 font-medium">Rp50.000</td>
                <td className="border-2 border-sky-100 p-2 text-right font-bold">Rp2.250.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h5 className="font-bold text-green-800">Manfaat Buku Kas Harian</h5>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>- Mengetahui arus uang secara detail</li>
              <li>- Mengidentifikasi pengeluaran yang tidak perlu</li>
              <li>- Dasar membuat anggaran yang realistis</li>
              <li>- Evaluasi kebiasaan keuangan secara berkala</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-indigo-600" />
              <h5 className="font-bold text-indigo-800">Tips Mencatat</h5>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>- Catat <strong>setiap hari</strong>, jangan ditunda</li>
              <li>- Simpan <strong>semua bukti</strong> (struk, nota)</li>
              <li>- Gunakan <strong>aplikasi keuangan</strong> di HP sebagai alternatif</li>
              <li>- <strong>Evaluasi di akhir bulan</strong> untuk rencana berikutnya</li>
            </ul>
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
        <h3 className="text-2xl font-bold text-gray-900">Simulasi: Menjadi Manajer Keuangan Keluarga</h3>
        <p className="text-gray-700">
          Pilih jumlah pendapatan keluarga per bulan, lalu alokasikan untuk kebutuhan, keinginan, dan tabungan. Cobalah berbagai tingkat pendapatan dan lihat bagaimana kemampuan beranggaran berubah! Prioritaskan kebutuhan dasar keluarga terlebih dahulu.
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
      <h3 className="text-2xl font-bold text-gray-900">Kuis Pengelolaan Keuangan & Literasi Finansial</h3>
      <p className="text-gray-700">
        Uji pemahamanmu tentang risiko pinjaman online, investasi bodong, sistem amplop, dan buku kas harian!
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
