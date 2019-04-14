import { IWrite } from '../interfaces/iWrite';
import { IRead } from '../interfaces/iRead';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchType } from '../models/search';
import * as _ from 'lodash';
export abstract class BaseService<T> implements IWrite<T>, IRead<T> {
  private baseUrl = 'https://api-beta.open5e.com/';
  private url: string;
  private http: HttpClient;
  private searchTypes: Array<SearchType>;

  constructor(baseClassUrl: string, http: HttpClient) {
    this.http = http;
    this.url = this.baseUrl + baseClassUrl;
    this.searchTypes = new Array<SearchType>();
  }

  findAll(): Observable<T> {
    return this.http.get<T>(this.url + '?limit=1000');
  }
  find(item: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
  create(item: T): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: T): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  getFilterBy<T>(obj: T): Array<SearchType> {
    const objectKeys = Object.keys(obj) as Array<keyof T>;
    objectKeys.forEach(key => {
      const containsKey = _.findKey(this.searchTypes, {value: key});
      if (_.isNil(containsKey)) {
        const searchType = new SearchType();
        searchType.value = key.toString();
        searchType.viewValue = _.capitalize(key.toString());
        this.searchTypes.push(searchType);
      }

    });
    return this.searchTypes;
  }

}
