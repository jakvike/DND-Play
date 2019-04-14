import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/baseService';
import { Class } from './class';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-class',
  'templateUrl': './class.component.html',
  'styleUrls': ['./class.component.scss'],
})
export class ClassComponent<T extends Class> extends BaseService<BaseResultsModel<T>> implements OnInit {
  classes: Array<T>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'classes';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.classes = new Array<T>();

    super.findAll().subscribe((response) => {
      response.results.forEach((result) => {
        this.classes.push(result);
      });
    });
  }
}
