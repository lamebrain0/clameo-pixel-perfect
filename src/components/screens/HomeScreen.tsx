import { ArrowRight, HelpCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-primary min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold">Clameo</h1>
            <p className="text-white/70 text-sm">Welcome back</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <HelpCircle className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6">
        {/* Life Cover Section */}
        <div className="text-center space-y-4">
          <h2 className="text-white text-lg font-medium">Lock your premium</h2>
          <h3 className="text-white text-2xl font-bold">₹1 Crore Life Cover</h3>
        </div>

        {/* Premium Options */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-card border-border/20 p-6 space-y-4 backdrop-blur-sm">
            <div className="space-y-2">
              <div className="inline-flex px-3 py-1 bg-premium-green/20 rounded-full">
                <span className="text-premium-green text-xs font-medium">Premium for a 26-year-old*</span>
              </div>
              <p className="text-white/70 text-sm">starting @</p>
              <div className="space-y-1">
                <span className="text-white text-3xl font-bold">₹735</span>
                <p className="text-white/70 text-sm">/month*</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-card border-border/20 p-6 space-y-4 backdrop-blur-sm">
            <div className="space-y-2">
              <div className="inline-flex px-3 py-1 bg-premium-orange/20 rounded-full">
                <span className="text-premium-orange text-xs font-medium">Premium for a 31-year-old*</span>
              </div>
              <p className="text-white/70 text-sm">starting @</p>
              <div className="space-y-1">
                <span className="text-white text-3xl font-bold">₹979</span>
                <p className="text-white/70 text-sm">/month*</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Savings Banner */}
        <div className="text-center space-y-2">
          <p className="text-white text-sm">
            Buy now to save up to <span className="text-warning-yellow font-semibold">₹87,840**</span>
          </p>
          <p className="text-white/70 text-xs">during policy term</p>
        </div>

        {/* View Plans Button */}
        <Button className="w-full bg-white text-background hover:bg-white/90 text-lg font-semibold py-6 rounded-xl">
          View plans
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Latest Offers Section */}
      <div className="mt-8 px-6 pb-6">
        <div className="bg-white rounded-2xl p-6 space-y-4">
          <h4 className="text-muted-foreground text-sm font-medium">Latest offers</h4>
          
          <Card className="bg-gradient-to-r from-purple-100 to-purple-50 border-purple-200 p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-900 mb-1">Investment Plans</h5>
                <p className="text-gray-700 font-medium">Invest ₹10,000/month</p>
                <p className="text-gray-600 text-sm">Get ₹1 Crore* on maturity</p>
              </div>
              <Button size="icon" className="bg-purple-500 hover:bg-purple-600 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* All Insurance Products */}
        <div className="bg-white rounded-2xl mt-4 p-6">
          <h4 className="text-muted-foreground text-sm font-medium mb-4">All insurance products</h4>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Term Life", icon: "🛡️", discount: "Upto 15% Discount" },
              { name: "Health", icon: "❤️", offer: "FREE Home Visit" },
              { name: "Car", icon: "🚗", discount: "Upto 91% Discount" },
              { name: "Investment", icon: "💰", feature: "In-built Life Cover" },
            ].map((product, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl mx-auto">
                    {product.icon}
                  </div>
                  {product.discount && (
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-lg">
                      {product.discount}
                    </div>
                  )}
                  {product.offer && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-2 py-1 rounded-lg">
                      {product.offer}
                    </div>
                  )}
                  {product.feature && (
                    <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-lg">
                      {product.feature}
                    </div>
                  )}
                </div>
                <p className="text-gray-700 text-sm font-medium">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;