(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,500,700\");\n/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  color: #333; }\n.main {\n  min-height: 100vh; }\n.center {\n  color: red; }\n.left {\n  color: blue; }\nul {\n  list-style: none; }\napp-chat-nav {\n  width: 35%; }\n.section {\n  width: 65%;\n  background-color: #E2E5EE;\n  position: relative; }\n.header {\n  background-color: #3E82F8;\n  padding: 5px 25px;\n  color: #fff;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n.header img {\n    width: 40px;\n    border-radius: 50%; }\n.chat-section {\n  position: relative; }\nul::-webkit-scrollbar {\n  width: 10px;\n  background-color: #C2C7D7;\n  border-radius: 5px; }\nul::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: #9098B1; }\n.time {\n  font-size: 11px;\n  color: #555;\n  display: block;\n  padding: 5px 0;\n  text-align: right;\n  margin-right: 65px; }\n.section ul {\n  min-height: 250px;\n  display: flex;\n  padding: 30px;\n  flex-direction: column;\n  align-items: baseline;\n  max-height: 70vh;\n  overflow-y: scroll; }\n.section ul ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #F5F5F5; }\n.section ul li {\n    align-self: flex-end;\n    color: #fff;\n    max-width: 350px;\n    margin-bottom: 10px; }\n.section ul li div {\n      display: flex;\n      align-items: flex-start; }\n.section ul li p {\n      background-color: #5C5CFB;\n      border-radius: 5px;\n      padding: 10px;\n      margin-right: 10px;\n      position: relative; }\n.section ul li.answer__bot {\n      align-self: flex-start;\n      color: #555; }\n.section ul li.answer__bot .time {\n        text-align: left;\n        margin-left: 65px;\n        margin-right: 0; }\n.section ul li.answer__bot div {\n        flex-direction: row-reverse; }\n.section ul li.answer__bot p {\n        box-shadow: 0 5px 6px -6px #777;\n        margin-left: 10px;\n        background-color: #FFFFFF; }\n.user-photo {\n  width: 50px;\n  border-radius: 50%; }\n.chat-controll {\n  display: flex;\n  position: fixed;\n  z-index: 2;\n  background-color: #E2E5EE;\n  bottom: 0;\n  right: 10px;\n  width: calc(65% - 30px);\n  padding: 15px 0;\n  margin-top: auto; }\n.chat-controll button {\n    background-color: #009688;\n    border: none;\n    color: #fff;\n    font-size: 16px;\n    padding: 10px 25px;\n    border-radius: 3px;\n    cursor: pointer; }\n.input {\n  padding: 10px 15px;\n  border: none;\n  flex-grow: 1;\n  border-radius: 5px; }\n.aside ul {\n  display: flex;\n  flex-direction: column; }\n.aside ul button {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    outline: none;\n    height: 100px; }\n.aside ul button.active-link {\n      border: 1px solid transparent;\n      color: #fff;\n      background-color: #5C5CFB; }\n.aside ul button.active-link .last-message {\n        color: #fff; }\n.user-name {\n  text-align: left;\n  padding: 10px 0; }\n.last-message {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9FOlxcV0VCXFxTUERcXGdpdGxhYlxc0JLQtdGA0YHRgtC60LBcXGFuZ3VsYXItY2hhdC9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0RUFBWTtBQURaLDhFQUFBO0FBR0E7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR1o7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHYjtFQUVFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBRXpCLGtCQUFrQixFQUFBO0FBSXBCO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7QUFQckI7SUFTSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7QUFLdEI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFdBQVc7RUFFVCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxrQkFBa0I7RUFDcEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUVyQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFScEI7SUFVSSxvREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0FBWjdCO0lBZUksb0JBQW9CO0lBRXBCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7QUFuQnZCO01BcUJNLGFBQWE7TUFDYix1QkFBdUIsRUFBQTtBQXRCN0I7TUEwQk0seUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0FBOUJ4QjtNQWlDTSxzQkFBc0I7TUFDdEIsV0FBVyxFQUFBO0FBbENqQjtRQW9DTyxnQkFBZ0I7UUFDZixpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0FBdEN2QjtRQTBDUSwyQkFBMkIsRUFBQTtBQTFDbkM7UUE2Q1EsK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQix5QkFBeUIsRUFBQTtBQVFqQztFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFUbEI7SUFXSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7QUFLbkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQU1wQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtBQUZ4QjtJQUlJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhLEVBQUE7QUFSakI7TUFVTSw2QkFBNkI7TUFDN0IsV0FBVztNQUNYLHlCQUF5QixFQUFBO0FBWi9CO1FBY1EsV0FBVyxFQUFBO0FBT25CO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQUlqQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw1MDAsNzAwJyk7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tYWluIHtcbiAgLy8gcGFkZGluZzogMCAyNXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNlbnRlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sZWZ0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYXBwLWNoYXQtbmF2IHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLnNlY3Rpb24ge1xuICB3aWR0aDogNjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFNUVFO1xuICAvLyBwYWRkaW5nOiAwIDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFODJGODtcbiAgcGFkZGluZzogNXB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuXG4uY2hhdC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG51bDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkM3RDc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgdWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDk4QjE7XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzU1NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xufVxuXG4uc2VjdGlvbiB1bCB7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgfVxuICBsaSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1QzVDRkI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmLmFuc3dlcl9fYm90IHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIC50aW1lIHtcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICBkaXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNnB4IC02cHggIzc3NztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG4udXNlci1waG90byB7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGF0LWNvbnRyb2xsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFNUVFO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogY2FsYyg2NSUgLSAzMHB4KTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5cbi5pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG5cblxuLmFzaWRlIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAmLmFjdGl2ZS1saW5rIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM1Q0ZCO1xuICAgICAgLmxhc3QtbWVzc2FnZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi51c2VyLW5hbWUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cblxuLmxhc3QtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WEB\SPD\gitlab\Верстка\angular-chat\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map