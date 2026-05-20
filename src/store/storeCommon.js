import { getActionGain } from "../logic/engine/calculator";
import { REGISTRY } from "../logic/registries/registry";

function createStoreCommonProperties() {
	return {
		commonProperties: {
			activeActions: [],
			upgrades: [],
		},
	};
}

function createStoreCommonFunctions(set, get) {
	return {
		startAction: (layerName, actionId) => {
			const action = REGISTRY[layerName].actions[actionId];
			const {
				performAction,
				commonProperties: { activeActions },
			} = get();

			if ((action.baseDuration ?? 0) > 0) {
				const activeAction = activeActions.find(
					(a) => a.layerName === layerName,
				);
				if (activeAction) {
					if (activeAction.actionId === actionId) {
						return;
					}
					set((s) => ({
						commonProperties: {
							...s.commonProperties,
							activeActions: [
								...s.commonProperties.activeActions.filter(
									(a) => a.layerName !== layerName,
								),
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
				}
			} else {
				performAction(layerName, actionId);
			}
		},

		performAction: (layerName, actionId) => {
			const state = get();
			const action = REGISTRY[layerName].actions[actionId];
			const gain = getActionGain(
				state.commonProperties.upgrades,
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
				const alreadyOwn = s.commonProperties.upgrades.some(
					(u) =>
						u.layerName === layerName && u.upgradeId === upgradeId,
				);
				const canAfford = upgrade.cost.every(
					(c) =>
						s[c.resource.scope].resources[c.resource.id] >=
						c.amount,
				);

				if (alreadyOwn || !canAfford) return s;

				const newResourcesByScope = {};
				for (const c of upgrade.cost) {
					const scope = c.resource.scope;
					if (!newResourcesByScope[scope]) {
						newResourcesByScope[scope] = { ...s[scope].resources };
					}
					newResourcesByScope[scope][c.resource.id] -= c.amount;
				}

				const next = { ...s };
				for (const [scope, resources] of Object.entries(
					newResourcesByScope,
				)) {
					next[scope] = { ...s[scope], resources };
				}
				next.commonProperties = {
					...s.commonProperties,
					upgrades: [
						...s.commonProperties.upgrades,
						{ layerName, upgradeId },
					],
				};

				return next;
			});
		},
	};
}

export { createStoreCommonProperties, createStoreCommonFunctions };
