import Image from "next/image"

export function LatestProducts() {
  const products = [
    {
      title: "Quartz SiO2-99,10",
      image: "/rocks.png",
    },
    {
      title: "Kaolin AKF-78 AKS-30 AKT-10",
      image: "/Mel.jpg",
    },
    {
      title: "Kvartz SiO2-99,10",
      image: "/small rocks.png",
    },
    {
      title: "Quartz SiO2-99,10",
      image: "/mosh.png",
    },
    {
      title: "Kaolin AKF-78 AKS-30 AKT-10",
      image: "/fasol.png",
    },
    {
      title: "Kvartz SiO2-99,10",
      image: "/loviya.png",
    },
    {
      title: "Quartz SiO2-99,10",
      image: "/yasmiq.png",
    },
    {
      title: "Kaolin AKF-78 AKS-30 AKT-10",
      image: "/bugdoy.png",
    },
    {
      title: "Kvartz SiO2-99,10",
      image: "/yer_yongoq.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="products" aria-labelledby="products-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium" role="presentation">
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
            GLOBARA
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
          </div>
        </div>

        <h2 id="products-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Image width={490} height={490} src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-auto sm:h-[490px] object-cover" loading="lazy" />
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
