import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "Bella Found Her Forever Home!",
    preview: "After 6 months in the shelter, Bella was adopted by the Sharma family...",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Charlie's Journey",
    preview: "From a stray on the streets to the most pampered pup in town...",
    image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=200&h=200&fit=crop",
  },
];

export default function SuccessStories() {
  return (
    <div className="card">
      <h3 className="text-lg font-bold text-textPrimary mb-4">
        🌈 Success Stories
      </h3>

      <div className="space-y-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-lavender/10 transition-colors"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-textPrimary text-sm truncate">
                {story.title}
              </h4>
              <p className="text-xs text-textSec line-clamp-2 mt-1">
                {story.preview}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/stories"
        className="block text-center text-sm text-coral font-medium mt-4 hover:underline"
      >
        Read More Stories →
      </Link>
    </div>
  );
}
