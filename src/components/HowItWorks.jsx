import React from 'react';
import { motion } from 'framer-motion';
import { CornerDownLeft } from 'lucide-react';
import fieldRowsImg from '../assets/field-rows.png';
import soilSensorImg from '../assets/soil-sensor.png';
import farmerTabletImg from '../assets/farmer-tablet.png';

const steps = [
  {
    step: 'STEP 01',
    title: 'Analyze Your Farm',
    description: 'We survey your land using advanced satellite imagery and soil data.',
    img: fieldRowsImg
  },
  {
    step: 'STEP 02',
    title: 'Plan Smarter',
    description: 'Get actionable insights and precise planting schedules tailored to your field.',
    img: soilSensorImg
  },
  {
    step: 'STEP 03',
    title: 'Monitor & Optimize',
    description: 'Track crop health in real-time and make data-driven decisions to boost yield.',
    img: farmerTabletImg
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 md:px-16 py-16 md:py-24 bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 rounded-full bg-brand-500/10 text-brand-600 text-sm font-semibold mb-6"
        >
          How It Works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-sans text-forest-700 leading-tight"
        >
          Simple steps. Smart technology. <br />
          <span className="font-serif italic">Real results for farmers.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group flex flex-col bg-gray-50 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8 flex-grow">
              <span className="text-brand-600 font-bold text-sm tracking-wider mb-4 block">
                {item.step}
              </span>
              <h3 className="text-2xl font-serif text-forest-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-8">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-forest-700 font-semibold hover:text-brand-600 transition-colors group/btn">
                Learn More
                <CornerDownLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
              </button>
            </div>
            <div className="mt-auto px-6 overflow-hidden rounded-t-2xl mx-2 mb-0">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}