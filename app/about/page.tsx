import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Globe, Target, Heart } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery and client relationships.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Trust and transparency form the foundation of all our business relationships.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our worldwide network enables seamless trade connections across all continents.",
  },
]

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Global Partners", value: "500+" },
  { label: "Successful Shipments", value: "100K+" },
  { label: "Team Members", value: "200+" },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    description: "25+ years in international trade with expertise in global logistics and strategic partnerships.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    description: "Expert in supply chain optimization and customs regulations across Asia-Pacific markets.",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Business Development",
    description: "Specializes in emerging markets and has established key partnerships across Latin America.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHeader
          title="1999-yildan beri global savdoda ko‘priklar quramiz"
          subtitle="Biz butun dunyo bo‘ylab bizneslarni ishonchli, samarali va innovatsion import-eksport yechimlari orqali bog‘lashga sodiq yetakchi xalqaro savdo kompaniyasimiz."
          variant="centered"
        />

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Bizning missiyamiz</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Butun dunyo bo‘ylab bizneslarni bog‘lovchi kompleks, ishonchli va innovatsion import-eksport yechimlari
                  orqali xalqaro savdoni silliq qilish. Biz ustunlik, halollik va o‘zaro muvaffaqiyatni ta’minlaydigan
                  uzoq muddatli hamkorliklarni qurishga sodiqmiz.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/handshake.jpg"
                  alt="GlobalTrade bosh ofisi"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Asosiy qadriyatlarimiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Bizning har bir amaliyotimizni boshqaradigan va kompaniyamizni belgilaydigan tamoyillar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12 sm:py-16" id="team">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Rahbariyat jamoasi
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Meet the experienced professionals leading our global operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={member.name}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">{member.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Global Reach?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Xalqaro bozorlarda biznesingiz muvaffaqiyatga erishishi uchun qanday yordam bera olishimizni muhokama qilaylik.
                </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Bog‘lanish</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
