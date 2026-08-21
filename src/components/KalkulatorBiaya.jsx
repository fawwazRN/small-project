import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, CreditCard, Calendar, Info } from "lucide-react";

/**
 * Kalkulator Biaya Kuliah — interaktif.
 *
 * Konsep biaya (silakan sesuaikan angka ke kondisi kampus sebenarnya):
 * - Uang Pangkal: dibayar sekali di semester 1 (Rp 3.000.000)
 * - SPP per semester: Rp 1.500.000 x 8 semester = Rp 12.000.000
 * - Total sampai lulus: ± Rp 15.000.000 (sesuai klaim di hero section)
 *
 * User drag slider untuk pilih semester, kalkulator otomatis hitung:
 * - Total yang sudah dibayar sampai semester itu
 * - Sisa yang harus dibayar
 * - Estimasi cicilan bulanan (kalau pilih mode cicilan)
 */

const UANG_PANGKAL = 3_000_000;
const SPP_PER_SEMESTER = 1_500_000;
const TOTAL_SEMESTER = 8;
const BULAN_PER_SEMESTER = 6;

const formatRupiah = (num) => "Rp " + Math.round(num).toLocaleString("id-ID");

export default function KalkulatorBiaya() {
  const [semester, setSemester] = useState(1);
  const [metode, setMetode] = useState("semester"); // "semester" | "cicilan"

  const data = useMemo(() => {
    const totalKeseluruhan = UANG_PANGKAL + SPP_PER_SEMESTER * TOTAL_SEMESTER;
    const sudahDibayar = UANG_PANGKAL + SPP_PER_SEMESTER * semester;
    const sisaBayar = totalKeseluruhan - sudahDibayar;
    const biayaSemesterIni =
      semester === 1 ? UANG_PANGKAL + SPP_PER_SEMESTER : SPP_PER_SEMESTER;
    const cicilanBulanan = biayaSemesterIni / BULAN_PER_SEMESTER;
    const progress = (sudahDibayar / totalKeseluruhan) * 100;

    return {
      totalKeseluruhan,
      sudahDibayar,
      sisaBayar,
      biayaSemesterIni,
      cicilanBulanan,
      progress,
    };
  }, [semester]);

  return (
    <section className="relative bg-white px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
            <span className="font-bold text-[#83C41F] text-sm uppercase tracking-widest">
              Simulasi Biaya
            </span>
            <div className="bg-[#83C41F] w-12 h-[2px]"></div>
          </div>
          <h2 className="mb-4 font-extrabold text-[#0B2B89] text-4xl md:text-6xl capitalize leading-tight">
            Hitung Estimasi{" "}
            <span className="text-[#83C41F]">Biaya Kuliahmu</span>
          </h2>
          <p className="font-light text-slate-500 text-lg">
            Geser slider untuk lihat rincian biaya di tiap semester, sampai
            lulus di semester 8.
          </p>
        </motion.div>

        {/* === KARTU KALKULATOR === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="bg-slate-50 shadow-xl p-8 md:p-12 border border-slate-100 rounded-3xl">
          {/* Toggle metode pembayaran */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white shadow-sm p-1.5 border border-slate-200 rounded-full">
              <button
                onClick={() => setMetode("semester")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                  metode === "semester"
                    ? "bg-[#0B2B89] text-white"
                    : "text-slate-500 hover:text-[#0B2B89]"
                }`}>
                <Wallet size={16} /> Per Semester
              </button>
              <button
                onClick={() => setMetode("cicilan")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-colors ${
                  metode === "cicilan"
                    ? "bg-[#0B2B89] text-white"
                    : "text-slate-500 hover:text-[#0B2B89]"
                }`}>
                <CreditCard size={16} /> Cicilan Bulanan
              </button>
            </div>
          </div>

          {/* Slider Semester */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-slate-500 text-xs uppercase tracking-wide">
                Semester
              </span>
              <span className="font-extrabold text-[#0B2B89] text-2xl">
                {semester}
                <span className="ml-1 font-medium text-slate-400 text-sm">
                  / {TOTAL_SEMESTER}
                </span>
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={TOTAL_SEMESTER}
              value={semester}
              onChange={(e) => setSemester(Number(e.target.value))}
              className="kita-slider"
              style={{
                background: `linear-gradient(to right, #83C41F ${
                  ((semester - 1) / (TOTAL_SEMESTER - 1)) * 100
                }%, #e2e8f0 ${((semester - 1) / (TOTAL_SEMESTER - 1)) * 100}%)`,
              }}
            />

            <div className="flex justify-between mt-2 text-slate-400 text-xs">
              <span>Semester 1</span>
              <span>Wisuda (Sem. 8)</span>
            </div>
          </div>

          {/* Progress Total */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-500 text-xs uppercase tracking-wide">
                Progres Pembayaran
              </span>
              <span className="font-bold text-[#83C41F] text-xs">
                {Math.round(data.progress)}%
              </span>
            </div>
            <div className="bg-slate-200 rounded-full w-full h-3 overflow-hidden">
              <motion.div
                animate={{ width: `${data.progress}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="bg-gradient-to-r from-[#83C41F] to-[#6ba317] rounded-full h-full"
              />
            </div>
          </div>

          {/* === HASIL KALKULASI === */}
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
            {/* Biaya semester ini / cicilan bulanan */}
            <div className="bg-[#0B2B89] shadow-lg p-6 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={16} className="text-[#83C41F]" />
                <span className="font-bold text-blue-200 text-xs uppercase tracking-wide">
                  {metode === "cicilan"
                    ? "Cicilan / Bulan"
                    : "Biaya Semester Ini"}
                </span>
              </div>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={
                    metode === "cicilan"
                      ? data.cicilanBulanan
                      : data.biayaSemesterIni
                  }
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-extrabold text-2xl md:text-3xl">
                  {formatRupiah(
                    metode === "cicilan"
                      ? data.cicilanBulanan
                      : data.biayaSemesterIni,
                  )}
                </motion.p>
              </AnimatePresence>
              {semester === 1 && (
                <p className="mt-1 text-blue-200/70 text-xs">
                  Termasuk uang pangkal Rp 3.000.000
                </p>
              )}
            </div>

            {/* Sudah dibayar */}
            <div className="bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Wallet size={16} className="text-[#83C41F]" />
                <span className="font-bold text-slate-400 text-xs uppercase tracking-wide">
                  Total Terbayar
                </span>
              </div>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={data.sudahDibayar}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-extrabold text-slate-900 text-2xl md:text-3xl">
                  {formatRupiah(data.sudahDibayar)}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Sisa */}
            <div className="bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Info size={16} className="text-[#83C41F]" />
                <span className="font-bold text-slate-400 text-xs uppercase tracking-wide">
                  Sisa Sampai Lulus
                </span>
              </div>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={data.sisaBayar}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-extrabold text-slate-900 text-2xl md:text-3xl">
                  {formatRupiah(data.sisaBayar)}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-8 text-slate-400 text-xs text-center leading-relaxed">
            *Simulasi ini adalah estimasi umum. Rincian biaya resmi akan
            dikonfirmasi oleh tim admisi saat proses pendaftaran.
          </p>
        </motion.div>
      </div>

      {/* Styling custom untuk slider thumb — taruh sekali di index.css kalau
          dipakai di banyak tempat, di sini pakai <style> lokal biar simpel */}
      <style>{`
        .kita-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }
        .kita-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #0B2B89;
          box-shadow: 0 4px 12px rgba(11,43,137,0.3);
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .kita-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .kita-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 9999px;
          background: #ffffff;
          border: 4px solid #0B2B89;
          box-shadow: 0 4px 12px rgba(11,43,137,0.3);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
