(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/guards/auth.guard */ 46982);




const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'onboarding',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_onboarding_onboarding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./onboarding/onboarding.module */ 33970)).then(m => m.OnboardingPageModule)
    },
    {
        path: 'mobile-number',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mobile-number_mobile-number_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mobile-number/mobile-number.module */ 67511)).then(m => m.MobileNumberPageModule)
    },
    {
        path: 'create-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_create-account_create-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./create-account/create-account.module */ 55110)).then(m => m.CreateAccountPageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./verification/verification.module */ 4243)).then(m => m.VerificationPageModule)
    },
    {
        path: 'home',
        canActivate: [src_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 24682)).then(m => m.SearchPageModule)
    },
    {
        path: 'filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_filter_filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filter/filter.module */ 67655)).then(m => m.FilterPageModule)
    },
    {
        path: 'item-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_item-info_item-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-info/item-info.module */ 65262)).then(m => m.ItemInfoPageModule)
    },
    {
        path: 'start-cooking',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_start-cooking_start-cooking_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./start-cooking/start-cooking.module */ 31696)).then(m => m.StartCookingPageModule)
    },
    {
        path: 'cooking-finish',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cooking-finish_cooking-finish_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cooking-finish/cooking-finish.module */ 81696)).then(m => m.CookingFinishPageModule)
    },
    {
        path: 'grocery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_grocery_grocery_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./grocery/grocery.module */ 945)).then(m => m.GroceryPageModule)
    },
    {
        path: 'grocery-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_grocery-details_grocery-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./grocery-details/grocery-details.module */ 7451)).then(m => m.GroceryDetailsPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 63648)).then(m => m.ContactUsPageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-conditions/terms-conditions.module */ 61401)).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'buyappalert',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buyappalert_buyappalert_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./buyappalert/buyappalert.module */ 48615)).then(m => m.BuyappalertPageModule)
    },
    {
        path: 'vt-popup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_vt-popup_vt-popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vt-popup/vt-popup.module */ 14758)).then(m => m.VtPopupPageModule)
    },
    {
        path: 'language',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_language_language_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./language/language.module */ 80393)).then(m => m.LanguagePageModule)
    },
    {
        path: 'chef',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chef_chef_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chef/chef.module */ 21691)).then(m => m.ChefPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 53040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 79523);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ 64879);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/myevent.services */ 30069);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vt-popup/vt-popup.page */ 45866);
/* harmony import */ var _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/buyappalert/buyappalert.page */ 31344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ 67421);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/auth */ 62028);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/firestore */ 74128);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data.service */ 52468);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor/browser */ 16799);






// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
















let AppComponent = class AppComponent {
    constructor(config, platform, navCtrl, modalController, statusBar, menuCtrl, route, data, alertController, user, translate, myEvent) {
        this.config = config;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.route = route;
        this.data = data;
        this.alertController = alertController;
        this.user = user;
        this.translate = translate;
        this.myEvent = myEvent;
        this.rtlSide = "left";
        this.rtlSideMenu = "start";
        this.showSideMenu = false;
        this.activePage = 1;
        this.chef = false;
        this.currentBannerImageIndex = 0;
        this.splash();
        this.initializeApp();
        this.myEvent.getLanguageObservable().subscribe(value => {
            this.navCtrl.navigateRoot(['./']);
            this.globalize(value);
        });
        this.user.getTier().subscribe((tier) => {
            if (tier == "chef") {
                console.log(tier);
                this.chef = true;
            }
        });
        this.adsSub = this.data.adsObserve().subscribe((ads) => {
            if (ads != null) {
                this.ads = ads.banners;
            }
        });
        this.data.adCounter$.subscribe((value) => {
            const pic = ((value - 1) * (-1));
            if (this.ads && this.ads.length > 0)
                this.currentPic = this.ads[pic];
        });
    }
    open(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_15__.Browser.open({ url: link });
        });
    }
    ;
    splash() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            // Show the splash for two seconds and then automatically hide it:
            yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.show({
            // autoHide: false,
            });
        });
    }
    initializeApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
                window.localStorage.setItem("platform_height", String(this.platform.height()));
                this.statusBar.styleDefault();
                this.statusBar.overlaysWebView(false);
                this.statusBar.backgroundColorByHexString('var(--bg-white)');
                let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
                this.globalize(defaultLang);
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
                    yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
                }), 3000);
            });
            // Initialize Firebase in the constructor
            const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_9__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.firebaseConfig);
            const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_11__.getAuth)(app); // Initialize Auth module
            const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_12__.initializeFirestore)(app, { experimentalAutoDetectLongPolling: true }); // Initialize Firestore module
            // this.data.setAuth(auth, app);
            this.user.setFireDeets(db, auth);
            this.data.setFire(db);
        });
    }
    getUser() {
    }
    globalize(languagePriority) {
        this.translate.setDefaultLang("en");
        let defaultLangCode = this.config.availableLanguages[0].code;
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
        this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    }
    setDirectionAccordingly(lang) {
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
        console.log(this.ads);
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
        return this.currentBannerImageIndex;
    }
    ngOnInit() {
        if (this.config.demoMode) {
            setTimeout(() => {
                this.change_language();
            }, 1000);
            setTimeout(() => {
                this.presentModal();
            }, 15000);
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _vt_popup_vt_popup_page__WEBPACK_IMPORTED_MODULE_7__.VtPopupPage,
            });
            return yield modal.present();
        });
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
        }
        else {
            document.body.setAttribute('class', 'light-theme');
        }
        //    Helper.setDefaultThemeMode(this.darkModeStatus);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            this.user.SignOut();
                            //this.navCtrl.navigateRoot(['./onboarding']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    buyappalert() {
        this.modalController.create({ component: _app_buyappalert_buyappalert_page__WEBPACK_IMPORTED_MODULE_8__.BuyappalertPage }).then((modalElement) => {
            modalElement.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_6__.APP_CONFIG,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_13__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_14__.UserService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_5__.MyEvent }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-root',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 49670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG),
/* harmony export */   "BaseAppConfig": () => (/* binding */ BaseAppConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("app.config");
const BaseAppConfig = {
    availableLanguages: [{
            code: 'en',
            name: 'English'
        },
        {
            code: 'nl',
            name: 'Dutch'
        },
        {
            code: 'ar',
            name: 'عربى'
        }, {
            code: 'fr',
            name: 'français'
        }, {
            code: 'es',
            name: 'Española'
        }, {
            code: 'id',
            name: 'bahasa Indonesia'
        }, {
            code: 'pt',
            name: 'português'
        }, {
            code: 'tr',
            name: 'Türk'
        }, {
            code: 'it',
            name: 'Italiana'
        }, {
            code: 'sw',
            name: 'Kiswahili'
        }],
    demoMode: false,
};


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 64967);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 49476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ 49670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/popup.component */ 15122);
/* harmony import */ var _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./picture-gallery/picture-gallery.component */ 82739);

















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent, _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_6__.PictureGalleryComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot({}),
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
                }
            }),
            // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            // provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_4__.APP_CONFIG, useValue: _app_config__WEBPACK_IMPORTED_MODULE_4__.BaseAppConfig },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 31344:
