import { BaseApiModel } from '../models/baseApiModel';
import { IApiModel } from '../interfaces/IApiModel';

export class Class extends  BaseApiModel {
  hit_dice: string;
  hp_at_1st_level: string;
  hp_at_higher_levels: string;
  prof_armor: string;
  prof_weapons: string;
  prof_tools: string;
  prof_saving_throws: string;
  prof_skills: string;
  equipment: string;
  table: string;
  spellcasting_ability: string;
  subtypes_name: string;
  archetypes: Array<IApiModel>;
}
