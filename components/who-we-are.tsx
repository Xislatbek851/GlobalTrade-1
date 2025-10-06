export function WhoWeAre() {
  return (
    <section className="py-16 bg-white" id="about" aria-labelledby="who-we-are-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium" role="presentation">
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
            WELCOME TO GLOBARA
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
          </div>
        </div>

        <h2 id="who-we-are-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Your Trusted Global Partner in Cross-Border Trade<br />
          <span className="text-emerald-600">Powered from Miami, Reaching the World</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/professional-business-meeting-with-handshake.png" alt="Professional business meeting showcasing GLOBARA's commitment to partnership" className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow" loading="lazy" />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              At <strong>GLOBARA</strong>, we bring the world closer—one shipment, one solution, and one partnership at a
              time. Established on June 18, 2019, and headquartered in Miami, Florida, we are a full-service
              international trade company specializing in connecting businesses with high-quality industrial supplies,
              agricultural products, and commodities to importers and distributors worldwide.
            </p>
            <p>
              We believe in finding smart, efficient solutions that drive reliability and long-term success in global trade.
              Whether you're sourcing agricultural products, searching for specialized industrial goods, or importing
              general merchandise to meet local demand, GLOBARA stands as a dependable and efficient bridge between
              global supply and market demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
