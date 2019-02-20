(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat4-chat4-module"],{

/***/ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chat4/chat4-dashboard/chat4-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-message [user]=\"user\" [messages]=\"messages\"></app-chat-message>"

/***/ }),

/***/ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat4/chat4-dashboard/chat4-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQ0L2NoYXQ0LWRhc2hib2FyZC9jaGF0NC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat4/chat4-dashboard/chat4-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: Chat4DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat4DashboardComponent", function() { return Chat4DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/services.ts");



var Chat4DashboardComponent = /** @class */ (function () {
    function Chat4DashboardComponent(service) {
        this.service = service;
    }
    Chat4DashboardComponent.prototype.ngOnInit = function () {
        this.showMessage();
    };
    Chat4DashboardComponent.prototype.showMessage = function () {
        var _this = this;
        this.messages = this.service.routerChat('chat4');
        this.service.user(3).subscribe(function (data) { return _this.user = { photo: data[3] }; });
    };
    Chat4DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat4-dashboard',
            template: __webpack_require__(/*! ./chat4-dashboard.component.html */ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./chat4-dashboard.component.scss */ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], Chat4DashboardComponent);
    return Chat4DashboardComponent;
}());



/***/ }),

/***/ "./src/app/chat4/chat4-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat4/chat4-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Chat4RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat4RoutingModule", function() { return Chat4RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat4_dashboard_chat4_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat4-dashboard/chat4-dashboard.component */ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _chat4_dashboard_chat4_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["Chat4DashboardComponent"]
    }
];
var Chat4RoutingModule = /** @class */ (function () {
    function Chat4RoutingModule() {
    }
    Chat4RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Chat4RoutingModule);
    return Chat4RoutingModule;
}());



/***/ }),

/***/ "./src/app/chat4/chat4.module.ts":
/*!***************************************!*\
  !*** ./src/app/chat4/chat4.module.ts ***!
  \***************************************/
/*! exports provided: Chat4Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat4Module", function() { return Chat4Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_message_message_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-message/message.module */ "./src/app/chat-message/message.module.ts");
/* harmony import */ var _chat4_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat4-routing.module */ "./src/app/chat4/chat4-routing.module.ts");
/* harmony import */ var _chat4_dashboard_chat4_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat4-dashboard/chat4-dashboard.component */ "./src/app/chat4/chat4-dashboard/chat4-dashboard.component.ts");






var Chat4Module = /** @class */ (function () {
    function Chat4Module() {
    }
    Chat4Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat4_dashboard_chat4_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["Chat4DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_message_message_module__WEBPACK_IMPORTED_MODULE_3__["MessageModule"],
                _chat4_routing_module__WEBPACK_IMPORTED_MODULE_4__["Chat4RoutingModule"]
            ]
        })
    ], Chat4Module);
    return Chat4Module;
}());



/***/ })

}]);
//# sourceMappingURL=chat4-chat4-module.js.map