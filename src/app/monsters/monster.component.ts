import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import crToXpJson from './crToxp.json';
import _ from 'lodash';
import { BaseService } from '../services/baseService';
import { Monster, CRXP } from './monster';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search.js';

@Component({
  selector: 'app-class',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent extends BaseService<BaseResultsModel<Monster>> implements OnInit {
  monsters: Array<Monster>;
  types: Array<SearchType>;
  crToXp: CRXP[];
  speedKeys: any;
  constructor(http: HttpClient) {
    const baseModelUrl = 'monsters';
    super(baseModelUrl, http);
    this.crToXp = crToXpJson;
  }

  ngOnInit(): void {
    this.monsters = new Array<Monster>();

    super.findAll().subscribe((response) => {
      response.results.forEach(result => {
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
