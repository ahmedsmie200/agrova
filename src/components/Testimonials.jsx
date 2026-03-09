import { Heart, MessageCircle } from "lucide-react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar1.png";
import testimonialFarmer from "../assets/farmer-tablet.png";

const REVIEWS_ROW1 = [
  {
    name: "Leslie Alexander",
    role: "Farm Owner",
    avatar: avatar1,
    text: "This platform helped us grow healthier crops, reduce costs, and make smarter farming decisions every season.",
  },
  {
    name: "Darrell Steward",
    role: "Agribusiness Manager",
    avatar: avatar2,
    text: "This platform helped me improve my crop planning and reduce input costs. I can already see better results each season.",
  },
  {
    name: "Cody Fisher",
    role: "Organic Farmer",
    avatar: avatar3,
    text: "This solution supports sustainable farming without compromising productivity. That's exactly what modern farmers need.",
  },
  {
    name: "Mark Johnson",
    role: "Crop Specialist",
    avatar: testimonialFarmer,
    text: "Agrova transformed how we approach planting seasons. Data-driven insights have made all the difference for our farm.",
  },
  {
    name: "Sarah Williams",
    role: "Farm Manager",
    avatar: avatar1,
    text: "The soil analysis tools are incredible. We've reduced fertilizer waste by 30% and improved crop quality significantly.",
  },
];

const REVIEWS_ROW2 = [
  {
    name: "Robert Williamson",
    role: "Generation Farmer",
    avatar: avatar3,
    text: "Agrova transformed the way we manage our yield, lower costs. It's exactly what modern farming needs.",
  },
  {
    name: "Jane Cooper",
    role: "Agribusiness Manager",
    avatar: avatar2,
    text: "The precision farming tools helped us reduce water usage by 45% while increasing our harvest. Remarkable technology.",
  },
  {
    name: "Guy Hawkins",
    role: "Greenhouse Producer",
    avatar: testimonialFarmer,
    text: "Real-time monitoring gives me peace of mind. I can make informed decisions quickly and protect my crops better than ever.",
  },
  {
    name: "Esther Howard",
    role: "Mixed Farm Operator",
    avatar: avatar1,
    text: "This platform helped us grow healthily while reducing costs and improving decisions across our entire operation.",
  },
  {
    name: "Tom Richards",
    role: "Livestock Farmer",
    avatar: avatar2,
    text: "Switching to Agrova was the best decision we made this year. Our yields are up and our stress is way down.",
  },
];

function ReviewCard({ name, role, avatar, text }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #EDEDED",
      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
      borderRadius: 20,
      padding: "24px 24px 20px",
      width: 340,
      flexShrink: 0,
      position: "relative",
    }}>
      {/* Big quote mark */}
      <span style={{
        position: "absolute",
        top: 20,
        right: 24,
        fontSize: 48,
        color: "#F0F0F0",
        fontFamily: "Georgia, serif",
        lineHeight: 1,
        userSelect: "none",
      }}>"</span>

      {/* Avatar + name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <img src={avatar} alt={name} style={{
          width: 44, height: 44, borderRadius: "50%", objectFit: "cover",
          border: "2px solid #fff",
        }} />
        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#111", margin: 0 }}>{name}</p>
          <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{role}</p>
        </div>
      </div>

      {/* Review text */}
      <p style={{
        fontSize: 13, color: "#444", lineHeight: 1.65,
        marginBottom: 20, minHeight: 72,
      }}>
        {text}
      </p>

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #e8e8e8",
        paddingTop: 14,
      }}>
        <div style={{ display: "flex", gap: 14 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#888" }}>
            <Heart size={13} /> 1k
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#888" }}>
            <MessageCircle size={13} /> 500
          </span>
        </div>
        <span style={{ fontSize: 11, color: "#bbb" }}>08:24 &nbsp;|&nbsp; 22 Jan 2026</span>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div style={{
        display: "flex",
        gap: 16,
        width: "max-content",
        animation: `${reverse ? "marqueeReverse" : "marquee"} ${reviews.length * 6}s linear infinite`,
      }}>
        {doubled.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-[60px] md:py-[90px]" style={{
      background: "#FAFAFA",
      fontFamily: "'DM Sans', sans-serif",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-row:hover div {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="px-5 md:px-[60px]" style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{
          display: "inline-block",
          border: "1.5px solid #ddd",
          borderRadius: 100,
          padding: "5px 16px",
          fontSize: 12,
          color: "#666",
          marginBottom: 18,
        }}>
          Testimonial
        </span>
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(30px, 5vw, 42px)",
          letterSpacing: "-1px",
          fontWeight: 700,
          color: "#111",
          marginBottom: 14,
          lineHeight: 1.1,
        }}>
          Trusted by Farmers Worldwide
        </h2>
        <p style={{ fontSize: 14, color: "#888", maxWidth: 460, margin: "0 auto" }}>
          Hear directly from farmers transforming their fields with smart agriculture.
        </p>
      </div>

      {/* Row 1 — left to right */}
      <div className="marquee-row" style={{ marginBottom: 16 }}>
        <MarqueeRow reviews={REVIEWS_ROW1} reverse={false} />
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-row">
        <MarqueeRow reviews={REVIEWS_ROW2} reverse={true} />
      </div>
    </section>
  );
}