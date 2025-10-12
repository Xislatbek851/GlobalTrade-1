import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Truck,
  FileText,
  Shield,
  Headphones,
  DollarSign,
  CheckCircle,
  Globe,
  Package,
  BarChart3,
  Download,
  Tractor,
  Droplets,
  Cpu,
  Wrench,
  Hammer,
  Mountain,
  Shirt,
  Zap,
  Sprout,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "import",
    icon: Download,
    title: "Import Services",
    description: "Comprehensive import solutions for businesses looking to source products globally",
    features: ["Global sourcing", "Supplier verification", "Quality control", "Import documentation"],
    benefits: ["Access to global markets", "Cost-effective sourcing", "Quality assurance", "Regulatory compliance"],
  },
  {
    id: "land",
    icon: Truck,
    title: "Land Transport",
    description: "Comprehensive ground transportation and cross-border trucking",
    features: ["Cross-border trucking", "Last-mile delivery", "Warehousing", "Distribution services"],
    benefits: ["Flexible scheduling", "Cost-effective for regional", "Door-to-door service", "Real-time GPS tracking"],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Documentation & Customs",
    description: "Complete customs clearance and trade documentation handling",
    features: ["Customs clearance", "Trade documentation", "Compliance consulting", "Permit assistance"],
    benefits: ["Regulatory compliance", "Faster clearance", "Risk mitigation", "Expert guidance"],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive cargo insurance and risk management solutions",
    features: ["All-risk coverage", "Marine insurance", "Transit insurance", "Claims handling"],
    benefits: ["Financial protection", "Peace of mind", "Quick claims process", "Global coverage"],
  },
  {
    id: "support",
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer support and shipment tracking",
    features: ["Live chat support", "Phone assistance", "Email support", "Shipment tracking"],
    benefits: ["Always available", "Expert assistance", "Real-time updates", "Multilingual support"],
  },
]

const additionalServices = [
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
  {
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description: "Data-driven insights to optimize your supply chain performance.",
  },
  {
    icon: Globe,
    title: "Trade Consulting",
    description: "Expert advice on international trade regulations and market entry strategies.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Comprehensive Trade Solutions for Every Need
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                From logistics to documentation, we provide end-to-end services that make international trade simple,
                reliable, and cost-effective for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Core Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Explore our comprehensive range of international trade and logistics services.
              </p>
            </div>

            <Tabs defaultValue="import" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="flex flex-col gap-1 p-3">
                    <service.icon className="h-4 w-4" />
                    <span className="text-xs">{service.title.split(" ")[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section> */}

        {/* Additional Services */}
        <section className="pb-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Services
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Specialized services to complement your trade operations and maximize efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={service.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Our streamlined process ensures smooth and efficient handling of your international trade needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We assess your needs and provide tailored solutions",
                },
                { step: "02", title: "Planning", description: "Detailed logistics planning and route optimization" },
                { step: "03", title: "Execution", description: "Professional handling and real-time tracking" },
                { step: "04", title: "Delivery", description: "Safe delivery and comprehensive reporting" },
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss your international trade requirements and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
