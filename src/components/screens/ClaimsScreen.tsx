import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ClaimsScreen = () => {
  const assistanceSteps = [
    {
      number: 1,
      title: "Share your situation and policy details",
      completed: false,
    },
    {
      number: 2,
      title: "We generate a plan to assist you",
      completed: false,
    },
    {
      number: 3,
      title: "We contact the network provider and insurer",
      completed: false,
    },
    {
      number: 4,
      title: "We send regular updates until you receive the money in your account",
      completed: false,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-6">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
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

      <div className="px-6 -mt-3 space-y-6">
        {/* New Claim Card */}
        <Card className="bg-white border-gray-200 p-6 rounded-2xl shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-900 text-lg font-semibold mb-1">New Claim</h2>
              <p className="text-gray-600 text-sm">Initiate a new claim request</p>
            </div>
            <Button size="icon" className="bg-primary hover:bg-primary/90 rounded-full">
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* How Robin Can Assist Card */}
        <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 p-6 rounded-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 text-lg font-semibold mb-1">How Robin Can Assist You?</h3>
            </div>
            <Button variant="ghost" size="icon" className="text-orange-500 hover:bg-orange-100">
              <span className="text-lg">⚡</span>
            </Button>
          </div>

          <div className="space-y-4">
            {assistanceSteps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed pt-1">{step.title}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Track Record Section */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-semibold">Our Track Record</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-secondary/80 backdrop-blur-sm border-border/20 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <div className="space-y-1">
                <p className="text-white text-2xl font-bold">98%</p>
                <p className="text-white/70 text-sm">Success Rate</p>
              </div>
            </Card>

            <Card className="bg-secondary/80 backdrop-blur-sm border-border/20 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="space-y-1">
                <p className="text-white text-2xl font-bold">7 Days</p>
                <p className="text-white/70 text-sm">Avg Settlement</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="space-y-4 pb-6">
          <h3 className="text-white text-lg font-semibold">Recent Claims</h3>
          
          <Card className="bg-white border-gray-200 p-4 rounded-xl">
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">📄</span>
              </div>
              <h4 className="text-gray-700 font-medium">No claims yet</h4>
              <p className="text-gray-500 text-sm">Your claim history will appear here</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClaimsScreen;