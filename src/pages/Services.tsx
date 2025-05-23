
import React from 'react';
import { Calculator, FileText, TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'تسجيل الحسابات والتقارير المالية',
      description: 'نقدم خدمات تسجيل الحسابات وإعداد التقارير المالية الدورية والسنوية وفقاً للمعايير المحاسبية المعتمدة، مع ضمان الدقة والشفافية في جميع البيانات المالية.',
    },
    {
      icon: FileText,
      title: 'إعداد وتقديم إقرارات الزكاة وضريبة القيمة المضافة',
      description: 'نساعدك في إعداد وتقديم جميع الإقرارات الضريبية المطلوبة بما في ذلك إقرارات الزكاة وضريبة القيمة المضافة، مع ضمان الامتثال للأنظمة السعودية.',
    },
    {
      icon: TrendingUp,
      title: 'محاسبة التكاليف والتحليل المالي',
      description: 'نوفر خدمات تحليل التكاليف والأداء المالي لمساعدتك في اتخاذ قرارات مالية سليمة وتحسين الربحية وكفاءة العمليات.',
    },
    {
      icon: DollarSign,
      title: 'إدارة ضريبة الدخل وضريبة الاستقطاع',
      description: 'نقدم خدمات شاملة في مجال ضريبة الدخل وضريبة الاستقطاع، بما يشمل الحساب والتقديم والمتابعة مع الجهات المختصة.',
    },
    {
      icon: PieChart,
      title: 'تقديم استشارات للمنشآت الناشئة والمتوسطة',
      description: 'نوفر استشارات متخصصة للمنشآت الناشئة والمتوسطة في مجالات المحاسبة والضرائب والتخطيط المالي لمساعدتها على النمو والتطور.',
    },
    {
      icon: BarChart3,
      title: 'إعداد الموازنات وخطط النمو المالي',
      description: 'نساعدك في إعداد الموازنات السنوية وخطط النمو المالي طويلة الأمد، مع تحليل الأداء ووضع استراتيجيات لتحقيق الأهداف المالية.',
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا المتخصصة</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة لتلبية جميع احتياجات عملائنا
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              كيف نعمل معك؟
            </h2>
            <p className="text-lg text-gray-600">
              نتبع منهجية واضحة لضمان تقديم أفضل الخدمات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">الاستشارة الأولية</h3>
              <p className="text-gray-600">
                نستمع لاحتياجاتك ونقيم وضعك المالي الحالي
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">وضع الخطة</h3>
              <p className="text-gray-600">
                نضع خطة مخصصة تناسب احتياجاتك وأهدافك
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">التنفيذ</h3>
              <p className="text-gray-600">
                نبدأ بتنفيذ الخدمات وفقاً للخطة المتفق عليها
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">المتابعة</h3>
              <p className="text-gray-600">
                نوفر متابعة مستمرة وتقارير دورية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            جاهز لبدء التعاون معنا؟
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            تواصل معنا اليوم لمناقشة احتياجاتك والحصول على عرض مخصص
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            احصل على استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
