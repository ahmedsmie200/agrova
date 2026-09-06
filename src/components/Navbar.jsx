import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'About Us', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 px-4">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-forest-700 hover:text-forest-600 transition-colors"
        >
          <Sprout className="w-8 h-8 text-brand-500" />
          <span className="text-xl font-bold font-sans">Agrova</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <button
              onClick={logout}
              className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-md"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-5 py-2 text-sm font-medium text-forest-700 bg-white border border-gray-200 rounded-full hover:border-brand-500 hover:text-brand-500 shadow-sm transition-all"
              >
                Log In
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col pt-20 px-6 pb-6"
          >
            <button
              className="absolute top-6 right-6 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-2xl font-semibold text-gray-800 hover:text-brand-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-4 text-center text-lg font-medium text-white bg-red-600 rounded-xl"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-4 text-center text-lg font-medium text-white bg-forest-600 rounded-xl"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-4 text-center text-lg font-medium text-forest-700 bg-gray-100 rounded-xl"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;