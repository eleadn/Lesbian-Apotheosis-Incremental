function createTickRunner(handlers) {
	return (dTime, get, set) => {
		for (const handler of handlers) {
			handler(dTime, get, set);
		}
	};
}

export default createTickRunner;
