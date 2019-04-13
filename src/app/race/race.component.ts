import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/baseService';
import { Race } from './race';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html'
})
export class RaceComponent extends BaseService<BaseResultsModel<Race>> implements OnInit {
  races: Array<Race>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'races';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.races = new Array<Race>();

    super.findAll().subscribe((response) => {
      response.results.forEach(result => {
        this.races.push(result);
      });
    });
  }
}