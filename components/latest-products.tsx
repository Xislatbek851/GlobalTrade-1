export function LatestProducts() {
  const products = [
    {
      title: "Coal",
      image: "/coal-mining-industrial.png",
    },
    {
      title: "Agricultural Machinery",
      image: "/agricultural-harvesting-machinery-in-field.png",
    },
    {
      title: "Chemicals (Industrial & Specialty)",
      image: "/industrial-chemical-laboratory.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium">
            <div className="w-8 h-px bg-emerald-600"></div>
            DG IMPORT & EXPORT LLC
            <div className="w-8 h-px bg-emerald-600"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Latest Product</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
