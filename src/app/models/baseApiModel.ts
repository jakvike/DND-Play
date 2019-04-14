import { IapiModel, IresultModel, ImonsterApiModel } from '../interfaces/iApiModel';

export class BaseApiModel implements IapiModel {
  desc: string;
  slug: string;
  name: string;
  document_slug: string;
}

export class BaseResultsModel<T> implements IresultModel<T> {
  results: T[];
}

export class BaseMonsterApiModel implements ImonsterApiModel {
  slug: string;
  name: string;
  document_slug: string;
  desc: string;
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}
