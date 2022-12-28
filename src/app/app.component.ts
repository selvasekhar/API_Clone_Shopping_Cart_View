import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  title = 'selvasekhar';
  message: string = "Hello";
  msg: string = "Hello";
  // products: any;
  // update:any;
  constructor() {

  }
  // increment() {
  //   this.product = {
  //     ...this.product,
  //     quand: this.product.quand + 1
  //   }
  // }

  // deincrement() {
  //   this.product = {
  //     ...this.product,
  //     quand: this.product.quand - 1 > 0 ? this.product.quand - 1 : 1
  //   }
  // }
  ngOnInit() {
    console.log('show components')
  }

  public update(msg: string): void {
    this.message = 'msg';
  }

  increment(productId:string){
    this.products = this.products.map((product:Product)=>{
      if(product.sn===productId){
        return{
          ...product,
          quand:product.quand +1
        }
        
      }
      return product
    })
  }

  deincrement(productId:string){
    this.products = this.products.map((product:Product)=>{
      if(product.sn===productId){
        return{
          ...product,
          quand:product.quand - 1 > 0 ? product.quand - 1 : 1
          // quand: this.product.quand - 1 > 0 ? this.product.quand - 1 : 1
        }
        
      }
      return product
    })
  }

  public totalsall():number{
    let total:number=0;
    for(let product of this.products){
      total+=(product.quand * product.price);
    }
    return total;
  }
}
