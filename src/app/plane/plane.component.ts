import { Component, OnInit } from '@angular/core';
import { Plane } from './plane';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  'selector': 'app-plane',
  'templateUrl': './plane.component.html',
})
export class PlaneComponent<T extends Plane> extends BaseService<BaseResultsModel<T>> implements OnInit {
  items: Array<T>;
  title: string;
  constructor(http: HttpClient) {
    const url = 'Planes';
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
