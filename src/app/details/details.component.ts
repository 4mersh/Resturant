import { Component, OnInit } from '@angular/core';

import { Products } from '../products';
import { IProducts } from '../Iproducts';
import { CartSerService } from '../cart-ser.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  Products: IProducts = {} as IProducts;
  id: number = 0;
  addTocart(){
    alert("Your Product has been added to the Cart");
    this.CsP.addTocart(this.Products);
  }

  constructor(private route: ActivatedRoute, private CsP: CartSerService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params["P"];
      this.Products = Products[this.id];
    })
  }
}
