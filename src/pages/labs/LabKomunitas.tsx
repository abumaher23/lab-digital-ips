import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Users,
  Heart,
  Sprout,
  Landmark,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Target,
  Check,
  Stethoscope,
  Recycle,
  MapPin,
  DollarSign,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const komunitasData = {
  definition: 'Kelompok orang yang memiliki kepentingan, nilai, atau ciri khas yang sama dan saling berinteraksi satu sama lain.',
  characteristics: [
    'Memiliki kepentingan atau tujuan bersama',
    'Terjadi interaksi dan komunikasi antaranggota',
    'Memiliki nilai, norma, atau ciri khas yang sama',
    'Memiliki rasa kebersamaan dan solidaritas',
    'Bisa bersifat formal (terorganisir) maupun informal',
  ],
  types: [
    { name: 'Komunitas Geografis', desc: 'Berdasarkan tempat tinggal: RT, RW, desa, kelurahan', icon: MapPin },
    { name: 'Komunitas Minat', desc: 'Berdasarkan hobi atau minat: klub olahraga, seni, teknologi', icon: Heart },
    { name: 'Komunitas Profesi', desc: 'Berdasarkan pekerjaan: asosiasi guru, dokter, petani', icon: Users },
    { name: 'Komunitas Sosial', desc: 'Berdasarkan tujuan sosial: PKK, karang taruna, arisan', icon: Landmark },
  ],
}

const pemberdayaanData = [
  {
    name: 'Pemberdayaan dalam Komunitas',
    icon: Heart,
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    iconColor: 'text-green-600',
    borderColor: 'border-green-300',
    description:
      'Kegiatan pemberdayaan yang dilakukan di dalam suatu komunitas untuk meningkatkan keterampilan dan kesejahteraan anggota.',
    caseStudy: {
      title: 'Pelatihan MP-ASI dari Labu Siam',
      detail:
        'Komunitas ibu-ibu PKK dilatih membuat Makanan Pendamping ASI (MP-ASI) berbahan labu siam yang bergizi dan murah. Kegiatan ini meningkatkan pengetahuan gizi dan keterampilan ekonomi anggota komunitas. Ibu-ibu tidak hanya mampu memberi nutrisi terbaik untuk bayi, tetapi juga bisa menjual MP-ASI sebagai sumber pendapatan.',
      benefits: [
        'Meningkatkan pengetahuan gizi bayi',
        'Memanfaatkan bahan lokal yang murah dan mudah didapat',
        'Menambah keterampilan dan pendapatan anggota komunitas',
        'Mempererat solidaritas antaranggota komunitas',
      ],
    },
  },
  {
    name: 'Pemberdayaan Masyarakat Desa',
    icon: Sprout,
    color: 'from-emerald-600 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-800',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-300',
    description:
      'Pengembangan potensi ekonomi dan sosial masyarakat di wilayah pedesaan untuk meningkatkan kesejahteraan.',
    caseStudy: {
      title: 'Budi Daya Anggrek di Desa',
      detail:
        'Masyarakat desa dilatih untuk membudidayakan bunga anggrek sebagai komoditas bernilai ekonomi tinggi. Anggrek dipilih karena memiliki nilai jual tinggi di pasaran. Hasilnya dijual ke pasar lokal maupun ekspor, meningkatkan pendapatan keluarga petani dan menggerakkan ekonomi desa.',
      benefits: [
        'Memanfaatkan potensi alam dan lahan desa',
        'Meningkatkan pendapatan keluarga petani',
        'Menciptakan lapangan kerja di pedesaan',
        'Mendorong ekonomi desa secara berkelanjutan',
      ],
    },
  },
  {
    name: 'Wadah Pemberdayaan',
    icon: Landmark,
    color: 'from-teal-600 to-green-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-800',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-300',
    description:
      'Organisasi atau lembaga yang menjadi wadah kegiatan pemberdayaan masyarakat secara terorganisir.',
    wadahList: [
      {
        name: 'LSM (Lembaga Swadaya Masyarakat)',
        icon: Users,
        desc: 'Memberikan pendampingan, advokasi, dan pelatihan kepada masyarakat.',
        example: 'LSM lingkungan mendampingi masyarakat dalam pengelolaan sampah.',
      },
      {
        name: 'Posyandu',
        icon: Stethoscope,
        desc: 'Pelayanan kesehatan ibu dan anak di tingkat desa/kelurahan.',
        example: 'Pemantauan gizi balita, imunisasi, dan penyuluhan kesehatan.',
      },
      {
        name: 'Karang Taruna',
        icon: Heart,
        desc: 'Organisasi pemuda untuk pengembangan potensi dan pemberdayaan masyarakat.',
        example: 'Pelatihan keterampilan, kegiatan sosial, dan kewirausahaan pemuda.',
      },
      {
        name: 'Dana Sehat',
        icon: DollarSign,
        desc: 'Sistem jaminan kesehatan masyarakat berbasis komunitas.',
        example: 'Iuran bersama untuk membantu biaya kesehatan anggota.',
      },
    ],
  },
]

