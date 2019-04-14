import { Component, OnInit } from '@angular/core';
import { MagicItem } from './magicItem';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search';

@Component({
  'selector': 'app-magicItem',
  'templateUrl': './magicItem.component.html',
})
export class MagicItemComponent<T extends MagicItem> extends BaseService<BaseResultsModel<T>> implements OnInit {
  items: Array<T>;
  types: Array<SearchType>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'magicitems';
    const baseModelUrl = url;
    super(baseModelUrl, http);
    this.title = url;
  }

  ngOnInit(): void {
    this.items = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.items.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}
