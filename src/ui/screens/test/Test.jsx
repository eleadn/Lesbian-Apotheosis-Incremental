import useLocale from "../../hooks/useLocale";

function Test() {
	const tr = useLocale();
	return (
		<>
			<p>{tr("numberTest.name")}</p>
		</>
	);
}

export default Test;
