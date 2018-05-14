import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  isLoading: boolean = true;
  product: ProductModel;
  constructor(
    private productsService : ProductsService,
    private activatedRoute : ActivatedRoute,
    private sanitazer : DomSanitizer
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.loadProduct(parseInt(params.id, 10));
    });    
  }

  loadProduct(id) {
    this.productsService.getItem(id).then((product: ProductModel) => {
      this.isLoading = false;
      this.product = product;
    }, (err) => {
      this.isLoading = false;
    })
  }


  productImage() {
    if (!this.product) return null;
    
    if (!this.product.image) return null;
    
    return this.sanitazer.bypassSecurityTrustUrl(
      this.product.image
    );
  }
}
