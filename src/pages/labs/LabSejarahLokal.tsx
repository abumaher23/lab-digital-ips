import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Users,
  Crown,
  Shield,
  Swords,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  CheckCircle,
  MapPin,
  Calendar,
  Star,
  Flag,
  Scroll,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const pahlawanData = [
  {
    name: 'Sultan Nuku',
    fullName: 'Sultan Muhammad al-Mabus Amiruddin',
    nickname: 'Sultan Nuku dari Tidore',
    region: 'Tidore, Maluku Utara',
    period: 'Revolusi Tidore 1783',
    icon: Crown,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-300',
    description:
      'Memimpin perlawanan melawan penjajahan Belanda dan menyatukan masyarakat Maluku serta Papua dalam satu perjuangan kemerdekaan.',
    achievements: [
      'Memimpin Revolusi Tidore tahun 1783 melawan VOC Belanda',
      'Menyatukan masyarakat Maluku dan Papua dalam satu perjuangan',
      'Menerapkan strategi multikultur: memanfaatkan jaringan kesultanan, agama, dan adat',
      'Dikenal sebagai diplomat ulung yang mampu membangun aliansi antarpulau',
      'Berhasil membebaskan Tidore dari cengkeraman VOC',
    ],
    values: [
      { name: 'Kerja Sama', desc: 'Menyatukan berbagai suku dan kerajaan untuk melawan penjajah' },
      { name: 'Keberanian', desc: 'Berani melawan kekuatan besar VOC Belanda' },
      { name: 'Diplomasi', desc: 'Membangun aliansi multikultur antarpulau' },
    ],
    legacy: 'Sultan Nuku ditetapkan sebagai Pahlawan Nasional. Namanya mengingatkan kita bahwa persatuan dalam keragaman adalah kekuatan terbesar bangsa Indonesia.',
  },
  {
    name: 'Ratu Kalinyamat',
    fullName: 'Ratu Kalinyamat',
    nickname: 'Rainha de Japara (Ratu Jepara)',
    region: 'Jepara, Jawa Tengah',
    period: 'Penguasa Maritim 1549',
    icon: Shield,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-800',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-300',
    description:
      'Penguasa maritim tangguh yang memimpin armada laut Jepara dan melawan Portugis yang menguasai Malaka.',
    achievements: [
      'Menjadi penguasa Kerajaan Jepara sejak tahun 1549',
      'Membangun sistem perdagangan maritim dengan sistem commenda (kerja sama dagang)',
      'Dikenal di kalangan Portugis sebagai "Rainha de Japara" (Ratu dari Jepara)',
      'Mengirim armada laut untuk melawan Portugis yang menguasai Malaka',
      'Memimpin Jepara menjadi kekuatan maritim penting di Nusantara',
    ],
    values: [
      { name: 'Keteguhan Hati', desc: 'Teguh mempertahankan kedaulatan maritim Nusantara' },
      { name: 'Kepemimpinan', desc: 'Memimpin kerajaan maritim besar di era dominasi asing' },
      { name: 'Keberanian', desc: 'Melawan armada Portugis yang menguasai Malaka' },
    ],
    legacy: 'Ratu Kalinyamat membuktikan bahwa perempuan mampu memimpin kerajaan maritim dan melawan kekuatan asing. Jepara menjadi pusat perdagangan penting di bawah kepemimpinannya.',
  },
  {
    name: 'Laksamana Malahayati',
    fullName: 'Laksamana Keumala Hayati',
    nickname: 'Laksamana Wanita Pertama di Dunia',
    region: 'Kesultanan Aceh',
    period: 'Kesultanan Aceh',
    icon: Swords,
    color: 'from-amber-600 to-yellow-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-800',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-300',
    description:
      'Laksamana wanita pertama dalam sejarah dunia yang memimpin pasukan laut Aceh, termasuk Inong Balee yang terdiri dari janda prajurit.',
    achievements: [
      'Menjadi laksamana (admiral) wanita pertama dalam sejarah dunia',
      'Memimpin pasukan Inong Balee — armada dari janda-janda prajurit Aceh yang gugur',
      'Dalam duel satu lawan satu, berhasil mengalahkan dan menewaskan Cornelis de Houtman',
      'Cornelis de Houtman adalah pemimpin ekspedisi Belanda pertama yang tiba di Nusantara',
      'Menjadi simbol keberanian dan kesetaraan gender dalam sejarah maritim Indonesia',
    ],
    values: [
      { name: 'Keberanian', desc: 'Duel satu lawan satu dengan pemimpin ekspedisi Belanda' },
      { name: 'Keteguhan Hati', desc: 'Memimpin armada setelah suami gugur dalam peperangan' },
      { name: 'Kesetaraan', desc: 'Membuktikan perempuan mampu memimpin pasukan perang' },
    ],
    legacy: 'Nama Malahayati diabadikan sebagai nama bandara di Aceh dan kapal perang TNI AL. Ia menjadi inspirasi bahwa gender bukan hambatan untuk menjadi pemimpin hebat.',
  },
]

