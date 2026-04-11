import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  Pickaxe,
  Gem,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  ChevronRight,
  MapPin,
  Layers,
  Factory,
  ArrowRight,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const golonganTambang = [
  {
    golongan: 'Golongan A (Strategis)',
    letter: 'A',
    description: 'Bahan galian yang penting untuk pertahanan dan keamanan negara. Penggunaannya diawasi ketat oleh pemerintah.',
    examples: ['Minyak bumi', 'Batubara', 'Besi'],
    color: 'from-red-600 to-rose-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-800',
    badgeColor: 'bg-red-100 text-red-800',
  },
  {
    golongan: 'Golongan B (Vital)',
    letter: 'B',
    description: 'Bahan galian yang penting untuk kemakmuran rakyat dan perekonomian nasional.',
    examples: ['Emas', 'Perak', 'Tembaga', 'Nikel'],
    color: 'from-amber-600 to-yellow-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-800',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    golongan: 'Golongan C (Industri)',
    letter: 'C',
    description: 'Bahan galian yang digunakan untuk bahan bangunan dan industri konstruksi.',
    examples: ['Pasir', 'Batu', 'Kapur', 'Granit'],
    color: 'from-stone-500 to-gray-600',
    bgColor: 'bg-stone-50',
    borderColor: 'border-stone-300',
    textColor: 'text-stone-800',
    badgeColor: 'bg-stone-100 text-stone-800',
  },
]

const tahapanTambang = [
  {
    tahap: 'Prospeksi',
    subtitle: 'Pencarian',
    description: 'Tahap awal pencarian daerah yang berpotensi mengandung bahan tambang. Dilakukan melalui survei geologi, pemetaan, dan pengamatan langsung di lapangan untuk menemukan tanda-tanda keberadaan mineral.',
    icon: MapPin,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
    activities: ['Survei geologi regional', 'Pemetaan daerah potensial', 'Pengamatan tanda-tanda mineral di permukaan'],
  },
  {
    tahap: 'Eksplorasi',
    subtitle: 'Penelitian',
    description: 'Penelitian lebih detail untuk mengetahui jumlah, kualitas, dan kedalaman cadangan bahan tambang. Dilakukan pengeboran, pengambilan sampel, dan analisis laboratorium.',
    icon: Layers,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
    activities: ['Pengeboran inti (core drilling)', 'Pengambilan sampel tanah dan batuan', 'Analisis laboratorium', 'Estimasi cadangan'],
  },
  {
    tahap: 'Eksploitasi',
    subtitle: 'Pengambilan',
    description: 'Tahap pengambilan atau penambangan bahan tambang dari dalam bumi. Bisa dilakukan secara tambang terbuka (open pit) untuk deposit dangkal atau tambang bawah tanah untuk deposit dalam.',
    icon: Pickaxe,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-800',
    activities: ['Tambang terbuka (open pit mining)', 'Tambang bawah tanah (underground mining)', 'Pengangkutan bahan tambang'],
  },
  {
    tahap: 'Pengolahan',
    subtitle: 'Pemurnian',
    description: 'Bahan tambang diolah dan dimurnikan agar siap digunakan untuk industri. Contohnya: minyak bumi disuling menjadi bensin dan solar, bijih tembaga dilebur menjadi tembaga murni.',
    icon: Factory,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-800',
    activities: ['Pemurnian (smelting & refining)', 'Pengolahan minyak (refinery)', 'Pembentukan produk akhir'],
  },
]

