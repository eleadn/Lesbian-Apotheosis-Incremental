import { setLang } from "../../locale/loader";

export function createSettingsSlice(set, get) {
	return {
		settings: {
			lang: "en",
		},
		switchLang: async (lang) => {
			await setLang(lang);
			set({ settings: { ...get().settings, lang } });
		},
	};
}
