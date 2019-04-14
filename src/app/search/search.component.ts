import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SearchType } from '../models/search';
import { IapiModel } from '../interfaces/iApiModel';
import * as _ from 'lodash';

@Component({
  'selector': 'app-search',
  'templateUrl': './search.component.html',
  'styleUrls': ['./search.component.scss'],
})
export class SearchComponent<T extends IapiModel> {
  faCoffee = this.faCoffee;
  @Input() searchTypes: SearchType[];
  @Input() searchArray: Array<T>;
  searchTypeSelected: string;
  @Output() searchText: {};
  private isSearchTypeSelected = false;

  selectionChange(selected: string) {
    this.searchTypeSelected = selected;
    this.isSearchTypeSelected = true;
  }

  textChange(value: string): object {
    const isValueEmpty: boolean = _.isNil(value) || value === '';

    if (!isValueEmpty && !this.isSearchTypeSelected) {
      this.searchText = { 'name': value };
    } else if (!isValueEmpty) {
      this.searchText = {} as any;
      this.searchText[this.searchTypeSelected] = value;
    } else if (isValueEmpty) {
      this.searchText = '';
    }
    return this.searchText;
  }
}
