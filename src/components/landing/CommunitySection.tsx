"use client";

import { motion } from "framer-motion";
import { MessageSquare, Heart, ShoppingBag, Store } from "lucide-react";
import { useState } from "react";

const tabs = [
    { id: "talk", label: "밤알바 전용 밤톡", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "daily", label: "오늘의 한줄", icon: <Heart className="h-4 w-4" /> },
    { id: "market", label: "밤알바 중고거래", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "review", label: "업체리뷰", icon: <Store className="h-4 w-4" /> },
];

export function CommunitySection() {
    const [activeTab, setActiveTab] = useState("talk");

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
                        밤알바를 함께하는 우리들의 이야기
                    </motion.h2>
                    <p className="text-gray-400">혼자가 아니에요. 같은 밤을 보내는 언니들과 함께해요.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="mb-12 flex flex-wrap justify-center gap-4 rounded-full border border-white/10 p-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${activeTab === tab.id
                                        ? "bg-white text-black"
                                        : "bg-transparent text-gray-400 hover:text-white"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {/* Content placeholders based on selected tab */}
                        {activeTab === "talk" && (
                            <>
                                <div className="rounded-2xl bg-[#1A1A1A] p-6 hover:bg-[#222]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-purple-500/20" />
                                        <div>
                                            <div className="font-bold">익명 언니</div>
                                            <div className="text-xs text-gray-500">방금 전</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">"오늘 손님 진상이었어... ㅠㅠ 어떻게 대처해야 할까?"</p>
                                    <div className="mt-4 flex gap-4 text-sm text-gray-500">
                                        <span>댓글 5</span>
                                        <span>조회 120</span>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-[#1A1A1A] p-6 hover:bg-[#222]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-pink-500/20" />
                                        <div>
                                            <div className="font-bold">고민 상담</div>
                                            <div className="text-xs text-gray-500">10분 전</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">"언니들 이거 어떻게 생각해? 조언 좀 부탁해..."</p>
                                    <div className="mt-4 flex gap-4 text-sm text-gray-500">
                                        <span>댓글 12</span>
                                        <span>조회 340</span>
                                    </div>
                                </div>
                                <div className="rounded-2xl bg-[#1A1A1A] p-6 hover:bg-[#222]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-blue-500/20" />
                                        <div>
                                            <div className="font-bold">꿀팁 공유</div>
                                            <div className="text-xs text-gray-500">30분 전</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">"일하면서 알게 된 나만의 노하우 풉니다 ㅋㅋ"</p>
                                    <div className="mt-4 flex gap-4 text-sm text-gray-500">
                                        <span>댓글 24</span>
                                        <span>조회 890</span>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeTab === "daily" && (
                            <>
                                <div className="col-span-3 text-center text-gray-500 py-10">
                                    "오늘 퇴근하고 라면 먹는 중 🍜" - 소소한 일상을 공유해보세요.
                                </div>
                            </>
                        )}
                        {activeTab === "market" && (
                            <>
                                <div className="col-span-3 text-center text-gray-500 py-10">
                                    입지도 않은 옷, 안 쓰는 물건들, 여기서 새 주인을 찾아주세요.
                                </div>
                            </>
                        )}
                        {activeTab === "review" && (
                            <>
                                <div className="col-span-3 text-center text-gray-500 py-10">
                                    "여기 사장님 진짜 좋아요" - 솔직한 업체 리뷰를 확인하세요.
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
