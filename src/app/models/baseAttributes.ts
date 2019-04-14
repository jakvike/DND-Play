import { iAttributes } from '../interfaces/iAttributes';
import { ISaveAttributes } from '../interfaces/iSaveAttributes';
import { IDamageAttributes } from '../interfaces/iDamageAttributes';

export class BaseAttributes implements iAttributes {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export class BaseSaveAttributes implements ISaveAttributes {
    strength_save: number | null;
    dexterity_save: number | null;
    constitution_save: number | null;
    intelligence_save: number | null;
    wisdom_save: number | null;
    charisma_save: number | null;
}

export class BaseDamageAttributes implements IDamageAttributes {
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
}
