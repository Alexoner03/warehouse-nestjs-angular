import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import {MaterialModule} from "../material/material.module";
import { WarehousesTableComponent } from './components/warehouses-table/warehouses-table.component';
import { ProductsComponent } from './pages/products/products.component';
import {AppRoutingModule} from "../app-routing.module";
import { EditWarehouseComponent } from './pages/edit-warehouse/edit-warehouse.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';



@NgModule({
  declarations: [
    IndexComponent,
    WarehousesTableComponent,
    ProductsComponent,
    EditWarehouseComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class WarehouseModule { }
