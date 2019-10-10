import { VmResource } from '../utils';

export interface Store<T extends VmResource> {
  add(entry: T): void;
  findAll(): T[];
  findById(id: string): T;
  update(id: string, item: T): void;
  delete(id: string): void;
}
