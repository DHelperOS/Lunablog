import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createClient()

    // Fetch all posts
    let posts: { slug: string; published_at: string }[] = []
    try {
        const { data } = await supabase
            .from('posts')
            .select('slug, published_at')
            .order('published_at', { ascending: false })
        posts = data || []
    } catch (error) {
        console.warn('Failed to fetch posts for sitemap:', error)
        // Continue with static routes only
    }

    const baseUrl = 'https://www.lunaalba.com' // Replace with your actual domain

    // Static routes
    const routes = [
        '',
        '/about',
        '/category/night-letter',
        '/category/dawn-tips',
        '/category/star-stories',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    // Dynamic post routes
    const postRoutes = posts?.map((post) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.published_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    })) || []

    return [...routes, ...postRoutes]
}
