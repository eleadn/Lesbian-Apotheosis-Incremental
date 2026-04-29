import TEST_ACTIONS from "./layers/test/actions";
import TEST_RESOURCES from "./layers/test/resources";
import TEST_UPGRADES from "./layers/test/upgrades";

const REGISTRY = {
	test: {
		resources: { ...TEST_RESOURCES },
		upgrades: { ...TEST_UPGRADES },
		actions: { ...TEST_ACTIONS },
	},
};

export default REGISTRY;
