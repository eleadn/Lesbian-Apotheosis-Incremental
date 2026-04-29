import COMMON_IDS from "../common_ids";
import TEST_IDS from "./ids";

const TEST_UPGRADES = {
	[TEST_IDS.upgrades.MULT_TEST]: {
		cost: [{ resource: TEST_IDS.resources.NUMBER_TEST, amount: 10 }],
		effects: [
			{
				type: COMMON_IDS.effectTypes.MULT,
				target: TEST_IDS.resources.NUMBER_TEST,
				value: 2,
			},
		],
	},
};

export default TEST_UPGRADES;
