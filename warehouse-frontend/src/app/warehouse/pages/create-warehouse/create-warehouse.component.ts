import { Component, OnInit } from '@angular/core';
import {WarehouseDTO} from "../../entities/warehouse";
import {WarehouseService} from "../../services/warehouse.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  send(form: WarehouseDTO) {
    this.warehouseService.create(form).subscribe({
      next : () => this.router.navigate(['/warehouse']),
      error: (error) => alert(error.error.message)
    })
  }
}
