import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Coins,
  Wallet,
  ShoppingCart,
  PiggyBank,
  TrendingUp,
  ArrowRight,
  AlertCircle,
  Banknote,
  Landmark,
  BarChart3,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const budgetItems = [
  { id: 1, name: 'Makan Sehat', price: 300000, category: 'need', icon: ShoppingCart },
  { id: 2, name: 'Transportasi', price: 150000, category: 'need', icon: Banknote },
  { id: 3, name: 'Buku Pelajaran', price: 100000, category: 'need', icon: BookOpen },
  { id: 4, name: 'Tabungan Pendidikan', price: 200000, category: 'need', icon: PiggyBank },
  { id: 5, name: 'Jajan di Kafe', price: 150000, category: 'want', icon: ShoppingCart },
  { id: 6, name: 'Nonton Bioskop', price: 75000, category: 'want', icon: Lightbulb },
  { id: 7, name: 'Beli Skin Game', price: 100000, category: 'want', icon: Lightbulb },
  { id: 8, name: 'Kaos Baru', price: 80000, category: 'want', icon: ShoppingCart },
]

const quizQuestions = [
  {
    question: 'Sistem barter memiliki kelemahan utama, yaitu...',
    options: [
      'Barter hanya bisa dilakukan di pasar tradisional',
      'Memerlukan kesamaan kebutuhan dua arah (double coincidence of wants)',
      'Barter tidak diperbolehkan dalam hukum ekonomi',
      'Barter hanya menggunakan barang yang tidak berharga',
    ],
    correctAnswer: 1,
    explanation: 'Kelemahan utama barter adalah double coincidence of wants — kedua pihak harus saling membutuhkan barang yang ditawarkan satu sama lain secara bersamaan, yang sangat sulit terjadi.',
  },
  {
    question: 'Menurut Hukum Engel, ketika pendapatan keluarga meningkat, maka...',
    options: [
      'Persentase pengeluaran untuk makanan meningkat',
      'Persentase pengeluaran untuk makanan menurun',
      'Pengeluaran untuk makanan menjadi nol',
      'Semua pengeluaran meningkat secara proporsional',
    ],
    correctAnswer: 1,
    explanation: 'Hukum Engel menyatakan bahwa semakin tinggi pendapatan keluarga, semakin kecil persentase pendapatan yang dikeluarkan untuk makanan (kebutuhan dasar), meskipun jumlah absolutnya mungkin tetap naik.',
  },
  {
    question: 'Uang giral berbeda dengan uang kartal karena...',
    options: [
      'Uang giral hanya berupa logam emas',
      'Uang giral diterbitkan oleh bank umum dalam bentuk simpanan atau rekening',
      'Uang giral nilainya lebih rendah dari uang kartal',
      'Uang giral hanya bisa digunakan di luar negeri',
    ],
    correctAnswer: 1,
    explanation: 'Uang giral adalah uang yang dimiliki dalam bentuk simpanan di bank (rekening) yang dapat ditarik kapan saja, contohnya cek, giro, atau saldo e-wallet. Uang kartal adalah uang fisik (kertas dan logam).',
  },
  {
    question: 'Perbedaan utama antara menabung dan berinvestasi adalah...',
    options: [
      'Menabung lebih berisiko daripada investasi',
      'Menabung memberikan keuntungan pasti, investasi tidak',
      'Tabungan memiliki risiko rendah dan likuid tinggi, investasi berpotensi memberikan return lebih tinggi dengan risiko lebih besar',
      'Investasi hanya bisa dilakukan oleh orang kaya',
    ],
    correctAnswer: 2,
    explanation: 'Tabungan umumnya berisiko rendah (dana tersimpan aman) dan mudah dicairkan (likuid). Investasi seperti saham atau reksa dana berpotensi memberikan keuntungan lebih besar namun dengan risiko yang juga lebih tinggi.',
  },
]

// ============================================================
// Components
// ============================================================

