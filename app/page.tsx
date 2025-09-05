import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <Footer />
      </main>
    </PageTransition>
  )
}
