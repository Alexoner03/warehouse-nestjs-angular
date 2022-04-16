import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";
import {Warehouse} from "../../entities/warehouse";
import {Product} from "../../entities/product";
import {ProductService} from "../../services/product.service";

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
    private warehouseService: WarehouseService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if(id !== null ){
        this.listAll(id)
      }else {
        this.router.navigate(['/warehouse'])
      }
    })
  }

  delete(_id: string) {
    this.productService.delete(_id,this.warehouse?._id!).subscribe(result => this.listAll(this.warehouse?._id!))
  }

  listAll(_id: string){
    this.warehouseService.findOne(_id).subscribe(wh => {
      this.warehouse = wh
      this.products = wh.products
    })
  }
}
