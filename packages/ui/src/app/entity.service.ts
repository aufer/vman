import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class EntityService<T> {
  protected endpoint: string;

  constructor(protected http: HttpClient) {}

  abstract getAll(): Observable<T[]>;

  abstract getById(id: string): Observable<T>;

  abstract delete(id: string);
}
