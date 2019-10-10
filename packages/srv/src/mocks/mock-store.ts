import { VmResource } from '../utils';
import { Injectable } from '@nestjs/common';
import { Store } from '../store';

@Injectable()
export class MockStore<T extends VmResource> implements Store<T> {
  entries: T[] = [];

  add(entry: T) {
    this.entries.push(entry);
  }

  findAll() {
    return this.entries;
  }

  findById(id: string) {
    return this.entries.find(e => e.id === id);
  }

  update(id: string, item: T) {
    const idx = this.entries.findIndex(s => s.id === id);
    this.entries[idx] = {...item, id};
  }

  delete(id: string) {
    const idx = this.entries.findIndex(s => s.id === id);
    this.entries.splice(idx, 1);
  }
}
