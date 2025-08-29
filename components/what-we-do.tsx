import { Globe, FileText, Users, Ship, Package, Settings } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: Globe,
      title: "International Sourcing & Procurement",
      description:
        "We locate the quality, cost-effective suppliers that meet your exact requirements. From agricultural to industrial goods, we ensure consistent quality and competitive pricing.",
    },
    {
      icon: FileText,
      title: "Import & Export Services",
      description:
        "We handle all aspects of international trade documentation, freight booking, customs clearance, and delivery logistics. Whether you're importing raw materials or exporting finished goods, we manage the complexity for you.",
    },
    {
      icon: Users,
      title: "Trade Compliance & Documentation",
      description:
        "Navigating international trade regulations can be complex. Our in-house team ensures your shipments are fully compliant with all country requirements and documentation.",
    },
    {
      icon: Ship,
      title: "Bulk Commodities Trading",
      description:
        "Specializing in large-volume trade of core commodities like sugar, wheat, and food, we offer flexible shipping methods (FOB, CIF, and more) with transparency with quality assurance.",
    },
    {
      icon: Package,
      title: "Private Label & OEM Solutions",
      description:
        "Bring your vision to life with personalized design-to-packaging and export services. We help you create custom products that meet your specifications.",
    },
    {
      icon: Settings,
      title: "Supply Chain Optimization",
      description:
        "We streamline your supply chain processes to reduce costs and improve efficiency across all your international trade operations.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium">
            <div className="w-8 h-px bg-emerald-600"></div>
            DG IMPORT & EXPORT LLC
            <div className="w-8 h-px bg-emerald-600"></div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">What We Do</h2>

        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          At our core, DG IMPORT & EXPORT LLC provides end-to-end global sourcing, import, and export solutions across a
          diverse range of products and sectors. We serve manufacturers, distributors, and government buyers by
          offering:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
