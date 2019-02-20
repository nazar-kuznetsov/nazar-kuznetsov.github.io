(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat3-chat3-module"],{

/***/ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chat3/chat3-dashboard/chat3-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat-message [user]=\"user\" [messages]=\"messages\"></app-chat-message>"

/***/ }),

/***/ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/chat3/chat3-dashboard/chat3-dashboard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQzL2NoYXQzLWRhc2hib2FyZC9jaGF0My1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chat3/chat3-dashboard/chat3-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: Chat3DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat3DashboardComponent", function() { return Chat3DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/services.ts");



var Chat3DashboardComponent = /** @class */ (function () {
    function Chat3DashboardComponent(service) {
        this.service = service;
    }
    Chat3DashboardComponent.prototype.ngOnInit = function () {
        this.showMessage();
    };
    Chat3DashboardComponent.prototype.showMessage = function () {
        var _this = this;
        this.messages = this.service.routerChat('chat3');
        this.service.user(2).subscribe(function (data) { return _this.user = { photo: data[3] }; });
    };
    Chat3DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat3-dashboard',
            template: __webpack_require__(/*! ./chat3-dashboard.component.html */ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./chat3-dashboard.component.scss */ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], Chat3DashboardComponent);
    return Chat3DashboardComponent;
}());



/***/ }),

/***/ "./src/app/chat3/chat3-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat3/chat3-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Chat3RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat3RoutingModule", function() { return Chat3RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat3_dashboard_chat3_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat3-dashboard/chat3-dashboard.component */ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _chat3_dashboard_chat3_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["Chat3DashboardComponent"]
    }
];
var Chat3RoutingModule = /** @class */ (function () {
    function Chat3RoutingModule() {
    }
    Chat3RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Chat3RoutingModule);
    return Chat3RoutingModule;
}());



/***/ }),

/***/ "./src/app/chat3/chat3.module.ts":
/*!***************************************!*\
  !*** ./src/app/chat3/chat3.module.ts ***!
  \***************************************/
/*! exports provided: Chat3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat3Module", function() { return Chat3Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_message_message_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-message/message.module */ "./src/app/chat-message/message.module.ts");
/* harmony import */ var _chat3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat3-routing.module */ "./src/app/chat3/chat3-routing.module.ts");
/* harmony import */ var _chat3_dashboard_chat3_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat3-dashboard/chat3-dashboard.component */ "./src/app/chat3/chat3-dashboard/chat3-dashboard.component.ts");






var Chat3Module = /** @class */ (function () {
    function Chat3Module() {
    }
    Chat3Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat3_dashboard_chat3_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["Chat3DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_message_message_module__WEBPACK_IMPORTED_MODULE_3__["MessageModule"],
                _chat3_routing_module__WEBPACK_IMPORTED_MODULE_4__["Chat3RoutingModule"]
            ]
        })
    ], Chat3Module);
    return Chat3Module;
}());



/***/ })

}]);
//# sourceMappingURL=chat3-chat3-module.js.map