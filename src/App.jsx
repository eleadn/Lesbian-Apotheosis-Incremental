import { useEffect, useState } from "react";
import useGameStore from "./store/gameStore";
import { setLang } from "./locale/loader";
import Test from "./ui/screens/test/Test";

function App() {
	const [ready, setReady] = useState(false);
	const lang = useGameStore((s) => s.settings.lang);

	useEffect(() => {
		setLang(lang).then(() => setReady(true));
	}, [lang]);

	if (!ready) return null;

	return (
		<>
			<Test />
		</>
	);
}

export default App;
