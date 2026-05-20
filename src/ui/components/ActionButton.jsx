import useGameStore from "../../store/gameStore";

export default function ActionButton({ layerName, actionId, children }) {
	const startAction = useGameStore((s) => s.startAction);
	const upgrades = useGameStore((s) => s.commonProperties.upgrades);

	return (
		<button onClick={() => startAction(layerName, actionId, upgrades)}>
			{children}
		</button>
	);
}
