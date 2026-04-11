import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Info, Search, Lightbulb, Wind, Droplets, Trash2, Factory, Car, TreePine, Fish, CheckCircle, XCircle, RotateCcw, AlertTriangle, FlaskConical } from 'lucide-react'

export default function LabPencemaran() {
  const [activeTab, setActiveTab] = useState<'materi' | 'identifikasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <AlertTriangle className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Pencemaran Lingkungan</h2>
            <p className="text-red-100">Tema II - Pelajaran 2: Pencemaran Lingkungan dan Dampaknya</p>
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
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('identifikasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'identifikasi'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            Identifikasi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
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
            {activeTab === 'identifikasi' && (
              <motion.div key="identifikasi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <IdentifikasiTab />
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
      <h3 className="text-2xl font-bold text-gray-900">Pencemaran Lingkungan dan Dampaknya</h3>
      <p className="text-gray-700">
        Pencemaran lingkungan adalah masuknya zat-zat berbahaya ke dalam lingkungan yang mengganggu keseimbangan ekosistem dan kesehatan makhluk hidup.
      </p>

      {/* Pencemaran Udara */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
        <div className="flex items-start space-x-3">
          <Wind className="w-7 h-7 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">A. Pencemaran Udara</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Pencemaran udara terjadi ketika gas-gas berbahaya dilepaskan ke atmosfer sehingga mengubah komposisi udara alami.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-gray-100 rounded-lg p-3">
                <h5 className="font-bold text-gray-800 text-sm">Sumber Pencemaran:</h5>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>&#8226; Emisi kendaraan bermotor (CO, CO&#8322;, NO&#8323;)</li>
                  <li>&#8226; Asap pabrik dan industri</li>
                  <li>&#8226; Pembakaran hutan dan lahan</li>
                </ul>
              </div>
            </div>

            {/* Efek Rumah Kaca */}
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h5 className="font-bold text-orange-800 mb-2 flex items-center space-x-2">
                <FlaskConical className="w-4 h-4" />
                <span>Efek Rumah Kaca</span>
              </h5>
              <div className="text-sm text-orange-700 space-y-1">
                <div className="flex items-center space-x-2 bg-orange-100 rounded p-2">
                  <Factory className="w-4 h-4 text-orange-600" />
                  <span className="font-medium">Emisi CO&#8322; meningkat</span>
                </div>
                <div className="text-center text-orange-400">&#8595;</div>
                <div className="flex items-center space-x-2 bg-orange-100 rounded p-2">
                  <span className="font-medium">CO&#8322; memerangkap panas di atmosfer</span>
                </div>
                <div className="text-center text-orange-400">&#8595;</div>
                <div className="flex items-center space-x-2 bg-red-100 rounded p-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="font-bold">Pemanasan Global</span>
                </div>
              </div>
            </div>

            {/* Dampak */}
            <div className="mt-3 bg-red-50 rounded-lg p-3 border border-red-200">
              <h5 className="font-bold text-red-800 text-sm mb-1">Dampak Kesehatan:</h5>
              <p className="text-sm text-red-700">
                Asma, bronkitis, ISPA, penurunan fungsi paru-paru, dan gangguan pernapasan lainnya. Jarak pandang berkurang meningkatkan risiko kecelakaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pencemaran Air */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Droplets className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">B. Pencemaran Air</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Pencemaran air terjadi ketika zat-zat berbahaya masuk ke sumber air (sungai, danau, laut) sehingga mengganggu kualitas air dan ekosistem perairan.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-blue-100 rounded-lg p-3">
                <h5 className="font-bold text-blue-800 text-sm">Sumber Pencemaran:</h5>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>&#8226; Limbah industri yang dibuang langsung ke sungai</li>
                  <li>&#8226; Limbah rumah tangga (detergen, sampah)</li>
                  <li>&#8226; Pestisida dari pertanian yang terbawa aliran air</li>
                </ul>
              </div>
            </div>

            {/* Eutrofikasi */}
            <div className="mt-4 bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <h5 className="font-bold text-cyan-800 mb-2 flex items-center space-x-2">
                <Fish className="w-4 h-4" />
                <span>Eutrofikasi & Blooming Algae</span>
              </h5>
              <div className="text-sm text-cyan-700 space-y-1">
                <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                  <Droplets className="w-4 h-4 text-cyan-600" />
                  <span className="font-medium">Nutrisi berlebih (nitrat, fosfat) masuk ke air</span>
                </div>
                <div className="text-center text-cyan-400">&#8595;</div>
                <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                  <span className="font-medium"><em>Blooming algae</em> (ledakan populasi alga) menutupi permukaan air</span>
                </div>
                <div className="text-center text-cyan-400">&#8595;</div>
                <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                  <span className="font-medium">Sinar matahari terhambat &#8594; fotosintesis fitoplankton terganggu</span>
                </div>
                <div className="text-center text-cyan-400">&#8595;</div>
                <div className="flex items-center space-x-2 bg-red-100 rounded p-2">
                  <Fish className="w-4 h-4 text-red-600" />
                  <span className="font-bold">Oksigen turun &#8594; ikan dan organisme air mati</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pencemaran Tanah */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start space-x-3">
          <Trash2 className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">C. Pencemaran Tanah</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Pencemaran tanah terjadi ketika zat-zat berbahaya masuk ke dalam tanah, mengganggu kesuburan dan mencemari rantai makanan.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-amber-100 rounded-lg p-3">
                <h5 className="font-bold text-amber-800 text-sm">Sumber Pencemaran:</h5>
                <ul className="text-sm text-amber-700 mt-1 space-y-1">
                  <li>&#8226; Sampah plastik yang sulit terurai (hingga 450 tahun)</li>
                  <li>&#8226; Pestisida dan pupuk kimia berlebihan</li>
                  <li>&#8226; Limbah industri dan pertambangan</li>
                </ul>
              </div>
            </div>

            {/* Info: Pestisida */}
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-red-800 mb-1">Fakta Penting: Pestisida</h5>
                  <p className="text-sm text-red-700">
                    Sekitar <strong>80% pestisida</strong> yang disemprotkan pada tanaman justru <strong>jatuh ke tanah</strong> dan tidak mengenai target hama.
                    Pestisida ini mencemari tanah, meresap ke air tanah, dan masuk ke dalam rantai makanan.
                  </p>
                </div>
              </div>
            </div>

            {/* Dampak */}
            <div className="mt-3 bg-amber-100 rounded-lg p-3 border border-amber-200">
              <h5 className="font-bold text-amber-800 text-sm mb-1">Dampak Pencemaran Tanah:</h5>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>&#8226; Tanah kehilangan kesuburan</li>
                <li>&#8226; Mikroorganisme tanah terganggu</li>
                <li>&#8226; Zat berbahaya masuk ke tanaman &#8594; rantai makanan</li>
                <li>&#8226; Sampah plastik mencemari ekosistem jangka panjang</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-start space-x-3">
          <TreePine className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green-900 mb-2">Upaya Pelestarian Lingkungan</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>&#8226; <strong>Reduce, Reuse, Recycle</strong> (Mengurangi, Menggunakan ulang, Mendaur ulang)</li>
              <li>&#8226; Mengurangi penggunaan plastik sekali pakai</li>
              <li>&#8226; Menggunakan transportasi umum untuk mengurangi emisi</li>
              <li>&#8226; Pertanian organik (mengurangi pestisida kimia)</li>
              <li>&#8226; Penanaman pohon (reboisasi) untuk menyerap CO&#8322;</li>
              <li>&#8226; Pengolahan limbah sebelum dibuang ke lingkungan</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== IDENTIFIKASI TAB ====================
function IdentifikasiTab() {
  const [foundSources, setFoundSources] = useState<Set<number>>(new Set())
  const [showHint, setShowHint] = useState(false)

  const pollutionSources = [
    { id: 0, name: 'Pabrik dengan Asap', x: 15, y: 10, icon: <Factory className="w-8 h-8" />, type: 'Udara', desc: 'Asap pabrik melepaskan CO₂, SOₓ, dan partikel berbahaya ke atmosfer.' },
    { id: 1, name: 'Kendaraan Bermotor', x: 55, y: 65, icon: <Car className="w-7 h-7" />, type: 'Udara', desc: 'Emisi kendaraan menghasilkan CO, NOₓ, dan gas rumah kaca.' },
    { id: 2, name: 'Limbah Cair ke Sungai', x: 75, y: 40, icon: <Droplets className="w-7 h-7" />, type: 'Air', desc: 'Limbah industri yang dibuang ke sungai mencemari air dan membunuh organisme air.' },
    { id: 3, name: 'Sampah Plastik', x: 35, y: 55, icon: <Trash2 className="w-7 h-7" />, type: 'Tanah', desc: 'Plastik membutuhkan hingga 450 tahun untuk terurai dan mencemari tanah.' },
    { id: 4, name: 'Penggunaan Pestisida', x: 85, y: 75, icon: <FlaskConical className="w-7 h-7" />, type: 'Tanah', desc: '80% pestisida jatuh ke tanah dan mencemari ekosistem.' },
    { id: 5, name: 'Penebangan Hutan', x: 10, y: 70, icon: <TreePine className="w-7 h-7" />, type: 'Udara', desc: 'Deforestasi mengurangi penyerap CO₂ alami dan mengganggu ekosistem.' },
    { id: 6, name: 'Eutrofikasi (Blooming Algae)', x: 50, y: 25, icon: <Fish className="w-7 h-7" />, type: 'Air', desc: 'Nutrisi berlebih menyebabkan ledakan alga yang menghabiskan oksigen air.' },
  ]

  const handleSourceClick = (id: number) => {
    setFoundSources((prev) => new Set(prev).add(id))
  }

  const allFound = foundSources.size === pollutionSources.length

  const typeColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    Udara: { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-800', badge: 'bg-gray-600' },
    Air: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-800', badge: 'bg-blue-600' },
    Tanah: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-800', badge: 'bg-amber-600' },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-red-50 rounded-lg p-4">
        <h4 className="font-bold text-red-900 mb-2 flex items-center">
          <Search className="w-5 h-5 mr-2" />
          Permainan Identifikasi Sumber Pencemaran
        </h4>
        <p className="text-sm text-red-800">
          <strong>Instruksi:</strong> Temukan dan klik semua sumber pencemaran yang tersembunyi di dalam pemandangan di bawah ini. Ada <strong>{pollutionSources.length} sumber pencemaran</strong> yang harus kamu temukan!
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">
          Ditemukan: <span className="text-red-600 font-bold">{foundSources.size}</span> / {pollutionSources.length}
        </p>
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-sm px-3 py-1 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          {showHint ? 'Sembunyikan Petunjuk' : 'Tampilkan Petunjuk'}
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all"
          initial={{ width: 0 }}
          animate={{ width: `${(foundSources.size / pollutionSources.length) * 100}%` }}
        />
      </div>

      {/* Scene */}
      <div className="relative bg-gradient-to-b from-sky-200 via-green-200 to-amber-200 rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg" style={{ height: '420px' }}>
        {/* Background elements */}
        {/* Sky */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-sky-300 to-sky-100" />
        {/* Mountains */}
        <div className="absolute top-8 left-8 w-24 h-16 bg-green-700 rounded-full opacity-80" />
        <div className="absolute top-4 left-28 w-20 h-14 bg-green-600 rounded-full opacity-70" />
        {/* River */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-3xl opacity-70" />
        {/* Ground */}
        <div className="absolute bottom-16 inset-x-0 h-24 bg-gradient-to-b from-green-300 to-green-400" />
        {/* Trees */}
        <div className="absolute top-20 left-44 w-10 h-14 bg-green-800 rounded-full opacity-60" />
        <div className="absolute top-16 right-20 w-12 h-16 bg-green-800 rounded-full opacity-50" />

        {/* Hint indicators */}
        {showHint && !allFound && (
          <>
            {pollutionSources
              .filter((s) => !foundSources.has(s.id))
              .map((source) => (
                <motion.div
                  key={`hint-${source.id}`}
                  className="absolute w-12 h-12 border-2 border-dashed border-yellow-500 rounded-full animate-pulse"
                  style={{
                    left: `${source.x}%`,
                    top: `${source.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
          </>
        )}

        {/* Pollution source buttons */}
        {pollutionSources.map((source) => {
          const isFound = foundSources.has(source.id)
          const colors = typeColors[source.type]

          return (
            <motion.button
              key={source.id}
              initial={{ scale: 0 }}
              animate={{ scale: isFound ? 0.9 : 1 }}
              whileHover={!isFound ? { scale: 1.15 } : {}}
              whileTap={!isFound ? { scale: 0.9 } : {}}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                isFound
                  ? 'opacity-80'
                  : 'animate-pulse cursor-pointer'
              }`}
              style={{
                left: `${source.x}%`,
                top: `${source.y}%`,
              }}
              onClick={() => !isFound && handleSourceClick(source.id)}
              disabled={isFound}
            >
              <div
                className={`rounded-full p-3 shadow-lg border-2 ${
                  isFound
                    ? `${colors.bg} ${colors.border}`
                    : 'bg-red-500 border-red-400 text-white'
                }`}
              >
                {isFound ? (
                  <CheckCircle className="w-7 h-7 text-green-600" />
                ) : (
                  <div className="text-white">{source.icon}</div>
                )}
              </div>

              {/* Found label */}
              {isFound && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${colors.badge}`}>
                    {source.type}
                  </span>
                </motion.div>
              )}
            </motion.button>
          )
        })}

        {/* All found celebration */}
        {allFound && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-6 text-center shadow-2xl max-w-sm mx-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Hebat! Semua Ditemukan!</h4>
              <p className="text-sm text-gray-600 mb-4">
                Kamu berhasil mengidentifikasi semua {pollutionSources.length} sumber pencemaran lingkungan.
              </p>
              <button
                onClick={() => {
                  setFoundSources(new Set())
                  setShowHint(false)
                }}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Main Lagi</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Found sources list */}
      {foundSources.size > 0 && (
        <div className="space-y-2">
          <h5 className="font-bold text-gray-800">Sumber Pencemaran yang Ditemukan:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pollutionSources
              .filter((s) => foundSources.has(s.id))
              .map((source) => {
                const colors = typeColors[source.type]
                return (
                  <motion.div
                    key={source.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`${colors.bg} rounded-lg p-3 border ${colors.border}`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className={`font-bold text-sm ${colors.text}`}>{source.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{source.desc}</p>
                  </motion.div>
                )
              })}
          </div>
        </div>
      )}
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Pencemaran Lingkungan</h3>

      <QuizCard
        question="Gas apakah yang paling berperan dalam terjadinya efek rumah kaca?"
        options={[
          'Oksigen (O₂)',
          'Nitrogen (N₂)',
          'Karbon dioksida (CO₂)',
          'Hidrogen (H₂)',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Apa yang terjadi pada ekosistem air ketika eutrofikasi berlangsung?"
        options={[
          'Populasi ikan meningkat pesat karena banyak nutrisi',
          'Ledakan alga (blooming algae) menutupi permukaan air sehingga oksigen di air menurun dan organisme air mati',
          'Air menjadi lebih jernih dan bersih',
          'Tumbuhan air tumbuh lebih subur tanpa dampak negatif',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Sekitar berapa persen pestisida yang disemprotkan pada tanaman justru jatuh ke tanah?"
        options={[
          'Sekitar 20%',
          'Sekitar 50%',
          'Sekitar 60%',
          'Sekitar 80%',
        ]}
        correctAnswer={3}
      />

      <QuizCard
        question="Manakah upaya yang paling tepat untuk mengurangi pencemaran tanah akibat plastik?"
        options={[
          'Membakar sampah plastik di halaman rumah',
          'Membuang sampah plastik ke sungai agar terbawa arus',
          'Menerapkan prinsip Reduce, Reuse, Recycle (3R) untuk mengurangi penggunaan plastik',
          'Menimbun plastik di dalam tanah agar tidak terlihat',
        ]}
        correctAnswer={2}
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
                  : 'bg-red-100 border-2 border-red-400'
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
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
