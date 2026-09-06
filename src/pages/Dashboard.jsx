import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sprout,
  Droplets,
  Activity,
  Wind,
  Thermometer,
  Sun,
  ShieldCheck,
  Bell,
  LogOut,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCw,
  FileText,
  MapPin,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../components/ui/Toast";

const FIELDS = [
  {
    id: "f-1",
    name: "North Valley Corn",
    size: "420 Acres",
    crop: "Sweet Corn",
    health: 96,
    moisture: "41%",
    irrigation: "Optimal",
    status: "healthy",
  },
  {
    id: "f-2",
    name: "Hillside Organic Vineyard",
    size: "180 Acres",
    crop: "Pinot Noir Grapes",
    health: 88,
    moisture: "32%",
    irrigation: "Scheduled in 2h",
    status: "warning",
  },
  {
    id: "f-3",
    name: "East River Wheat Field",
    size: "640 Acres",
    crop: "Winter Wheat",
    health: 94,
    moisture: "39%",
    irrigation: "Optimal",
    status: "healthy",
  },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [irrigationRunning, setIrrigationRunning] = useState(false);

  const handleLogout = () => {
    logout();
    toast.info("You have logged out successfully.");
    navigate("/");
  };

  const handleTriggerIrrigation = () => {
    setIrrigationRunning(true);
    toast.success("AI Precision Irrigation cycle initiated for Hillside Vineyard.");
    setTimeout(() => {
      setIrrigationRunning(false);
      toast.success("Irrigation cycle completed. Soil moisture stabilized at 39%.");
    }, 4000);
  };

  const handleGenerateReport = () => {
    toast.info("Generating automated harvest forecast PDF report...");
    setTimeout(() => {
      toast.success("Harvest Report 2026 ready for download!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-900 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-neutral-950 text-white border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 no-underline group">
            <svg width="24" height="28" viewBox="0 0 80 100" fill="none">
              <path
                d="M60 10 C20 10 10 50 15 85 C35 60 65 55 70 20 C70 15 66 10 60 10Z"
                fill="#EAB308"
              />
              <path
                d="M15 85 C20 65 35 50 55 45"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors">
              Agrova
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-xs text-forest-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            IoT Telemetry Live
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => toast.info("No unread alerts. All sensor nodes operational.")}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors relative"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full" />
          </button>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-500 text-neutral-950 font-bold flex items-center justify-center text-sm">
              {user?.name ? user.name.charAt(0).toUpperCase() : "F"}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold leading-tight text-white">
                {user?.name || "Farmer"}
              </p>
              <p className="text-xs text-white/50">{user?.email || "Connected"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-300 border border-white/10 hover:border-red-500/30 transition-all ml-2"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Log Out</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Welcome Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm">
          <div>
            <span className="text-xs font-semibold text-brand-600 tracking-wider uppercase">
              Precision Agriculture Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mt-1">
              Welcome back, {user?.name || "Partner"} 👋
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Your 1,240 acres across 3 sectors are reporting nominal parameters.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleTriggerIrrigation}
              disabled={irrigationRunning}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-700 hover:bg-forest-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-50 shadow-sm"
            >
              {irrigationRunning ? (
                <>
                  <RotateCw size={16} className="animate-spin" /> Running Cycle...
                </>
              ) : (
                <>
                  <Play size={16} /> Auto-Irrigate Sector B
                </>
              )}
            </button>
            <button
              onClick={handleGenerateReport}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-[0.98] text-neutral-950 text-sm font-bold transition-all shadow-sm"
            >
              <FileText size={16} /> Export Harvest Intel
            </button>
          </div>
        </div>

        {/* 4 Key Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm"
          >
            <div className="flex items-center justify-between text-neutral-500 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Managed Land</span>
              <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
                <Sprout size={18} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-neutral-950">1,240 <span className="text-base font-normal text-neutral-500">Acres</span></div>
            <div className="flex items-center gap-1.5 text-xs text-forest-600 font-semibold mt-2">
              <TrendingUp size={14} /> +120 acres added this season
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm"
          >
            <div className="flex items-center justify-between text-neutral-500 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Mean Soil Moisture</span>
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Droplets size={18} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-neutral-950">38.4%</div>
            <div className="flex items-center gap-1.5 text-xs text-forest-600 font-semibold mt-2">
              <CheckCircle2 size={14} /> Within optimal growth index (35-45%)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm"
          >
            <div className="flex items-center justify-between text-neutral-500 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">Water Conservation</span>
              <div className="w-8 h-8 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-neutral-950">34.2% Saved</div>
            <div className="flex items-center gap-1.5 text-xs text-forest-600 font-semibold mt-2">
              <TrendingUp size={14} /> vs regional traditional irrigation
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm"
          >
            <div className="flex items-center justify-between text-neutral-500 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider">IoT Sensor Nodes</span>
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Activity size={18} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-neutral-950">42 / 44 Online</div>
            <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mt-2">
              <AlertTriangle size={14} /> 2 nodes scheduled for battery swap
            </div>
          </motion.div>
        </div>

        {/* 2-Column Split: Field Telemetry + Microclimate */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Field Status Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-neutral-950">Active Field Sectors</h2>
              <span className="text-xs text-neutral-500 font-medium">Auto-refreshed 2m ago</span>
            </div>

            <div className="space-y-3">
              {FIELDS.map((field) => (
                <div
                  key={field.id}
                  className="bg-white p-5 rounded-2xl border border-neutral-200/80 hover:border-brand-500/40 transition-all shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-3 rounded-xl ${field.status === "healthy" ? "bg-forest-50 text-forest-700 border border-forest-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                      <Sprout size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-neutral-950 text-base">{field.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${field.status === "healthy" ? "bg-forest-100 text-forest-800" : "bg-amber-100 text-amber-800"}`}>
                          {field.status}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 mt-0.5 flex items-center gap-2">
                        <span>{field.crop}</span> • <span>{field.size}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-neutral-400">Moisture</p>
                      <p className="text-sm font-bold text-neutral-900">{field.moisture}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs text-neutral-400">Health Score</p>
                      <p className="text-sm font-bold text-forest-700">{field.health}%</p>
                    </div>
                    <button
                      onClick={() => toast.info(`Viewing telemetry details for ${field.name}`)}
                      className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                      title="Inspect field"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Local Weather & Microclimate */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-neutral-950">Field Microclimate</h2>
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-6 rounded-2xl shadow-md border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-400" />
                  <span className="text-xs font-semibold text-white/70">Central Valley Station</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-medium border border-brand-500/30">
                  Ideal Growing Temp
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-5xl font-extrabold tracking-tight font-sans">24°C</div>
                  <p className="text-sm text-white/70 mt-1">Partly Cloudy • High 28° / Low 16°</p>
                </div>
                <Sun size={48} className="text-brand-400 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <Droplets size={16} className="text-blue-400" />
                  <div>
                    <p className="text-[11px] text-white/50">Humidity</p>
                    <p className="text-sm font-bold text-white">58%</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Wind size={16} className="text-teal-400" />
                  <div>
                    <p className="text-[11px] text-white/50">Wind Speed</p>
                    <p className="text-sm font-bold text-white">11 km/h NW</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Thermometer size={16} className="text-amber-400" />
                  <div>
                    <p className="text-[11px] text-white/50">Soil Temp</p>
                    <p className="text-sm font-bold text-white">19.5°C</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Sun size={16} className="text-yellow-400" />
                  <div>
                    <p className="text-[11px] text-white/50">Solar Rad</p>
                    <p className="text-sm font-bold text-white">620 W/m²</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
