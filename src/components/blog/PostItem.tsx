import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface PostItemProps {
    post: {
        id: string | number;
        title: string;
        description: string;
        date: string;
        location: string;
        image: string;
        slug: string;
        category?: string;
    };
}

export function PostItem({ post }: PostItemProps) {
    return (
        <Link href={`/posts/${post.slug}`} className="group block">
            <Card className="flex flex-col gap-6 overflow-hidden border-white/5 bg-white/[0.02] p-0 transition-all duration-500 hover:border-rose-200/20 hover:bg-white/[0.05] hover:shadow-rose-900/10 sm:flex-row sm:p-6">
                {/* Image */}
                <div className={`aspect-video w-full sm:w-64 shrink-0 overflow-hidden rounded-lg relative flex items-center justify-center ${post.image.includes('gradient') ? 'bg-slate-900/50' : post.image}`}>
                    {post.image.includes('gradient') && (
                        <div className="relative flex items-center justify-center">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 blur-xl bg-rose-500/20 rounded-full" />
                            {/* Star Shape */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-12 h-12 text-rose-200/80 relative z-10 drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-slate-950/20 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-0">
                    <div className="mb-2 flex items-center gap-2 text-xs text-rose-300/80">
                        <span className="font-semibold tracking-wide">{post.category || "EVENT"}</span>
                        <span className="h-0.5 w-0.5 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1 text-white/40 font-light">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                        </span>
                    </div>

                    <h3 className="mb-3 text-xl font-medium text-white/90 transition-colors duration-300 group-hover:text-rose-100">
                        {post.title}
                    </h3>

                    <p className="mb-4 text-sm text-white/60 font-light line-clamp-2 leading-relaxed">
                        {post.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-white/40 font-light">
                            <MapPin className="h-3 w-3" />
                            {post.location}
                        </div>
                        <span className="flex items-center gap-1 text-xs font-medium text-rose-300/80 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1">
                            READ MORE <ArrowRight className="h-3 w-3" />
                        </span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
