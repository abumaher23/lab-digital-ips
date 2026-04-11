import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Map, Globe, Cloud, AlertTriangle, Users, ShoppingCart, Home, Sprout, Trees, Crown, Wallet, Menu, X, ChevronDown, ChevronUp, Mountain, Leaf, TrendingUp, Scale, Factory, Ship, DollarSign, History, Flame, Anchor, Gem } from 'lucide-react'

const temaNavGroups = [
  {
    id: 'tema-1',
    number: 'I',
    title: 'Sosial & Lingkungan',
    color: 'blue',
    labs: [
      { path: '/lab/geografi', icon: Map, label: 'Lokasi' },
      { path: '/lab/kondisi-geografis', icon: Mountain, label: 'Kondisi Geografis' },
      { path: '/lab/konektivitas', icon: Globe, label: 'Konektivitas' },
      { path: '/lab/iklim', icon: Cloud, label: 'Iklim' },
      { path: '/lab/bencana', icon: AlertTriangle, label: 'Bencana' },
      { path: '/lab/sosial', icon: Users, label: 'Interaksi Sosial' },
      { path: '/lab/ekonomi', icon: ShoppingCart, label: 'Ekonomi' },
    ],
  },
  {
    id: 'tema-2',
    number: 'II',
    title: 'Keberagaman',
    color: 'emerald',
    labs: [
      { path: '/lab/zaman-geologis', icon: History, label: 'Zaman Geologis' },
      { path: '/lab/pencemaran', icon: Flame, label: 'Pencemaran' },
      { path: '/lab/pelestarian', icon: Leaf, label: 'Pelestarian' },
      { path: '/lab/praaksara', icon: Mountain, label: 'Praaksara' },
      { path: '/lab/pembangunan', icon: Sprout, label: 'SDGs' },
      { path: '/lab/dinamika-sosial', icon: TrendingUp, label: 'Dinamika Sosial' },
      { path: '/lab/kelangkaan', icon: TrendingUp, label: 'Kelangkaan' },
    ],
  },
  {
    id: 'tema-3',
    number: 'III',
    title: 'Ekonomi',
    color: 'indigo',
    labs: [
      { path: '/lab/sda', icon: Trees, label: 'SDA' },
      { path: '/lab/tambang', icon: Gem, label: 'Tambang' },
      { path: '/lab/kemaritiman', icon: Anchor, label: 'Kemaritiman' },
      { path: '/lab/perdagangan-internasional', icon: Ship, label: 'Perdagangan' },
      { path: '/lab/pelaku-ekonomi', icon: Factory, label: 'Pelaku Ekonomi' },
      { path: '/lab/mekanisme-pasar', icon: Scale, label: 'Pasar' },
      { path: '/lab/peran-sosial', icon: Users, label: 'Peran Sosial' },
    ],
  },
  {
    id: 'tema-4',
    number: 'IV',
    title: 'Pemberdayaan',
    color: 'violet',
    labs: [
      { path: '/lab/keragaman-budaya', icon: Crown, label: 'Keragaman Budaya' },
      { path: '/lab/faktor-geografis', icon: Map, label: 'Faktor Geografis' },
      { path: '/lab/sejarah-lokal', icon: History, label: 'Sejarah Lokal' },
      { path: '/lab/permasalahan-sosial', icon: AlertTriangle, label: 'Masalah Sosial' },
      { path: '/lab/sejarah-uang', icon: DollarSign, label: 'Sejarah Uang' },
      { path: '/lab/pengelolaan-keuangan', icon: Wallet, label: 'Keuangan' },
      { path: '/lab/komunitas', icon: Users, label: 'Komunitas' },
    ],
  },
]

export default function Layout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedGroup, setExpandedGroup] = useState<string | null>('tema-1')

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Lab Digital IPS</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Kelas 7 - 4 Tema Lengkap</p>
              </div>
            </Link>

            {/* Desktop: Breadcrumb */}
            <nav className="hidden lg:flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-primary-600">
                <Home className="w-4 h-4" />
              </Link>
              {location.pathname !== '/' && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-900 font-medium">
                    {temaNavGroups
                      .flatMap((g) => g.labs)
                      .find((l) => l.path === location.pathname)?.label || 'Lab'}
                  </span>
                </>
              )}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto flex">
        {/* Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-white border-r">
          <nav className="p-4 space-y-2">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </Link>

            {/* Tema Groups */}
            {temaNavGroups.map((group) => (
              <div key={group.id} className="space-y-1">
                <button
                  onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:bg-gray-50 rounded"
                >
                  <span>Tema {group.number}</span>
                  {expandedGroup === group.id ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedGroup === group.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-1 overflow-hidden"
                    >
                      {group.labs.map((lab) => (
                        <Link
                          key={lab.path}
                          to={lab.path}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(lab.path)
                              ? `bg-${group.color}-50 text-${group.color}-700 font-medium`
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <lab.icon className="w-4 h-4" />
                          <span>{lab.label}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
              />

              {/* Sidebar */}
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-white shadow-xl z-50 overflow-y-auto"
              >
                {/* Mobile Header */}
                <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                    <h2 className="font-bold text-gray-900">Lab Digital IPS</h2>
                  </div>
                  <button onClick={() => setSidebarOpen(false)} className="p-1">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Nav */}
                <nav className="p-4 space-y-2 pb-20">
                  <Link
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-3 rounded-lg ${
                      location.pathname === '/'
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-600'
                    }`}
                  >
                    <Home className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>

                  {temaNavGroups.map((group) => (
                    <div key={group.id} className="space-y-1">
                      <button
                        onClick={() => setExpandedGroup(expandedGroup === group.id ? null : group.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-500 uppercase"
                      >
                        <span>Tema {group.number} - {group.title}</span>
                        {expandedGroup === group.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedGroup === group.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-1 overflow-hidden"
                          >
                            {group.labs.map((lab) => (
                              <Link
                                key={lab.path}
                                to={lab.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center space-x-2 px-3 py-3 rounded-lg ${
                                  isActive(lab.path)
                                    ? `bg-${group.color}-50 text-${group.color}-700 font-medium`
                                    : 'text-gray-600'
                                }`}
                              >
                                <lab.icon className="w-5 h-5" />
                                <span>{lab.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  )
}
