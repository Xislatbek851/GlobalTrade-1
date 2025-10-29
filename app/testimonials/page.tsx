import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, Building2, TrendingUp, Users, Award } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Ta'minot zanjiri direktori",
    company: "TechFlow Industries",
    industry: "Elektronika",
    location: "Singapur",
    rating: 5,
    quote:
      "GlobalTrade Yevropa bozorlariga kirishimizda muhim rol o'ynadi. Bojxona qoidalaridagi tajribasi va ishonchli dengiz tashish xizmatlari yetkazib berish xarajatlarimizni 30% ga kamaytirib, yetkazish muddatlarini yaxshiladi.",
    results: ["30% xarajatlarni kamaytirish", "Tezroq yetkazish", "Muammosiz bojxona rasmiylashtiruvi"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Xalqaro savdo menejeri",
    company: "AgriGlobal Corp",
    industry: "Qishloq xo'jaligi",
    location: "Braziliya",
    rating: 5,
    quote:
      "GlobalTrade jamoasi qishloq xo'jaligi eksportining murakkabliklarini yaxshi tushunadi. Harorat nazoratli logistika va hujjatlashtirish bo'yicha tajribasi Osiyoga buziluvchan tovarlarimizni yetkazishda hal qiluvchi ahamiyatga ega bo'ldi.",
    results: ["Buzilish holatlarisiz", "Me'yoriy muvofiqlik", "Bozorni kengaytirish"],
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "CEO",
    company: "Fashion Forward Ltd",
    industry: "Moda",
    location: "Buyuk Britaniya",
    rating: 5,
    quote:
      "GlobalTrade bilan hamkorlik ta'minot zanjirimizni tubdan o'zgartirdi. Ularning havo tashish xizmati mavsumiy kolleksiyalarimizni global bozorlarga o'z vaqtida yetkazadi, 24/7 qo'llab-quvvatlash esa xotirjamlik beradi.",
    results: ["100% o'z vaqtida yetkazish", "Global bozorga chiqish", "A'lo darajadagi qo'llab-quvvatlash"],
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    title: "Operatsiyalar direktori",
    company: "Middle East Motors",
    industry: "Avtomobil sanoati",
    location: "UAE",
    rating: 5,
    quote:
      "GlobalTrade'ning keng qamrovli logistika yechimlari Afrika va Osiyo bo'ylab avtomobil qismlarini tarqatish jarayonlarimizni soddalashtirdi. Murakkab jo'natmalarni boshqarishdagi tajribasi tengsiz.",
    results: ["Soddalashtirilgan operatsiyalar", "Hududiy kengayish", "Xarajatlarni optimallashtirish"],
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Import bo'limi menejeri",
    company: "Pacific Pharmaceuticals",
    industry: "Sog'liqni saqlash",
    location: "Avstraliya",
    rating: 5,
    quote:
      "Farmatsevtika sohasi yuqori darajadagi sinchkovlik va muvofiqlikni talab qiladi. GlobalTrade'ning maxsus ishlov berish va hujjatlashtirish xizmatlari mahsulotlarimiz bemorlarga xavfsiz va o'z vaqtida yetib borishini ta'minlaydi.",
    results: ["Me'yoriy muvofiqlik", "Xavfsiz ishlov berish", "O'z vaqtida yetkazish"],
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    title: "Savdo direktori",
    company: "Latin Resources Inc",
    industry: "Konchilik",
    location: "Chili",
    rating: 5,
    quote:
      "Og'ir va yirik hajmdagi jo'natmalar bo'yicha GlobalTrade'ning tajribasi konchilik operatsiyalarimiz uchun bebaho bo'ldi. Ularning innovatsion yechimlari logistika xarajatlarimizni sezilarli darajada kamaytirdi.",
    results: ["Og'ir yuk bo'yicha ekspertiza", "Xarajatlarni kamaytirish", "Innovatsion yechimlar"],
  },
]

const stats = [
  { icon: Users, label: "Mamnun mijozlar", value: "2,500+" },
  { icon: TrendingUp, label: "Muvaffaqiyat darajasi", value: "99.9%" },
  { icon: Award, label: "Tajriba (yil)", value: "25+" },
  { icon: Building2, label: "Xizmat ko'rsatilgan tarmoqlar", value: "50+" },
]

const industries = [
  "Elektronika",
  "Avtomobil sanoati",
  "Moda",
  "Qishloq xo'jaligi",
  "Sog'liqni saqlash",
  "Konchilik",
  "Kimyo",
  "Oziq-ovqat va ichimliklar",
  "Uskunalar",
  "To'qimachilik",
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHeader
          title="Dunyo bo‘ylab bizneslar ishonchi"
          subtitle="Turli sohalardagi kompaniyalar xalqaro savdo operatsiyalarini bizning kompleks logistika yechimlari va ekspert ko‘rsatmalarimiz bilan qanday o‘zgartirganini bilib oling."
          variant="centered"
        />

        {/* Stats Section */}
        <section className="py-8 sm:py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Mijozlar muvaffaqiyat hikoyalari
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Xizmatlarimiz orqali ajoyib natijalarga erishgan bizneslarning haqiqiy tajribalari.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <CardDescription className="text-sm">{testimonial.title}</CardDescription>
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-primary/30" />
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.company}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.location}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      "{testimonial.quote}"
                    </blockquote>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Asosiy natijalar:</h4>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Xizmat ko‘rsatadigan tarmoqlarimiz
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Bizning tajribamiz turli tarmoqlarga yoyilgan bo‘lib, har birining o‘ziga xos talablari va chaqiriqlari mavjud.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Badge key={industry} variant="secondary" className="px-4 py-2 text-sm">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="text-center pb-8">
                <Badge variant="default" className="w-fit mx-auto mb-4">
                  Tanlangan keýs-stadi
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl text-balance">
                  TechFlow Industries xarajatlarni 30% ga qanday kamaytirdi
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  Bizning integratsiyalashgan logistika yechimlarimiz yirik elektronika ishlab chiqaruvchisining ta’minot zanjirini qanday o‘zgartirgani haqida batafsil hikoya.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Xarajatlarni kamaytirish</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Tezroq qayta ishlash</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Yangi bozorlar</div>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact">O‘xshash keýs-stadi so‘rash</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Muvaffaqiyat hikoyalarimizga qo'shiling</h2>
            <p className="text-lg mb-8 opacity-90">
              Xalqaro savdo operatsiyalaringizni o'zgartirishga tayyormisiz? O'xshash natijalarga erishishingizga qanday yordam bera olishimizni muhokama qilaylik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Yo'lingizni boshlang</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/services">Xizmatlarni ko'rish</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
