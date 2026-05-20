import useGameStore from "../../store/gameStore";

export default function ActionButton({ actionLayer, actionId, children }) {
	const startAction = useGameStore((s) => s.startAction);
	const upgrades = useGameStore((s) => s.commonProperties.upgrades);

	return (
		<button onClick={() => startAction(actionLayer, actionId, upgrades)}>
			{children}
		</button>
	);
}
