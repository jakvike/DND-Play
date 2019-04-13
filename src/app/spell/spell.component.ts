import { Component, OnInit, Input } from '@angular/core';
import { Spell } from './spells';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search';
import * as _ from 'lodash';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
})
export class SpellComponent extends BaseService<BaseResultsModel<Spell>> implements OnInit {
  types: Array<SearchType>;
  spells: Array<Spell>;

  constructor(http: HttpClient) {
    const baseModelUrl = 'spells';
    super(baseModelUrl, http);
  }
  ngOnInit(): void {
    this.spells = new Array<Spell>();
    this.types = new Array<SearchType>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.spells.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}
