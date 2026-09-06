import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Who can use this agriculture solution?",
    a: "Our platform is designed for farmers, agribusiness owners, cooperatives, and agricultural startups. Whether you manage a small farm or large-scale operations, our tools adapt to your needs.",
  },
  {
    q: "What crops or farming types do you support?",
    a: "We support a wide range of crops including grains, vegetables, fruits, and cash crops. Our platform is adaptable to various farming types including conventional, organic, and precision agriculture.",
  },
  {
    q: "How does this help increase farm productivity?",
    a: "By combining real-time sensor data, AI-driven insights, and smart irrigation planning, our platform helps you make data-backed decisions that reduce waste and maximize crop yields season after season.",
  },
  {
    q: "Can this work in my local climate and soil conditions?",
    a: "Yes. Our system uses localized weather data and soil analytics to generate recommendations specifically tailored to your region's climate patterns and soil composition.",
  },
  {
    q: "Can I access the platform from my mobile phone?",
    a: "Absolutely. Agrova is fully responsive and available as a mobile app on iOS and Android, so you can monitor and manage your farm from anywhere, anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-5 md:px-[60px] py-[60px] md:py-[90px] bg-white font-sans">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-14 flex flex-col items-center">
          <span className="inline-block border-[1.5px] border-neutral-300 rounded-full px-4 py-1.5 text-xs text-neutral-600 mb-4">
            FAQ
          </span>
          <h2 className="font-sans text-[clamp(28px,5vw,44px)] font-bold tracking-tight text-neutral-900 leading-[1.15] mb-4 max-w-[700px] mx-auto">
            Clear, reliable information to help you start farming with confidence.
          </h2>
          <p className="text-[13px] text-neutral-500 max-w-[500px] mx-auto">
            Find clear answers to common questions and learn how our agriculture solutions support your farming journey.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            const headerId = `faq-header-${i}`;
            
            return (
              <div
                key={i}
                className={`rounded-[18px] overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? "bg-neutral-50 border border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.02)]" 
                    : "bg-white border border-neutral-200"
                }`}
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 md:px-7 md:py-6 bg-transparent border-none cursor-pointer text-left gap-4 outline-none"
                >
                  <span className="font-sans text-[clamp(15px,2vw,18px)] font-semibold text-neutral-900 leading-snug">
                    {faq.q}
                  </span>

                  <div 
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-brand-400 border-none" : "bg-white border-[1.5px] border-neutral-200"
                    }`}
                  >
                    {isOpen
                      ? <ChevronUp size={16} className="text-neutral-900" strokeWidth={2.5} />
                      : <ChevronDown size={16} className="text-neutral-500" strokeWidth={2} />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 md:px-7 pb-6 text-[13px] text-neutral-600 leading-[1.75] m-0">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}