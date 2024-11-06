import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

//a service doesn't use component decoratorbut rather "Injectable"
@Injectable({
  providedIn: 'root'  //we always give providedIn a string of "root". the root means this service is available application wide

})

//Most of the time a service in an angular is a singleton
export class CartService {

  //cart is an array of IProduct
  cart: IProduct[] = [];

  constructor(private http: HttpClient) {  }

  //Making POST request: https://app.pluralsight.com/ilx/video-courses/d5d30ea4-0af1-447a-b13a-e60a095337a6/779c97bc-43ab-42d0-8226-72c993410f5c/52d915c2-26f3-41ee-ab9c-c6ba60d982b5

  //Note I am getting 404 - localhost:8081/api/cart is not found - the referer is coming from 4200 not 8081
  add(product: IProduct) {
    this.cart.push(product);  //push product into the "cart" array defined in line 15
    this.http.post('/api/cart', this.cart).subscribe(()=>{ //this will not execute unless you subscribe
      console.log(`product ${product.name} added to cart`);
    });
    }
}
