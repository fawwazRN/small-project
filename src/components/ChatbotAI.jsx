import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function ChatbotAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Assalamu’alaikum! 👋 Saya Abudzar AI. Ada yang bisa saya bantu seputar pendaftaran, profil dosen, atau keunggulan kampus KITA?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll ke bawah saat ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    const userMessage = { role: "user", text: userText };

    // Update UI dengan pesan user, lalu kosongkan input
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Format pesan untuk dikirim ke backend (format standar Groq/OpenAI)
      const historyForGroq = [
        ...messages.map((m) => ({
          role: m.role === "ai" ? "assistant" : "user",
          content: m.text,
        })),
        { role: "user", content: userText },
      ];

      // Panggil API Vercel (Relative path)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyForGroq }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      } else {
        throw new Error(data.error || "Gagal menghubungi server");
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Maaf, server AI sedang sibuk. Coba tanyakan lagi sebentar lagi ya.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-[#0B2B89] hover:bg-[#081d5e] shadow-blue-900/30 shadow-lg shadow-xl rounded-full w-16 h-16 text-white">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}>
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}>
              {/* Titik hijau indikator online */}
              <span className="top-3 right-3 absolute bg-[#83C41F] border-[#0B2B89] border-2 rounded-full w-3 h-3"></span>
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="right-6 bottom-24 z-50 fixed flex flex-col bg-white shadow-2xl border border-slate-100 rounded-3xl w-[calc(100%-3rem)] max-w-md h-[600px] overflow-hidden">
            {/* Header Chat */}
            <div className="flex items-center gap-3 bg-[#0B2B89] p-4 text-white">
              <div className="relative flex justify-center items-center bg-[#83C41F] rounded-full w-10 h-10">
                <Bot size={20} />
                <span className="right-0 bottom-0 absolute bg-green-400 border-[#0B2B89] border-2 rounded-full w-3 h-3"></span>
              </div>
              <div>
                <h3 className="font-bold">Abudzar AI</h3>
                <p className="text-blue-200 text-xs">
                  Powered by Groq • Online
                </p>
              </div>
            </div>

            {/* Body Chat (Messages) */}
            <div className="flex-1 space-y-4 bg-slate-50 p-4 overflow-y-auto">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "ai" && (
                    <div className="flex justify-center items-center bg-[#0B2B89] rounded-full w-8 h-8 shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl max-w-[75%] whitespace-pre-line text-sm ${
                      msg.role === "user"
                        ? "bg-[#83C41F] text-white rounded-br-none font-medium"
                        : "bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none"
                    }`}>
                    {msg.text}
                  </div>

                  {msg.role === "user" && (
                    <div className="flex justify-center items-center bg-slate-200 rounded-full w-8 h-8 shrink-0">
                      <User size={16} className="text-slate-600" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start gap-2">
                  <div className="flex justify-center items-center bg-[#0B2B89] rounded-full w-8 h-8 shrink-0">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-white shadow-sm p-4 border border-slate-100 rounded-2xl rounded-bl-none">
                    <span className="bg-slate-300 rounded-full w-2 h-2 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="bg-slate-300 rounded-full w-2 h-2 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="bg-slate-300 rounded-full w-2 h-2 animate-bounce"></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 bg-white p-3 border-slate-100 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pertanyaanmu..."
                className="flex-1 bg-slate-100 px-4 py-3 rounded-full focus:outline-none focus:ring-[#83C41F] focus:ring-2 text-slate-800 text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex justify-center items-center bg-[#0B2B89] hover:bg-[#081d5e] rounded-full w-12 h-12 text-white transition-colors">
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
