import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export function Sidebar() {
    const categories = [
        { name: "밤의 편지", count: 12, href: "/category/night-letter" },
        { name: "새벽의 팁", count: 8, href: "/category/dawn-tips" },
        { name: "별별 이야기", count: 15, href: "/category/star-stories" },
        { name: "이벤트", count: 5, href: "/category/events" },
    ];

    const tags = [
        "알바꿀팁", "야간알바", "편의점", "카페", "안전", "급여", "휴식", "일상"
    ];

    return (
        <aside className="space-y-8">
            {/* Profile Card */}
            <Card className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 h-16 w-16 rounded-2xl border border-rose-200/20 p-3">
                    <div className="relative h-full w-full">
                        <Image
                            src="/app_icon_info.webp"
                            alt="Luna Alba Profile"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white tracking-tight">루나알바</h3>
                <p className="mb-6 text-sm font-light text-white/60 leading-relaxed">
                    당신의 밤이 빛나는 순간,<br />
                    알바생과 사장님을 위한 커뮤니티
                </p>
                <div className="flex gap-4">
                    <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 text-white/40 hover:text-rose-200 hover:bg-white/5 transition-all">
                        <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 text-white/40 hover:text-rose-200 hover:bg-white/5 transition-all">
                        <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 text-white/40 hover:text-rose-200 hover:bg-white/5 transition-all">
                        <Instagram className="h-4 w-4" />
                    </Button>
                </div>
            </Card>

            {/* Categories */}
            <Card className="p-8">
                <h3 className="mb-6 text-lg font-bold text-white tracking-tight">카테고리</h3>
                <ul className="space-y-3">
                    {categories.map((category) => (
                        <li key={category.name}>
                            <Link
                                href={category.href}
                                className="flex items-center justify-between text-sm font-light text-white/60 hover:text-rose-200 transition-colors group"
                            >
                                <span className="group-hover:translate-x-1 transition-transform duration-300">{category.name}</span>
                                <span className="text-xs text-white/20">({category.count})</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Tags */}
            <Card className="p-8">
                <h3 className="mb-6 text-lg font-bold text-white tracking-tight">태그</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Link
                            key={tag}
                            href={`/tag/${tag}`}
                            className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-light text-white/60 hover:border-rose-200/20 hover:bg-white/[0.05] hover:text-rose-200 transition-all"
                        >
                            #{tag}
                        </Link>
                    ))}
                </div>
            </Card>
        </aside>
    );
}
