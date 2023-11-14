"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_cooking-finish_cooking-finish_module_ts"],{

/***/ 66476:
/*!*****************************************************************!*\
  !*** ./src/app/cooking-finish/cooking-finish-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookingFinishPageRoutingModule": () => (/* binding */ CookingFinishPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _cooking_finish_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cooking-finish.page */ 90346);




const routes = [
    {
        path: '',
        component: _cooking_finish_page__WEBPACK_IMPORTED_MODULE_0__.CookingFinishPage
    }
];
let CookingFinishPageRoutingModule = class CookingFinishPageRoutingModule {
};
CookingFinishPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CookingFinishPageRoutingModule);



/***/ }),

/***/ 81696:
/*!*********************************************************!*\
  !*** ./src/app/cooking-finish/cooking-finish.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookingFinishPageModule": () => (/* binding */ CookingFinishPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _cooking_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cooking-finish-routing.module */ 66476);
/* harmony import */ var _cooking_finish_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cooking-finish.page */ 90346);








let CookingFinishPageModule = class CookingFinishPageModule {
};
CookingFinishPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _cooking_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__.CookingFinishPageRoutingModule
        ],
        declarations: [_cooking_finish_page__WEBPACK_IMPORTED_MODULE_1__.CookingFinishPage]
    })
], CookingFinishPageModule);



/***/ }),

/***/ 90346:
/*!*******************************************************!*\
  !*** ./src/app/cooking-finish/cooking-finish.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookingFinishPage": () => (/* binding */ CookingFinishPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cooking_finish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cooking-finish.page.html */ 68879);
/* harmony import */ var _cooking_finish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cooking-finish.page.scss */ 92545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73588);






let CookingFinishPage = class CookingFinishPage {
    constructor(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    ngOnInit() {
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('var(--bg-white)');
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
};
CookingFinishPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar }
];
CookingFinishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cooking-finish',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cooking_finish_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cooking_finish_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CookingFinishPage);



/***/ }),

/***/ 68879:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/cooking-finish/cooking-finish.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <div class=\"take_a_photo ion-text-center animate__animated animate__zoomIn wow\" data-wow-duration=\"0.3s\">\n        <ion-icon class=\"zmdi zmdi-camera\"></ion-icon>\n        <h2>{{'take_a_photo' | translate}}</h2>\n    </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border ion-text-center\">\n    <h2 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">{{'congrats' | translate}}!</h2>\n    <p>\n        <span class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">{{'tell_other_users_and_your_friends_how' | translate}}</span>\n        <span class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">{{'delicious_the_dish_turned_out' | translate}}.</span>\n    </p>\n    <div class=\"social_icons d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.5s\">\n        <div class=\"icon_box\">\n            <img src=\"assets/images/Facebook.png\">\n        </div>\n        <div class=\"icon_box\">\n            <img src=\"assets/images/Whatsapp.png\">\n        </div>\n        <div class=\"icon_box\">\n            <img src=\"assets/images/Twitter.png\">\n        </div>\n        <div class=\"icon_box\">\n            <img src=\"assets/images/Instagram.png\">\n        </div>\n    </div>\n    <ion-button size=\"large\" expand=\"round\" fill=\"clear\" class=\"btn animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.55s\" (click)=\"home()\">{{'back_to_home' | translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ 92545:
/*!*********************************************************!*\
  !*** ./src/app/cooking-finish/cooking-finish.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  background-size: cover;\n  background-repeat: no-repeat;\n  --background: #fff url('bg-cooking-finish.png') no-repeat center center / cover!important;\n}\n\n.take_a_photo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: var(--white);\n  background: rgba(168, 168, 168, 0.52);\n  -webkit-backdrop-filter: saturate(206%) blur(15px);\n          backdrop-filter: saturate(206%) blur(15px);\n  padding: 27px 10px;\n  border-radius: 20px;\n  min-width: 110px;\n  box-shadow: 0 0px 24px 1px rgba(0, 0, 0, 0.36);\n}\n\n.take_a_photo ion-icon {\n  font-size: 2rem;\n  margin-bottom: 4px;\n}\n\n.take_a_photo h2 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n\nion-footer {\n  padding: 20px;\n  padding-bottom: 15px;\n  color: var(--white);\n  background: linear-gradient(0deg, black 0%, rgba(148, 187, 233, 0) 100%) !important;\n}\n\nion-footer h2 {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 500;\n  padding-bottom: 15px;\n}\n\nion-footer p {\n  margin: 0;\n  padding-bottom: 30px;\n}\n\nion-footer p span {\n  display: block;\n  font-size: 0.85rem;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n}\n\nion-footer .social_icons {\n  margin: 0 auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-bottom: 15px;\n}\n\nion-footer .social_icons .icon_box {\n  width: 38px;\n  margin: 0 8px;\n}\n\nion-footer .button.btn.button-clear {\n  letter-spacing: 1.5px !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2tpbmctZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5RkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtRkFBQTtBQURKOztBQUdJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRFI7O0FBSUk7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7QUFGUjs7QUFJUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFGWjs7QUFNSTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKUjs7QUFNUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBSlo7O0FBUUk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0FBTlIiLCJmaWxlIjoiY29va2luZy1maW5pc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWNvb2tpbmctZmluaXNoLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIhaW1wb3J0YW50O1xufVxuXG4udGFrZV9hX3Bob3RvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQ6IHJnYigxNjggMTY4IDE2OCAvIDUyJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgyMDYlKSBibHVyKDE1cHgpO1xuICAgIHBhZGRpbmc6IDI3cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMjRweCAxcHggcmdiKDAgMCAwIC8gMzYlKTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMCUsIHJnYmEoMTQ4LCAxODcsIDIzMywgMCkgMTAwJSkgIWltcG9ydGFudDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IC44NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc29jaWFsX2ljb25zIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmljb25fYm94IHtcbiAgICAgICAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbi5idG4uYnV0dG9uLWNsZWFyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_cooking-finish_cooking-finish_module_ts.js.map