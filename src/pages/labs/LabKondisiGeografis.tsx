import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Info, Compass, Lightbulb, Mountain, Waves, Sprout, Building, MapPin, Users, Home, Anchor } from 'lucide-react'

export default function LabKondisiGeografis() {
  const [activeTab, setActiveTab] = useState<'materi' | 'praktik' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Mountain className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Kondisi Geografis</h2>
            <p className="text-blue-100">Tema I - Pelajaran 2: Kondisi Geografis dan Keruangan Indonesia</p>
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
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('praktik')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'praktik'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Compass className="w-4 h-4 inline mr-2" />
            Praktik
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Kuis
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'praktik' && <PraktikTab />}
          {activeTab === 'kuis' && <KuisTab />}
        </div>
      </div>
    </div>
  )
}

// ==================== MATERI TAB ====================
function MateriTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Kondisi Geografis dan Keruangan Indonesia</h3>
      <p className="text-gray-700">
        Indonesia memiliki karakteristik keruangan dan bentuk muka bumi yang sangat beragam. Setiap wilayah memiliki potensi sumber daya yang berbeda-beda.
      </p>

      {/* Bentuk-Bentuk Muka Bumi */}
      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-blue-600" />
          A. Bentuk-Bentuk Muka Bumi Indonesia
        </h4>
        <p className="text-gray-700 mb-4">
          Berdasarkan kondisi geografisnya, wilayah Indonesia terdiri atas berbagai bentuk muka bumi utama.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Dataran Rendah */}
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
            <div className="flex items-center space-x-2 mb-2">
              <Building className="w-5 h-5 text-emerald-700" />
              <h5 className="font-bold text-emerald-900">Dataran Rendah</h5>
            </div>
            <p className="text-sm text-emerald-700 mb-2">Ketinggian: 0--200 meter di atas permukaan laut</p>
            <p className="text-sm text-emerald-800">Biasanya menjadi pusat pemukiman dan perkotaan, perdagangan, serta industri karena aksesibilitas yang mudah.</p>
            <p className="text-xs text-emerald-600 mt-2">Contoh: Jakarta, Surabaya, Semarang</p>
          </div>

          {/* Dataran Tinggi */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center space-x-2 mb-2">
              <Mountain className="w-5 h-5 text-amber-700" />
              <h5 className="font-bold text-amber-900">Dataran Tinggi</h5>
            </div>
            <p className="text-sm text-amber-700 mb-2">Ketinggian: di atas 700 meter di atas permukaan laut</p>
            <p className="text-sm text-amber-800">Cocok untuk perkebunan (sayur, kopi, teh) dan wisata dataran tinggi. Udara sejuk dan tanah subur.</p>
            <p className="text-xs text-amber-600 mt-2">Contoh: Dataran Tinggi Dieng, "Nepal van Java" Magelang</p>
          </div>

          {/* Pegunungan & Gunung */}
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-center space-x-2 mb-2">
              <Mountain className="w-5 h-5 text-red-700" />
              <h5 className="font-bold text-red-900">Pegunungan & Gunung</h5>
            </div>
            <p className="text-sm text-red-700 mb-2">Rangkaian gunung yang memanjang, banyak gunung api aktif</p>
            <p className="text-sm text-red-800">Indonesia memiliki banyak gunung api aktif karena letak geologisnya. Tanah di sekitarnya sangat subur.</p>
            <p className="text-xs text-red-600 mt-2">Contoh: Gunung Merapi, Gunung Bromo, Gunung Krakatau</p>
          </div>

          {/* Daerah Pesisir & Pantai */}
          <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
            <div className="flex items-center space-x-2 mb-2">
              <Waves className="w-5 h-5 text-cyan-700" />
              <h5 className="font-bold text-cyan-900">Daerah Pesisir & Pantai</h5>
            </div>
            <p className="text-sm text-cyan-700 mb-2">Wilayah perbatasan antara daratan dan lautan</p>
            <p className="text-sm text-cyan-800">Cocok untuk perikanan, tambak, dan pariwisata bahari.</p>
            <p className="text-xs text-cyan-600 mt-2">Contoh: Pantai Bali, Kepulauan Seribu, Raja Ampat</p>
          </div>
        </div>
      </div>

      {/* Pengaruh terhadap Kehidupan */}
      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
          <Users className="w-5 h-5 mr-2 text-green-600" />
          B. Pengaruh Kondisi Geografis terhadap Kehidupan
        </h4>
        <p className="text-gray-700 mb-4">
          Karakteristik muka bumi yang berbeda secara langsung memengaruhi cara manusia beradaptasi dan memenuhi kebutuhan hidupnya.
        </p>

        {/* Mata Pencaharian */}
        <h5 className="font-bold text-gray-800 mb-3">1. Mata Pencaharian Penduduk</h5>
        <div className="space-y-3 mb-6">
          <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
            <div className="flex items-start space-x-3">
              <Anchor className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-cyan-900">Penduduk Pesisir</h5>
                <p className="text-sm text-cyan-800">Dominan bekerja sebagai nelayan, pembudi daya hasil laut, atau di sektor pariwisata bahari.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
            <div className="flex items-start space-x-3">
              <Sprout className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-emerald-900">Penduduk Dataran Tinggi</h5>
                <p className="text-sm text-emerald-800">Mayoritas bekerja sebagai petani perkebunan (sayur, kopi, teh) atau di sektor kehutanan.</p>
              </div>
            </div>
          </div>
          <div className="bg-violet-50 rounded-lg p-4 border-l-4 border-violet-500">
            <div className="flex items-start space-x-3">
              <Building className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-violet-900">Penduduk Dataran Rendah</h5>
                <p className="text-sm text-violet-800">Banyak bekerja di sektor perdagangan, industri, dan jasa karena aksesibilitas yang lebih mudah.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pola Pemukiman dan Budaya */}
        <h5 className="font-bold text-gray-800 mb-3">2. Pola Pemukiman dan Budaya</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Home className="w-5 h-5 text-blue-600" />
              <h5 className="font-bold text-blue-800">Rumah di Pegunungan</h5>
            </div>
            <p className="text-sm text-blue-700">
              Penduduk di daerah pegunungan yang bersuhu rendah cenderung membangun rumah dengan ventilasi yang diatur agar suhu ruangan tetap hangat. Pakaian yang digunakan juga lebih tebal.
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center space-x-2 mb-2">
              <Home className="w-5 h-5 text-orange-600" />
              <h5 className="font-bold text-orange-800">Rumah di Pesisir</h5>
            </div>
            <p className="text-sm text-orange-700">
              Rumah di daerah pesisir cenderung lebih terbuka untuk sirkulasi udara karena suhu yang panas. Arsitektur menyesuaikan dengan kondisi cuaca laut.
            </p>
          </div>
        </div>
      </div>

      {/* Toponimi */}
      <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 mb-2">Tahukah Kamu? -- Toponimi</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              <strong>Toponimi</strong> adalah studi tentang penamaan tempat berdasarkan kenampakan fisik atau sejarahnya.
              Banyak nama daerah di Indonesia diambil dari kondisi geografis sekitarnya.
            </p>
            <p className="text-xs text-indigo-600 mt-2">
              Contoh: "Bukittinggi" merujuk pada dataran tinggi, "Tanjung Pinang" dari tanjung di pesisir, "Puncak" dari daerah pegunungan.
            </p>
          </div>
        </div>
      </div>

      {/* Keunikan Ruang */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-start space-x-3">
          <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-green-900 mb-2">Keunikan Ruang</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              Karena perbedaan bentuk muka bumi tersebut, setiap ruang di Indonesia memiliki "identitas" tersendiri.
              Misalnya, wilayah yang berada dekat dengan gunung berapi biasanya memiliki tanah yang sangat subur karena mengandung banyak unsur hara.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== PRAKTIK TAB ====================
function PraktikTab() {
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null)
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({})

  const regions = [
    {
      id: 0,
      name: 'Masyarakat Pesisir Pantai Selatan, Yogyakarta',
      icon: <Waves className="w-8 h-8" />,
      iconColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-300',
      terrain: 'Pesisir & Pantai',
      terrainDesc: 'Wilayah perbatasan daratan dan lautan dengan gelombang laut yang cukup besar.',
      occupations: ['Nelayan tradisional', 'Pembudi daya tambak garam', 'Pedagang hasil laut & pemandu wisata bahari'],
      reasoning: 'Laut menyediakan sumber ikan dan hasil laut. Pantai juga menjadi tujuan wisata yang membuka lapangan kerja di sektor pariwisata.',
    },
    {
      id: 1,
      name: 'Warga Dataran Tinggi Dieng, Jawa Tengah',
      icon: <Mountain className="w-8 h-8" />,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-300',
      terrain: 'Dataran Tinggi',
      terrainDesc: 'Wilayah datar pada ketinggian di atas 700 mdpl dengan udara sejuk dan tanah subur.',
      occupations: ['Petani kentang dan sayuran dataran tinggi', 'Petani teh dan kopi', 'Pengelola wisata alam Dieng'],
      reasoning: 'Suhu dingin dan tanah vulkanik yang subur sangat cocok untuk pertanian sayuran dan perkebunan teh/kopi.',
    },
    {
      id: 2,
      name: 'Penduduk Kawasan Industri Cikarang, Jawa Barat',
      icon: <Building className="w-8 h-8" />,
      iconColor: 'text-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-300',
      terrain: 'Dataran Rendah',
      terrainDesc: 'Wilayah datar dengan ketinggian 0--200 mdpl, mudah diakses dan cocok untuk pembangunan.',
      occupations: ['Pekerja pabrik/industri', 'Pedagang dan pelaku usaha jasa', 'Karyawan perkantoran'],
      reasoning: 'Dataran rendah yang datar memudahkan pembangunan infrastruktur industri dan pemukiman. Akses transportasi juga lebih mudah.',
    },
    {
      id: 3,
      name: 'Masyarakat Sekitar Gunung Merapi, Yogyakarta',
      icon: <Mountain className="w-8 h-8" />,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      terrain: 'Pegunungan & Gunung',
      terrainDesc: 'Wilayah lereng gunung api aktif dengan tanah yang sangat subur.',
      occupations: ['Petani lahan vulkanik', 'Penambang pasir', 'Pemandu wisata lava tour & pengrajin'],
      reasoning: 'Tanah vulkanik yang subur cocok untuk pertanian. Material pasir dan batu menjadi sumber mata pencaharian. Gunung Merapi juga menarik wisatawan.',
    },
  ]

  const toggleAnswer = (id: number) => {
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-bold text-blue-900 mb-2 flex items-center">
          <Compass className="w-5 h-5 mr-2" />
          Kegiatan 2.1: Analisis Hubungan Alam dan Pekerjaan
        </h4>
        <p className="text-sm text-blue-800">
          <strong>Instruksi:</strong> Pilih salah satu wilayah di bawah. Identifikasi bentuk muka bumi dan mata pencaharian yang umum di wilayah tersebut. Klik "Lihat Jawaban" untuk memeriksa analisismu.
        </p>
      </div>

      {/* Region Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regions.map((region) => (
          <motion.div
            key={region.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${region.bgColor} rounded-xl border-2 ${region.borderColor} overflow-hidden cursor-pointer transition-shadow ${
              selectedRegion === region.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
          >
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className={region.iconColor}>{region.icon}</div>
                <h5 className="font-bold text-gray-900 text-sm">{region.name}</h5>
              </div>

              {selectedRegion === region.id && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    {/* User Analysis Prompt */}
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-800 mb-2">Analisis:</p>
                      <p className="text-xs text-gray-600 mb-2">Menurutmu, bentuk muka bumi apa yang sesuai? Apa saja mata pencaharian umumnya?</p>
                    </div>

                    {/* Reveal Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleAnswer(region.id)
                      }}
                      className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      {revealedAnswers[region.id] ? 'Sembunyikan Jawaban' : 'Lihat Jawaban'}
                    </button>

                    {revealedAnswers[region.id] && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3"
                      >
                        {/* Terrain */}
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs font-bold text-gray-800 mb-1">Bentuk Muka Bumi:</p>
                          <p className="text-sm text-gray-700 font-medium">{region.terrain}</p>
                          <p className="text-xs text-gray-600 mt-1">{region.terrainDesc}</p>
                        </div>

                        {/* Occupations */}
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-xs font-bold text-gray-800 mb-2">Mata Pencaharian Umum:</p>
                          <ul className="space-y-1">
                            {region.occupations.map((occ, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-green-600 font-bold flex-shrink-0">&#10003;</span>
                                <span>{occ}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Reasoning */}
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-xs font-bold text-green-800 mb-1">Alasan:</p>
                          <p className="text-sm text-green-700">{region.reasoning}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reflection Prompt */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-5 border border-orange-200 mt-4">
        <div className="flex items-start space-x-3">
          <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-orange-900 mb-2">Refleksi: Daerahmu Termasuk Apa?</h4>
            <p className="text-sm text-orange-800 mb-3">
              Amatilah lingkungan di sekitar tempat tinggalmu atau sekolahmu. Termasuk bentuk muka bumi apakah daerahmu?
              Tuliskan tiga jenis mata pencaharian yang paling banyak kamu temukan di daerah tersebut!
            </p>
            <p className="text-xs text-orange-700 italic">
              Jelaskan mengapa pekerjaan tersebut banyak dipilih oleh penduduk setempat berdasarkan kondisi alamnya.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Kondisi Geografis dan Keruangan Indonesia</h3>

      <QuizCard
        question="Sebutkan tiga bentuk muka bumi yang ada di Indonesia!"
        options={[
          'Dataran rendah, dataran tinggi, dan gurun pasir',
          'Dataran rendah, dataran tinggi, dan pegunungan/gunung',
          'Dataran rendah, padang rumput, dan salju abadi',
          'Dataran tinggi, lembah sungai, dan gletser',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Apa keuntungan tinggal di wilayah dekat gunung berapi?"
        options={[
          'Udara yang sangat dingin dan segar sepanjang tahun',
          'Jauh dari risiko bencana alam',
          'Tanah yang sangat subur karena mengandung unsur hara dari abu vulkanik',
          'Mudah mengakses transportasi laut',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Penduduk pesisir dominan bekerja sebagai nelayan dan pembudi daya hasil laut. Hal ini karena ..."
        options={[
          'Mereka tidak memiliki keterampilan lain',
          'Laut menyediakan sumber daya ikan dan hasil laut yang melimpah di wilayah mereka',
          'Pemerintah mewajibkan mereka menjadi nelayan',
          'Tidak ada pekerjaan lain yang tersedia di Indonesia',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Toponimi adalah studi tentang penamaan tempat berdasarkan kenampakan fisik atau sejarahnya. Manakah contoh toponimi yang benar?"
        options={[
          'Nama jalan diganti berdasarkan nama presiden',
          '"Bukittinggi" dinamakan demikian karena terletak di dataran tinggi',
          'Nama kota ditentukan oleh jumlah penduduknya',
          'Nama daerah berdasarkan bahasa asing',
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
                  : 'bg-blue-100 border-2 border-blue-500'
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
        <div className={`p-3 rounded-lg mb-4 ${
          selected === correctAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {selected === correctAnswer ? 'Benar!' : `Salah. Jawaban yang benar: ${String.fromCharCode(65 + correctAnswer)}`}
        </div>
      )}

      <div className="flex space-x-2">
        {!showResult ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cek Jawaban
          </button>
        ) : (
          <button onClick={handleReset} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
