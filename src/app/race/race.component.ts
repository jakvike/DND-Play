import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/baseService';
import { Race } from './race';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-race',
  'templateUrl': './race.component.html',
})
export class RaceComponent<T extends Race> extends BaseService<BaseResultsModel<T>> implements OnInit {
  title: string;
  items: Array<T>;
  constructor(http: HttpClient) {
    const url = 'Races';
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
