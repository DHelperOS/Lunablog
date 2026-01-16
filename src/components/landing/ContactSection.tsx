"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <footer className="bg-[#050505] pt-24 pb-12 text-white">
            <div className="container mx-auto px-4">
                {/* Contact Info Grid */}
                <div className="mb-24 grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center rounded-2xl bg-[#111] p-8 text-center transition-transform hover:-translate-y-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                            <Mail className="h-6 w-6 text-gray-300" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">이메일 문의</h3>
                        <p className="mb-4 text-sm text-gray-400">영업일 기준 24시간 내 회신</p>
                        <a href="mailto:help@luna-job.com" className="text-purple-400 hover:underline">
                            help@luna-job.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-[#111] p-8 text-center transition-transform hover:-translate-y-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                            <MessageCircle className="h-6 w-6 text-yellow-400" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">카카오톡 채널</h3>
                        <p className="mb-4 text-sm text-gray-400">실시간 상담 하기</p>
                        <span className="font-bold">@루나</span>
                    </div>

                    <div className="flex flex-col items-center rounded-2xl bg-[#111] p-8 text-center transition-transform hover:-translate-y-1">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                            <Phone className="h-6 w-6 text-green-400" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">고객센터</h3>
                        <p className="mb-4 text-sm text-gray-400">평일 09:00 - 18:00 (주말/공휴일 휴무)</p>
                        <span className="text-xl font-bold">070 - 8998 - 1228</span>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-12">
                    <div className="mb-8">
                        <h2 className="mb-2 text-2xl font-bold">루나</h2>
                        <p className="text-gray-400">Anywhere, Anytime. 완벽한 프리미엄 야간 전문 구인구직 플랫폼.</p>
                    </div>

                    <div className="grid gap-8 text-sm text-gray-500 md:grid-cols-2">
                        <div className="space-y-2">
                            <p>루나 네트웍스(Luna Networks) | 대표: 윤미나</p>
                            <p>사업자 등록번호: 611-48-01140 | 직업정보제공사업 신고번호: J1511020250008</p>
                            <p>주소: 경기도 수원시 권선구 경수대로 384번길 60</p>
                        </div>
                        <div className="space-y-2 md:text-right">
                            <p>이메일: help@luna-job.com</p>
                            <p>고객센터: 070-8998-1228</p>
                            <p className="mt-4">© 2026 Luna Networks. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
