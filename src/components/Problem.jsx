import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Wallet, Stethoscope, Clock, TrendingDown } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: <Stethoscope className="w-12 h-12 text-red-500" />,
      title: "Expensive Radiology",
      description: "Cancer treatments like Chemotherapy and Radiation can cost lakhs per session, often exceeding insurance limits."
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "Wait & Exclusion",
      description: "Most policies have a 2-4 year waiting period for cancer, leaving patients vulnerable when they need help now."
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-red-500" />,
      title: "Savings Wipeout",
      description: "A full cancer treatment cycle can wipe out a family's lifetime savings, leading to immense financial stress."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-secondary mb-6">Why Modern Healthcare is Failing You</h2>
        <p className="text-xl text-gray-600">The traditional healthcare system is designed to benefit hospitals, not patients. Here's the reality most families face:</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-red-50 border border-red-100 transition-all duration-300"
          >
            <div className="bg-white w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center shadow-sm mb-6">
              {point.icon}
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">{point.title}</h3>
            <p className="text-gray-600 leading-relaxed">{point.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-secondary rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 italic">"My wife's Chemotherapy was costing ₹80,000 per cycle. Without Oxxy, we would have had to sell our ancestral home."</h3>
            <p className="text-white/70 text-lg">— Arvind Mehta, Retired Teacher</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <p className="text-white text-xl font-medium mb-4">Don't let this be your story.</p>
            <p className="text-white/80 mb-6">Oxxy provides guaranteed savings without the hidden clauses of traditional insurance.</p>
            <button className="bg-white text-secondary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
              Save My Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
