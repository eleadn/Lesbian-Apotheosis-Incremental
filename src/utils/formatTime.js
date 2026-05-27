export default function formatTime(timeInSeconds) {
	const UNITS = [
		{ name: "seconds", suffix: ".", factor: 60, padTo: 2 },
		{ name: "minutes", suffix: ":", factor: 60, padTo: 2 },
		{ name: "hours", suffix: ":", factor: 24, padTo: 2 },
		{ name: "day", suffix: "d ", factor: 28, padTo: 0 },
		{ name: "month", suffix: "m ", factor: 12, padTo: 0 },
		{ name: "year", suffix: "y ", factor: Infinity, padTo: 0 },
	];

	const parts = {
		ms: {
			suffix: "",
			value: Math.floor((timeInSeconds % 1) * 1000),
			padTo: 3,
		},
	};
	let remaining = Math.floor(timeInSeconds);

	for (const unit of [...UNITS]) {
		if (remaining === 0 && unit.name !== "seconds") break;
		parts[unit.name] = {
			suffix: unit.suffix,
			value: remaining % unit.factor,
			padTo: unit.padTo,
		};
		remaining = Math.floor(remaining / unit.factor);
	}

	return Object.values(parts).reduceRight(
		(format, part) =>
			format +
			`${format === "" ? part.value : String(part.value).padStart(part.padTo, "0")}${part.suffix}`,
		"",
	);
}
