import { supabase } from "@/services/supabaseClient";

export async function fetchMyProfile() {
    const { data: authData, error: authErr } = await supabase.auth.getUser();
    if (authErr) throw authErr;
    const uid = authData.user?.id;
    if (!uid) return null;

    const { data, error } = await supabase
        .from("users")
        .select("id,email,display_name,avatar_url,language,time_zone,status")
        .eq("id", uid)
        .single();

    if (error) throw error;
    return data;
}
