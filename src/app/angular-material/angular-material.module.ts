import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  imports: [
    CommonModule
  ]
})
export class AngularMaterialModule { }
