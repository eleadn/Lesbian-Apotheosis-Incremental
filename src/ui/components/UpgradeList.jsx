import { IDS } from "../../logic/registries/registry";
import useGameStore from "../../store/gameStore";
import UpgradeButton from "./UpgradeButton";

export default function UpgradeList({ layerName }) {
	const upgrades = useGameStore((s) => s.commonProperties.upgrades);

	return (
		<div>
			{Object.values(IDS[layerName].upgrades)
				.filter(
					(upgradeId) =>
						!upgrades.some(
							(u) =>
								u.layerName === layerName &&
								u.upgradeId === upgradeId,
						),
				)
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
