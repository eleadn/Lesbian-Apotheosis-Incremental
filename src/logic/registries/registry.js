import { CITY_IDS, CITY_REGISTRY } from "./cityRegistry";
import COMMON_IDS from "./commonRegistry";
import { TEST_IDS, TEST_REGISTRY } from "./testRegistry";

const IDS = {
	common: COMMON_IDS,
	test: TEST_IDS,
	city: CITY_IDS,
};

const REGISTRY = {
	[TEST_IDS.layerName]: TEST_REGISTRY,
	[CITY_IDS.layerName]: CITY_REGISTRY,
};

export { IDS, REGISTRY };
