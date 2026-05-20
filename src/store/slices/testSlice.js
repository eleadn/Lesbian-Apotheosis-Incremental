import { IDS, REGISTRY } from "../../logic/registries/registry";
import { getInitialResources } from "./initialState";

export function createTestSlice() {
	const TEST_LAYER = IDS.test.LAYER_NAME;

	return {
		[TEST_LAYER]: {
			resources: getInitialResources(REGISTRY[TEST_LAYER]),
		},
	};
}
