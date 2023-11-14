"use strict";
(self["webpackChunkYummy"] = self["webpackChunkYummy"] || []).push([["src_app_chef_chef_module_ts"],{

/***/ 65649:
/*!*********************************************!*\
  !*** ./src/app/chef/chef-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefPageRoutingModule": () => (/* binding */ ChefPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _chef_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.page */ 55501);




const routes = [
    {
        path: '',
        component: _chef_page__WEBPACK_IMPORTED_MODULE_0__.ChefPage
    }
];
let ChefPageRoutingModule = class ChefPageRoutingModule {
};
ChefPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChefPageRoutingModule);



/***/ }),

/***/ 21691:
/*!*************************************!*\
  !*** ./src/app/chef/chef.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefPageModule": () => (/* binding */ ChefPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _chef_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef-routing.module */ 65649);
/* harmony import */ var _chef_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chef.page */ 55501);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








let ChefPageModule = class ChefPageModule {
};
ChefPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _chef_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChefPageRoutingModule
        ],
        declarations: [_chef_page__WEBPACK_IMPORTED_MODULE_1__.ChefPage]
    })
], ChefPageModule);



/***/ }),

/***/ 55501:
/*!***********************************!*\
  !*** ./src/app/chef/chef.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChefPage": () => (/* binding */ ChefPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chef_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./chef.page.html */ 43672);
/* harmony import */ var _chef_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chef.page.scss */ 85806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);







let ChefPage = class ChefPage {
    constructor(route, fb, dataService, router) {
        this.route = route;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.isEditing = false;
        this.mediaFiles = [];
        this.mediaUrls = [];
        this.recipeForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ethnicity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            servings: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            ingredients: this.fb.array([this.createIngredient()]),
            pics: this.fb.array([]),
            directions: this.fb.array([this.createDirection()]) // Initialize with one direction input
        });
    }
    populateFormWithExistingData() {
        // Fetch the existing recipe data (e.g., from a service or route data)
        const existingRecipeData = this.recipe; // Fetch the existing recipe data
        // Use patchValue to populate the top-level form controls with the existing data
        this.recipeForm.patchValue(existingRecipeData);
        // Handle the ingredients FormArray
        const ingredientsArray = this.recipeForm.get('ingredients');
        ingredientsArray.clear(); // Clear the existing ingredients array
        if (existingRecipeData.ingredients && existingRecipeData.ingredients.length > 0) {
            for (const ingredient of existingRecipeData.ingredients) {
                // Create a FormGroup for each ingredient
                const ingredientGroup = this.fb.group({
                    name: [ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    amount: [ingredient.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    //icon: [ingredient.icon] // You can add more validators if needed
                });
                ingredientsArray.push(ingredientGroup); // Push the FormGroup to the ingredients array
            }
        }
        // Handle the directions FormArray similarly
        const directionsArray = this.recipeForm.get('directions');
        directionsArray.clear(); // Clear the existing directions array
        if (existingRecipeData.directions && existingRecipeData.directions.length > 0) {
            for (const direction of existingRecipeData.directions) {
                // Create a FormGroup for each direction
                const directionGroup = this.fb.group({
                    description: [direction.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
                    time: [direction.time, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
                });
                directionsArray.push(directionGroup); // Push the FormGroup to the directions array
            }
        }
        // Handle the pics array
        const picsArray = this.recipeForm.get('pics');
        picsArray.clear(); // Clear the existing pics array
        if (existingRecipeData.pics && existingRecipeData.pics.length > 0) {
            for (const picUrl of existingRecipeData.pics) {
                // Push each pic URL to the mediaUrls array
                this.mediaUrls.push(picUrl);
                // You can also push an empty control to the pics FormArray if needed
                // picsArray.push(this.fb.control(''));
            }
        }
        // Handle mediaUrls and mediaFiles based on your application's logic
    }
    createIngredient() {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            icon: [''] // You can add more validators if needed
        });
    }
    addIngredient() {
        const ingredients = this.recipeForm.get('ingredients');
        ingredients.push(this.createIngredient());
    }
    removeIngredient(index) {
        const ingredients = this.recipeForm.get('ingredients');
        if (ingredients.length > 1) {
            ingredients.removeAt(index);
        }
    }
    createDirection() {
        return this.fb.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    removeDirection(index) {
        const directions = this.recipeForm.get('directions');
        if (directions.length > 1) {
            directions.removeAt(index);
        }
    }
    addDirection() {
        const directions = this.recipeForm.get('directions');
        directions.push(this.createDirection());
    }
    onFileChange(event) {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            this.mediaFiles.push(files[i]);
            this.previewMedia(files[i]);
        }
    }
    isVideo(url) {
        // Extract the file extension from the URL
        const fileExtension = url.split('.').pop().toLowerCase();
        // Define a list of video file extensions (you can add more)
        const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'wmv'];
        // Check if the file extension is in the list of video extensions
        if (videoExtensions.includes(fileExtension))
            return true;
    }
    isImage(url) {
        // Extract the file extension from the URL
        const fileExtension = url.split('.').pop().toLowerCase();
        // Define a list of common image file extensions (you can add more)
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        // Check if the file extension is in the list of image extensions
        if (imageExtensions.includes(fileExtension))
            return true;
    }
    previewMedia(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            this.mediaUrls.push(event.target.result);
        };
        setTimeout(() => {
        }, 1000);
    }
    removeMedia(index) {
        this.mediaFiles.splice(index, 1);
        this.mediaUrls.splice(index, 1);
    }
    uploadMedia(formData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.dataService.uploadMedia(formData, this.mediaFiles);
            // Clear mediaFiles and mediaUrls arrays after upload is complete
            this.mediaFiles = [];
            this.mediaUrls = [];
        });
    }
    deleteDirection(index) {
        const directions = this.recipeForm.get('directions');
        if (directions.length > 1) {
            directions.removeAt(index);
        }
    }
    ngOnInit() {
        // Access the data passed through the router and assign it to the recipe variable
        this.recipe = this.route.snapshot.data.recipe;
        if (this.recipe) {
            this.isEditing = true;
            this.populateFormWithExistingData(); // Call this to populate the form
        }
    }
    onSubmit() {
        if (this.recipeForm.valid) {
            const formData = this.recipeForm.value;
            this.uploadMedia(formData);
            this.recipeForm.reset();
            this.router.navigate(['/home']);
        }
        else {
            // Form is not valid, mark all form controls as touched to display error messages
            this.markFormGroupTouched(this.recipeForm);
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup) {
                this.markFormGroupTouched(control);
            }
            else {
                control.markAsTouched();
            }
        });
    }
};
ChefPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ChefPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-chef',
        template: _Users_toekneetee_Documents_apps_cookbook_yummy_ionic5_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_chef_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chef_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChefPage);



