import IDS from "../ids";
import REGISTRY from "../registry";

function collectEffects(ownedUpgrades, layerName, targetId) {
	const effects = [];

	for (const upgradeId of ownedUpgrades) {
		const upgrade = REGISTRY[layerName].upgrades[upgradeId];

		if (upgrade?.effects) {
			for (const effect of upgrade.effects) {
				if (effect.target === targetId) {
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
