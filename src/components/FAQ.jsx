import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "Who can use this agriculture solution?",
    a: "Our platform is designed for farmers, agribusiness owners, cooperatives, and agricultural startups. Whether you manage a small farm or large-scale operations, our tools adapt to your needs.",
  },
  {
    q: "What crops or farming types do you support?",
    a: "We support a wide range of crops including grains, vegetables, fruits, and cash crops. Our platform is adaptable to various farming types including conventional, organic, and precision agriculture.",
  },
  {
    q: "How does this help increase farm productivity?",
    a: "By combining real-time sensor data, AI-driven insights, and smart irrigation planning, our platform helps you make data-backed decisions that reduce waste and maximize crop yields season after season.",
  },
  {
    q: "Can this work in my local climate and soil conditions?",
    a: "Yes. Our system uses localized weather data and soil analytics to generate recommendations specifically tailored to your region's climate patterns and soil composition.",
  },
  {
    q: "Can I access the platform from my mobile phone?",
    a: "Absolutely. Agrova is fully responsive and available as a mobile app on iOS and Android, so you can monitor and manage your farm from anywhere, anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 md:px-[60px] py-[60px] md:py-[90px]" style={{
      background: "#fff",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#111",
            lineHeight: 1.15,
            marginBottom: 16,
            maxWidth: 700,
            margin: "0 auto 16px",
          }}>
            Clear reliable information to help you start farming with confidence.
          </h2>
          <p style={{ fontSize: 13, color: "#999", maxWidth: 500, margin: "0 auto" }}>
            Find clear answers to common questions and learn how our agriculture solutions support your farming journey.
          </p>
        </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? "#F8F8F8" : "#fff",
                  border: isOpen ? "1px solid transparent" : "1px solid #EDEDED",
                  borderRadius: 18,
                  overflow: "hidden",
                  transition: "all 0.2s",
                  boxShadow: isOpen ? "0 4px 24px rgba(0,0,0,0.02)" : "none",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 28px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(15px, 2vw, 18px)",
                    fontWeight: 600,
                    color: "#111",
                    lineHeight: 1.3,
                  }}>
                    {faq.q}
                  </span>

                  {/* Toggle button */}
                  <div style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: isOpen ? "#fde047" : "#fff",
                    border: isOpen ? "none" : "1.5px solid #eaeaea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.25s, border 0.25s",
                  }}>
                    {isOpen
                      ? <ChevronUp size={16} color="#111" strokeWidth={2.5} />
                      : <ChevronDown size={16} color="#888" strokeWidth={2} />
                    }
                  </div>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? 200 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}>
                  <p style={{
                    padding: "0 28px 24px",
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}