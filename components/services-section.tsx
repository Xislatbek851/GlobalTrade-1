import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, FileText, Shield, Headphones, Tractor, Droplets, Cpu, Wrench, Hammer, Mountain, Shirt, Package, Zap, Sprout } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Land Transport",
    description: "Comprehensive ground transportation and cross-border trucking services.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Complete customs clearance, permits, and trade documentation handling.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Comprehensive cargo insurance and risk management solutions.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support and shipment tracking services.",
  },
  {
    icon: Tractor,
    title: "Agricultural Machinery",
    description: "Wholesale trade of agricultural equipment and irrigation systems.",
  },
  {
    icon: Droplets,
    title: "Irrigation Equipment",
    description: "Agricultural irrigation systems and water management solutions.",
  },
  {
    icon: Cpu,
    title: "Electronics & Telecom",
    description: "Wholesale trade of electronic and telecommunications equipment and spare parts.",
  },
  {
    icon: Wrench,
    title: "Industrial Machinery",
    description: "Wholesale trade of mechanical tools and industrial equipment.",
  },
  {
    icon: Mountain,
    title: "Mining & Construction",
    description: "Equipment for mining industry and civil construction machinery.",
  },
  {
    icon: Shirt,
    title: "Textile Machinery",
    description: "Equipment for textile, sewing, and knitting industry.",
  },
  {
    icon: Package,
    title: "Equipment Wholesale",
    description: "General machinery and equipment wholesale trade services.",
  },
  {
    icon: Zap,
    title: "Metals & Minerals",
    description: "Wholesale trade of metals, metal ores, and mineral resources.",
  },
  {
    icon: Hammer,
    title: "Construction Materials",
    description: "Wood, construction materials, and sanitary equipment wholesale.",
  },
  {
    icon: Sprout,
    title: "Raw Materials",
    description: "Soil, kaolin, quartz, and other industrial raw materials supply.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            Comprehensive Trade Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
            From logistics to documentation, we provide end-to-end services for seamless international trade.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg hover-lift transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center animate-fade-in-up animation-delay-700">
          <Button asChild size="lg" className="hover-lift">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
