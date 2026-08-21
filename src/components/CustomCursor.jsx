import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Custom cursor dengan Framer Motion.
 *
 * - Titik kecil (dot) ngikutin mouse persis, real-time.
 * - Ring luar "mengejar" dengan spring physics -> lebih halus daripada
 *   lerp manual, dan otomatis sinkron sama animasi lain di project ini.
 * - Membesar & berubah warna kalau hover elemen dengan atribut data-cursor.
 *
 * CARA PAKAI:
 * 1. Taruh <CustomCursor /> sekali saja di App.jsx, di luar section manapun.
 * 2. Tambahin data-cursor="button" ke tombol/link yang mau efek besar + panah.
 * 3. Tambahin data-cursor="text" ke teks/label yang mau efek ring sedang.
 * 4. Elemen tanpa data-cursor otomatis pakai ring kecil default.
 */
export default function CustomCursor() {
  const [variant, setVariant] = useState("default"); // default | button | text
  const [visible, setVisible] = useState(false);

  // Posisi mentah mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ring luar pakai spring supaya ada "lag" halus yang natural
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target.closest?.("[data-cursor]");
      setVariant(target?.getAttribute("data-cursor") || "default");
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, visible]);

  const sizes = {
    default: 32,
    text: 48,
    button: 64,
  };
  const ringSize = sizes[variant] ?? sizes.default;

  return (
    <div
      className="hidden lg:block z-[999] fixed inset-0 pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      aria-hidden="true">
      {/* Dot kecil: posisi instan, tanpa spring */}
      <motion.div
        className="top-0 left-0 fixed bg-[#83C41F] rounded-full"
        style={{
          width: 6,
          height: 6,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Ring luar: mengejar dengan spring, membesar sesuai variant */}
      <motion.div
        className="top-0 left-0 fixed flex justify-center items-center border rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor:
            variant === "button" ? "#83C41F" : "rgba(11,43,137,0.35)",
          backgroundColor:
            variant === "button" ? "rgba(131,196,31,0.12)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}>
        {variant === "button" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}>
            <ArrowRight size={16} strokeWidth={3} className="text-[#0B2B89]" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
