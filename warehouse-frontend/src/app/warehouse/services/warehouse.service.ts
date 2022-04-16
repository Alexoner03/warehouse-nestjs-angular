import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Warehouse, WarehouseDTO} from "../entities/warehouse";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private backendURL: string = environment.backendURL

  constructor(private http: HttpClient) { }

  listAll(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${(this.backendURL)}/warehouse`)
  }

  findOne(id: string): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${(this.backendURL)}/warehouse/${id}`)
  }

  update(id: string, warehouse: WarehouseDTO){
    return this.http.patch<Warehouse>(`${(this.backendURL)}/warehouse/${id}`,warehouse)
  }

  create(warehouse: WarehouseDTO){
    return this.http.post<Warehouse>(`${(this.backendURL)}/warehouse`,warehouse)
  }

}
