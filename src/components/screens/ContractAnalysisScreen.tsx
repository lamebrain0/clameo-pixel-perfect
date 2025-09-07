import { useState } from "react";
import { Upload, FileText, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ContractAnalysisScreen = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisResult({
          riskLevel: "medium",
          greyAreas: [
            "Coverage exclusions not clearly defined",
            "Premium adjustment clause unclear",
            "Claim processing timeline vague"
          ],
          dangerAreas: [
            "No coverage for pre-existing conditions",
            "High deductible amount"
          ],
          goodAreas: [
            "Comprehensive medical coverage",
            "24/7 claim support",
            "Quick settlement process"
          ]
        });
      }, 3000);
    }
  };

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
              <span className="text-white text-lg font-medium">Clameo</span>
            </div>
            <div className="w-10 h-10 bg-warning-yellow rounded-full flex items-center justify-center">
              <span className="text-background font-bold">👤</span>
            </div>
          </div>

          <h1 className="text-white text-2xl font-bold mb-2">Contract Analysis</h1>
          <p className="text-white/80 text-sm">
            Upload your insurance contracts for AI-powered analysis
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-6 pb-6">
        {!uploadedFile ? (
          /* Upload Section */
          <Card className="bg-white border-border p-8 rounded-2xl shadow-card">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-10 h-10 text-primary" />
              </div>
              
              <div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">
                  Upload Insurance Contract
                </h3>
                <p className="text-gray-600 text-sm">
                  Drag and drop your contract or click to browse
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-primary transition-colors">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <FileText className="w-12 h-12 text-gray-400" />
                  <div className="text-center">
                    <p className="text-gray-600 font-medium">Choose a file</p>
                    <p className="text-gray-500 text-sm mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs text-gray-600">Secure Analysis</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs text-gray-600">AI Powered</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                  </div>
                  <p className="text-xs text-gray-600">Risk Detection</p>
                </div>
              </div>
            </div>
          </Card>
        ) : isAnalyzing ? (
          /* Analyzing State */
          <Card className="bg-white border-border p-8 rounded-2xl shadow-card">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <FileText className="w-10 h-10 text-primary animate-bounce" />
              </div>
              
              <div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">
                  Analyzing Contract
                </h3>
                <p className="text-gray-600 text-sm">
                  AI is reviewing {uploadedFile.name}...
                </p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
              </div>
            </div>
          </Card>
        ) : (
          /* Analysis Results */
          <div className="space-y-4">
            {/* File Info */}
            <Card className="bg-white border-border p-4 rounded-2xl shadow-card">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{uploadedFile.name}</h3>
                  <p className="text-sm text-gray-600">Analysis completed</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setUploadedFile(null);
                    setAnalysisResult(null);
                  }}
                >
                  Upload New
                </Button>
              </div>
            </Card>

            {/* Risk Level */}
            <Card className="bg-white border-border p-6 rounded-2xl shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "w-4 h-4 rounded-full",
                  analysisResult?.riskLevel === "high" && "bg-red-500",
                  analysisResult?.riskLevel === "medium" && "bg-yellow-500",
                  analysisResult?.riskLevel === "low" && "bg-green-500"
                )} />
                <h3 className="font-semibold text-gray-900">
                  Risk Level: {analysisResult?.riskLevel?.toUpperCase()}
                </h3>
              </div>
            </Card>

            {/* Danger Areas */}
            <Card className="bg-red-50 border-red-200 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-900">Danger Areas</h3>
              </div>
              <div className="space-y-2">
                {analysisResult?.dangerAreas?.map((area: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-red-800 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Grey Areas */}
            <Card className="bg-yellow-50 border-yellow-200 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-yellow-900">Grey Areas</h3>
              </div>
              <div className="space-y-2">
                {analysisResult?.greyAreas?.map((area: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Good Areas */}
            <Card className="bg-green-50 border-green-200 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-green-900">Strong Points</h3>
              </div>
              <div className="space-y-2">
                {analysisResult?.goodAreas?.map((area: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-green-800 text-sm">{area}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractAnalysisScreen;