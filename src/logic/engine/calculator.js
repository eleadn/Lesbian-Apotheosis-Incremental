import { REGISTRY } from "../registries/registry";
import { collectEffects, computeTarget } from "./effects";

function getActionGain(upgrades, layerName, actionId) {
	const action = REGISTRY[layerName].actions[actionId];
	const effects = collectEffects(upgrades, layerName, action.target);
	return computeTarget(action.baseValue, effects);
}

function resolveConstant(upgrades, layerName, constantId) {
	const constant = REGISTRY[layerName].constants[constantId];
	const effects = collectEffects(upgrades, layerName, constantId);
	return computeTarget(constant.value, effects);
}

export { getActionGain, resolveConstant };
