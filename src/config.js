import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
)

export const getCurrentUser = async () => {
    const { data: session, error } = await supabase.auth.getSession();

    return { session: session.session, error }
}