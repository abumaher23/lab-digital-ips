import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Home, ArrowUp, MessageCircle } from 'lucide-react'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8 text-primary-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Lab Digital IPS</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Pembelajaran Interaktif Kelas 7</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === '/'
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Dashboard</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
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

      {/* Footer - Only show on dashboard */}
      {location.pathname === '/' && <Footer />}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary-600 text-white rounded-full shadow-medium hover:shadow-large hover:bg-primary-700 transition-all duration-200 flex items-center justify-center"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat/Help Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-medium hover:shadow-large transition-all duration-200 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  )
}
