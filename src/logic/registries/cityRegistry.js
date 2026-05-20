const CITY_IDS = {
	layerName: "cityLayer",

	resources: {
		MONEY: "money",
		ENERGY: "energy",
		SOCIAL_CIRCLE: "socialCircle",
		EXPOSITION: "exposition",
		DETECTION: "detection",
	},

	constants: {
		DETECTION_THRESHOLD: "detectionThreshold",
	},

	upgrades: {},

	actions: {},
};

const CITY_REGISTRY = {
	resources: {
		[CITY_IDS.resources.MONEY]: {
			baseValue: 0,
		},
		[CITY_IDS.resources.SOCIAL_CIRCLE]: {
			baseValue: 0,
		},
		[CITY_IDS.resources.ENERGY]: {
			baseValue: 100,
		},
		[CITY_IDS.resources.EXPOSITION]: {
			baseValue: 1,
		},
		[CITY_IDS.resources.DETECTION]: {
			baseValue: 0,
		},
	},

	constants: {
		[CITY_IDS.constants.DETECTION_THRESHOLD]: {
			value: 60,
		},
	},

	upgrades: {},

	actions: {},
};

export { CITY_IDS, CITY_REGISTRY };
