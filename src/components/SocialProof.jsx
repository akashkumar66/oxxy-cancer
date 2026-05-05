import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Amaya Lal 38",
      role: "New Delhi, Delhi",
      content: "I used to smoke in the company of my friends. I never thought that it will lead to cancer. But when I was diagnosed with cancer, I was shocked. I didn't know what to do. But then I found out about Oxxy and thank god oxxy was there to take care of me completly.",
      image: "women1.png"
    },
    {
      name: "Arif Mohammad 57",
      role: "Hyderabad , Telangana",
      content: "I am an insurance broker. Couldn't imagine that someone can offer a cancer health plan after cancer predected. It will be a big support for all my clients who are run insured / under insured to save money.",
      image: "men.png"
    },
    {
      name: "Zubaida Begum 52",
      role: "Noida, Uttar Pradesh",
      content: "My mom had cancer stage 4. Nobody was willing to support. Oxxy was big help saved alot of money at the time when needed. Works on medicines too. Thank god my mom is out of danger noew. Oxxy played a big role to save my mom.",
      image: "women2.png"
    }
  ];

  const mediaCoverage = [
    { img: "/1_toi1.png", title: "The Times of India", desc: "Oxxy launches affordable health plan for entire family" },
    { img: "/2_core.png", title: "Core Sector Communique", desc: "OXXY launches its plan to give nightmare to Health Insurance Companies" },
    { img: "/7_tele.png", title: "Telecompaper", desc: "OnePlus, Oxxy partner on health project in India" },
    { img: "/9_et.png", title: "Economic Times", desc: "Oxxy to launch chain of hospitals across India" },
    { img: "/14_firstpost.png", title: "Firstpost", desc: "Uber-Oxxy tie up: Free cab rides to all hospitals" },
    { img: "/25_live.png", title: "Mint", desc: "Uber, Oxxy tie up to provide cab rides to Delhi hospitals" },
    { img: "/40_oneindia.png", title: "One India", desc: "Oxxy to make FD of ₹11,000 for every girl child born" },
    { img: "/41_inkhabar.png", title: "Inkhabar", desc: "Good news for every girl child born in India - Oxxy FD" },
    { img: "/45_naiduniya.png", title: "Naidunia Jagran", desc: "FD of ₹11,000 on birth of every girl child in India" }
  ];


  return (
    <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">Real Stories from Real Families</h2>
          <p className="text-xl text-white/70">Join millions of Indians who are already saving on their healthcare costs with Oxxy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[2.5rem] relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 text-white/10 group-hover:text-primary/20 transition-colors" size={60} />
              <div className="flex mb-6 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-white text-lg leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-primary/30" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-white/10">
          <h2 className="text-center text-white text-3xl font-bold mb-16 uppercase tracking-widest">Media Coverage</h2>

          <div className="relative overflow-hidden">
            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary via-secondary/80 to-transparent z-20 pointer-events-none" />

            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: [0, -2952], // (300px width + 32px gap) * 9 items = 2988. Corrected to match exact width.
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...mediaCoverage, ...mediaCoverage].map((media, i) => (
                <div key={i} className="flex-shrink-0 w-[300px] bg-[#E0F2F1] rounded-[2rem] p-6 flex flex-col items-center text-center shadow-2xl border border-teal-100/50 group transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
                  <div className="bg-white w-full h-36 rounded-2xl border border-gray-200 flex items-center justify-center p-4 mb-6 overflow-hidden shadow-inner group-hover:border-primary/30 transition-colors">
                    <img src={media.img} alt={media.title} className="max-w-full max-h-full object-contain transition-all duration-500" />
                  </div>
                  <h4 className="text-[#00796B] font-bold text-xl mb-3">{media.title}</h4>
                  <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed h-12 overflow-hidden px-2">
                    {media.desc}
                  </p>
                  <a
                    href="#"
                    className="bg-[#009688] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-3 transition-all duration-300 hover:bg-[#00796B] hover:shadow-lg active:scale-95"
                  >
                    <span className="w-6 h-6 bg-white/20 text-white rounded-full flex items-center justify-center text-xs backdrop-blur-sm">+</span>
                    <span>Read Article</span>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialProof;
