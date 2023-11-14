import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gesture, GestureController, ModalController, NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular'
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService, Ingredients, Recipe } from '../services/data.service';
import { UserService, groceryList } from '../services/user.service';
import { PictureGalleryComponent } from '../picture-gallery/picture-gallery.component';


interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit, OnDestroy {
  FavoriteIcon = false;
  currDiv: string = 'ingredients_list';
  segment = 0;
  viewType: string;
  counter = 0;
  checkedItemsCount = 0; // Initialize the count to zero
  swipeGesture: Gesture;
  recipe: Recipe;
  groceryList: Ingredients[] = [];
  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild('contentElement', { static: true, read: ElementRef }) contentElement: ElementRef;
  platform: any;

  constructor(private modalController: ModalController, private data: DataService, private acRoute: ActivatedRoute, private route: Router, public navCtrl: NavController, private gestureController: GestureController, private ref: ChangeDetectorRef, private statusBar: StatusBar, private user: UserService) {

    this.recipe = this.data.getSelectedRecipe();

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
    // d.style.top = '350px'; 
    if (detail.velocityX > 0) {
      d.style.top = '100px';
    }
    else if (detail.velocityY > 0) {
      d.style.top = '350px';
    }
    else {
      d.style.bottom = '0px';
    }
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  addGroceries() {
    if (this.groceryList.length > 0) {

      const groceryList: groceryList = {
        needed: this.groceryList,
        recipe: this.recipe,


      }
      this.user.setGrocery(groceryList);
      this.groceryList = [];
    }

    this.currDiv = "ingredients_list";
  }



  async openPictureGallery(pics: string[]) {
    const modal = await this.modalController.create({
      component: PictureGalleryComponent,
      componentProps: { pics },
    });
    return await modal.present();
  }

  // Inside your component class
  onCheckboxChange(CheckboxChangeEventDetail) {

    const ingredient: Ingredients = {
      name: CheckboxChangeEventDetail.name,
      amount: CheckboxChangeEventDetail.amount,
      icon: CheckboxChangeEventDetail.icon,
    }


    if (CheckboxChangeEventDetail.checked == true) {
      this.groceryList.push(ingredient);
    }
    else {
      // If the checkbox is unchecked, remove the ingredient from the groceryList
      this.groceryList = this.groceryList.filter(item => item.name !== ingredient.name);

    }

  }



  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  toggleFavoriteIcon() {
    this.FavoriteIcon = !this.FavoriteIcon;
  }

  start_cooking() {
    this.route.navigate(['./start-cooking']);
  }
}
