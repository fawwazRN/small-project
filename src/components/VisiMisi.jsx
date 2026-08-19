import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Globe,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function VisiMisi() {
  const misiList = [
    {
      icon: Globe,
      title: "Bahasa & Wawasan Global",
      desc: "Menguasai bahasa internasional untuk memperluas jangkauan dakwah dan pendidikan ke skala global.",
    },
    {
      icon: BookOpen,
      title: "Teori & Praktik Terpadu",
      desc: "Menguasai teori keislaman dan praktik pedagogi modern secara seimbang dan aplikatif.",
    },
    {
      icon: Briefcase,
      title: "Manajemen Profesi",
      desc: "Menguasai manajemen profesi pendidikan agar siap memimpin institusi pendidikan Islam.",
    },
    {
      icon: ShieldCheck,
      title: "Karakter Rabbani",
      desc: "Berwawasan global dengan karakter Islam Rabbani yang kuat dan berakhlak mulia.",
    },
    {
      icon: Handshake,
      title: "Tri Dharma & Kerjasama",
      desc: "Mengimplementasikan Tridharma Perguruan Tinggi dan menjalin kerja sama strategis.",
    },
  ];

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemFade = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative bg-slate-50 px-6 md:px-12 py-32 overflow-hidden">
      <div className="z-10 relative items-start gap-12 grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-7xl">
        {/* === SISI KIRI: MISI (Dominan & Panjang) === */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:col-span-7 lg:pr-10">
          {/* Header Misi */}
          <motion.div
            variants={itemFade}
            className="flex items-center gap-3 mb-12">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Misi Utama
            </span>
          </motion.div>

          {/* List Misi dengan Angka Raksasa */}
          <div className="flex flex-col gap-12">
            {misiList.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemFade}
                  className="group flex items-start gap-6 md:gap-8 cursor-default">
                  {/* Angka Raksasa & Ikon */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="font-extrabold text-[#0B2B89]/15 group-hover:text-[#83C41F] text-5xl md:text-6xl leading-none transition-colors duration-300">
                      0{index + 1}
                    </span>
                    <div className="flex justify-center items-center bg-slate-100 group-hover:bg-[#0B2B89] mt-3 rounded-xl w-10 h-10 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#0B2B89] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Teks Misi */}
                  <div className="pt-2 pb-8 border-slate-200 group-hover:border-[#83C41F] border-b w-full transition-colors duration-300">
                    <h3 className="mb-2 font-extrabold text-slate-900 text-xl md:text-2xl capitalize">
                      {item.title}
                    </h3>
                    <p className="font-light text-slate-500 text-base md:text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* === SISI KANAN: VISI (Kartu Sticky Melayang) === */}
        <div className="lg:top-32 lg:sticky lg:col-span-5 mt-10 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="relative bg-[#0B2B89] shadow-2xl p-10 rounded-3xl overflow-hidden">
            {/* Dekorasi Lingkaran Hijau */}
            <div className="-top-10 -right-10 absolute bg-[#83C41F]/20 blur-2xl rounded-full w-40 h-40"></div>
            <div className="-bottom-20 -left-10 absolute bg-[#83C41F]/10 blur-2xl rounded-full w-40 h-40"></div>

            {/* Konten Visi */}
            <div className="z-10 relative flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-[#83C41F] shadow-green-500/20 shadow-lg rounded-xl w-12 h-12">
                  <Target size={26} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-blue-200 text-sm uppercase tracking-widest">
                  Visi KITA
                </span>
              </div>

              <h2 className="font-extrabold text-white text-3xl md:text-4xl leading-snug">
                Mencetak generasi{" "}
                <span className="text-[#83C41F]">cendekia</span> yang
                berkompetisi di tingkat global.
              </h2>

              <p className="pt-6 border-white/10 border-t font-light text-blue-100/80 text-base leading-relaxed">
                Menjadi pusat pendidikan Islam rabbani yang unggul dalam
                memadukan tradisi keilmuan klasik dengan kebutuhan modern, guna
                melahirkan pemimpin yang bermanhaj salaf dan berakhlaq mulia.
              </p>

              {/* Tambahan: Mini Statistik di bawah Visi */}
              <div className="gap-4 grid grid-cols-2 mt-4">
                <div className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 rounded-2xl">
                  <p className="font-extrabold text-[#83C41F] text-3xl">A</p>
                  <p className="mt-1 font-semibold text-blue-200 text-xs uppercase">
                    Akreditasi
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 border border-white/10 rounded-2xl">
                  <p className="font-extrabold text-white text-3xl">5+</p>
                  <p className="mt-1 font-semibold text-blue-200 text-xs uppercase">
                    Prodi Unggulan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
