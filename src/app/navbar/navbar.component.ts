import { Component, DoCheck } from '@angular/core';
import { CartSerService } from '../cart-ser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {


  number : number = 0;
  number2: number = 0; 

  constructor(private CsP: CartSerService, private CsD: CartSerService){

  }

  ngDoCheck(): void {
    this.number = this.CsP.getlength();
    this.number2 = this.CsD.getlength2();
  }
}
