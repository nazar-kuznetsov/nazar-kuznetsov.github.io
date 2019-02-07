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

module.exports = "<main>\r\n    <div class=\"controll\">\r\n      <div>\r\n        <button (click)=\"start()\">Старт</button>\r\n      </div>\r\n      <div>\r\n        <button (click)=\"stop()\">Стоп</button>\r\n      </div>\r\n    </div>\r\n    <ol class=\"info\">\r\n      <li>Зеленый: Начать гонку</li>\r\n      <li>Красный: Закончить гонку</li>\r\n    </ol>\r\n\r\n\r\n  <div *ngIf=\"!end\" class=\"cars\">\r\n    <div *ngFor=\"let car of cars\">\r\n      <div class=\"car\">\r\n        <p class=\"distance\">кругов: {{car.round}}</p>\r\n        <div [ngStyle]=\"{'left.px': car.distance}\" class=\"inner\" >\r\n          <div class=\"car-header\">\r\n            <p>{{car.name}}</p>\r\n            <p *ngIf=\"car.pitStop\" class=\"loading\">Заправка...</p>\r\n          </div>\r\n\r\n          <img src={{car.img}} alt=\"машина\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div *ngIf=\"end\">\r\n    <p class=\"game-over\">Конец гонки</p>\r\n    <div class=\"game-info\">\r\n        <div *ngFor=\"let car of cars\">\r\n          <p class=\"distance\">Имя: <span class=\"car-name\">{{car.name}}</span></p>\r\n          <p class=\"distance\">кругов: <span class=\"car-name\">{{car.round}}</span></p>\r\n          <p class=\"distance\">Количество остановок: <span class=\"car-name\">{{car.pitStopCount}} </span></p>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controll {\n  display: flex;\n  max-width: 300px;\n  margin: 0 auto;\n  background-color: #555; }\n  .controll button {\n    background: none;\n    border: none;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    font-size: 15px;\n    font-weight: bold; }\n  .controll div:nth-child(1) button {\n    background-color: green; }\n  .controll div:nth-child(2) button {\n    background-color: red; }\n  .controll div:nth-child(3) button {\n    background-color: orange; }\n  .cars {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden; }\n  .info {\n  font-family: sans-serif;\n  font-size: 14px;\n  font-style: italic;\n  text-decoration: underline; }\n  .info li {\n    margin-bottom: 5px; }\n  .car {\n  border-bottom: 1px dashed #555; }\n  .car .distance {\n    font-weight: bold;\n    font-family: sans-serif;\n    font-size: 12px; }\n  .inner {\n  position: relative; }\n  .inner img {\n    width: 100px; }\n  .inner p {\n    color: #333;\n    font-weight: bold;\n    font-family: sans-serif;\n    font-size: 12px; }\n  .car-header {\n  display: flex; }\n  .car-header p {\n    padding: 3px 5px; }\n  .car-header .loading {\n    background-color: #2094EF;\n    color: #fff;\n    border-radius: 5px;\n    margin-left: 5px; }\n  .game-over {\n  font-size: 25px;\n  color: #2094EF;\n  text-align: center; }\n  .game-info {\n  background-color: #F0F0F0;\n  padding: 10px;\n  font-size: 13px;\n  width: 700px;\n  margin: 0 auto; }\n  .game-info .car-name {\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFdFQlxcU1BEXFxhbmd1bGFyLWNhci1maXhcXGFuZ3VsYXIuaG9tZXdvcmtfMS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsdUJBQXNCLEVBNkJ2QjtFQWpDRDtJQVFJLGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osYUFBWTtJQUNaLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixjQUFhO0lBQ2IsWUFBVztJQUNYLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBRWxCO0VBbkJIO0lBdUJJLHdCQUF1QixFQUN4QjtFQXhCSDtJQTJCSSxzQkFBcUIsRUFDdEI7RUE1Qkg7SUErQkkseUJBQXdCLEVBQ3pCO0VBR0g7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakI7RUFHRDtFQUNFLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQiwyQkFBMEIsRUFJM0I7RUFSRDtJQU1JLG1CQUFrQixFQUNuQjtFQUdIO0VBQ0UsK0JBQThCLEVBTS9CO0VBUEQ7SUFHRyxrQkFBaUI7SUFDakIsd0JBQXVCO0lBQ3ZCLGdCQUFlLEVBQ2hCO0VBR0Y7RUFDRSxtQkFBa0IsRUFZbkI7RUFiRDtJQUlJLGFBQVksRUFDYjtFQUxIO0lBUUksWUFBVztJQUNYLGtCQUFpQjtJQUNqQix3QkFBdUI7SUFDdkIsZ0JBQWUsRUFDaEI7RUFJSDtFQUNFLGNBQWEsRUFXZDtFQVpEO0lBR0ksaUJBQWdCLEVBQ2pCO0VBSkg7SUFPSSwwQkFBeUI7SUFDekIsWUFBVztJQUNYLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDakI7RUFHSDtFQUNFLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQixFQUNuQjtFQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYixnQkFBZTtFQUNmLGFBQVk7RUFDWixlQUFjLEVBTWY7RUFYRDtJQVNHLGtCQUFpQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRyb2xsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuXHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBkaXY6bnRoLWNoaWxkKDEpIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIGRpdjpudGgtY2hpbGQoMikgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGRpdjpudGgtY2hpbGQoMykgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uaW5mbyB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7O1xyXG4gIH1cclxufVxyXG5cclxuLmNhciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNTU1O1xyXG4gLmRpc3RhbmNlIHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNhci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcCB7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTRFRjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5nYW1lLW92ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzIwOTRFRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHJcbiAgLmNhci1uYW1lIHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59Il19 */"

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
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/service.ts");
/* harmony import */ var _car_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car.service */ "./src/app/car.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(service, carService) {
        this.service = service;
        this.carService = carService;
        this.end = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cars = this.carService.cars;
    };
    AppComponent.prototype.start = function () {
        var _this = this;
        this.end = false;
        if (this.service.gameOver) {
            this.reset();
        }
        this.carService.initialSpeed();
        clearInterval(this.timerID);
        this.timerID = setInterval(function () { return _this.move(); }, 20);
    };
    AppComponent.prototype.stop = function () {
        this.end = false;
        clearInterval(this.timerID);
        this.reset();
    };
    AppComponent.prototype.reset = function () {
        this.cars = this.carService.reset();
        this.service.start();
    };
    AppComponent.prototype.gameOver = function () {
        this.end = true;
        clearInterval(this.timerID);
        this.cars.forEach(function (element) { return element.distance = 0; });
    };
    AppComponent.prototype.move = function () {
        var _this = this;
        this.cars.forEach(function (car) {
            if (!car.pitStop) {
                car.distance += car.speed;
            }
            if (car.distance > 700) {
                _this.service.calcRound();
                if (!_this.service.gameOver) {
                    car.round += 1;
                }
                car.distance = -100;
                if (_this.service.gameOver) {
                    _this.gameOver();
                }
                if ((car.round !== 0) && car.round % 5 === 0) {
                    _this.pitStop(car);
                }
            }
        });
    };
    AppComponent.prototype.pitStop = function (car) {
        if (this.service.gameOver) {
            this.gameOver();
            return;
        }
        car.pitStop = true;
        car.pitStopCount += 1;
        car.distance = 0;
        setTimeout(function () {
            car.pitStop = false;
        }, this.carService.random(4000, 1000));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service__WEBPACK_IMPORTED_MODULE_2__["Service"], _car_service__WEBPACK_IMPORTED_MODULE_3__["CarService"]])
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
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service */ "./src/app/service.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [_service__WEBPACK_IMPORTED_MODULE_4__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car.service.ts":
/*!********************************!*\
  !*** ./src/app/car.service.ts ***!
  \********************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
var CarService = /** @class */ (function () {
    function CarService() {
        this.cars = [
            {
                img: 'http://icons.iconarchive.com/icons/icons-land/transporter/256/Taxi-Right-Yellow-icon.png',
                pitStop: false,
                distance: 0,
                round: 0,
                speed: 0,
                pitStopCount: 0,
                name: 'Taxi',
            },
            {
                img: 'http://icons.iconarchive.com/icons/icons-land/transporter/256/Car-Right-Red-icon.png',
                pitStop: false,
                distance: 0,
                round: 0,
                speed: 0,
                pitStopCount: 0,
                name: 'Lada',
            },
            {
                img: 'http://icons.iconarchive.com/icons/icons-land/transporter/256/BackhoeLoader-Right-Yellow-icon.png',
                pitStop: false,
                distance: 0,
                round: 0,
                speed: 0,
                pitStopCount: 0,
                name: 'Traktor'
            },
        ];
        this.speed = [];
        this.random = function (max, min) {
            if (max === void 0) { max = 8; }
            if (min === void 0) { min = 1; }
            return Math.round(Math.random() * (max - min + 1) + min);
        };
    }
    CarService.prototype.initialSpeed = function () {
        var _this = this;
        this.speed = [];
        while (this.speed.length !== this.cars.length) {
            var random = this.random();
            if (!this.speed.includes(random)) {
                this.speed.push(random);
            }
        }
        this.cars.map(function (car, index) {
            car.speed = _this.speed[index];
            return car;
        });
    };
    CarService.prototype.reset = function () {
        this.cars.forEach(function (element) {
            element.distance = 0;
            element.pitStop = false;
            element.round = 0;
            element.pitStopCount = 0;
        });
        return this.cars;
    };
    return CarService;
}());



/***/ }),

/***/ "./src/app/service.ts":
/*!****************************!*\
  !*** ./src/app/service.ts ***!
  \****************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Service = /** @class */ (function () {
    function Service() {
        this.totalRound = 0;
        this.gameOver = false;
    }
    Service.prototype.calcRound = function () {
        if (this.totalRound !== 50) {
            this.totalRound += 1;
        }
        else {
            this.gameOver = true;
        }
    };
    Service.prototype.start = function () {
        this.gameOver = false;
        this.totalRound = 0;
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], Service);
    return Service;
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

module.exports = __webpack_require__(/*! E:\WEB\SPD\angular-car-fix\angular.homework_1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map