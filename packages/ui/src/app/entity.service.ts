import { HttpClient } from '@angular/common/http';

export abstract class EntityService<T> {
  protected endpoint: string;

  constructor(protected http: HttpClient) {}

  abstract getAll(): Promise<T[]>;

  abstract getById(id: string): Promise<T>;

  abstract delete(id: string);
}
