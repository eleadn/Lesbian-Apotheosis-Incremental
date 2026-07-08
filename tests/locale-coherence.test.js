import { REGISTRY } from "../src/logic/registries/registry";
import { describe, test, expect, beforeAll } from "vitest";
import { readdirSync } from "fs";

const languages = readdirSync("src/locale")
	.filter((f) => f.endsWith(".json"))
	.map((f) => f.replace(".json", ""));

const expectedFields = {
	resources: ["name"],
	upgrades: ["title", "description"],
	actions: ["title"],
};

for (const lang of languages) {
	describe(`locale ${lang}`, () => {
		let locale;

		beforeAll(async () => {
			locale = (await import(`../src/locale/${lang}.json`)).default;
		});

		test("locale file is loaded", () => expect(locale).toBeDefined());

		for (const [category, fields] of Object.entries(expectedFields)) {
			for (const layerData of Object.values(REGISTRY)) {
				for (const entityId of Object.keys(layerData[category] ?? {})) {
					for (const field of fields) {
						test(`${category}.${entityId} needs "${field}" for ${lang} language.`, () => {
							expect(
								locale[category]?.[entityId]?.[field],
							).toBeDefined();
						});
					}
				}
			}
		}
	});
}
