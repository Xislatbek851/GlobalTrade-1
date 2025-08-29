import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/cargo-ships-and-airplane-at-port-with-containers.png" alt="Global Trade Solutions" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Global Trade Solutions
              <br />
              <span className="text-white">Delivered With Precision</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 text-pretty max-w-2xl">
              Efficient global sourcing and delivery of quality goods worldwide
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                <Link href="/contact">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-20 left-0 right-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start gap-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">9k+</h3>
              <p className="text-white/80 text-sm uppercase tracking-wide">DELIVERED GOODS</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">345</h3>
              <p className="text-white/80 text-sm uppercase tracking-wide">HAPPY CUSTOMERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
