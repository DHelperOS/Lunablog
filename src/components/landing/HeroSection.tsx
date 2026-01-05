"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0A0A0A] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md"
        >
          <span className="mr-2 flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
          </span>
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            그랜드 오프닝: D-7
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          당신이 빛나는
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            밤알바, 루나알바
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          루나알바 - 밤알바, 야간알바, 여성알바, 여자알바 전문 구인구직 플랫폼.
          <br className="hidden md:block" />
          PC와 모바일, 웹과 앱 어디서든 완벽하게.
          <br />
          당신의 프라이버시를 지키는 프리미엄 밤알바 플랫폼.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex gap-4">
            <Link
              href="https://apps.apple.com/app/id6756914273"
              className="group flex items-center justify-center rounded-xl bg-white px-6 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-gray-100"
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 384 512" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.8 125.2 25.2-.6 41.3-17.1 75-17.1 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.5-92.7zM246.8 62.9c14.1-17.1 24.8-40.9 22.2-62.9-22 1.4-49.3 11-66.4 34-12.7 16.6-25 40.8-22.1 61.8 24.8 2.5 52.8-15.6 66.3-32.9z" />
              </svg>
              App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=app.lunajob"
              className="group flex items-center justify-center rounded-xl bg-white px-6 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-gray-100"
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,13.11L18.19,16.5L15.39,13.7L18.19,10.9L20.3,14.29C20.54,14.53 20.54,14.92 20.3,15.16M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
              </svg>
              Google Play
            </Link>
          </div>
          <Link
            href="#"
            className="group flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            웹사이트 바로가기
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
