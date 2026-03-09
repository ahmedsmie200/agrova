import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, Sprout } from "lucide-react";
import precisionFarmer from "../assets/precision-farmer.png";
import irrigationImg from "../assets/irrigation.png";
import pestImg from "../assets/pest-monitor.png";

export default function Solutions() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="px-5 md:px-[60px] py-[60px] md:py-[80px]"
      style={{
        background: "#F5F5F5",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── TOP ROW: Title + Arrows ── */}
        <div
          className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-start"
          style={{
            marginBottom: 36,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#111",
            lineHeight: 1.15,
            maxWidth: 380,
          }}>
            Complete Solutions for Modern Agriculture
          </h2>

          {/* Nav arrows */}
          <div style={{ display: "flex", gap: 10, alignItems: "center", paddingTop: 8 }}>
            <button
              onClick={() => alert("Showing previous solutions...")}
              style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "1.5px solid #ddd", background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0f0f0"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}
            >
              <ArrowLeft size={18} color="#111" />
            </button>
            <button
              onClick={() => alert("Showing more solutions...")}
              style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "none", background: "#EAB308",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#ca9e05"}
              onMouseLeave={e => e.currentTarget.style.background = "#EAB308"}
            >
              <ArrowRight size={18} color="#fff" />
            </button>
          </div>
        </div>

        {/* ── CARDS ROW ── */}
        <div className="!grid-cols-1 lg:!grid-cols-[1fr_0.55fr_0.55fr]" style={{ display: "grid", gridTemplateColumns: "1fr 0.55fr 0.55fr", gap: 16 }}>

          {/* ── CARD 1: Precision Farming (large) ── */}
          <div style={{
            background: "#fff",
            borderRadius: 24,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}>
            {/* Inner layout: image left + content right */}
            <div className="flex-col md:flex-row" style={{ display: "flex", flex: 1 }}>
              {/* Left: farmer image */}
              <div className="w-full md:w-[48%]" style={{ position: "relative", minHeight: 380 }}>
                <img src={precisionFarmer} alt="Precision Farming"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    borderRadius: "0 0 0 0",
                  }}
                />
              </div>

              {/* Right: content */}
              <div style={{
                flex: 1, padding: "32px 28px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                {/* Smart input badge */}
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#f5f5f5", borderRadius: 100,
                    padding: "8px 14px", marginBottom: 32,
                  }}>
                    <Sprout size={16} color="#555" />
                    <div>
                      <p style={{ fontSize: 11, color: "#888", margin: 0 }}>Smart input</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: "#111", margin: 0 }}>
                        500+ acres support
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title + desc */}
                <div>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 24, fontWeight: 700,
                    letterSpacing: "-0.5px",
                    color: "#111", marginBottom: 12,
                  }}>
                    Precision Farming
                  </h3>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, marginBottom: 28 }}>
                    GPS-guided equipment and sensors for accurate field management and resource allocation.
                  </p>

                  {/* Learn more button */}
                  <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{ fontSize: 13, color: "#555", fontWeight: 500 }}>
                      Learn more about smart farming
                    </span>
                    <button
                      onClick={() => alert("Loading more information...")}
                      style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: "#111", border: "none",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "background 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "#333"}
                      onMouseLeave={e => e.currentTarget.style.background = "#111"}
                    >
                      <ArrowRight size={16} color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Smart Irrigation ── */}
          <div style={{
            borderRadius: 24, overflow: "hidden", position: "relative",
            minHeight: 380,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            cursor: "pointer",
          }}
            onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
          >
            <img src={irrigationImg} alt="Smart Irrigation"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", position: "absolute", inset: 0,
                transition: "transform 0.5s ease",
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 40%, transparent 100%)",
            }} />
            {/* Title */}
            <div style={{
              position: "absolute", bottom: 28, left: 24, right: 24,
            }}>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 22, fontWeight: 600,
                color: "#fff", lineHeight: 1.25,
              }}>
                Smart Irrigation Systems
              </h3>
            </div>
          </div>

          {/* ── CARD 3: Pest & Disease ── */}
          <div style={{
            borderRadius: 24, overflow: "hidden", position: "relative",
            minHeight: 380,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            cursor: "pointer",
          }}
            onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
          >
            <img src={pestImg} alt="Pest & Disease Monitoring"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", position: "absolute", inset: 0,
                transition: "transform 0.5s ease",
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 40%, transparent 100%)",
            }} />
            {/* Title */}
            <div style={{
              position: "absolute", bottom: 28, left: 24, right: 24,
            }}>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 22, fontWeight: 600,
                color: "#fff", lineHeight: 1.25,
              }}>
                Pest & Disease Monitoring
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}