
interface CharacterBase {
	className: string;
  dpsRating: number; // 1-10
  effectiveRange: Array<string>;
  // qualtities: string[];
	qualities: (string | [string, string])[];
}

const dofusClasses: CharacterBase[] = [
	{
		className: "Iop",
  	dpsRating: 10,
  	effectiveRange: ["shortRange", "mediumRange"],
  	qualities: [
			"erosion", 
			["apReduction", "Precipitate usage"], 
			"mpReduction", 
			["buffAp", "Precipitate usage"], 
			"buffMp", 
			"buffDam",
			// "buffLinearDamage",  REPLACE buffDam
			"buffPower", 
			"buffShieldPoints", 
			"soloMobility", 
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
  	effectiveRange: ["mediumRange", "longRange"],
  	qualities: [
			"apReduction",
			"mpReduction",
			"rangeReduction",
			"buffAp",
			"buffMp",
			["buffPower", "Self only"],
			"summoner",
			"healer",
			"soloMobility",
			"pushBack",
			"attraction",
			// "unmoveable",
			"invulnerable",
			"longRangeInvuln",
			"applyGravity",
			"-effectDuraton",
			"canPacifist",
		],
	},
	{
		className: "Enirispa",
  	dpsRating: 5,
  	effectiveRange: ["mediumRange", "longRange"],
  	qualities: [
			"erosion",
  		"apReduction",
  		"mpReduction",
			"rangeReduction",
			"powerReduction",
			"linearDamageReduction",
  		"buffAp",
  		"buffMp",
  		"buffPower",
  		"buffShieldPoints",
  		"summoner",
  		"healer",
  		"pushBack",
  		"unmoveable",
  		"invulnerable",
  		"longRangeVuln",
  		"canGravity",
  		"-effectDuraton",
  		"canUnhealable",
			["applyLifesteal", "Bloodless Word, similar to Prey."],
			"lifesteal",
		],
	},
	{
		className: "Eliotrope",
  	dpsRating: 7,
  	effectiveRange: ["mediumRange", "longRange"],
  	qualities: [
			"mpReduction",
  		"rangeReduction",
  		"buffAp",
  		"buffMp",
  		"buffPower",
  		"buffPercentDamage",
  		"healer",
  		"soloMobility",
  		"pushBack",
  		"applyVulnerability",
  		"-effectDuraton",
		],
	},
	{
		className: "Pandawa",
  	dpsRating: 6,
  	effectiveRange: ["meleeRange", "mediumRange", "longRange"], // melee or short, undecided
  	qualities: [
			"mpReduction",
  		"powerReduction",
  		["buffAp", "Self only."],
  		"buffMp",
  		["buffPower", "Self only."],
  		["buffShieldPoints", "Self only."], 
  		"summoner",
  		"healer",
  		"soloMobility",
  		"pushBack",
  		"attraction",
  		"applyVulnerability",
  		"unlockable",
  		"closeRangeInvuln",
  		"canRooted",
		],
	},
]

export default dofusClasses

// // all mentioned properties are assumed true
// interface Iop extends CharacterBase {
//   erosion: boolean;
//   apReduction: boolean;
//   mpReduction: boolean;
//   buffAp: boolean;
//   buffMp: boolean;
//   buffDam: boolean; // divine blade
//   buffPower: boolean;
//   buffShieldPoints: boolean;
//   soloMobility: boolean;
//   pushBack: boolean;
//   attraction: boolean;
//   applyVulnerability: [boolean, string];
//   unmoveable: boolean;
//   invulnerable: boolean;
//   longRangeVuln: boolean;
// }

// const iopCharacter:  Iop = {
//   dpsRating: 10,
//   effectiveRange: ["closeRange", "midRange"],
//   erosion: true,
//   apReduction: true,
//   mpReduction: true,
//   buffAp: true,
//   buffMp: true,
//   buffDam: true,
//   buffPower: true,
//   buffShieldPoints: true,
//   soloMobility: true,
//   pushBack: true,
//   attraction: true,
//   applyVulnerability: [true, "string"],
//   unmoveable: true,
//   invulnerable: true,
//   longRangeVuln: true,
// };

// export default {
//   iopCharacter: {
//     dpsRating: 10,
//     effectiveRange: ["closeRange", "midRange"],
//     erosion: true,
//     apReduction: true,
//     mpReduction: true,
//     buffAp: true,
//     buffMp: true,
//     buffDam: true,
//     buffPower: true,
//     buffShieldPoints: true,
//     soloMobility: true,
//     pushBack: true,
//     attraction: true,
//     applyVulnerability: [true, "string"],
//     unmoveable: true,
//     invulnerable: true,
//     longRangeVuln: true,
//   },
// }

// // export interface Enutrof extends CharacterBase {
// //   // erosion: boolean;
// //   apReduction: boolean;
// //   mpReduction: boolean;
// //   rangeReduction: boolean;
// //   buffAp: boolean;
// //   buffMp: boolean;
// //   // buffShieldPoints: boolean;
// //   // buffDamage: boolean;
// //   buffPower: [boolean, string]; // where string indicates it's for self only.
// //   // shieldPoints: boolean;
// //   summoner: boolean;
// //   healer: [boolean, string]; // true and tier. Could be true and number instead.
// //   soloMobility: boolean;
// //   pushBack: boolean;
// //   attraction: boolean;
// //   // vulnerability: boolean;
// //   unmoveable: boolean;
// //   invulnerable: boolean;
// //   longRangeInvuln: boolean;
// //   canGravity: boolean;
// //   minusEffectDuraton: boolean;
// //   canPacifist: boolean;
// // }

// // export interface Enirispa extends CharacterBase {
// //   erosion: boolean;
// //   apReduction: boolean;
// //   mpReduction: boolean;
// //   buffAp: boolean;
// //   buffMp: boolean;
// //   // buffDamage: boolean;
// //   buffPower: boolean;
// //   shieldPoints: boolean;
// //   summoner: boolean;
// //   healer: boolean;
// //   soloMobility: boolean;
// //   pushBack: boolean;
// //   // attraction: boolean;
// //   // vulnerability: boolean;
// //   unmoveable: boolean;
// //   invulnerable: boolean;
// //   longRangeVuln: boolean;
// //   canGravity: boolean;
// //   minusEffectDuraton: boolean;
// //   canPacifist: boolean;
// // }

// // export interface Eliotrope extends CharacterBase {
// //   mpReduction: boolean;
// //   rangeReduction: boolean;
// //   buffAp: boolean;
// //   buffMp: boolean;
// //   buffPower: boolean;
// //   buffPercentDamage: boolean;
// //   healer: boolean;
// //   soloMobility: boolean;
// //   pushBack: boolean;
// //   applyVulnerability: [boolean, string];
// //   minusEffectDuraton: boolean;
// // }

// // export interface Panda extends CharacterBase {
// //   mpReduction: boolean;
// //   powerReduction: boolean;
// //   buffAp: [boolean, string]; // ap self only
// //   buffMp: boolean;
// //   buffPower: boolean;
// //   buffShieldPoints: [boolean, string];
// //   summoner: boolean;
// //   healer: boolean;
// //   soloMobility: boolean;
// //   pushBack: boolean;
// //   attraction: boolean;
// //   applyVulnerability: [boolean, string];
// //   unlockable: [boolean, string];
// //   closeRangeInvuln: boolean;
// //   canRooted: [boolean, string];
// // }