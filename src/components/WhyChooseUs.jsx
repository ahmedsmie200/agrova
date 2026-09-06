import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import aerialImg from '../assets/why-aerial.png';
import farmerPickImg from '../assets/why-farmer-pick.png';
import robotImg from '../assets/why-robot.png';
import womanHarvestImg from '../assets/why-woman-harvest.png';

const tabs = ['Farmer Approach', 'Smart Technology'];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const images = {
    'Farmer Approach': [farmerPickImg, robotImg, womanHarvestImg],
    'Smart Technology': [robotImg, farmerPickImg, womanHarvestImg]
  };

  return (
    <section id="sustainability" className="px-5 md:px-16 py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[480px] md:h-[540px] rounded-[2rem] overflow-hidden group"
        >
          <img 
            src={aerialImg} 
            alt="Aerial view of farm" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-700/90 via-forest-600/40 to-transparent" />
          
          <button className="absolute top-6 right-6 w-14 h-14 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-400 transition-colors z-10">
            <ArrowUpRight className="text-forest-700 w-6 h-6" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white">
            <h3 className="text-3xl font-serif mb-4">Sustainable Practices</h3>
            <p className="text-white/80 mb-6 max-w-md">
              We employ eco-friendly farming techniques that conserve resources while maximizing crop yield.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Agri-Tech', 'Smart Fields', 'Eco-Farming'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-500/10 text-brand-600 text-sm font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-700 mb-6">
              Farming Made Easy.
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              We bring cutting-edge technology and time-tested farming methods together to provide the best solutions for modern agriculture.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-brand-500 text-forest-700 flex items-center justify-center hover:bg-brand-400 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                    activeTab === tab
                      ? 'bg-forest-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden h-48 md:h-56">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 h-full"
                >
                  {images[activeTab].map((img, idx) => (
                    <div key={idx} className="relative flex-1 rounded-2xl overflow-hidden h-full group">
                      <img 
                        src={img} 
                        alt="" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      {idx === 2 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-700 whitespace-nowrap">
                          More Yield
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}