const studiKasusData = [
  {
    title: 'Bank Sampah Desa Makmur',
    icon: Recycle,
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    iconColor: 'text-green-600',
    borderColor: 'border-green-300',
    location: 'Desa Makmur, Jawa Barat',
    type: 'Pemberdayaan dalam Komunitas',
    description:
      'Warga Desa Makmur mendirikan Bank Sampah untuk mengelola sampah rumah tangga. Sampah dipilah berdasarkan jenis (plastik, kertas, logam) dan dijual ke pengepul. Hasil penjualan dibagi ke nasabah dan dana lingkungan desa.',
    steps: [
      'Sosialisasi program ke seluruh warga desa',
      'Pelatihan pemilahan sampah berdasarkan jenis',
      'Pendirian bank sampah dengan sistem menabung sampah',
      'Penjualan sampah terpilah ke pabrik daur ulang',
      'Pembagian hasil ke nasabah dan dana lingkungan desa',
    ],
    impact: [
      'Lingkungan desa menjadi lebih bersih dan sehat',
      'Warga mendapat penghasilan tambahan dari sampah',
      'Volume sampah yang dibuang ke TPA berkurang 60%',
      'Meningkatkan kesadaran lingkungan masyarakat',
    ],
  },
  {
    title: 'Desa Wisata Budaya Sukamaju',
    icon: MapPin,
    color: 'from-emerald-600 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-800',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-300',
    location: 'Desa Sukamaju, Yogyakarta',
    type: 'Pemberdayaan Masyarakat Desa',
    description:
      'Masyarakat Desa Sukamaju mengembangkan potensi budaya dan alam desa menjadi destinasi wisata. Warga dilatih sebagai pemandu wisata, penginapan homestay dikelola keluarga, dan produk kerajinan dijual langsung ke wisatawan.',
    steps: [
      'Identifikasi potensi budaya dan alam desa',
      'Pelatihan warga sebagai pemandu wisata dan pengelola homestay',
      'Pengembangan produk kerajinan khas desa',
      'Promosi wisata melalui media sosial dan festival',
      'Pembentukan kelompok sadar wisata (Pokdarwis)',
    ],
    impact: [
      'Pendapatan warga meningkat hingga 3 kali lipat',
      'Terbuka lapangan kerja baru di sektor pariwisata',
      'Budaya lokal dilestarikan dan dikenal luas',
      'Infrastruktur desa membaik karena dana wisata',
    ],
  },
]

