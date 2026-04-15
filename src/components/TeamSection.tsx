import { motion } from 'framer-motion'
import { Star, BookOpen, Award, Users } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  specialty: string
  avatar: string
  experience: number
}

const teamData: TeamMember[] = [
  {
    name: 'Dr. Siti Rahayu',
    role: 'Geografi & Lingkungan',
    specialty: 'Ahli Geografi Fisik',
    avatar: '👩‍🔬',
    experience: 15,
  },
  {
    name: 'Prof. Ahmad Wijaya',
    role: 'Ekonomi & Sosial',
    specialty: 'Ekonomi Pembangunan',
    avatar: '👨‍🏫',
    experience: 20,
  },
  {
    name: 'Dr. Maya Putri',
    role: 'Sejarah & Budaya',
    specialty: 'Sejarah Indonesia',
    avatar: '👩‍💼',
    experience: 12,
  },
  {
    name: 'Dr. Budi Santoso',
    role: 'SDA & Kemaritiman',
    specialty: 'Kelautan & Perikanan',
    avatar: '👨‍🔬',
    experience: 18,
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-semibold text-sm rounded-full mb-4">
            Tim Pengajar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Spesialis Materi Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tim pengajar berpengalaman yang menyusun dan mengembangkan materi pembelajaran
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-200 group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-200">
                {member.avatar}
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 mb-4">{member.specialty}</p>

                {/* Stats */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <Award className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">{member.experience} thn</span>
                  </div>
                  <div className="text-center">
                    <Star className="w-4 h-4 text-warm-500 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">4.9</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-accent-600 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">2k+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
