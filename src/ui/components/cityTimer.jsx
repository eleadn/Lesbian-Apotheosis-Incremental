import {
	getDetectionThreshold,
	getRemainingTime,
} from "../../logic/engine/cityCalculator";
import { IDS } from "../../logic/registries/registry";
import useGameStore from "../../store/gameStore";
import formatTime from "../../utils/formatTime";

export default function CityTimer() {
	const CITY_LAYER = IDS.city.LAYER_NAME;
	const DETECTION = IDS.city.resources.DETECTION;
	const EXPOSITION = IDS.city.resources.EXPOSITION;

	const upgrades = useGameStore((s) => s.commonProperties.upgrades);
	const detection = useGameStore((s) => s[CITY_LAYER].resources[DETECTION]);
	const exposition = useGameStore((s) => s[CITY_LAYER].resources[EXPOSITION]);

	const threshold = getDetectionThreshold(upgrades);
	const remainingTimeRaw = getRemainingTime(threshold, detection, exposition);
	const remainingTimeStr =
		remainingTimeRaw === Infinity ? "∞" : formatTime(remainingTimeRaw);

	return (
		<>
			<p>{remainingTimeStr}</p>
		</>
	);
}
