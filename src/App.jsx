import { BrowserRouter, Routes, Route } from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

function Landing() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#EAB308",
          transformOrigin: "0%",
          zIndex: 9999,
          borderRadius: "0 2px 2px 0",
        }}
      />
      <div>
        <Navbar />
        <Hero />
        <Stats />
        <Solutions />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App