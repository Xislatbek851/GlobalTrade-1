import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { LatestProducts } from "@/components/latest-products"
import { WhatWeDo } from "@/components/what-we-do"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <WhoWeAre />
        <LatestProducts />
        <WhatWeDo />
      </main>
      <Footer />
    </div>
  )
}
