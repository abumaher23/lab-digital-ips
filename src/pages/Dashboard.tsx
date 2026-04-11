import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, Globe, Cloud, AlertTriangle, Users, ShoppingCart, ArrowRight, Sprout, Trees, Crown, Wallet, ChevronDown, ChevronUp, GraduationCap, Mountain, Leaf, TrendingUp, Scale, Factory, Ship, DollarSign, History, Flame, Anchor, Gem } from 'lucide-react'

const temaGroups = [
  {
    id: 'tema-1',
    number: 'I',
    title: 'Kehidupan Sosial & Lingkungan',
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    labs: [
      { path: '/lab/geografi', icon: Map, title: 'Lokasi Absolut & Relatif', subtitle: 'Letak astronomis, garis lintang & bujur', lessons: 'Pelajaran 1', color: 'blue' },
      { path: '/lab/kondisi-geografis', icon: Mountain, title: 'Kondisi Geografis', subtitle: 'Bentuk muka bumi & mata pencaharian', lessons: 'Pelajaran 2', color: 'cyan' },
      { path: '/lab/konektivitas', icon: Globe, title: 'Konektivitas', subtitle: 'Saling melengkapi & kesempatan intervensi', lessons: 'Pelajaran 3', color: 'green' },
      { path: '/lab/iklim', icon: Cloud, title: 'Perubahan Iklim', subtitle: 'Cuaca, iklim & dampak perubahan', lessons: 'Pelajaran 4', color: 'orange' },
      { path: '/lab/bencana', icon: AlertTriangle, title: 'Bencana Alam', subtitle: 'Lempeng tektonik, gempa, tsunami & mitigasi', lessons: 'Pelajaran 5', color: 'red' },
      { path: '/lab/sosial', icon: Users, title: 'Interaksi Sosial', subtitle: 'Kontak, komunikasi, asosiatif & disosiatif', lessons: 'Pelajaran 6', color: 'purple' },
      { path: '/lab/ekonomi', icon: ShoppingCart, title: 'Kegiatan Ekonomi', subtitle: 'Produksi, distribusi & konsumsi', lessons: 'Pelajaran 7', color: 'indigo' },
    ],
  },
  {
    id: 'tema-2',
    number: 'II',
    title: 'Keberagaman Lingkungan',
    color: 'from-emerald-600 to-teal-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    labs: [
      { path: '/lab/zaman-geologis', icon: History, title: 'Sejarah Pembentukan Bumi', subtitle: 'Arkaekum, Paleozoikum, Mesozoikum, Neozoikum', lessons: 'Pelajaran 1', color: 'green' },
      { path: '/lab/pencemaran', icon: Flame, title: 'Pencemaran Lingkungan', subtitle: 'Udara, air, tanah & eutrofikasi', lessons: 'Pelajaran 2', color: 'red' },
      { path: '/lab/pelestarian', icon: Leaf, title: 'Pelestarian SDA', subtitle: 'Udara, air, tanah & bioremediasi', lessons: 'Pelajaran 3', color: 'emerald' },
      { path: '/lab/praaksara', icon: Mountain, title: 'Masyarakat Praaksara', subtitle: 'Berburu, bercocok tanam, perundagian', lessons: 'Pelajaran 4', color: 'amber' },
      { path: '/lab/pembangunan', icon: Sprout, title: 'Pembangunan Berkelanjutan', subtitle: 'SDGs & 4 pilar pembangunan', lessons: 'Pelajaran 5', color: 'teal' },
      { path: '/lab/dinamika-sosial', icon: TrendingUp, title: 'Dinamika Sosial', subtitle: 'Difusi, akulturasi, asimilasi & culture shock', lessons: 'Pelajaran 6', color: 'purple' },
      { path: '/lab/kelangkaan', icon: TrendingUp, title: 'Masalah Pokok Ekonomi', subtitle: 'Kelangkaan, what, how, for whom', lessons: 'Pelajaran 7', color: 'indigo' },
    ],
  },
  {
    id: 'tema-3',
    number: 'III',
    title: 'Potensi Ekonomi',
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    labs: [
      { path: '/lab/sda', icon: Trees, title: 'Sumber Daya Alam', subtitle: 'Renewable & non-renewable SDA', lessons: 'Pelajaran 1', color: 'green' },
      { path: '/lab/tambang', icon: Gem, title: 'SDA Tambang', subtitle: 'Golongan A, B, C & tahapan tambang', lessons: 'Pelajaran 2', color: 'slate' },
      { path: '/lab/kemaritiman', icon: Anchor, title: 'SDA Kemaritiman', subtitle: 'Perikanan, energi laut, wisata bahari', lessons: 'Pelajaran 3', color: 'cyan' },
      { path: '/lab/perdagangan-internasional', icon: Ship, title: 'Perdagangan Internasional', subtitle: 'Ekspor, impor & dampak perdagangan', lessons: 'Pelajaran 4', color: 'blue' },
      { path: '/lab/pelaku-ekonomi', icon: Factory, title: 'Pelaku Ekonomi', subtitle: 'RTK, RTP, Pemerintah & Luar Negeri', lessons: 'Pelajaran 5', color: 'indigo' },
      { path: '/lab/mekanisme-pasar', icon: Scale, title: 'Mekanisme Pasar', subtitle: 'Fungsi, klasifikasi & pembentukan harga', lessons: 'Pelajaran 6', color: 'purple' },
      { path: '/lab/peran-sosial', icon: Users, title: 'Status & Peran Sosial', subtitle: 'Hubungan status-peran dalam masyarakat', lessons: 'Pelajaran 7', color: 'violet' },
    ],
  },
  {
    id: 'tema-4',
    number: 'IV',
    title: 'Pemberdayaan Masyarakat',
    color: 'from-violet-600 to-pink-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    labs: [
      { path: '/lab/keragaman-budaya', icon: Crown, title: 'Keragaman Sosial Budaya', subtitle: '1300+ suku, 1100+ bahasa, 7 unsur budaya', lessons: 'Pelajaran 1', color: 'violet' },
      { path: '/lab/faktor-geografis', icon: Map, title: 'Faktor Geografis & Budaya', subtitle: 'Isolasi, iklim & pengaruh terhadap budaya', lessons: 'Pelajaran 2', color: 'teal' },
      { path: '/lab/sejarah-lokal', icon: History, title: 'Sejarah Lokal & Pahlawan', subtitle: 'Sultan Nuku, Kalinyamat, Malahayati', lessons: 'Pelajaran 3', color: 'amber' },
      { path: '/lab/permasalahan-sosial', icon: AlertTriangle, title: 'Permasalahan Sosial', subtitle: 'Kesenjangan, kemiskinan & ketimpangan gender', lessons: 'Pelajaran 4', color: 'red' },
      { path: '/lab/sejarah-uang', icon: DollarSign, title: 'Sejarah Uang', subtitle: 'Barter, uang kartal, uang giral & hukum Engel', lessons: 'Pelajaran 5', color: 'green' },
      { path: '/lab/pengelolaan-keuangan', icon: Wallet, title: 'Pengelolaan Keuangan', subtitle: 'Tabungan, investasi & anggaran keluarga', lessons: 'Pelajaran 6', color: 'teal' },
      { path: '/lab/komunitas', icon: Users, title: 'Peran Komunitas', subtitle: 'Pemberdayaan masyarakat desa & komunitas', lessons: 'Pelajaran 7', color: 'emerald' },
    ],
  },
]

