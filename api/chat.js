// =========================================================
// PROXY SERVER UNTUK GROQ (Vercel Serverless Function)
// =========================================================
// File ini JALAN DI SERVER Vercel, bukan di browser. Jadi API key
// aman, gak kelihatan sama pengunjung web sama sekali.
//
// Cara pasang:
// 1. Taruh file ini persis di path: api/chat.js (folder "api" di root project)
// 2. Di dashboard Vercel > Settings > Environment Variables, tambahkan:
//      Name: GROQ_API_KEY
//      Value: (API key Groq kamu)
// 3. Deploy. Vercel otomatis mengenali folder /api sebagai serverless function.
// 4. Frontend (ChatbotKita.jsx) cukup panggil fetch("/api/chat", ...) —
//    gak perlu tau API key sama sekali.
// =========================================================

const GROQ_MODEL = "llama-3.3-70b-versatile";

const CAMPUS_CONTEXT = `
Kamu adalah Asisten KITA, chatbot resmi kampus KITA (Kuliah Islam & Takhasus Abudzar).
Jawab HANYA berdasarkan informasi di bawah ini, dengan bahasa Indonesia yang ramah, singkat, dan jelas (maksimal 3-4 kalimat per jawaban).
Kalau ada pertanyaan yang jawabannya tidak ada di informasi ini, katakan dengan jujur bahwa kamu belum punya info itu dan sarankan menghubungi tim admisi lewat WhatsApp.

PROFIL:
KITA adalah kampus yang mencetak generasi pendidik Islam Rabbani — cakap, cerdas, dan cendekia. Program utama: S1 Pendidikan Agama Islam (PAI), Fakultas Syariah & Tarbiyah. Memadukan kedalaman ilmu syar'i dengan kecakapan pedagogi modern. Akreditasi A.

VISI:
Mencetak generasi cendekia yang berkompetisi di tingkat global, memadukan tradisi keilmuan klasik dengan kebutuhan modern, melahirkan pemimpin bermanhaj salaf dan berakhlaq mulia.

MISI:
1. Bahasa & Wawasan Global - menguasai bahasa internasional untuk dakwah dan pendidikan skala global.
2. Teori & Praktik Terpadu - menguasai teori keislaman dan pedagogi modern secara seimbang.
3. Manajemen Profesi - siap memimpin institusi pendidikan Islam.
4. Karakter Rabbani - berwawasan global dengan akhlak mulia.
5. Tri Dharma & Kerjasama - implementasi Tridharma Perguruan Tinggi dan kerja sama strategis.

BIAYA:
Kuliah di KITA sangat terjangkau, ± 15 juta hingga selesai (investasi pendidikan penuh sampai lulus).

BENEFIT:
- Biaya sangat terjangkau (± 15 juta sampai lulus)
- Penempatan kerja (Job Placement) bagi lulusan berkualitas
- Dosen berkualitas, lulusan Timur Tengah & dalam negeri ternama

DOSEN (contoh, bukan daftar lengkap):
- University of Madinah: Dr. Ahmad Al-Madani (Fiqih & Ushul Fiqh), Ustadz Salman Al-Ubaid (Tafsir)
- Imam Muhammad Ibn Sa'ud: Dr. Abdul Rahman (Aqidah & Manhaj)
- UIN Syarif Hidayatullah Jakarta: Dr. H. Ahmad Zaki (Pendidikan Islam), Dr. Hj. Fatimah Az-Zahra (Bahasa Arab)
- Universitas PTIQ: Ustadz Muhammad Thaha (Tahfidz & Qira'at)
- Universitas Negeri: Prof. Dr. Bambang Sutrisno (Psikologi Pendidikan)

OUTPUT LULUSAN:
1. Cakap berbahasa Arab (lisan & tulisan, aktif dan komunikatif)
2. Mahir tilawah dan hafalan Al-Qur'an
3. Menjadi guru progresif, modern, dan berwawasan islami
4. Menguasai pedagogi secara mendalam
5. Kompeten manajerial: mampu menyusun silabus, RPP/modul ajar, dan media pembelajaran

CARA PENDAFTARAN (4 tahap):
1. Isi Formulir pendaftaran online
2. Verifikasi Berkas (proses 1x24 jam)
3. Wawancara dan tes potensi akademik
4. Pengumuman kelulusan seleksi

STATUS PENDAFTARAN:
Gelombang 1 saat ini sudah terisi 65% kuota. Disarankan segera mendaftar.

KONTAK:
Tim admisi siap membantu 24/7 lewat WhatsApp, tersedia lewat tombol "Pendaftaran" di halaman web.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { question, history } = req.body || {};
    if (!question || typeof question !== "string") {
      res.status(400).json({ error: "Pertanyaan kosong" });
      return;
    }

    const messages = [
      { role: "system", content: CAMPUS_CONTEXT },
      ...(Array.isArray(history) ? history : []).map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: String(m.text || ""),
      })),
      { role: "user", content: question },
    ];

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages,
          temperature: 0.4,
          max_tokens: 300,
        }),
      },
    );

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq error:", groqRes.status, errText);
      res.status(502).json({ error: "Groq API error" });
      return;
    }

    const data = await groqRes.json();
    const answer = data?.choices?.[0]?.message?.content || null;

    res.status(200).json({ answer });
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Internal error" });
  }
}
