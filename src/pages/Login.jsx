import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem("isAuthenticated", "true");
            navigate("/");
        }, 1500);
    };

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Log in to your account to monitor your fields, access insights, and manage resources."
        >
            {isLoading && (
                <div style={{
                    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                    background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)",
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 9999
                }}>
                    <Loader2 size={48} className="animate-spin" color="#EAB308" />
                    <h2 style={{ marginTop: 16, fontSize: 20, fontWeight: 600, color: "#111" }}>Logging you in...</h2>
                </div>
            )}

            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Email Field */}
                <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>
                        Email Address
                    </label>
                    <div style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Mail size={18} color="#888" style={{ position: "absolute", left: 16 }} />
                        <input
                            type="email"
                            required
                            placeholder="you@email.com"
                            style={{
                                width: "100%",
                                padding: "14px 16px 14px 44px",
                                border: "1.5px solid #eaeaea",
                                borderRadius: 12,
                                fontSize: 15,
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#111",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = "#111"}
                            onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 8 }}>
                        Password
                    </label>
                    <div style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Lock size={18} color="#888" style={{ position: "absolute", left: 16 }} />
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            style={{
                                width: "100%",
                                padding: "14px 44px 14px 44px",
                                border: "1.5px solid #eaeaea",
                                borderRadius: 12,
                                fontSize: 15,
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#111",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            onFocus={e => e.currentTarget.style.borderColor = "#111"}
                            onBlur={e => e.currentTarget.style.borderColor = "#eaeaea"}
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: "absolute", right: 16, cursor: "pointer", display: "flex" }}
                        >
                            {showPassword ? <EyeOff size={18} color="#888" /> : <Eye size={18} color="#888" />}
                        </div>
                    </div>
                </div>

                {/* Extra options row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: -4 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                        <input type="checkbox" style={{ width: 16, height: 16, accentColor: "#111", cursor: "pointer" }} />
                        <span style={{ fontSize: 14, color: "#555" }}>Remember me</span>
                    </label>

                    <a href="#" style={{ fontSize: 14, fontWeight: 600, color: "#111", textDecoration: "none" }}>
                        Forgot password?
                    </a>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    style={{
                        background: "#EAB308",
                        color: "#111",
                        border: "none",
                        borderRadius: 12,
                        padding: "16px",
                        fontSize: 16,
                        fontWeight: 700,
                        cursor: "pointer",
                        marginTop: 8,
                        transition: "background 0.2s",
                        fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#ca9e05"}
                    onMouseLeave={e => e.currentTarget.style.background = "#EAB308"}
                >
                    Sign In
                </button>

            </form>

            {/* Footer Text */}
            <p style={{ textAlign: "center", fontSize: 14, color: "#666", marginTop: 32 }}>
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#111", fontWeight: 700, textDecoration: "none" }}>
                    Sign up
                </Link>
            </p>
        </AuthLayout>
    );
}