/***/ }),

/***/ 43672:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/chef/chef.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n    <div>\n      <label>recipe Name:</label>\n      <input type=\"text\" placeholder=\"Fried Okra\" formControlName=\"name\" required>\n      <ion-text *ngIf=\"recipeForm.get('name').invalid && recipeForm.get('name').touched\" color=\"danger\">Name is\n        required.</ion-text>\n    </div>\n    <div>\n      <label>ethnicity:</label>\n      <input type=\"text\" placeholder=\"Ghanian\" formControlName=\"ethnicity\" required>\n      <ion-text *ngIf=\"recipeForm.get('ethnicity').invalid && recipeForm.get('ethnicity').touched\"\n        color=\"danger\">Ethnicity is required.</ion-text>\n    </div>\n    <div>\n      <label>category:</label>\n      <ion-text *ngIf=\"recipeForm.get('category').invalid && recipeForm.get('category').touched\" color=\"danger\">Category\n        is required.</ion-text>\n      <ion-item style=\"border: solid 0.5px;\">\n        <ion-select formControlName=\"category\" placeholder=\"{{ 'dinner' | translate }}\">\n          <ion-select-option value=\"Breakfast\">{{'breakfast' | translate}}</ion-select-option>\n          <ion-select-option value=\"Beverages\">{{'beverages' | translate}}</ion-select-option>\n          <ion-select-option value=\"Appetizer\">{{'apps' | translate}}</ion-select-option>\n          <ion-select-option value=\"Dinner\">{{'dinner' | translate}}</ion-select-option>\n          <ion-select-option value=\"Dessert\">{{'dessert' | translate}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div>\n      <label>time:</label>\n      <input type=\"text\" placeholder=\"20 min\" formControlName=\"time\" required>\n      <ion-text *ngIf=\"recipeForm.get('time').invalid && recipeForm.get('time').touched\" color=\"danger\">Time is\n        required.</ion-text>\n\n    </div>\n    <div class=\"extras\">\n      <label>servings:</label>\n      <input type=\"number\" placeholder=\"8\" formControlName=\"servings\" required>\n      <ion-text *ngIf=\"recipeForm.get('servings').invalid && recipeForm.get('servings').touched\" color=\"danger\">Servings\n        are required.</ion-text>\n    </div>\n\n    <hr>\n\n    <div class=\"extras\" formArrayName=\"ingredients\">\n      <label>ingredients:</label>\n      <ion-text *ngIf=\"recipeForm.get('ingredients').invalid && recipeForm.get('ingredients').touched\"\n        color=\"danger\">Ingredients are required.</ion-text>\n      <div *ngFor=\"let ingredient of recipeForm.get('ingredients').controls; let i = index\">\n        <div [formGroup]=\"ingredient\">\n          <input type=\"text\" formControlName=\"name\" placeholder=\"Ingredient Name\" required>\n          <input type=\"text\" formControlName=\"amount\" placeholder=\"Amount\" required>\n          <!-- <input type=\"text\" formControlName=\"icon\" placeholder=\"Icon (Optional)\"> -->\n          <button type=\"button\" *ngIf=\"recipeForm.get('ingredients').controls.length > 1 && i > 0\"\n            (click)=\"removeIngredient(i)\">Remove</button>\n        </div>\n      </div>\n      <button type=\"button\" (click)=\"addIngredient()\">Add Ingredient</button>\n    </div>\n\n    <hr>\n\n    <hr style=\"border-color: black;\">\n    <div class=\"extras\" formArrayName=\"directions\">\n      <label>directions:</label>\n      <ion-text *ngIf=\"recipeForm.get('directions').invalid && recipeForm.get('directions').touched\"\n        color=\"danger\">Directions are required.</ion-text>\n      <div *ngFor=\"let direction of recipeForm.get('directions').controls; let i = index\">\n        <div [formGroup]=\"direction\">\n          <input type=\"text\" formControlName=\"description\" placeholder=\"Description\" required>\n          <input type=\"text\" formControlName=\"time\" placeholder=\"Time\" required>\n          <button type=\"button\" *ngIf=\"recipeForm.get('directions').controls.length > 1\"\n            (click)=\"removeDirection(i)\">Remove</button>\n        </div>\n      </div>\n      <button type=\"button\" (click)=\"addDirection()\">Add Direction</button>\n    </div>\n\n    <hr>\n\n    <label>Upload Pics & Videos</label>\n    <input type=\"file\" accept=\"image/*, video/*\" (change)=\"onFileChange($event)\" multiple>\n    <div formArrayName=\"pics\">\n\n      <div *ngFor=\"let url of mediaUrls; let i = index\">\n        <img [src]=\"url\" width=\"100\" height=\"100\" *ngIf=\"isImage(url)\">\n        <video [src]=\"url\" controls *ngIf=\"isVideo(url) \"></video>\n        <button type=\"button\" (click)=\"removeMedia(i)\">Remove Picture </button>\n      </div>\n    </div>\n\n\n    <button type=\"submit\" [disabled]=\"recipeForm.invalid && !isEditing\">Submit</button>\n    <button type=\"button\" *ngIf=\"isEditing\" (click)=\"onEditClick()\">Edit Recipe</button>\n  </form>\n</ion-content>");

