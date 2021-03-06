(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-card [data]=\"data\"></app-user-card>\n\n<main class=\"main\">\n  <h2>Angular: Формы</h2>\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n    <!-- NAME -->\n    <div class=\"form-group\">\n      <label for=\"name\">Имя<span class=\"required\">*</span></label>\n      <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" required minlength=\"2\" [(ngModel)]=\"data.name\"\n        #name=\"ngModel\" autocomplete=\"off\" />\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"invalid-feedback\">\n        <div *ngIf=\"name.errors.required\">Укажите имя</div>\n        <div *ngIf=\"name.errors.minlength\">Длина должна быть не меньше чем 2 символа</div>\n      </div>\n    </div>\n    <!-- EMAIL -->\n    <div class=\"form-group\">\n      <label for=\"email\">Email<span class=\"required\">*</span></label>\n      <input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" required email [(ngModel)]=\"data.email\" #email=\"ngModel\" autocomplete=\"off\" />\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"invalid-feedback\">\n        <div *ngIf=\"email.errors.required\">Укажите Email</div>\n        <div *ngIf=\"email.errors.email\">E-mail адрес не валидный</div>\n      </div>\n    </div>\n    <!-- PASSWORD -->\n    <div class=\"form-group\">\n      <label for=\"password\">Пароль<span class=\"required\">*</span></label>\n      <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" required password [(ngModel)]=\"data.password\"\n        #password=\"ngModel\" minlength=\"6\" />\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"invalid-feedback\">\n        <div *ngIf=\"password.errors.required\">Введите пароль</div>\n        <div *ngIf=\"password.errors.minlength\">Пароль должен быть не меньше 6 символов</div>\n      </div>\n    </div>\n    <!-- SELECT -->\n    <div class=\"form-group\">\n      <label for=\"country\">Страна<span class=\"required\">*</span></label>\n      <select class=\"form-control\" id=\"country\" required [(ngModel)]=\"data.country\" #country=\"ngModel\" name=\"country\">\n        <option>США</option>\n        <option>Германия</option>\n        <option>Канада</option>\n        <option>Англия</option>\n      </select>\n      <div *ngIf=\"country.invalid && (country.dirty || country.touched)\" class=\"invalid-feedback\">\n        <div *ngIf=\"country.errors.required\">Выберите страну</div>\n      </div>\n    </div>\n    <!-- RADIO -->\n    <div class=\"form-group\">\n      <label>Выберите пол <span class=\"required\">*</span></label>\n      <div class=\"flex\">\n        <label>\n          <input type=\"radio\" value=\"Мужчина\" name=\"gender\" [(ngModel)]=\"data.gender\" required>Мужчина\n        </label>\n        <label>\n          <input type=\"radio\" value=\"Женщина\" name=\"gender\" [(ngModel)]=\"data.gender\" required>Женщина\n        </label>\n      </div>\n    </div>\n    <!-- CHECKBOX -->\n    <div class=\"form-group\">\n      <label class=\"label-agree\">\n        <input type=\"checkbox\" name=\"checkbox\" class=\"form-control\" required checkbox [(ngModel)]=\"data.checkbox\"\n          #checkbox=\"ngModel\" minlength=\"6\" />\n        Вы соглашаетесь с условиями использования<span class=\"required\">*</span>\n      </label>\n      <div *ngIf=\"checkbox.invalid && (checkbox.dirty || checkbox.touched)\" class=\"invalid-feedback\">\n        <div *ngIf=\"checkbox.errors.required\">Вы должны потвердить</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"f.form.pristine || f.form.invalid\">Отправить</button>\n    </div>\n  </form>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n.main {\n  font-family: sans-serif;\n  max-width: 450px;\n  margin: 25px auto;\n  width: 100%;\n  font-size: 13px;\n  padding: 10px 35px;\n  color: #555;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);\n  background-color: #fff; }\n\n.main form input {\n    display: block;\n    border: 1px solid #ddd;\n    outline: none;\n    padding: 10px 10px 10px 30px;\n    background-repeat: no-repeat;\n    background-position: 10px center;\n    background-size: 12px;\n    font-size: 14px;\n    border-radius: 2px;\n    position: relative; }\n\n.main form input[type=text] {\n      background-image: url('user-solid.svg'); }\n\n.main form input[type=password] {\n      background-image: url('unlock-solid.svg'); }\n\n.main form input[type=email] {\n      background-image: url('envelope-solid.svg'); }\n\nh2 {\n  color: #555;\n  font-weight: normal;\n  font-size: 23px; }\n\nselect {\n  height: 38px;\n  border: 1px solid #ddd;\n  outline: none;\n  border-radius: 2px;\n  background: url('globe-europe-solid.svg') no-repeat 10px center;\n  background-size: 12px;\n  padding-left: 30px; }\n\nform button {\n  padding: 20px 47px;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #00c068;\n  margin: 10px auto;\n  color: #fff;\n  outline: none; }\n\nform button:disabled {\n    background-color: #DDDDDD;\n    color: #555; }\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px; }\n\n.form-group label {\n    cursor: pointer;\n    padding-bottom: 5px;\n    font-size: 13px;\n    color: #555; }\n\n.form-group label span {\n      color: red;\n      font-size: 18px; }\n\n.invalid-feedback {\n  color: red;\n  font-size: 13px;\n  padding: 7px 0; }\n\n.label-agree {\n  display: flex;\n  align-items: center; }\n\n.flex {\n  display: flex;\n  font-size: 13px; }\n\n.flex label {\n    display: flex;\n    margin-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdFQlxcZm9ybS1hbmd1bGFyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBSUg7RUFDRyx3QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLDRDQUF3QztFQUN4Qyx1QkFBc0IsRUFxQnhCOztBQTlCRDtJQWVPLGVBQWM7SUFDZCx1QkFBc0I7SUFDdEIsY0FBYTtJQUNiLDZCQUE0QjtJQUM1Qiw2QkFBNEI7SUFDNUIsaUNBQWdDO0lBQ2hDLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixtQkFBa0IsRUFLckI7O0FBN0JKO01BMEJ1Qix3Q0FBcUQsRUFBSTs7QUExQmhGO01BMkJ5QiwwQ0FBdUQsRUFBSTs7QUEzQnBGO01BNEJ3Qiw0Q0FBeUQsRUFBSTs7QUFJckY7RUFDSSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2xCOztBQUdEO0VBQ0ksYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdFQUE2RTtFQUM3RSxzQkFBcUI7RUFDckIsbUJBQWtCLEVBQ3JCOztBQUdEO0VBRVEsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxjQUFhLEVBS2hCOztBQWRMO0lBV1ksMEJBQXlCO0lBQ3pCLFlBQVcsRUFDZDs7QUFJVDtFQUNJLGNBQWE7RUFFYix1QkFBc0I7RUFDdEIsb0JBQW1CLEVBWXRCOztBQWhCRDtJQU1RLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2YsWUFBVyxFQU1kOztBQWZMO01BV1ksV0FBVTtNQUNWLGdCQUFlLEVBRWxCOztBQUlUO0VBQ0ksV0FBVTtFQUNWLGdCQUFlO0VBQ2YsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUIsRUFDdEI7O0FBR0Q7RUFDSSxjQUFhO0VBQ2IsZ0JBQWUsRUFLbEI7O0FBUEQ7SUFJUSxjQUFhO0lBQ2IsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuLm1haW4ge1xyXG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgIHBhZGRpbmc6IDEwcHggMzVweDtcclxuICAgY29sb3I6ICM1NTU7XHJcbiAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG5cclxuXHJcblxyXG4gICBmb3JtIGlucHV0IHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggY2VudGVyO1xyXG4gICAgICAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmW3R5cGU9dGV4dF0geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvdXNlci1zb2xpZC5zdmcnKTsgfVxyXG4gICAgICAmW3R5cGU9cGFzc3dvcmRdIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL3VubG9jay1zb2xpZC5zdmcnKTsgfVxyXG4gICAgICAgICZbdHlwZT1lbWFpbF0geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvZW52ZWxvcGUtc29saWQuc3ZnJyk7IH1cclxuICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcblxyXG5zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvZ2xvYmUtZXVyb3BlLXNvbGlkLnN2ZycpIG5vLXJlcGVhdCAxMHB4IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDQ3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzA2ODtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDdweCAwO1xyXG59XHJcblxyXG4ubGFiZWwtYWdyZWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuLy8gICAgIGJvcmRlcjpzb2xpZCByZWQgMXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0Lm5nLXRvdWNoZWQubmctdmFsaWQge1xyXG4vLyAgICAgYm9yZGVyOnNvbGlkIGdyZWVuIDFweCAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.data = {};
    }
    AppComponent.prototype.onSubmit = function () {
        console.log(this.data);
        alert('Форма отправлена!');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/user-card/user-card.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/user-card/user-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-card/user-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n    <h2>Карточка</h2>\n    <ul>\n      <li>\n        <p>Имя:</p>\n        <span>{{data.name}}</span>\n      </li>\n      <li>\n        <p>Email:</p>\n        <span>{{data.email}}</span>\n      </li>\n      <li>\n        <p>Пароль:</p>\n        <span>{{data.password}}</span>\n      </li>\n      <li>\n        <p>Страна:</p>\n        <span>{{data.country}}</span>\n      </li>\n      <li>\n        <p>Пол:</p>\n        <span>{{data.gender}}</span>\n      </li>\n      <li [class]=\"data.checkbox ? 'ok' : 'none'\">\n        <p>Согласен:</p>\n        <span>{{data.checkbox ? 'Да' : 'Нет'}}</span>\n      </li>\n    </ul>\n  </aside>"

/***/ }),