/*!*************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPage": () => (/* binding */ BuyappalertPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_buyappalert_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./buyappalert.page.html */ 22903);
/* harmony import */ var _buyappalert_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyappalert.page.scss */ 78106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);






let BuyappalertPage = class BuyappalertPage {
    constructor(modalController, http) {
        this.modalController = modalController;
        this.http = http;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    buyAppAction() {
        this.modalController.dismiss();
        window.open("http://bit.ly/cc_ionic_yummy", '_system', 'location=no');
    }
    navWhatsapp() {
        let projectName = "Yummy";
        this.http.get("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        }).subscribe(res => {
            window.open(res['link'], '_system', 'location=no');
        }, err => { });
        this.dismiss();
    }
};
BuyappalertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
BuyappalertPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-buyappalert',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_buyappalert_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_buyappalert_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuyappalertPage);



/***/ }),

/***/ 82739:
/*!**************************************************************!*\
  !*** ./src/app/picture-gallery/picture-gallery.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureGalleryComponent": () => (/* binding */ PictureGalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_picture_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./picture-gallery.component.html */ 54162);
/* harmony import */ var _picture_gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picture-gallery.component.scss */ 71687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 51688);





// import Swiper JS

// // import Swiper styles
// import 'swiper/css/swiper.css';
let PictureGalleryComponent = class PictureGalleryComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    closeGallery() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__.default('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Make pagination bullets clickable
            },
        });
        console.log(this.pics);
    }
};
PictureGalleryComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
PictureGalleryComponent.propDecorators = {
    pics: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PictureGalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-picture-gallery',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_picture_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_picture_gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PictureGalleryComponent);



/***/ }),

/***/ 15122:
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./popup.component.html */ 55823);
/* harmony import */ var _popup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.component.scss */ 12037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 73071);






let PopupComponent = class PopupComponent {
    constructor(modalController, user) {
        this.modalController = modalController;
        this.user = user;
        this.activeSegment = 'signin';
        this.signupData = {
            fName: '',
            lName: '',
            email: '',
            password: '',
        };
        this.signinData = {
            email: '',
            password: '',
        };
    }
    closePopup() {
        this.modalController.dismiss();
    }
    submitSignup() {
        // Handle sign-up logic here
        console.log('Sign Up Data:', this.signupData);
        this.user.signUp(this.signupData);
        this.signupData = {
            fName: '',
            lName: '',
            email: '',
            password: '',
        };
        this.closePopup();
    }
    submitSignin() {
        // Handle sign-in logic here
        console.log('Sign In Data:', this.signinData);
        this.user.signIn(this.signinData);
        this.signinData = {
            email: '',
            password: '',
        };
        this.closePopup();
    }
};
PopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
PopupComponent.propDecorators = {
    activeSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-popup',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_popup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popup_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopupComponent);



/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 74128);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 62028);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 77111);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ 73071);
/* harmony import */ var _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-firebase/firestore */ 32767);











