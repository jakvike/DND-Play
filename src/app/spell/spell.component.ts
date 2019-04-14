import { Component, OnInit, Input } from '@angular/core';
import { Spell } from './spells';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search';
import * as _ from 'lodash';

@Component({
  'selector': 'app-spell',
  'templateUrl': './spell.component.html',
})
export class SpellComponent<T extends Spell> extends BaseService<BaseResultsModel<T>> implements OnInit {
  types: Array<SearchType>;
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'spells';
    const baseModelUrl = url;
    super(baseModelUrl, http);
    this.title = url;
  }
  ngOnInit(): void {
    this.items = new Array<T>();
    this.types = new Array<SearchType>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.items.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}

// automapper.createMap('Token', 'User')
//          .forMember('firstName', (opts) => { opts.mapFrom('given_name'); })
//          .forMember('lastName', (opts) => { opts.mapFrom('family_name'); } )
