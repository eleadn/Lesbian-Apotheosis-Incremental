import useGameStore from "../../../store/gameStore";
import useLocale from "../../hooks/useLocale";

function Test() {
	const tr = useLocale();
	const numberTest = useGameStore((s) => s.test.resources.numberTest);

	return (
		<>
			<p>{tr("numberTest.name") + " : " + `${numberTest}`}</p>
		</>
	);
}

export default Test;
