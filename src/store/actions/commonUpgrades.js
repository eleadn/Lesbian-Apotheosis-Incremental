import { REGISTRY } from "../../logic/registries/registry";

function createStoreCommonUpgradeFunctions(set) {
	return {
		buyUpgrade: (upgradeLayer, upgradeId) => {
			const upgrade = REGISTRY[upgradeLayer].upgrades[upgradeId];

			set((s) => {
				const alreadyOwn = s.commonProperties.upgrades.some(
					(u) => u.layer === upgradeLayer && u.id === upgradeId,
				);
				const canAfford = upgrade.cost.every(
					(c) =>
						s[c.resource.layer].resources[c.resource.id] >=
						c.amount,
				);

				if (alreadyOwn || !canAfford) return s;

				const newResourcesByLayer = {};
				for (const c of upgrade.cost) {
					const resourceLayer = c.resource.layer;
					if (!newResourcesByLayer[resourceLayer]) {
						newResourcesByLayer[resourceLayer] = {
							...s[resourceLayer].resources,
						};
					}
					newResourcesByLayer[resourceLayer][c.resource.id] -=
						c.amount;
				}

				const next = { ...s };
				for (const [resourceLayer, resources] of Object.entries(
					newResourcesByLayer,
				)) {
					next[resourceLayer] = { ...s[resourceLayer], resources };
				}
				next.commonProperties = {
					...s.commonProperties,
					upgrades: [
						...s.commonProperties.upgrades,
						{ layer: upgradeLayer, id: upgradeId },
					],
				};

				return next;
			});
		},
	};
}

export { createStoreCommonUpgradeFunctions };
