import { Observable } from 'rxjs/internal/Observable';

export interface IRead<T> {
  findAll(): Observable<T>;
  find(item: T): Observable<T>;
  findOne(id: string): Observable<T>;
}
