import { Component } from '@angular/core';
import { Products } from '../products';
import { IProducts } from '../Iproducts';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Products: Array<IProducts> = Products;
}
