
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StarTupdev = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
    {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}images/StarTupdev.webp)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 text-white max-w-2xl mr-auto py-12 md:py-24 px-4 md:px-[15%]">
            <div className="text-sm mb-2">خدمة</div>
            <h1 className="text-sm md:text-3xl font-bold mb-4 md:mb-6">تطوير المنشأت الناشئة</h1>
            <p className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              
خدمات الاستشارات المحاسبية لتطوير المنشآت الناشئة من مكتب المازن تمثل خطوة حاسمة نحو تحسين الأداء المالي وضبط العمليات، باعتبارها جزءًا لا يتجزأ من رحلة النشاط التجاري، تشكل هذه الخدمة دعمًا شاملاً للمنشآت الناشئة لتعزيز شفافية وكفاءة العمليات المحاسبية، والتي تؤدي إلى نمو مستدام وتحقق أهداف مالية بكفاءة.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg transition-colors w-full sm:w-auto">
              أطلب الخدمة الآن
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">استشـارات تطوير المنشأت الناشئة</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">

              </p>
              <p className="text-lg text-gray-700">
                <strong>
                
نمنحك استشارات متخصصة من التوجيه الاستراتيجي للشركات الناشئة. بهدف دعم نمو الأعمال الصاعدة من خلال تقديم استشارات محاسبية ذات فعالية

              
                </strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/calendar_2153359-50x50.png"
                  alt="Calendar"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تحليل وتقييم الأعمال</h3>
              <p className="text-gray-700 text-sm">

استعراض دقيق للهيكل المالي والمحاسبي للشركة الناشئة لتحديد الفرص والتحديات   </p>
            </div>

            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/accounting_11735212-50x50.png"
                  alt="Accounting"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تصميم استراتيجية محاسبية</h3>
              <p className="text-gray-700 text-sm">
وضع خطة محاسبية فعالة تتناسب مع أهداف الشركة الناشئة وتحديد الخطوات التي يجب اتخاذها
              </p>
            </div>

            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/project_2679418-1-50x50.png"
                  alt="Project"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تحديد التكاليف وتحليل التكلفة-الفائدة</h3>
              <p className="text-gray-700 text-sm">
مراجعة التكاليف المختلفة وتحليل فعالية الإنفاق لضمان الكفاءة المالية.
              </p>
            </div>

            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/calculator_2886257-50x50.png"
                  alt="Calculator"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">إعداد التقارير المالية</h3>
              <p className="text-gray-700 text-sm">
تقديم تقارير دورية تسلط الضوء على أداء الشركة وتوجيه القرارات المستقبلية.
   </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-yellow-100 p-6 rounded-lg text-center h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/planning_10787077-50x50.png"
                  alt="Planning"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تنظيم الحسابات والضرائب</h3>
              <p className="text-gray-700 text-sm">

توفير خدمات تسجيل الحسابات والالتزام بالمتطلبات الضريبية لضمان التميز في الامتثال المحاسبي والضريبي </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg text-center h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/ask_1713106-50x50.png"
                  alt="Ask"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">المراجعة الداخلية</h3>
              <p className="text-gray-700 text-sm">
للتحقق من دقة وفعالية العمليات المحاسبية بشكل مستمر؛ لتحقيق التميز في الأداء والتوجيه نحو التحسين
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg text-center h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/budget-4-50x50.png"
                  alt="Budget"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">عمليات الفحص المستمرة</h3>
              <p className="text-gray-700 text-sm">
فحص وتقييم جوانب محددة من النظام المحاسبي؛ لتحديد الفجوات وتحسين التحكم الداخلي.
  </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg text-center h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/report_10740920-50x50.png"
                  alt="Report"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">توجيه لتحسين الأداء</h3>
              <p className="text-gray-700 text-sm">
استشارات مستمرة لتحسين الأداء المالي وتطوير استراتيجيات محاسبية مبتكرة.
              </p>
            </div>
          </div>
        </section>

        {/* Bookkeeping Section */}
        <section
          className="py-12 md:py-16 bg-gray-100 bg-cover bg-center bg-no-repeat mb-12 md:mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/1-3.webp"
                  alt="Bookkeeping"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="text-right order-1 lg:order-2">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                 خبرتنا الممتدة</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                 لدى شركتنا خبرة واسعة تمكن عملائنا من الاستفادة القصوى من الاستشارات المستهدفة، والتي تعزز خططهم للنمو طويل الأجل. نحن نسعى لفهم عميق لأعمال عملائنا، ونساعدهم في التعرف على التحديات والفرص التي تعترض طريقهم. تعتمد فرقنا الاستشارية على معرفتها المحلية والعالمية لتقديم الدعم الذي يسهم في تحقيق أهداف عملائنا.  </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section
          className="py-16 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">خدمات شاملة</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    بفضل التنفيذ الدقيق تتجاوز خدماتنا تقييم نقاط الضعف والتخطيط لها، حيث نلتزم بتوفير خريطة طريق واضحة للنجاح. نعمل على تكوين وتحديد مسارات النمو لعملائنا، مما يسهم في تحقيقهم لأهدافهم الطموحة
</p>
                </div>
              </div>
              <div>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/2-3-scaled.webp"
                  alt="Financial Analysis"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tax Study Section */}
        <section
          className="py-16 bg-gray-100 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/3-2-scaled.webp"
                  alt="Tax Study"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="text-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">نجاحات مستمرة، في مجالات متعددة</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
              تاريخ حافل ومميز في التعامل مع مجموعة متنوعة من العملاء يعكس تنوع مجالات أعمالنا، حيث نعمل مع مختلف أحجام الشركات والقطاعات، بالإضافة إلى تقديم الدعم للشركات الناشئة والمنشآت العالمية؛ حتى نساعد عملائنا في تطوير وتحسين استراتيجيات أعمالهم، ونسهم في تحقيق نجاحهم.      </p>
              </div>
            </div>
          </div>
        </section>


      </main>

    </div>
  );
};

export default StarTupdev;