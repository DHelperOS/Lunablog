import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0f0a1e]/50 backdrop-blur-xl py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="space-y-4">
                        <div className="flex items-center justify-center gap-3">
                            <div className="relative h-6 w-6 overflow-hidden rounded-md">
                                <Image
                                    src="/app_icon_info.webp"
                                    alt="Luna Alba Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-100 to-violet-200">
                                루나알바
                            </h3>
                        </div>
                        <p className="text-sm font-light text-white/50 leading-relaxed">
                            "당신의 밤이 빛나는 순간, 루나알바"
                        </p>
                    </div>
                </div>            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light text-white/40">
                    <div className="space-y-1.5">
                        <p>대표: 윤미나 | 사업자 등록번호: 611-48-01140</p>
                        <p>직업정보제공사업 신고번호: J1511020250008</p>
                        <p>주소: 경기도 수원시 권선구 경수대로 384번길 60</p>
                    </div>
                    <div className="space-y-1.5 md:text-right">
                        <p>고객센터: 070-8998-1228</p>
                        <p>이메일: bamstar.help@gmail.com</p>
                        <p className="mt-4">© {new Date().getFullYear()} 루나알바. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
