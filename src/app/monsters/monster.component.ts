import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import crToxpJson  from './crToxp.json';
import { BaseService } from '../services/baseService';
import { Monster, CRXP } from './monster';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search.js';
import * as _ from 'lodash';

@Component({
  'selector': 'app-class',
  'templateUrl': './monster.component.html',
  'styleUrls': ['./monster.component.scss'],
})
export class MonsterComponent<T extends Monster> extends BaseService<BaseResultsModel<T>> implements OnInit {
  monsters: Array<T>;
  types: Array<SearchType>;
  crToXp: CRXP[];
  speedKeys: any;
  constructor(http: HttpClient) {
    const baseModelUrl = 'monsters';
    super(baseModelUrl, http);
    this.crToXp = crToxpJson;
  }

  ngOnInit(): void {
    this.monsters = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        const cr = _.find(this.crToXp, ['cr', result.challenge_rating]);
        const crEmpty = cr !== null || cr.xp !== null;
        if (crEmpty) {
          result.xp = cr.xp;
        }
        this.monsters.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}
