import { BaseApiModel } from '../models/baseApiModel';

export class MagicItem extends BaseApiModel {
  type: string;
  rarity: string;
  requires_attunement: string;
}