const quizQuestions = [
  {
    question: 'Bahan galian golongan A (strategis) meliputi...',
    options: [
      'Emas, perak, dan tembaga',
      'Pasir, batu, dan kapur',
      'Minyak bumi, batubara, dan besi',
      'Granit, marmer, dan tanah liat',
    ],
    correctAnswer: 2,
    explanation:
      'Golongan A (Strategis) meliputi bahan galian yang penting untuk pertahanan dan keamanan negara, yaitu minyak bumi, batubara, dan besi. Penggunaannya diawasi ketat oleh pemerintah.',
  },
  {
    question: 'Tahap pertambangan yang dilakukan untuk mengetahui jumlah dan kualitas cadangan bahan tambang adalah...',
    options: [
      'Prospeksi',
      'Eksplorasi',
      'Eksploitasi',
      'Pengolahan',
    ],
    correctAnswer: 1,
    explanation:
      'Eksplorasi adalah tahap penelitian detail untuk mengetahui jumlah, kualitas, dan kedalaman cadangan. Termasuk pengeboran inti, pengambilan sampel, dan analisis laboratorium.',
  },
  {
    question: 'Tambang Freeport di Papua menghasilkan tembaga dan emas yang termasuk golongan...',
    options: [
      'Golongan A (Strategis)',
      'Golongan B (Vital)',
      'Golongan C (Industri)',
      'Tidak termasuk golongan manapun',
    ],
    correctAnswer: 1,
    explanation:
      'Tembaga dan emas termasuk Golongan B (Vital), yaitu bahan galian yang penting untuk kemakmuran rakyat. Tambang Freeport di Papua merupakan salah satu tambang tembaga dan emas terbesar di dunia.',
  },
  {
    question: 'Urutan tahapan pertambangan yang benar dari awal hingga akhir adalah...',
    options: [
      'Eksploitasi → Prospeksi → Eksplorasi → Pengolahan',
      'Prospeksi → Eksploitasi → Eksplorasi → Pengolahan',
      'Prospeksi → Eksplorasi → Eksploitasi → Pengolahan',
      'Eksplorasi → Prospeksi → Pengolahan → Eksploitasi',
    ],
    correctAnswer: 2,
    explanation:
      'Urutan yang benar: Prospeksi (pencarian daerah potensial) → Eksplorasi (penelitian detail cadangan) → Eksploitasi (pengambilan bahan tambang) → Pengolahan (pemurnian agar siap digunakan).',
  },
]

// ============================================================
// Tahapan Tab - Interactive Flow
// ============================================================

