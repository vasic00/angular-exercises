import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [FirstcompComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class FirstModule { }
