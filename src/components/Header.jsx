import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import kita from "../assets/kita.png";

export default function Header({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { nama: "Beranda", link: "#" },
    { nama: "Akademi", link: "#" },
    { nama: "Profil", link: "#" },
    { nama: "Keunggulan", link: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      className="top-4 left-1/2 z-50 fixed w-[95%] max-w-7xl -translate-x-1/2">
      {/* Container Utama bentuk Pil (Pill) */}
      <div
        className={`flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-300 rounded-full border ${
          scrolled
            ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-gray-100"
            : "bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-white/20"
        }`}>
        {/* 1. Sisi Kiri: Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src={kita}
            alt="Logo Kampus"
            className="w-auto h-10 object-contain"
          />
        </a>

        {/* 2. Tengah: Menu Desktop (Hidden di HP) */}
        <nav className="hidden left-1/2 absolute lg:flex items-center gap-1 -translate-x-1/2">
          {navLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative hover:bg-blue-50 px-5 py-2 rounded-full font-bold text-[#0B2B89] text-sm uppercase tracking-wide transition-colors duration-200 cursor-pointer">
              {item.nama}
            </motion.a>
          ))}
        </nav>

        {/* 3. Sisi Kanan: Tombol CTA (Hidden di HP) */}
        <div className="hidden lg:block">
          <motion.a
            onClick={onOpenDrawer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#0B2B89] hover:bg-[#081d5e] shadow-blue-900/20 shadow-md px-6 py-3 rounded-full font-bold text-white text-sm uppercase tracking-wide transition-colors duration-300">
            Pendaftaran
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1 duration-300"
            />
          </motion.a>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#0B2B89]">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Dropdown untuk Mobile (Animasi smooth) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden top-full right-0 left-0 absolute flex flex-col gap-3 bg-white shadow-xl mt-2 p-6 border border-gray-100 rounded-3xl">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="hover:bg-blue-50 px-4 py-3 rounded-xl font-bold text-[#0B2B89] text-center uppercase transition-colors">
                {item.nama}
              </a>
            ))}
            <a
              onClick={onOpenDrawer}
              className="flex justify-center items-center gap-2 bg-[#0B2B89] mt-2 px-6 py-3 rounded-xl font-bold text-white uppercase">
              Pendaftaran <ArrowRight size={18} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
