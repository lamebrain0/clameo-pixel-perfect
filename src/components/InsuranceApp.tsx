import { useState } from "react";
import { Home, FileText, Shield, DollarSign, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import HomeScreen from "./screens/HomeScreen";
import ContractAnalysisScreen from "./screens/ContractAnalysisScreen";
import ClaimSupportScreen from "./screens/ClaimSupportScreen";
import MyPoliciesScreen from "./screens/MyPoliciesScreen";
import TalkScreen from "./screens/TalkScreen";

type Screen = "home" | "my-policies" | "talk" | "contract-analysis" | "claim-support";

const InsuranceApp = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>("home");

  const navItems = [
    { id: "home" as Screen, label: "Home", icon: Home },
    { id: "my-policies" as Screen, label: "My Policies", icon: FileText },
    { id: "talk" as Screen, label: "Talk", icon: MessageCircle },
    { id: "contract-analysis" as Screen, label: "Contract Analysis", icon: Shield },
    { id: "claim-support" as Screen, label: "Claim Support", icon: DollarSign },
  ];

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "my-policies":
        return <MyPoliciesScreen />;
      case "talk":
        return <TalkScreen />;
      case "contract-analysis":
        return <ContractAnalysisScreen />;
      case "claim-support":
        return <ClaimSupportScreen />;
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
                "flex flex-col items-center gap-1 transition-colors p-2 rounded-lg min-w-[50px]",
                id === "talk" && "animate-pulse",
                activeScreen === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", id === "talk" && "animate-bounce")} />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceApp;