import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Warehouse, WarehouseDTO} from "../../entities/warehouse";

@Component({
  selector: 'app-warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styles: [
  ]
})
export class WarehouseFormComponent implements OnInit, OnChanges {
  warehouseForm!: FormGroup

  @Input('warehouse')
  warehouse?: Warehouse

  @Output('submit')
  onSubmit: EventEmitter<WarehouseDTO> = new EventEmitter<WarehouseDTO>()

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.warehouseForm = this.initForm()
  }

  ngOnChanges(): void {
    if(this.warehouse !== null){
      this.warehouseForm = this.initForm()
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: [
        this.warehouse ? this.warehouse.name : '',
        [Validators.required,Validators.minLength(3)]
      ],
      address: [
        this.warehouse ? this.warehouse.address : '',
        [Validators.required,Validators.minLength(3)]
      ],
    })
  }

  send(event: SubmitEvent) {
    this.onSubmit.emit(this.warehouseForm.value)
    event.stopPropagation()
  }
}
