import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, Circle, GeoJSON } from 'react-leaflet'
import {
  BookOpen,
  AlertTriangle,
  Shield,
  Mountain,
  Waves,
  Flame,
  Lightbulb,
  CheckCircle,
  XCircle,
  RotateCcw,
  MapPin,
  Globe,
} from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// ============================================================
// Data
// ============================================================

const tectonicPlates = [
  {
    name: 'Lempeng Eurasia',
    color: '#3b82f6',
    direction: 'Selatan',
    description: 'Lempeng benua besar yang mencakup wilayah Asia dan Eropa',
  },
  {
    name: 'Lempeng Indo-Australia',
    color: '#f97316',
    direction: 'Utara',
    description: 'Lempeng yang bergerak ke arah utara menumbuk Lempeng Eurasia',
  },
  {
    name: 'Lempeng Pasifik',
    color: '#a855f7',
    direction: 'Barat',
    description: 'Lempeng samudra yang bergerak ke arah barat',
  },
]

const disasterTypes = [
  {
    icon: Flame,
    name: 'Gempa Bumi',
    cause: 'Pergerakan dan tumbukan lempeng tektonik menyebabkan pelepasan energi secara tiba-tiba di dalam bumi',
    impact: 'Kerusakan bangunan, longsor, dan dapat memicu tsunami',
    mitigation: 'Bangun rumah tahan gempa, lakukan drill evakuasi, siapkan tas darurat',
  },
  {
    icon: Waves,
    name: 'Tsunami',
    cause: 'Gempa bumi berkekuatan besar di dasar laut yang menyebabkan gelombang besar',
    impact: 'Banjir besar di wilayah pesisir, kerusakan infrastruktur, korban jiwa',
    mitigation: 'Kenali tanda-tanda tsunami, hindari wilayah pesisir saat gempa besar, segera menuju dataran tinggi',
  },
  {
    icon: Mountain,
    name: 'Gunung Meletus',
    cause: 'Akumulasi magma dan tekanan gas di dalam gunung berapi hingga mencapai titik erupsi',
    impact: 'Hujan abu, awan panas, lahar dingin, gangguan pernapasan, kerusakan lahan',
    mitigation: 'Pantau status gunung berapi, siapkan masker, evakuasi dari zona bahaya',
  },
]

const mitigationSteps = [
  {
    title: 'Sebelum Bencana',
    steps: [
      'Kenali jenis bencana di wilayahmu',
      'Siapkan tas darurat (emergency kit)',
      'Buat rencana evakuasi keluarga',
      'Simpan nomor telepon darurat',
      'Ikuti latihan evakuasi (drill)',
    ],
  },
  {
    title: 'Saat Gempa Bumi',
    steps: [
      'Berlindung di bawah meja yang kokoh (Drop, Cover, Hold On)',
      'Jauhi jendela, lemari, dan benda yang bisa jatuh',
      'Jika di luar, jauhi bangunan dan pohon',
      'Jangan gunakan lift',
      'Tetap tenang dan tunggu guncangan berhenti',
    ],
  },
  {
    title: 'Setelah Bencana',
    steps: [
      'Periksa kondisi diri dan orang sekitar',
      'Evakuasi ke tempat yang aman',
      'Hindari bangunan yang rusak',
      'Dengarkan informasi dari sumber resmi',
      'Bantu korban yang membutuhkan',
    ],
  },
]

