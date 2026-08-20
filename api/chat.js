import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
Kamu adalah Abudzar AI, asisten virtual resmi dari Kuliah Islam & Takhasus Abudzar (KITA).
Jawab pertanyaan calon mahasiswa dengan ramah, sopan, dan informatif.

Info Kampus:
- Visi: Mencetak generasi cendekia yang berkompetisi di tingkat global.
- Misi: Menguasai bahasa & wawasan global, teori & praktik terpadu, manajemen profesi pendidikan, karakter Rabbani, dan Tri Dharma.
- Dosen: Lulusan University of Madinah, Imam Saud Riyadh, UIN Jakarta, PTIQ, dll.
- Output Lulusan: Cakap Bahasa Arab, Mahir Tilawah, Guru Progresif, Menguasai Pedagogi, Kompeten Manajerial.
- Filosofi: Cakap, Cerdas, Cendekia.
- Pendaftaran: Isi formulir online -> Verifikasi berkas -> Wawancara -> Pengumuman. Kuota Gelombang 1 sudah terisi 65%.
Jika ditanya di luar konteks kampus, tolak dengan sopan dan arahkan kembali ke topik kampus.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { messages } = req.body;

    // GANTI MODEL DI SINI: dari "llama3-8b-8192" menjadi "llama-3.1-8b-instant"
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.7,
      max_tokens: 1024, // Batasi token agar tidak terlalu lama
    });

    const aiResponse =
      completion.choices[0]?.message?.content ||
      "Maaf, saya tidak bisa menjawab saat ini.";

    res.status(200).json({ reply: aiResponse });
  } catch (error) {
    // Kita buat error log lebih detail
    console.error("Error Groq Detail:", error?.error || error.message);

    // Kirim pesan error spesifik ke frontend
    res.status(500).json({
      error: "Groq API Error",
      detail: error?.error?.message || error.message,
    });
  }
}
