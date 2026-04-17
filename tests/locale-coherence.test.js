import REGISTRY from "../src/logic/registry";
import fr from "../src/locale/fr.json";
import en from "../src/locale/en.json";
import { describe, test, expect } from "vitest";

const languages = { fr, en };
const expectedFields = {};

for (const [lang, locale] of Object.entries(languages)) {
	describe(`locale ${lang}`, () => {
		test("locale file is loaded", () => expect(locale).toBeDefined());

		for (const [category, fields] of Object.entries(expectedFields)) {
			for (const entityId of Object.keys(REGISTRY[category] ?? {})) {
				for (const field of fields) {
					test(`${category}.${entityId} has "${field}"`, () => {
						expect(
							locale[category]?.[entityId]?.[field],
						).toBeDefined();
					});
				}
			}
		}
	});
}
