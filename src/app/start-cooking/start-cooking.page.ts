import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Gesture, GestureController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-start-cooking',
  templateUrl: './start-cooking.page.html',
  styleUrls: ['./start-cooking.page.scss'],
})
export class StartCookingPage implements OnInit, OnDestroy {
  sliderOne: any;
  viewType: string;
  counter = 0;
  swipeGesture: Gesture;
  toggleClass = false;

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('contentElement', { static: true, read: ElementRef }) contentElement: ElementRef;

  constructor(private route: Router, public navCtrl: NavController, private gestureController: GestureController, private ref: ChangeDetectorRef,
    private statusBar: StatusBar) {
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: []
    };

  }
  slideOptions = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    }
  };
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
    // d.style.top = '200px'; 
    if (detail.velocityX > 0) {
      d.style.top = '100px';
    }
    else if (detail.velocityY > 0) {
      d.style.top = '200px';
    }
    else {
      d.style.bottom = '0px';
    }
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);

    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  };


  finish_cooking() {
    this.navCtrl.navigateRoot(['./cooking-finish']);
  }
}
