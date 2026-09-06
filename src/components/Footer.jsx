import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { useToast } from "../components/ui/Toast";
import hillsBg from "../assets/hills-bg.png";

// X (Twitter) icon as SVG since lucide doesn't have it
function XIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const NAV_LINKS = ["Home", "Solutions", "Sustainability", "About Us", "How It Works"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (email && /^\\S+@\\S+\\.\\S+$/.test(email)) {
      toast({ title: "Subscribed successfully!", description: `We've added ${email} to our list.` });
      setEmail("");
    } else {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
    }
  };

  const handleFreeTrial = () => {
    toast({ title: "Free Trial Started", description: "Redirecting to your dashboard..." });
  };

  return (
    <footer className="font-sans overflow-hidden">
      {/* CTA SECTION with hills image */}
      <div className="relative bg-[#f0f8e8]">
        {/* Text above hills */}
        <div className="px-5 md:px-10 pt-[50px] md:pt-[70px] text-center relative z-10">
          <h2 className="font-sans text-[clamp(28px,5vw,52px)] font-bold tracking-tight text-neutral-900 leading-[1.15] mb-4">
            Smarter Technology. Bigger Yields<br />Greater Success.
          </h2>
          <p className="text-sm text-neutral-600 mb-8 max-w-[500px] mx-auto">
            Join thousands of farmers using modern solutions to grow more with less.
          </p>
          <button
            onClick={handleFreeTrial}
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 hover:scale-105 text-neutral-900 border-none rounded-full px-7 py-3.5 text-[15px] font-semibold cursor-pointer transition-all duration-200 font-sans"
          >
            Start Free Trial <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Hills image */}
        <div className="relative -mt-5 leading-none">
          <img
            src={hillsBg}
            alt="Green hills"
            className="w-full h-[340px] object-cover object-top block"
          />
          {/* Fade bottom of image into dark */}
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-b from-transparent to-neutral-950" />
        </div>
      </div>

      {/* DARK FOOTER BODY */}
      <div className="bg-neutral-950 text-white">
        {/* Email strip */}
        <div className="flex flex-col md:flex-row px-5 md:px-[60px] py-6 md:py-7 gap-6 md:gap-6 border-b border-white/10 items-center justify-between">
          <p className="font-sans text-[clamp(16px,2vw,20px)] font-medium text-white m-0 shrink-0">
            Join Our Farming Community Today
          </p>

          <div className="flex items-center flex-1 max-w-[560px] border-b border-white/25 pb-2 w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white text-sm font-sans placeholder:text-white/50"
            />
          </div>

          <button
            onClick={handleSubscribe}
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-neutral-900 border-none rounded-full px-6 py-3 text-sm font-semibold cursor-pointer shrink-0 font-sans transition-colors w-full md:w-auto justify-center"
          >
            Submit <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Big AGROVA + tagline */}
        <div className="flex flex-col md:flex-row px-5 md:px-[60px] pt-[30px] md:pt-[40px] justify-between items-center md:items-end">
          {/* Logo word mark */}
          <div className="flex items-center gap-0">
            {/* Leaf icon */}
            <svg width="90" height="110" viewBox="0 0 80 100" fill="none" className="-mr-2">
              <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#fff" />
              <path d="M15 85 C20 65 35 50 55 45" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-sans text-[clamp(60px,10vw,120px)] font-bold text-white leading-none tracking-[-0.05em]">
              Agrova
            </span>
          </div>

          {/* Tagline top right */}
          <p className="text-center md:text-right mt-4 md:mt-0 text-sm text-white/60 max-w-[260px] leading-relaxed pb-4">
            Empowering farmers with sustainable solutions and modern technology for a better agricultural future.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col md:flex-row px-5 md:px-[60px] py-5 md:py-7 flex-wrap justify-center md:justify-start items-center border-t border-white/5 mt-2 gap-y-4">
          {NAV_LINKS.map((link, i) => {
            const hrefMap = {
              "Home": "#hero",
              "Solutions": "#solutions",
              "Sustainability": "#sustainability",
              "About Us": "#about",
              "How It Works": "#how-it-works"
            };
            return (
              <span key={link} className="flex items-center">
                <a 
                  href={hrefMap[link] || "#"} 
                  className="text-sm text-white/70 hover:text-white no-underline transition-colors whitespace-nowrap"
                >
                  {link}
                </a>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-white/20 mx-3 md:mx-5 text-base">/</span>
                )}
              </span>
            )
          })}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row px-5 md:px-[60px] pb-8 md:pb-8 pt-5 md:pt-5 gap-6 md:gap-0 items-center justify-between border-t border-white/5">
          <p className="text-xs text-white/40 m-0">
            © 2026 All Rights Reserved
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {[
              { icon: <Facebook size={15} />, label: "Facebook" },
              { icon: <Instagram size={15} />, label: "Instagram" },
              { icon: <XIcon size={15} />, label: "X" },
              { icon: <Linkedin size={15} />, label: "LinkedIn" },
            ].map(({ icon, label }) => (
              <a 
                key={label} 
                href="https://example.com" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label} 
                className="w-[34px] h-[34px] rounded-full bg-white hover:bg-brand-500 hover:scale-110 text-neutral-900 flex items-center justify-center transition-all duration-200 no-underline"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex gap-6">
            {["Terms of Service", "Privacy Policy"].map(t => (
              <a 
                key={t} 
                href={`#${t.toLowerCase().replace(/ /g, '-')}`} 
                className="text-xs text-white/40 hover:text-white no-underline transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}