export default function Dashboard() {
  const [expandedTema, setExpandedTema] = useState<string | null>('tema-1')

  const toggleTema = (temaId: string) => {
    setExpandedTema(expandedTema === temaId ? null : temaId)
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-4 mb-3">
          <GraduationCap className="w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold">Lab Digital IPS</h2>
            <p className="text-blue-100">Pembelajaran Interaktif Kelas 7 - 4 Tema × 7 Pelajaran</p>
          </div>
        </div>
        <p className="text-blue-50 max-w-2xl">
          Pilih tema untuk melihat 7 pelajaran di dalamnya. Setiap pelajaran memiliki materi, simulasi interaktif, dan kuis.
        </p>
      </motion.div>

      {/* Tema Groups */}
      <div className="space-y-4">
        {temaGroups.map((tema, temaIdx) => (
          <motion.div
            key={tema.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: temaIdx * 0.1 }}
            className={`rounded-xl shadow-md overflow-hidden border-2 ${tema.borderColor}`}
          >
            {/* Tema Header */}
            <button
              onClick={() => toggleTema(tema.id)}
              className={`w-full bg-gradient-to-r ${tema.color} text-white p-4 flex items-center justify-between hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-lg px-3 py-1">
                  <span className="text-sm font-bold">TEMA {tema.number}</span>
                </div>
                <h3 className="text-lg font-bold hidden sm:block">{tema.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm opacity-90">7 Pelajaran</span>
                {expandedTema === tema.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Labs Grid */}
            <AnimatePresence>
              {expandedTema === tema.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${tema.bgColor} p-4`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {tema.labs.map((lab, labIdx) => (
                      <Link
                        key={lab.path}
                        to={lab.path}
                        className="block bg-white rounded-lg p-3 shadow-sm hover:shadow-lg transition-all group border-2 border-transparent hover:border-primary-200"
                        style={{ animationDelay: `${labIdx * 0.05}s` }}
                      >
                        <div className="flex items-start space-x-2 mb-2">
                          <lab.icon className={`w-6 h-6 text-${lab.color}-600 flex-shrink-0 mt-0.5`} />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm truncate">{lab.title}</h4>
                            <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{lab.subtitle}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${lab.color}-50 text-${lab.color}-700`}>
                            {lab.lessons}
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl p-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-4">Statistik Lab</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">28</div>
            <div className="text-sm text-gray-600">Pelajaran Lengkap</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600">4</div>
            <div className="text-sm text-gray-600">Tema Utama</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">100+</div>
            <div className="text-sm text-gray-600">Soal Kuis</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Simulasi Interaktif</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
