// MANDATORY
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import partialize from "./partialize";
import migrations from "./migrations";
import { createSettingsSlice } from "./slices/settingsSlice";
import {
	createStoreCommonFunctions,
	createStoreCommonProperties,
} from "./actions/commonActions";
import { createStoreCommonUpgradeFunctions } from "./actions/commonUpgrades";
import createTickRunner from "./storeTick";

// GAME-SPECIFIC
import { createTestSlice } from "./slices/testSlice";
import { createCityLayerSlice } from "./slices/cityLayerSlice";
import { tickActiveActions } from "./ticks/storeCommonTick";
import { tickCityDetection } from "./ticks/cityLayerTick";

const tick = createTickRunner([tickActiveActions, tickCityDetection]);

const useGameStore = create(
	persist(
		(set, get) => ({
			...createTestSlice(set, get),
			...createCityLayerSlice(set, get),
			...createSettingsSlice(set, get),
			...createStoreCommonProperties(set, get),
			...createStoreCommonFunctions(set, get),
			...createStoreCommonUpgradeFunctions(set, get),
			tick: (dTime) => tick(dTime, get, set),
		}),
		{
			name: "lesbian-apotheosis",
			version: 1,
			storage: createJSONStorage(() => localStorage),
			partialize: partialize,
			migrate: migrations,
		},
	),
);

export default useGameStore;
