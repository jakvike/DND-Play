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
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'backgrounds';
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
