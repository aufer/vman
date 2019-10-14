import { Asset } from './asset';
export declare enum DocType {
    PDF = "pdf",
    PNG = "png",
    JPG = "jpg"
}
export interface Document extends Asset {
    type: DocType;
}
