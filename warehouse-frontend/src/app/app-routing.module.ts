import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./warehouse/pages/index/index.component";
import {ProductsComponent} from "./warehouse/pages/products/products.component";
import {EditWarehouseComponent} from "./warehouse/pages/edit-warehouse/edit-warehouse.component";
import {CreateProductComponent} from "./warehouse/pages/create-product/create-product.component";
import {CreateWarehouseComponent} from "./warehouse/pages/create-warehouse/create-warehouse.component";

const routes: Routes = [
  {
    path : "",
    pathMatch: "full",
    redirectTo : "warehouse"
  },
  {
    path : "warehouse",
    children : [
      {
        path : "",
        pathMatch : "full",
        component : IndexComponent
      },
      {
        path: "create",
        component: CreateWarehouseComponent
      },
      {
        path: "products/create",
        component: CreateProductComponent
      },
      {
        path : ":id/products",
        component: ProductsComponent
      },
      {
        path: ":id/edit",
        component: EditWarehouseComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
