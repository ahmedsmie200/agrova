import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false);
            navigate("/login");
        }, 1500);
    };

    return (
        <AuthLayout
            title="Create an account"
            subtitle="Sign up for Agrova to join thousands of farmers using data-driven insights to maximize their success."
        >
            {isLoading && (
                <div style={{
                    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                    background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 9999
                }}>
                    <Loader2 size={48} className="animate-spin" color="#EAB308" />
                    <h2 style={{ marginTop: 16, fontSize: 20, fontWeight: 600, color: "#111" }}>Creating account...</h2>
                </div>
            )}

            <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* Name Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{}}>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 6 }}>
                            First Name
                        </label>
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                            <User size={16} color="#888" style={{ position: "absolute", left: 14 }} />
                            <input
                                type="text"
                                required
                                placeholder="Ahmed"
                                style={{
                                    width: "100%", padding: "12px 14px 12px 38px", border: "1.5px solid #eaeaea",
                                    borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                                    color: "#111", outline: "none", transition: "border-color 0.2s"
                                }}
                                onFocus={e => e.currentTarget.style.borderColor = "#111"}
                                onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                            />
                        </div>
                    </div>
                    <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 6 }}>
                            Last Name
                        </label>
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                            <User size={16} color="#888" style={{ position: "absolute", left: 14 }} />
                            <input
                                type="text"
                                required
                                placeholder="Samir"
                                style={{
                                    width: "100%", padding: "12px 14px 12px 38px", border: "1.5px solid #eaeaea",
                                    borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                                    color: "#111", outline: "none", transition: "border-color 0.2s"
                                }}
                                onFocus={e => e.currentTarget.style.borderColor = "#111"}
                                onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                            />
                        </div>
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 6 }}>
                        Email Address
                    </label>
                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <Mail size={16} color="#888" style={{ position: "absolute", left: 14 }} />
                        <input
                            type="email"
                            required
                            placeholder="you@email.com"
                            style={{
                                width: "100%", padding: "12px 14px 12px 38px", border: "1.5px solid #eaeaea",
                                borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                                color: "#111", outline: "none", transition: "border-color 0.2s"
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = "#111"}
                            onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 6 }}>
                        Password
                    </label>
                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <Lock size={16} color="#888" style={{ position: "absolute", left: 14 }} />
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Min. 8 characters"
                            style={{
                                width: "100%", padding: "12px 38px 12px 38px", border: "1.5px solid #eaeaea",
                                borderRadius: 10, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                                color: "#111", outline: "none", transition: "border-color 0.2s"
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = "#111"}
                            onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: "absolute", right: 14, cursor: "pointer", display: "flex" }}
                        >
                            {showPassword ? <EyeOff size={16} color="#888" /> : <Eye size={16} color="#888" />}
                        </div>
                    </div>
                </div>

                {/* Terms */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginTop: 4 }}>
                    <input type="checkbox" required style={{ width: 16, height: 16, marginTop: 2, accentColor: "#111", cursor: "pointer" }} />
                    <span style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>
                        I agree to Agrova's <a href="#" style={{ color: "#111", fontWeight: 600 }}>Terms of Service</a> and <a href="#" style={{ color: "#111", fontWeight: 600 }}>Privacy Policy</a>.
                    </span>
                </label>

                {/* Submit */}
                <button
                    type="submit"
                    style={{
                        background: "#111",
                        color: "#fff",
                        border: "none",
                        borderRadius: 10,
                        padding: "14px",
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: "pointer",
                        marginTop: 8,
                        transition: "background 0.2s",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#333"}
                    onMouseLeave={e => e.currentTarget.style.background = "#111"}
                >
                    Create Account
                </button>

            </form>

            {/* Footer Text */}
            <p style={{ textAlign: "center", fontSize: 14, color: "#666", marginTop: 32 }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#EAB308", fontWeight: 700, textDecoration: "none" }}>
                    Log in
                </Link>
            </p>
        </AuthLayout>
    );
}
