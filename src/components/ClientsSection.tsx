
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  {
    name: "عميل 1",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C5-150x150.webp",
  },
  {
    name: "عميل 2",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C4-150x150.webp",
  },
  {
    name: "عميل 3",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C3-150x150.webp",
  },
  {
    name: "عميل 4",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C2-150x150.webp",
  },
  {
    name: "عميل 5",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C1-150x150.webp",
  },
  {
    name: "عميل 6",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C7-150x150.webp",
  },
  {
    name: "عميل 7",
    logo: "https://aztc.sa/wp-content/uploads/2024/01/C6-150x150.webp",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const titleVariants = {
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

const clientVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const ClientsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Title */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#423f42]">عملاء مميزين</h2>
          </motion.div>

          {/* Clients Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={clientVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center aspect-square"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default ClientsSection;
