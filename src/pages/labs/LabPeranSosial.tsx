import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  Users,
  UserCheck,
  Link2,
  CheckCircle,
  XCircle,
  RotateCcw,
  Info,
  ChevronRight,
  School,
  Baby,
  Briefcase,
  Heart,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const statusPeranExamples = [
  {
    icon: School,
    status: 'Guru',
    peran: 'Mengajar, membimbing, dan menilai siswa',
    deskripsi: 'Guru memiliki posisi sebagai pendidik di sekolah. Masyarakat mengharapkan guru untuk mengajar dengan baik, membimbing siswa, dan memberikan penilaian yang adil.',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-300',
    textColor: 'text-violet-800',
  },
  {
    icon: Baby,
    status: 'Murid/Siswa',
    peran: 'Belajar, menghormati guru, dan mengerjakan tugas',
    deskripsi: 'Siswa memiliki posisi sebagai peserta didik. Masyarakat mengharapkan siswa untuk belajar dengan sungguh-sungguh, menghormati guru, dan mengerjakan tugas dengan baik.',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
  },
  {
    icon: Heart,
    status: 'Orang Tua',
    peran: 'Mengasuh, mendidik, dan melindungi anak',
    deskripsi: 'Orang tua memiliki posisi sebagai pemimpin dalam keluarga. Masyarakat mengharapkan orang tua untuk mengasuh, mendidik, dan melindungi anak-anaknya.',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    textColor: 'text-pink-800',
  },
  {
    icon: Users,
    status: 'Anak',
    peran: 'Menghormati orang tua, belajar, dan membantu keluarga',
    deskripsi: 'Anak memiliki posisi sebagai anggota keluarga yang lebih muda. Masyarakat mengharapkan anak untuk menghormati orang tua, rajin belajar, dan membantu pekerjaan keluarga.',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-800',
  },
]

const scenarioData = [
  {
    scenario: 'Di sekolah, Bu Sari berdiri di depan kelas menjelaskan pelajaran Matematika.',
    status: 'Guru',
    peran: 'Mengajar dan membimbing siswa',
    options: [
      { status: 'Guru', peran: 'Mengajar dan membimbing siswa' },
      { status: 'Murid', peran: 'Belajar dan mengerjakan tugas' },
      { status: 'Kepala Sekolah', peran: 'Memimpin dan mengelola sekolah' },
    ],
    correctIndex: 0,
  },
  {
    scenario: 'Rina duduk di bangku kelas VII, mencatat penjelasan guru dengan rapi dan bertanya jika belum paham.',
    status: 'Murid',
    peran: 'Belajar dan mengerjakan tugas',
    options: [
      { status: 'Guru', peran: 'Mengajar dan membimbing siswa' },
      { status: 'Murid', peran: 'Belajar dan mengerjakan tugas' },
      { status: 'Orang Tua', peran: 'Mengasuh dan melindungi anak' },
    ],
    correctIndex: 1,
  },
  {
    scenario: 'Pak Ahmad sedang memasak sarapan untuk anaknya sebelum berangkat sekolah dan membantu mengerjakan PR.',
    status: 'Orang Tua',
    peran: 'Mengasuh, mendidik, dan melindungi anak',
    options: [
      { status: 'Guru', peran: 'Mengajar dan membimbing siswa' },
      { status: 'Anak', peran: 'Menghormati orang tua dan belajar' },
      { status: 'Orang Tua', peran: 'Mengasuh, mendidik, dan melindungi anak' },
    ],
    correctIndex: 2,
  },
  {
    scenario: 'Dimas membantu ibunya mencuci piring setelah makan malam dan kemudian belajar untuk ujian besok.',
    status: 'Anak',
    peran: 'Menghormati orang tua, belajar, dan membantu keluarga',
    options: [
      { status: 'Orang Tua', peran: 'Mengasuh dan melindungi anak' },
      { status: 'Anak', peran: 'Menghormati orang tua, belajar, dan membantu keluarga' },
      { status: 'Guru', peran: 'Mengajar dan membimbing siswa' },
    ],
    correctIndex: 1,
  },
]

