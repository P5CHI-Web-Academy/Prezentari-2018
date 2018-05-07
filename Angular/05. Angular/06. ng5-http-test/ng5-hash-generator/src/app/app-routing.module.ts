import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashFormComponent } from './hash-form/hash-form.component'


const routes: Routes = [
  {
    path: "hash/:hashType",
    component: HashFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
