import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product;
  constructor(private router: Router) {

  }

  ngOnInit() {
  }


  openInfo() {
    this.router.navigate([
      `info/${this.product["id"]}`
    ]);
  }
}
