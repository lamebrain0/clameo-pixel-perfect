import { useState } from "react";
import { Home, FileText, Shield, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import HomeScreen from "./screens/HomeScreen";
import PoliciesScreen from "./screens/PoliciesScreen";
import ClaimsScreen from "./screens/ClaimsScreen";
import FeedScreen from "./screens/FeedScreen";

type Screen = "home" | "feed" | "policies" | "claims";

const InsuranceApp = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>("home");

  const navItems = [
    { id: "home" as Screen, label: "Home", icon: Home },
    { id: "feed" as Screen, label: "Feed", icon: FileText },
    { id: "policies" as Screen, label: "Policies", icon: Shield },
    { id: "claims" as Screen, label: "Claims", icon: DollarSign },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "feed":
        return <FeedScreen />;
      case "policies":
        return <PoliciesScreen />;
      case "claims":
        return <ClaimsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col max-w-md mx-auto relative overflow-hidden">
      {/* Main content */}
      <div className="flex-1 pb-20">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around px-6 py-3">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveScreen(id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors p-2 rounded-lg min-w-[60px]",
                activeScreen === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceApp;