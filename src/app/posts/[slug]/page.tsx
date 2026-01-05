import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { createClient } from "@/lib/supabase";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params

    const supabase = createClient();
    const { data: post } = await supabase
        .from("posts")
        .select("title, excerpt, published_at, cover_image")
        .eq("slug", slug)
        .single();

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            type: "article",
            publishedTime: post.published_at,
            images: [post.cover_image || "/app_icon_info.webp"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || post.title,
            images: [post.cover_image || "/app_icon_info.webp"],
        },
    }
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    const supabase = createClient();
    const { data: post } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto max-w-3xl px-4 py-20">
            <Link href="/" className="mb-8 inline-flex items-center text-sm text-white/60 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>

            <header className="mb-12 text-center">
                <div className="mb-6 flex items-center justify-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {new Date(post.published_at).getFullYear() + ". " + (new Date(post.published_at).getMonth() + 1) + ". " + new Date(post.published_at).getDate() + "."}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="h-4 w-4" /> Luna Editor
                    </span>
                </div>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                    {post.title}
                </h1>
                <p className="text-xl text-white/70">
                    {post.excerpt}
                </p>
            </header>

            <div className="prose prose-invert prose-lg mx-auto">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-20 border-t border-white/10 pt-10 text-center">
                <h3 className="mb-6 text-2xl font-bold text-white">더 많은 이야기가 궁금하다면?</h3>
                <div className="flex justify-center gap-4">
                    <Link href="/">
                        <Button>다른 글 보러가기</Button>
                    </Link>
                    <Button variant="outline">구독하기</Button>
                </div>
            </div>
        </article>
    );
}
