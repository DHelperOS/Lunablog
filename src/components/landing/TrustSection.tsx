"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Star, BadgeCheck } from "lucide-react";

export function TrustSection() {
    return (
        <section className="bg-[#0A0A0A] py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-400">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Trust System</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                            밤알바, 프로필 사진만
                            <br />
                            보고 믿을 수 있나요?
                        </h2>
                        <p className="mb-8 text-lg text-gray-400">
                            안전한 여성알바, 야간알바를 위한 신뢰도 검증 시스템.
                            <br />
                            루나알바는 활동 내역을 기반으로 신뢰도를 점수화합니다.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                                    <UserCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold">인증 완료된 회원</h3>
                                    <p className="text-gray-400">성인인증 및 철저한 프로필 검증을 통과한 회원만 활동 가능합니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                    <BadgeCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-bold">투명한 평가 시스템</h3>
                                    <p className="text-gray-400">매너 온도와 후기를 통해 서로의 신뢰도를 확인할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual (Mockup of Trust Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl filter" />
                        <div className="relative rounded-3xl border border-white/10 bg-[#151515]/90 p-8 backdrop-blur-xl">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-full bg-gray-600" />
                                    <div>
                                        <div className="text-lg font-bold">강남 퀸스테이지</div>
                                        <div className="text-sm text-gray-400">유흥주점 • 서울 강남구</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-500">신뢰도 레벨</div>
                                    <div className="text-2xl font-bold text-purple-400">Lv.15</div>
                                </div>
                            </div>

                            <div className="mb-6 space-y-3">
                                <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <span className="text-sm text-gray-300">사업자 등록 인증</span>
                                    <BadgeCheck className="h-5 w-5 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <span className="text-sm text-gray-300">안심번호 사용</span>
                                    <BadgeCheck className="h-5 w-5 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                                    <span className="text-sm text-gray-300">최근 활동 우수</span>
                                    <Star className="h-5 w-5 text-yellow-500" />
                                </div>
                            </div>

                            <div className="rounded-xl bg-purple-500/10 p-4 text-center text-sm text-purple-300">
                                이 업체는 <span className="font-bold">신뢰도 매우 높음</span> 등급입니다.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
