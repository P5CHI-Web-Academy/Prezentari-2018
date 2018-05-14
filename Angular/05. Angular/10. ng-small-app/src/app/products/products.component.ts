import { Component, OnInit } from '@angular/core';
import {
  ProductModel
} from '../models/product.model';
import {
  ProductsService
} from '../products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: []
})
export class ProductsComponent implements OnInit {

  products;
  isLoading: boolean = false;
  
  constructor( private productsService: ProductsService) {
    this.products = []
  }

  ngOnInit() {
    this.isLoading = true;
    this.productsService.getItems().then((products) => {
      this["products"] = products;
      this.isLoading = false;
    }, (err) => {
      this.isLoading = false;
    });
  }

}