const quizQuestions = [
  {
    question: 'Komunitas adalah kelompok orang yang memiliki ciri khas tertentu. Berikut ini yang BUKAN merupakan ciri komunitas adalah...',
    options: [
      'Memiliki kepentingan atau tujuan bersama',
      'Terjadi interaksi dan komunikasi antaranggota',
      'Setiap anggota selalu memiliki pendapat yang sama',
      'Memiliki rasa kebersamaan dan solidaritas',
    ],
    correctAnswer: 2,
    explanation:
      'Dalam komunitas, anggota tidak harus selalu memiliki pendapat yang sama. Yang penting adalah adanya kepentingan bersama, interaksi, dan rasa kebersamaan. Perbedaan pendapat justru wajar dalam komunitas yang sehat.',
  },
  {
    question: 'Pelatihan pembuatan MP-ASI dari labu siam yang dilakukan komunitas PKK merupakan contoh pemberdayaan...',
    options: [
      'Pemberdayaan masyarakat desa',
      'Pemberdayaan dalam komunitas',
      'Pemberdayaan melalui LSM',
      'Pemberdayaan oleh pemerintah',
    ],
    correctAnswer: 1,
    explanation:
      'Pelatihan MP-ASI dari labu siam adalah contoh pemberdayaan dalam komunitas karena kegiatan ini dilakukan di dalam komunitas PKK untuk meningkatkan pengetahuan gizi dan keterampilan ekonomi anggotanya.',
  },
  {
    question: 'Posyandu merupakan wadah pemberdayaan masyarakat yang bergerak dalam bidang...',
    options: [
      'Pendidikan anak usia sekolah',
      'Kesehatan ibu dan anak di tingkat desa',
      'Pengelolaan sampah lingkungan',
      'Pengembangan usaha mikro',
    ],
    correctAnswer: 1,
    explanation:
      'Posyandu (Pos Pelayanan Terpadu) adalah wadah pemberdayaan yang memberikan pelayanan kesehatan ibu dan anak di tingkat desa/kelurahan, termasuk pemantauan gizi balita, imunisasi, dan penyuluhan kesehatan.',
  },
  {
    question: 'Bank Sampah adalah contoh pemberdayaan masyarakat yang menggabungkan aspek lingkungan dan ekonomi. Manfaat utamanya adalah...',
    options: [
      'Menghilangkan semua sampah di lingkungan',
      'Membuat warga menjadi kaya raya',
      'Membersihkan lingkungan sekaligus memberi penghasilan tambahan bagi warga',
      'Mengganti peran pemerintah dalam pengelolaan sampah',
    ],
    correctAnswer: 2,
    explanation:
      'Bank Sampah memberikan manfaat ganda: lingkungan menjadi lebih bersih karena sampah terpilah, dan warga mendapat penghasilan tambahan dari menjual sampah daur ulang. Ini adalah contoh pemberdayaan yang berkelanjutan.',
  },
]

// ============================================================
// Case Study Component
// ============================================================

