import Link from "next/link"
import { Globe, Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/news" },
  ],
  services: [
    { name: "Ocean Freight", href: "/services#ocean" },
    { name: "Air Freight", href: "/services#air" },
    { name: "Land Transport", href: "/services#land" },
    { name: "Documentation", href: "/services#docs" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Track Shipment", href: "/track" },
    { name: "FAQ", href: "/faq" },
    { name: "Support Center", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Link href="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold text-foreground">GlobalTrade</span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for international trade solutions, connecting businesses worldwide with reliable
              import-export services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>123 Trade Center, Global City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>+998949227973</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>barno_xabibullayevna@mail.ru</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in-up animation-delay-100">
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border animate-fade-in-up animation-delay-500">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © 2024 GlobalTrade Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
