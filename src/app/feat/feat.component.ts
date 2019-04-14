import { Component, OnInit } from '@angular/core';
import { Feat } from './feat';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-feat',
  'templateUrl': './feat.component.html',
})
export class FeatComponent<T extends Feat> extends BaseService<BaseResultsModel<T>> implements OnInit {
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'feats';
    const baseModelUrl = url;
    super(baseModelUrl, http);
    this.title = url;
  }

  ngOnInit(): void {
    this.items = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.items.push(result);
      });
    });
  }
}
