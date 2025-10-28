export function WhoWeAre() {
  return (
    <section className="py-16 bg-white" id="about" aria-labelledby="who-we-are-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium" role="presentation">
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
            GLOBARAga xush kelibsiz
            <div className="w-8 h-px bg-emerald-600" aria-hidden="true"></div>
          </div>
        </div>

        <h2 id="who-we-are-heading" className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Chegaraoldi savdoda ishonchli global hamkoringiz<br />
          <span className="text-emerald-600">Mayamidan dunyoga</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/professional-business-meeting-with-handshake.png" alt="GLOBARA hamkorlikka sodiqligini aks ettiruvchi ish uchrashuvi" className="w-full h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow" loading="lazy" />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong>GLOBARA</strong>da biz dunyoni yaqinlashtiramiz — har bir jo‘natma, har bir yechim va har bir
              hamkorlik bilan. 2019-yil 18-iyunda tashkil topgan va Florida, Mayamida joylashgan kompaniyamiz to‘liq
              xizmat ko‘rsatuvchi xalqaro savdo kompaniyasi bo‘lib, bizneslarni yuqori sifatli sanoat jihozlari,
              qishloq xo‘jaligi mahsulotlari va xomashyo bilan butun dunyo importchilari hamda distribyutorlariga bog‘laydi.
            </p>
            <p>
              Biz global savdoda ishonchlilik va uzoq muddatli muvaffaqiyatni ta’minlaydigan aqlli va samarali
              yechimlarga ishonamiz. Qishloq xo‘jaligi mahsulotlarini izlayotgan bo‘lsangiz, maxsus sanoat
              jihozlariga ehtiyojingiz bo‘lsa yoki mahalliy talabni qondirish uchun umumiy tovarlarni import qilsangiz,
              GLOBARA global ta’minot va bozor talabi o‘rtasida ishonchli va samarali ko‘prik bo‘lib xizmat qiladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
