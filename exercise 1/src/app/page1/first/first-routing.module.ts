import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { RouterLink } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: FirstcompComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
