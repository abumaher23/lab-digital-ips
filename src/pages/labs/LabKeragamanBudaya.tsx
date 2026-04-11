import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Globe,
  MapPin,
  Users,
  Heart,
  Lightbulb,
  ArrowRight,
  XCircle,
  RotateCcw,
  Music,
  Palette,
  UtensilsCrossed,
  Home,
  Languages,
  Leaf,
  Award,
  CheckCircle2,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const sukuData = {
  totalSuku: '1.300+',
  totalBahasa: '1.100+',
  totalPulau: '17.000+',
  faktorGeografis: [
    'Indonesia sebagai negara kepulauan terpisah lautan',
    'Isolasi geografis memicu perkembangan budaya unik',
    'Letak di persilangan jalur perdagangan dunia',
    'Kondisi iklim yang beragam memengaruhi adaptasi budaya',
  ],
}

const tujuhUnsurBudaya = [
  {
    name: 'Bahasa',
    icon: Languages,
    color: 'from-violet-600 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-800',
    iconColor: 'text-violet-600',
    description: 'Sistem komunikasi lisan dan tulisan sebagai sarana interaksi antaranggota masyarakat.',
    example: 'Indonesia memiliki 1.100+ bahasa daerah: Jawa, Sunda, Batak, Dayak, Asmat, dan ratusan lainnya.',
  },
  {
    name: 'Sistem Pengetahuan',
    icon: Leaf,
    color: 'from-pink-600 to-rose-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    description: 'Pengetahuan tentang alam sekitar, tumbuhan, hewan, bintang, dan iklim.',
    example: 'Pengetahuan lokal pranata mangsa di Jawa untuk menentukan waktu tanam dan panen.',
  },
  {
    name: 'Organisasi Sosial',
    icon: Users,
    color: 'from-fuchsia-600 to-violet-600',
    bgColor: 'bg-fuchsia-50',
    textColor: 'text-fuchsia-800',
    iconColor: 'text-fuchsia-600',
    description: 'Sistem kekerabatan, tata tertib sosial, dan aturan dalam masyarakat.',
    example: 'Sistem banjar di Bali, nagari di Minangkabau, dan gotong royong di masyarakat Jawa.',
  },
  {
    name: 'Sistem Peralatan & Teknologi',
    icon: Home,
    color: 'from-purple-600 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    iconColor: 'text-purple-600',
    description: 'Peralatan hidup, senjata, alat produksi, dan teknologi yang digunakan masyarakat.',
    example: 'Rumah Gadang (Sumatra), Tongkonan (Toraja), Joglo (Jawa), dan teknik tenun ikat NTT.',
  },
  {
    name: 'Mata Pencaharian',
    icon: UtensilsCrossed,
    color: 'from-violet-600 to-pink-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-800',
    iconColor: 'text-violet-600',
    description: 'Cara masyarakat memenuhi kebutuhan hidup melalui berbagai kegiatan ekonomi.',
    example: 'Nelayan di pesisir, petani sawah di Jawa, peladang berpindah di Kalimantan, dan peternak di NTT.',
  },
  {
    name: 'Sistem Religi',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    description: 'Kepercayaan, keyakinan, dan praktik keagamaan yang dianut masyarakat.',
    example: 'Upacara Ngaben di Bali, Kasada di Tengger, Sekaten di Yogyakarta, dan tradisi lokal lainnya.',
  },
  {
    name: 'Kesenian',
    icon: Music,
    color: 'from-fuchsia-500 to-purple-500',
    bgColor: 'bg-fuchsia-50',
    textColor: 'text-fuchsia-800',
    iconColor: 'text-fuchsia-600',
    description: 'Ekspresi keindahan masyarakat melalui seni rupa, suara, gerak, dan sastra.',
    example: 'Tari Saman (Aceh), Wayang Kulit (Jawa), Angklung (Sunda), musik Kolintang (Sulawesi).',
  },
]

