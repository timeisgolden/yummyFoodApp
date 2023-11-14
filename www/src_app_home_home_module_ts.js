"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 12056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 18847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/browser */ 16799);










let HomePage = class HomePage {
    constructor(data, route, config, statusBar, user) {
        //this.user.getGroceries();
        this.data = data;
        this.route = route;
        this.config = config;
        this.statusBar = statusBar;
        this.user = user;
        this.type_of_food = "Breakfast";
        this.adsOn = true;
        this.showToolbar = false;
        this.bannerImages = [];
        this.currentBannerImageIndex = 0;
        this.totalRecipes = [];
        this.filteredRecipes = [];
        this.searchQuery = '';
        console.log(this.filteredRecipes);
        this.recipeSub = this.data.getObservable().subscribe((recipes) => {
            this.totalRecipes = recipes;
            this.recipes = this.separateRecipesByCategory(recipes);
            if (this.recipes.length > 0)
                this.getUniqueEthnicity(recipes);
        });
        this.adsSub = this.data.adsObserve().subscribe((ads) => {
            if (ads != null) {
                console.log(ads);
                this.bannerImages = ads.banners;
                console.log(this.bannerImages[0].link);
            }
        });
    }
    open(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__.Browser.open({ url: link });
        });
    }
    ;
    get currentBannerImageUrl() {
        this.currentBannerImageIndex++;
        var index = this.currentBannerImageIndex - 1;
        if (index >= this.bannerImages.length) {
            this.currentBannerImageIndex = 0;
            index = 0;
        }
        console.log(index);
        // Calculate the current banner image URL based on the index
        return index;
    }
    cycleBannerImage() {
        this.currentBannerImageIndex++; // Increment the index
        if (this.currentBannerImageIndex >= this.bannerImages.length) {
            // If the index exceeds the array length, loop back to the first image
            this.currentBannerImageIndex = 0;
        }
        console.log(this.currentBannerImageIndex);
        return this.currentBannerImageIndex;
    }
    incrementAds() {
        console.log("incrementAds");
        this.data.incrementAdCounter();
    }
    separateRecipesByCategory(recipes) {
        return recipes.reduce((result, recipe) => {
            // Get the category name from the current recipe
            const categoryName = recipe.category;
            // Initialize an array for the category if it doesn't exist
            if (!result[categoryName]) {
                result[categoryName] = [];
            }
            // Push the recipe into the appropriate category array
            result[categoryName].push(recipe);
            return result;
        }, {});
    }
    getUniqueEthnicity(recipes) {
        const categoriesSet = new Set(); // Use a Set to store unique categories
        recipes.forEach(recipe => {
            categoriesSet.add(recipe.ethnicity);
        });
        this.ethnicities = Array.from(categoriesSet);
    }
    ngOnDestroy() {
        this.recipeSub.unsubscribe();
    }
    ngOnInit() {
        const person = this.user.getUser();
        if (person.role == "Paid")
            this.adsOn = false;
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('var(--bg-white)');
    }
    handleSearchBarBlur() {
        // Delay the execution of the clear() function by 300 milliseconds (adjust the delay as needed)
        this.blurTimer = setTimeout(() => {
            this.clear();
        }, 100);
    }
    filterRecipes() {
        if (this.searchQuery != '')
            this.filteredRecipes = this.totalRecipes.filter((recipe) => {
                return recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
    }
    clear() {
        // Clear the search term
        this.searchQuery = '';
        this.filteredRecipes = [];
    }
    filter() {
        this.route.navigate(['./filter']);
    }
    search() {
        this.route.navigate(['./search']);
    }
    notification() {
        this.route.navigate(['./notification']);
    }
    item_info(recipe) {
        this.data.setSelectedRecipe(recipe);
        this.route.navigate(['./item-info']);
    }
    onScroll($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 200;
        }
    }
    developed_by() {
        window.open("https://opuslab.works/", '_system', 'location=no');
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 12056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"position: relative\" [class.active]=\"showToolbar\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button (click)=\"incrementAds()\" icon=\"\">\n                <ion-icon class=\"zmdi zmdi-sort-amount-desc\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <div style=\"flex-direction: column;\" class=\"title-inner d-flex\">\n                <div class=\"text_box\">\n                    <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                        {{'recipes' | translate}}\n\n                    </h2>\n\n                </div>\n\n                <!-- <span *ngIf=\"type_of_food == 'Breakfast'\">{{'Top_Breakfast_Recipes' |\n                    translate}}</span>\n                <span *ngIf=\"type_of_food == 'Lunch'\">{{'Top_Lunch_Recipes' |\n                    translate}}</span>\n                <span *ngIf=\"type_of_food == 'Dinner'\">{{'Top_Dinner_Recipes' |\n                    translate}}</span>\n                <span *ngIf=\"type_of_food == 'Dessert'\">{{'Top_Dessert_Recipes' |\n                    translate}}</span>\n                <span *ngIf=\"type_of_food == 'Beverages'\">{{'Top_Beverages_Recipes' |\n                    translate}}</span> -->\n                <!-- <ion-icon class=\"zmdi zmdi-notifications-none end ion-text-end\" (click)=\"notification()\"></ion-icon> -->\n            </div>\n        </ion-title>\n    </ion-toolbar>\n\n    <div style=\"padding-bottom: 0px;\" class=\"header_banner\">\n\n        <ion-searchbar show-clear-button=\"focus\" search-icon=“undefined” color=\"primary\" placeholder=\"Search Recipes\"\n            [(ngModel)]=\"searchQuery\" (ionChange)=\"filterRecipes()\" (ionClear)=\"clear()\"\n            (ionBlur)=\"handleSearchBarBlur()\"></ion-searchbar>\n        <div *ngIf=\"filteredRecipes && filteredRecipes.length > 0\" class=\"search-results\"\n            (click)=\"handleSearchResultsClick($event)\">\n            <ion-list>\n                <ion-item *ngFor=\"let recipe of filteredRecipes\" (click)=\"item_info(recipe)\">\n                    {{ recipe.name }}\n                </ion-item>\n            </ion-list>\n        </div>\n        <!-- <div class=\"search_box d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\"> -->\n        <!-- <ion-icon class=\"zmdi zmdi-search ion-text-start\" (click)=\"search()\"></ion-icon> -->\n        <!--            <ion-searchbar class=\"ion-no-padding\" searchIcon=\"hide\" placeholder=\"{{'search_recipes' | translate}}\"></ion-searchbar>-->\n        <!-- <h4 (click)=\"search()\">{{'search_recipes' | translate}}</h4> -->\n        <!-- <ion-icon class=\"zmdi zmdi-tune ion-text-end end\" (click)=\"filter()\"></ion-icon> -->\n        <!-- </div> -->\n    </div>\n    <div class=\"type_of_food fixed-top\">\n        <h2>\n            {{'choose_type_of_food' | translate}}\n        </h2>\n        <ion-segment mode=\"ios\" [(ngModel)]=\"type_of_food\" scrollable>\n            <ion-segment-button class=\"animate__animated animate__zoomIn\" mode=\"ios\" value=\"Breakfast\">\n                <div class=\"img_box\" style=\"height: 85px\">\n                    <img style=\"height: 45px;\" src=\"assets/images/types_of_food/brekky.png\">\n                </div>\n                <h3>{{'breakfast' | translate}}</h3>\n            </ion-segment-button>\n\n            <ion-segment-button class=\"animate__animated animate__zoomIn\" mode=\"ios\" value=\"Appetizer\">\n                <div class=\"img_box\">\n                    <img src=\"assets/images/types_of_food/Italian.png\">\n                </div>\n                <h3>{{'apps' | translate}}</h3>\n            </ion-segment-button>\n\n            <ion-segment-button class=\"animate__animated animate__zoomIn\" mode=\"ios\" value=\"Dinner\">\n                <div class=\"img_box\">\n                    <img src=\"assets/images/types_of_food/Chinese.png\">\n                </div>\n                <h3>{{'dinner' | translate}}</h3>\n            </ion-segment-button>\n\n            <ion-segment-button class=\"animate__animated animate__zoomIn\" mode=\"ios\" value=\"Dessert\">\n                <div class=\"img_box\" style=\"height:5.3125rem\">\n                    <img style=\"height:3rem;\" src=\"assets/images/types_of_food/dessert.png\">\n                </div>\n                <h3>{{'dessert' | translate}}</h3>\n            </ion-segment-button>\n\n            <ion-segment-button class=\"animate__animated animate__zoomIn\" mode=\"ios\" value=\"Beverages\">\n                <div class=\"img_box\" style=\"height:5.3125rem\">\n                    <img style=\"height:3rem;\" src=\"assets/images/types_of_food/milkshake.png\">\n                </div>\n                <h3>{{'beverages' | translate}}</h3>\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"content-container\">\n\n\n\n\n\n    <div class=\"item_container\" [ngSwitch]=\"type_of_food\">\n        <div class=\"item_list\" *ngSwitchCase=\"'Breakfast'\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'Top_Breakfast_Recipes' |\n                translate}}</h2>\n            <ion-row>\n                <ng-container *ngFor=\"let recipe of recipes['Breakfast']; let i = index\">\n                    <ion-col size=\"6\" size-md=\"3\" size-lg=\"3\" class=\"animate__animated animate__zoomIn\"\n                        (click)=\"item_info(recipe)\">\n                        <div class=\"item\">\n                            <div class=\"img_box center_img\">\n                                <img src=\"{{recipe.pics[0]}}\" class=\"crop_img\">\n                            </div>\n                            <h3>{{recipe.name}}</h3>\n                            <h4>{{recipe.ethnicity}}</h4>\n                        </div>\n                    </ion-col>\n\n                    <!-- Add a banner that takes up a whole row after every 8th item (i is 0-based index) -->\n                    <ion-row *ngIf=\"(i + 1) % 8 === 0 && adsOn\">\n                        <ion-col size=\"12\">\n                            <div class=\"banner\">\n                                <img (click)=\"open(bannerImages[currentBannerImageUrl].link)\"\n                                    [src]=\"bannerImages[currentBannerImageUrl].name\">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </ion-row>\n        </div>\n\n\n        <div class=\"item_list\" *ngSwitchCase=\"'Appetizer'\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'Top_Apps_Recipes' |\n                translate}}</h2>\n            <ion-row>\n                <ng-container *ngFor=\"let recipe of recipes['Appetizer']; let i = index\">\n                    <ion-col size=\"6\" size-md=\"3\" size-lg=\"3\" class=\"animate__animated animate__zoomIn\"\n                        (click)=\"item_info(recipe)\">\n                        <div class=\"item\">\n                            <div class=\"img_box center_img\">\n                                <img src=\"{{recipe.pics[0]}}\" class=\"crop_img\">\n                            </div>\n                            <h3>{{recipe.name}}</h3>\n                            <h4>{{recipe.ethnicity}}</h4>\n                        </div>\n                    </ion-col>\n\n                    <!-- Add a banner that takes up a whole row after every 8th item (i is 0-based index) -->\n                    <ion-row *ngIf=\"(i + 1) % 8 === 0 && adsOn\">\n                        <ion-col size=\"12\">\n                            <div class=\"banner\">\n                                <img (click)=\"open(bannerImages[currentBannerImageUrl].link)\"\n                                    [src]=\"bannerImages[currentBannerImageUrl].name\">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </ion-row>\n        </div>\n\n\n        <div class=\"item_list\" *ngSwitchCase=\"'Dinner'\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'Top_Dinner_Recipes' |\n                translate}}</h2>\n            <ion-row>\n                <ng-container *ngFor=\"let recipe of recipes['Dinner']; let i = index\">\n                    <ion-col size=\"6\" size-md=\"3\" size-lg=\"3\" class=\"animate__animated animate__zoomIn\"\n                        (click)=\"item_info(recipe)\">\n                        <div class=\"item\">\n                            <div class=\"img_box center_img\">\n                                <img src=\"{{recipe.pics[0]}}\" class=\"crop_img\">\n                            </div>\n                            <h3>{{recipe.name}}</h3>\n                            <h4>{{recipe.ethnicity}}</h4>\n                        </div>\n                    </ion-col>\n\n                    <!-- Add a banner that takes up a whole row after every 8th item (i is 0-based index) -->\n                    <ion-row *ngIf=\"(i + 1) % 8 === 0 && adsOn\">\n                        <ion-col size=\"12\">\n                            <div class=\"banner\">\n                                <img (click)=\"open(bannerImages[currentBannerImageUrl].link)\"\n                                    [src]=\"bannerImages[currentBannerImageUrl].name\">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </ion-row>\n        </div>\n\n\n        <div class=\"item_list\" *ngSwitchCase=\"'Dessert'\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'Top_Dessert_Recipes' |\n                translate}}</h2>\n            <ion-row>\n                <ng-container *ngFor=\"let recipe of recipes['Dessert']; let i = index\">\n                    <ion-col size=\"6\" size-md=\"3\" size-lg=\"3\" class=\"animate__animated animate__zoomIn\"\n                        (click)=\"item_info(recipe)\">\n                        <div class=\"item\">\n                            <div class=\"img_box center_img\">\n                                <img src=\"{{recipe.pics[0]}}\" class=\"crop_img\">\n                            </div>\n                            <h3>{{recipe.name}}</h3>\n                            <h4>{{recipe.ethnicity}}</h4>\n                        </div>\n                    </ion-col>\n\n                    <!-- Add a banner that takes up a whole row after every 8th item (i is 0-based index) -->\n                    <ion-row *ngIf=\"(i + 1) % 8 === 0 && adsOn\">\n                        <ion-col size=\"12\">\n                            <div class=\"banner\">\n                                <img (click)=\"open(bannerImages[currentBannerImageUrl].link)\"\n                                    [src]=\"bannerImages[currentBannerImageUrl].name\">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </ion-row>\n        </div>\n\n\n        <div class=\"item_list\" *ngSwitchCase=\"'Beverages'\">\n            <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'Top_Beverages_Recipes' |\n                translate}}</h2>\n            <ion-row>\n                <ng-container *ngFor=\"let recipe of recipes['Beverages']; let i = index\">\n                    <ion-col size=\"6\" size-md=\"3\" size-lg=\"3\" class=\"animate__animated animate__zoomIn\"\n                        (click)=\"item_info(recipe)\">\n                        <div class=\"item\">\n                            <div class=\"img_box center_img\">\n                                <img src=\"{{recipe.pics[0]}}\" class=\"crop_img\">\n                            </div>\n                            <h3>{{recipe.name}}</h3>\n                            <h4>{{recipe.ethnicity}}</h4>\n                        </div>\n                    </ion-col>\n\n                    <!-- Add a banner that takes up a whole row after every 8th item (i is 0-based index) -->\n                    <ion-row *ngIf=\"(i + 1) % 8 === 0 && adsOn\">\n                        <ion-col size=\"12\">\n                            <div class=\"banner\">\n                                <img (click)=\"open(bannerImages[currentBannerImageUrl].link)\"\n                                    [src]=\"bannerImages[currentBannerImageUrl].name\">\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ng-container>\n            </ion-row>\n        </div>\n\n\n\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.9s\"\n    *ngIf=\"config.demoMode\">\n    <div class=\"developed_by d-flex\" (click)=\"developed_by()\">\n        <h2>{{\"developed_by\" | translate}}</h2>\n        <div class=\"img_box ion-text-end end\">\n            <img src=\"assets/images/opus_labs.png\" class=\"end\">\n            <img src=\"assets/images/opus_logo_light.png\" class=\"end\">\n        </div>\n    </div>\n</ion-footer>");

/***/ }),

/***/ 18847:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: absolute;\n  z-index: 1;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: all 0.3s;\n}\nion-header ion-toolbar ion-title span {\n  transform: scale(0);\n  transition: all 0.3s;\n}\nion-header ion-toolbar ion-title ion-icon {\n  font-size: 1.5rem;\n  min-width: 30px;\n}\nion-header .header_banner .text_box {\n  transition: all 0.3s;\n  max-height: unset;\n}\nion-header .header_banner .text_box h2 {\n  padding-bottom: 30px;\n}\nion-header.active ion-toolbar ion-title span {\n  transform: scale(1);\n}\nion-header.active .header_banner .text_box {\n  transform: scale(0);\n  max-height: 0;\n}\n.search-results {\n  position: absolute;\n  z-index: 1001;\n  width: 85%;\n}\n.search_box {\n  width: calc(100% - 0px);\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  height: 47px;\n  background: var(--bg-color);\n  border-radius: 45px;\n  padding: 0 20px;\n}\n.search_box ion-icon {\n  color: var(--text-light);\n  font-size: 1.35rem;\n  min-width: 26px;\n  height: 30px;\n  line-height: 30px;\n  z-index: 99;\n  padding: 0 2px;\n}\n.search_box h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  font-weight: 400;\n  width: 100%;\n}\n.search_box ion-searchbar {\n  --background: var(--transparent) !important;\n  --color: var(--text-black);\n  --placeholder-opacity: 1;\n  --placeholder-color: var(--text-light);\n  --placeholder-font-weight: 400 !important;\n  --box-shadow: none !important;\n  --icon-color: none !important;\n}\n.searchbar-input {\n  padding-left: 9px !important;\n}\n.type_of_food {\n  padding-top: 20px;\n  padding-bottom: 28px;\n}\n.type_of_food h2 {\n  padding: 0 20px;\n  padding-bottom: 20px;\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.type_of_food ion-segment {\n  border: none !important;\n  background: var(--none) !important;\n  border-radius: 0px;\n  margin: 0;\n  position: relative;\n}\n.type_of_food ion-segment ion-segment-button {\n  background: none !important;\n  text-transform: uppercase !important;\n  --background-checked: var(--transparent) !important;\n  --background-focused: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  --indicator-color: var(--transparent) !important;\n  --indicator-box-shadow: none !important;\n  --ripple-color: var(--transparent) !important;\n  --color: var(--text-light) !important;\n  --color-checked: var(--text-light) !important;\n  --color-hover: var(--text-light) !important;\n  --background-hover: var(--transparent) !important;\n  position: relative;\n  width: 100%;\n  border: 1px solid var(--border-color);\n  min-width: 86px;\n  margin: 0 5px;\n  border-radius: 10px;\n  padding: 7px 0;\n  overflow: hidden;\n  transition: all 0.5s;\n}\n.type_of_food ion-segment ion-segment-button .img_box {\n  min-width: 85px;\n  display: flex;\n  align-items: center;\n  max-width: 100%;\n}\n.type_of_food ion-segment ion-segment-button .img_box img {\n  display: block;\n  height: 85px;\n  width: auto;\n  margin: auto;\n}\n.type_of_food ion-segment ion-segment-button h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.8rem;\n  text-transform: none;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow: hidden;\n  position: relative;\n  top: -11px;\n}\n.type_of_food ion-segment ion-segment-button::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  background: var(--primary);\n  margin: auto;\n  transition: all 0.3s;\n  opacity: 0.2;\n  border-radius: 10px;\n}\n.type_of_food ion-segment ion-segment-button.segment-button-checked {\n  border-color: var(--primary) !important;\n  border: none;\n}\n.type_of_food ion-segment ion-segment-button.segment-button-checked::after {\n  width: 100%;\n  height: 100%;\n}\n.type_of_food ion-segment ion-segment-button:first-child {\n  margin-left: 20px;\n}\n.type_of_food ion-segment ion-segment-button:last-child {\n  margin-right: 20px;\n}\nion-content.content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 100%;\n  /* Fill the remaining viewport height */\n  overflow: auto;\n  /* Enable scrolling if content overflows */\n}\n.item_list {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n}\n.item_list h2 {\n  padding-bottom: 10px;\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.item_list ion-row {\n  margin: 0 -7px;\n}\n.item_list ion-row ion-col {\n  padding: 7px;\n}\n.item_list ion-row ion-col .item .img_box {\n  width: 100%;\n  height: 170px;\n  overflow: hidden;\n  border-radius: 13px;\n  margin-bottom: 12px;\n}\n.item_list ion-row ion-col .item h3 {\n  margin: 0;\n  color: var(--text-dark);\n  white-space: nowrap;\n  overflow: hidden;\n  font-size: 0.95rem;\n  text-overflow: ellipsis;\n  padding-bottom: 4px;\n}\n.item_list ion-row ion-col .item h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.8rem;\n  letter-spacing: 0.4px;\n  padding: 0;\n  font-weight: 400;\n  overflow: hidden;\n}\n.banner {\n  width: 92vw;\n  height: calc(92vw / 6);\n  /* position: relative; */\n  overflow: hidden;\n  /* border-radius: 10px; */\n  /* margin-left: 1rem; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-footer {\n  background: var(--bg-color);\n  z-index: 999;\n  bottom: 0;\n  border-radius: 30px 30px 0 0;\n}\nion-footer .developed_by {\n  padding: 10px 20px 6px 20px;\n}\nion-footer .developed_by h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  letter-spacing: 0;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-footer .developed_by .img_box {\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-footer .developed_by .img_box img {\n  max-width: 140px;\n  display: block;\n}\nion-footer .developed_by .img_box img:nth-child(even) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXBDUjtBQXVDSTtFQUNJLGNBQUE7QUFyQ1I7QUF1Q1E7RUFDSSxZQUFBO0FBckNaO0FBd0NnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdENwQjtBQXlDZ0I7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkNwQjtBQTBDZ0I7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF4Q3BCO0FBZ0RBO0VBRUksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQS9DSjtBQXFEQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtBQWxESjtBQW9ESTtFQUNJLDJCQUFBO0FBbERSO0FBb0RRO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7QUFsRFo7QUFxRFE7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0FBbkRaO0FBcURZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBbkRoQjtBQXFEZ0I7RUFDSSxhQUFBO0FBbkRwQiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyX2Jhbm5lciAudGV4dF9ib3gge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlcl9iYW5uZXIge1xuICAgICAgICAgICAgLnRleHRfYm94IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB3aWR0aDogODUlO1xufVxuXG4uc2VhcmNoX2JveCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLS1pY29uLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2VhcmNoYmFyLWlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xufVxuXG4udHlwZV9vZl9mb29kIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcblxuXG4gICAgaDIge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBpb24tc2VnbWVudCB7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ub25lKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS10ZXh0LWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1jb2xvci1ob3ZlcjogdmFyKC0tdGV4dC1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDg2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG5cbiAgICAgICAgICAgIC5pbWdfYm94IHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDg1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMXB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICYuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5pb24tY29udGVudC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogRmlsbCB0aGUgcmVtYWluaW5nIHZpZXdwb3J0IGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIEVuYWJsZSBzY3JvbGxpbmcgaWYgY29udGVudCBvdmVyZmxvd3MgKi9cbn1cblxuLml0ZW1fbGlzdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG5cbiAgICBoMiB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBpb24tcm93IHtcbiAgICAgICAgbWFyZ2luOiAwIC03cHg7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG5cbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOTVyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi5iYW5uZXIge1xuXG4gICAgd2lkdGg6IDkydnc7XG4gICAgaGVpZ2h0OiBjYWxjKDkydncgLyA2KTtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cblxuXG5pb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMCAwO1xuXG4gICAgLmRldmVsb3BlZF9ieSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCA2cHggMjBweDtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nX2JveCB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map