import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot, Phone, Mail, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! Welcome to Zaphire Decor in Sacramento. I'm your virtual event concierge. How can I assist with your wedding coordination, event decor, or custom apparel & gifts today?",
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What coordination services do you offer?',
    'Tell me about your event decor & backdrops',
    'How do custom apparel & shirt orders work?',
    'What areas do you serve around Sacramento?',
    'How can I get a quote?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Knowledge base fallback function for instant, reliable answers
  const getKnowledgeBaseResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('quote') || q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('hire')) {
      return "To request a customized quote, please scroll down to our 'Request a Quote' form on this page or call us directly at (916) 524-9415. Every wedding, celebration, and custom order is priced based on your unique vision, guest count, and timeline requirements.";
    }

    if (q.includes('wedding') || q.includes('bride') || q.includes('groom') || q.includes('coordinat')) {
      return "Zaphire Decor provides comprehensive wedding coordinating and planning! We handle everything from detailed master timelines, rehearsal management, and vendor arrivals to ceremony transitions and reception coordination so you can enjoy your day stress-free.";
    }

    if (q.includes('decor') || q.includes('backdrop') || q.includes('table') || q.includes('balloon') || q.includes('centerpiece')) {
      return "Our event decor services include luxury tablescapes, organic balloon installations, ceremonial backdrops, floral accents, custom acrylic welcome signage, and tabletop styling. We craft custom color schemes that match your aesthetic!";
    }

    if (q.includes('apparel') || q.includes('shirt') || q.includes('robe') || q.includes('clothing') || q.includes('jacket')) {
      return "We specialize in personalized celebration apparel! We create custom shirts, bridal party robes, hoodies, and jackets for weddings, bridal showers, milestone birthdays, family reunions, and team gatherings with premium lettering and finishes.";
    }

    if (q.includes('product') || q.includes('gift') || q.includes('favor') || q.includes('sign') || q.includes('acrylic')) {
      return "We design custom-crafted items including personalized gift boxes, laser-cut acrylic welcome signs, custom drinkware, personalized table numbers, cake toppers, and bespoke guest favors for your event.";
    }

    if (q.includes('sacramento') || q.includes('location') || q.includes('area') || q.includes('travel') || q.includes('where')) {
      return "We are proudly based in Sacramento, CA, and serve the Greater Sacramento region including Roseville, Elk Grove, Folsom, Davis, Rocklin, Granite Bay, and surrounding Northern California destinations.";
    }

    if (q.includes('phone') || q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('reach')) {
      return "You can reach Zaphire Decor directly by calling or texting 916-524-9415, or by emailing decorzaphire@gmail.com. We would love to chat about your upcoming event!";
    }

    return "Thank you for asking! Zaphire Decor is Sacramento's premier event coordination, luxury decor, and custom product studio. Whether you are planning a wedding, milestone party, or need personalized celebration shirts & gifts, we are here to help! Feel free to call us at 916-524-9415 or submit our quote request form.";
  };

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      // Call server-side AI chatbot API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.reply || getKnowledgeBaseResponse(text);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else {
        // Fallback to local intelligent knowledge base
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: 'bot',
              text: getKnowledgeBaseResponse(text),
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        }, 600);
      }
    } catch (err) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: getKnowledgeBaseResponse(text),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 500);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-2.5 px-5 py-3.5 bg-[#0A192F] text-white border border-[#D4AF37]/50 shadow-2xl hover:border-[#D4AF37] hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none cursor-pointer"
          aria-label="Open event assistant chat"
        >
          {/* Animated Gem Icon */}
          <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center text-[#081021] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#081021]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white tracking-wide">
              Event Assistant
            </span>
            <span className="text-[10px] text-[#D4AF37] font-medium tracking-wider">
              Ask about decor & quotes
            </span>
          </div>

          {/* Pulse notification dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex h-3.5 w-3.5 bg-[#D4AF37] border-2 border-[#081021]"></span>
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Zaphire Decor Virtual Assistant"
          className="relative w-[360px] sm:w-[400px] h-[520px] max-h-[85vh] bg-[#0A192F] shadow-2xl border border-white/10 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-6 duration-200"
        >
          {/* Header */}
          <div className="bg-[#081021] text-white p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-[#112240] border border-[#D4AF37]/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-white leading-tight">
                  Zaphire Decor Concierge
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white/60 font-light">Sacramento, CA • Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/50 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Direct Info Strip */}
          <div className="bg-[#050B18] px-4 py-2 border-b border-white/5 flex justify-between items-center text-[11px] text-white/70">
            <a
              href="tel:9165249415"
              className="flex items-center space-x-1 text-[#D4AF37] hover:underline"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>916-524-9415</span>
            </a>
            <a
              href="mailto:decorzaphire@gmail.com"
              className="flex items-center space-x-1 text-white/60 hover:text-white hover:underline"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>decorzaphire@gmail.com</span>
            </a>
          </div>

          {/* Message History List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#081021] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start space-x-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 bg-[#112240] text-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[78%] p-3.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#D4AF37] text-[#081021] font-medium'
                      : 'bg-[#0A192F] text-white/90 border border-white/10'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-[#081021]/60' : 'text-white/40'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 bg-[#D4AF37] text-[#081021] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-white/40 text-xs">
                <div className="w-6 h-6 bg-[#112240] text-[#D4AF37] flex items-center justify-center">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="bg-[#0A192F] border border-white/10 px-3 py-2 flex items-center space-x-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#0A192F] border-t border-white/5 overflow-x-auto whitespace-nowrap flex space-x-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="text-[10px] bg-[#081021] hover:bg-[#112240] hover:text-white text-white/70 px-2.5 py-1 border border-white/10 hover:border-[#D4AF37] flex-shrink-0 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <div className="p-3 bg-[#0A192F] border-t border-white/10 flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about coordination, decor, apparel..."
              className="flex-1 text-xs px-3.5 py-2.5 bg-[#081021] border border-white/10 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white placeholder-white/30"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className="p-2.5 bg-[#D4AF37] text-[#081021] hover:bg-[#C5A059] transition-colors disabled:opacity-30 focus:outline-none cursor-pointer font-bold"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
