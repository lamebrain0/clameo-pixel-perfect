import { useState } from "react";
import { Send, Mic, Bot } from "lucide-react";
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
    <div className="bg-background min-h-screen flex flex-col">
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

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">AI Assistant</h1>
              <p className="text-white/80 text-sm">Ask me anything about insurance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {messages.length === 0 ? (
          /* Welcome Screen */
          <div className="flex-1 px-6 py-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-gray-900 text-xl font-semibold mb-2">
                Hi! I'm your insurance assistant
              </h2>
              <p className="text-gray-600 text-sm">
                Ask me questions about insurance, claims, or policies
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 font-medium text-sm mb-3">Suggested questions:</p>
              {suggestedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left bg-white border-gray-200 hover:bg-gray-50 h-auto py-4 px-4"
                  onClick={() => handleSendMessage(question)}
                >
                  <span className="text-sm">{question}</span>
                </Button>
              ))}
            </div>
          </div>
        ) : (
          /* Chat Messages */
          <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.isUser ? "justify-end" : "justify-start"
                )}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                
                <div
                  className={cn(
                    "max-w-[80%] p-4 rounded-2xl",
                    message.isUser
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-white border border-gray-200 rounded-bl-md"
                  )}
                >
                  <p className={cn(
                    "text-sm leading-relaxed",
                    message.isUser ? "text-white" : "text-gray-900"
                  )}>
                    {message.text}
                  </p>
                  <p className={cn(
                    "text-xs mt-2",
                    message.isUser ? "text-white/70" : "text-gray-500"
                  )}>
                    {message.timestamp}
                  </p>
                </div>

                {message.isUser && (
                  <div className="w-8 h-8 bg-warning-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-background font-bold text-sm">👤</span>
                  </div>
                )}
              </div>
            ))}

            {isResearching && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-primary text-sm font-medium">Researching...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input Area */}
        <div className="p-6 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="rounded-full h-12 w-12 bg-primary hover:bg-primary/90"
              onClick={() => inputText.trim() && handleSendMessage(inputText)}
              disabled={!inputText.trim() || isResearching}
            >
              <Send className="w-5 h-5" />
            </Button>
            
            <Button
              size="icon"
              variant="outline"
              className="rounded-full h-12 w-12 border-gray-300"
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