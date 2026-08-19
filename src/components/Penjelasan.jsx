import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  MessagesSquare,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";

export default function Penjelasan() {
  // Animasi teks raksasa jatuh satu per satu
  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const dropDown = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 12 },
    },
  };

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom = 0) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: custom },
    }),
  };

  // Data untuk kartu interaktif di kanan
  const pillars = [
    {
      icon: MessagesSquare,
      title: "Cakap",
      desc: "Komunikasi Pendidikan",
      color: "text-[#0B2B89]",
    },
    {
      icon: BrainCircuit,
      title: "Cerdas",
      desc: "Pedagogi Modern",
      color: "text-[#0B2B89]",
    },
    {
      icon: GraduationCap,
      title: "Cendekia",
      desc: "Khazanah Islam",
      color: "text-[#0B2B89]",
    },
  ];

  return (
    <section className="z-20 relative bg-[#0B2B89] -mt-10 px-6 md:px-12 py-32 max-sm:pt-20 rounded-t-[40px] max-sm:rounded-t-xl md:rounded-t-[80px] overflow-hidden text-white">
      {/* Lingkaran Glow Hijau samar di belakang */}
      <div className="bottom-20 -left-20 absolute bg-[#83C41F]/10 blur-3xl rounded-full w-96 h-96"></div>

      <div className="z-10 relative items-center gap-16 grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-7xl">
        {/* === SISI KIRI: Teks Raksasa (Garansi tidak ketutup) === */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-7">
          {/* Label Kecil */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-8">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-blue-200 text-sm uppercase tracking-widest">
              Filosofi Utama
            </span>
          </motion.div>

          {/* Teks Jatuh Satu per Satu (Susunan Aman) */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <motion.h2
                variants={dropDown}
                className="font-extrabold text-6xl md:text-8xl tracking-tight">
                Cakap,
              </motion.h2>
              <motion.h2
                variants={dropDown}
                className="bg-clip-text bg-gradient-to-r from-white to-blue-200 font-extrabold text-transparent text-6xl md:text-8xl tracking-tight">
                Cerdas,
              </motion.h2>
            </div>
            <motion.h2
              variants={dropDown}
              className="mt-2 font-extrabold text-6xl md:text-8xl tracking-tight">
              &{" "}
              <span className="relative text-[#83C41F]">
                Cendekia
                {/* Garis bawah coret hijau */}
                <svg
                  className="-bottom-2 left-0 absolute w-full"
                  viewBox="0 0 200 15"
                  fill="none">
                  <path
                    d="M2 10C50 2 150 2 198 8"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>
          </div>

          {/* Paragraf Penjelasan dengan Drop Cap (Huruf besar di awal) */}
          <motion.div
            variants={fadeUp}
            className="mb-10 max-w-2xl font-light text-blue-100/80 text-lg md:text-xl leading-relaxed">
            <span className="float-left mt-1 mr-3 font-extrabold text-[#83C41F] text-6xl leading-none">
              P
            </span>
            rogram Studi S1 Pendidikan Agama Islam (PAI) KITA menawarkan
            pengalaman akademik yang mendalam dan intensif. Dirancang khusus
            untuk mencetak pendidik profesional yang memiliki pemahaman Islam
            komprehensif. Kurikulum kami mengintegrasikan keahlian pedagogi
            modern dengan penguasaan khazanah keilmuan Islam yang otentik.
          </motion.div>

          {/* Tombol Keunggulan */}
          <motion.div variants={fadeUp} custom={0.4}>
            <motion.a
              href="#keunggulan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white backdrop-blur-md px-8 py-4 border border-white/20 rounded-full font-bold text-white hover:text-[#0B2B89] text-sm uppercase transition-all duration-300">
              Keunggulan Kami
              <span className="flex justify-center items-center bg-[#83C41F] group-hover:bg-[#0B2B89] rounded-full w-8 h-8 text-white group-hover:rotate-90 transition-all duration-300">
                <ArrowDown size={16} strokeWidth={3} />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === SISI KANAN: Kartu Interaktif Vertikal === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:flex flex-col gap-5 lg:col-span-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                custom={0.6 + index * 0.15}
                variants={fadeUp}
                whileHover={{ scale: 1.03, x: -10 }}
                className="group relative flex items-center gap-6 bg-white/5 hover:bg-white/10 backdrop-blur-md p-6 border border-white/10 rounded-3xl transition-colors cursor-pointer">
                {/* Ikon dengan efek putar saat dihover */}
                <div className="flex justify-center items-center bg-white/10 group-hover:bg-[#83C41F] rounded-2xl w-16 h-16 transition-colors duration-300 shrink-0">
                  <Icon
                    size={28}
                    className="text-[#83C41F] group-hover:text-white group-hover:rotate-12 transition-all duration-300"
                  />
                </div>

                {/* Teks Kartu */}
                <div className="flex-1">
                  <h3 className="font-extrabold text-white group-hover:text-[#83C41F] text-3xl transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-medium text-blue-100/60 text-sm uppercase tracking-wide">
                    {pillar.desc}
                  </p>
                </div>

                {/* Garis Hijau Indikator (Muncul saat hover) */}
                <div className="top-1/2 right-0 absolute bg-[#83C41F] rounded-l-full w-1 h-0 group-hover:h-3/4 transition-all -translate-y-1/2 duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* === MARQUEE BAWAH (Teks Berjalan Estetik 100% Mulus Tanpa Jeda) === */}
      <div className="bottom-0 left-0 z-10 absolute bg-[#081d5e] py-4 border-white/10 border-t w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-max font-bold text-white/10 text-2xl uppercase tracking-widest whitespace-nowrap">
          {/* Kita buat 4 blok. Geser ke -50% berarti memindahkan 2 blok pertama.
              Ini jaminan nggak akan ada area kosong di layar manapun. */}

          {/* Blok 1 */}
          <div className="flex items-center gap-12 pr-12">
            <span>Cakap</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cerdas</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cendekia</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Pendidikan Islam Rabbani</span>
            <span className="text-[#83C41F]/30">•</span>
          </div>

          {/* Blok 2 */}
          <div className="flex items-center gap-12 pr-12" aria-hidden="true">
            <span>Cakap</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cerdas</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cendekia</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Pendidikan Islam Rabbani</span>
            <span className="text-[#83C41F]/30">•</span>
          </div>

          {/* Blok 3 */}
          <div className="flex items-center gap-12 pr-12" aria-hidden="true">
            <span>Cakap</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cerdas</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cendekia</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Pendidikan Islam Rabbani</span>
            <span className="text-[#83C41F]/30">•</span>
          </div>

          {/* Blok 4 */}
          <div className="flex items-center gap-12 pr-12" aria-hidden="true">
            <span>Cakap</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cerdas</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Cendekia</span>
            <span className="text-[#83C41F]/30">•</span>
            <span>Pendidikan Islam Rabbani</span>
            <span className="text-[#83C41F]/30">•</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
