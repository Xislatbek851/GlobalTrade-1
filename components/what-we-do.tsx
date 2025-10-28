import { Globe, FileText, Users, Ship, Package, Settings } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: Globe,
      title: "Xalqaro ta’minot va xarid",
      description:
        "Talablaringizga mos, sifatli va maqbul narxdagi yetkazib beruvchilarni topamiz. Qishloq xo‘jaligidan sanoat mahsulotlarigacha — barqaror sifat va raqobatbardosh narxlarni kafolatlaymiz.",
    },
    {
      icon: FileText,
      title: "Import va eksport xizmatlari",
      description:
        "Xalqaro savdo hujjatlari, yuk bron qilish, bojxona rasmiylashtiruvi va yetkazib berish logistikasining barcha jihatlarini boshqaramiz. Xomashyo importi yoki tayyor mahsulot eksporti — murakkab jarayonlarni biz yuritamiz.",
    },
    {
      icon: Users,
      title: "Savdo mosligi va hujjatlashtirish",
      description:
        "Xalqaro savdo qoidalarida harakatlanish murakkab bo‘lishi mumkin. Bizning jamoa jo‘natmalaringiz barcha mamlakat talablari va hujjatlariga to‘liq mosligini ta’minlaydi.",
    },
    {
      icon: Ship,
      title: "Ommaviy xomashyo savdosi",
      description:
        "Shakar, bug‘doy va oziq-ovqat kabi asosiy xomashyolarning katta hajmda savdosiga ixtisoslashganmiz. Shaffoflik va sifat kafolati bilan moslashuvchan yetkazib berish shartlari (FOB, CIF va boshqalar).",
    },
    {
      icon: Package,
      title: "Xususiy brend va OEM yechimlari",
      description:
        "Dizayndan qadoqlashgacha va eksportgacha bo‘lgan shaxsiylashtirilgan xizmatlar bilan g‘oyangizni ro‘yobga chiqaramiz. Sizning talablaringizga mos maxsus mahsulotlar yaratishda yordam beramiz.",
    },
    {
      icon: Settings,
      title: "Ta’minot zanjirini optimallashtirish",
      description:
        "Xalqaro savdo operatsiyalaringiz bo‘ylab xarajatlarni kamaytirish va samaradorlikni oshirish uchun ta’minot zanjiri jarayonlarini soddalashtiramiz.",
    },
  ]

  return (
    <section className="py-16 bg-white" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium" role="presentation">
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
            GLOBARA
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
          </div>
        </div>

        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Biz nima qilamiz</h2>

        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg">
          <strong>GLOBARA</strong> asosiy faoliyati — keng turdagi mahsulot va sohalar bo‘yicha global ta’minot, import va eksportning boshidan oxirigacha bo‘lgan yechimlarini taqdim etish. Biz ishlab chiqaruvchilar, distribyutorlar va davlat xaridorlariga quyidagilarni taklif etamiz:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
