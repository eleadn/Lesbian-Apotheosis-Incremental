import { IDS, REGISTRY } from "../../logic/registries/registry";
import { getInitialResources } from "./initialState";

export function createCityLayerSlice() {
	const CITY_LAYER = IDS.city.LAYER_NAME;

	return {
		[CITY_LAYER]: {
			resources: getInitialResources(REGISTRY[CITY_LAYER]),
		},
	};
}
