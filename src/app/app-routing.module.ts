import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: "", component : HomeComponent
},{
  path: "products", component : ProductsComponent
},{
  path: "drinks", component : DrinksComponent
},{
  path: "contact", component : ContactComponent
},{
  path: "cart", component : CartComponent
},{
  path: "products/:P", component : DetailsComponent
},{
  path: "drinks/:D", component : DrinkDetailsComponent
},{
  path: "**", redirectTo: ""
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
