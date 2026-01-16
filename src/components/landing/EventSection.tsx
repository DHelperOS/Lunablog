"use client";

import { motion } from "framer-motion";
import { Sparkles, Gift, Users } from "lucide-react";

export function EventSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-purple-900/20 py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-semibold text-purple-300"
                    >
                        EVENT
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 text-4xl font-bold md:text-6xl"
                    >
                        그랜드 오프닝 이벤트
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-12 max-w-2xl text-xl text-gray-300"
                    >
                        야간 전문 서비스 사전 예약자 전원에게 쏟아지는
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-bold text-transparent">
                            총 20만 포인트 혜택
                        </span>
                        의 기회를 놓치지 마세요.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-[#0A0A0A] p-10"
                    >
                        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"></div>
                        <Gift className="mb-6 h-12 w-12 text-yellow-400" />
                        <h3 className="mb-2 text-3xl font-bold">100,000 P 즉시 지급</h3>
                        <p className="mb-6 text-purple-200">
                            사전 예약 완료 즉시, 사용 가능한 10만 마일리지를 적립해 드립니다.
                        </p>
                        <div className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                            참여자 전원 100% 지급
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-bl from-blue-900/40 to-[#0A0A0A] p-10"
                    >
                        <div className="absolute left-0 top-0 -ml-16 -mt-16 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
                        <Users className="mb-6 h-12 w-12 text-blue-400" />
                        <h3 className="mb-2 text-3xl font-bold">친구 초대 최대 10만 P</h3>
                        <p className="mb-6 text-blue-200">
                            친구 1명당 20,000 포인트 지급. 최대 5명까지, 총 10만 포인트 추가 혜택.
                        </p>
                        <div className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                            미션 달성 시 지급
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
