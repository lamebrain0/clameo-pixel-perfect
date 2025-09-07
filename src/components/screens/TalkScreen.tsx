import { useState } from "react";
import { Send, Mic, Bot, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TalkScreen = () => {
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean, timestamp: string}>>([]);
  const [inputText, setInputText] = useState("");
  const [isResearching, setIsResearching] = useState(false);

  const suggestedQuestions = [
    "What insurance do I need?",
    "How to file a claim?",
    "Compare health plans",
    "Life insurance benefits",
    "Premium calculation help",
    "Policy renewal process"
  ];

  const handleSendMessage = async (text: string) => {
    const userMessage = {
      id: Date.now(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsResearching(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `I understand you're asking about "${text}". Based on my analysis, here's what I recommend: This is a comprehensive topic that requires personalized advice. I can help you explore different options and find the best solution for your specific needs.`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsResearching(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm pt-12 pb-6 border-b border-white/10">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white text-lg font-medium">Akhil</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-background font-bold">👤</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              <Bot className="w-6 h-6 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-white text-2xl font-bold">AI Assistant</h1>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-white/80 text-sm flex items-center gap-1">
                <Zap className="w-3 h-3 text-blue-400" />
                Ask me anything about insurance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {messages.length === 0 ? (
          /* Welcome Screen */
          <div className="flex-1 px-6 py-8 relative z-10">
            <div className="text-center mb-8">
              <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                <Bot className="w-10 h-10 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-ping"></div>
              </div>
              <h2 className="text-white text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                Hi! I'm your insurance assistant
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </h2>
              <p className="text-white/70 text-sm">
                Ask me questions about insurance, claims, or policies
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-white/80 font-medium text-sm mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                Suggested questions:
              </p>
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white h-auto py-4 px-4 transition-all duration-300 hover:scale-105"
                  onClick={() => handleSendMessage(question)}
                >
                  <span className="text-sm">{question}</span>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto relative z-10">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={cn(
                    "max-w-[80%] p-4 rounded-2xl backdrop-blur-sm",
                    message.isUser
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-md"
                      : "bg-white/10 border border-white/20 text-white rounded-bl-md"
                  )}
                >
                  <p className={cn(
                    "text-sm leading-relaxed",
                    message.isUser ? "text-white" : "text-white"
                  )}>
                    {message.text}
                  </p>
                  <p className={cn(
                    "text-xs mt-2",
                    message.isUser ? "text-white/70" : "text-white/70"
                  )}>
                    {message.timestamp}
                  </p>
                </div>

                {message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">👤</span>
                  </div>
                )}
              </div>
            ))}

            {isResearching && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20">
                  <Bot className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl rounded-bl-md p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-white text-sm font-medium">Researching...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input Area */}
        <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything about insurance..."
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/60"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && inputText.trim()) {
                    handleSendMessage(inputText);
                  }
                }}
                disabled={isResearching}
              />
            </div>
            
            <Button
              size="icon"
              className="rounded-full h-12 w-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
              onClick={() => inputText.trim() && handleSendMessage(inputText)}
              disabled={!inputText.trim() || isResearching}
            >
              <Send className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="rounded-full h-12 w-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Mic className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkScreen;