import { computeTarget } from "../logic/engine/effects";
import REGISTRY from "../logic/registry";

function createStoreCommon(set) {
	return {
		performAction: (layerName, actionId) => {
			const action = REGISTRY[layerName].actions[actionId];
			const gain = computeTarget(action.baseValue);

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
	};
}

export default createStoreCommon;
