import { IDS } from "../../../logic/registries/registry";
import CityTimer from "../../components/CityTimer";
import GainActionButton from "../../components/GainActionButton";
import ResourceDisplay from "../../components/ResourceDisplay";
import UpgradeList from "../../components/UpgradeList";

function Test() {
	const CITY_LAYER = IDS.city.LAYER_NAME;
	const TEST_LAYER = IDS.test.LAYER_NAME;
	const DETECTION = IDS.city.resources.DETECTION;
	const NUMBER_TEST = IDS.test.resources.NUMBER_TEST;
	const CLICK_NUMBER_TEST = IDS.test.actions.CLICK_NUMBER_TEST;

	return (
		<>
			<CityTimer />
			<ResourceDisplay
				resourceLayer={TEST_LAYER}
				resourceId={NUMBER_TEST}
			/>
			<GainActionButton
				actionLayer={TEST_LAYER}
				actionId={CLICK_NUMBER_TEST}
			/>
			<UpgradeList upgradesLayer={TEST_LAYER} />
		</>
	);
}

export default Test;
