export function getInitialResources(layerDef) {
	const values = {};

	for (const [id, def] of Object.entries(layerDef.resources ?? {})) {
		values[id] = def.baseValue ?? 0;
	}

	return values;
}
