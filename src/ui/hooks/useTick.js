import { useEffect, useRef } from "react";
import useGameStore from "../../store/gameStore";

const TICK_INTERVAL_MS = 20;

export function useTick() {
	const lastTickDateRef = useRef(performance.now());

	useEffect(() => {
		const id = setInterval(() => {
			const now = performance.now();
			const dTime = now - lastTickDateRef.current;
			lastTickDateRef.current = now;
			useGameStore.getState().tick(dTime / 1000);
		}, TICK_INTERVAL_MS);

		return () => clearInterval(id);
	}, []);
}
