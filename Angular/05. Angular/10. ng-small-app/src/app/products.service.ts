import { Injectable } from '@angular/core';
import {
  ProductModel
} from './models/product.model';

@Injectable()
export class ProductsService {

  products = [];
  
  constructor() {
    this.products.push(
      new ProductModel().loadData({
        "name": "books",
        "description" : "Harry Potter all volumes"
      })
    );

    this.products.push(
      new ProductModel().loadData({
        "name": "bike - toy for childs",
        "description" : "plastic toy"
      })
    );
  }

  getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
        // emulate loading ...
      }, Math.floor(2000 + Math.random() * 3000));
    });
  }

  getItem(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.products.filter(item => item.id === id)[0] || null
        );
        // emulate loading ...
      }, Math.floor(500 + Math.random() * 1000));
    });
  }

}
