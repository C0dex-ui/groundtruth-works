import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { IndustriesIndexPage, IndustryDetailPage } from './pages/IndustriesPage'
import { LegalPage } from './pages/LegalPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { QuotePage } from './pages/QuotePage'
import { ServiceAreaPage, ServiceAreasIndexPage } from './pages/ServiceAreaPage'
import { ServiceDetailPage, ServicesIndexPage } from './pages/ServicesPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/industries" element={<IndustriesIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        <Route path="/service-areas" element={<ServiceAreasIndexPage />} />
        <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-quote" element={<QuotePage />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
