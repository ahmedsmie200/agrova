import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import aerialImg from "../assets/why-aerial.png";
import farmerPickImg from "../assets/why-farmer-pick.png";
import robotImg from "../assets/why-robot.png";
import womanHarvestImg from "../assets/why-woman-harvest.png";

const TABS = ["Farmer Approach", "Smart Technology"];

const TAB_IMAGES = {
  "Farmer Approach": [
    { img: farmerPickImg, label: null },
    { img: robotImg, label: null },
    { img: womanHarvestImg, label: "More Yield" },
  ],
  "Smart Technology": [
    { img: robotImg, label: null },
    { img: farmerPickImg, label: null },
    { img: womanHarvestImg, label: "More Yield" },
  ],
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Farmer Approach");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const images = TAB_IMAGES[activeTab];

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="px-5 md:px-[60px] py-[60px] md:py-[80px]"
      style={{
        background: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        className="!grid-cols-1 md:!grid-cols-2 !gap-10 md:!gap-[60px]"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}>

        {/* ── LEFT: Aerial card ── */}
        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            position: "relative",
            height: 540,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Aerial image */}
          <img
            src={aerialImg}
            alt="Aerial farm"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Dark green overlay on bottom half */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(50,60,20,0.92) 40%, rgba(0,0,0,0.05) 70%)",
          }} />

          {/* Yellow arrow button top-right */}
          <button
            onClick={() => alert("Exploring Sustainable Practices...")}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#EAB308",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#ca9e05"}
            onMouseLeave={e => e.currentTarget.style.background = "#EAB308"}
          >
            <ArrowUpRight size={18} color="#fff" />
          </button>

          {/* Bottom text content */}
          <div style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            right: 32,
          }}>
            <h3 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 26,
              fontWeight: 600,
              color: "#fff",
              marginBottom: 10,
            }}>
              Sustainable Practices
            </h3>
            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 20,
              lineHeight: 1.6,
            }}>
              Eco-friendly farming solutions that protect soil water and crops.
            </p>
            {/* Tags */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Agri-Tech", "Smart Fields", "Eco-Farming"].map(tag => (
                <span key={tag} style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  fontSize: 12,
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Content + tabs + images ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(40px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {/* Why Choose Us badge */}
          <span style={{
            display: "inline-block",
            border: "1.5px solid #ddd",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 13,
            color: "#555",
            marginBottom: 20,
          }}>
            Why Choose Us
          </span>

          {/* Main heading */}
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(32px, 4.5vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#111",
            lineHeight: 1.1,
            marginBottom: 18,
          }}>
            Farming Made Easy.
          </h2>

          <p style={{
            fontSize: 14,
            color: "#777",
            lineHeight: 1.7,
            maxWidth: 400,
            marginBottom: 40,
          }}>
            We provide comprehensive innovative solutions tailored to address the unique challenges faced by modern farmers today.
          </p>

          {/* Nav arrows */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 20 }}>
            <button
              onClick={() => setActiveTab(TABS[0])}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "1.5px solid #ddd", background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
              <ArrowLeft size={16} color="#111" />
            </button>
            <button
              onClick={() => setActiveTab(TABS[1])}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: "none", background: "#EAB308",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}>
              <ArrowRight size={16} color="#fff" />
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 100,
                  border: "1.5px solid #ddd",
                  background: activeTab === tab ? "#111" : "#fff",
                  color: activeTab === tab ? "#fff" : "#555",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3 small images */}
          <div className="!grid-cols-1 sm:!grid-cols-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {images.map((item, i) => (
              <div
                key={`${activeTab}-${i}`}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  position: "relative",
                  height: i === 2 ? 220 : 200,
                  opacity: 0,
                  animation: `fadeUp 0.4s ease ${i * 0.08}s forwards`,
                }}
              >
                <style>{`
                  @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                  }
                `}</style>

                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />

                {/* "More Yield" label on 3rd card */}
                {item.label && (
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(6px)",
                    padding: "10px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#111",
                    textAlign: "center",
                  }}>
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}