import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";

export default function ResourceDisplay({ resourceLayer, resourceId }) {
	const tr = useLocale();
	const resource = useGameStore(
		(s) => s[resourceLayer].resources[resourceId],
	);

	return <p>{tr(`${resourceId}.name`) + " : " + `${resource}`}</p>;
}
