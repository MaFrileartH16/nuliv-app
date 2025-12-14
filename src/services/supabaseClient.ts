import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

const EXPO_PUBLIC_SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const EXPO_PUBLIC_SUPABASE_KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY!;

// adaptor storage untuk supabase auth di mobile
const ExpoSecureStoreAdapter = {
	getItem: (key: string) => SecureStore.getItemAsync(key),
	setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
	removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

export const supabase = createClient(EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_KEY, {
	auth: {
		storage: ExpoSecureStoreAdapter,
		persistSession: true,
		autoRefreshToken: true,
		detectSessionInUrl: false,
	},
});
