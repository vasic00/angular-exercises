import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [SecondcompComponent, ThirdcompComponent],
  imports: [
    CommonModule,
    SecondRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ]
})
export class SecondModule { }
