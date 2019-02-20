(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat2-chat2-module"],{

/***/ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chat2/chat2-dashboard/chat2-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-message [user]=\"user\" [messages]=\"messages\"></app-chat-message>"

/***/ }),

/***/ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat2/chat2-dashboard/chat2-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQyL2NoYXQyLWRhc2hib2FyZC9jaGF0Mi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat2/chat2-dashboard/chat2-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: Chat2DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2DashboardComponent", function() { return Chat2DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/services.ts");



var Chat2DashboardComponent = /** @class */ (function () {
    function Chat2DashboardComponent(service) {
        this.service = service;
    }
    Chat2DashboardComponent.prototype.ngOnInit = function () {
        this.showMessage();
    };
    Chat2DashboardComponent.prototype.showMessage = function () {
        var _this = this;
        this.messages = this.service.routerChat('chat2');
        this.service.user(1).subscribe(function (data) { return _this.user = { photo: data[3] }; });
    };
    Chat2DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat2-dashboard',
            template: __webpack_require__(/*! ./chat2-dashboard.component.html */ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./chat2-dashboard.component.scss */ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], Chat2DashboardComponent);
    return Chat2DashboardComponent;
}());



/***/ }),

/***/ "./src/app/chat2/chat2-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat2/chat2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Chat2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2RoutingModule", function() { return Chat2RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat2_dashboard_chat2_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat2-dashboard/chat2-dashboard.component */ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _chat2_dashboard_chat2_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["Chat2DashboardComponent"]
    }
];
var Chat2RoutingModule = /** @class */ (function () {
    function Chat2RoutingModule() {
    }
    Chat2RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Chat2RoutingModule);
    return Chat2RoutingModule;
}());



/***/ }),

/***/ "./src/app/chat2/chat2.module.ts":
/*!***************************************!*\
  !*** ./src/app/chat2/chat2.module.ts ***!
  \***************************************/
/*! exports provided: Chat2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat2Module", function() { return Chat2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat2_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat2-routing.module */ "./src/app/chat2/chat2-routing.module.ts");
/* harmony import */ var _chat2_dashboard_chat2_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat2-dashboard/chat2-dashboard.component */ "./src/app/chat2/chat2-dashboard/chat2-dashboard.component.ts");
/* harmony import */ var _chat_message_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-message/message.module */ "./src/app/chat-message/message.module.ts");






var Chat2Module = /** @class */ (function () {
    function Chat2Module() {
    }
    Chat2Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat2_dashboard_chat2_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["Chat2DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_message_message_module__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
                _chat2_routing_module__WEBPACK_IMPORTED_MODULE_3__["Chat2RoutingModule"]
            ]
        })
    ], Chat2Module);
    return Chat2Module;
}());



/***/ })

}]);
//# sourceMappingURL=chat2-chat2-module.js.map