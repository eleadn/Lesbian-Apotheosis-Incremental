import IDS from "../../logic/ids";
import useGameStore from "../../store/gameStore";
import UpgradeButton from "./UpgradeButton";

export default function UpgradeList({ layerName }) {
	const upgrades = useGameStore((s) => s.test.upgrades);

	return (
		<div>
			{Object.values(IDS[layerName].upgrades)
				.filter((upgradeId) => !upgrades.includes(upgradeId))
				.map((upgradeId) => (
					<UpgradeButton
						key={upgradeId}
						layerName={layerName}
						upgradeId={upgradeId}
					/>
				))}
		</div>
	);
}
