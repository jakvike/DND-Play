import { Iattributes } from '../interfaces/iAttributes';
import { IsaveAttributes } from '../interfaces/iSaveAttributes';
import { IdamageAttributes } from '../interfaces/iDamageAttributes';

export class BaseAttributes implements Iattributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export class BaseSaveAttributes implements IsaveAttributes {
  strength_save: number | null;
  dexterity_save: number | null;
  constitution_save: number | null;
  intelligence_save: number | null;
  wisdom_save: number | null;
  charisma_save: number | null;
}

export class BaseDamageAttributes implements IdamageAttributes {
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
}
