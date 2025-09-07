import { useState } from "react";
import { FileText, Upload, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ClaimSupportScreen = () => {
  const [showNewClaim, setShowNewClaim] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const existingClaims = [
    {
      id: "CLM001",
      type: "Health", 
      amount: "₹15,000",
      status: "Processing",
      date: "Jan 15, 2024",
      description: "Medical treatment claim",
      progress: 60
    },
    {
      id: "CLM002",
      type: "Life",
      amount: "₹5,00,000", 
      status: "Approved",
      date: "Dec 28, 2023",
      description: "Life insurance claim",
      progress: 100
    },
    {
      id: "CLM003",
      type: "Health",
      amount: "₹8,500",
      status: "Under Review",
      date: "Jan 20, 2024", 
      description: "Pharmacy expenses",
      progress: 30
    }
  ];

  const handleSubmitClaim = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNewClaim(false);
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-8">
        <div className="px-6">
          <div className="flex items-center justify-between mb-8">
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

          <h1 className="text-white text-2xl font-bold mb-2">Claim Support</h1>
          <p className="text-white/80 text-sm">
            Get help with your claims and file new ones
          </p>

          {/* Quick Actions */}
          <div className="mt-6 space-y-3">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl text-lg font-semibold shadow-premium"
              onClick={() => setShowNewClaim(true)}
            >
              File New Claim
              <FileText className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Track Claims
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 pb-6 space-y-6">
        {/* Robin Assistant Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 p-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="flex-1">
              <h3 className="text-blue-900 font-semibold text-lg mb-1">Meet Claimeo</h3>
              <p className="text-blue-700 text-sm mb-3">
                Your AI claims assistant is here to help you through the entire process
              </p>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                Start Chat with Clameo
              </Button>
            </div>
          </div>
        </Card>

        {/* Existing Claims */}
        <div>
          <h2 className="text-gray-900 font-semibold text-lg mb-4">Your Claims</h2>
          <div className="space-y-4">
            {existingClaims.map((claim) => (
              <Card key={claim.id} className="bg-white border-border p-6 rounded-2xl shadow-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gray-900 font-semibold">{claim.id}</span>
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-medium",
                          claim.status === "Approved" && "bg-green-100 text-green-700",
                          claim.status === "Processing" && "bg-blue-100 text-blue-700",
                          claim.status === "Under Review" && "bg-orange-100 text-orange-700"
                        )}>
                          {claim.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{claim.description}</p>
                      <p className="text-gray-500 text-xs">{claim.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 font-semibold text-lg">{claim.amount}</p>
                      <p className="text-gray-500 text-xs">{claim.type}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Progress</span>
                      <span className="text-xs text-gray-600">{claim.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          claim.status === "Approved" && "bg-green-500",
                          claim.status === "Processing" && "bg-blue-500",
                          claim.status === "Under Review" && "bg-orange-500"
                        )}
                        style={{ width: `${claim.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Download Receipt
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Claim Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200 p-4 rounded-xl text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-green-900 font-semibold text-lg">5</p>
            <p className="text-green-700 text-xs">Approved</p>
          </Card>
          <Card className="bg-blue-50 border-blue-200 p-4 rounded-xl text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-blue-900 font-semibold text-lg">2</p>
            <p className="text-blue-700 text-xs">Processing</p>
          </Card>
          <Card className="bg-orange-50 border-orange-200 p-4 rounded-xl text-center">
            <AlertCircle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-orange-900 font-semibold text-lg">1</p>
            <p className="text-orange-700 text-xs">Under Review</p>
          </Card>
        </div>
      </div>

      {/* New Claim Modal Overlay */}
      {showNewClaim && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="w-full bg-white rounded-t-3xl p-6 animate-slide-in-right">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            <h2 className="text-xl font-bold text-gray-900 mb-6">File New Claim</h2>
            
            {isSubmitting ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Upload className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <p className="text-gray-600">Submitting your claim...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-24 flex flex-col gap-2">
                    <span className="text-2xl">🏥</span>
                    <span className="text-sm">Health Claim</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col gap-2">
                    <span className="text-2xl">🛡️</span>
                    <span className="text-sm">Life Claim</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Claim Amount
                    </label>
                    <input 
                      type="text" 
                      placeholder="₹0"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea 
                      placeholder="Describe your claim..."
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setShowNewClaim(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleSubmitClaim}
                  >
                    Submit Claim
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaimSupportScreen;
