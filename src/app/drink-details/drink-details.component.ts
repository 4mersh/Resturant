import { Component, OnInit  } from '@angular/core';

import { drinks } from '../products';
import { Idrinks } from '../Iproducts';
import { CartSerService } from '../cart-ser.service';

import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {

  Drinks: Idrinks = {} as Idrinks;
  id: number = 0;
  addToCart2(){
    alert("Your Drink has benn added to the Cart");
    this.CsD.addTocart2(this.Drinks);
  }

  constructor(private route: ActivatedRoute, private CsD: CartSerService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["D"];
      this.Drinks = drinks[this.id];
    })
  }

}
