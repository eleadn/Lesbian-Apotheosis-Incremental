export default function partialize(state) {
	return {
		test: state.test,
		settings: state.settings,
		commonProperties: state.commonProperties,
	};
}
