"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, MapPin, DollarSign, Clock } from "lucide-react";

export function AiMatchingSection() {
    return (
        <section className="overflow-hidden bg-[#050505] py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400"
                    >
                        <Bot className="h-4 w-4" />
                        <span>Powered by Google Gemini 3.0</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-4xl font-bold md:text-6xl"
                    >
                        나에게 최적화된 야간 일자리,
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            AI가 찾아줄게요.
                        </span>
                    </motion.h2>
                    <p className="text-gray-400 md:text-xl">
                        수백 개 공고를 일일이 볼 필요 없어요.
                        <br />
                        Gemini 3.0이 당신의 조건을 분석해서 딱 맞는 일자리만 골라 매일 아침 5장씩 보내드려요.
                    </p>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl border border-white/10 bg-[#111] p-8"
                        >
                            <Sparkles className="mb-6 h-10 w-10 text-cyan-400" />
                            <h3 className="mb-4 text-2xl font-bold">1초 정밀 분석</h3>
                            <p className="mb-8 text-gray-400">단순 키워드가 아닌 성향과 스킬까지 분석하여 최적의 매칭을 제공합니다.</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="h-5 w-5 text-gray-500" />
                                    선호 지역 & 실시간 거리 분석
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <DollarSign className="h-5 w-5 text-gray-500" />
                                    희망 수익 & 조건 매칭
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Clock className="h-5 w-5 text-gray-500" />
                                    가능 시간 & 요일 필터링
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative flex items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-[#111] p-8"
                        >
                            {/* Abstract Card Stack UI */}
                            <div className="relative h-64 w-full max-w-xs">
                                <div className="absolute top-4 w-full scale-90 rounded-2xl bg-gray-800 p-6 opacity-40 blur-[2px]" />
                                <div className="absolute top-2 w-full scale-95 rounded-2xl bg-gray-700 p-6 opacity-70 blur-[1px]" />
                                <div className="absolute top-0 w-full rounded-2xl border border-white/10 bg-[#1E1E1E] p-6 shadow-2xl">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="h-8 w-8 rounded-full bg-gray-600" />
                                        <div className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">98% 일치</div>
                                    </div>
                                    <div className="mb-2 h-4 w-2/3 rounded bg-gray-600" />
                                    <div className="mb-4 h-3 w-1/2 rounded bg-gray-700" />
                                    <div className="flex gap-2">
                                        <div className="h-8 w-full rounded bg-blue-600" />
                                        <div className="h-8 w-full rounded border border-white/20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
