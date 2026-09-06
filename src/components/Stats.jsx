import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import handsPlants from '../assets/hands-plants.png';
import womanHarvest from '../assets/woman-harvest.png';
import fieldRows from '../assets/field-rows.png';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src={avatar1} alt="Farmer 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src={avatar2} alt="Farmer 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                  +
                </div>
              </div>
              <p className="text-gray-600 font-medium">
                <span className="font-bold text-gray-900">50K+</span> Farmers worldwide
              </p>
            </div>
            
            <div className="flex gap-4 h-48 md:h-64">
              <img src={handsPlants} alt="Hands tending to plants" className="w-1/2 h-full object-cover rounded-2xl" />
              <img src={womanHarvest} alt="Woman harvesting" className="w-1/2 h-full object-cover rounded-2xl mt-8" />
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              At Agrova, we blend traditional farming knowledge with cutting-edge technology. Our mission is to empower farmers globally to increase yields, reduce environmental impact, and build a sustainable agricultural future.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-forest-700 leading-tight">
              Cultivating a <br />
              <span className="inline-flex items-center align-middle gap-3">
                brighter
                <img src={fieldRows} alt="Field rows" className="h-12 w-32 object-cover rounded-full hidden sm:inline-block" />
              </span> 
              <br />
              future together.
            </h2>
            
            <p className="text-gray-600 text-lg">
              We provide actionable insights and smart tools that transform data into successful harvests.
            </p>
            
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 mt-4">
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-100 flex-1 min-w-[140px]">
                <p className="text-4xl font-bold text-forest-600 mb-2">
                  <Counter target={10} suffix="K+" />
                </p>
                <p className="text-sm text-gray-600 font-medium">Acres Farmed</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100 flex-1 min-w-[140px]">
                <p className="text-4xl font-bold text-brand-600 mb-2">
                  <Counter target={30} suffix="%" />
                </p>
                <p className="text-sm text-gray-600 font-medium">Yield Improvement</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex-1 min-w-[140px] col-span-2 sm:col-span-1">
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  <Counter target={50} suffix="K+" />
                </p>
                <p className="text-sm text-gray-600 font-medium">Farmers Trust Us</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}