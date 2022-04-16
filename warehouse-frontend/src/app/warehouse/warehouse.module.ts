import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import {MaterialModule} from "../material/material.module";
import { WarehousesTableComponent } from './components/warehouses-table/warehouses-table.component';
import { ProductsComponent } from './pages/products/products.component';
import {AppRoutingModule} from "../app-routing.module";
import { EditWarehouseComponent } from './pages/edit-warehouse/edit-warehouse.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import {SharedModule} from "../shared/shared.module";
import { CreateWarehouseComponent } from './pages/create-warehouse/create-warehouse.component';
import { WarehouseFormComponent } from './components/warehouse-form/warehouse-form.component';



@NgModule({
  declarations: [
    IndexComponent,
    WarehousesTableComponent,
    ProductsComponent,
    EditWarehouseComponent,
    CreateProductComponent,
    ProductsTableComponent,
    ProductFormComponent,
    CreateWarehouseComponent,
    WarehouseFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class WarehouseModule { }
