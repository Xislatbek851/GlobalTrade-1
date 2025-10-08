import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, Globe, MessageSquare, Clock, Shield, DollarSign, Truck, FileText, Headphones } from "lucide-react"

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

const faqData = [
  {
    id: "quote-timing",
    question: "How quickly can you provide a quote?",
    answer: "We provide detailed quotes within 24 hours for standard shipments and within 48 hours for complex or specialized cargo requirements. For urgent requests, we offer express quote services with 4-hour turnaround times.",
    icon: Clock,
    category: "Services"
  },
  {
    id: "customs-clearance",
    question: "Do you handle customs clearance?",
    answer: "Yes, we provide comprehensive customs clearance services and handle all necessary documentation for smooth border crossings. Our team of licensed customs brokers ensures compliance with all international trade regulations.",
    icon: FileText,
    category: "Services"
  },
  {
    id: "industries",
    question: "What industries do you specialize in?",
    answer: "We serve 50+ industries including electronics, automotive, agriculture, pharmaceuticals, and more with specialized handling requirements. Each industry receives tailored solutions and expertise.",
    icon: Truck,
    category: "Services"
  },
  {
    id: "tracking",
    question: "Can you track my shipment in real-time?",
    answer: "We provide real-time tracking for all shipments with regular updates and milestone notifications throughout the journey. Our advanced tracking system integrates with GPS and IoT sensors for complete visibility.",
    icon: Globe,
    category: "Technology"
  },
  {
    id: "insurance",
    question: "Do you offer cargo insurance?",
    answer: "Yes, we offer comprehensive cargo insurance options to protect your goods during transit with competitive rates and quick claims processing. Coverage includes theft, damage, and loss protection.",
    icon: Shield,
    category: "Protection"
  },
  {
    id: "payment-terms",
    question: "What are your payment terms?",
    answer: "We offer flexible payment terms including credit accounts for established clients, with various payment methods accepted globally. Standard terms are 30 days, with discounts available for early payment.",
    icon: DollarSign,
    category: "Billing"
  },
  {
    id: "support-hours",
    question: "What are your customer support hours?",
    answer: "Our customer support team is available 24/7 for urgent matters. Regular business support is available Monday-Friday 9AM-6PM EST, with extended hours for international clients across different time zones.",
    icon: Headphones,
    category: "Support"
  },
  {
    id: "emergency-services",
    question: "Do you offer emergency shipping services?",
    answer: "Yes, we provide emergency and expedited shipping services for time-sensitive cargo. Our emergency response team can arrange same-day pickups and expedited customs clearance when needed.",
    icon: Clock,
    category: "Services"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
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
            <iframe className="rounded-xl overflow-hidden h-[320px] md:h-[400px] lg:h-[500px] mt-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.5541059039238!2d69.60127993739259!3d40.84995874158649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2d9479dc5fbb%3A0xdea3c97955e8b6de!2zUkpYMitWQzksINC_0YDQvtGB0L8uINCQ0LzQuNGA0LAg0KLQtdC80YPRgNCwIDMyLCAxMTAxMDAsINCQ0LvQvNCw0LvRi9C6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1759750104664!5m2!1sru!2s"
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
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
              <div id="contact-form">
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

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Find quick answers to common questions about our services, processes, and how we can help your business grow globally.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FAQ Accordion - Takes 2/3 of the space */}
              <div className="lg:col-span-2">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg h-fit">
                  <CardContent className="p-8">
                    <Accordion type="single" collapsible className="w-full">
                      {faqData.map((faq, index) => {
                        const IconComponent = faq.icon
                        return (
                          <AccordionItem key={faq.id} value={faq.id} className="border-border/30">
                            <AccordionTrigger className="text-left hover:no-underline group">
                              <div className="flex items-center gap-4 w-full">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                                    {faq.question}
                                  </h3>
                                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                                    {faq.category}
                                  </span>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-5 h-5 text-primary/70" />
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        )
                      })}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Help Section - Takes 1/3 of the space */}
              <div className="lg:col-span-1">
                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 h-fit sticky top-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Still have questions?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Can't find what you're looking for? Our expert team is ready to provide personalized answers and solutions for your specific trade needs.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="#contact-form"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact Our Experts
                    </a>
                    <a
                      href="tel:+998949227973"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="font-semibold text-foreground mb-4">Quick Response</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Email Response</span>
                        <span className="text-sm font-medium text-primary">2 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Quote Delivery</span>
                        <span className="text-sm font-medium text-primary">24 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Phone Support</span>
                        <span className="text-sm font-medium text-primary">24/7</span>
                      </div>
                    </div>
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
