import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  ShoppingCart,
  Factory,
  Truck,
  Users,
  Lightbulb,
  ArrowRight,
  Leaf,
  GraduationCap,
  Coins,
  Info,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Package,
  Store,
  UserCheck,
} from 'lucide-react'

// ===================== DATA =====================

const productionChain = [
  {
    step: 'Produksi',
    actor: 'Petani Padi',
    action: 'Menanam & memanen padi',
    icon: Leaf,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-800',
  },
  {
    step: 'Produksi',
    actor: 'Penggilingan Beras',
    action: 'Mengolah padi menjadi beras',
    icon: Factory,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
  },
  {
    step: 'Distribusi',
    actor: 'Sopir Truk',
    action: 'Mengangkut beras ke pasar kota',
    icon: Truck,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-800',
  },
  {
    step: 'Distribusi',
    actor: 'Pedagang Pasar',
    action: 'Menjual beras di pasar',
    icon: Store,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
  },
  {
    step: 'Konsumsi',
    actor: 'Konsumen',
    action: 'Membeli & memasak beras jadi nasi',
    icon: Users,
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-300',
    textColor: 'text-rose-800',
  },
]

const productChains: Record<string, typeof productionChain> = {
  beras: [
    { step: 'Produksi', actor: 'Petani Padi', action: 'Menanam & memanen padi di sawah', icon: Leaf, color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-300', textColor: 'text-green-800' },
    { step: 'Produksi', actor: 'Penggilingan', action: 'Mengolah padi menjadi beras', icon: Factory, color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-300', textColor: 'text-blue-800' },
    { step: 'Distribusi', actor: 'Sopir Truk', action: 'Mengangkut beras ke pasar/minimarket', icon: Truck, color: 'from-orange-500 to-amber-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-300', textColor: 'text-orange-800' },
    { step: 'Distribusi', actor: 'Pedagang / Minimarket', action: 'Menjual beras ke masyarakat', icon: Store, color: 'from-purple-500 to-violet-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-300', textColor: 'text-purple-800' },
    { step: 'Konsumsi', actor: 'Konsumen', action: 'Membeli & memasak jadi nasi', icon: Users, color: 'from-rose-500 to-pink-600', bgColor: 'bg-rose-50', borderColor: 'border-rose-300', textColor: 'text-rose-800' },
  ],
  roti: [
    { step: 'Produksi', actor: 'Petani Gandum', action: 'Menanam & memanen gandum', icon: Leaf, color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-300', textColor: 'text-green-800' },
    { step: 'Produksi', actor: 'Pabrik Tepung', action: 'Menggiling gandum jadi tepung', icon: Factory, color: 'from-blue-500 to-indigo-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-300', textColor: 'text-blue-800' },
    { step: 'Produksi', actor: 'Toko Roti', action: 'Memproses tepung menjadi roti', icon: Factory, color: 'from-cyan-500 to-blue-600', bgColor: 'bg-cyan-50', borderColor: 'border-cyan-300', textColor: 'text-cyan-800' },
    { step: 'Distribusi', actor: 'Kurir Toko Roti', action: 'Mengantar roti ke toko/konsumen', icon: Truck, color: 'from-orange-500 to-amber-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-300', textColor: 'text-orange-800' },
    { step: 'Konsumsi', actor: 'Konsumen', action: 'Membeli & memakan roti', icon: Users, color: 'from-rose-500 to-pink-600', bgColor: 'bg-rose-50', borderColor: 'border-rose-300', textColor: 'text-rose-800' },
  ],
  ikan: [
    { step: 'Produksi', actor: 'Nelayan', action: 'Menangkap ikan di laut', icon: Leaf, color: 'from-green-500 to-emerald-600', bgColor: 'bg-green-50', borderColor: 'border-green-300', textColor: 'text-green-800' },
    { step: 'Distribusi', actor: 'Pengepul Ikan', action: 'Mengumpulkan & mengangkut ikan ke TPI', icon: Truck, color: 'from-orange-500 to-amber-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-300', textColor: 'text-orange-800' },
    { step: 'Distribusi', actor: 'Pedagang Pasar / Supermarket', action: 'Menjual ikan segar ke pembeli', icon: Store, color: 'from-purple-500 to-violet-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-300', textColor: 'text-purple-800' },
    { step: 'Konsumsi', actor: 'Konsumen', action: 'Membeli & mengolah ikan jadi lauk', icon: Users, color: 'from-rose-500 to-pink-600', bgColor: 'bg-rose-50', borderColor: 'border-rose-300', textColor: 'text-rose-800' },
  ],
}

const quizQuestions = [
  {
    question: 'Apa yang dimaksud dengan kegiatan produksi?',
    options: [
      'Kegiatan menghabiskan barang untuk kebutuhan',
      'Kegiatan menambah manfaat atau menciptakan barang baru',
      'Kegiatan menyalurkan barang dari pabrik ke pasar',
      'Kegiatan menyimpan barang di gudang',
    ],
    correctAnswer: 1,
    explanation: 'Produksi adalah kegiatan untuk menambah manfaat suatu barang atau menciptakan barang baru demi memenuhi kebutuhan manusia.',
  },
  {
    question: 'Seorang penjahit menyerahkan baju buatannya langsung kepada pembeli. Jenis distribusi apakah ini?',
    options: [
      'Distribusi tidak langsung',
      'Distribusi semilangsung',
      'Distribusi langsung',
      'Distribusi melalui agen',
    ],
    correctAnswer: 2,
    explanation: 'Distribusi langsung terjadi ketika produsen menjual langsung kepada konsumen tanpa perantara.',
  },
  {
    question: 'Faktor produksi yang mencakup kemampuan mengelola faktor alam, tenaga kerja, dan modal agar menghasilkan produksi maksimal disebut ...',
    options: [
      'Faktor alam',
      'Faktor tenaga kerja',
      'Faktor modal',
      'Faktor keahlian',
    ],
    correctAnswer: 3,
    explanation: 'Faktor keahlian (entrepreneurship) adalah kemampuan untuk mengelola dan mengombinasikan seluruh faktor produksi agar menghasilkan output yang maksimal.',
  },
  {
    question: 'Harga barang, jenis pekerjaan, dan kebudayaan yang memengaruhi konsumsi termasuk faktor ...',
    options: [
      'Internal',
      'Eksternal',
      'Produksi',
      'Distribusi',
    ],
    correctAnswer: 1,
    explanation: 'Faktor eksternal berasal dari luar diri konsumen seperti harga barang, jenis pekerjaan, dan kebudayaan yang memengaruhi pola konsumsi.',
  },
]


// ===================== COMPONENTS =====================

function QuizCard({ question, options, correctAnswer, explanation }: {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
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
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
      <h4 className="font-semibold text-gray-900 mb-4">{question}</h4>
      <div className="space-y-2 mb-4">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !showResult && setSelected(idx)}
            className={`w-full text-left p-3 rounded-lg transition-all ${
              selected === idx
                ? showResult
                  ? idx === correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : 'bg-red-100 border-2 border-red-500'
                  : 'bg-indigo-100 border-2 border-indigo-500'
                : showResult && idx === correctAnswer
                  ? 'bg-green-100 border-2 border-green-500'
                  : 'bg-gray-50 hover:bg-gray-100'
            }`}
            disabled={showResult}
          >
            <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
            {option}
          </button>
        ))}
      </div>

      {showResult && selected !== null && (
        <div className={`p-3 rounded-lg mb-3 flex items-start gap-2 ${
          selected === correctAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {selected === correctAnswer ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-medium">
              {selected === correctAnswer ? 'Benar!' : `Salah. Jawaban yang benar: ${String.fromCharCode(65 + correctAnswer)}`}
            </p>
            <p className="text-sm mt-1">{explanation}</p>
          </div>
        </div>
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
          <button onClick={handleReset} className="btn-secondary">
            <RotateCcw className="w-4 h-4 inline mr-1" />
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

function ProductionChainSimulator() {
  const [selectedProduct, setSelectedProduct] = useState<string>('beras')
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const chain = productChains[selectedProduct]

  const handlePlay = () => {
    setIsPlaying(true)
    setActiveStep(0)
  }

  const handleNext = () => {
    if (activeStep < chain.length - 1) {
      setActiveStep((prev) => prev + 1)
    } else {
      setIsPlaying(false)
    }
  }

  const handleReset = () => {
    setActiveStep(0)
    setIsPlaying(false)
  }

  const StepIcon = chain[activeStep].icon

  return (
    <div className="space-y-6">
      {/* Product selector */}
      <div className="bg-indigo-50 rounded-lg p-4">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          Pilih Produk untuk Dilacak Rantai Ekonominya
        </h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(productChains).map(([key]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProduct(key)
                setActiveStep(0)
                setIsPlaying(false)
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedProduct === key
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              {key === 'beras' && 'Beras'}
              {key === 'roti' && 'Roti'}
              {key === 'ikan' && 'Ikan'}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {!isPlaying ? (
          <button onClick={handlePlay} className="btn-primary">
            Mulai Animasi
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={activeStep >= chain.length - 1}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Langkah Berikutnya
            <ArrowRight className="w-4 h-4 inline ml-1" />
          </button>
        )}
        <button onClick={handleReset} className="btn-secondary">
          <RotateCcw className="w-4 h-4 inline mr-1" />
          Reset
        </button>
        <span className="text-sm text-gray-500 ml-2">
          Langkah {activeStep + 1} dari {chain.length}
        </span>
      </div>

      {/* Flow visualization */}
      <div className="relative">
        {/* Horizontal flow on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          {chain.map((item, idx) => {
            const Icon = item.icon
            const isActive = idx <= activeStep
            const isCurrent = idx === activeStep
            const stepLabel = item.step

            return (
              <div key={idx} className="flex flex-col items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isCurrent ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    isCurrent
                      ? `bg-gradient-to-br ${item.color} text-white border-transparent shadow-lg`
                      : isActive
                        ? `${item.bgColor} ${item.borderColor} ${item.textColor}`
                        : 'bg-gray-50 border-gray-200 text-gray-400'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      isCurrent ? 'bg-white/20' : `${item.bgColor}`
                    }`}>
                      <Icon className={`w-5 h-5 ${isCurrent ? 'text-white' : ''}`} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-75">
                      {stepLabel}
                    </span>
                    <p className="font-bold text-sm mt-1">{item.actor}</p>
                    <p className={`text-xs mt-1 ${isCurrent ? 'text-white/90' : 'opacity-75'}`}>
                      {item.action}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow to next step */}
                {idx < chain.length - 1 && (
                  <div className="my-2 md:my-0 md:mx-1">
                    <motion.div
                      animate={{
                        opacity: isActive && idx < activeStep ? 1 : 0.2,
                        x: 0,
                      }}
                      className="flex flex-col items-center md:flex-row md:items-center"
                    >
                      <ArrowRight className="w-5 h-5 text-indigo-400 hidden md:block" />
                      <ArrowRight className="w-5 h-5 text-indigo-400 rotate-90 md:hidden" />
                    </motion.div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Active step detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`rounded-xl p-4 border ${chain[activeStep].bgColor} ${chain[activeStep].borderColor}`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${chain[activeStep].color} flex items-center justify-center`}>
              <StepIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h5 className={`font-bold ${chain[activeStep].textColor}`}>
                {chain[activeStep].step}: {chain[activeStep].actor}
              </h5>
              <p className={`text-sm ${chain[activeStep].textColor} opacity-80`}>
                {chain[activeStep].action}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary card */}
      {activeStep === chain.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-5 text-white"
        >
          <h4 className="font-bold text-lg mb-2">Rantai Ekonomi Selesai!</h4>
          <p className="text-indigo-100 text-sm">
            Barang telah melalui proses <strong>produksi</strong> oleh pembuat,
            <strong> distribusi</strong> melalui perantara, hingga sampai ke <strong>konsumen</strong>.
            Ini menunjukkan hubungan timbal balik dalam kegiatan ekonomi.
          </p>
        </motion.div>
      )}
    </div>
  )
}

// ===================== MAIN COMPONENT =====================

export default function LabEkonomi() {
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
          <ShoppingCart className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Kegiatan Ekonomi</h2>
            <p className="text-indigo-100">Pelajaran 7: Produksi, Distribusi, dan Konsumsi</p>
          </div>
        </div>
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
            <Factory className="w-4 h-4 inline mr-2" />
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
          {/* ===================== MATERI TAB ===================== */}
          {activeTab === 'materi' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Intro */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-900 mb-2">
                  Hakikat Kegiatan Ekonomi
                </h4>
                <p className="text-indigo-800 text-sm">
                  Manusia selalu melakukan kegiatan untuk memenuhi kebutuhannya. Karena kebutuhan hampir tidak terbatas
                  sedangkan alat pemuas kebutuhan terbatas, kita harus melakukan kegiatan ekonomi. Secara umum,
                  kegiatan ekonomi dibagi tiga: <strong>Produksi</strong>, <strong>Distribusi</strong>, dan{' '}
                  <strong>Konsumsi</strong>.
                </p>
              </div>

              {/* PRODUKSI */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Factory className="w-7 h-7 text-indigo-600" />
                  A. Produksi
                </h3>
                <p className="text-gray-700">
                  <strong>Produksi</strong> adalah kegiatan untuk menambah manfaat suatu barang atau menciptakan barang
                  baru demi memenuhi kebutuhan manusia. Produksi tidak hanya dilakukan oleh pabrik besar, tetapi juga
                  mencakup kegiatan sehari-hari seperti menjahit baju atau menanam sayuran.
                </p>

                {/* Jenis Produksi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-green-700" />
                      <h4 className="font-bold text-green-900">Produksi Barang</h4>
                    </div>
                    <p className="text-sm text-green-800">
                      Mengubah sifat atau bentuk suatu benda untuk menciptakan barang baru.
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>Contoh:</strong> Pembuatan mebel dari kayu, pembuatan roti dari tepung.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-700" />
                      <h4 className="font-bold text-blue-900">Produksi Jasa</h4>
                    </div>
                    <p className="text-sm text-blue-800">
                      Menambah nilai guna suatu barang tanpa mengubah bentuknya.
                    </p>
                    <p className="text-sm text-blue-700 mt-2">
                      <strong>Contoh:</strong> Jasa pengobatan, jasa pariwisata, jasa ojek online.
                    </p>
                  </div>
                </div>

                {/* Faktor Produksi */}
                <h4 className="text-xl font-bold text-gray-900 mt-6">Faktor-Faktor Produksi</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-emerald-700" />
                      <h5 className="font-bold text-emerald-900">Faktor Alam</h5>
                    </div>
                    <p className="text-sm text-emerald-800">
                      Semua hasil alam yang digunakan dalam produksi, seperti air, tanah, dan hasil tambang.
                    </p>
                  </div>
                  <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-sky-700" />
                      <h5 className="font-bold text-sky-900">Faktor Tenaga Kerja</h5>
                    </div>
                    <p className="text-sm text-sky-800">
                      Orang yang menjalankan kegiatan produksi, baik sebagai buruh maupun tenaga ahli.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Coins className="w-5 h-5 text-amber-700" />
                      <h5 className="font-bold text-amber-900">Faktor Modal</h5>
                    </div>
                    <p className="text-sm text-amber-800">
                      Barang penunjang produksi seperti peralatan, mesin, gedung, dan uang.
                    </p>
                  </div>
                  <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-violet-700" />
                      <h5 className="font-bold text-violet-900">Faktor Keahlian</h5>
                    </div>
                    <p className="text-sm text-violet-800">
                      Kemampuan mengelola seluruh faktor produksi agar menghasilkan output yang maksimal.
                    </p>
                  </div>
                </div>
              </div>

              {/* DISTRIBUSI */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Truck className="w-7 h-7 text-orange-600" />
                  B. Distribusi
                </h3>
                <p className="text-gray-700">
                  <strong>Distribusi</strong> merupakan kegiatan menyalurkan barang dari produsen kepada konsumen.
                  Tanpa distribusi, hasil produksi tidak akan bisa dimanfaatkan oleh masyarakat.
                </p>

                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <UserCheck className="w-5 h-5 text-green-700" />
                      <h4 className="font-bold text-green-900">Distribusi Langsung</h4>
                    </div>
                    <p className="text-sm text-green-800">
                      Produsen menjual langsung kepada konsumen tanpa perantara.
                    </p>
                    <p className="text-sm text-green-700 mt-1">
                      <strong>Contoh:</strong> Penjahit menyerahkan baju langsung ke pembeli.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Store className="w-5 h-5 text-blue-700" />
                      <h4 className="font-bold text-blue-900">Distribusi Semilangsung</h4>
                    </div>
                    <p className="text-sm text-blue-800">
                      Melalui perantara yang merupakan bagian dari produsen (toko resmi).
                    </p>
                    <p className="text-sm text-blue-700 mt-1">
                      <strong>Contoh:</strong> Toko resmi merek ponsel tertentu.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-5 h-5 text-purple-700" />
                      <h4 className="font-bold text-purple-900">Distribusi Tidak Langsung</h4>
                    </div>
                    <p className="text-sm text-purple-800">
                      Melalui perantara pihak ketiga seperti agen, minimarket, atau pedagang kecil.
                    </p>
                    <p className="text-sm text-purple-700 mt-1">
                      <strong>Contoh:</strong> Pabrik menjual ke minimarket, lalu minimarket menjual ke konsumen.
                    </p>
                  </div>
                </div>
              </div>

              {/* KONSUMSI */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-7 h-7 text-rose-600" />
                  C. Konsumsi
                </h3>
                <p className="text-gray-700">
                  <strong>Konsumsi</strong> adalah kegiatan menghabiskan atau mengurangi manfaat suatu barang untuk
                  memenuhi kebutuhan. Tujuan utamanya adalah untuk menjaga kelangsungan hidup manusia.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-2">Faktor Internal</h4>
                    <p className="text-sm text-indigo-800">
                      Berasal dari dalam diri individu.
                    </p>
                    <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                      <li>• Motivasi dan keinginan pribadi</li>
                      <li>• Sikap terhadap suatu produk</li>
                      <li>• Selera dan preferensi personal</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-900 mb-2">Faktor Eksternal</h4>
                    <p className="text-sm text-orange-800">
                      Berasal dari luar diri individu.
                    </p>
                    <ul className="text-sm text-orange-700 mt-2 space-y-1">
                      <li>• Jenis pekerjaan</li>
                      <li>• Harga barang</li>
                      <li>• Kebudayaan dan lingkungan sosial</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Kemakmuran
                  </h4>
                  <p className="text-sm text-yellow-800">
                    Kemakmuran adalah keadaan ketika jumlah alat pemuas kebutuhan sudah mencukupi dan dapat digunakan
                    untuk memenuhi semua kebutuhan manusia.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ===================== KELANGKAAN TAB ===================== */}

          {/* ===================== SIMULASI TAB ===================== */}
          {activeTab === 'simulasi' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Simulasi Rantai Kegiatan Ekonomi
                </h4>
                <p className="text-sm text-indigo-800">
                  Lihat bagaimana barang bergerak dari proses <strong>produksi</strong> oleh pembuat,
                  melalui <strong>distribusi</strong>, hingga sampai ke <strong>konsumen</strong>.
                  Pilih produk dan ikuti alurnya!
                </p>
              </div>

              <ProductionChainSimulator />
            </motion.div>
          )}

          {/* ===================== KUIS TAB ===================== */}
          {activeTab === 'kuis' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900">Kuis Kegiatan Ekonomi</h3>
              <p className="text-gray-600 text-sm">
                Uji pemahamanmu tentang produksi, distribusi, dan konsumsi!
              </p>

              {quizQuestions.map((q, idx) => (
                <QuizCard
                  key={idx}
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
                  explanation={q.explanation}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
