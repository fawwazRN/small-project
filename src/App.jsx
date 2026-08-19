import React, { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen"; // Import Loading
import Header from "./components/Header";
import Hero from "./components/Hero";
import Penjelasan from "./components/Penjelasan";
import Pendaftaran from "./components/Pendaftaran";
import VisiMisi from "./components/VisiMisi";
import Output from "./components/Output";
import Pengajar from "./components/Pengajar";
import Benefit from "./components/Benefit";
import Penutup from "./components/Penutup";
import Footer from "./components/Footer";
import ChatbotKita from "./components/ChatbotKita";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* 1. Layar Loading & Deteksi Offline (Muncul paling atas) */}
      <LoadingScreen />

      {/* 2. Wrapper Utama yang mengecil */}
      <motion.div
        animate={{
          scale: isDrawerOpen ? 0.95 : 1,
          borderRadius: isDrawerOpen ? "20px" : "0px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-slate-100 overflow-hidden origin-top">
        <Header onOpenDrawer={() => setIsDrawerOpen(true)} />
        <Hero onOpenDrawer={() => setIsDrawerOpen(true)} />
        <Penjelasan />
        <VisiMisi />
        <Output />
        <Pengajar />
        <Benefit />
        <Penutup />
        <Footer />
        {/* Nanti VisiMisi dan section lain ditaruh di sini */}
      </motion.div>

      {/* 3. Sidebar Pendaftaran */}
      <Pendaftaran
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
