import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, FileText, Shield, Headphones, Tractor, Droplets, Cpu, Wrench, Hammer, Mountain, Shirt, Package, Zap, Sprout } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Quruqlikda tashish",
    description: "Yuklarni quruqlikda tashish va chegaraoldi yuk tashish xizmatlari.",
  },
  {
    icon: FileText,
    title: "Hujjatlar",
    description: "Bojxona rasmiylashtiruvi, ruxsatnomalar va savdo hujjatlarini to‘liq yuritish.",
  },
  {
    icon: Shield,
    title: "Sug‘urta",
    description: "Yuklar uchun kompleks sug‘urta va xatarlarni boshqarish yechimlari.",
  },
  {
    icon: Headphones,
    title: "24/7 Qo‘llab-quvvatlash",
    description: "Kun-u tun mijozlarni qo‘llab-quvvatlash va jo‘natmalarni kuzatish.",
  },
  {
    icon: Tractor,
    title: "Qishloq xo‘jaligi texnikasi",
    description: "Qishloq xo‘jaligi uskunalari va sug‘orish tizimlari ulgurji savdosi.",
  },
  {
    icon: Droplets,
    title: "Sug‘orish uskunalari",
    description: "Qishloq xo‘jaligi sug‘orish tizimlari va suv resurslarini boshqarish.",
  },
  {
    icon: Cpu,
    title: "Elektronika va telekommunikatsiya",
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
    description: "Konchilik sanoati va fuqarolik qurilishidagi uskunalar.",
  },
  {
    icon: Shirt,
    title: "To‘qimachilik uskunalari",
    description: "To‘qimachilik, tikuvchilik va trikotaj sanoati uskunalari.",
  },
  {
    icon: Package,
    title: "Uskunalar ulgurji savdosi",
    description: "Turli mexanizmlar va jihozlarning ulgurji savdo xizmatlari.",
  },
  {
    icon: Zap,
    title: "Metallar va minerallar",
    description: "Metallar, rudalar va mineral xomashyo ulgurji savdosi.",
  },
  {
    icon: Hammer,
    title: "Qurilish materiallari",
    description: "Yog‘och, qurilish materiallari va sanitariya jihozlari ulgurji savdosi.",
  },
  {
    icon: Sprout,
    title: "Xomashyo",
    description: "Tuproq, kaolin, kvarts va boshqa sanoat xomashyolari yetkazib berish.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            Kompleks savdo yechimlari
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
            Logistikadan hujjatlashtirishgacha — xalqaro savdoni silliq qiluvchi to‘liq xizmatlar.
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
            <Link href="/services">Barcha xizmatlarni ko‘rish</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
