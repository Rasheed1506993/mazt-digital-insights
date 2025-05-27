const services = [
  {
    title: "ضريبة الدخل",
    description:
      "نقدم خدمات شاملة في إعداد وتقديم إقرارات ضريبة الدخل للشركات والأفراد، مع ضمان الامتثال الكامل للقوانين الضريبية السعودية.",
    features: ["إعداد الإقرارات الضريبية", "التخطيط الضريبي", "مراجعة الوضع الضريبي", "تمثيل أمام الهيئة"],
    icon: "💰",
  },
  {
    title: "محاسبة التكاليف",
    description: "خدمات متخصصة في تحليل وإدارة التكاليف لمساعدة الشركات على تحسين الربحية وتحسين الكفاءة التشغيلية.",
    features: ["تحليل التكاليف", "إعداد تقارير التكلفة", "تحسين العمليات", "مراقبة الأداء المالي"],
    icon: "📊",
  },
  {
    title: "ضريبة القيمة المضافة",
    description: "إدارة شاملة لضريبة القيمة المضافة تشمل التسجيل والإقرارات والامتثال لجميع المتطلبات القانونية.",
    features: ["تسجيل ضريبة القيمة المضافة", "إعداد الإقرارات الشهرية", "مراجعة الفواتير", "استشارات الامتثال"],
    icon: "🧾",
  },
  {
    title: "تسجيل الحسابات",
    description: "خدمات تسجيل وتنظيم الحسابات المالية بدقة واحترافية لضمان سلامة البيانات المالية.",
    features: ["تسجيل العمليات اليومية", "إعداد القوائم المالية", "مراجعة الحسابات", "تنظيم الدفاتر المحاسبية"],
    icon: "📝",
  },
  {
    title: "تطوير الأعمال الناشئة",
    description: "دعم شامل للشركات الناشئة والمتوسطة في النمو والتطوير من خلال الاستشارات المالية والمحاسبية.",
    features: ["التخطيط المالي", "دراسات الجدوى", "إعداد نماذج الأعمال", "استشارات النمو"],
    icon: "🚀",
  },
  {
    title: "إعداد الميزانيات",
    description: "تخطيط وإعداد الميزانيات المالية التفصيلية لمساعدة الشركات على التخطيط المالي الفعال.",
    features: ["إعداد الميزانيات السنوية", "التنبؤ المالي", "تحليل الانحرافات", "تقارير الأداء"],
    icon: "📈",
  },
  {
    title: "الزكاة",
    description: "خدمات متخصصة في حساب وإعداد إقرارات الزكاة وفقاً للأحكام الشرعية والقوانين السعودية.",
    features: ["حساب الزكاة", "إعداد إقرارات الزكاة", "استشارات شرعية", "متابعة مع الهيئة"],
    icon: "🕌",
  },
  {
    title: "ضريبة الاستقطاع",
    description: "إدارة وتطبيق ضريبة الاستقطاع على المدفوعات للمقيمين وغير المقيمين وفقاً للقوانين السعودية.",
    features: ["حساب ضريبة الاستقطاع", "إعداد الإقرارات", "إدارة الشهادات", "الامتثال القانوني"],
    icon: "📋",
  },
]

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">خدماتنا التفصيلية</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-6">
                <div className="text-4xl ml-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">ما نقدمه:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="text-blue-600 ml-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors">
                اطلب الخدمة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
