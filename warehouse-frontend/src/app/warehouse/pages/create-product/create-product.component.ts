import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {ProductDTO} from "../../entities/product";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  send(form: ProductDTO){
    this.productService.create(form).subscribe({
      next : () => this.router.navigate(['/warehouse',form.warehouse,'products']),
      error: (error) => alert(error.error.message)
    })
  }
}
