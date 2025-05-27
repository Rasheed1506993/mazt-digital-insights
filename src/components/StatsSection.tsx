import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    number: 2500,
    label: "استشارة تم تقديمها",
    suffix: "+",
  },
  {
    number: 150,
    label: "عميل تم خدمته",
    suffix: "+",
  },
  {
    number: 2020,
    label: "سنة التأسيس",
    suffix: "",
  },
  {
    number: 60,
    label: "تقرير تم العمل به",
    suffix: "+",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-r from-[#423f42] to-[#2c2a2c] text-white relative overflow-hidden"
    >
      {/* Noise texture background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjYwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSI0MCIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={textVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              أرقامنا تتحدث عن نفسها
            </h2>
            <p className="text-lg leading-relaxed">
              نحن ملتزمون بتقديم استشارات الضريبة والزكاة بشكل متخصص، بهدف تعزيز
              دقة العرض والإفصاح للقوائم المالية، وذلك من خلال تطبيق المعايير
              الدولية المحاسبية المتبعة في المملكة العربية السعودية.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#edc870] hover:bg-[#d8b360] text-[#423f42] px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md"
            >
              تواصل معنا
            </motion.button>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover="hover"
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#edc870] mb-2">
                  <CountUpAnimation end={stat.number} duration={2500} />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}