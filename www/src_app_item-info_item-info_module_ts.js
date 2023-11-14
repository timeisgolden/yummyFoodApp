"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_item-info_item-info_module_ts"],{

/***/ 88752:
/*!*******************************************************!*\
  !*** ./src/app/item-info/item-info-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemInfoPageRoutingModule": () => (/* binding */ ItemInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _item_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-info.page */ 95339);




const routes = [
    {
        path: '',
        component: _item_info_page__WEBPACK_IMPORTED_MODULE_0__.ItemInfoPage
    }
];
let ItemInfoPageRoutingModule = class ItemInfoPageRoutingModule {
};
ItemInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemInfoPageRoutingModule);



/***/ }),

/***/ 65262:
/*!***********************************************!*\
  !*** ./src/app/item-info/item-info.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemInfoPageModule": () => (/* binding */ ItemInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _item_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-info-routing.module */ 88752);
/* harmony import */ var _item_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-info.page */ 95339);








let ItemInfoPageModule = class ItemInfoPageModule {
};
ItemInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _item_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemInfoPageRoutingModule
        ],
        declarations: [_item_info_page__WEBPACK_IMPORTED_MODULE_1__.ItemInfoPage]
    })
], ItemInfoPageModule);



/***/ }),

/***/ 95339:
/*!*********************************************!*\
  !*** ./src/app/item-info/item-info.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemInfoPage": () => (/* binding */ ItemInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_item_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./item-info.page.html */ 90749);
/* harmony import */ var _item_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-info.page.scss */ 71610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../picture-gallery/picture-gallery.component */ 82739);










let ItemInfoPage = class ItemInfoPage {
    constructor(modalController, data, acRoute, route, navCtrl, gestureController, ref, statusBar, user) {
        this.modalController = modalController;
        this.data = data;
        this.acRoute = acRoute;
        this.route = route;
        this.navCtrl = navCtrl;
        this.gestureController = gestureController;
        this.ref = ref;
        this.statusBar = statusBar;
        this.user = user;
        this.FavoriteIcon = false;
        this.currDiv = 'ingredients_list';
        this.segment = 0;
        this.counter = 0;
        this.checkedItemsCount = 0; // Initialize the count to zero
        this.groceryList = [];
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
    ShowDiv(divVal) {
        this.currDiv = divVal;
    }
    addGroceries() {
        if (this.groceryList.length > 0) {
            const groceryList = {
                needed: this.groceryList,
                recipe: this.recipe,
            };
            this.user.setGrocery(groceryList);
            this.groceryList = [];
        }
        this.currDiv = "ingredients_list";
    }
    openPictureGallery(pics) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _picture_gallery_picture_gallery_component__WEBPACK_IMPORTED_MODULE_5__.PictureGalleryComponent,
                componentProps: { pics },
            });
            return yield modal.present();
        });
    }
    // Inside your component class
    onCheckboxChange(CheckboxChangeEventDetail) {
        const ingredient = {
            name: CheckboxChangeEventDetail.name,
            amount: CheckboxChangeEventDetail.amount,
            icon: CheckboxChangeEventDetail.icon,
        };
        if (CheckboxChangeEventDetail.checked == true) {
            this.groceryList.push(ingredient);
        }
        else {
            // If the checkbox is unchecked, remove the ingredient from the groceryList
            this.groceryList = this.groceryList.filter(item => item.name !== ingredient.name);
        }
    }
    segmentChanged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
    toggleFavoriteIcon() {
        this.FavoriteIcon = !this.FavoriteIcon;
    }
    start_cooking() {
        this.route.navigate(['./start-cooking']);
    }
};
ItemInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.GestureController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
ItemInfoPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['slides', { static: true },] }],
    contentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['contentElement', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },] }]
};
ItemInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-item-info',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_item_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_info_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ItemInfoPage);



/***/ }),

