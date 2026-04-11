import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'

// Tema I
import LabGeografi from './pages/labs/LabGeografi'
import LabKondisiGeografis from './pages/labs/LabKondisiGeografis'
import LabKonektivitas from './pages/labs/LabKonektivitas'
import LabIklim from './pages/labs/LabIklim'
import LabBencana from './pages/labs/LabBencana'
import LabSosial from './pages/labs/LabSosial'
import LabEkonomi from './pages/labs/LabEkonomi'

// Tema II
import LabZamanGeologis from './pages/labs/LabZamanGeologis'
import LabPencemaran from './pages/labs/LabPencemaran'
import LabPelestarian from './pages/labs/LabPelestarian'
import LabPraaksara from './pages/labs/LabPraaksara'
import LabPembangunan from './pages/labs/LabPembangunan'
import LabDinamikaSosial from './pages/labs/LabDinamikaSosial'
import LabKelangkaan from './pages/labs/LabKelangkaan'

// Tema III
import LabSDA from './pages/labs/LabSDA'
import LabTambang from './pages/labs/LabTambang'
import LabKemaritiman from './pages/labs/LabKemaritiman'
import LabPerdaganganInternasional from './pages/labs/LabPerdaganganInternasional'
import LabPelakuEkonomi from './pages/labs/LabPelakuEkonomi'
import LabMekanismePasar from './pages/labs/LabMekanismePasar'
import LabPeranSosial from './pages/labs/LabPeranSosial'

// Tema IV
import LabKeragamanBudaya from './pages/labs/LabKeragamanBudaya'
import LabFaktorGeografis from './pages/labs/LabFaktorGeografis'
import LabSejarahLokal from './pages/labs/LabSejarahLokal'
import LabPermasalahanSosial from './pages/labs/LabPermasalahanSosial'
import LabSejarahUang from './pages/labs/LabSejarahUang'
import LabPengelolaanKeuangan from './pages/labs/LabPengelolaanKeuangan'
import LabKomunitas from './pages/labs/LabKomunitas'

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            {/* Tema I */}
            <Route path="/lab/geografi" element={<LabGeografi />} />
            <Route path="/lab/kondisi-geografis" element={<LabKondisiGeografis />} />
            <Route path="/lab/konektivitas" element={<LabKonektivitas />} />
            <Route path="/lab/iklim" element={<LabIklim />} />
            <Route path="/lab/bencana" element={<LabBencana />} />
            <Route path="/lab/sosial" element={<LabSosial />} />
            <Route path="/lab/ekonomi" element={<LabEkonomi />} />
            {/* Tema II */}
            <Route path="/lab/zaman-geologis" element={<LabZamanGeologis />} />
            <Route path="/lab/pencemaran" element={<LabPencemaran />} />
            <Route path="/lab/pelestarian" element={<LabPelestarian />} />
            <Route path="/lab/praaksara" element={<LabPraaksara />} />
            <Route path="/lab/pembangunan" element={<LabPembangunan />} />
            <Route path="/lab/dinamika-sosial" element={<LabDinamikaSosial />} />
            <Route path="/lab/kelangkaan" element={<LabKelangkaan />} />
            {/* Tema III */}
            <Route path="/lab/sda" element={<LabSDA />} />
            <Route path="/lab/tambang" element={<LabTambang />} />
            <Route path="/lab/kemaritiman" element={<LabKemaritiman />} />
            <Route path="/lab/perdagangan-internasional" element={<LabPerdaganganInternasional />} />
            <Route path="/lab/pelaku-ekonomi" element={<LabPelakuEkonomi />} />
            <Route path="/lab/mekanisme-pasar" element={<LabMekanismePasar />} />
            <Route path="/lab/peran-sosial" element={<LabPeranSosial />} />
            {/* Tema IV */}
            <Route path="/lab/keragaman-budaya" element={<LabKeragamanBudaya />} />
            <Route path="/lab/faktor-geografis" element={<LabFaktorGeografis />} />
            <Route path="/lab/sejarah-lokal" element={<LabSejarahLokal />} />
            <Route path="/lab/permasalahan-sosial" element={<LabPermasalahanSosial />} />
            <Route path="/lab/sejarah-uang" element={<LabSejarahUang />} />
            <Route path="/lab/pengelolaan-keuangan" element={<LabPengelolaanKeuangan />} />
            <Route path="/lab/komunitas" element={<LabKomunitas />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
