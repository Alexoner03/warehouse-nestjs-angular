import { Component, OnInit } from '@angular/core';
import {WarehouseService} from "../../services/warehouse.service";
import {Warehouse} from "../../entities/warehouse";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  warehouses: Warehouse[] = []

  constructor(
    private readonly warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAll().subscribe(response => this.warehouses = response)
  }

}
