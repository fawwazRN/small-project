import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  BookOpen,
  Languages,
  Users,
  Presentation,
  FileCheck,
  GraduationCap,
} from "lucide-react";

/**
 * Perjalanan Mahasiswa — scroll-story timeline.
 *
 * Garis vertikal di kiri terisi (scaleY) mengikuti progres scroll di dalam
 * section ini. Tiap tahap muncul (fade + slide) saat masuk viewport lewat
 * whileInView, jadi terasa seperti "cerita" yang terbuka seiring scroll,
 * bukan cuma daftar statis.
 */

const stages = [
  {
    icon: FileText,
    label: "Tahap Awal",
    title: "Pendaftaran & Seleksi",
    desc: "Isi formulir, verifikasi berkas, dan wawancara bersama tim seleksi KITA.",
  },
  {
    icon: Languages,
    label: "Semester 1–2",
    title: "Fondasi Keislaman & Bahasa Arab",
    desc: "Membangun dasar aqidah, fiqih, dan kemampuan bahasa Arab aktif sejak semester pertama.",
  },
  {
    icon: BookOpen,
    label: "Semester 3–4",
    title: "Pendalaman Tafsir & Pedagogi Dasar",
    desc: "Mulai mempelajari ilmu tafsir, ushul fiqih, serta pengantar ilmu pendidikan modern.",
  },
  {
    icon: Presentation,
    label: "Semester 5–6",
    title: "Praktik Mengajar & Kurikulum",
    desc: "Menyusun RPP, latihan microteaching, dan praktik pedagogi langsung di kelas simulasi.",
  },
  {
    icon: Users,
    label: "Semester 7",
    title: "Magang / PPL di Lembaga Mitra",
    desc: "Terjun langsung mengajar di lembaga pendidikan Islam mitra kampus KITA.",
  },
  {
    icon: FileCheck,
    label: "Semester 8",
    title: "Penyusunan Skripsi",
    desc: "Riset dan penulisan tugas akhir dengan bimbingan dosen pembimbing.",
  },
  {
    icon: GraduationCap,
    label: "Kelulusan",
    title: "Wisuda & Siap Terjun",
    desc: "Resmi menyandang gelar S.Pd dan siap menjadi pendidik Islam Rabbani.",
  },
];

export default function PerjalananMahasiswa() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-slate-50 px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-2xl text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Perjalanan Mahasiswa
            </span>
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
          </div>
          <h2 className="mb-4 font-extrabold text-[#0B2B89] text-4xl md:text-6xl capitalize leading-tight">
            Dari Pendaftaran{" "}
            <span className="text-[#83C41F]">Sampai Wisuda</span>
          </h2>
          <p className="font-light text-slate-500 text-lg">
            Scroll untuk lihat tahap demi tahap perjalananmu di KITA, delapan
            semester menuju gelar pendidik Islam Rabbani.
          </p>
        </motion.div>

        {/* === TIMELINE === */}
        <div ref={containerRef} className="relative">
          {/* Garis belakang (statis, abu-abu) */}
          <div className="top-0 bottom-0 left-6 md:left-8 absolute bg-slate-200 w-[3px]" />
          {/* Garis terisi (hijau, mengikuti scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="top-0 left-6 md:left-8 absolute bg-gradient-to-b from-[#83C41F] to-[#0B2B89] w-[3px] origin-top"
          />

          <div className="flex flex-col gap-14 md:gap-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 90, damping: 16 }}
                  className="relative flex items-start gap-6 md:gap-8 pl-0">
                  {/* Titik ikon di atas garis */}
                  <div className="z-10 flex justify-center items-center bg-white shadow-md border-4 border-slate-50 rounded-2xl w-12 md:w-16 h-12 md:h-16 shrink-0">
                    <div className="flex justify-center items-center bg-[#0B2B89] rounded-xl w-full h-full">
                      <Icon
                        size={22}
                        className="text-[#83C41F]"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Konten tahap */}
                  <div className="flex-1 bg-white shadow-sm hover:shadow-md p-6 border border-slate-100 rounded-2xl transition-shadow">
                    <span className="inline-block bg-[#83C41F]/10 mb-2 px-3 py-1 rounded-full font-bold text-[#83C41F] text-xs uppercase tracking-wide">
                      {stage.label}
                    </span>
                    <h3 className="mb-2 font-extrabold text-slate-900 text-lg md:text-xl">
                      {stage.title}
                    </h3>
                    <p className="font-light text-slate-500 text-sm md:text-base leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
