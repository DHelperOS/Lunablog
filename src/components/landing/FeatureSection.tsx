"use client";

import { motion } from "framer-motion";
import { Shield, MessageCircle, Hand, Ghost } from "lucide-react";

const features = [
    {
        icon: <Ghost className="h-8 w-8 text-purple-400" />,
        title: "전화번호 미공개",
        description: "안심번호조차 필요 없는 완벽한 익명성으로 당신의 프라이버시를 지킵니다.",
    },
    {
        icon: <Hand className="h-8 w-8 text-pink-400" />,
        title: "간편 지원하기",
        description: "부담 없이 '간편 지원' 기능으로 가볍게 의사를 표현해보세요.",
    },
    {
        icon: <MessageCircle className="h-8 w-8 text-blue-400" />,
        title: "1:1 안심 채팅",
        description: "개인정보 노출 걱정 없이 앱 내 채팅으로 안전하게 소통하세요.",
    },
    {
        icon: <Shield className="h-8 w-8 text-green-400" />,
        title: "신뢰도 시스템",
        description: "활동 내역 기반의 신뢰도 점수로 검증된 업체를 확인하세요.",
    },
];

export function FeatureSection() {
    return (
        <section className="bg-[#0A0A0A] py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold md:text-5xl"
                    >
                        개인정보 보호 안심 야간 매칭
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 md:text-lg"
                    >
                        전문 야간 구인구직을 위한 철저한 프라이버시 보호 시스템
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
                        >
                            <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
