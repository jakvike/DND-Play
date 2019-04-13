import { Component, OnInit } from '@angular/core';
import { Background } from './background';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
})
export class BackgroundComponent extends BaseService<BaseResultsModel<Background>> implements OnInit {
  backgrounds: Array<Background>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'backgrounds';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.backgrounds = new Array<Background>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.backgrounds.push(result);
      });
    });
  }
}
