import { BaseApiModel } from '../models/baseApiModel';
import { IapiModel, ImonsterApiModel } from '../interfaces/iApiModel';
import { IdamageAttributes } from '../interfaces/iDamageAttributes';
import { Iattributes } from '../interfaces/iAttributes';
import { IsaveAttributes } from '../interfaces/iSaveAttributes';
import { IkeyValuePair } from '../interfaces/iKeyValuePair';

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
  speed: IkeyValuePair<string, number>;
  attributes: Iattributes;
  damages: IdamageAttributes;
  saves: IsaveAttributes;
  senses: string;
  challenge_rating: string;
  perception: number;
  reactions: string;
  legendary_actions: Array<IapiModel>;
  actions: ImonsterApiModel;
  xp: string;
}

export class CrToXp {
  default: CRXP;
}

export class CRXP {
  cr: string;
  xp: string;
}


