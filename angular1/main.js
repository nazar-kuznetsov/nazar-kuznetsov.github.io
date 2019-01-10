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

module.exports = "<main>\n  <div class=\"controll\">\n    <div (click)=\"start()\">\n      <button>Старт</button>\n    </div>\n    <div (click)=\"stop()\">\n      <button>Стоп</button>\n    </div>\n    <div>\n      <button>Желтый</button>\n    </div>\n  </div>\n  <ol class=\"info\">\n    <li>Зеленый: Начать гонку</li>\n    <li>Красный: Закончить гонку</li>\n  </ol>\n  <div class=\"cars\">\n      <app-car\n      *ngFor=\"let raider of raiders\"\n      [car]=\"raider\">\n    </app-car>\n  </div>\n\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controll {\n  display: flex;\n  max-width: 300px;\n  margin: 0 auto;\n  background-color: #555; }\n  .controll button {\n    background: none;\n    border: none;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    font-size: 15px;\n    font-weight: bold; }\n  .controll div:nth-child(1) button {\n    background-color: green; }\n  .controll div:nth-child(2) button {\n    background-color: red; }\n  .controll div:nth-child(3) button {\n    background-color: orange; }\n  .cars {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden; }\n  .info {\n  font-family: sans-serif;\n  font-size: 14px;\n  font-style: italic;\n  text-decoration: underline; }\n  .info li {\n    margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFdFQlxcU1BEXFxnaXRsYWJcXEpTXFxteS1kcmVhbS1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLHVCQUFzQixFQTZCdkI7RUFqQ0Q7SUFRSSxpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGFBQVk7SUFDWixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLFlBQVc7SUFDWCxnQkFBZTtJQUNmLGtCQUFpQixFQUVsQjtFQW5CSDtJQXVCSSx3QkFBdUIsRUFDeEI7RUF4Qkg7SUEyQkksc0JBQXFCLEVBQ3RCO0VBNUJIO0lBK0JJLHlCQUF3QixFQUN6QjtFQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCO0VBR0Q7RUFDRSx3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsMkJBQTBCLEVBSTNCO0VBUkQ7SUFNSSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJvbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG5cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGRpdjpudGgtY2hpbGQoMSkgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgZGl2Om50aC1jaGlsZCgyKSBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbiAgZGl2Om50aC1jaGlsZCgzKSBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5pbmZvIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDs7XHJcbiAgfVxyXG59Il19 */"

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
        this.distance = 0;
        this.random = function () { return Math.floor((Math.random() * 8) + 1); };
        this.raiders = [
            {
                img: "http://icons.iconarchive.com/icons/icons-land/transporter/256/Taxi-Right-Yellow-icon.png",
                name: 'Taxi',
                left: 0,
                speed: 0,
                round: 0
            },
            {
                img: "http://icons.iconarchive.com/icons/icons-land/transporter/256/Car-Right-Red-icon.png",
                name: 'lada',
                left: 0,
                speed: 0,
                round: 0
            },
            {
                img: "http://icons.iconarchive.com/icons/icons-land/transporter/256/BackhoeLoader-Right-Yellow-icon.png",
                name: 'Tractor',
                left: 0,
                speed: 0,
                round: 0
            },
        ];
    }
    AppComponent.prototype.start = function () {
        var _this = this;
        clearInterval(this.timerID);
        this.raiders.forEach(function (rainder) { return rainder.speed = _this.random(); });
        this.timerID = setInterval(function () { return _this.move(); }, 20);
    };
    AppComponent.prototype.move = function () {
        this.raiders.forEach(function (item) {
            if (item.left > 700) {
                item.left = -100;
                item.round += 1;
            }
            item.left += item.speed;
        });
    };
    AppComponent.prototype.stop = function () {
        clearInterval(this.timerID);
        this.raiders.forEach(function (item) {
            item.left = 0;
            item.round = 0;
        });
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _car_car_component__WEBPACK_IMPORTED_MODULE_4__["CarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car/car.component.html":
/*!****************************************!*\
  !*** ./src/app/car/car.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"car\">\r\n  <p class=\"distance\">кругов: {{car.round}}</p>\r\n  <div class=\"inner\" [style.left]=\"car.left + 'px' \">\r\n    <p>{{car.name}}</p>\r\n    <img [src]=\"car.img\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/car/car.component.scss":
/*!****************************************!*\
  !*** ./src/app/car/car.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  border-bottom: 1px dashed #555; }\n  .car .distance {\n    font-weight: bold;\n    font-family: sans-serif;\n    font-size: 12px; }\n  .inner {\n  position: relative; }\n  .inner img {\n    width: 100px; }\n  .inner p {\n    color: #333;\n    font-weight: bold;\n    font-family: sans-serif;\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyL0U6XFxXRUJcXFNQRFxcZ2l0bGFiXFxKU1xcbXktZHJlYW0tYXBwL3NyY1xcYXBwXFxjYXJcXGNhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUE4QixFQU0vQjtFQVBEO0lBR0csa0JBQWlCO0lBQ2pCLHdCQUF1QjtJQUN2QixnQkFBZSxFQUNoQjtFQUdGO0VBQ0UsbUJBQWtCLEVBWW5CO0VBYkQ7SUFJSSxhQUFZLEVBQ2I7RUFMSDtJQVFJLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FyL2Nhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzU1NTtcclxuIC5kaXN0YW5jZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/car/car.component.ts":
/*!**************************************!*\
  !*** ./src/app/car/car.component.ts ***!
  \**************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CarComponent.prototype, "car", void 0);
    CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.scss */ "./src/app/car/car.component.scss")]
        })
    ], CarComponent);
    return CarComponent;
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

module.exports = __webpack_require__(/*! E:\WEB\SPD\gitlab\JS\my-dream-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map