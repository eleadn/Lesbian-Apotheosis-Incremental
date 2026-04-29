import { getActionGain } from "../../../logic/engine/calculator";
import IDS from "../../../logic/ids";
import useGameStore from "../../../store/gameStore";
import useLocale from "../../hooks/useLocale";

function Test() {
	const tr = useLocale();
	const numberTest = useGameStore((s) => s.test.resources.numberTest);
	const upgrades = useGameStore((s) => s.test.upgrades);
	const startAction = useGameStore((s) => s.startAction);
	const buyUpgrade = useGameStore((s) => s.buyUpgrade);

	return (
		<>
			<p>
				{tr(`${IDS.test.resources.NUMBER_TEST}.name`) +
					" : " +
					`${numberTest}`}
			</p>
			<button
				onClick={() =>
					startAction(
						IDS.test.layerName,
						IDS.test.actions.CLICK_NUMBER_TEST,
						upgrades,
					)
				}
			>
				{tr(`${IDS.test.actions.CLICK_NUMBER_TEST}.title`, {
					gain: getActionGain(
						upgrades,
						IDS.test.layerName,
						IDS.test.actions.CLICK_NUMBER_TEST,
					),
					resource: tr(`${IDS.test.resources.NUMBER_TEST}.name`),
				})}
			</button>

			<div>
				{Object.values(IDS.test.upgrades)
					.filter((u) => !upgrades.includes(u))
					.map((u) => (
						<button
							key={u}
							onClick={() => buyUpgrade(IDS.test.layerName, u)}
						>
							{tr(u)}
						</button>
					))}
			</div>
		</>
	);
}

export default Test;
