import React from 'react';
import { motion } from 'framer-motion';
import { Star, Headset, Sprout, Leaf, Sun, Droplets, BarChart3, Wheat } from 'lucide-react';
import tractorImg from '../assets/tractor.png';
import vegetablesImg from '../assets/vegetables.jpg';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const Hero = () => {
  const handleScrollToSolutions = (e) => {
    e.preventDefault();
    const element = document.querySelector('#solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    { name: 'AgriSense', icon: Sprout },
    { name: 'FarmIQ', icon: BarChart3 },
    { name: 'CropData', icon: Droplets },
    { name: 'SoilTech', icon: Sun },
    { name: 'HarvestAI', icon: Wheat },
    { name: 'GreenYield', icon: Leaf },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col pt-24 pb-12 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={tractorImg}
          alt="Tractor in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white max-w-2xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Growing Smarter<br />Farming Better.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg font-sans">
            Empowering farmers with sustainable solutions, modern technology, and data-driven insights
          </p>
          <button
            onClick={handleScrollToSolutions}
            className="bg-brand-500 hover:bg-brand-600 text-black font-semibold py-4 px-8 rounded-full transition-colors font-sans text-lg shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          {/* Glassmorphic Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
            <img
              src={vegetablesImg}
              alt="Fresh vegetables"
              className="w-full h-48 object-cover rounded-2xl mb-6 shadow-md"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                <img src={avatar1} alt="Farmer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <img src={avatar2} alt="Farmer" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-forest-600 flex items-center justify-center text-white text-xs font-bold">
                  +50K
                </div>
              </div>
              <div>
                <div className="flex items-center text-brand-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white text-sm font-medium font-sans">Trusted by 50K+ Farmers</p>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl transition-colors font-medium border border-white/10">
              <Headset className="w-5 h-5" />
              24/7 Technical Support
            </button>
          </div>
        </motion.div>
      </div>

      {/* Partner Logos Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12 mb-4"
      >
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-default">
              <partner.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;