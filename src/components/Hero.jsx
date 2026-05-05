import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Activity, ShieldPlus, Users, X, Mail, ShieldCheck, TrendingUp, Layers, Banknote, Stethoscope, Handshake } from 'lucide-react';

const Hero = () => {
  const [activePopup, setActivePopup] = useState(null);

  const popups = {
    complete: "Get comprehensive support for all cancer treatments, including medical, emotional, and financial guidance throughout your journey.",
    stage: "Whether early detection or advanced stages, our  are designed to provide maximum benefits regardless of your current condition.",
    covered: "From common to rare types, our coverage extends across all known cancer variations for complete peace of mind.",
    moneyback: "We offer a money-back guarantee to ensure your complete satisfaction and peace of mind.",
    treatments: "Full coverage for chemotherapy, radiation therapy, complex surgeries, and post-operative care."
  };

  const [displayText, setDisplayText] = useState('');
  const fullText = "Cancer Detection";

  React.useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const fullText = "Cancer Detection";
      setDisplayText(isDeleting
        ? fullText.substring(0, i - 1)
        : fullText.substring(0, i + 1)
      );

      if (!isDeleting) {
        i++;
      } else {
        i--;
      }

      let typeSpeed = isDeleting ? 75 : 150;

      if (!isDeleting && i === fullText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        typeSpeed = 500; // Pause before restarting
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const handlePopup = (key) => {
    if (activePopup === key) setActivePopup(null);
    else setActivePopup(key);
  };

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary-dark px-4 py-2 rounded-full mb-6 font-semibold">
            <Activity size={18} />
            <span>India's Largest Healthcare Network</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary mb-6">
            Real Support <span className="text-primary text-4xl md:text-4xl block md:inline mb-2 md:mb-0">When It Matters Most — Even After <br /></span>
            <span className="inline-block whitespace-nowrap">
              {displayText}
              <span className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse" style={{ verticalAlign: 'middle' }}></span>
            </span>
          </h1>

          {/* <p className=" text-xl text-gray-600 mb-14 leading-relaxed">

          </p> */}

          <div className="relative mb-4 w-full">
            <button
              onClick={() => handlePopup('complete')}
              className="w-full px-6 py-3 rounded-2xl text-lg flex items-center justify-between bg-primary/10 hover:bg-primary/20 text-secondary transition-all group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Handshake size={24} />
                </div>
                <span className="font-semibold">Complete Cancer Support</span>
              </div>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <AnimatePresence>
              {activePopup === 'complete' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full left-0 right-0 mb-4 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-primary/10 z-30"
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setActivePopup(null); }}
                    className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex flex-col items-center text-center mt-2">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                      <Handshake size={24} />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">{popups.complete}</p>
                    <button
                      onClick={() => {
                        setActivePopup(null);
                        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-4 px-8 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                    >
                      Plan
                    </button>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[10px] border-transparent border-t-white drop-shadow-sm"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
            <div className="relative">
              <button
                onClick={() => handlePopup('stage')}
                className="w-full h-full px-5 py-3 rounded-2xl text-sm flex items-center justify-between group bg-primary/10 hover:bg-primary/20 text-secondary transition-all"
              >
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <TrendingUp size={18} />
                  </div>
                  <span className="font-medium leading-tight">Effective At Any Stage</span>
                </div>
                <ArrowRight size={18} className="shrink-0 ml-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              <AnimatePresence>
                {activePopup === 'stage' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-0 right-0 mb-4 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-primary/10 z-30"
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePopup(null); }}
                      className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <X size={18} />
                    </button>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <TrendingUp size={20} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{popups.stage}</p>
                      <button
                        onClick={() => {
                          setActivePopup(null);
                          document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-8 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                      >
                        Plan
                      </button>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white drop-shadow-sm"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onClick={() => handlePopup('covered')}
                className="w-full h-full px-5 py-3 rounded-2xl text-sm flex items-center justify-between group bg-primary/10 hover:bg-primary/20 text-secondary transition-all"
              >
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Layers size={18} />
                  </div>
                  <span className="font-medium leading-tight">All cancer covered</span>
                </div>
                <ArrowRight size={18} className="shrink-0 ml-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              <AnimatePresence>
                {activePopup === 'covered' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-0 right-0 mb-4 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-primary/10 z-30"
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePopup(null); }}
                      className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <X size={18} />
                    </button>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <Layers size={20} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{popups.covered}</p>
                      <button
                        onClick={() => {
                          setActivePopup(null);
                          document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-8 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                      >
                        Plan
                      </button>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white drop-shadow-sm"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onClick={() => handlePopup('moneyback')}
                className="w-full h-full px-5 py-3 rounded-2xl text-sm flex items-center justify-between group bg-primary/10 hover:bg-primary/20 text-secondary transition-all"
              >
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Banknote size={18} />
                  </div>
                  <span className="font-medium leading-tight">Money Back Guarantee</span>
                </div>
                <ArrowRight size={18} className="shrink-0 ml-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              <AnimatePresence>
                {activePopup === 'moneyback' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-0 right-0 mb-4 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-primary/10 z-30"
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePopup(null); }}
                      className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <X size={18} />
                    </button>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <Banknote size={20} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{popups.moneyback}</p>
                      <button
                        onClick={() => {
                          setActivePopup(null);
                          document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-8 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                      >
                        Plan
                      </button>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white drop-shadow-sm"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                onClick={() => handlePopup('treatments')}
                className="w-full h-full px-5 py-3 rounded-2xl text-sm flex items-center justify-between group bg-primary/10 hover:bg-primary/20 text-secondary transition-all"
              >
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <Stethoscope size={18} />
                  </div>
                  <span className="font-medium leading-tight">Works on Chemo, Radiation and Surgeries</span>
                </div>
                <ArrowRight size={18} className="shrink-0 ml-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              <AnimatePresence>
                {activePopup === 'treatments' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-0 right-0 mb-4 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-primary/10 z-30"
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); setActivePopup(null); }}
                      className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <X size={18} />
                    </button>
                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <Stethoscope size={20} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{popups.treatments}</p>
                      <button
                        onClick={() => {
                          setActivePopup(null);
                          document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-8 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                      >
                        Plan
                      </button>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white drop-shadow-sm"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* <div className=" grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">1000+ Hospitals</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">20,000+ Labs</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle2 className="text-accent" size={20} />
              <span className="font-medium">Nationwide Network</span>
            </div>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-[400px] relative mt-16 mb-16 rounded-3xl shadow-2xl">
            <img
              src="/heeero.jpeg"
              alt="Happy Indian Family"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Float Cards */}
            <div className="absolute -top-8 -left-6 bg-white p-4 rounded-2xl shadow-premium animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <ShieldPlus className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Instant Saving</p>
                  <p className="text-lg font-bold text-secondary">Save Upto ₹100000*</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-premium animate-float [animation-delay:2s]">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Trusted By</p>
                  <p className="text-lg font-bold text-secondary">2Cr+ Families</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
