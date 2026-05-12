import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import partialize from "./partialize";
import migrations from "./migrations";
import { createTestSlice } from "./slices/testSlice";
import { createSettingsSlice } from "./slices/settingsSlice";
import {
	createStoreCommonFunctions,
	createStoreCommonProperties,
} from "./storeCommon";
import createStoreTick from "./storeTick";
import { createCityLayerSlice } from "./slices/cityLayerSlice";

const useGameStore = create(
	persist(
		(set, get) => ({
			...createTestSlice(set, get),
			...createCityLayerSlice(set, get),
			...createSettingsSlice(set, get),
			...createStoreCommonProperties(set, get),
			...createStoreCommonFunctions(set, get),
			...createStoreTick(set, get),
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
