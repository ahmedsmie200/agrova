import { Link } from "react-router-dom";
import { ArrowLeft, Sprout } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6">
        <Sprout size={32} />
      </div>
      <span className="text-sm font-semibold tracking-widest uppercase text-brand-400 mb-2">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Page Not In Our Fields
      </h1>
      <p className="text-neutral-400 max-w-md text-base leading-relaxed mb-8">
        The agricultural plot you are looking for does not exist or has been moved to another quadrant.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-neutral-950 font-bold py-3.5 px-6 rounded-full transition-all text-sm"
      >
        <ArrowLeft size={16} /> Return to Agrova Home
      </Link>
    </div>
  );
}
