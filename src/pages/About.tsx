
import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              مكتب المازن لاستشارات الزكاة والضريبة - رائد في تقديم الحلول المحاسبية والضريبية المتخصصة
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">نبذة عن المكتب</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                مكتب المازن لاستشارات الزكاة والضريبة هو مكتب متخصص في تقديم الخدمات المحاسبية والضريبية 
                للمنشآت الصغيرة والمتوسطة في المملكة العربية السعودية. نحن نقدم حلولاً شاملة ومتخصصة 
                تساعد عملاءنا على تحقيق أهدافهم المالية والامتثال للأنظمة واللوائح المعمول بها.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                يتمتع فريقنا بخبرة واسعة في مجالات المحاسبة والزكاة والضرائب، ونحرص على تقديم خدمات 
                عالية الجودة تتميز بالدقة والالتزام بالمواعيد والشفافية في التعامل مع جميع عملائنا.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">خبرتنا في أرقام</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">التزام بالجودة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">دعم العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg ml-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المكتب الرائد والموثوق في تقديم الخدمات المحاسبية والضريبية في المملكة العربية السعودية، 
                ونساهم في نمو وتطور المنشآت من خلال تقديم حلول مبتكرة ومتخصصة تلبي احتياجاتهم وتساعدهم 
                على تحقيق النجاح والامتثال للأنظمة المعمول بها.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-lg ml-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                نقدم خدمات محاسبية وضريبية متميزة بأعلى معايير الجودة والمهنية، مع التركيز على بناء 
                علاقات طويلة الأمد مع عملائنا. نحرص على تطوير مهاراتنا ومعرفتنا باستمرار لمواكبة 
                التطورات في الأنظمة والقوانين، ونلتزم بتقديم استشارات موثوقة تساعد عملاءنا على اتخاذ 
                قرارات مالية سليمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">قيمنا</h2>
            <p className="text-lg text-gray-600">المبادئ التي نؤمن بها ونعمل وفقاً لها</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">التميز والجودة</h3>
              <p className="text-gray-600">
                نسعى لتحقيق التميز في جميع خدماتنا وتقديم أعلى مستويات الجودة لعملائنا
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">التعاون والشراكة</h3>
              <p className="text-gray-600">
                نؤمن بأهمية بناء شراكات طويلة الأمد مع عملائنا لضمان نجاحهم ونموهم
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">الالتزام والمصداقية</h3>
              <p className="text-gray-600">
                نلتزم بأعلى معايير المهنية والشفافية والصدق في جميع تعاملاتنا
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
