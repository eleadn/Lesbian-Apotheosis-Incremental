import { REGISTRY } from "../../logic/registries/registry";
import { getInitialResources } from "./initialState";

export function createTestSlice() {
	return {
		test: {
			resources: getInitialResources(REGISTRY.test),
			upgrades: [],
		},
	};
}
