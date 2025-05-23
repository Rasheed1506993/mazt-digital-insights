
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, TrendingUp, Shield, Users, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: Calculator,
      title: 'محاسبة وتقارير مالية',
      description: 'تسجيل الحسابات وإعداد التقارير المالية بأعلى معايير الدقة والشفافية',
    },
    {
      icon: FileText,
      title: 'إقرارات الزكاة والضريبة',
      description: 'إعداد وتقديم إقرارات الزكاة وضريبة القيمة المضافة وفقاً للأنظمة السعودية',
    },
    {
      icon: TrendingUp,
      title: 'تحليل مالي واستشارات',
      description: 'تقديم استشارات مالية متخصصة وتحليل الأداء المالي للمنشآت',
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              مكتب المازن لاستشارات
              <br />
              <span className="text-yellow-400">الزكاة والضريبة</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              شريكك الموثوق في الحلول المحاسبية والضريبية المتخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                احجز استشارة مجانية
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                تعرف على خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              لماذا تختار مكتب المازن؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات محاسبية وضريبية متميزة مع فريق من الخبراء المعتمدين
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">الموثوقية</h3>
              <p className="text-gray-600">سجل حافل من النجاح والالتزام بأعلى معايير المهنة</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">فريق متخصص</h3>
              <p className="text-gray-600">خبراء معتمدون في المحاسبة والزكاة والضرائب</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">جودة عالية</h3>
              <p className="text-gray-600">التزام بالدقة والمواعيد وتقديم أفضل الحلول</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              خدماتنا المتخصصة
            </h2>
            <p className="text-lg text-gray-600">
              نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج إلى استشارة متخصصة؟
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا
          </p>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            اتصل بنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
