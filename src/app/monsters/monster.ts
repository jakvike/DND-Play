import { BaseApiModel } from '../models/baseApiModel';
import { iApiModel, IMonsterApiModel } from '../interfaces/iApiModel';
import { IDamageAttributes } from '../interfaces/iDamageAttributes';
import { iAttributes } from '../interfaces/iAttributes';
import { ISaveAttributes } from '../interfaces/iSaveAttributes';
import { iKeyValuePair } from '../interfaces/iKeyValuePair';

export class Monster extends BaseApiModel {
  size: string;
  type: string;
  subtype: string;
  group: string;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: iKeyValuePair<string, number>;
  attributes: iAttributes;
  damages: IDamageAttributes;
  saves: ISaveAttributes;
  senses: string;
  challenge_rating: string;
  perception: number;
  reactions: string;
  legendary_actions: Array<iApiModel>;
  actions: IMonsterApiModel;
  xp: string;
}

export class CrToXp {
default: CRXP;
}

export class CRXP {
  cr: string;
  xp: string;
}

