import CITY_IDS from "./layers/city/ids";
import COMMON_IDS from "./layers/common_ids";
import TEST_IDS from "./layers/test/ids";

const IDS = {
	common: { ...COMMON_IDS },
	test: { ...TEST_IDS },
	city: { ...CITY_IDS },
};

export default IDS;
