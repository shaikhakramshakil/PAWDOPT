import Link from "next/link";

export default function SupportCard() {
  return (
    <div className="card bg-card-peach relative overflow-hidden text-white">
      {/* Decorative illustration placeholder */}
      <span className="absolute -bottom-6 -right-6 text-[120px] opacity-20">
        🐕
      </span>

      <h3 className="text-xl font-bold mb-2">
        Help more paws find homes 💛
      </h3>
      <p className="text-sm opacity-90 mb-6 max-w-xs">
        Your donation helps shelters provide food, medical care, and love to pets in need.
      </p>

      <Link
        href="/donate"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-coral font-semibold shadow-btn hover:scale-105 transition-transform"
      >
        Support a Shelter
      </Link>
    </div>
  );
}
