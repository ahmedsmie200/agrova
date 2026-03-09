import { useEffect, useState } from "react";
import tractorImg from "../assets/tractor.png";
import vegetablesImg from "../assets/vegetables.jpg";

const StarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#EAB308">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const LOGOS = [
  { name: "slack", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 6h-7a6 6 0 1 0 0 12h7v-4h-7a2 2 0 1 1 0-4h7V6z" /></svg> }, // Replace with lucide imports
  { name: "Dropbox", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12 12 17 2 12 12 7l10 5Z" /><path d="m12 17 10-5M12 17l-10-5" /></svg> },
  { name: "Webflow", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2 2 16" /><path d="M22 8 8 22" /></svg> },
  { name: "Spotify", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 11.96a6.5 6.5 0 0 1 8 0M7 15a8.5 8.5 0 0 1 10 0" /></svg> },
  { name: "Dropbox", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12 12 17 2 12 12 7l10 5Z" /><path d="m12 17 10-5M12 17l-10-5" /></svg> },
  { name: "Remessa", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20 M12 2v20 M7 7l10 10 M17 7 7 17" /></svg> }
];
export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: 700,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background Image */}
        <img
          src={tractorImg}
          alt="tractor"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
          }}
        />

        {/* Content */}
        <div
          className="flex-col md:flex-row items-center md:items-end justify-center md:justify-between px-6 md:px-[60px] pb-12 md:pb-[80px]"
          style={{
            position: "relative",
            zIndex: 10,
            flex: 1,
            display: "flex",
          }}
        >
          {/* Left */}
          <div
            className="text-center md:text-left mb-10 md:mb-0"
            style={{
              maxWidth: 520,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <h1
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(44px, 5vw, 64px)",
                color: "#fff",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-2px",
                marginBottom: 16,
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Growing Smarter<br />Farming Better.
            </h1>
            <p
              className="mx-auto md:mx-0"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.65,
                maxWidth: 360,
                marginBottom: 32,
                fontWeight: 300,
              }}
            >
              Empowering farmers with sustainable solutions modern
              technology and data driven insights
            </p>
            <button
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#EAB308",
                color: "#111",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 24px",
                borderRadius: 60,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(234,179,8,0.45)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fbbf24";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(234,179,8,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#EAB308";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(234,179,8,0.45)";
              }}
            >
              Get Started <ArrowIcon />
            </button>
          </div>

          {/* Right Card */}
          <div
            className="self-center md:self-end w-full max-w-[300px]"
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: 24,
              overflow: "hidden",
              padding: 16,
              boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.9s ease 0.45s, transform 0.9s ease 0.45s",
            }}
          >
            {/* Card image */}
            <img
              src={vegetablesImg}
              alt="vegetables"
              style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 16 }}
            />

            {/* Card body */}
            <div style={{ padding: "16px 0 4px 0" }}>
              {/* Avatars + Stars */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                {/* Avatars */}
                <div style={{ display: "flex" }}>
                  {["https://i.pravatar.cc/150?img=11", "https://i.pravatar.cc/150?img=5", "https://i.pravatar.cc/150?img=33"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="avatar"
                      style={{
                        width: 32, height: 32,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.2)",
                        marginLeft: i === 0 ? 0 : -10,
                        objectFit: "cover"
                      }}
                    />
                  ))}
                </div>
                {/* Stars + label */}
                <div style={{ textAlign: "right" }}>
                  <div style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginBottom: 4 }}>
                    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif" }}>
                    Trusted by 50K Farmer
                  </div>
                </div>
              </div>

              {/* Support button */}
              <div
                onClick={() => alert("Initiating 24/7 technical chat support...")}
                style={{
                  background: "#fde047",
                  borderRadius: 12,
                  padding: "12px 16px",
                  textAlign: "center",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#000",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  marginTop: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#fef08a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fde047")}
              >
                24/7 Technical Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ── */}
      <div
        className="flex-wrap px-4 md:px-[60px] py-4 md:py-[28px] gap-4 justify-center md:justify-around"
        style={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        {LOGOS.map((item, i) => (
          <div
            key={i}
            onClick={() => window.open(`https://${item.name.toLowerCase()}.com`, '_blank')}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#999",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.5px",
              cursor: "pointer",
              transition: "color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#444";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#999";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}