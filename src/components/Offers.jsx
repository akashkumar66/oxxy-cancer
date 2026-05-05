import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  Umbrella,
  Target,
  Home,
  Headphones,
  BadgePercent,
  Cloud,
  Truck,
  Car // ✅ changed here
} from 'lucide-react';

const offers = [
  { id: 1, title: 'Works on all Cancer Treatments', icon: ShieldCheck, color: 'text-green-500', links: "/allcancer.png" },
  { id: 2, title: 'No Age Limit to Purchase', icon: TrendingUp, color: 'text-blue-500', links: "/noagelimit.png" },
  { id: 3, title: 'No Limit on Medical Expenditure', icon: Umbrella, color: 'text-yellow-500', links: "/nlonmedical.png" },
  { id: 4, title: 'Effective at any Stage', icon: Target, color: 'text-teal-500', links: "/effectiveage.png" },
  { id: 5, title: 'Free Medical delivery Service', icon: Car, color: 'text-red-500', links: "/freepickup.png" }, // ✅ updated icon
  { id: 6, title: 'Health Care at Home', icon: Home, color: 'text-orange-500', links: "/careathome.png" },
  { id: 7, title: 'Free Health Counsellor', icon: Headphones, color: 'text-indigo-500', links: "/freecounsellor.png" },
  { id: 8, title: 'Discounted Tests, Treatments & Surgeries', icon: BadgePercent, color: 'text-rose-500', links: "/discounted.png" },
  { id: 9, title: 'Free Cloud Storage of Medical Records', icon: Cloud, color: 'text-sky-500', links: "/freestorage.png" },
  { id: 10, title: 'Free Tests Pick-up', icon: Truck, color: 'text-gray-700', links: "/freepickup.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Offers = () => {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#2A2A2A] mb-4"
          >
            Oxxy Offers Complete Protection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500"
          >
            The Only Health Plan to Work After Detection of Cancer
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.id}
                variants={itemVariants}
                className="bg-white hover:bg-primary/20 hover:scale-105 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:bg-white transition-colors duration-300">
                  <Icon className={`w-8 h-8 ${offer.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-[#1A4B46] leading-tight">
                  {offer.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;