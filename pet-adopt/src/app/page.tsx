import WelcomeCard from "@/components/dashboard/WelcomeCard";
import FeaturedPets from "@/components/dashboard/FeaturedPets";
import AdoptionStats from "@/components/dashboard/AdoptionStats";
import ApplicationProgress from "@/components/dashboard/ApplicationProgress";
import SupportCard from "@/components/dashboard/SupportCard";
import SuccessStories from "@/components/dashboard/SuccessStories";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <WelcomeCard />

      {/* Stats & Progress Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdoptionStats />
        <ApplicationProgress />
      </div>

      {/* Featured Pets */}
      <section>
        <h2 className="text-xl font-bold text-textPrimary mb-4">
          🐾 Featured Pets Looking for Love
        </h2>
        <FeaturedPets />
      </section>

      {/* Support & Success Stories Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SupportCard />
        <SuccessStories />
      </div>
    </div>
  );
}
