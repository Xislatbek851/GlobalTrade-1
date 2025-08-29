import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Building Bridges in Global Trade Since 1999
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                We are a leading international trade company dedicated to connecting businesses worldwide through
                reliable, efficient, and innovative import-export solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To facilitate seamless international trade by providing comprehensive, reliable, and innovative
                  import-export solutions that connect businesses across the globe. We are committed to excellence,
                  integrity, and building lasting partnerships that drive mutual success.
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
                  src="/placeholder-h99do.png"
                  alt="GlobalTrade headquarters"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                The principles that guide everything we do and define who we are as a company.
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
        <section className="py-20" id="team">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Leadership Team
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
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Global Reach?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help your business succeed in international markets.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
