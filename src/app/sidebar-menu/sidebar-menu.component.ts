import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from '../app.config';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { VtPopupPage } from '../vt-popup/vt-popup.page';
import { Usery, UserService } from '../services/user.service';


@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  rtlSide = "left";
  rtlSideMenu = "start";
  //showSideMenu = false;
  selectedIndex: any;
  activePage = 1;
  @Input() showSideMenu: boolean;
  // @Input() activePage: number;
  @Output() menuItemSelected = new EventEmitter<string>();
  constructor(private navCtrl: NavController, private menuCtrl: MenuController,
    private route: Router, private alertController: AlertController,
    private user: UserService,
    private modalController: ModalController, @Inject(APP_CONFIG) public config: AppConfig, private translate: TranslateService, private myEvent: MyEvent) {

    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    this.globalize(defaultLang);
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.globalize(value);
    });
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

  add() {
    this.navCtrl.navigateRoot(['./home']);
    this.activePage = 2;


  }

  home() {
    this.navCtrl.navigateRoot(['./home']);
    this.activePage = 1;
  }
  chef() {
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

  // buyappalert() {
  //   this.modalController.create({ component: BuyappalertPage }).then((modalElement) => {
  //     modalElement.present();
  //   }
  //   )
  // }


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
}
