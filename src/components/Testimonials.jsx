import { MapPin } from "lucide-react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";

const REVIEWS_ROW1 = [
  {
    name: "Leslie Alexander",
    role: "Farm Owner",
    avatar: avatar1,
    text: "This platform helped us grow healthier crops, reduce costs, and make smarter farming decisions every season.",
    location: "Iowa, USA",
    crop: "Corn & Soybeans"
  },
  {
    name: "Darrell Steward",
    role: "Agribusiness Manager",
    avatar: avatar2,
    text: "This platform helped me improve my crop planning and reduce input costs. I can already see better results each season.",
    location: "Saskatchewan, CA",
    crop: "Wheat & Canola"
  },
  {
    name: "Cody Fisher",
    role: "Organic Farmer",
    avatar: avatar1,
    text: "This solution supports sustainable farming without compromising productivity. That's exactly what modern farmers need.",
    location: "California, USA",
    crop: "Organic Vegetables"
  },
  {
    name: "Mark Johnson",
    role: "Crop Specialist",
    avatar: avatar2,
    text: "Agrova transformed how we approach planting seasons. Data-driven insights have made all the difference for our farm.",
    location: "Queensland, AU",
    crop: "Sugarcane"
  },
  {
    name: "Sarah Williams",
    role: "Farm Manager",
    avatar: avatar1,
    text: "The soil analysis tools are incredible. We've reduced fertilizer waste by 30% and improved crop quality significantly.",
    location: "Mato Grosso, BR",
    crop: "Soybeans & Cotton"
  },
];

const REVIEWS_ROW2 = [
  {
    name: "Robert Williamson",
    role: "Generation Farmer",
    avatar: avatar2,
    text: "Agrova transformed the way we manage our yield, lower costs. It's exactly what modern farming needs.",
    location: "Nebraska, USA",
    crop: "Corn & Cattle"
  },
  {
    name: "Jane Cooper",
    role: "Agribusiness Manager",
    avatar: avatar1,
    text: "The precision farming tools helped us reduce water usage by 45% while increasing our harvest. Remarkable technology.",
    location: "Andalusia, ES",
    crop: "Olives & Grapes"
  },
  {
    name: "Guy Hawkins",
    role: "Greenhouse Producer",
    avatar: avatar2,
    text: "Real-time monitoring gives me peace of mind. I can make informed decisions quickly and protect my crops better than ever.",
    location: "Zuid-Holland, NL",
    crop: "Tomatoes"
  },
  {
    name: "Esther Howard",
    role: "Mixed Farm Operator",
    avatar: avatar1,
    text: "This platform helped us grow healthily while reducing costs and improving decisions across our entire operation.",
    location: "Canterbury, NZ",
    crop: "Dairy & Wheat"
  },
  {
    name: "Tom Richards",
    role: "Livestock Farmer",
    avatar: avatar2,
    text: "Switching to Agrova was the best decision we made this year. Our yields are up and our stress is way down.",
    location: "Texas, USA",
    crop: "Sorghum"
  },
];

function ReviewCard({ name, role, avatar, text, location, crop, ariaHidden }) {
  return (
    <div 
      aria-hidden={ariaHidden}
      className="bg-white border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[20px] p-6 pb-5 w-[340px] shrink-0 relative"
    >
      <span className="absolute top-5 right-6 text-[48px] text-neutral-100 font-serif leading-none select-none">
        "
      </span>

      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-11 h-11 rounded-full object-cover border-2 border-white"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-900 m-0">{name}</p>
          <p className="text-xs text-neutral-500 m-0">{role}</p>
        </div>
      </div>

      <p className="text-[13px] text-neutral-700 leading-relaxed mb-5 min-h-[72px]">
        {text}
      </p>

      <div className="flex items-center justify-between border-t border-neutral-200 pt-3.5">
        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
          <MapPin size={13} className="text-neutral-400" />
          <span>{location} &bull; {crop}</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }) {
  const animationDuration = `${reviews.length * 6}s`;
  
  return (
    <div className="overflow-hidden w-full group marquee-row">
      <div 
        className={`flex gap-4 w-max group-hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration }}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={`orig-${i}`} {...r} ariaHidden={false} />
        ))}
        {reviews.map((r, i) => (
          <ReviewCard key={`clone-${i}`} {...r} ariaHidden={true} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-[60px] md:py-[90px] bg-neutral-50 font-sans overflow-hidden">
      <div className="px-5 md:px-[60px] text-center mb-14">
        <span className="inline-block border-[1.5px] border-neutral-300 rounded-full px-4 py-1.5 text-xs text-neutral-600 mb-4">
          Testimonials
        </span>
        <h2 className="font-sans text-[clamp(30px,5vw,42px)] tracking-tight font-bold text-neutral-900 mb-3 leading-tight">
          Trusted by Farmers Worldwide
        </h2>
        <p className="text-sm text-neutral-500 max-w-[460px] mx-auto">
          Hear directly from farmers transforming their fields with smart agriculture.
        </p>
      </div>

      <div className="mb-4">
        <MarqueeRow reviews={REVIEWS_ROW1} reverse={false} />
      </div>

      <div>
        <MarqueeRow reviews={REVIEWS_ROW2} reverse={true} />
      </div>
    </section>
  );
}