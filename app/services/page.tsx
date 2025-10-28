import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
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
        <PageHeader
          title="Har qanday ehtiyoj uchun kompleks savdo yechimlari"
          subtitle="Logistikadan hujjatlashtirishgacha — xalqaro savdoni har o‘lchamdagi bizneslar uchun sodda, ishonchli va tejamkor qiluvchi to‘liq xizmatlarni taqdim etamiz."
          variant="centered"
        />

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
                Xizmatlar
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Savdo operatsiyalaringizni to‘ldiruvchi va samaradorlikni oshiruvchi maxsus xizmatlar.
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
                Qanday ishlaymiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Soddalashtirilgan jarayonlar xalqaro savdo ehtiyojlaringizni silliq va samarali bajarilishini ta’minlaydi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Konsultatsiya",
                  description: "Ehtiyojlaringizni baholab, moslashtirilgan yechimlar taqdim etamiz",
                },
                { step: "02", title: "Rejalashtirish", description: "Batafsil logistika rejasi va yo‘nalishni optimallashtirish" },
                { step: "03", title: "Bajarish", description: "Professional boshqaruv va real vaqt rejimidagi kuzatuv" },
                { step: "04", title: "Yetkazib berish", description: "Xavfsiz yetkazib berish va batafsil hisobot" },
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
            <h2 className="text-3xl font-bold mb-4">Boshlashga tayyormisiz?</h2>
            <p className="text-lg mb-8 opacity-90">
              Bugunoq biz bilan bog‘laning — talablaringizni muhokama qilib, shaxsiylashtirilgan tijorat taklifini oling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Tijorat taklifi so‘rash</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
