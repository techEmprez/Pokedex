/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #283618;\\n}\\n\\n​ .main-container {\\n  width: 85%;\\n  height: 100%;\\n  border: 1px solid white;\\n  box-shadow: 5px;\\n  margin: 0 auto;\\n  background-color: #606c38;\\n}\\n\\n​ ​ .navbar-nav {\\n  font-size: 20px;\\n  font-weight: 200;\\n}\\n\\n​ .nav-item {\\n  color: #6c757d;\\n  font-style: normal;\\n  text-decoration: none;\\n}\\n\\n​ .nav-item:hover {\\n  border-style: double;\\n  background-color: #283618;\\n  color: #fff;\\n}\\n\\n​ .navbar-collapse ul li {\\n  padding-top: 0;\\n  padding-bottom: 0;\\n}\\n\\n​ .navbar-collapse ul li a {\\n  padding-top: 0;\\n  padding-bottom: 0;\\n}\\n\\n​ .navbar-brand img {\\n  width: 200px;\\n  height: 40px;\\n}\\n\\np {\\n  display: none;\\n}\\n\\n/* Reservation modal style begins here */\\n.reservation-btn {\\n  padding: 0.3em 0.9em;\\n  font-size: 1rem;\\n  margin: 0.3em;\\n  border-radius: 5px;\\n  transition: 0.3s;\\n}\\n\\nbody.popup-open {\\n  overflow: hidden;\\n  z-index: 95;\\n}\\n\\n#reservationPopup {\\n  --nav-line-height: 3px;\\n  --nav-line-color: rgb(88, 88, 88);\\n\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  z-index: 100;\\n  overflow: auto;\\n  height: 100%;\\n}\\n\\n#reservation__container > #reservation__data-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#reservation__container > #reservation__data-content img {\\n  width: 30rem;\\n  border-radius: 10px;\\n}\\n\\n#reservation__data-content h2 {\\n  margin-bottom: 10px;\\n}\\n\\n#reservationPopup h2 {\\n  font-family: \\\"Patrick Hand\\\", cursive;\\n  color: var(--text-color-3);\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n}\\n\\n#reservationPopup {\\n  --nav-line-height: 3px;\\n  --nav-line-color: rgb(117, 116, 116);\\n\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: white;\\n  display: flex;\\n  justify-content: center;\\n  z-index: 100;\\n  overflow: auto;\\n  height: 100%;\\n  gap: 5px;\\n}\\n\\n#reservation-p__container {\\n  max-width: 90vw;\\n\\n  /* stylelint-disable-next-line */\\n  height: fit-content;\\n\\n  /* stylelint-disable-next-line */\\n  height: -moz-fit-content;\\n}\\n\\n#reservation__container {\\n  padding: 10px;\\n  border-radius: 10px;\\n  background-color: white;\\n  width: 100%;\\n  height: auto;\\n  box-shadow:\\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\\n  margin: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n}\\n\\n#reservation__closeBtn {\\n  cursor: pointer;\\n  position: relative;\\n  width: 2rem;\\n  height: 2rem;\\n  margin: 0.3rem;\\n  padding: 0.3rem;\\n}\\n\\n#r__cBtn-lines {\\n  position: absolute;\\n  top: 12px;\\n  width: 80%;\\n  height: var(--nav-line-height);\\n  background-color: var(--nav-line-color);\\n  transform: rotate(45deg);\\n}\\n\\n#r__cBtn-lines::after {\\n  content: \\\"\\\";\\n  top: 0;\\n  transform: rotate(-90deg);\\n  position: absolute;\\n  width: 100%;\\n  height: var(--nav-line-height);\\n  background-color: var(--nav-line-color);\\n}\\n\\n#resPopup--dish-description {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#resPopup--dish-description .rpdd-item p:first-child {\\n  font-weight: bold;\\n}\\n\\n#resPopup--dish-description .rpdd-item {\\n  margin-bottom: 1rem;\\n}\\n\\n#resPopup--dish-description a {\\n  text-decoration: none;\\n  color: var(--text-color-2);\\n}\\n\\n#submit-reservation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 1rem;\\n  height: auto;\\n}\\n\\n#submit-reservation h3 {\\n  margin: 1rem 0;\\n}\\n\\n#submit-reservation button {\\n  min-width: 10rem;\\n}\\n\\n.resPopupFormItem input,\\n#submit-reservation button {\\n  border-radius: 20px;\\n  padding: 10px;\\n  border: 1px solid black;\\n}\\n\\n.resPopupFormItem input {\\n  margin-bottom: 0.7rem;\\n  text-align: center;\\n  min-width: 17rem;\\n}\\n/* Reservation modal style ends here */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokedex/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokedex/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokedex/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get.js */ \"./src/modules/get.js\");\n/* harmony import */ var _modules_popupReservation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupReservation.js */ \"./src/modules/popupReservation.js\");\n\n\n\n\n// calling imported Reservation-class\nconst reservationBtn = new _modules_popupReservation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n(0,_modules_get_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\n  const listOfMeals = data.meals;\n  listOfMeals.forEach((item) => {\n    const meal = document.createElement('div');\n    meal.classList.add('meal');\n    meal.innerHTML = `\n      <h2>${item.strMeal}</h2>\n      <img src=\"${item.strMealThumb}\" alt=\"${item.strMeal}\">\n      <p>${item.strInstructions}</p>\n      <button type=\"button\" class=\"comments-btn1\">Comments</button>\n      <button type=\"button\" class=\"reservation-btn\" data-name='${item.strMeal}'>Reservations</button>\n    `;\n    document.querySelector('.items-container').appendChild(meal);\n    // Initiating reservation modal on button click button click\n    reservationBtn.init();\n  });\n});\n\n\n//# sourceURL=webpack://pokedex/./src/index.js?");

