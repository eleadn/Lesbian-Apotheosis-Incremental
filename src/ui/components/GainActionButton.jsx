import { getActionGain } from "../../logic/engine/calculator";
import { REGISTRY } from "../../logic/registries/registry";
import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";
import ActionButton from "./ActionButton";

export default function GainActionButton({ actionLayer, actionId }) {
	const tr = useLocale();
	const upgrades = useGameStore((s) => s.commonProperties.upgrades);

	return (
		<ActionButton actionLayer={actionLayer} actionId={actionId}>
			{tr(`${actionId}.title`, {
				gain: getActionGain(upgrades, actionLayer, actionId),
				resource: tr(
					`${REGISTRY[actionLayer].actions[actionId].target.id}.name`,
				),
			})}
		</ActionButton>
	);
}
