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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/init.js */ \"./src/init.js\");\n/* harmony import */ var _src_send_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/send.js */ \"./src/send.js\");\n/* harmony import */ var _src_reply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/reply.js */ \"./src/reply.js\");\n/* harmony import */ var _src_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/load.js */ \"./src/load.js\");\n/* harmony import */ var _src_oninput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/oninput.js */ \"./src/oninput.js\");\n/* harmony import */ var _src_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/delete.js */ \"./src/delete.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.detalk = {\r\n    init: _src_init_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n    send: _src_send_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    reply: _src_reply_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    load: _src_load_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    oninput: _src_oninput_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    delete: _src_delete_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n};\n\n//# sourceURL=webpack://detalk_static/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pack/comment.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pack/comment.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".detalk-container .input-data {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: row;\\r\\n}\\r\\n.detalk-container .avatar img {\\r\\n\\tborder-radius: 6px;\\r\\n\\tflex-shrink: 0;\\r\\n\\theight: 2.5rem;\\r\\n\\twidth: 2.5rem;\\r\\n\\toverflow: hidden;\\r\\n\\ttext-align: center;\\r\\n\\tborder-radius: 5px;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.detalk-container .input-data .input-area {\\r\\n\\tflex: 1;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tmargin-left: 0.5rem;\\r\\n}\\r\\n\\r\\n.detalk-container .border_error {\\r\\n\\tborder: 1px solid red!important;\\r\\n}\\r\\n.detalk-container .input-data .input-area input {\\r\\n\\tmargin-bottom: 0.5rem;\\r\\n\\tborder-top-left-radius: 0;\\r\\n\\tborder-bottom-left-radius: 0;\\r\\n\\theight: 32px;\\r\\n\\tline-height: 32px;\\r\\n\\tcolor: currentColor;\\r\\n\\tbackground-color: transparent;\\r\\n\\tborder-color: rgba(144, 147, 153, 0.31);\\r\\n\\t-webkit-appearance: none;\\r\\n\\tbackground-color: #fff;\\r\\n\\tborder-radius: 4px;\\r\\n\\tborder: 1px solid #dcdfe6;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tcolor: rgba(0, 0, 0, 0.8);\\r\\n\\tdisplay: inline-block;\\r\\n\\theight: 40px;\\r\\n\\tline-height: 40px;\\r\\n\\toutline: 0;\\r\\n\\tpadding: 0 15px;\\r\\n\\ttransition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\\r\\n\\twidth: 100%;\\r\\n    font-family: monospace;\\r\\n}\\r\\n\\r\\n/* @media screen and (min-width: 568px) {\\r\\n    .detalk-container .input-data .input-area input {\\r\\n        width: 32%!important;\\r\\n    }\\r\\n    .detalk-container .input-data .input-area {\\r\\n        display: inline;\\r\\n    }\\r\\n    .detalk-container .input-data .input-area .mgr-2p {\\r\\n        margin-right: 1.5%;\\r\\n    }\\r\\n} */\\r\\n\\r\\n.detalk-container ::-webkit-scrollbar {\\r\\n    width: 1px;\\r\\n    height: 3px;\\r\\n}\\r\\n\\r\\n.detalk-container ::-webkit-scrollbar-thumb {\\r\\n    border-radius: 2px;\\r\\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\\r\\n    background: rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.detalk-container ::-webkit-scrollbar-track {\\r\\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\\r\\n    border-radius: 0;\\r\\n    background: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n.detalk-container .reply {\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n.detalk-container .input-data .input-area textarea {\\r\\n    margin-bottom: 0.5rem;\\r\\n\\tborder-top-left-radius: 0;\\r\\n\\tborder-bottom-left-radius: 0;\\r\\n\\theight: 32px;\\r\\n\\tcolor: currentColor;\\r\\n\\tbackground-color: transparent;\\r\\n\\tborder-color: rgba(144, 147, 153, 0.31);\\r\\n\\t-webkit-appearance: none;\\r\\n\\tbackground-color: #fff;\\r\\n\\tborder-radius: 4px;\\r\\n\\tborder: 1px solid #dcdfe6;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tcolor: rgba(0, 0, 0, 0.8);\\r\\n\\tdisplay: inline-block;\\r\\n\\theight: 40px;\\r\\n\\tline-height: 40px;\\r\\n\\toutline: 0;\\r\\n\\tpadding: 5px 15px;\\r\\n\\ttransition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\\r\\n\\twidth: 100%;\\r\\n    resize: vertical;\\r\\n    font-family: monospace;\\r\\n    line-height: 1.2rem;\\r\\n}\\r\\n\\r\\n\\r\\n.detalk-container .action-btn-group {\\r\\n\\tposition: relative;\\r\\n\\tmargin-top: 0;\\r\\n\\tmargin-bottom: 1rem;\\r\\n\\tmargin-left: 3.5rem;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: flex-end;\\r\\n\\tdisplay: flex;\\r\\n}\\r\\n\\r\\n.detalk-container .action-btn-group .action-btn .sec-btn {\\r\\n\\tbackground-color: rgba(144, 147, 153, 0.063);\\r\\n\\tborder-color: rgba(144, 147, 153, 0.31);\\r\\n    border-radius: 6px;\\r\\n}\\r\\n\\r\\n.detalk-container .action-btn-group .action-btn .word-limit {\\r\\n    text-align: end;\\r\\n    opacity: 0.7;\\r\\n    font-size: 0.9rem;\\r\\n    margin-right: 0.4rem;\\r\\n}\\r\\n.detalk-container .action-btn-group .action-btn .fst-btn.disabled {\\r\\n\\tcolor: rgba(255, 255, 255, 0.8);\\r\\n\\tbackground-color: rgba(64, 158, 255, 0.5);\\r\\n\\tborder-color: transparent;\\r\\n    border-radius: 6px;\\r\\n    cursor: not-allowed;\\r\\n}\\r\\n\\r\\n.detalk-container .action-btn-group .action-btn .fst-btn.enabled {\\r\\n\\tcolor: rgba(255, 255, 255, 1);\\r\\n\\tbackground-color: rgba(64, 158, 255, 1);\\r\\n\\tborder-color: transparent;\\r\\n    border-radius: 6px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.detalk-container .cm-btn {\\r\\n\\tpadding: 9px 15px;\\r\\n\\tfont-size: 12px;\\r\\n\\tborder-radius: 3px;\\r\\n\\tdisplay: inline-block;\\r\\n\\tline-height: 1;\\r\\n\\twhite-space: nowrap;\\r\\n\\tcursor: pointer;\\r\\n\\tbackground: #fff;\\r\\n\\tborder: 1px solid #dcdfe6;\\r\\n\\tcolor: #606266;\\r\\n\\t-webkit-appearance: none;\\r\\n\\ttext-align: center;\\r\\n\\t-webkit-box-sizing: border-box;\\r\\n\\tbox-sizing: border-box;\\r\\n\\toutline: 0;\\r\\n\\tmargin: 0;\\r\\n\\t-webkit-transition: 0.1s;\\r\\n\\ttransition: 0.1s;\\r\\n\\tfont-weight: 500;\\r\\n    user-select: none;\\r\\n\\tpadding: 12px 20px;\\r\\n\\tfont-size: 14px;\\r\\n\\tborder-radius: 4px;\\r\\n}\\r\\n\\r\\n.detalk-container .mr-cmt {\\r\\n\\tmargin-top: 1rem;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: row;\\r\\n\\tword-break: break-all;\\r\\n    padding: 10px;\\r\\n    border-radius: 6px;\\r\\n    transition: all .3s;\\r\\n}\\r\\n.detalk-container .mr-cmt:hover {\\r\\n    background: rgba(0, 0, 0, 0.05);\\r\\n    cursor: pointer;\\r\\n}\\r\\n.detalk-container .hover_show {\\r\\n\\topacity: 0;\\r\\n\\ttransition: all .3s;\\r\\n}\\r\\n.detalk-container .mr-cmt:hover .hover_show {\\r\\n    opacity: 0.6;\\r\\n}\\r\\n\\r\\n.detalk-container .mr-cmt .cmt-main {\\r\\n\\tmargin-left: 1rem;\\r\\n\\tflex: 1;\\r\\n\\twidth: 0;\\r\\n}\\r\\n\\r\\n.detalk-container .mr-cmt .cmt-main .cmt-data {\\r\\n\\tflex: 1;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: row;\\r\\n\\tjustify-content: space-between;\\r\\n    user-select: none;\\r\\n}\\r\\n\\r\\n.detalk-container .mr-cmt .cmt-main .cmt-content {\\r\\n    margin-top: 0.3rem;\\r\\n\\topacity: 0.8;\\r\\n}\\r\\n\\r\\n.comment-container._detalk_loading_container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-top: 45px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://detalk_static/./src/pack/comment.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://detalk_static/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://detalk_static/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/pack/comment.css":
/*!******************************!*\
  !*** ./src/pack/comment.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./comment.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pack/comment.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_comment_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://detalk_static/./src/pack/comment.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://detalk_static/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _delete)\n/* harmony export */ });\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\r\n\r\nasync function _delete(rpid, auth = localStorage.getItem(\"DETALK_AUTH\")) {\r\n    if (!rpid) return false;\r\n    if (!confirm(\"即将删除 ID: \"+rpid+\" 评论，是否继续？\")) return false;\r\n    let url = window.DETALK_INIT.url;\r\n    let path = window.DETALK_INIT.path;\r\n    let resp = await fetch(url + `/_api/comment?id=${path}&rpid=${rpid}&auth=${auth}`, {\r\n        method: \"DELETE\",\r\n    }).then(res => res.json());\r\n    if (resp.success) {\r\n        alert(resp.message);\r\n        (0,_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, path);\r\n    } else {\r\n        alert(resp.error);\r\n    }\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/delete.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _pack_comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pack/comment.js */ \"./src/pack/comment.js\");\n/* harmony import */ var _pack_comment_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pack/comment.css */ \"./src/pack/comment.css\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _lib_getUUID_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getUUID.js */ \"./src/lib/getUUID.js\");\n\r\n\r\n\r\n\r\nasync function init(options = {}) {\r\n    // init detalk\r\n    if (!options.url) {\r\n        throw new Error('Backend URL is required!');\r\n    }\r\n    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;\r\n    let el = document.querySelector(options.el);\r\n    let path = options.path;\r\n    if (!el) {\r\n        throw new Error('Element is required!');\r\n    }\r\n    if (!path) {\r\n        path = window.DETALK_PATH || window.location.pathname;\r\n    }\r\n\r\n    window.DETALK_INIT = {\r\n        url,\r\n        el: options.el,\r\n        path,\r\n    };\r\n\r\n    el.innerHTML = _pack_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    el.classList.add('detalk-container');\r\n\r\n    // get comment list\r\n\r\n    (0,_load_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, path);\r\n\r\n\r\n    if (!localStorage.getItem(\"DETALK_AUTH\")) {\r\n        localStorage.setItem(\"DETALK_AUTH\", (0,_lib_getUUID_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n    }\r\n    document.getElementById(\"detalk_input_nickname\").value = localStorage.getItem(\"DETALK_NICKNAME\") || \"\";\r\n    document.getElementById(\"detalk_input_email\").value = localStorage.getItem(\"DETALK_EMAIL\") || \"\";\r\n    document.getElementById(\"detalk_input_link\").value = localStorage.getItem(\"DETALK_LINK\") || \"\";\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://detalk_static/./src/init.js?");

/***/ }),

/***/ "./src/lib/getUUID.js":
/*!****************************!*\
  !*** ./src/lib/getUUID.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUuid)\n/* harmony export */ });\nfunction getUuid() {\r\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\r\n    var r = (Math.random() * 16) | 0,\r\n        v = c == 'x' ? r : (r & 0x3) | 0x8;\r\n    return v.toString(16);\r\n    });\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/lib/getUUID.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _pack_detail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pack/detail.js */ \"./src/pack/detail.js\");\n\r\nasync function load(url, path) {\r\n    document.getElementById(\"_detalk_detail\").classList.add(\"_detalk_loading_container\");\r\n    document.getElementById(\"_detalk_detail\").innerHTML =  `<svg width=\"30px\" height=\"30px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <g>\r\n        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 33 33;270 33 33\" begin=\"0s\" dur=\"1.4s\" fill=\"freeze\" repeatCount=\"indefinite\"></animateTransform>\r\n        <circle fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\" stroke-dasharray=\"187\" stroke-dashoffset=\"610\">\r\n            <animate attributeName=\"stroke\" values=\"#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4\" begin=\"0s\" dur=\"5.6s\" fill=\"freeze\" repeatCount=\"indefinite\"></animate>\r\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 33 33;135 33 33;450 33 33\" begin=\"0s\" dur=\"1.4s\" fill=\"freeze\" repeatCount=\"indefinite\"></animateTransform>\r\n            <animate attributeName=\"stroke-dashoffset\" values=\"187;46.75;187\" begin=\"0s\" dur=\"1.4s\" fill=\"freeze\" repeatCount=\"indefinite\"></animate>\r\n        </circle>\r\n    </g>\r\n    </svg>`;\r\n    let list = await fetch(url+\"/_api/comment?id=\"+path, {\r\n        method: \"GET\"\r\n    }).then(res => res.json());\r\n\r\n\r\n    list = list.value;\r\n\r\n    let count = 0;\r\n    let render_list = [];\r\n    for (let i in list) {\r\n        if (!list[i].deleted) {\r\n            count++;\r\n            render_list.push(list[i]);\r\n            if (list[i].replies) {\r\n                for (let j in list[i].replies) {\r\n                    if (!list[i].replies[j].deleted) {\r\n                        count++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    document.getElementById(\"_detalk_detail\").innerHTML = (0,_pack_detail_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(count, render_list);\r\n    document.getElementById(\"_detalk_detail\").classList.remove(\"_detalk_loading_container\");\r\n}\r\n\n\n//# sourceURL=webpack://detalk_static/./src/load.js?");

/***/ }),

/***/ "./src/oninput.js":
/*!************************!*\
  !*** ./src/oninput.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ oninput)\n/* harmony export */ });\nfunction oninput(el, type) {\r\n    if (type == 'content') {\r\n        document.getElementById(\"_detalk_word_limit\").innerText = el.value.length;\r\n        if (el.value.length > 0 && el.value.length < 500) {\r\n            el.classList.remove(\"border_error\");\r\n            window.TEMP_CONTENT = true;\r\n        } else {\r\n            el.classList.add(\"border_error\");\r\n        }\r\n    }\r\n    if (type == 'nickname') {\r\n        document.getElementById(\"_detalk_word_limit\").innerText = el.value.length;\r\n        if (el.value.length > 0 && el.value.length < 15) {\r\n            el.classList.remove(\"border_error\");\r\n            window.TEMP_NICKNAME = true;\r\n        } else {\r\n            el.classList.add(\"border_error\");\r\n        }\r\n    }\r\n    if (type == 'email') {\r\n        if (!el.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/) || el.value.length > 50) {\r\n            el.classList.add(\"border_error\");\r\n        } else {\r\n            el.classList.remove(\"border_error\");\r\n            window.TEMP_EMAIL = true;\r\n        }\r\n    }\r\n    if (type == 'link') {\r\n        if (el.value.length > 100) {\r\n            el.classList.add(\"border_error\");\r\n        } else {\r\n            el.classList.remove(\"border_error\");\r\n        }\r\n    }\r\n    if (window.TEMP_NICKNAME && window.TEMP_EMAIL && window.TEMP_CONTENT) {\r\n        document.getElementById(\"_detalk_submit\").classList.remove(\"disabled\");\r\n        document.getElementById(\"_detalk_submit\").classList.add(\"enabled\");\r\n    } else {\r\n        document.getElementById(\"_detalk_submit\").classList.remove(\"enabled\");\r\n        document.getElementById(\"_detalk_submit\").classList.add(\"disabled\");\r\n    }\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/oninput.js?");

/***/ }),

/***/ "./src/pack/comment.js":
/*!*****************************!*\
  !*** ./src/pack/comment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`\r\n<div class=\"input-data\">\r\n    <div class=\"avatar\">\r\n        <img src=\"https://cravatar.cn/avatar/45ead422ade450468bc1d3c8fb543a4?d=mp\" class=\"avatar-img\">\r\n    </div>\r\n    <div class=\"input-area\">\r\n        <div class=\"inline-input\">\r\n            <input id=\"detalk_input_nickname\" placeholder=\"昵称\" type=\"text\" class=\"mgr-2p\" oninput=\"detalk.oninput(this, 'nickname')\">\r\n            <input id=\"detalk_input_email\" placeholder=\"邮箱\" type=\"email\" class=\"mgr-2p\" oninput=\"detalk.oninput(this, 'email')\">\r\n            <input id=\"detalk_input_link\" placeholder=\"网址\" type=\"url\" oninput=\"detalk.oninput(this, 'link')\">\r\n        </div>\r\n        <div class=\"comment-text\">\r\n            <textarea oninput=\"detalk.oninput(this, 'content')\" autocomplete=\"off\" placeholder=\"\" maxlength=\"500\" style=\"min-height: 75px; height: 75px;\" id=\"detalk_input_content\"></textarea>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"action-btn-group\">\r\n    <div class=\"action-btn\">\r\n        <p class=\"word-limit\"><span id=\"_detalk_word_limit\">0</span> / 500</p>\r\n        <button class=\"sec-btn cm-btn\" id=\"_detalk_preview\">预览</button>\r\n        <button onclick=\"detalk.send();\" class=\"fst-btn cm-btn disabled\" id=\"_detalk_submit\">发送</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"comment-container _detalk_loading_container\" id=\"_detalk_detail\">\r\n</div>\r\n`);\n\n//# sourceURL=webpack://detalk_static/./src/pack/comment.js?");

/***/ }),

/***/ "./src/pack/detail.js":
/*!****************************!*\
  !*** ./src/pack/detail.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gen_detail)\n/* harmony export */ });\nfunction gen_detail(count, list) {\r\n    let list_content = \"\";\r\n    for (let i in list) {\r\n        let reply_content = \"\";\r\n\r\n        if (list[i].replies) {\r\n            reply_content += \"<hr/>\";\r\n            for (let j of list[i].replies) {\r\n                if (!j.deleted) {\r\n                    reply_content += `\r\n                    <div class=\"reply\">\r\n                        <div class=\"avatar\">\r\n                            <img src=\"${j.avatar || \"https://cravatar.cn/avatar/?d=mp\"}\" class=\"avatar-img\">\r\n                        </div>\r\n                        <div class=\"cmt-main\" style=\"display: inline;\">\r\n                            <div class=\"cmt-data\">\r\n                                <span><strong>${j.nickname}</strong></span>\r\n                                <span class=\"hover_show\" onclick=\"detalk.delete('${list[i].rpid}')\">删除</span>\r\n                            </div>\r\n                            <div class=\"cmt-content\">\r\n                                ${j.content}\r\n                            </div>\r\n                        </div>\r\n                    </div>`;\r\n                }\r\n            }\r\n        }\r\n        list_content += `\r\n            <div class=\"mr-cmt\" onclick=\"detalk.reply('${list[i].rpid}', '${list[i].nickname}')\">\r\n                <div class=\"avatar\">\r\n                    <img src=\"${\"https://cravatar.cn/avatar/\"+list[i].email+\"?d=mp\" || 0}\" class=\"avatar-img\">\r\n                </div>\r\n                <div class=\"cmt-main\">\r\n                    <div class=\"cmt-data\">\r\n                        <span><strong>${list[i].nickname}</strong></span>\r\n                        <span class=\"hover_show\" onclick=\"detalk.delete('${list[i].rpid}')\">删除</span>\r\n                    </div>\r\n                    <div class=\"cmt-content\">\r\n                        ${list[i].content}\r\n                    </div>\r\n                    <div class=\"replies\">\r\n                        ${reply_content}\r\n                    </div>\r\n                </div>\r\n            </div>`;\r\n    }\r\n    return `\r\n    <div class=\"comment-title\">\r\n        <h3>共 ${count} 条评论</h3>\r\n    </div>\r\n    <div class=\"comment-list\">\r\n        ${list_content}\r\n    </div>\r\n    `;\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/pack/detail.js?");

/***/ }),

/***/ "./src/reply.js":
/*!**********************!*\
  !*** ./src/reply.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reply)\n/* harmony export */ });\nasync function reply(rpid, replyTo) {\r\n    if (!rpid) return false;\r\n    location.hash = \"#detalk_input_content\";\r\n    document.getElementById(\"detalk_input_content\").value = `回复 @${replyTo}: `;\r\n    document.getElementById(\"detalk_input_content\").focus();\r\n    document.getElementById(\"detalk_input_link\").value = `#ReplyTo:${rpid}`;\r\n    document.getElementById(\"_detalk_submit\").setAttribute(\"onclick\", `detalk.send(null, '${rpid}')`);\r\n    document.getElementById(\"_detalk_submit\").innerText = \"回复\";\r\n    document.getElementById(\"_detalk_preview\").innerText = \"取消\";\r\n    document.getElementById(\"_detalk_preview\").setAttribute(\"onclick\", `document.getElementById(\"detalk_input_link\").value=\"\";detalk.send(null);document.getElementById(\"_detalk_submit\").innerText=\"发送\";document.getElementById(\"_detalk_preview\").innerText=\"预览\";document.getElementById(\"_detalk_preview\").setAttribute(\"onclick\", \"detalk.preview()\");`);\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/reply.js?");

/***/ }),

/***/ "./src/send.js":
/*!*********************!*\
  !*** ./src/send.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ send)\n/* harmony export */ });\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\r\n\r\nasync function send(options, rpid) {\r\n    document.getElementById(\"_detalk_submit\").disabled = true;\r\n    document.getElementById(\"_detalk_submit\").classList.add(\"disabled\");\r\n    document.getElementById(\"_detalk_submit\").classList.remove(\"enabled\");\r\n    if (!options) {\r\n        options = window.DETALK_INIT;\r\n    }\r\n    let url = new URL(options.url).protocol + '//' + new URL(options.url).host;\r\n    let el = document.querySelector(options.el);\r\n    let path = options.path;\r\n\r\n    let nickname = document.getElementById(\"detalk_input_nickname\").value;\r\n    let email = document.getElementById(\"detalk_input_email\").value;\r\n    let link = document.getElementById(\"detalk_input_link\").value;\r\n    let content = document.getElementById(\"detalk_input_content\").value;\r\n\r\n    if (!nickname || !email || !content || nickname.length >= 15 || content.length >= 500 || email.length >= 50 || link.length >= 100) {\r\n        return false;\r\n    }\r\n\r\n    localStorage.setItem(\"DETALK_NICKNAME\", nickname);\r\n    localStorage.setItem(\"DETALK_EMAIL\", email);\r\n    if (!link.startsWith(\"#ReplyTo:\")) {\r\n        localStorage.setItem(\"DETALK_LINK\", link);\r\n    }\r\n    let auth = localStorage.getItem(\"DETALK_AUTH\");\r\n\r\n    let resp = await fetch(url + '/_api/comment', {\r\n        method: \"PUT\",\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        },\r\n        body: JSON.stringify({\r\n            nickname,\r\n            email,\r\n            id: path,\r\n            url: link,\r\n            replyTo: rpid || null,\r\n            content,\r\n            auth,\r\n        })\r\n    }).then(res => res.json());\r\n\r\n    if (resp.success) {\r\n        (0,_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, path);\r\n    } else {\r\n        alert(resp.message);\r\n    }\r\n\r\n    document.getElementById(\"_detalk_submit\").disabled = false;\r\n    document.getElementById(\"_detalk_submit\").classList.remove(\"disabled\");\r\n    document.getElementById(\"_detalk_submit\").classList.add(\"enabled\");\r\n\r\n    if (rpid && resp.success) {\r\n        document.getElementById(\"detalk_input_content\").value = \"\";\r\n        document.getElementById(\"_detalk_submit\").setAttribute(\"onclick\", `detalk.send(null)`);\r\n        document.getElementById(\"_detalk_submit\").innerText = \"发送\";\r\n        document.getElementById(\"_detalk_preview\").innerText = \"预览\";\r\n        document.getElementById(\"_detalk_preview\").setAttribute(\"onclick\", `detalk.preview()`);\r\n    }\r\n}\n\n//# sourceURL=webpack://detalk_static/./src/send.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;