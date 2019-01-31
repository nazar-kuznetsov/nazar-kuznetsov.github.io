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

/***/ "./src/app/answer.ts":
/*!***************************!*\
  !*** ./src/app/answer.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    "Прежде чем встать с колен, следует выбраться из жопы!",
    "Необходимость постоянно делиться многие клетки сделала нервными.",
    "По телевизору начали рекламировать мужские силиконовые импланты для кошельков.",
    "Зевок - это беззвучный крик о кофе.",
    "Всех денег не заработать, потому что их постоянно печатают.",
    "Если существует йогурт питьевой, должен же быть и технический.",
    "Верные налево ходят только по любви",
    "Жизнь - как коробка шоколадных конфет, а у тебя диабет.",
    "Зато теперь россияне будут лучше танцевать...",
    "Наступил 2036 год, в магазинах продавали упаковки по пол яйца.",
    "Экономический рывок был настолько мощным, что оторвалось одно яйцо",
    "Если вы делаете детей, и у вас не получается - войдите под админом.",
    "Мальчик Витя не может уснуть, потому что боится, что мама смоет его в унитаз, как уснувших рыбок.",
    "Экономический рывок был настолько мощным, что оторвалось одно яйцо",
    "А ведь когда-то, когда не было соцсетей, только в семье знали, что ты дурачок",
    "Горожанин - это когда конский навоз для тебя пахнет цирком",
    "Если твоя дочь сменила пол, то теперь она доч",
    "В любой сфере чувствую себя как рыба в воде: косяк за косяком",
    "Первыми повышение НДС встретили жители Камчатки",
    "Гости - это такие люди, которые мешают дома ходить без трусов",
    "Семен учился в настолько плохой школе, что аттестат ему накололи на спине",
    "диотам не надо объединяться - это уже и так их планета.",
    "У меня зрение все так же стопроцентное, просто теперь до другого расстояния",
    "2018-ый был похож на удар мизинцем о ножку тумбочки",
    "А вот когда глухие видят как ты зеваешь, они думают, что ты орёшь",
    "Вчера, объезжая яму на дороге, заехал в другой город",
    "Как только русский человек начинает что-то понимать, он тут же спивается",
    "В камере, заключенный по кличке Енот, скоро стал Крошка Енот",
    "Девочка, у которой всю жизнь были рыбки, плакала, когда пельмени всплывали"
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <span>Входящие</span>\n    <img src=\"http://salacioussound.com/wp-content/uploads/2013/09/Dr.Dre-7.31.2012-390x390.jpg\" alt=\"\">\n</header>\n<!-- <p>{{time.toLocaleString()}}</p> -->\n<main class=\"main\">\n    <app-chat-nav (showMessage)=\"showMessage($event)\"></app-chat-nav>\n\n    <div class=\"section\">\n        <app-chat-message\n            (addMessage)=\"addMessage($event)\"\n            [user]=\"user\"\n            [messages]=\"messages\"\n        >\n        </app-chat-message>\n    </div>\n</main>\n"

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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.curentIndex = 0;
        this.time = new Date();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showMessage();
    };
    AppComponent.prototype.addMessage = function (data) {
        this.service.addMessage(data.value, false, data.done);
    };
    AppComponent.prototype.showMessage = function () {
        var _this = this;
        this.messages = this.service.getMessages();
        this.service.activeChat().subscribe(function (data) { return _this.user = { photo: data[2] }; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
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
/* harmony import */ var _config_firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/firebase.config */ "./src/config/firebase.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_nav_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-nav/chat-nav.component */ "./src/app/chat-nav/chat-nav.component.ts");
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-message/chat-message.component */ "./src/app/chat-message/chat-message.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services */ "./src/services.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _chat_nav_chat_nav_component__WEBPACK_IMPORTED_MODULE_8__["ChatNavComponent"],
                _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_9__["ChatMessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_config_firebase_config__WEBPACK_IMPORTED_MODULE_6__["config"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_10__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-message/chat-message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-section\">\n    <ul\n        #chatList\n        id=\"chat-list\"\n    >\n        <li\n            [className]=\"name.bot ? 'answer answer__bot' : 'answer'\"\n            *ngFor=\"let name of messages | async\"\n        >\n        <span class=\"time\">{{name.time}}</span>\n            <div>\n                <p>{{name.message}}</p>\n                <img\n                    class=\"user-photo\"\n                    [src]=\"name.bot ? user.photo : 'http://salacioussound.com/wp-content/uploads/2013/09/Dr.Dre-7.31.2012-390x390.jpg'\"\n                    alt\n                >\n            </div>\n        </li>\n    </ul>\n    <div class=\"chat-controll\">\n\n        <input\n            type=\"text\"\n            class=\"input\"\n            placeholder=\"Введите сообщение\"\n            [(ngModel)]=\"value\"\n        >\n\n        <button (click)=\"sendMessage()\">Отправить</button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/chat-message/chat-message.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-section {\n  position: relative; }\n\nul::-webkit-scrollbar {\n  width: 10px;\n  background-color: #C2C7D7;\n  border-radius: 5px; }\n\nul::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: #9098B1; }\n\n.time {\n  font-size: 11px;\n  color: #555;\n  display: block;\n  padding: 5px 0;\n  text-align: right;\n  margin-right: 65px; }\n\nul {\n  min-height: 250px;\n  display: flex;\n  padding: 30px;\n  flex-direction: column;\n  align-items: baseline;\n  max-height: 70vh;\n  overflow-y: scroll; }\n\nul ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #F5F5F5; }\n\nul li {\n    align-self: flex-end;\n    color: #fff;\n    max-width: 350px;\n    margin-bottom: 10px; }\n\nul li div {\n      display: flex;\n      align-items: flex-start; }\n\nul li p {\n      background-color: #5C5CFB;\n      border-radius: 5px;\n      padding: 10px;\n      margin-right: 10px;\n      position: relative; }\n\nul li.answer__bot {\n      align-self: flex-start;\n      color: #555; }\n\nul li.answer__bot .time {\n        text-align: left;\n        margin-left: 65px;\n        margin-right: 0; }\n\nul li.answer__bot div {\n        flex-direction: row-reverse; }\n\nul li.answer__bot p {\n        box-shadow: 0 5px 6px -6px #777;\n        margin-left: 10px;\n        background-color: #FFFFFF; }\n\n.user-photo {\n  width: 50px;\n  border-radius: 50%; }\n\n.chat-controll {\n  display: flex;\n  position: fixed;\n  z-index: 2;\n  background-color: #E2E5EE;\n  bottom: 0;\n  right: 10px;\n  width: calc(65% - 30px);\n  padding: 15px 0;\n  margin-top: auto; }\n\n.chat-controll button {\n    background-color: #009688;\n    border: none;\n    color: #fff;\n    font-size: 16px;\n    padding: 10px 25px;\n    border-radius: 3px;\n    cursor: pointer; }\n\n.input {\n  padding: 10px 15px;\n  border: none;\n  flex-grow: 1;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1tZXNzYWdlL0U6XFxXRUJcXFNQRFxcZ2l0bGFiXFzQktC10YDRgdGC0LrQsFxcYW5ndWxhci1jaGF0L3NyY1xcYXBwXFxjaGF0LW1lc3NhZ2VcXGNoYXQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFFVCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ3BCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUVyQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBUnBCO0lBVUksb0RBQWlEO0lBQ2pELG1CQUFtQjtJQUNuQix5QkFBeUIsRUFBQTs7QUFaN0I7SUFlSSxvQkFBb0I7SUFFcEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFuQnZCO01BcUJNLGFBQWE7TUFDYix1QkFBdUIsRUFBQTs7QUF0QjdCO01BMEJNLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTs7QUE5QnhCO01BaUNNLHNCQUFzQjtNQUN0QixXQUFXLEVBQUE7O0FBbENqQjtRQW9DTyxnQkFBZ0I7UUFDZixpQkFBaUI7UUFDakIsZUFBZSxFQUFBOztBQXRDdkI7UUEwQ1EsMkJBQTJCLEVBQUE7O0FBMUNuQztRQTZDUSwrQkFBK0I7UUFDL0IsaUJBQWlCO1FBQ2pCLHlCQUF5QixFQUFBOztBQWlCakM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFUbEI7SUFXSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBS25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW1lc3NhZ2UvY2hhdC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG51bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkM3RDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICB1bDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDk4QjE7XHJcbn1cclxuXHJcbi50aW1lIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM1Q0ZCO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJi5hbnN3ZXJfX2JvdCB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAudGltZSB7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNnB4IC02cHggIzc3NztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIC8vICY6OmFmdGVyIHtcclxuICAgICAgICAvLyAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIC8vICAgd2lkdGg6IDA7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vICAgYm9yZGVyLXdpZHRoOiA1cHggMTBweCA1cHggMDtcclxuICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwN2JmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnVzZXItcGhvdG8ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNoYXQtY29udHJvbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTVFRTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IGNhbGMoNjUlIC0gMzBweCk7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaW5wdXQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat-message/chat-message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.ts ***!
  \********************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/services.ts");



var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(service) {
        var _this = this;
        this.service = service;
        this.addMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = '';
        this.scrollChat = function () {
            var list = _this.chatList.nativeElement;
            list.scrollTop = list.scrollHeight;
        };
    }
    ChatMessageComponent.prototype.sendMessage = function () {
        this.addMessage.emit({ value: this.value, done: this.scrollChat });
        this.service.botAnswer(this.scrollChat);
        this.value = '';
    };
    ChatMessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatMessageComponent.prototype, "addMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatMessageComponent.prototype, "messages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatMessageComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatMessageComponent.prototype, "chatList", void 0);
    ChatMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-message',
            template: __webpack_require__(/*! ./chat-message.component.html */ "./src/app/chat-message/chat-message.component.html"),
            styles: [__webpack_require__(/*! ./chat-message.component.scss */ "./src/app/chat-message/chat-message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/chat-nav/chat-nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside\">\n    <ul>\n        <li class=\"element\" *ngFor=\"let chat of chats | async; index as i\">\n            <div (click)=\"showChat(chat.name, i)\">\n                <div class=\"user-card\">\n                    <img src={{chat.photo}} alt=\"\">\n                    <div>\n                      <p class=\"chat-name\">{{chat.name}}</p>\n                      <p class=\"last-message\">{{chat.lastMessage}}</p>\n\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</aside>\n"

/***/ }),

