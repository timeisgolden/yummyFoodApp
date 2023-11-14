import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  currentValue = 0;
  currentDualValues = {
    lower: 25,
    upper: 50
  };
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  setValue($event: Event): void {
    this.currentValue = parseInt(($event.target as HTMLInputElement).value, 10);
  }
 save() {
   this.navCtrl.pop();
  } 
}