const quizQuestions = [
  {
    question: 'Apa yang dimaksud dengan status sosial?',
    options: [
      'Tindakan yang dilakukan seseorang dalam masyarakat',
      'Posisi atau kedudukan seseorang dalam masyarakat',
      'Jumlah kekayaan yang dimiliki seseorang',
      'Pendidikan tertinggi yang telah ditempuh',
    ],
    correctAnswer: 1,
    explanation:
      'Status sosial adalah posisi atau kedudukan seseorang dalam masyarakat. Contohnya: guru, murid, orang tua, anak, ketua RT, dan lain-lain.',
  },
  {
    question: 'Peran sosial adalah...',
    options: [
      'Jabatan resmi yang dimiliki seseorang di pemerintahan',
      'Harapan masyarakat terhadap seseorang yang memiliki status tertentu',
      'Tindakan atau perilaku yang diharapkan dilakukan sesuai dengan statusnya',
      'Penghargaan yang diberikan kepada orang yang berjasa',
    ],
    correctAnswer: 2,
    explanation:
      'Peran sosial adalah tindakan atau perilaku yang diharapkan dilakukan seseorang sesuai dengan status sosialnya. Misalnya, guru diharapkan mengajar dan membimbing siswa.',
  },
  {
    question: 'Hubungan antara status sosial dan peran sosial adalah...',
    options: [
      'Status sosial dan peran sosial tidak ada hubungannya',
      'Status sosial menentukan jumlah kekayaan seseorang',
      'Setiap status sosial memiliki peran sosial yang diharapkan dilakukan',
      'Peran sosial hanya dimiliki oleh orang dewasa',
    ],
    correctAnswer: 2,
    explanation:
      'Setiap status sosial memiliki peran sosial yang melekat. Misalnya, status sebagai guru memiliki peran mengajar dan membimbing, status sebagai murid memiliki peran belajar dan menghormati guru.',
  },
  {
    question: 'Contoh hubungan status-peran yang benar adalah...',
    options: [
      'Status: Dokter - Peran: Mengajar siswa di kelas',
      'Status: Petani - Peran: Mengobati pasien di rumah sakit',
      'Status: Guru - Peran: Mengajar, membimbing, dan menilai siswa',
      'Status: Murid - Peran: Memimpin rapat desa',
    ],
    correctAnswer: 2,
    explanation:
      'Guru memiliki status sebagai pendidik dengan peran mengajar, membimbing, dan menilai siswa. Contoh lainnya salah karena tidak sesuai: dokter seharusnya mengobati pasien, petani seharusnya mengolah lahan, dan murid seharusnya belajar.',
  },
]

// ============================================================
// Analisis Tab - Interactive Scenarios
// ============================================================

