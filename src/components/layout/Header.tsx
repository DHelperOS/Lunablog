import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0f0a1e]/70 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative h-6 w-6 overflow-hidden rounded-md">
                        <Image
                            src="/app_icon_info.webp"
                            alt="Luna Alba Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-100 to-violet-200">
                        루나
                    </span>
                </Link>
            </div>
        </header>
    );
}
