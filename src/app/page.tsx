import { Sidebar } from "@/components/blog/Sidebar";
import { PostItem } from "@/components/blog/PostItem";
import { Background } from "@/components/home/Background";
import { createClient } from "@/lib/supabase";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <div className="min-h-screen pb-20 pt-24">
      <Background />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <h1 className="mb-8 text-2xl font-bold text-white">
              최신 글
            </h1>
            <div className="space-y-6">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <PostItem key={post.id} post={{
                    id: post.id,
                    title: post.title,
                    description: post.excerpt,
                    date: new Date(post.published_at).toLocaleDateString(),
                    location: "Online", // Default or fetch if available
                    image: post.cover_image || "bg-gradient-to-br from-purple-500 to-indigo-600",
                    slug: post.slug,
                    category: post.category
                  }} />
                ))
              ) : (
                <p className="text-white/60">게시글이 없습니다.</p>
              )}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
