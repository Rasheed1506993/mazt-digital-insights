
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Mail, Clock } from "lucide-react"
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    icon: MapPin,
    title: "الرياض، حي المصيف، شارع دبية بنت البراء",
    link: "https://www.google.com/maps/dir//%D8%A7%D9%84%D8%B9%D9%85%D9%88%D8%AF%D9%8A+%D9%84%D8%A5%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9+%7C+%D8%A7%D9%84%D8%B2%D9%83%D8%A7%D8%A9+%7C+%D8%A7%D9%84%D8%B6%D8%B1%D9%8A%D8%A8%D8%A9+QM6P%2B33J+Dabiyah+Bint+Al+Bara,+Almasiaf+Riyadh+12465%E2%80%AD%E2%80%AD/@24.7602013,46.6851465,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e2efd4962fa0543:0x32500a740d56a102!2m2!1d46.6851465!2d24.7602013?entry=ttu",
  },
  {
    icon: MapPin,
    title: "جدة، شارع حي الشرقية",
    link: "https://maps.app.goo.gl/3p264i3JbDDQ2Ytu5",
  },
  {
    icon: Mail,
    title: "info@maztc.sa",
    link: "mailto:info@maztc.sa",
  },
  {
    icon: Clock,
    title: "٩ صباحاً – ٥ مساءً",
    link: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <>
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={ctaVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#423f42] mb-4 max-w-4xl mx-auto">
              احصل على استشارتك الأولى اليوم وانطلق في مسارك الصحيح
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              نلتزم بتقديم أفضل الخدمات لك، ونضمن أن تكون تجربتك معنا مميزة. ابتعد عن التقليد واستفد من خبرتنا في مجال
              التحول الرقمي.
            </p>
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#423f42] hover:bg-[#edc870] text-white px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg"
            >
              تواصل الآن
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Content */}
            <motion.div variants={leftVariants}>
              <div className="mb-8">
                <p className="text-[#423f42] font-semibold mb-2">تواصل معنا</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#423f42] mb-6">
                  تواصل مع <span className="underline decoration-[#edc870]">شركاء الدقة</span> للإستشارات
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={leftVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 space-x-reverse group"
                  >
                    <div className="w-10 h-10 bg-[#edc870] rounded-full flex items-center justify-center group-hover:bg-[#423f42] transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#423f42] transition-colors duration-300"
                        >
                          {info.title}
                        </a>
                      ) : (
                        <span className="text-gray-700">{info.title}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Map */}
            <motion.div variants={rightVariants} className="h-96 lg:h-full min-h-[400px]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.92571458222!2d39.142813499999995!3d21.5497598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c56957baaf7f%3A0xa29a20a408bf2653!2z2KfZhNi52YXZiNiv2Yog2YTYpdiz2KrYtNin2LHYp9iqINin2YTZhdit2KfYs9io2KkgfCDYp9mE2LLZg9in2KkgfCDYp9mE2LbYsdmK2KjYqQ!5e0!3m2!1sen!2seg!4v1726662227759!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
       
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default ContactSection;