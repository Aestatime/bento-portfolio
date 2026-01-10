"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pixelify_Sans } from 'next/font/google'

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
})

interface CardData {
  id: number;
  image: string;
  xHover: number;
  yHover: number;
  rotateHover: number;
  rotateRest: number;
  isMain?: boolean;
}

interface StackedBentoProps {
  title: string;
  href: string;
  isWide?: boolean;
  cards: CardData[];
}

export default function StackedBento({ title, cards, href, isWide }: StackedBentoProps) {
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <a href={href} className="block w-full lg:col-span-2">
            <motion.div
        initial="rest"
        whileHover={isMobile ? undefined : "hover"} 
        animate={isMobile ? "hover" : "rest"}
        whileTap={{ scale: 0.98 }}
className={`relative w-full h-64 ${isWide ? 'md:h-80 lg:h-96' : 'md:h-64 lg:h-72'} 
        box rounded-[2.5rem] overflow-hidden cursor-pointer drop-shadow-md`}>
      {/* Judul Seksi */}
      <div className="absolute top-6 left-6 z-30">
        <h3 className={`text-zinc-800 text-2xl font-bold tracking-tight ${pixelifySans.className}`}>{title}</h3>
      </div>

      {/* Area Kartu */}
      <div className="relative w-full h-full flex items-center justify-center">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={{
              rest: { 
                y: 140, // Diturunkan lagi agar hanya mengintip sedikit
                x: 0, 
                rotate: card.rotateRest,
                scale: 0.9,
              },
              hover: { 
                y: card.yHover, // Nilai hover yang lebih rendah agar tidak menabrak judul
                x: card.xHover, 
                rotate: card.rotateHover,
                scale: card.isMain ? 1.05 : 1,
              },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className={`absolute overflow-hidden shadow-xl border border-white/40 ${
              card.isMain 
                ? 'z-20 w-[65%] xl:w-[50%] aspect-4/3'
                : 'z-10 w-[55%] xl:w-[40%] aspect-4/3'
            }`}
            style={{ borderRadius: "1rem" }}
          >
            <Image 
              src={card.image} 
              alt="work" 
              fill 
              className="object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent z-10" />
          </motion.div>
        ))}
      </div>
    </motion.div>
    </a>
  );
}