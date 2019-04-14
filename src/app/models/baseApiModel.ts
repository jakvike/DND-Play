import { iApiModel, iResultModel, IMonsterApiModel } from '../interfaces/iApiModel';

export class BaseApiModel implements iApiModel {
  desc: string;
  slug: string;
  name: string;
  document_slug: string;
}

export class BaseResultsModel<T> implements iResultModel<T> {
  results: T[];
}

export class BaseMonsterApiModel implements IMonsterApiModel {
  slug: string;
  name: string;
  document_slug: string;
  desc: string;
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}
