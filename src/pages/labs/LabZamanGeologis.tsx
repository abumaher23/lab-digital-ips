import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Info, Clock, Lightbulb, Mountain, Waves, Sprout, Flame, CheckCircle, XCircle, RotateCcw } from 'lucide-react'

export default function LabZamanGeologis() {
  const [activeTab, setActiveTab] = useState<'materi' | 'timeline' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Mountain className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Zaman Geologis</h2>
            <p className="text-green-100">Tema II - Pelajaran 1: Berkenalan dengan Alam (Sejarah Pembentukan Bumi)</p>
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
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'timeline'
                ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-2" />
            Timeline
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
            {activeTab === 'timeline' && (
              <motion.div key="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TimelineTab />
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
      <h3 className="text-2xl font-bold text-gray-900">Sejarah Pembentukan Bumi</h3>
      <p className="text-gray-700">
        Bumi terbentuk sekitar 4,6 miliar tahun yang lalu. Sejak saat itu, bumi mengalami perkembangan yang berlangsung sangat lama dan terbagi menjadi beberapa zaman geologis.
      </p>

      {/* Zaman Arkaekum */}
      <div className="bg-red-50 rounded-xl p-5 border border-red-200">
        <div className="flex items-start space-x-3">
          <Flame className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-red-900 mb-2">A. Zaman Arkaekum (4,5 -- 2,5 miliar tahun lalu)</h4>
            <p className="text-sm text-red-800 leading-relaxed">
              <strong>Arkaekum</strong> berasal dari bahasa Yunani, <em>archaios</em> yang berarti "kuno" atau "purba".
              Ini adalah zaman tertua dalam sejarah bumi.
            </p>
            <ul className="text-sm text-red-800 mt-3 space-y-1">
              <li>&#8226; Permukaan bumi masih sangat panas dan diselimuti gas</li>
              <li>&#8226; Belum ada tanda-tanda kehidupan</li>
              <li>&#8226; Kerak bumi mulai terbentuk secara perlahan</li>
              <li>&#8226; Atmosfer awal terdiri dari hidrogen, helium, metana, dan amonia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Zaman Paleozoikum */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Waves className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-blue-900 mb-2">B. Zaman Paleozoikum (541 -- 252 juta tahun lalu)</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Paleozoikum</strong> dikenal sebagai "Zaman Kehidupan Purba". Pada masa ini, kehidupan mulai muncul dan berkembang.
            </p>
            <ul className="text-sm text-blue-800 mt-3 space-y-1">
              <li>&#8226; Kehidupan awal muncul di lautan (bakteri, alga, organisme lunak)</li>
              <li>&#8226; Ikan pertama berevolusi -- disebut "Zaman Ikan"</li>
              <li>&#8226; Tumbuhan darat dan amfibi mulai muncul</li>
              <li>&#8226; Berakhir dengan kepunahan massal terbesar dalam sejarah bumi</li>
            </ul>
            <p className="text-xs text-blue-600 mt-3 italic">
              Periode penting: Kambrium, Ordovisium, Silur, Devon, Karbon, Perm
            </p>
          </div>
        </div>
      </div>

      {/* Zaman Mesozoikum */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-start space-x-3">
          <Mountain className="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">C. Zaman Mesozoikum (252 -- 66 juta tahun lalu)</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Mesozoikum</strong> dikenal sebagai "Zaman Pertengahan" atau "Zaman Dinosaurus".
            </p>
            <ul className="text-sm text-amber-800 mt-3 space-y-1">
              <li>&#8226; Dinosaurus mendominasi daratan selama jutaan tahun</li>
              <li>&#8226; Tumbuhan berbunga mulai muncul pertama kalinya</li>
              <li>&#8226; Burung dan mamalia pertama berevolusi</li>
              <li>&#8226; Benua-benua mulai bergerak dan memisah (Pangaea terpecah)</li>
              <li>&#8226; Berakhir dengan kepunahan dinosaurus (diduga akibat asteroid)</li>
            </ul>
            <p className="text-xs text-amber-600 mt-3 italic">
              Periode: Trias, Jura, Kapur
            </p>
          </div>
        </div>
      </div>

      {/* Zaman Neozoikum */}
      <div className="bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-start space-x-3">
          <Sprout className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xl font-bold text-green-900 mb-2">D. Zaman Neozoikum / Kenozoikum (66 juta tahun lalu -- sekarang)</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              <strong>Neozoikum</strong> ("Zaman Kehidupan Baru") adalah zaman yang masih berlangsung hingga saat ini.
              Terbagi menjadi dua periode utama:
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <h5 className="font-bold text-emerald-900 mb-1">1. Zaman Tersier (Paleogen & Neogen)</h5>
                <p className="text-sm text-emerald-800">
                  Mamalia berkembang pesat menggantikan posisi dinosaurus. Primata mulai muncul dan berkembang.
                  Iklim bumi semakin stabil, flora dan fauna modern mulai terbentuk.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                <h5 className="font-bold text-teal-900 mb-1">2. Zaman Kuarter (Pleistosen & Holosen)</h5>
                <p className="text-sm text-teal-800">
                  Zaman Pleistosen ditandai dengan zaman es. Manusia purba (<em>Homo erectus</em>) muncul di muka bumi.
                  Zaman Holosen (11.700 tahun lalu -- sekarang) adalah era di mana peradaban manusia berkembang pesat.
                </p>
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
            <h4 className="font-bold text-indigo-900 mb-2">Tahukah Kamu?</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Jika sejarah bumi dijadikan 24 jam, manusia baru muncul pada detik-detik terakhir!
              Dinosaurus "hanya" berkuasa sekitar 3 jam (dari 166 juta tahun). Hal ini menunjukkan betapa panjangnya
              proses pembentukan bumi sebelum kehadiran manusia.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ==================== TIMELINE TAB ====================
function TimelineTab() {
  const [activeEra, setActiveEra] = useState<number | null>(null)

  const eras = [
    {
      id: 0,
      name: 'Zaman Arkaekum',
      period: '4,5 -- 2,5 miliar tahun lalu',
      icon: <Flame className="w-6 h-6" />,
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      ringColor: 'ring-red-500',
      textColor: 'text-red-700',
      description: 'Zaman tertuai dalam sejarah bumi. Permukaan bumi masih panas dan belum ada kehidupan.',
      details: [
        'Bumi baru terbentuk dari awan gas dan debu kosmik',
        'Kerak bumi mulai mendingin dan mengeras',
        'Atmosfer awal mengandung metana, amonia, dan uap air',
        'Belum ada bukti adanya kehidupan pada masa ini',
      ],
    },
    {
      id: 1,
      name: 'Zaman Paleozoikum',
      period: '541 -- 252 juta tahun lalu',
      icon: <Waves className="w-6 h-6" />,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      ringColor: 'ring-blue-500',
      textColor: 'text-blue-700',
      description: 'Zaman kehidupan purba. Makhluk hidup pertama mulai muncul dan berkembang di lautan.',
      details: [
        'Organisme laut pertama: bakteri, alga, dan makhluk lunak',
        'Ikan pertama berevolusi di laut (Zaman Ikan/Devon)',
        'Tumbuhan darat dan amfibi mulai muncul',
        'Serangga raksasa dan hutan rawai luas terbentuk',
        'Berakhir dengan kepunahan massal Perm-Trias (96% spesies punah)',
      ],
    },
    {
      id: 2,
      name: 'Zaman Mesozoikum',
      period: '252 -- 66 juta tahun lalu',
      icon: <Mountain className="w-6 h-6" />,
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-300',
      ringColor: 'ring-amber-500',
      textColor: 'text-amber-700',
      description: 'Zaman dinosaurus! Reptil raksasa mendominasi bumi selama jutaan tahun.',
      details: [
        'Dinosaurus menjadi penguasa daratan, laut, dan udara',
        'Pangaea (super benua) mulai terpecah menjadi benua-benua',
        'Tumbuhan berbunga (angiospermae) muncul pertama kali',
        'Mamalia kecil pertama berevolusi',
        'Burung pertama berevolusi dari dinosaurus theropoda',
        'Asteroid raksasa menghantam bumi -- dinosaurus punah',
      ],
    },
    {
      id: 3,
      name: 'Zaman Neozoikum',
      period: '66 juta tahun lalu -- sekarang',
      icon: <Sprout className="w-6 h-6" />,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      ringColor: 'ring-green-500',
      textColor: 'text-green-700',
      description: 'Zaman kehidupan baru. Mamalia dan manusia berkembang hingga era modern.',
      details: [
        'Mamalia berkembang pesat menggantikan dinosaurus',
        'Zaman Es (Pleistosen) membentuk lanskap bumi',
        'Manusia purba (Homo erectus) muncul sekitar 2 juta tahun lalu',
        'Homo sapiens berkembang sekitar 300.000 tahun lalu',
        'Zaman Holosen: peradaban manusia dimulai (pertanian, kota, teknologi)',
        'Zaman ini masih berlangsung hingga saat ini!',
      ],
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <h4 className="font-bold text-green-900 mb-2 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Garis Waktu Geologis Indonesia
        </h4>
        <p className="text-sm text-green-800">
          Klik pada setiap era untuk melihat informasi detail tentang zaman tersebut.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

        <div className="space-y-4">
          {eras.map((era) => (
            <motion.div
              key={era.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: era.id * 0.15 }}
              className="relative"
            >
              <div
                className={`flex items-start space-x-4 cursor-pointer group`}
                onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
              >
                {/* Timeline node */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-full ${era.bgColor} border-2 ${era.borderColor} flex items-center justify-center ${era.textColor} ${
                    activeEra === era.id ? `ring-2 ${era.ringColor} shadow-lg` : 'group-hover:shadow-md'
                  } transition-shadow`}
                >
                  {era.icon}
                </div>

                {/* Era info */}
                <div className="flex-1 pt-2">
                  <h5 className={`font-bold text-lg ${activeEra === era.id ? era.textColor : 'text-gray-900'}`}>
                    {era.name}
                  </h5>
                  <p className="text-sm text-gray-600">{era.period}</p>
                  <p className="text-sm text-gray-700 mt-1">{era.description}</p>
                </div>
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {activeEra === era.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`ml-16 mt-3 ${era.bgColor} rounded-xl p-4 border ${era.borderColor}`}
                  >
                    <ul className="space-y-2">
                      {era.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start space-x-2 text-sm text-gray-800"
                        >
                          <span className={`${era.textColor} font-bold flex-shrink-0`}>&#8226;</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Zaman Geologis</h3>

      <QuizCard
        question="Zaman apakah yang dikenal sebagai 'Zaman Dinosaurus'?"
        options={[
          'Zaman Arkaekum',
          'Zaman Paleozoikum',
          'Zaman Mesozoikum',
          'Zaman Neozoikum',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Mengapa permukaan bumi pada Zaman Arkaekum belum memungkinkan adanya kehidupan?"
        options={[
          'Karena sudah terlalu banyak air di permukaan bumi',
          'Karena suhu bumi masih sangat panas dan atmosfer belum mendukung',
          'Karena sudah terlalu banyak gunung berapi yang meletus',
          'Karena sudah banyak organisme yang menghabiskan oksigen',
        ]}
        correctAnswer={1}
      />

      <QuizCard
        question="Peristiwa apakah yang menyebabkan kepunahan dinosaurus pada akhir Zaman Mesozoikum?"
        options={[
          'Perubahan iklim yang sangat lambat',
          'Letusan gunung berapi secara terus-menerus selama jutaan tahun',
          'Hantaman asteroid raksasa yang mengubah kondisi bumi secara drastis',
          'Penyakit yang menyerang seluruh populasi dinosaurus',
        ]}
        correctAnswer={2}
      />

      <QuizCard
        question="Pada zaman apakah manusia purba (Homo erectus) mulai muncul di muka bumi?"
        options={[
          'Zaman Arkaekum',
          'Zaman Paleozoikum',
          'Zaman Mesozoikum',
          'Zaman Neozoikum (Kuarter -- Pleistosen)',
        ]}
        correctAnswer={3}
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