/***/ }),

/***/ "./src/modules/addReservation.js":
/*!***************************************!*\
  !*** ./src/modules/addReservation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AddReservation {\n  link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lfDXQ5tbTGkCxzSx1rS7/reservations';\n\n  renderForm = () => `<form id='submit-reservation'>\n  <h3>Add a reservation</h3>\n  <div class=\"resPopupFormItem\">\n  <input type='text' required name=\"name\" placeholder='Your name'>\n  </div>\n  <div class=\"resPopupFormItem\">\n  <input type='text' required name=\"res-popup-start-date\" placeholder='Start date' onfocus=\"(this.type = 'date')\">\n  </div>\n  <div class=\"resPopupFormItem\">\n  <input type='text' required name=\"res-popup-end-date\" placeholder='End date' onfocus=\"(this.type = 'date')\">\n  </div>\n  <button type='submit'>Reserve</button>\n  </form>\n  <h3 class='reservations-list-header'>\n  Reservations\n  <span id=\"reservations-counter\"></span>\n  </h3>\n  <div id='reservations-list'>\n  </div>\n  `;\n\n  renderReservations = (data) => {\n    const list = document.getElementById('reservations-list');\n    let html = `\n    `;\n\n    data.reverse().forEach((el) => {\n      html += `\n      <div class=\"reservation-list-item\">\n        <strong>${el.date_start}</strong> - <strong>${el.date_end}</strong> by <strong>${el.username}</strong>\n      </div>\n        `;\n    });\n    list.insertAdjacentHTML('afterbegin', html);\n  };\n\n  async reservationsCounter(id) {\n    const counter = document.getElementById('reservations-counter');\n\n    try {\n      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });\n\n      const data = await response.json();\n      counter.textContent = `(${data.length})`;\n      return data;\n    } catch (e) {\n      return null;\n    }\n  }\n\n  async getReservations(id) {\n    try {\n      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });\n      if (!response.ok) {\n        throw new Error(response.statusText);\n      } else {\n        const data = await response.json();\n        this.renderReservations(data);\n        this.reservationsCounter(id);\n      }\n    } catch (e) {\n      throw Error(e);\n    }\n  }\n\n  invalidFormData = (form) => {\n    if (!document.getElementById('reservationFormErr')) {\n      form.insertAdjacentHTML('afterend', `<div id=\"reservationFormErr\">Invalid values</div>\n      `);\n    }\n  };\n\n  async sendData({\n    id, name, start, end,\n  }) {\n    const dataJson = {\n      item_id: id,\n      username: name,\n      date_start: start,\n      date_end: end,\n    };\n\n    try {\n      const response = await fetch(`${this.link}`, {\n        method: 'POST',\n        body: JSON.stringify(dataJson),\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json',\n        },\n      });\n      if (response.status === 201) {\n        this.renderReservations([dataJson]);\n        this.reservationsCounter(id);\n      }\n    } catch (e) {\n      throw Error(e);\n    }\n  }\n\n  submitForm(data, formElement, id) {\n    const name = data.get('name');\n    const start = data.get('res-popup-start-date');\n    const end = data.get('res-popup-end-date');\n\n    if (!this.validator.validateText(name)\n      || !this.validator.validateDate(start)\n      || !this.validator.validateDate(end)) {\n      this.invalidFormData(formElement);\n      return false;\n    }\n\n    const formErr = document.getElementById('reservationFormErr');\n    if (formErr !== null) {\n      formErr.remove();\n    }\n\n    this.sendData({\n      id, name, start, end,\n    });\n\n    return 1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddReservation);\n\n\n//# sourceURL=webpack://pokedex/./src/modules/addReservation.js?");

/***/ }),

