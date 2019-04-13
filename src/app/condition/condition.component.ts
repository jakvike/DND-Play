import { Component, OnInit } from '@angular/core';
import { Condition } from './condition';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
})
export class ConditionComponent extends BaseService<BaseResultsModel<Condition>> implements OnInit {
  conditions: Array<Condition>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'conditions';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.conditions = new Array<Condition>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.conditions.push(result);
      });
    });
  }
}
