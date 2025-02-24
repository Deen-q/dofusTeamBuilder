/* Dofus Team Builder c: */
export interface CharacterBase {
	className: string;
	dpsRating: number; // 1-10
	healingRating: number; // 1-10
	effectiveRange: Array<string>;
	mobilityRating: number;
	// qualities: (string | [string, string])[];
	qualities: string[];
}

const dofusClasses: CharacterBase[] = [
	{
		className: "Iop",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
			"apReduction",
			"mpReduction",
			"buffAp",
			"buffMp",
			"buffLinearDamage",
			"buffPower",
			"buffShieldPoints",
			"teleport",
			"pushBack",
			"attraction",
			"applyVulnerability",
			"unmoveable",
			"longRangeVuln",
			"applyGravity",
		],
	},
	{
		className: "Enirispa",
		dpsRating: 5,
		healingRating: 10,
		effectiveRange: ["mediumRange", "longRange."],
		mobilityRating: 5,
		qualities: [
			"erosion",
			"apReduction",
			"mpReduction",
			"rangeReduction",
			"rangeSteal",
			"powerReduction",
			"linearDamageReduction",
			"buffAp",
			"buffMp",
			"buffPower",
			"buffShieldPoints",
			"summoner",
			"healer",
			"pushBack",
			"-effectDuraton",
			"canUnhealable",
			"applyLifesteal",
			"lifesteal",
		],
	},
	{
		className: "Enutrof",
		dpsRating: 7,
		healingRating: 8,
		effectiveRange: ["mediumRange", "longRange."],
		mobilityRating: 8,
		qualities: [
			"apReduction",
			"mpReduction",
			"rangeReduction",
			"buffAp",
			"buffMp",
			"buffRange",
			"buffPower",
			"summoner",
			"healer",
			"canSwap",
			"pushBack",
			"applyGravity",
			"-effectDuraton",
			"canPacifist",
			"applyUnlockable",
			"applyLifesteal"
		],
	},
	{
		className: "Cra",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Pandawa",
		dpsRating: 6,
		healingRating: 6,
		effectiveRange: ["meleeRange", "mediumRange", "longRange."], // melee or short, undecided
		mobilityRating: 10,
		qualities: [
			"mpReduction",
			"powerReduction",
			"buffAp",
			"buffMp",
			"buffPower",
			"buffShieldPoints",
			"summoner",
			"healer",
			"canTeleport",
			"canSwap",
			"canAdvanceCells",
			"pushBack",
			"attraction",
			"applyVulnerability",
			"unlockable",
			"closeRangeInvuln",
			"canRooted",
			"canCarry",
		],
	},
	{
		className: "Sacrier",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Feca",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Sram",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Ecaflip",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Sadida",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Osamodas",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Xelor",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Rogue",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Masqueraider",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Foggernaut",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Eliotrope",
		dpsRating: 7, // post Portal nerf.
		healingRating: 7,
		effectiveRange: ["mediumRange", "longRange."],
		mobilityRating: 10,
		qualities: [
			"mpReduction",
			"rangeReduction",
			"buffAp",
			"buffMp",
			"buffPower",
			"buffPercentDamage",
			"healer",
			"canTeleport",
			"pushBack",
			"applyVulnerability",
			"-effectDuraton",
			"portalUser",
		],
	},
	{
		className: "Huppermage",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Ouginak",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
	{
		className: "Forgerlance",
		dpsRating: 10,
		healingRating: 0,
		effectiveRange: ["shortRange", "mediumRange."],
		mobilityRating: 8,
		qualities: [
			"erosion",
		],
	},
]

export default dofusClasses