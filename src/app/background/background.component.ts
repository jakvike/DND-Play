import { Component, OnInit } from '@angular/core';
import { Background } from './background';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-background',
  'templateUrl': './background.component.html',
})
export class BackgroundComponent<T extends Background> extends BaseService<BaseResultsModel<T>> implements OnInit {
  backgrounds: Array<T>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'backgrounds';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
// tslint:disable-next-line: prefer-array-literal
    this.backgrounds = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.backgrounds.push(result);
      });
    });
  }
}
