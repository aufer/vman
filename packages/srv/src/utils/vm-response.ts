import { VmResource } from './vm-resource';

export namespace VMResponse {
  export type of<T extends VmResource | VmResource[]> = Promise<{
    time: number,
    data: T,
  }>;

  export function from<T extends VmResource | VmResource[]>(data: T): VMResponse.of<T> {
    return Promise.resolve({
      time: Date.now() as number,
      data,
    });
  }
}
