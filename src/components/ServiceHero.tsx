import { Link } from 'react-router-dom';

export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-r from-primary to-brand-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">خدماتنا المتخصصة</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة لتلبية جميع احتياجات عملائنا من الشركات والأفراد
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
         <Link to="/contact">
          <button className="bg-white text-primary hover:bg-muted px-8 py-3 rounded-lg transition-colors">
            تواصل معنا
          </button>
          </Link>
          <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg transition-colors">
            احجز استشارة
          </button>
        </div>
      </div>
    </section>
  )
}


