import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../services/baseService';
import { Class } from './class';
import { BaseResultsModel } from '../models/baseApiModel';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent extends BaseService<BaseResultsModel<Class>> implements OnInit {
  classes: Array<Class>;
  constructor(http: HttpClient) {
    const baseModelUrl = 'classes';
    super(baseModelUrl, http);
  }

  ngOnInit(): void {
    this.classes = new Array<Class>();

    super.findAll().subscribe((response) => {
      response.results.forEach(result => {
        this.classes.push(result);
      });
    });
  }
}