/***/ "./src/modules/get.js":
/*!****************************!*\
  !*** ./src/modules/get.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = async () => {\n  let arr = [];\n  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';\n\n  await fetch(url).then((response) => response.json()).then((data) => {\n    arr = data;\n  });\n  return arr;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://pokedex/./src/modules/get.js?");

/***/ }),

/***/ "./src/modules/popupReservation.js":
/*!*****************************************!*\
  !*** ./src/modules/popupReservation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addReservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addReservation.js */ \"./src/modules/addReservation.js\");\n\n\nclass Reservations {\n  constructor() {\n    this.AddShowRes = new _addReservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  async apidata(dishName) {\n    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);\n\n    try {\n      const data = await response.json();\n      this.renderPopup(data);\n    } catch (e) {\n      return null;\n    }\n    return 1;\n  }\n\n  removePopup = () => {\n    const popup = document.getElementById('reservationPopup');\n    const closeBtn = document.getElementById('reservation__closeBtn');\n\n    popup.addEventListener('click', (e) => {\n      if (e.target.id === 'reservationPopup') popup.remove();\n      document.body.classList.remove('popup-open');\n    });\n\n    closeBtn.addEventListener('click', () => {\n      popup.remove();\n      document.body.classList.remove('popup-open');\n    });\n  };\n\n  renderPopup(data) {\n    const res = data.meals[0];\n\n    const id = res.idMeal;\n    const thumb = res.strMealThumb;\n    const name = res.strMeal;\n    const category = res.strCategory;\n    const area = res.strArea;\n    const recipie = res.strSource;\n\n    const popup = document.getElementById('reservation__data-content');\n    this.removePopup();\n\n    let html = `\n    <img src='${thumb}' alt=\"Image of ${name}\">\n    <h2>${name}</h2>\n    <div id='resPopup--dish-description'>\n      <div class='rpdd-item'>\n        <p>Category:</p>\n        <p>${category}</p>\n      </div>\n      <div class='rpdd-item'>\n        <p>Origin:</p>\n        <p>${area}</p>\n      </div>\n      <div class='rpdd-item'>\n        <a href='${recipie}' target=\"_blank\">Recipie</a>\n        <i class=\"fa-solid fa-arrow-up-right-from-square\"></i>\n      </div>\n    </div>\n    `;\n    html += this.AddShowRes.renderForm();\n    this.AddShowRes.getReservations(id);\n    popup.insertAdjacentHTML('afterbegin', html);\n\n    const form = document.getElementById('submit-reservation');\n    form.addEventListener('submit', (e) => {\n      const formData = new FormData(e.target);\n\n      e.preventDefault();\n      this.AddShowRes.submitForm(formData, e.target, id);\n      form.reset();\n    });\n  }\n\n  openPopup = (e) => {\n    document.body.classList.add('popup-open');\n    document.body.insertAdjacentHTML('afterbegin', `\n    <div id='reservationPopup'>\n      <div id='reservation-p__container'>\n        <div id='reservation__container'>\n            <div id='reservation__closeBtn'>\n              <div id='r__cBtn-lines'></div>\n            </div>\n            <div id='reservation__data-content'></div>\n          </div>\n      </div>\n    </div>\n    `);\n\n    this.apidata(e.target.dataset.name);\n    this.removePopup();\n  };\n\n  init = () => {\n    const reservationBtn = document.querySelectorAll('.reservation-btn');\n\n    reservationBtn.forEach((el) => {\n      el.addEventListener('click', this.openPopup);\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reservations);\n\n\n//# sourceURL=webpack://pokedex/./src/modules/popupReservation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;