const ethnicGroups = [
  {
    name: 'Suku Batak',
    region: 'Sumatra Utara',
    position: 'top-left',
    color: 'from-violet-600 to-purple-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-800',
    iconColor: 'text-violet-600',
    budaya: [
      'Ulos — kain tenun tradisional dengan makna spiritual',
      'Rumah Bolon — rumah adat dengan arsitektur unik',
      'Tari Tor-Tor — tarian adat dalam upacara penting',
      'Sistem marga sebagai identitas kekerabatan',
    ],
    bahasa: 'Bahasa Batak (Toba, Karo, Simalungun, Pakpak, Mandailing, Angkola)',
    makanan: 'Arsik, Saksang, Natinombur',
  },
  {
    name: 'Suku Jawa',
    region: 'Jawa Tengah, Jawa Timur, DIY',
    position: 'center',
    color: 'from-pink-600 to-rose-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    budaya: [
      'Wayang Kulit — pertunjukan bayangan dari kulit kerbau',
      'Batik — seni mewarnai kain dengan motif simbolik',
      'Rumah Joglo — arsitektur tradisional Jawa',
      'Upacara Sekaten — perayaan Maulid Nabi di keraton',
    ],
    bahasa: 'Bahasa Jawa dengan tingkatan: ngoko, krama, krama inggil',
    makanan: 'Gudeg, Soto, Rawon, Nasi Liwet',
  },
  {
    name: 'Suku Dayak',
    region: 'Kalimantan',
    position: 'top-right',
    color: 'from-fuchsia-600 to-violet-600',
    bgColor: 'bg-fuchsia-50',
    textColor: 'text-fuchsia-800',
    iconColor: 'text-fuchsia-600',
    budaya: [
      'Rumah Betang — rumah panjang untuk beberapa keluarga',
      'Tari Mandau — tarian perang suku Dayak',
      'Upacara Tiwah — penguburan tulang leluhur',
      'Seni ukir motif alam pada peralatan sehari-hari',
    ],
    bahasa: 'Bahasa Dayak Ngaju, Maanyan, Kenyah, dan lainnya',
    makanan: 'Juhu Singkah, Wadi, Pakis',
  },
  {
    name: 'Suku Bugis-Makassar',
    region: 'Sulawesi Selatan',
    position: 'right',
    color: 'from-purple-600 to-indigo-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    iconColor: 'text-purple-600',
    budaya: [
      'Rumah Tongkonan (Toraja) & Rumah Bugis panggung',
      'Perahu Phinisi — warisan budaya dunia UNESCO',
      'Siri\' na Pacce — kode kehormatan masyarakat',
      'Upacara pernikahan adat yang megah',
    ],
    bahasa: 'Bahasa Bugis dan Makassar',
    makanan: 'Coto Makassar, Pallu Basa, Sop Konro',
  },
  {
    name: 'Suku Bali',
    region: 'Bali',
    position: 'bottom-center',
    color: 'from-violet-500 to-pink-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-800',
    iconColor: 'text-violet-600',
    budaya: [
      'Tari Kecak dan Barong — tarian sakral Hindu-Bali',
      'Upacara Ngaben — pembakaran jenazah secara adat',
      'Sistem Subak — irigasi sawah tradisional (UNESCO)',
      'Seni ukir dan lukis tradisional Bali',
    ],
    bahasa: 'Bahasa Bali dengan tingkatan halus dan kasar',
    makanan: 'Babi Guling, Lawar, Bebek Betutu',
  },
  {
    name: 'Suku Papua',
    region: 'Papua',
    position: 'far-right',
    color: 'from-pink-500 to-fuchsia-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-800',
    iconColor: 'text-pink-600',
    budaya: [
      'Rumah Honai — rumah tradisional berbentuk bulat',
      'Seni ukir Asmat — karya seni kayu terkenal dunia',
      'Festival Lembah Baliem — festival budaya tahunan',
      'Koteka dan noken sebagai identitas budaya',
    ],
    bahasa: '250+ bahasa Papua: Dani, Asmat, Ekari, dan lainnya',
    makanan: 'Papeda, Bakar Batu (Kuwae), Sagusagu',
  },
]