/***/ "./src/app/chat-nav/chat-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chat-nav/chat-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  border-radius: 5px;\n  background-color: #fff; }\n\nul li {\n  border-bottom: 1px solid #e7e7e7; }\n\nul li:hover {\n    background-color: #E2E5EE; }\n\nul li > div {\n  padding: 15px 25px;\n  cursor: pointer;\n  border-radius: 3px;\n  position: relative; }\n\nul li > div::after {\n    content: '';\n    display: block;\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    margin-top: -3px;\n    width: 6px;\n    height: 6px;\n    background-color: #21be48;\n    border-radius: 50%; }\n\n.user-card {\n  display: flex;\n  align-items: flex-start; }\n\n.user-card img {\n    width: 50px;\n    border-radius: 50%;\n    margin-right: 10px; }\n\n.chat-name {\n  color: #555;\n  margin-bottom: 5px; }\n\n.last-message {\n  color: #7F7F7F;\n  line-height: 20px;\n  font-size: 13px;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1uYXYvRTpcXFdFQlxcU1BEXFxnaXRsYWJcXNCS0LXRgNGB0YLQutCwXFxhbmd1bGFyLWNoYXQvc3JjXFxhcHBcXGNoYXQtbmF2XFxjaGF0LW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFEbEM7SUFJSSx5QkFBeUIsRUFBQTs7QUFNN0I7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFMcEI7SUFPSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFPdEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRnpCO0lBS0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW5hdi9jaGF0LW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkU1RUU7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbnVsIGxpID4gZGl2IHtcclxuXHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWJlNDg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4udXNlci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1uYW1lIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgLy8gZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubGFzdC1tZXNzYWdlIHtcclxuICBjb2xvcjogIzdGN0Y3RjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */"

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
    ChatNavComponent.prototype.showChat = function (name, i) {
        this.service.selectedChat(name, i);
        this.showMessage.emit();
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

/***/ "./src/config/firebase.config.ts":
/*!***************************************!*\
  !*** ./src/config/firebase.config.ts ***!
  \***************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCo6j51y_j-OA0yF4Rq7NcbbMYWTlPg62I",
        authDomain: "angular-inbox-2af32.firebaseapp.com",
        databaseURL: "https://angular-inbox-2af32.firebaseio.com",
        projectId: "angular-inbox-2af32",
        storageBucket: "angular-inbox-2af32.appspot.com",
        messagingSenderId: "29725865958"
    }
};


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
        this.currentChat = 0;
        this.name = 'Donald John Trump';
    }
    ChatService.prototype.getChatList = function () {
        return this.db.list('/chats').valueChanges();
    };
    ChatService.prototype.activeChat = function () {
        return this.db.list("/chats/" + this.currentChat).valueChanges();
    };
    ChatService.prototype.selectedChat = function (name, index) {
        this.currentChat = index;
        this.name = name;
    };
    ChatService.prototype.getMessages = function () {
        return this.db.list("/dialogues/" + this.name + "/dialogs").valueChanges();
    };
    ChatService.prototype.addMessage = function (text, isBot, done) {
        this.db.list("/dialogues/" + this.name + "/dialogs").push({ message: text, bot: isBot, time: new Date().toLocaleString() }).then(function () { return done(); });
        this.db.object("/chats/" + this.currentChat).update({ lastMessage: text });
    };
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