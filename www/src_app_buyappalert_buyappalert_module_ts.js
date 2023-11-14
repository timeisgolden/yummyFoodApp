"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_buyappalert_buyappalert_module_ts"],{

/***/ 22618:
/*!***********************************************************!*\
  !*** ./src/app/buyappalert/buyappalert-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPageRoutingModule": () => (/* binding */ BuyappalertPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert.page */ 31344);




const routes = [
    {
        path: '',
        component: _buyappalert_page__WEBPACK_IMPORTED_MODULE_0__.BuyappalertPage
    }
];
let BuyappalertPageRoutingModule = class BuyappalertPageRoutingModule {
};
BuyappalertPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BuyappalertPageRoutingModule);



/***/ }),

/***/ 48615:
/*!***************************************************!*\
  !*** ./src/app/buyappalert/buyappalert.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyappalertPageModule": () => (/* binding */ BuyappalertPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buyappalert-routing.module */ 22618);
/* harmony import */ var _buyappalert_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buyappalert.page */ 31344);







let BuyappalertPageModule = class BuyappalertPageModule {
};
BuyappalertPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _buyappalert_routing_module__WEBPACK_IMPORTED_MODULE_0__.BuyappalertPageRoutingModule
        ],
        declarations: [_buyappalert_page__WEBPACK_IMPORTED_MODULE_1__.BuyappalertPage]
    })
], BuyappalertPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_buyappalert_buyappalert_module_ts.js.map