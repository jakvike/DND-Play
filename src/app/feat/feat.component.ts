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
  feats: Array<T>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'feats';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.feats = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.feats.push(result);
      });
    });
  }
}
