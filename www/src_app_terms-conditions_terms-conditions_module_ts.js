"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_terms-conditions_terms-conditions_module_ts"],{

/***/ 20811:
/*!*********************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageRoutingModule": () => (/* binding */ TermsConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page */ 87071);




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPage
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ 61401:
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageModule": () => (/* binding */ TermsConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions-routing.module */ 20811);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page */ 87071);








let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPageRoutingModule
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsPage]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ 87071:
/*!***********************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPage": () => (/* binding */ TermsConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./terms-conditions.page.html */ 28146);
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page.scss */ 99340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let TermsConditionsPage = class TermsConditionsPage {
    constructor() { }
    ngOnInit() {
    }
};
TermsConditionsPage.ctorParameters = () => [];
TermsConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-conditions',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsConditionsPage);



/***/ }),

/***/ 28146:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/terms-conditions/terms-conditions.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button icon=\"\">\n                <ion-icon class=\"zmdi zmdi-sort-amount-desc\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                About the Chef\n            </h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                Toeknee Tee\n            </h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"container\">\n        <p class=\"animate__animated animate__fadeInUp\">\n            \"Ella's Kitchen\" is inspired by the eats of International Pop Star Toeknee Tee(US). Named after his grandma\n            Ella, whom he spent many summers with in Nashville, TN, this collection of delectible recipes spans numerous\n            Continents. Toeknee Tee grew up in the deep south before moving abroad to locations such as Australia and\n            Europe, where his taste buds evolved from their southern flavor base. 10 years without a Walmart or Publix\n            is likely\n            to change anyones pallete, so taste the world with his latest Recipes.\n\n\n    </div>\n</ion-content>");

/***/ }),

/***/ 99340:
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".header_banner {\n  padding-bottom: 0;\n}\n\n.container {\n  padding: 0 20px;\n}\n\n.container p {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  line-height: 23px;\n  padding-bottom: 23px;\n}\n\n.container h2 {\n  margin: 0;\n  padding-bottom: 23px;\n  color: var(--text-light);\n  font-size: 0.9rem;\n  letter-spacing: 0.4px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ00saUJBQUE7QUFDTjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFFSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQVI7O0FBR0k7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURSIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9iYW5uZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICBcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyM3B4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjNweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_terms-conditions_terms-conditions_module_ts.js.map