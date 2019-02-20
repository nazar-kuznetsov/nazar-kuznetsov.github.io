(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat1-chat1-module"],{

/***/ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chat1/chat1-dashboard/chat1-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-message [user]=\"user\" [messages]=\"messages\"></app-chat-message>"

/***/ }),

/***/ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat1/chat1-dashboard/chat1-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQxL2NoYXQxLWRhc2hib2FyZC9jaGF0MS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat1/chat1-dashboard/chat1-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: Chat1DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat1DashboardComponent", function() { return Chat1DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/services.ts");



var Chat1DashboardComponent = /** @class */ (function () {
    function Chat1DashboardComponent(service) {
        this.service = service;
    }
    Chat1DashboardComponent.prototype.ngOnInit = function () {
        this.showMessage();
    };
    Chat1DashboardComponent.prototype.showMessage = function () {
        var _this = this;
        this.messages = this.service.routerChat('chat1');
        this.service.user(0).subscribe(function (data) { return _this.user = { photo: data[3] }; });
    };
    Chat1DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat1-dashboard',
            template: __webpack_require__(/*! ./chat1-dashboard.component.html */ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./chat1-dashboard.component.scss */ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], Chat1DashboardComponent);
    return Chat1DashboardComponent;
}());



/***/ }),

/***/ "./src/app/chat1/chat1-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat1/chat1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Chat1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat1RoutingModule", function() { return Chat1RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat1_dashboard_chat1_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat1-dashboard/chat1-dashboard.component */ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _chat1_dashboard_chat1_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["Chat1DashboardComponent"]
    }
];
var Chat1RoutingModule = /** @class */ (function () {
    function Chat1RoutingModule() {
    }
    Chat1RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Chat1RoutingModule);
    return Chat1RoutingModule;
}());



/***/ }),

/***/ "./src/app/chat1/chat1.module.ts":
/*!***************************************!*\
  !*** ./src/app/chat1/chat1.module.ts ***!
  \***************************************/
/*! exports provided: Chat1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat1Module", function() { return Chat1Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat1-routing.module */ "./src/app/chat1/chat1-routing.module.ts");
/* harmony import */ var _chat1_dashboard_chat1_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat1-dashboard/chat1-dashboard.component */ "./src/app/chat1/chat1-dashboard/chat1-dashboard.component.ts");
/* harmony import */ var _chat_message_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-message/message.module */ "./src/app/chat-message/message.module.ts");






var Chat1Module = /** @class */ (function () {
    function Chat1Module() {
    }
    Chat1Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat1_dashboard_chat1_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Chat1DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_message_message_module__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
                _chat1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Chat1RoutingModule"]
            ]
        })
    ], Chat1Module);
    return Chat1Module;
}());



/***/ })

}]);
//# sourceMappingURL=chat1-chat1-module.js.map