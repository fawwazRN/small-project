import React from "react";
import { motion } from "framer-motion";
import {
  Languages,
  BookOpenCheck,
  BrainCircuit,
  TrendingUp,
  FileText,
} from "lucide-react";

export default function Output() {
  // Variasi animasi super halus, sekali muncul dan diam
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative bg-slate-50 px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* === HEADER === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-3xl text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Output Lulusan
            </span>
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
          </div>
          <h2 className="mb-4 font-extrabold text-[#0B2B89] text-4xl md:text-6xl capitalize leading-tight">
            Bukan Sekadar Lulus, <br /> Tapi{" "}
            <span className="text-[#83C41F]">Siap Rekrut</span>.
          </h2>
          <p className="font-light text-slate-500 text-lg">
            Lulus kuliah insya Allah langsung siap terjun ke dunia pendidikan
            islam dengan bekal yang mumpuni.
          </p>
        </motion.div>

        {/* === GRID ASIMETRIS (100% Responsive, No Row-Span Hack) === */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-3">
          {/* 1. Bahasa Arab (Lebar 2 Kolom) - Kartu Utama Biru */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex md:flex-row flex-col justify-between items-start gap-6 md:col-span-2 bg-gradient-to-br from-[#0B2B89] to-[#081d5e] shadow-xl p-8 md:p-10 rounded-3xl text-white cursor-default">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center bg-white/10 backdrop-blur-md rounded-xl w-12 h-12">
                  <Languages size={24} className="text-[#83C41F]" />
                </div>
                <span className="font-bold text-blue-200 text-xs uppercase tracking-widest">
                  01
                </span>
              </div>
              <h3 className="mb-2 font-extrabold text-3xl md:text-4xl">
                Cakap Berbahasa Arab
              </h3>
              <p className="max-w-md font-light text-blue-100/80 text-base">
                Lisan dan tulisan secara aktif dan komunikatif.
              </p>
            </div>
          </motion.div>

          {/* 2. Mahir Al-Qur'an (1 Kolom) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between bg-white shadow-sm hover:shadow-xl p-8 border border-slate-100 rounded-3xl transition-shadow cursor-default">
            <div className="flex justify-between items-center mb-6">
              <div className="flex justify-center items-center bg-blue-50 rounded-xl w-12 h-12">
                <BookOpenCheck size={24} className="text-[#0B2B89]" />
              </div>
              <span className="font-bold text-slate-300 text-xs uppercase tracking-widest">
                02
              </span>
            </div>
            <div>
              <h3 className="mb-1 font-extrabold text-slate-900 text-xl">
                Mahir Tilawah
              </h3>
              <p className="font-light text-slate-500 text-sm">
                Membaca & memiliki hafalan Al-Qur'an.
              </p>
            </div>
          </motion.div>

          {/* 3. Guru Progresif (1 Kolom) */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between bg-white shadow-sm hover:shadow-xl p-8 border border-slate-100 rounded-3xl transition-shadow cursor-default">
            <div className="flex justify-between items-center mb-6">
              <div className="flex justify-center items-center bg-blue-50 rounded-xl w-12 h-12">
                <TrendingUp size={24} className="text-[#0B2B89]" />
              </div>
              <span className="font-bold text-slate-300 text-xs uppercase tracking-widest">
                03
              </span>
            </div>
            <div>
              <h3 className="mb-1 font-extrabold text-slate-900 text-xl">
                Guru Progresif
              </h3>
              <p className="font-light text-slate-500 text-sm">
                Modern & berwawasan islami.
              </p>
            </div>
          </motion.div>

          {/* 4. Pedagogi (Lebar 2 Kolom) - Dengan Tagar Rapi */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex md:flex-row flex-col justify-between items-start md:items-center gap-8 md:col-span-2 bg-white shadow-sm hover:shadow-xl p-8 md:p-10 border border-slate-100 rounded-3xl transition-shadow cursor-default">
            <div className="flex flex-col gap-3 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-blue-50 rounded-xl w-12 h-12">
                  <BrainCircuit size={24} className="text-[#0B2B89]" />
                </div>
                <span className="font-bold text-slate-300 text-xs uppercase tracking-widest">
                  04
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-2xl">
                Menguasai Pedagogi
              </h3>
              <p className="font-light text-slate-500 text-sm">
                Penguasaan mendalam pada aspek pengajaran.
              </p>
            </div>

            {/* Chips Statis Rapi */}
            <div className="flex flex-wrap gap-3">
              {["Pedagogi", "Pedagogik", "Pedagogis"].map((tag, i) => (
                <span
                  key={i}
                  className="bg-slate-100 px-5 py-2.5 border border-slate-200 rounded-xl font-bold text-[#0B2B89] text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 5. Manajerial (Full Lebar Bawah) - Warna Hijau */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative flex md:flex-row flex-col justify-between items-start md:items-center gap-6 md:col-span-3 bg-gradient-to-r from-[#83C41F] to-[#6ba317] shadow-green-600/20 shadow-lg p-8 md:p-10 rounded-3xl overflow-hidden text-white cursor-default">
            {/* Dekorasi pojok kanan */}
            <div className="top-0 right-0 absolute border-[20px] border-white/10 rounded-bl-[100px] w-40 h-40"></div>

            <div className="z-10 flex items-center gap-6">
              <div className="flex justify-center items-center bg-white/20 backdrop-blur-md rounded-2xl w-14 h-14 shrink-0">
                <FileText size={28} className="text-white" />
              </div>
              <div>
                <span className="block mb-1 font-bold text-white/60 text-xs uppercase tracking-widest">
                  05
                </span>
                <h3 className="mb-1 font-extrabold text-2xl md:text-3xl">
                  Kompeten Manajerial
                </h3>
                <p className="font-light text-white/80 text-sm md:text-base">
                  Siap menyusun silabus, RPP/modul ajar, dan media pembelajaran
                  secara profesional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
