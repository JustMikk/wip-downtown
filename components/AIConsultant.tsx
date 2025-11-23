import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToStylist } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello, darling. I am Aura, your virtual stylist. How can I help you illuminate your natural beauty today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToStylist(messages, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm feeling a bit disconnected. Try again?", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-espresso text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-2"
      >
        <Sparkles size={24} className="animate-pulse-slow" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-sans text-sm">
          Ask Aura
        </span>
      </button>
    );
  }

  return (
    <div className={`fixed right-6 z-40 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col ${
      isMinimized ? 'bottom-6 w-72 h-14' : 'bottom-6 w-[90vw] md:w-[400px] h-[500px]'
    }`}>
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-rosewater to-white p-4 flex justify-between items-center cursor-pointer border-b border-gray-100"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-mauve flex items-center justify-center text-white">
            <Sparkles size={16} />
          </div>
          <div>
             <h3 className="font-serif text-espresso font-bold">Aura</h3>
             {!isMinimized && <p className="text-[10px] text-slate uppercase tracking-wider">Virtual Stylist</p>}
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}>
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-alabaster">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-espresso text-white rounded-br-none' 
                    : 'bg-white border border-gray-100 text-slate rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate/40 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate/40 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-slate/40 rounded-full animate-bounce delay-200"></span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about cuts, color, or care..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-mauve text-slate"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-softgold text-white rounded-full hover:bg-goldhover disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIConsultant;