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
  conditions: Array<T>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'conditions';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.conditions = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.conditions.push(result);
      });
    });
  }
}