/***/ "./src/app/user-card/user-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-card/user-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);\n  background-color: #fff;\n  padding: 10px 35px;\n  position: absolute;\n  font-family: sans-serif;\n  left: 25px;\n  top: 25px;\n  min-width: 200px;\n  max-width: 300px;\n  color: #555;\n  font-size: 13px;\n  min-height: 300px; }\n  aside span {\n    padding-left: 15px;\n    font-weight: bold;\n    color: #00c068; }\n  aside p {\n    width: 52px;\n    font-style: italic; }\n  aside ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  aside ul li {\n      display: flex;\n      align-items: center; }\n  aside ul li.ok span {\n        color: #00c068; }\n  aside ul li.none span {\n        color: red; }\n  h2 {\n  color: #555;\n  font-weight: normal;\n  font-size: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jYXJkL0Q6XFxXRUJcXGZvcm0tYW5ndWxhci9zcmNcXGFwcFxcdXNlci1jYXJkXFx1c2VyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBd0M7RUFDeEMsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLFdBQVU7RUFDVixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBaUIsRUFnQ3BCO0VBNUNEO0lBZVEsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixlQUFjLEVBR2pCO0VBcEJMO0lBc0JRLFlBQVc7SUFDWCxtQkFBa0IsRUFDckI7RUF4Qkw7SUEwQlEsaUJBQWdCO0lBQ2hCLFVBQVM7SUFDVCxXQUFVLEVBYWI7RUF6Q0w7TUE4QlksY0FBYTtNQUNiLG9CQUFtQixFQVN0QjtFQXhDVDtRQWtDZ0IsZUFBYyxFQUNqQjtFQW5DYjtRQXNDZ0IsV0FBVSxFQUNiO0VBT2I7RUFDSSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFzaWRlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAzNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2VkNWUyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzAwYzA2ODtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmLm9rIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMGMwNjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAmLm5vbmUgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-card/user-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-card/user-card.component.ts ***!
  \**************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserCardComponent = /** @class */ (function () {
    function UserCardComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserCardComponent.prototype, "data", void 0);
    UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-card',
            template: __webpack_require__(/*! ./user-card.component.html */ "./src/app/user-card/user-card.component.html"),
            styles: [__webpack_require__(/*! ./user-card.component.scss */ "./src/app/user-card/user-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WEB\form-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map