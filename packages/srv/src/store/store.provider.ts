import { VmResource } from '../utils';
import { MockStore } from './mock-store';

export const STORE = 'STORE';

export const storeProviderFactory = <T extends VmResource>() => ({
  provide: STORE,
  useValue: new MockStore<T>(),
});