let DataService = class DataService {
    constructor(fb, router, user) {
        this.fb = fb;
        this.router = router;
        this.user = user;
        // private app = initializeApp(environment.firebaseConfig);
        this.recipes = [];
        this.adCounter = 0;
        // Create a BehaviorSubject and initialize it with the initial value
        this.adCounterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.adCounter);
        // Expose an observable that other parts of your application can subscribe to
        // Expose an observable for adCounter
        this.adCounter$ = this.adCounterSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
        this.adsInfo = null;
        this.recipeList = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.adsList = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.adsInfo);
    }
    setSelectedRecipe(recipe) {
        this.selectedRecipe = recipe;
    }
    getSelectedRecipe() {
        return this.selectedRecipe;
    }
    setAuth(auth, app) {
        this.auth = auth;
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.getFirestore)(app);
    }
    // Function to update the adCounter value
    incrementAdCounter() {
        console.log(this.adCounter);
        this.adCounter++;
        if (this.adCounter >= this.adsInfo.regular.length) {
            this.adCounter = 0;
        }
        this.adCounterSubject.next(this.adCounter); // Notify subscribers
    }
    addDocs(ref, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FirebaseFirestore.addDocument({
                reference: ref,
                data: data,
            });
        });
    }
    ;
    setDocs(ref, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FirebaseFirestore.setDocument({
                reference: ref,
                data: data,
                merge: true,
            });
        });
    }
    ;
    setFire(db) {
        this.db = db;
    }
    getCollection(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { snapshots } = yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FirebaseFirestore.getCollection({
                reference: ref,
            });
            return snapshots;
        });
    }
    ;
    getDocument(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { snapshot } = yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FirebaseFirestore.getDocument({
                reference: ref,
            });
            return snapshot;
        });
    }
    ;
    pullAds() {
        return this.adsInfo;
    }
    getAds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const ref = 'ads/ads';
                const adsData = yield this.getDocument(ref);
                if (adsData) {
                    const adsInfo = {
                        working: adsData.data['working'],
                        banners: adsData.data['banners'],
                        regular: adsData.data['regular'],
                    };
                    this.adsInfo = adsInfo;
                    const banner = this.adsInfo.banners[0];
                    this.adsList.next(this.adsInfo);
                    console.log(this.adsInfo);
                }
            }
            catch (error) {
                // Handle errors here
                console.error('Error fetching ads:', error);
            }
        });
    }
    getAll() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const ref = 'recipes';
            const recipePromise = this.getCollection(ref);
            const recipe = yield recipePromise;
            // const recipeRef = collection(this.db, `recipes`);
            // const recipeSnapshot = await getDocs(recipeRef);
            recipe.forEach((doc) => {
                const recipe = {
                    id: doc.id,
                    name: doc.data['name'],
                    ethnicity: doc.data['ethnicity'],
                    category: doc.data['category'],
                    time: doc.data['time'],
                    servings: doc.data['servings'],
                    ingredients: doc.data['ingredients'],
                    pics: doc.data['pics'],
                    directions: doc.data['directions'],
                };
                this.recipes.push(recipe);
            });
            this.recipeList.next(this.recipes);
        });
    }
    getRecipes() {
        return this.recipes;
    }
    getObservable() {
        return this.recipeList.asObservable();
    }
    adsObserve() {
        return this.adsList.asObservable();
    }
    get(recipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const recipeRef = `recipes/${recipe.id}`;
            const recipeSnapshot = this.getDocument(recipeRef);
            const recipex = yield recipeSnapshot;
            if (recipeSnapshot) {
                const recipe = {
                    id: recipex.id,
                    name: recipex.data['name'],
                    ethnicity: recipex.data['ethnicity'],
                    category: recipex.data['category'],
                    time: recipex.data['time'],
                    servings: recipex.data['servings'],
                    ingredients: recipex.data['ingredients'],
                    pics: recipex.data['pics'],
                    directions: recipex.data['directions'],
                };
                return recipe;
            }
        });
    }
    uploadMedia(recipeForm, mediaFiles) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
            const picsFormArray = recipeForm.pics;
            const downloadURLs = [];
            console.log(mediaFiles);
            console.log(picsFormArray);
            for (let i = 0; i < mediaFiles.length; i++) {
                const mediaFile = mediaFiles[i];
                const filePath = `media/${mediaFile.name}`;
                const picRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, filePath);
                try {
                    // Upload the media file
                    const snapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytes)(picRef, mediaFile);
                    // Get the download URL
                    const url = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(picRef);
                    // Push the URL to the pics FormArray
                    picsFormArray.push(this.fb.control(url));
                    downloadURLs.push(url);
                }
                catch (error) {
                    // Handle any errors during the upload or URL retrieval if needed
                    console.error('Error uploading media:', error);
                }
            }
            // Update the 'pics' form control with the download URLs
            recipeForm.pics = downloadURLs;
            console.log(recipeForm);
            // Call the createRecipe function after all URLs have been retrieved
            this.createRecipe(recipeForm);
        });
    }
    createRecipe(recipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const recipeRef = `recipes`;
            this.addDocs(recipeRef, recipe);
        });
    }
    update(recipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const recipeRef = `recipes/${recipe.id}`;
            this.setDocs(recipeRef, recipe);
        });
    }
    deleteDocument(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.FirebaseFirestore.deleteDocument({
                reference: ref,
            });
        });
    }
    ;
    delete(recipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const recipeRef = `recipes/${recipe.id}`;
            this.deleteDocument(recipeRef);
        });
    }
    // Sign in with email/password
    SignIn(email, password) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(this.auth, email, password)
            .then((result) => {
            if (result.user.displayName != null) {
                const user = {
                    userName: result.user.displayName,
                    uid: result.user.uid,
                    email: result.user.email,
                };
                this.user.setUser(user);
                (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(this.auth, (user) => {
                    if (user) {
                        this.router.navigate(['tabs']);
                    }
                });
            }
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
    // Sign up with email/password
    SignUp(email, password, firstName, lastName) {
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(this.auth, email, password)
            .then((result) => {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            const date = new Date(result.user.metadata.creationTime);
            const options = { year: 'numeric', month: 'long' };
            let longFormat = date.toLocaleString('en-US', options);
            if (result.user.displayName != null) {
                const user = {
                    userName: result.user.displayName,
                    uid: result.user.uid,
                    email: result.user.email,
                    created: longFormat,
                    role: "free",
                };
                // this.importUser(user.uid)
                // this.router.navigate(['/tabs']);
            }
        })
            .catch((error) => {
            window.alert(error.message);
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor-firebase/authentication */ 85482);
/* harmony import */ var _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-firebase/firestore */ 32767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 41899);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);




// import { Firestore, docData, } from '@angular/fire/firestore';




let UserService = class UserService {
    constructor(loadingController, ngZone, router, alertController) {
        this.loadingController = loadingController;
        this.ngZone = ngZone;
        this.router = router;
        this.alertController = alertController;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.tierSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
        this.groceries = [];
        this.customGroceries = [];
        // const auth = getAuth(); // Initialize Auth module
        _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.addListener('authStateChange', (change) => {
            this.ngZone.run(() => {
                //this.userSubject.next(change.user)
                this.currentUserSubject.next(change.user);
                const user = this.getRedirectResult();
                this.handleRedirect(user);
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Hold on...",
                // duration: 3000 // Set the duration or use dismiss() to hide it programmatically
            });
            yield loading.present();
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.dismiss();
        });
    }
    presentVerificationPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Verification Email Sent',
                message: 'Please check your email(and spam) for a verification link. After verifying, please restart the app.',
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            // Add any necessary code to restart the app here
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setUserAuto(user) {
        this.user = user;
        this.tierSubject.next(user.role);
    }
    setUser(user) {
        console.log(user.role);
        this.user = user;
        this.userSubject.next(user);
        this.tierSubject.next(user.role);
        if (user) {
            localStorage.setItem('user', JSON.stringify(this.user));
            JSON.parse(localStorage.getItem('user'));
        }
        else {
            localStorage.setItem('user', 'null');
            JSON.parse(localStorage.getItem('user'));
        }
        this.router.navigate(['/home']);
    }
    get currentUser$() {
        return this.currentUserSubject.asObservable();
    }
    getRedirectResult() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform()) {
                return undefined; // Return undefined on native platforms as you're handling redirect on the web
            }
            try {
                const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.getRedirectResult();
                setTimeout(() => {
                }, 4000);
                return result;
            }
            catch (error) {
                console.error('Error getting redirect result:', error);
                throw error;
            }
        });
    }
    getSelectedGrocery() {
        return this.selectedGrocery;
    }
    setSelectedGrocery(grocery) {
        this.selectedGrocery = grocery;
    }
    pullGroceries() {
        return this.groceries;
    }
    pullCustoms() {
        return this.customGroceries;
    }
    getDocument(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { snapshot } = yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.FirebaseFirestore.getDocument({
                reference: ref,
            });
            return snapshot;
        });
    }
    ;
    getCollection(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const { snapshots } = yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.FirebaseFirestore.getCollection({
                reference: ref,
            });
            return snapshots;
        });
    }
    ;
    getGroceries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.groceries.length == 0) {
                const ref = `users/${this.user.uid}/grocery`;
                const docu = this.getCollection(ref);
                const groceries = yield docu;
                groceries.forEach((doc) => {
                    const grocery = {
                        needed: doc.data['needed'],
                        recipe: doc.data['recipe'],
                    };
                    this.groceries.push(grocery);
                });
            }
        });
    }
    getCustomGroceries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.groceries.length == 0) {
                const ref = `users/${this.user.uid}/custom`;
                const docu = this.getCollection(ref);
                const groceries = yield docu;
                groceries.forEach((doc) => {
                    this.customGroceries.push(doc.data);
                });
            }
        });
    }
    redirectEmail(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield result;
            if (user && user.user != null) {
                console.log(user);
                try {
                    const verified = user.user.emailVerified ? true : false;
                    if (!verified) {
                        const email = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.sendEmailVerification();
                        const date = new Date();
                        const options = { year: 'numeric', month: 'long' };
                        const longFormat = date.toLocaleString('en-US', options);
                        const newUser = {
                            userName: user.user.displayName,
                            uid: user.user.uid,
                            email: user.user.email,
                            created: longFormat,
                            role: "free",
                        };
                        this.user = newUser;
                        this.SetUserFire(newUser).then(() => {
                            this.presentVerificationPopup();
                        });
                    }
                    else {
                        this.importUser(user.user.uid);
                        console.log('user not new');
                    }
                    this.setLogged();
                    //this.isLoggedIn(result.user);
                    return result;
                }
                catch (error) {
                    console.error('Error getting redirect result:', error);
                    throw error;
                }
            }
        });
    }
    handleRedirect(result) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield result;
            if (user && user.user != null) {
                //this.presentLoading()
                console.log(user);
                try {
                    const isNewUser = user.additionalUserInfo.isNewUser ? true : false;
                    if (isNewUser) {
                        const date = new Date();
                        const options = { year: 'numeric', month: 'long' };
                        const longFormat = date.toLocaleString('en-US', options);
                        const newUser = {
                            userName: user.user.displayName,
                            uid: user.user.uid,
                            email: user.user.email,
                            created: longFormat,
                            role: "free",
                        };
                        this.user = newUser;
                        this.SetUserFire(newUser).then(() => {
                        });
                    }
                    else {
                        this.importUser(user.user.uid);
                        console.log('user not new');
                    }
                    this.setLogged();
                    //this.isLoggedIn(result.user);
                    return result;
                }
                catch (error) {
                    console.error('Error getting redirect result:', error);
                    throw error;
                }
            }
        });
    }
    setLogged() {
        localStorage.setItem('isLoggedIn', 'true');
    }
    handleEmail(result) {
        const date = new Date();
        const options = { year: 'numeric', month: 'long' };
        const longFormat = date.toLocaleString('en-US', options);
        const newUser = {
            userName: result.fName + result.lName,
            email: result.email,
            created: longFormat,
            role: "free",
        };
        this.SetUserFire(newUser).then(() => {
        });
    }
    importUser(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("user:" + uid);
            const docRef = `users/${uid}`; // Corrected line
            console.log(docRef);
            const docSnap = this.getDocument(docRef);
            const user = yield docSnap;
            if (user) {
                const usery = {
                    userName: user.data.userName,
                    uid: user.id,
                    created: user.data.created,
                    email: user.data.email,
                    role: user.data.role,
                };
                this.setUser(usery);
            }
            else {
                // docSnap.data() will be undefined in this case
            }
        });
    }
    setFireDeets(db, auth) {
        this.db = db;
        this.auth = auth;
    }
    addDocs(ref, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.FirebaseFirestore.addDocument({
                reference: ref,
                data: data,
            });
        });
    }
    ;
    setDocs(ref, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.FirebaseFirestore.setDocument({
                reference: ref,
                data: data,
                merge: true,
            });
        });
    }
    ;
    setFav(recipe) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const favRef = `users/${this.user.uid}/favorites`;
            this.setDocs(favRef, recipe);
        });
    }
    removeGroceryItem(recipeList) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Assuming `recipeList.recipe.id` is the desired document ID
            const docRef = `users/${this.user.uid}/grocery/${recipeList.recipe.id}`;
            // Use `setDoc` to set the data with the specified document ID
            this.deleteDocument(docRef);
            // Find the index of the recipe with the specified ID
            const indexToDelete = this.groceries.findIndex(recipe => recipe.recipe.id === this.selectedGrocery.recipe.id);
            // Check if the recipe was found
            if (indexToDelete !== -1) {
                // Recipe found, now delete it
                this.groceries.splice(indexToDelete, 1);
            }
        });
    }
    removeCustom(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Assuming `recipeList.recipe.id` is the desired document ID
            const docRef = `users/${this.user.uid}/custom/${item.ingredient}`;
            // Use `setDoc` to set the data with the specified document ID
            this.deleteDocument(docRef);
            // Find the index of the recipe with the specified ID
            const indexToDelete = this.customGroceries.findIndex(recipe => recipe.ingredient === item.ingredient);
            // Check if the recipe was found
            if (indexToDelete !== -1) {
                // Recipe found, now delete it
                this.customGroceries.splice(indexToDelete, 1);
            }
        });
    }
    setGrocery(recipeList) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Assuming `recipeList.recipe.id` is the desired document ID
            const docRef = `users/${this.user.uid}/grocery/${recipeList.recipe.id}`;
            // Use `setDoc` to set the data with the specified document ID
            this.setDocs(docRef, recipeList);
            this.groceries.push(recipeList);
        });
    }
    setCustomGrocery(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Assuming `recipeList.recipe.id` is the desired document ID
            const docRef = `users/${this.user.uid}/custom/${item.ingredient}`;
            // Use `setDoc` to set the data with the specified document ID
            this.setDocs(docRef, item);
            this.customGroceries.push(item);
        });
    }
    SetUserFire(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const userRef = `users/${user.uid}`;
            this.setDocs(userRef, user);
            this.setUser(user);
        });
    }
    signInWithGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.signInWithGoogle({
                //mode: "redirect"
                });
                const details = yield result;
                this.handleRedirect(details);
                return result;
            }
            catch (error) {
                console.error('Google sign-in error:', error);
                throw error;
            }
        });
    }
    signInWithApple() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.signInWithApple({
                //mode: "redirect"
                });
                const details = yield result;
                console.log(details);
                this.handleRedirect(details);
                return result;
            }
            catch (error) {
                console.error('Apple sign-in error:', error);
                throw error;
            }
        });
    }
    signIn(sign) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.signInWithEmailAndPassword({
                    email: sign.email,
                    password: sign.password
                });
                const details = yield result;
                console.log(details);
                this.redirectEmail(details);
                return result;
            }
            catch (error) {
                console.error('Email sign-in error:', error);
                throw error;
            }
        });
    }
    signUp(sign) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.createUserWithEmailAndPassword({
                    email: sign.email,
                    password: sign.password,
                });
                // // 2. Sign in on the web layer using the id token
                // const auth = getAuth();
                // const creds = await signInWithEmailAndPassword(auth, sign.email, sign.password);
                const date = new Date();
                const options = { year: 'numeric', month: 'long' };
                const longFormat = date.toLocaleString('en-US', options);
                this.user = {
                    userName: sign.fName + "" + sign.lName,
                    uid: result.user.uid,
                    created: longFormat,
                    email: sign.email,
                    role: "free",
                };
                const email = yield _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.sendEmailVerification();
                this.SetUserFire(this.user).then(() => {
                    this.presentVerificationPopup();
                });
                return result;
            }
            catch (error) {
                console.error('Google sign-in error:', error);
                throw error;
            }
        });
    }
    deleteDocument(ref) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.FirebaseFirestore.deleteDocument({
                reference: ref,
            });
        });
    }
    ;
    getTier() {
        return this.tierSubject.asObservable();
    }
    getUser2() {
        return this.userSubject.asObservable();
    }
    getUser() {
        return this.user;
    }
    deleteAccount() {
        const ref = `users/${this.user.uid}`;
        this.deleteDocument(ref);
        this.SignOut();
    }
    SignOut() {
        _capacitor_firebase_authentication__WEBPACK_IMPORTED_MODULE_0__.FirebaseAuthentication.signOut().then(() => {
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('isLogged');
            this.router.navigate(['/onboarding']);
        });
    }
};
UserService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 45866:
/*!*******************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPage": () => (/* binding */ VtPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vt_popup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./vt-popup.page.html */ 4220);
/* harmony import */ var _vt_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page.scss */ 32518);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);






