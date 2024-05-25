import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondcompComponent } from './secondcomp/secondcomp.component';
import { ThirdcompComponent } from './thirdcomp/thirdcomp.component';

const routes: Routes = [
  {
    path: "third",
    component: ThirdcompComponent
  },
  {
    path: "",
    component: SecondcompComponent
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
export class SecondRoutingModule { }
