import { Component, OnInit } from '@angular/core';
import { Feat } from './feat';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
})
export class FeatComponent extends BaseService<BaseResultsModel<Feat>> implements OnInit {
  feats: Array<Feat>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'feats';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.feats = new Array<Feat>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.feats.push(result);
      });
    });
  }
}