const quizQuestions = [
  {
    question: 'Indonesia terletak di pertemuan tiga lempeng tektonik, yaitu...',
    options: [
      'Lempeng Eurasia, Indo-Australia, dan Pasifik',
      'Lempeng Eurasia, Amerika, dan Pasifik',
      'Lempeng Afrika, Indo-Australia, dan Pasifik',
      'Lempeng Eurasia, Indo-Australia, dan Antartika',
    ],
    correctAnswer: 0,
    explanation:
      'Indonesia berada di pertemuan tiga lempeng tektonik besar: Lempeng Eurasia, Lempeng Indo-Australia, dan Lempeng Pasifik. Kondisi ini menjadikan Indonesia rawan bencana alam seperti gempa bumi dan gunung meletus.',
  },
  {
    question: 'Apa dampak positif dari kondisi geologis Indonesia?',
    options: [
      'Sering terjadi bencana alam',
      'Tanah yang subur dan kaya mineral',
      'Iklim yang tidak menentu',
      'Banyaknya gunung berapi yang berbahaya',
    ],
    correctAnswer: 1,
    explanation:
      'Kondisi geologis Indonesia memberikan dampak positif berupa tanah yang sangat subur karena material vulkanik dan kekayaan mineral yang melimpah di dalam bumi.',
  },
  {
    question: 'Tsunami adalah gelombang besar yang disebabkan oleh...',
    options: [
      'Hujan lebat yang terus-menerus',
      'Angin kencang di laut',
      'Gempa bumi berkekuatan besar di dasar laut',
      'Pasang surut air laut',
    ],
    correctAnswer: 2,
    explanation:
      'Tsunami disebabkan oleh gempa bumi berkekuatan besar yang terjadi di dasar laut. Pergerakan lempeng di dasar laut mendorong air dalam volume besar sehingga membentuk gelombang raksasa.',
  },
  {
    question: 'Langkah mitigasi yang tepat saat terjadi gempa bumi adalah...',
    options: [
      'Berlari keluar gedung secepatnya',
      'Berlindung di bawah meja yang kokoh (Drop, Cover, Hold On)',
      'Berdiri di dekat jendela untuk melihat kondisi luar',
      'Menggunakan lift untuk turun ke lantai bawah',
    ],
    correctAnswer: 1,
    explanation:
      'Saat gempa bumi, langkah paling aman adalah berlindung di bawah meja yang kokoh (Drop, Cover, Hold On). Jangan berlari saat guncangan terjadi karena bisa terjatuh, dan jangan gunakan lift karena berisiko terjebak.',
  },
]

// ============================================================
// Tectonic Plate Map Component
// ============================================================

