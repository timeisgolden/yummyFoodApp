"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_vt-popup_vt-popup_module_ts"],{

/***/ 19656:
/*!*****************************************************!*\
  !*** ./src/app/vt-popup/vt-popup-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageRoutingModule": () => (/* binding */ VtPopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup.page */ 45866);




const routes = [
    {
        path: '',
        component: _vt_popup_page__WEBPACK_IMPORTED_MODULE_0__.VtPopupPage
    }
];
let VtPopupPageRoutingModule = class VtPopupPageRoutingModule {
};
VtPopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VtPopupPageRoutingModule);



/***/ }),

/***/ 14758:
/*!*********************************************!*\
  !*** ./src/app/vt-popup/vt-popup.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VtPopupPageModule": () => (/* binding */ VtPopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vt-popup-routing.module */ 19656);
/* harmony import */ var _vt_popup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vt-popup.page */ 45866);







let VtPopupPageModule = class VtPopupPageModule {
};
VtPopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vt_popup_routing_module__WEBPACK_IMPORTED_MODULE_0__.VtPopupPageRoutingModule
        ],
        declarations: [_vt_popup_page__WEBPACK_IMPORTED_MODULE_1__.VtPopupPage]
    })
], VtPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_vt-popup_vt-popup_module_ts.js.map