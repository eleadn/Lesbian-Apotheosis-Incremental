import useGameStore from "../../store/gameStore";
import useLocale from "../hooks/useLocale";

export default function UpgradeButton({ upgradeLayer, upgradeId }) {
	const tr = useLocale();
	const buyUpgrade = useGameStore((s) => s.buyUpgrade);

	return (
		<button onClick={() => buyUpgrade(upgradeLayer, upgradeId)}>
			{tr(upgradeId)}
		</button>
	);
}