let VtPopupPage = class VtPopupPage {
    constructor(navCtrl, modalCtrl, modalController, http, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.email_Id = '';
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss();
    }
    onSubscribe() {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.email_Id.length <= 5 || !reg.test(this.email_Id)) {
            return this.presentToast('Please provide your Email.');
        }
        this.presentLoading('Sending...');
        let req = {
            "email": this.email_Id,
            "source": "opus_application_yummy"
        };
        this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
            this.presentToast('Submitted successfully.');
            this.modalController.dismiss();
            this.dismissLoading();
        });
    }
    presentToast(body, position, duration) {
        this.toastController.create({
            message: body,
            duration: (duration && duration > 0) ? duration : 2000,
            position: (position && (position == "top" || position == "middle")) ? position : 'bottom'
        }).then(toast => toast.present());
    }
    presentLoading(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({ message: body }).then(overlay => {
                overlay.present().then(() => {
                    if (!this.isLoading) {
                        try {
                            overlay.dismiss().then(() => console.log('loading aborted'));
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                });
            });
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            try {
                return yield this.loadingController.dismiss();
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
};
VtPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
VtPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vt-popup',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_vt_popup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vt_popup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VtPopupPage);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCZgDJsWtNcSAc8VQog41IlNx0cNzA_Yos",
        authDomain: "li-martez.firebaseapp.com",
        projectId: "li-martez",
        storageBucket: "li-martez.appspot.com",
        messagingSenderId: "1081027737093",
        appId: "1:1081027737093:web:12b91c530eba41df144e6c",
        measurementId: "G-60X7XVB9TH"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 46982:
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 73071);





let AuthGuard = class AuthGuard {
    constructor(user, data, router) {
        this.user = user;
        this.data = data;
        this.router = router;
    }
    canActivate(next, state) {
        // Check if the user is in local storage
        const value = localStorage.getItem('isLoggedIn');
        if (value == "true") {
            const data = this.data.getRecipes();
            if (data && data.length > 0) {
                // Retrieve the JSON string from local storage
                // Run this block if 'data' is defined and not empty
                // Place your code here
            }
            else {
                // 'data' is either undefined or an empty array
                // You can decide what to do in this case
                // For example, you might want to call this.data.getAll() here
                this.data.getAll();
            }
            //this.user.getGroceries();
            const jsonString = localStorage.getItem('user'); // Replace 'yourLocalStorageKey' with the key you used for storing the data.
            console.log(jsonString);
            // Check if the JSON string is not null or undefined
            if (jsonString) {
                try {
                    // Parse the JSON string into a JavaScript object
                    const userObject = JSON.parse(jsonString);
                    this.user.setUserAuto(userObject);
                    this.user.getGroceries();
                    this.user.getCustomGroceries();
                    this.data.getAds();
                    // Now you can access the properties of the object
                }
                catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
            else {
                console.log('No data found in local storage with the specified key.');
            }
            return true;
        }
        else {
            console.log("guard blocking");
            // User not found in local storage, navigate to login
            this.router.navigate(['/onboarding']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 64879:
/*!***************************************!*\
  !*** ./src/models/contants.models.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
}
Constants.KEY_DEFAULT_LANGUAGE = 'ob_dl';


/***/ }),

/***/ 30069:
/*!******************************************!*\
  !*** ./src/services/myevent.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyEvent": () => (/* binding */ MyEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);


 // For rxjs 6
let MyEvent = class MyEvent {
    constructor() {
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getLanguageObservable() {
        return this.selectedLanguage.asObservable();
    }
    setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
};
MyEvent.ctorParameters = () => [];
MyEvent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MyEvent);



/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		90733,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		20985,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		93899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		5121,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		52960,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		45473,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		19787,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66165,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		69569,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		35119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		90799,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68918,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		94028,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		98107,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		72178,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		20123,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		18706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		12099,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		84868,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		54377,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		15678,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		16735,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		87686,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		48555,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		30568,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		6231,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		45772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		14977,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		42886,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		54990,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		13810,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		2446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		47619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		28393,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		56281,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		35932,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		57970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		80298,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		71006,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		74783,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		62749,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		55404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		39043,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app [dir]=\"rtlSide\">\n    <ion-split-pane contentId=\"main-content\">\n        <ion-menu *ngIf=\"showSideMenu\" contentId=\"main-content\" [side]=\"rtlSideMenu\" type=\"reveal\">\n            <ion-header class=\"bg_transparent\">\n                <!--\n                <ion-toolbar>\n                    <ion-title>\n                        <div class=\"title-inner d-flex\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <ion-icon class=\"zmdi zmdi-close\"></ion-icon>\n                            </ion-menu-toggle>\n\n                            <div class=\"buy_this_app end\" *ngIf=\"config.demoMode\" (click)=\"buyappalert()\">\n                                <ion-menu-toggle auto-hide=\"false\">\n                                    <h2> {{\"buy_this_app\" | translate}} </h2>\n                                </ion-menu-toggle>\n                            </div>\n                        </div>\n                    </ion-title>\n                </ion-toolbar>\n-->\n\n                <div class=\"profile\">\n                    <div class=\"img_box center_img\">\n                        <img src=\"assets/images/icon.png\" class=\"crop_img\">\n                    </div>\n                    <h2>Ella's Kitchen</h2>\n                </div>\n            </ion-header>\n\n            <ion-content>\n                <ion-list lines=\"none\">\n                    <ion-item class=\"animate__animated animate__fadeInUp\" [ngClass]=\"activePage == 1 ? 'active' : ''\"\n                        (click)=\"home()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        home\n                                    </i>\n                                    <h2>{{'recipes' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n\n\n                    </ion-item>\n\n                    <ion-item *ngIf=\"chef\" class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 2 ? 'active' : ''\" (click)=\"add()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        add\n                                    </i>\n                                    <h2>{{'Add Recipe' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item>\n\n                    <ion-item class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 3 ? 'active' : ''\" (click)=\"grocery()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        inventory\n                                    </i>\n                                    <h2>{{'grocery' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item>\n\n                    <!-- <ion-item class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 4 ? 'active' : ''\" (click)=\"profile()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        perm_identity\n                                    </i>\n                                    <h2>{{'my_profile' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item> -->\n\n                    <ion-item class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 5 ? 'active' : ''\" (click)=\"contact_us()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        error_outline\n                                    </i>\n                                    <h2>{{'help_support' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item>\n                    <!-- \n                    <ion-item class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 6 ? 'active' : ''\" (click)=\"terms_conditions()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        verified_user\n                                    </i>\n                                    <h2>About the Chef</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item> -->\n\n                    <ion-item class=\"animate__animated animate__fadeInUp wow\"\n                        [ngClass]=\"activePage == 7 ? 'active' : ''\" (click)=\"language()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        translate\n                                    </i>\n                                    <h2>{{'change_language' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item>\n\n                    <ion-item class=\"animate__animated animate__fadeInUp wow\">\n                        <div class=\"item-inner\">\n                            <div class=\"menu-toggle-inner d-flex\" style=\"width: 100%\">\n                                <i class=\"material-icons-outlined  ion-text-start  light-theme\">\n                                    brightness_3\n                                </i>\n\n                                <i class=\"material-icons-outlined  ion-text-start  dark-theme\">\n                                    brightness_7\n                                </i>\n                                <h2>{{'change_theme' | translate}}</h2>\n\n                                <ion-toggle mode=\"ios\" class=\"end\" (ionChange)=\"onDarkMode($event)\"></ion-toggle>\n                            </div>\n                        </div>\n                    </ion-item>\n\n                    <div class=\"banner\">\n\n                        <img (click)=\"open(currentPic.link)\" *ngIf=\"currentPic\" [src]=\"currentPic.name\">\n\n                    </div>\n                    <!-- <ion-item class=\"animate__animated animate__fadeInUp wow\" *ngIf=\"config.demoMode\"\n                        (click)=\"buyappalert()\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        shopping_cart\n                                    </i>\n                                    <h2>{{'buy_this_app' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item> -->\n                </ion-list>\n            </ion-content>\n\n            <ion-footer class=\"ion-no-border animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\"\n                (click)=\"logout()\">\n                <ion-list lines=\"none\">\n                    <ion-item class=\"animate__animated animate__fadeInUp wow\">\n                        <div class=\"item-inner\">\n                            <ion-menu-toggle auto-hide=\"false\">\n                                <div class=\"menu-toggle-inner d-flex\">\n                                    <i class=\"material-icons-outlined  ion-text-start \">\n                                        logout\n                                    </i>\n                                    <h2>{{'logout' | translate}}</h2>\n                                </div>\n                            </ion-menu-toggle>\n                        </div>\n                    </ion-item>\n                </ion-list>\n            </ion-footer>\n        </ion-menu>\n        <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n    </ion-split-pane>\n\n</ion-app>");

/***/ }),

/***/ 22903:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/buyappalert/buyappalert.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <div class=\"clear_button\">\n        <ion-icon name=\"close\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n    <div class=\"container no_backend\">\n        <h2>Buy this <br> Template Now</h2>\n        <p>IONIC template only, No Backend.</p>\n       <div class=\"button\" (click)=\"buyAppAction()\"> \n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_codecanyon.png\">\n            </div>\n            <h3>Get it on <strong>Codecanoyon</strong></h3>\n        </div>\n    </div>\n\n    <div class=\"container complete_backend\">\n        <h2>Buy this App with <br>Complete Backend </h2>\n        <p>Full App solution with complete Backend.</p>\n        <div class=\"button\" (click)=\"navWhatsapp()\">\n            <div class=\"icon_box\">\n                <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/ic_whatsapp.png\">\n            </div>\n            <h3>Message on <strong>WhatsApp</strong></h3>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ 54162:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/picture-gallery/picture-gallery.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- picture-gallery.component.html -->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Picture Gallery</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeGallery()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" *ngFor=\"let pic of pics\">\n        <div class=\"img_box center_img\">\n          <img [src]=\"pic\" class=\"crop_img\">\n        </div>\n      </div>\n    </div>\n\n    <!-- Add pagination if desired -->\n    <div class=\"swiper-pagination\"></div>\n  </div>\n\n\n  <!-- <ion-slides>\n    <ion-slide *ngFor=\"let pic of pics\">\n      <div class=\"img_box center_img\">\n        <img [src]=\"pic\" class=\"crop_img\">\n      </div>\n    </ion-slide>\n  </ion-slides> -->\n</ion-content>");

