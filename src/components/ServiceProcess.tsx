const processSteps = [
  {
    step: "01",
    title: "التواصل الأولي",
    description: "نتواصل معك لفهم احتياجاتك ومتطلباتك بشكل دقيق",
  },
  {
    step: "02",
    title: "تحليل الوضع",
    description: "نقوم بتحليل وضعك المالي والمحاسبي الحالي",
  },
  {
    step: "03",
    title: "وضع الخطة",
    description: "نضع خطة عمل مفصلة ومخصصة لاحتياجاتك",
  },
  {
    step: "04",
    title: "التنفيذ",
    description: "نبدأ في تنفيذ الخدمات وفقاً للخطة المتفق عليها",
  },
  {
    step: "05",
    title: "المتابعة",
    description: "نقدم المتابعة المستمرة والدعم اللازم",
  },
]

export default function ServiceProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">كيف نعمل</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل الخدمات لعملائنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors">
            ابدأ معنا الآن
          </button>
        </div>
      </div>
    </section>
  )
}
