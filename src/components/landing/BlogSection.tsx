"use client";

import { motion } from "framer-motion";
import { PostItem } from "@/components/blog/PostItem";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    published_at: string;
    cover_image: string | null;
    slug: string;
    category: string;
}

interface BlogSectionProps {
    posts: Post[];
}

export function BlogSection({ posts }: BlogSectionProps) {
    return (
        <section className="relative bg-[#0A0A0A] py-16 text-white min-h-[800px]">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/10 to-[#0A0A0A]" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-3xl font-bold md:text-5xl"
                    >
                        루나 매거진
                    </motion.h2>
                    <p className="text-gray-400">
                        유흥알바, 밤알바의 모든 정보와 트렌드를 확인하세요.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    {/* Main Content */}
                    <main>
                        <h3 className="mb-8 text-2xl font-bold text-white flex items-center gap-2">
                            <span className="h-8 w-1 bg-purple-500 rounded-full inline-block"></span>
                            최신 글
                        </h3>
                        <div className="space-y-6">
                            {posts && posts.length > 0 ? (
                                posts.map((post) => (
                                    <PostItem key={post.id} post={{
                                        id: post.id,
                                        title: post.title,
                                        description: post.excerpt,
                                        date: new Date(post.published_at).getFullYear() + ". " + (new Date(post.published_at).getMonth() + 1) + ". " + new Date(post.published_at).getDate() + ".",
                                        location: "Online",
                                        image: post.cover_image || "bg-gradient-to-br from-purple-500 to-indigo-600",
                                        slug: post.slug,
                                        category: post.category
                                    }} />
                                ))
                            ) : (
                                <div className="py-20 text-center rounded-xl bg-white/5 border border-white/10">
                                    <p className="text-white/60">게시글이 준비 중입니다.</p>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
