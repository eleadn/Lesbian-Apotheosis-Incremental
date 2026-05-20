import { getDetectionThreshold } from "../../logic/engine/cityCalculator";
import { IDS } from "../../logic/registries/registry";

function tickCityDetection(dTime, get, set) {
	const CITY_LAYER = IDS.city.LAYER_NAME;
	const EXPOSITION = IDS.city.resources.EXPOSITION;
	const DETECTION = IDS.city.resources.DETECTION;

	const state = get();
	const upgrades = state.commonProperties.upgrades;
	const exposition = state[CITY_LAYER].resources[EXPOSITION];
	const threshold = getDetectionThreshold(upgrades);

	const detection = Math.min(
		threshold,
		Math.max(
			0,
			state[CITY_LAYER].resources[DETECTION] + dTime * exposition,
		),
	);

	set((s) => ({
		[CITY_LAYER]: {
			...s[CITY_LAYER],
			resources: { ...s[CITY_LAYER].resources, [DETECTION]: detection },
		},
	}));
}

export { tickCityDetection };
