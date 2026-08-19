import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  ArrowUpRight,
  X,
  BookOpen,
  Quote,
  BarChart3,
  Languages,
  Award,
} from "lucide-react";

export default function Pengajar() {
  // State untuk Sidebar & Profil
  const [activeUni, setActiveUni] = useState(null);
  const [activeLecturer, setActiveLecturer] = useState(null);

  // Data Dummy (Bisa kamu tambah/edit)
  const universities = [
    {
      name: "University of Madinah",
      country: "Madina, Arab Saudi",
      lecturers: [
        {
          name: "Dr. Ahmad Al-Madani",
          expertise: "Fiqih & Ushul Fiqh",
          education: "S3 Univ. Madinah",
          courses: ["Ushul Fiqh", "Fiqih Muamalah"],
          quote:
            "Ilmu adalah amanah, siapa yang menyembunyikannya maka akan terbelenggu olehnya.",
          stats: { Pengalaman: "15 Tahun", "MK Diampu": "8 Mata Kuliah" },
        },
        {
          name: "Ustadz Salman Al-Ubaid",
          expertise: "Tafsir & Ulul Quran",
          education: "S2 Univ. Madinah",
          courses: ["Tafsir Tarbawi", "Ilmu Tafsir"],
          quote: "Pendidikan adalah proses menanamkan kebenaran ke dalam jiwa.",
          stats: { Pengalaman: "8 Tahun", "MK Diampu": "5 Mata Kuliah" },
        },
      ],
    },
    {
      name: "Imam Muhammad Ibn Sa'ud",
      country: "Riyadh, Arab Saudi",
      lecturers: [
        {
          name: "Dr. Abdul Rahman",
          expertise: "Aqidah & Manhaj",
          education: "S3 Imam Saud Univ.",
          courses: ["Aqidah Islamiyah", "Studi Manhaj"],
          quote: "Luruskan aqidah, luruslah amalan.",
          stats: { Pengalaman: "12 Tahun", "MK Diampu": "6 Mata Kuliah" },
        },
      ],
    },
    {
      name: "UIN Syarif Hidayatullah",
      country: "Jakarta, Indonesia",
      lecturers: [
        {
          name: "Dr. H. Ahmad Zaki, M.Pd",
          expertise: "Pendidikan Islam",
          education: "S3 UIN Jakarta",
          courses: ["Paedagogik", "Manajemen Pendidikan"],
          quote: "Pendidik yang baik adalah cermin bagi muridnya.",
          stats: { Pengalaman: "10 Tahun", "MK Diampu": "7 Mata Kuliah" },
        },
        {
          name: "Dr. Hj. Fatimah Az-Zahra, M.A",
          expertise: "Bahasa Arab",
          education: "S3 UIN Jakarta",
          courses: ["Mahfudzat", "Balaghah"],
          quote: "Bahasa adalah kunci untuk membuka khazanah keilmuan.",
          stats: { Pengalaman: "9 Tahun", "MK Diampu": "4 Mata Kuliah" },
        },
      ],
    },
    {
      name: "Universitas PTIQ",
      country: "Jakarta, Indonesia",
      lecturers: [
        {
          name: "Ustadz Muhammad Thaha, Lc",
          expertise: "Tahfidz & Qira'at",
          education: "S1 PTIQ Jakarta",
          courses: ["Tahfidz Quran", "Ilmu Qira'at"],
          quote: "Memperbanyak bacaan Quran mempertajam hati dan pikiran.",
          stats: { Pengalaman: "7 Tahun", "MK Diampu": "3 Mata Kuliah" },
        },
      ],
    },
    {
      name: "Universitas Negeri",
      country: "Indonesia",
      lecturers: [
        {
          name: "Prof. Dr. Bambang Sutrisno",
          expertise: "Psikologi Pendidikan",
          education: "S3 Univ. Negeri",
          courses: ["Psikologi Perkembangan", "Bimbingan Konseling"],
          quote: "Setiap anak adalah unik, pendidikan harus menyesuaikan.",
          stats: { Pengalaman: "20 Tahun", "MK Diampu": "5 Mata Kuliah" },
        },
      ],
    },
  ];

  return (
    <section className="relative bg-[#0B2B89] py-24 md:py-32 overflow-hidden text-white">
      {/* === Dekorasi Background === */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}></div>
      <div className="top-1/2 left-1/2 absolute bg-[#83C41F]/5 blur-3xl rounded-full w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="z-10 relative mx-auto px-6 md:px-12 max-w-7xl">
        {/* (Header & List Universitas tetap sama) */}
        <div className="items-end gap-8 grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#83C41F] w-12 h-[2px]"></div>
              <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
                The Educators
              </span>
            </div>
            <h2 className="font-extrabold text-4xl md:text-7xl capitalize leading-[1.05]">
              Belajar dari <br />
              <span className="bg-clip-text bg-gradient-to-r from-white to-blue-200 text-transparent">
                Dosen Berkualitas
              </span>
            </h2>
          </div>
          <div className="flex justify-start md:justify-end md:col-span-4">
            <div className="relative flex justify-center items-center w-32 md:w-40 h-32 md:h-40 shrink-0">
              <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  />
                </defs>
                <text className="fill-[#83C41F] font-bold text-[15px] uppercase tracking-[0.2em]">
                  <textPath href="#circlePath" startOffset="0%">
                    Kuliah Islam Takhasus Abudzar • Educators •{" "}
                  </textPath>
                </text>
              </motion.svg>
              <div className="flex justify-center items-center bg-[#83C41F] shadow-lg rounded-full w-16 md:w-20 h-16 md:h-20">
                <GraduationCap
                  size={36}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* LIST UNIVERSITAS */}
        <div className="flex flex-col">
          {universities.map((uni, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              onClick={() => {
                setActiveUni(uni);
                setActiveLecturer(null);
              }}
              className="group relative py-6 md:py-8 border-white/10 border-t last:border-b w-full text-left cursor-pointer">
              <div className="items-center gap-4 grid grid-cols-12 transition-all duration-500">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-bold text-white/30 group-hover:text-[#83C41F] text-xl md:text-2xl transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-7 overflow-hidden">
                  <h3 className="font-extrabold text-white group-hover:text-[#83C41F] text-2xl md:text-5xl lg:text-6xl capitalize transition-all md:group-hover:translate-x-4 group-hover:translate-x-2 duration-500">
                    {uni.name}
                  </h3>
                </div>
                <div className="hidden md:flex justify-end items-center gap-6 md:col-span-4">
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-white text-sm">
                      {uni.lecturers.length} Dosen
                    </span>
                    <span className="flex items-center gap-1 text-blue-200/70 text-xs">
                      <MapPin size={12} /> {uni.country}
                    </span>
                  </div>
                  <div className="flex justify-center items-center bg-white/10 group-hover:bg-[#83C41F] rounded-full w-12 h-12 scale-75 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight
                      size={20}
                      className="text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-0 left-0 absolute bg-[#83C41F] w-0 group-hover:w-full h-[2px] transition-all duration-500"></div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* =========================================
          SPLIT SCREEN: SIDEBAR + DETAIL CARD
      ========================================== */}
      <AnimatePresence>
        {activeUni && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-50 fixed inset-0 flex bg-black/70 backdrop-blur-md"
            onClick={() => setActiveUni(null)}>
            {/* 1. SIDEBAR LIST DOSEN (Kiri) */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col bg-[#081d5e] border-white/10 border-r w-full md:w-[400px] h-full shrink-0"
              onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start p-8 border-white/10 border-b">
                <div>
                  <span className="font-bold text-[#83C41F] text-xs uppercase tracking-widest">
                    Pengajar dari
                  </span>
                  <h3 className="font-extrabold text-white text-2xl">
                    {activeUni.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveUni(null)}
                  className="hover:bg-white/10 p-2 rounded-full transition-colors">
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="flex-1 space-y-2 p-4 overflow-y-auto">
                {activeUni.lecturers.map((dosen, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveLecturer(dosen)}
                    className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-colors duration-200 ${activeLecturer?.name === dosen.name ? "bg-[#83C41F]" : "bg-white/5 hover:bg-white/10"}`}>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-xl shrink-0 ${activeLecturer?.name === dosen.name ? "bg-white text-[#83C41F]" : "bg-white/20 text-white"}`}>
                      {dosen.name.charAt(0)}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-bold text-white truncate">
                        {dosen.name}
                      </h4>
                      <p
                        className={`text-xs truncate ${activeLecturer?.name === dosen.name ? "text-white/80" : "text-[#83C41F]"}`}>
                        {dosen.expertise}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 2. AREA KARTU DOSEN BESAR (Kanan) */}
            <div
              className="flex flex-1 justify-center items-center p-4 md:p-10 h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                {activeLecturer ? (
                  <motion.div
                    key={activeLecturer.name}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative grid md:grid-cols-2 bg-white shadow-2xl rounded-3xl w-full max-w-3xl overflow-hidden">
                    {/* Tombol Close Mobile */}
                    <button
                      onClick={() => setActiveLecturer(null)}
                      className="md:hidden top-4 right-4 z-20 absolute bg-white/20 p-2 rounded-full">
                      <X size={20} className="text-white" />
                    </button>

                    {/* Sisi Kiri: Profil Visual (Biru) */}
                    <div className="relative flex flex-col items-center bg-[#0B2B89] p-8 md:p-10 overflow-hidden text-white text-center">
                      <div className="-top-20 -left-20 absolute bg-[#83C41F]/20 blur-3xl rounded-full w-60 h-60"></div>

                      <div className="z-10 relative flex justify-center items-center bg-[#83C41F] shadow-2xl mb-6 border-4 border-white/20 rounded-full w-32 h-32">
                        <span className="font-extrabold text-6xl">
                          {activeLecturer.name.charAt(0)}
                        </span>
                      </div>

                      <h3 className="z-10 relative mb-2 font-extrabold text-3xl">
                        {activeLecturer.name}
                      </h3>
                      <div className="inline-flex z-10 relative items-center gap-2 bg-white/10 mb-6 px-4 py-2 rounded-full font-bold text-[#83C41F] text-sm">
                        <Award size={14} /> {activeLecturer.expertise}
                      </div>

                      <div className="z-10 relative bg-white/5 mt-auto p-4 border border-white/10 rounded-xl w-full">
                        <p className="mb-1 text-blue-200 text-xs uppercase tracking-wide">
                          Pendidikan Terakhir
                        </p>
                        <p className="font-bold text-white">
                          {activeLecturer.education}
                        </p>
                      </div>
                    </div>

                    {/* Sisi Kanan: Detail Akademik (Putih) */}
                    <div className="flex flex-col p-8 md:p-10">
                      {/* Kutipan Filosofi */}
                      <div className="mb-6 pl-4 border-[#83C41F] border-l-4">
                        <Quote size={24} className="mb-2 text-[#83C41F]/40" />
                        <p className="font-light text-slate-600 text-sm italic leading-relaxed">
                          "{activeLecturer.quote}"
                        </p>
                      </div>

                      {/* Statistik Akademik (Micro Dashboard) */}
                      <div className="gap-3 grid grid-cols-2 mb-6">
                        {Object.entries(activeLecturer.stats).map(
                          ([key, val], i) => (
                            <div
                              key={i}
                              className="bg-slate-50 p-3 border border-slate-100 rounded-xl">
                              <div className="flex items-center gap-2 mb-1 text-[#83C41F]">
                                <BarChart3 size={14} />
                                <span className="font-bold text-[10px] text-slate-500 uppercase tracking-wide">
                                  {key}
                                </span>
                              </div>
                              <p className="font-extrabold text-[#0B2B89] text-lg">
                                {val}
                              </p>
                            </div>
                          ),
                        )}
                      </div>

                      {/* Mata Kuliah Diampu */}
                      <div className="mt-auto">
                        <h4 className="flex items-center gap-2 mb-3 font-extrabold text-[#0B2B89] text-sm uppercase tracking-wide">
                          <BookOpen size={16} /> Mata Kuliah Diampu
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeLecturer.courses.map((course, i) => (
                            <span
                              key={i}
                              className="bg-blue-50 px-3 py-1.5 border border-blue-100 rounded-lg font-bold text-[#0B2B89] text-xs">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hidden md:block text-white/40 text-center">
                    <GraduationCap
                      size={80}
                      className="stroke-1 mx-auto mb-4"
                    />
                    <p className="font-light text-lg">
                      Pilih nama dosen di sidebar untuk melihat profil
                      akademiknya.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
