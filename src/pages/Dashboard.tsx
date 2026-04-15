import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Map, Globe, Cloud, AlertTriangle, Users, ShoppingCart, ArrowRight,
  Sprout, Trees, Crown, Wallet, ChevronDown, ChevronUp, GraduationCap,
  Mountain, Leaf, TrendingUp, Scale, Factory, Ship, DollarSign,
  History, Flame, Anchor, Gem, BookOpen, PlayCircle, Award, Zap,
  MessageCircle, Sparkles, ChevronDown as ChevronDownIcon
} from 'lucide-react'
import AnimatedCounter from '../components/AnimatedCounter'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'

const scrollToCurriculum = () => {
  const element = document.getElementById('kurikulum')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

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

const workflowSteps = [
  {
    number: '01',
    title: 'Pilih Tema',
    description: 'Pilih dari 4 tema utama yang tersedia sesuai kurikulum',
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    number: '02',
    title: 'Pelajari Materi',
    description: 'Akses materi lengkap dengan penjelasan interaktif',
    icon: PlayCircle,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    number: '03',
    title: 'Simulasi Interaktif',
    description: 'Coba simulasi dan eksperimen virtual untuk pemahaman lebih baik',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
  },
  {
    number: '04',
    title: 'Kuis & Evaluasi',
    description: 'Uji pemahaman dengan kuis interaktif dan lihat skor langsung',
    icon: Award,
    color: 'from-violet-500 to-pink-600',
  },
]

export default function Dashboard() {
  const [expandedTema, setExpandedTema] = useState<string | null>('tema-1')

  const toggleTema = (temaId: string) => {
    setExpandedTema(expandedTema === temaId ? null : temaId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Platform Pembelajaran Interaktif #1</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Lab Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-100">
                  IPS Kelas 7
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-primary-50 mb-6 leading-relaxed">
                Pembelajaran interaktif dengan 28 pelajaran lengkap, simulasi virtual, dan kuis menarik untuk 4 tema utama kurikulum IPS.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={scrollToCurriculum}
                  className="inline-flex items-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Lihat Semua Pelajaran</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                  <MessageCircle className="w-5 h-5" />
                  <span>Panduan</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">28</div>
                  <div className="text-sm text-primary-100">Pelajaran</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-sm text-primary-100">Tema</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-primary-100">Kuis</div>
                </div>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="w-12 h-12 text-primary-600" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Lab Digital IPS</h3>
                      <p className="text-sm text-gray-500">Kelas 7 - SMP/MTs</p>
                    </div>
                  </div>

                  {/* Preview Cards */}
                  <div className="space-y-3">
                    {temaGroups.slice(0, 3).map((tema, idx) => (
                      <div key={tema.id} className={`bg-gradient-to-r ${tema.color} rounded-xl p-4 text-white`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium opacity-90">Tema {tema.number}</span>
                            <h4 className="font-bold">{tema.title}</h4>
                          </div>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <Award className="w-8 h-8 text-warm-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <Zap className="w-8 h-8 text-primary-600" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full mb-4">
              Cara Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Proses Pembelajaran Mudah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empat langkah sederhana untuk memulai pembelajaran interaktif
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-200 group"
              >
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <div className="text-xs font-bold text-gray-400 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Lab Content */}
      <section id="kurikulum" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-primary-50/30 scroll-mt-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full mb-4">
              Kurikulum Lengkap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              4 Tema, 28 Pelajaran
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih tema untuk melihat 7 pelajaran di dalamnya. Setiap pelajaran memiliki materi, simulasi interaktif, dan kuis.
            </p>
          </div>

          {/* Tema Groups */}
          <div className="space-y-6">
            {temaGroups.map((tema, temaIdx) => (
              <motion.div
                key={tema.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: temaIdx * 0.1 }}
                className={`bg-white rounded-2xl shadow-soft overflow-hidden border-2 ${tema.borderColor}`}
              >
                {/* Tema Header */}
                <button
                  onClick={() => toggleTema(tema.id)}
                  className={`w-full bg-gradient-to-r ${tema.color} text-white p-5 lg:p-6 flex items-center justify-between hover:opacity-95 transition-opacity`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-sm font-bold">TEMA {tema.number}</span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold hidden sm:block">{tema.title}</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium opacity-90 hidden sm:block">7 Pelajaran</span>
                    {expandedTema === tema.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
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
                      className={`${tema.bgColor} p-5 lg:p-6`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {tema.labs.map((lab, labIdx) => (
                          <Link
                            key={lab.path}
                            to={lab.path}
                            className="block bg-white rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-200 group border-2 border-transparent hover:border-primary-300 hover:-translate-y-1"
                          >
                            <div className="flex items-start space-x-3 mb-3">
                              <div className={`p-2 rounded-lg bg-${lab.color}-50 flex-shrink-0`}>
                                <lab.icon className={`w-5 h-5 text-${lab.color}-600`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">{lab.title}</h4>
                                <p className="text-xs text-gray-600 line-clamp-2">{lab.subtitle}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-${lab.color}-50 text-${lab.color}-700`}>
                                {lab.lessons}
                              </span>
                              <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-200" />
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
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Statistik Platform</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Capaian Lab Digital IPS dalam menyediakan pembelajaran berkualitas
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={28} suffix="+" className="mb-2" />
              <p className="text-primary-100 font-medium">Pelajaran Lengkap</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={4} className="mb-2" />
              <p className="text-primary-100 font-medium">Tema Utama</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={100} suffix="+" className="mb-2" />
              <p className="text-primary-100 font-medium">Soal Kuis</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={50} suffix="+" className="mb-2" />
              <p className="text-primary-100 font-medium">Simulasi Interaktif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Siap Memulai Pembelajaran?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan siswa yang telah merasakan manfaat pembelajaran interaktif
            </p>
            <Link
              to="/lab/geografi"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-large transition-all duration-200 hover:-translate-y-1"
            >
              <PlayCircle className="w-6 h-6" />
              <span>Mulai Belajar Sekarang</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
