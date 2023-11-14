"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_verification_verification_module_ts"],{

/***/ 92534:
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 84925);




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 4243:
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 92534);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 84925);








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 84925:
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": () => (/* binding */ VerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verification.page.html */ 28230);
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss */ 17314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 7602);





let VerificationPage = class VerificationPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verification',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationPage);



/***/ }),

/***/ 28230:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/verification/verification.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" mode=\"md\">\n            <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">{{'what_the_code' | translate}}?</h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                {{'enter_the_code_sent_to' | translate}} +1 987 654 3210\n            </h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"form\">\n        <ion-list lines=\"none\">\n            <ion-item lines=\"none\">\n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.2s\" mode=\"md\" type=\"tel\" value=\"2\" maxlength=\"1\"></ion-input>\n                \n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.25s\" mode=\"md\" type=\"tel\" value=\"4\" maxlength=\"1\"></ion-input>\n                \n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\" mode=\"md\" type=\"tel\" value=\"0\" maxlength=\"1\"></ion-input>\n                \n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\" mode=\"md\" type=\"tel\" value=\"8\" maxlength=\"1\"></ion-input>\n                \n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" mode=\"md\" data-wow-duration=\"0.5s\" type=\"tel\" value=\"1\" maxlength=\"1\"></ion-input>\n                \n                <ion-input class=\"ion-text-center animate__animated animate__fadeInUp wow\" mode=\"md\" data-wow-duration=\"0.55s\" type=\"tel\" value=\"7\" maxlength=\"1\"></ion-input>\n            </ion-item>\n            \n            <h4 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">{{'wrong_number' | translate}}? <span class=\"end\">00:30</span></h4>\n        </ion-list>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n    <ion-button size=\"large\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\" expand=\"round\" (click)=\"home()\">{{'verify' | translate}}</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ 17314:
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".header_banner .text_box h2 {\n  font-size: 1.4rem;\n}\n\n.form {\n  padding-top: 15px;\n}\n\n.form ion-item {\n  border-bottom: none !important;\n  margin-bottom: 10px;\n}\n\n.form ion-item ion-input {\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 8px !important;\n  margin: 0px 6px;\n}\n\n.form h4 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.8rem;\n}\n\n.form h4 span {\n  color: var(--primary);\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\nion-footer {\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDSTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDUTtFQUNJLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBR0k7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQURSOztBQUdRO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUFBLHNCQUFBO0FBRFo7O0FBT0E7RUFDSSx5QkFBQTtBQUpKIiwiZmlsZSI6InZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2Jhbm5lciAudGV4dF9ib3ggaDJ7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_verification_verification_module_ts.js.map