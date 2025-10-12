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
    title: "Supply Chain Director",
    company: "TechFlow Industries",
    industry: "Electronics",
    location: "Singapore",
    rating: 5,
    quote:
      "GlobalTrade has been instrumental in our expansion into European markets. Their expertise in customs regulations and reliable ocean freight services have reduced our shipping costs by 30% while improving delivery times.",
    results: ["30% cost reduction", "Faster delivery times", "Seamless customs clearance"],
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "International Trade Manager",
    company: "AgriGlobal Corp",
    industry: "Agriculture",
    location: "Brazil",
    rating: 5,
    quote:
      "The team at GlobalTrade understands the complexities of agricultural exports. Their temperature-controlled logistics and documentation expertise have been crucial for our perishable goods shipments to Asia.",
    results: ["Zero spoilage incidents", "Regulatory compliance", "Market expansion"],
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "CEO",
    company: "Fashion Forward Ltd",
    industry: "Fashion",
    location: "United Kingdom",
    rating: 5,
    quote:
      "Working with GlobalTrade has transformed our supply chain. Their air freight services ensure our seasonal collections reach global markets on time, and their 24/7 support gives us peace of mind.",
    results: ["100% on-time delivery", "Global market reach", "Excellent support"],
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    title: "Operations Director",
    company: "Middle East Motors",
    industry: "Automotive",
    location: "UAE",
    rating: 5,
    quote:
      "GlobalTrade's comprehensive logistics solutions have streamlined our automotive parts distribution across Africa and Asia. Their expertise in handling complex shipments is unmatched.",
    results: ["Streamlined operations", "Regional expansion", "Cost optimization"],
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Import Manager",
    company: "Pacific Pharmaceuticals",
    industry: "Healthcare",
    location: "Australia",
    rating: 5,
    quote:
      "The pharmaceutical industry requires the highest standards of care and compliance. GlobalTrade's specialized handling and documentation services ensure our products reach patients safely and on time.",
    results: ["Regulatory compliance", "Safe handling", "Timely delivery"],
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    title: "Trade Director",
    company: "Latin Resources Inc",
    industry: "Mining",
    location: "Chile",
    rating: 5,
    quote:
      "GlobalTrade's expertise in heavy cargo and bulk shipments has been invaluable for our mining operations. Their innovative solutions have reduced our logistics costs significantly.",
    results: ["Heavy cargo expertise", "Cost reduction", "Innovative solutions"],
  },
]

const stats = [
  { icon: Users, label: "Happy Clients", value: "2,500+" },
  { icon: TrendingUp, label: "Success Rate", value: "99.9%" },
  { icon: Award, label: "Years Experience", value: "25+" },
  { icon: Building2, label: "Industries Served", value: "50+" },
]

const industries = [
  "Electronics",
  "Automotive",
  "Fashion",
  "Agriculture",
  "Healthcare",
  "Mining",
  "Chemicals",
  "Food & Beverage",
  "Machinery",
  "Textiles",
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PageHeader
          title="Trusted by Businesses Worldwide"
          subtitle="Discover how companies across industries have transformed their international trade operations with our comprehensive logistics solutions and expert guidance."
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
                Client Success Stories
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Real experiences from businesses that have achieved remarkable results with our services.
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
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Results:</h4>
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
                Industries We Serve
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Our expertise spans across diverse industries, each with unique requirements and challenges.
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
                  Featured Case Study
                </Badge>
                <CardTitle className="text-2xl sm:text-3xl text-balance">
                  How TechFlow Industries Reduced Costs by 30%
                </CardTitle>
                <CardDescription className="text-base mt-4">
                  A comprehensive look at how our integrated logistics solutions transformed a major electronics
                  manufacturer's supply chain.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <div className="text-sm text-muted-foreground">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <div className="text-sm text-muted-foreground">New Markets</div>
                  </div>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact">Request Your Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Success Stories</h2>
            <p className="text-lg mb-8 opacity-90">
              Ready to transform your international trade operations? Let's discuss how we can help you achieve similar
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
