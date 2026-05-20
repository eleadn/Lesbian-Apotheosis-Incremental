import { IDS, REGISTRY } from "../registries/registry";

function collectEffects(upgrades, targetScope, targetId) {
	const effects = [];

	for (const owned of upgrades) {
		const upgrade = REGISTRY[owned.layerName].upgrades[owned.upgradeId];

		if (upgrade?.effects) {
			for (const effect of upgrade.effects) {
				if (
					effect.target.scope === targetScope &&
					effect.target.id === targetId
				) {
					effects.push(effect);
				}
			}
		}
	}

	return effects;
}

function computeTarget(baseValue, effects) {
	const addTotal = effects
		.filter((e) => e.type === IDS.common.effectTypes.ADD)
		.reduce((t, e) => t + e.value, 0);
	const multTotal = effects
		.filter((e) => e.type === IDS.common.effectTypes.MULT)
		.reduce((t, e) => t * e.value, 1);
	return (baseValue + addTotal) * multTotal;
}

export { collectEffects, computeTarget };
