
export interface CharacterBase {
    className: string;
    dpsRating: number; // 1-10
  }

// all mentioned properties are assumed true
export interface Iop extends CharacterBase {
    erosion: boolean;
    mpReduction: boolean;
    buffAp: boolean;
    buffMp: boolean;
    buffDamage: boolean;
    buffPower: boolean;
    shieldPoints: boolean;
    mobility: boolean;
    pushBack: boolean;
    attraction: boolean;
    vulnerability: boolean;
    unmoveable: boolean;
    invulnerable: boolean;
    longRangeVuln: boolean;
}