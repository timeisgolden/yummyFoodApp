"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_contact-us_contact-us_module_ts"],{

/***/ 92294:
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 11432);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 63648:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 92294);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 11432);








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 11432:
/*!***********************************************!*\
  !*** ./src/app/contact-us/contact-us.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact-us.page.html */ 45233);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 24519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 73071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);








let ContactUsPage = class ContactUsPage {
    constructor(navCtrl, user, alertController, data, formBuilder) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.alertController = alertController;
        this.data = data;
        this.formBuilder = formBuilder;
        this.myForm = this.formBuilder.group({
            full_name: ['Samantha Smith'],
            email_address: ['samsmith123@mail.com'],
            message: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
        });
    }
    onSubmit() {
        // Handle form submission here
        console.log(this.myForm.value);
        const ref = `requests`;
        this.data.addDocs(ref, this.myForm.value);
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete Account',
                message: '<br>Are you sure you want to delete your account?',
                mode: 'md',
                cssClass: 'animate__animated animate__zoomIn',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.user.deleteAccount();
                            // this.navCtrl.navigateRoot(['./onboarding']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact-us',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactUsPage);



/***/ }),

/***/ 45233:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/contact-us/contact-us.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button icon=\"\">\n                <ion-icon class=\"zmdi zmdi-sort-amount-desc\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n\n    <div class=\"header_banner\">\n        <div class=\"text_box\">\n            <h2 class=\"d-flex animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n                {{'we_are_happy_to' | translate}}<br>\n                {{'hear_from_you' | translate}} !!\n            </h2>\n            <h3 class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                {{'let_us_know_your_queries_feedbacks' | translate}}\n            </h3>\n            <!-- \n            <ion-row class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.35s\">\n                <ion-col size=\"6\">\n                    <ion-button fill=\"outline\" size=\"large\" class=\"btn call_us\" expand=\"round\">\n                        <ion-icon class=\"zmdi zmdi-phone\"></ion-icon>\n                        {{'call_us' | translate}}\n                    </ion-button>\n                </ion-col>\n\n                <ion-col size=\"6\">\n                    <ion-button size=\"large\" class=\"btn\" expand=\"round\">\n                        <ion-icon class=\"zmdi zmdi-email\"></ion-icon>\n                        {{'mail_us' | translate}}\n                    </ion-button>\n                </ion-col>\n\n            </ion-row> -->\n        </div>\n    </div>\n</ion-header>\n\n<ion-content fullscreen>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.3s\">\n            <ion-label position=\"floating\">{{'full_name' | translate}}</ion-label>\n            <ion-input formControlName=\"full_name\" mode=\"md\" type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.45s\">\n            <ion-label position=\"floating\">{{'email_address' | translate}}</ion-label>\n            <ion-input formControlName=\"email_address\" mode=\"md\" type=\"email\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"animate__animated animate__fadeInUp wow\" data-wow-duration=\"0.4s\">\n            <ion-label position=\"floating\">{{'message' | translate}}</ion-label>\n            <ion-textarea formControlName=\"message\" rows=\"4\" auto-grow=\"false\" mode=\"md\" type=\"text\"></ion-textarea>\n        </ion-item>\n\n        <ion-button type=\"submit\" expand=\"full\" shape=\"round\">Submit</ion-button>\n        <ion-button (click)=\"delete()\" expand=\"full\" shape=\"round\">Delete Account</ion-button>\n\n    </form>\n\n</ion-content>");

/***/ }),

/***/ 24519:
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".header_banner {\n  padding-bottom: 30px;\n}\n.header_banner .text_box ion-row {\n  margin: 0 -4px;\n  padding-top: 10px;\n}\n.header_banner .text_box ion-row ion-col {\n  padding: 0 4px;\n}\n.header_banner .text_box ion-row ion-col .button.btn ion-icon {\n  font-size: 1.2rem;\n  position: relative;\n  left: -11px;\n}\n.header_banner .text_box ion-row ion-col .button.btn.call_us {\n  overflow: hidden;\n  border-radius: 50px;\n  position: relative;\n  background: var(--transparent);\n  color: var(--primary);\n}\n.header_banner .text_box ion-row ion-col .button.btn.call_us::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--primary);\n  opacity: 0.2;\n}\n.form {\n  border-top: 10px solid var(--bg-color);\n  padding-top: 25px;\n}\n.form h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 1.4rem;\n  padding-bottom: 35px;\n}\nion-footer {\n  padding: 0 20px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRlo7QUFJWTtFQUNJLGNBQUE7QUFGaEI7QUFLb0I7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUh4QjtBQU1vQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFKeEI7QUFNd0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBSjVCO0FBYUE7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0FBVko7QUFZSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVZSO0FBY0E7RUFDSSx5QkFBQTtBQVhKIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9iYW5uZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgLnRleHRfYm94IHtcbiBcblxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtNHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuXG4gICAgICAgICAgICAgICAgLmJ1dHRvbi5idG4ge1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJi5jYWxsX3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtIHtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICAgIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_contact-us_contact-us_module_ts.js.map