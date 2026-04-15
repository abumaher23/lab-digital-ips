import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react'

const temaLinks = [
  {
    title: 'Tema I - Sosial & Lingkungan',
    links: [
      { label: 'Lokasi Absolut & Relatif', path: '/lab/geografi' },
      { label: 'Kondisi Geografis', path: '/lab/kondisi-geografis' },
      { label: 'Konektivitas', path: '/lab/konektivitas' },
      { label: 'Perubahan Iklim', path: '/lab/iklim' },
    ],
  },
  {
    title: 'Tema II - Keberagaman',
    links: [
      { label: 'Sejarah Pembentukan Bumi', path: '/lab/zaman-geologis' },
      { label: 'Pencemaran Lingkungan', path: '/lab/pencemaran' },
      { label: 'Pelestarian SDA', path: '/lab/pelestarian' },
      { label: 'Masyarakat Praaksara', path: '/lab/praaksara' },
    ],
  },
  {
    title: 'Tema III - Ekonomi',
    links: [
      { label: 'Sumber Daya Alam', path: '/lab/sda' },
      { label: 'SDA Tambang', path: '/lab/tambang' },
      { label: 'Perdagangan Internasional', path: '/lab/perdagangan-internasional' },
      { label: 'Pelaku Ekonomi', path: '/lab/pelaku-ekonomi' },
    ],
  },
  {
    title: 'Tema IV - Pemberdayaan',
    links: [
      { label: 'Keragaman Sosial Budaya', path: '/lab/keragaman-budaya' },
      { label: 'Sejarah Lokal', path: '/lab/sejarah-lokal' },
      { label: 'Sejarah Uang', path: '/lab/sejarah-uang' },
      { label: 'Peran Komunitas', path: '/lab/komunitas' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary-500" />
              <div>
                <h3 className="text-xl font-bold text-white">Lab Digital IPS</h3>
                <p className="text-xs text-gray-400">Pembelajaran Interaktif Kelas 7</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Platform pembelajaran interaktif untuk siswa kelas 7 dengan 28 pelajaran lengkap, simulasi virtual, dan kuis menarik.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-sm">info@labdigitalips.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-sm">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {temaLinks.map((tema, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-sm font-semibold text-white mb-4">{tema.title}</h4>
              <ul className="space-y-2">
                {tema.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social & Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-white">Ikuti Kami:</span>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-white">Berlangganan Update:</span>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2026 Lab Digital IPS. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for Indonesian Students
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-primary-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
