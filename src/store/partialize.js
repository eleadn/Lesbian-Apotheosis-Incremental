import { IDS } from "../logic/registries/registry";

export default function partialize(state) {
	const TEST_LAYER = IDS.test.LAYER_NAME;
	const CITY_LAYER = IDS.city.LAYER_NAME;

	return {
		[TEST_LAYER]: state[TEST_LAYER],
		[CITY_LAYER]: state[CITY_LAYER],
		settings: state.settings,
		commonProperties: state.commonProperties,
	};
}
