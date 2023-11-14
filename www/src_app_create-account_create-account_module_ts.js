"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_create-account_create-account_module_ts"],{

/***/ 82972:
/*!*****************************************************************!*\
  !*** ./src/app/create-account/create-account-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountPageRoutingModule": () => (/* binding */ CreateAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account.page */ 83953);




const routes = [
    {
        path: '',
        component: _create_account_page__WEBPACK_IMPORTED_MODULE_0__.CreateAccountPage
    }
];
let CreateAccountPageRoutingModule = class CreateAccountPageRoutingModule {
};
CreateAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateAccountPageRoutingModule);



/***/ }),

/***/ 55110:
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountPageModule": () => (/* binding */ CreateAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-routing.module */ 82972);
/* harmony import */ var _create_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account.page */ 83953);








let CreateAccountPageModule = class CreateAccountPageModule {
};
CreateAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _create_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateAccountPageRoutingModule
        ],
        declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_1__.CreateAccountPage]
    })
], CreateAccountPageModule);



/***/ }),

/***/ 83953:
/*!*******************************************************!*\
  !*** ./src/app/create-account/create-account.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountPage": () => (/* binding */ CreateAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-account.page.html */ 86371);
/* harmony import */ var _create_account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-account.page.scss */ 4802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let CreateAccountPage = class CreateAccountPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    verification() {
        this.route.navigate(['./verification']);
    }
};
CreateAccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CreateAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-create-account',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_account_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_create_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateAccountPage);



/***/ }),

/***/ 86371:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/create-account/create-account.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">{{'hi_welcome_dear' | translate}}</h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                {{'we_cant_wait_to_see_what_you_can' | translate}}<br>{{'create_today_good_luck' | translate}}!\n            </h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                <ion-label position=\"floating\">{{'full_name' | translate}}</ion-label>\n                <ion-input mode=\"md\" type=\"name\" value=\"Samantha Smith\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">\n                <ion-label position=\"floating\">{{'email_address' | translate}}</ion-label>\n                <ion-input mode=\"md\" type=\"email\" value=\"samsmith123@mail.com\"></ion-input>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">\n                <ion-label position=\"floating\">{{'phone_number' | translate}}</ion-label>\n                <ion-input mode=\"md\" type=\"tel\" value=\"+1 987 654 3210\"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\" (click)=\"verification()\">{{'continue' | translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ 4802:
/*!*********************************************************!*\
  !*** ./src/app/create-account/create-account.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".header_banner .text_box h2 {\n  font-size: 1.4rem;\n}\n\n.form {\n  padding-top: 15px;\n}\n\nion-footer {\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRyxpQkFBQTtBQUNIOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2Jhbm5lciAudGV4dF9ib3ggaDJ7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb3Jte1xuICAgcGFkZGluZy10b3A6IDE1cHg7IFxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_create-account_create-account_module_ts.js.map