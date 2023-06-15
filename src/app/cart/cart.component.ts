import { Component, OnInit } from '@angular/core';
import { CartSerService } from '../cart-ser.service';
import { IProducts } from '../Iproducts';
import { Idrinks } from '../Iproducts';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<IProducts> = [];
  Cart: Array<Idrinks> = [];

  constructor(private CsP: CartSerService, private CsD: CartSerService) {

  }

  

  

  ngOnInit(): void {
    this.cart= this.CsP.getItems();
    this.Cart= this.CsD.getItems2();
  }
}


