import {Component, Input, OnInit} from '@angular/core';
import {Warehouse} from "../../entities/warehouse";

@Component({
  selector: 'app-warehouses-table',
  templateUrl: './warehouses-table.component.html',
})
export class WarehousesTableComponent implements OnInit {

  @Input('warehouses')
  warehouses: Warehouse[] = []

  displayedColumns: string[] = ['Address', 'Name', 'Actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
