import { Asset } from './asset';

export enum DocType {
  PDF = 'pdf',
  PNG = 'png',
  JPG = 'jpg',
}

export interface Document extends Asset {
  type: DocType;
}
