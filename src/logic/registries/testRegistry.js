import COMMON_IDS from "./commonRegistry";

const TEST_IDS = {
	layerName: "test",

	resources: {
		NUMBER_TEST: "numberTest",
	},

	upgrades: {
		MULT_TEST: "multTest",
	},

	actions: {
		CLICK_NUMBER_TEST: "clickNumberTest",
	},
};

const TEST_REGISTRY = {
	resources: {
		[TEST_IDS.resources.NUMBER_TEST]: {
			baseValue: 0,
		},
	},

	constants: {},

	upgrades: {
		[TEST_IDS.upgrades.MULT_TEST]: {
			cost: [
				{
					resource: {
						scope: TEST_IDS.layerName,
						id: TEST_IDS.resources.NUMBER_TEST,
					},
					amount: 10,
				},
			],
			effects: [
				{
					type: COMMON_IDS.effectTypes.MULT,
					target: {
						scope: TEST_IDS.layerName,
						id: TEST_IDS.resources.NUMBER_TEST,
					},
					value: 2,
				},
			],
		},
	},

	actions: {
		[TEST_IDS.actions.CLICK_NUMBER_TEST]: {
			target: TEST_IDS.resources.NUMBER_TEST,
			baseValue: 1,
			baseDuration: 1,
		},
	},
};

export { TEST_IDS, TEST_REGISTRY };
