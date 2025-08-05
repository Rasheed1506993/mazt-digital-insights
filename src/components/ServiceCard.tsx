import React from 'react';
import { motion } from 'framer-motion';

// This component uses a generic icon passed as a prop, so we don't need a specific LucideIcon implementation here.
// The user's original code had `import { LucideIcon } from 'lucide-react';` which isn't a functional import for the Canvas.
// I'll assume an SVG or a pre-defined icon component is passed and adjust the styles.

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-[#F9FAFB] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" 
      dir="rtl"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-lg mb-4 mx-auto">
        {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-[#FFB300]" })}
      </div>
      <h3 className="text-xl font-semibold text-[#1C1C1C] text-center mb-3">{title}</h3>
      <p className="text-[#6B7280] text-center leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
