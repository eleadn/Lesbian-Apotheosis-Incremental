import REGISTRY from "../registry";
import { collectEffects, computeTarget } from "./effects";

function getActionGain(upgrades, layerName, actionId) {
	const action = REGISTRY[layerName].actions[actionId];
	const effects = collectEffects(upgrades, layerName, action.target);
	return computeTarget(action.baseValue, effects);
}

export { getActionGain };
