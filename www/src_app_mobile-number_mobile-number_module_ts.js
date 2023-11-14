"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_mobile-number_mobile-number_module_ts"],{

/***/ 10342:
/*!***************************************************************!*\
  !*** ./src/app/mobile-number/mobile-number-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNumberPageRoutingModule": () => (/* binding */ MobileNumberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _mobile_number_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-number.page */ 69580);




const routes = [
    {
        path: '',
        component: _mobile_number_page__WEBPACK_IMPORTED_MODULE_0__.MobileNumberPage
    }
];
let MobileNumberPageRoutingModule = class MobileNumberPageRoutingModule {
};
MobileNumberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MobileNumberPageRoutingModule);



/***/ }),

/***/ 67511:
/*!*******************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNumberPageModule": () => (/* binding */ MobileNumberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-number-routing.module */ 10342);
/* harmony import */ var _mobile_number_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-number.page */ 69580);








let MobileNumberPageModule = class MobileNumberPageModule {
};
MobileNumberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_0__.MobileNumberPageRoutingModule
        ],
        declarations: [_mobile_number_page__WEBPACK_IMPORTED_MODULE_1__.MobileNumberPage]
    })
], MobileNumberPageModule);



/***/ }),

/***/ 69580:
/*!*****************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNumberPage": () => (/* binding */ MobileNumberPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mobile_number_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mobile-number.page.html */ 27632);
/* harmony import */ var _mobile_number_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-number.page.scss */ 7486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let MobileNumberPage = class MobileNumberPage {
    constructor(route) {
        this.route = route;
        this.select_contary = "india";
    }
    ngOnInit() {
    }
    create_account() {
        this.route.navigate(['./create-account']);
    }
};
MobileNumberPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MobileNumberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mobile-number',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mobile_number_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mobile_number_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MobileNumberPage);



/***/ }),

/***/ 27632:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/mobile-number/mobile-number.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">{{'what_s_your_number' | translate}}?</h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">{{'we_ll_text_a_code_to_verify_your_phone' | translate}}</h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\"> \n                <ion-label position=\"floating\">{{'select_contary' | translate}}</ion-label>\n                <ion-select mode=\"md\" [(ngModel)]=\"select_contary\">\n                    <ion-select-option value=\"Afghanistan\">Afghanistan</ion-select-option>\n                    <ion-select-option value=\"Albania\">Albania</ion-select-option>\n                    <ion-select-option value=\"Algeria\">Algeria</ion-select-option>\n                    <ion-select-option value=\"Andorra\">Andorra</ion-select-option>\n                    <ion-select-option value=\"Angola\">Angola</ion-select-option>\n                    <ion-select-option value=\"Bhutan\">Bhutan</ion-select-option>\n                    <ion-select-option value=\"Botswana\">Botswana</ion-select-option>\n                    <ion-select-option value=\"Brazil\">Brazil</ion-select-option>\n                    <ion-select-option value=\"Brunei_Darussalam\">Brunei Darussalam</ion-select-option>\n                    <ion-select-option value=\"Burkina Faso\">Burkina Faso</ion-select-option>\n                    <ion-select-option value=\"Chad\">Chad</ion-select-option>\n                    <ion-select-option value=\"China\">China</ion-select-option>\n                    <ion-select-option value=\"Colombia\">Colombia</ion-select-option>\n                    <ion-select-option value=\"Croatia\">Croatia</ion-select-option>\n                    <ion-select-option value=\"Cuba\">Cuba</ion-select-option>\n                    <ion-select-option value=\"Cyprus\">Cyprus</ion-select-option>\n                    <ion-select-option value=\"india\">India</ion-select-option>\n                </ion-select>\n                <ion-icon class=\"zmdi zmdi-chevron-down ion-text-end\"></ion-icon>\n            </ion-item>\n\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">\n                <ion-label position=\"floating\">{{'phone_number' | translate}}</ion-label>\n                <ion-input mode=\"md\" type=\"tel\" value=\"+1 987 654 3210\"></ion-input>\n            </ion-item> \n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\" (click)=\"create_account()\">{{'continue' | translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ 7486:
/*!*******************************************************!*\
  !*** ./src/app/mobile-number/mobile-number.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".header_banner .text_box h2 {\n  font-size: 1.4rem;\n}\n\n.form {\n  padding-top: 10px;\n}\n\nion-footer {\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS1udW1iZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNHLGlCQUFBO0FBQ0g7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6Im1vYmlsZS1udW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9iYW5uZXIgLnRleHRfYm94IGgye1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uZm9ybXtcbiAgIHBhZGRpbmctdG9wOiAxMHB4OyBcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_mobile-number_mobile-number_module_ts.js.map