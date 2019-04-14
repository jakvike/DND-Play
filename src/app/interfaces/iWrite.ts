import { Observable } from 'rxjs/internal/Observable';

export interface IWrite<T> {
    create(item: T): Observable<boolean>;
    update(id: string, item: T): Observable<boolean>;
    delete(id: string): Observable<boolean>;
}
