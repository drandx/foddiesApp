import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IgxSliderModule } from 'igniteui-angular';
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from '../shared/angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule
    // IgxSliderModule
  ]
})
export class CoreModule { }
