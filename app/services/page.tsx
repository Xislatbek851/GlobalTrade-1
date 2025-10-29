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
    title: "Import xizmatlari",
    description: "Butun dunyo bo'ylab mahsulot yetkazib beruvchilar bilan ishlash uchun kompleks import yechimlari",
    features: ["Global yetkazib beruvchilarni topish", "Ta'minlovchini tekshirish", "Sifat nazorati", "Import hujjatlari"],
    benefits: ["Global bozorlar imkoniyati", "Tejamkor xarid", "Sifat kafolati", "Me'yoriy talablar bilan muvofiqlik"],
  },
  {
    id: "land",
    icon: Truck,
    title: "Quruqlikda tashish",
    description: "Keng qamrovli quruqlik transporti va chegara orqali yuk tashish",
    features: ["Chegaralararo yuk tashish", "Oxirgi kilometr yetkazib berish", "Omborxona xizmati", "Ta'qsimot xizmatlari"],
    benefits: ["Moslashuvchan jadval", "Hududiy tashish uchun tejamkor", "Eshikdan eshikgacha xizmat", "Real vaqt GPS kuzatuvi"],
  },
  {
    id: "docs",
    icon: FileText,
    title: "Hujjatlar va bojxona",
    description: "To'liq bojxona rasmiylashtiruvi va savdo hujjatlarini yuritish",
    features: ["Bojxona rasmiylashtiruvi", "Savdo hujjatlari", "Muvofiqlik bo'yicha maslahat", "Ruxsatnomalar bilan yordam"],
    benefits: ["Me'yoriy muvofiqlik", "Tezkor rasmiylashtirish", "Xatarlarni kamaytirish", "Ekspert ko'rsatmalari"],
  },
  {
    id: "insurance",
    icon: Shield,
    title: "Yuk sug'urtasi",
    description: "Keng qamrovli yuk sug'urtasi va xatarlarni boshqarish yechimlari",
    features: ["Har xil xatarlarni qamrab olish", "Dengiz sug'urtasi", "Transit sug'urtasi", "Da'volarni ko'rib chiqish"],
    benefits: ["Moliyaviy himoya", "Xotirjamlik", "Tezkor da'vo jarayoni", "Global qamrov"],
  },
  {
    id: "support",
    icon: Headphones,
    title: "24/7 mijozlarni qo'llab-quvvatlash",
    description: "Kun-u tun qo'llab-quvvatlash va jo'natma kuzatuvi",
    features: ["Jonli chat", "Telefon orqali yordam", "Email orqali yordam", "Jo'natmani kuzatish"],
    benefits: ["Doimiy mavjudlik", "Ekspert yordam", "Real vaqt yangilanishlari", "Bir nechta til qo'llab-quvvatlovi"],
  },
]

const additionalServices = [
  {
    icon: Tractor,
    title: "Qishloq xo'jaligi texnikalari",
    description: "Qishloq xo'jaligi uskunalari va sug'orish tizimlarini ulgurji savdosi.",
  },
  {
    icon: Droplets,
    title: "Sug'orish uskunalari",
    description: "Qishloq xo'jaligi sug'orish tizimlari va suv boshqaruvi yechimlari.",
  },
  {
    icon: Cpu,
    title: "Elektronika va telekom",
    description: "Elektronika va telekommunikatsiya uskunalari hamda ehtiyot qismlar ulgurji savdosi.",
  },
  {
    icon: Wrench,
    title: "Sanoat uskunalari",
    description: "Mexanik asbob-uskunalar va sanoat jihozlari ulgurji savdosi.",
  },
  {
    icon: Mountain,
    title: "Konchilik va qurilish",
    description: "Kon sanoati uchun uskunalar va qurilish texnikalari.",
  },
  {
    icon: Shirt,
    title: "To'qimachilik uskunalari",
    description: "To'qimachilik, tikuvchilik va to'quvchilik sanoati uchun jihozlar.",
  },
  {
    icon: Package,
    title: "Uskunalar ulgurji savdosi",
    description: "Umumiy uskunalar va jihozlarning ulgurji savdo xizmatlari.",
  },
  {
    icon: Zap,
    title: "Metallar va foydali qazilmalar",
    description: "Metallar, rudalar va mineral resurslar ulgurji savdosi.",
  },
  {
    icon: Hammer,
    title: "Qurilish materiallari",
    description: "Yog'och, qurilish materiallari va sanitariya jihozlari ulgurji savdosi.",
  },
  {
    icon: Sprout,
    title: "Xomashyo",
    description: "Tuproq, kaolin, kvarts va boshqa sanoat xomashyolarini yetkazib berish.",
  },
  {
    icon: BarChart3,
    title: "Ta'minot zanjiri tahlili",
    description: "Ta'minot zanjiri samaradorligini oshirish uchun ma'lumotga asoslangan tahlillar.",
  },
  {
    icon: Globe,
    title: "Savdo bo'yicha konsalting",
    description: "Xalqaro savdo qoidalari va bozorga kirish strategiyalari bo'yicha ekspert maslahatlari.",
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
