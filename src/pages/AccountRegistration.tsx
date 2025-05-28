
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AccountRegistration = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
    {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/AccountRegistration.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative z-10 text-white max-w-2xl mr-auto py-12 md:py-24 px-4 md:px-[15%]">
            <div className="text-sm mb-2">خدمة</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">تسجيل الحسابات</h1>
            <p className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              جزءًا أساسيًا من خدمات المازن المحاسبية، حيث يقوم فريقنا المتخصص بتنفيذ عملية تسجيل دقيقة ومفصلة لكل
              المعاملات المالية التي تحدث في أي مشروع أو منشأة تجارية، عبر جمع وتوثيق جميع النقاط المحاسبية الرئيسية
              للمشروع، مثل المبيعات، المشتريات، الإيرادات، والمصروفات بدقة. وفقًا للتواريخ والمبالغ المحددة، والتأكد من
              أن جميع المعاملات مسجلة ومحدثة بشكل دوري.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">استشـارات تسجيل الحسابات</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                <strong>الدعم المثالي الذي تحتاجه لنجاح الأعمال</strong>
              </p>
              <p className="text-lg text-gray-700">
                <strong>
                  تهدف هذه الخدمات إلى تحديد الوضع المالي للمنشآت وتوفير رؤية دقيقة تُسهم في اتخاذ القرارات الاستراتيجية،
                  و تشمل:
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تسجيل العمليات المالية اليومية</h3>
              <p className="text-gray-700 text-sm">
                يتم تنفيذ عمليات مسك الدفاتر بدقة، حيث يتم تسجيل جميع العمليات المالية اليومية بمراعاة المعايير
                المحاسبية المعترف بها.
              </p>
            </div>

            <div className="bg-yellow-100 p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/accounting_11735212-50x50.png"
                  alt="Accounting"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تأسيس دليل الحسابات</h3>
              <p className="text-gray-700 text-sm">
                نقوم إنشاء دليل حسابات متكامل يعكس هيكل الحسابات المالية بشكل دقيق ومنظم.
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">إعـــــداد خطة عمل مخصصة للعميل</h3>
              <p className="text-gray-700 text-sm">
                وضع خطة عمل مخصصة تشمل الخدمات المحاسبية المحددة التي سيتم تقديمها، مما يسهم في توجيه الجهود نحو تحقيق
                الأهداف.
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تحديــد الاحتياج المحاسبي لكل عميل</h3>
              <p className="text-gray-700 text-sm">
                يبدأ العمل بتحليل احتياجات العميل وفهم المتطلبات المحاسبية، ليتم تحديد الخدمات المناسبة والتي تضمن تلبية
                توقعاته وتحقيق أهدافه.
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">شرح التقارير المالية</h3>
              <p className="text-gray-700 text-sm">
                يتم توضيح التقارير المالية بشكل واضح للعميل، مما يساعده على فهم الوضع المالي لمنشأته وكيفية التعامل معه.
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg text-center h-60">
              <div className="mb-4">
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/ask_1713106-50x50.png"
                  alt="Ask"
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تقديم الاستشارات المحاسبية</h3>
              <p className="text-gray-700 text-sm">
                نقوم بتقديم استشارات محاسبية فعّالة لمساعدة العميل في اتخاذ قرارات مستنيرة وتحسين أدائه المالي على مدى
                الطويل.
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">تحليل المؤشرات المالية</h3>
              <p className="text-gray-700 text-sm">
                نقوم بإجراء تحليل دقيق للمؤشرات المالية لفهم أداء العميل والتنبؤ بالتطورات المستقبلية.
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">إعداد التقارير المالية و الضريبية</h3>
              <p className="text-gray-700 text-sm">
                نقوم بإعداد تقارير مالية دقيقة وشاملة، بالإضافة إلى التقارير الضريبية اللازمة للامتثال للتشريعات
                المحلية.
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
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">مسك الدفاتر المحاسبيــة</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  مسك الدفاتر المحاسبية هو عملية تسجيل يومي وتفصيلي لكل المعاملات المالية في أي مشروع أو منشأة، سواء
                  كانت مبيعات، مشتريات، إيرادات، أو مصروفات، وفقًا للمبادئ المحاسبية. يتمثل هذا الجهد في رصد دقيق لكل
                  حركة مالية لضمان شمولية ودقة المعلومات.
                </p>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">أهمية مسك الدفاتر المحاسبية</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>بفضل التنفيذ الدقيق لعمليات مسك الدفاتر المحاسبية، تصبح المؤسسات قادرة على إرساء أسس مالية قوية</p>

                  <div>
                    <h4 className="font-semibold">• تسجيل العمليات اليومية عند حدوثها مباشرة:</h4>
                    <p>لتوثيق وتسجيل كل عملية مالية فور حدوثها، مما يضمن دقة السجلات</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">• معرفة المنشأة أصولها والتزاماتها:</h4>
                    <p>مما يوفر للمنشأة رؤية فورية حول أصولها والالتزامات المالية المترتبة عليها.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">• تقديم تحليل واضح للحسابات:</h4>
                    <p>مما يساعد في فهم نتائج المشروع وتحديد ما إذا كانت هناك ربح أو خسارة.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">• تقصي الأسباب المؤدية إلى الخسارة وتجنبها:</h4>
                    <p>من خلال تحليل البيانات المحاسبية، وسرعة اتخاذ إجراءات لتجنبها</p>
                  </div>
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">دراسة الوضع الزكوي والضريبي للمنشأة</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  تشمل خدماتنا المحاسبية التي تساعد في دراسة الوضع الزكوي والضريبي للمنشأة تحليل البيانات المالية،
                  وتحديد الالتزامات الضريبية والزكوية المترتبة عليها، حيث نقوم بإعداد القوائم المالية والتي تتضمن
                  البيانات المالية الأساسية، مثل المركز المالي والنتائج المالية، مما يساعد على تحديد الالتزامات الضريبية
                  والزكوية المترتبة على هذه البيانات؛ لنقدم في النهاية الإقرارات الضريبية والزكوية للمنشأة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objections Section */}
        <section
          className="py-16 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  إعداد وتقديم الاعتراضات
                  <br />
                  (على عمليات الربط الزكوي والضريبي)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  إعداد الاعتراضات يشمل فحص التفاصيل والتحقق من صحة البيانات المقدمة، وإعداد الوثائق اللازمة لدعم
                  الاعتراض. بالإضافة إلى ذلك، نقوم بتقديم الاعتراضات بشكل فعّال وفي الوقت المناسب إلى الجهات المختصة، مما
                  يساعد عملائنا على حل الخلافات بشكل فوري وضمان امتثالهم للتشريعات الزكوية والضريبية المحلية. تلك
                  الخدمات تعكس التزامنا بتقديم حلول شاملة و مخصصة؛ لضمان تلبية احتياجات عملائنا وحمايتهم من المخاطر
                  القانونية والضريبية.
                </p>
              </div>
              <div>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/4-2-scaled.webp"
                  alt="Objections"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Systems Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">أنظمة محاسبية متقدمة ومتكاملة</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  يهدف توفير الأنظمة المحاسبية لدينا إلى تحقيق فعالية أكبر في إدارة المال وتحسين قدرة الشركة على اتخاذ
                  قرارات استراتيجية مستنيرة؛ لذا نسعى جاهدين لتحقيق التكامل بين التقنية والأعمال المحاسبية لتحقيق أقصى
                  قدر من الكفاءة والدقة. نبدأ بتحليل احتياجات كل عميل بعناية لضمان توفير الحلول المناسبة، سواء كانت نظام
                  محاسبة محلي أو على السحابة. تقوم خدماتنا بتوفير نظم تتناسب مع حجم وطبيعة العمل لدى المنشأة، بحيث نضمن
                  لعملائنا التحكم الكامل في بياناتهم المالية، وتسهيل عمليات المراقبة.
                </p>
              </div>
              <div>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/1-3.webp"
                  alt="Advanced Systems"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AccountRegistration;