import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ArrowUpCircle, ArrowDownCircle, Scale, TrendingUp, RotateCcw, CheckCircle, XCircle, Package, Ship, Smartphone, Wheat, Cog, Cpu, Handshake, AlertTriangle } from 'lucide-react'

export default function LabPerdaganganInternasional() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Globe className="w-10 h-10" />
          <div>
            <p className="text-blue-100 text-sm">Tema III - Pelajaran 4</p>
            <h2 className="text-3xl font-bold">Perdagangan Internasional</h2>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {[
            { id: 'materi' as const, label: 'Materi' },
            { id: 'simulasi' as const, label: 'Simulasi Ekspor-Impor' },
            { id: 'kuis' as const, label: 'Kuis' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'simulasi' && <SimulasiTab />}
          {activeTab === 'kuis' && <KuisTab />}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MATERI TAB
// ============================================================

function MateriTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {/* A. Ekspor */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <ArrowUpCircle className="w-6 h-6 mr-2 text-green-600" />
          A. Ekspor
        </h3>
        <p className="text-gray-700 mb-4">
          Ekspor adalah kegiatan mengirim atau menjual barang dan jasa ke luar negeri. Ekspor menjadi sumber devisa penting bagi Indonesia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <Package className="w-6 h-6 text-green-600 mr-2" />
              <h4 className="font-bold text-green-900">Minyak Sawit (CPO)</h4>
            </div>
            <p className="text-sm text-green-800">Indonesia adalah produsen CPO terbesar di dunia. Ekspor CPO memberikan devisa besar bagi negara.</p>
          </div>

          <div className="bg-emerald-50 rounded-lg p-5 border-l-4 border-emerald-500">
            <div className="flex items-center mb-3">
              <Ship className="w-6 h-6 text-emerald-600 mr-2" />
              <h4 className="font-bold text-emerald-900">Tekstil & Garmen</h4>
            </div>
            <p className="text-sm text-emerald-800">Industri tekstil Indonesia terkenal dengan kualitas baik dan harga kompetitif di pasar global.</p>
          </div>

          <div className="bg-teal-50 rounded-lg p-5 border-l-4 border-teal-500">
            <div className="flex items-center mb-3">
              <Smartphone className="w-6 h-6 text-teal-600 mr-2" />
              <h4 className="font-bold text-teal-900">Elektronik</h4>
            </div>
            <p className="text-sm text-teal-800">Produk elektronik seperti komponen komputer dan telepon genggam juga menjadi komoditas ekspor.</p>
          </div>
        </div>

        <div className="bg-green-100 rounded-lg p-4 mt-4">
          <p className="text-green-800 font-semibold">Manfaat Ekspor: Menambah devisa negara, membuka lapangan kerja, dan memajukan industri dalam negeri!</p>
        </div>
      </section>

      {/* B. Impor */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <ArrowDownCircle className="w-6 h-6 mr-2 text-blue-600" />
          B. Impor
        </h3>
        <p className="text-gray-700 mb-4">
          Impor adalah kegiatan membeli atau memasukkan barang dan jasa dari luar negeri. Impor dilakukan ketika produksi dalam negeri belum mencukupi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <Wheat className="w-6 h-6 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-900">Beras</h4>
            </div>
            <p className="text-sm text-blue-800">Indonesia mengimpor beras ketika produksi dalam negeri tidak cukup untuk memenuhi kebutuhan penduduk.</p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-5 border-l-4 border-indigo-500">
            <div className="flex items-center mb-3">
              <Cog className="w-6 h-6 text-indigo-600 mr-2" />
              <h4 className="font-bold text-indigo-900">Mesin & Peralatan</h4>
            </div>
            <p className="text-sm text-indigo-800">Mesin-mesin industri dan peralatan berat sering diimpor untuk mendukung pembangunan dan produksi.</p>
          </div>

          <div className="bg-cyan-50 rounded-lg p-5 border-l-4 border-cyan-500">
            <div className="flex items-center mb-3">
              <Cpu className="w-6 h-6 text-cyan-600 mr-2" />
              <h4 className="font-bold text-cyan-900">Teknologi</h4>
            </div>
            <p className="text-sm text-cyan-800">Komponen teknologi tinggi seperti chip dan perangkat canggih masih banyak diimpor dari luar negeri.</p>
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 mt-4">
          <p className="text-blue-800 font-semibold">Alasan Impor: Keterbatasan produksi dalam negeri, kebutuhan yang tidak bisa dipenuhi sendiri, dan efisiensi biaya.</p>
        </div>
      </section>

      {/* C. Dampak Perdagangan Internasional */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Scale className="w-6 h-6 mr-2 text-amber-600" />
          C. Dampak Perdagangan Internasional
        </h3>

        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <div className="flex items-center mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
              <h4 className="font-bold text-red-900">Persaingan Industri</h4>
            </div>
            <p className="text-sm text-red-800">Produk dalam negeri harus bersaing dengan produk asing yang mungkin lebih murah atau berkualitas tinggi. Industri lokal perlu meningkatkan kualitas.</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
              <h4 className="font-bold text-orange-900">Ketergantungan</h4>
            </div>
            <p className="text-sm text-orange-800">Terlalu bergantung pada impor bisa melemahkan ekonomi jika negara pengekspor mengalami masalah. Penting untuk menjaga ketahanan pangan dan industri.</p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 border border-green-200">
            <div className="flex items-center mb-2">
              <Handshake className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="font-bold text-green-900">Kerjasama Internasional</h4>
            </div>
            <p className="text-sm text-green-800">Perdagangan internasional memperkuat hubungan antar negara, membuka peluang diplomasi, dan menciptakan kerjasama di berbagai bidang.</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

// ============================================================
// SIMULASI TAB
// ============================================================

interface TradeItem {
  name: string
  icon: string
  category: 'ekspor' | 'impor'
  description: string
}

const tradeItems: TradeItem[] = [
  { name: 'Minyak Sawit (CPO)', icon: '🌴', category: 'ekspor', description: 'Komoditas ekspor utama Indonesia' },
  { name: 'Beras', icon: '🌾', category: 'impor', description: 'Diimpor saat produksi kurang' },
  { name: 'Tekstil', icon: '👕', category: 'ekspor', description: 'Industri garmen Indonesia terkenal' },
  { name: 'Mesin Industri', icon: '⚙️', category: 'impor', description: 'Mesin berat dari luar negeri' },
  { name: 'Elektronik', icon: '📱', category: 'ekspor', description: 'Komponen elektronik diekspor' },
  { name: 'Chip Teknologi', icon: '💻', category: 'impor', description: 'Komponen canggih diimpor' },
  { name: 'Karet Alam', icon: '🌿', category: 'ekspor', description: 'Indonesia eksportir karet terbesar' },
  { name: 'Pesawat Terbang', icon: '✈️', category: 'impor', description: 'Alat transportasi diimpor' },
]

function SimulasiTab() {
  const [classifications, setClassifications] = useState<Record<number, 'ekspor' | 'impor' | null>>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null)

  const currentItem = tradeItems[currentIndex]
  const totalCorrect = Object.entries(classifications).filter(
    ([idx, val]) => val === tradeItems[Number(idx)].category
  ).length

  const handleClassify = (type: 'ekspor' | 'impor') => {
    if (showFeedback) return
    const correct = type === currentItem.category
    setClassifications((prev) => ({ ...prev, [currentIndex]: type }))
    setLastCorrect(correct)
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (currentIndex < tradeItems.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setShowFeedback(false)
      setLastCorrect(null)
    }
  }

  const handleReset = () => {
    setClassifications({})
    setCurrentIndex(0)
    setShowFeedback(false)
    setLastCorrect(null)
  }

  const isComplete = classifications[tradeItems.length - 1] !== undefined

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-bold text-blue-900 mb-2">Simulasi Ekspor-Impor</h4>
        <p className="text-sm text-blue-800">
          Klasifikasikan setiap barang apakah termasuk komoditas <strong>ekspor</strong> atau <strong>impor</strong> Indonesia!
        </p>
      </div>

      {/* Score */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-600">
            Progress: {Object.keys(classifications).length}/{tradeItems.length}
          </span>
          <span className="text-sm font-semibold text-green-600">
            Benar: {totalCorrect}
          </span>
        </div>
        <button onClick={handleReset} className="btn-secondary text-sm">
          <RotateCcw className="w-4 h-4 inline mr-1" /> Reset
        </button>
      </div>

      {/* Current Item */}
      {!isComplete && (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 text-center border-2 border-indigo-200">
          <div className="text-6xl mb-4">{currentItem.icon}</div>
          <h4 className="text-2xl font-bold text-gray-900 mb-2">{currentItem.name}</h4>
          <p className="text-gray-600 mb-6">{currentItem.description}</p>

          {!showFeedback ? (
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleClassify('ekspor')}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Ekspor
              </button>
              <button
                onClick={() => handleClassify('impor')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Impor
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${lastCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {lastCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                <span className="font-semibold">
                  {lastCorrect ? 'Benar!' : `Salah! Jawaban yang benar: ${currentItem.category === 'ekspor' ? 'Ekspor' : 'Impor'}`}
                </span>
              </div>
              {currentIndex < tradeItems.length - 1 && (
                <div>
                  <button onClick={handleNext} className="btn-primary">
                    Barang Berikutnya
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Completion */}
      {isComplete && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">Selesai!</h4>
          <p className="text-lg text-green-800 mb-4">
            Skor: {totalCorrect}/{tradeItems.length} benar
          </p>
          <p className="text-green-700">
            {totalCorrect === tradeItems.length
              ? 'Sempurna! Kamu sudah paham perbedaan ekspor dan impor!'
              : totalCorrect >= tradeItems.length / 2
              ? 'Bagus! Pelajari lagi barang-barang yang salah.'
              : 'Coba lagi dan pelajari materi ekspor-impor!'}
          </p>
        </div>
      )}

      {/* Trade Balance */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <h4 className="font-bold text-gray-900 mb-4">Neraca Perdagangan</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <h5 className="font-semibold text-green-800 mb-2">Ekspor ({Object.entries(classifications).filter(([, v], i) => v === 'ekspor' && tradeItems[i]?.category === 'ekspor').length} benar)</h5>
            <div className="flex flex-wrap gap-2">
              {tradeItems.filter(item => item.category === 'ekspor').map(item => (
                <span key={item.name} className="text-2xl" title={item.name}>{item.icon}</span>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-800 mb-2">Impor ({Object.entries(classifications).filter(([, v], i) => v === 'impor' && tradeItems[i]?.category === 'impor').length} benar)</h5>
            <div className="flex flex-wrap gap-2">
              {tradeItems.filter(item => item.category === 'impor').map(item => (
                <span key={item.name} className="text-2xl" title={item.name}>{item.icon}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Neraca perdagangan surplus jika ekspor {'>'} impor, dan defisit jika impor {'>'} ekspor.
        </p>
      </div>
    </motion.div>
  )
}

// ============================================================
// KUIS TAB
// ============================================================

function KuisTab() {
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [showResults, setShowResults] = useState<Record<number, boolean>>({})

  const questions = [
    {
      question: 'Kegiatan mengirim dan menjual barang ke luar negeri disebut...',
      options: ['Impor', 'Ekspor', 'Distribusi', 'Konsumsi'],
      correct: 1,
      explanation: 'Ekspor adalah kegiatan menjual/mengirim barang ke luar negeri. Ini menambah devisa negara.',
    },
    {
      question: 'Indonesia mengimpor beras terutama karena...',
      options: ['Beras Indonesia tidak berkualitas', 'Produksi dalam negeri tidak mencukupi', 'Beras impor lebih mahal', 'Indonesia tidak bisa menanam padi'],
      correct: 1,
      explanation: 'Indonesia mengimpor beras ketika produksi dalam negeri tidak cukup untuk memenuhi kebutuhan seluruh penduduk.',
    },
    {
      question: 'Salah satu dampak negatif perdagangan internasional adalah...',
      options: ['Meningkatkan kerjasama internasional', 'Persaingan industri dalam negeri yang ketat', 'Menambah devisa negara', 'Membuka lapangan kerja'],
      correct: 1,
      explanation: 'Persaingan industri dalam negeri menjadi lebih ketat karena harus bersaing dengan produk asing yang mungkin lebih murah atau berkualitas.',
    },
    {
      question: 'Perdagangan internasional dapat memperkuat hubungan antar negara melalui...',
      options: ['Persaingan bebas', 'Ketergantungan ekonomi', 'Kerjasama dan diplomasi', 'Monopoli perdagangan'],
      correct: 2,
      explanation: 'Perdagangan internasional memperkuat hubungan antar negara, membuka peluang diplomasi, dan menciptakan kerjasama di berbagai bidang.',
    },
  ]

  const handleCheck = (qIdx: number) => {
    if (answers[qIdx] !== null) {
      setShowResults((prev) => ({ ...prev, [qIdx]: true }))
    }
  }

  const handleReset = (qIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: null }))
    setShowResults((prev) => ({ ...prev, [qIdx]: false }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Perdagangan Internasional</h3>

      {questions.map((q, qIdx) => (
        <div key={qIdx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            {qIdx + 1}. {q.question}
          </h4>
          <div className="space-y-2 mb-4">
            {q.options.map((option, oIdx) => (
              <button
                key={oIdx}
                onClick={() => !showResults[qIdx] && setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  answers[qIdx] === oIdx
                    ? showResults[qIdx]
                      ? oIdx === q.correct
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                disabled={showResults[qIdx]}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                {option}
              </button>
            ))}
          </div>

          {showResults[qIdx] && answers[qIdx] !== null && (
            <div className={`p-4 rounded-lg mb-4 ${answers[qIdx] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-semibold mb-1">
                {answers[qIdx] === q.correct ? 'Benar!' : `Salah. Jawaban yang benar: ${String.fromCharCode(65 + q.correct)}`}
              </p>
              <p className="text-sm">{q.explanation}</p>
            </div>
          )}

          <div className="flex space-x-2">
            {!showResults[qIdx] ? (
              <button
                onClick={() => handleCheck(qIdx)}
                disabled={answers[qIdx] === null}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cek Jawaban
              </button>
            ) : (
              <button onClick={() => handleReset(qIdx)} className="btn-secondary">
                <RotateCcw className="w-4 h-4 inline mr-1" />
                Reset
              </button>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
