import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductSection } from './components/ProductSection'
import { PlatformArchitecture } from './components/PlatformArchitecture'
import { FeaturesSection } from './components/FeaturesSection'
import { CollisionZones } from './components/CollisionZones'
import { RoadTestVideos } from './components/RoadTestVideos'
import { ARASSection } from './components/ARASSection'
import { AboutPlatform } from './components/AboutPlatform'
import { PerceivaSoftware } from './components/PerceivaSoftware'
import { Verticals } from './components/Verticals'
import { TeamSection } from './components/TeamSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <PlatformArchitecture />
        <FeaturesSection />
        <CollisionZones />
        <RoadTestVideos />
        <ARASSection />
        <AboutPlatform />
        <PerceivaSoftware />
        <Verticals />
        <TeamSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