/***/ }),

/***/ 55823:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/popup/popup.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      User Authentication\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closePopup()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"activeSegment\">\n    <ion-segment-button value=\"signup\">\n      Sign Up\n    </ion-segment-button>\n    <ion-segment-button value=\"signin\">\n      Sign In\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"activeSegment === 'signup'\">\n    <ion-item>\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input [(ngModel)]=\"signupData.fName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input [(ngModel)]=\"signupData.lName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"signupData.email\" type=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"signupData.password\" type=\"password\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"submitSignup()\">Sign Up</ion-button>\n  </div>\n\n  <div *ngIf=\"activeSegment === 'signin'\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"signinData.email\" type=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"signinData.password\" type=\"password\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\" (click)=\"submitSignin()\">Sign In</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ 4220:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/vt-popup/vt-popup.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <div class=\"cloes_btn ion-text-end\">\n        <ion-icon name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    </div>\n\n    <ion-card>\n        <div class=\"img_box\">\n            <img src=\"https://opuslabs.nyc3.digitaloceanspaces.com/AAFixItems/Other/popup_img_head.png\">\n        </div>\n\n        <div class=\"text_box\">\n            <h2>Stay in touch.</h2>\n            <p>Stay connected for Future <br>updates and new products.</p>\n        </div>\n        <ion-list lines=\"none\">\n\n            <ion-item lines=\"none\">\n                <ion-input type=\"email\" placeholder=\"Enter your email address\" [(ngModel)]=\"email_Id\"></ion-input>\n            </ion-item>\n\n            <ion-button size=\"large\" shape=\"block\" class=\"btn\" (click)=\"onSubscribe()\">\n                Subscribe Now\n            </ion-button>\n\n        </ion-list>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ 53040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "*,\nbody,\nhtml,\np,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nstrong,\nli {\n  --ion-font-family: \"Google Sans\";\n  font-family: \"Google Sans\";\n}\n\n.zmdi {\n  font: normal normal normal 14px/1 \"Material-Design-Iconic-Font\";\n}\n\n.banner {\n  margin-top: 1rem;\n  height: calc(100% / 1.77778);\n  /* 4:3 aspect ratio */\n  position: relative;\n  overflow: hidden;\n  background-color: none;\n  border-radius: 10px;\n  /* padding: 5px; */\n  margin-left: 1rem;\n  display: flex;\n  /* Use flexbox to center the image horizontally and vertically */\n  justify-content: center;\n  /* Center horizontally */\n  align-items: center;\n  /* Center vertically */\n}\n\nion-menu {\n  --background: var(--transparent);\n  --width: calc(100% - 120px);\n  background: url('menu_bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-menu ion-header ion-toolbar {\n  min-height: unset !important;\n}\n\nion-menu ion-header ion-toolbar ion-title {\n  padding: 0 30px !important;\n  position: relative !important;\n  top: 0 !important;\n  line-height: 70px;\n}\n\nion-menu ion-header ion-toolbar ion-title ion-icon {\n  color: var(--text-dark);\n  font-size: 1.3rem !important;\n  padding-bottom: 0;\n  position: relative;\n  top: 8px;\n  min-width: 70px;\n  text-align: justify;\n}\n\nion-menu ion-header ion-toolbar ion-title .title-inner {\n  min-height: 70px;\n}\n\nion-menu .profile {\n  width: 100%;\n  padding: 40px 20px;\n}\n\nion-menu .profile .img_box {\n  width: 55px;\n  height: 55px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n\nion-menu .profile h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.35rem;\n  font-weight: 400;\n  letter-spacing: 0.7px;\n}\n\nion-menu ion-content {\n  --background: var(--transparent) !important;\n}\n\nion-menu ion-list {\n  background: var(--transparent) !important;\n  padding: 0;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  position: relative;\n  z-index: 999;\n  padding-bottom: 30px;\n}\n\nion-menu ion-list ion-item {\n  padding: 12px 0px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --min-height: unset;\n  --background: var(--transparent) !important;\n  --background-activated: var(--transparent) !important;\n  --background-activated-opacity: 1;\n  --background-hover: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n}\n\nion-menu ion-list ion-item:first-child {\n  padding-top: 0;\n}\n\nion-menu ion-list ion-item .item-inner {\n  width: 100%;\n}\n\nion-menu ion-list ion-item ion-toggle {\n  --background: var(--bg-white);\n  --background-checked: var(--bg-white);\n  --handle-background: var(--text-dark);\n  --handle-background-checked: var(--primary);\n  --handle-height: 16px;\n  --handle-width: 16px;\n  --handle-box-shadow: none;\n  height: 22px;\n  width: 38px;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\nion-menu ion-list ion-item ion-menu-toggle {\n  display: block;\n  width: 100%;\n}\n\nion-menu ion-list ion-item .menu-toggle-inner {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 12px;\n  padding-left: 20px;\n  position: relative;\n}\n\nion-menu ion-list ion-item .menu-toggle-inner::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: var(--primary);\n  border-radius: 0 11px 11px 0;\n  transition: all 0.3s;\n}\n\nion-menu ion-list ion-item .menu-toggle-inner i,\nion-menu ion-list ion-item .menu-toggle-inner ion-icon {\n  color: var(--white);\n  font-size: 1.3rem;\n  padding: 1px;\n  min-width: 39px;\n  position: relative;\n  z-index: 99;\n  display: block;\n}\n\nion-menu ion-list ion-item .menu-toggle-inner i.dark-theme,\nion-menu ion-list ion-item .menu-toggle-inner ion-icon.dark-theme {\n  display: none;\n}\n\nion-menu ion-list ion-item .menu-toggle-inner h2 {\n  margin: 0;\n  color: var(--white);\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  position: relative;\n  z-index: 99;\n}\n\nion-menu ion-list ion-item.active ion-menu-toggle .menu-toggle-inner::before {\n  left: 0;\n}\n\nion-menu ion-list .buy_this_app {\n  background: var(--white);\n  position: relative;\n  bottom: 0px;\n  right: 0px;\n  border-radius: 50px;\n  height: 49px;\n  display: flex;\n  align-items: center;\n  min-width: 170px;\n  z-index: 99999;\n  margin: 16px 21px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-menu ion-list .buy_this_app h2 {\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.1rem;\n  font-weight: 500;\n  padding: 0;\n}\n\nion-menu ion-list .buy_this_app h2 ion-icon {\n  font-size: 1.3rem;\n  min-width: 29px;\n}\n\nion-menu ion-footer ion-list {\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQzs7Ozs7Ozs7Ozs7OztFQWFJLGdDQUFBO0VBQ0EsMEJBQUE7QUFDTDs7QUFFQztFQUNJLCtEQUFBO0FBQ0w7O0FBSUM7RUFDSSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0VBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZMOztBQU1DO0VBQ0ksZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhMOztBQUtLO0VBQ0ksNEJBQUE7QUFIVDs7QUFLUztFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSGI7O0FBS2E7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFIakI7O0FBTWE7RUFDSSxnQkFBQTtBQUpqQjs7QUFVSztFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQVJUOztBQVVTO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUmI7O0FBV1M7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFUYjs7QUFhSztFQUNJLDJDQUFBO0FBWFQ7O0FBY0s7RUFDSSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVpUOztBQWNTO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxxREFBQTtFQUNBLGlDQUFBO0VBQ0EsaURBQUE7RUFDQSw2Q0FBQTtBQVpiOztBQWNhO0VBQ0ksY0FBQTtBQVpqQjs7QUFlYTtFQUNJLFdBQUE7QUFiakI7O0FBZ0JhO0VBQ0ksNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUFkakI7O0FBaUJhO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFmakI7O0FBa0JhO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWhCakI7O0FBa0JpQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUFoQnJCOztBQW1CaUI7O0VBRUksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWpCckI7O0FBbUJxQjs7RUFDSSxhQUFBO0FBaEJ6Qjs7QUFvQmlCO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJyQjs7QUF3QnFCO0VBQ0ksT0FBQTtBQXRCekI7O0FBOEJTO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBNUJiOztBQThCYTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQTVCakI7O0FBOEJpQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQTVCckI7O0FBb0NTO0VBQ0ksZUFBQTtBQWxDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgKixcbiBib2R5LFxuIGh0bWwsXG4gcCxcbiBzcGFuLFxuIGgxLFxuIGgyLFxuIGgzLFxuIGg0LFxuIGg1LFxuIGg2LFxuIHN0cm9uZyxcbiBsaSB7XG4gICAgIC0taW9uLWZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICAgICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiB9XG5cbiAuem1kaSB7XG4gICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSAnTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250JztcbiB9XG5cblxuXG4gLmJhbm5lciB7XG4gICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgIC8vICB3aWR0aDogMTAwJTtcbiAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAxLjc3Nzc4KTtcbiAgICAgLyogNDozIGFzcGVjdCByYXRpbyAqL1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbiAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIC8qIFVzZSBmbGV4Ym94IHRvIGNlbnRlciB0aGUgaW1hZ2UgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIC8qIENlbnRlciB2ZXJ0aWNhbGx5ICovXG5cbiB9XG5cbiBpb24tbWVudSB7XG4gICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAtLXdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1hZ2VzL21lbnVfYmcucG5nKTtcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG5cbiAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC50aXRsZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgIH1cblxuICAgICAucHJvZmlsZSB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcblxuICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgIH1cblxuICAgICAgICAgaDIge1xuICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuN3B4O1xuICAgICAgICAgfVxuICAgICB9XG5cbiAgICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgfVxuXG4gICAgIGlvbi1saXN0IHtcbiAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgLS1taW4taGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAtLWhhbmRsZS13aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgLS1oYW5kbGUtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpb24tbWVudS10b2dnbGUge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgLm1lbnUtdG9nZ2xlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTFweCAxMXB4IDA7XG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzOXB4O1xuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgICAgICAgJi5kYXJrLXRoZW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjk1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgIGlvbi1tZW51LXRvZ2dsZSAubWVudS10b2dnbGUtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgIH1cblxuICAgICAgICAgLmJ1eV90aGlzX2FwcCB7XG4gICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICAgICAgIG1hcmdpbjogMTZweCAyMXB4O1xuICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI5cHg7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgIH1cblxuXG4gICAgIGlvbi1mb290ZXIge1xuICAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgIH1cbiAgICAgfVxuIH0iXX0= */";

/***/ }),

