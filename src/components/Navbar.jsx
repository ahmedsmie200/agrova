import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Solutions", "Sustainability", "About Us", "How It Work"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 32px)",
          maxWidth: 1100,
          background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(20,20,20,0.88)",
          backdropFilter: "blur(20px)",
          borderRadius: 60,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, zIndex: 101 }}>
          <svg width="22" height="26" viewBox="0 0 80 100" fill="none">
            <path d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z" fill="#fff" />
            <path d="M15 85 C20 65 35 50 55 45" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.5px",
          }}>
            Agrova
          </span>
        </div>

        {/* Links - Desktop Only */}
        <ul className="hidden md:flex" style={{ alignItems: "center", gap: 32, listStyle: "none" }}>
          {NAV_LINKS.map((link) => {
            const hrefMap = {
              "Home": "#hero",
              "Solutions": "#solutions",
              "Sustainability": "#sustainability",
              "About Us": "#about",
              "How It Work": "#how-it-works"
            };
            return (
              <li key={link}>
                <a
                  href={hrefMap[link] || "#"}
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Buttons - Desktop Only */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 10 }}>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              style={{
                background: "#ff3333",
                border: "1.5px solid #ff3333",
                color: "#fff", fontSize: 14, cursor: "pointer",
                fontWeight: 600,
                padding: "8px 22px", borderRadius: 60,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#cc0000";
                e.target.style.borderColor = "#cc0000";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#ff3333";
                e.target.style.borderColor = "#ff3333";
              }}
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/signup")}
                style={{
                  background: "none", border: "none",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14, cursor: "pointer",
                  padding: "8px 16px",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate("/login")}
                style={{
                  background: "#fff",
                  border: "1.5px solid #fff",
                  color: "#000", fontSize: 14, cursor: "pointer",
                  fontWeight: 600,
                  padding: "8px 22px", borderRadius: 60,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#f5f5f5";
                  e.target.style.borderColor = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#fff";
                  e.target.style.borderColor = "#fff";
                }}
              >
                Log In
              </button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center z-[101]">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(10,10,10,0.98)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}>
          <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, listStyle: "none", padding: 0 }}>
            {NAV_LINKS.map((link) => {
              const hrefMap = {
                "Home": "#hero",
                "Solutions": "#solutions",
                "Sustainability": "#sustainability",
                "About Us": "#about",
                "How It Work": "#how-it-works"
              };
              return (
                <li key={link}>
                  <a
                    href={hrefMap[link] || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {link}
                  </a>
                </li>
              )
            })}
          </ul>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "200px", marginTop: 16 }}>
            {isAuthenticated ? (
              <button
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                style={{
                  background: "#ff3333", color: "#fff", border: "none",
                  padding: "12px 24px", borderRadius: 60, fontSize: 16, fontWeight: 600, cursor: "pointer"
                }}
              >Log Out</button>
            ) : (
              <>
                <button onClick={() => { navigate("/signup"); setMobileMenuOpen(false); }} style={{ background: "none", color: "#fff", border: "1px solid #fff", padding: "12px 24px", borderRadius: 60, fontSize: 16, cursor: "pointer" }}>Sign Up</button>
                <button onClick={() => { navigate("/login"); setMobileMenuOpen(false); }} style={{ background: "#fff", color: "#000", border: "none", padding: "12px 24px", borderRadius: 60, fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Log In</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}