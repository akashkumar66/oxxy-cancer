import React from 'react';
import { motion } from 'framer-motion';

const AvailsAt = () => {
  // Create an array of image numbers 1 to 40
  const hospitalImages = Array.from({ length: 40 }, (_, i) => `${i + 1}.png`);

  // Duplicate the array to create a seamless loop
  const duplicatedImages = [...hospitalImages, ...hospitalImages];

  return (
    <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Avails At <span className="text-primary">Premium Hospitals</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-8 py-4"
          animate={{
            x: [0, -6400], // 40 images * 160px (w-32 + gap-8)
          }}
          transition={{
            duration: 100, // Even slower to match other sections
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center p-4 hover:shadow-md transition-all duration-300"
            >
              <img
                src={`/${img}`}
                alt="Hospital Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AvailsAt;
