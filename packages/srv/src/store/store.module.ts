import { Module } from '@nestjs/common';
import { Store } from './store.interface';
import { VmResource } from '../utils';
import { MockStore } from './mock-store';

export const STORE = 'STORE';

interface ConstructorFn<T> {
  new (...args: any[]): T;
}

const storeMap: Map<ConstructorFn<any>, Store<any>> = new Map();

const storeProviderFactory = <T extends VmResource>(ctorFunc: ConstructorFn<T>) => {
  const storeKey = JSON.stringify(ctorFunc);
  if (!storeMap[storeKey]) {
    storeMap[storeKey] = new MockStore<T>();
  }

  return {
    provide: STORE,
    useValue: storeMap[storeKey],
  };
};

@Module({
  providers: [],
})
export class StoreModule {
  static register<T>(ctor: ConstructorFn<T>) {
    return {
      module: StoreModule,
      providers: [
        storeProviderFactory<T>(ctor),
      ],
      exports: [
        STORE,
      ],
    };
  }
}
