import React, { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Penjelasan from "./components/Penjelasan";
import Pendaftaran from "./components/Pendaftaran";
import VisiMisi from "./components/VisiMisi";
import Output from "./components/Output";
import Pengajar from "./components/Pengajar";
import PerjalananMahasiswa from "./components/PerjalananMahasiswa"; // <-- baru
import Benefit from "./components/Benefit";
import KalkulatorBiaya from "./components/KalkulatorBiaya"; // <-- baru
import FAQ from "./components/FAQ"; // <-- baru
import Penutup from "./components/Penutup";
import Footer from "./components/Footer";
import ChatbotAI from "./components/ChatbotAI";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <CustomCursor />
      <LoadingScreen />

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
        <PerjalananMahasiswa />
        <Benefit />
        <KalkulatorBiaya />
        <FAQ />
        <Penutup onOpenDrawer={() => setIsDrawerOpen(true)} />
        <Footer />
        <ChatbotAI />
      </motion.div>

      <Pendaftaran
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}
