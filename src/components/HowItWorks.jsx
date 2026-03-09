import { useEffect, useRef } from "react";
import fieldRows from "../assets/field-rows.png";
import soilSensor from "../assets/soil-sensor.png";
import farmerTablet from "../assets/farmer-tablet.png";
import { CornerDownLeft } from "lucide-react";

const CARDS = [
  {
    title: "Analyze Your Farm",
    desc: "We gather key soil, crop, and weather insights to understand your farm's unique needs.",
    img: fieldRows,
  },
  {
    title: "Plan Smarter",
    desc: "Get tailored insights and actionable plans for irrigation, fertilization, and crop care.",
    img: soilSensor,
  },
  {
    title: "Monitor & Optimize",
    desc: "Monitor results in real time, adjust strategies, and continuously boost your yields.",
    img: farmerTablet,
  },
];

export default function HowItWorks() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" style={{ background: "#fff", padding: "100px 60px", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <span style={{
          display: "inline-block", background: "#f5f5f5", borderRadius: 100,
          padding: "6px 18px", fontSize: 13, fontWeight: 500, color: "#444",
          marginBottom: 20, letterSpacing: 0.5,
        }}>
          How It Works
        </span>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700, letterSpacing: "-1px", color: "#111", maxWidth: 600, margin: "0 auto", lineHeight: 1.2,
        }}>
          Simple steps. Smart technology. <em>Real results for farmers.</em>
        </h2>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24, maxWidth: 1100, margin: "0 auto",
      }}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              background: "#F5F5F5", borderRadius: 24, padding: "32px 28px 0",
              display: "flex", flexDirection: "column",
              opacity: 0, transform: "translateY(40px)",
              transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              overflow: "hidden", cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.querySelector("img").style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.querySelector("img").style.transform = "scale(1)";
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: "#999", letterSpacing: 1, marginBottom: 12 }}>
              STEP {String(i + 1).padStart(2, "0")}
            </span>
            <h3 style={{
              fontSize: 20, fontWeight: 700, letterSpacing: "-0.5px", color: "#111", marginBottom: 10,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {card.title}
            </h3>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 20 }}>
              {card.desc}
            </p>
            <div
              onClick={(e) => { e.stopPropagation(); alert(`Redirecting to details about: ${card.title}`); }}
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 24, cursor: "pointer" }}
            >
              Learn More <CornerDownLeft size={14} strokeWidth={2.5} />
            </div>
            <div style={{ borderRadius: "16px 16px 0 0", overflow: "hidden", height: 220 }}>
              <img src={card.img} alt={card.title} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.4s ease",
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicator */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 48 }}>
        <div style={{ width: 60, height: 6, borderRadius: 10, background: "#111" }} />
        <div style={{ width: 160, height: 6, borderRadius: 10, background: "#ddd" }} />
      </div>
    </section>
  );
}