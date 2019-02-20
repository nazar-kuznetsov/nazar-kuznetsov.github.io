(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module"],{

/***/ "./src/app/chat-message/chat-message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"chat-section\">\n        <ul #chatList id=\"chat-list\">\n            <li [className]=\"name.bot ? 'answer answer__bot' : 'answer'\"\n                *ngFor=\"let name of messages | async\">\n                <span class=\"time\">{{name.time}}</span>\n                <div>\n                    <p>{{name.message}}</p>\n                    <img class=\"user-photo\"\n                        [src]=\"name.bot ? user.photo : 'http://salacioussound.com/wp-content/uploads/2013/09/Dr.Dre-7.31.2012-390x390.jpg'\"\n                        alt>\n                </div>\n            </li>\n        </ul>\n\n        <div class=\"chat-controll\">\n\n            <input type=\"text\" class=\"input\" placeholder=\"Введите сообщение\"\n                [(ngModel)]=\"value\">\n\n            <button (click)=\"sendMessage()\">Отправить</button>\n        </div>\n\n    </div>\n\n"

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
        this.value = '';
        this.sendMessage = function () {
            _this.service.addMessage(_this.value, false, _this.scrollChat);
            _this.service.botAnswer(_this.scrollChat);
            _this.value = '';
        };
        this.scrollChat = function () {
            var list = _this.chatList.nativeElement;
            list.scrollTop = list.scrollHeight;
        };
    }
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

/***/ "./src/app/chat-message/message.module.ts":
/*!************************************************!*\
  !*** ./src/app/chat-message/message.module.ts ***!
  \************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-message.component */ "./src/app/chat-message/chat-message.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chat_message_component__WEBPACK_IMPORTED_MODULE_2__["ChatMessageComponent"]],
            exports: [_chat_message_component__WEBPACK_IMPORTED_MODULE_2__["ChatMessageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~chat1-chat1-module~chat2-chat2-module~chat3-chat3-module~chat4-chat4-module.js.map