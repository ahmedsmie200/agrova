import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../components/ui/Toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const username = email.split("@")[0];
      const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
      login({ name: formattedName, email });
      toast.success(`Welcome back, ${formattedName}!`);
      navigate("/dashboard");
    }, 1200);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.info("Password reset instructions have been sent to your email (demo).");
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to your account to monitor your fields, access insights, and manage resources."
    >
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center z-[9999]">
          <Loader2 className="w-12 h-12 animate-spin text-brand-500" />
          <h2 className="mt-4 text-xl font-semibold text-neutral-900">
            Logging you in...
          </h2>
          <p className="text-sm text-neutral-500 mt-1">Preparing your farm analytics dashboard</p>
        </div>
      )}

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2">
            Email Address
          </label>
          <div className="relative flex items-center">
            <Mail className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              }}
              placeholder="you@email.com"
              className={`input-field ${errors.email ? "border-red-400 focus:border-red-500" : ""}`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-semibold text-neutral-900 mb-2">
            Password
          </label>
          <div className="relative flex items-center">
            <Lock className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
              }}
              placeholder="••••••••"
              className={`w-full px-4 py-3.5 pl-11 pr-11 border-[1.5px] border-neutral-200 rounded-xl text-[15px] font-sans text-neutral-950 outline-none transition-colors duration-200 focus:border-neutral-950 placeholder:text-neutral-400 ${
                errors.password ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1.5">{errors.password}</p>
          )}
        </div>

        {/* Extra options row */}
        <div className="flex justify-between items-center -mt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-neutral-300 text-neutral-900 accent-neutral-900 cursor-pointer"
            />
            <span className="text-sm text-neutral-600">Remember me</span>
          </label>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm font-semibold text-neutral-900 hover:text-brand-600 transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-neutral-950 font-bold py-3.5 px-6 rounded-xl text-base shadow-md shadow-brand-500/20 transition-all duration-200 mt-2"
        >
          Sign In to Agrova
        </button>
      </form>

      {/* Footer Text */}
      <p className="text-center text-sm text-neutral-500 mt-8">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-neutral-950 font-bold hover:text-brand-600 transition-colors"
        >
          Create account
        </Link>
      </p>
    </AuthLayout>
  );
}
