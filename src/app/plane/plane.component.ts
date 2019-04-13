import { Component, OnInit } from '@angular/core';
import { Plane } from './plane';
import { BaseService } from '../services/baseService';
import { HttpClient } from '@angular/common/http';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
})
export class PlaneComponent extends BaseService<BaseResultsModel<Plane>> implements OnInit {
  planes: Array<Plane>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'planes';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.planes = new Array<Plane>();

    super.findAll().subscribe(response => {
      response.results.forEach(result => {
        this.planes.push(result);
      });
    });
  }
}
