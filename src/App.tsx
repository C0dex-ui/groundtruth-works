import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { ServiceAreaPage, ServiceAreasIndexPage } from './pages/ServiceAreaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services"
          element={
            <PlaceholderPage
              title="Services"
              description="Every service Growfully performs: land clearing, site grading, excavation, site prep, forestry mulching, brush clearing, dirt work and drainage across Central Arkansas."
            />
          }
        />
        <Route
          path="/services/:slug"
          element={
            <PlaceholderPage title="Service" description="Service detail page — linked from the homepage services grid." />
          }
        />
        <Route
          path="/industries"
          element={
            <PlaceholderPage
              title="Industries"
              description="Solar site preparation, general contractors, and commercial development site work."
            />
          }
        />
        <Route
          path="/industries/:slug"
          element={<PlaceholderPage title="Industry" />}
        />
        <Route path="/service-areas" element={<ServiceAreasIndexPage />} />
        <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
        <Route
          path="/projects"
          element={
            <PlaceholderPage
              title="Projects"
              description="We are photographing active sites this season. Until then, call David to walk a live job."
            />
          }
        />
        <Route path="/about" element={<PlaceholderPage title="About Growfully" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        <Route
          path="/get-a-quote"
          element={
            <PlaceholderPage
              title="Get a Quote"
              description="Tell us about your site and get a written estimate. Or use the form on the homepage for a quick request."
            />
          }
        />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