function TectonicPlateMap() {
  const [earthquakeActive, setEarthquakeActive] = useState(false)
  const [earthquakeIntensity, setEarthquakeIntensity] = useState(0)
  const [showPlates, setShowPlates] = useState(true)
  const [showEarthquakes, setShowEarthquakes] = useState(true)
  const [showVolcanoes, setShowVolcanoes] = useState(true)
  const [plateData, setPlateData] = useState<any>(null)

  // Fetch tectonic plate boundaries
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json')
      .then((res) => res.json())
      .then((data) => setPlateData(data))
      .catch((err) => console.error('Error loading plate data:', err))
  }, [])

  // Lokasi gempa bersejarah di Indonesia
  const earthquakeLocations = [
    { name: 'Gempa Aceh 2004 (9.1 SR)', position: [3.3, 95.9], magnitude: 9.1, casualties: '~230,000' },
    { name: 'Gempa Yogyakarta 2006 (6.3 SR)', position: [-7.9, 110.4], magnitude: 6.3, casualties: '~5,700' },
    { name: 'Gempa Padang 2009 (7.6 SR)', position: [-0.8, 100.3], magnitude: 7.6, casualties: '~1,100' },
    { name: 'Gempa Lombok 2018 (7.0 SR)', position: [-8.4, 116.4], magnitude: 7.0, casualties: '~560' },
    { name: 'Gempa Palu 2018 (7.5 SR)', position: [-1.0, 119.8], magnitude: 7.5, casualties: '~4,300' },
  ]

  // Gunung berapi aktif
  const volcanoes = [
    { name: 'Gunung Merapi (Yogyakarta)', position: [-7.54, 110.44], elevation: '2,930m', lastEruption: '2010' },
    { name: 'Gunung Krakatau (Selat Sunda)', position: [-6.10, 105.42], elevation: '813m', lastEruption: '2024' },
    { name: 'Gunung Agung (Bali)', position: [-8.34, 115.51], elevation: '3,142m', lastEruption: '2017' },
    { name: 'Gunung Sinabung (Sumatra)', position: [3.17, 98.39], elevation: '2,460m', lastEruption: '2016' },
    { name: 'Gunung Semeru (Jawa Timur)', position: [-8.11, 112.92], elevation: '3,676m', lastEruption: '2024' },
  ]

  useEffect(() => {
    if (earthquakeActive) {
      const interval = setInterval(() => {
        setEarthquakeIntensity((prev) => (prev >= 100 ? 0 : prev + 2))
      }, 50)
      const timeout = setTimeout(() => {
        setEarthquakeActive(false)
        setEarthquakeIntensity(0)
      }, 5000)
      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [earthquakeActive])

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <h4 className="font-bold text-blue-900 mb-2 flex items-center">
          <Globe className="w-5 h-5 mr-2" />
          Peta Lempeng Tektonik & Zona Gempa Indonesia
        </h4>
        <p className="text-sm text-blue-800">
          Indonesia berada di pertemuan 3 lempeng tektonik besar. Klik pada marker untuk melihat detail!
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 text-sm">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showPlates}
            onChange={(e) => setShowPlates(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-blue-700 font-medium">Batas Lempeng</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showEarthquakes}
            onChange={(e) => setShowEarthquakes(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-red-700 font-medium">Lokasi Gempa Bersejarah</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showVolcanoes}
            onChange={(e) => setShowVolcanoes(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-orange-700 font-medium">Gunung Berapi Aktif</span>
        </label>
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
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | Tectonic plates: <a href="https://github.com/fraxen/tectonicplates">fraxen/tectonicplates</a>'
          />
          
          {/* Tectonic Plate Boundaries from GeoJSON */}
          {showPlates && plateData && (
            <GeoJSON
              key="tectonic-plates"
              data={plateData}
              style={() => ({
                color: '#3b82f6',
                weight: 3,
                opacity: 0.8,
                fillColor: '#3b82f6',
                fillOpacity: 0.1,
              })}
              onEachFeature={(feature: any, layer: any) => {
                if (feature && feature.properties && feature.properties.Name) {
                  layer.bindPopup(`<div class="p-2"><h4 class="font-bold text-blue-700">${feature.properties.Name}</h4><p class="text-sm text-gray-600">Lempeng Tektonik</p></div>`)
                }
              }}
            />
          )}

          {/* Earthquake markers */}
          {showEarthquakes && earthquakeLocations.map((eq, idx) => (
            <Circle
              key={idx}
              center={eq.position as [number, number]}
              radius={eq.magnitude * 15000}
              pathOptions={{
                color: earthquakeActive && idx < 2 ? '#ef4444' : '#dc2626',
                fillColor: earthquakeActive && idx < 2 ? '#ef4444' : '#dc2626',
                fillOpacity: earthquakeActive && idx < 2 ? 0.8 : 0.5,
                weight: 2,
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-bold text-red-700 mb-2">{eq.name}</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Magnitude:</strong> {eq.magnitude} SR</p>
                    <p><strong>Korban Jiwa:</strong> {eq.casualties}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {earthquakeActive ? '⚠️ Simulasi gempa aktif!' : 'Klik untuk detail'}
                    </p>
                  </div>
                </div>
              </Popup>
            </Circle>
          ))}

          {/* Volcano markers */}
          {showVolcanoes && volcanoes.map((volcano, idx) => (
            <Marker key={idx} position={volcano.position as [number, number]}>
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                    <Mountain className="w-4 h-4 inline mr-1" />
                    {volcano.name}
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Ketinggian:</strong> {volcano.elevation}</p>
                    <p><strong>Erupsi Terakhir:</strong> {volcano.lastEruption}</p>
                    <p className="text-xs text-gray-600 mt-2">
                      💡 Abu vulkanis menyuburkan tanah
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Earthquake simulation effect */}
          {earthquakeActive && (
            <Circle
              center={[-2.5, 118]}
              radius={500000}
              pathOptions={{
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.3,
                weight: 3,
              }}
            />
          )}
        </MapContainer>
      </div>

      {/* Earthquake intensity bar */}
      {earthquakeActive && (
        <div className="bg-red-50 rounded-lg p-4">
          <div className="flex justify-between text-sm text-red-900 mb-1">
            <span className="font-bold">Intensitas Simulasi Gempa</span>
            <span>{earthquakeIntensity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <motion.div
              className={`h-4 rounded-full transition-all ${
                earthquakeIntensity > 70 ? 'bg-red-600' : earthquakeIntensity > 40 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${earthquakeIntensity}%` }}
            />
          </div>
          <p className="text-xs text-red-700 mt-2">
            💡 Gempa sulit diprediksi, tetapi kita bisa melakukan mitigasi untuk mengurangi risiko!
          </p>
        </div>
      )}

      <button
        onClick={() => setEarthquakeActive(true)}
        disabled={earthquakeActive}
        className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-3 px-4 rounded-lg font-medium transition-colors"
      >
        <AlertTriangle className="w-5 h-5" />
        <span>{earthquakeActive ? 'Simulasi Gempa Berlangsung...' : 'Simulasikan Gempa Bumi'}</span>
      </button>
    </div>
  )
}

// ============================================================
// Mitigation Guide Component
// ============================================================

function MitigationGuide() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = mitigationSteps

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900 flex items-center">
        <Shield className="w-5 h-5 mr-2 text-red-600" />
        Panduan Mitigasi Bencana
      </h4>

      {/* Phase tabs */}
      <div className="flex space-x-2">
        {phases.map((phase, idx) => (
          <button
            key={idx}
            onClick={() => setActivePhase(idx)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activePhase === idx
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {phase.title}
          </button>
        ))}
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-red-50 rounded-xl p-5"
        >
          <h5 className="font-bold text-red-900 mb-3 text-lg">{phases[activePhase].title}</h5>
          <ul className="space-y-3">
            {phases[activePhase].steps.map((step, stepIdx) => (
              <motion.li
                key={stepIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: stepIdx * 0.1 }}
                className="flex items-start space-x-3"
              >
                <span className="flex-shrink-0 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {stepIdx + 1}
                </span>
                <span className="text-red-800">{step}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Safety callout */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-yellow-900">Ingat Prinsip 3A!</p>
            <p className="text-yellow-800 text-sm mt-1">
              <strong>A</strong>was (kenali tanda bahaya), <strong>A</strong>man (cari tempat aman),{' '}
              <strong>A</strong>si (bantu diri sendiri dan orang lain)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// Quiz Card Component
// ============================================================

function QuizCard({
  question,
  options,
  correctAnswer,
  explanation,
  questionNumber,
}: {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  questionNumber: number
}) {
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
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full">
          Soal {questionNumber}
        </span>
      </div>

      <h4 className="font-semibold text-gray-900 mb-4 text-lg">{question}</h4>

      <div className="space-y-2 mb-4">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => !showResult && setSelected(idx)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              selected === idx
                ? showResult
                  ? idx === correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : 'bg-red-100 border-2 border-red-500'
                  : 'bg-red-50 border-2 border-red-400'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
            disabled={showResult}
          >
            <span className="font-medium mr-2 text-gray-700">{String.fromCharCode(65 + idx)}.</span>
            <span className="text-gray-800">{option}</span>
          </button>
        ))}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-4 ${
            selected === correctAnswer ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {selected === correctAnswer ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className="font-bold">
              {selected === correctAnswer ? 'Jawaban Benar!' : 'Jawaban Belum Tepat'}
            </span>
          </div>
          <p className="text-sm">{explanation}</p>
        </motion.div>
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
          <button onClick={handleReset} className="btn-secondary flex items-center space-x-2">
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi</span>
          </button>
        )}
      </div>
    </div>
  )
}

// ============================================================
// Main Component
// ============================================================

export default function LabBencana() {
  const [activeTab, setActiveTab] = useState<'materi' | 'simulasi' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <AlertTriangle className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Bencana Alam</h2>
            <p className="text-red-100">Potensi Bencana Alam dan Langkah Mitigasinya</p>
          </div>
        </div>
        <p className="text-red-100 text-sm">
          IPS Kelas 7 — Memahami kondisi geologis Indonesia dan cara mitigasi bencana alam
        </p>
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
            onClick={() => setActiveTab('simulasi')}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              activeTab === 'simulasi'
                ? 'bg-red-50 text-red-700 border-b-2 border-red-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Simulasi
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
            {/* MATERI TAB */}
            {activeTab === 'materi' && (
              <motion.div
                key="materi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">A. Kondisi Geologis Indonesia</h3>
                  <p className="text-gray-700 mb-4">
                    Indonesia terletak pada posisi yang unik, yaitu di pertemuan <strong>tiga lempeng tektonik besar</strong> yang
                    terus bergerak. Kondisi ini membuat Indonesia menjadi salah satu wilayah dengan aktivitas tektonik tertinggi di dunia.
                  </p>

                  {/* Tectonic plates cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {tectonicPlates.map((plate, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-4 border-2"
                        style={{ borderColor: plate.color, backgroundColor: `${plate.color}10` }}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="w-5 h-5" style={{ color: plate.color }} />
                          <h4 className="font-bold" style={{ color: plate.color }}>
                            {plate.name}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-700">{plate.description}</p>
                        <p className="text-xs text-gray-600 mt-2">
                          Bergerak ke arah <strong>{plate.direction}</strong>
                        </p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">B. Dampak Positif Kondisi Geologis</h3>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Manfaat Kondisi Geologis Indonesia
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-800">Tanah Subur</h5>
                        <p className="text-sm text-green-700 mt-1">
                          Material vulkanik dari gunung berapi menyuburkan tanah, menjadikan Indonesia sangat cocok untuk pertanian.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">Kekayaan Mineral</h5>
                        <p className="text-sm text-green-700 mt-1">
                          Aktivitas tektonik membawa mineral berharga ke permukaan, seperti emas, tembaga, dan bijih besi.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">Energi Geotermal</h5>
                        <p className="text-sm text-green-700 mt-1">
                          Panas bumi dari aktivitas vulkanik dapat dimanfaatkan sebagai sumber energi terbarukan.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800">Biodiversitas Tinggi</h5>
                        <p className="text-sm text-green-700 mt-1">
                          Kesuburan tanah mendukung keanekaragaman hayati yang sangat tinggi.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">C. Jenis-Jenis Bencana Alam</h3>
                  <p className="text-gray-700 mb-4">
                    Kondisi geologis yang unik juga membawa potensi bencana alam yang harus diwaspadai. Berikut tiga jenis bencana alam
                    utama di Indonesia:
                  </p>

                  {disasterTypes.map((disaster, idx) => {
                    const Icon = disaster.icon
                    return (
                      <div key={idx} className="bg-orange-50 rounded-lg p-5 mb-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className="w-7 h-7 text-orange-600" />
                          <h4 className="text-xl font-bold text-orange-900">{disaster.name}</h4>
                        </div>
                        <div className="space-y-2">
                          <p className="text-orange-800">
                            <strong>Penyebab:</strong> {disaster.cause}
                          </p>
                          <p className="text-orange-800">
                            <strong>Dampak:</strong> {disaster.impact}
                          </p>
                          <p className="text-orange-800">
                            <strong>Mitigasi:</strong> {disaster.mitigation}
                          </p>
                        </div>
                      </div>
                    )
                  })}

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">D. Langkah Mitigasi Bencana</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mitigasi bencana</strong> adalah serangkaian upaya untuk mengurangi risiko dan dampak bencana alam.
                    Mitigasi dilakukan sebelum, saat, dan setelah bencana terjadi. Pindah ke tab <strong>Simulasi</strong> untuk
                    melihat panduan mitigasi secara interaktif.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Tahukah Kamu?
                    </h4>
                    <p className="text-blue-800">
                      Indonesia memiliki lebih dari 127 gunung berapi aktif, menjadikannya negara dengan jumlah gunung berapi aktif
                      terbanyak di dunia. Namun, tanah di sekitar gunung berapi sangat subur dan cocok untuk pertanian!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SIMULASI TAB */}
            {activeTab === 'simulasi' && (
              <motion.div
                key="simulasi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <TectonicPlateMap />

                <div className="border-t pt-6">
                  <MitigationGuide />
                </div>
              </motion.div>
            )}

            {/* KUIS TAB */}
            {activeTab === 'kuis' && (
              <motion.div
                key="kuis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-900">Kuis Bencana Alam</h3>
                <p className="text-gray-600">
                  Jawab pertanyaan berikut untuk menguji pemahamanmu tentang potensi bencana alam dan mitigasi di Indonesia.
                </p>

                {quizQuestions.map((q, idx) => (
                  <QuizCard
                    key={idx}
                    question={q.question}
                    options={q.options}
                    correctAnswer={q.correctAnswer}
                    explanation={q.explanation}
                    questionNumber={idx + 1}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
