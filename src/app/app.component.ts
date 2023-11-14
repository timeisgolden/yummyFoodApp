import { AfterViewInit, Component, Inject } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { NavController, Platform, ModalController, MenuController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from './app.config';
import { VtPopupPage } from './vt-popup/vt-popup.page';
import { BuyappalertPage } from '../app/buyappalert/buyappalert.page';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore } from 'firebase/firestore';
import { DataService } from './services/data.service';
import { Usery, UserService } from './services/user.service';
import { Subscription } from 'rxjs';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  rtlSide = "left";
  rtlSideMenu = "start";
  showSideMenu = false;
  selectedIndex: any;
  activePage = 1;
  person: Usery;
  chef: boolean = false;
  ads: any;
  currentPic: any;
  currentBannerImageIndex: number = 0;
  private adsSub: Subscription;
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private modalController: ModalController,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private route: Router,
    private data: DataService,
    private alertController: AlertController,
    private user: UserService,
    private translate: TranslateService, private myEvent: MyEvent) {

    this.splash();
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });


    this.user.getTier().subscribe((tier) => {
      if (tier == "chef") {
        console.log(tier)

        this.chef = true
      }

    })


    this.adsSub = this.data.adsObserve().subscribe((ads) => {
      if (ads != null) {
        this.ads = ads.banners
      }

    })

    this.data.adCounter$.subscribe((value) => {
      const pic = ((value - 1) * (-1));
      if (this.ads && this.ads.length > 0)
        this.currentPic = this.ads[pic]
    });

  }


  async open(link) {

    await Browser.open({ url: link });
  };


  async splash() {

    // Show the splash for two seconds and then automatically hide it:
    await SplashScreen.show({
      // autoHide: false,
    });

  }


  async initializeApp() {
    this.platform.ready().then(() => {
      window.localStorage.setItem("platform_height", String(this.platform.height()));
      this.statusBar.styleDefault();

      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('var(--bg-white)');
      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
      setTimeout(async () => {
        await SplashScreen.hide()

      }, 3000)
    });

    // Initialize Firebase in the constructor
    const app = initializeApp(environment.firebaseConfig);
    const auth = getAuth(app); // Initialize Auth module
    const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true }); // Initialize Firestore module
    // this.data.setAuth(auth, app);
    this.user.setFireDeets(db, auth);
    this.data.setFire(db);

  }



  getUser() {


  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    this.showSideMenu = false;
    switch (lang) {
      case 'iw':
      case 'ar':
        this.rtlSide = "rtl";
        this.rtlSideMenu = "end";
        break;
      default:
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        break;
    }
    setTimeout(() => this.showSideMenu = true, 100);
  }

  setFire() {


  }



  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }


  get currentBannerImageUrl() {
    console.log(this.ads)
    // Calculate the current banner image URL based on the index
    // if (this.ads)

    return this.ads[this.currentBannerImageIndex].name;
  }

  cycleBannerImage() {
    this.currentBannerImageIndex++; // Increment the index
    if (this.currentBannerImageIndex >= this.ads.length) {
      // If the index exceeds the array length, loop back to the first image
      this.currentBannerImageIndex = 0;
    }
    console.log(this.currentBannerImageIndex);
    return this.currentBannerImageIndex
  }

  ngOnInit() {
    if (this.config.demoMode) {
      setTimeout(() => {
        this.change_language();
      }, 1000);

      setTimeout(() => {
        this.presentModal();
      }, 15000)
    }
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: VtPopupPage,
    });
    return await modal.present();
  }

  developed_by() {
    //window.open("https://opuslab.works/", '_system', 'location=no');
  }

  change_language() {
    this.route.navigate(['./language']);
  }



  home() {
    this.navCtrl.navigateRoot(['./home']);
    this.activePage = 1;
  }
  add() {
    this.navCtrl.navigateRoot(['./chef']);
    this.activePage = 2;
  }
  grocery() {
    this.navCtrl.navigateRoot(['./grocery']);
    this.activePage = 3;
  }
  profile() {
    this.navCtrl.navigateRoot(['./profile']);
    this.activePage = 4;
  }
  contact_us() {
    this.navCtrl.navigateRoot(['./contact-us']);
    this.activePage = 5;
  }
  terms_conditions() {
    this.navCtrl.navigateRoot(['./terms-conditions']);
    this.activePage = 6;
  }
  language() {
    this.navCtrl.navigateRoot(['./language']);
    this.activePage = 7;
  }


  onDarkMode(event) {
    if (event.detail.checked) {
      document.body.setAttribute('class', 'dark-theme');
    } else {
      document.body.setAttribute('class', 'light-theme');
    }
    //    Helper.setDefaultThemeMode(this.darkModeStatus);
  }


  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: '<br>Are you sure you want to logout?',
      mode: 'md',
      cssClass: 'animate__animated animate__zoomIn',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.user.SignOut()
            //this.navCtrl.navigateRoot(['./onboarding']);
          }
        }
      ]
    });

    await alert.present();
  }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }

}
