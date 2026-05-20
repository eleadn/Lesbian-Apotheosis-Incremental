function tickActiveActions(dTime, get, set) {
	let activeActions = get().commonProperties.activeActions;

	const updated = activeActions.map((a) => ({
		...a,
		elapsed: a.elapsed + dTime,
	}));

	const stillActive = updated.filter((a) => a.elapsed < a.duration);
	const completed = updated.filter((a) => a.elapsed >= a.duration);

	set((s) => ({
		commonProperties: {
			...s.commonProperties,
			activeActions: stillActive,
		},
	}));

	const perform = get().performAction;
	for (const a of completed) {
		perform(a.layer, a.id);
	}
}

export { tickActiveActions };
