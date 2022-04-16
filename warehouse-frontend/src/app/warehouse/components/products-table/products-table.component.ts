import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../entities/product";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
})
export class ProductsTableComponent implements OnInit {

  @Input('product')
  products: Product[] = [];

  displayedColumns: string[] = ['name', 'quantity','Actions']

  @Output('onDelete')
  onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(_id: string){
    this.onDelete.emit(_id)
  }

}
