import {Product} from "./product";

export interface Warehouse {
  _id:      string;
  name:     string;
  address:  string;
  products: Product[];
  __v:      number;
}

export interface WarehouseDTO {
  name:     string;
  address:  string;
}

