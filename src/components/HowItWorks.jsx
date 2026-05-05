import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Hospital, Banknote, ArrowRight, ArrowDown, UserPlus, Stethoscope, IndianRupee } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-primary" />,
      title: "Get Oxxy Membership",
      desc: "Get Your support plan. No medical tests required for enrollment."
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-primary" />,
      title: "Consult Radiologists",
      desc: "Visit Radiology centers and specialized cancer hospitals."
    },
    {
      icon: <IndianRupee className="w-10 h-10 text-primary" />,
      title: "Save on Treatments",
      desc: " Get up to 40% instant discount on Chemo, Radiology, Scan, Surgery & Medicine."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background-soft to-white" />

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl font-bold text-secondary mb-6">Start Saving in 3 Simple Steps</h2>
        <p className="text-xl text-gray-600">Healthcare should be simple. With Oxxy, saving money on your medical bills is easier than ordering food.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto relative z-10 space-y-12 md:space-y-0">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group flex-1"
            >
              <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mb-8 shadow-premium group-hover:bg-gray-50 transition-colors duration-500 relative">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white border-4 border-white">
                  {index + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>

            {/* Arrow logic */}
            {index < steps.length - 1 && (
              <>
                {/* Desktop Arrow */}
                <div className="hidden md:flex items-center text-primary/30 mx-4">
                  <ArrowRight size={48} className="animate-pulse" />
                </div>
                {/* Mobile Arrow */}
                <div className="md:hidden flex items-center text-primary/30">
                  <ArrowDown size={32} className="animate-pulse" />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
