import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="plans" className="section-padding bg-white relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-secondary mb-4">Affordable Plan for Every Family</h2>
        <p className="text-xl text-gray-600">A best and affordable plan that fits for everybody.</p>
      </div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden"
        >
          {/* Header Image/Icon Section from User Image */}
          <div className="bg-secondary p-3 flex justify-center relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-primary p-2">
              <img src="/oxxy_logo.png" alt="Oxxy" className="w-full h-auto" />
            </div>
          </div>

          <div className="p-6 md:p-10 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-1 uppercase tracking-tight">CANCER CARE</h3>
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-700">Rs. 6000/Monthly</p>
              <p className="text-gray-500 font-semibold text-sm">(54,000 Annually)</p>
            </div>

            <div className="bg-gray-100 py-2 px-6 rounded-xl mb-6 inline-block">
              <p className="text-md font-bold text-secondary uppercase tracking-wider">GUARANTEED SAVINGS upto 1 lakh*</p>
            </div>

            <div className="space-y-3 text-left max-w-lg mx-auto mb-8">
              {[
                { text: "Works on Cancer Patients at any Stage*", bold: true },
                { text: "No Age Limit*", bold: true },
                { text: "No Medical Screening Needed*", bold: true },
                { text: "Discounts on Medicines, Chemotherapy, Radiology & Surgery", bold: false },
                { text: "Discounts on All Medical Bills upto 40% with No Upper Limit of the Bill Value.", bold: false },
                { text: "Use Unlimited Number of Times", bold: false },
                { text: "Valid on Cancer & Every Other Disease", bold: false },
                { text: "Valid on All Pre-Existing Diseases", bold: false },
                { text: "Applicable on Entire Body.", bold: false },
                { text: "Works on OPD & IPD", bold: false },
                { text: "Express Appointment Booking", bold: false },
                { text: "Avail in Health Centers Across 1500 Cities of India", bold: false }
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  <span className={`${feature.bold ? 'font-bold text-gray-900' : 'text-gray-700'} text-base leading-snug`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full btn-gradient py-4 rounded-full font-bold text-lg shadow-premium uppercase tracking-widest hover:scale-[1.02] transition-transform"
            >
              BUY NOW
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center bg-background-soft p-8 rounded-3xl border border-dashed border-primary/30">
        <p className="text-lg font-semibold text-secondary mb-1">Not satisfied with the service?</p>
        <p className="text-primary font-bold text-xl uppercase tracking-wider">100% Money Back Guarantee*</p>
      </div>
    </section>
  );
};

export default Pricing;
