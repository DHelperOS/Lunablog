import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export const createClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase URL and Key must be defined in environment variables.')
    }

    return createSupabaseClient(supabaseUrl, supabaseKey)
}
