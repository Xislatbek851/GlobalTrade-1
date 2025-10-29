import Link from "next/link"
import { Globe, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const navigation = {
  company: [
    { name: "Biz haqimizda", href: "/about" },
    { name: "Jamoamiz", href: "/about#team" },
    { name: "Karyera", href: "/careers" },
    { name: "Yangiliklar", href: "/news" },
  ],
  services: [
    { name: "Quruqlikda tashish", href: "/services#land" },
    { name: "Hujjatlar", href: "/services#docs" },
    { name: "Sug‘urta", href: "/services#insurance" },
    { name: "Qishloq xo‘jaligi texnikasi", href: "/services#agricultural" },
    { name: "Elektronika va telekommunikatsiya", href: "/services#electronics" },
    { name: "Sanoat uskunalari", href: "/services#industrial" },
    { name: "Konchilik va qurilish", href: "/services#mining" },
    { name: "To‘qimachilik uskunalari", href: "/services#textile" },
  ],
  support: [
    { name: "Bog‘lanish", href: "/contact" },
    { name: "Jo‘natmani kuzatish", href: "/track" },
    { name: "Savol-javob", href: "/faq" },
    { name: "Yordam markazi", href: "/support" },
  ],
  legal: [
    { name: "Maxfiylik siyosati", href: "/privacy" },
    { name: "Xizmat ko‘rsatish shartlari", href: "/terms" },
    { name: "Cookie siyosati", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <Link href="/" className="mb-4 hover:opacity-80 transition-opacity" aria-label="GLOBARA bosh sahifa">
              <Logo size="lg" />
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Xalqaro savdo yechimlarida ishonchli hamkoringiz. 2019-yildan beri bizneslarni ishonchli import-eksport xizmatlari bilan bog‘laymiz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">O‘zbekiston</address>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+998949227973" className="hover:underline">+998 94 922 79 73</a>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:barno_xabibullayevna@mail.ru" className="hover:underline">barno_xabibullayevna@mail.ru</a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in-up animation-delay-100">
            <h3 className="text-sm font-semibold text-foreground mb-4">Kompaniya</h3>
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
            <h3 className="text-sm font-semibold text-foreground mb-4">Xizmatlar</h3>
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
            <h3 className="text-sm font-semibold text-foreground mb-4">Yordam</h3>
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
            <h3 className="text-sm font-semibold text-foreground mb-4">Huquqiy</h3>
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
            © {new Date().getFullYear()} GLOBARA. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
