import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";
import {Warehouse} from "../../entities/warehouse";
import {Product} from "../../entities/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  warehouse?: Warehouse;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      this.warehouseService.findOne(id!).subscribe(wh => {
        this.warehouse = wh
        this.products = wh.products
      })
    })
  }

  delete(_id: string) {
    console.log(_id)
  }
}
