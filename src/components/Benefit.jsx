import React from "react";
import { motion } from "framer-motion";
import { Wallet, Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";

export default function Benefit() {
  const benefits = [
    {
      icon: Wallet,
      number: "01",
      title: "Biaya Sangat Terjangkau",
      desc: "Investasi pendidikan terbaik dengan kisaran biaya hanya ± 15 juta hingga selesai.",
      highlight: "± 15 Juta",
    },
    {
      icon: Briefcase,
      number: "02",
      title: "Penempatan Kerja",
      desc: "Jaminan arah karier bagi lulusan yang memiliki kualifikasi dan kompetensi terbaik.",
      highlight: "Job Placement",
    },
    {
      icon: GraduationCap,
      number: "03",
      title: "Dosen Berkualitas",
      desc: "Tenaga pengajar lulusan universitas timur tengah dan dalam negeri ternama.",
      highlight: "Timur Tengah & Dalam Negeri",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  return (
    <section className="relative bg-white px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="z-10 relative mx-auto max-w-7xl">
        {/* === HEADER === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto mb-20 max-w-3xl text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Keunggulan KITA
            </span>
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
          </div>
          <h2 className="font-extrabold text-[#0B2B89] text-4xl md:text-6xl capitalize leading-tight">
            Benefit Kuliah di <span className="text-[#83C41F]">KITA</span>
          </h2>
          <p className="mt-4 font-light text-slate-500 text-lg">
            Tiga alasan utama mengapa KITA adalah pilihan tepat untuk masa depan
            pendidikan Anda.
          </p>
        </motion.div>

        {/* === ZIG-ZAG OFFSET GRID === */}
        <div className="items-start gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            // Offset zig-zag di layar PC (kartu 2 turun, kartu 3 naik setengah)
            const offsetClass =
              index === 0 ? "md:mt-0" : index === 1 ? "md:mt-16" : "md:mt-8";

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#83C41F]/30 transition-all duration-300 cursor-default ${offsetClass}`}>
                {/* Angka Watermark di Pojok */}
                <span className="top-6 right-8 absolute font-extrabold text-slate-200/50 group-hover:text-[#83C41F]/20 text-7xl transition-colors duration-300 pointer-events-none select-none">
                  {benefit.number}
                </span>

                {/* Ikon */}
                <div className="z-10 relative mb-8 w-16 h-16">
                  <div className="absolute inset-0 flex justify-center items-center bg-white shadow-md rounded-2xl group-hover:scale-90 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex justify-center items-center bg-[#83C41F] rounded-2xl scale-0 group-hover:scale-100 origin-center transition-transform duration-300">
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                  {/* Ikon awal (non-hover) */}
                  <div className="absolute inset-0 flex justify-center items-center group-hover:opacity-0 transition-opacity duration-300">
                    <Icon
                      size={28}
                      className="text-[#0B2B89]"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Teks */}
                <div className="z-10 relative">
                  <h3 className="mb-3 font-extrabold text-slate-900 text-xl md:text-2xl leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="font-light text-slate-500 text-sm md:text-base leading-relaxed">
                    {benefit.desc
                      .split(benefit.highlight)
                      .map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="font-bold text-[#0B2B89] group-hover:text-[#83C41F] transition-colors duration-300">
                              {benefit.highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                  </p>
                </div>

                {/* Indikator Panah (Muncul saat hover) */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 mt-8 font-bold text-[#0B2B89] text-sm uppercase transition-all group-hover:translate-x-1 duration-300">
                  Pelajari Lebih Lanjut
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
