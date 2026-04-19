import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import partialize from "./partialize";
import migrations from "./migrations";
import { createTestSlice } from "./slices/testSlice";

const useGameStore = create(
	persist(
		(set, get) => ({
			...createTestSlice(set, get),
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
