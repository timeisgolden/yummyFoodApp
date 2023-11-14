import { Component, OnInit } from '@angular/core'; 
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
@Component({
  selector: 'app-cooking-finish',
  templateUrl: './cooking-finish.page.html',
  styleUrls: ['./cooking-finish.page.scss'],
})
export class CookingFinishPage implements OnInit {
  constructor(private navCtrl: NavController,  private statusBar: StatusBar) {}

  
    ngOnInit() {
      this.statusBar.styleDefault(); 
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('var(--bg-white)'); 
    }
  home() {
    this.navCtrl.navigateRoot(['./home']);
  } 
}
