import { IDS, REGISTRY } from "../registries/registry";
import { resolveConstant } from "./calculator";

function getDetectionThreshold(upgrades) {
	return resolveConstant(
		upgrades,
		IDS.city.layerName,
		IDS.city.constants.DETECTION_THRESHOLD,
	);
}

export { getDetectionThreshold };