/***/ 90749:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/item-info/item-info.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"title-inner d-flex\">\n                <span class=\"favorite_icon end\" [ngClass]=\"FavoriteIcon ? 'active' : ''\" (click)=\"toggleFavoriteIcon()\">\n                    <ion-icon class=\"zmdi zmdi-favorite-outline ion-text-center\"></ion-icon>\n                    <ion-icon class=\"zmdi zmdi-favorite ion-text-center\"></ion-icon>\n                </span>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content #contentElement fullscreen>\n    <div class=\"banner\">\n        <ion-slides pager=\"true\">\n            <ion-slide *ngFor=\"let pic of recipe.pics\">\n                <div class=\"img_box center_img\">\n                    <img src=\"{{pic}}\" class=\"crop_img\">\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div id=\"content-inner\" class=\"content-inner\">\n        <div class=\"pullup\"></div>\n        <div class=\"content_header ion-text-center\">\n            <div class=\"text-box\">\n                <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">{{recipe.name}}</h2>\n                <h3 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">\n                    {{recipe.ethnicity}}\n                    <span></span> {{recipe.time}}\n                    <span></span> {{recipe.servings}} Servings\n                </h3>\n            </div>\n\n            <ion-segment class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\" mode=\"ios\"\n                (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\" lines=\"none\">\n                <ion-segment-button mode=\"ios\" value=\"0\">\n                    <ion-label class=\"ion-text-center\">\n                        {{'ingredients' | translate}}\n                    </ion-label>\n                </ion-segment-button>\n                <ion-segment-button mode=\"ios\" value=\"1\">\n                    <ion-label class=\"ion-text-center\">\n                        {{'direction' | translate}}\n                    </ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n\n        <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\">\n            <!--            ingredients section start-->\n            <ion-slide class=\"ingredients_list\" *ngIf=\"currDiv == 'ingredients_list'\">\n                <ion-list lines=\"none\">\n                    <!-- <h2> {{'total' | translate}} 8 {{'ingredients' | translate}}</h2> -->\n                    <ion-item *ngFor=\" let ingredient of recipe.ingredients\"\n                        class=\"animate__animated animate__fadeInUp\">\n                        <div class=\"item-inner d-flex\">\n                            <div class=\"img_box\">\n                                <img src=\"assets/images/Ingredients/ingredient3.png\">\n                            </div>\n                            <div class=\"text_box\">\n                                <h3 class=\"d-flex\">\n                                    {{ingredient.name}}\n                                    <span class=\"end\">{{ingredient.amount}}</span>\n                                </h3>\n                            </div>\n                        </div>\n                    </ion-item>\n                </ion-list>\n                <ion-button size=\"large\" fill=\"outline\" class=\"btn animate__animated animate__fadeInUp wow\"\n                    data-wow-duration=\"0.5s\" expand=\"round\" (click)=\"ShowDiv('ShoppingList')\">{{'add_to_shopping_list' |\n                    translate}}</ion-button>\n            </ion-slide>\n\n\n            <ion-slide class=\"ShoppingList\" *ngIf=\"currDiv == 'ShoppingList'\">\n                <ion-list lines=\"none\">\n                    <h2 class=\"d-flex\">{{ '2' | translate }} {{ 'out_of' | translate }} 8 {{ 'ingredient_selected' |\n                        translate }}\n                        <span class=\"end\">{{ 'clear_all' | translate }}</span>\n                    </h2>\n                    <ion-item *ngFor=\" let ingredient of recipe.ingredients\"\n                        class=\"animate__animated animate__fadeInUp\">\n                        <div class=\"item-inner d-flex\">\n                            <div class=\"img_box\">\n                                <ion-checkbox (ionChange)=\"onCheckboxChange(ingredient)\"\n                                    [(ngModel)]=\"ingredient.checked\"></ion-checkbox>\n                            </div>\n                            <div class=\"text_box\">\n                                <h3 class=\"d-flex\">\n                                    {{ingredient.name}}\n                                    <span class=\"end\">{{ingredient.amount}}</span>\n                                </h3>\n                            </div>\n                        </div>\n                    </ion-item>\n\n\n                </ion-list>\n                <ion-button *ngIf=\"groceryList.length > 0\" size=\"large\"\n                    class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\"\n                    (click)=\"addGroceries()\">{{'add' | translate}} ( {{groceryList.length}}\n                    {{'items' |\n                    translate}})</ion-button>\n                <ion-button *ngIf=\"groceryList.length == 0\" size=\"large\"\n                    class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\"\n                    (click)=\"ShowDiv('ingredients_list')\">Cancel</ion-button>\n            </ion-slide>\n            <!--            ingredients section end-->\n\n\n            <!--            direction section start-->\n            <ion-slide class=\"direction\">\n                <ion-list style=\"padding: 1.5rem\" lines=\"none\">\n                    <h2 class=\"dflex\">{{recipe.directions.length}} {{'step_cooking_proess' |\n                        translate}}\n                        <span class=\"end\">{{recipe.time}}</span>\n                    </h2>\n                    <div class=\"animate__animated animate__fadeInUp\">\n                        <div style=\"color: gray;\" *ngFor=\"let direction of recipe.directions; let i = index\"\n                            class=\"item-inner\">\n                            <h3>'{{ 'step' | translate }} {{ i + 1 }} / {{ recipe.directions.length }}'\n                                <!-- <span class=\"end\">{{ direction.time }}</span> -->\n                            </h3>\n                            <p>\n                                {{ direction.description }}\n                            </p>\n                        </div>\n                    </div>\n\n\n                </ion-list>\n                <!-- <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\"\n                    expand=\"round\" (click)=\"start_cooking()\">{{'start_cooking' | translate}}</ion-button> -->\n            </ion-slide>\n            <!--            direction section end-->\n        </ion-slides>\n    </div>\n</ion-content>");

