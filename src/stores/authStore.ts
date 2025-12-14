import { create } from "zustand";
import { supabase } from "@/services/supabaseClient";
import { fetchMyProfile } from "@/modules/auth/data/remote/userProfileRemote";

type AuthState = {
    session: any | null;
    profile: any | null;
    isLoading: boolean;
    init: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    session: null,
    profile: null,
    isLoading: true,

    init: async () => {
        // 1) ambil session lokal dulu
        const { data } = await supabase.auth.getSession();
        set({ session: data.session ?? null });

        // 2) ambil profil kalau ada session
        if (data.session) {
            const profile = await fetchMyProfile();
            set({ profile });
        }

        // 3) listen perubahan auth
        supabase.auth.onAuthStateChange(async (_event, session) => {
            set({ session: session ?? null });
            if (session) {
                const profile = await fetchMyProfile();
                set({ profile });
            } else {
                set({ profile: null });
            }
        });

        set({ isLoading: false });
    },
}));
