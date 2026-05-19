function tickCityDetection(dTime, get, set) {
	const state = get();
	const exposition = state.cityLayer.resources.exposition;
	const multiplier = exposition / 100 + 1;
	const detection = Math.max(
		0,
		state.cityLayer.resources.detection + dTime * multiplier,
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
