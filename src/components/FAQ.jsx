import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Wallet,
  CalendarClock,
  ClipboardList,
} from "lucide-react";

/**
 * FAQ Accordion dengan filter kategori.
 * Tujuan: jawab pertanyaan paling umum (biaya, jadwal, syarat) tanpa calon
 * mahasiswa harus chat WA dulu buat hal-hal dasar.
 */

const categories = [
  { id: "biaya", label: "Biaya", icon: Wallet },
  { id: "jadwal", label: "Jadwal & Pendaftaran", icon: CalendarClock },
  { id: "syarat", label: "Syarat & Ketentuan", icon: ClipboardList },
];

const faqs = [
  {
    category: "biaya",
    q: "Berapa total biaya kuliah sampai lulus di KITA?",
    a: "Total biaya kuliah sampai lulus berkisar ± Rp 15.000.000, terdiri dari uang pangkal di semester 1 dan SPP per semester selama 8 semester. Kamu bisa cek rincian lengkapnya di kalkulator biaya di atas.",
  },
  {
    category: "biaya",
    q: "Apakah bisa bayar dengan cicilan bulanan?",
    a: "Bisa. KITA menyediakan opsi pembayaran per semester atau dicicil per bulan selama periode semester berjalan, tanpa biaya tambahan.",
  },
  {
    category: "biaya",
    q: "Apakah ada beasiswa atau keringanan biaya?",
    a: "Ada program keringanan biaya untuk calon mahasiswa dengan kondisi ekonomi tertentu dan penghafal Al-Qur'an. Hubungi tim admisi untuk info lebih lanjut mengenai syarat dan kuotanya.",
  },
  {
    category: "jadwal",
    q: "Kapan pendaftaran gelombang berikutnya dibuka?",
    a: "Pendaftaran dibuka dalam beberapa gelombang setiap tahun. Gelombang 1 saat ini sudah terisi 65% kuota — pantau Instagram @kuliahabudzar untuk info gelombang selanjutnya.",
  },
  {
    category: "jadwal",
    q: "Berapa lama proses seleksi setelah mendaftar?",
    a: "Setelah formulir dan berkas dikirim, tim kami melakukan verifikasi dalam 1x24 jam, dilanjutkan jadwal wawancara yang akan diinformasikan lewat WhatsApp atau email.",
  },
  {
    category: "jadwal",
    q: "Kapan perkuliahan dimulai?",
    a: "Perkuliahan mengikuti kalender akademik tahun ajaran baru. Jadwal pasti akan diinformasikan setelah pengumuman kelulusan seleksi.",
  },
  {
    category: "syarat",
    q: "Apa saja syarat pendaftaran mahasiswa baru?",
    a: "Lulusan SMA/SMK/MA/sederajat atau pondok pesantren, mengisi formulir pendaftaran online, dan melengkapi berkas seperti ijazah/SKL, KTP, KK, dan pas foto.",
  },
  {
    category: "syarat",
    q: "Apakah harus sudah bisa membaca Al-Qur'an dengan lancar?",
    a: "Minimal bisa membaca Al-Qur'an dengan baik. Bagi yang belum lancar, akan ada program tahsin pendampingan di semester awal.",
  },
  {
    category: "syarat",
    q: "Apakah ada tes masuk yang harus dipersiapkan?",
    a: "Ada tes potensi akademik dasar dan wawancara seputar motivasi serta wawasan keislaman. Tidak ada tes tertulis yang rumit — fokusnya melihat kesungguhan calon mahasiswa.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("biaya");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = faqs.filter((f) => f.category === activeCategory);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    setOpenIndex(null); // reset biar gak ada accordion "hantu" kebuka dari kategori lain
  };

  return (
    <section className="relative bg-slate-50 px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Pertanyaan Umum
            </span>
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
          </div>
          <h2 className="mb-4 font-extrabold text-[#0B2B89] text-4xl md:text-6xl capitalize leading-tight">
            Masih <span className="text-[#83C41F]">Ragu?</span> Cek Dulu di Sini
          </h2>
          <p className="font-light text-slate-500 text-lg">
            Jawaban untuk pertanyaan yang paling sering ditanyakan calon
            mahasiswa baru.
          </p>
        </motion.div>

        {/* === FILTER KATEGORI === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide border transition-colors ${
                  active
                    ? "bg-[#0B2B89] border-[#0B2B89] text-white"
                    : "bg-white border-slate-200 text-slate-500 hover:border-[#83C41F]/50 hover:text-[#0B2B89]"
                }`}>
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* === LIST ACCORDION === */}
        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={item.q}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white shadow-sm border border-slate-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex justify-between items-center gap-4 hover:bg-slate-50/50 p-5 md:p-6 w-full text-left transition-colors">
                    <span className="font-bold text-slate-900 text-base md:text-lg">
                      {item.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
                        isOpen
                          ? "bg-[#83C41F] text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}>
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-5 md:pb-6 font-light text-slate-500 text-sm md:text-base leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* === CTA KECIL KE WA (untuk pertanyaan di luar FAQ) === */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-slate-400 text-sm text-center">
          Belum ketemu jawabannya?{" "}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#0B2B89] hover:text-[#83C41F] underline transition-colors">
            Tanya langsung ke tim admisi
          </a>
        </motion.p>
      </div>
    </section>
  );
}
