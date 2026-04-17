let currentLocale = {};
let fallbackLocale = {};

async function loadLocale(lang) {
	const mod = await import(`./${lang}.json`).catch(() => null);
	return mod?.default ?? {};
}

async function setLang(lang) {
	currentLocale = await loadLocale(lang);

	if (Object.keys(fallbackLocale).length === 0) {
		fallbackLocale = await loadLocale("en");
	}
}

function resolve(key, locale) {
	return key.split(".").reduce((obj, k) => obj?.[k], locale);
}

function tr(key) {
	return resolve(key, currentLocale) ?? resolve(key, fallbackLocale) ?? key;
}

export { setLang, tr };
