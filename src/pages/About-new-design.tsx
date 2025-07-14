
import React from 'react';
import { Target, Eye, Users, Award, CheckCircle, Calendar, Clock, Globe } from 'lucide-react';
import { TEXTS } from '../constants/texts';

const AboutNewDesign = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full translate-x-48 translate-y-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-4">
              {TEXTS.about.title}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            شركاء الدقة لخدمات الأعمال
            <span className="block text-blue-300">المحاسبية والضريبية</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {TEXTS.about.subtitle}
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105">
              تواصل معنا الآن
            </button>
            <button className="px-8 py-4 border-2 border-blue-300 hover:bg-blue-300 hover:text-blue-900 rounded-lg font-semibold transition-all">
              اطلع على خدماتنا
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{TEXTS.about.stats.clients.number}</div>
              <div className="text-gray-600 font-medium">{TEXTS.about.stats.clients.label}</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{TEXTS.about.stats.experience.number}</div>
              <div className="text-gray-600 font-medium">{TEXTS.about.stats.experience.label}</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{TEXTS.about.stats.quality.number}</div>
              <div className="text-gray-600 font-medium">{TEXTS.about.stats.quality.label}</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{TEXTS.about.stats.support.number}</div>
              <div className="text-gray-600 font-medium">{TEXTS.about.stats.support.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {TEXTS.about.sectionTitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  خبرة تراكمية في خدمة
                  <span className="text-blue-600"> أهدافكم المالية</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {TEXTS.about.description1}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {TEXTS.about.description2}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">خدمات محاسبية متخصصة ودقيقة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">استشارات ضريبية وزكوية شاملة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">دعم مستمر وخدمة عملاء متميزة</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main office image */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="فريق العمل"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">خدمات شاملة</h4>
                    <p className="text-sm text-gray-600">جميع الخدمات المحاسبية في مكان واحد</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">جودة عالية</h4>
                    <p className="text-sm text-gray-600">معايير جودة دولية معتمدة</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">فريق خبير</h4>
                    <p className="text-sm text-gray-600">محاسبون معتمدون ومؤهلون</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                    <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">سرعة الإنجاز</h4>
                    <p className="text-sm text-gray-600">تسليم في المواعيد المحددة</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              رؤيتنا ورسالتنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              نحو مستقبل مالي أكثر
              <span className="text-blue-600"> وضوحاً واستقراراً</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl ml-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{TEXTS.about.vision.title}</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {TEXTS.about.vision.description}
                </p>
                {/* Vision background image */}
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="الرؤية"
                    className="w-full h-32 object-cover rounded-2xl opacity-20"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full -z-10"></div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl ml-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{TEXTS.about.mission.title}</h3>
                </div>
                <p className="text-indigo-100 leading-relaxed text-lg">
                  {TEXTS.about.mission.description}
                </p>
                {/* Mission background image */}
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="الرسالة"
                    className="w-full h-32 object-cover rounded-2xl opacity-20"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {TEXTS.about.valuesTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              القيم التي نؤمن بها
              <span className="text-blue-600"> ونعمل وفقاً لها</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{TEXTS.about.valuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">{TEXTS.about.values.excellence.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {TEXTS.about.values.excellence.description}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">{TEXTS.about.values.collaboration.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {TEXTS.about.values.collaboration.description}
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">{TEXTS.about.values.commitment.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {TEXTS.about.values.commitment.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full translate-x-48 translate-y-48"></div>
        
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="اتصال"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            هل أنت مستعد لبدء رحلتك معنا؟
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            انضم إلى عملائنا الراضين واحصل على استشارة مجانية اليوم
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
              احصل على استشارة مجانية
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-bold text-lg transition-all">
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutNewDesign;
