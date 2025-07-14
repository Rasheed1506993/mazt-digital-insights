
import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'أهمية الامتثال لضريبة القيمة المضافة في السعودية',
      excerpt: 'تعرف على أهمية الامتثال لضريبة القيمة المضافة والخطوات الأساسية لتجنب المخالفات والغرامات.',
      date: '2024-01-15',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'ضريبة القيمة المضافة',
    },
    {
      id: 2,
      title: 'دليل شامل لحساب الزكاة على الأسهم والاستثمارات',
      excerpt: 'دليل تفصيلي لحساب الزكاة على مختلف أنواع الاستثمارات والأسهم وفقاً للأحكام الشرعية.',
      date: '2024-01-10',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'الزكاة',
    },
    {
      id: 3,
      title: 'أفضل الممارسات في إدارة الحسابات للمنشآت الصغيرة',
      excerpt: 'نصائح عملية لإدارة الحسابات بكفاءة وتنظيم البيانات المالية للمنشآت الصغيرة والمتوسطة.',
      date: '2024-01-05',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'المحاسبة',
    },
    {
      id: 4,
      title: 'التحديثات الجديدة في نظام الفاتورة الإلكترونية',
      excerpt: 'آخر التطورات والتحديثات في نظام الفاتورة الإلكترونية وكيفية التأكد من الامتثال الكامل.',
      date: '2023-12-20',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'الفوترة الإلكترونية',
    },
    {
      id: 5,
      title: 'كيفية إعداد الميزانية السنوية لشركتك',
      excerpt: 'خطوات عملية لإعداد ميزانية فعالة تساعد في التخطيط المالي وتحقيق الأهداف المالية.',
      date: '2023-12-15',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'التخطيط المالي',
    },
    {
      id: 6,
      title: 'أهمية التحليل المالي في اتخاذ القرارات الاستثمارية',
      excerpt: 'تعرف على كيفية استخدام أدوات التحليل المالي لاتخاذ قرارات استثمارية ذكية ومدروسة.',
      date: '2023-12-10',
      author: 'شركاء الدقة لخدمات الأعمال',
      category: 'التحليل المالي',
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">المدونة</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              مقالات ونصائح متخصصة في المحاسبة والزكاة والضرائب لمساعدتك في إدارة أعمالك بكفاءة
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 ml-2" />
                    <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 ml-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    <span>اقرأ المزيد</span>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            احصل على آخر المقالات والنصائح المحاسبية مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
