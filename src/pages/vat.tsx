import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { TEXTS } from '../constants/texts';

// Placeholder for Header and Footer to make this component self-contained
const Header = () => <header className="bg-[#004A99] text-white p-4 text-center">Header Placeholder</header>;
const Footer = () => <footer className="bg-[#004A99] text-white p-4 text-center">Footer Placeholder</footer>;

// TEXTS constant (imported from texts.ts in a real app)


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    FilePlus: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    Lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M11 17v5"/><path d="M12 14v3"/></svg>
    ),
    CheckCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
  };
  return icons[iconName] || null;
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function VATPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl"> {/* Light gray background */}
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[600px] flex items-center justify-end bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/vat.webp)`, // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#004A99]/70"></div> {/* Primary Blue with increased transparency */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mr-auto lg:mr-16">
            <motion.div
              className="bg-[#004A99]/90 p-8 lg:p-12 rounded-lg backdrop-blur-sm" // Primary Blue with opacity for content box
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {TEXTS.vat.hero.title}
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {TEXTS.vat.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105" // Secondary Yellow button
                >
                  {TEXTS.vat.hero.button}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-20 bg-[#F9FAFB]"> {/* Light gray background */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">{TEXTS.vat.overviewSection.title}</h2> {/* Dark Gray text */}
              <p className="text-lg text-[#6B7280] leading-relaxed"> {/* Text Gray */}
                {TEXTS.vat.overviewSection.intro}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">{TEXTS.vat.overviewSection.coreServices.title}</h3> {/* Dark Gray text */}
                <ul className="space-y-3">
                  {TEXTS.vat.overviewSection.coreServices.items.map((item, index) => (
                    <li key={index} className="flex items-center text-[#6B7280]"> {/* Text Gray */}
                      <span className="text-[#EDC870] ml-2">✓</span> {/* Secondary Yellow checkmark */}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-4">{TEXTS.vat.overviewSection.benefits.title}</h3> {/* Dark Gray text */}
                <ul className="space-y-3">
                  {TEXTS.vat.overviewSection.benefits.items.map((item, index) => (
                    <li key={index} className="flex items-center text-[#6B7280]"> {/* Text Gray */}
                      <span className="text-[#EDC870] ml-2">✓</span> {/* Secondary Yellow checkmark */}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center text-[#1C1C1C] mb-16" // Dark Gray text
            >
              {TEXTS.vat.detailsSection.title}
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Registration Services */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/registration.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-[#004A99]/80"></div> {/* Primary Blue with opacity */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{TEXTS.vat.detailsSection.registration.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {TEXTS.vat.detailsSection.registration.description}
                  </p>
                  <ul className="space-y-2 text-white/90">
                    {TEXTS.vat.detailsSection.registration.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <LucideIcon iconName="FilePlus" className="w-5 h-5 ml-2 text-[#EDC870]" /> {/* Secondary Yellow icon */}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Tax Returns */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/tax-returns.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-[#004A99]/80"></div> {/* Primary Blue with opacity */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{TEXTS.vat.detailsSection.taxReturns.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {TEXTS.vat.detailsSection.taxReturns.description}
                  </p>
                  <ul className="space-y-2 text-white/90">
                    {TEXTS.vat.detailsSection.taxReturns.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <LucideIcon iconName="FileText" className="w-5 h-5 ml-2 text-[#EDC870]" /> {/* Secondary Yellow icon */}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Advisory Services */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/advisory.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-[#004A99]/80"></div> {/* Primary Blue with opacity */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{TEXTS.vat.detailsSection.advisory.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {TEXTS.vat.detailsSection.advisory.description}
                  </p>
                  <ul className="space-y-2 text-white/90">
                    {TEXTS.vat.detailsSection.advisory.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <LucideIcon iconName="Lightbulb" className="w-5 h-5 ml-2 text-[#EDC870]" /> {/* Secondary Yellow icon */}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Compliance & Audit */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/compliance.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-[#004A99]/80"></div> {/* Primary Blue with opacity */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{TEXTS.vat.detailsSection.complianceAudit.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {TEXTS.vat.detailsSection.complianceAudit.description}
                  </p>
                  <ul className="space-y-2 text-white/90">
                    {TEXTS.vat.detailsSection.complianceAudit.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <LucideIcon iconName="CheckCircle" className="w-5 h-5 ml-2 text-[#EDC870]" /> {/* Secondary Yellow icon */}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F9FAFB]"> {/* Light gray background */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">{TEXTS.vat.processSection.title}</h2> {/* Dark Gray text */}
              <p className="text-lg text-[#6B7280]"> {/* Text Gray */}
                {TEXTS.vat.processSection.intro}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEXTS.vat.processSection.steps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#EDC870] rounded-full flex items-center justify-center mx-auto mb-4"> {/* Secondary Yellow circle */}
                    <span className="text-[#004A99] font-bold text-lg">{item.step}</span> {/* Primary Blue text */}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{item.title}</h3> {/* Dark Gray text */}
                  <p className="text-[#6B7280]">{item.description}</p> {/* Text Gray */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004A99]"> {/* Primary Blue background */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {TEXTS.vat.ctaSection.title}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {TEXTS.vat.ctaSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105" // Secondary Yellow button
                >
                  {TEXTS.vat.ctaSection.button1}
                </Link>
                <a
                  href="tel:+966539628489"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#004A99] font-semibold px-8 py-4 rounded-lg transition-all duration-300" // White border, Primary Blue on hover
                >
                  {TEXTS.vat.ctaSection.button2}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
