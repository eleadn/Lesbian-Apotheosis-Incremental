import COMMON_IDS from "./commonRegistry";

const TEST_IDS = {
	LAYER_NAME: "test",

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
						layer: TEST_IDS.LAYER_NAME,
						id: TEST_IDS.resources.NUMBER_TEST,
					},
					amount: 10,
				},
			],
			effects: [
				{
					type: COMMON_IDS.effectTypes.MULT,
					target: {
						layer: TEST_IDS.LAYER_NAME,
						id: TEST_IDS.resources.NUMBER_TEST,
					},
					value: 2,
				},
			],
		},
	},

	actions: {
		[TEST_IDS.actions.CLICK_NUMBER_TEST]: {
			target: {
				layer: TEST_IDS.LAYER_NAME,
				id: TEST_IDS.resources.NUMBER_TEST,
			},
			baseValue: 1,
			baseDuration: 1,
		},
	},
};

export { TEST_IDS, TEST_REGISTRY };
