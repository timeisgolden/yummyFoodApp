import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.page.html',
  styleUrls: ['./mobile-number.page.scss'],
})
export class MobileNumberPage implements OnInit {
 select_contary: string = "india";
  constructor(private route: Router) { }

  ngOnInit() {
  }
 create_account(){ 
     this.route.navigate(['./create-account']);   
   }     
}
