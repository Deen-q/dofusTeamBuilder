
export interface CharacterBase {
    className: string;
    dpsRating: number; // 1-10
    effectiveRange: Array<string>;
  }

// all mentioned properties are assumed true
export interface Iop extends CharacterBase {
  erosion: boolean;
  apReduction: boolean;
  mpReduction: boolean;
  buffAp: boolean;
  buffMp: boolean;
  buffDam: boolean; // divine blade
  buffPower: boolean;
  buffShieldPoints: boolean;
  soloMobility: boolean;
  pushBack: boolean;
  attraction: boolean;
  applyVulnerability: [boolean, string];
  unmoveable: boolean;
  invulnerable: boolean;
  longRangeVuln: boolean;
}

export interface Enutrof extends CharacterBase {
  // erosion: boolean;
  apReduction: boolean;
  mpReduction: boolean;
  rangeReduction: boolean;
  buffAp: boolean;
  buffMp: boolean;
  // buffShieldPoints: boolean;
  // buffDamage: boolean;
  buffPower: [boolean, string]; // where string indicates it's for self only.
  // shieldPoints: boolean;
  summoner: boolean;
  healer: [boolean, string]; // true and tier. Could be true and number instead.
  soloMobility: boolean;
  pushBack: boolean;
  attraction: boolean;
  // vulnerability: boolean;
  unmoveable: boolean;
  invulnerable: boolean;
  longRangeInvuln: boolean;
  canGravity: boolean;
  minusEffectDuraton: boolean;
  canPacifist: boolean;
}

export interface Enirispa extends CharacterBase {
  erosion: boolean;
  apReduction: boolean;
  mpReduction: boolean;
  buffAp: boolean;
  buffMp: boolean;
  // buffDamage: boolean;
  buffPower: boolean;
  shieldPoints: boolean;
  summoner: boolean;
  healer: boolean;
  soloMobility: boolean;
  pushBack: boolean;
  // attraction: boolean;
  // vulnerability: boolean;
  unmoveable: boolean;
  invulnerable: boolean;
  longRangeVuln: boolean;
  canGravity: boolean;
  minusEffectDuraton: boolean;
  canPacifist: boolean;
}

export interface Eliotrope extends CharacterBase {
  mpReduction: boolean;
  rangeReduction: boolean;
  buffAp: boolean;
  buffMp: boolean;
  buffPower: boolean;
  buffPercentDamage: boolean;
  healer: boolean;
  soloMobility: boolean;
  pushBack: boolean;
  applyVulnerability: [boolean, string];
  minusEffectDuraton: boolean;
}

export interface Panda extends CharacterBase {
  mpReduction: boolean;
  powerReduction: boolean;
  buffAp: [boolean, string]; // ap self only
  buffMp: boolean;
  buffPower: boolean;
  buffShieldPoints: [boolean, string];
  summoner: boolean;
  healer: boolean;
  soloMobility: boolean;
  pushBack: boolean;
  attraction: boolean;
  applyVulnerability: [boolean, string];
  unlockable: [boolean, string];
  closeRangeInvuln: boolean;
  canRooted: [boolean, string];
}