import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { BookOpen, Info, MapPin, Compass, Lightbulb } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Lokasi penting di Indonesia
const locations = [
  { name: 'Jakarta (Ibu Kota)', position: [-6.2088, 106.8456], description: 'Pusat pemerintahan Indonesia' },
  { name: 'IKN Nusantara', position: [-1.2654, 116.8311], description: 'Ibu Kota Negara baru di Kalimantan' },
  { name: 'Dataran Tinggi Dieng', position: [-7.2091, 109.8669], description: 'Dataran tinggi di Jawa Tengah' },
  { name: 'Gunung Merapi', position: [-7.5421, 110.4420], description: 'Gunung api aktif di Yogyakarta' },
  { name: 'Selat Malaka', position: [2.5, 98.5], description: 'Selat strategis di Sumatra' },
]

interface ClickedLocation {
  position: [number, number]
  name: string
}

function MapClickHandler({ onLocationClick }: { onLocationClick: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      onLocationClick([e.latlng.lat, e.latlng.lng])
    },
  })
  return null
}

export default function LabGeografi() {
  const [clickedLocation, setClickedLocation] = useState<ClickedLocation | null>(null)
  const [activeTab, setActiveTab] = useState<'materi' | 'praktik' | 'kuis'>('materi')

  const handleMapClick = (position: [number, number]) => {
    setClickedLocation({
      position,
      name: `Lokasi: ${position[0].toFixed(4)}, ${position[1].toFixed(4)}`,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <MapPin className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Geografi Interaktif</h2>
            <p className="text-blue-100">Pelajaran 1: Lokasi Absolut & Relatif Indonesia</p>
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
          {activeTab === 'materi' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A. Lokasi Absolut</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Lokasi absolut</strong> adalah letak suatu tempat yang bersifat tetap terhadap sistem koordinat 
                  garis lintang (latitude) dan garis bujur (longitude).
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">📍 Letak Astronomis Indonesia</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li><strong>Lintang:</strong> 6°LU — 11°LS</li>
                    <li><strong>Bujur:</strong> 95°BT — 141°BT</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-green-900 mb-2">🌍 Garis Lintang & Bujur</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-800">Garis Lintang (Latitude)</h5>
                      <p className="text-sm text-green-700">Garis horizontal yang membagi wilayah iklim (tropis, subtropis, sedang, dingin)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-800">Garis Bujur (Longitude)</h5>
                      <p className="text-sm text-green-700">Garis vertikal untuk pembagian zona waktu berdasarkan Greenwich</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">B. Lokasi Relatif</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Lokasi relatif</strong> adalah letak suatu tempat yang dapat berubah-ubah sesuai dengan keadaan sekitarnya. 
                  Lokasi ini memengaruhi nilai ekonomi dan sosial suatu tempat.
                </p>

                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-orange-900 mb-2">💡 Contoh Lokasi Relatif</h4>
                  <ul className="text-orange-800 space-y-2">
                    <li>• Harga tanah di dekat jalan raya lebih mahal daripada di gang sempit</li>
                    <li>• Lokasi di pinggir jalan strategis untuk usaha, tapi kurang nyaman untuk tinggal</li>
                    <li>• Kenaikan harga tanah di IKN hingga 10x lipat setelah pemindahan ibu kota</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-bold text-purple-900 mb-2">📝 Rangkuman</h4>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• <strong>Lokasi Absolut:</strong> Tetap berdasarkan koordinat lintang & bujur</li>
                    <li>• <strong>Lokasi Relatif:</strong> Berubah tergantung kondisi sekitar</li>
                    <li>• Indonesia: 6°LU–11°LS, 95°BT–141°BT</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'praktik' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Kegiatan 1.1: Eksplorasi Lokasi Digital
                </h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Instruksi:</strong> Klik pada peta untuk melihat lokasi absolut (koordinat). 
                  Coba cari lokasi-lokasi penting di Indonesia!
                </p>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-200" style={{ height: '500px' }}>
                <MapContainer
                  center={[-2.5, 118]}
                  zoom={5}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  <MapClickHandler onLocationClick={handleMapClick} />
                  
                  {/* Markers for important locations */}
                  {locations.map((loc, idx) => (
                    <Marker key={idx} position={loc.position as [number, number]}>
                      <Popup>
                        <div className="p-2">
                          <h4 className="font-bold">{loc.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{loc.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Koordinat: {loc.position[0].toFixed(4)}, {loc.position[1].toFixed(4)}
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/* Clicked location marker */}
                  {clickedLocation && (
                    <Marker position={clickedLocation.position}>
                      <Popup>
                        <div className="p-2">
                          <h4 className="font-bold">{clickedLocation.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Lintang: {clickedLocation.position[0].toFixed(4)}°
                          </p>
                          <p className="text-xs text-gray-500">
                            Bujur: {clickedLocation.position[1].toFixed(4)}°
                          </p>
                        </div>
                      </Popup>
                    </Marker>
                  )}
                </MapContainer>
              </div>

              {clickedLocation && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-900 mb-2">📍 Lokasi Absolut yang Dipilih:</h4>
                  <p className="text-green-800">
                    <strong>Koordinat:</strong> {clickedLocation.position[0].toFixed(4)}°, {clickedLocation.position[1].toFixed(4)}°
                  </p>
                  <p className="text-sm text-green-700 mt-2">
                    <strong>Analisis:</strong> Lokasi absolut ini bersifat tetap dan tidak akan berubah meskipun kondisi sekitar berubah.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'kuis' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-900">Kuis Lokasi Absolut & Relatif</h3>
              
              <QuizCard
                question="Apa yang dimaksud dengan lokasi absolut?"
                options={[
                  'Letak suatu tempat yang dapat berubah-ubah',
                  'Letak suatu tempat yang bersifat tetap terhadap sistem koordinat',
                  'Letak suatu tempat berdasarkan jarak dari kota',
                  'Letak suatu tempat yang bergantung pada sudut pandang',
                ]}
                correctAnswer={1}
              />

              <QuizCard
                question="Secara astronomis, Indonesia terletak pada koordinat..."
                options={[
                  '6°LU—11°LS dan 95°BT—141°BT',
                  '11°LU—6°LS dan 141°BT—95°BT',
                  '95°LU—141°LS dan 6°BT—11°BT',
                  '6°LS—11°LU dan 95°BB—141°BT',
                ]}
                correctAnswer={0}
              />

              <QuizCard
                question="Kenaikan harga tanah di IKN dipengaruhi oleh jenis lokasi apa?"
                options={[
                  'Lokasi Absolut',
                  'Lokasi Astronomis',
                  'Lokasi Relatif',
                  'Lokasi Geologis',
                ]}
                correctAnswer={2}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

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
          {selected === correctAnswer ? '✅ Benar!' : `❌ Salah. Jawaban yang benar: ${String.fromCharCode(65 + correctAnswer)}`}
        </div>
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
          <button onClick={handleReset} className="btn-secondary">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
