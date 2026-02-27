import Link from "next/link";

export default function WelcomeCard() {
  return (
    <div className="rounded-3xl bg-card-lavender p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left side */}
      <div className="flex items-center gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-mint flex items-center justify-center text-3xl ring-4 ring-white shadow-lg">
          🐶
        </div>

        <div>
          <h1 className="text-2xl font-bold text-textPrimary">
            Welcome to Pawdopt 🐶
          </h1>
          <p className="text-textSec mt-1">
            India&apos;s trusted pet adoption platform — find your new best friend today!
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="badge badge-mint">🐾 1,248 Pets Listed</span>
            <span className="badge badge-lavender">🏠 50+ Shelters</span>
            <span className="badge bg-success/30 text-green-700">✓ 892 Adopted</span>
            <span className="badge bg-warning/30 text-amber-700">📍 Pan India</span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <Link href="/pets" className="btn-primary whitespace-nowrap">
        🐾 Browse Pets
      </Link>
    </div>
  );
}
