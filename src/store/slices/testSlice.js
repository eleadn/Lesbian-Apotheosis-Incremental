import REGISTRY from "../../logic/registry";
import { getInitialResources } from "./initialState";

export function createTestSlice() {
	return {
		test: {
			resources: getInitialResources(REGISTRY.test),
		},
	};
}
