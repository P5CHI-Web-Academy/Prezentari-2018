import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "info/:id",
    component: ProductInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
