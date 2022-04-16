import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Warehouse} from "../../entities/warehouse";
import {WarehouseService} from "../../services/warehouse.service";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {ProductDTO} from "../../entities/product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup
  warehouses!: Warehouse[]

  @Output('submit')
  onSubmit: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>()

  constructor(
    private fb: FormBuilder,
    private warehouseService: WarehouseService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.initForm()
    this.warehouseService.listAll().subscribe(whl => this.warehouses = whl)
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      quantity: [0, [Validators.required,Validators.min(1)]],
      warehouse: ['',[Validators.required]]
    })
  }

  send(event: SubmitEvent) {
    this.onSubmit.emit(this.productForm.value)
    event.stopPropagation()
  }
}
