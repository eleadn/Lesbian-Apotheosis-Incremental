import REGISTRY from "../src/logic/registry";
import { describe, test, expect, beforeAll } from "vitest";
import { readdirSync } from "fs";

const languages = readdirSync("src/locale")
	.filter((f) => f.endsWith(".json"))
	.map((f) => f.replace(".json", ""));

const expectedFields = {};

for (const lang of languages) {
	describe(`locale ${lang}`, () => {
		let locale;

		beforeAll(async () => {
			locale = (await import(`../src/locale/${lang}.json`)).default;
		});

		test("locale file is loaded", () => expect(locale).toBeDefined());

		for (const [category, fields] of Object.entries(expectedFields)) {
			for (const entityId of Object.keys(REGISTRY[category] ?? {})) {
				for (const field of fields) {
					test(`${category}.${entityId} needs "${field}" for ${lang} language.`, () => {
						expect(
							locale[category]?.[entityId]?.[field],
						).toBeDefined();
					});
				}
			}
		}
	});
}
