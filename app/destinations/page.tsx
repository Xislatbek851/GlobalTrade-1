import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Plane, Ship, Truck, Clock } from "lucide-react"
import Link from "next/link"

const regions = [
  {
    id: "asia",
    name: "Asia Pacific",
    description: "Major manufacturing and export hub with extensive port networks",
    countries: [
      {
        name: "China",
        ports: ["Shanghai", "Shenzhen", "Ningbo"],
        specialties: ["Electronics", "Textiles", "Machinery"],
        transitTime: "15-25 days",
      },
      {
        name: "Japan",
        ports: ["Tokyo", "Yokohama", "Osaka"],
        specialties: ["Automotive", "Technology", "Precision Instruments"],
        transitTime: "12-18 days",
      },
      {
        name: "South Korea",
        ports: ["Busan", "Incheon", "Ulsan"],
        specialties: ["Electronics", "Steel", "Chemicals"],
        transitTime: "14-20 days",
      },
      {
        name: "Singapore",
        ports: ["Singapore Port"],
        specialties: ["Transshipment Hub", "Petrochemicals", "Electronics"],
        transitTime: "18-28 days",
      },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    description: "Advanced economies with sophisticated logistics infrastructure",
    countries: [
      {
        name: "Germany",
        ports: ["Hamburg", "Bremen", "Wilhelmshaven"],
        specialties: ["Automotive", "Machinery", "Chemicals"],
        transitTime: "20-30 days",
      },
      {
        name: "Netherlands",
        ports: ["Rotterdam", "Amsterdam"],
        specialties: ["Gateway to Europe", "Petrochemicals", "Agriculture"],
        transitTime: "22-32 days",
      },
      {
        name: "United Kingdom",
        ports: ["Felixstowe", "Southampton", "London Gateway"],
        specialties: ["Financial Services", "Pharmaceuticals", "Food & Beverage"],
        transitTime: "25-35 days",
      },
      {
        name: "Italy",
        ports: ["Genoa", "La Spezia", "Naples"],
        specialties: ["Fashion", "Food Products", "Machinery"],
        transitTime: "24-34 days",
      },
    ],
  },
  {
    id: "americas",
    name: "Americas",
    description: "Diverse markets from North to South America with growing trade volumes",
    countries: [
      {
        name: "United States",
        ports: ["Los Angeles", "Long Beach", "New York", "Savannah"],
        specialties: ["Technology", "Agriculture", "Consumer Goods"],
        transitTime: "12-22 days",
      },
      {
        name: "Canada",
        ports: ["Vancouver", "Montreal", "Halifax"],
        specialties: ["Natural Resources", "Agriculture", "Energy"],
        transitTime: "14-24 days",
      },
      {
        name: "Brazil",
        ports: ["Santos", "Rio de Janeiro", "Paranaguá"],
        specialties: ["Agriculture", "Mining", "Manufacturing"],
        transitTime: "25-35 days",
      },
      {
        name: "Mexico",
        ports: ["Manzanillo", "Veracruz", "Altamira"],
        specialties: ["Automotive", "Electronics", "Agriculture"],
        transitTime: "18-28 days",
      },
    ],
  },
  {
    id: "africa",
    name: "Africa & Middle East",
    description: "Emerging markets with significant growth potential and strategic locations",
    countries: [
      {
        name: "UAE",
        ports: ["Jebel Ali", "Abu Dhabi"],
        specialties: ["Re-export Hub", "Oil & Gas", "Luxury Goods"],
        transitTime: "16-26 days",
      },
      {
        name: "South Africa",
        ports: ["Durban", "Cape Town", "Port Elizabeth"],
        specialties: ["Mining", "Agriculture", "Manufacturing"],
        transitTime: "22-32 days",
      },
      {
        name: "Egypt",
        ports: ["Alexandria", "Port Said", "Damietta"],
        specialties: ["Textiles", "Agriculture", "Chemicals"],
        transitTime: "20-30 days",
      },
      {
        name: "Saudi Arabia",
        ports: ["Jeddah", "Dammam", "King Abdullah"],
        specialties: ["Petrochemicals", "Construction", "Food Products"],
        transitTime: "18-28 days",
      },
    ],
  },
]

const services = [
  { icon: Ship, name: "Ocean Freight", available: true },
  { icon: Plane, name: "Air Freight", available: true },
  { icon: Truck, name: "Land Transport", available: true },
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Global Network, Local Expertise
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                Our extensive network spans across 50+ countries, connecting major ports, airports, and trade hubs
                worldwide. Discover our destinations and the specialized services we offer in each region.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Map Placeholder */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="relative bg-card rounded-lg p-8 text-center border">
                <MapPin className="mx-auto h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive World Map</h3>
                <p className="text-muted-foreground mb-4">Explore our global network of partners and destinations</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-muted-foreground">Ports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-muted-foreground">Airports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-muted-foreground">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Destinations */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Our Destinations
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Explore our coverage across major trade regions and discover the opportunities in each market.
              </p>
            </div>

            <Tabs defaultValue="asia" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                {regions.map((region) => (
                  <TabsTrigger key={region.id} value={region.id} className="text-sm">
                    {region.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {regions.map((region) => (
                <TabsContent key={region.id} value={region.id}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{region.name}</h3>
                    <p className="text-muted-foreground">{region.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {region.countries.map((country, index) => (
                      <Card key={country.name}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">{country.name}</CardTitle>
                            <div className="flex gap-1">
                              {services.map((service) => (
                                <div key={service.name} className="p-1 rounded bg-primary/10" title={service.name}>
                                  <service.icon className="h-4 w-4 text-primary" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-2">Major Ports</h4>
                            <div className="flex flex-wrap gap-1">
                              {country.ports.map((port) => (
                                <Badge key={port} variant="secondary" className="text-xs">
                                  {port}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-2">Key Industries</h4>
                            <div className="flex flex-wrap gap-1">
                              {country.specialties.map((specialty) => (
                                <Badge key={specialty} variant="outline" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Transit Time: {country.transitTime}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Service Coverage
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Comprehensive logistics solutions available across all our destination markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={service.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default" className="mb-4">
                      Available Worldwide
                    </Badge>
                    <CardDescription className="text-base">
                      Professional {service.name.toLowerCase()} services available across all our destination markets
                      with local expertise and global standards.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore New Markets?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let us help you expand your business to new destinations with our expert guidance and reliable services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Route Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
