import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, Sun, Wind, Thermometer, Droplets, CloudRain, AlertTriangle, TrendingUp, Heart, Users, Factory, Car, TreePine, Trash2, Fish, Zap, Droplet, Leaf, Recycle } from 'lucide-react'

export default function LabIklim() {
  const [activeTab, setActiveTab] = useState<'materi' | 'pencemaran' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Cloud className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Perubahan Iklim</h2>
            <p className="text-orange-100">Pelajaran 4: Fenomena Perubahan Iklim di Indonesia</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {([
            { key: 'materi', label: 'Materi' },
            { key: 'pencemaran', label: 'Pencemaran' },
            { key: 'simulasi', label: 'Simulasi' },
            { key: 'kuis', label: 'Kuis' },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 px-4 py-3 font-medium transition-colors ${
                activeTab === key
                  ? 'bg-orange-50 text-orange-700 border-b-2 border-orange-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {key === 'materi' ? '📖 ' : key === 'simulasi' ? '🎮 ' : '💡 '}
              {label}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === 'materi' && <MateriTab />}
          {activeTab === 'pencemaran' && <PencemaranTab />}
          {activeTab === 'simulasi' && <SimulasiTab />}
          {activeTab === 'kuis' && <KuisTab />}
        </div>
      </div>
    </div>
  )
}

// ==================== MATERI TAB ====================
function MateriTab() {
  const [expandedSection, setExpandedSection] = useState<string | null>('cuaca-iklim')

  const sections = [
    {
      id: 'cuaca-iklim',
      title: 'Perbedaan Cuaca dan Iklim',
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Banyak orang sering tertukar antara konsep cuaca dan iklim. Padahal, keduanya memiliki perbedaan yang mendasar pada cakupan waktu dan wilayahnya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Cloud className="w-5 h-5 text-blue-600" />
                <h5 className="font-bold text-blue-800">Cuaca</h5>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Kondisi rata-rata udara pada <strong>saat tertentu</strong> di suatu wilayah yang <strong>relatif sempit</strong> dan dalam <strong>waktu singkat</strong>.
              </p>
              <div className="bg-blue-50 rounded p-2 text-xs text-blue-800">
                <strong>Contoh:</strong> Suhu udara di Kabupaten Bantul pagi ini mencapai 24°C, atau hujan lebat disertai angin di Kabupaten Bogor sore ini.
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-500 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h5 className="font-bold text-indigo-800">Iklim</h5>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Kondisi cuaca rata-rata <strong>tahunan</strong> pada suatu wilayah yang <strong>luas</strong>.
              </p>
              <div className="bg-indigo-50 rounded p-2 text-xs text-indigo-800">
                <strong>Contoh:</strong> Indonesia beriklim tropis. Secara umum, Indonesia mengalami dua musim, yaitu musim hujan (Oktober—Maret) dan musim kemarau (April—September).
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'unsur',
      title: 'Unsur-Unsur Cuaca dan Iklim',
      color: 'green',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Kondisi atmosfer dapat diamati dengan memperhatikan unsur-unsurnya. Unsur-unsur ini sangat memengaruhi kehidupan, terutama pada sektor pertanian.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                title: 'Penyinaran Matahari',
                desc: 'Lamanya matahari bersinar memengaruhi suhu udara dan proses fotosintesis tanaman.',
                bg: 'bg-yellow-50',
                border: 'border-yellow-400',
              },
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: 'Suhu',
                desc: 'Derajat panas atau dingin udara. Suhu yang terlalu tinggi dapat mengurangi kadar air sehingga tanaman cenderung mengering.',
                bg: 'bg-red-50',
                border: 'border-red-400',
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: 'Kelembapan',
                desc: 'Kemampuan udara dalam mengandung uap air. Berfungsi membatasi hilangnya air pada tanaman.',
                bg: 'bg-cyan-50',
                border: 'border-cyan-400',
              },
              {
                icon: <Wind className="w-6 h-6" />,
                title: 'Angin',
                desc: 'Gerak alami udara yang sejajar dengan bumi. Membantu proses penyerbukan alami dan penyebaran uap air.',
                bg: 'bg-sky-50',
                border: 'border-sky-400',
              },
              {
                icon: <CloudRain className="w-6 h-6" />,
                title: 'Curah Hujan',
                desc: 'Intensitas turunnya air dari langit. Meningkatkan kadar air tanah, namun jika berlebihan dapat mengikis tanah.',
                bg: 'bg-blue-50',
                border: 'border-blue-400',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`${item.bg} rounded-lg p-4 border-l-4 ${item.border}`}
              >
                <div className={`${item.border.replace('border-', 'text-')} mb-2`}>{item.icon}</div>
                <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                <p className="text-xs text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'dampak',
      title: 'Dampak Perubahan Iklim',
      color: 'red',
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <p className="font-semibold text-red-800">
                Perubahan iklim adalah berubahnya kondisi fisik atmosfer bumi, seperti suhu dan distribusi curah hujan, yang membawa dampak luas bagi sektor kehidupan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-orange-100 rounded-full p-2">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <h5 className="font-bold text-gray-900">Ekonomi</h5>
              </div>
              <p className="text-sm text-gray-700">
                Curah hujan ekstrem dapat menyebabkan <strong>banjir pada lahan sayuran</strong> sehingga petani gagal panen dan mengalami penurunan produksi secara drastis.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h5 className="font-bold text-gray-900">Sosial Budaya</h5>
              </div>
              <p className="text-sm text-gray-700">
                Kenaikan permukaan air laut membuat <strong>nelayan kesulitan mencari ikan</strong> di laut. Cuaca yang tidak menentu membuat orang harus selalu siap membawa payung atau jas hujan.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h5 className="font-bold text-gray-900">Kesehatan</h5>
              </div>
              <p className="text-sm text-gray-700">
                Masa peralihan musim (<strong>pancaroba</strong>) dapat memicu gangguan kesehatan seperti radang tenggorokan, flu, dan demam akibat perubahan suhu.
              </p>
            </motion.div>
          </div>
        </div>
      ),
    },
  ]

  const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-800', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-800', icon: 'text-green-600' },
    red: { bg: 'bg-red-50', text: 'text-red-800', icon: 'text-red-600' },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Fenomena Perubahan Iklim di Indonesia</h3>
      {sections.map((section) => {
        const colors = colorMap[section.color]
        const isExpanded = expandedSection === section.id
        return (
          <div key={section.id} className={`rounded-xl border border-gray-200 overflow-hidden ${colors.bg}`}>
            <button
              onClick={() => setExpandedSection(isExpanded ? null : section.id)}
              className={`w-full text-left px-5 py-4 flex items-center justify-between hover:opacity-80 transition-opacity`}
            >
              <h4 className={`text-lg font-bold ${colors.text}`}>{section.title}</h4>
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} className="text-2xl text-gray-500">
                ▾
              </motion.span>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">{section.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </motion.div>
  )
}

// ==================== PENCEMARAN TAB ====================
function PencemaranTab() {
  const [activeSection, setActiveSection] = useState<'udara' | 'air' | 'tanah' | 'pelestarian'>('udara')
  const [checkedPollution, setCheckedPollution] = useState<Record<string, boolean>>({})
  const [checkedConservation, setCheckedConservation] = useState<Record<string, boolean>>({})

  const togglePollution = (id: string) => {
    setCheckedPollution((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleConservation = (id: string) => {
    setCheckedConservation((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const pollutionCount = Object.values(checkedPollution).filter(Boolean).length
  const conservationCount = Object.values(checkedConservation).filter(Boolean).length

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Pencemaran Lingkungan & Upaya Pelestarian</h3>
      <p className="text-gray-600 mb-4">
        Pelajari jenis-jenis pencemaran lingkungan, dampaknya bagi kehidupan, dan upaya pelestarian yang bisa kita lakukan.
      </p>

      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(
          [
            { key: 'udara', label: 'Pencemaran Udara', icon: <Wind className="w-4 h-4" />, color: 'gray' },
            { key: 'air', label: 'Pencemaran Air', icon: <Droplets className="w-4 h-4" />, color: 'blue' },
            { key: 'tanah', label: 'Pencemaran Tanah', icon: <Trash2 className="w-4 h-4" />, color: 'amber' },
            { key: 'pelestarian', label: 'Upaya Pelestarian', icon: <Leaf className="w-4 h-4" />, color: 'green' },
          ] as const
        ).map(({ key, label, icon, color }) => {
          const colorMap: Record<string, { active: string; inactive: string }> = {
            gray: { active: 'bg-gray-700 text-white', inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
            blue: { active: 'bg-blue-600 text-white', inactive: 'bg-blue-50 text-blue-700 hover:bg-blue-100' },
            amber: { active: 'bg-amber-600 text-white', inactive: 'bg-amber-50 text-amber-700 hover:bg-amber-100' },
            green: { active: 'bg-green-600 text-white', inactive: 'bg-green-50 text-green-700 hover:bg-green-100' },
          }
          const colors = colorMap[color]
          return (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === key ? colors.active : colors.inactive
              }`}
            >
              {icon}
              <span>{label}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {/* PENCEMARAN UDARA */}
        {activeSection === 'udara' && (
          <motion.div
            key="udara"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-3">
                <Factory className="w-6 h-6 text-red-600" />
                <h4 className="text-lg font-bold text-red-800">Pencemaran Udara</h4>
              </div>
              <p className="text-sm text-red-700 mb-4">
                Pencemaran udara terjadi ketika gas berbahaya dilepaskan ke atmosfer, mengubah komposisi udara dan mengganggu keseimbangan ekosistem.
              </p>

              {/* Penyebab */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>Penyebab Utama</span>
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    { id: 'u1', text: 'Emisi gas CO₂, COₓ, SOₓ, NOₓ dari kendaraan bermotor' },
                    { id: 'u2', text: 'Asap pabrik dan industri manufaktur' },
                    { id: 'u3', text: 'Pembakaran hutan dan lahan' },
                    { id: 'u4', text: 'Debu dan partikel halus dari konstruksi' },
                  ].map((item) => (
                    <li key={item.id} className="flex items-start space-x-2">
                      <button
                        onClick={() => togglePollution(item.id)}
                        className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          checkedPollution[item.id] ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300 hover:border-red-400'
                        }`}
                      >
                        {checkedPollution[item.id] && '✓'}
                      </button>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  ✅ Centang sumber pencemaran yang kamu ketahui ({pollutionCount}/4)
                </p>
              </div>

              {/* Efek Rumah Kaca */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <h5 className="font-bold text-orange-800 mb-2 flex items-center space-x-2">
                  <Thermometer className="w-4 h-4" />
                  <span>Efek Rumah Kaca</span>
                </h5>
                <div className="text-sm text-orange-700 space-y-2">
                  <div className="flex items-center space-x-2 bg-orange-100 rounded p-2">
                    <Factory className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">Emisi CO₂ meningkat</span>
                  </div>
                  <div className="text-center text-orange-400">↓</div>
                  <div className="flex items-center space-x-2 bg-orange-100 rounded p-2">
                    <Cloud className="w-4 h-4 text-orange-600" />
                    <span className="font-medium">CO₂ memerangkap panas di atmosfer</span>
                  </div>
                  <div className="text-center text-orange-400">↓</div>
                  <div className="flex items-center space-x-2 bg-red-100 rounded p-2">
                    <Sun className="w-4 h-4 text-red-600" />
                    <span className="font-bold">Pemanasan Global</span>
                  </div>
                </div>
              </div>

              {/* Dampak */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <h5 className="font-bold text-red-800">Dampak Kesehatan</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Asma dan gangguan pernapasan</li>
                    <li>• Bronkitis kronis</li>
                    <li>• Infeksi saluran pernapasan (ISPA)</li>
                    <li>• Penurunan fungsi paru-paru</li>
                  </ul>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <h5 className="font-bold text-red-800">Dampak Lainnya</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jarak pandang berkurang → risiko kecelakaan</li>
                    <li>• Korosi pada bangunan dan infrastruktur</li>
                    <li>• Hujan asam merusak tanaman</li>
                    <li>• Gangguan pada ekosistem</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PENCEMARAN AIR */}
        {activeSection === 'air' && (
          <motion.div
            key="air"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-3">
                <Droplets className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-bold text-blue-800">Pencemaran Air</h4>
              </div>
              <p className="text-sm text-blue-700 mb-4">
                Pencemaran air terjadi ketika zat-zat berbahaya masuk ke dalam sumber air seperti sungai, danau, atau laut, mengganggu kualitas dan ekosistem air.
              </p>

              {/* Penyebab */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-blue-600" />
                  <span>Penyebab Utama</span>
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    { id: 'a1', text: 'Limbah industri dibuang langsung ke sungai/laut' },
                    { id: 'a2', text: 'Limbah rumah tangga (detergen, sampah)' },
                    { id: 'a3', text: 'Penggunaan bahan peledak untuk menangkap ikan' },
                    { id: 'a4', text: 'Pestisida dari pertanian yang terbawa aliran air' },
                  ].map((item) => (
                    <li key={item.id} className="flex items-start space-x-2">
                      <button
                        onClick={() => togglePollution(item.id)}
                        className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          checkedPollution[item.id] ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        {checkedPollution[item.id] && '✓'}
                      </button>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  ✅ Centang sumber pencemaran yang kamu ketahui ({pollutionCount}/4)
                </p>
              </div>

              {/* Eutrofikasi */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
                <h5 className="font-bold text-cyan-800 mb-2 flex items-center space-x-2">
                  <Fish className="w-4 h-4" />
                  <span>Eutrofikasi</span>
                </h5>
                <div className="text-sm text-cyan-700 space-y-2">
                  <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                    <Droplet className="w-4 h-4 text-cyan-600" />
                    <span className="font-medium">Nutrisi berlebih masuk ke air</span>
                  </div>
                  <div className="text-center text-cyan-400">↓</div>
                  <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                    <span className="font-medium">Ledakan populasi alga (<em>blooming algae</em>) menutupi permukaan air</span>
                  </div>
                  <div className="text-center text-cyan-400">↓</div>
                  <div className="flex items-center space-x-2 bg-cyan-100 rounded p-2">
                    <Sun className="w-4 h-4 text-cyan-600" />
                    <span className="font-medium">Sinar matahari terhambat → fotosintesis fitoplankton terganggu</span>
                  </div>
                  <div className="text-center text-cyan-400">↓</div>
                  <div className="flex items-center space-x-2 bg-red-100 rounded p-2">
                    <Fish className="w-4 h-4 text-red-600" />
                    <span className="font-bold">Oksigen turun → ikan dan organisme air mati</span>
                  </div>
                </div>
              </div>

              {/* Dampak */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <h5 className="font-bold text-red-800">Dampak Kesehatan</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Air sumur tercemar → tidak layak minum</li>
                    <li>• Ikan beracun → kerusakan saraf</li>
                    <li>• Risiko kanker dari logam berat</li>
                    <li>• Gangguan reproduksi & kemandulan</li>
                  </ul>
                </div>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-blue-600" />
                    <h5 className="font-bold text-blue-800">Dampak Lingkungan</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kematian massal ikan dan biota air</li>
                    <li>• Rusaknya terumbu karang</li>
                    <li>• Air berwarna & berbau tidak sedap</li>
                    <li>• Hilangnya keanekaragaman hayati air</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PENCEMARAN TANAH */}
        {activeSection === 'tanah' && (
          <motion.div
            key="tanah"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-3">
                <Trash2 className="w-6 h-6 text-amber-600" />
                <h4 className="text-lg font-bold text-amber-800">Pencemaran Tanah</h4>
              </div>
              <p className="text-sm text-amber-700 mb-4">
                Pencemaran tanah terjadi ketika zat-zat berbahaya mencemari permukaan tanah, mengurangi kesuburan dan mengancam ketahanan pangan.
              </p>

              {/* Penyebab */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="font-bold text-gray-900 mb-2 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Penyebab Utama</span>
                </h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    { id: 't1', text: 'Sampah plastik sulit terurai (ratusan tahun)' },
                    { id: 't2', text: 'Pestisida berlebihan: 80% jatuh ke tanah, bukan ke hama' },
                    { id: 't3', text: 'Limbah industri dan pertambangan' },
                    { id: 't4', text: 'Pupuk kimia berlebihan merusak struktur tanah' },
                  ].map((item) => (
                    <li key={item.id} className="flex items-start space-x-2">
                      <button
                        onClick={() => togglePollution(item.id)}
                        className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                          checkedPollution[item.id] ? 'bg-amber-500 border-amber-500 text-white' : 'border-gray-300 hover:border-amber-400'
                        }`}
                      >
                        {checkedPollution[item.id] && '✓'}
                      </button>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  ✅ Centang sumber pencemaran yang kamu ketahui ({pollutionCount}/4)
                </p>
              </div>

              {/* Fakta Pestisida */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h5 className="font-bold text-red-800">Fakta Mengejutkan: Pestisida</h5>
                </div>
                <p className="text-sm text-red-700">
                  <strong>80% pestisida yang disemprotkan jatuh ke tanah</strong>, bukan mengenai hama target. Zat kimia ini meresap ke dalam tanah, membunuh mikroorganisme menguntungkan, dan mencemari air tanah.
                </p>
              </div>

              {/* Dampak */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-amber-600" />
                    <h5 className="font-bold text-amber-800">Dampak Lingkungan</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tanah kehilangan unsur hara</li>
                    <li>• Tanah menjadi tidak produktif</li>
                    <li>• Ancaman ketahanan pangan nasional</li>
                    <li>• Menurunnya kualitas hasil pertanian</li>
                  </ul>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <h5 className="font-bold text-red-800">Dampak Kesehatan</h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Zat karsinogenik merusak otak</li>
                    <li>• Kerusakan fungsi ginjal</li>
                    <li>• Gangguan hormon & reproduksi</li>
                    <li>• Risiko kanker jangka panjang</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* UPAYA PELESTARIAN */}
        {activeSection === 'pelestarian' && (
          <motion.div
            key="pelestarian"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
              <div className="flex items-center space-x-2 mb-3">
                <Leaf className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-green-800">Upaya Pelestarian Lingkungan</h4>
              </div>
              <p className="text-sm text-green-700 mb-4">
                Setiap individu bisa berkontribusi menjaga lingkungan. Centang aksi pelestarian yang sudah kamu lakukan!
              </p>

              {/* Pelestarian Udara */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Wind className="w-5 h-5 text-sky-600" />
                  <h5 className="font-bold text-sky-800">Pelestarian Udara</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-sky-50 rounded p-3 text-sm text-sky-800">
                    <p className="font-semibold mb-1">Solusi:</p>
                    <ul className="space-y-1">
                      <li>• Transisi ke kendaraan listrik/gas</li>
                      <li>• Menanam pohon untuk produksi oksigen</li>
                      <li>• Mengurangi penggunaan bahan bakar fosil</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-800">Aksi Nyata:</p>
                    {[
                      { id: 'c1', text: 'Tidak merokok' },
                      { id: 'c2', text: 'Tidak membakar sampah' },
                      { id: 'c3', text: 'Bersepeda ke sekolah/tempat kerja' },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <button
                          onClick={() => toggleConservation(item.id)}
                          className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            checkedConservation[item.id] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          {checkedConservation[item.id] && '✓'}
                        </button>
                        <span>{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pelestarian Air */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <h5 className="font-bold text-blue-800">Pelestarian Air</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-blue-50 rounded p-3 text-sm text-blue-800">
                    <p className="font-semibold mb-1">Solusi:</p>
                    <ul className="space-y-1">
                      <li>• Membuat sumur resapan untuk siklus hidrologi</li>
                      <li>• Program Kali Bersih & rawat pintu air</li>
                      <li>• Tidak membuang limbah ke sungai</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-800">Aksi Nyata:</p>
                    {[
                      { id: 'c4', text: 'Buang sampah pada tempatnya' },
                      { id: 'c5', text: 'Gunakan detergen ramah lingkungan' },
                      { id: 'c6', text: 'Hemat penggunaan air' },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <button
                          onClick={() => toggleConservation(item.id)}
                          className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            checkedConservation[item.id] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          {checkedConservation[item.id] && '✓'}
                        </button>
                        <span>{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pelestarian Tanah */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Recycle className="w-5 h-5 text-amber-600" />
                  <h5 className="font-bold text-amber-800">Pelestarian Tanah</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-amber-50 rounded p-3 text-sm text-amber-800">
                    <p className="font-semibold mb-1">Solusi:</p>
                    <ul className="space-y-1">
                      <li>• Ganti pupuk kimia → pupuk organik</li>
                      <li>• <strong>Bioremediasi:</strong> Pembersihan tanah dengan mikroorganisme (jamur/bakteri)</li>
                      <li>• Rotasi tanaman untuk menjaga kesuburan</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-800">Aksi Nyata:</p>
                    {[
                      { id: 'c7', text: 'Kurangi plastik sekali pakai' },
                      { id: 'c8', text: 'Berkebun organik di rumah' },
                      { id: 'c9', text: 'Pilah sampah organik & anorganik' },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                        <button
                          onClick={() => toggleConservation(item.id)}
                          className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                            checkedConservation[item.id] ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          {checkedConservation[item.id] && '✓'}
                        </button>
                        <span>{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="bg-green-100 rounded-lg p-4 border border-green-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-green-800 flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Progress Aksi Pelestarianmu</span>
                  </span>
                  <span className="text-lg font-bold text-green-900">{conservationCount}/9</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(conservationCount / 9) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                {conservationCount === 9 && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-green-800 font-bold text-center mt-2"
                  >
                    Luar biasa! Kamu sudah melakukan semua aksi pelestarian! 🌍
                  </motion.p>
                )}
                {conservationCount > 0 && conservationCount < 9 && (
                  <p className="text-sm text-green-700 text-center mt-2">
                    Terus tingkatkan! Setiap aksi kecilmu berarti bagi bumi.
                  </p>
                )}
                {conservationCount === 0 && (
                  <p className="text-sm text-green-600 text-center mt-2">
                    Yuk, mulai lakukan aksi pelestarian dari yang paling mudah!
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ==================== SIMULASI TAB ====================
function SimulasiTab() {
  const [co2Level, setCo2Level] = useState(30)
  const [temperature, setTemperature] = useState(26)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setTemperature((_prev) => {
        const base = 20 + (co2Level / 100) * 20
        const fluctuation = (Math.random() - 0.5) * 1
        return Math.round((base + fluctuation) * 10) / 10
      })
    }, 800)
    return () => clearInterval(interval)
  }, [co2Level, isRunning])

  const co2Sources = [
    { label: 'Kendaraan Bermotor', icon: <Car className="w-4 h-4" />, value: 15 },
    { label: 'Pabrik & Industri', icon: <Factory className="w-4 h-4" />, value: 25 },
    { label: 'Deforestasi', icon: <TreePine className="w-4 h-4" />, value: 10 },
  ]

  const getTemperatureColor = (temp: number) => {
    if (temp < 28) return 'from-blue-400 to-cyan-400'
    if (temp < 32) return 'from-yellow-400 to-orange-400'
    return 'from-orange-500 to-red-600'
  }

  const getTemperatureLabel = (temp: number) => {
    if (temp < 28) return { text: 'Normal', color: 'text-blue-600' }
    if (temp < 32) return { text: 'Hangat', color: 'text-yellow-600' }
    return { text: 'Panas!', color: 'text-red-600' }
  }

  const tempLabel = getTemperatureLabel(temperature)

  const addCO2 = (amount: number) => {
    setCo2Level((prev) => Math.min(100, prev + amount))
    setIsRunning(true)
  }

  const reduceCO2 = () => {
    setCo2Level((prev) => Math.max(0, prev - 15))
  }

  const resetSimulasi = () => {
    setCo2Level(30)
    setTemperature(26)
    setIsRunning(false)
  }

  // Calculate how many heat rays are trapped
  const trappedRays = Math.floor((co2Level / 100) * 6)
  const escapedRays = 6 - trappedRays

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="bg-orange-50 rounded-lg p-4">
        <h4 className="font-bold text-orange-900 mb-2">🎮 Simulasi Efek Rumah Kaca</h4>
        <p className="text-sm text-orange-800">
          Geser slider CO₂ untuk melihat bagaimana gas karbon dioksida memerangkap panas di atmosfer bumi.
          CO₂ dapat ditembus panas matahari namun sulit memantulkannya kembali ke luar angkasa.
        </p>
      </div>

      {/* Simulation Visual */}
      <div className="bg-gradient-to-b from-sky-300 via-sky-200 to-green-200 rounded-xl p-6 relative overflow-hidden" style={{ minHeight: '380px' }}>
        {/* Sun */}
        <motion.div
          className="absolute top-4 right-8"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sun className="w-16 h-16 text-yellow-400" />
        </motion.div>

        {/* Incoming sun rays */}
        <div className="absolute top-16 right-20">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`incoming-${i}`}
              className="absolute w-1 bg-yellow-300 rounded-full"
              style={{ height: '80px', transformOrigin: 'top' }}
              initial={{ x: -i * 20 - 10, y: 0, rotate: -10 + i * 4 }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        {/* CO2 Layer */}
        <motion.div
          className="absolute left-0 right-0 bg-gradient-to-b from-gray-600 to-gray-400 rounded-xl flex items-center justify-center"
          style={{ top: '120px', height: '80px' }}
          animate={{ opacity: 0.2 + (co2Level / 100) * 0.6 }}
        >
          <span className="text-white font-bold text-sm bg-black/30 px-3 py-1 rounded-full">
            Lapisan CO₂ ({co2Level}%)
          </span>
        </motion.div>

        {/* Trapped heat rays (bouncing back) */}
        <div className="absolute" style={{ top: '140px', left: '50%', transform: 'translateX(-50%)' }}>
          {Array.from({ length: trappedRays }).map((_, i) => (
            <motion.div
              key={`trapped-${i}`}
              className="absolute w-1 bg-red-400 rounded-full"
              style={{ height: '60px' }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              initial={{ x: -30 + i * 12, rotate: -15 + i * 6 }}
            />
          ))}
        </div>

        {/* Escaped heat rays */}
        <div className="absolute" style={{ top: '60px', left: '30%' }}>
          {Array.from({ length: escapedRays }).map((_, i) => (
            <motion.div
              key={`escaped-${i}`}
              className="absolute w-0.5 bg-yellow-200 rounded-full"
              style={{ height: '50px' }}
              animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              initial={{ x: i * 15, rotate: 5 }}
            />
          ))}
        </div>

        {/* Ground */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${getTemperatureColor(temperature)} rounded-b-xl flex items-center justify-center transition-all duration-1000`}
        >
          <div className="text-center">
            <motion.p
              className="text-white font-bold text-3xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {temperature}°C
            </motion.p>
            <p className={`font-semibold text-sm ${tempLabel.color} bg-white/80 px-3 py-0.5 rounded-full inline-block mt-1`}>
              {tempLabel.text}
            </p>
          </div>
        </div>

        {/* Clouds */}
        <motion.div
          className="absolute"
          style={{ top: '40px', left: '20%' }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Cloud className="w-10 h-10 text-white/60" />
        </motion.div>
        <motion.div
          className="absolute"
          style={{ top: '60px', left: '60%' }}
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Cloud className="w-8 h-8 text-white/40" />
        </motion.div>

        {/* Trees */}
        <div className="absolute bottom-24 left-4 flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`tree-${i}`}
              animate={{ scale: co2Level > 60 ? [1, 0.9, 1] : 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TreePine className="w-6 h-6 text-green-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="font-semibold text-gray-800 flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-gray-600" />
              <span>Tingkat CO₂ di Atmosfer</span>
            </label>
            <span className="text-2xl font-bold text-gray-900">{co2Level}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={co2Level}
            onChange={(e) => {
              setCo2Level(Number(e.target.value))
              setIsRunning(true)
            }}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Rendah (0%)</span>
            <span>Tinggi (100%)</span>
          </div>
        </div>

        {/* CO2 Source Buttons */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Tambahkan Sumber CO₂:</p>
          <div className="flex flex-wrap gap-2">
            {co2Sources.map((source, idx) => (
              <button
                key={idx}
                onClick={() => addCO2(source.value)}
                className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {source.icon}
                <span>{source.label}</span>
                <span className="text-xs text-gray-500">(+{source.value}%)</span>
              </button>
            ))}
          </div>
        </div>

        {/* Reduce & Reset */}
        <div className="flex space-x-3">
          <button
            onClick={reduceCO2}
            className="flex items-center space-x-1 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <TreePine className="w-4 h-4" />
            <span>Tanam Pohon (-15%)</span>
          </button>
          <button
            onClick={resetSimulasi}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 rounded-lg p-4 border border-amber-200"
      >
        <h5 className="font-bold text-amber-900 mb-2 flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4" />
          <span>Penjelasan: Efek Rumah Kaca</span>
        </h5>
        <p className="text-sm text-amber-800">
          CO₂ yang menumpuk di atmosfer dapat <strong>ditembus panas matahari namun sulit memantulkannya kembali ke luar angkasa</strong>.
          Fenomena ini disebut <strong>efek rumah kaca</strong>, yang menyebabkan suhu permukaan bumi naik atau <strong>pemanasan global</strong>.
          {co2Level > 60 && (
            <span className="block mt-2 text-red-700 font-semibold">
              ⚠️ Tingkat CO₂ saat ini sangat tinggi! Suhu bumi meningkat drastis. Ini menggambarkan dampak nyata dari pencemaran udara.
            </span>
          )}
          {co2Level <= 30 && (
            <span className="block mt-2 text-green-700 font-semibold">
              ✅ Tingkat CO₂ rendah. Suhu bumi masih terjaga. Teruskan menjaga lingkungan!
            </span>
          )}
        </p>
      </motion.div>
    </motion.div>
  )
}

// ==================== KUIS TAB ====================
function KuisTab() {
  const [selected, setSelected] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState<Record<number, boolean>>({})

  const questions = [
    {
      question: 'Apa perbedaan utama antara cuaca dan iklim?',
      options: [
        'Cuaca berskala luas dan iklim berskala sempit',
        'Cuaca adalah kondisi udara sesaat di wilayah sempit, sedangkan iklim adalah kondisi cuaca rata-rata tahunan di wilayah luas',
        'Cuaca dan iklim tidak memiliki perbedaan',
        'Iklim hanya terjadi di daerah tropis',
      ],
      correct: 1,
    },
    {
      question: 'Berikut ini yang BUKAN merupakan unsur cuaca dan iklim adalah...',
      options: [
        'Penyinaran matahari dan suhu',
        'Kelembapan dan angin',
        'Curah hujan',
        'Jumlah penduduk',
      ],
      correct: 3,
    },
    {
      question: 'Curah hujan ekstrem menyebabkan banjir pada lahan sayuran sehingga petani gagal panen. Dampak perubahan iklim ini berkaitan dengan bidang...',
      options: [
        'Perhubungan',
        'Sosial Budaya',
        'Ekonomi',
        'Kesehatan',
      ],
      correct: 2,
    },
    {
      question: 'Fenomena ketika CO₂ di atmosfer dapat ditembus panas matahari namun sulit memantulkannya kembali ke luar angkasa disebut...',
      options: [
        'Eutrofikasi',
        'Efek rumah kaca',
        'Akulturasi budaya',
        'Komplementaritas',
      ],
      correct: 1,
    },
  ]

  const handleCheck = (qIdx: number) => {
    setShowResult((prev: any) => ({ ...prev, [qIdx]: true }))
  }

  const score = Object.keys(showResult).filter((key) => {
    const qIdx = Number(key)
    return selected[qIdx] === questions[qIdx].correct
  }).length

  const allAnswered = Object.keys(showResult).length === questions.length

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Kuis Perubahan Iklim</h3>
        {allAnswered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold"
          >
            Skor: {score}/{questions.length}
          </motion.div>
        )}
      </div>

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
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
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
              {selected[qIdx] === q.correct
                ? '✅ Benar! Jawaban kamu tepat.'
                : `❌ Salah. Jawaban yang benar: ${String.fromCharCode(65 + q.correct)}`}
            </div>
          )}

          {!showResult[qIdx] ? (
            <button
              onClick={() => handleCheck(qIdx)}
              disabled={selected[qIdx] === undefined}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white px-5 py-2 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
            >
              Cek Jawaban
            </button>
          ) : (
            <button
              onClick={() => {
                setSelected((prev) => ({ ...prev, [qIdx]: -1 }))
                setShowResult((prev: any) => ({ ...prev, [qIdx]: false }))
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Reset Pertanyaan
            </button>
          )}
        </div>
      ))}
    </motion.div>
  )
}
