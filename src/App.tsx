
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/home/hero'

import Introduction from './sections/Introduction'
import BodyImpact from './sections/BodyImpact'
import Symptoms from './sections/Symptoms'
import Diagnosis from './sections/Diagnosis'
import MythsFacts from './sections/MythsFacts'
import ProfessionalAdvice from './sections/ProfessionalAdvice'
import AboutOvaSense from './sections/AboutOvaSense'
import ResearchTimeline from './sections/ResearchTimeline'
import FAQ from './sections/FAQ'
import Resources from './sections/Resources'

function App() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal overflow-x-hidden">

      <Navbar />

      <Hero />

      <Introduction />

      <BodyImpact />

      <Symptoms />

      <Diagnosis />

      <MythsFacts />

      <ProfessionalAdvice />

      <AboutOvaSense />

      <ResearchTimeline />

      <FAQ />

      <Resources />

      <Footer />

    </main>
  )
}

export default App