/***/ 78106:
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.page.scss ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".clear_button {\n  background: #14990A;\n  padding: 15px 24px;\n}\n.clear_button ion-icon {\n  color: #fff;\n  font-size: 1.65rem !important;\n}\n.container {\n  padding: 51px 34px;\n}\n.container h2 {\n  margin: 0;\n  font-size: 1.55rem;\n  font-weight: 600;\n  letter-spacing: 0;\n  padding-bottom: 12px;\n}\n.container p {\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding-bottom: 32px;\n}\n.container .button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  border-radius: 50px;\n  height: 58px;\n  padding: 0 18px;\n  box-shadow: 0 5px 9px -2px rgba(0, 0, 0, 0.3);\n}\n.container .button .icon_box {\n  min-width: 45px;\n}\n.container .button .icon_box img {\n  width: 35px;\n  display: block;\n}\n.container .button h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  letter-spacing: 0;\n}\n.container .button h3 strong {\n  font-weight: 700;\n}\n.container.no_backend {\n  background: #14990A;\n}\n.container.no_backend h2 {\n  color: #fff;\n}\n.container.no_backend p {\n  color: #fff;\n}\n.container.no_backend .button {\n  background: #fff;\n  color: #000000;\n}\n.container.complete_backend {\n  background: #FFFFFF;\n}\n.container.complete_backend h2 {\n  color: #000000;\n}\n.container.complete_backend p {\n  color: #7F7F7F;\n}\n.container.complete_backend .button {\n  background: #14990A;\n  color: #FFFFFF;\n}\n.container.complete_backend .button .icon_box img {\n  width: 33px;\n}\n.container.complete_backend .button h3 {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eWFwcGFsZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFGWTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBSWhCO0FBRFE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdaO0FBRlk7RUFDSSxnQkFBQTtBQUloQjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUdaO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0FBR1o7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQURRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBR1o7QUFEZ0I7RUFDSSxXQUFBO0FBR3BCO0FBQVk7RUFDSSxnQkFBQTtBQUVoQiIsImZpbGUiOiJidXlhcHBhbGVydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUxcHggMzRweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjU1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjg3cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm5vX2JhY2tlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuY29tcGxldGVfYmFja2VuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICM3RjdGN0Y7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTQ5OTBBO1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAuaWNvbl9ib3gge1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 71687:
/*!****************************************************************!*\
  !*** ./src/app/picture-gallery/picture-gallery.component.scss ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWN0dXJlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 12037:
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 32518:
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.page.scss ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --background: rgb(0 0 0 / 0%) !important;\n}\n\n.cloes_btn {\n  padding: 25px;\n}\n\n.cloes_btn ion-icon {\n  color: #fff;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\nion-card {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: calc(100% - 53px);\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 0;\n  background: none;\n  overflow: hidden;\n  box-shadow: none;\n  padding: 0 0 3px 0;\n}\n\nion-card::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 113px);\n  background: #fff;\n  border-radius: 5px;\n}\n\nion-card .img_box {\n  position: relative;\n  z-index: 99;\n  margin: auto;\n  width: 100%;\n  max-width: 275px;\n  min-height: 275px;\n}\n\nion-card .img_box img {\n  display: block;\n  margin: 0 auto;\n}\n\nion-card .text_box {\n  position: relative;\n  z-index: 99;\n  width: 100%;\n  padding: 0 25px;\n  top: -23px;\n}\n\nion-card .text_box h2 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: #000;\n  margin: 0;\n  letter-spacing: 0;\n  padding-bottom: 18px;\n}\n\nion-card .text_box p {\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 19px;\n  color: #000;\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nion-card ion-list {\n  position: relative;\n  z-index: 99;\n  margin: 0;\n  padding: 0 25px;\n  padding-bottom: 25px;\n}\n\nion-card ion-list ion-item {\n  background: #f5f5f5;\n  padding: 0 17px;\n  width: calc(100% - 0px);\n  min-height: unset !important;\n  margin: 0 auto;\n  --background: none;\n  align-items: flex-start;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  margin-bottom: 20px;\n  border-radius: 5px;\n}\n\nion-card ion-list ion-item ion-input {\n  font-size: 0.95rem !important;\n  font-weight: 500 !important;\n  color: #000;\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --padding-top: 0 !important;\n  --padding-bottom: 0px !important;\n  --placeholder-color: #b3b3b3 !important;\n  --placeholder-opacity: 1;\n  --placeholder-font-weight: 400 !important;\n  --padding: 0 !important;\n  min-height: 45px;\n}\n\nion-card ion-list button[ion-button] {\n  margin: 0;\n  background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  height: 46px;\n  border-radius: 5px;\n  text-transform: unset;\n  font-size: 1.4rem;\n  box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n\nion-card ion-list .button.btn {\n  width: 100%;\n  font-size: 0.95rem;\n  font-weight: 400;\n  letter-spacing: 0.53px !important;\n  height: 46px;\n  --background: linear-gradient(180deg, #f5839d 0%, #ee2d5a 70%);\n  color: #fff;\n  margin: 0;\n  text-transform: unset !important;\n  --box-shadow: 0 12px 18px -1px rgba(238, 45, 90, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZ0LXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFSOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBR1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQURaOztBQUtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSFI7O0FBS1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFIWjs7QUFNUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFKWjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFOUjs7QUFRUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5aOztBQVFZO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7O0FBV1k7RUFDSSxTQUFBO0VBQ0EsNERBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7QUFUaEI7O0FBY1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNEQUFBO0FBWmhCIiwiZmlsZSI6InZ0LXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDAlKSAhaW1wb3J0YW50O1xufVxuXG4uY2xvZXNfYnRuIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG5pb24tY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUzcHgpO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDAgM3B4IDA7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTEzcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmltZ19ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDI3NXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAyNzVweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0X2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICAgIHRvcDogLTIzcHg7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAmW2lvbi1idXR0b25dIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICYuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41M3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ODM5ZCAwJSwgI2VlMmQ1YSA3MCUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IDAgMTJweCAxOHB4IC0xcHggcmdiYSgyMzgsIDQ1LCA5MCwgMC4zNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map