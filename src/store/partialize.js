export default function partialize(state) {
	return {
		test: state.test,
		cityLayer: state.cityLayer,
		settings: state.settings,
		commonProperties: state.commonProperties,
	};
}
