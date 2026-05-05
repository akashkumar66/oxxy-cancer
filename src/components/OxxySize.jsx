import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Hospital, Users } from 'lucide-react';

const OxxySize = () => {
  const stats = [
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      value: "1,500+",
      label: "Cities"
    },
    {
      icon: <Hospital className="w-12 h-12 text-primary" />,
      value: "200,000+",
      label: "Hospitals & Diagnostics"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      value: "2,00,00,000+",
      label: "Customers"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Oxxy Size</h2>
          <p className="text-xl text-gray-500">India's Largest Healthcare Network</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-premium flex flex-col items-center text-center group hover:shadow-md hover:shadow-primary hover:scale-105 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
                {React.cloneElement(stat.icon, { className: "w-10 h-10 text-primary" })}
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-secondary mb-2 tracking-tighter">
                <span className="text-primary">{stat.value}</span>
              </h3>
              <p className="text-lg font-bold text-secondary uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default OxxySize;
