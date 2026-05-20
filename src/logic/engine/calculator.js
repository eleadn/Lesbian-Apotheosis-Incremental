import { REGISTRY } from "../registries/registry";
import { collectEffects, computeTarget } from "./effects";

function getActionGain(upgrades, actionLayer, actionId) {
	const action = REGISTRY[actionLayer].actions[actionId];
	const target = action.target;
	const effects = collectEffects(upgrades, target.layer, target.id);
	return computeTarget(action.baseValue, effects);
}

function resolveConstant(upgrades, constantLayer, constantId) {
	const constant = REGISTRY[constantLayer].constants[constantId];
	const effects = collectEffects(upgrades, constantLayer, constantId);
	return computeTarget(constant.value, effects);
}

export { getActionGain, resolveConstant };
