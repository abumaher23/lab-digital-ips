import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe,   TrendingUp, MapPin, Package } from 'lucide-react'

interface Wilayah {
  id: string
  name: string
  surplus: string[]
  minus: string[]
  position: { x: number; y: number }
}

const wilayahData: Wilayah[] = [
  {
    id: 'A',
    name: 'Wilayah A (Dataran Tinggi)',
    surplus: ['Sayuran', 'Buah-buahan', 'Teh'],
    minus: ['Ikan', 'Garam'],
    position: { x: 150, y: 100 },
  },
  {
    id: 'B',
    name: 'Wilayah B (Pesisir)',
    surplus: ['Ikan', 'Garam', 'Hasil Laut'],
    minus: ['Sayuran', 'Buah-buahan'],
    position: { x: 650, y: 100 },
  },
  {
    id: 'C',
    name: 'Wilayah C (Pesisir Dekat)',
    surplus: ['Ikan', 'Garam'],
    minus: ['Sayuran'],
    position: { x: 400, y: 350 },
  },
]

interface Interaction {
  from: string
  to: string
  strength: number
  commodity: string
}

export default function LabKonektivitas() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')
  const [interactions, setInteractions] = useState<Interaction[]>([
    { from: 'A', to: 'B', strength: 100, commodity: 'Sayuran ↔ Ikan' },
  ])
  const [showWilayahC, setShowWilayahC] = useState(false)

  const addWilayahC = () => {
    setShowWilayahC(true)
    setInteractions([
      { from: 'A', to: 'C', strength: 70, commodity: 'Sayuran ↔ Ikan' },
      { from: 'A', to: 'B', strength: 30, commodity: 'Sayuran ↔ Ikan (melemah)' },
    ])
  }

  const resetSimulasi = () => {
    setShowWilayahC(false)
    setInteractions([{ from: 'A', to: 'B', strength: 100, commodity: 'Sayuran ↔ Ikan' }])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Globe className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Konektivitas Antarruang</h2>
            <p className="text-green-100">Pelajaran 3: Interaksi Antarwilayah</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {['materi', 'simulasi', 'kuis'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`flex-1 px-4 py-3 font-medium transition-colors capitalize ${
                activeTab === tab
                  ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab === 'materi' ? '📖 Materi' : tab === 'simulasi' ? '🎮 Simulasi' : '💡 Kuis'}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'simulasi' && (
            <SimulasiTab
              interactions={interactions}
              showWilayahC={showWilayahC}
              onAddWilayahC={addWilayahC}
              onReset={resetSimulasi}
            />
          )}
          {activeTab === 'kuis' && <KuisTab />}
        </div>
      </div>
    </div>
  )
}

function MateriTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Syarat Terjadinya Interaksi Antarruang</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h4 className="text-xl font-bold text-blue-900 mb-3 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2" />
            1. Saling Melengkapi (Complementarity)
          </h4>
          <p className="text-blue-800 mb-3">
            Kondisi ini terjadi jika ada wilayah-wilayah yang memiliki perbedaan komoditas yang dihasilkan.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p><strong>Contoh:</strong></p>
            <p>• Wilayah A: Surplus sayuran, minus ikan</p>
            <p>• Wilayah B: Surplus ikan, minus sayuran</p>
            <p className="mt-2 text-green-700 font-semibold">→ Terjadi perdagangan saling melengkapi!</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h4 className="text-xl font-bold text-orange-900 mb-3 flex items-center">
            <MapPin className="w-6 h-6 mr-2" />
            2. Kesempatan Berintervensi
          </h4>
          <p className="text-orange-800 mb-3">
            Suatu lokasi yang menawarkan alternatif lebih baik sebagai tempat asal maupun tempat tujuan.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p><strong>Contoh:</strong></p>
            <p>• Wilayah A biasa beli ikan ke B</p>
            <p>• Muncul Wilayah C yang lebih dekat</p>
            <p className="mt-2 text-red-700 font-semibold">→ Interaksi A-B melemah, beralih ke C!</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-6">
        <h4 className="text-xl font-bold text-purple-900 mb-3">Pengaruh Karakteristik Muka Bumi</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded p-4">
            <h5 className="font-bold text-purple-800 mb-2">🌊 Daerah Pesisir</h5>
            <p className="text-sm text-gray-700">Nelayan, pariwisata bahari, hasil laut</p>
          </div>
          <div className="bg-white rounded p-4">
            <h5 className="font-bold text-purple-800 mb-2">🏔️ Daerah Pegunungan</h5>
            <p className="text-sm text-gray-700">Petani perkebunan (kopi, teh), kehutanan</p>
          </div>
          <div className="bg-white rounded p-4">
            <h5 className="font-bold text-purple-800 mb-2">🏙️ Daerah Perkotaan</h5>
            <p className="text-sm text-gray-700">Jasa, industri, perdagangan</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SimulasiTab({
  interactions,
  showWilayahC,
  onAddWilayahC,
  onReset,
}: {
  interactions: Interaction[]
  showWilayahC: boolean
  onAddWilayahC: () => void
  onReset: () => void
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-bold text-green-900 mb-2">🎮 Simulasi Interaksi Antarwilayah</h4>
        <p className="text-sm text-green-800">
          Lihat bagaimana interaksi antara wilayah berubah ketika ada wilayah baru yang menawarkan alternatif lebih dekat!
        </p>
      </div>

      {/* Simulasi Visual */}
      <div className="bg-gray-50 rounded-lg p-6 relative" style={{ height: '450px' }}>
        <svg className="w-full h-full" viewBox="0 0 800 450">
          {/* Interaksi Lines */}
          <AnimatePresence>
            {interactions.map((interaction) => (
              <motion.g key={`${interaction.from}-${interaction.to}`}>
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  x1={wilayahData.find((w) => w.id === interaction.from)?.position.x || 0}
                  y1={wilayahData.find((w) => w.id === interaction.from)?.position.y || 0}
                  x2={wilayahData.find((w) => w.id === interaction.to)?.position.x || 0}
                  y2={wilayahData.find((w) => w.id === interaction.to)?.position.y || 0}
                  stroke={interaction.strength > 50 ? '#10b981' : '#ef4444'}
                  strokeWidth={interaction.strength / 10}
                  strokeLinecap="round"
                />
                {/* Animated dots along the line */}
                <motion.circle r="6" fill="#fbbf24">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={`M${wilayahData.find((w) => w.id === interaction.from)?.position.x || 0},${
                      wilayahData.find((w) => w.id === interaction.from)?.position.y || 0
                    } L${wilayahData.find((w) => w.id === interaction.to)?.position.x || 0},${
                      wilayahData.find((w) => w.id === interaction.to)?.position.y || 0
                    }`}
                  />
                </motion.circle>
              </motion.g>
            ))}
          </AnimatePresence>

          {/* Wilayah Nodes */}
          {wilayahData.map((wilayah) => (
            <motion.g
              key={wilayah.id}
              initial={wilayah.id === 'C' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              animate={wilayah.id === 'C' && showWilayahC ? { scale: 1, opacity: 1 } : wilayah.id === 'C' ? { scale: 0, opacity: 0 } : {}}
            >
              <circle
                cx={wilayah.position.x}
                cy={wilayah.position.y}
                r="50"
                fill={wilayah.id === 'C' ? '#f59e0b' : wilayah.id === 'A' ? '#3b82f6' : '#10b981'}
                stroke="white"
                strokeWidth="4"
              />
              <text
                x={wilayah.position.x}
                y={wilayah.position.y - 10}
                textAnchor="middle"
                className="text-white font-bold"
                fontSize="16"
                fill="white"
              >
                {wilayah.id}
              </text>
              <text
                x={wilayah.position.x}
                y={wilayah.position.y + 70}
                textAnchor="middle"
                fontSize="12"
                fill="#374151"
                fontWeight="bold"
              >
                {wilayah.name.split('(')[0]}
              </text>
            </motion.g>
          ))}
        </svg>

        {/* Info Cards */}
        <div className="absolute top-4 right-4 space-y-2">
          {interactions.map((interaction, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-white rounded-lg p-3 shadow-md ${
                interaction.strength > 50 ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
              }`}
            >
              <p className="text-sm font-semibold">
                {interaction.from} ↔ {interaction.to}
              </p>
              <p className="text-xs text-gray-600">{interaction.commodity}</p>
              <div className="mt-1 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${interaction.strength > 50 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${interaction.strength}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Kekuatan: {interaction.strength}%</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex space-x-3">
        {!showWilayahC ? (
          <button onClick={onAddWilayahC} className="btn-primary">
            <Package className="w-4 h-4 inline mr-2" />
            Tampilkan Wilayah C (Kesempatan Intervensi)
          </button>
        ) : (
          <button onClick={onReset} className="btn-secondary">
            Reset Simulasi
          </button>
        )}
      </div>

      {showWilayahC && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-orange-50 rounded-lg p-4"
        >
          <h4 className="font-bold text-orange-900 mb-2">💡 Analisis: Kesempatan Berintervensi</h4>
          <p className="text-orange-800 text-sm">
            Perhatikan bagaimana interaksi antara Wilayah A dan B melemah (menjadi 30%) karena adanya Wilayah C yang lebih dekat. 
            Ini adalah contoh nyata dari <strong>Intervening Opportunity</strong> dalam konektivitas antarruang!
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

function KuisTab() {
  const [selected, setSelected] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState<Record<number, boolean>>({})

  const questions = [
    {
      question: 'Kondisi ketika wilayah-wilayah memiliki perbedaan komoditas sehingga saling membutuhkan disebut...',
      options: [
        'Kesempatan berintervensi',
        'Saling melengkapi (Complementarity)',
        'Kemudahan pemindahan',
        'Konektivitas langsung',
      ],
      correct: 1,
    },
    {
      question: 'Wilayah A biasanya membeli ikan ke Wilayah B. Namun, muncul Wilayah C yang lebih dekat dan juga menjual ikan. Interaksi A-B melemah. Ini adalah contoh dari...',
      options: [
        'Saling melengkapi',
        'Akulturasi',
        'Kesempatan berintervensi',
        'Difusi',
      ],
      correct: 2,
    },
    {
      question: 'Penduduk daerah pesisir umumnya memiliki mata pencaharian sebagai...',
      options: [
        'Petani perkebunan',
        'Nelayan dan pariwisata bahari',
        'Pedagang industri',
        'Pekerja pabrik',
      ],
      correct: 1,
    },
  ]

  const handleCheck = (qIdx: number) => {
    setShowResult((prev) => ({ ...prev, [qIdx]: true }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Konektivitas Antarruang</h3>

      {questions.map((q, qIdx) => (
        <div key={qIdx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            {qIdx + 1}. {q.question}
          </h4>
          <div className="space-y-2 mb-4">
            {q.options.map((option, oIdx) => (
              <button
                key={oIdx}
                onClick={() => !showResult[qIdx] && setSelected((prev) => ({ ...prev, [qIdx]: oIdx }))}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selected[qIdx] === oIdx
                    ? showResult[qIdx]
                      ? oIdx === q.correct
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                disabled={showResult[qIdx]}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                {option}
              </button>
            ))}
          </div>

          {showResult[qIdx] && selected[qIdx] !== undefined && (
            <div
              className={`p-3 rounded-lg mb-4 ${
                selected[qIdx] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}
            >
              {selected[qIdx] === q.correct ? '✅ Benar!' : `❌ Salah. Jawaban yang benar: ${String.fromCharCode(65 + q.correct)}`}
            </div>
          )}

          {!showResult[qIdx] ? (
            <button
              onClick={() => handleCheck(qIdx)}
              disabled={selected[qIdx] === undefined}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cek Jawaban
            </button>
          ) : (
            <button
              onClick={() => {
                setSelected((prev) => ({ ...prev, [qIdx]: -1 }))
                setShowResult((prev) => ({ ...prev, [qIdx]: false }))
              }}
              className="btn-secondary"
            >
              Reset
            </button>
          )}
        </div>
      ))}
    </motion.div>
  )
}
