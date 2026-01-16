import { createClient } from "@/lib/supabase";
import { HeroSection } from "@/components/landing/HeroSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { EventSection } from "@/components/landing/EventSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { TrustSection } from "@/components/landing/TrustSection";
import { AiMatchingSection } from "@/components/landing/AiMatchingSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ContactSection } from "@/components/landing/ContactSection";

export const revalidate = 3600;

export default async function Home() {
  const supabase = createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("published_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <HeroSection />
      <BlogSection posts={posts || []} />
      <FeatureSection />
      {/* <EventSection /> */}
      <CommunitySection />
      <TrustSection />
      <AiMatchingSection />
      {/* <PricingSection /> */}
      <ContactSection />
    </main>
  );
}
