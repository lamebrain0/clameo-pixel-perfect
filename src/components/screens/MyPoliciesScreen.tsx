import { useState } from "react";
import { ArrowRight, Heart, MessageCircle, Share, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MyPoliciesScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tips", "Updates", "Claims", "Health", "Life"];

  const allContent = {
    Tips: [
      {
        id: 1,
        type: "tip",
        title: "5 Ways to Reduce Your Health Insurance Premium",
        excerpt: "Learn practical tips to save money on your health insurance without compromising coverage.",
        author: "Insurance Expert",
        time: "2 hours ago",
        likes: 23,
        comments: 5,
        image: "💡",
      },
      {
        id: 2,
        type: "tip",
        title: "How to Choose the Right Life Insurance",
        excerpt: "Complete guide to selecting life insurance that fits your family's needs and budget.",
        author: "Financial Advisor",
        time: "1 day ago",
        likes: 42,
        comments: 12,
        image: "🎯",
      }
    ],
    Updates: [
      {
        id: 3,
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
        id: 4,
        type: "update",
        title: "Digital Claims Processing Now Live",
        excerpt: "Experience faster claim settlements with our new digital processing system.",
        author: "Clameo Updates",
        time: "3 days ago",
        likes: 35,
        comments: 8,
        image: "🚀",
      }
    ],
    Claims: [
      {
        id: 5,
        type: "claim",
        title: "Claim Settlement Process Simplified",
        excerpt: "Step-by-step guide to filing insurance claims successfully and getting faster settlements.",
        author: "Claims Expert",
        time: "1 day ago",
        likes: 42,
        comments: 12,
        image: "⚡",
      },
      {
        id: 6,
        type: "claim",
        title: "Common Claim Rejection Reasons",
        excerpt: "Avoid these mistakes to ensure your insurance claims are approved quickly.",
        author: "Claims Specialist",
        time: "2 days ago",
        likes: 28,
        comments: 7,
        image: "⚠️",
      }
    ],
    Health: [
      {
        id: 7,
        type: "health",
        title: "Annual Health Checkup Benefits",
        excerpt: "Maximize your health insurance benefits with preventive care and regular checkups.",
        author: "Health Expert",
        time: "4 hours ago",
        likes: 31,
        comments: 9,
        image: "🏥",
      },
      {
        id: 8,
        type: "health",
        title: "Mental Health Coverage Explained",
        excerpt: "Understanding your mental health benefits and how to access covered services.",
        author: "Wellness Team",
        time: "6 hours ago",
        likes: 25,
        comments: 6,
        image: "🧠",
      }
    ],
    Life: [
      {
        id: 9,
        type: "life",
        title: "Term vs Whole Life Insurance",
        excerpt: "Compare different types of life insurance to make the best choice for your family.",
        author: "Insurance Advisor",
        time: "8 hours ago",
        likes: 19,
        comments: 4,
        image: "🛡️",
      },
      {
        id: 10,
        type: "life",
        title: "Beneficiary Updates Made Easy",
        excerpt: "Learn how to update your life insurance beneficiaries and why it's important.",
        author: "Policy Manager",
        time: "12 hours ago",
        likes: 15,
        comments: 3,
        image: "👨‍👩‍👧‍👦",
      }
    ]
  };

  const getFilteredContent = () => {
    if (activeCategory === "All") {
      return Object.values(allContent).flat();
    }
    return allContent[activeCategory as keyof typeof allContent] || [];
  };

  const filteredContent = getFilteredContent();

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-6">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white text-lg font-medium">Akhil</span>
            </div>
            <div className="w-10 h-10 bg-warning-yellow rounded-full flex items-center justify-center">
              <span className="text-background font-bold">👤</span>
            </div>
          </div>

          <h1 className="text-white text-2xl font-bold mb-2">My Policies</h1>
          <p className="text-white/80 text-sm">
            Insurance insights, tips, and updates
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-3 space-y-4 pb-6">
        {/* Categories */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "whitespace-nowrap rounded-full transition-colors",
                activeCategory === category 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Content Items */}
        <div className="space-y-4">
          {filteredContent.map((item) => (
            <Card key={item.id} className="bg-white border-gray-200 p-6 rounded-2xl shadow-card">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">{item.image}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        item.type === "tip" && "bg-blue-100 text-blue-700",
                        item.type === "update" && "bg-green-100 text-green-700",
                        item.type === "claim" && "bg-orange-100 text-orange-700",
                        item.type === "health" && "bg-purple-100 text-purple-700",
                        item.type === "life" && "bg-red-100 text-red-700"
                      )}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
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
        {filteredContent.length > 0 && (
          <div className="text-center pt-4">
            <Button variant="outline" className="bg-white text-gray-600 border-gray-200 hover:bg-gray-50">
              Load more content
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">📄</span>
            </div>
            <h3 className="text-gray-700 font-medium mb-2">No content found</h3>
            <p className="text-gray-500 text-sm">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPoliciesScreen;