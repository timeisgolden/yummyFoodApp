"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_language_language_module_ts"],{

/***/ 22295:
/*!*****************************************************!*\
  !*** ./src/app/language/language-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePageRoutingModule": () => (/* binding */ LanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.page */ 53477);




const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage
    }
];
let LanguagePageRoutingModule = class LanguagePageRoutingModule {
};
LanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LanguagePageRoutingModule);



/***/ }),

/***/ 80393:
/*!*********************************************!*\
  !*** ./src/app/language/language.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePageModule": () => (/* binding */ LanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-routing.module */ 22295);
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page */ 53477);








let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _language_routing_module__WEBPACK_IMPORTED_MODULE_0__.LanguagePageRoutingModule
        ],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_1__.LanguagePage]
    })
], LanguagePageModule);



/***/ }),

/***/ 53477:
/*!*******************************************!*\
  !*** ./src/app/language/language.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePage": () => (/* binding */ LanguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./language.page.html */ 17700);
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page.scss */ 76266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ 49670);
/* harmony import */ var src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/myevent.services */ 30069);
/* harmony import */ var src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/contants.models */ 64879);







let LanguagePage = class LanguagePage {
    constructor(config, myEvent) {
        this.config = config;
        this.myEvent = myEvent;
        this.languages = this.config.availableLanguages;
        this.defaultLanguageCode = config.availableLanguages[0].code;
        let defaultLang = window.localStorage.getItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE);
        if (defaultLang)
            this.defaultLanguageCode = defaultLang;
    }
    ngOnInit() {
    }
    onLanguageClick(language) {
        this.defaultLanguageCode = language.code;
    }
    languageConfirm() {
        this.myEvent.setLanguageData(this.defaultLanguageCode);
        window.localStorage.setItem(src_models_contants_models__WEBPACK_IMPORTED_MODULE_4__.Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    }
};
LanguagePage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_2__.APP_CONFIG,] }] },
    { type: src_services_myevent_services__WEBPACK_IMPORTED_MODULE_3__.MyEvent }
];
LanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-language',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_language_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LanguagePage);



/***/ }),

/***/ 17700:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/language/language.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button icon=\"\">\n                <ion-icon class=\"zmdi zmdi-sort-amount-desc\"></ion-icon>\n            </ion-menu-button>\n\n            <ion-buttons slot=\"start\" mode=\"md\">\n                <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n            </ion-buttons>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                {{'language' | translate}}\n            </h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                {{'select_preferred_language' | translate}}\n            </h3>\n        </div>\n    </div> \n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list lines=\"none\">\n        <ion-radio-group [(ngModel)]=\"defaultLanguageCode\">\n            <ion-item class=\"animate__animated animate__fadeInUp wow\" *ngFor=\"let language of languages\" (click)=\"onLanguageClick(language)\">\n                <div class=\"item_inner d-flex\">\n                    <ion-radio value=\"{{language.code}}\"></ion-radio>\n                    <h3>{{language.name}}</h3>\n                </div>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n</ion-content>\n\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\" (click)=\"languageConfirm()\">{{'save' | translate}}</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 76266:
/*!*********************************************!*\
  !*** ./src/app/language/language.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".header_banner {\n  padding-bottom: 0;\n}\n\nion-list {\n  margin: 0;\n  padding: 0;\n  background: var(--transparent);\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list .text_box {\n  width: 100%;\n  padding: 20px 20px 20px 20px;\n}\n\nion-list .text_box h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.93rem;\n  letter-spacing: 0.4px;\n  padding: 0;\n}\n\nion-list ion-item {\n  padding: 16px 20px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --background: var(--transparent) !important;\n  --min-height: unset;\n  --ripple-color: var(--transparent) !important;\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.1rem;\n}\n\nion-list ion-item .item_inner ion-radio {\n  --color-checked: var(--primary);\n  margin: 0;\n  margin-right: 15px;\n}\n\nion-footer {\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FBQ1I7O0FBQ1E7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUNaOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0FBRFI7O0FBSVk7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUZoQjs7QUFNWTtFQUNJLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSmhCOztBQVlBO0VBQ0kseUJBQUE7QUFUSiIsImZpbGUiOiJsYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2Jhbm5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLnRleHRfYm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG5cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTNyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgLml0ZW1faW5uZXIge1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tcmFkaW8ge1xuICAgICAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_language_language_module_ts.js.map