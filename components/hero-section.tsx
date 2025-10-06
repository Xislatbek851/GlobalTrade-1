import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/people66.jpg" alt="GLOBARA international business professionals collaborating on global trade solutions" className="h-full w-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              GLOBARA
              <br />
              <span className="text-white">Your Trusted Global Trade Partner</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 text-pretty max-w-2xl">
              Connecting businesses worldwide with high-quality products and reliable logistics solutions since 2019
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:flex md:justify-start gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white" aria-label="Over 9000 delivered goods">9k+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide mt-2">Delivered Goods</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white" aria-label="345 satisfied customers">345</div>
              <p className="text-white/80 text-sm uppercase tracking-wide mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white" aria-label="Present in 25 countries">25+</div>
              <p className="text-white/80 text-sm uppercase tracking-wide mt-2">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white" aria-label="6 years of experience">6</div>
              <p className="text-white/80 text-sm uppercase tracking-wide mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
