import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  BookOpen,
  Smartphone,
  Sparkles,
} from "lucide-react";

export default function Penutup({ onOpenDrawer }) {
  return (
    <section
      className="relative bg-[#0B2B89] px-6 md:px-12 py-32 md:py-40 overflow-hidden text-white"
      id="penutup">
      {/* === Dekorasi Background Sinematik === */}
      {/* Pola Titik Halus */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}></div>

      {/* Glow Hijau Tengah */}
      <div className="top-0 left-1/2 absolute bg-[#83C41F]/10 blur-3xl rounded-full w-[800px] h-[800px] -translate-x-1/2 pointer-events-none"></div>

      {/* Lengkung Garis di Atas (Pemisah dari section sebelumnya) */}
      <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-transparent via-[#83C41F]/50 to-transparent h-px"></div>

      <div className="z-10 relative flex flex-col items-center mx-auto max-w-6xl text-center">
        {/* === Badge Penghargaan === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md mb-10 px-5 py-2 border border-white/20 rounded-full font-bold text-blue-100 text-sm uppercase tracking-widest">
          <Sparkles size={16} className="text-[#83C41F]" />
          Ambil Langkah Pertama Anda
        </motion.div>

        {/* === TIPOGRAFI RAKSASA (Outline & Solid Mix) === */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-6 font-extrabold text-5xl md:text-8xl leading-[1.05] tracking-tight">
          Jadilah Pendidik <br />
          <span className="bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent">
            Islam Rabbani
          </span>
          <br />
          {/* Teks Outline Transparan (Hanya Garis Tepi) */}
          <span className="[-webkit-text-stroke:2px_#83C41F] text-transparent">
            Bersama KITA.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="mb-16 max-w-2xl font-light text-blue-100/70 text-lg md:text-xl">
          Wujudkan generasi yang cerdas, cakap, dan berakhlaq mulia.
          Bergabunglah dengan ribuan calon pendidik islam di Kuliah Islam &
          Takhasus Abudzar.
        </motion.p>

        {/* === SPLIT CARD KONSEPTUAL (Pengganti Foto Orang) === */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-16 w-full">
          {/* Kartu Kiri: Tradisi (Buku) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative flex items-center gap-6 bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-3xl overflow-hidden text-left cursor-default">
            <div className="-bottom-10 -left-10 absolute bg-[#0B2B89] group-hover:bg-[#83C41F]/20 blur-2xl rounded-full w-40 h-40 transition-colors"></div>
            <div className="z-10 flex justify-center items-center bg-white/10 rounded-2xl w-16 h-16 shrink-0">
              <BookOpen size={28} className="text-[#83C41F]" />
            </div>
            <div className="z-10">
              <h4 className="mb-1 font-bold text-xl">Tradisi Keilmuan</h4>
              <p className="font-light text-blue-100/70 text-sm">
                Menggali khazanah Islam otentik dari sumbernya.
              </p>
            </div>
          </motion.div>

          {/* Kartu Kanan: Inovasi (HP/Teknologi) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative flex items-center gap-6 bg-white/5 backdrop-blur-md p-8 border border-white/10 rounded-3xl overflow-hidden text-left cursor-default">
            <div className="-top-10 -right-10 absolute bg-[#0B2B89] group-hover:bg-[#83C41F]/20 blur-2xl rounded-full w-40 h-40 transition-colors"></div>
            <div className="z-10 flex justify-center items-center bg-white/10 rounded-2xl w-16 h-16 shrink-0">
              <Smartphone size={28} className="text-[#83C41F]" />
            </div>
            <div className="z-10">
              <h4 className="mb-1 font-bold text-xl">Inovasi Modern</h4>
              <p className="font-light text-blue-100/70 text-sm">
                Pedagogi terkini yang relevan dengan era digital.
              </p>
            </div>
          </motion.div>
        </div>

        {/* === TOMBOL CTA MEGAH === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          className="flex sm:flex-row flex-col items-center gap-4">
          {/* Tombol Pendaftaran */}
          <motion.button
            onClick={onOpenDrawer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 bg-[#83C41F] hover:bg-[#72ab1a] shadow-2xl shadow-green-500/30 px-10 py-5 rounded-full font-bold text-white text-base uppercase transition-colors duration-300">
            Pendaftaran
            <div className="flex justify-center items-center bg-white/30 group-hover:bg-white/50 rounded-full w-8 h-8 transition-colors">
              <ArrowRight size={18} strokeWidth={3} />
            </div>
          </motion.button>

          {/* Tombol Brosur */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-white/5 hover:bg-white backdrop-blur-md px-8 py-5 border border-white/30 rounded-full font-bold text-white hover:text-[#0B2B89] text-base uppercase transition-all duration-300">
            <Download size={20} />
            Download Brosur
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
