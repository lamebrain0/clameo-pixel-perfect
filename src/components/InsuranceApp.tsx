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
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

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
        return <HomeScreen onViewPlans={() => setShowQuestionnaire(true)} />;
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
      <div className="flex-1 pb-24">
        {renderScreen()}
      </div>

      {/* Questionnaire Modal */}
      {showQuestionnaire && (
        <QuestionnaireModal onClose={() => setShowQuestionnaire(false)} />
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-center px-6 py-3">
          <div className="flex items-center justify-around w-full max-w-sm">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveScreen(id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all duration-300 p-2 rounded-lg min-w-[50px]",
                id === "talk" && "animate-pulse scale-110 bg-primary/20",
                activeScreen === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-all duration-300", 
                id === "talk" && "animate-bounce text-primary"
              )} />
              <span className="text-[10px] font-medium leading-tight">{label}</span>
            </button>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Questionnaire Modal Component
const QuestionnaireModal = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What type of insurance are you looking for?",
      options: ["Health Insurance", "Life Insurance", "Car Insurance", "Home Insurance"]
    },
    {
      question: "What's your age group?",
      options: ["18-25", "26-35", "36-45", "46-60"]
    },
    {
      question: "What's your preferred premium range?",
      options: ["₹500-1000/month", "₹1000-2000/month", "₹2000-5000/month", "₹5000+/month"]
    },
    {
      question: "Do you have any existing medical conditions?",
      options: ["No", "Minor conditions", "Major conditions", "Prefer not to say"]
    },
    {
      question: "What coverage amount do you prefer?",
      options: ["₹1-5 Lakhs", "₹5-10 Lakhs", "₹10-25 Lakhs", "₹25+ Lakhs"]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // All questions answered, start searching
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 3000);
    }
  };

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full animate-slide-in-right">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Match Found!</h3>
            <p className="text-gray-600 mb-6">We found 3 insurance plans that match your preferences perfectly.</p>
            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-xl text-left">
                <h4 className="font-semibold text-blue-900">Premium Health Plan</h4>
                <p className="text-blue-700 text-sm">₹1,200/month • ₹10L coverage</p>
              </div>
              <div className="bg-green-50 p-3 rounded-xl text-left">
                <h4 className="font-semibold text-green-900">Family Care Plus</h4>
                <p className="text-green-700 text-sm">₹1,800/month • ₹15L coverage</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-xl text-left">
                <h4 className="font-semibold text-purple-900">Complete Protection</h4>
                <p className="text-purple-700 text-sm">₹2,500/month • ₹25L coverage</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold"
            >
              View Detailed Plans
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isSearching) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Searching for you...</h3>
          <p className="text-gray-600 mb-4">Finding the best insurance plans based on your preferences</p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full animate-slide-in-right">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left bg-gray-50 hover:bg-primary/10 rounded-xl transition-colors border-2 border-transparent hover:border-primary/20"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceApp;