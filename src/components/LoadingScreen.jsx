import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [textIndex, setTextIndex] = useState(0);

  // Daftar teks animasi sesuai ide mas
  const texts = [
    "KITA",
    "Kuliah ITA",
    "Kuliah Islam TA",
    "Kuliah Islam Takhassus A",
    "Kuliah Islam Takhassus Abudzar",
  ];

  // Animasi teks bergantian tiap 1 detik
  useEffect(() => {
    if (isLoading || isOffline) {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLoading, isOffline]);

  // Simulasi loading awal (hilang setelah 3 detik)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Deteksi Wifi Mati/Nyala
  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Tampilan layar (Muncul kalau loading ATAU offline)
  const showScreen = isLoading || isOffline;

  return (
    <AnimatePresence>
      {showScreen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="z-[100] fixed inset-0 flex flex-col justify-center items-center bg-[#0B2B89] overflow-hidden">
          {/* Background Glow Hijau */}
          <div className="absolute bg-[#83C41F]/20 blur-3xl rounded-full w-96 h-96 animate-pulse"></div>

          {/* Teks Animasi Berubah */}
          <div className="z-10 relative flex justify-center items-center px-6 h-20">
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-extrabold text-white text-3xl md:text-5xl text-center capitalize tracking-wide">
                {texts[textIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Indikator Status (Loading / Wifi Mati) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bottom-20 absolute flex flex-col items-center gap-4">
            {isOffline ? (
              <div className="flex items-center gap-2 font-bold text-red-400 text-sm uppercase tracking-widest">
                <WifiOff size={20} />
                Koneksi Internet Terputus
              </div>
            ) : (
              <div className="bg-white/20 rounded-full w-12 h-1.5 overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-[#83C41F] w-full h-full"></motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