const quizQuestions = [
  {
    question: 'Indonesia memiliki lebih dari 1.300 suku bangsa dan 1.100 bahasa daerah. Faktor utama yang menyebabkan keragaman budaya ini adalah...',
    options: [
      'Penduduk Indonesia sangat ramah',
      'Isolasi geografis karena Indonesia terdiri dari ribuan pulau',
      'Pemerintah memaksa setiap daerah memiliki budaya berbeda',
      'Indonesia dijajah oleh banyak negara',
    ],
    correctAnswer: 1,
    explanation:
      'Isolasi geografis adalah faktor utama. Indonesia terdiri dari lebih 17.000 pulau yang terpisah oleh lautan. Setiap pulau mengembangkan budaya, bahasa, dan adat istiadatnya sendiri-sendiri.',
  },
  {
    question: 'Berikut ini yang termasuk dalam 7 unsur budaya universal adalah...',
    options: [
      'Sistem transportasi dan komunikasi',
      'Bahasa, sistem pengetahuan, organisasi sosial, teknologi, mata pencaharian, religi, dan kesenian',
      'Perekonomian, pemerintahan, militer, pendidikan, kesehatan, olahraga, dan hiburan',
      'Pertanian, industri, perdagangan, pariwisata, teknologi, informasi, dan komunikasi',
    ],
    correctAnswer: 1,
    explanation:
      'Tujuh unsur budaya universal menurut Bronislaw Malinowski: bahasa, sistem pengetahuan, organisasi sosial, sistem peralatan/teknologi, mata pencaharian, sistem religi, dan kesenian.',
  },
  {
    question: 'Sistem Subak di Bali yang telah ditetapkan sebagai warisan budaya dunia UNESCO merupakan contoh unsur budaya dalam bidang...',
    options: [
      'Sistem religi dan kepercayaan',
      'Kesenian dan ekspresi budaya',
      'Organisasi sosial dan mata pencaharian',
      'Bahasa dan sistem komunikasi',
    ],
    correctAnswer: 2,
    explanation:
      'Sistem Subak mencerminkan organisasi sosial (tata kelola bersama) dan mata pencaharian (pertanian). Subak adalah sistem irigasi tradisional yang mengatur pembagian air untuk sawah secara adil.',
  },
  {
    question: 'Perahu Phinisi dari Sulawesi Selatan yang diakui UNESCO menunjukkan keunikan budaya Indonesia dalam bidang...',
    options: [
      'Sistem religi dan kepercayaan masyarakat Bugis',
      'Kesenian musik dan tarian tradisional',
      'Teknologi dan peralatan tradisional',
      'Bahasa dan sastra daerah',
    ],
    correctAnswer: 2,
    explanation:
      'Perahu Phinisi merupakan contoh unsur budaya dalam bidang teknologi dan peralatan tradisional. Kemampuan masyarakat Bugis-Makassar membuat kapal layar tanpa rancangan teknis modern menunjukkan keahlian teknologi tinggi.',
  },
]

// ============================================================
// Interactive Map Component
// ============================================================

