(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chat1/chat1.module": [
		"./src/app/chat1/chat1.module.ts",
		"default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module",
		"chat1-chat1-module"
	],
	"./chat2/chat2.module": [
		"./src/app/chat2/chat2.module.ts",
		"default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module",
		"chat2-chat2-module"
	],
	"./chat3/chat3.module": [
		"./src/app/chat3/chat3.module.ts",
		"default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module",
		"chat3-chat3-module"
	],
	"./chat4/chat4.module": [
		"./src/app/chat4/chat4.module.ts",
		"default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module",
		"chat4-chat4-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/answer.ts":
/*!***************************!*\
  !*** ./src/app/answer.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    'Прежде чем встать с колен, следует выбраться из жопы!',
    'Необходимость постоянно делиться многие клетки сделала нервными.',
    'По телевизору начали рекламировать мужские силиконовые импланты для кошельков.',
    'Зевок - это беззвучный крик о кофе.',
    'Всех денег не заработать, потому что их постоянно печатают.',
    'Если существует йогурт питьевой, должен же быть и технический.',
    'Верные налево ходят только по любви',
    'Жизнь - как коробка шоколадных конфет, а у тебя диабет.',
    'Зато теперь россияне будут лучше танцевать...',
    'Наступил 2036 год, в магазинах продавали упаковки по пол яйца.',
    'Экономический рывок был настолько мощным, что оторвалось одно яйцо',
    'Если вы делаете детей, и у вас не получается - войдите под админом.',
    'Мальчик Витя не может уснуть, потому что боится, что мама смоет его в унитаз, как уснувших рыбок.',
    'Экономический рывок был настолько мощным, что оторвалось одно яйцо',
    'А ведь когда-то, когда не было соцсетей, только в семье знали, что ты дурачок',
    'Горожанин - это когда конский навоз для тебя пахнет цирком',
    'Если твоя дочь сменила пол, то теперь она доч',
    'В любой сфере чувствую себя как рыба в воде: косяк за косяком',
    'Первыми повышение НДС встретили жители Камчатки',
    'Гости - это такие люди, которые мешают дома ходить без трусов',
    'Семен учился в настолько плохой школе, что аттестат ему накололи на спине',
    'диотам не надо объединяться - это уже и так их планета.',
    'У меня зрение все так же стопроцентное, просто теперь до другого расстояния',
    '2018-ый был похож на удар мизинцем о ножку тумбочки',
    'А вот когда глухие видят как ты зеваешь, они думают, что ты орёшь',
    'Вчера, объезжая яму на дороге, заехал в другой город',
    'Как только русский человек начинает что-то понимать, он тут же спивается',
    'В камере, заключенный по кличке Енот, скоро стал Крошка Енот',
    'Девочка, у которой всю жизнь были рыбки, плакала, когда пельмени всплывали'
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var routes = [
    {
        path: 'chat1',
        loadChildren: './chat1/chat1.module#Chat1Module'
    },
    {
        path: 'chat2',
        loadChildren: './chat2/chat2.module#Chat2Module'
    },
    {
        path: 'chat3',
        loadChildren: './chat3/chat3.module#Chat3Module'
    },
    {
        path: 'chat4',
        loadChildren: './chat4/chat4.module#Chat4Module'
    },
    { path: '**', redirectTo: '/chat1' }
    // если нет совпадение перенаправляем на /chat1, или допустим можно создать страницу not-found и перенаправлять туда
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <span>Входящие</span>\n    <img src=\"http://salacioussound.com/wp-content/uploads/2013/09/Dr.Dre-7.31.2012-390x390.jpg\"\n        alt=\"\">\n</header>\n<main class=\"main\">\n    <app-chat-nav></app-chat-nav>\n    <div class=\"section\">\n      <router-outlet></router-outlet>\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  background-color: #F3F3F8;\n  width: 100%;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFdFQlxcU1BEXFxnaXRsYWJcXNCS0LXRgNGB0YLQutCwXFxhbmd1bGFyLWNoYXQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGODtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiJdfQ== */"

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
    }
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
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_nav_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-nav/chat-nav.component */ "./src/app/chat-nav/chat-nav.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./src/services.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_nav_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__["ChatNavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["routes"])],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_9__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/chat-nav/chat-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside\">\n  <ul>\n    <li class=\"element\" *ngFor=\"let chat of chats | async; index as i\">\n      <button routerLink={{chat.link}} routerLinkActive=\"active-link\">\n        <div class=\"user-card\">\n          <img src={{chat.photo}} alt=\"\">\n          <div>\n            <p class=\"user-name\">{{chat.name}}</p>\n            <p class=\"last-message\">{{chat.lastMessage}}</p>\n          </div>\n        </div>\n      </button>\n    </li>\n  </ul>\n</aside>"

