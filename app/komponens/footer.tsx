"use client";
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [currentStatus, setCurrentStatus] = useState({ status: '', color: '', emoji: '', glowColor: '' });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const day = now.getDay(); // 0=Minggu, 1=Senin, ..., 6=Sabtu
      const timeInMinutes = hour * 60 + minute;

      let status = { status: '', color: '', emoji: '', glowColor: '' };

      // Belajar UTBK (setiap malam 20:00 - 21:00)
      if (hour === 20 && minute < 60) {
        status = { 
          status: 'Studying UTBK', 
          color: 'bg-orange-500', 
          emoji: '📖',
          glowColor: 'shadow-orange-500/50'
        };
      }
      // Sekolah Senin-Kamis (07:00 - 15:30)
      else if (day >= 1 && day <= 4 && timeInMinutes >= 420 && timeInMinutes < 930) {
        status = { 
          status: 'At School', 
          color: 'bg-blue-500', 
          emoji: '📚',
          glowColor: 'shadow-blue-500/50'
        };
      }
      // Sekolah Jumat (07:00 - 14:00)
      else if (day === 5 && timeInMinutes >= 420 && timeInMinutes < 840) {
        status = { 
          status: 'At School', 
          color: 'bg-blue-500', 
          emoji: '📚',
          glowColor: 'shadow-blue-500/50'
        };
      }
      // Les Selasa & Kamis (16:30 - 18:00)
      else if ((day === 2 || day === 4) && timeInMinutes >= 990 && timeInMinutes < 1080) {
        status = { 
          status: 'At Tutoring', 
          color: 'bg-purple-500', 
          emoji: '✏️',
          glowColor: 'shadow-purple-500/50'
        };
      }
      // Les Sabtu (10:00 - 11:30)
      else if (day === 6 && timeInMinutes >= 600 && timeInMinutes < 690) {
        status = { 
          status: 'At Tutoring', 
          color: 'bg-purple-500', 
          emoji: '✏️',
          glowColor: 'shadow-purple-500/50'
        };
      }
      // Available (waktu luang)
      else if (
        (day >= 1 && day <= 5 && timeInMinutes >= 930 && timeInMinutes < 990) || // Senin-Jumat setelah sekolah sebelum les
        (day >= 1 && day <= 5 && timeInMinutes >= 1080 && timeInMinutes < 1200) || // Senin-Jumat setelah les/sekolah sebelum UTBK
        (day === 6 && timeInMinutes >= 690 && timeInMinutes < 1200) || // Sabtu setelah les
        (day === 0) // Minggu
      ) {
        status = { 
          status: 'Available', 
          color: 'bg-green-500', 
          emoji: '✨',
          glowColor: 'shadow-green-500/50'
        };
      }
      // Offline (waktu lainnya)
      else {
        status = { 
          status: 'Offline', 
          color: 'bg-gray-400', 
          emoji: '💤',
          glowColor: 'shadow-gray-400/50'
        };
      }

      setCurrentStatus(status);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 30000); // Update setiap 30 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 lg:px-45 mb-5">
      <span className="text-sm text-gray-500">Current Status: </span>
      <div className="flex items-center gap-2">
        <div className="relative">
          {/* Dot dengan glowing & blinking effect */}
          <div className={`w-2.5 h-2.5 ${currentStatus.color} rounded-full shadow-lg ${currentStatus.glowColor} animate-pulse`}></div>
          
          {/* Pulsing ring untuk Available */}
          {currentStatus.status === 'Available' && (
            <>
              <span className="absolute inline-flex h-full w-full">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentStatus.color} opacity-75`}></span>
              </span>
              <span className="absolute inline-flex h-4 w-4">
                <span className={`absolute inline-flex h-full w-full rounded-full ${currentStatus.color} opacity-20 blur-sm`}></span>
              </span>
            </>
          )}
          
          {/* Glowing effect untuk status lainnya */}
          {currentStatus.status !== 'Offline' && currentStatus.status !== 'Available' && (
            <span className="absolute -inset-1 animate-pulse">
              <span className={`inline-flex h-full w-full rounded-full ${currentStatus.color} opacity-40 blur-sm`}></span>
            </span>
          )}
        </div>
        <span className={`text-sm font-medium text-gray-900 transition-all ${
          currentStatus.status === 'Available' ? 'animate-pulse' : ''
        }`}>
          {currentStatus.emoji} {currentStatus.status}
        </span>
      </div>
    </div>
  );
}