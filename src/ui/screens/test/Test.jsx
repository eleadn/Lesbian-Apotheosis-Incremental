import { IDS } from "../../../logic/registries/registry";
import GainActionButton from "../../components/GainActionButton";
import ResourceDisplay from "../../components/ResourceDisplay";
import UpgradeList from "../../components/UpgradeList";

function Test() {
	return (
		<>
			<ResourceDisplay
				layerName={IDS.city.layerName}
				resourceId={IDS.city.resources.DETECTION}
			/>
			<ResourceDisplay
				layerName={IDS.test.layerName}
				resourceId={IDS.test.resources.NUMBER_TEST}
			/>
			<GainActionButton
				layerName={IDS.test.layerName}
				actionId={IDS.test.actions.CLICK_NUMBER_TEST}
			/>
			<UpgradeList layerName={IDS.test.layerName} />
		</>
	);
}

export default Test;