function TahapanTab() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 rounded-lg p-4 border-2 border-slate-200">
        <div className="flex items-start gap-3">
          <Pickaxe className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Tahapan Pertambangan</h4>
            <p className="text-slate-800 text-sm mt-1">
              Klik setiap tahap untuk mempelajari proses pertambangan dari awal hingga akhir.
            </p>
          </div>
        </div>
      </div>

      {/* Animated flow visualization */}
      <div className="flex items-center justify-between gap-1 py-4">
        {tahapanTambang.map((stage, idx) => {
          const StageIcon = stage.icon
          const isActive = idx === activeStage

          return (
            <div key={idx} className="flex items-center flex-1">
              <button
                onClick={() => setActiveStage(idx)}
                className={`flex flex-col items-center flex-1 transition-all ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                    isActive
                      ? `bg-gradient-to-br ${stage.color} text-white border-transparent shadow-lg`
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}
                  animate={{
                    boxShadow: isActive ? '0 10px 25px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <StageIcon className="w-6 h-6" />
                </motion.div>
                <p className={`text-xs font-bold mt-2 text-center ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                  {stage.tahap}
                </p>
                <p className={`text-xs text-center ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                  {stage.subtitle}
                </p>
              </button>

              {idx < tahapanTambang.length - 1 && (
                <motion.div
                  className={`flex-shrink-0 mx-1 ${isActive ? 'text-slate-600' : 'text-gray-300'}`}
                  animate={{ x: isActive ? [0, 3, 0] : 0 }}
                  transition={{ repeat: isActive ? Infinity : 0, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Stage detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`rounded-xl p-5 border-2 ${tahapanTambang[activeStage].bgColor} ${tahapanTambang[activeStage].borderColor}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tahapanTambang[activeStage].color} flex items-center justify-center`}>
              {(() => { const IC = tahapanTambang[activeStage].icon; return <IC className="w-6 h-6 text-white" /> })()}
            </div>
            <div>
              <h5 className={`font-bold text-lg ${tahapanTambang[activeStage].textColor}`}>
                Tahap {activeStage + 1}: {tahapanTambang[activeStage].tahap}
              </h5>
              <p className={`text-sm ${tahapanTambang[activeStage].textColor} opacity-75`}>
                ({tahapanTambang[activeStage].subtitle})
              </p>
            </div>
          </div>
          <p className={`${tahapanTambang[activeStage].textColor} mb-4`}>
            {tahapanTambang[activeStage].description}
          </p>

          <div>
            <h6 className={`font-bold text-sm ${tahapanTambang[activeStage].textColor} mb-2`}>Kegiatan:</h6>
            <ul className="space-y-1">
              {tahapanTambang[activeStage].activities.map((act, actIdx) => (
                <motion.li
                  key={actIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: actIdx * 0.1 }}
                  className={`text-sm ${tahapanTambang[activeStage].textColor} flex items-start gap-2`}
                >
                  <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  {act}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
          disabled={activeStage === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Tahap Sebelumnya
        </button>
        <button
          onClick={() => setActiveStage((prev) => Math.min(tahapanTambang.length - 1, prev + 1))}
          disabled={activeStage === tahapanTambang.length - 1}
          className="px-4 py-2 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
        >
          Tahap Berikutnya
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

// ============================================================
// Kuis Tab
// ============================================================

function KuisTab() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-50 rounded-lg p-4 border-2 border-slate-200">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-slate-900">Kuis Potensi & Pemanfaatan SDA Tambang</h3>
            <p className="text-slate-800 text-sm mt-1">
              Uji pemahamanmu tentang golongan bahan tambang dan tahapan pertambangan. Jawab 4 soal berikut!
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
        <span className="bg-slate-100 text-slate-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-slate-50 border-2 border-slate-400'
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
            className="px-4 py-2 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export default function LabTambang() {
  const [activeTab, setActiveTab] = useState<'materi' | 'tahapan' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-700 to-slate-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Pickaxe className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab SDA Tambang</h2>
            <p className="text-gray-200">Tema III - Pelajaran 2: Potensi & Pemanfaatan SDA Tambang</p>
          </div>
        </div>
        <p className="text-gray-200 text-sm">
          IPS Kelas 7 — Memahami golongan bahan tambang dan tahapan pertambangan di Indonesia
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-slate-50 text-slate-700 border-b-2 border-slate-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('tahapan')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'tahapan'
                ? 'bg-slate-50 text-slate-700 border-b-2 border-slate-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Layers className="w-4 h-4 inline mr-2" />
            Tahapan
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-slate-50 text-slate-700 border-b-2 border-slate-700'
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
                <h3 className="text-2xl font-bold text-gray-900">Potensi & Pemanfaatan SDA Tambang</h3>

                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-800">
                        Indonesia memiliki kekayaan bahan tambang yang sangat beragam. Berdasarkan kepentingannya bagi negara dan masyarakat,
                        bahan galian diklasifikasikan menjadi tiga golongan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Golongan Tambang */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Pickaxe className="w-6 h-6 text-amber-600" />
                    Golongan Bahan Galian
                  </h4>
                  <div className="space-y-4">
                    {golonganTambang.map((gol, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`rounded-xl p-5 border-2 ${gol.bgColor} ${gol.borderColor}`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gol.color} flex items-center justify-center`}>
                            <span className="text-white font-bold text-xl">{gol.letter}</span>
                          </div>
                          <div>
                            <h5 className={`font-bold text-lg ${gol.textColor}`}>{gol.golongan}</h5>
                            <p className={`text-sm ${gol.textColor} opacity-80`}>{gol.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {gol.examples.map((ex, exIdx) => (
                            <span key={exIdx} className={`text-sm px-3 py-1 rounded-full font-medium ${gol.badgeColor}`}>
                              {ex}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contoh Nyata */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-300">
                    <div className="flex items-start gap-3">
                      <Gem className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-amber-900 text-lg">Contoh Nyata: Tambang Freeport Papua</h4>
                        <p className="text-amber-800 text-sm mt-1">
                          PT Freeport Indonesia di Papua merupakan salah satu tambang tembaga dan emas terbesar di dunia.
                          Tembaga dan emas termasuk <strong>Golongan B (Vital)</strong> yang penting untuk kemakmuran rakyat.
                          Tambang ini menunjukkan betapa kaya SDA mineral Indonesia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================== TAHAPAN TAB ===================== */}
            {activeTab === 'tahapan' && (
              <motion.div
                key="tahapan"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TahapanTab />
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
