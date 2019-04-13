import { Component, OnInit } from '@angular/core';
import { MagicItem } from './magicItem';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';
import { SearchType } from '../models/search';

@Component({
  selector: 'app-magicItem',
  templateUrl: './magicItem.component.html',
})
export class MagicItemComponent extends BaseService<BaseResultsModel<MagicItem>> implements OnInit {
  magicitems: Array<MagicItem>;
  types: Array<SearchType>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'magicitems';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.magicitems = new Array<MagicItem>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.magicitems.push(result);
        this.types = super.getFilterBy(result);
      });
    });
  }
}
