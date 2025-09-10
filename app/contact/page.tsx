import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, MessageSquare } from "lucide-react"

const offices = [
  {
    city: "New York",
    country: "United States",
    address: "123 Trade Center, Manhattan, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@globaltrade.com",
    timezone: "EST (UTC-5)",
    services: ["Ocean Freight", "Air Freight", "Customs"],
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "456 Marina Bay, Singapore 018956",
    phone: "+65 6123 4567",
    email: "sg@globaltrade.com",
    timezone: "SGT (UTC+8)",
    services: ["Ocean Freight", "Air Freight", "Warehousing"],
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "789 Canary Wharf, London E14 5AB",
    phone: "+44 20 7123 4567",
    email: "london@globaltrade.com",
    timezone: "GMT (UTC+0)",
    services: ["Ocean Freight", "Land Transport", "Documentation"],
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "321 DIFC, Dubai, UAE",
    phone: "+971 4 123 4567",
    email: "dubai@globaltrade.com",
    timezone: "GST (UTC+4)",
    services: ["Ocean Freight", "Air Freight", "Re-export"],
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our trade experts",
    contact: "+998949227973",
    availability: "24/7 Global Support",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses to your inquiries",
    contact: "barno_xabibullayevna@mail.ru",
    availability: "Response within 2 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant assistance for quick questions",
    contact: "Available on website",
    availability: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: Globe,
    title: "Regional Offices",
    description: "Local expertise in major trade hubs",
    contact: "4 Global Locations",
    availability: "Local business hours",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Get in Touch with Our Trade Experts
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Ready to expand your global reach? Our experienced team is here to help you navigate international trade
                with confidence. Contact us today for personalized solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription className="text-sm">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-medium text-foreground mb-1">{method.contact}</div>
                    <div className="text-xs text-muted-foreground">{method.availability}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours with a customized solution
                    for your trade needs.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose GlobalTrade?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">25+ Years Experience</h3>
                        <p className="text-sm text-muted-foreground">
                          Proven track record in international trade and logistics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Global Network</h3>
                        <p className="text-sm text-muted-foreground">Offices and partners in 50+ countries worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">24/7 Support</h3>
                        <p className="text-sm text-muted-foreground">
                          Round-the-clock assistance for all your trade needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Competitive Rates</h3>
                        <p className="text-sm text-muted-foreground">
                          Cost-effective solutions without compromising quality
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Response Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">2hrs</div>
                        <div className="text-xs text-muted-foreground">Email Response</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24hrs</div>
                        <div className="text-xs text-muted-foreground">Quote Delivery</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Global Offices
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                With offices in major trade hubs worldwide, we provide local expertise with global reach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <Card key={office.city}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          {office.city}
                        </CardTitle>
                        <CardDescription>{office.country}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{office.email}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Specialized Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {office.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Quick answers to common questions about our services and processes.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How quickly can you provide a quote?</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide detailed quotes within 24 hours for standard shipments and within 48 hours for complex
                      or specialized cargo requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Do you handle customs clearance?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we provide comprehensive customs clearance services and handle all necessary documentation
                      for smooth border crossings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What industries do you specialize in?</h3>
                    <p className="text-sm text-muted-foreground">
                      We serve 50+ industries including electronics, automotive, fashion, agriculture, healthcare, and
                      more with specialized handling requirements.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Can you track my shipment in real-time?</h3>
                    <p className="text-sm text-muted-foreground">
                      We provide real-time tracking for all shipments with regular updates and milestone notifications
                      throughout the journey.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Do you offer cargo insurance?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer comprehensive cargo insurance options to protect your goods during transit with
                      competitive rates and quick claims processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What are your payment terms?</h3>
                    <p className="text-sm text-muted-foreground">
                      We offer flexible payment terms including credit accounts for established clients, with various
                      payment methods accepted globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
