import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Product, ProductDTO} from "../entities/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private backendURL: string = environment.backendURL

  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get<Product[]>(`${(this.backendURL)}/product`)
  }

  update(id: number, warehouse: ProductDTO){
    return this.http.patch<Product>(`${(this.backendURL)}/product/${id}`,warehouse)
  }

  create(warehouse: ProductDTO){
    return this.http.post<Product>(`${(this.backendURL)}/product`,warehouse)
  }

  delete(id: string, warehouseid: string){
    return this.http.delete(`${(this.backendURL)}/product/${id}/warehouse/${warehouseid}`)
  }
}

