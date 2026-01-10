"use client";
import { SlidingNumber } from '@/components/motion-primitives/sliding-number';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Fungsi helper tailwind-merge standar shadcn
import { useRef, useEffect, useState } from 'react';
import { Cursor } from '@/components/motion-primitives/cursor';
import Image from "next/image"
import { Heart, PhoneCall, Settings, User, Mail, Camera, Code, PlusIcon } from 'lucide-react';
import {MapPin} from "lucide-react";
import { profile } from "console";
import { AnimatedBackground } from '@/components/motion-primitives/animated-background';
import { image } from 'framer-motion/client';
import Map from '../components/widget/map';
import Link from 'next/link';
import { Pixelify_Sans } from 'next/font/google'
import StackedBento from '../components/widget/StackedBento';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
})

// COLOR NOTES
// BACKGROUND-COLOR: oklch(96.8% 0.007 247.896) (SLATE-100)
// BOX-COLOR: oklch(96.7% 0.001 286.375) (ZINC-100)
// FONT-COLOR: oklch(20% 0.02 261.625) (ZINC-900)
// SEC-FONT-COLOR: oklch(40% 0.01 267.5) (ZINC-800)
// LABEL-COLOR: oklch(27.8% 0.033 256.848) (GRAY-900), oklch(55.4% 0.046 257.417) (SLATE-500), oklch(44.6% 0.03 256.802) (GRAY-600)
// backdrop-blur-md

const DESIGN_CARDS = [
  { id: 1, image: "/NightracerOLD.png", xHover: -45, yHover: 20, rotateHover: -12, rotateRest: -5 },
  { id: 2, image: "/ForeverYoung.png", xHover: 45, yHover: 15, rotateHover: 12, rotateRest: 5 },
  { id: 3, image: "/AnotherAprilIsGone.png", xHover: 0, yHover: 40, rotateHover: 0, rotateRest: 0, isMain: true },
];

const PHOTO_CARDS = [
  { id: 1, image: "/sunset.jpg", xHover: -40, yHover: 20, rotateHover: -10, rotateRest: -4 },
  { id: 2, image: "/iduladha.jpg", xHover: 40, yHover: 15, rotateHover: 10, rotateRest: 4 },
  { id: 3, image: "/mansion.jpg", xHover: 0, yHover: 40, rotateHover: 0, rotateRest: 0, isMain: true },
];

  const TABS = [
    {
      label: 'Me',
      icon: <User className='h-5 w-5' />,
      image: 'foto_azmi1x1.jpg'
    },
    {
      label: 'Girlfriend',
      icon: <Heart className="h-5 w-5" />,
      image: 'foto_della.jpg'
    },
    {
      label: 'Place',
      icon: <MapPin className="h-5 w-5" />,
      image: 'foto_sd.jpg'
    }
  ];