function StudiKasusInteraktif() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<'steps' | 'impact'>('steps')

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-bold text-gray-900 flex items-center">
        <Target className="w-5 h-5 mr-2 text-green-600" />
        Studi Kasus Pemberdayaan Masyarakat
      </h4>
      <p className="text-sm text-gray-600">
        Klik studi kasus untuk mempelajari bagaimana masyarakat memberdayakan diri melalui program nyata.
      </p>

      {/* Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studiKasusData.map((kasus, idx) => {
          const CaseIcon = kasus.icon
          const isSelected = selectedCase === idx

          return (
            <motion.button
              key={idx}
              onClick={() => {
                setSelectedCase(isSelected ? null : idx)
                setActiveSection('steps')
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                isSelected
                  ? `bg-gradient-to-br ${kasus.color} text-white border-transparent shadow-xl`
                  : `${kasus.bgColor} ${kasus.borderColor} hover:shadow-md`
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-white/20' : `bg-gradient-to-br ${kasus.color}`
                }`}>
                  <CaseIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className={`font-bold text-base ${isSelected ? 'text-white' : kasus.textColor}`}>
                    {kasus.title}
                  </h5>
                  <p className={`text-xs ${isSelected ? 'text-white/80' : kasus.iconColor}`}>
                    {kasus.location}
                  </p>
                </div>
              </div>
              <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-700'}`}>
                {kasus.description}
              </p>
              <span className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${
                isSelected ? 'bg-white/20 text-white' : `${kasus.bgColor} ${kasus.textColor}`
              }`}>
                {kasus.type}
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* Selected case detail */}
      <AnimatePresence mode="wait">
        {selectedCase !== null && (
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`rounded-xl p-6 border-2 ${studiKasusData[selectedCase].bgColor} ${studiKasusData[selectedCase].borderColor}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${studiKasusData[selectedCase].color} flex items-center justify-center`}>
                {(() => {
                  const Icon = studiKasusData[selectedCase].icon
                  return <Icon className="w-7 h-7 text-white" />
                })()}
              </div>
              <div>
                <h5 className={`text-lg font-bold ${studiKasusData[selectedCase].textColor}`}>
                  {studiKasusData[selectedCase].title}
                </h5>
                <p className={`text-sm ${studiKasusData[selectedCase].iconColor}`}>
                  {studiKasusData[selectedCase].location}
                </p>
              </div>
            </div>

            <p className={`text-sm mb-6 ${studiKasusData[selectedCase].textColor} opacity-80`}>
              {studiKasusData[selectedCase].description}
            </p>

            {/* Toggle sections */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveSection('steps')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === 'steps'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
                }`}
              >
                Langkah-langkah
              </button>
              <button
                onClick={() => setActiveSection('impact')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === 'impact'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
                }`}
              >
                Dampak
              </button>
            </div>

            {/* Steps */}
            {activeSection === 'steps' && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <h6 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-600" />
                  Langkah Pelaksanaan:
                </h6>
                <ul className="space-y-2">
                  {studiKasusData[selectedCase].steps.map((step, sIdx) => (
                    <motion.li
                      key={sIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sIdx * 0.08 }}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Impact */}
            {activeSection === 'impact' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <h6 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600" />
                  Dampak Pemberdayaan:
                </h6>
                <ul className="space-y-2">
                  {studiKasusData[selectedCase].impact.map((item, iIdx) => (
                    <motion.li
                      key={iIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: iIdx * 0.08 }}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
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

export default function LabKomunitas() {
  const [activeTab, setActiveTab] = useState<'materi' | 'studi-kasus' | 'kuis'>('materi')

  const mpasiData = pemberdayaanData[0] as typeof pemberdayaanData[number] & { caseStudy: { title: string; detail: string; benefits: string[] } }
  const anggrekData = pemberdayaanData[1] as typeof pemberdayaanData[number] & { caseStudy: { title: string; detail: string; benefits: string[] } }
  const wadahData = pemberdayaanData[2] as typeof pemberdayaanData[number] & { wadahList: { name: string; icon: React.ComponentType<{ className?: string }>; desc: string; example: string }[] }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Peranan Komunitas & Pemberdayaan Masyarakat</h2>
            <p className="text-green-100">Tema IV — Pelajaran 7: Peranan Komunitas & Pemberdayaan Masyarakat</p>
          </div>
        </div>
        <p className="text-green-100 text-sm">
          IPS Kelas 7 — Memahami peran komunitas dan pemberdayaan masyarakat dalam pembangunan
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
            onClick={() => setActiveTab('studi-kasus')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'studi-kasus'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-4 h-4 inline mr-2" />
            Studi Kasus
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
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
                {/* Hakikat Komunitas */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-7 h-7 text-green-600" />
                    A. Hakikat Komunitas
                  </h3>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-200 mb-6">
                    <p className="text-gray-700 mb-3">
                      <strong>Komunitas</strong> adalah kelompok orang yang memiliki kepentingan, nilai, atau ciri khas
                      yang sama dan saling berinteraksi satu sama lain. Komunitas dapat terbentuk berdasarkan{' '}
                      <strong>tempat tinggal, minat, profesi, atau tujuan sosial</strong>.
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h5 className="font-bold text-green-900 mb-2">Ciri-ciri Komunitas:</h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        {komunitasData.characteristics.map((char, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Types */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {komunitasData.types.map((type, idx) => {
                      const IconComponent = type.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="bg-white rounded-xl p-4 border-2 border-green-200"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="font-bold text-gray-900">{type.name}</h5>
                          </div>
                          <p className="text-sm text-gray-700">{type.desc}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Pemberdayaan */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-7 h-7 text-emerald-600" />
                    B. Pemberdayaan dalam Komunitas
                  </h3>
                  <p className="text-gray-700 mb-6">
                    <strong>Pemberdayaan</strong> adalah upaya untuk meningkatkan kemampuan, kapasitas, dan
                    kesejahteraan masyarakat agar mereka dapat hidup lebih mandiri dan sejahtera.
                  </p>

                  {/* MP-ASI Case Study */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-xl p-6 border-2 bg-gradient-to-r from-green-50 to-emerald-50 border-green-300`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-green-900">Pelatihan MP-ASI dari Labu Siam</h4>
                          <p className="text-sm text-green-700">Contoh Pemberdayaan dalam Komunitas</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        Komunitas ibu-ibu PKK dilatih membuat <strong>Makanan Pendamping ASI (MP-ASI)</strong> berbahan
                        labu siam yang bergizi dan murah. Kegiatan ini meningkatkan pengetahuan gizi dan keterampilan
                        ekonomi anggota komunitas.
                      </p>

                      <div className="bg-white rounded-lg p-4 border border-green-200">
                        <h5 className="font-bold text-green-900 mb-2">Manfaat:</h5>
                        <ul className="space-y-1.5 text-sm text-gray-700">
                          {mpasiData.caseStudy.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Pemberdayaan Desa */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Sprout className="w-7 h-7 text-emerald-600" />
                    C. Pemberdayaan Masyarakat Desa
                  </h3>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl p-6 border-2 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                        <Sprout className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-emerald-900">Budi Daya Anggrek di Desa</h4>
                        <p className="text-sm text-emerald-700">Contoh Pemberdayaan Masyarakat Desa</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Masyarakat desa dilatih untuk membudidayakan <strong>bunga anggrek</strong> sebagai komoditas
                      bernilai ekonomi tinggi. Hasilnya dijual ke pasar lokal maupun ekspor, meningkatkan pendapatan
                      keluarga petani.
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h5 className="font-bold text-emerald-900 mb-2">Manfaat:</h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        {anggrekData.caseStudy.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Wadah Pemberdayaan */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Landmark className="w-7 h-7 text-teal-600" />
                    D. Wadah Pemberdayaan Masyarakat
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Pemberdayaan masyarakat dilakukan melalui berbagai wadah atau organisasi yang memfasilitasi kegiatan
                    pemberdayaan secara terorganisir.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wadahData.wadahList.map((wadah, idx) => {
                      const IconComponent = wadah.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.07 }}
                          className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-5 border-2 border-teal-200"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="font-bold text-gray-900">{wadah.name}</h5>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{wadah.desc}</p>
                          <div className="bg-white rounded-lg p-3 border border-teal-200">
                            <span className="text-xs font-semibold text-gray-500">Contoh: </span>
                            <span className="text-sm text-gray-700">{wadah.example}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border-2 border-green-300">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Rangkuman
                  </h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Komunitas</strong>: kelompok orang dengan kepentingan/ciri sama yang saling berinteraksi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Pemberdayaan dalam komunitas</strong>: contoh pelatihan MP-ASI dari labu siam di komunitas PKK.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Pemberdayaan desa</strong>: contoh budi daya anggrek untuk meningkatkan ekonomi desa.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Wadah pemberdayaan</strong>: LSM, Posyandu, Karang Taruna, Dana Sehat.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ==================== STUDI KASUS TAB ==================== */}
            {activeTab === 'studi-kasus' && (
              <motion.div
                key="studi-kasus"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Studi Kasus Pemberdayaan Masyarakat
                  </h3>
                  <p className="text-gray-600">
                    Pelajari contoh nyata program pemberdayaan masyarakat dan dampaknya.
                  </p>
                </div>
                <StudiKasusInteraktif />
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
                    Kuis Peranan Komunitas & Pemberdayaan
                  </h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang komunitas, pemberdayaan masyarakat, dan wadah pemberdayaan.
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
