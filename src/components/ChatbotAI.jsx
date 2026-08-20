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
