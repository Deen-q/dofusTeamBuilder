
interface CharacterBase {
	className: string;
  dpsRating: number; // 1-10
	healingRating: number; // 1-10
  effectiveRange: Array<string>;
  // qualtities: string[];
	mobilityRating: number;
	qualities: (string | [string, string])[];
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
			["apReduction", "Precipitate usage"], 
			"mpReduction", 
			["buffAp", "Precipitate usage."], 
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
		className: "Enutrof",
  	dpsRating: 7,
		healingRating: 8,
  	effectiveRange: ["mediumRange", "longRange"],
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
			["applyLifesteal", "Mine Fire, similar to Prey."],
		],
	},
	{
		className: "Enirispa",
  	dpsRating: 5,
		healingRating: 10,
  	effectiveRange: ["mediumRange", "longRange"],
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
			["applyLifesteal", "Bloodless Word, similar to Prey."],
			"lifesteal",
		],
	},
	{
		className: "Eliotrope",
  	dpsRating: 7, // post Portal nerf.
		healingRating: 7,
  	effectiveRange: ["mediumRange", "longRange"],
		mobilityRating: 10,
  	qualities: [
			"mpReduction",
  		"rangeReduction",
  		"buffAp",
  		"buffMp",
  		"buffPower",
  		"buffPercentDamage",
  		"healer",
  		["canTeleport", "Exodus."],
  		"pushBack",
  		"applyVulnerability",
  		"-effectDuraton",
			"portalUser",
		],
	},
	{
		className: "Pandawa",
  	dpsRating: 6,
		healingRating: 6,
  	effectiveRange: ["meleeRange", "mediumRange", "longRange"], // melee or short, undecided
		mobilityRating: 10,
  	qualities: [
			"mpReduction",
  		"powerReduction",
  		["buffAp", "Self only."],
  		"buffMp",
  		["buffPower", "Self only."],
  		["buffShieldPoints", "Self only."], 
  		"summoner",
  		"healer",
  		["canTeleport", "Eviction."],
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
]

export default dofusClasses