function BudgetSimulation() {
  const [income, setIncome] = useState(1000000)
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

  const incomeOptions = [500000, 750000, 1000000, 1500000, 2000000]

  return (
    <div className="space-y-6">
      {/* Income selector */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
        <div className="flex items-start gap-3 mb-3">
          <Wallet className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-emerald-900 text-lg">Simulasi Pendapatan & Anggaran</h4>
            <p className="text-emerald-800 mt-2 leading-relaxed">
              Pilih jumlah pendapatan bulananmu, lalu alokasikan untuk kebutuhan dan keinginan. Perhatikan bagaimana pendapatan memengaruhi kemampuanmu menabung!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-emerald-800 mb-2">Pilih Pendapatan Bulanan:</p>
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
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-100'
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
            <p className="text-xl font-bold text-emerald-700">Rp{income.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Terpakai</p>
            <p className="text-xl font-bold text-amber-600">Rp{totalSpent.toLocaleString('id-ID')}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Sisa</p>
            <p className={`text-xl font-bold ${remaining >= 200000 ? 'text-green-600' : remaining > 0 ? 'text-amber-600' : 'text-red-600'}`}>
              Rp{remaining.toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className={`h-full rounded-full transition-all ${
              totalSpent / income > 0.8 ? 'bg-red-500' : totalSpent / income > 0.5 ? 'bg-amber-500' : 'bg-emerald-500'
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
                    ? 'bg-emerald-100 border-emerald-500 shadow-md'
                    : 'bg-orange-100 border-orange-500 shadow-md'
                  : totalSpent + item.price > income
                    ? 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed'
                    : 'bg-white border-gray-200 hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isNeed ? 'bg-emerald-200' : 'bg-orange-200'
                }`}>
                  <Icon className={`w-5 h-5 ${isNeed ? 'text-emerald-700' : 'text-orange-700'}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-emerald-700">Rp{item.price.toLocaleString('id-ID')}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      isNeed ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
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
            className="bg-white rounded-xl p-5 border-2 border-emerald-200"
          >
            <h5 className="font-bold text-emerald-900 text-lg mb-3">Analisis Anggaranmu</h5>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <span className="text-emerald-800 font-medium">Pendapatan:</span>
                <span className="text-emerald-800 font-bold text-lg">Rp{income.toLocaleString('id-ID')}</span>
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
                      className="bg-emerald-500"
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
                    <span className="w-3 h-3 bg-emerald-500 rounded-sm inline-block" /> Kebutuhan
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
                    <p className="font-bold text-green-800">Luar biasa! Penganggaran yang bijak.</p>
                    <p className="text-sm text-green-700 mt-1">
                      Kamu mengutamakan kebutuhan dan masih bisa menabung {((remaining / income) * 100).toFixed(0)}% dari pendapatan. Ini sesuai Hukum Engel — semakin bijak mengalokasikan pendapatan, semakin baik kesejahteraanmu!
                    </p>
                  </div>
                </div>
              )}
              {wantsSelected.length > needsSelected.length && (
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800">Perlu mempertimbangkan ulang prioritasmu.</p>
                    <p className="text-sm text-amber-700 mt-1">
                      Kamu lebih banyak mengalokasikan untuk keinginan daripada kebutuhan. Ingat, kebutuhan dasar harus dipenuhi dulu sebelum keinginan. Coba ubah pendapatanmu dan lihat perbedaannya!
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
                      Meskipun prioritasmu sudah baik, sisa yang bisa ditabung sangat kecil. Menabung penting untuk kebutuhan masa depan. Coba kurangi beberapa keinginan!
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
                      Ini menunjukkan pentingnya mengelola keuangan. Jika pengeluaran {'>'} pendapatan, akan terjadi defisit. Kurangi pengeluaran atau tingkatkan pendapatan!
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
        <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-emerald-50 border-2 border-emerald-400'
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

export default function LabSejarahUang() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Coins className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Sejarah Uang, Pendapatan, dan Tabungan</h2>
            <p className="text-emerald-100">Tema IV - Pelajaran 5: Sejarah Uang, Pendapatan, dan Tabungan</p>
          </div>
        </div>
        <p className="text-emerald-100 text-sm">
          IPS Kelas 7 — Memahami evolusi uang, Hukum Engel, serta perbedaan tabungan dan investasi
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-emerald-50 text-emerald-700 border-b-2 border-emerald-700'
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
                ? 'bg-emerald-50 text-emerald-700 border-b-2 border-emerald-700'
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
                ? 'bg-emerald-50 text-emerald-700 border-b-2 border-emerald-700'
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
      <h3 className="text-2xl font-bold text-gray-900">Sejarah Uang, Pendapatan, dan Tabungan</h3>

      {/* A. Sejarah Uang */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
        <div className="flex items-start gap-3 mb-3">
          <Coins className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-emerald-900 text-lg">A. Sejarah Uang: Dari Barter hingga Uang Digital</h4>
            <p className="text-emerald-800 mt-2 leading-relaxed">
              Uang yang kita gunakan saat ini adalah hasil evolusi panjang selama ribuan tahun. Mari kita lihat tahap-tahap perkembangannya!
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mt-4">
          {/* Barter */}
          <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h5 className="font-bold text-amber-900">Sistem Barter</h5>
                <p className="text-xs text-amber-700">Masa Prasejarah</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Manusia saling menukar barang secara langsung. Contoh: menukar ikan dengan beras.
            </p>
            <div className="bg-amber-50 rounded-lg p-3 mt-2 border border-amber-200">
              <p className="text-xs text-amber-800">
                <strong>Kelemahan:</strong> Harus ada <em>double coincidence of wants</em> — kedua pihak harus saling membutuhkan barang yang ditukar. Sulit menentukan nilai tukar yang adil, dan barang tidak selalu tahan lama.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
          </div>

          {/* Uang Barang */}
          <div className="bg-white rounded-lg p-4 border-2 border-teal-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h5 className="font-bold text-teal-900">Uang Barang (Commodity Money)</h5>
                <p className="text-xs text-teal-700">Peradaban Kuno</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Barang-barang tertentu dijadikan alat tukar karena diterima secara umum. Contoh: kulit kerang, garam, tembaga, emas, dan perak.
            </p>
            <div className="bg-teal-50 rounded-lg p-3 mt-2 border border-teal-200">
              <p className="text-xs text-teal-800">
                <strong>Kelebihan:</strong> Lebih mudah daripada barter karena memiliki nilai yang diterima bersama.
                <strong> Kelemahan:</strong> Sulit dibawa dalam jumlah besar, bisa rusak, dan nilainya berbeda di setiap daerah.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
          </div>

          {/* Uang Kartal */}
          <div className="bg-white rounded-lg p-4 border-2 border-emerald-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h5 className="font-bold text-emerald-900">Uang Kartal</h5>
                <p className="text-xs text-emerald-700">Era Modern</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Uang fisik yang diterbitkan oleh pemerintah dan bank sentral, berupa <strong>kertas</strong> dan <strong>logam</strong>. Di Indonesia, uang kartal diterbitkan oleh Bank Indonesia.
            </p>
            <div className="bg-emerald-50 rounded-lg p-3 mt-2 border border-emerald-200">
              <p className="text-xs text-emerald-800">
                <strong>Kelebihan:</strong> Diterima secara luas, mudah dibawa, memiliki nilai tukar yang standar, dan dijamin oleh negara.
                <strong> Contoh:</strong> Uang kertas Rp50.000, uang logam Rp1.000.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
          </div>

          {/* Uang Giral */}
          <div className="bg-white rounded-lg p-4 border-2 border-teal-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h5 className="font-bold text-teal-900">Uang Giral</h5>
                <p className="text-xs text-teal-700">Era Digital</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Uang yang tersimpan dalam bentuk <strong>rekening bank</strong> atau <strong>saldo digital</strong>. Tidak berwujud fisik, tapi bisa digunakan untuk transaksi.
            </p>
            <div className="bg-teal-50 rounded-lg p-3 mt-2 border border-teal-200">
              <p className="text-xs text-teal-800">
                <strong>Contoh:</strong> Saldo rekening bank, e-wallet (GoPay, OVO, Dana), cek, giro, dan kartu debit. Semakin populer di era cashless society!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* B. Hukum Engel */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-5 border-2 border-sky-200">
        <div className="flex items-start gap-3 mb-3">
          <BarChart3 className="w-7 h-7 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sky-900 text-lg">B. Hukum Engel dan Pendapatan</h4>
            <p className="text-sky-800 mt-2 leading-relaxed">
              <strong>Ernst Engel</strong> (1821-1896), seorang statistikawan Jerman, mengamati hubungan antara pendapatan keluarga dengan pola pengeluarannya.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mt-3 border border-sky-200">
          <p className="text-sm text-sky-900 font-medium">
            Hukum Engel menyatakan:
          </p>
          <blockquote className="text-sky-800 italic mt-2 pl-4 border-l-4 border-sky-400">
            "Semakin tinggi pendapatan suatu keluarga, semakin kecil persentase pengeluarannya untuk makanan, meskipun jumlah absolut pengeluarannya bisa saja meningkat."
          </blockquote>
        </div>

        {/* Visual comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-300">
            <h5 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Keluarga Pendapatan Rendah
            </h5>
            <div className="space-y-1 text-sm text-orange-700">
              <p>Pendapatan: <strong>Rp2.000.000/bulan</strong></p>
              <p>Makanan: <strong>60%</strong> (Rp1.200.000)</p>
              <p>Lainnya: <strong>40%</strong> (Rp800.000)</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <h5 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Keluarga Pendapatan Tinggi
            </h5>
            <div className="space-y-1 text-sm text-green-700">
              <p>Pendapatan: <strong>Rp10.000.000/bulan</strong></p>
              <p>Makanan: <strong>25%</strong> (Rp2.500.000)</p>
              <p>Lainnya: <strong>75%</strong> (Rp7.500.000)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mt-4 border border-sky-200">
          <p className="text-sm text-sky-800">
            <strong>Poin penting:</strong> Keluarga berpendapatan tinggi mungkin mengeluarkan lebih banyak untuk makanan secara nominal (Rp2,5 juta vs Rp1,2 juta), namun <em>persentasenya</em> lebih kecil terhadap total pendapatan. Artinya, semakin tinggi pendapatan, semakin besar kemampuan untuk menabung dan berinvestasi!
          </p>
        </div>
      </div>

      {/* C. Tabungan vs Investasi */}
      <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-5 border-2 border-violet-200">
        <div className="flex items-start gap-3 mb-3">
          <PiggyBank className="w-7 h-7 text-violet-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-violet-900 text-lg">C. Tabungan vs Investasi</h4>
            <p className="text-violet-800 mt-2 leading-relaxed">
              Setelah kebutuhan dasar terpenuhi, sisa pendapatan bisa dialokasikan untuk masa depan. Dua pilihan utamanya adalah <strong>menabung</strong> dan <strong>berinvestasi</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Tabungan */}
          <div className="bg-white rounded-lg p-4 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-3">
              <PiggyBank className="w-6 h-6 text-green-600" />
              <h5 className="font-bold text-green-800 text-lg">Tabungan</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Risiko rendah:</strong> Uang tersimpan aman di bank</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Likuid tinggi:</strong> Bisa ditarik kapan saja</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Bunga kecil:</strong> Keuntungan terbatas</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Tantangan:</strong> Nilai riil bisa turun karena inflasi</span>
              </li>
            </ul>
            <div className="bg-green-50 rounded-lg p-3 mt-3 border border-green-200">
              <p className="text-xs text-green-800">
                <strong>Cocok untuk:</strong> Dana darurat, tujuan jangka pendek (liburan, beli barang), dan pemula yang baru mulai mengelola keuangan.
              </p>
            </div>
          </div>

          {/* Investasi */}
          <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <h5 className="font-bold text-purple-800 text-lg">Investasi</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Potensi return tinggi:</strong> Bisa berkembang signifikan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Melawan inflasi:</strong> Nilai aset bisa naik di atas inflasi</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Risiko lebih tinggi:</strong> Nilai bisa naik-turun</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kurang likuid:</strong> Tidak selalu bisa dicairkan langsung</span>
              </li>
            </ul>
            <div className="bg-purple-50 rounded-lg p-3 mt-3 border border-purple-200">
              <p className="text-xs text-purple-800">
                <strong>Cocok untuk:</strong> Tujuan jangka panjang (pendidikan, pensiun), contoh: reksa dana, saham, emas, atau deposito berjangka.
              </p>
            </div>
          </div>
        </div>

        {/* Key takeaway */}
        <div className="bg-emerald-50 rounded-lg p-4 mt-4 border-2 border-emerald-300">
          <div className="flex items-start gap-3">
            <Landmark className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-900">Tips Mengelola Keuangan:</p>
              <ol className="text-sm text-emerald-800 mt-2 space-y-1 list-decimal list-inside">
                <li>Penuhi <strong>kebutuhan dasar</strong> terlebih dahulu</li>
                <li>Sisihkan minimal <strong>10-20%</strong> pendapatan untuk ditabung</li>
                <li>Setelah tabungan darurat cukup, mulai <strong>berinvestasi</strong> untuk jangka panjang</li>
                <li>Hindari pengeluaran yang melebihi pendapatan!</li>
              </ol>
            </div>
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
        <h3 className="text-2xl font-bold text-gray-900">Simulasi: Alokasi Pendapatan</h3>
        <p className="text-gray-700">
          Pilih jumlah pendapatanmu, lalu alokasikan untuk kebutuhan, keinginan, dan tabungan. Coba berbagai tingkat pendapatan dan lihat bagaimana Hukum Engel bekerja dalam simulasi ini!
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
      <h3 className="text-2xl font-bold text-gray-900">Kuis Sejarah Uang & Pendapatan</h3>
      <p className="text-gray-700">
        Uji pemahamanmu tentang sejarah uang, Hukum Engel, dan perbedaan tabungan vs investasi!
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
