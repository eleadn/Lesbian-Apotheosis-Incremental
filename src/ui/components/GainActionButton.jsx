import { getActionGain } from "../../logic/engine/calculator";
import REGISTRY from "../../logic/registry";
import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";
import ActionButton from "./ActionButton";

export default function GainActionButton({ layerName, actionId }) {
	const tr = useLocale();
	const upgrades = useGameStore((s) => s.test.upgrades);

	return (
		<ActionButton layerName={layerName} actionId={actionId}>
			{tr(`${actionId}.title`, {
				gain: getActionGain(upgrades, layerName, actionId),
				resource: tr(
					`${REGISTRY[layerName].actions[actionId].target}.name`,
				),
			})}
		</ActionButton>
	);
}
