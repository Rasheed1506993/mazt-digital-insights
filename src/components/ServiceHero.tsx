export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">خدماتنا المتخصصة</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة لتلبية جميع احتياجات عملائنا من الشركات والأفراد
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
            تواصل معنا
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition-colors">
            احجز استشارة
          </button>
        </div>
      </div>
    </section>
  )
}
