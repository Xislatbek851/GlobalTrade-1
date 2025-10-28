import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, Globe, MessageSquare, Clock, Shield, DollarSign, Truck, FileText, Headphones } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon orqali qo‘llab-quvvatlash",
    description: "Savdo bo‘yicha ekspertlarimiz bilan to‘g‘ridan-to‘g‘ri gaplashing",
    contact: "+998949227973",
    availability: "24/7 global qo‘llab-quvvatlash",
  },
  {
    icon: Mail,
    title: "Email orqali qo‘llab-quvvatlash",
    description: "Savollaringizga batafsil javoblar oling",
    contact: "barno_xabibullayevna@mail.ru",
    availability: "2 soat ichida javob",
  },
  {
    icon: MessageSquare,
    title: "Jonli chat",
    description: "Tez-tez so‘raladigan savollar uchun darhol yordam",
    contact: "Vebsaytda mavjud",
    availability: "Dushanba-Juma, 9:00-18:00 (EST)",
  },
  {
    icon: Globe,
    title: "Mintaqaviy ofislar",
    description: "Yirik savdo markazlarida mahalliy tajriba",
    contact: "4 global manzil",
    availability: "Mahalliy ish vaqti",
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
        <PageHeader
          title="Savdo bo‘yicha ekspertlarimiz bilan bog‘laning"
          subtitle="Global qamrovingizni kengaytirishga tayyormisiz? Tajribali jamoamiz xalqaro savdoni ishonch bilan boshqarishingizga yordam beradi. Bugunoq biz bilan bog‘laning — shaxsiy yechimlar taqdim etamiz."
          variant="centered"
        >
          <div className="mt-10">
            <iframe
              className="rounded-xl overflow-hidden h-[320px] md:h-[400px] lg:h-[500px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.5541059039238!2d69.60127993739259!3d40.84995874158649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae2d9479dc5fbb%3A0xdea3c97955e8b6de!2zUkpYMitWQzksINC_0YDQvtGB0L8uINCQ0LzQuNGA0LAg0KLQtdC80YPRgNCwIDMyLCAxMTAxMDAsINCQ0LvQvNCw0LvRi9C6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1759750104664!5m2!1sru!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </PageHeader>

        {/* Contact Methods */}
        <section className="py-8 sm:py-12 bg-muted/30">
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
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Xabar yuboring</h2>
                  <p className="text-muted-foreground">
                    Quyidagi formani to‘ldiring va jamoamiz 24 soat ichida savdo ehtiyojlaringiz uchun shaxsiylashtirilgan yechim bilan sizga javob beradi.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Nega GlobalTrade?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">25+ yillik tajriba</h3>
                        <p className="text-sm text-muted-foreground">
                          Xalqaro savdo va logistikada isbotlangan tajriba
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Global tarmoq</h3>
                        <p className="text-sm text-muted-foreground">Dunyo bo‘ylab 50+ mamlakatda ofis va hamkorlar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">24/7 qo‘llab-quvvatlash</h3>
                        <p className="text-sm text-muted-foreground">
                          Barcha savdo ehtiyojlaringiz uchun kun-u tun yordam
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Raqobatbardosh narxlar</h3>
                        <p className="text-sm text-muted-foreground">
                          Sifatdan voz kechmasdan tejamkor yechimlar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Tezkor javob kafolati</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">2hrs</div>
                        <div className="text-xs text-muted-foreground">Emailga javob</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24hrs</div>
                        <div className="text-xs text-muted-foreground">Tijorat taklifi</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Tez-tez so‘raladigan savollar
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Xizmatlarimiz, jarayonlar va biznesingizni global miqyosda o‘sishiga qanday yordam berishimiz haqida tezkor javoblarni toping.
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
                    Hali ham savollaringiz bormi?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Qidirgan javobingiz topilmadimi? Ekspert jamoamiz sizning aniq savdo ehtiyojlaringiz uchun shaxsiy javob va yechimlar berishga tayyor.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="#contact-form"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Ekspertlarimiz bilan bog‘laning
                    </a>
                    <a
                      href="tel:+998949227973"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Hoziroq qo‘ng‘iroq qiling
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="font-semibold text-foreground mb-4">Tezkor javob</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Emailga javob</span>
                        <span className="text-sm font-medium text-primary">2 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Tijorat taklifi</span>
                        <span className="text-sm font-medium text-primary">24 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Telefon qo‘llab-quvvatlash</span>
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
