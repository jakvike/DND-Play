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
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'classes';
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
