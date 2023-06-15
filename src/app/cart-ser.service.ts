import { Injectable } from '@angular/core';
import { IProducts } from './Iproducts';
import { Idrinks } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartSerService {
  cart: Array< IProducts > = [];
  Cart: Array< Idrinks > = [];
  constructor() { }

  addTocart(valP: IProducts) {
    this.cart.push(valP);
  }

  addTocart2(valD: Idrinks) {
    this.Cart.push(valD);
  }

  getItems(){
    return this.cart;
  }

  getItems2(){
    return this.Cart;
  }

  clear(){
    this.cart = [];
    return this.cart;
  }

  clear2(){
    this.Cart = [];
    return this.Cart;
  }

  getlength(){
    return this.cart.length;
  }

  getlength2(){
    return this.Cart.length;
  }
}
