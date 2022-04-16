import {Warehouse} from "./warehouse";

export interface Product {
  _id:       string;
  name:      string;
  quantity:  number;
  warehouse: Warehouse | string;
  __v:       number;
}

export interface ProductDTO {
  name:      string;
  quantity:  number;
  warehouse: string;
}
