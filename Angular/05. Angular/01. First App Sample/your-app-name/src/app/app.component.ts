import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string
  description: string
  products: Product[]

  constructor() {
    this.title = 'Book Store - Rarest Animals';
    this.description = 'Simpliest store with product listing..';

    this.products = [
      new Product(1, 'Who are Northern Hairy-Nosed Wombat?', 23.55),
      new Product(2, 'Habitate of Pygmy Three-Toed Sloth', 15.6),
      new Product(3, 'Red-Crested Tree Rat, why so?', 9),
      new Product(4, 'More about - Angel Shark (aka Squatina Squatina)', 45),
      new Product(5, 'Boni Giant Sengi (Formerly Known as an Elephant Shrew)', 10),
      new Product(6, 'Javan Rhino - what you know about this spieces?', 18),
      new Product(7, 'Madagascar: Plougshare Tortoise (aka Angonoka)', 10)
    ];
  }
}
