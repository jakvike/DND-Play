import { Observable } from 'rxjs/internal/Observable';
import { iResultModel } from './iApiModel';

export interface IRead<T> {
    findAll(): Observable<T>;
    find(item: T): Observable<T>;
    findOne(id: string): Observable<T>;
}
