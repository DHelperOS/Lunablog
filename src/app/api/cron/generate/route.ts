import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

export const maxDuration = 60; // Allow 60 seconds for generation

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');

    if (type !== 'seeker' && type !== 'employer') {
        return NextResponse.json({ error: 'Invalid type. Must be "seeker" or "employer"' }, { status: 400 });
    }

    try {
        // 1. Read Prompt File
        const filename = type === 'seeker' ? 'seeker.txt' : 'employer.txt';
        const filePath = path.join(process.cwd(), filename);

        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: `Prompt file not found: ${filename}` }, { status: 404 });
        }

        const promptText = fs.readFileSync(filePath, 'utf-8');
        console.log(`Read prompt file: ${filename}, Length: ${promptText.length}`);
        console.log(`Prompt preview: ${promptText.substring(0, 100)}`);

        // 2. Generate Content with Gemini
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
        // Using the specific model requested by the user
        const model = genAI.getGenerativeModel({ model: 'gemini-flash-lite-latest' });

        const result = await model.generateContent(promptText);
        const response = await result.response;
        const text = response.text();

        // 3. Parse Title and Content (Simple Heuristic)
        // Assuming the AI generates a title in the first line or we extract it.
        // Let's ask the AI to format it as JSON in the prompt, OR just parse the first line.
        // For now, we'll take the first line as title (cleaning markdown #) and the rest as content.

        const lines = text.split('\n');
        let title = lines[0].replace(/^#+\s*/, '').trim();
        if (title.length > 100) title = title.substring(0, 100); // Truncate if too long
        const content = text; // Keep full text including title in content, or remove first line.
        // Let's keep full text as content is markdown.

        const slug = `${type}-${Date.now()}`; // Simple slug strategy

        // 4. Save to Supabase
        // Use Service Role Key to bypass RLS
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        const { data, error } = await supabase
            .from('posts')
            .insert([
                {
                    title,
                    content,
                    slug,
                    excerpt: content.substring(0, 150) + '...',
                    category: type === 'seeker' ? '구직자 가이드' : '사장님 꿀팁',
                    tags: [type, 'AI', '자동생성'],
                    published_at: new Date().toISOString(),
                }
            ])
            .select();

        if (error) {
            console.error('Supabase Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, post: data[0] });

    } catch (error: any) {
        console.error('Generation Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
