export default function AdoptionStats() {
  const stats = [
    { label: "Pets Available", value: "1,248", emoji: "🐾" },
    { label: "New Arrivals", value: "34", emoji: "✨" },
    { label: "Happy Adoptions", value: "892", emoji: "💛" },
  ];

  return (
    <div className="card bg-card-mint relative overflow-hidden">
      {/* Paw watermark */}
      <span className="absolute -bottom-8 -right-8 text-[140px] opacity-10 rotate-12">
        🐾
      </span>

      <h3 className="text-lg font-bold text-textPrimary mb-6">
        🌟 Adoption Stats
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl mb-1">{stat.emoji}</div>
            <div className="text-2xl font-bold text-textPrimary">{stat.value}</div>
            <div className="text-xs text-textSec">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
