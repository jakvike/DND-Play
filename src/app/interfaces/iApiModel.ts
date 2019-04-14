export interface IapiModel {
  slug: string;
  name: string;
  document_slug: string;
  desc: string;
}

export interface IresultModel<T> {
  results: T[];
}

export interface ImonsterApiModel extends IapiModel {
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}
