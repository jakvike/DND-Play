import { BaseApiModel } from '../models/baseApiModel';
import { IkeyValuePair } from '../interfaces/iKeyValuePair';

export class Race extends  BaseApiModel {
  age: string;
  baseRaceModel: BaseRaceModel;
  alignment: string;
  size: string;
  speed: IkeyValuePair<string, number>;
  speed_desc: string;
  languages: string;
  vision: string;
  subraces: Array<BaseRaceModel>;
}

export class BaseRaceModel extends BaseApiModel {
  asi_decs: string;
  asi: Array<AsiModel>;
  traits: string;
}

export class AsiModel {
  attributes: Array<string>;
  value: number;
}


