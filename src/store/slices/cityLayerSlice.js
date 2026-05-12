import REGISTRY from "../../logic/registry";
import { getInitialResources } from "./initialState";

export function createCityLayerSlice() {
	return {
		cityLayer: {
			resources: getInitialResources(REGISTRY.city),
			upgrades: [],
		},
	};
}
