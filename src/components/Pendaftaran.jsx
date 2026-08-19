import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  ShieldCheck,
  Users,
  PartyPopper,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Pendaftaran({ isOpen, onClose }) {
  const steps = [
    {
      icon: FileText,
      title: "Isi Formulir",
      desc: "Lengkapi data diri pada formulir pendaftaran online.",
    },
    {
      icon: ShieldCheck,
      title: "Verifikasi Berkas",
      desc: "Tim kami akan memverifikasi berkas Anda dalam 1x24 jam.",
    },
    {
      icon: Users,
      title: "Wawancara",
      desc: "Tes wawancara dan potensi akademik bersama tim seleksi.",
    },
    {
      icon: PartyPopper,
      title: "Pengumuman",
      desc: "Selamat! Anda resmi menjadi bagian dari keluarga besar KITA.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. BACKDROP (Layar gelap di belakang) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="z-40 fixed inset-0 bg-[#0B2B89]/40 backdrop-blur-md"
          />

          {/* 2. SIDEBAR (Muncul dari kanan) */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="top-0 right-0 z-50 fixed flex flex-col bg-white shadow-2xl w-full max-w-2xl h-full overflow-y-auto scrollbar-none">
            {/* HEADER SIDEBAR */}
            <div className="top-0 z-9999 sticky flex justify-between items-center bg-white p-8 border-slate-100 border-b">
              <div>
                <span className="font-bold text-[#83C41F] text-xs uppercase tracking-widest">
                  Tata Cara
                </span>
                <h2 className="font-extrabold text-[#0B2B89] text-2xl">
                  Pendaftaran Mahasiswa Baru
                </h2>
              </div>
              <button
                onClick={onClose}
                className="hover:bg-slate-100 p-2 rounded-full text-slate-500 hover:text-[#0B2B89] transition-colors">
                <X size={28} />
              </button>
            </div>

            {/* ALERT KUOTA (Ide FOMO) */}
            <div className="px-8 pt-6">
              <div className="flex items-center gap-3 bg-[#83C41F]/10 p-4 border border-[#83C41F]/30 rounded-xl">
                <div className="flex justify-center items-center bg-[#83C41F] rounded-full w-10 h-10 shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0B2B89] text-sm">
                    Kuota Terbatas!
                  </p>
                  <p className="text-slate-600 text-xs">
                    Gelombang 1 saat ini telah terisi 65%. Segera lengkapi
                    pendaftaran Anda.
                  </p>
                </div>
              </div>
            </div>

            {/* TIMELINE TATA CARA (Animasi Muncul Satu per Satu) */}
            <div className="flex flex-col gap-8 p-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="relative flex gap-5">
                    {/* Garis Penghubung Timeline */}
                    {index !== steps.length - 1 && (
                      <div className="top-14 left-[26px] absolute bg-slate-100 w-[2px] h-[calc(100%-20px)]"></div>
                    )}

                    {/* Ikon */}
                    <div className="z-10 flex justify-center items-center bg-blue-50 border border-slate-100 rounded-2xl w-14 h-14 shrink-0">
                      <Icon size={24} className="text-[#0B2B89]" />
                    </div>

                    {/* Teks */}
                    <div className="pt-2">
                      <h3 className="font-extrabold text-slate-900 text-lg">
                        <span className="mr-2 text-[#83C41F]">
                          0{index + 1}.
                        </span>
                        {step.title}
                      </h3>
                      <p className="mt-1 max-w-sm font-normal text-slate-500 text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* EMBED FORM (Iframe) */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#0B2B89] w-8 h-[2px]"></div>
                <span className="font-bold text-slate-500 text-sm uppercase">
                  Formulir Pendaftaran
                </span>
              </div>

              {/* Iframe Formfacade */}
              <div className="bg-slate-50 shadow-sm border border-slate-200 rounded-2xl h-[600px] overflow-hidden">
                <iframe
                  src="https://formfacade.com/public/110819434408200866730/home/form/1FAIpQLSckNUEdgT9rVirgRjkZX9-HShqyIS0d3tKMCkZTcaOSwqs3qg"
                  title="Formulir Pendaftaran KITA"
                  className="w-full h-full"
                  frameBorder="0">
                  Memuat formulir...
                </iframe>
              </div>

              {/* Bantuan / WhatsApp (Ide Tambahan) */}
              <div className="flex sm:flex-row flex-col justify-between items-center gap-4 bg-[#0B2B89] mt-8 p-6 rounded-2xl text-white">
                <div className="sm:text-left text-center">
                  <h4 className="font-bold text-lg">
                    Ada kendala saat mendaftar?
                  </h4>
                  <p className="text-blue-200/80 text-sm">
                    Tim admisi kami siap membantu Anda 24/7.
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/6281234567890" // Ganti nomor WA kampus
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#83C41F] px-6 py-3 rounded-full font-bold text-sm uppercase whitespace-nowrap">
                  <MessageCircle size={18} /> Hubungi CS
                </motion.a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
