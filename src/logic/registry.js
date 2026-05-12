import CITY_ACTIONS from "./layers/city/actions";
import CITY_RESOURCES from "./layers/city/resources";
import CITY_UPGRADES from "./layers/city/upgrades";
import TEST_ACTIONS from "./layers/test/actions";
import TEST_RESOURCES from "./layers/test/resources";
import TEST_UPGRADES from "./layers/test/upgrades";

const REGISTRY = {
	test: {
		resources: { ...TEST_RESOURCES },
		upgrades: { ...TEST_UPGRADES },
		actions: { ...TEST_ACTIONS },
	},
	city: {
		resources: { ...CITY_RESOURCES },
		upgrades: { ...CITY_UPGRADES },
		actions: { ...CITY_ACTIONS },
	},
};

export default REGISTRY;
