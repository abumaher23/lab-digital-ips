import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Info, GitBranch, Lightbulb, Mountain, Tent, Sprout, Hammer, CheckCircle, XCircle, RotateCcw, Flame, Search, CookingPot } from 'lucide-react'

export default function LabPraaksara() {
  const [activeTab, setActiveTab] = useState<'materi' | 'evolusi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Mountain className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Masyarakat Zaman Praaksara</h2>
            <p className="text-amber-100">Tema II - Pelajaran 4: Mengenal Masyarakat Zaman Praaksara</p>
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
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Materi
          </button>
          <button
            onClick={() => setActiveTab('evolusi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'evolusi'
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <GitBranch className="w-4 h-4 inline mr-2" />
            Evolusi
          </button>
          <button
            onClick={() => setActiveTab('kuis')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'kuis'
                ? 'bg-amber-50 text-amber-700 border-b-2 border-amber-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Kuis
          </button>
        </div>

        {/* Tab Content */}        <div className="p-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'materi' && (
              <motion.div key="materi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MateriTab />
              </motion.div>
            )}
            {activeTab === 'evolusi' && (
              <motion.div key="evolusi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <EvolusiTab />
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
      <h3 className="text-2xl font-bold text-gray-900">Mengenal Masyarakat Zaman Praaksara</h3>
      <p className="text-gray-700">
        Zaman praaksara (nirleka) adalah masa kehidupan manusia sebelum mengenal tulisan. Berdasarkan corak kehidupannya, zaman praaksara di Indonesia terbagi menjadi tiga tahap utama.
      </p>

      {/* Masa Berburu dan Meramu */}
      <div className="bg-red-50 rounded-xl p-5 border border-red-200">
        <div className="flex items-start space-x-3">
          <Tent className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-red-900 mb-2">A. Masa Berburu dan Meramu (Paleolitikum & Mesolitikum)</h4>
            <p className="text-sm text-red-800 leading-relaxed">
              Pada masa ini, manusia purba hidup dengan cara berburu binatang dan mengumpulkan makanan yang tersedia di alam. Mereka belum bisa bercocok tanam.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-red-100 rounded-lg p-3">
                <h5 className="font-bold text-red-800 text-sm">Ciri-ciri Kehidupan:</h5>
                <ul className="text-sm text-red-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Nomaden</strong> -- Hidup berpindah-pindah dari satu tempat ke tempat lain mengikuti sumber makanan</li>
                  <li>&#8226; <strong>Kjokkenmoddinger</strong> -- Tumpukan kulit kerang dan sampah dapur peninggalan manusia purba di pantai</li>
                  <li>&#8226; <strong>Mengenal api</strong> -- Menggunakan api untuk memasak, menghangatkan badan, dan menakuti binatang buas</li>
                  <li>&#8226; Alat-alat dari batu yang masih kasar (kapak genggam, kapak perimbas)</li>
                </ul>
              </div>
            </div>

            {/* Info: Kjokkenmoddinger */}
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Search className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-orange-800 mb-1">Kjokkenmoddinger</h5>
                  <p className="text-sm text-orange-700">
                    <strong>Kjokkenmoddinger</strong> berasal dari bahasa Denmark (<em>kjokken</em> = dapur, <em>modding</em> = sampah). Ini adalah tumpukan kulit kerang raksasa di sepanjang pantai Sumatera yang menjadi bukti keberadaan manusia purba di Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Masa Bercocok Tanam */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-start space-x-3">
          <Sprout className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-green-900 mb-2">B. Masa Bercocok Tanam (Neolitikum)</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              Manusia purba mulai menetap dan belajar bercocok tanam. Ini adalah revolusi besar dalam sejarah kehidupan manusia karena mengubah pola hidup secara fundamental.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-green-100 rounded-lg p-3">
                <h5 className="font-bold text-green-800 text-sm">Ciri-ciri Kehidupan:</h5>
                <ul className="text-sm text-green-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Menetap</strong> -- Tinggal di satu tempat secara permanen, membangun perkampungan sederhana</li>
                  <li>&#8226; <strong>Gotong royong</strong> -- Bekerja sama dalam kegiatan bercocok tanam, membangun rumah, dan upacara adat</li>
                  <li>&#8226; Alat-alat batu sudah lebih halus dan diasah (kapak persegi, kapak lonjong)</li>
                  <li>&#8226; Mulai menjinakkan hewan (anjing, babi, ayam)</li>
                  <li>&#8226; Mengenal sistem kepercayaan (animisme dan dinamisme)</li>
                </ul>
              </div>
            </div>

            {/* Info: Gotong Royong */}
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-emerald-800 mb-1">Asal-usul Gotong Royong</h5>
                  <p className="text-sm text-emerald-700">
                    Semangat <strong>gotong royong</strong> sudah ada sejak zaman Neolitikum. Ketika manusia mulai menetap dan bercocok tanam, mereka harus bekerja sama untuk membuka lahan, membangun rumah, dan mengairi sawah. Tradisi ini menjadi dasar kehidupan sosial masyarakat Indonesia hingga saat ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Masa Perundagian */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start space-x-3">
          <Hammer className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">C. Masa Perundagian (Zaman Logam)</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Masyarakat mulai mengenal logam dan memiliki keahlian khusus. <strong>"Undagi"</strong> berarti orang yang terampil atau ahli dalam suatu pekerjaan. Ini adalah zaman di mana teknologi mulai berkembang pesat.
            </p>

            <div className="mt-3 space-y-2">
              <div className="bg-amber-100 rounded-lg p-3">
                <h5 className="font-bold text-amber-800 text-sm">Ciri-ciri Kehidupan:</h5>
                <ul className="text-sm text-amber-700 mt-1 space-y-1">
                  <li>&#8226; <strong>Undagi</strong> -- Munculnya kelompok ahli yang terampil dalam pengolahan logam, gerabah, dan kerajinan</li>
                  <li>&#8226; <strong>Barter</strong> -- Sistem tukar-menukar barang antar kelompok atau daerah sebagai awal perdagangan</li>
                  <li>&#8226; <strong>Perahu</strong> -- Mulai mengenal dan membuat perahu untuk transportasi antar pulau</li>
                  <li>&#8226; Mengenal teknik peleburan dan pencetakan logam (perunggu, besi)</li>
                  <li>&#8226; Hasil budaya: nekara, moko, kapak corong, bejana perunggu, arca perunggu</li>
                </ul>
              </div>
            </div>

            {/* Info: Barter */}
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <Flame className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-yellow-800 mb-1">Sistem Barter</h5>
                  <p className="text-sm text-yellow-700">
                    Pada masa perundagian, manusia mulai melakukan <strong>barter</strong> (tukar-menukar barang). Misalnya, hasil pertanian ditukar dengan alat logam, atau gerabah ditukar dengan hasil tangkapan laut. Sistem ini menjadi cikal bakal <strong>perdagangan</strong> yang kita kenal sekarang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-indigo-900 mb-2">Warisan Zaman Praaksara</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Banyak warisan budaya zaman praaksara yang masih mempengaruhi kehidupan masyarakat Indonesia saat ini:
            </p>
            <ul className="text-sm text-indigo-800 mt-2 space-y-1">
              <li>&#8226; Semangat <strong>gotong royong</strong> sebagai dasar kehidupan sosial</li>
              <li>&#8226; Tradisi <strong>bercocok tanam</strong> yang menjadi mata pencaharian utama</li>
              <li>&#8226; Sistem <strong>kepercayaan</strong> dan upacara adat yang masih dipertahankan</li>
              <li>&#8226; <strong>Kearifan lokal</strong> dalam mengelola alam secara berkelanjutan</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== EVOLUSI TAB ====================
function EvolusiTab() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const evolutionStages = [
    {
      id: 0,
      title: 'Masa Berburu & Meramu',
      subtitle: 'Paleolitikum & Mesolitikum',
      icon: <Tent className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      headingColor: 'text-red-900',
      shortDesc: 'Hidup nomaden, bergantung pada alam',
      description:
        'Manusia purba hidup berpindah-pindah (nomaden) mengikuti sumber makanan. Mereka berburu binatang, mengumpulkan buah-buahan, dan tinggal di gua-gua. Alat-alat masih sangat sederhana, terbuat dari batu yang masih kasar.',
      features: [
        { icon: <Search className="w-4 h-4" />, label: 'Kjokkenmoddinger (tumpukan kulit kerang)' },
        { icon: <Flame className="w-4 h-4" />, label: 'Mengenal api untuk memasak & kehangatan' },
        { icon: <Mountain className="w-4 h-4" />, label: 'Tinggal di gua-gua alam' },
        { icon: <CookingPot className="w-4 h-4" />, label: 'Alat batu kasar (kapak genggam)' },
      ],
      timeEstimate: '2 juta - 10.000 tahun lalu',
    },
    {
      id: 1,
      title: 'Masa Bercocok Tanam',
      subtitle: 'Neolitikum',
      icon: <Sprout className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      headingColor: 'text-green-900',
      shortDesc: 'Menetap, gotong royong, pertanian',
      description:
        'Revolusi besar dalam sejarah manusia! Mereka mulai menetap, membangun perkampungan, dan belajar bercocok tanam. Gotong royong menjadi kunci keberhasilan kehidupan berkelompok. Alat-alat batu sudah lebih halus dan diasah.',
      features: [
        { icon: <Sprout className="w-4 h-4" />, label: 'Bertani & beternak sebagai mata pencaharian' },
        { icon: <Hammer className="w-4 h-4" />, label: 'Alat batu halus (kapak persegi, kapak lonjong)' },
        { icon: <Tent className="w-4 h-4" />, label: 'Perkampungan sederhana & rumah panggung' },
        { icon: <CookingPot className="w-4 h-4" />, label: 'Animisme & dinamisme (sistem kepercayaan)' },
      ],
      timeEstimate: '10.000 - 2.000 tahun lalu',
    },
    {
      id: 2,
      title: 'Masa Perundagian',
      subtitle: 'Zaman Logam',
      icon: <Hammer className="w-8 h-8" />,
      gradient: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-800',
      headingColor: 'text-amber-900',
      shortDesc: 'Ahli logam, barter, perahu',
      description:
        'Zaman di mana manusia mulai mengenal logam dan memiliki keahlian khusus (undagi). Sistem barter mulai berkembang, perahu digunakan untuk transportasi antar pulau. Teknologi peleburan logam menjadi pencapaian terbesar masa ini.',
      features: [
        { icon: <Hammer className="w-4 h-4" />, label: 'Undagi (ahli pengolahan logam & kerajinan)' },
        { icon: <Search className="w-4 h-4" />, label: 'Sistem barter (tukar-menukar barang)' },
        { icon: <Mountain className="w-4 h-4" />, label: 'Perahu untuk transportasi antar pulau' },
        { icon: <Flame className="w-4 h-4" />, label: 'Teknologi peleburan logam (perunggu, besi)' },
      ],
      timeEstimate: '2.000 tahun lalu - awal Masehi',
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-amber-50 rounded-lg p-4">
        <h4 className="font-bold text-amber-900 mb-2 flex items-center">
          <GitBranch className="w-5 h-5 mr-2" />
          Evolusi Kehidupan Manusia Praaksara
        </h4>
        <p className="text-sm text-amber-800">
          Klik pada setiap kartu untuk melihat informasi detail tentang evolusi kehidupan manusia dari masa berburu hingga masa perundagian.
        </p>
      </div>

      {/* Evolution Flow */}
      <div className="space-y-6">
        {evolutionStages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Arrow between stages */}
            {index > 0 && (
              <div className="flex justify-center my-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.1 }}
                  className="text-gray-400 text-2xl"
                >
                  &#8595;
                </motion.div>
              </div>
            )}

            {/* Clickable Card */}
            <motion.div
              className={`${stage.bgColor} rounded-xl border-2 ${stage.borderColor} overflow-hidden cursor-pointer shadow-sm`}
              onClick={() => setActiveCard(activeCard === stage.id ? null : stage.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="p-5">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center text-white shadow-md`}
                  >
                    {stage.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-bold text-lg ${stage.headingColor}`}>{stage.title}</h5>
                    <p className={`text-sm ${stage.textColor} opacity-80`}>{stage.subtitle}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{stage.timeEstimate}</p>
                  </div>
                  <div className="text-gray-400">
                    <motion.div
                      animate={{ rotate: activeCard === stage.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      &#9660;
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {activeCard === stage.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className={`text-sm ${stage.textColor} mb-4 leading-relaxed`}>{stage.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.features.map((feature, fIdx) => (
                          <motion.div
                            key={fIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fIdx * 0.08 }}
                            className="flex items-center space-x-2 bg-white rounded-lg p-2.5 border border-gray-100"
                          >
                            <span className={`${stage.textColor} flex-shrink-0`}>{feature.icon}</span>
                            <span className="text-sm text-gray-700">{feature.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200"
      >
        <h5 className="font-bold text-gray-900 mb-2 text-center">Ringkasan Evolusi</h5>
        <div className="flex items-center justify-center space-x-2 text-sm flex-wrap gap-y-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">Nomaden</span>
          <span className="text-gray-400">&#8594;</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">Petani Menetap</span>
          <span className="text-gray-400">&#8594;</span>
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">Ahli Logam</span>
        </div>
        <p className="text-sm text-gray-600 text-center mt-3">
          Dari bergantung pada alam &#8594; mengelola alam &#8594; mengembangkan teknologi
        </p>
      </motion.div>
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Masyarakat Zaman Praaksara</h3>

      <QuizCard
        question="Mengapa manusia purba pada masa Paleolitikum hidup secara nomaden (berpindah-pindah)?"
        options={[
          'Karena mereka suka menjelajahi tempat baru untuk petualangan',
          'Karena mereka mengikuti ketersediaan sumber makanan dan binatang buruan yang selalu berpindah',
          'Karena mereka diusir oleh binatang buas dari tempat tinggalnya',
          'Karena mereka belum mengenal cara membuat rumah yang permanen',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Apa yang dimaksud dengan kjokkenmoddinger?"
        options={[
          'Alat batu yang digunakan manusia purba untuk berburu',
          'Lukisan di dinding gua yang menggambarkan kehidupan sehari-hari',
          'Tumpukan kulit kerang dan sampah dapur peninggalan manusia purba di pantai',
          'Tempat upacara keagamaan pada zaman praaksara',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Apa perubahan paling penting yang terjadi pada masa Neolitikum (bercocok tanam) dibandingkan masa sebelumnya?"
        options={[
          'Manusia mulai mengenal tulisan dan bahasa',
          'Manusia mulai menggunakan alat-alat dari logam',
          'Manusia mulai menetap, membangun perkampungan, dan bercocok tanam secara permanen',
          'Manusia mulai membuat perahu untuk berlayar antar pulau',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Pada masa perundagian, apa yang dimaksud dengan 'undagi'?"
        options={[
          'Pemimpin suku yang paling dihormati',
          'Orang yang terampil atau ahli dalam pengolahan logam dan kerajinan',
          'Pedagang yang melakukan barter antar daerah',
          'Dukun yang memimpin upacara kepercayaan',
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
