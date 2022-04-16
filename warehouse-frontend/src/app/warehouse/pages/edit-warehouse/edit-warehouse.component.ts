import { Component, OnInit } from '@angular/core';
import {Warehouse, WarehouseDTO} from "../../entities/warehouse";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {WarehouseService} from "../../services/warehouse.service";

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styles: [
  ]
})
export class EditWarehouseComponent implements OnInit {
  warehouse?: Warehouse;

  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if(id !== null ){
        this.loadWarehouse(id)
      }else {
        this.router.navigate(['/warehouse'])
      }
    })
  }

  send(form: WarehouseDTO){
    this.warehouseService.update(this.warehouse?._id!,form).subscribe(() => {
      this.router.navigate(['/warehouse'])
    })
  }

  private loadWarehouse(id: string) {
    this.warehouseService.findOne(id).subscribe(wh => this.warehouse = wh)
  }
}
