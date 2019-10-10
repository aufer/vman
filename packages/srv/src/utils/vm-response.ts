import { VmResource } from './vm-resource';

export namespace VMResponse {
  export type of<T extends VmResource | VmResource[]> = {
    time: number,
    data: T,
  };

  export function from<T extends VmResource | VmResource[]>(data: T): VMResponse.of<T> {
    return {
      time: Date.now() as number,
      data,
    };
  }
}
