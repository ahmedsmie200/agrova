import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import tractorImg from "../assets/tractor.png";
import logoFull from "../assets/logo.png";

export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
            {/* Left Pane - Branding & Image (Hidden on small screens) */}
            <div style={{
                flex: 1,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#111",
                overflow: "hidden",
            }}
                className="hidden md:flex"
            >
                <img
                    src={tractorImg}
                    alt="Agriculture"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.4,
                    }}
                />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)",
                }} />

                {/* Logo Overlay */}
                <div style={{ position: "relative", zIndex: 10, padding: "48px 60px" }}>
                    <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
                        <svg width="28" height="32" viewBox="0 0 80 100" fill="none">
                            <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#EAB308" />
                            <path d="M15 85 C20 65 35 50 55 45" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <span style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 28,
                            fontWeight: 700,
                            color: "#fff",
                            lineHeight: 1,
                            letterSpacing: "-0.5px",
                        }}>
                            Agrova
                        </span>
                    </Link>
                </div>

                {/* Bottom Text */}
                <div style={{ position: "relative", zIndex: 10, padding: "60px", marginTop: "auto" }}>
                    <h2 style={{
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-2px",
                        lineHeight: 1.1,
                        marginBottom: 16,
                    }}>
                        Welcome to the future<br />of smart farming.
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.6, maxWidth: 440 }}>
                        Join a global community of farmers utilizing data-driven insights to maximize yields and promote sustainable agriculture.
                    </p>
                </div>
            </div>

            {/* Right Pane - Form */}
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                position: "relative",
            }}>
                {/* Back Button Mobile / Desktop */}
                <div style={{ padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to="/" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        color: "#555", textDecoration: "none", fontSize: 14, fontWeight: 600,
                        transition: "color 0.2s"
                    }}
                        onMouseEnter={e => e.currentTarget.style.color = "#111"}
                        onMouseLeave={e => e.currentTarget.style.color = "#555"}
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    {/* Mobile Logo */}
                    <div className="md:hidden">
                        <svg width="20" height="24" viewBox="0 0 80 100" fill="none">
                            <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#EAB308" />
                            <path d="M15 85 C20 65 35 50 55 45" stroke="#111" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                {/* Content Centered */}
                <div style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 24px",
                }}>
                    <div style={{ width: "100%", maxWidth: 420 }}>
                        <h1 style={{
                            fontSize: "clamp(28px, 3vw, 36px)",
                            fontWeight: 700,
                            color: "#111",
                            letterSpacing: "-1px",
                            marginBottom: 8,
                        }}>
                            {title}
                        </h1>
                        <p style={{ fontSize: 15, color: "#666", marginBottom: 36, lineHeight: 1.6 }}>
                            {subtitle}
                        </p>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