export default function Home() {
  const [time, setTime] = useState(new Date());

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  
  return (
    <main>
      <div className="py-10 px-6 sm:px-8 md:px-12 lg:px-45">
        {/* BENTO BOX */}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 grid-rows-3 gap-5">
          {/* BENTO PERTAMA */}
            <div className="box relative overflow-hidden lg:col-span-2 row-span-2 p-5 lg:p-10 rounded-4xl drop-shadow-md">
                    <div className="flex items-start gap-4">
                            <Image src="/profilepict.jpg" width={120} height={120} alt={"profilePicture"} className="rounded-md select-none" draggable="false" />
                        <div className='flex-1 mt-3'>
                            <h2 className={'lg:text-2xl text-zinc-900 font-semibold sm:text-sm ' + pixelifySans.className}>Hello, my name is 'Azmi👋🏻</h2>
                            <p className="text-gray-500 text-sm">(Also Known As Aesta)</p>
                            <p className="text-zinc-800">A graphic designer</p>
                        </div>
                    </div>
                    <div className='flex-1 mt-4 lg:mt-10 space-y-2 text-zinc-800'>
                            <p className="lg:text-md">I am a student with a strong passion for graphic design. I have been exploring design since elementary school and have gained hands-on experience through various projects. I also worked as a graphic designer in a school organization for one year, where I developed skills in visual communication, teamwork, and creative problem-solving.</p>
                            <p className="lg:text-md">In addition to design, I have a growing interest in photography and programming, which helps me approach creative work from both artistic and technical perspectives.</p>
                    </div>
                    <div className="flex gap-1 lg:gap-3 items-center text-center pt-5 lg:pt-10">
                        <a className="flex lg:mt-16 group lg:text-[15px] text-[12px] whitespace-nowrap text-zinc-800" href="/tentang-kami">
                            Instagram
                            <div className="relative overflow-hidden w-4 h-4">
                            <svg className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            <svg className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                        </a>
                        <a className="flex group lg:mt-16 text-[12px] lg:text-[15px] whitespace-nowrap text-zinc-800" href="https://forms.gle/vs3PuVDtMdWqZaPG6">
                            Personal ig
                            <div className="relative overflow-hidden w-4 h-4">
                            <svg className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            <svg className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                        </a>
                        <a className="flex group lg:mt-16 text-[12px] lg:text-[15px] whitespace-nowrap text-zinc-800" href="https://github.com/Aestatime">
                            Github
                            <div className="relative overflow-hidden w-4 h-4">
                            <svg className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            <svg className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                        </a>
                        <a className="flex group lg:mt-16 text-[12px] lg:text-[15px] whitespace-nowrap text-zinc-800" href="mailto:aestatime@gmail.com">
                            Contact Me
                            <div className="relative overflow-hidden w-4 h-4">
                            <svg className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            <svg className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                            </div>
                        </a>
                    </div>
            </div>
{/* BATAS BENTO KE 2 */}
            <div className="box relative overflow-hidden lg:col-span-2 rounded-4xl p-5 lg:p-10 drop-shadow-md">
              {/* NOTION ICON */}
              <div className='flex items-start gap-4'>
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="currentColor">
                <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"/>
                </svg>
                </div>
                  <p className={'lg:text-2xl text-zinc-900 font-semibold pt-2 ' + pixelifySans.className}>Notion Template</p>
              </div>
                        <div className="flex-1">
                          <p className="text-zinc-800 text-[16px] mt-2">Hey! I also create a Notion template. If you're interested or want to buy the template, you can click the button below to check my store!</p>
                                <a className='mt-5 group relative items-center flex rounded-2xl w-fit bg-gray-400/40 px-2 py-1.5 group text-zinc-800 shadow transition' href="https://lynk.id/aestatime">
                                    <span className="text-[15px] font-bold">See More</span>
                                    <div className='ml-1 relative overflow-hidden w-4 h-4'>
                                    <svg className="group-hover:translate-x-5 transition-all ease-out-circular duration-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    <svg className="absolute top-0 -translate-x-5 group-hover:translate-x-0 transition-all duration-700 ease-in-out-circular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    </div>
                                </a>
                        </div>
            </div>
{/* BATAS BENTO KE 3 */}
            <div className="rounded-4xl relative w-full aspect-square lg:aspect-auto overflow-hidden col-span-1 drop-shadow-md">
                {/* Container Gambar  */}
                <div className="relative h-full flex-1 w-full rounded-4xl overflow-hidden bg-gray-50">
                  <AnimatePresence mode="wait">
                    <motion.img
                    key={activeTab.label}
                    src={activeTab.image}
                    draggable={false}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Active Tab Content"
                    />
                  </AnimatePresence>
        </div>
        {/* Container Tab */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-20 flex items-center justify-between bg-gray-400/80 border border-white/25 p-1.5 rounded-2xl">
          {TABS.map((tab) => {
            const isActive = activeTab.label === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative flex-1 flex justify-center items-center py-2.5 transition-colors duration-300",
                  isActive ? "text-gray-900" : "text-slate-500 hover:text-gray-600"
                )}
              >
                {/* Latar Belakang Putih yang Bergerak (Motion Indicator) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/80 rounded-xl shadow-sm border border-gray-200/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10">{tab.icon}</span>
              </button>
            );
          })}
        </div>
            </div>
{/* BATAS BENTO KE 5 */}
            <div className="box aspect-square lg:aspect-auto overflow-hidden rounded-4xl drop-shadow-md items-center justify-center col-span-1">
              <Map></Map>
            </div>
{/* BATAS BENTO KE 6 */}
              <StackedBento
    title="Visual Gallery" 
    cards={PHOTO_CARDS} 
    href="/photo-gallery" 
  />
{/* BATAS BENTO KE 7 */}
              <div className="xl:col-span-2">
    <StackedBento 
      title="Design Archive" 
      cards={DESIGN_CARDS} 
      href="/design-archive" 
    />
  </div>
          </div>
          </div>
        </main>
      );
}