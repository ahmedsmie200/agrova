import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tractorImg from "../assets/tractor.png";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Pane - Branding & Image (Hidden on small screens) */}
      <div className="hidden md:flex flex-1 relative flex-col bg-neutral-950 overflow-hidden">
        <img
          src={tractorImg}
          alt="Agriculture field with tractor"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60" />

        {/* Logo Overlay */}
        <div className="relative z-10 p-12">
          <Link to="/" className="inline-flex items-center gap-1.5 no-underline">
            <svg width="28" height="32" viewBox="0 0 80 100" fill="none">
              <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#EAB308" />
              <path d="M15 85 C20 65 35 50 55 45" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="text-[28px] font-bold text-white leading-none tracking-tight">
              Agrova
            </span>
          </Link>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 p-12 lg:p-16 mt-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            Welcome to the future
            <br />
            of smart farming.
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-[440px]">
            Join a global community of farmers utilizing data-driven insights to
            maximize yields and promote sustainable agriculture.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["AI Analytics", "Smart Irrigation", "24/7 Support"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/90 bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Pane - Form */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Back Button */}
        <div className="p-8 md:px-10 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 no-underline text-sm font-semibold hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <svg width="20" height="24" viewBox="0 0 80 100" fill="none">
              <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#EAB308" />
              <path d="M15 85 C20 65 35 50 55 45" stroke="#111" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Content Centered */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[420px]"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-[15px] text-neutral-500 mb-9 leading-relaxed">
              {subtitle}
            </p>
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
