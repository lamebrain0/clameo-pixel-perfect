import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PoliciesScreen = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [registeredCount, setRegisteredCount] = useState(0);

  const tabs = [
    { name: "All", count: 0 },
    { name: "Life", count: 0 },
    { name: "Health", count: 0 },
    { name: "Others", count: 0 },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-8">
        <div className="px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white text-lg font-medium">Claimeo</span>
            </div>
            <div className="w-10 h-10 bg-warning-yellow rounded-full flex items-center justify-center">
              <span className="text-background font-bold">👤</span>
            </div>
          </div>

          {/* No Policies Card */}
          <Card className="bg-secondary/80 backdrop-blur-sm border-border/20 p-4 rounded-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-white font-medium mb-1">No policies stored yet</h3>
              </div>
              <div className="text-4xl">🤷‍♂️</div>
            </div>
          </Card>

          {/* Store Policy Section */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold">Already have existing insurance?</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Store you policies in our app and get free portfolio analysis, 
              recommendations, support services and much more
            </p>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl text-lg font-semibold shadow-premium">
              Store Policy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white flex-1">
        {/* Tab Navigation */}
        <div className="flex items-center gap-4 px-6 py-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeTab === tab.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              <span>{tab.name === "Others" ? "+" : "📄"}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Registered Policies Count */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl font-bold">{registeredCount}</span>
            <span className="text-gray-600">Registered</span>
            <Button variant="ghost" size="icon" className="ml-auto">
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="text-center space-y-4 max-w-xs">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">📋</span>
            </div>
            <h3 className="text-gray-700 font-medium">No policies found</h3>
            <p className="text-gray-500 text-sm">
              Store your existing policies or buy new ones to see them here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesScreen;