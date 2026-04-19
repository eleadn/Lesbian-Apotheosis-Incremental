import IDS from "../../../logic/ids";
import useGameStore from "../../../store/gameStore";
import useLocale from "../../hooks/useLocale";

function Test() {
	const tr = useLocale();
	const numberTest = useGameStore((s) => s.test.resources.numberTest);
	const performAction = useGameStore((s) => s.performAction);

	return (
		<>
			<p>
				{tr(`${IDS.test.resources.NUMBER_TEST}.name`) +
					" : " +
					`${numberTest}`}
			</p>
			<button
				onClick={() =>
					performAction(
						IDS.test.layerName,
						IDS.test.actions.CLICK_NUMBER_TEST,
					)
				}
			>
				+1 {tr(`${IDS.test.resources.NUMBER_TEST}.name`)}
			</button>
		</>
	);
}

export default Test;
