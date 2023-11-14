import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gesture, GestureController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService, Recipe } from '../services/data.service';
import { UserService, groceryList } from '../services/user.service';
@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.page.html',
  styleUrls: ['./grocery-details.page.scss'],
})
export class GroceryDetailsPage implements OnInit, OnDestroy {
  viewType: string;
  swipeGesture: Gesture;
  groceryList: groceryList;
  @ViewChild('contentElement', { static: true, read: ElementRef }) contentElement: ElementRef;

  constructor(private user: UserService, private route: Router, public navCtrl: NavController, private gestureController: GestureController, private ref: ChangeDetectorRef,
    private statusBar: StatusBar) {

    this.groceryList = this.user.getSelectedGrocery();
  }

  ngOnInit() {
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('var(--bg-white)');
  }

  ngOnDestroy() {
    this.swipeGesture.destroy();
  }

  ionViewDidEnter() {
    this.swipeGesture = this.gestureController.create({
      el: this.contentElement.nativeElement,
      direction: 'y',
      gestureName: 'swipe',
      // onStart: (detail) => this.swipeStart(detail),
      onEnd: (detail) => this.swipeEvent(detail)
    });
    this.swipeGesture.enable();
  }

  swipeEvent(detail) {
    this.ref.detectChanges();
    var d = document.getElementById('content-inner');
    if (detail.velocityX > 0) {
      d.style.top = '100px';
    }
    else if (detail.velocityY > 0) {
      d.style.top = '340px';
    }
    else {
      d.style.bottom = '0px';
    }
  }

  done() {

    // Using the Array.prototype.some() method
    const isAnyChecked = this.groceryList.recipe.ingredients.some(obj => obj.checked === true);

    if (isAnyChecked) {
      console.log("At least one recipe object is checked.");
    } else {

      this.user.removeGroceryItem(this.groceryList);
      console.log("None of the objects are checked.");
    }

    this.navCtrl.pop();
  }
}
