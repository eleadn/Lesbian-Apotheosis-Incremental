import { tr } from "../../locale/loader";
import useGameStore from "../../store/gameStore";

export default function useLocale() {
	useGameStore((s) => s.settings.lang);
	return tr;
}
