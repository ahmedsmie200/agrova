import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sprout } from 'lucide-react';

import precisionFarmer from '../assets/precision-farmer.png';
import irrigation from '../assets/irrigation.png';
import pestMonitor from '../assets/pest-monitor.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-forest-700 font-serif text-4xl md:text-5xl leading-tight mb-4">
              Complete Solutions for <br className="hidden md:block" />Modern Agriculture
            </h2>
            <p className="text-gray-600 text-lg">
              Our comprehensive suite of tools helps you monitor, analyze, and optimize every aspect of your farming operations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-colors">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.55fr_0.55fr] gap-6 auto-rows-[400px]"
        >
          {/* Card 1: Precision Farming */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-2 md:col-span-2 lg:col-span-1 shadow-sm border border-gray-100 group flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-1/2 h-48 sm:h-full rounded-2xl overflow-hidden shrink-0 relative">
              <img 
                src={precisionFarmer} 
                alt="Precision Farming" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center w-full">
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-sm font-semibold w-fit mb-6">
                <Sprout size={16} />
                <span>Smart Inputs</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Farming</h3>
              <p className="text-gray-600 mb-8 line-clamp-3">
                Optimize your resource usage with data-driven insights. Apply the right amount of water, fertilizer, and pesticides exactly where and when they are needed.
              </p>
              <button className="inline-flex items-center gap-2 text-forest-600 font-bold hover:text-forest-700 transition-colors mt-auto w-fit group/btn">
                Learn more 
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Smart Irrigation */}
          <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img 
              src={irrigation} 
              alt="Smart Irrigation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform group-hover:-translate-y-2">Smart Irrigation</h3>
              <p className="text-white/80 opacity-0 h-0 transition-all duration-300 group-hover:opacity-100 group-hover:h-auto line-clamp-2">
                Automated watering schedules based on real-time soil moisture data and weather forecasts.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Pest & Disease Monitoring */}
          <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-sm">
            <img 
              src={pestMonitor} 
              alt="Pest & Disease Monitoring" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform group-hover:-translate-y-2">Pest Monitoring</h3>
              <p className="text-white/80 opacity-0 h-0 transition-all duration-300 group-hover:opacity-100 group-hover:h-auto line-clamp-2">
                Early detection of pests and diseases using drone imagery and AI analysis.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}