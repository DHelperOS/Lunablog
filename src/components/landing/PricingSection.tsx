"use client";

import { motion } from "framer-motion";
import { Check, Crown, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
    {
        name: "베이직",
        price: "Free",
        period: "30일 기준",
        features: ["기본 노출", "마일리지 적립 없음", "기본 기능 이용"],
        recommended: false,
    },
    {
        name: "스탠다드",
        price: "₩30,000",
        period: "30일 기준",
        features: ["상위 노출", "마일리지 5% 적립", "신뢰도 점수 스택"],
        recommended: false,
    },
    {
        name: "플러스",
        price: "₩70,000",
        period: "30일 기준",
        features: ["최상위 노출", "마일리지 10% 적립", "전용 엠블럼 지급"],
        recommended: false,
    },
    {
        name: "프리미엄",
        price: "₩120,000",
        period: "30일 기준",
        features: ["최우선 노출 (1순위)", "마일리지 15% 적립", "모든 프리미엄 기능"],
        recommended: true,
    },
];

export function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState("프리미엄");

    return (
        <section className="bg-[#111] py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold md:text-5xl"
                    >
                        루나 밤알바 플랜
                    </motion.h2>
                    <p className="text-gray-400">
                        야간알바, 여성알바를 위한 합리적인 가격으로 최상의 효과를 경험하세요.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col rounded-2xl border p-6 transition-all ${plan.recommended
                                    ? "border-purple-500 bg-purple-900/10 shadow-lg shadow-purple-900/20"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-bold text-white">
                                    Best Value
                                </div>
                            )}
                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-300">{plan.name}</h3>
                                <div className="mt-2 flex items-baseline">
                                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Free" && <span className="ml-1 text-sm text-gray-400">/ 30일</span>}
                                </div>
                            </div>

                            <ul className="mb-8 flex-1 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className={`h-4 w-4 ${plan.recommended ? 'text-purple-400' : 'text-gray-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setSelectedPlan(plan.name)}
                                className={`w-full rounded-xl py-3 text-sm font-bold transition-colors ${plan.recommended
                                        ? "bg-white text-black hover:bg-gray-100"
                                        : "border border-white/20 bg-transparent text-white hover:bg-white/10"
                                    }`}
                            >
                                {plan.recommended ? "선택됨" : "선택하기"}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Mileage Simulation Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-3xl border border-white/10 bg-[#151515] p-8 md:p-12"
                >
                    <div className="mb-8 flex items-center gap-3">
                        <div className="rounded-lg bg-yellow-500/20 p-2 text-yellow-400">
                            <Crown className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Premium Privileges</h3>
                            <p className="text-sm text-gray-400">마일리지 적립 예시 시뮬레이션</p>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">플랜 선택</label>
                                <div className="flex gap-2">
                                    {["베이직", "스탠다드", "플러스", "프리미엄"].map((p) => (
                                        <div key={p} className={`rounded-lg px-3 py-2 text-xs border ${p === "프리미엄" ? "border-purple-500 text-purple-400 bg-purple-500/10" : "border-white/10 text-gray-500"}`}>
                                            {p}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm text-gray-400">기간 선택 (장기 이용 보너스)</label>
                                <div className="relative h-2 w-full rounded-full bg-gray-700">
                                    <div className="absolute left-0 top-0 h-full w-3/4 rounded-full bg-purple-500"></div>
                                    <div className="absolute right-0 top-1/2 -mt-2 -mr-1 h-4 w-4 rounded-full bg-white shadow"></div>
                                </div>
                                <div className="mt-2 flex justify-between text-xs text-gray-500">
                                    <span>30일</span>
                                    <span>120일 (+20%)</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-[#0A0A0A] p-6 border border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-400">결제 금액 (120일)</span>
                                <span className="text-white">₩360,000</span>
                            </div>
                            <div className="flex items-center justify-between mb-4 text-sm">
                                <span className="text-purple-400">기본 적립 (15%)</span>
                                <span className="text-purple-400">+₩54,000</span>
                            </div>
                            <div className="flex items-center justify-between mb-6 text-sm">
                                <span className="text-blue-400">장기 보너스 (+10%)</span>
                                <span className="text-blue-400">+₩36,000</span>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                                <span className="font-bold text-white">최종 혜택</span>
                                <span className="text-2xl font-bold text-yellow-500">90,000 P</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