const pahlawanLainnya = [
  { name: 'Cut Nyak Dien', region: 'Aceh', desc: 'Pahlawan wanita Aceh yang gigih melawan Belanda' },
  { name: 'Dewi Sartika', region: 'Jawa Barat', desc: 'Perintis pendidikan perempuan di Jawa Barat' },
  { name: 'R.A. Kartini', region: 'Jawa Tengah', desc: 'Pelopor emansipasi dan pendidikan perempuan' },
  { name: 'Pangeran Diponegoro', region: 'Jawa Tengah', desc: 'Memimpin Perang Jawa (1825-1830) melawan Belanda' },
  { name: 'Tuanku Imam Bonjol', region: 'Sumatra Barat', desc: 'Memimpin Perang Padri melawan penjajahan' },
  { name: 'Sultan Hasanuddin', region: 'Sulawesi Selatan', desc: 'Ayam Jantan dari Timur, penguasa Gowa-Tallo' },
]

const quizQuestions = [
  {
    question: 'Sultan Nuku memimpin Revolusi Tidore tahun 1783 melawan...',
    options: [
      'Portugis yang menguasai Malaka',
      'VOC Belanda yang menjajah Tidore',
      'Inggris yang menguasai Nusantara',
      'Jepang yang menduduki Indonesia',
    ],
    correctAnswer: 1,
    explanation:
      'Sultan Nuku memimpin Revolusi Tidore tahun 1783 melawan VOC Belanda. Ia berhasil menyatukan masyarakat Maluku dan Papua dalam satu perjuangan dan dikenal sebagai diplomat ulung.',
  },
  {
    question: 'Ratu Kalinyamat dikenal di kalangan Portugis dengan sebutan...',
    options: [
      'Rainha de Japara',
      'Rainha de Malaka',
      'Permaisuri Jawa',
      'Ratu Adil',
    ],
    correctAnswer: 0,
    explanation:
      'Ratu Kalinyamat dikenal sebagai "Rainha de Japara" (Ratu dari Jepara) di kalangan Portugis. Ia memimpin Jepara sejak 1549 dan membangun kerajaan maritim yang kuat.',
  },
  {
    question: 'Laksamana Malahayati berhasil menewaskan Cornelis de Houtman dalam...',
    options: [
      'Pertempuran laut besar-besaran',
      'Strategi pengepungan armada Belanda',
      'Duel satu lawan satu',
      'Serangan mendadak di malam hari',
    ],
    correctAnswer: 2,
    explanation:
      'Laksamana Malahayati berhasil mengalahkan dan menewaskan Cornelis de Houtman dalam duel satu lawan satu. Cornelis de Houtman adalah pemimpin ekspedisi Belanda pertama yang tiba di Nusantara.',
  },
  {
    question: 'Pasukan Inong Balee yang dipimpin Laksamana Malahayati terdiri dari...',
    options: [
      'Prajurit wanita pilihan dari seluruh Nusantara',
      'Janda-janda prajurit Aceh yang gugur dalam peperangan',
      'Pelaut terlatih dari kerajaan-kerajaan sekutu',
      'Budak-budak yang dibebaskan dan dilatih bertempur',
    ],
    correctAnswer: 1,
    explanation:
      'Inong Balee adalah pasukan yang terdiri dari janda-janda prajurit Aceh yang gugur dalam peperangan. Malahayati memimpin pasukan ini setelah suaminya sendiri gugur dalam pertempuran.',
  },
]

