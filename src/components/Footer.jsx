import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import kita from "../assets/kita.png"; // Sesuaikan path logo kamu

// --- Custom SVG Icons untuk Sosial Media ---
const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const contacts = [
    {
      icon: Phone,
      label: "Telepon",
      value: "0822 - 1706 - 6090",
      href: "tel:082217066090",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: "@kuliahabudzar",
      href: "https://instagram.com/kuliahabudzar",
    },
    {
      icon: YoutubeIcon,
      label: "YouTube",
      value: "Media Abu Dzar",
      href: "https://youtube.com",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kita@abudzar.or.id",
      href: "mailto:kita@abudzar.or.id",
    },
  ];

  return (
    <footer className="relative bg-[#050f30] px-6 md:px-12 pt-24 pb-10 border-white/5 border-t overflow-hidden text-white">
      {/* Dekorasi Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L50 30 L80 40 L50 50 L40 80 L30 50 L0 40 L30 30 Z' stroke='white' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
        }}></div>

      <div className="z-10 relative gap-12 grid grid-cols-1 lg:grid-cols-12 mx-auto max-w-7xl">
        {/* === SISI KIRI: INFO & KONTAK === */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#83C41F] w-12 h-[2px]"></div>
              <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
                Kontak & Media Sosial
              </span>
            </div>

            <div className="flex flex-col">
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 py-4 border-white/10 hover:border-[#83C41F]/50 border-b transition-colors">
                    <div className="flex justify-center items-center bg-white/5 group-hover:bg-[#83C41F] rounded-xl w-10 h-10 transition-colors duration-300">
                      <Icon className="text-[#83C41F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-blue-200/50 text-xs uppercase tracking-wide">
                        {c.label}
                      </span>
                      <span className="font-bold text-white group-hover:text-[#83C41F] transition-colors duration-300">
                        {c.value}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-white/10 group-hover:text-white/80 transition-colors"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Alamat Card */}
          <div className="bg-white/[0.03] backdrop-blur-md p-6 border border-white/10 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="flex justify-center items-center bg-[#83C41F]/10 rounded-xl w-10 h-10 shrink-0">
                <MapPin size={20} className="text-[#83C41F]" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-white text-sm uppercase tracking-wide">
                  Alamat Kampus
                </h4>
                <p className="font-light text-blue-100/60 text-sm leading-relaxed">
                  Jl. Sumatera Gg. H. Bakri, Kampung Rawa Lele, Jombang,
                  Ciputat, Tangerang Selatan 15414
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === SISI KANAN: PETA LOKASI === */}
        <div className="flex flex-col lg:col-span-7">
          <div className="flex justify-between items-center gap-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#83C41F] w-12 h-[2px]"></div>
              <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
                Tentang Kami
              </span>
            </div>
          </div>

          {/* Map Embed (Grayscale to Color on Hover) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative shadow-2xl border border-white/10 rounded-3xl w-full h-[300px] lg:h-full min-h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Ciputat,+Tangerang+Selatan&output=embed"
              className="grayscale group-hover:grayscale-0 w-full h-full transition-all duration-700 ease-in-out"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kampus KITA"></iframe>

            {/* Overlay Pin Marker (Dekoratif) */}
            <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-full pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative">
                <div className="flex justify-center items-center bg-[#83C41F] shadow-xl border-4 border-white rounded-full w-8 h-8">
                  <div className="bg-white rounded-full w-2 h-2"></div>
                </div>
                <div className="-bottom-2 left-1/2 absolute bg-[#83C41F] w-2 h-2 rotate-45 -translate-x-1/2"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* === BOTTOM BAR (Logo, Slogan & Copyright) === */}
      <div className="flex md:flex-row flex-col justify-between items-center gap-6 mx-auto mt-16 pt-8 border-white/10 border-t max-w-7xl">
        <div className="flex items-center gap-4">
          <img
            src={kita}
            alt="Logo Kampus KITA"
            className="w-auto h-12 object-contain"
          />
          <div>
            <h4 className="font-extrabold text-white text-sm md:text-base uppercase tracking-wide">
              Kuliah Islam & Takhasus Abudzar
            </h4>
            <p className="font-light text-blue-200/40 text-xs md:text-sm italic">
              Mencetak Generasi Pendidik Islam Rabbani
            </p>
          </div>
        </div>

        <p className="font-light text-blue-200/40 text-xs md:text-sm text-center md:text-right">
          Copyright © 2025 TheRajulain. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
