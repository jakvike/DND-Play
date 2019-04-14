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
  items: Array<T>;
  types: Array<SearchType>;
  crToXp: CRXP[];
  speedKeys: any;
  title: string;
  constructor(http: HttpClient) {
    const url = 'monsters';
    const baseModelUrl = url;
    super(baseModelUrl, http);
    this.title = url;
    this.crToXp = crToxpJson;
  }

  ngOnInit(): void {
    this.items = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        const cr = _.find(this.crToXp, ['cr', result.challenge_rating]);
        const crEmpty = cr !== null || cr.xp !== null;
        if (crEmpty) {
          result.xp = cr.xp;
        }
        this.items.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}