function JelajahiBudaya() {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-bold text-gray-900 flex items-center">
        <Globe className="w-5 h-5 mr-2 text-violet-600" />
        Peta Budaya Nusantara
      </h4>
      <p className="text-sm text-gray-600">
        Indonesia memiliki lebih dari <strong>1.300 suku bangsa</strong> dan <strong>1.100 bahasa daerah</strong>.
        Klik setiap wilayah untuk menjelajahi keunikan budaya masing-masing!
      </p>

      {/* Map-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {ethnicGroups.map((group, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedRegion(selectedRegion === idx ? null : idx)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`p-4 rounded-xl border-2 transition-all text-left ${
              selectedRegion === idx
                ? `bg-gradient-to-br ${group.color} text-white border-transparent shadow-xl`
                : `${group.bgColor} border-gray-200 hover:shadow-md`
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <MapPin className={`w-4 h-4 ${selectedRegion === idx ? 'text-white' : group.iconColor}`} />
              <span className={`font-bold text-sm ${selectedRegion === idx ? 'text-white' : group.textColor}`}>
                {group.name}
              </span>
            </div>
            <p className={`text-xs ${selectedRegion === idx ? 'text-white/80' : `${group.iconColor} opacity-70`}`}>
              {group.region}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Region detail */}
      <AnimatePresence mode="wait">
        {selectedRegion !== null && (
          <motion.div
            key={selectedRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`rounded-xl p-6 border-2 ${ethnicGroups[selectedRegion].bgColor} border-gray-200`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${ethnicGroups[selectedRegion].color} flex items-center justify-center`}>
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h5 className={`text-xl font-bold ${ethnicGroups[selectedRegion].textColor}`}>
                  {ethnicGroups[selectedRegion].name}
                </h5>
                <p className={`text-sm ${ethnicGroups[selectedRegion].iconColor}`}>
                  {ethnicGroups[selectedRegion].region}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h6 className={`font-bold text-sm mb-2 ${ethnicGroups[selectedRegion].textColor}`}>
                  Unsur Budaya Khas:
                </h6>
                <ul className="space-y-2">
                  {ethnicGroups[selectedRegion].budaya.map((item, bIdx) => (
                    <motion.li
                      key={bIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bIdx * 0.08 }}
                      className={`flex items-start gap-2 text-sm ${ethnicGroups[selectedRegion].textColor}`}
                    >
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${ethnicGroups[selectedRegion].color} flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                        {bIdx + 1}
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <h6 className={`font-bold text-sm mb-1 ${ethnicGroups[selectedRegion].textColor}`}>
                    <Languages className="w-4 h-4 inline mr-1" />
                    Bahasa Daerah:
                  </h6>
                  <p className={`text-sm ${ethnicGroups[selectedRegion].textColor}`}>
                    {ethnicGroups[selectedRegion].bahasa}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <h6 className={`font-bold text-sm mb-1 ${ethnicGroups[selectedRegion].textColor}`}>
                    <UtensilsCrossed className="w-4 h-4 inline mr-1" />
                    Makanan Khas:
                  </h6>
                  <p className={`text-sm ${ethnicGroups[selectedRegion].textColor}`}>
                    {ethnicGroups[selectedRegion].makanan}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-violet-700">1.300+</div>
          <div className="text-xs text-violet-600">Suku Bangsa</div>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-pink-700">1.100+</div>
          <div className="text-xs text-pink-600">Bahasa Daerah</div>
        </div>
        <div className="bg-fuchsia-50 border border-fuchsia-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-fuchsia-700">17.000+</div>
          <div className="text-xs text-fuchsia-600">Pulau</div>
        </div>
      </div>
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

export default function LabKeragamanBudaya() {
  const [activeTab, setActiveTab] = useState<'materi' | 'jelajahi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Globe className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Keragaman Sosial Budaya Indonesia</h2>
            <p className="text-violet-100">Tema IV — Pelajaran 1: Keragaman Sosial Budaya Indonesia</p>
          </div>
        </div>
        <p className="text-violet-100 text-sm">
          IPS Kelas 7 — Menjelajahi keanekaragaman suku, bahasa, dan budaya Indonesia
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
            onClick={() => setActiveTab('jelajahi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'jelajahi'
                ? 'bg-violet-50 text-violet-700 border-b-2 border-violet-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Jelajahi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-violet-50 text-violet-700 border-b-2 border-violet-700'
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
                {/* Intro */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Globe className="w-7 h-7 text-violet-600" />
                    A. Keragaman Sosial Budaya Indonesia
                  </h3>
                  <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-5 border-2 border-violet-200 mb-6">
                    <p className="text-gray-700 mb-4">
                      Indonesia adalah negara kepulauan terbesar di dunia. Dengan lebih dari <strong>17.000 pulau</strong>,{' '}
                      <strong>1.300 suku bangsa</strong>, dan <strong>1.100 bahasa daerah</strong>, Indonesia memiliki
                      keragaman sosial budaya yang luar biasa. Keragaman ini menjadi kekayaan dan identitas bangsa yang
                      harus kita banggakan dan lestarikan.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-violet-700">1.300+</div>
                        <div className="text-xs text-gray-600">Suku Bangsa</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-pink-700">1.100+</div>
                        <div className="text-xs text-gray-600">Bahasa Daerah</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center">
                        <div className="text-xl font-bold text-fuchsia-700">17.000+</div>
                        <div className="text-xs text-gray-600">Pulau</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Faktor Penyebab */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-7 h-7 text-pink-600" />
                    B. Faktor Penyebab Keragaman Budaya
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sukuData.faktorGeografis.map((faktor, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-4 border border-violet-200"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-gray-700">{faktor}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 bg-violet-50 border border-violet-200 rounded-xl p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Penting:</strong> Isolasi geografis adalah faktor utama. Karena lautan memisahkan satu
                      pulau dengan pulau lainnya, setiap kelompok masyarakat mengembangkan budaya, bahasa, dan adat
                      istiadatnya sendiri secara unik. Inilah yang menyebabkan Indonesia menjadi salah satu negara
                      dengan keanekaragaman budaya tertinggi di dunia.
                    </p>
                  </div>
                </div>

                {/* 7 Unsur Budaya Universal */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Palette className="w-7 h-7 text-fuchsia-600" />
                    C. Tujuh Unsur Budaya Universal
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Menurut antropolog <strong>Bronislaw Malinowski</strong>, setiap kebudayaan di dunia memiliki tujuh
                    unsur pokok yang disebut <em>universal cultural elements</em>. Unsur-unsur ini ada di setiap
                    masyarakat, meskipun bentuknya berbeda-beda.
                  </p>

                  <div className="space-y-4">
                    {tujuhUnsurBudaya.map((unsur, idx) => {
                      const IconComponent = unsur.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.07 }}
                          className={`rounded-xl p-5 border-2 ${unsur.bgColor}`}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${unsur.color} flex items-center justify-center`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="text-xs font-medium text-gray-500">Unsur {idx + 1}</span>
                              <h5 className={`font-bold text-lg ${unsur.textColor}`}>{unsur.name}</h5>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-2 text-sm">{unsur.description}</p>
                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <span className="text-xs font-semibold text-gray-500">Contoh: </span>
                            <span className="text-sm text-gray-700">{unsur.example}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-5 border-2 border-violet-300">
                  <h4 className="font-bold text-violet-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Rangkuman
                  </h4>
                  <ul className="space-y-2 text-sm text-violet-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Indonesia memiliki <strong>1.300+ suku bangsa</strong> dan <strong>1.100+ bahasa daerah</strong> yang tersebar di 17.000+ pulau.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Isolasi geografis</strong> menjadi faktor utama penyebab keragaman budaya Indonesia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Setiap budaya memiliki <strong>7 unsur universal</strong>: bahasa, pengetahuan, organisasi sosial, teknologi, mata pencaharian, religi, dan kesenian.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Keragaman budaya adalah <strong>kekayaan bangsa</strong> yang harus dijaga dan dilestarikan.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ==================== JELAJAHI TAB ==================== */}
            {activeTab === 'jelajahi' && (
              <motion.div
                key="jelajahi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Jelajahi Budaya Nusantara
                  </h3>
                  <p className="text-gray-600">
                    Klik setiap wilayah untuk mengenal suku bangsa, bahasa, budaya, dan makanan khas daerah.
                  </p>
                </div>
                <JelajahiBudaya />
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
                    Kuis Keragaman Sosial Budaya
                  </h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang keragaman budaya Indonesia, unsur budaya universal, dan faktor geografis.
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
