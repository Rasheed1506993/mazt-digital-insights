import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Target: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    Eye: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    Users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    Award: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/></svg>
    ),
    CheckCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    Calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    Clock: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    Globe: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    ),
  };
  return icons[iconName] || null;
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004A99] to-[#003A7A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#004A99]/50 to-transparent"></div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#EDC870]/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004A99]/10 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#EDC870]/20 rounded-full text-[#EDC870] text-sm font-medium mb-4">
              {TEXTS.about.hero.tag}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {TEXTS.about.hero.titlePart1}
            <span className="block text-[#EDC870]">{TEXTS.about.hero.titlePart2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {TEXTS.about.hero.subtitle}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md">
                {TEXTS.about.hero.button1}
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-4 border-2 border-[#EDC870] text-white hover:bg-[#EDC870] hover:text-[#004A99] rounded-lg font-semibold transition-all shadow-md">
                {TEXTS.about.hero.button2}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F9FAFB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(TEXTS.about.statsSection).map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#EDC870]/10 to-[#004A99]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <LucideIcon iconName={stat.icon} className="h-10 w-10 text-[#004A99]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-2">{stat.number}</div>
                <div className="text-[#6B7280] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#EDC870]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-[#EDC870]/20 text-[#004A99] rounded-full text-sm font-medium mb-4">
                  {TEXTS.about.contentSection.tag}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
                  {TEXTS.about.contentSection.titlePart1}
                  <span className="text-[#004A99]"> {TEXTS.about.contentSection.titlePart2}</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.about.contentSection.description1}
                </p>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.about.contentSection.description2}
                </p>
              </div>

              <div className="space-y-4">
                {TEXTS.about.contentSection.checkmarks.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <LucideIcon iconName="CheckCircle" className="h-6 w-6 text-[#004A99] flex-shrink-0" />
                    <span className="text-[#6B7280] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Main office image */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[#E0E0E0]">
                <div className="mb-6">
                   <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="فريق العمل"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {TEXTS.about.contentSection.featureCards.map((card, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-[#EDC870]/10 to-[#004A99]/10 rounded-2xl shadow-sm">
                      <LucideIcon iconName={card.icon} className="h-12 w-12 text-[#004A99] mx-auto mb-4" />
                      <h4 className="font-bold text-[#1C1C1C] mb-2">{card.title}</h4>
                      <p className="text-sm text-[#6B7280]">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#EDC870]/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#004A99]/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#EDC870]/20 text-[#004A99] rounded-full text-sm font-medium mb-4">
              {TEXTS.about.visionMissionSection.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              {TEXTS.about.visionMissionSection.titlePart1}
              <span className="text-[#004A99]"> {TEXTS.about.visionMissionSection.titlePart2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="bg-gradient-to-br from-[#004A99] to-[#003A7A] p-8 rounded-3xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-4 rounded-2xl ml-4">
                    <LucideIcon iconName={TEXTS.about.visionMissionSection.vision.icon} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{TEXTS.about.visionMissionSection.vision.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  {TEXTS.about.visionMissionSection.vision.description}
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
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#EDC870]/30 rounded-full -z-10"></div>
            </div>

            <div className="relative group">
              <div className="bg-gradient-to-br from-[#EDC870] to-[#D4B564] p-8 rounded-3xl text-[#004A99] shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-[#004A99]/20 p-4 rounded-2xl ml-4">
                    <LucideIcon iconName={TEXTS.about.visionMissionSection.mission.icon} className="h-8 w-8 text-[#004A99]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{TEXTS.about.visionMissionSection.mission.title}</h3>
                </div>
                <p className="text-[#004A99]/90 leading-relaxed text-lg">
                  {TEXTS.about.visionMissionSection.mission.description}
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
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#004A99]/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#EDC870]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#EDC870]/20 text-[#004A99] rounded-full text-sm font-medium mb-4">
              {TEXTS.about.valuesSection.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              {TEXTS.about.valuesSection.titlePart1}
              <span className="text-[#004A99]"> {TEXTS.about.valuesSection.titlePart2}</span>
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">{TEXTS.about.valuesSection.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEXTS.about.valuesSection.values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full border border-[#E0E0E0]">
                  <div className="bg-gradient-to-br from-[#EDC870]/20 to-[#004A99]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <LucideIcon iconName={value.icon} className="h-10 w-10 text-[#004A99]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-4 text-center">{value.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004A99] to-[#003A7A] relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

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
            {TEXTS.about.ctaSection.title}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {TEXTS.about.ctaSection.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-[#004A99] hover:bg-gray-100 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-md">
                {TEXTS.about.ctaSection.button1}
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#004A99] rounded-lg font-bold text-lg transition-all shadow-md">
                {TEXTS.about.ctaSection.button2}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;