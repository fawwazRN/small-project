import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  GraduationCap,
  BookOpen,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function Hero({ onOpenDrawer }) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, type: "spring", stiffness: 80, damping: 15 },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, type: "spring", stiffness: 80, damping: 15 },
    }),
  };

  return (
    <section className="relative bg-slate-50 pt-32 pb-20 w-full min-h-screen overflow-hidden">
      <div className="z-10 relative items-center gap-16 grid grid-cols-1 lg:grid-cols-2 mx-auto px-6 md:px-12 max-w-7xl">
        {/* === SISI KIRI: TEKS === */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6">
          <motion.span
            custom={0.2}
            variants={fadeLeft}
            className="inline-flex items-center gap-2 w-fit font-bold text-[#0B2B89] text-sm uppercase tracking-widest">
            {/* Aksen Hijau kecil di sini (10%) */}
            <span className="bg-[#83C41F] w-8 h-[2px]"></span>
            Kuliah Islam & Takhasus Abudzar
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              custom={0.4}
              variants={fadeLeft}
              className="font-extrabold text-slate-900 text-5xl md:text-7xl capitalize leading-[1.1] tracking-tight">
              Mencetak <br />
              Generasi <br />
              <span className="inline-block relative text-[#0B2B89]">
                Pendidik Islam
                {/* Underline Hijau (10%) */}
                <svg
                  className="-bottom-2 left-0 absolute w-full"
                  viewBox="0 0 300 20"
                  fill="none">
                  <motion.path
                    d="M5 15C70 5 230 5 295 10"
                    stroke="#83C41F"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                  />
                </svg>
              </span>{" "}
              Rabbani
            </motion.h1>
          </div>

          <motion.p
            custom={0.6}
            variants={fadeLeft}
            className="mt-4 max-w-md font-normal text-slate-600 text-lg leading-relaxed">
            Tempat langkah ilmu dan iman menyatu. Raih masa depan gemilang
            dengan kedalaman syar'i dan kecakapan pendidikan modern.
          </motion.p>

          <motion.div
            custom={0.8}
            variants={fadeLeft}
            className="flex flex-wrap items-center gap-4 mt-6">
            {/* Tombol Utama: Hijau (10% Aksen CTA) */}
            <motion.a
              onClick={onOpenDrawer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#83C41F] hover:bg-[#72ab1a] shadow-green-600/20 shadow-lg px-8 py-4 rounded-xl font-bold text-white text-sm uppercase transition-colors">
              Pendaftaran
              <div className="flex justify-center items-center bg-white/30 group-hover:bg-white/50 rounded-full w-6 h-6 transition-colors">
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </motion.a>

            {/* Tombol Sekunder: Biru Tua (30% Teks) */}
            <motion.a
              href="#keunggulan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 py-4 font-bold text-[#0B2B89] text-sm uppercase">
              Keunggulan
              <span className="flex justify-center items-center bg-blue-100 group-hover:bg-[#0B2B89] rounded-full w-8 h-8 group-hover:text-white transition-colors">
                <ArrowDown size={14} strokeWidth={3} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === SISI KANAN: BENTO GRID KAMPUS (NO IMAGES) === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hidden relative gap-5 lg:grid grid-cols-2 h-[550px]">
          {/* Kartu 1 (Besar, Kiri Atas): Highlight Akademik (Background Biru 30%) */}
          <motion.div className="relative flex flex-col justify-between col-span-2 bg-[#0B2B89] shadow-xl p-8 rounded-3xl h-[260px] overflow-hidden">
            {/* Dekorasi garis pojok kanan bawah */}
            <div className="right-0 bottom-0 absolute border-[#83C41F]/10 border-[20px] rounded-tl-full w-40 h-40"></div>

            <div className="z-10 flex justify-between items-start">
              <div className="flex justify-center items-center bg-white/10 backdrop-blur-md rounded-2xl w-14 h-14">
                <GraduationCap size={28} className="text-[#83C41F]" />
              </div>
              <span className="bg-[#83C41F] px-3 py-1 rounded-full font-bold text-white text-xs uppercase">
                Akreditasi A
              </span>
            </div>

            <div className="z-10">
              <p className="mb-1 text-white/70 text-sm uppercase tracking-wider">
                Program Unggulan
              </p>
              <h3 className="font-extrabold text-white text-2xl">
                Pendidikan Islam Rabbani
              </h3>
            </div>
          </motion.div>

          {/* Kartu 2 (Kanan Tengah): Info Pendaftaran */}
          <motion.div className="flex flex-col justify-between bg-white shadow-lg p-6 border border-slate-100 rounded-3xl">
            <div className="flex justify-center items-center bg-blue-50 mb-4 rounded-xl w-12 h-12">
              <CalendarDays size={24} className="text-[#0B2B89]" />
            </div>
            <div>
              <p className="mb-1 font-bold text-slate-500 text-xs uppercase tracking-wide">
                Pendaftaran
              </p>
              <h4 className="mb-3 font-extrabold text-slate-900 text-xl">
                Gelombang 1
              </h4>

              {/* Progress Bar (Aksen Hijau 10%) */}
              <div className="bg-slate-100 rounded-full w-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="bg-[#83C41F] rounded-full h-full"></motion.div>
              </div>
              <p className="mt-2 text-slate-500 text-xs">65% Kuota Terisi</p>
            </div>
          </motion.div>

          {/* Kartu 3 (Kanan Bawah): Keunggulan Fakultas */}
          <motion.div className="flex flex-col justify-between bg-white shadow-lg p-6 border border-slate-100 rounded-3xl">
            <div className="flex justify-center items-center bg-green-50 mb-4 rounded-xl w-12 h-12">
              <BookOpen size={24} className="text-[#83C41F]" />
            </div>
            <div>
              <p className="mb-1 font-bold text-slate-500 text-xs uppercase tracking-wide">
                Fakultas
              </p>
              <h4 className="mb-3 font-extrabold text-slate-900 text-xl">
                Syariah & Tarbiyah
              </h4>

              {/* List Check (Murni CSS) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0B2B89]" />
                  <span className="font-medium text-slate-600 text-xs">
                    Kurikulum Terpadu
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0B2B89]" />
                  <span className="font-medium text-slate-600 text-xs">
                    Asatidz Berpengalaman
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
