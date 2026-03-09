import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import hillsBg from "../assets/hills-bg.png";

// X (Twitter) icon as SVG since lucide doesn't have it
function XIcon({ size = 16, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const NAV_LINKS = ["Home", "Solutions", "Sustainability", "About Us", "How It Work"];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}>

      {/* ── CTA SECTION with hills image ── */}
      <div style={{ position: "relative", background: "#f0f8e8" }}>
        {/* Text above hills */}
        <div className="px-5 md:px-[40px] pt-[50px] md:pt-[70px]" style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-2px",
            color: "#111",
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            Smarter Technology. Bigger Yields<br />Greater Success.
          </h2>
          <p style={{ fontSize: 14, color: "#555", marginBottom: 32 }}>
            Join thousands of farmers using modern solutions to grow more with less.
          </p>
          <button
            onClick={() => alert("Starting your Free Trial...")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#EAB308",
              color: "#111",
              border: "none",
              borderRadius: 100,
              padding: "14px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              marginBottom: 0,
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#ca9e05"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#EAB308"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Start Free Trial <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Hills image */}
        <div style={{ position: "relative", marginTop: -20, lineHeight: 0 }}>
          <img
            src={hillsBg}
            alt="Green hills"
            style={{
              width: "100%",
              height: 340,
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          {/* Fade bottom of image into dark */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background: "linear-gradient(to bottom, transparent, #111)",
          }} />
        </div>
      </div>

      {/* ── DARK FOOTER BODY ── */}
      <div style={{ background: "#111", color: "#fff" }}>

        {/* Email strip */}
        <div className="flex-col md:flex-row px-5 md:px-[60px] py-6 md:py-[28px] gap-6 md:gap-[24px]" style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 500,
            color: "#fff",
            margin: 0,
            flexShrink: 0,
          }}>
            Join Our Farming Community Today
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            flex: 1,
            maxWidth: 560,
            borderBottom: "1px solid rgba(255,255,255,0.25)",
            paddingBottom: 8,
          }}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
              }}
            />
          </div>

          <button
            onClick={() => {
              if (email) { alert(`Subscribed with: ${email}`); setEmail(''); }
              else { alert('Please enter an email address.'); }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#EAB308",
              color: "#111",
              border: "none",
              borderRadius: 100,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              flexShrink: 0,
              fontFamily: "'DM Sans', sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#ca9e05"}
            onMouseLeave={e => e.currentTarget.style.background = "#EAB308"}
          >
            Submit <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Big AGROVA + tagline */}
        <div className="flex-col md:flex-row px-5 md:px-[60px] pt-[30px] md:pt-[40px]" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}>
          {/* Logo word mark */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {/* Leaf icon */}
            <svg width="90" height="110" viewBox="0 0 80 100" fill="none" style={{ marginRight: -8 }}>
              <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#fff" />
              <path d="M15 85 C20 65 35 50 55 45" stroke="#111" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(60px, 10vw, 120px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "-5px",
            }}>
              Agrova
            </span>
          </div>

          {/* Tagline top right */}
          <p className="text-center md:text-right mt-4 md:mt-0" style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 260,
            lineHeight: 1.65,
            paddingBottom: 16,
          }}>
            Empowering farmers with sustainable solutions and modern technology for a better agricultural future.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex-col md:flex-row px-5 md:px-[60px] py-5 md:py-[28px] flex-wrap justify-center md:justify-start" style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: 8,
        }}>
          {NAV_LINKS.map((link, i) => {
            const hrefMap = {
              "Home": "#hero",
              "Solutions": "#solutions",
              "Sustainability": "#sustainability",
              "About Us": "#about",
              "How It Work": "#how-it-works"
            };
            return (
              <span key={link} style={{ display: "flex", alignItems: "center" }}>
                <a href={hrefMap[link] || "#"} style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                >
                  {link}
                </a>
                {i < NAV_LINKS.length - 1 && (
                  <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 20px", fontSize: 16 }}>/</span>
                )}
              </span>
            )
          })}
        </div>

        {/* Bottom bar */}
        <div className="flex-col md:flex-row px-5 md:px-[60px] pb-8 md:pb-[32px] pt-5 md:pt-[20px] gap-6 md:gap-0 center-items" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0 }}>
            ©2026 All Rights Reserved
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { icon: <Facebook size={15} color="#111" />, label: "Facebook" },
              { icon: <Instagram size={15} color="#111" />, label: "Instagram" },
              { icon: <XIcon size={15} color="#111" />, label: "X" },
              { icon: <Linkedin size={15} color="#111" />, label: "LinkedIn" },
            ].map(({ icon, label }) => (
              <a key={label} href="#" title={label} style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, transform 0.2s",
                textDecoration: "none",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#EAB308"; e.currentTarget.style.transform = "scale(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                {icon}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {["Terms of Service", "Privacy policy"].map(t => (
              <a key={t} href="#" style={{
                fontSize: 12, color: "rgba(255,255,255,0.4)",
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
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