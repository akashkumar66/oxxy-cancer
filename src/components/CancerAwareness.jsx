import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Users, Heart } from 'lucide-react';

const CancerAwareness = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Awareness Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6 font-bold text-sm">
              <AlertTriangle size={16} />
              <span>CANCER AWARENESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              The Rising Challenge of <span className="text-red-500">Cancer in India</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              India is facing a significant surge in cancer cases. Lack of awareness and high treatment costs often lead to delayed diagnosis and financial ruin for middle-class families.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">1 in 9 Indians</h4>
                  <p className="text-gray-500">Likely to develop cancer in their lifetime.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">14.6 Lakh Cases</h4>
                  <p className="text-gray-500">Estimated new cancer cases in India annually.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <IndianRupee size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">₹5-15 Lakhs</h4>
                  <p className="text-gray-500">Average cost of complete cancer treatment cycle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">50-60% Savings</h4>
                  <p className="text-gray-500">Can be achieved through timely intervention and Oxxy.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Related Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-premium group">
              <img
                src="/rate2.png"
                alt="Oncology Care"
                className="w-full h-[450px] object-cover   md:object-fit transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0  top-32  to-transparent flex items-start p-4">
                <div className="text-white">
                  <p className="text-primary font-bold mb-4 uppercase tracking-widest">Advanced Radiology</p>
                  <h4 className="text-2xl text-black font-bold">Bridging the Gap in Cancer<br /> Care Accessibility</h4>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const IndianRupee = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 3h12" />
    <path d="M6 8h12" />
    <path d="m6 13 8.5 8" />
    <path d="M6 13h3" />
    <path d="M9 13c6.667 0 6.667-10 0-10" />
  </svg>
);

export default CancerAwareness;
