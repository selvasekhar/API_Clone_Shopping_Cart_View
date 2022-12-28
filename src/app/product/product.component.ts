import { Component, Input, OnInit } from '@angular/core';
interface Product {
  sn: string;
  image: string;
  name: string;
  price: number,
  quand: number,
  total:number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product| undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
