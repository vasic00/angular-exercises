import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "second",
    loadChildren: () => import("../app/page2/second/second.module").then((module) => module.SecondModule),
  },
  {
    path: "",
    loadChildren: () => import("../app/page1/first/first.module").then((module) => module.FirstModule),
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
