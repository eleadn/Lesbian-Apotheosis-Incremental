import { getDetectionThreshold } from "../../logic/engine/cityCalculator";

function tickCityDetection(dTime, get, set) {
	const state = get();
	const upgrades = state.commonProperties.upgrades;
	const exposition = state.cityLayer.resources.exposition;
	const threshold = getDetectionThreshold(upgrades);

	const detection = Math.min(
		threshold,
		Math.max(0, state.cityLayer.resources.detection + dTime * exposition),
	);

	set((s) => ({
		cityLayer: {
			...s.cityLayer,
			resources: {
				...s.cityLayer.resources,
				detection,
			},
		},
	}));
}

export { tickCityDetection };