/***/ }),

/***/ 85806:
/*!*************************************!*\
  !*** ./src/app/chef/chef.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "/* chef.page.scss */\nform {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 20px;\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background-color: var(--bg-color);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\nform input {\n  background: wheat;\n}\ndiv {\n  margin-bottom: 10px;\n}\nlabel {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: var(--text-dark);\n}\ninput[type=text],\ninput[type=number],\ninput[type=file],\ntextarea {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid var(--border-color);\n  border-radius: 3px;\n  font-size: 14px;\n}\n.extras {\n  margin-bottom: 2rem;\n}\nbutton {\n  padding: 5px 10px;\n  border: none;\n  border-radius: 3px;\n  background-color: var(--primary);\n  color: var(--white);\n  cursor: pointer;\n  font-size: 14px;\n}\nbutton[disabled] {\n  background-color: var(--text-light);\n  cursor: not-allowed;\n}\nimg,\nvideo {\n  display: block;\n  max-width: 100%;\n  height: auto;\n  margin-top: 5px;\n}\n/* Optional: Styling for errors */\n.ng-invalid.ng-touched input,\n.ng-invalid.ng-touched textarea {\n  border-color: var(--red_color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7QUFDSjtBQUNJO0VBRUksaUJBQUE7QUFBUjtBQUlBO0VBQ0ksbUJBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUE7Ozs7RUFJSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFLQTtFQUVJLG1CQUFBO0FBSEo7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSEo7QUFNQTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1BOztFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFISjtBQU1BLGlDQUFBO0FBQ0E7O0VBRUksOEJBQUE7QUFISiIsImZpbGUiOiJjaGVmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNoZWYucGFnZS5zY3NzICovXG5mb3JtIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBpbnB1dCB7XG5cbiAgICAgICAgYmFja2dyb3VuZDogd2hlYXQ7XG4gICAgfVxufVxuXG5kaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxudGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG59XG5cbi5leHRyYXMge1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vKiBPcHRpb25hbDogU3R5bGluZyBmb3IgZXJyb3JzICovXG4ubmctaW52YWxpZC5uZy10b3VjaGVkIGlucHV0LFxuLm5nLWludmFsaWQubmctdG91Y2hlZCB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWRfY29sb3IpO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_chef_chef_module_ts.js.map