import { Component, OnInit } from '@angular/core';
interface Product {
  sn: string;
  image: string;
  name: string;
  price: number,
  quand: number,
  total:number;
  // currencyCode:number,

}
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  public products: Product[] = [
    
    {
      sn: '001',
      name: 'watch1',
      image: 'https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg',
      price:3000,
      quand: 2,
      total: 1500,
    },
    {
      sn: '002',
      name: 'watch2',
      image: 'https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg',
      price:3000,
      quand: 2,
      total: 1500,
    },
    {
      sn: '003',
      name: 'watch3',
      image: 'https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg',
      price:3000,
      quand: 2,
      total: 1500,
    },
    {
      sn: '004',
      name: 'watch4',
      image: 'https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg',
      price:3000,
      quand: 2,
      total: 1500,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
