export interface iApiModel {
  slug: string;
  name: string;
  document_slug: string;
  desc: string;
}

export interface iResultModel<T> {
  results: T[];
}

export interface IMonsterApiModel extends iApiModel {
  attack_bonus: number;
  damage_dice: string;
  damage_bonus: number;
}
