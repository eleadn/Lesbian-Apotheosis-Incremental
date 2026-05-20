import { IDS, REGISTRY } from "../registries/registry";
import { resolveConstant } from "./calculator";

function getDetectionThreshold(upgrades) {
	const CITY_LAYER = IDS.city.LAYER_NAME;
	const DETECTION_THRESHOLD = IDS.city.constants.DETECTION_THRESHOLD;

	return resolveConstant(upgrades, CITY_LAYER, DETECTION_THRESHOLD);
}

export { getDetectionThreshold };
