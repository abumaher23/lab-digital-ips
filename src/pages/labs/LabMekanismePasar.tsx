import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, TrendingUp, Store, ArrowUp, ArrowDown, RotateCcw, DollarSign, BarChart3, Clock, MapPin, Package } from 'lucide-react'

export default function LabMekanismePasar() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Scale className="w-10 h-10" />
          <div>
            <p className="text-purple-100 text-sm">Tema III - Pelajaran 6</p>
            <h2 className="text-3xl font-bold">Mekanisme Pasar & Pembentukan Harga</h2>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {[
            { id: 'materi' as const, label: 'Materi' },
            { id: 'simulasi' as const, label: 'Simulasi Supply-Demand' },
            { id: 'kuis' as const, label: 'Kuis' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-purple-50 text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'simulasi' && <SimulasiTab />}
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
      {/* A. Fungsi Pasar */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Store className="w-6 h-6 mr-2 text-purple-600" />
          A. Hakikat dan Fungsi Pasar
        </h3>
        <p className="text-gray-700 mb-4">
          Pasar adalah tempat pertemuan penjual dan pembeli untuk melakukan transaksi jual beli barang atau jasa. Pasar memiliki tiga fungsi utama:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
            <div className="flex items-center mb-3">
              <DollarSign className="w-6 h-6 text-purple-600 mr-2" />
              <h4 className="font-bold text-purple-900">Pembentukan Harga</h4>
            </div>
            <p className="text-sm text-purple-800">Pasar menentukan harga barang melalui interaksi permintaan dan penawaran antara penjual dan pembeli.</p>
          </div>

          <div className="bg-violet-50 rounded-lg p-5 border-l-4 border-violet-500">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-violet-600 mr-2" />
              <h4 className="font-bold text-violet-900">Distribusi Barang</h4>
            </div>
            <p className="text-sm text-violet-800">Pasar menyalurkan barang dari produsen ke konsumen, memastikan barang sampai ke yang membutuhkan.</p>
          </div>

          <div className="bg-fuchsia-50 rounded-lg p-5 border-l-4 border-fuchsia-500">
            <div className="flex items-center mb-3">
              <BarChart3 className="w-6 h-6 text-fuchsia-600 mr-2" />
              <h4 className="font-bold text-fuchsia-900">Promosi</h4>
            </div>
            <p className="text-sm text-fuchsia-800">Pasar menjadi tempat produsen memperkenalkan produk baru kepada konsumen secara langsung.</p>
          </div>
        </div>
      </section>

      {/* B. Klasifikasi Pasar */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2 text-indigo-600" />
          B. Klasifikasi Jenis Pasar
        </h3>

        <div className="space-y-6">
          {/* Berdasarkan Jenis Barang */}
          <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
            <div className="flex items-center mb-3">
              <Package className="w-5 h-5 text-indigo-600 mr-2" />
              <h4 className="font-bold text-indigo-900">Berdasarkan Jenis Barang</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-indigo-800 text-sm mb-1">Pasar Barang Konsumsi</p>
                <p className="text-xs text-indigo-700">Barang untuk kebutuhan langsung konsumen (makanan, pakaian)</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-indigo-800 text-sm mb-1">Pasar Barang Produksi</p>
                <p className="text-xs text-indigo-700">Barang untuk proses produksi (mesin, bahan baku)</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-indigo-800 text-sm mb-1">Pasar Faktor Produksi</p>
                <p className="text-xs text-indigo-700">Tenaga kerja, tanah, modal</p>
              </div>
            </div>
          </div>

          {/* Berdasarkan Luas Distribusi */}
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-900">Berdasarkan Luas Distribusi</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-blue-800 text-sm">Pasar Lokal</p>
                <p className="text-xs text-blue-700 mt-1">Dalam satu daerah</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-blue-800 text-sm">Pasar Regional</p>
                <p className="text-xs text-blue-700 mt-1">Antar daerah/provinsi</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-blue-800 text-sm">Pasar Nasional</p>
                <p className="text-xs text-blue-700 mt-1">Seluruh negara</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-blue-800 text-sm">Pasar Internasional</p>
                <p className="text-xs text-blue-700 mt-1">Antar negara</p>
              </div>
            </div>
          </div>

          {/* Berdasarkan Waktu */}
          <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
            <div className="flex items-center mb-3">
              <Clock className="w-5 h-5 text-amber-600 mr-2" />
              <h4 className="font-bold text-amber-900">Berdasarkan Waktu</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-amber-800 text-sm">Harian</p>
                <p className="text-xs text-amber-700 mt-1">Setiap hari (pasar pagi)</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-amber-800 text-sm">Mingguan</p>
                <p className="text-xs text-amber-700 mt-1">Sekali seminggu (pasar minggu)</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-amber-800 text-sm">Bulanan</p>
                <p className="text-xs text-amber-700 mt-1">Sekali sebulan</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-semibold text-amber-800 text-sm">Tahunan</p>
                <p className="text-xs text-amber-700 mt-1">Sekali setahun (PRJ)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. Pembentukan Harga */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Scale className="w-6 h-6 mr-2 text-green-600" />
          C. Pembentukan Harga (Equilibrium)
        </h3>
        <p className="text-gray-700 mb-4">
          Harga terbentuk dari interaksi antara <strong>permintaan</strong> (pihak pembeli) dan <strong>penawaran</strong> (pihak penjual). Titik temu keduanya disebut <strong>equilibrium</strong> (keseimbangan).
        </p>

        <div className="space-y-4">
          {/* Permintaan */}
          <div className="bg-red-50 rounded-lg p-5 border-l-4 border-red-500">
            <div className="flex items-center mb-2">
              <ArrowDown className="w-5 h-5 text-red-600 mr-2" />
              <h4 className="font-bold text-red-900">Permintaan (Demand)</h4>
            </div>
            <p className="text-sm text-red-800 mb-2">Jumlah barang yang ingin dibeli konsumen pada berbagai tingkat harga.</p>
            <div className="bg-white rounded p-3 text-sm">
              <p className="font-semibold text-red-800">Hukum Permintaan:</p>
              <p className="text-red-700">Jika harga NAIK, jumlah permintaan TURUN (ceteris paribus)</p>
              <p className="text-red-700">Jika harga TURUN, jumlah permintaan NAIK</p>
            </div>
          </div>

          {/* Penawaran */}
          <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
            <div className="flex items-center mb-2">
              <ArrowUp className="w-5 h-5 text-blue-600 mr-2" />
              <h4 className="font-bold text-blue-900">Penawaran (Supply)</h4>
            </div>
            <p className="text-sm text-blue-800 mb-2">Jumlah barang yang ingin dijual produsen pada berbagai tingkat harga.</p>
            <div className="bg-white rounded p-3 text-sm">
              <p className="font-semibold text-blue-800">Hukum Penawaran:</p>
              <p className="text-blue-700">Jika harga NAIK, jumlah penawaran NAIK (ceteris paribus)</p>
              <p className="text-blue-700">Jika harga TURUN, jumlah penawaran TURUN</p>
            </div>
          </div>

          {/* Equilibrium */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-300">
            <div className="flex items-center mb-2">
              <Scale className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="font-bold text-green-900">Titik Keseimbangan (Equilibrium)</h4>
            </div>
            <p className="text-sm text-green-800 mb-3">
              Titik di mana jumlah permintaan sama dengan jumlah penawaran. Pada titik ini, harga stabil karena tidak ada tekanan untuk naik atau turun.
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <p className="text-sm font-semibold text-red-600">Permintaan {'>'} Penawaran</p>
                  <p className="text-xs text-gray-600">Shortage → Harga NAIK</p>
                </div>
                <div className="bg-green-100 rounded-full px-4 py-2">
                  <p className="font-bold text-green-800">Equilibrium</p>
                  <p className="text-xs text-green-700">Harga STABIL</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-blue-600">Penawaran {'>'} Permintaan</p>
                  <p className="text-xs text-gray-600">Surplus → Harga TURUN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

// ============================================================
// SIMULASI TAB
// ============================================================

function SimulasiTab() {
  const [basePrice, setBasePrice] = useState(50)
  const [demandShift, setDemandShift] = useState(0)
  const [supplyShift, setSupplyShift] = useState(0)

  // Demand: decreases as price increases (inverse relationship)
  // Qd = 100 - price + demandShift
  const demand = Math.max(0, Math.min(100, 100 - basePrice + demandShift))

  // Supply: increases as price increases (direct relationship)
  // Qs = price + supplyShift
  const supply = Math.max(0, Math.min(100, basePrice + supplyShift))

  const difference = demand - supply

  const getStatus = () => {
    if (difference > 10) return { text: 'KEKURANGAN (Excess Demand)', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-300', desc: 'Permintaan jauh lebih besar dari penawaran. Harga cenderung NAIK!' }
    if (difference > 0) return { text: 'Sedikit Kekurangan', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-300', desc: 'Permintaan sedikit lebih besar. Harga mungkin naik perlahan.' }
    if (difference === 0) return { text: 'EQUILIBRIUM (Keseimbangan)', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-300', desc: 'Permintaan = Penawaran! Harga stabil. Ini adalah titik keseimbangan pasar.' }
    if (difference > -10) return { text: 'Sedikit Kelebihan', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-300', desc: 'Penawaran sedikit lebih besar. Harga mungkin turun perlahan.' }
    return { text: 'KELEBIHAN (Excess Supply)', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-300', desc: 'Penawaran jauh lebih besar dari permintaan. Harga cenderung TURUN!' }
  }

  const status = getStatus()

  // Visual bar heights (percentage)
  const demandBarHeight = demand
  const supplyBarHeight = supply

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="bg-purple-50 rounded-lg p-4">
        <h4 className="font-bold text-purple-900 mb-2">Simulasi Supply & Demand</h4>
        <p className="text-sm text-purple-800">
          Atur harga, pergeseran permintaan, dan pergeseran penawaran untuk melihat bagaimana harga keseimbangan terbentuk!
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6 space-y-5">
        {/* Price Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Harga Barang</label>
            <span className="text-sm font-bold text-purple-700">Rp {(basePrice * 1000).toLocaleString('id-ID')}</span>
          </div>
          <input
            type="range"
            min="10"
            max="90"
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
        </div>

        {/* Demand Shift */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Pergeseran Permintaan</label>
            <span className="text-sm font-bold text-red-600">{demandShift > 0 ? '+' : ''}{demandShift}</span>
          </div>
          <input
            type="range"
            min="-30"
            max="30"
            value={demandShift}
            onChange={(e) => setDemandShift(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Permintaan Turun (-30)</span>
            <span>Permintaan Naik (+30)</span>
          </div>
        </div>

        {/* Supply Shift */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-gray-700">Pergeseran Penawaran</label>
            <span className="text-sm font-bold text-blue-600">{supplyShift > 0 ? '+' : ''}{supplyShift}</span>
          </div>
          <input
            type="range"
            min="-30"
            max="30"
            value={supplyShift}
            onChange={(e) => setSupplyShift(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Penawaran Turun (-30)</span>
            <span>Penawaran Naik (+30)</span>
          </div>
        </div>

        {/* Reset */}
        <button onClick={() => { setBasePrice(50); setDemandShift(0); setSupplyShift(0) }} className="btn-secondary w-full">
          <RotateCcw className="w-4 h-4 inline mr-1" /> Reset ke Default
        </button>
      </div>

      {/* Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Demand */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
          <h5 className="font-bold text-red-900 mb-3 flex items-center">
            <ArrowDown className="w-5 h-5 mr-2" />
            Permintaan (Demand)
          </h5>
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-red-600">{demand}</span>
            <span className="text-lg text-red-500 ml-1">unit</span>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-end justify-center h-32 space-x-1">
              {Array.from({ length: 20 }, (_, i) => {
                const barH = Math.max(4, Math.min(100, 100 - (i * 5) + demandShift))
                return (
                  <div
                    key={i}
                    className="w-3 bg-gradient-to-t from-red-400 to-red-500 rounded-t transition-all duration-300"
                    style={{ height: `${barH}%` }}
                  />
                )
              })}
            </div>
            <p className="text-xs text-red-600 mt-2 text-center">Kurva permintaan menurun (harga naik, permintaan turun)</p>
          </div>
        </div>

        {/* Supply */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <h5 className="font-bold text-blue-900 mb-3 flex items-center">
            <ArrowUp className="w-5 h-5 mr-2" />
            Penawaran (Supply)
          </h5>
          <div className="text-center mb-3">
            <span className="text-4xl font-bold text-blue-600">{supply}</span>
            <span className="text-lg text-blue-500 ml-1">unit</span>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="flex items-end justify-center h-32 space-x-1">
              {Array.from({ length: 20 }, (_, i) => {
                const barH = Math.max(4, Math.min(100, i * 5 + supplyShift))
                return (
                  <div
                    key={i}
                    className="w-3 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t transition-all duration-300"
                    style={{ height: `${barH}%` }}
                  />
                )
              })}
            </div>
            <p className="text-xs text-blue-600 mt-2 text-center">Kurva penawaran menaik (harga naik, penawaran naik)</p>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className={`${status.bg} rounded-xl p-6 border-2 ${status.border}`}>
        <h5 className={`text-xl font-bold ${status.color} mb-2 flex items-center`}>
          <Scale className="w-6 h-6 mr-2" />
          {status.text}
        </h5>
        <p className="text-gray-700">{status.desc}</p>

        {/* Comparison bars */}
        <div className="mt-4 bg-white rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-red-600">Permintaan: {demand}</span>
            <span className="text-sm font-semibold text-blue-600">Penawaran: {supply}</span>
          </div>
          <div className="flex items-end space-x-4 h-20">
            <div className="flex-1 bg-red-100 rounded-t-lg relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-red-500 rounded-t-lg transition-all duration-300"
                style={{ height: `${demandBarHeight}%` }}
              />
            </div>
            <div className="flex-1 bg-blue-100 rounded-t-lg relative">
              <div
                className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg transition-all duration-300"
                style={{ height: `${supplyBarHeight}%` }}
              />
            </div>
          </div>
        </div>

        {Math.abs(difference) <= 5 && (
          <div className="mt-3 bg-green-100 rounded p-3">
            <p className="text-sm text-green-800 font-semibold">
              Harga mendekati equilibrium! Permintaan dan penawaran hampir seimbang.
            </p>
          </div>
        )}
      </div>

      {/* Market Insight */}
      <div className="bg-violet-50 rounded-xl p-6">
        <h4 className="font-bold text-violet-900 mb-3">Insight Pasar</h4>
        <div className="space-y-2 text-sm text-violet-800">
          <p>Coba atur harga ke Rp 50.000 tanpa pergeseran. Kamu akan melihat equilibrium!</p>
          <p>Naikkan permintaan (+20): terjadi shortage, harga seharusnya naik.</p>
          <p>Naikkan penawaran (+20): terjadi surplus, harga seharusnya turun.</p>
          <p className="font-semibold mt-3">
            Dalam pasar nyata, harga akan bergerak menuju equilibrium secara otomatis melalui mekanisme pasar!
          </p>
        </div>
      </div>
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
      question: 'Salah satu fungsi pasar adalah pembentukan harga. Harga terbentuk dari interaksi antara...',
      options: ['Produsen dan pemerintah', 'Permintaan dan penawaran', 'Ekspor dan impor', 'Konsumen dan distributor'],
      correct: 1,
      explanation: 'Harga terbentuk dari interaksi antara permintaan (pihak pembeli) dan penawaran (pihak penjual) di pasar.',
    },
    {
      question: 'Pasar yang memperjualbelikan barang untuk kebutuhan langsung konsumen disebut...',
      options: ['Pasar faktor produksi', 'Pasar barang produksi', 'Pasar barang konsumsi', 'Pasar modal'],
      correct: 2,
      explanation: 'Pasar barang konsumsi memperjualbelikan barang yang langsung dikonsumsi, seperti makanan dan pakaian.',
    },
    {
      question: 'Menurut hukum permintaan, ketika harga naik maka...',
      options: ['Jumlah permintaan naik', 'Jumlah permintaan turun', 'Jumlah penawaran turun', 'Harga tetap stabil'],
      correct: 1,
      explanation: 'Hukum permintaan: jika harga naik, jumlah permintaan turun (ceteris paribus), dan sebaliknya.',
    },
    {
      question: 'Titik di mana jumlah permintaan sama dengan jumlah penawaran disebut...',
      options: ['Surplus', 'Shortage', 'Equilibrium', 'Defisit'],
      correct: 2,
      explanation: 'Equilibrium (keseimbangan) adalah titik di mana permintaan sama dengan penawaran, sehingga harga stabil.',
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
      <h3 className="text-xl font-bold text-gray-900">Kuis Mekanisme Pasar</h3>

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
