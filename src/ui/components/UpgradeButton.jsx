import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";

export default function UpgradeButton({ layerName, upgradeId }) {
	const tr = useLocale();
	const buyUpgrade = useGameStore((s) => s.buyUpgrade);

	return (
		<button onClick={() => buyUpgrade(layerName, upgradeId)}>
			{tr(upgradeId)}
		</button>
	);
}