function AnalisisTab() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const scenario = scenarioData[currentScenario]

  const handleSelect = (idx: number) => {
    if (showResult) return
    setSelected(idx)
    setShowResult(true)
    if (idx === scenario.correctIndex) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentScenario < scenarioData.length - 1) {
      setCurrentScenario((prev) => prev + 1)
      setSelected(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleReset = () => {
    setCurrentScenario(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  if (completed) {
    return (
      <div className="space-y-4">
        <div className="bg-violet-50 rounded-lg p-4 border-2 border-violet-200">
          <div className="flex items-start gap-3">
            <UserCheck className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-violet-900 text-lg">Hasil Analisis</h4>
              <p className="text-violet-800 text-sm mt-1">
                Kamu telah menyelesaikan semua skenario!
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl p-6 border-2 border-violet-200 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">{score}/{scenarioData.length}</span>
          </div>
          <h5 className="text-xl font-bold text-gray-900 mb-2">
            {score === scenarioData.length
              ? 'Sempurna!'
              : score >= scenarioData.length / 2
                ? 'Bagus!'
                : 'Terus Belajar!'}
          </h5>
          <p className="text-gray-600 mb-4">
            {score === scenarioData.length
              ? 'Kamu memahami hubungan status dan peran sosial dengan sangat baik!'
              : `Kamu menjawab ${score} dari ${scenarioData.length} skenario dengan benar.`}
          </p>
          <button onClick={handleReset} className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors inline-flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Ulangi
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="bg-violet-50 rounded-lg p-4 border-2 border-violet-200">
        <div className="flex items-start gap-3">
          <Info className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-violet-900 text-lg">Analisis Status & Peran Sosial</h4>
            <p className="text-violet-800 text-sm mt-1">
              Baca setiap skenario dan tentukan status sosial beserta peran yang sesuai.
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">
          Skenario: <span className="text-violet-600 font-bold">{currentScenario + 1}</span> / {scenarioData.length}
        </p>
        <p className="text-sm font-medium text-gray-700">
          Skor: <span className="text-green-600 font-bold">{score}</span>
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentScenario + 1) / scenarioData.length) * 100}%` }}
        />
      </div>

      {/* Scenario card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScenario}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-xl p-5 border-2 border-gray-200"
        >
          <h5 className="font-bold text-gray-900 mb-2">Skenario {currentScenario + 1}</h5>
          <p className="text-gray-700 italic mb-4">&ldquo;{scenario.scenario}&rdquo;</p>

          <p className="text-sm font-medium text-gray-600 mb-3">Status dan peran sosial manakah yang sesuai?</p>

          <div className="space-y-2">
            {scenario.options.map((opt, idx) => {
              const isSelected = selected === idx
              const isCorrect = idx === scenario.correctIndex

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showResult
                      ? isCorrect
                        ? 'bg-green-50 border-green-400'
                        : isSelected
                          ? 'bg-red-50 border-red-400'
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      : isSelected
                        ? 'bg-violet-50 border-violet-400'
                        : 'bg-gray-50 border-gray-200 hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700">{String.fromCharCode(65 + idx)}.</span>
                    <div>
                      <span className="font-semibold text-gray-900">Status: {opt.status}</span>
                      <span className="text-gray-600 text-sm block">Peran: {opt.peran}</span>
                    </div>
                    {showResult && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto flex-shrink-0" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600 ml-auto flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg ${
                selected === scenario.correctIndex
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              <p className="font-bold">
                {selected === scenario.correctIndex ? 'Benar!' : 'Kurang Tepat'}
              </p>
              <p className="text-sm mt-1">
                Status: <strong>{scenario.status}</strong> &mdash; Peran: <strong>{scenario.peran}</strong>
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {showResult && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleNext}
          className="px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors inline-flex items-center gap-2"
        >
          {currentScenario < scenarioData.length - 1 ? (
            <>
              Skenario Berikutnya
              <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            'Lihat Hasil'
          )}
        </motion.button>
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
      <div className="bg-violet-50 rounded-lg p-4 border-2 border-violet-200">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xl font-bold text-violet-900">Kuis Status & Peran Sosial</h3>
            <p className="text-violet-800 text-sm mt-1">
              Uji pemahamanmu tentang status sosial, peran sosial, dan hubungannya. Jawab 4 soal berikut!
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
        <span className="bg-violet-100 text-violet-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-violet-50 border-2 border-violet-400'
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
            className="px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export default function LabPeranSosial() {
  const [activeTab, setActiveTab] = useState<'materi' | 'analisis' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Status & Peran Sosial</h2>
            <p className="text-violet-100">Tema III - Pelajaran 7: Status & Peran Sosial dalam Interaksi Masyarakat</p>
          </div>
        </div>
        <p className="text-violet-100 text-sm">
          IPS Kelas 7 — Memahami hubungan antara status sosial dan peran sosial dalam masyarakat
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-violet-50 text-violet-700 border-b-2 border-violet-700'
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
                ? 'bg-violet-50 text-violet-700 border-b-2 border-violet-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Briefcase className="w-4 h-4 inline mr-2" />
            Analisis
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-violet-50 text-violet-700 border-b-2 border-violet-700'
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
                <h3 className="text-2xl font-bold text-gray-900">Status & Peran Sosial dalam Interaksi Masyarakat</h3>

                <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-violet-800">
                        Dalam kehidupan bermasyarakat, setiap orang memiliki posisi dan tanggung jawab yang berbeda-beda.
                        Posisi ini disebut <strong>status sosial</strong>, sedangkan tanggung jawab yang diharapkan disebut <strong>peran sosial</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status Sosial */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-violet-600" />
                    1. Status Sosial
                  </h4>
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Status sosial</strong> adalah posisi atau kedudukan seseorang dalam masyarakat.
                      Setiap orang memiliki berbagai status sekaligus, misalnya sebagai orang tua, pekerja, warga masyarakat, dan lain-lain.
                    </p>
                    <div className="bg-violet-50 rounded-lg p-3 border border-violet-200">
                      <p className="text-sm text-violet-800">
                        <strong>Contoh status sosial:</strong> Guru, Murid, Orang Tua, Anak, Ketua RT, Dokter, Petani, dan lain-lain.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Peran Sosial */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    2. Peran Sosial
                  </h4>
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                    <p className="text-gray-700 mb-3">
                      <strong>Peran sosial</strong> adalah tindakan atau perilaku yang diharapkan dilakukan oleh seseorang sesuai dengan status sosialnya.
                      Peran sosial merupakan pelaksanaan dari status sosial.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Contoh:</strong> Seorang guru diharapkan mengajar, membimbing, dan menilai siswa. Seorang murid diharapkan belajar, menghormati guru, dan mengerjakan tugas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hubungan Status-Peran */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Link2 className="w-6 h-6 text-emerald-600" />
                    3. Hubungan Status dan Peran Sosial
                  </h4>
                  <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                    <p className="text-gray-700 mb-4">
                      Setiap status sosial memiliki peran sosial yang melekat. Status dan peran sosial saling berkaitan dan tidak dapat dipisahkan.
                    </p>

                    <div className="space-y-3">
                      {statusPeranExamples.map((item, idx) => {
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
                              <div>
                                <h5 className={`font-bold ${item.textColor}`}>Status: {item.status}</h5>
                                <p className={`text-sm ${item.textColor} opacity-80`}>Peran: {item.peran}</p>
                              </div>
                            </div>
                            <p className={`text-sm ${item.textColor} opacity-75`}>{item.deskripsi}</p>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Kesimpulan */}
                <div className="pt-4 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-5 border-2 border-violet-300">
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-violet-900 text-lg">Kesimpulan</h4>
                        <p className="text-violet-800 text-sm mt-1">
                          Status sosial dan peran sosial merupakan dua hal yang saling terkait.
                          Status sosial menunjukkan <strong>posisi</strong> seseorang dalam masyarakat, sedangkan peran sosial menunjukkan <strong>tindakan</strong> yang diharapkan dari posisi tersebut.
                          Memahami hubungan ini membantu kita berinteraksi lebih baik dalam masyarakat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===================== ANALISIS TAB ===================== */}
            {activeTab === 'analisis' && (
              <motion.div
                key="analisis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnalisisTab />
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
