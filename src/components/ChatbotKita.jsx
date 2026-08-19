import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, GraduationCap, Sparkles } from "lucide-react";

const QUICK_REPLIES = [
  "Apa itu KITA?",
  "Biaya kuliah",
  "Cara daftar",
  "Dosennya siapa?",
];

// =========================================================
// PEMANGGILAN CHATBOT (lewat proxy /api/chat, bukan langsung ke Groq)
// =========================================================
// API key Groq TIDAK ada di file ini sama sekali — disimpan aman di
// server (Vercel Environment Variable), lihat file api/chat.js.
async function callChatbot(question, history) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question,
      history: history.map((m) => ({ role: m.role, text: m.text })),
    }),
  });

  if (!res.ok) {
    throw new Error(`Proxy error: ${res.status}`);
  }

  const data = await res.json();
  return data.answer || FALLBACK_ANSWER;
}

const FALLBACK_ANSWER =
  "Maaf, ada gangguan sebentar. Coba tanya ulang, atau hubungi tim admisi kami lewat tombol Pendaftaran ya.";

export default function ChatbotKita() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Assalamu'alaikum! Saya asisten virtual KITA. Ada yang mau ditanyakan seputar biaya, pendaftaran, dosen, atau prospek kerja?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isTyping]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { role: "user", text: trimmed };
    const historyBeforeThis = messages; // riwayat sebelum pesan ini, dikirim sebagai konteks
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const answer = await callChatbot(trimmed, historyBeforeThis);
      setMessages((prev) => [...prev, { role: "bot", text: answer }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: FALLBACK_ANSWER }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* === TOMBOL FLOATING === */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="right-6 bottom-6 z-50 fixed flex justify-center items-center bg-[#83C41F] hover:bg-[#72ab1a] shadow-green-600/30 shadow-xl rounded-full w-16 h-16 text-white transition-colors"
        aria-label="Buka chat">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}>
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* === PANEL CHAT === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="right-6 bottom-24 z-50 fixed flex flex-col bg-white shadow-2xl border border-slate-100 rounded-3xl w-[calc(100vw-3rem)] max-w-sm h-[520px] overflow-hidden">
            {/* HEADER */}
            <div className="relative flex items-center gap-3 bg-[#0B2B89] p-5 overflow-hidden text-white">
              <div className="top-0 right-0 absolute bg-[#83C41F]/20 blur-2xl rounded-full w-24 h-24 -translate-y-1/2 translate-x-1/2"></div>
              <div className="z-10 flex justify-center items-center bg-[#83C41F] rounded-2xl w-11 h-11 shrink-0">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div className="z-10">
                <p className="font-extrabold text-base leading-tight">
                  Asisten KITA
                </p>
                <p className="flex items-center gap-1 text-blue-200/80 text-xs">
                  <Sparkles size={11} className="text-[#83C41F]" />
                  Tanya seputar kampus
                </p>
              </div>
            </div>

            {/* PESAN */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 bg-slate-50 p-4 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#0B2B89] text-white rounded-br-sm"
                        : "bg-white text-slate-700 border border-slate-100 rounded-bl-sm"
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_REPLIES.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      className="bg-white hover:bg-[#83C41F] px-3 py-1.5 border border-slate-200 hover:border-[#83C41F] rounded-full font-medium text-[#0B2B89] hover:text-white text-xs transition-colors">
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1 bg-white px-4 py-3 border border-slate-100 rounded-2xl rounded-bl-sm">
                    <span className="bg-slate-300 rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="bg-slate-300 rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="bg-slate-300 rounded-full w-1.5 h-1.5 animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 bg-white p-3 border-slate-100 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pertanyaan..."
                disabled={isTyping}
                className="flex-1 bg-slate-50 disabled:opacity-60 px-4 py-2.5 rounded-full outline-none focus:ring-[#83C41F] focus:ring-2 text-sm"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="flex justify-center items-center bg-[#83C41F] hover:bg-[#72ab1a] disabled:opacity-60 rounded-full w-10 h-10 text-white transition-colors shrink-0">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
