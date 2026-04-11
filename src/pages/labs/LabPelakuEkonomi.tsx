import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Factory, Building2, Globe, RotateCcw, TrendingUp, DollarSign, ShieldCheck, Zap } from 'lucide-react'

export default function LabPelakuEkonomi() {
  const [activeTab, setActiveTab] = useState<'materi' | 'roleplay' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Users className="w-10 h-10" />
          <div>
            <p className="text-indigo-100 text-sm">Tema III - Pelajaran 5</p>
            <h2 className="text-3xl font-bold">Pelaku Ekonomi</h2>
            <p className="text-indigo-100">RTK, RTP, Pemerintah & Masyarakat Luar Negeri</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {[
            { id: 'materi' as const, label: 'Materi' },
            { id: 'roleplay' as const, label: 'Roleplay Ekonomi' },
            { id: 'kuis' as const, label: 'Kuis' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'roleplay' && <RoleplayTab />}
          {activeTab === 'kuis' && <KuisTab />}
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MATERI TAB
// ============================================================

function MateriTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {/* A. RTK */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Users className="w-6 h-6 mr-2 text-blue-600" />
          A. Rumah Tangga Konsumen (RTK)
        </h3>
        <p className="text-gray-700 mb-4">
          RTK adalah individu atau keluarga yang berperan sebagai <strong>konsumen</strong> (pemakai barang/jasa) dan juga <strong>penyedia faktor produksi</strong> (tenaga kerja, tanah, modal).
        </p>

        <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
          <h4 className="font-bold text-blue-900 mb-3">Peran RTK:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-blue-800 mb-1">Sebagai Konsumen</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>- Membeli barang kebutuhan</li>
                <li>- Menggunakan jasa (transport, listrik)</li>
                <li>- Memakai barang dan jasa</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-blue-800 mb-1">Penyedia Faktor Produksi</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>- Menyediakan tenaga kerja</li>
                <li>- Menyewakan tanah/properti</li>
                <li>- Menanamkan modal (tabungan)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* B. RTP */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Factory className="w-6 h-6 mr-2 text-green-600" />
          B. Rumah Tangga Produsen (RTP)
        </h3>
        <p className="text-gray-700 mb-4">
          RTP adalah perusahaan atau usaha yang berperan sebagai <strong>produsen</strong> (penghasil barang/jasa) dan <strong>membayar faktor produksi</strong> yang disediakan RTK.
        </p>

        <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
          <h4 className="font-bold text-green-900 mb-3">Peran RTP:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-green-800 mb-1">Menghasilkan Barang/Jasa</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>- Pabrik roti menghasilkan roti</li>
                <li>- Perusahaan jasa layanan</li>
                <li>- Pertambangan menghasilkan bahan tambang</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-green-800 mb-1">Membayar Faktor Produksi</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>- Gaji/upah untuk tenaga kerja</li>
                <li>- Sewa untuk tanah/properti</li>
                <li>- Bunga/dividen untuk modal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* C. Pemerintah */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Building2 className="w-6 h-6 mr-2 text-purple-600" />
          C. Rumah Tangga Pemerintahan
        </h3>
        <p className="text-gray-700 mb-4">
          Pemerintah berperan sebagai <strong>pengatur</strong>, <strong>pengawas</strong>, dan <strong>pembangun infrastruktur</strong> untuk kesejahteraan masyarakat.
        </p>

        <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
          <h4 className="font-bold text-purple-900 mb-3">Peran Pemerintah:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded p-3">
              <ShieldCheck className="w-5 h-5 text-purple-600 mb-2" />
              <p className="font-semibold text-purple-800 mb-1">Regulasi</p>
              <p className="text-sm text-purple-700">Membuat aturan dan kebijakan ekonomi</p>
            </div>
            <div className="bg-white rounded p-3">
              <TrendingUp className="w-5 h-5 text-purple-600 mb-2" />
              <p className="font-semibold text-purple-800 mb-1">Infrastruktur</p>
              <p className="text-sm text-purple-700">Membangun jalan, sekolah, rumah sakit</p>
            </div>
            <div className="bg-white rounded p-3">
              <DollarSign className="w-5 h-5 text-purple-600 mb-2" />
              <p className="font-semibold text-purple-800 mb-1">Fiskal</p>
              <p className="text-sm text-purple-700">Mengelola pajak dan anggaran negara</p>
            </div>
          </div>
        </div>
      </section>

      {/* D. Masyarakat Luar Negeri */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Globe className="w-6 h-6 mr-2 text-orange-600" />
          D. Masyarakat Ekonomi Luar Negeri
        </h3>
        <p className="text-gray-700 mb-4">
          Pelaku ekonomi dari luar negeri berperan dalam <strong>perdagangan internasional</strong> dan <strong>investasi</strong> di dalam negeri.
        </p>

        <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-500">
          <h4 className="font-bold text-orange-900 mb-3">Peran Masyarakat Luar Negeri:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-orange-800 mb-1">Perdagangan Internasional</p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>- Membeli ekspor Indonesia</li>
                <li>- Menjual barang ke Indonesia (impor)</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-orange-800 mb-1">Investasi</p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>- Penanaman modal asing (PMA)</li>
                <li>- Membuka perusahaan di Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

// ============================================================
// ROLEPLAY TAB
// ============================================================

type EconomicActor = 'rtk' | 'rtp' | 'pemerintah' | 'luar-negeri'

interface Scenario {
  actor: EconomicActor
  title: string
  description: string
  choices: { text: string; impact: string; score: number }[]
}

const scenarios: Scenario[] = [
  {
    actor: 'rtk',
    title: 'Kamu adalah Keluarga Pak Budi (RTK)',
    description: 'Kamu menerima gaji bulanan sebesar Rp 5.000.000. Bagaimana kamu mengalokasikan pendapatanmu?',
    choices: [
      { text: 'Belanja kebutuhan pokok dan tabung sisanya', impact: 'Kamu menjadi konsumen yang bijak! Tabungan bisa jadi modal.', score: 3 },
      { text: 'Habiskan semua untuk barang mewah', impact: 'Konsumsi berlebihan! Tidak ada tabungan untuk masa depan.', score: 1 },
      { text: 'Investasi pendidikan anak', impact: 'Investasi SDM! Anak mendapat技能 lebih baik untuk masa depan.', score: 3 },
    ],
  },
  {
    actor: 'rtp',
    title: 'Kamu adalah Pemilik Pabrik Roti (RTP)',
    description: 'Produksimu meningkat! Bagaimana kamu menggunakan keuntungan?',
    choices: [
      { text: 'Perluas pabrik dan rekrut lebih banyak karyawan', impact: 'Ekspansi bisnis! Membuka lapangan kerja baru.', score: 3 },
      { text: 'Naikkan gaji karyawan yang sudah ada', impact: 'Karyawan sejahtera! Produktivitas meningkat.', score: 3 },
      { text: 'Simpan semua keuntungan tanpa investasi', impact: 'Bisnis stagnan. Tidak ada pertumbuhan.', score: 1 },
    ],
  },
  {
    actor: 'pemerintah',
    title: 'Kamu adalah Menteri Keuangan (Pemerintah)',
    description: 'Ada anggaran surplus Rp 10 miliar. Apa yang akan kamu lakukan?',
    choices: [
      { text: 'Bangun jalan tol baru', impact: 'Infrastruktur meningkat! Distribusi barang lebih lancar.', score: 3 },
      { text: 'Beri subsidi pendidikan', impact: 'SDM meningkat! Rakyat lebih terdidik.', score: 3 },
      { text: 'Simpan di kas negara tanpa digunakan', impact: 'Anggaran tidak produktif. Rakyat tidak mendapat manfaat.', score: 1 },
    ],
  },
  {
    actor: 'luar-negeri',
    title: 'Kamu adalah Investor Asing (Masyarakat Luar Negeri)',
    description: 'Kamu tertarik berinvestasi di Indonesia. Apa keputusanmu?',
    choices: [
      { text: 'Buka pabrik manufaktur di Jawa', impact: 'Investasi langsung! Menciptakan lapangan kerja lokal.', score: 3 },
      { text: 'Kerjasama dengan perusahaan lokal', impact: 'Transfer teknologi! Perusahaan lokal mendapat pengetahuan baru.', score: 3 },
      { text: 'Hanya beli saham tanpa kontribusi langsung', impact: 'Investasi portfolio, tapi tidak ada dampak langsung ke ekonomi riil.', score: 1 },
    ],
  },
  {
    actor: 'rtk',
    title: 'Kamu adalah RTK - Keluarga Bu Sari',
    description: 'Harga sembako naik 20%. Gaji tetap. Apa yang kamu lakukan?',
    choices: [
      { text: 'Kurangi belanja tidak penting, tetap beli kebutuhan pokok', impact: 'Adaptasi yang baik! Konsumsi tetap terjaga.', score: 3 },
      { text: 'Pinjam uang untuk tetap gaya hidup', impact: 'Berisiko! Utang menumpuk, masalah keuangan jangka panjang.', score: 1 },
      { text: 'Cari penghasilan tambahan (kerja sampingan)', impact: 'Inisiatif bagus! Menambah pendapatan keluarga.', score: 3 },
    ],
  },
  {
    actor: 'rtp',
    title: 'Kamu adalah RTP - Pemilik Toko Online',
    description: 'Ada produk impor murah yang bersaing dengan produkmu. Apa strategimu?',
    choices: [
      { text: 'Tingkatkan kualitas dan branding produk lokal', impact: 'Strategi tepat! Diferensiasi produk membuat unik.', score: 3 },
      { text: 'Turunkan harga hingga rugi', impact: 'Perang harga! Bisa bangkrut jika tidak sustain.', score: 1 },
      { text: 'Cari pasar niche yang tidak dilayani produk impor', impact: 'Strategi cerdas! Temukan segmen pasar khusus.', score: 3 },
    ],
  },
]

function RoleplayTab() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const [totalScore, setTotalScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState<Set<number>>(new Set())
  const [showFeedback, setShowFeedback] = useState(false)

  const scenario = scenarios[currentScenario]

  const handleChoose = (choiceIdx: number) => {
    if (showFeedback) return
    setSelectedChoice(choiceIdx)
    setShowFeedback(true)
    const score = scenario.choices[choiceIdx].score
    setTotalScore((prev) => prev + score)
    setCompletedScenarios((prev) => new Set(prev).add(currentScenario))
  }

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1)
      setSelectedChoice(null)
      setShowFeedback(false)
    }
  }

  const handleReset = () => {
    setCurrentScenario(0)
    setSelectedChoice(null)
    setTotalScore(0)
    setCompletedScenarios(new Set())
    setShowFeedback(false)
  }

  const getActorLabel = (actor: EconomicActor) => {
    switch (actor) {
      case 'rtk': return 'Rumah Tangga Konsumen'
      case 'rtp': return 'Rumah Tangga Produsen'
      case 'pemerintah': return 'Pemerintah'
      case 'luar-negeri': return 'Masyarakat Luar Negeri'
    }
  }

  const getActorColor = (actor: EconomicActor) => {
    switch (actor) {
      case 'rtk': return 'from-blue-500 to-blue-600'
      case 'rtp': return 'from-green-500 to-green-600'
      case 'pemerintah': return 'from-purple-500 to-purple-600'
      case 'luar-negeri': return 'from-orange-500 to-orange-600'
    }
  }

  const isComplete = completedScenarios.size === scenarios.length

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-indigo-50 rounded-lg p-4">
        <h4 className="font-bold text-indigo-900 mb-2">Roleplay Pelaku Ekonomi</h4>
        <p className="text-sm text-indigo-800">
          Mainkan peran sebagai berbagai pelaku ekonomi dan buat keputusan! Setiap pilihan mempengaruhi skor ekonomimu.
        </p>
      </div>

      {/* Score Bar */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-600">
            Skenario: {completedScenarios.size}/{scenarios.length}
          </span>
          <span className="text-sm font-semibold text-purple-600">
            Skor Ekonomi: {totalScore}
          </span>
        </div>
        <button onClick={handleReset} className="btn-secondary text-sm">
          <RotateCcw className="w-4 h-4 inline mr-1" /> Reset
        </button>
      </div>

      {!isComplete ? (
        <div className="space-y-6">
          {/* Scenario Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${getActorColor(scenario.actor)} mb-4`}>
              {getActorLabel(scenario.actor)}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h4>
            <p className="text-gray-700 mb-6">{scenario.description}</p>

            <div className="space-y-3">
              {scenario.choices.map((choice, cIdx) => (
                <div key={cIdx}>
                  {!showFeedback ? (
                    <button
                      onClick={() => handleChoose(cIdx)}
                      className="w-full text-left p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all"
                    >
                      <span className="font-medium text-gray-900">{String.fromCharCode(65 + cIdx)}.</span>
                      <span className="ml-2 text-gray-700">{choice.text}</span>
                    </button>
                  ) : (
                    <div
                      className={`p-4 rounded-lg border-2 ${
                        cIdx === selectedChoice
                          ? choice.score === 3
                            ? 'bg-green-50 border-green-400'
                            : 'bg-red-50 border-red-400'
                          : 'bg-gray-50 border-gray-200 opacity-50'
                      }`}
                    >
                      <span className="font-medium text-gray-900">{String.fromCharCode(65 + cIdx)}.</span>
                      <span className="ml-2 text-gray-700">{choice.text}</span>
                      {cIdx === selectedChoice && (
                        <p className={`mt-2 text-sm font-medium ${choice.score === 3 ? 'text-green-700' : 'text-red-700'}`}>
                          {choice.impact}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {showFeedback && currentScenario < scenarios.length - 1 && (
              <div className="mt-4">
                <button onClick={handleNext} className="btn-primary">
                  Skenario Berikutnya
                </button>
              </div>
            )}
          </div>

          {/* Circular Flow Diagram */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Diagram Sirkular Ekonomi</h4>
            <p className="text-xs text-gray-600 mb-3 text-center">Klik pada setiap pelaku untuk melihat interaksi!</p>
            
            <div className="relative w-full max-w-sm mx-auto" style={{ paddingBottom: '75%' }}>
              <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full">
                {/* Background circle */}
                <circle cx="300" cy="300" r="220" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Animated flow arrows */}
                <defs>
                  <marker id="arrowBlue" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 10 4, 0 8" fill="#3b82f6" />
                  </marker>
                  <marker id="arrowGreen" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 10 4, 0 8" fill="#10b981" />
                  </marker>
                  <marker id="arrowPurple" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 10 4, 0 8" fill="#8b5cf6" />
                  </marker>
                  <marker id="arrowOrange" markerWidth="10" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 10 4, 0 8" fill="#f97316" />
                  </marker>
                </defs>

                {/* Flow arrows: RTK → RTP (top) */}
                <motion.path
                  d="M 210 180 Q 300 130 390 180"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  markerEnd="url(#arrowBlue)"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <text x="300" y="155" textAnchor="middle" className="text-base fill-blue-700 font-bold">
                  Tenaga Kerja
                </text>

                {/* Flow arrows: RTP → RTK (right) */}
                <motion.path
                  d="M 440 210 Q 490 300 440 390"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  markerEnd="url(#arrowGreen)"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <text x="510" y="300" textAnchor="middle" className="text-base fill-green-700 font-bold">
                  Upah &amp; Sewa
                </text>

                {/* Flow arrows: Pemerintah ↔ RTP (bottom) */}
                <motion.path
                  d="M 390 420 Q 300 470 210 420"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="4"
                  markerEnd="url(#arrowPurple)"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <text x="300" y="455" textAnchor="middle" className="text-base fill-purple-700 font-bold">
                  Pajak &amp; Subsidi
                </text>

                {/* Flow arrows: Luar Negeri → RTK (left) */}
                <motion.path
                  d="M 160 390 Q 110 300 160 210"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="4"
                  markerEnd="url(#arrowOrange)"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <text x="90" y="300" textAnchor="middle" className="text-base fill-orange-700 font-bold">
                  Barang Impor
                </text>

                {/* Center label */}
                <circle cx="300" cy="300" r="65" fill="white" stroke="#d1d5db" strokeWidth="3" />
                <text x="300" y="293" textAnchor="middle" className="text-xl fill-gray-900 font-bold">
                  PASAR
                </text>
                <text x="300" y="315" textAnchor="middle" className="text-base fill-gray-600 font-semibold">
                  EKONOMI
                </text>

                {/* RTK (top-left) */}
                <circle cx="180" cy="180" r="55" fill="#dbeafe" stroke="#3b82f6" strokeWidth="4" />
                <text x="180" y="172" textAnchor="middle" className="text-lg fill-blue-900 font-bold">
                  RTK
                </text>
                <text x="180" y="192" textAnchor="middle" className="text-sm fill-blue-700">
                  Konsumen
                </text>

                {/* RTP (top-right) */}
                <circle cx="420" cy="180" r="55" fill="#d1fae5" stroke="#10b981" strokeWidth="4" />
                <text x="420" y="172" textAnchor="middle" className="text-lg fill-green-900 font-bold">
                  RTP
                </text>
                <text x="420" y="192" textAnchor="middle" className="text-sm fill-green-700">
                  Produsen
                </text>

                {/* Pemerintah (bottom-left) */}
                <circle cx="180" cy="420" r="55" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="4" />
                <text x="180" y="410" textAnchor="middle" className="text-base fill-purple-900 font-bold">
                  PEMERINTAH
                </text>
                <text x="180" y="430" textAnchor="middle" className="text-sm fill-purple-700">
                  Regulator
                </text>

                {/* Luar Negeri (bottom-right) */}
                <circle cx="420" cy="420" r="55" fill="#fed7aa" stroke="#f97316" strokeWidth="4" />
                <text x="420" y="410" textAnchor="middle" className="text-base fill-orange-900 font-bold">
                  LUAR NEGERI
                </text>
                <text x="420" y="430" textAnchor="middle" className="text-sm fill-orange-700">
                  Ekspor-Impor
                </text>
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-gray-700">RTK → RTP: Tenaga kerja</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-700">RTP → RTK: Upah & sewa</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span className="text-gray-700">Pemerintah: Pajak & subsidi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-gray-700">Luar Negeri: Ekspor-impor</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 text-center border-2 border-purple-300">
          <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-purple-900 mb-4">Semua Skenario Selesai!</h4>
          <p className="text-lg text-purple-800 mb-4">Skor Akhir: {totalScore}/{scenarios.length * 3}</p>
          <p className="text-purple-700">
            {totalScore >= scenarios.length * 2.5
              ? 'Luar biasa! Kamu memahami peran pelaku ekonomi dengan sangat baik!'
              : totalScore >= scenarios.length * 1.5
              ? 'Bagus! Kamu sudah cukup memahami peran pelaku ekonomi.'
              : 'Coba lagi untuk lebih memahami interaksi pelaku ekonomi!'}
          </p>
        </div>
      )}
    </motion.div>
  )
}

// ============================================================
// KUIS TAB
// ============================================================

function KuisTab() {
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [showResults, setShowResults] = useState<Record<number, boolean>>({})

  const questions = [
    {
      question: 'Rumah Tangga Konsumen (RTK) berperan sebagai...',
      options: ['Penghasil barang/jasa', 'Konsumen dan penyedia faktor produksi', 'Pengatur kebijakan ekonomi', 'Pelaku ekspor-impor'],
      correct: 1,
      explanation: 'RTK berperan sebagai konsumen (pemakai barang/jasa) dan penyedia faktor produksi (tenaga kerja, tanah, modal).',
    },
    {
      question: 'Rumah Tangga Produsen (RTP) berperan dalam...',
      options: ['Membeli barang konsumsi', 'Menghasilkan barang/jasa dan membayar faktor produksi', 'Membangun jalan tol', 'Melakukan investasi asing'],
      correct: 1,
      explanation: 'RTP berperan menghasilkan barang/jasa dan membayar faktor produksi (gaji, sewa, bunga) kepada RTK.',
    },
    {
      question: 'Pemerintah membangun jalan, sekolah, dan rumah sakit. Ini adalah peran pemerintah sebagai...',
      options: ['Konsumen', 'Produsen swasta', 'Pengatur dan pembangun infrastruktur', 'Investor asing'],
      correct: 2,
      explanation: 'Pemerintah berperan mengatur, mengawasi, dan membangun infrastruktur publik untuk kesejahteraan masyarakat.',
    },
    {
      question: 'Masyarakat ekonomi luar negeri berperan dalam...',
      options: ['Konsumsi rumah tangga', 'Produksi barang lokal', 'Perdagangan internasional dan investasi', 'Pembangunan infrastruktur publik'],
      correct: 2,
      explanation: 'Masyarakat luar negeri berperan dalam perdagangan internasional (ekspor-impor) dan investasi (penanaman modal asing).',
    },
  ]

  const handleCheck = (qIdx: number) => {
    if (answers[qIdx] !== null) {
      setShowResults((prev) => ({ ...prev, [qIdx]: true }))
    }
  }

  const handleReset = (qIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: null }))
    setShowResults((prev) => ({ ...prev, [qIdx]: false }))
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Kuis Pelaku Ekonomi</h3>

      {questions.map((q, qIdx) => (
        <div key={qIdx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-gray-900 mb-4">
            {qIdx + 1}. {q.question}
          </h4>
          <div className="space-y-2 mb-4">
            {q.options.map((option, oIdx) => (
              <button
                key={oIdx}
                onClick={() => !showResults[qIdx] && setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  answers[qIdx] === oIdx
                    ? showResults[qIdx]
                      ? oIdx === q.correct
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-red-100 border-2 border-red-500'
                      : 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                disabled={showResults[qIdx]}
              >
                <span className="font-medium mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                {option}
              </button>
            ))}
          </div>

          {showResults[qIdx] && answers[qIdx] !== null && (
            <div className={`p-4 rounded-lg mb-4 ${answers[qIdx] === q.correct ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-semibold mb-1">
                {answers[qIdx] === q.correct ? 'Benar!' : `Salah. Jawaban yang benar: ${String.fromCharCode(65 + q.correct)}`}
              </p>
              <p className="text-sm">{q.explanation}</p>
            </div>
          )}

          <div className="flex space-x-2">
            {!showResults[qIdx] ? (
              <button
                onClick={() => handleCheck(qIdx)}
                disabled={answers[qIdx] === null}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cek Jawaban
              </button>
            ) : (
              <button onClick={() => handleReset(qIdx)} className="btn-secondary">
                <RotateCcw className="w-4 h-4 inline mr-1" />
                Reset
              </button>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  )
}
