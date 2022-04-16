import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { LayoutComponent } from './components/layout/layout.component';
import {MaterialModule} from "../material/material.module";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    FlexModule,
    FlexLayoutModule,
    LayoutComponent
  ]
})
export class SharedModule { }
