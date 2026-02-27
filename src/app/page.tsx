import Link from "next/link";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import FeaturedPets from "@/components/dashboard/FeaturedPets";
import AdoptionStats from "@/components/dashboard/AdoptionStats";
import ApplicationProgress from "@/components/dashboard/ApplicationProgress";
import SupportCard from "@/components/dashboard/SupportCard";
import SuccessStories from "@/components/dashboard/SuccessStories";

const coreFeatures = [
  {
    emoji: "🐾",
    title: "Browse & Filter Pets",
    desc: "Search our database with filters for type, age, size & gender to find your perfect match.",
    href: "/pets",
    cta: "Browse Pets",
    bg: "bg-card-mint",
  },
  {
    emoji: "📋",
    title: "Adoption Request",
    desc: "Submit your adoption application with personal info, living situation & pet care plans.",
    href: "/adopt/1",
    cta: "Apply Now",
    bg: "bg-card-lavender",
  },
  {
    emoji: "📖",
    title: "Pet Details",
    desc: "View detailed profiles with photos, health info, compatibility & shelter contact.",
    href: "/pets/1",
    cta: "View Example",
    bg: "bg-card-peach",
  },
  {
    emoji: "📚",
    title: "Adoption Guidelines",
    desc: "Learn about eligibility, fees, home preparation & the step-by-step adoption process.",
    href: "/how-it-works",
    cta: "Read Guidelines",
    bg: "bg-softYellow/50",
  },
  {
    emoji: "📬",
    title: "Contact Shelter",
    desc: "Reach out to our partner shelters in Mumbai, Delhi & Bengaluru for any queries.",
    href: "/contact",
    cta: "Contact Us",
    bg: "bg-coral/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <WelcomeCard />

      {/* ===== CORE FEATURES HIGHLIGHT ===== */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-textPrimary">
            🌟 What You Can Do on Pawdopt
          </h2>
          <p className="text-textSec text-sm mt-1">
            Everything you need to adopt your new best friend — all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {coreFeatures.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className={`${f.bg} rounded-3xl p-5 text-center group hover:shadow-float hover:-translate-y-1 transition-all duration-200 block border-2 border-transparent hover:border-coral/30`}
            >
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="font-bold text-textPrimary text-sm mb-1.5">{f.title}</h3>
              <p className="text-textSec text-xs leading-relaxed mb-3">{f.desc}</p>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-coral text-xs font-semibold group-hover:bg-coral group-hover:text-white transition-colors">
                {f.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats & Progress Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdoptionStats />
        <ApplicationProgress />
      </div>

      {/* Featured Pets */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-textPrimary">
            🐾 Featured Pets Looking for Love
          </h2>
          <Link href="/pets" className="text-coral text-sm font-semibold hover:underline">
            View All Pets →
          </Link>
        </div>
        <FeaturedPets />
      </section>

      {/* Support & Success Stories Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SupportCard />
        <SuccessStories />
      </div>

      {/* Quick Links Bar */}
      <div className="card bg-card-lavender text-center">
        <h3 className="text-lg font-bold text-purple-800 mb-3">Quick Links</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/pets" className="btn-primary text-sm px-5 py-2">🐾 Browse Pets</Link>
          <Link href="/adopt/1" className="btn-primary text-sm px-5 py-2">📋 Adoption Form</Link>
          <Link href="/how-it-works" className="btn-secondary text-sm px-5 py-2">📚 Guidelines</Link>
          <Link href="/contact" className="btn-secondary text-sm px-5 py-2">📬 Contact Shelter</Link>
        </div>
      </div>
    </div>
  );
}