// ============================================================
// Pahlawan Cards Component
// ============================================================

function PahlawanCards() {
  const [selectedHero, setSelectedHero] = useState<number | null>(null)
  const [learnedValues, setLearnedValues] = useState<string[]>([])

  const handleLearnValue = (valueName: string) => {
    if (!learnedValues.includes(valueName)) {
      setLearnedValues((prev) => [...prev, valueName])
    }
  }

  return (
    <div className="space-y-6">
      <h4 className="text-lg font-bold text-gray-900 flex items-center">
        <Crown className="w-5 h-5 mr-2 text-amber-600" />
        Pahlawan Daerah — Teladan Nilai Kehidupan
      </h4>
      <p className="text-sm text-gray-600">
        Klik kartu pahlawan untuk mempelajari kisah perjuangan dan nilai-nilai kehidupan yang dapat kita teladani.
      </p>

      {/* Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pahlawanData.map((hero, idx) => {
          const HeroIcon = hero.icon
          const isSelected = selectedHero === idx

          return (
            <motion.button
              key={idx}
              onClick={() => setSelectedHero(isSelected ? null : idx)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`text-left p-5 rounded-xl border-2 transition-all ${
                isSelected
                  ? `bg-gradient-to-br ${hero.color} text-white border-transparent shadow-xl`
                  : `${hero.bgColor} ${hero.borderColor} hover:shadow-md`
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-white/20' : `bg-gradient-to-br ${hero.color}`
                }`}>
                  <HeroIcon className="w-8 h-8 text-white" />
                </div>
                <h5 className={`font-bold text-base mb-1 ${isSelected ? 'text-white' : hero.textColor}`}>
                  {hero.name}
                </h5>
                <p className={`text-xs mb-2 ${isSelected ? 'text-white/80' : hero.iconColor}`}>
                  {hero.region}
                </p>
                <p className={`text-xs ${isSelected ? 'text-white/70' : `${hero.textColor} opacity-70`}`}>
                  {hero.period}
                </p>
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Selected hero detail */}
      <AnimatePresence mode="wait">
        {selectedHero !== null && (
          <motion.div
            key={selectedHero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`rounded-xl p-6 border-2 ${pahlawanData[selectedHero].bgColor} ${pahlawanData[selectedHero].borderColor}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${pahlawanData[selectedHero].color} flex items-center justify-center`}>
                {(() => {
                  const Icon = pahlawanData[selectedHero].icon
                  return <Icon className="w-7 h-7 text-white" />
                })()}
              </div>
              <div>
                <h5 className={`text-lg font-bold ${pahlawanData[selectedHero].textColor}`}>
                  {pahlawanData[selectedHero].fullName}
                </h5>
                <p className={`text-sm ${pahlawanData[selectedHero].iconColor}`}>
                  {pahlawanData[selectedHero].nickname}
                </p>
              </div>
            </div>

            <p className={`text-sm mb-4 ${pahlawanData[selectedHero].textColor} opacity-80`}>
              {pahlawanData[selectedHero].description}
            </p>

            <h6 className={`font-bold text-sm mb-3 flex items-center gap-2 ${pahlawanData[selectedHero].textColor}`}>
              <Flag className="w-4 h-4" />
              Jasa dan Perjuangan:
            </h6>
            <ul className="space-y-2 mb-6">
              {pahlawanData[selectedHero].achievements.map((item, aIdx) => (
                <motion.li
                  key={aIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: aIdx * 0.08 }}
                  className={`flex items-start gap-2 text-sm ${pahlawanData[selectedHero].textColor}`}
                >
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pahlawanData[selectedHero].color} flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                    {aIdx + 1}
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Legacy */}
            <div className={`bg-white rounded-lg p-4 border border-gray-200 mb-4`}>
              <h6 className={`font-bold text-sm mb-2 ${pahlawanData[selectedHero].textColor}`}>
                <Scroll className="w-4 h-4 inline mr-1" />
                Warisan Sejarah:
              </h6>
              <p className={`text-sm text-gray-700`}>{pahlawanData[selectedHero].legacy}</p>
            </div>

            {/* Values to learn */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h6 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-600" />
                Nilai yang Dapat Diteladani
              </h6>
              <div className="flex flex-wrap gap-2">
                {pahlawanData[selectedHero].values.map((val, vIdx) => {
                  const isLearned = learnedValues.includes(val.name)
                  return (
                    <motion.button
                      key={vIdx}
                      onClick={() => handleLearnValue(val.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title={val.desc}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isLearned
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-700'
                      }`}
                    >
                      {isLearned && <CheckCircle className="w-3 h-3 inline mr-1" />}
                      {val.name}
                    </motion.button>
                  )
                })}
              </div>
            </div>
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
        <span className="bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-amber-50 border-2 border-amber-400'
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

export default function LabSejarahLokal() {
  const [activeTab, setActiveTab] = useState<'materi' | 'pahlawan' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Crown className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Sejarah Lokal & Pahlawan Daerah</h2>
            <p className="text-amber-100">Tema IV — Pelajaran 3: Sejarah Lokal & Pahlawan Daerah</p>
          </div>
        </div>
        <p className="text-amber-100 text-sm">
          IPS Kelas 7 — Mengenal pahlawan daerah dan nilai kehidupan yang dapat diteladani
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('materi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'materi'
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('pahlawan')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'pahlawan'
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Crown className="w-4 h-4 inline mr-2" />
            Pahlawan
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
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
                    <Crown className="w-7 h-7 text-amber-600" />
                    A. Sejarah Lokal & Pahlawan Daerah
                  </h3>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-200 mb-6">
                    <p className="text-gray-700 mb-4">
                      Indonesia memiliki sejarah perjuangan yang panjang dalam mempertahankan kemerdekaan.
                      Di setiap daerah, muncul <strong>pahlawan-pahlawan lokal</strong> yang memimpin perlawanan
                      melawan penjajah. Kisah perjuangan mereka mengandung nilai-nilai kehidupan yang dapat kita
                      teladani hingga saat ini.
                    </p>
                    <p className="text-gray-700">
                      Dalam pelajaran ini, kita akan mempelajari tiga pahlawan daerah yang luar biasa:{' '}
                      <strong>Sultan Nuku</strong> dari Tidore, <strong>Ratu Kalinyamat</strong> dari Jepara, dan{' '}
                      <strong>Laksamana Malahayati</strong> dari Aceh.
                    </p>
                  </div>
                </div>

                {/* Sultan Nuku */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Crown className="w-7 h-7 text-amber-600" />
                    B. Sultan Nuku — Pemimpin Revolusi Tidore
                  </h3>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-amber-900">Sultan Muhammad al-Mabus Amiruddin</h4>
                        <p className="text-sm text-amber-700">Sultan Nuku dari Tidore, Maluku Utara</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-amber-600" />
                          <span className="text-xs text-amber-600">Revolusi Tidore 1783</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Sultan Nuku memimpin perlawanan melawan <strong>VOC Belanda</strong> yang ingin menguasai
                      perdagangan rempah-rempah di Maluku. Dengan kecerdasan diplomasi, ia berhasil menyatukan
                      masyarakat <strong>Maluku dan Papua</strong> dalam satu perjuangan.
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-amber-200 mb-4">
                      <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <Flag className="w-4 h-4" />
                        Jasa Utama:
                      </h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                          <span>Memimpin Revolusi Tidore 1783 melawan VOC Belanda</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                          <span>Menyatukan masyarakat Maluku dan Papua dalam satu perjuangan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-600" />
                          <span>Menerapkan strategi multikultur: jaringan kesultanan, agama, dan adat</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Kerja Sama', 'Keberanian', 'Diplomasi'].map((val) => (
                        <span key={val} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3 inline mr-1" />
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ratu Kalinyamat */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-7 h-7 text-orange-600" />
                    C. Ratu Kalinyamat — Penguasa Maritim Jepara
                  </h3>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 border-2 border-orange-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-orange-900">Ratu Kalinyamat</h4>
                        <p className="text-sm text-orange-700">Rainha de Japara — Penguasa Maritim 1549</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-orange-600" />
                          <span className="text-xs text-orange-600">Jepara, Jawa Tengah</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Ratu Kalinyamat menjadi penguasa Kerajaan Jepara sejak <strong>1549</strong>. Ia membangun
                      Jepara menjadi kekuatan maritim yang disegani. Portugis mengenalnya sebagai{' '}
                      <em>"Rainha de Japara"</em> (Ratu dari Jepara).
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-orange-200 mb-4">
                      <h5 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                        <Flag className="w-4 h-4" />
                        Jasa Utama:
                      </h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                          <span>Memerintah Kerajaan Jepara sejak 1549</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                          <span>Membangun sistem perdagangan maritim dengan sistem commenda</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                          <span>Mengirim armada laut melawan Portugis di Malaka</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Keteguhan Hati', 'Kepemimpinan', 'Keberanian'].map((val) => (
                        <span key={val} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3 inline mr-1" />
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Laksamana Malahayati */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Swords className="w-7 h-7 text-amber-700" />
                    D. Laksamana Malahayati — Laksamana Wanita Pertama di Dunia
                  </h3>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Swords className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-amber-900">Laksamana Keumala Hayati</h4>
                        <p className="text-sm text-amber-700">Laksamana Wanita Pertama di Dunia</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-amber-600" />
                          <span className="text-xs text-amber-600">Kesultanan Aceh</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      Laksamana Malahayati adalah <strong>laksamana (admiral) wanita pertama dalam sejarah dunia</strong>.
                      Ia memimpin pasukan <strong>Inong Balee</strong> yang terdiri dari janda-janda prajurit Aceh
                      yang gugur dalam peperangan.
                    </p>

                    <div className="bg-white rounded-lg p-4 border border-amber-200 mb-4">
                      <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <Flag className="w-4 h-4" />
                        Jasa Utama:
                      </h5>
                      <ul className="space-y-1.5 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700" />
                          <span>Laksamana wanita pertama dalam sejarah dunia</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700" />
                          <span>Memimpin pasukan Inong Balee (janda prajurit Aceh)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-700" />
                          <span>Menewaskan Cornelis de Houtman dalam duel satu lawan satu</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Keberanian', 'Keteguhan Hati', 'Kesetaraan'].map((val) => (
                        <span key={val} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                          <Star className="w-3 h-3 inline mr-1" />
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pahlawan Lainnya */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-7 h-7 text-orange-600" />
                    E. Pahlawan Perintis Lainnya
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pahlawanLainnya.map((p, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <h5 className="font-bold text-gray-900">{p.name}</h5>
                        </div>
                        <p className="text-sm text-gray-600">{p.region}</p>
                        <p className="text-xs text-gray-700 mt-1">{p.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-300">
                  <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Rangkuman
                  </h4>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Sultan Nuku</strong> memimpin Revolusi Tidore 1783 melawan VOC dan menyatukan Maluku-Papua.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Ratu Kalinyamat</strong> memimpin Jepara sebagai kekuatan maritim sejak 1549.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Laksamana Malahayati</strong> adalah laksamana wanita pertama di dunia yang menewaskan Cornelis de Houtman.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>Nilai teladan: <strong>keberanian, kerja sama, kepemimpinan, keteguhan hati, diplomasi, dan kesetaraan</strong>.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ==================== PAHLAWAN TAB ==================== */}
            {activeTab === 'pahlawan' && (
              <motion.div
                key="pahlawan"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Kartu Pahlawan Interaktif
                  </h3>
                  <p className="text-gray-600">
                    Kenali jasa dan perjuangan pahlawan daerah, lalu pelajari nilai-nilai kehidupan yang dapat diteladani.
                  </p>
                </div>
                <PahlawanCards />
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
                    Kuis Sejarah Lokal & Pahlawan Daerah
                  </h3>
                  <p className="text-gray-600">
                    Uji pemahamanmu tentang pahlawan daerah dan perjuangan mereka.
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
