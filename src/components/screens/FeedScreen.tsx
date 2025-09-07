import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";

const FeedScreen = () => {
  const feedItems = [
    {
      id: 1,
      type: "article",
      title: "5 Ways to Reduce Your Health Insurance Premium",
      excerpt: "Learn practical tips to save money on your health insurance without compromising coverage.",
      author: "Clameo Insurance",
      time: "2 hours ago",
      likes: 23,
      comments: 5,
      image: "💡",
    },
    {
      id: 2,
      type: "update",
      title: "New Policy Updates for 2024",
      excerpt: "Important changes in insurance regulations that affect your policies. Stay informed.",
      author: "Regulatory Updates",
      time: "5 hours ago",
      likes: 18,
      comments: 3,
      image: "📋",
    },
    {
      id: 3,
      type: "tip",
      title: "Claim Settlement Process Simplified",
      excerpt: "Step-by-step guide to filing insurance claims successfully and getting faster settlements.",
      author: "Claims Expert",
      time: "1 day ago",
      likes: 42,
      comments: 12,
      image: "🎯",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-6">
        <div className="px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white text-lg font-medium">Clameo</span>
            </div>
            <div className="w-10 h-10 bg-warning-yellow rounded-full flex items-center justify-center">
              <span className="text-background font-bold">👤</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="px-6 -mt-3 space-y-4 pb-6">
        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {["All", "Tips", "Updates", "Claims", "Health", "Life"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={`whitespace-nowrap rounded-full ${
                category === "All" 
                  ? "bg-primary text-white" 
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Feed Items */}
        <div className="space-y-4">
          {feedItems.map((item) => (
            <Card key={item.id} className="bg-white border-gray-200 p-6 rounded-2xl shadow-card">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{item.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold text-lg leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{item.author}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{item.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-4">
          <Button variant="outline" className="bg-white text-gray-600 border-gray-200 hover:bg-gray-50">
            Load more articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedScreen;