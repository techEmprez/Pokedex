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

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* \\n@import url(\\\"https://fonts.googleapis.com/css2?family=Courgette&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\\\");\\n\\n:root {\\n  --text-color-1: #f0f9cf;\\n  --text-color-2: #23832b;\\n  --text-color-3: #9cb445;\\n  --bg-color: #f0f9cf;\\n  --popup-blur: 20px;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  background-color: var(--bg-color);\\n}\\n\\nnav .openMenu {\\n  display: flex;\\n  flex-direction: row-reverse;\\n  font-size: 1.5rem;\\n  margin: 20px;\\n  cursor: pointer;\\n  color: #236128;\\n}\\n\\nnav .nav-items {\\n  display: none;\\n  position: fixed;\\n  height: 100vh;\\n  flex-direction: column;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 10;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 1rem;\\n  list-style: none;\\n  background: rgba(235, 255, 161, 0.9);\\n}\\n\\nnav .closeMenu {\\n  font-size: 1.7rem;\\n}\\n\\nnav .nav-items .closeMenu {\\n  position: absolute;\\n  top: 20px;\\n  right: 20px;\\n}\\n\\n.item a {\\n  font-size: 1.5rem;\\n  cursor: pointer;\\n}\\n\\n.nav-link {\\n  text-decoration: none;\\n  position: relative;\\n  display: inline-block;\\n  margin: 0 0.75rem;\\n  font-size: 1rem;\\n  letter-spacing: 0.5px;\\n  color: rgb(49, 49, 49);\\n  font-weight: 500;\\n  opacity: 0.9;\\n  transition: 0.3s;\\n}\\n\\n.nav-link::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 50%;\\n  height: 7px;\\n  border-radius: 5px;\\n  background-color: var(--text-color-3);\\n  bottom: -10px;\\n  left: 0;\\n  z-index: -1;\\n  opacity: 0;\\n  transition: 0.3s;\\n}\\n\\n.nav-link:hover {\\n  color: var(--text-color-2);\\n}\\n\\n.nav-link:hover::after {\\n  width: 100%;\\n  opacity: 1;\\n}\\n\\n.tagline h2 {\\n  text-align: center;\\n  color: var(--text-color-2);\\n  font-size: 2.5rem;\\n  margin-top: 5%;\\n  letter-spacing: 2px;\\n  font-weight: 500;\\n  font-family: \\\"Courgette\\\", cursive;\\n}\\n\\n.recipe-cards {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 2rem;\\n}\\n\\n.card {\\n  position: relative;\\n  width: 300px;\\n  height: auto;\\n  margin: 40px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 1rem 1rem;\\n  border: 1px solid #fff;\\n  border-radius: 25px;\\n  background: #fff;\\n  box-shadow:\\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\\n}\\n\\n.card-img img {\\n  width: 100%;\\n  border-radius: 20px;\\n}\\n\\n.card-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: flex-start;\\n  width: 100%;\\n}\\n\\n.card-info h2,\\n#reservationPopup h2 {\\n  font-family: \\\"Patrick Hand\\\", cursive;\\n  color: var(--text-color-3);\\n  font-size: 2rem;\\n  letter-spacing: 2px;\\n}\\n\\n.card-info ul {\\n  display: flex;\\n  margin-top: 5%;\\n  justify-content: space-between;\\n  list-style: none;\\n}\\n\\n.comment-btn,\\n.reservation-btn {\\n  padding: 3% 7%;\\n  font-family: \\\"Patrick Hand\\\", cursive;\\n  font-size: 1.3rem;\\n  color: var(--text-color-1);\\n  background-color: var(--text-color-2);\\n  border-radius: 15px;\\n  border: 1px solid var(--text-color-2);\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n\\n.comment-btn:hover,\\n.reservation-btn:hover {\\n  background-color: #236128;\\n}\\n\\n.like-btn {\\n  background: none;\\n  border: none;\\n  color: var(--text-color-3);\\n  font-size: 1.7rem;\\n  margin-right: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n.like-btn .fa-heart {\\n  margin-right: 0.75rem;\\n}\\n\\n.comments-container {\\n  width: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.no-scroll {\\n  overflow: hidden;\\n}\\n\\n.footer {\\n  width: 100%;\\n  text-align: center;\\n  background-color: #c8e073;\\n  padding: 20px;\\n}\\n\\n.footer a {\\n  color: #2a7703;\\n  text-decoration: none;\\n  transition: 0.2s;\\n}\\n\\n.footer a:hover {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  transform: scale(1.2, 1.2);\\n}\\n\\nbody.popup-open {\\n  overflow: hidden;\\n  z-index: 95;\\n}\\n\\n#blur-bg {\\n  z-index: 99;\\n}\\n\\n#reservationPopup {\\n  --nav-line-height: 3px;\\n  --nav-line-color: rgb(88, 88, 88);\\n\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(255, 255, 255, 0.9);\\n  display: flex;\\n  justify-content: center;\\n  z-index: 100;\\n  overflow: auto;\\n  height: 100%;\\n}\\n\\n#reservationFormErr {\\n  color: red;\\n}\\n\\n#reservation__container {\\n  padding: 20px;\\n  border-radius: 20px;\\n  background-color: rgb(255, 255, 255);\\n  box-shadow:\\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\\n  margin: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n}\\n\\n#reservation__closeBtn {\\n  cursor: pointer;\\n  position: relative;\\n  width: 50px;\\n  height: 43px;\\n}\\n\\n#r__cBtn-lines {\\n  position: absolute;\\n  top: 12px;\\n  width: 80%;\\n  height: var(--nav-line-height);\\n  background-color: var(--nav-line-color);\\n  transform: rotate(45deg);\\n}\\n\\n#r__cBtn-lines::after {\\n  content: \\\"\\\";\\n  top: 0;\\n  transform: rotate(-90deg);\\n  position: absolute;\\n  width: 100%;\\n  height: var(--nav-line-height);\\n  background-color: var(--nav-line-color);\\n}\\n\\n#reservation__data-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#reservation__data-content img {\\n  width: 100%;\\n  border-radius: 20px;\\n}\\n\\n#reservation__data-content h2 {\\n  margin-bottom: 10px;\\n}\\n */\\n/* #reservation-p__container {\\n  max-width: 90vw;\\n\\n  height: fit-content;\\n\\n  height: -moz-fit-content;\\n} */\\n\\n/* \\n#resPopup--dish-description {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#resPopup--dish-description .rpdd-item p:first-child {\\n  font-weight: bold;\\n}\\n\\n#resPopup--dish-description .rpdd-item {\\n  margin-bottom: 1rem;\\n}\\n\\n#resPopup--dish-description a {\\n  text-decoration: none;//\\n  color: var(--text-color-2);\\n}\\n\\n#submit-reservation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-bottom: 1rem;\\n}\\n\\n#submit-reservation h3 {\\n  margin: 1rem 0;\\n}\\n\\n#submit-reservation button {\\n  min-width: 10rem;\\n}\\n\\n.resPopupFormItem input,\\n#submit-reservation button {\\n  border-radius: 20px;\\n  padding: 10px;\\n  border: 1px solid black;\\n}\\n\\n.resPopupFormItem input {\\n  margin-bottom: 0.7rem;\\n  text-align: center;\\n  min-width: 17rem;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  nav .openMenu {\\n    display: none;\\n  }\\n\\n  nav .nav-items .closeMenu {\\n    display: none;\\n    cursor: pointer;\\n  }\\n\\n  nav .nav-items {\\n    display: flex;\\n    flex-direction: row;\\n    height: auto;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 3rem;\\n    list-style: none;\\n    padding: 2%;\\n    background-color: #fff;\\n    margin: auto;\\n  }\\n\\n  .item a {\\n    font-size: 1rem;\\n  }\\n\\n  .tagline h2 {\\n    font-size: 3.5rem;\\n  }\\n\\n  footer {\\n    font-size: 1.2rem;\\n  }\\n\\n  #reservation-p__container {\\n    max-width: 50vw;\\n  }\\n\\n  #resPopup--dish-description {\\n    flex-direction: row;\\n    align-items: center;\\n  }\\n\\n  #resPopup--dish-description .rpdd-item {\\n    margin: 0 1rem;\\n    position: relative;\\n  }\\n\\n  #resPopup--dish-description .rpdd-item::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    border-right: 1px solid #ccc;\\n    height: 100%;\\n    top: 0;\\n    right: 0;\\n    margin-right: -1rem;\\n  }\\n\\n  #resPopup--dish-description .rpdd-item:last-of-type::after {\\n    content: \\\"\\\";\\n    border-right: 0;\\n  }\\n}\\n\\n.blur {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.bring {\\n  display: block;\\n}\\n\\n.comment-pop {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-items: center;\\n  margin: 10% 10% 25% 25%;\\n  z-index: 10;\\n  background-color: rgb(217, 213, 213);\\n  width: 50%;\\n  gap: 0.75rem;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.625rem;\\n}\\n\\n.x {\\n  margin-left: 87%;\\n  width: 30px;\\n  margin-top: 6%;\\n  background-color: red;\\n}\\n\\n.comments {\\n  display: flex;\\n  gap: 1.25rem;\\n}\\n\\n.coImage {\\n  width: 70%;\\n  margin-top: 1.875rem;\\n  border-radius: 5%;\\n}\\n\\n*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokedex/./src/style.css?./node_modules/css-loader/dist/cjs.js");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background-color: #283618;\\r\\n}\\r\\n​\\r\\n.main-container {\\r\\n    width: 85%;\\r\\n    height: 100%;\\r\\n    border: 1px solid white;\\r\\n    box-shadow: 5px ;\\r\\n    margin: 0 auto;\\r\\n    background-color: #606c38;\\r\\n}\\r\\n​\\r\\n​\\r\\n.navbar-nav {\\r\\n    font-size: 20px;\\r\\n    font-weight: 200;\\r\\n    font-family: 'Times New Roman', Times, serif;\\r\\n}\\r\\n​\\r\\n.nav-item {\\r\\n    color: #6c757d;\\r\\n    font-style: normal;\\r\\n    text-decoration: none;\\r\\n}\\r\\n​\\r\\n.nav-item:hover {\\r\\n  border-style: double;\\r\\n  background-color: #283618;\\r\\n  color: #fff;\\r\\n}\\r\\n​\\r\\n.navbar-collapse ul li {\\r\\n    padding-top: 0px;\\r\\n    padding-bottom: 0px;\\r\\n}\\r\\n​\\r\\n.navbar-collapse ul li a {\\r\\n    padding-top: 0px;\\r\\n    padding-bottom: 0px;\\r\\n}\\r\\n​\\r\\n.navbar-brand img {\\r\\n    width: 200px;\\r\\n    height: 40px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokedex/./src/style.css?./node_modules/css-loader/dist/cjs.js");
>>>>>>> home-page

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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_mealsApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mealsApi.js */ \"./src/modules/mealsApi.js\");\n\n\n\nconst dataLoaded = document.querySelector('#apiDataLoaded');\n\nconst meals = await (0,_modules_mealsApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconsole.log(meals);\nmeals.forEach((meal) => {\n  dataLoaded.innerHTML += `<div class=\"meal\">\n                              <img src=\"${meal.strMealThumb}\" >\n                              <h2>${meal.strMeal}</h2>\n                              <button>Comments</button>\n                              <button>Reservations</button>\n                              </div>`;\n});\n\n\n\n// renderMeals();\n\n// displayCards();\n\n// const renderMeals = async () => {\n//   const meals = await getMeals();\n//   let loadDom = '';\n//   meals.forEach((meal) => {\n//     const htmlSegment = `<div class=\"meal\">\n//                             <img src=\"${meal.strMealThumb}\" >\n//                             <h2>${meal.strMeal}</h2>\n//                             <button>Comments</button>\n//                             <button>Reservations</button>\n//                         </div>`;\n\n//     loadDom += htmlSegment;\n//     document.querySelector('#apiDataLoaded').innerHTML = loadDom;\n//   });\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://pokedex/./src/index.js?");

/***/ }),

/***/ "./src/modules/mealsApi.js":
/*!*********************************!*\
  !*** ./src/modules/mealsApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Fetch MealDB API\nconst url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\nconst getMeals = async () => {\n  const response = await fetch(url);\n  const data = await response.json();\n\n  console.log(data);\n  return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n  // for (let i = 0; i < 20; i += 1) {\n  //   data.meals[i].idMeal = i;\n  //   const file = data.meals;\n  //   const mealsArray = file.filter((Objects) => Objects.idMeal <= 11);\n  //   let html = '';\n  //   mealsArray.forEach((meal) => {\n  //     const htmlSegment = `<div class=\"meal\">\n  //                             <img src=\"${meal.strMealThumb}\" >\n  //                             <h2>${meal.strMeal}</h2>\n  //                             <button>Comments</button>\n  //                             <button>Reservations</button>\n  //                             </div>`;\n\n  //     html += htmlSegment;\n  //     document.querySelector('#apiDataLoaded').innerHTML = html;\n  //   });\n  // }\n\n//# sourceURL=webpack://pokedex/./src/modules/mealsApi.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n//# sourceURL=webpack://pokedex/./src/index.js?");
>>>>>>> home-page

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
<<<<<<< HEAD
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
=======
>>>>>>> home-page
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