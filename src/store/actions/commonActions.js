import { getActionGain } from "../../logic/engine/calculator";
import { REGISTRY } from "../../logic/registries/registry";

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
		startAction: (actionLayer, actionId) => {
			const action = REGISTRY[actionLayer].actions[actionId];
			const {
				performAction,
				commonProperties: { activeActions },
			} = get();

			if ((action.baseDuration ?? 0) > 0) {
				const activeAction = activeActions.find(
					(a) => a.layer === actionLayer,
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
									(a) => a.layer !== actionLayer,
								),
								{
									layer: actionLayer,
									id: actionId,
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
									layer: actionLayer,
									id: actionId,
									duration: action.baseDuration,
									elapsed: 0,
								},
							],
						},
					}));
				}
			} else {
				performAction(actionLayer, actionId);
			}
		},

		performAction: (actionLayer, actionId) => {
			const state = get();
			const action = REGISTRY[actionLayer].actions[actionId];
			const gain = getActionGain(
				state.commonProperties.upgrades,
				actionLayer,
				actionId,
			);
			const target = action.target;

			set((s) => ({
				[target.layer]: {
					...s[target.layer],
					resources: {
						...s[target.layer].resources,
						[target.id]:
							state[target.layer].resources[target.id] + gain,
					},
				},
			}));
		},
	};
}

export { createStoreCommonProperties, createStoreCommonFunctions };
