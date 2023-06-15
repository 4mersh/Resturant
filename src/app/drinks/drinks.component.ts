import { Component } from '@angular/core';
import { drinks } from '../products';
import { Idrinks } from '../Iproducts';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent {
  drinks: Array<Idrinks> = drinks;
}
