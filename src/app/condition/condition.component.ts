import { Component, OnInit } from '@angular/core';
import { Condition } from './condition';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-condition',
  'templateUrl': './condition.component.html',
})
export class ConditionComponent<T extends Condition> extends BaseService<BaseResultsModel<T>> implements OnInit {
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'conditions';
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
