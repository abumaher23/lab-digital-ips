import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Sprout,
  Globe,
  Target,
  Users,
  Shield,
  TrendingUp,
  Heart,
  Droplets,
  Trees,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Lightbulb,
  GraduationCap,
  Award,
} from 'lucide-react'

// ============================================================
// Data
// ============================================================

const karakteristikItems = [
  {
    icon: Heart,
    title: 'Dampak Kesehatan & Lingkungan',
    description:
      'Pembangunan yang memperhatikan kesehatan manusia dan menjaga kualitas lingkungan agar tetap layak huni.',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    textColor: 'text-rose-800',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    icon: Trees,
    title: 'Perilaku Mendukung',
    description:
      'Mengelola Sumber Daya Alam (SDA) secara berkelanjutan agar tetap tersedia untuk generasi mendatang.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Globe,
    title: 'Tanggung Jawab terhadap Alam',
    description:
      'Kesajiban moral manusia untuk menjaga dan memelihara alam agar ekosistem tetap seimbang.',
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-800',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'Kualitas Manusia',
    description:
      'Pemanfaatan teknologi yang efisien dan bertanggung jawab untuk mendukung pembangunan tanpa merusak lingkungan.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-800',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
]

const programLingkunganItems = [
  {
    icon: Droplets,
    title: 'Program Kali Bersih',
    description:
      'Upaya pembersihan sungai (kali) dari pencemaran limbah agar kualitas air dan lingkungan sekitar kembali baik.',
    contoh: 'Contoh: Kali Ciliwung yang dibersihkan dari sampah dan limbah pabrik.',
  },
  {
    icon: Trees,
    title: 'Sumur Resapan',
    description:
      'Pembuatan sumur resapan air hujan untuk menjaga siklus hidrologi agar ketersediaan air tanah tetap terjaga.',
    contoh: 'Contoh: Sumur resapan di halaman sekolah atau rumah agar air hujan meresap ke tanah.',
  },
  {
    icon: Sprout,
    title: 'Bioremediasi',
    description:
      'Pembersihan tanah yang tercemar dengan memanfaatkan mikroorganisme (bakteri/jamur) pengurai zat pencemar.',
    contoh: 'Contoh: Menggunakan bakteri untuk mengurai tumpahan minyak di lahan industri.',
  },
]

const sdgGoals = [
  { number: 1, title: 'Tanpa Kemiskinan', icon: '🚫💰', pillar: 'sosial' },
  { number: 2, title: 'Tanpa Kelaparan', icon: '🌾', pillar: 'sosial' },
  { number: 3, title: 'Kehidupan Sehat & Sejahtera', icon: '❤️', pillar: 'sosial' },
  { number: 4, title: 'Pendidikan Berkualitas', icon: '📚', pillar: 'sosial' },
  { number: 5, title: 'Kesetaraan Gender', icon: '⚖️', pillar: 'sosial' },
  { number: 6, title: 'Air Bersih & Sanitasi Layak', icon: '💧', pillar: 'lingkungan' },
  { number: 7, title: 'Energi Bersih & Terjangkau', icon: '⚡', pillar: 'ekonomi' },
  { number: 8, title: 'Pekerjaan Layak & Pertumbuhan Ekonomi', icon: '📈', pillar: 'ekonomi' },
  { number: 9, title: 'Industri, Inovasi & Infrastruktur', icon: '🏗️', pillar: 'ekonomi' },
  { number: 10, title: 'Berkurangnya Kesenjangan', icon: '🤝', pillar: 'sosial' },
  { number: 11, title: 'Kota & Permukiman Berkelanjutan', icon: '🏙️', pillar: 'lingkungan' },
  { number: 12, title: 'Konsumsi & Produksi Bertanggung Jawab', icon: '♻️', pillar: 'ekonomi' },
  { number: 13, title: 'Penanganan Perubahan Iklim', icon: '🌍', pillar: 'lingkungan' },
  { number: 14, title: 'Ekosistem Lautan', icon: '🌊', pillar: 'lingkungan' },
  { number: 15, title: 'Ekosistem Daratan', icon: '🌳', pillar: 'lingkungan' },
  { number: 16, title: 'Perdamaian, Keadilan & Kelembagaan Tangguh', icon: '🕊️', pillar: 'tatakelola' },
  { number: 17, title: 'Kemitraan untuk Mencapai Tujuan', icon: '🤲', pillar: 'tatakelola' },
]

const aksiNyataItems = [
  { text: 'Membiasakan membuang sampah pada tempatnya', sdg: [6, 11, 14, 15] },
  { text: 'Menghemat penggunaan air saat mandi atau cuci tangan', sdg: [6] },
  { text: 'Mematikan lampu dan peralatan listrik yang tidak terpakai', sdg: [7, 13] },
  { text: 'Membawa botol minum sendiri dari rumah (mengurangi plastik)', sdg: [12, 14] },
  { text: 'Menanam pohon atau tanaman di sekitar rumah/sekolah', sdg: [13, 15] },
  { text: 'Berjalan kaki atau bersepeda ke sekolah jika memungkinkan', sdg: [3, 11, 13] },
  { text: 'Mengikuti kegiatan kerja bakti atau gotong royong di lingkungan', sdg: [11, 17] },
  { text: 'Mendaur ulang sampah organik menjadi kompos', sdg: [12, 15] },
  { text: 'Membantu teman yang kesulitan belajar (peer tutoring)', sdg: [4, 10] },
  { text: 'Tidak membully teman dan menghargai perbedaan', sdg: [4, 16] },
  { text: 'Menggunakan kedua sisi kertas saat menulis/menggambar', sdg: [12, 15] },
  { text: 'Ikut serta dalam kegiatan sosial atau donor darah (jika memungkinkan)', sdg: [1, 3, 17] },
]

const quizQuestions = [
  {
    question: 'Hakikat pembangunan berkelanjutan adalah ...',
    options: [
      'Membangun sebanyak-banyaknya untuk memenuhi kebutuhan saat ini',
      'Memenuhi kebutuhan masa kini tanpa mengurangi kemampuan generasi mendatang memenuhi kebutuhannya',
      'Menjaga lingkungan tanpa memanfaatkan sumber daya alam sama sekali',
      'Mengutamakan pertumbuhan ekonomi di atas segalanya',
    ],
    correctAnswer: 1,
    explanation:
      'Pembangunan berkelanjutan adalah upaya memenuhi kebutuhan masa kini dengan meminimalkan dampak buruk terhadap lingkungan, sehingga sumber daya alam tetap terjaga untuk generasi mendatang.',
  },
  {
    question: 'Pilar SDGs yang berfokus pada kesejahteraan masyarakat, pendidikan, dan kesehatan disebut pilar ...',
    options: [
      'Pilar Ekonomi',
      'Pilar Lingkungan Hidup',
      'Pilar Sosial',
      'Pilar Tata Kelola',
    ],
    correctAnswer: 2,
    explanation:
      'Pilar Sosial dalam SDGs mencakup tujuan-tujuan yang berfokus pada kesejahteraan masyarakat, seperti pengentasan kemiskinan (Tujuan 1), pendidikan berkualitas (Tujuan 4), dan kesehatan (Tujuan 3).',
  },
  {
    question: 'Pembersihan tanah tercemar dengan memanfaatkan mikroorganisme disebut ...',
    options: [
      'Reboisasi',
      'Bioremediasi',
      'Reklamasi',
      'Rehabilitasi',
    ],
    correctAnswer: 1,
    explanation:
      'Bioremediasi adalah proses pembersihan tanah atau air yang tercemar dengan menggunakan mikroorganisme (bakteri atau jamur) yang mampu mengurai zat-zat pencemar.',
  },
  {
    question: 'Deforestasi (perambahan hutan) mengancam pilar SDGs yang mana?',
    options: [
      'Pilar Sosial',
      'Pilar Ekonomi',
      'Pilar Tata Kelola',
      'Pilar Lingkungan Hidup',
    ],
    correctAnswer: 3,
    explanation:
      'Deforestasi mengancam pilar lingkungan dalam SDGs karena merusak ekosistem daratan (Tujuan 15), mengurangi kemampuan bumi menyerap karbon, dan memicu pemanasan global (Tujuan 13).',
  },
]

const pilarData = [
  {
    name: 'Pilar Sosial',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    textColor: 'text-pink-800',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    ringColor: 'ring-pink-400',
    goals: [1, 2, 3, 4, 5, 10],
    description: 'Kesejahteraan masyarakat, pendidikan, kesehatan, dan kesetaraan.',
    detail: [
      'Tujuan 1: Tanpa Kemiskinan',
      'Tujuan 2: Tanpa Kelaparan',
      'Tujuan 3: Kehidupan Sehat & Sejahtera',
      'Tujuan 4: Pendidikan Berkualitas',
      'Tujuan 5: Kesetaraan Gender',
      'Tujuan 10: Berkurangnya Kesenjangan',
    ],
  },
  {
    name: 'Pilar Ekonomi',
    icon: TrendingUp,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-800',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    ringColor: 'ring-blue-400',
    goals: [7, 8, 9, 12],
    description: 'Ekonomi ramah lingkungan, kolaborasi, dan inovasi teknologi.',
    detail: [
      'Tujuan 7: Energi Bersih & Terjangkau',
      'Tujuan 8: Pekerjaan Layak & Pertumbuhan Ekonomi',
      'Tujuan 9: Industri, Inovasi & Infrastruktur',
      'Tujuan 12: Konsumsi & Produksi Bertanggung Jawab',
    ],
  },
  {
    name: 'Pilar Lingkungan',
    icon: Sprout,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-800',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    ringColor: 'ring-green-400',
    goals: [6, 11, 13, 14, 15],
    description: 'Pelestarian ekosistem darat dan air agar lingkungan tetap seimbang.',
    detail: [
      'Tujuan 6: Air Bersih & Sanitasi Layak',
      'Tujuan 11: Kota & Permukiman Berkelanjutan',
      'Tujuan 13: Penanganan Perubahan Iklim',
      'Tujuan 14: Ekosistem Lautan',
      'Tujuan 15: Ekosistem Daratan',
    ],
  },
  {
    name: 'Pilar Tata Kelola',
    icon: Shield,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-800',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    ringColor: 'ring-purple-400',
    goals: [16, 17],
    description: 'Perdamaian, keadilan, dan kelembagaan yang tangguh.',
    detail: [
      'Tujuan 16: Perdamaian, Keadilan & Kelembagaan Tangguh',
      'Tujuan 17: Kemitraan untuk Mencapai Tujuan',
    ],
  },
]

// ============================================================
// Komponen: SDGs Interaktif
// ============================================================

function SDGsInteraktifTab() {
  const [activePilar, setActivePilar] = useState<number | null>(null)
  const [checkedActions, setCheckedActions] = useState<number[]>([])
  const [showAksiDetail, setShowAksiDetail] = useState<number | null>(null)

  const toggleAction = (idx: number) => {
    setCheckedActions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  // Calculate which pillars are contributed to
  const contributedPillars = new Set<string>()
  checkedActions.forEach((actionIdx) => {
    const action = aksiNyataItems[actionIdx]
    action.sdg.forEach((goalNum) => {
      const goal = sdgGoals.find((g) => g.number === goalNum)
      if (goal) contributedPillars.add(goal.pillar)
    })
  })

  const pillarContribution: Record<string, { done: number; total: number }> = {}
  pilarData.forEach((pilar) => {
    const done = checkedActions.filter((actionIdx) => {
      const action = aksiNyataItems[actionIdx]
      return action.sdg.some((g) => pilar.goals.includes(g))
    }).length
    pillarContribution[pilar.name] = { done, total: aksiNyataItems.length }
  })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      {/* A. 4 Pilar SDGs */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-emerald-600" />
          A. Empat Pilar SDGs
        </h3>
        <p className="text-gray-700 mb-4">
          Berdasarkan Deklarasi SDGs tahun 2015, terdapat <strong>17 tujuan pembangunan berkelanjutan</strong> yang dikelompokkan ke dalam <strong>4 pilar utama</strong> yang saling berhubungan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pilarData.map((pilar, idx) => {
            const Icon = pilar.icon
            const isActive = activePilar === idx
            return (
              <motion.button
                key={idx}
                onClick={() => setActivePilar(isActive ? null : idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-xl p-5 text-left transition-all border-2 ${
                  isActive
                    ? `${pilar.bgColor} ${pilar.borderColor} shadow-lg ring-2 ${pilar.ringColor}`
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pilar.color} flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${pilar.textColor} text-lg`}>{pilar.name}</h4>
                    <p className={`text-sm ${pilar.textColor} opacity-80`}>{pilar.description}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-gray-200"
                    >
                      <p className="text-sm font-medium text-gray-700 mb-2">Tujuan SDGs dalam pilar ini:</p>
                      <ul className="space-y-1">
                        {pilar.detail.map((d, dIdx) => (
                          <li key={dIdx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${pilar.color} flex-shrink-0`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* B. 17 Tujuan SDGs Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
          <Globe className="w-6 h-6 text-emerald-600" />
          B. 17 Tujuan SDGs
        </h3>
        <p className="text-gray-700 mb-4">
          Klik setiap tujuan untuk melihat pilar yang menaunginya.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sdgGoals.map((goal) => {
            const pilarInfo = pilarData.find((p) => p.goals.includes(goal.number))
            return (
              <motion.div
                key={goal.number}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-xl p-4 text-center border-2 transition-all cursor-default ${
                  pilarInfo ? `${pilarInfo.bgColor} ${pilarInfo.borderColor}` : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="text-2xl mb-1">{goal.icon}</div>
                <div className={`text-xs font-bold mb-0.5 ${pilarInfo ? pilarInfo.textColor : 'text-gray-700'}`}>
                  Tujuan {goal.number}
                </div>
                <div className="text-xs text-gray-600 leading-tight">{goal.title}</div>
                {pilarInfo && (
                  <div className={`mt-1.5 text-xs px-1.5 py-0.5 rounded-full font-medium inline-block ${
                    pilarInfo.iconBg
                  } ${pilarInfo.iconColor}`}>
                    {pilarInfo.name.replace('Pilar ', '')}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 p-3 bg-gray-50 rounded-lg">
          {pilarData.map((pilar, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pilar.color}`} />
              <span className="text-xs text-gray-700 font-medium">{pilar.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* C. Aksi Nyataku untuk SDGs */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
        <div className="flex items-start gap-3 mb-3">
          <Award className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-emerald-900 text-lg">C. Aksi Nyataku untuk SDGs</h3>
            <p className="text-emerald-800 mt-1">
              Centang aksi yang sudah kamu lakukan. Lihat kontribusimu terhadap pilar-pilar SDGs!
            </p>
          </div>
        </div>

        {/* Progress summary */}
        <div className="bg-white rounded-lg p-4 mb-4 border border-emerald-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Aksi dilakukan: <strong className="text-emerald-700">{checkedActions.length}/{aksiNyataItems.length}</strong>
            </span>
            <span className="text-sm font-medium text-gray-700">
              Pilar terkontribusi: <strong className="text-emerald-700">{contributedPillars.size}/4</strong>
            </span>
          </div>
          {/* Progress bar */}
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
              initial={{ width: 0 }}
              animate={{ width: `${(checkedActions.length / aksiNyataItems.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Pillar contribution */}
        {checkedActions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"
          >
            {pilarData.map((pilar, idx) => {
              const contrib = pillarContribution[pilar.name]
              const isContributed = contrib.done > 0
              return (
                <div
                  key={idx}
                  className={`rounded-lg p-3 border-2 transition-all ${
                    isContributed
                      ? `${pilar.bgColor} ${pilar.borderColor}`
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <pilar.icon className={`w-4 h-4 ${isContributed ? pilar.iconColor : 'text-gray-400'}`} />
                    <span className={`text-xs font-bold ${isContributed ? pilar.textColor : 'text-gray-500'}`}>
                      {pilar.name.replace('Pilar ', '')}
                    </span>
                  </div>
                  <div className="text-lg font-bold">
                    <span className={isContributed ? pilar.textColor : 'text-gray-400'}>
                      {contrib.done}
                    </span>
                    <span className="text-xs text-gray-400">/{contrib.total}</span>
                  </div>
                </div>
              )
            })}
          </motion.div>
        )}

        {/* Actions checklist */}
        <div className="space-y-2">
          {aksiNyataItems.map((aksi, idx) => {
            const isChecked = checkedActions.includes(idx)
            return (
              <motion.button
                key={idx}
                onClick={() => toggleAction(idx)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                  isChecked
                    ? 'bg-emerald-100 border-emerald-400 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-emerald-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600'
                      : 'border-gray-300'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${isChecked ? 'text-emerald-900 line-through' : 'text-gray-800'}`}>
                      {aksi.text}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowAksiDetail(showAksiDetail === idx ? null : idx)
                      }}
                      className="text-xs text-emerald-600 hover:underline mt-0.5"
                    >
                      Lihat kontribusi SDGs
                    </button>
                    <AnimatePresence>
                      {showAksiDetail === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 flex flex-wrap gap-1"
                        >
                          {aksi.sdg.map((goalNum) => {
                            const goal = sdgGoals.find((g) => g.number === goalNum)
                            const pilar = pilarData.find((p) => p.goals.includes(goalNum))
                            return (
                              <span
                                key={goalNum}
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                  pilar ? `${pilar.iconBg} ${pilar.iconColor}` : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {goal?.icon} Tujuan {goalNum}: {goal?.title}
                              </span>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Reset button */}
        {checkedActions.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setCheckedActions([])
                setShowAksiDetail(null)
              }}
              className="btn-secondary flex items-center gap-1 text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Aksi
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ============================================================
// Komponen: Kuis
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
        <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">
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
                  : 'bg-emerald-50 border-2 border-emerald-400'
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
            selected === correctAnswer
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            {selected === correctAnswer ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
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

export default function LabPembangunan() {
  const [activeTab, setActiveTab] = useState<'materi' | 'sdgs' | 'kuis'>('materi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-3">
          <Sprout className="w-10 h-10" />
          <div>
            <h2 className="text-3xl font-bold">Lab Pembangunan Berkelanjutan & SDGs</h2>
            <p className="text-emerald-100">Pembelajaran Interaktif untuk Generasi Emas 2045</p>
          </div>
        </div>
        <p className="text-emerald-100 text-sm">
          IPS Kelas 7 — Memahami pembangunan berkelanjutan dan 4 pilar SDGs
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex border-b">
          {[
            {
              key: 'materi' as const,
              label: 'Materi',
              icon: BookOpen,
            },
            {
              key: 'sdgs' as const,
              label: 'SDGs Interaktif',
              icon: Globe,
            },
            {
              key: 'kuis' as const,
              label: 'Kuis',
              icon: Target,
            },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.key
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-700 border-b-2 border-emerald-500'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {/* ==================== MATERI TAB ==================== */}
            {activeTab === 'materi' && (
              <motion.div
                key="materi"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* A. Hakikat Pembangunan Berkelanjutan */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Sprout className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-emerald-900 text-lg">A. Hakikat Pembangunan Berkelanjutan</h4>
                      <p className="text-emerald-800 mt-2 leading-relaxed">
                        Pembangunan berkelanjutan adalah <strong>upaya untuk memenuhi kebutuhan masa kini dengan meminimalkan dampak buruk terhadap lingkungan</strong>, sehingga sumber daya alam tetap terjaga untuk menopang kehidupan generasi mendatang.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mt-3 border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-emerald-900">Mengapa ini penting?</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Konsep ini mulai menjadi perhatian dunia secara luas sejak lahirnya <strong>Deklarasi Sustainable Development Goals (SDGs)</strong> pada tahun 2015. Deklarasi ini merupakan kesepakatan antarnegara untuk menjaga kualitas kehidupan secara global.
                    </p>
                  </div>
                </div>

                {/* B. Karakteristik Pembangunan Berkelanjutan */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                    <Lightbulb className="w-6 h-6 text-amber-600" />
                    B. Karakteristik Pembangunan Berkelanjutan
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pembangunan berkelanjutan memiliki ciri khas yang membedakannya dengan pembangunan biasa:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {karakteristikItems.map((item, idx) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`${item.bgColor} rounded-xl p-5 border-2 ${item.borderColor}`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                              <Icon className={`w-5 h-5 ${item.iconColor}`} />
                            </div>
                            <h4 className={`font-bold ${item.textColor}`}>{item.title}</h4>
                          </div>
                          <p className={`text-sm ${item.textColor} opacity-80 leading-relaxed`}>
                            {item.description}
                          </p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* C. Program Lingkungan */}
                <div className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-xl p-5 border-2 border-green-200">
                  <div className="flex items-start gap-3 mb-4">
                    <Trees className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-green-900 text-lg">C. Program Pelestarian Lingkungan</h4>
                      <p className="text-green-800 mt-1">
                        Contoh nyata program lingkungan yang mendukung pembangunan berkelanjutan:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {programLingkunganItems.map((program, idx) => {
                      const Icon = program.icon
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.15 }}
                          className="bg-white rounded-xl p-4 border border-green-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-green-900 mb-1">{program.title}</h5>
                              <p className="text-sm text-gray-700">{program.description}</p>
                              <div className="mt-2 bg-green-50 rounded-lg p-2 border border-green-100">
                                <p className="text-xs text-green-800">
                                  <strong>💡 {program.contoh}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* IPS Around Us: Generasi Emas 2045 */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border-2 border-amber-300">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 text-lg">IPS Around Us: Menjadi Generasi Emas 2045</h4>
                      <p className="text-amber-800 mt-2 leading-relaxed">
                        Setiap individu memiliki peran dalam keberhasilan pembangunan berkelanjutan. Sebagai pelajar,{' '}
                        <strong>kontribusi konkretmu mulai dari lingkungan keluarga dan sekolah</strong> akan sangat menentukan
                        apakah Indonesia mampu hidup sejahtera di masa depan.{' '}
                        <strong>Masa depan bumi ada di tangan tindakan bijakmu hari ini!</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ==================== SDGS INTERAKTIF TAB ==================== */}
            {activeTab === 'sdgs' && (
              <motion.div
                key="sdgs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <SDGsInteraktifTab />
              </motion.div>
            )}

            {/* ==================== KUIS TAB ==================== */}
            {activeTab === 'kuis' && (
              <motion.div
                key="kuis"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Kuis Pembangunan Berkelanjutan</h3>
                    <p className="text-sm text-gray-600">
                      Uji pemahamanmu tentang pembangunan berkelanjutan dan SDGs
                    </p>
                  </div>
                </div>

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

      {/* Footer: Generasi Emas 2045 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-5 text-white text-center shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Award className="w-6 h-6" />
          <h3 className="text-xl font-bold">Generasi Emas 2045</h3>
        </div>
        <p className="text-amber-100 text-sm">
          "Masa depan bumi ada di tangan tindakan bijakmu hari ini!"
        </p>
      </motion.div>
    </div>
  )
}
