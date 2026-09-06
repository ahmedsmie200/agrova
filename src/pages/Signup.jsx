import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../components/ui/Toast";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!firstName.trim()) errs.firstName = "First name is required";
    if (!lastName.trim()) errs.lastName = "Last name is required";
    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }
    if (!agreeTerms) {
      errs.terms = "You must agree to the Terms of Service & Privacy Policy";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      login({ name: fullName, email: email.trim() });
      toast.success(`Account created! Welcome to Agrova, ${firstName}!`);
      navigate("/dashboard");
    }, 1400);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up for Agrova to join thousands of farmers using data-driven insights to maximize their success."
    >
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col justify-center items-center z-[9999]">
          <Loader2 className="w-12 h-12 animate-spin text-brand-500" />
          <h2 className="mt-4 text-xl font-semibold text-neutral-900">
            Setting up your farm account...
          </h2>
          <p className="text-sm text-neutral-500 mt-1">Configuring sensors and precision tools</p>
        </div>
      )}

      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        {/* Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-900 mb-1.5">
              First Name
            </label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: null }));
                }}
                placeholder="John"
                className={`w-full px-3.5 py-3 pl-10 border-[1.5px] border-neutral-200 rounded-xl text-sm font-sans text-neutral-950 outline-none transition-colors duration-200 focus:border-neutral-950 placeholder:text-neutral-400 ${
                  errors.firstName ? "border-red-400 focus:border-red-500" : ""
                }`}
              />
            </div>
            {errors.firstName && (
              <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-900 mb-1.5">
              Last Name
            </label>
            <div className="relative flex items-center">
              <User className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: null }));
                }}
                placeholder="Miller"
                className={`w-full px-3.5 py-3 pl-10 border-[1.5px] border-neutral-200 rounded-xl text-sm font-sans text-neutral-950 outline-none transition-colors duration-200 focus:border-neutral-950 placeholder:text-neutral-400 ${
                  errors.lastName ? "border-red-400 focus:border-red-500" : ""
                }`}
              />
            </div>
            {errors.lastName && (
              <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-neutral-900 mb-1.5">
            Email Address
          </label>
          <div className="relative flex items-center">
            <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              }}
              placeholder="you@email.com"
              className={`w-full px-3.5 py-3 pl-10 border-[1.5px] border-neutral-200 rounded-xl text-sm font-sans text-neutral-950 outline-none transition-colors duration-200 focus:border-neutral-950 placeholder:text-neutral-400 ${
                errors.email ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-semibold text-neutral-900 mb-1.5">
            Password
          </label>
          <div className="relative flex items-center">
            <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
              }}
              placeholder="Min. 8 characters"
              className={`w-full px-3.5 py-3 pl-10 pr-10 border-[1.5px] border-neutral-200 rounded-xl text-sm font-sans text-neutral-950 outline-none transition-colors duration-200 focus:border-neutral-950 placeholder:text-neutral-400 ${
                errors.password ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer select-none mt-1">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (errors.terms) setErrors((prev) => ({ ...prev, terms: null }));
              }}
              className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-neutral-900 accent-neutral-900 cursor-pointer"
            />
            <span className="text-xs text-neutral-600 leading-normal">
              I agree to Agrova&apos;s{" "}
              <a href="#terms" className="text-neutral-950 font-semibold underline underline-offset-2 hover:text-brand-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#privacy" className="text-neutral-950 font-semibold underline underline-offset-2 hover:text-brand-600">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.terms && (
            <p className="text-xs text-red-500 mt-1">{errors.terms}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.99] text-neutral-950 font-bold py-3.5 px-6 rounded-xl text-base shadow-md shadow-brand-500/20 transition-all duration-200 mt-2"
        >
          Create Farm Account
        </button>
      </form>

      {/* Footer Text */}
      <p className="text-center text-sm text-neutral-500 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-neutral-950 font-bold hover:text-brand-600 transition-colors"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
