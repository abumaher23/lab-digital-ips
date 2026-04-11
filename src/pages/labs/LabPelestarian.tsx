import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Info, ListTodo, Lightbulb, Wind, Droplets, Sprout, Car, TreePine, CheckCircle, XCircle, RotateCcw, Leaf } from 'lucide-react'

export default function LabPelestarian() {
  const [activeTab, setActiveTab] = useState<'materi' | 'aksi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Leaf className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Upaya Pelestarian SDA</h2>
            <p className="text-green-100">Tema II - Pelajaran 3: Upaya Pelestarian Sumber Daya Alam</p>
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
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('aksi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'aksi'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ListTodo className="w-4 h-4 inline mr-2" />
            Aksi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
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
            {activeTab === 'aksi' && (
              <motion.div key="aksi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AksiTab />
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
      <h3 className="text-2xl font-bold text-gray-900">Upaya Pelestarian Sumber Daya Alam</h3>
      <p className="text-gray-700">
        Sumber daya alam (SDA) adalah semua kekayaan alam yang dapat dimanfaatkan untuk memenuhi kebutuhan manusia. Pelestarian SDA sangat penting agar dapat berkelanjutan untuk generasi mendatang.
      </p>

      {/* Pelestarian Udara */}
      <div className="bg-sky-50 rounded-xl p-5 border border-sky-200">
        <div className="flex items-start space-x-3">
          <Wind className="w-7 h-7 text-sky-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-sky-900 mb-2">A. Pelestarian Udara</h4>
            <p className="text-sm text-sky-800 leading-relaxed">
              Udara bersih sangat penting bagi kehidupan. Upaya pelestarian udara bertujuan mengurangi pencemaran dan menjaga kualitas udara tetap baik.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-sky-100 rounded-lg p-3">
                <h5 className="font-bold text-sky-800 text-sm mb-1">Upaya Pelestarian:</h5>
                <ul className="text-sm text-sky-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Menanam pohon (reboisasi)</strong> -- Pohon menyerap CO&#8322; dan menghasilkan oksigen melalui fotosintesis</li>
                  <li>&#8226; <strong>Menggunakan transportasi umum</strong> -- Mengurangi emisi kendaraan bermotor di jalan raya</li>
                  <li>&#8226; Menggunakan sepeda atau berjalan kaki untuk jarak dekat</li>
                  <li>&#8226; Tidak membakar sampah dan hutan secara sembarangan</li>
                </ul>
              </div>
            </div>

            {/* Info: Transportasi Umum */}
            <div className="mt-4 bg-teal-50 border border-teal-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Car className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-teal-800 mb-1">Mengapa Transportasi Umum?</h5>
                  <p className="text-sm text-teal-700">
                    Satu bus dapat menggantikan <strong>30-40 kendaraan pribadi</strong>. Dengan menggunakan transportasi umum, kita bisa mengurangi emisi karbon hingga <strong>70%</strong> per orang dibandingkan menggunakan kendaraan pribadi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pelestarian Air */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Droplets className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">B. Pelestarian Air</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Air bersih merupakan kebutuhan vital. Pelestarian sumber daya air meliputi menjaga kualitas dan kuantitas air agar tetap tersedia.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-blue-100 rounded-lg p-3">
                <h5 className="font-bold text-blue-800 text-sm mb-1">Upaya Pelestarian:</h5>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Membuat sumur resapan</strong> -- Membantu air hujan meresap ke tanah sehingga cadangan air tanah terjaga</li>
                  <li>&#8226; <strong>Program Kali Bersih (Prokasih)</strong> -- Program pemerintah untuk membersihkan dan melestarikan sungai-sungai di Indonesia</li>
                  <li>&#8226; Menghemat penggunaan air di rumah tangga</li>
                  <li>&#8226; Tidak membuang sampah ke sungai atau sumber air</li>
                </ul>
              </div>
            </div>

            {/* Info: Sumur Resapan */}
            <div className="mt-4 bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-cyan-800 mb-1">Fakta: Sumur Resapan</h5>
                  <p className="text-sm text-cyan-700">
                    Sumur resapan membantu <strong>mencegah banjir</strong> dengan mengurangi aliran air permukaan, sekaligus <strong>menjaga ketersediaan air tanah</strong> di musim kemarau. Satu sumur resapan dapat menampung hingga 1-2 meter kubik air hujan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pelestarian Tanah */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start space-x-3">
          <Sprout className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">C. Pelestarian Tanah</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Tanah yang sehat sangat penting untuk pertanian dan ekosistem. Pelestarian tanah berarti menjaga kesuburan dan mencegah kerusakan.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-amber-100 rounded-lg p-3">
                <h5 className="font-bold text-amber-800 text-sm mb-1">Upaya Pelestarian:</h5>
                <ul className="text-sm text-amber-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Menggunakan pupuk organik</strong> -- Pupuk dari bahan alami (kompos, kandang) lebih ramah lingkungan dibanding pupuk kimia</li>
                  <li>&#8226; <strong>Bioremediasi</strong> -- Menggunakan mikroorganisme (bakteri, jamur) untuk membersihkan tanah yang tercemar limbah berbahaya</li>
                  <li>&#8226; Melakukan rotasi tanaman (crop rotation) untuk menjaga kesuburan tanah</li>
                  <li>&#8226; Mengurangi penggunaan pestisida kimia</li>
                </ul>
              </div>
            </div>

            {/* Info: Bioremediasi */}
            <div className="mt-4 bg-lime-50 border border-lime-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-lime-800 mb-1">Apa itu Bioremediasi?</h5>
                  <p className="text-sm text-lime-700">
                    <strong>Bioremediasi</strong> adalah proses pembersihan lingkungan tercemar menggunakan mikroorganisme seperti bakteri <em>Pseudomonas</em> dan jamur yang mampu mengurai zat-zat berbahaya (minyak, logam berat, pestisida) menjadi zat yang tidak berbahaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-start space-x-3">
          <TreePine className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green-900 mb-2">Prinsip Pembangunan Berkelanjutan</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              Pembangunan berkelanjutan adalah pembangunan yang memenuhi kebutuhan masa kini tanpa mengorbankan kemampuan generasi mendatang untuk memenuhi kebutuhan mereka.
            </p>
            <ul className="text-sm text-green-800 mt-2 space-y-1">
              <li>&#8226; <strong>Ekologis</strong> -- Menjaga kelestarian lingkungan</li>
              <li>&#8226; <strong>Ekonomis</strong> -- Mendorong pertumbuhan ekonomi yang ramah lingkungan</li>
              <li>&#8226; <strong>Sosial</strong> -- Melibatkan seluruh masyarakat dalam pelestarian</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== AKSI TAB ====================
function AksiTab() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const aksiItems = [
    {
      id: 0,
      category: 'Pelestarian Udara',
      icon: <Wind className="w-5 h-5" />,
      color: 'sky',
      actions: [
        'Menanam pohon di halaman rumah atau sekolah',
        'Menggunakan transportasi umum atau sepeda ke sekolah',
        'Mengingatkan keluarga untuk mematikan mesin kendaraan saat tidak digunakan',
        'Tidak membakar sampah di lingkungan rumah',
      ],
    },
    {
      id: 1,
      category: 'Pelestarian Air',
      icon: <Droplets className="w-5 h-5" />,
      color: 'blue',
      actions: [
        'Menghemat penggunaan air di rumah (tidak membiarkan keran mengalir)',
        'Tidak membuang sampah ke sungai atau selokan',
        'Membuat sumur resapan atau biopori di halaman rumah',
        'Ikut serta dalam kegiatan bersih sungai di lingkungan',
      ],
    },
    {
      id: 2,
      category: 'Pelestarian Tanah',
      icon: <Sprout className="w-5 h-5" />,
      color: 'amber',
      actions: [
        'Mengurangi penggunaan plastik sekali pakai',
        'Menggunakan pupuk organik/kompos untuk tanaman di rumah',
        'Memisahkan sampah organik dan anorganik',
        'Mendaur ulang barang bekas menjadi barang berguna',
      ],
    },
  ]

  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; checkBg: string }> = {
    sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', badge: 'bg-sky-600', checkBg: 'bg-sky-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-600', checkBg: 'bg-blue-100' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-600', checkBg: 'bg-amber-100' },
  }

  const totalActions = aksiItems.reduce((acc, cat) => acc + cat.actions.length, 0)
  const checkedCount = checkedItems.size
  const progressPercent = Math.round((checkedCount / totalActions) * 100)

  const toggleItem = (globalIndex: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(globalIndex)) {
        next.delete(globalIndex)
      } else {
        next.add(globalIndex)
      }
      return next
    })
  }

  const resetAll = () => {
    setCheckedItems(new Set())
  }

  let globalIndex = 0

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-bold text-green-900 mb-2 flex items-center">
          <ListTodo className="w-5 h-5 mr-2" />
          Rencana Aksi Hijau Keluarga
        </h4>
        <p className="text-sm text-green-800">
          Centang setiap aksi yang sudah kamu dan keluarga lakukan untuk melestarikan sumber daya alam. Lihat seberapa hijau keluargamu!
        </p>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white rounded-xl p-4 border-2 border-green-200 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress Aksi Hijau
          </span>
          <span className="text-lg font-bold text-green-700">
            {checkedCount} / {totalActions}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <motion.div
            className="h-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-sm text-gray-600 text-center">
          {progressPercent === 0 && 'Yuk mulai aksi hijau untuk lingkungan!'}
          {progressPercent > 0 && progressPercent < 25 && 'Awal yang bagus! Terus lanjutkan.'}
          {progressPercent >= 25 && progressPercent < 50 && 'Semangat! Sudah banyak yang dilakukan.'}
          {progressPercent >= 50 && progressPercent < 75 && 'Hebat! Keluargamu cukup ramah lingkungan.'}
          {progressPercent >= 75 && progressPercent < 100 && 'Luar biasa! Hampir sempurna!'}
          {progressPercent === 100 && 'Sempurna! Keluargamu adalah Pahlawan Lingkungan!'}
        </p>
        {progressPercent === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-3 bg-green-100 rounded-lg p-3 text-center"
          >
            <span className="text-2xl">&#127793;</span>
            <p className="font-bold text-green-800 mt-1">Pahlawan Lingkungan!</p>
            <p className="text-sm text-green-700">Keluargamu sudah melakukan semua aksi hijau. Pertahankan!</p>
          </motion.div>
        )}
        <button
          onClick={resetAll}
          className="mt-3 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Semua</span>
        </button>
      </div>

      {/* Checklist Categories */}
      {aksiItems.map((category) => {
        const colors = colorMap[category.color]
        return (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: category.id * 0.1 }}
            className={`${colors.bg} rounded-xl p-5 border ${colors.border}`}
          >
            <div className="flex items-center space-x-2 mb-3">
              <span className={colors.text}>{category.icon}</span>
              <h5 className={`font-bold text-lg ${colors.text}`}>{category.category}</h5>
              <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full text-white ${colors.badge}`}>
                {category.actions.filter((_, actionIdx) => {
                  const idx = globalIndex + actionIdx
                  return checkedItems.has(idx)
                }).length}/{category.actions.length}
              </span>
            </div>
            <div className="space-y-2">
              {category.actions.map((action, actionIdx) => {
                const idx = globalIndex + actionIdx
                const isChecked = checkedItems.has(idx)
                return (
                  <motion.button
                    key={idx}
                    onClick={() => toggleItem(idx)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all text-left ${
                      isChecked
                        ? 'bg-green-100 border-green-400'
                        : 'bg-white border-gray-200 hover:border-green-300'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {isChecked && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`text-sm ${isChecked ? 'text-green-800 line-through' : 'text-gray-700'}`}>
                      {action}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Upaya Pelestarian SDA</h3>

      <QuizCard
        question="Mengapa menanam pohon (reboisasi) dapat membantu melestarikan udara?"
        options={[
          'Karena pohon menghasilkan karbon dioksida',
          'Karena pohon menyerap CO₂ dan menghasilkan oksigen melalui fotosintesis',
          'Karena pohon menghalangi angin kencang',
          'Karena pohon membuat udara menjadi dingin',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Apa manfaat utama menggunakan transportasi umum dibandingkan kendaraan pribadi?"
        options={[
          'Transportasi umum lebih cepat sampai tujuan',
          'Transportasi umum lebih mahal sehingga terlihat mewah',
          'Mengurangi emisi karbon secara signifikan karena satu kendaraan mengangkut banyak orang',
          'Transportasi umum tidak menghasilkan polusi sama sekali',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Bagaimana bioremediasi membantu membersihkan tanah yang tercemar?"
        options={[
          'Bioremediasi membakar limbah berbahaya di dalam tanah',
          'Bioremediasi menggunakan mikroorganisme untuk menguraikan zat-zat berbahaya menjadi zat yang tidak berbahaya',
          'Bioremediasi memindahkan tanah tercemar ke tempat lain',
          'Bioremediasi menutup tanah tercemar dengan lapisan beton',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Apa fungsi sumur resapan dalam pelestarian air?"
        options={[
          'Sumur resapan mengalirkan air hujan langsung ke laut',
          'Sumur resapan membantu air hujan meresap ke tanah sehingga cadangan air tanah terjaga dan mencegah banjir',
          'Sumur resapan mengolah air limbah menjadi air bersih',
          'Sumur resapan menangkap ikan di sungai saat hujan',
        ]}
        correctAnswer={1}
      />
    </motion.div>
  )
}

// ==================== QUIZ CARD COMPONENT ====================
function QuizCard({ question, options, correctAnswer }: { question: string; options: string[]; correctAnswer: number }) {
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
                  : 'bg-green-100 border-2 border-green-500'
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-lg mb-4 flex items-center space-x-2 ${
            selected === correctAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {selected === correctAnswer ? (
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          ) : (
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          )}
          <span className="font-medium">
            {selected === correctAnswer
              ? 'Jawaban Benar!'
              : `Jawaban Belum Tepat. Jawaban yang benar: ${String.fromCharCode(65 + correctAnswer)}`}
          </span>
        </motion.div>
      )}

      <div className="flex space-x-2">
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cek Jawaban
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi</span>
          </button>
        )}
      </div>
    </div>
  )
}
