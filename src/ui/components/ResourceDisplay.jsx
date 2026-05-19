import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";

export default function ResourceDisplay({ layerName, resourceId }) {
	const tr = useLocale();
	const resource = useGameStore((s) => s[layerName].resources[resourceId]);

	return <p>{tr(`${resourceId}.name`) + " : " + `${resource}`}</p>;
}
