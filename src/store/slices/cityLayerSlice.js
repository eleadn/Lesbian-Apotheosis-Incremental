import { CITY_IDS } from "../../logic/registries/cityRegistry";
import { REGISTRY } from "../../logic/registries/registry";
import { getInitialResources } from "./initialState";

export function createCityLayerSlice() {
	return {
		[CITY_IDS.layerName]: {
			resources: getInitialResources(REGISTRY[CITY_IDS.layerName]),
		},
	};
}
