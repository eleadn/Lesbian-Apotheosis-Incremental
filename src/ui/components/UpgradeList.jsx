import { IDS } from "../../logic/registries/registry";
import useGameStore from "../../store/gameStore";
import UpgradeButton from "./UpgradeButton";

export default function UpgradeList({ upgradesLayer }) {
	const upgrades = useGameStore((s) => s.commonProperties.upgrades);

	return (
		<div>
			{Object.values(IDS[upgradesLayer].upgrades)
				.filter(
					(upgradeId) =>
						!upgrades.some(
							(u) =>
								u.layer === upgradesLayer && u.id === upgradeId,
						),
				)
				.map((upgradeId) => (
					<UpgradeButton
						key={upgradeId}
						upgradeLayer={upgradesLayer}
						upgradeId={upgradeId}
					/>
				))}
		</div>
	);
}