/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chat-nav/chat-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  border-radius: 5px;\n  background-color: #fff; }\n\nul li {\n  border-bottom: 1px solid #e7e7e7; }\n\nul li:hover {\n    background-color: #E2E5EE; }\n\nul li > div {\n  padding: 15px 25px;\n  cursor: pointer;\n  border-radius: 3px;\n  position: relative; }\n\nul li > div::after {\n    content: '';\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    margin-top: -3px;\n    width: 6px;\n    height: 6px;\n    background-color: #21be48;\n    border-radius: 50%; }\n\n.user-card {\n  display: flex;\n  align-items: flex-start; }\n\n.user-card img {\n    width: 50px;\n    border-radius: 50%;\n    margin-right: 10px; }\n\n.chat-name {\n  color: #555;\n  margin-bottom: 5px; }\n\n.last-message {\n  color: #7F7F7F;\n  line-height: 20px;\n  font-size: 13px;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1uYXYvRTpcXFdFQlxcU1BEXFxnaXRsYWJcXNCS0LXRgNGB0YLQutCwXFxhbmd1bGFyLWNoYXQvc3JjXFxhcHBcXGNoYXQtbmF2XFxjaGF0LW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFEbEM7SUFJSSx5QkFBeUIsRUFBQTs7QUFNN0I7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFMcEI7SUFPSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFPdEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRnpCO0lBS0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW5hdi9jaGF0LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkU1RUU7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbnVsIGxpID4gZGl2IHtcclxuXHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWJlNDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4udXNlci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1uYW1lIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgLy8gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubGFzdC1tZXNzYWdlIHtcclxuICBjb2xvcjogIzdGN0Y3RjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat-nav/chat-nav.component.ts ***!
  \************************************************/
/*! exports provided: ChatNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNavComponent", function() { return ChatNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services.ts");



var ChatNavComponent = /** @class */ (function () {
    function ChatNavComponent(service) {
        this.service = service;
        this.showMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatNavComponent.prototype.ngOnInit = function () {
        this.chats = this.service.getChatList();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatNavComponent.prototype, "showMessage", void 0);
    ChatNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-nav',
            template: __webpack_require__(/*! ./chat-nav.component.html */ "./src/app/chat-nav/chat-nav.component.html"),
            styles: [__webpack_require__(/*! ./chat-nav.component.scss */ "./src/app/chat-nav/chat-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatNavComponent);
    return ChatNavComponent;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyA40yUDorD1guYaxSZ-YSAuYyC_PZ-gFho',
        authDomain: 'angular-router-af88d.firebaseapp.com',
        databaseURL: 'https://angular-router-af88d.firebaseio.com',
        projectId: 'angular-router-af88d',
        storageBucket: 'angular-router-af88d.appspot.com',
        messagingSenderId: '53017182740'
    }
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

/***/ "./src/services.ts":
/*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_app_answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/app/answer */ "./src/app/answer.ts");




var randrom = function (data) { return Math.floor(Math.random() * data.length) + 0; };
var ChatService = /** @class */ (function () {
    function ChatService(db) {
        this.db = db;
    }
    ChatService.prototype.getChatList = function () {
        return this.db.list('/chats').valueChanges();
    };
    ChatService.prototype.routerChat = function (name) {
        return this.db.list("/dialogues/" + name + "/dialogs").valueChanges();
    };
    ChatService.prototype.user = function (index) {
        return this.db.list("/chats/" + index).valueChanges();
    };
    ChatService.prototype.addMessage = function (text, isBot, done) {
        var dbLink = window.location.pathname.substr(1);
        this.db.list("/dialogues/" + dbLink + "/dialogs").push({ message: text, bot: isBot, time: new Date().toLocaleString() }).then(function () { return done(); });
        this.db.object("/chats/" + (+dbLink[4] - 1)).update({ lastMessage: text });
    };
    // автоответ бота
    ChatService.prototype.botAnswer = function (done) {
        var _this = this;
        clearTimeout(this.timerID);
        this.timerID = setTimeout(function () {
            var randomAnswer = _src_app_answer__WEBPACK_IMPORTED_MODULE_3__["default"][randrom(_src_app_answer__WEBPACK_IMPORTED_MODULE_3__["default"])];
            _this.addMessage("\u041E\u0442\u0432\u0435\u0442: " + randomAnswer, true, done);
        }, 1500);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WEB\SPD\gitlab\Верстка\angular-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map