/***/ }),

/***/ 71610:
/*!***********************************************!*\
  !*** ./src/app/item-info/item-info.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 20px;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  color: var(--white) !important;\n}\nion-header ion-toolbar ion-title .title-inner .favorite_icon {\n  display: block;\n  min-width: 26px;\n}\nion-header ion-toolbar ion-title .title-inner .favorite_icon ion-icon {\n  display: block;\n  color: var(--white);\n  font-size: 1.5rem;\n}\nion-header ion-toolbar ion-title .title-inner .favorite_icon ion-icon.zmdi-favorite {\n  display: none;\n  color: var(--red_color);\n}\nion-header ion-toolbar ion-title .title-inner .favorite_icon.active ion-icon.zmdi-favorite-outline {\n  display: none;\n}\nion-header ion-toolbar ion-title .title-inner .favorite_icon.active ion-icon.zmdi-favorite {\n  display: block;\n}\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 395px;\n}\n.banner ion-slides ion-slide .img_box img {\n  max-width: unset;\n}\n.directions-list {\n  display: block;\n}\n.content-inner {\n  bottom: 0 !important;\n  top: 340px;\n  transition: all 0.2s ease 0s !important;\n  position: fixed !important;\n  right: 0 !important;\n  left: 0 !important;\n  background: var(--bg-white);\n  height: calc(100vh - 100px);\n  z-index: 99;\n  border-radius: 30px 30px 0 0;\n  padding-top: 15px;\n}\n.content-inner .pullup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 25px;\n  z-index: 999;\n}\n.content-inner .pullup::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 65px;\n  height: 4px;\n  margin: auto;\n  background: var(--pullup-color);\n  border-radius: 4px;\n}\n.content-inner .content_header {\n  width: 100%;\n}\n.content-inner .content_header .text-box {\n  padding: 18px 20px;\n}\n.content-inner .content_header .text-box h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.6rem;\n  padding-bottom: 7px;\n}\n.content-inner .content_header .text-box h3 {\n  margin: 0 auto;\n  color: var(--text-light);\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.84rem;\n  padding: 0;\n}\n.content-inner .content_header .text-box h3 span {\n  display: block;\n  min-width: 20px;\n  height: 20px;\n  position: relative;\n}\n.content-inner .content_header .text-box h3 span::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 3px;\n  height: 3px;\n  background: var(--primary);\n  border-radius: 50%;\n}\n.content-inner .content_header ion-segment {\n  border: none !important;\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  background: var(--bg-color) !important;\n  padding: 0 10px;\n  border-radius: 0;\n}\n.content-inner .content_header ion-segment ion-segment-button {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --ripple-color: var(--transparent) !important;\n  --indicator-color: var(--white);\n  --border-radius: 50px !important;\n  --color-checked: var(--secondary) !important;\n  --border-width: 0 !important;\n  --indicator-height: 0px;\n  --indicator-box-shadow: none !important;\n  background: none !important;\n  position: relative;\n  font-size: 1rem;\n  font-weight: 500;\n  letter-spacing: 0;\n  color: var(--text-light);\n  text-transform: unset;\n  box-shadow: none !important;\n  margin: 0 auto;\n  width: 100%;\n  padding: 12px 0;\n}\n.content-inner .content_header ion-segment ion-segment-button::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 0;\n  height: 3px;\n  margin: auto;\n  background: var(--primary);\n  transition: all 0.4s;\n}\n.content-inner .content_header ion-segment ion-segment-button ion-label {\n  width: 100%;\n}\n.content-inner .content_header ion-segment ion-segment-button.segment-button-checked::after {\n  width: 95px;\n}\n.content-inner .content_header ion-segment ion-segment-button.segment-button-checked ion-label {\n  color: var(--text-dark) !important;\n}\n.content-inner ion-slides ion-slide {\n  display: block;\n  min-height: calc(100vh - 100px - 25px - 140px);\n  max-height: calc(100vh - 100px - 25px - 140px);\n  overflow: hidden;\n  overflow-y: auto;\n  text-align: initial;\n  position: relative;\n}\n.content-inner ion-slides ion-slide .dflex {\n  display: flex !important;\n  align-items: center;\n  width: 100%;\n  color: gray;\n  padding-top: 0px;\n}\n.content-inner ion-slides ion-slide .dflex .end {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  display: block;\n}\n.content-inner ion-slides ion-slide h2 {\n  margin: 0;\n  padding: 20px 20px 8px 20px;\n  color: var(--text-light2);\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n.content-inner ion-slides ion-slide h2 span {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.content-inner ion-slides ion-slide ion-list {\n  margin: 0;\n  background: none;\n  padding: 0;\n  position: relative;\n  min-height: calc(100vh - 100px - 25px - 140px);\n  max-height: calc(100vh - 100px - 25px - 140px);\n  overflow: hidden;\n  overflow-y: auto;\n  padding-bottom: 75px;\n}\n.content-inner ion-slides ion-slide ion-list ion-item {\n  padding: 12px 21px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: 26px !important;\n  --ripple-color: var(--transparent) !important;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner {\n  width: 100%;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner .img_box {\n  min-width: 55px;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner .img_box img {\n  display: block;\n  max-height: 29px !important;\n  width: auto;\n  max-width: 30px;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner .text_box {\n  width: 100%;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n}\n.content-inner ion-slides ion-slide ion-list ion-item .item-inner .text_box h3 span {\n  color: var(--text-light);\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.content-inner ion-slides ion-slide .button.btn {\n  position: absolute;\n  bottom: 25px;\n  left: 0;\n  right: 0;\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  visibility: visible !important;\n}\n.content-inner ion-slides ion-slide .button.btn.button-outline {\n  overflow: hidden;\n  border-radius: 50px;\n  background: var(--bg-white);\n  color: var(--primary);\n}\n.content-inner ion-slides ion-slide .button.btn.button-outline::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--primary);\n  opacity: 0.2;\n}\n.content-inner ion-slides ion-slide.ShoppingList h2 span {\n  color: var(--primary) !important;\n}\n.content-inner ion-slides ion-slide.ShoppingList ion-list ion-item .item-inner .img_box ion-checkbox {\n  margin: 0;\n  --background: var(--bg-white);\n  --background-checked: var(--primary);\n  --border-color: var(--text-light);\n  --border-color-checked: var(--primary);\n  --checkmark-color: var(--bg-white);\n  --size: 20px;\n}\n.content-inner ion-slides ion-slide.direction ion-list ion-item .item-inner h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 600;\n  font-size: 1rem;\n  padding-bottom: 10px;\n}\n.content-inner ion-slides ion-slide.direction ion-list ion-item .item-inner p {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  line-height: 25px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,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LGVBQUE7RUFDQSxvQkFBQTtBQXRFNUI7QUF5RXdCO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF2RTVCIiwiZmlsZSI6Iml0ZW0taW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgLnRpdGxlLWlubmVyIHtcbiAgICAgICAgICAgICAgICAuZmF2b3JpdGVfaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1mYXZvcml0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkX2NvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnptZGktZmF2b3JpdGUtb3V0bGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi56bWRpLWZhdm9yaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmFubmVyIHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5NXB4O1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmRpcmVjdGlvbnMtbGlzdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LWlubmVyIHtcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB0b3A6IDM0MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UgMHMgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAucHVsbHVwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1bGx1cC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudF9oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAudGV4dC1ib3gge1xuICAgICAgICAgICAgcGFkZGluZzogMThweCAyMHB4O1xuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgLS1yaXBwbGUtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG5cbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHggLSAyNXB4IC0gMTQwcHgpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4IC0gMjVweCAtIDE0MHB4KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgICAgICAgICAuZGZsZXgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG5cbiAgICAgICAgICAgICAgICAuZW5kIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggOHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4IC0gMjVweCAtIDE0MHB4KTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHggLSAyNXB4IC0gMTQwcHgpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMXB4O1xuICAgICAgICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dF9ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLmJ0biB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAmLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5TaG9wcGluZ0xpc3Qge1xuICAgICAgICAgICAgICAgIGgyIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lciAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgJi5kaXJlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_item-info_item-info_module_ts.js.map