import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary-dark px-4 py-2 rounded-full mb-6 font-bold text-sm">
              <Heart size={16} />
              <span>ABOUT OXXY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              Mission to Simplify <span className="text-primary">Cancer Care</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Overall, Oxxy aims to simplify the cancer treatment journey by providing complete support—from diagnosis to post-treatment care—while significantly reducing medical expenses, allowing patients and their families to focus on recovery and well-being.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background-soft rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                  <Shield size={24} />
                </div>
                <p className="font-bold text-secondary">Complete Financial Protection</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background-soft rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                  <Sparkles size={24} />
                </div>
                <p className="font-bold text-secondary">End-to-End Treatment Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-premium aspect-[4/3]">
              <img
                src="/docind.png"
                alt="Compassionate Care"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
