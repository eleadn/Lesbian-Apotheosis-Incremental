import { getActionGain } from "../logic/engine/calculator";
import REGISTRY from "../logic/registry";

function createStoreCommonProperties() {
	return {
		commonProperties: {
			activeActions: [],
		},
	};
}

function createStoreCommonFunctions(set, get) {
	return {
		startAction: (layerName, actionId) => {
			const action = REGISTRY[layerName].actions[actionId];

			if ((action.baseDuration ?? 0) > 0) {
				set((s) => ({
					commonProperties: {
						...s.commonProperties,
						activeActions: [
							...s.commonProperties.activeActions,
							{
								layerName,
								actionId,
								duration: action.baseDuration,
								elapsed: 0,
							},
						],
					},
				}));
			} else {
				get().performAction(layerName, actionId);
			}
		},

		performAction: (layerName, actionId) => {
			const state = get();
			const action = REGISTRY[layerName].actions[actionId];
			const gain = getActionGain(
				state[layerName].upgrades,
				layerName,
				actionId,
			);

			set((s) => ({
				[layerName]: {
					...s[layerName],
					resources: {
						...s[layerName].resources,
						[action.target]:
							s[layerName].resources[action.target] + gain,
					},
				},
			}));
		},

		buyUpgrade: (layerName, upgradeId) => {
			const upgrade = REGISTRY[layerName].upgrades[upgradeId];

			set((s) => {
				const alreadyOwn = s[layerName].upgrades.includes(upgradeId);
				const canAfford = upgrade.cost.every(
					(c) => s[layerName].resources[c.resource] >= c.amount,
				);

				if (alreadyOwn || !canAfford) return s;

				const newResources = { ...s[layerName].resources };
				for (const c of upgrade.cost) {
					newResources[c.resource] -= c.amount;
				}

				return {
					[layerName]: {
						...s[layerName],
						resources: newResources,
						upgrades: [...s[layerName].upgrades, upgradeId],
					},
				};
			});
		},
	};
}

export { createStoreCommonProperties, createStoreCommonFunctions };
