import { VmResource } from '../utils';

export interface Store<T extends VmResource> {
  add(entry: T): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(id: string, item: T): Promise<void>;
  delete(id: string): Promise<void>;
}
