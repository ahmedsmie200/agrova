import { useEffect, useRef, useState } from "react";
import handsPlants from "../assets/hands-plants.png";
import womanHarvest from "../assets/woman-harvest.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar1.png";
import fieldInline from "../assets/field-rows.png";

// Animated counter hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const STATS = [
  { label: "Acres Farmed", value: 10000, suffix: "K+", sub: "Supporting efficient farming at scale" },
  { label: "Yield Improvement", value: 30, suffix: "%", sub: "Growing more with smarter farming" },
  { label: "Farmers Trust Us", value: 50000, suffix: "K+", sub: "Proven results farmers trust" },
];

function StatCard({ label, value, suffix, sub, animate }) {
  const display = suffix === "K+"
    ? useCounter(Math.floor(value / 1000), 2000, animate)
    : useCounter(value, 2000, animate);

  return (
    <div style={{
      background: "#F5F5F5",
      borderRadius: 20,
      padding: "32px 28px 28px",
      flex: 1,
      position: "relative",
      minWidth: 0,
    }}>
      {/* Asterisk decoration */}
      <span style={{
        position: "absolute", top: 28, right: 28,
        fontSize: 20, color: "#bbb", fontWeight: 300,
      }}>✳</span>

      <p style={{
        fontSize: 14, fontWeight: 500, color: "#333",
        marginBottom: 40, fontFamily: "'DM Sans', sans-serif",
      }}>
        {label}
      </p>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(40px, 5vw, 52px)",
        fontWeight: 700,
        letterSpacing: "-1.5px",
        color: "#111",
        lineHeight: 1,
        marginBottom: 12,
      }}>
        {display}{suffix}
      </p>

      <p style={{ fontSize: 12, color: "#888", fontFamily: "'DM Sans', sans-serif" }}>
        {sub}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#fff",
        padding: "100px 60px",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: 80,
        alignItems: "flex-start",
      }}>
        {/* ── LEFT COLUMN ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          {/* Avatars + trusted */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ display: "flex" }}>
              {[avatar1, avatar2, avatar3].map((av, i) => (
                <img key={i} src={av} alt=""
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    objectFit: "cover", border: "2px solid #fff",
                    marginLeft: i === 0 ? 0 : -10,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: 13, color: "#666" }}>Trusted by over</span>
          </div>

          {/* 50K+ */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 42,
            color: "#111",
            lineHeight: 1,
            letterSpacing: "-1px",
            marginBottom: 6,
          }}>
            <strong style={{ fontWeight: 700 }}>50K+</strong>{" "}
            <span style={{ fontSize: 14, color: "#888", fontWeight: 500 }}>
              Farmer worldwide
            </span>
          </p>

          {/* Two small images */}
          <div style={{ display: "flex", gap: 10, marginTop: 32, marginBottom: 20 }}>
            <img src={handsPlants} alt="hands with plants"
              style={{
                width: "48%", height: 130,
                objectFit: "cover", borderRadius: 14,
              }}
            />
            <img src={womanHarvest} alt="woman with harvest"
              style={{
                width: "48%", height: 130,
                objectFit: "cover", borderRadius: 14,
              }}
            />
          </div>

          <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
            Smart, data-driven agricultural solutions helping farmers improve yields while using fewer resources.
          </p>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {/* Big headline */}
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: 500,
            letterSpacing: "-1px",
            color: "#111",
            lineHeight: 1.15,
            marginBottom: 0,
          }}>
            We are committed to empowering farmers through{" "}
            {/* Inline farm image pill */}
            <span style={{
              display: "inline-block",
              width: 56, height: 34,
              borderRadius: 100,
              overflow: "hidden",
              verticalAlign: "middle",
              margin: "0 6px",
              position: "relative",
              top: -2,
            }}>
              <img src={fieldInline} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </span>{" "}
            smart sustainable{" "}
            <span style={{ color: "#aaa" }}>
              agricultural solutions that improve productivity and protect the land.
            </span>
          </h2>

          {/* Subtext */}
          <p style={{
            fontSize: 13,
            color: "#888",
            lineHeight: 1.7,
            maxWidth: 580,
            marginTop: 28,
            marginBottom: 40,
          }}>
            We empower farmers with smart data driven agricultural solutions that improve crop performance reduce resource waste and promote sustainable farming practices for long term success.
          </p>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: 16 }}>
            {STATS.map((s, i) => (
              <StatCard key={i} {...s} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}