/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aqi-us/index.js":
/*!**************************************!*\
  !*** ./node_modules/aqi-us/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {



var aqi_breakpoints = [
    [0, 50],
    [51, 100],
    [101, 150],
    [151, 200],
    [201, 300],
    [301, 400],
    [401, 500],
];
var co_breakpoints = [
    [0.0, 4.4],
    [4.5, 9.4],
    [0.5, 12.4],
    [12.5, 15.4],
    [15.5, 30.4],
    [30.5, 40.4],
    [40.5, 50.4],
];
var no2_breakpoints = [
    [0, 53],
    [54, 100],
    [101, 360],
    [361, 649],
    [650, 1249],
    [1250, 1649],
    [1650, 2049],
];
var o3_1hr_breakpoints = [
    null,
    null,
    [125, 164],
    [165, 204],
    [205, 404],
    [405, 504],
    [505, 604],
];
var o3_8hr_breakpoints = [
    [0, 54],
    [55, 70],
    [71, 85],
    [86, 105],
    [106, 200],
];
var pm10_breakpoints = [
    [0, 54],
    [55, 154],
    [155, 254],
    [255, 354],
    [355, 424],
    [425, 504],
    [505, 604],
];
var pm25_breakpoints = [
    [0.0, 12.0],
    [12.1, 35.4],
    [35.5, 55.4],
    [55.5, 150.4],
    [150.5, 250.4],
    [250.5, 350.4],
    [350.5, 500.4],
];
var so2_breakpoints = [
    [0, 35],
    [36, 75],
    [76, 185],
    [186, 304],
    [305, 604],
    [605, 804],
    [805, 1004],
];
var aqi_labels = [
    'Good',
    'Moderate',
    'Unhealthy for Sensitive Groups',
    'Unhealthy',
    'Very Unhealthy',
    'Hazardous',
    'Hazardous'
];
var aqi_colors = [
    '009966',
    'ffde33',
    'ff9933',
    'cc0033',
    '660099',
    '7e0023',
    '7e0023'
];

if (undefined === Array.prototype.findIndex) {
    Array.prototype.findIndex = function (callback) {
        for (var i = 0; i < this.length; i++) {
            if (callback.call(this, this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
}

function breakpointIndex (value, breakpoints) {
    return breakpoints.findIndex(function (breakpoint) {
        if (null === breakpoint) {
            return false;
        }
        return breakpoint[0] <= value && value <= breakpoint[1];
    });
}

function aqi (concentration, breakpoints) {
    var index = breakpointIndex(concentration, breakpoints);

    if (-1 === index) {
        return NaN;
    }

    var i_high = aqi_breakpoints[index][1],
        i_low = aqi_breakpoints[index][0],
        c_high = breakpoints[index][1],
        c_low = breakpoints[index][0];

    return Math.round((i_high - i_low) / (c_high - c_low) * (concentration - c_low) + i_low);
}

exports.co = function (concentration) {
    concentration = Math.floor(concentration * 10) / 10;
    return aqi(concentration, co_breakpoints);
};

exports.o3_1hr = function (concentration) {
    concentration = Math.floor(concentration);
    return aqi(concentration, o3_1hr_breakpoints);
};

exports.o3_8hr = function (concentration) {
    concentration = Math.floor(concentration);
    return aqi(concentration, o3_8hr_breakpoints);
};

exports.no2 = function (concentration) {
    concentration = Math.floor(concentration);
    return aqi(concentration, no2_breakpoints);
};

exports.pm10 = function (concentration) {
    concentration = Math.floor(concentration);
    return aqi(concentration, pm10_breakpoints);
};

exports.pm25 = function (concentration) {
    concentration = Math.floor(concentration * 10) / 10;
    return aqi(concentration, pm25_breakpoints);
};

exports.so2 = function (concentration) {
    concentration = Math.floor(concentration);
    return aqi(concentration, so2_breakpoints);
};

// Airnow.gov descriptions by range
exports.aqi_label = function (aqi) {
    var idx = breakpointIndex(aqi, aqi_breakpoints);
    return aqi_labels[idx];
};

// Aqi color mapping. Returns hex color code.
exports.aqi_color = function (aqi) {
    var idx = breakpointIndex(aqi, aqi_breakpoints);
    return aqi_colors[idx];
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ———————————————————————————————————————————————————————————————————————————————\r\n==============================—Style—normalization—===============================\r\n——————————————————————————————————————————————————————————————————————————————— */\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    user-select: none;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:focus,\r\n:active {\r\n    outline: none;\r\n}\r\n\r\na:focus,\r\na:active {\r\n    outline: none;\r\n}\r\n\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n    display: block;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 100%;\r\n    line-height: 1;\r\n    font-size: 10px;\r\n    -ms-text-size-adjust: 100%;\r\n    -moz-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    color: var(--color-textDefault);\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n    font-family: inherit;\r\n}\r\n\r\ninput::-ms-clear {\r\n    display: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\na,\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: top;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n:root {\r\n    --color-textDefault: #0d0b0b;\r\n    --color-light-grey: rgb(193, 189, 189, 0.5);\r\n    --color-dark-grey: rgb(51, 53, 54);\r\n    --color-light-blue: rgb(156 194 209);\r\n    --color-light-yellow: rgb(227, 247, 95);\r\n    --color-bg-footer-header: rgb(156 194 209);\r\n    --color-logo-border: rgb(9, 84, 113);\r\n    --color-bg-outer: #e1ecf0;\r\n    --color-white: #ffffff;\r\n\r\n    --color-btn: rgba(9, 84, 113, 0.3);\r\n    --color-btn-hover: rgba(183, 183, 183, 0.6);\r\n    --color-button-text: #214fd8;\r\n\r\n    --color-headerBlock: rgb(0, 0, 0, 0.55);\r\n    --shadow-container: 0 0 1.2rem 0 #0003;\r\n    --voice-title: #e5e5e5;\r\n}\r\n\r\n\r\n#root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--color-bg-outer);\r\n}\r\n\r\n.container {\r\n    box-shadow: var(--shadow-container);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;iFAEiF;;AAEjF;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,iBAAiB;AACrB;;AAEA;;;IAGI,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;;;IAII,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,eAAe;IACf,cAAc;IACd,eAAe;IACf,0BAA0B;IAC1B,2BAA2B;IAC3B,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;;;IAGI,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,2CAA2C;IAC3C,kCAAkC;IAClC,oCAAoC;IACpC,uCAAuC;IACvC,0CAA0C;IAC1C,oCAAoC;IACpC,yBAAyB;IACzB,sBAAsB;;IAEtB,kCAAkC;IAClC,2CAA2C;IAC3C,4BAA4B;;IAE5B,uCAAuC;IACvC,sCAAsC;IACtC,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,uCAAuC;AAC3C;;AAEA;IACI,mCAAmC;AACvC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');\r\n\r\n/* ———————————————————————————————————————————————————————————————————————————————\r\n==============================—Style—normalization—===============================\r\n——————————————————————————————————————————————————————————————————————————————— */\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    user-select: none;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:focus,\r\n:active {\r\n    outline: none;\r\n}\r\n\r\na:focus,\r\na:active {\r\n    outline: none;\r\n}\r\n\r\nnav,\r\nfooter,\r\nheader,\r\naside {\r\n    display: block;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 100%;\r\n    line-height: 1;\r\n    font-size: 10px;\r\n    -ms-text-size-adjust: 100%;\r\n    -moz-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    color: var(--color-textDefault);\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea {\r\n    font-family: inherit;\r\n}\r\n\r\ninput::-ms-clear {\r\n    display: none;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\na,\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n}\r\n\r\nimg {\r\n    vertical-align: top;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n}\r\n\r\n:root {\r\n    --color-textDefault: #0d0b0b;\r\n    --color-light-grey: rgb(193, 189, 189, 0.5);\r\n    --color-dark-grey: rgb(51, 53, 54);\r\n    --color-light-blue: rgb(156 194 209);\r\n    --color-light-yellow: rgb(227, 247, 95);\r\n    --color-bg-footer-header: rgb(156 194 209);\r\n    --color-logo-border: rgb(9, 84, 113);\r\n    --color-bg-outer: #e1ecf0;\r\n    --color-white: #ffffff;\r\n\r\n    --color-btn: rgba(9, 84, 113, 0.3);\r\n    --color-btn-hover: rgba(183, 183, 183, 0.6);\r\n    --color-button-text: #214fd8;\r\n\r\n    --color-headerBlock: rgb(0, 0, 0, 0.55);\r\n    --shadow-container: 0 0 1.2rem 0 #0003;\r\n    --voice-title: #e5e5e5;\r\n}\r\n\r\n\r\n#root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--color-bg-outer);\r\n}\r\n\r\n.container {\r\n    box-shadow: var(--shadow-container);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/components/footer/footer.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/components/footer/footer.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/logo.svg */ "./src/assets/svg/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\r\n    width: 100%;\r\n\r\n}\r\n\r\n.footer-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 1.0%;\r\n    color: var(--color-white);\r\n    height: 4.0rem;\r\n    max-width: 100rem;\r\n    margin: 0 auto;\r\n    font-size: 1.5rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.footer__RSS-logo,\r\n.footer__year {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.footer__developers-gitHub {\r\n    display: flex;\r\n    text-align: center;\r\n    gap: 1.5rem;\r\n\r\n}\r\n\r\n.footer__developers-gitHub-link,\r\n.footer__RSS-logo-link {\r\n    cursor: pointer;\r\n    color: var(--color-white);\r\n}\r\n\r\n.footer__developers-gitHub-link:hover,\r\n.footer__year:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.footer__RSS-logo:hover {\r\n    opacity: 0.5;\r\n}\r\n\r\n.footer-logo-icon {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    width: 5rem;\r\n    height: 2.5rem;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .footer-container {\r\n        padding: 0.5rem;\r\n        height: 5rem;\r\n    }\r\n\r\n    .footer__developers-gitHub {\r\n        justify-content: center;\r\n        width: 100%;\r\n        margin-bottom: 0.4rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/components/footer/footer.css"],"names":[],"mappings":"AAAA;IACI,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;;IAEI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yDAAqD;IACrD,WAAW;IACX,cAAc;IACd,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,uBAAuB;QACvB,WAAW;QACX,qBAAqB;IACzB;AACJ","sourcesContent":[".footer {\r\n    width: 100%;\r\n\r\n}\r\n\r\n.footer-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 1.0%;\r\n    color: var(--color-white);\r\n    height: 4.0rem;\r\n    max-width: 100rem;\r\n    margin: 0 auto;\r\n    font-size: 1.5rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.footer__RSS-logo,\r\n.footer__year {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.footer__developers-gitHub {\r\n    display: flex;\r\n    text-align: center;\r\n    gap: 1.5rem;\r\n\r\n}\r\n\r\n.footer__developers-gitHub-link,\r\n.footer__RSS-logo-link {\r\n    cursor: pointer;\r\n    color: var(--color-white);\r\n}\r\n\r\n.footer__developers-gitHub-link:hover,\r\n.footer__year:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.footer__RSS-logo:hover {\r\n    opacity: 0.5;\r\n}\r\n\r\n.footer-logo-icon {\r\n    background-image: url('../../../assets/svg/logo.svg');\r\n    width: 5rem;\r\n    height: 2.5rem;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .footer-container {\r\n        padding: 0.5rem;\r\n        height: 5rem;\r\n    }\r\n\r\n    .footer__developers-gitHub {\r\n        justify-content: center;\r\n        width: 100%;\r\n        margin-bottom: 0.4rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/components/header/header.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/components/header/header.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/img/logo.png */ "./src/assets/img/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n    width: 100%;\r\n}\r\n\r\n.header-container {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 1.0% 0;\r\n    color: var(--color-textDefault);\r\n    height: 19rem;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.header-tools-wrapper {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 2rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.header-tools {\r\n    max-width: 100rem;\r\n    width: 85%;\r\n    height: 6rem;\r\n    justify-content: space-around;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 2rem;\r\n}\r\n\r\n.header-logo {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n}\r\n\r\n.conversion {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 10em;\r\n}\r\n\r\n.header-location-container {\r\n    width: 100%;\r\n    height: 4rem;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.header-location {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    height: 100%;\r\n    gap: 1rem;\r\n    padding: 0 2rem;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    font-size: 1.4rem;\r\n    color: var(--color-white);\r\n}\r\n\r\n.header-location-item {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header__weather-icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n\r\n.temperature-unit-container {\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-size: 1.9rem;\r\n    color: var(--color-white);\r\n    background-color: var(--color-btn);\r\n    padding: 0.3rem;\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.temperature-unit-container:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n.option {\r\n    cursor: pointer;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.language-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.2rem 0.4rem;\r\n    cursor: pointer;\r\n    font-size: 1.6rem;\r\n    color: var(--color-white);\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.language-container:hover {\r\n    background-color: var(--color-btn-hover)\r\n}\r\n\r\n.lang-icon {\r\n    background-image: url(\"https://www.svgrepo.com/show/116369/earth-globe-tool.svg\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 1.6em;\r\n    height: 1.6em;\r\n}\r\n\r\n.header-nav-container {\r\n    width: 100%;\r\n    height: 4rem;\r\n    background-color: rgb(0, 0, 0, 0.4);\r\n}\r\n\r\n.header-nav {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    font-size: 1.6rem;\r\n    height: 100%;\r\n    color: var(--color-white);\r\n}\r\n\r\n.header-nav-li {\r\n    cursor: pointer;\r\n}\r\n\r\n.header-nav-li:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/*  ============== geolocation button =============== */\r\n\r\n.geolocation-button {\r\n    transform: rotate(315deg);\r\n    font-size: 1.7rem;\r\n    border-radius: 2rem;\r\n    padding: 0.3rem 0 0.5rem 0.3rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: var(--color-white);\r\n    background-color: var(--color-btn);\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.geolocation-button:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n#header-burger-button {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 99999;\r\n    right: 2rem;\r\n    display: none;\r\n    width: 4rem;\r\n    height: 3rem;\r\n    margin: 1.5rem auto;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n#header-burger-button span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 0.6rem;\r\n    width: 100%;\r\n    background: var(--color-white);\r\n    border-radius: 0.6rem;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .25s ease-in-out;\r\n    -moz-transition: .25s ease-in-out;\r\n    -o-transition: .25s ease-in-out;\r\n    transition: .25s ease-in-out;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n#header-burger-button span:nth-child(1) {\r\n    top: 0;\r\n}\r\n\r\n#header-burger-button span:nth-child(2) {\r\n    top: 1.2rem;\r\n}\r\n\r\n#header-burger-button span:nth-child(3) {\r\n    top: 2.4rem;\r\n}\r\n\r\n#header-burger-button.open span:nth-child(1) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(135deg);\r\n    -moz-transform: rotate(135deg);\r\n    -o-transform: rotate(135deg);\r\n    transform: rotate(135deg);\r\n}\r\n\r\n#header-burger-button.open span:nth-child(2) {\r\n    opacity: 0;\r\n    left: -4rem;\r\n}\r\n\r\n#header-burger-button.open span:nth-child(3) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(-135deg);\r\n    -moz-transform: rotate(-135deg);\r\n    -o-transform: rotate(-135deg);\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .no-scroll-page {\r\n        position: fixed;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    #header-burger-button {\r\n        display: block;\r\n    }\r\n\r\n    .header-tools-wrapper {\r\n        justify-content: space-between;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .header-logo {\r\n        left: 5rem;\r\n        position: relative;\r\n    }\r\n\r\n    .header-tools {\r\n        position: fixed;\r\n        top: 0;\r\n        right: -100rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100vw;\r\n        height: 25rem;\r\n        z-index: 10000;\r\n        background-color: rgba(0, 0, 0, 0.8);\r\n        padding-top: 6rem;\r\n        align-items: flex-end;\r\n        transition: right .3s ease-in-out;\r\n        -webkit-transition: right .3s ease-in-out;\r\n        -moz-transition: right .3s ease-in-out;\r\n        -ms-transition: right .3s ease-in-out;\r\n        -o-transition: right .3s ease-in-out;\r\n    }\r\n\r\n    .header-tools.burger-open {\r\n        right: 0;\r\n    }\r\n\r\n    .searcher-container {\r\n        order: 1;\r\n        width: 20rem;\r\n    }\r\n\r\n    .searcher-container .searcher-input {\r\n        padding: 1rem;\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    .searcher-container .searcher-icon {\r\n        width: 3rem;\r\n        height: 3rem;\r\n        background-repeat: no-repeat;\r\n        background-position: right;\r\n        right: 0.8rem;\r\n        top: 0.5rem;\r\n    }\r\n\r\n    .searcher-container .drop-down-list-box {\r\n        right: 0;\r\n    }\r\n\r\n    .geolocation-container {\r\n        order: 3;\r\n    }\r\n\r\n    .voice-control-container {\r\n        order: 4;\r\n        transform: translate(-7.5rem, -4.5rem);\r\n        -webkit-transform: translate(-7.5rem, -4.5rem);\r\n        -moz-transform: translate(-7.5rem, -4.5rem);\r\n        -ms-transform: translate(-7.5rem, -4.5rem);\r\n        -o-transform: translate(-7.5rem, -4.5rem);\r\n    }\r\n\r\n    .conversion {\r\n        order: 2;\r\n        width: 14rem;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .language-container {\r\n        background-color: var(--color-btn);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/components/header/header.css"],"names":[],"mappings":"AAAA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yDAA+C;IAC/C,4BAA4B;IAC5B,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,aAAa;IACb,YAAY;IACZ,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,kCAAkC;IAClC,eAAe;IACf,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,gCAAgC;IAChC,wCAAwC;IACxC,qCAAqC;IACrC,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,gCAAgC;IAChC,wCAAwC;IACxC,qCAAqC;IACrC,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA;IACI;AACJ;;AAEA;IACI,iFAAiF;IACjF,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA,uDAAuD;;AAEvD;IACI,yBAAyB;IACzB,iBAAiB;IACjB,mBAAmB;IACnB,+BAA+B;IAC/B,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,kCAAkC;IAClC,gCAAgC;IAChC,wCAAwC;IACxC,qCAAqC;IACrC,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,cAAc;IACd,WAAW;IACX,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;IAC/B,4BAA4B;IAC5B,0BAA0B;IAC1B,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;IAChC,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,8BAA8B;IAC9B,qBAAqB;IACrB,UAAU;IACV,OAAO;IACP,+BAA+B;IAC/B,4BAA4B;IAC5B,0BAA0B;IAC1B,uBAAuB;IACvB,oCAAoC;IACpC,iCAAiC;IACjC,+BAA+B;IAC/B,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,MAAM;AACV;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI;QACI,eAAe;QACf,OAAO;QACP,QAAQ;IACZ;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,8BAA8B;QAC9B,kBAAkB;QAClB,gBAAgB;IACpB;;IAEA;QACI,UAAU;QACV,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,MAAM;QACN,cAAc;QACd,aAAa;QACb,sBAAsB;QACtB,YAAY;QACZ,aAAa;QACb,cAAc;QACd,oCAAoC;QACpC,iBAAiB;QACjB,qBAAqB;QACrB,iCAAiC;QACjC,yCAAyC;QACzC,sCAAsC;QACtC,qCAAqC;QACrC,oCAAoC;IACxC;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;QACR,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,4BAA4B;QAC5B,0BAA0B;QAC1B,aAAa;QACb,WAAW;IACf;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;QACR,sCAAsC;QACtC,8CAA8C;QAC9C,2CAA2C;QAC3C,0CAA0C;QAC1C,yCAAyC;IAC7C;;IAEA;QACI,QAAQ;QACR,YAAY;QACZ,8BAA8B;IAClC;;IAEA;QACI,kCAAkC;IACtC;AACJ","sourcesContent":[".header {\r\n    width: 100%;\r\n}\r\n\r\n.header-container {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 1.0% 0;\r\n    color: var(--color-textDefault);\r\n    height: 19rem;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.header-tools-wrapper {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 2rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.header-tools {\r\n    max-width: 100rem;\r\n    width: 85%;\r\n    height: 6rem;\r\n    justify-content: space-around;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 2rem;\r\n}\r\n\r\n.header-logo {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-image: url(/src/assets/img/logo.png);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n}\r\n\r\n.conversion {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 10em;\r\n}\r\n\r\n.header-location-container {\r\n    width: 100%;\r\n    height: 4rem;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.header-location {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    height: 100%;\r\n    gap: 1rem;\r\n    padding: 0 2rem;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    font-size: 1.4rem;\r\n    color: var(--color-white);\r\n}\r\n\r\n.header-location-item {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header__weather-icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n\r\n.temperature-unit-container {\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-size: 1.9rem;\r\n    color: var(--color-white);\r\n    background-color: var(--color-btn);\r\n    padding: 0.3rem;\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.temperature-unit-container:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n.option {\r\n    cursor: pointer;\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.language-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    padding: 0.2rem 0.4rem;\r\n    cursor: pointer;\r\n    font-size: 1.6rem;\r\n    color: var(--color-white);\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.language-container:hover {\r\n    background-color: var(--color-btn-hover)\r\n}\r\n\r\n.lang-icon {\r\n    background-image: url(\"https://www.svgrepo.com/show/116369/earth-globe-tool.svg\");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    width: 1.6em;\r\n    height: 1.6em;\r\n}\r\n\r\n.header-nav-container {\r\n    width: 100%;\r\n    height: 4rem;\r\n    background-color: rgb(0, 0, 0, 0.4);\r\n}\r\n\r\n.header-nav {\r\n    max-width: 100rem;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    font-size: 1.6rem;\r\n    height: 100%;\r\n    color: var(--color-white);\r\n}\r\n\r\n.header-nav-li {\r\n    cursor: pointer;\r\n}\r\n\r\n.header-nav-li:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/*  ============== geolocation button =============== */\r\n\r\n.geolocation-button {\r\n    transform: rotate(315deg);\r\n    font-size: 1.7rem;\r\n    border-radius: 2rem;\r\n    padding: 0.3rem 0 0.5rem 0.3rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: var(--color-white);\r\n    background-color: var(--color-btn);\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.geolocation-button:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n#header-burger-button {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 99999;\r\n    right: 2rem;\r\n    display: none;\r\n    width: 4rem;\r\n    height: 3rem;\r\n    margin: 1.5rem auto;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n#header-burger-button span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 0.6rem;\r\n    width: 100%;\r\n    background: var(--color-white);\r\n    border-radius: 0.6rem;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .25s ease-in-out;\r\n    -moz-transition: .25s ease-in-out;\r\n    -o-transition: .25s ease-in-out;\r\n    transition: .25s ease-in-out;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n#header-burger-button span:nth-child(1) {\r\n    top: 0;\r\n}\r\n\r\n#header-burger-button span:nth-child(2) {\r\n    top: 1.2rem;\r\n}\r\n\r\n#header-burger-button span:nth-child(3) {\r\n    top: 2.4rem;\r\n}\r\n\r\n#header-burger-button.open span:nth-child(1) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(135deg);\r\n    -moz-transform: rotate(135deg);\r\n    -o-transform: rotate(135deg);\r\n    transform: rotate(135deg);\r\n}\r\n\r\n#header-burger-button.open span:nth-child(2) {\r\n    opacity: 0;\r\n    left: -4rem;\r\n}\r\n\r\n#header-burger-button.open span:nth-child(3) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(-135deg);\r\n    -moz-transform: rotate(-135deg);\r\n    -o-transform: rotate(-135deg);\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .no-scroll-page {\r\n        position: fixed;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    #header-burger-button {\r\n        display: block;\r\n    }\r\n\r\n    .header-tools-wrapper {\r\n        justify-content: space-between;\r\n        position: relative;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .header-logo {\r\n        left: 5rem;\r\n        position: relative;\r\n    }\r\n\r\n    .header-tools {\r\n        position: fixed;\r\n        top: 0;\r\n        right: -100rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100vw;\r\n        height: 25rem;\r\n        z-index: 10000;\r\n        background-color: rgba(0, 0, 0, 0.8);\r\n        padding-top: 6rem;\r\n        align-items: flex-end;\r\n        transition: right .3s ease-in-out;\r\n        -webkit-transition: right .3s ease-in-out;\r\n        -moz-transition: right .3s ease-in-out;\r\n        -ms-transition: right .3s ease-in-out;\r\n        -o-transition: right .3s ease-in-out;\r\n    }\r\n\r\n    .header-tools.burger-open {\r\n        right: 0;\r\n    }\r\n\r\n    .searcher-container {\r\n        order: 1;\r\n        width: 20rem;\r\n    }\r\n\r\n    .searcher-container .searcher-input {\r\n        padding: 1rem;\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    .searcher-container .searcher-icon {\r\n        width: 3rem;\r\n        height: 3rem;\r\n        background-repeat: no-repeat;\r\n        background-position: right;\r\n        right: 0.8rem;\r\n        top: 0.5rem;\r\n    }\r\n\r\n    .searcher-container .drop-down-list-box {\r\n        right: 0;\r\n    }\r\n\r\n    .geolocation-container {\r\n        order: 3;\r\n    }\r\n\r\n    .voice-control-container {\r\n        order: 4;\r\n        transform: translate(-7.5rem, -4.5rem);\r\n        -webkit-transform: translate(-7.5rem, -4.5rem);\r\n        -moz-transform: translate(-7.5rem, -4.5rem);\r\n        -ms-transform: translate(-7.5rem, -4.5rem);\r\n        -o-transform: translate(-7.5rem, -4.5rem);\r\n    }\r\n\r\n    .conversion {\r\n        order: 2;\r\n        width: 14rem;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .language-container {\r\n        background-color: var(--color-btn);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/components/header/searcher.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/components/header/searcher.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/delete-button-dotted.svg */ "./src/assets/svg/delete-button-dotted.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".searcher-container {\r\n    position: relative;\r\n    display: inline-flex;\r\n    position: relative;\r\n    background-color: var(--color-bg-outer);\r\n    border-radius: 30px;\r\n    width: 30rem;\r\n}\r\n\r\n.drop-down-list-box {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 35rem;\r\n    top: calc(100% + 0.5rem);\r\n    background-color: var(--color-bg-outer);\r\n    border-radius: 1rem;\r\n    width: 100%;\r\n    box-shadow: 0 0 12px 0 #0003;\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.drop-down-list__weather-icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n\r\n.recent-location-title-box {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.recent-location-box__btn-clear-all {\r\n    background-color: transparent;\r\n    color: var(--color-button-text);\r\n    font-weight: 900;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.searcher-input-drop-down-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem 0.5rem;\r\n    align-items: center;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.searcher-input-drop-down-item:hover {\r\n    background-color: var(--color-logo-border);\r\n    opacity: 0.5;\r\n    font-weight: 900;\r\n}\r\n\r\n.searcher-input-drop-down-list__alert,\r\n.searcher-input-drop-down-list {\r\n    visibility: hidden;\r\n}\r\n\r\n.searcher-input-drop-down-list.visible,\r\n.searcher-input-drop-down-item.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.searcher-input-drop-down-list__alert.visible {\r\n    visibility: visible;\r\n    padding: 1.5rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.drop-down-list-box.visible {\r\n    display: flex;\r\n}\r\n\r\n.searcher-input:focus {\r\n    outline: 5px auto var(--color-logo-border);\r\n}\r\n\r\n.searcher-input {\r\n    border-radius: 30px;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    background-color: var(--color-bg-outer);\r\n}\r\n\r\n.searcher-icon {\r\n    background-image: url(https://img.icons8.com/material-outlined/256/search-more.png);\r\n    background-size: contain;\r\n    width: 2.7rem;\r\n    height: 2.7rem;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    right: 0.8rem;\r\n    top: 0;\r\n    position: absolute;\r\n    cursor: pointer;\r\n}\r\n\r\n.drop-down-list-item-info {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    cursor: pointer;\r\n    padding: 0 6rem 0 0rem;\r\n}\r\n\r\n.delete-button-icon-dotted {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\r\n    width: 2.4rem;\r\n    height: auto;\r\n    color: var(--color-button-text);\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}", "",{"version":3,"sources":["webpack://./src/view/components/header/searcher.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,uCAAuC;IACvC,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,wBAAwB;IACxB,uCAAuC;IACvC,mBAAmB;IACnB,WAAW;IACX,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,uBAAuB;IACvB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,mFAAmF;IACnF,wBAAwB;IACxB,aAAa;IACb,cAAc;IACd,4BAA4B;IAC5B,0BAA0B;IAC1B,aAAa;IACb,MAAM;IACN,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,oEAAgF;IAChF,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,eAAe;IACf,aAAa;AACjB","sourcesContent":[".searcher-container {\r\n    position: relative;\r\n    display: inline-flex;\r\n    position: relative;\r\n    background-color: var(--color-bg-outer);\r\n    border-radius: 30px;\r\n    width: 30rem;\r\n}\r\n\r\n.drop-down-list-box {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 35rem;\r\n    top: calc(100% + 0.5rem);\r\n    background-color: var(--color-bg-outer);\r\n    border-radius: 1rem;\r\n    width: 100%;\r\n    box-shadow: 0 0 12px 0 #0003;\r\n    overflow: auto;\r\n    overflow-x: hidden;\r\n    scroll-behavior: smooth;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n.drop-down-list__weather-icon {\r\n    width: 3rem;\r\n    height: 3rem;\r\n}\r\n\r\n.recent-location-title-box {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.recent-location-box__btn-clear-all {\r\n    background-color: transparent;\r\n    color: var(--color-button-text);\r\n    font-weight: 900;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.searcher-input-drop-down-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem 0.5rem;\r\n    align-items: center;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.searcher-input-drop-down-item:hover {\r\n    background-color: var(--color-logo-border);\r\n    opacity: 0.5;\r\n    font-weight: 900;\r\n}\r\n\r\n.searcher-input-drop-down-list__alert,\r\n.searcher-input-drop-down-list {\r\n    visibility: hidden;\r\n}\r\n\r\n.searcher-input-drop-down-list.visible,\r\n.searcher-input-drop-down-item.visible {\r\n    visibility: visible;\r\n}\r\n\r\n.searcher-input-drop-down-list__alert.visible {\r\n    visibility: visible;\r\n    padding: 1.5rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.drop-down-list-box.visible {\r\n    display: flex;\r\n}\r\n\r\n.searcher-input:focus {\r\n    outline: 5px auto var(--color-logo-border);\r\n}\r\n\r\n.searcher-input {\r\n    border-radius: 30px;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    background-color: var(--color-bg-outer);\r\n}\r\n\r\n.searcher-icon {\r\n    background-image: url(https://img.icons8.com/material-outlined/256/search-more.png);\r\n    background-size: contain;\r\n    width: 2.7rem;\r\n    height: 2.7rem;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    right: 0.8rem;\r\n    top: 0;\r\n    position: absolute;\r\n    cursor: pointer;\r\n}\r\n\r\n.drop-down-list-item-info {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    cursor: pointer;\r\n    padding: 0 6rem 0 0rem;\r\n}\r\n\r\n.delete-button-icon-dotted {\r\n    background: url('../../../assets/svg/delete-button-dotted.svg') no-repeat center;\r\n    width: 2.4rem;\r\n    height: auto;\r\n    color: var(--color-button-text);\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/components/voiceControl/voiceControl.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/components/voiceControl/voiceControl.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".voice-control-container {\r\n    position: relative;\r\n    width: 3.1rem;\r\n    height: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--color-btn);\r\n    border-radius: 50%;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.voice-control-container:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n.voice-control-icon {\r\n    background-image: url(\"https://img.icons8.com/material/96/ffffff/microphone--v3.png\");\r\n    background-size: contain;\r\n    width: 2.7rem;\r\n    height: 2.7rem;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.voice-control-modal {\r\n    position: fixed;\r\n    top: calc(50% - 13rem);\r\n    left: calc(50% - 11rem);\r\n    z-index: 51;\r\n}\r\n\r\n.voice-control-modal .modal-inner {\r\n    margin-top: 20rem;\r\n    position: absolute;\r\n    width: 20rem;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: var(--voice-title);\r\n    background-color: var(--color-headerBlock);\r\n    border-radius: 10rem;\r\n    -webkit-border-radius: 10rem;\r\n    -moz-border-radius: 10rem;\r\n    -ms-border-radius: 10rem;\r\n    -o-border-radius: 10rem;\r\n}\r\n\r\n.voice-control-overlay {\r\n    visibility: hidden;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    z-index: 50;\r\n}\r\n\r\n.voice-record-animation {\r\n    position: relative;\r\n}\r\n\r\n.circle-ripple {\r\n    height: 10rem;\r\n    width: 10rem;\r\n    background: #36B37E;\r\n    border-radius: 50%;\r\n    animation: ripple 2s infinite;\r\n    position: absolute;\r\n    left: 5rem;\r\n    top: 1rem;\r\n    z-index: 0\r\n}\r\n\r\n.circle-ripple-2 {\r\n    height: 10rem;\r\n    width: 10rem;\r\n    background: #36B37E;\r\n    border-radius: 50%;\r\n    animation: ripple-2 2s infinite;\r\n    position: absolute;\r\n    left: 5rem;\r\n    top: 1rem;\r\n}\r\n\r\n@keyframes ripple {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(2);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n        -webkit-transform: scale(1);\r\n        -moz-transform: scale(1);\r\n        -ms-transform: scale(1);\r\n        -o-transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes ripple-2 {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(2.5);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n.circle {\r\n    width: 12rem;\r\n    height: 12rem;\r\n    border-radius: 50%;\r\n    background: #EAEAEA;\r\n    position: absolute;\r\n    left: 4rem;\r\n}\r\n\r\n.circle-2 {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 1rem;\r\n    box-shadow: 0px 0px .8rem rgba(0, 0, 0, 0.16);\r\n    z-index: 2;\r\n}\r\n\r\n.circle-2 .microphone-icon {\r\n    background-image: url(\"https://img.icons8.com/material/96/A7A7A7/microphone--v1.png\");\r\n    background-size: contain;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    font-size: 2rem;\r\n    position: absolute;\r\n    left: 2rem;\r\n    top: 2.2rem;\r\n}", "",{"version":3,"sources":["webpack://./src/view/components/voiceControl/voiceControl.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,kBAAkB;IAClB,gCAAgC;IAChC,wCAAwC;IACxC,qCAAqC;IACrC,oCAAoC;IACpC,mCAAmC;AACvC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,qFAAqF;IACrF,wBAAwB;IACxB,aAAa;IACb,cAAc;IACd,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,0CAA0C;IAC1C,oBAAoB;IACpB,4BAA4B;IAC5B,yBAAyB;IACzB,wBAAwB;IACxB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,0CAA0C;IAC1C,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT;AACJ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,+BAA+B;IAC/B,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;QACnB,YAAY;IAChB;;IAEA;QACI,mBAAmB;QACnB,2BAA2B;QAC3B,wBAAwB;QACxB,uBAAuB;QACvB,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,mBAAmB;IACvB;;IAEA;QACI,qBAAqB;QACrB,YAAY;IAChB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,6CAA6C;IAC7C,UAAU;AACd;;AAEA;IACI,qFAAqF;IACrF,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf","sourcesContent":[".voice-control-container {\r\n    position: relative;\r\n    width: 3.1rem;\r\n    height: 3rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: var(--color-btn);\r\n    border-radius: 50%;\r\n    transition: background-color .2s;\r\n    -webkit-transition: background-color .2s;\r\n    -moz-transition: background-color .2s;\r\n    -ms-transition: background-color .2s;\r\n    -o-transition: background-color .2s;\r\n}\r\n\r\n.voice-control-container:hover {\r\n    background-color: var(--color-btn-hover);\r\n}\r\n\r\n.voice-control-icon {\r\n    background-image: url(\"https://img.icons8.com/material/96/ffffff/microphone--v3.png\");\r\n    background-size: contain;\r\n    width: 2.7rem;\r\n    height: 2.7rem;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.voice-control-modal {\r\n    position: fixed;\r\n    top: calc(50% - 13rem);\r\n    left: calc(50% - 11rem);\r\n    z-index: 51;\r\n}\r\n\r\n.voice-control-modal .modal-inner {\r\n    margin-top: 20rem;\r\n    position: absolute;\r\n    width: 20rem;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    color: var(--voice-title);\r\n    background-color: var(--color-headerBlock);\r\n    border-radius: 10rem;\r\n    -webkit-border-radius: 10rem;\r\n    -moz-border-radius: 10rem;\r\n    -ms-border-radius: 10rem;\r\n    -o-border-radius: 10rem;\r\n}\r\n\r\n.voice-control-overlay {\r\n    visibility: hidden;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    z-index: 50;\r\n}\r\n\r\n.voice-record-animation {\r\n    position: relative;\r\n}\r\n\r\n.circle-ripple {\r\n    height: 10rem;\r\n    width: 10rem;\r\n    background: #36B37E;\r\n    border-radius: 50%;\r\n    animation: ripple 2s infinite;\r\n    position: absolute;\r\n    left: 5rem;\r\n    top: 1rem;\r\n    z-index: 0\r\n}\r\n\r\n.circle-ripple-2 {\r\n    height: 10rem;\r\n    width: 10rem;\r\n    background: #36B37E;\r\n    border-radius: 50%;\r\n    animation: ripple-2 2s infinite;\r\n    position: absolute;\r\n    left: 5rem;\r\n    top: 1rem;\r\n}\r\n\r\n@keyframes ripple {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(2);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n        -webkit-transform: scale(1);\r\n        -moz-transform: scale(1);\r\n        -ms-transform: scale(1);\r\n        -o-transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes ripple-2 {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(2.5);\r\n        opacity: 0.3;\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n.circle {\r\n    width: 12rem;\r\n    height: 12rem;\r\n    border-radius: 50%;\r\n    background: #EAEAEA;\r\n    position: absolute;\r\n    left: 4rem;\r\n}\r\n\r\n.circle-2 {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    position: absolute;\r\n    left: 1rem;\r\n    top: 1rem;\r\n    box-shadow: 0px 0px .8rem rgba(0, 0, 0, 0.16);\r\n    z-index: 2;\r\n}\r\n\r\n.circle-2 .microphone-icon {\r\n    background-image: url(\"https://img.icons8.com/material/96/A7A7A7/microphone--v1.png\");\r\n    background-size: contain;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n    font-size: 2rem;\r\n    position: absolute;\r\n    left: 2rem;\r\n    top: 2.2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherDayComponent.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherDayComponent.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/img/up-arrow_icon-icons.com_73351.png */ "./src/assets/img/up-arrow_icon-icons.com_73351.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/img/downarrow_120663.png */ "./src/assets/img/downarrow_120663.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/wind-icon.svg */ "./src/assets/svg/wind-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/humidity-icon.svg */ "./src/assets/svg/humidity-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/cloud-icon.svg */ "./src/assets/svg/cloud-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/pressure-icon.svg */ "./src/assets/svg/pressure-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/precip-icon.svg */ "./src/assets/svg/precip-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/visibility-icon.svg */ "./src/assets/svg/visibility-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/temp-icon.svg */ "./src/assets/svg/temp-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".details-summary {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 1.6rem;\r\n    width: 100%;\r\n}\r\n\r\n.details-summary .icon-container {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n.details-summary--precip {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.details-summary--wind {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.details-summary--condition {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.precip-svg {\r\n    fill: #1b4de4;\r\n    color: #1b4de4;\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.wind-svg {\r\n    background-size: contain;\r\n    fill: #1b4de4;\r\n    color: #1b4de4;\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n\r\n.button-up {\r\n    background-repeat: no-repeat;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-size: contain;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.button {\r\n    background-repeat: no-repeat;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-size: contain;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.day {\r\n    width: 80%;\r\n}\r\n\r\n.day-wrapper {\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    max-width: 80rem;\r\n    width: 90%;\r\n    display: flex;\r\n}\r\n\r\n.day-wrapper-none {\r\n    display: none;\r\n}\r\n\r\n.day-container {\r\n    max-width: 80rem;\r\n    width: 100%;\r\n    display: flex;\r\n    border: solid 0.1rem black;\r\n    border-radius: 1rem;\r\n    background-color: white;\r\n    padding: 1rem;\r\n    margin: 1rem 0rem 1rem 0rem;\r\n}\r\n\r\n.daypart-details {\r\n    display: none;\r\n}\r\n\r\n.daypart-details-active {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 3fr 2fr;\r\n    grid-column-gap: 2rem;\r\n    grid-row-gap: 0px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.daily-content--label {\r\n    display: flex;\r\n    padding: 0.2rem;\r\n}\r\n\r\n.daily-content {\r\n    width: 28rem;\r\n}\r\n\r\n.details-table-container-two {\r\n    grid-column: 2/3;\r\n    grid-row: 2/3;\r\n}\r\n\r\n.conditions-summary {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.temperature-value {\r\n    font-size: 3rem;\r\n}\r\n\r\n.details-table {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n    border: 0.1rem solid black;\r\n    border-radius: 0.5rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.list-item {\r\n    width: 50%;\r\n    margin-top: 1rem;\r\n    display: flex;\r\n}\r\n\r\n.details-table--label {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.data-points {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.icon-container {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    margin-right: 0.3rem;\r\n}\r\n\r\n.wind-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center;\r\n}\r\n\r\n.humidity-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center;\r\n}\r\n\r\n.cloud-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center;\r\n}\r\n\r\n.pressure-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center;\r\n}\r\n\r\n.precip-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat center;\r\n}\r\n\r\n.visibility-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center;\r\n}\r\n\r\n.temp-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat center;\r\n}\r\n\r\n@media screen and (max-width: 725px) {\r\n\r\n    .day {\r\n        width: 90%;\r\n    }\r\n\r\n    .daily-content {\r\n        width: 20rem;\r\n    }\r\n\r\n    .daypart-details-active {\r\n        grid-column-gap: 1rem;\r\n    }\r\n\r\n    .details-table--field {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 625px) {\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    .details-summary--extended {\r\n        display: none;\r\n    }\r\n\r\n    .details-summary--condition-icon {\r\n        width: 6rem;\r\n        height: 6rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n    .daypart-details-active {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    .details-summary-extended {\r\n        display: none;\r\n    }\r\n\r\n    .daily-content-day {\r\n        order: 1;\r\n    }\r\n\r\n    .details-table-container-day {\r\n        order: 2;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .daily-content-night {\r\n        order: 3;\r\n    }\r\n\r\n    .details-table-container-night {\r\n        order: 4;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 445px) {\r\n    .details-summary--condition-icon {\r\n        width: 4rem;\r\n        height: 4rem;\r\n    }\r\n\r\n    .day {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .day {\r\n        width: 95%;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/view/pages/5-days-weather-page/WeatherDayComponent.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,cAAc;IACd,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,yDAA8E;AAClF;;AAEA;IACI,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,yDAAiE;AACrE;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,uBAAuB;IACvB,gBAAgB;IAChB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,2BAA2B;IAC3B,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;IAC1B,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,oEAAqE;AACzE;;AAEA;IACI,oEAAyE;AAC7E;;AAEA;IACI,oEAAsE;AAC1E;;AAEA;IACI,oEAAyE;AAC7E;;AAEA;IACI,oEAAuE;AAC3E;;AAEA;IACI,oEAA2E;AAC/E;;AAEA;IACI,oEAAqE;AACzE;;AAEA;;IAEI;QACI,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,aAAa;QACb,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,uBAAuB;IAC3B;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;QACR,mBAAmB;IACvB;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;AACJ;;AAEA;IACI;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,UAAU;IACd;AACJ;;;AAGA;IACI;QACI,UAAU;IACd;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,UAAU;IACd;;AAEJ","sourcesContent":[".details-summary {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    padding: 1rem 0;\r\n    font-size: 1.6rem;\r\n    width: 100%;\r\n}\r\n\r\n.details-summary .icon-container {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n.details-summary--precip {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.details-summary--wind {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.details-summary--condition {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.precip-svg {\r\n    fill: #1b4de4;\r\n    color: #1b4de4;\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.wind-svg {\r\n    background-size: contain;\r\n    fill: #1b4de4;\r\n    color: #1b4de4;\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n\r\n.button-up {\r\n    background-repeat: no-repeat;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-size: contain;\r\n    background-image: url('../../../assets/img/up-arrow_icon-icons.com_73351.png');\r\n}\r\n\r\n.button {\r\n    background-repeat: no-repeat;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-size: contain;\r\n    background-image: url('../../../assets/img/downarrow_120663.png');\r\n}\r\n\r\n.day {\r\n    width: 80%;\r\n}\r\n\r\n.day-wrapper {\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    max-width: 80rem;\r\n    width: 90%;\r\n    display: flex;\r\n}\r\n\r\n.day-wrapper-none {\r\n    display: none;\r\n}\r\n\r\n.day-container {\r\n    max-width: 80rem;\r\n    width: 100%;\r\n    display: flex;\r\n    border: solid 0.1rem black;\r\n    border-radius: 1rem;\r\n    background-color: white;\r\n    padding: 1rem;\r\n    margin: 1rem 0rem 1rem 0rem;\r\n}\r\n\r\n.daypart-details {\r\n    display: none;\r\n}\r\n\r\n.daypart-details-active {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 3fr 2fr;\r\n    grid-column-gap: 2rem;\r\n    grid-row-gap: 0px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.daily-content--label {\r\n    display: flex;\r\n    padding: 0.2rem;\r\n}\r\n\r\n.daily-content {\r\n    width: 28rem;\r\n}\r\n\r\n.details-table-container-two {\r\n    grid-column: 2/3;\r\n    grid-row: 2/3;\r\n}\r\n\r\n.conditions-summary {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.temperature-value {\r\n    font-size: 3rem;\r\n}\r\n\r\n.details-table {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: space-between;\r\n    border: 0.1rem solid black;\r\n    border-radius: 0.5rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.list-item {\r\n    width: 50%;\r\n    margin-top: 1rem;\r\n    display: flex;\r\n}\r\n\r\n.details-table--label {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.data-points {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.icon-container {\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n    margin-right: 0.3rem;\r\n}\r\n\r\n.wind-item {\r\n    background: url('../../../assets/svg/wind-icon.svg') no-repeat center;\r\n}\r\n\r\n.humidity-item {\r\n    background: url('../../../assets/svg/humidity-icon.svg') no-repeat center;\r\n}\r\n\r\n.cloud-item {\r\n    background: url('../../../assets/svg/cloud-icon.svg') no-repeat center;\r\n}\r\n\r\n.pressure-item {\r\n    background: url('../../../assets/svg/pressure-icon.svg') no-repeat center;\r\n}\r\n\r\n.precip-item {\r\n    background: url('../../../assets/svg/precip-icon.svg') no-repeat center;\r\n}\r\n\r\n.visibility-item {\r\n    background: url('../../../assets/svg/visibility-icon.svg') no-repeat center;\r\n}\r\n\r\n.temp-item {\r\n    background: url('../../../assets/svg/temp-icon.svg') no-repeat center;\r\n}\r\n\r\n@media screen and (max-width: 725px) {\r\n\r\n    .day {\r\n        width: 90%;\r\n    }\r\n\r\n    .daily-content {\r\n        width: 20rem;\r\n    }\r\n\r\n    .daypart-details-active {\r\n        grid-column-gap: 1rem;\r\n    }\r\n\r\n    .details-table--field {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 625px) {\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    .details-summary--extended {\r\n        display: none;\r\n    }\r\n\r\n    .details-summary--condition-icon {\r\n        width: 6rem;\r\n        height: 6rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 530px) {\r\n    .daypart-details-active {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    .details-summary-extended {\r\n        display: none;\r\n    }\r\n\r\n    .daily-content-day {\r\n        order: 1;\r\n    }\r\n\r\n    .details-table-container-day {\r\n        order: 2;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .daily-content-night {\r\n        order: 3;\r\n    }\r\n\r\n    .details-table-container-night {\r\n        order: 4;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 445px) {\r\n    .details-summary--condition-icon {\r\n        width: 4rem;\r\n        height: 4rem;\r\n    }\r\n\r\n    .day {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n    .details-summary {\r\n        padding: 0;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    .day {\r\n        width: 95%;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".five-days-container {\r\n    background-color: var(--color-white);\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border-radius: 1rem;\r\n    width: 90%;\r\n    max-width: 100rem;\r\n}\r\n\r\n.daily-forecast-timestamp-box {\r\n    font-size: 1.6rem;\r\n    margin: 1rem 3rem;\r\n    color: var(--color-dark-grey);\r\n}\r\n\r\n.daily-forecast-timestamp {\r\n    padding: 1rem 1.6rem;\r\n}\r\n\r\n.daily-forecast-disclosure-list {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.location-page-title {\r\n    display: flex;\r\n    padding: 1.5rem 3rem 1.5rem;\r\n    background-color: var(--color-headerBlock);\r\n    border-top-left-radius: 1rem;\r\n    border-top-right-radius: 1rem;\r\n    color: var(--color-white);\r\n    gap: 1rem;\r\n}\r\n\r\n.location-title {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n    .five-days-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 625px) {\r\n    .five-days-container {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 445px) {\r\n    .daily-forecast-timestamp-box {\r\n        margin: 1rem 2rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .daily-forecast-timestamp-box {\r\n        margin: 1rem 1rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,0CAA0C;IAC1C,4BAA4B;IAC5B,6BAA6B;IAC7B,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":[".five-days-container {\r\n    background-color: var(--color-white);\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border-radius: 1rem;\r\n    width: 90%;\r\n    max-width: 100rem;\r\n}\r\n\r\n.daily-forecast-timestamp-box {\r\n    font-size: 1.6rem;\r\n    margin: 1rem 3rem;\r\n    color: var(--color-dark-grey);\r\n}\r\n\r\n.daily-forecast-timestamp {\r\n    padding: 1rem 1.6rem;\r\n}\r\n\r\n.daily-forecast-disclosure-list {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.location-page-title {\r\n    display: flex;\r\n    padding: 1.5rem 3rem 1.5rem;\r\n    background-color: var(--color-headerBlock);\r\n    border-top-left-radius: 1rem;\r\n    border-top-right-radius: 1rem;\r\n    color: var(--color-white);\r\n    gap: 1rem;\r\n}\r\n\r\n.location-title {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n@media screen and (max-width: 840px) {\r\n    .five-days-container {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 625px) {\r\n    .five-days-container {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 445px) {\r\n    .daily-forecast-timestamp-box {\r\n        margin: 1rem 2rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    .daily-forecast-timestamp-box {\r\n        margin: 1rem 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/air-quality-page/AirQualityPageComponent.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/pages/air-quality-page/AirQualityPageComponent.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/info-icon.svg */ "./src/assets/svg/info-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/popOverCloser.svg */ "./src/assets/svg/popOverCloser.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".other-forecast-air-quality {\r\n    margin: 1.2rem auto;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 80%;\r\n    max-width: 100rem\r\n}\r\n\r\n.air-quality-container {\r\n    background-color: var(--color-white);\r\n    margin-bottom: 1.2rem;\r\n    padding: 1.6rem;\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.air-quality-title {\r\n    margin-bottom: 1.6rem;\r\n    font-size: 1.6rem;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.air-quality-title strong {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-pollutant-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.primary-indicator {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n}\r\n\r\n.primary-indicator__level span {\r\n    font-size: 2.4rem;\r\n    font-weight: 800;\r\n    line-height: 1.5;\r\n}\r\n\r\n.primary-indicator__level p {\r\n    margin-top: 0.6rem;\r\n    font-size: 1.4rem;\r\n    color: #6f7585;\r\n    line-height: 1.3;\r\n}\r\n\r\n.primary-pollutant__info {\r\n    border-left: 1px solid #dedede;\r\n    padding: 2rem 1.6rem 2rem 2.6rem;\r\n    flex: 1 0 25%;\r\n    font-size: 1.4rem;\r\n    line-height: 1.2;\r\n}\r\n\r\n.primary-pollutant__info h4 {\r\n    margin-bottom: 1rem;\r\n    font-weight: bold;\r\n    font-size: 1.6rem;\r\n    line-height: 1.4;\r\n}\r\n\r\n.all-pollutants-container {\r\n    background-color: var(--color-white);\r\n    padding: 2rem;\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.all-pollutants-title {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    line-height: 1;\r\n}\r\n\r\n.all-pollutant-charts {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n    grid-column-gap: 2rem;\r\n    grid-row-gap: 2rem;\r\n    margin: 2rem 0;\r\n}\r\n\r\n.air-quality-item {\r\n    display: flex;\r\n    max-width: 40rem;\r\n    border-bottom: 1px solid #dedede;\r\n    padding: 0 1rem 1rem 1rem;\r\n}\r\n\r\n.air-quality-item:nth-child(5),\r\n.air-quality-item:nth-child(6) {\r\n    border-bottom: none;\r\n}\r\n\r\n.air-quality-item__pollutant-info {\r\n    font-size: 1.3rem;\r\n    line-height: 1.2;\r\n    padding-left: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.pollutant-info__name {\r\n    font-weight: 700;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.pollutant-info__lavel {\r\n    font-size: 1.2rem;\r\n    line-height: 1.2rem;\r\n    color: #31343a;\r\n}\r\n\r\n.pollutant-info__concentration {\r\n    font-size: 1.2rem;\r\n    line-height: 1.2rem;\r\n    color: #6f7585;\r\n}\r\n\r\n.info-icon {\r\n    display: inline-block;\r\n    width: 1.5rem;\r\n    height: 1.7rem;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\r\n}\r\n\r\n.air-quality-moreDetails {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.3rem;\r\n}\r\n\r\n.air-quality-moreDetails:hover {\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n.air-quality-popover-content {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 1rem;\r\n    grid-row-gap: 0rem;\r\n    line-height: 1.2;\r\n}\r\n\r\n.air-quality-level {\r\n    display: flex;\r\n}\r\n\r\n.air-quality-levels-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.air-quality-level:nth-child(1) .air-quality-levelColor {\r\n    background-color: #00E838;\r\n}\r\n\r\n.air-quality-level:nth-child(2) .air-quality-levelColor {\r\n    background-color: #FFFF24;\r\n}\r\n\r\n.air-quality-level:nth-child(3) .air-quality-levelColor {\r\n    background-color: #FF7200;\r\n}\r\n\r\n.air-quality-level:nth-child(4) .air-quality-levelColor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n.air-quality-level:nth-child(5) .air-quality-levelColor {\r\n    background-color: #9D3D8C;\r\n}\r\n\r\n.air-quality-level:nth-child(6) .air-quality-levelColor {\r\n    background-color: #8D0021;\r\n}\r\n\r\n.air-quality-levelColor {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-radius: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.air-quality-levels-caption,\r\n.air-quality-popover-title {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.all-pollutants-footer {\r\n    position: relative;\r\n}\r\n\r\n.popover {\r\n    display: none;\r\n    width: 50%;\r\n    max-width: 50rem;\r\n    max-height: 18rem;\r\n    margin: 0rem;\r\n    position: absolute;\r\n    bottom: 25px;\r\n    background-color: var(--color-white);\r\n    border-radius: 0.6rem;\r\n    box-shadow: 0 0 0.3rem 0.2rem #0003;\r\n}\r\n\r\n.popover-active {\r\n    display: block;\r\n}\r\n\r\n.popover-close-container {\r\n    display: flex;\r\n    position: relative;\r\n    padding: 1rem;\r\n}\r\n\r\n.popover-close {\r\n    position: absolute;\r\n    top: 0.3rem;\r\n    right: 0.3rem;\r\n    display: inline-block;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n}\r\n\r\n.popover-close:hover {\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n    .primary-pollutant-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .primary-pollutant__info {\r\n\r\n        border-left: none;\r\n        border-top: 1px solid #dedede;\r\n        padding: 2rem 0 2rem 0;\r\n        flex: 1 0 25%;\r\n        width: 100%;\r\n    }\r\n\r\n    .all-pollutant-charts {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: repeat(6, 1fr);\r\n    }\r\n\r\n    .air-quality-item {\r\n        max-width: 100%;\r\n        padding: 0 0 1rem 1rem;\r\n    }\r\n\r\n    .air-quality-item:nth-child(5) {\r\n        border-bottom: 1px solid #dedede;\r\n    }\r\n\r\n    .air-quality-item__pollutant-info {\r\n        max-width: 25rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/pages/air-quality-page/AirQualityPageComponent.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV;AACJ;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;IACrB,eAAe;IACf,8BAA8B;IAC9B,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;IAChC,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gCAAgC;IAChC,yBAAyB;AAC7B;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,cAAc;IACd,6DAA8D;AAClE;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;;IAEI,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;IACpC,qBAAqB;IACrB,mCAAmC;AACvC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,cAAc;IACd,6DAAkE;AACtE;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;;AAGA;IACI;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;;IAEA;;QAEI,iBAAiB;QACjB,6BAA6B;QAC7B,sBAAsB;QACtB,aAAa;QACb,WAAW;IACf;;IAEA;QACI,0BAA0B;QAC1B,kCAAkC;IACtC;;IAEA;QACI,eAAe;QACf,sBAAsB;IAC1B;;IAEA;QACI,gCAAgC;IACpC;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":[".other-forecast-air-quality {\r\n    margin: 1.2rem auto;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 80%;\r\n    max-width: 100rem\r\n}\r\n\r\n.air-quality-container {\r\n    background-color: var(--color-white);\r\n    margin-bottom: 1.2rem;\r\n    padding: 1.6rem;\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.air-quality-title {\r\n    margin-bottom: 1.6rem;\r\n    font-size: 1.6rem;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.air-quality-title strong {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.primary-pollutant-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\n.primary-indicator {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.6rem;\r\n}\r\n\r\n.primary-indicator__level span {\r\n    font-size: 2.4rem;\r\n    font-weight: 800;\r\n    line-height: 1.5;\r\n}\r\n\r\n.primary-indicator__level p {\r\n    margin-top: 0.6rem;\r\n    font-size: 1.4rem;\r\n    color: #6f7585;\r\n    line-height: 1.3;\r\n}\r\n\r\n.primary-pollutant__info {\r\n    border-left: 1px solid #dedede;\r\n    padding: 2rem 1.6rem 2rem 2.6rem;\r\n    flex: 1 0 25%;\r\n    font-size: 1.4rem;\r\n    line-height: 1.2;\r\n}\r\n\r\n.primary-pollutant__info h4 {\r\n    margin-bottom: 1rem;\r\n    font-weight: bold;\r\n    font-size: 1.6rem;\r\n    line-height: 1.4;\r\n}\r\n\r\n.all-pollutants-container {\r\n    background-color: var(--color-white);\r\n    padding: 2rem;\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.all-pollutants-title {\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n    line-height: 1;\r\n}\r\n\r\n.all-pollutant-charts {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n    grid-column-gap: 2rem;\r\n    grid-row-gap: 2rem;\r\n    margin: 2rem 0;\r\n}\r\n\r\n.air-quality-item {\r\n    display: flex;\r\n    max-width: 40rem;\r\n    border-bottom: 1px solid #dedede;\r\n    padding: 0 1rem 1rem 1rem;\r\n}\r\n\r\n.air-quality-item:nth-child(5),\r\n.air-quality-item:nth-child(6) {\r\n    border-bottom: none;\r\n}\r\n\r\n.air-quality-item__pollutant-info {\r\n    font-size: 1.3rem;\r\n    line-height: 1.2;\r\n    padding-left: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.pollutant-info__name {\r\n    font-weight: 700;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.pollutant-info__lavel {\r\n    font-size: 1.2rem;\r\n    line-height: 1.2rem;\r\n    color: #31343a;\r\n}\r\n\r\n.pollutant-info__concentration {\r\n    font-size: 1.2rem;\r\n    line-height: 1.2rem;\r\n    color: #6f7585;\r\n}\r\n\r\n.info-icon {\r\n    display: inline-block;\r\n    width: 1.5rem;\r\n    height: 1.7rem;\r\n    background: url('../../../assets/svg/info-icon.svg') no-repeat;\r\n}\r\n\r\n.air-quality-moreDetails {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.3rem;\r\n}\r\n\r\n.air-quality-moreDetails:hover {\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n.air-quality-popover-content {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 1rem;\r\n    grid-row-gap: 0rem;\r\n    line-height: 1.2;\r\n}\r\n\r\n.air-quality-level {\r\n    display: flex;\r\n}\r\n\r\n.air-quality-levels-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.air-quality-level:nth-child(1) .air-quality-levelColor {\r\n    background-color: #00E838;\r\n}\r\n\r\n.air-quality-level:nth-child(2) .air-quality-levelColor {\r\n    background-color: #FFFF24;\r\n}\r\n\r\n.air-quality-level:nth-child(3) .air-quality-levelColor {\r\n    background-color: #FF7200;\r\n}\r\n\r\n.air-quality-level:nth-child(4) .air-quality-levelColor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n.air-quality-level:nth-child(5) .air-quality-levelColor {\r\n    background-color: #9D3D8C;\r\n}\r\n\r\n.air-quality-level:nth-child(6) .air-quality-levelColor {\r\n    background-color: #8D0021;\r\n}\r\n\r\n.air-quality-levelColor {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-radius: 0.5rem;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.air-quality-levels-caption,\r\n.air-quality-popover-title {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.4rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.all-pollutants-footer {\r\n    position: relative;\r\n}\r\n\r\n.popover {\r\n    display: none;\r\n    width: 50%;\r\n    max-width: 50rem;\r\n    max-height: 18rem;\r\n    margin: 0rem;\r\n    position: absolute;\r\n    bottom: 25px;\r\n    background-color: var(--color-white);\r\n    border-radius: 0.6rem;\r\n    box-shadow: 0 0 0.3rem 0.2rem #0003;\r\n}\r\n\r\n.popover-active {\r\n    display: block;\r\n}\r\n\r\n.popover-close-container {\r\n    display: flex;\r\n    position: relative;\r\n    padding: 1rem;\r\n}\r\n\r\n.popover-close {\r\n    position: absolute;\r\n    top: 0.3rem;\r\n    right: 0.3rem;\r\n    display: inline-block;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background: url('../../../assets/svg/popOverCloser.svg') no-repeat;\r\n}\r\n\r\n.popover-close:hover {\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n    .primary-pollutant-container {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .primary-pollutant__info {\r\n\r\n        border-left: none;\r\n        border-top: 1px solid #dedede;\r\n        padding: 2rem 0 2rem 0;\r\n        flex: 1 0 25%;\r\n        width: 100%;\r\n    }\r\n\r\n    .all-pollutant-charts {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: repeat(6, 1fr);\r\n    }\r\n\r\n    .air-quality-item {\r\n        max-width: 100%;\r\n        padding: 0 0 1rem 1rem;\r\n    }\r\n\r\n    .air-quality-item:nth-child(5) {\r\n        border-bottom: 1px solid #dedede;\r\n    }\r\n\r\n    .air-quality-item__pollutant-info {\r\n        max-width: 25rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-map-page/weatherMap.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-map-page/weatherMap.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --main-weather-map-color: rgb(212, 149, 0);\r\n}\r\n\r\n.weather-map {\r\n    margin: 0 auto;\r\n    margin-bottom: 3rem;\r\n    width: 90%;\r\n    height: 60rem;\r\n    padding: 1rem;\r\n    max-width: 100rem;\r\n    background-color: var(--color-white);\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n}\r\n\r\n.weather-map-container {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 100rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.fullscreen {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 50;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.weather-map #windy {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.weather-map #windy #mobile-ovr-select {\r\n    display: none;\r\n}\r\n\r\n.weather-map #windy #logo {\r\n    transform: scale(0.6, 0.6);\r\n    left: 5rem;\r\n    top: -0.5rem;\r\n}\r\n\r\n#weather-data-value-display {\r\n    position: fixed;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 0.5rem;\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    z-index: 1000;\r\n}\r\n\r\n.weather-map #windy #bottom #progress-bar {\r\n    bottom: 1.5rem;\r\n}\r\n\r\n.weather-map #windy #bottom #progress-bar .progress-line {\r\n    height: 4rem;\r\n}\r\n\r\n.weather-map #accTime-legend {\r\n    position: absolute;\r\n    left: 4.5rem;\r\n    right: 0;\r\n    top: 0.6rem;\r\n    white-space: nowrap;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.weather-map #accTime-legend div {\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    padding: 0.6rem 0 0 0;\r\n    font-size: 1.2rem;\r\n    line-height: 1;\r\n    height: 2.3rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.weather-map #accTime-legend div:not(:first-child) {\r\n    border-left: 1px solid rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.weather-map #windy #legend-mobile {\r\n    position: absolute;\r\n    width: 40rem;\r\n    left: auto;\r\n    padding: 0 0.5rem;\r\n    font-size: 1.55rem;\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.weather-map #windy .timecode {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weather-map #windy #embed-zoom {\r\n    top: 0;\r\n}\r\n\r\n.weather-map #windy #embed-zoom .zoom-ctrl {\r\n    font-size: 2rem;\r\n    width: 3.5rem;\r\n    height: 3.5rem;\r\n    line-height: 1.7;\r\n}\r\n\r\n.weatherMap-controls {\r\n    margin: 0 auto;\r\n    width: 20%;\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 11%;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weatherMap-controls input {\r\n    width: auto;\r\n}\r\n\r\n.layers-buttons {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 1.1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n}\r\n\r\n.layers-buttons button {\r\n    transition: background-color .3s;\r\n    line-height: 1.4;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1.1rem;\r\n    margin-top: 0.15rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n    cursor: pointer;\r\n}\r\n\r\n.layers-buttons button:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.layers-buttons button.active {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.layers-buttons button.active:hover {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.wind-anim-toggler {\r\n    position: absolute;\r\n    top: 49%;\r\n    left: 1.1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.5rem 0;\r\n    color: #fff;\r\n    transition-duration: 300ms;\r\n    margin: 1rem 0;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.wind-anim-toggler:hover {\r\n    text-shadow: 1px 1px 4px black;\r\n}\r\n\r\n.wind-anim-toggler .switch-btn {\r\n    display: inline-block;\r\n    width: 2.5rem;\r\n    height: 1.2rem;\r\n    box-sizing: content-box;\r\n    border: 1px solid white;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    z-index: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition-duration: 300ms;\r\n    border-radius: 1.2rem;\r\n    -webkit-border-radius: 1.2rem;\r\n    -moz-border-radius: 1.2rem;\r\n    -ms-border-radius: 1.2rem;\r\n    -o-border-radius: 1.2rem;\r\n}\r\n\r\n.wind-anim-toggler .switch-btn::after {\r\n    content: \"\";\r\n    height: 1.2rem;\r\n    width: 1.1rem;\r\n    background-color: #fff;\r\n    left: 0px;\r\n    transition-duration: 300ms;\r\n    box-shadow: 0 0 4px 0 #999;\r\n    position: absolute;\r\n    z-index: 1;\r\n    border-radius: 0.9rem;\r\n    -webkit-border-radius: 0.9rem;\r\n    -moz-border-radius: 0.9rem;\r\n    -ms-border-radius: 0.9rem;\r\n    -o-border-radius: 0.9rem;\r\n}\r\n\r\n.wind-anim-toggler .switch-on {\r\n    background-color: #fff;\r\n    box-shadow: inset 0 0 4px 0 #555;\r\n}\r\n\r\n.wind-anim-toggler .switch-on::after {\r\n    left: 1.4rem;\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.layer-metric-select {\r\n    transition: background-color .3s;\r\n    line-height: 1.4;\r\n    padding: 0.2rem 0.7rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.layer-metric-select:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.layer-metric-select option {\r\n    color: black;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.layer-metric-select option:hover {\r\n    color: black;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.altitude-input-container {\r\n    position: absolute;\r\n    top: 57%;\r\n    left: 1.1rem;\r\n}\r\n\r\n.altitude-range[type=\"range\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    margin: 6rem -5rem 0 -6rem;\r\n    width: 13rem;\r\n    height: 0.8rem;\r\n    background: rgba(68, 65, 65, 0.84);\r\n    border-radius: 0.5rem;\r\n    background-image: linear-gradient(#fff, #fff);\r\n    background-size: 0% 100%;\r\n    background-repeat: no-repeat;\r\n    transform: rotate(-90deg);\r\n    -webkit-transform: rotate(-90deg);\r\n    -moz-transform: rotate(-90deg);\r\n    -ms-transform: rotate(-90deg);\r\n    -o-transform: rotate(-90deg);\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n    z-index: 5;\r\n}\r\n\r\n.altitude-range[type=\"range\"]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    border-radius: 50%;\r\n    background: var(--main-weather-map-color);\r\n    cursor: pointer;\r\n    transition: background .3s ease-in-out;\r\n    z-index: 5;\r\n    box-shadow: 0 0 2px 0 black;\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    -ms-border-radius: 50%;\r\n    -o-border-radius: 50%;\r\n    -webkit-transition: background .3s ease-in-out;\r\n    -moz-transition: background .3s ease-in-out;\r\n    -ms-transition: background .3s ease-in-out;\r\n    -o-transition: background .3s ease-in-out;\r\n}\r\n\r\n\r\n.altitude-range[type=range]::-webkit-slider-runnable-track {\r\n    -webkit-appearance: none;\r\n    box-shadow: none;\r\n    border: none;\r\n    background: transparent;\r\n}\r\n\r\n.altitude-value {\r\n    color: #fff;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    left: 2rem;\r\n    z-index: 0;\r\n    width: 7.7rem;\r\n    height: 1.8rem;\r\n    background-color: rgba(68, 65, 65);\r\n    box-shadow: 0 0 2px 0 black;\r\n    border-radius: 0.5rem;\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n}\r\n\r\n.altitude-value::before {\r\n    content: '';\r\n    left: 0;\r\n    border: solid transparent;\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    border-top-color: rgba(68, 65, 65);\r\n    border-width: 0.5em;\r\n    margin-left: -1.1rem;\r\n    transform: rotate(90deg);\r\n    -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n}\r\n\r\n.map-search-container {\r\n    display: none;\r\n    position: absolute;\r\n    top: 3.7rem;\r\n    left: 1.1rem;\r\n    width: 15%;\r\n    transition: width .5s;\r\n    -webkit-transition: width .5s;\r\n    -moz-transition: width .5s;\r\n    -ms-transition: width .5s;\r\n    -o-transition: width .5s;\r\n}\r\n\r\n.fullscreen .map-search-container {\r\n    display: block;\r\n}\r\n\r\n.active-form {\r\n    width: 35%;\r\n}\r\n\r\n.map-search-form {\r\n    width: 100%;\r\n}\r\n\r\n.map-search-input {\r\n    width: 70%;\r\n    box-sizing: border-box;\r\n    color: #333;\r\n    background-color: #fff;\r\n    border: none;\r\n    background-size: 1.8rem;\r\n    background-repeat: no-repeat;\r\n    padding: 0 1rem 0 2rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n    height: 2.6rem;\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n    background-position: 7px 6px;\r\n    border-radius: 1.5rem;\r\n    transition: .25s all 2s;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n}\r\n\r\n.map-search-form::before {\r\n    content: \"⌕\";\r\n    height: 1.2rem;\r\n    width: 1.1rem;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0.5rem;\r\n    font-size: 2rem;\r\n    color: #999;\r\n}\r\n\r\n.map-search-button {\r\n    display: none;\r\n    margin-left: 0.5rem;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    background-size: 1.8rem;\r\n    background-repeat: no-repeat;\r\n    height: 2.6rem;\r\n    font-size: 1.4rem;\r\n    background-position: 7px 6px;\r\n    line-height: 1.4;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1.1rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: var(--main-weather-map-color);\r\n    box-shadow: 0 0 4px 0 black;\r\n    transition: 0s linear 0.5s;\r\n}\r\n\r\n.find-me-button {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    transform: rotate(315deg);\r\n    font-size: 1.7rem;\r\n    border-radius: 2rem;\r\n    padding: 0.7rem 0px 0px 0.8rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n    cursor: pointer;\r\n}\r\n\r\n.find-me-button:hover {\r\n    background-color: rgba(183, 183, 183, 0.39);\r\n}\r\n\r\n.find-me-button.active {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.open-fullscreen-button {\r\n    position: absolute;\r\n    top: 6px;\r\n    left: calc(50% - 50px);\r\n    transition: background-color .3s;\r\n    font-size: 1.5rem;\r\n    line-height: 1.4;\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    border-radius: 1.2rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.open-fullscreen-button:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.open-fullscreen-button:active {\r\n    background-color: rgb(54, 52, 52);\r\n}\r\n\r\n.close-fullscreen-button {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    top: 0.6rem;\r\n    left: calc(50% - 15px);\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    border-radius: 2rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.close-fullscreen-button:hover {\r\n    background-color: rgba(183, 183, 183, 0.39);\r\n}\r\n\r\n.weather-map #burger-button {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 999;\r\n    right: 1.1rem;\r\n    display: none;\r\n    width: 4rem;\r\n    height: 3rem;\r\n    margin: 2rem auto;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.weather-map #burger-button span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 0.6rem;\r\n    width: 100%;\r\n    background: var(--main-weather-map-color);\r\n    border-radius: 0.6rem;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .25s ease-in-out;\r\n    -moz-transition: .25s ease-in-out;\r\n    -o-transition: .25s ease-in-out;\r\n    transition: .25s ease-in-out;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(1) {\r\n    top: 0;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(2) {\r\n    top: 1.2rem;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(3) {\r\n    top: 2.4rem;\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(1) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(135deg);\r\n    -moz-transform: rotate(135deg);\r\n    -o-transform: rotate(135deg);\r\n    transform: rotate(135deg);\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(2) {\r\n    opacity: 0;\r\n    left: -4rem;\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(3) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(-135deg);\r\n    -moz-transform: rotate(-135deg);\r\n    -o-transform: rotate(-135deg);\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .weather-map #burger-button {\r\n        display: block;\r\n    }\r\n\r\n    .weather-map {\r\n        height: 40rem;\r\n    }\r\n\r\n    .fullscreen {\r\n        height: 100vh;\r\n    }\r\n\r\n    .map-controls-container {\r\n        width: 25rem;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        right: -50rem;\r\n        z-index: 100;\r\n        background-color: rgba(0, 0, 0, 0.7);\r\n        transition: right .3s ease-in-out;\r\n        -webkit-transition: right .3s ease-in-out;\r\n        -moz-transition: right .3s ease-in-out;\r\n        -ms-transition: right .3s ease-in-out;\r\n        -o-transition: right .3s ease-in-out;\r\n    }\r\n\r\n    .map-controls-container>div {\r\n        opacity: 0;\r\n        transition: opacity .5s ease-in-out .3s;\r\n        -webkit-transition: opacity .5s ease-in-out .3s;\r\n        -moz-transition: opacity .5s ease-in-out .3s;\r\n        -ms-transition: opacity .5s ease-in-out .3s;\r\n        -o-transition: opacity .5s ease-in-out .3s;\r\n    }\r\n\r\n    .weather-map .burger-active {\r\n        right: 0;\r\n    }\r\n\r\n    .weather-map .burger-active>div {\r\n        opacity: 1;\r\n    }\r\n\r\n    .fullscreen .map-controls-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .map-search-container {\r\n        width: 65%;\r\n    }\r\n\r\n    .active-form {\r\n        width: 75%;\r\n    }\r\n\r\n    .map-search-form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 0.1rem;\r\n    }\r\n\r\n    .map-search-input {\r\n        width: 90%;\r\n    }\r\n\r\n    .map-search-button {\r\n        margin-left: 0;\r\n        width: 6rem;\r\n    }\r\n\r\n    .layers-buttons {\r\n        left: auto;\r\n        right: 1.1rem;\r\n        align-items: flex-end;\r\n        top: 18%;\r\n        gap: 1.7rem;\r\n    }\r\n\r\n    .wind-anim-toggler {\r\n        flex-direction: row-reverse;\r\n        gap: 0.5rem;\r\n        left: auto;\r\n        right: 1.1rem;\r\n        top: 53%;\r\n    }\r\n\r\n    .altitude-input-container {\r\n        left: auto;\r\n        right: 0.4rem;\r\n        top: 65%;\r\n    }\r\n\r\n    .altitude-value {\r\n        text-align: center;\r\n        left: -8.7rem;\r\n        z-index: 0;\r\n        width: 7.7rem;\r\n        height: 1.8rem;\r\n    }\r\n\r\n    .altitude-value::before {\r\n        left: 8.7rem;\r\n        transform: rotate(270deg);\r\n        -webkit-transform: rotate(270deg);\r\n        -moz-transform: rotate(270deg);\r\n        -ms-transform: rotate(270deg);\r\n        -o-transform: rotate(270deg);\r\n    }\r\n\r\n    .weather-map #windy #embed-zoom {\r\n        top: 30%;\r\n        left: 1.1rem;\r\n        right: auto;\r\n    }\r\n\r\n    .find-me-button {\r\n        right: auto;\r\n        left: 1.3rem;\r\n    }\r\n\r\n    .weather-map #windy #legend-mobile {\r\n        width: 40rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n    .weather-map #windy #legend-mobile {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n    .weather-map #windy #logo {\r\n        left: 5rem;\r\n        margin-left: -7rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/pages/weather-map-page/weatherMap.css"],"names":[],"mappings":"AAAA;IACI,0CAA0C;AAC9C;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,oCAAoC;IACpC,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,WAAW;IACX,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,0CAA0C;IAC1C,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,wCAAwC;IACxC,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,WAAW;IACX,mBAAmB;IACnB,0CAA0C;IAC1C,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,MAAM;AACV;;AAEA;IACI,eAAe;IACf,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;IACnB,oBAAoB;IACpB,yBAAyB;IACzB,oCAAoC;IACpC,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,WAAW;IACX,0BAA0B;IAC1B,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB,oCAAoC;IACpC,UAAU;IACV,SAAS;IACT,UAAU;IACV,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,0BAA0B;IAC1B,0BAA0B;IAC1B,kBAAkB;IAClB,UAAU;IACV,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,+CAA+C;AACnD;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,sBAAsB;IACtB,oBAAoB;IACpB,yBAAyB;IACzB,oCAAoC;IACpC,2BAA2B;AAC/B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,kBAAkB;IAClB,0BAA0B;IAC1B,YAAY;IACZ,cAAc;IACd,kCAAkC;IAClC,qBAAqB;IACrB,6CAA6C;IAC7C,wBAAwB;IACxB,4BAA4B;IAC5B,yBAAyB;IACzB,iCAAiC;IACjC,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;IACxB,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,yCAAyC;IACzC,eAAe;IACf,sCAAsC;IACtC,UAAU;IACV,2BAA2B;IAC3B,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,8CAA8C;IAC9C,2CAA2C;IAC3C,0CAA0C;IAC1C,yCAAyC;AAC7C;;;AAGA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;IACV,UAAU;IACV,aAAa;IACb,cAAc;IACd,kCAAkC;IAClC,2BAA2B;IAC3B,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,OAAO;IACP,yBAAyB;IACzB,SAAS;IACT,QAAQ;IACR,kBAAkB;IAClB,kCAAkC;IAClC,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,gCAAgC;IAChC,6BAA6B;IAC7B,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,qBAAqB;IACrB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,sBAAsB;IACtB,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;IACvB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,4BAA4B;IAC5B,qBAAqB;IACrB,uBAAuB;IACvB,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;IACvB,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,4BAA4B;IAC5B,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,oBAAoB;IACpB,yBAAyB;IACzB,+CAA+C;IAC/C,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,yBAAyB;IACzB,iBAAiB;IACjB,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;IACtB,gCAAgC;IAChC,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,yBAAyB;IACzB,oCAAoC;IACpC,2BAA2B;AAC/B;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,wCAAwC;AAC5C;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,aAAa;IACb,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;IAC/B,4BAA4B;IAC5B,0BAA0B;IAC1B,uBAAuB;IACvB,mCAAmC;IACnC,gCAAgC;IAChC,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,yCAAyC;IACzC,qBAAqB;IACrB,UAAU;IACV,OAAO;IACP,+BAA+B;IAC/B,4BAA4B;IAC5B,0BAA0B;IAC1B,uBAAuB;IACvB,oCAAoC;IACpC,iCAAiC;IACjC,+BAA+B;IAC/B,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,MAAM;AACV;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,WAAW;IACX,kCAAkC;IAClC,+BAA+B;IAC/B,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,YAAY;QACZ,kBAAkB;QAClB,MAAM;QACN,aAAa;QACb,YAAY;QACZ,oCAAoC;QACpC,iCAAiC;QACjC,yCAAyC;QACzC,sCAAsC;QACtC,qCAAqC;QACrC,oCAAoC;IACxC;;IAEA;QACI,UAAU;QACV,uCAAuC;QACvC,+CAA+C;QAC/C,4CAA4C;QAC5C,2CAA2C;QAC3C,0CAA0C;IAC9C;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,WAAW;IACf;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,cAAc;QACd,WAAW;IACf;;IAEA;QACI,UAAU;QACV,aAAa;QACb,qBAAqB;QACrB,QAAQ;QACR,WAAW;IACf;;IAEA;QACI,2BAA2B;QAC3B,WAAW;QACX,UAAU;QACV,aAAa;QACb,QAAQ;IACZ;;IAEA;QACI,UAAU;QACV,aAAa;QACb,QAAQ;IACZ;;IAEA;QACI,kBAAkB;QAClB,aAAa;QACb,UAAU;QACV,aAAa;QACb,cAAc;IAClB;;IAEA;QACI,YAAY;QACZ,yBAAyB;QACzB,iCAAiC;QACjC,8BAA8B;QAC9B,6BAA6B;QAC7B,4BAA4B;IAChC;;IAEA;QACI,QAAQ;QACR,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;QACV,kBAAkB;IACtB;AACJ","sourcesContent":[":root {\r\n    --main-weather-map-color: rgb(212, 149, 0);\r\n}\r\n\r\n.weather-map {\r\n    margin: 0 auto;\r\n    margin-bottom: 3rem;\r\n    width: 90%;\r\n    height: 60rem;\r\n    padding: 1rem;\r\n    max-width: 100rem;\r\n    background-color: var(--color-white);\r\n    box-shadow: 0 0 1.2rem 0 #0003;\r\n    border-radius: 0.6rem;\r\n}\r\n\r\n.weather-map-container {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 100rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.fullscreen {\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 50;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.weather-map #windy {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.weather-map #windy #mobile-ovr-select {\r\n    display: none;\r\n}\r\n\r\n.weather-map #windy #logo {\r\n    transform: scale(0.6, 0.6);\r\n    left: 5rem;\r\n    top: -0.5rem;\r\n}\r\n\r\n#weather-data-value-display {\r\n    position: fixed;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    padding: 0.5rem 1rem;\r\n    border-radius: 0.5rem;\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    z-index: 1000;\r\n}\r\n\r\n.weather-map #windy #bottom #progress-bar {\r\n    bottom: 1.5rem;\r\n}\r\n\r\n.weather-map #windy #bottom #progress-bar .progress-line {\r\n    height: 4rem;\r\n}\r\n\r\n.weather-map #accTime-legend {\r\n    position: absolute;\r\n    left: 4.5rem;\r\n    right: 0;\r\n    top: 0.6rem;\r\n    white-space: nowrap;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.weather-map #accTime-legend div {\r\n    display: inline-block;\r\n    box-sizing: border-box;\r\n    text-align: center;\r\n    padding: 0.6rem 0 0 0;\r\n    font-size: 1.2rem;\r\n    line-height: 1;\r\n    height: 2.3rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.weather-map #accTime-legend div:not(:first-child) {\r\n    border-left: 1px solid rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.weather-map #windy #legend-mobile {\r\n    position: absolute;\r\n    width: 40rem;\r\n    left: auto;\r\n    padding: 0 0.5rem;\r\n    font-size: 1.55rem;\r\n    border-radius: 1.5rem;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.weather-map #windy .timecode {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weather-map #windy #embed-zoom {\r\n    top: 0;\r\n}\r\n\r\n.weather-map #windy #embed-zoom .zoom-ctrl {\r\n    font-size: 2rem;\r\n    width: 3.5rem;\r\n    height: 3.5rem;\r\n    line-height: 1.7;\r\n}\r\n\r\n.weatherMap-controls {\r\n    margin: 0 auto;\r\n    width: 20%;\r\n    position: absolute;\r\n    top: 60%;\r\n    left: 11%;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.weatherMap-controls input {\r\n    width: auto;\r\n}\r\n\r\n.layers-buttons {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 1.1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n}\r\n\r\n.layers-buttons button {\r\n    transition: background-color .3s;\r\n    line-height: 1.4;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1.1rem;\r\n    margin-top: 0.15rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n    cursor: pointer;\r\n}\r\n\r\n.layers-buttons button:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.layers-buttons button.active {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.layers-buttons button.active:hover {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.wind-anim-toggler {\r\n    position: absolute;\r\n    top: 49%;\r\n    left: 1.1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.5rem 0;\r\n    color: #fff;\r\n    transition-duration: 300ms;\r\n    margin: 1rem 0;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.wind-anim-toggler:hover {\r\n    text-shadow: 1px 1px 4px black;\r\n}\r\n\r\n.wind-anim-toggler .switch-btn {\r\n    display: inline-block;\r\n    width: 2.5rem;\r\n    height: 1.2rem;\r\n    box-sizing: content-box;\r\n    border: 1px solid white;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    z-index: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition-duration: 300ms;\r\n    border-radius: 1.2rem;\r\n    -webkit-border-radius: 1.2rem;\r\n    -moz-border-radius: 1.2rem;\r\n    -ms-border-radius: 1.2rem;\r\n    -o-border-radius: 1.2rem;\r\n}\r\n\r\n.wind-anim-toggler .switch-btn::after {\r\n    content: \"\";\r\n    height: 1.2rem;\r\n    width: 1.1rem;\r\n    background-color: #fff;\r\n    left: 0px;\r\n    transition-duration: 300ms;\r\n    box-shadow: 0 0 4px 0 #999;\r\n    position: absolute;\r\n    z-index: 1;\r\n    border-radius: 0.9rem;\r\n    -webkit-border-radius: 0.9rem;\r\n    -moz-border-radius: 0.9rem;\r\n    -ms-border-radius: 0.9rem;\r\n    -o-border-radius: 0.9rem;\r\n}\r\n\r\n.wind-anim-toggler .switch-on {\r\n    background-color: #fff;\r\n    box-shadow: inset 0 0 4px 0 #555;\r\n}\r\n\r\n.wind-anim-toggler .switch-on::after {\r\n    left: 1.4rem;\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.layer-metric-select {\r\n    transition: background-color .3s;\r\n    line-height: 1.4;\r\n    padding: 0.2rem 0.7rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.layer-metric-select:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.layer-metric-select option {\r\n    color: black;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.layer-metric-select option:hover {\r\n    color: black;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.altitude-input-container {\r\n    position: absolute;\r\n    top: 57%;\r\n    left: 1.1rem;\r\n}\r\n\r\n.altitude-range[type=\"range\"] {\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    margin: 6rem -5rem 0 -6rem;\r\n    width: 13rem;\r\n    height: 0.8rem;\r\n    background: rgba(68, 65, 65, 0.84);\r\n    border-radius: 0.5rem;\r\n    background-image: linear-gradient(#fff, #fff);\r\n    background-size: 0% 100%;\r\n    background-repeat: no-repeat;\r\n    transform: rotate(-90deg);\r\n    -webkit-transform: rotate(-90deg);\r\n    -moz-transform: rotate(-90deg);\r\n    -ms-transform: rotate(-90deg);\r\n    -o-transform: rotate(-90deg);\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n    z-index: 5;\r\n}\r\n\r\n.altitude-range[type=\"range\"]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    height: 1.8rem;\r\n    width: 1.8rem;\r\n    border-radius: 50%;\r\n    background: var(--main-weather-map-color);\r\n    cursor: pointer;\r\n    transition: background .3s ease-in-out;\r\n    z-index: 5;\r\n    box-shadow: 0 0 2px 0 black;\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    -ms-border-radius: 50%;\r\n    -o-border-radius: 50%;\r\n    -webkit-transition: background .3s ease-in-out;\r\n    -moz-transition: background .3s ease-in-out;\r\n    -ms-transition: background .3s ease-in-out;\r\n    -o-transition: background .3s ease-in-out;\r\n}\r\n\r\n\r\n.altitude-range[type=range]::-webkit-slider-runnable-track {\r\n    -webkit-appearance: none;\r\n    box-shadow: none;\r\n    border: none;\r\n    background: transparent;\r\n}\r\n\r\n.altitude-value {\r\n    color: #fff;\r\n    font-size: 1.2rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    left: 2rem;\r\n    z-index: 0;\r\n    width: 7.7rem;\r\n    height: 1.8rem;\r\n    background-color: rgba(68, 65, 65);\r\n    box-shadow: 0 0 2px 0 black;\r\n    border-radius: 0.5rem;\r\n    -webkit-border-radius: 0.5rem;\r\n    -moz-border-radius: 0.5rem;\r\n    -ms-border-radius: 0.5rem;\r\n    -o-border-radius: 0.5rem;\r\n}\r\n\r\n.altitude-value::before {\r\n    content: '';\r\n    left: 0;\r\n    border: solid transparent;\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    border-top-color: rgba(68, 65, 65);\r\n    border-width: 0.5em;\r\n    margin-left: -1.1rem;\r\n    transform: rotate(90deg);\r\n    -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n}\r\n\r\n.map-search-container {\r\n    display: none;\r\n    position: absolute;\r\n    top: 3.7rem;\r\n    left: 1.1rem;\r\n    width: 15%;\r\n    transition: width .5s;\r\n    -webkit-transition: width .5s;\r\n    -moz-transition: width .5s;\r\n    -ms-transition: width .5s;\r\n    -o-transition: width .5s;\r\n}\r\n\r\n.fullscreen .map-search-container {\r\n    display: block;\r\n}\r\n\r\n.active-form {\r\n    width: 35%;\r\n}\r\n\r\n.map-search-form {\r\n    width: 100%;\r\n}\r\n\r\n.map-search-input {\r\n    width: 70%;\r\n    box-sizing: border-box;\r\n    color: #333;\r\n    background-color: #fff;\r\n    border: none;\r\n    background-size: 1.8rem;\r\n    background-repeat: no-repeat;\r\n    padding: 0 1rem 0 2rem;\r\n    box-shadow: 0 0 4px 0 black;\r\n    height: 2.6rem;\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n    background-position: 7px 6px;\r\n    border-radius: 1.5rem;\r\n    transition: .25s all 2s;\r\n    -webkit-border-radius: 1.5rem;\r\n    -moz-border-radius: 1.5rem;\r\n    -ms-border-radius: 1.5rem;\r\n    -o-border-radius: 1.5rem;\r\n}\r\n\r\n.map-search-form::before {\r\n    content: \"⌕\";\r\n    height: 1.2rem;\r\n    width: 1.1rem;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0.5rem;\r\n    font-size: 2rem;\r\n    color: #999;\r\n}\r\n\r\n.map-search-button {\r\n    display: none;\r\n    margin-left: 0.5rem;\r\n    box-sizing: border-box;\r\n    border: none;\r\n    background-size: 1.8rem;\r\n    background-repeat: no-repeat;\r\n    height: 2.6rem;\r\n    font-size: 1.4rem;\r\n    background-position: 7px 6px;\r\n    line-height: 1.4;\r\n    padding-left: 1.1rem;\r\n    padding-right: 1.1rem;\r\n    border-radius: 1.2em;\r\n    color: rgb(255, 255, 255);\r\n    background-color: var(--main-weather-map-color);\r\n    box-shadow: 0 0 4px 0 black;\r\n    transition: 0s linear 0.5s;\r\n}\r\n\r\n.find-me-button {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    transform: rotate(315deg);\r\n    font-size: 1.7rem;\r\n    border-radius: 2rem;\r\n    padding: 0.7rem 0px 0px 0.8rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n    cursor: pointer;\r\n}\r\n\r\n.find-me-button:hover {\r\n    background-color: rgba(183, 183, 183, 0.39);\r\n}\r\n\r\n.find-me-button.active {\r\n    background-color: var(--main-weather-map-color);\r\n}\r\n\r\n.open-fullscreen-button {\r\n    position: absolute;\r\n    top: 6px;\r\n    left: calc(50% - 50px);\r\n    transition: background-color .3s;\r\n    font-size: 1.5rem;\r\n    line-height: 1.4;\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    border-radius: 1.2rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 4px 0 black;\r\n}\r\n\r\n.open-fullscreen-button:hover {\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.open-fullscreen-button:active {\r\n    background-color: rgb(54, 52, 52);\r\n}\r\n\r\n.close-fullscreen-button {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    top: 0.6rem;\r\n    left: calc(50% - 15px);\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    border-radius: 2rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(68, 65, 65, 0.84);\r\n}\r\n\r\n.close-fullscreen-button:hover {\r\n    background-color: rgba(183, 183, 183, 0.39);\r\n}\r\n\r\n.weather-map #burger-button {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 999;\r\n    right: 1.1rem;\r\n    display: none;\r\n    width: 4rem;\r\n    height: 3rem;\r\n    margin: 2rem auto;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.weather-map #burger-button span {\r\n    display: block;\r\n    position: absolute;\r\n    height: 0.6rem;\r\n    width: 100%;\r\n    background: var(--main-weather-map-color);\r\n    border-radius: 0.6rem;\r\n    opacity: 1;\r\n    left: 0;\r\n    -webkit-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n    -webkit-transition: .25s ease-in-out;\r\n    -moz-transition: .25s ease-in-out;\r\n    -o-transition: .25s ease-in-out;\r\n    transition: .25s ease-in-out;\r\n    -webkit-border-radius: 0.6rem;\r\n    -moz-border-radius: 0.6rem;\r\n    -ms-border-radius: 0.6rem;\r\n    -o-border-radius: 0.6rem;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(1) {\r\n    top: 0;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(2) {\r\n    top: 1.2rem;\r\n}\r\n\r\n.weather-map #burger-button span:nth-child(3) {\r\n    top: 2.4rem;\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(1) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(135deg);\r\n    -moz-transform: rotate(135deg);\r\n    -o-transform: rotate(135deg);\r\n    transform: rotate(135deg);\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(2) {\r\n    opacity: 0;\r\n    left: -4rem;\r\n}\r\n\r\n.weather-map #burger-button.open span:nth-child(3) {\r\n    top: 1.2rem;\r\n    -webkit-transform: rotate(-135deg);\r\n    -moz-transform: rotate(-135deg);\r\n    -o-transform: rotate(-135deg);\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .weather-map #burger-button {\r\n        display: block;\r\n    }\r\n\r\n    .weather-map {\r\n        height: 40rem;\r\n    }\r\n\r\n    .fullscreen {\r\n        height: 100vh;\r\n    }\r\n\r\n    .map-controls-container {\r\n        width: 25rem;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        right: -50rem;\r\n        z-index: 100;\r\n        background-color: rgba(0, 0, 0, 0.7);\r\n        transition: right .3s ease-in-out;\r\n        -webkit-transition: right .3s ease-in-out;\r\n        -moz-transition: right .3s ease-in-out;\r\n        -ms-transition: right .3s ease-in-out;\r\n        -o-transition: right .3s ease-in-out;\r\n    }\r\n\r\n    .map-controls-container>div {\r\n        opacity: 0;\r\n        transition: opacity .5s ease-in-out .3s;\r\n        -webkit-transition: opacity .5s ease-in-out .3s;\r\n        -moz-transition: opacity .5s ease-in-out .3s;\r\n        -ms-transition: opacity .5s ease-in-out .3s;\r\n        -o-transition: opacity .5s ease-in-out .3s;\r\n    }\r\n\r\n    .weather-map .burger-active {\r\n        right: 0;\r\n    }\r\n\r\n    .weather-map .burger-active>div {\r\n        opacity: 1;\r\n    }\r\n\r\n    .fullscreen .map-controls-container {\r\n        height: 100vh;\r\n    }\r\n\r\n    .map-search-container {\r\n        width: 65%;\r\n    }\r\n\r\n    .active-form {\r\n        width: 75%;\r\n    }\r\n\r\n    .map-search-form {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 0.1rem;\r\n    }\r\n\r\n    .map-search-input {\r\n        width: 90%;\r\n    }\r\n\r\n    .map-search-button {\r\n        margin-left: 0;\r\n        width: 6rem;\r\n    }\r\n\r\n    .layers-buttons {\r\n        left: auto;\r\n        right: 1.1rem;\r\n        align-items: flex-end;\r\n        top: 18%;\r\n        gap: 1.7rem;\r\n    }\r\n\r\n    .wind-anim-toggler {\r\n        flex-direction: row-reverse;\r\n        gap: 0.5rem;\r\n        left: auto;\r\n        right: 1.1rem;\r\n        top: 53%;\r\n    }\r\n\r\n    .altitude-input-container {\r\n        left: auto;\r\n        right: 0.4rem;\r\n        top: 65%;\r\n    }\r\n\r\n    .altitude-value {\r\n        text-align: center;\r\n        left: -8.7rem;\r\n        z-index: 0;\r\n        width: 7.7rem;\r\n        height: 1.8rem;\r\n    }\r\n\r\n    .altitude-value::before {\r\n        left: 8.7rem;\r\n        transform: rotate(270deg);\r\n        -webkit-transform: rotate(270deg);\r\n        -moz-transform: rotate(270deg);\r\n        -ms-transform: rotate(270deg);\r\n        -o-transform: rotate(270deg);\r\n    }\r\n\r\n    .weather-map #windy #embed-zoom {\r\n        top: 30%;\r\n        left: 1.1rem;\r\n        right: auto;\r\n    }\r\n\r\n    .find-me-button {\r\n        right: auto;\r\n        left: 1.3rem;\r\n    }\r\n\r\n    .weather-map #windy #legend-mobile {\r\n        width: 40rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n    .weather-map #windy #legend-mobile {\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n    .weather-map #windy #logo {\r\n        left: 5rem;\r\n        margin-left: -7rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-today-page/weather-today-page.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-today-page/weather-today-page.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/sunrise-sunset-path.svg */ "./src/assets/svg/sunrise-sunset-path.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/daylight.svg */ "./src/assets/svg/daylight.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/wind-icon.svg */ "./src/assets/svg/wind-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/humidity-icon.svg */ "./src/assets/svg/humidity-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/cloud-icon.svg */ "./src/assets/svg/cloud-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/pressure-icon.svg */ "./src/assets/svg/pressure-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/visibility-icon.svg */ "./src/assets/svg/visibility-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/svg/temp-icon.svg */ "./src/assets/svg/temp-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".weather-today {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-column-gap: 0rem;\r\n    grid-row-gap: 1rem;\r\n    margin: 1.2rem auto;\r\n    height: 100%;\r\n    width: 80%;\r\n    max-width: 100rem;\r\n}\r\n\r\n.current-conditions-card {\r\n    width: 100%;\r\n    background-color: var(--color-white);\r\n    border-radius: 1rem;\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.current-conditions-card-title {\r\n    display: flex;\r\n    border-radius: 1rem 1rem 0 0;\r\n    background-color: var(--color-headerBlock);\r\n    padding: 1.5rem 1.6rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: start;\r\n    color: var(--color-white);\r\n}\r\n\r\n.current-conditions-card-title__timestamp {\r\n    margin: 0.3rem 0 0 4rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.box-temp-value {\r\n    font-size: 10rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.box-temp-phrase {\r\n    font-size: 2.5rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.box-temp-label {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.current-conditions-box {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem 10rem;\r\n}\r\n\r\n.current-conditions-icon {\r\n    width: 16rem;\r\n    height: 16rem;\r\n}\r\n\r\n.button-primery {\r\n    border-radius: 1.5rem;\r\n    cursor: pointer;\r\n    margin: 1rem;\r\n    padding: 1rem 1.5rem;\r\n    background-color: var(--color-logo-border);\r\n}\r\n\r\n.today-weather-card {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border-radius: 1rem;\r\n    background-color: var(--color-white);\r\n}\r\n\r\n.today-weather-card-title,\r\n.today-details-title {\r\n    display: flex;\r\n    padding: 2rem 0 1rem 1.5rem;\r\n    gap: 1rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.weather-table--columns {\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0rem;\r\n    grid-row-gap: 0rem;\r\n    list-style-type: none;\r\n    margin-top: 4rem;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.colomn-times-of-day {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    font-weight: 400;\r\n}\r\n\r\n.colomn-precip-icon {\r\n    width: 0rem;\r\n    height: 0rem;\r\n}\r\n\r\n.colomn-label {\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.colomn-label {\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n    color: var(--color-logo-border);\r\n}\r\n\r\n.card-footer {\r\n    margin-top: 5rem;\r\n}\r\n\r\n.today-details-card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    border-radius: 1rem;\r\n    background-color: var(--color-white);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.today-details-title-body {\r\n    margin: 1rem 0 0 1rem;\r\n}\r\n\r\n.today-details-header {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    padding: 2.5rem 7.6rem;\r\n}\r\n\r\n.today-details-header__feels-like-temp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.today-details-header__feels-like-temp_value {\r\n    font-size: 5.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.today-details-header__feels-like-temp_label {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.weather-details-item-icon {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    cursor: pointer;\r\n}\r\n\r\n.sunrise-sunset-svg-box {\r\n    width: 10rem;\r\n    height: 6rem;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\r\n\r\n    transform-origin: 4rem 4rem;\r\n    transform: rotate(180deg);\r\n    stroke: #e87538;\r\n    fill: none;\r\n    stroke-width: 0.2rem;\r\n    stroke-linecap: round;\r\n}\r\n\r\n.sunrise-sunset-svg {\r\n    width: 10rem;\r\n    height: 6rem;\r\n}\r\n\r\n.sunrise-sunset {\r\n    width: 10rem;\r\n    height: 5rem;\r\n    margin-bottom: .6rem;\r\n}\r\n\r\n.sunrise-sunset-box {\r\n    position: relative;\r\n}\r\n\r\n.sunrise-sunset-animation {\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    left: .4rem;\r\n    width: 10rem;\r\n    height: 5.3rem;\r\n    box-sizing: content-box;\r\n    overflow: hidden;\r\n}\r\n\r\n.sunrise-sunset-animation-box {\r\n    width: 9.8rem;\r\n    height: 2.5rem;\r\n    transform: rotate(0deg);\r\n    bottom: -1.2rem;\r\n    position: relative;\r\n}\r\n\r\n.sunrise-sunset-animation-sun-icon {\r\n    width: 2.3rem;\r\n    height: 2.3rem;\r\n    border-radius: 50%;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n    margin-top: 3rem;\r\n}\r\n\r\n.sunrise-sunset-path {\r\n    transform-origin: 4rem 4rem;\r\n    transform: rotate(180deg);\r\n    stroke: #e87538;\r\n    fill: none;\r\n    stroke-width: 0.2rem;\r\n    stroke-linecap: round;\r\n}\r\n\r\n.sunrise-sunset-time {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.today-details-indicators {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    font-size: 1.6rem;\r\n    margin: 0 2rem 2rem;\r\n}\r\n\r\n.todays-details-item {\r\n    flex-basis: 40%;\r\n    display: flex;\r\n    margin: 0 1rem;\r\n    border-bottom: solid 0.1rem var(--color-light-grey);\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    align-items: center;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.today-details-item-label {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.today-details-item-info-box {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.icon-container-wind-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-humidity-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-cloudiness-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-pressure-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-visibility-item {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-max-min-temp {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat center;\r\n}\r\n\r\n.icon-container-humidity-item,\r\n.icon-container-max-min-temp,\r\n.icon-container-wind-item,\r\n.icon-container-cloudiness-item,\r\n.icon-container-pressure-item,\r\n.icon-container-visibility-item {\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .current-conditions-box {\r\n        padding: 1rem 4.6rem;\r\n    }\r\n\r\n    .today-details-header {\r\n        padding: 2.5rem 3.6rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .today-details-indicators {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        flex-wrap: nowrap;\r\n        width: 90%;\r\n    }\r\n\r\n    .todays-details-item {\r\n        width: 90%;\r\n    }\r\n\r\n    .current-conditions-box {\r\n        padding: 1rem 2.6rem;\r\n    }\r\n\r\n    .today-details-header {\r\n        padding: 2.5rem 3.6rem;\r\n    }\r\n\r\n    @media screen and (max-width: 479px) {\r\n        .today-details-header {\r\n            padding: 2.5rem 2.6rem;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 449px) {\r\n        .today-details-title {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 379px) {\r\n        .weather-today {\r\n            width: 90%;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 329px) {\r\n        .weather-today {\r\n            width: 100%;\r\n        }\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/view/pages/weather-today-page/weather-today-page.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,0BAA0B;IAC1B,qBAAqB;IACrB,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,oCAAoC;IACpC,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,0CAA0C;IAC1C,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;;IAEI,aAAa;IACb,2BAA2B;IAC3B,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,oCAAoC;IACpC,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oEAA+E;;IAE/E,2BAA2B;IAC3B,yBAAyB;IACzB,eAAe;IACf,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,oEAAoE;IACpE,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,eAAe;IACf,UAAU;IACV,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,cAAc;IACd,mDAAmD;IACnD,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,oEAAqE;AACzE;;AAEA;IACI,oEAAyE;AAC7E;;AAEA;IACI,oEAAsE;AAC1E;;AAEA;IACI,oEAAyE;AAC7E;;AAEA;IACI,oEAA2E;AAC/E;;AAEA;IACI,oEAAqE;AACzE;;AAEA;;;;;;IAMI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI;QACI,oBAAoB;IACxB;;IAEA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,uBAAuB;QACvB,iBAAiB;QACjB,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI;YACI,sBAAsB;QAC1B;IACJ;;IAEA;QACI;YACI,sBAAsB;QAC1B;IACJ;;IAEA;QACI;YACI,UAAU;QACd;IACJ;;IAEA;QACI;YACI,WAAW;QACf;IACJ;AACJ","sourcesContent":[".weather-today {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-column-gap: 0rem;\r\n    grid-row-gap: 1rem;\r\n    margin: 1.2rem auto;\r\n    height: 100%;\r\n    width: 80%;\r\n    max-width: 100rem;\r\n}\r\n\r\n.current-conditions-card {\r\n    width: 100%;\r\n    background-color: var(--color-white);\r\n    border-radius: 1rem;\r\n    margin: 0 auto;\r\n    margin-top: 1rem;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.current-conditions-card-title {\r\n    display: flex;\r\n    border-radius: 1rem 1rem 0 0;\r\n    background-color: var(--color-headerBlock);\r\n    padding: 1.5rem 1.6rem;\r\n    gap: 3rem;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: start;\r\n    color: var(--color-white);\r\n}\r\n\r\n.current-conditions-card-title__timestamp {\r\n    margin: 0.3rem 0 0 4rem;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.box-temp-value {\r\n    font-size: 10rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.box-temp-phrase {\r\n    font-size: 2.5rem;\r\n    font-weight: 900;\r\n}\r\n\r\n.box-temp-label {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.current-conditions-box {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem 10rem;\r\n}\r\n\r\n.current-conditions-icon {\r\n    width: 16rem;\r\n    height: 16rem;\r\n}\r\n\r\n.button-primery {\r\n    border-radius: 1.5rem;\r\n    cursor: pointer;\r\n    margin: 1rem;\r\n    padding: 1rem 1.5rem;\r\n    background-color: var(--color-logo-border);\r\n}\r\n\r\n.today-weather-card {\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    border-radius: 1rem;\r\n    background-color: var(--color-white);\r\n}\r\n\r\n.today-weather-card-title,\r\n.today-details-title {\r\n    display: flex;\r\n    padding: 2rem 0 1rem 1.5rem;\r\n    gap: 1rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.weather-table--columns {\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0rem;\r\n    grid-row-gap: 0rem;\r\n    list-style-type: none;\r\n    margin-top: 4rem;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.colomn-times-of-day {\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    font-weight: 400;\r\n}\r\n\r\n.colomn-precip-icon {\r\n    width: 0rem;\r\n    height: 0rem;\r\n}\r\n\r\n.colomn-label {\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.colomn-label {\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n    color: var(--color-logo-border);\r\n}\r\n\r\n.card-footer {\r\n    margin-top: 5rem;\r\n}\r\n\r\n.today-details-card {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    border-radius: 1rem;\r\n    background-color: var(--color-white);\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.today-details-title-body {\r\n    margin: 1rem 0 0 1rem;\r\n}\r\n\r\n.today-details-header {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    padding: 2.5rem 7.6rem;\r\n}\r\n\r\n.today-details-header__feels-like-temp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.today-details-header__feels-like-temp_value {\r\n    font-size: 5.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.today-details-header__feels-like-temp_label {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.weather-details-item-icon {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    cursor: pointer;\r\n}\r\n\r\n.sunrise-sunset-svg-box {\r\n    width: 10rem;\r\n    height: 6rem;\r\n    background: url('../../../assets/svg/sunrise-sunset-path.svg') no-repeat center;\r\n\r\n    transform-origin: 4rem 4rem;\r\n    transform: rotate(180deg);\r\n    stroke: #e87538;\r\n    fill: none;\r\n    stroke-width: 0.2rem;\r\n    stroke-linecap: round;\r\n}\r\n\r\n.sunrise-sunset-svg {\r\n    width: 10rem;\r\n    height: 6rem;\r\n}\r\n\r\n.sunrise-sunset {\r\n    width: 10rem;\r\n    height: 5rem;\r\n    margin-bottom: .6rem;\r\n}\r\n\r\n.sunrise-sunset-box {\r\n    position: relative;\r\n}\r\n\r\n.sunrise-sunset-animation {\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    left: .4rem;\r\n    width: 10rem;\r\n    height: 5.3rem;\r\n    box-sizing: content-box;\r\n    overflow: hidden;\r\n}\r\n\r\n.sunrise-sunset-animation-box {\r\n    width: 9.8rem;\r\n    height: 2.5rem;\r\n    transform: rotate(0deg);\r\n    bottom: -1.2rem;\r\n    position: relative;\r\n}\r\n\r\n.sunrise-sunset-animation-sun-icon {\r\n    width: 2.3rem;\r\n    height: 2.3rem;\r\n    border-radius: 50%;\r\n    background: url('../../../assets/svg/daylight.svg') no-repeat center;\r\n    margin-top: 3rem;\r\n}\r\n\r\n.sunrise-sunset-path {\r\n    transform-origin: 4rem 4rem;\r\n    transform: rotate(180deg);\r\n    stroke: #e87538;\r\n    fill: none;\r\n    stroke-width: 0.2rem;\r\n    stroke-linecap: round;\r\n}\r\n\r\n.sunrise-sunset-time {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.today-details-indicators {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    font-size: 1.6rem;\r\n    margin: 0 2rem 2rem;\r\n}\r\n\r\n.todays-details-item {\r\n    flex-basis: 40%;\r\n    display: flex;\r\n    margin: 0 1rem;\r\n    border-bottom: solid 0.1rem var(--color-light-grey);\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    align-items: center;\r\n    flex-flow: row nowrap;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n}\r\n\r\n.today-details-item-label {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.today-details-item-info-box {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.icon-container-wind-item {\r\n    background: url('../../../assets/svg/wind-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-humidity-item {\r\n    background: url('../../../assets/svg/humidity-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-cloudiness-item {\r\n    background: url('../../../assets/svg/cloud-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-pressure-item {\r\n    background: url('../../../assets/svg/pressure-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-visibility-item {\r\n    background: url('../../../assets/svg/visibility-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-max-min-temp {\r\n    background: url('../../../assets/svg/temp-icon.svg') no-repeat center;\r\n}\r\n\r\n.icon-container-humidity-item,\r\n.icon-container-max-min-temp,\r\n.icon-container-wind-item,\r\n.icon-container-cloudiness-item,\r\n.icon-container-pressure-item,\r\n.icon-container-visibility-item {\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .current-conditions-box {\r\n        padding: 1rem 4.6rem;\r\n    }\r\n\r\n    .today-details-header {\r\n        padding: 2.5rem 3.6rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .today-details-indicators {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        flex-wrap: nowrap;\r\n        width: 90%;\r\n    }\r\n\r\n    .todays-details-item {\r\n        width: 90%;\r\n    }\r\n\r\n    .current-conditions-box {\r\n        padding: 1rem 2.6rem;\r\n    }\r\n\r\n    .today-details-header {\r\n        padding: 2.5rem 3.6rem;\r\n    }\r\n\r\n    @media screen and (max-width: 479px) {\r\n        .today-details-header {\r\n            padding: 2.5rem 2.6rem;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 449px) {\r\n        .today-details-title {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 379px) {\r\n        .weather-today {\r\n            width: 90%;\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 329px) {\r\n        .weather-today {\r\n            width: 100%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/components/footer/footer.css":
/*!***********************************************!*\
  !*** ./src/view/components/footer/footer.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/components/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/components/header/header.css":
/*!***********************************************!*\
  !*** ./src/view/components/header/header.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/components/header/searcher.css":
/*!*************************************************!*\
  !*** ./src/view/components/header/searcher.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_searcher_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./searcher.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/components/header/searcher.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_searcher_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_searcher_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_searcher_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_searcher_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/components/voiceControl/voiceControl.css":
/*!***********************************************************!*\
  !*** ./src/view/components/voiceControl/voiceControl.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_voiceControl_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./voiceControl.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/components/voiceControl/voiceControl.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_voiceControl_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_voiceControl_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_voiceControl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_voiceControl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/pages/5-days-weather-page/WeatherDayComponent.css":
/*!********************************************************************!*\
  !*** ./src/view/pages/5-days-weather-page/WeatherDayComponent.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./WeatherDayComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherDayComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css":
/*!*****************************************************************************!*\
  !*** ./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./WeatherFiveDaysPageComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/pages/air-quality-page/AirQualityPageComponent.css":
/*!*********************************************************************!*\
  !*** ./src/view/pages/air-quality-page/AirQualityPageComponent.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./AirQualityPageComponent.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/air-quality-page/AirQualityPageComponent.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/pages/weather-map-page/weatherMap.css":
/*!********************************************************!*\
  !*** ./src/view/pages/weather-map-page/weatherMap.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weatherMap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./weatherMap.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-map-page/weatherMap.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weatherMap_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weatherMap_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weatherMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weatherMap_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/view/pages/weather-today-page/weather-today-page.css":
/*!******************************************************************!*\
  !*** ./src/view/pages/weather-today-page/weather-today-page.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_today_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./weather-today-page.css */ "./node_modules/css-loader/dist/cjs.js!./src/view/pages/weather-today-page/weather-today-page.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_today_page_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_today_page_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weather_today_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weather_today_page_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataToBGStyle": () => (/* binding */ DataToBGStyle),
/* harmony export */   "HALF_CIRCLE_DEG": () => (/* binding */ HALF_CIRCLE_DEG),
/* harmony export */   "MINUTES_IN_HOUR": () => (/* binding */ MINUTES_IN_HOUR),
/* harmony export */   "MS_IN_SEC": () => (/* binding */ MS_IN_SEC),
/* harmony export */   "NUMBER_ALTERNATIVE_MATCHES": () => (/* binding */ NUMBER_ALTERNATIVE_MATCHES),
/* harmony export */   "SPEECH_RATE": () => (/* binding */ SPEECH_RATE),
/* harmony export */   "WEIGHT_VALUE_THIS_GRAMMAR": () => (/* binding */ WEIGHT_VALUE_THIS_GRAMMAR),
/* harmony export */   "ZOOM_TO_SELF_POSITION": () => (/* binding */ ZOOM_TO_SELF_POSITION),
/* harmony export */   "apiKeyMapForecast": () => (/* binding */ apiKeyMapForecast),
/* harmony export */   "apiKeyOpenWeather": () => (/* binding */ apiKeyOpenWeather),
/* harmony export */   "apiKeyPointForecast": () => (/* binding */ apiKeyPointForecast),
/* harmony export */   "baseLinkDirectGeocoding": () => (/* binding */ baseLinkDirectGeocoding),
/* harmony export */   "baseLinkMapForecast": () => (/* binding */ baseLinkMapForecast),
/* harmony export */   "baseLinkOpenWeatherAirQuality": () => (/* binding */ baseLinkOpenWeatherAirQuality),
/* harmony export */   "baseLinkOpenWeatherDirectGeocoding": () => (/* binding */ baseLinkOpenWeatherDirectGeocoding),
/* harmony export */   "baseLinkOpenWeatherFiveDays": () => (/* binding */ baseLinkOpenWeatherFiveDays),
/* harmony export */   "baseLinkOpenWeatherToday": () => (/* binding */ baseLinkOpenWeatherToday),
/* harmony export */   "baseLinkPointForecast": () => (/* binding */ baseLinkPointForecast),
/* harmony export */   "celsius": () => (/* binding */ celsius),
/* harmony export */   "dayName": () => (/* binding */ dayName),
/* harmony export */   "fahrenheit": () => (/* binding */ fahrenheit),
/* harmony export */   "lang": () => (/* binding */ lang),
/* harmony export */   "langObj": () => (/* binding */ langObj),
/* harmony export */   "textValuesToAltitude": () => (/* binding */ textValuesToAltitude),
/* harmony export */   "unitName": () => (/* binding */ unitName),
/* harmony export */   "weatherIconImgFormat": () => (/* binding */ weatherIconImgFormat),
/* harmony export */   "weatherIconUrl": () => (/* binding */ weatherIconUrl),
/* harmony export */   "wordsForGrammar": () => (/* binding */ wordsForGrammar)
/* harmony export */ });
const apiKeyMapForecast = 'xXzWFyvlQ5v6hx3VoAyja2ss9hpFgVRi'; // windy.com Map Forecast API
const baseLinkMapForecast = `https://api.windy.com/assets/map-forecast/`;
const apiKeyPointForecast = ''; // windy.com Point Forecast API
const baseLinkPointForecast = 'https://api.windy.com/api/point-forecast/v2';
const apiKeyOpenWeather = 'cb5257dbb6329ba1752a8bea5ea623e5'; // openweathermap.org
const baseLinkOpenWeatherToday = 'https://api.openweathermap.org/data/2.5/weather'; //openweathermap.org today weather
const baseLinkOpenWeatherFiveDays = 'https://api.openweathermap.org/data/2.5/forecast'; //openweathermap.org 5 days weather
const baseLinkOpenWeatherAirQuality = 'http://api.openweathermap.org/data/2.5/air_pollution'; //openweathermap.org air quality
const baseLinkOpenWeatherDirectGeocoding = 'http://api.openweathermap.org/geo/1.0/direct'; //openweathermap.org direct geocoding
const baseLinkDirectGeocoding = 'https://nominatim.openstreetmap.org/search/${encodeURIComponent(location)}?format=json';
const celsius = 'metric';
const fahrenheit = 'imperial';
const lang = 'ru';
const weatherIconUrl = `http://openweathermap.org/img/wn/`;
const weatherIconImgFormat = `@2x.png`;
const langObj = {
    en: {
        night: 'Nigth',
        morning: 'Morning',
        afternoon: 'Afternoon',
        evening: 'Evening',
        today: 'Today',
        fiveDay: '5 days',
        forecastFiveDay: 'Forecast for 5 days',
        weatherToday: 'Weather for today',
        forecastToday: 'Forecast for today',
        map: 'Map',
        otherForecasts: 'Other forecasts',
        searchByCity: 'Search by city',
        airQuality: 'Air quality',
        airQualityToday: 'Air quality today',
        asOf: 'As of',
        nextHours: 'Next hours',
        feelsLike: 'Feels like',
        high: 'High',
        low: 'Low',
        wind: 'Wind',
        temp: 'Temperature',
        humidity: 'Humidity',
        cloudiness: 'Cloudiness',
        pressure: 'Pressure',
        visibility: 'Visibility',
        search: 'Search',
        fullScreen: 'Full screen',
        windAnimation: 'Wind animation',
        pleaseSpeak: 'Please speak',
        surface: 'surface',
    },
    ru: {
        night: 'Ночь',
        morning: 'Утро',
        afternoon: 'День',
        evening: 'Вечер',
        today: 'Сегодня',
        fiveDay: 'На 5 дней',
        forecastFiveDay: 'Прогноз на 5 дней',
        weatherToday: 'Погода на сегодня',
        forecastToday: 'Погода на сегодня',
        map: 'Карта',
        otherForecasts: 'Другие прогнозы',
        searchByCity: 'Поиск по городу',
        airQuality: 'Качество воздуха',
        airQualityToday: 'Качество воздуха сегодня',
        asOf: 'По состоянию на',
        nextHours: 'На ближайшие часы',
        feelsLike: 'Ощущается как',
        high: 'Макс.',
        low: 'Мин.',
        wind: 'Ветер',
        temp: 'Температура',
        humidity: 'Влажность',
        cloudiness: 'Облачность',
        pressure: 'Давление',
        visibility: 'Видимость',
        search: 'Поиск',
        fullScreen: 'На весь экран',
        windAnimation: 'Анимация ветра',
        pleaseSpeak: 'Говорите',
        surface: 'поверхность',
    },
};
const textValuesToAltitude = {
    surface: 'поверхность',
    '100 m': '100 м',
    '300 m': '300 м',
    '600 m': '600 м',
    '750 m': '750 м',
    '1 km': '1 км',
    '1.5 km': '1,5 км',
    '2 km': '2 км',
    '3 km': '3 км',
    '4.2 km': '4,2 км',
    '5.5 km': '5,5 км',
    '7 km': '7 км',
    '9 km': '9 км',
    '10 km': '10 км',
    '11.7 km': '11,7 км',
    '13.5 km': '13,5 км',
};
const SPEECH_RATE = 0.75;
const NUMBER_ALTERNATIVE_MATCHES = 1;
const WEIGHT_VALUE_THIS_GRAMMAR = 1;
const wordsForGrammar = {
    weather: 'погода',
    forecast: 'прогноз',
    today: 'сегодня',
    hourly: 'почасовой',
    day: 'день',
    holydays: 'выходные',
    month: 'месяц',
    show: 'покажи',
    tell: 'расскажи',
    speak: 'скажи',
    tomorrow: 'завтра',
};
const ZOOM_TO_SELF_POSITION = 10;
const dayName = new Map([
    ['MON', 'ПН'],
    ['TUE', 'ВТ'],
    ['WED', 'СР'],
    ['THU', 'ЧТ'],
    ['FRI', 'ПТ'],
    ['SAT', 'СБ'],
    ['SUN', 'ВС'],
]);
const unitName = new Map([
    ['kt', 'Узел'],
    ['bft', 'Шк.Бофорта'],
    ['m/s', 'м/с'],
    ['km/h', 'км/ч'],
    ['mph', 'миль/ч'],
    ['°C', '°C'],
    ['°F', '°F'],
    ['hPa', 'гПа'],
    ['mmHg', 'мм.рт.ст.'],
    ['inHg', 'дюйм рт.ст.'],
]);
const MINUTES_IN_HOUR = 60;
const MS_IN_SEC = 1000;
const HALF_CIRCLE_DEG = 180;
const DataToBGStyle = {
    day: {
        '200': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '201': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '202': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '210': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '211': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '212': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '221': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '230': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '231': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '232': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '300': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '301': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '302': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '310': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '311': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '312': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '313': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '314': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '321': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '500': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '501': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '502': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '503': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '504': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '511': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '520': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '521': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '522': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '531': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#1d5d75',
            backgroundGradient: 'linear-gradient(0deg,#bed0cd,#bed0cd 20%,#6ea6a9 60%,#1d5d75 90%,#1d5d75)',
        },
        '600': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Flurries-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '601': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '602': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '611': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Flurries-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '612': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '613': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '615': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '616': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '620': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '621': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '622': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#2c5773',
            backgroundGradient: 'linear-gradient(0deg,#c7dce0,#c7dce0 20%,#628fa5 60%,#2c5773 90%,#2c5773)',
        },
        '701': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '711': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '721': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '731': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '741': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '751': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '761': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '762': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '771': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '781': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '800': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Sunny-day_4.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '801': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Fair-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '802': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-day_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#005986',
            backgroundGradient: 'linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986)',
        },
        '803': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Cloudy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
        '804': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-day_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#59516e',
            backgroundGradient: 'linear-gradient(0deg,#e5dee2,#e5dee2 20%,#aba2b4 60%,#59516e 90%,#59516e)',
        },
    },
    night: {
        '200': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '201': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '202': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '210': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '211': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '212': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '221': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '230': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '231': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_StrongStorms-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '232': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Thunderstorms-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '300': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '301': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '302': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '310': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '311': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '312': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '313': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '314': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '321': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '500': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '501': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '502': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '503': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '504': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '511': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_HeavyRain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '520': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '521': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '522': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '531': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Drizzle-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#213d4a',
            backgroundGradient: 'linear-gradient(0deg,#2a6377,#2a6377 20%,#214c61 60%,#213d4a 90%,#213d4a)',
        },
        '600': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '601': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '602': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '611': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '612': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '613': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '615': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '616': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '620': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '621': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '622': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_SnowShowers-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '701': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '711': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '721': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '731': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '741': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Foggy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '751': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '761': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '762': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '771': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '781': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_BlowingSand-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '800': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyClear-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '801': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Clear-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '802': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#022d50',
            backgroundGradient: 'linear-gradient(0deg,#13588b,#13588b 25%,#073863 65%,#022d50 90%,#022d50)',
        },
        '803': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_Cloudy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
        '804': {
            img: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-night_2.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=100',
            headerColor: '#313050',
            backgroundGradient: 'linear-gradient(0deg,#615878,#615878 20%,#464161 60%,#313050 90%,#313050)',
        },
    },
};


/***/ }),

/***/ "./src/controller/AirQualityPageController.ts":
/*!****************************************************!*\
  !*** ./src/controller/AirQualityPageController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirQualityPageController": () => (/* binding */ AirQualityPageController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_pages_air_quality_page_AirQualityPageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/pages/air-quality-page/AirQualityPageComponent */ "./src/view/pages/air-quality-page/AirQualityPageComponent.ts");


class AirQualityPageController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(router, observerToView, language) {
        super();
        this.language = language;
        this.component = new _view_pages_air_quality_page_AirQualityPageComponent__WEBPACK_IMPORTED_MODULE_1__.AirQualityPageComponent(this, router, observerToView, language);
    }
    show() {
        this.component.show();
    }
}


/***/ }),

/***/ "./src/controller/BaseController.ts":
/*!******************************************!*\
  !*** ./src/controller/BaseController.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseController": () => (/* binding */ BaseController)
/* harmony export */ });
class BaseController {
    show() {
        // show in inheritors if needed
    }
}


/***/ }),

/***/ "./src/controller/FooterController.ts":
/*!********************************************!*\
  !*** ./src/controller/FooterController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterController": () => (/* binding */ FooterController)
/* harmony export */ });
/* harmony import */ var _view_components_footer_FooterComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/components/footer/FooterComponent */ "./src/view/components/footer/FooterComponent.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");


class FooterController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor() {
        super();
        this.component = new _view_components_footer_FooterComponent__WEBPACK_IMPORTED_MODULE_0__.FooterComponent(this);
    }
}


/***/ }),

/***/ "./src/controller/GeolocationController.ts":
/*!*************************************************!*\
  !*** ./src/controller/GeolocationController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationController": () => (/* binding */ GeolocationController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_components_header_GeolocationComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/components/header/GeolocationComponent */ "./src/view/components/header/GeolocationComponent.ts");


class GeolocationController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(observerToModel, geolocation) {
        super();
        this.geolocation = geolocation;
        this.observerToModel = observerToModel;
        this.component = new _view_components_header_GeolocationComponent__WEBPACK_IMPORTED_MODULE_1__.GeolocationComponent(this, observerToModel);
    }
    async getGeolocationCoords() {
        const [latitude, longitude] = await this.geolocation.getGeolocation();
        return [latitude, longitude];
    }
}


/***/ }),

/***/ "./src/controller/HeaderController.ts":
/*!********************************************!*\
  !*** ./src/controller/HeaderController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderController": () => (/* binding */ HeaderController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _SearchController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchController */ "./src/controller/SearchController.ts");
/* harmony import */ var _view_components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/components/header/HeaderComponent */ "./src/view/components/header/HeaderComponent.ts");
/* harmony import */ var _GeolocationController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GeolocationController */ "./src/controller/GeolocationController.ts");
/* harmony import */ var _LanguageController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LanguageController */ "./src/controller/LanguageController.ts");
/* harmony import */ var _TempUnitController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TempUnitController */ "./src/controller/TempUnitController.ts");
/* harmony import */ var _VoiceControlController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VoiceControlController */ "./src/controller/VoiceControlController.ts");







class HeaderController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(router, observerToModel, observerToView, geolocation, language, voiceControlModel) {
        super();
        this.geolocation = geolocation;
        this.language = language;
        this.voiceControlModel = voiceControlModel;
        this.voiceControl = new _VoiceControlController__WEBPACK_IMPORTED_MODULE_6__.VoiceControlController(observerToModel, observerToView, language, voiceControlModel);
        this.languageController = new _LanguageController__WEBPACK_IMPORTED_MODULE_4__.LanguageController(observerToModel);
        this.searcherController = new _SearchController__WEBPACK_IMPORTED_MODULE_1__.SearcherController(observerToModel, observerToView, language);
        this.tempUnitController = new _TempUnitController__WEBPACK_IMPORTED_MODULE_5__.TempUnitController(observerToModel);
        this.geolocationController = new _GeolocationController__WEBPACK_IMPORTED_MODULE_3__.GeolocationController(observerToModel, geolocation);
        this.component = new _view_components_header_HeaderComponent__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent(this, router, observerToView, language);
    }
}


/***/ }),

/***/ "./src/controller/LanguageController.ts":
/*!**********************************************!*\
  !*** ./src/controller/LanguageController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageController": () => (/* binding */ LanguageController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_components_header_LanguageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/components/header/LanguageComponent */ "./src/view/components/header/LanguageComponent.ts");


class LanguageController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(observerToModel) {
        super();
        this.observerToModel = observerToModel;
        this.component = new _view_components_header_LanguageComponent__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent(this, observerToModel);
    }
}


/***/ }),

/***/ "./src/controller/SearchController.ts":
/*!********************************************!*\
  !*** ./src/controller/SearchController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearcherController": () => (/* binding */ SearcherController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_components_header_SearcherComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/components/header/SearcherComponent */ "./src/view/components/header/SearcherComponent.ts");


class SearcherController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(observerToModel, observerToView, language) {
        super();
        this.language = language;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.component = new _view_components_header_SearcherComponent__WEBPACK_IMPORTED_MODULE_1__.SearcherComponent(this, observerToModel, observerToView);
    }
}


/***/ }),

/***/ "./src/controller/TempUnitController.ts":
/*!**********************************************!*\
  !*** ./src/controller/TempUnitController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempUnitController": () => (/* binding */ TempUnitController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_components_header_TempUnitComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/components/header/TempUnitComponent */ "./src/view/components/header/TempUnitComponent.ts");


class TempUnitController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(observerToModel) {
        super();
        this.observerToModel = observerToModel;
        this.component = new _view_components_header_TempUnitComponent__WEBPACK_IMPORTED_MODULE_1__.TempUnitComponent(this, observerToModel);
    }
}


/***/ }),

/***/ "./src/controller/VoiceControlController.ts":
/*!**************************************************!*\
  !*** ./src/controller/VoiceControlController.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceControlController": () => (/* binding */ VoiceControlController)
/* harmony export */ });
/* harmony import */ var _view_components_voiceControl_VoiceControlComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/components/voiceControl/VoiceControlComponents */ "./src/view/components/voiceControl/VoiceControlComponents.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");


class VoiceControlController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(observerToModel, observerToView, language, voiceControlModel) {
        super();
        this.language = language;
        this.voiceControlModel = voiceControlModel;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.component = new _view_components_voiceControl_VoiceControlComponents__WEBPACK_IMPORTED_MODULE_0__.VoiceControlComponent(this, observerToModel, observerToView, language);
    }
}


/***/ }),

/***/ "./src/controller/WeatherFiveDaysPageController.ts":
/*!*********************************************************!*\
  !*** ./src/controller/WeatherFiveDaysPageController.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherFiveDaysPageController": () => (/* binding */ WeatherFiveDaysPageController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");
/* harmony import */ var _view_pages_5_days_weather_page_WeatherFiveDaysPageComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/pages/5-days-weather-page/WeatherFiveDaysPageComponent */ "./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.ts");


class WeatherFiveDaysPageController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor(router, observerToModel, observerToView, language) {
        super();
        this.language = language;
        this.component = new _view_pages_5_days_weather_page_WeatherFiveDaysPageComponent__WEBPACK_IMPORTED_MODULE_1__.WeatherFiveDaysPageComponent(this, router, observerToView, language);
    }
}


/***/ }),

/***/ "./src/controller/WeatherMapPageController.ts":
/*!****************************************************!*\
  !*** ./src/controller/WeatherMapPageController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherMapPageController": () => (/* binding */ WeatherMapPageController)
/* harmony export */ });
/* harmony import */ var _view_pages_weather_map_page_WeatherMapPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/pages/weather-map-page/WeatherMapPageComponent */ "./src/view/pages/weather-map-page/WeatherMapPageComponent.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");


class WeatherMapPageController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(router, observerToView, language) {
        super();
        this.language = language;
        this.component = new _view_pages_weather_map_page_WeatherMapPageComponent__WEBPACK_IMPORTED_MODULE_0__.WeatherMapPageComponent(this, router, observerToView, language);
    }
}


/***/ }),

/***/ "./src/controller/WeatherTodayPageController.ts":
/*!******************************************************!*\
  !*** ./src/controller/WeatherTodayPageController.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherTodayPageController": () => (/* binding */ WeatherTodayPageController)
/* harmony export */ });
/* harmony import */ var _view_pages_weather_today_page_WeatherTodayPageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/pages/weather-today-page/WeatherTodayPageComponent */ "./src/view/pages/weather-today-page/WeatherTodayPageComponent.ts");
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseController */ "./src/controller/BaseController.ts");


class WeatherTodayPageController extends _BaseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor(router, observerToView, language) {
        super();
        this.language = language;
        this.component = new _view_pages_weather_today_page_WeatherTodayPageComponent__WEBPACK_IMPORTED_MODULE_0__.WeatherTodayPageComponent(this, router, observerToView, language);
    }
    show() {
        this.component.show();
    }
}


/***/ }),

/***/ "./src/model/APIWebSpeech.ts":
/*!***********************************!*\
  !*** ./src/model/APIWebSpeech.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

class VoiceControl {
    constructor() {
        this.recognition = new webkitSpeechRecognition();
        this.speechRecognitionList = new webkitSpeechGrammarList();
        this.synthesis = window.speechSynthesis;
    }
    getSpeechRecognition() {
        return this.recognition;
    }
    getSpeechSynthesis() {
        return this.synthesis;
    }
    init() {
        const wordsList = this.lang === "en-US" /* langForSpeechAPI.en */ ? Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.wordsForGrammar) : Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.wordsForGrammar);
        const grammar = `#JSGF V1.0; grammar words; public <word> = ${wordsList.join(' | ')} ;`;
        this.speechRecognitionList.addFromString(grammar, _constants__WEBPACK_IMPORTED_MODULE_0__.WEIGHT_VALUE_THIS_GRAMMAR);
        this.recognition.lang = this.lang;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = _constants__WEBPACK_IMPORTED_MODULE_0__.NUMBER_ALTERNATIVE_MATCHES;
    }
    async getRecord() {
        this.init();
        this.recognition.start();
        console.log('PLEASE SPEAK');
        try {
            const record = await new Promise((resolve) => {
                setTimeout(() => {
                    this.hideVoiceAnimation();
                    this.recognition.stop();
                }, 5000);
                this.recognition.onresult = (event) => {
                    const last = event.results.length - 1;
                    const result = event.results[last];
                    resolve(result[0].transcript);
                };
                this.recognition.onspeechend = () => {
                    this.recognition.stop();
                    this.hideVoiceAnimation();
                };
                this.recognition.onnomatch = () => {
                    this.hideVoiceAnimation();
                    console.log('NO MATCH');
                };
                this.recognition.onerror = (event) => {
                    this.hideVoiceAnimation();
                    console.log(`Error occurred in recognition: ${event.error}`);
                };
            });
            return record;
        }
        catch (error) {
            console.error(error);
            return '';
        }
    }
    async getVoice() {
        try {
            const voices = await new Promise((res) => {
                const id = setInterval(() => {
                    if (this.synthesis.getVoices().length !== 0) {
                        res(this.synthesis.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            });
            const voice = voices.find((voice) => voice.lang === this.lang);
            return voice;
        }
        catch (error) {
            console.error(error);
            return;
        }
    }
    async speak(text) {
        if (this.synthesis.speaking) {
            console.error('speechSynthesis.speaking');
            this.synthesis.cancel();
            setTimeout(this.speak, 300);
        }
        else if (text !== '') {
            const utterThis = new SpeechSynthesisUtterance(text);
            const voice = await this.getVoice();
            if (voice)
                utterThis.voice = voice;
            utterThis.rate = _constants__WEBPACK_IMPORTED_MODULE_0__.SPEECH_RATE;
            utterThis.onend = () => {
                console.log('SpeechSynthesisUtterance.onend');
            };
            utterThis.onerror = () => {
                console.error('SpeechSynthesisUtterance.onerror');
            };
            this.synthesis.speak(utterThis);
        }
    }
    hideVoiceAnimation() {
        const voiceControlModal = document.querySelector('.voice-control-modal');
        const overlay = document.querySelector('.voice-control-overlay');
        if (voiceControlModal && overlay) {
            voiceControlModal.style.visibility = 'hidden';
            overlay.style.visibility = 'hidden';
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoiceControl);


/***/ }),

/***/ "./src/model/ApiOpenWeather.ts":
/*!*************************************!*\
  !*** ./src/model/ApiOpenWeather.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiOpenWeather": () => (/* binding */ ApiOpenWeather)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ApiOpenWeather_weatherUrlToday, _ApiOpenWeather_weatherUrlFiveDays, _ApiOpenWeather_forecastUrlAirQuality, _ApiOpenWeather_weatherMap;

class ApiOpenWeather {
    constructor(observerToModel, observerToView, geolocation, store) {
        _ApiOpenWeather_weatherUrlToday.set(this, void 0);
        _ApiOpenWeather_weatherUrlFiveDays.set(this, void 0);
        _ApiOpenWeather_forecastUrlAirQuality.set(this, void 0);
        _ApiOpenWeather_weatherMap.set(this, void 0);
        this.storageKeyCity = 'city';
        this.storageKeyLang = 'lang';
        this.cityList = new Array();
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.geolocation = geolocation;
        this.store = store;
        this.checkLocalStorageCity();
        this.checkLocalStorageLanguage();
        this.observerToModel.subscribe("input" /* ViewEvent.input */, this);
        this.observerToModel.subscribe("geolocation" /* ViewEvent.geolocation */, this);
        this.observerToModel.subscribe("temp-unit" /* ViewEvent.temp_unit */, this);
        this.observerToModel.subscribe("language" /* ViewEvent.language */, this);
        this.observerToModel.subscribe("voice" /* ViewEvent.voice */, this);
    }
    checkLocalStorageCity() {
        if (localStorage.getItem(this.storageKeyCity)) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
        }
        else {
            this.cityList = ['Ташкент'];
            localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
        }
        const lastCity = this.cityList[this.cityList.length - 1];
        this.notify({ message: lastCity || 'Ташкент' });
    }
    checkLocalStorageLanguage() {
        if (localStorage.getItem(this.storageKeyLang)) {
            this.langList = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
        }
        else {
            this.langList = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(this.langList));
        }
        const lastLang = this.langList;
        this.notify({ message: lastLang });
    }
    async notify(params) {
        if (typeof params.message === 'string') {
            if (params.message.includes('metric') || params.message.includes('imperial')) {
                this.temperatureUnit = params.message;
            }
            else if (params.message.includes('ru') || params.message.includes('en')) {
                this.lang = params.message;
            }
            else {
                this.city = params.message;
            }
            this.getAllWeatherData(this.city, this.temperatureUnit, this.lang);
        }
        else if (Array.isArray(params.message)) {
            this.city = params.message;
            this.getAllWeatherData(this.city, this.temperatureUnit, this.lang);
        }
    }
    async getAllWeatherData(city, temperatureUnit, lang) {
        if (typeof city === 'string') {
            this.checkLocalStorage(city);
        }
        const weatherTodayData = await this.getWeatherTodayData(city, temperatureUnit, lang);
        if (weatherTodayData !== '')
            this.store.setWeatherTodayData(weatherTodayData);
        this.observerToView.notify("today-weather" /* ModelEvent.today_weather */, {
            message: weatherTodayData,
            typeEvents: "today-weather" /* ModelEvent.today_weather */,
        });
        const weatherFiveDaysData = await this.getWeatherFiveDaysData(city, temperatureUnit, lang);
        if (weatherFiveDaysData !== '')
            this.store.setWeatherFiveDaysData(weatherFiveDaysData);
        this.observerToView.notify("five-days-weather" /* ModelEvent.five_days_weather */, {
            message: weatherFiveDaysData,
            typeEvents: "five-days-weather" /* ModelEvent.five_days_weather */,
        });
        const airQualityForecastData = await this.getForecastAirQualityData(city, temperatureUnit, lang);
        if (airQualityForecastData !== '')
            this.store.setAirQualityForecastData(airQualityForecastData);
        this.observerToView.notify("air-quality-forecast" /* ModelEvent.air_quality_forecast */, {
            message: airQualityForecastData,
            typeEvents: "air-quality-forecast" /* ModelEvent.air_quality_forecast */,
        });
    }
    checkTempUnit(temperatureUnit) {
        if (temperatureUnit === 'metric') {
            this.tempUnitInRequest = _constants__WEBPACK_IMPORTED_MODULE_0__.celsius;
        }
        else if (temperatureUnit === 'imperial') {
            this.tempUnitInRequest = _constants__WEBPACK_IMPORTED_MODULE_0__.fahrenheit;
        }
        else {
            this.tempUnitInRequest = _constants__WEBPACK_IMPORTED_MODULE_0__.celsius;
        }
    }
    checkLanguage(lang) {
        if (lang === 'en') {
            this.lang = 'en';
        }
        else if (lang === 'ru') {
            this.lang = 'ru';
        }
        else {
            this.lang = 'ru';
        }
    }
    checkLocalStorage(cityName) {
        if (localStorage.getItem(this.storageKeyCity)) {
            this.cityList = JSON.parse(`${localStorage.getItem(this.storageKeyCity)}`);
            if (this.cityList?.includes(cityName)) {
                return;
            }
            else if (this.cityList.length < 5) {
                this.cityList?.push(cityName);
            }
            else {
                this.cityList.length = 5;
                this.cityList?.pop();
                this.cityList?.push(cityName);
            }
        }
        localStorage.setItem(this.storageKeyCity, JSON.stringify(this.cityList));
    }
    async getWeatherTodayData(city, temperatureUnit, lang) {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                __classPrivateFieldSet(this, _ApiOpenWeather_weatherUrlToday, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherToday}?q=${city}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            else {
                const [lat, lon] = city;
                __classPrivateFieldSet(this, _ApiOpenWeather_weatherUrlToday, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherToday}?lat=${lat}&lon=${lon}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            const response = await fetch(__classPrivateFieldGet(this, _ApiOpenWeather_weatherUrlToday, "f"));
            if (response.ok === true) {
                if (city === 'string')
                    this.checkLocalStorage(city);
            }
            return await response.json();
        }
        catch (error) {
            return '';
        }
    }
    async getWeatherFiveDaysData(city, temperatureUnit, lang) {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                __classPrivateFieldSet(this, _ApiOpenWeather_weatherUrlFiveDays, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherFiveDays}?q=${city}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            else {
                const [lat, lon] = city;
                __classPrivateFieldSet(this, _ApiOpenWeather_weatherUrlFiveDays, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherFiveDays}?lat=${lat}&lon=${lon}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            const response = await fetch(__classPrivateFieldGet(this, _ApiOpenWeather_weatherUrlFiveDays, "f"));
            if (response.ok === true) {
                if (city === 'string')
                    this.checkLocalStorage(city);
            }
            return await response.json();
        }
        catch (error) {
            return '';
        }
    }
    async getForecastAirQualityData(city, temperatureUnit, lang) {
        this.checkTempUnit(temperatureUnit);
        this.checkLanguage(lang);
        try {
            if (typeof city === 'string') {
                const coord = await this.geolocation.getCoordinates(city);
                const lat = coord[0];
                const lon = coord[1];
                __classPrivateFieldSet(this, _ApiOpenWeather_forecastUrlAirQuality, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            else {
                const [lat, lon] = city;
                __classPrivateFieldSet(this, _ApiOpenWeather_forecastUrlAirQuality, `${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherAirQuality}?lat=${lat}&lon=${lon}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}&lang=${this.lang}&units=${this.tempUnitInRequest}`, "f");
            }
            const response = await fetch(__classPrivateFieldGet(this, _ApiOpenWeather_forecastUrlAirQuality, "f"));
            if (response.ok === true) {
                if (city === 'string')
                    this.checkLocalStorage(city);
            }
            return await response.json();
        }
        catch (error) {
            return '';
        }
    }
}
_ApiOpenWeather_weatherUrlToday = new WeakMap(), _ApiOpenWeather_weatherUrlFiveDays = new WeakMap(), _ApiOpenWeather_forecastUrlAirQuality = new WeakMap(), _ApiOpenWeather_weatherMap = new WeakMap();


/***/ }),

/***/ "./src/model/GeolocationModel.ts":
/*!***************************************!*\
  !*** ./src/model/GeolocationModel.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationModel": () => (/* binding */ GeolocationModel)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");

class GeolocationModel {
    async getGeolocation(IsHighAccuracy) {
        try {
            const options = {
                enableHighAccuracy: IsHighAccuracy,
                timeout: Infinity,
                maximumAge: 1,
            };
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
            const { latitude, longitude } = position.coords;
            return [latitude, longitude];
        }
        catch (error) {
            console.error(error);
            return [53, 27];
        }
    }
    async getCoordinates(city) {
        try {
            const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.baseLinkOpenWeatherDirectGeocoding}?q=${city}&limit=${5}&appid=${_constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyOpenWeather}`);
            const data = await response.json();
            const [firstResult] = data;
            if (!firstResult) {
                throw new Error('No results found for that location');
            }
            const { lat, lon } = firstResult;
            return [parseFloat(lat), parseFloat(lon)];
        }
        catch (error) {
            console.error(error);
            return [0, 0];
        }
    }
}


/***/ }),

/***/ "./src/model/ObserverToModel.ts":
/*!**************************************!*\
  !*** ./src/model/ObserverToModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserverToModel": () => (/* binding */ ObserverToModel)
/* harmony export */ });
class ObserverToModel {
    constructor() {
        this.subscribers = new Map();
    }
    subscribe(event, subscriber) {
        if (this.subscribers.has(event)) {
            const subscribers = this.subscribers.get(event);
            subscribers?.push(subscriber);
        }
        else {
            this.subscribers.set(event, new Array(subscriber));
        }
        return this;
    }
    notify(event, params) {
        const subscribers = this.subscribers.get(event);
        if (subscribers) {
            subscribers.forEach((subscriber) => {
                subscriber.notify(params);
            });
        }
    }
}


/***/ }),

/***/ "./src/model/ObserverToView.ts":
/*!*************************************!*\
  !*** ./src/model/ObserverToView.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserverToView": () => (/* binding */ ObserverToView)
/* harmony export */ });
class ObserverToView {
    constructor() {
        this.subscribers = new Map();
    }
    subscribe(event, subscriber) {
        if (this.subscribers.has(event)) {
            const subscribers = this.subscribers.get(event);
            subscribers?.push(subscriber);
        }
        else {
            this.subscribers.set(event, new Array(subscriber));
        }
        return this;
    }
    notify(event, params) {
        const subscribers = this.subscribers.get(event);
        if (subscribers) {
            subscribers.forEach((subscriber) => {
                subscriber.notify(params);
            });
        }
    }
}


/***/ }),

/***/ "./src/model/Store.ts":
/*!****************************!*\
  !*** ./src/model/Store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
class Store {
    constructor(observerToModel, observerToView) {
        this.minute = 60;
        this.millisecondsPerSecond = 1000;
        this.metersPerKilometer = 1000;
        this.secondsPerHour = 3600;
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe("today-weather" /* ModelEvent.today_weather */, this);
        this.observerToView.subscribe("five-days-weather" /* ModelEvent.five_days_weather */, this);
        this.observerToView.subscribe("air-quality-forecast" /* ModelEvent.air_quality_forecast */, this);
    }
    notify(params) {
        switch (params.typeEvents) {
            case "today-weather" /* ModelEvent.today_weather */: {
                const WeatherTodayData = params.message;
                this.setTemp(WeatherTodayData);
                const temp = this.getTemp();
                this.setTempMin(WeatherTodayData);
                const tempMin = this.getTempMin();
                this.setTempMax(WeatherTodayData);
                const tempMax = this.getTempMax();
                this.setFeelsLike(WeatherTodayData);
                const feelsLike = this.getFeelsLike();
                this.setHumidity(WeatherTodayData);
                const humidity = this.getHumidity();
                this.setPressure(WeatherTodayData);
                const pressure = this.getPressure();
                this.setVisibility(WeatherTodayData);
                const visibility = this.getVisibility();
                this.setWindSpeed(WeatherTodayData);
                const windSpeed = this.getWindSpeed();
                this.setClouds(WeatherTodayData);
                const clouds = this.getClouds();
                this.setSunrise(WeatherTodayData);
                const sunrise = this.getSunrise();
                this.setSunset(WeatherTodayData);
                const sunset = this.getSunset();
                this.setIcon(WeatherTodayData);
                const icon = this.getIcon();
                this.setId(WeatherTodayData);
                const id = this.getId();
                this.setDescription(WeatherTodayData);
                const description = this.getDescription();
                this.setMainWeather(WeatherTodayData);
                const mainWeather = this.getMainWeather();
                this.setTimezone(WeatherTodayData);
                const timezone = this.getTimezone();
                this.setCityName(WeatherTodayData);
                const cityName = this.getCityName();
                this.setCountryCode(WeatherTodayData);
                const countryCode = this.getCountryCode();
                this.setDataCalcTime(WeatherTodayData);
                const dataCalcTime = this.getDataCalcTime();
                this.setCoord(WeatherTodayData);
                const coord = this.coord;
                this.observerToView.notify("today-weather-indicators" /* ModelEvent.today_weather_indicators */, {
                    message: {
                        temp,
                        tempMin,
                        tempMax,
                        feelsLike,
                        humidity,
                        pressure,
                        visibility,
                        windSpeed,
                        clouds,
                        sunrise,
                        sunset,
                        icon,
                        description,
                        id,
                        mainWeather,
                        timezone,
                        cityName,
                        countryCode,
                        dataCalcTime,
                        coord,
                    },
                    typeEvents: "today-weather-indicators" /* ModelEvent.today_weather_indicators */,
                });
                break;
            }
            case "five-days-weather" /* ModelEvent.five_days_weather */: {
                const weatherFiveDaysData = params.message;
                this.setListOfDays(weatherFiveDaysData);
                const list = this.getListOfDays();
                this.setTimezoneFiveDays(weatherFiveDaysData);
                const timezone = this.getTimezoneFiveDays();
                this.setCityNameFiveDays(weatherFiveDaysData);
                const cityName = this.getCityNameFiveDays();
                this.setCountryCodeFiveDays(weatherFiveDaysData);
                const countryCode = this.getCountryCodeFiveDays();
                this.observerToView.notify("five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */, {
                    message: {
                        list,
                        timezone,
                        cityName,
                        countryCode,
                    },
                    typeEvents: "five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */,
                });
                break;
            }
            case "air-quality-forecast" /* ModelEvent.air_quality_forecast */: {
                const airQualityForecastData = params.message;
                this.setPollutants(airQualityForecastData);
                const pollutants = this.getPollutants();
                this.observerToView.notify("air-quality-forecast-indicators" /* ModelEvent.air_quality_forecast_indicators */, {
                    message: {
                        pollutants,
                    },
                    typeEvents: "air-quality-forecast-indicators" /* ModelEvent.air_quality_forecast_indicators */,
                });
                break;
            }
        }
    }
    getStore() {
        return this;
    }
    getWeatherTodayData() {
        return this.weatherTodayData;
    }
    setWeatherTodayData(data) {
        this.weatherTodayData = data;
    }
    getWeatherFiveDaysData() {
        return this.weatherFiveDaysData;
    }
    setWeatherFiveDaysData(data) {
        this.weatherFiveDaysData = data;
    }
    getAirQualityForecastData() {
        return this.airQualityForecastData;
    }
    setAirQualityForecastData(data) {
        this.airQualityForecastData = data;
    }
    getCoord() {
        return this.coord;
    }
    setCoord(data) {
        this.coord = data.coord;
    }
    getTemp() {
        return this.temp;
    }
    setTemp(data) {
        this.temp = Math.floor(data.main.temp);
    }
    getTempMin() {
        return this.temp_min;
    }
    setTempMin(data) {
        this.temp_min = Math.floor(data.main.temp_min);
    }
    getTempMax() {
        return this.temp_max;
    }
    setTempMax(data) {
        this.temp_max = Math.floor(data.main.temp_max);
    }
    getFeelsLike() {
        return this.feels_like;
    }
    setFeelsLike(data) {
        this.feels_like = Math.floor(data.main.feels_like);
    }
    getHumidity() {
        return this.humidity;
    }
    setHumidity(data) {
        this.humidity = data.main.humidity;
    }
    getPressure() {
        return this.pressure;
    }
    setPressure(data) {
        this.pressure = data.main.pressure;
    }
    getVisibility() {
        return this.visibility;
    }
    setVisibility(data) {
        this.visibility = data.visibility / this.metersPerKilometer;
    }
    getWindSpeed() {
        return this.wind_speed;
    }
    setWindSpeed(data) {
        this.wind_speed = Math.floor(data.wind.speed);
    }
    getClouds() {
        return this.clouds;
    }
    setClouds(data) {
        this.clouds = Math.floor(data.clouds.all);
    }
    getSunrise() {
        return this.sunrise;
    }
    setSunrise(data) {
        this.sunrise = data.sys.sunrise;
    }
    getSunset() {
        return this.sunset;
    }
    setSunset(data) {
        this.sunset = data.sys.sunset;
    }
    getIcon() {
        return this.icon;
    }
    setIcon(data) {
        this.icon = data.weather[0].icon;
    }
    getId() {
        return this.id;
    }
    setId(data) {
        this.id = data.weather[0].id;
    }
    getDescription() {
        return this.description;
    }
    setDescription(data) {
        this.description = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
    }
    getMainWeather() {
        return this.main;
    }
    setMainWeather(data) {
        this.main = data.weather[0].main;
    }
    getTimezone() {
        return this.timezone;
    }
    setTimezone(data) {
        this.timezone = data.timezone / this.secondsPerHour;
    }
    getCityName() {
        return this.name;
    }
    setCityName(data) {
        this.name = data.name;
    }
    getCountryCode() {
        return this.countryCode;
    }
    setCountryCode(data) {
        this.countryCode = data.sys.country;
    }
    getDataCalcTime() {
        return this.dataCalcTime;
    }
    setDataCalcTime(data) {
        this.dataCalcTime = data.dt;
    }
    getPollutants() {
        return this.pollutants;
    }
    setPollutants(data) {
        this.pollutants = data.list[0].components;
    }
    getListOfDays() {
        return this.list;
    }
    setListOfDays(data) {
        this.list = data.list;
    }
    getTimezoneFiveDays() {
        return this.timezone;
    }
    setTimezoneFiveDays(data) {
        this.timezone = data.city.timezone / this.secondsPerHour;
    }
    getCityNameFiveDays() {
        return this.name;
    }
    setCityNameFiveDays(data) {
        this.name = data.city.name;
    }
    getCountryCodeFiveDays() {
        return this.countryCode;
    }
    setCountryCodeFiveDays(data) {
        this.countryCode = data.city.country;
    }
}


/***/ }),

/***/ "./src/model/TranslatorModel.ts":
/*!**************************************!*\
  !*** ./src/model/TranslatorModel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatorModel": () => (/* binding */ TranslatorModel)
/* harmony export */ });
class TranslatorModel {
    constructor(observerToModel, observerToView) {
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToModel.subscribe("language" /* ViewEvent.language */, this);
    }
    notify(params) {
        if (typeof params.message === 'string') {
            const lang = params.message;
            if (lang === 'ru') {
                const langObject = this.getTranslateRu();
                this.observerToView.notify("language" /* ModelEvent.language */, {
                    message: langObject,
                    typeEvents: "language" /* ModelEvent.language */,
                });
            }
            else {
                const langObject = this.getTranslateEn();
                this.observerToView.notify("language" /* ModelEvent.language */, {
                    message: langObject,
                    typeEvents: "language" /* ModelEvent.language */,
                });
            }
        }
    }
    getTranslateRu() {
        const langObjRu = {
            night: 'Ночь',
            morning: 'Утро',
            afternoon: 'День',
            evening: 'Вечер',
            today: 'Сегодня',
            fiveDay: 'На 5 дней',
            forecastFiveDay: 'Прогноз на 5 дней: ',
            weatherToday: 'Погода на сегодня: ',
            forecastToday: 'Прогноз на сегодня: ',
            map: 'Карта',
            otherForecasts: 'Другие прогнозы ',
            searchByCity: 'Поиск по городу',
            airQuality: 'Качество воздуха',
            airQualityToday: 'Качество воздуха сегодня',
            asOf: 'По состоянию на ',
            nextHours: 'На ближайшие часы',
            feelsLike: 'Ощущается как ',
            high: 'Макс.',
            low: 'Мин.',
            wind: 'Ветер',
            temp: 'Температура',
            humidity: 'Влажность',
            cloudiness: 'Облачность',
            pressure: 'Давление',
            visibility: 'Видимость',
            search: 'Поиск',
            fullScreen: 'На весь экран',
            windAnimation: 'Анимация ветра',
            pleaseSpeak: 'Назовите город',
            surface: 'поверхность',
            allPollutants: 'Все загрязняющие вещества',
            primaryPollutant: 'Первичный загрязнитель:',
            pollutantUnits: 'мкг/м3',
            moreDetailsText: 'Индекс качества воздуха',
            airQualityLevelsCaption: 'Уровни',
            AirQualityPopOverTitle: 'Источник',
            AirQualityPopOverBody: 'Содержит данные службы мониторинга атмосферы Copernicus Atmosphere Monitoring Service за 2023 г. и/или измененные данные службы Copernicus Atmosphere Monitoring Service за 2023 г. Европейская комиссия и ЕЦСПП не несут ответственность за любое использование данной информации.',
            good: 'Хорошее',
            moderate: 'Среднее',
            unhealthyForGroups: 'Вредное для чувствительных людей',
            unhealthy: 'Вредные условия',
            veryUnhealthy: 'Очень вредные условия',
            hazardous: 'Опасно',
            goodInfo: 'Качество воздуха удовлетворительное, уровень загрязнений почти не вызывает опасений.',
            moderateInfo: 'Качество воздуха приемлемое, однако для некоторых типов загрязнений есть средний риск воздействия на самочувствие малой части людей, чувствительных к загрязнению воздуха.',
            unhealthyForGroupsInfo: 'Чувствительные люди могут испытывать проблемы со здоровьем. Вероятно, это не повлияет на остальные слои населения.',
            unhealthyInfo: 'У любого человека могут начаться проблемы со здоровьем, воздействие на чувствительных людей может быть более серьезным.',
            veryUnhealthyInfo: 'Предупреждения касательно здоровья, означающие экстренную ситуацию. Вполне возможно, что это повлияет на все население.',
            hazardousInfo: 'Оповещение в отношении здоровья: все люди могут испытывать более серьезные проблемы со здоровьем.',
            co: 'CO (Монооксид углерода)',
            no2: 'NO2 (Оксид азота)',
            o3: 'O3 (Озон)',
            so2: 'SO2 (Диоксид серы)',
            pm2_5: 'PM2.5 (Взвешенных частиц меньше 2,5 микрона)',
            pm10: 'PM10 (Взвешенных частиц меньше 10 микрон)',
            kmH: 'км/ч',
            mb: 'мбар',
            km: 'км',
            recentLocationTitle: 'Недавние',
            clearAll: 'Очистить все',
            recents: 'Нет последних местоположений',
        };
        return langObjRu;
    }
    getTranslateEn() {
        const langObjEn = {
            night: 'Night',
            morning: 'Morning',
            afternoon: 'Afternoon',
            evening: 'Evening',
            today: 'Today',
            fiveDay: '5 days',
            forecastFiveDay: 'Forecast for 5 days ',
            weatherToday: 'Weather for today ',
            forecastToday: 'Forecast for today ',
            map: 'Map',
            otherForecasts: 'Other forecasts',
            searchByCity: 'Search by city',
            airQuality: 'Air quality forecast',
            airQualityToday: 'Air quality today',
            asOf: 'As of ',
            nextHours: 'Next hours ',
            feelsLike: 'Feels like ',
            high: 'High',
            low: 'Low',
            wind: 'Wind',
            temp: 'Temperature',
            humidity: 'Humidity',
            cloudiness: 'Cloudiness',
            pressure: 'Pressure',
            visibility: 'Visibility',
            search: 'Search',
            fullScreen: 'Full screen',
            windAnimation: 'Wind animation',
            pleaseSpeak: 'Say city name',
            surface: 'surface',
            allPollutants: 'All pollutants',
            primaryPollutant: 'Primary pollutant:',
            pollutantUnits: 'µg/m3',
            moreDetailsText: 'Air Quality Index',
            airQualityLevelsCaption: 'Levels',
            AirQualityPopOverTitle: 'Source',
            AirQualityPopOverBody: 'Contains Copernicus Atmosphere Monitoring Service information 2023 and/or modified Copernicus Atmosphere Monitoring Service information 2023. Neither the European Commission nor ECMWF is responsible for any use of this information.',
            good: 'Good',
            moderate: 'Moderate',
            unhealthyForGroups: 'Unhealthy for groups',
            unhealthy: 'Unhealthy',
            veryUnhealthy: 'Very unhealthy',
            hazardous: 'Hazardous',
            goodInfo: 'Air quality is considered satisfactory, and air pollution poses little or no risk.',
            moderateInfo: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
            unhealthyForGroupsInfo: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
            unhealthyInfo: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
            veryUnhealthyInfo: 'Health warnings of emergency conditions. The entire population is more likely to be affected.',
            hazardousInfo: 'Health alert: everyone may experience more serious health effects.',
            co: 'CO (Carbon Monoxide)',
            no2: 'NO2 (Nitrogen Dioxide)',
            o3: 'O3 (Ozone)',
            so2: 'SO2 (Sulfur Dioxide)',
            pm2_5: 'PM2.5 (Particulate matter less than 2.5 microns)',
            pm10: 'PM10 (Particulate matter less than 10 microns)',
            kmH: 'km/h',
            mb: 'mb',
            km: 'km',
            recentLocationTitle: 'Recents',
            clearAll: 'Clear all',
            recents: 'You have no recent locations',
        };
        return langObjEn;
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertToDMS": () => (/* binding */ convertToDMS),
/* harmony export */   "convertUnixToDate": () => (/* binding */ convertUnixToDate),
/* harmony export */   "convertUnixToDayNight": () => (/* binding */ convertUnixToDayNight),
/* harmony export */   "getCoordinates": () => (/* binding */ getCoordinates),
/* harmony export */   "getGeolocation": () => (/* binding */ getGeolocation),
/* harmony export */   "latLonToDMS": () => (/* binding */ latLonToDMS)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");

async function getGeolocation(IsHighAccuracy) {
    try {
        const options = {
            enableHighAccuracy: IsHighAccuracy,
            timeout: Infinity,
            maximumAge: 0,
        };
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
        const { latitude, longitude } = position.coords;
        return [latitude, longitude];
    }
    catch (error) {
        console.error(error);
        return [53, 27];
    }
}
function convertToDMS(degrees) {
    let d = Math.floor(degrees);
    const minfloat = (degrees - d) * 60;
    let m = Math.floor(minfloat);
    let s = Math.round((minfloat - m) * 60);
    if (s === 60) {
        m++;
        s = 0;
    }
    if (m === 60) {
        d++;
        m = 0;
    }
    return {
        degrees: d,
        minutes: m,
        seconds: s,
    };
}
function latLonToDMS(lat, lon) {
    return {
        lat: convertToDMS(lat),
        lon: convertToDMS(lon),
    };
}
async function getCoordinates(location) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search/${encodeURIComponent(location)}?format=json`);
        const data = await response.json();
        const [firstResult] = data;
        if (!firstResult) {
            throw new Error('No results found for that location');
        }
        const { lat, lon } = firstResult;
        return [parseFloat(lat), parseFloat(lon)];
    }
    catch (error) {
        console.error(error);
        return [0, 0];
    }
}
function convertUnixToDate(timezone, unix) {
    const userTimezone = new Date(timezone).getTimezoneOffset() / _constants__WEBPACK_IMPORTED_MODULE_0__.MINUTES_IN_HOUR;
    const currentData = new Date((unix + timezone) * _constants__WEBPACK_IMPORTED_MODULE_0__.MS_IN_SEC);
    const minutes = `0${currentData.getMinutes()}`;
    let hours = currentData.getHours() + timezone + userTimezone;
    if (hours > 23)
        hours = hours - 24;
    else if (hours <= 0)
        hours = 24 + hours;
    return `${Math.floor(hours)}:${minutes.substring(minutes.length - 2)} `;
}
function convertUnixToDayNight(currentTime, sunrise, sunset) {
    if (currentTime < sunrise || currentTime >= sunset)
        return 'night';
    return 'day';
}


/***/ }),

/***/ "./src/view/BaseComponent.ts":
/*!***********************************!*\
  !*** ./src/view/BaseComponent.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
class BaseComponent {
    constructor(className, props, tag = 'div') {
        this.element = document.createElement(tag);
        this.element.classList.add(className);
        this.props = props;
        this.render();
        this.addListeners();
    }
    render() {
        // render in inheritors if needed
    }
    addListeners() {
        // addListeners in inheritors if needed
    }
}


/***/ }),

/***/ "./src/view/RenderView.ts":
/*!********************************!*\
  !*** ./src/view/RenderView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_FooterController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/FooterController */ "./src/controller/FooterController.ts");
/* harmony import */ var _controller_HeaderController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/HeaderController */ "./src/controller/HeaderController.ts");
/* harmony import */ var _model_ApiOpenWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/ApiOpenWeather */ "./src/model/ApiOpenWeather.ts");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router */ "./src/view/Router.ts");
/* harmony import */ var _model_ObserverToModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ObserverToModel */ "./src/model/ObserverToModel.ts");
/* harmony import */ var _model_ObserverToView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/ObserverToView */ "./src/model/ObserverToView.ts");
/* harmony import */ var _model_GeolocationModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/GeolocationModel */ "./src/model/GeolocationModel.ts");
/* harmony import */ var _model_TranslatorModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/TranslatorModel */ "./src/model/TranslatorModel.ts");
/* harmony import */ var _model_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/Store */ "./src/model/Store.ts");
/* harmony import */ var _model_APIWebSpeech__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/APIWebSpeech */ "./src/model/APIWebSpeech.ts");










class RenderView {
    constructor() {
        const root = document.createElement('div');
        root.id = 'root';
        const main = document.createElement('main');
        main.classList.add('main');
        const observerToModel = new _model_ObserverToModel__WEBPACK_IMPORTED_MODULE_4__.ObserverToModel();
        const observerToView = new _model_ObserverToView__WEBPACK_IMPORTED_MODULE_5__.ObserverToView();
        const geolocation = new _model_GeolocationModel__WEBPACK_IMPORTED_MODULE_6__.GeolocationModel();
        const store = new _model_Store__WEBPACK_IMPORTED_MODULE_8__.Store(observerToModel, observerToView);
        new _model_ApiOpenWeather__WEBPACK_IMPORTED_MODULE_2__.ApiOpenWeather(observerToModel, observerToView, geolocation, store);
        const language = new _model_TranslatorModel__WEBPACK_IMPORTED_MODULE_7__.TranslatorModel(observerToModel, observerToView);
        const voiceControl = new _model_APIWebSpeech__WEBPACK_IMPORTED_MODULE_9__["default"]();
        const router = new _Router__WEBPACK_IMPORTED_MODULE_3__.Router(main, observerToModel, observerToView, language);
        const headerController = new _controller_HeaderController__WEBPACK_IMPORTED_MODULE_1__.HeaderController(router, observerToModel, observerToView, geolocation, language, voiceControl);
        const footerController = new _controller_FooterController__WEBPACK_IMPORTED_MODULE_0__.FooterController();
        root.append(headerController.component.element, main, footerController.component.element);
        document.body.append(root);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderView);


/***/ }),

/***/ "./src/view/Router.ts":
/*!****************************!*\
  !*** ./src/view/Router.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _controller_AirQualityPageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/AirQualityPageController */ "./src/controller/AirQualityPageController.ts");
/* harmony import */ var _controller_WeatherFiveDaysPageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/WeatherFiveDaysPageController */ "./src/controller/WeatherFiveDaysPageController.ts");
/* harmony import */ var _controller_WeatherTodayPageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/WeatherTodayPageController */ "./src/controller/WeatherTodayPageController.ts");
/* harmony import */ var _controller_WeatherMapPageController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../controller/WeatherMapPageController */ "./src/controller/WeatherMapPageController.ts");




class Router {
    constructor(container, observerToModel, observerToView, language) {
        this.container = container;
        this.weatherTodayPageController = new _controller_WeatherTodayPageController__WEBPACK_IMPORTED_MODULE_2__.WeatherTodayPageController(this, observerToView, language);
        const weatherFiveDaysPageController = new _controller_WeatherFiveDaysPageController__WEBPACK_IMPORTED_MODULE_1__.WeatherFiveDaysPageController(this, observerToModel, observerToView, language);
        const weatherMapPageController = new _controller_WeatherMapPageController__WEBPACK_IMPORTED_MODULE_3__.WeatherMapPageController(this, observerToView, language);
        const airQualityPageController = new _controller_AirQualityPageController__WEBPACK_IMPORTED_MODULE_0__.AirQualityPageController(this, observerToView, language);
        this.routes = new Map([
            ['map', weatherMapPageController],
            ['today', this.weatherTodayPageController],
            ['five-days', weatherFiveDaysPageController],
            ['air-quality', airQualityPageController],
        ]);
        this.weatherTodayPageController.component.element.style.display = 'none';
        weatherFiveDaysPageController.component.element.style.display = 'none';
        weatherMapPageController.component.element.style.display = 'none';
        airQualityPageController.component.element.style.display = 'none';
        this.container.append(this.weatherTodayPageController.component.element);
        this.container.append(weatherFiveDaysPageController.component.element);
        this.container.append(weatherMapPageController.component.element);
        this.container.append(airQualityPageController.component.element);
        const currentRoute = this.getCurrentRoute();
        this.goTo(currentRoute);
        this.navigateByArrows();
    }
    getCurrentRoute() {
        const UrlSegments = window.location.pathname.split('/').filter((segment) => !!segment);
        const currentRoute = UrlSegments.join('/');
        return currentRoute;
    }
    updateUrl(url) {
        if (url === '') {
            url = 'today';
        }
        if (url !== this.getCurrentRoute()) {
            if (url !== 'today') {
                this.weatherTodayPageController.component.element.style.display = 'none';
            }
            history.pushState(null, '', url);
        }
    }
    getController(pageRoute) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (pageRoute === '')
            return this.routes.get('today');
        let selectedPage = '';
        for (const templatePage of this.routes.keys()) {
            const mainPageRoute = pageRoute.split('/')[0] || '';
            if (mainPageRoute === templatePage)
                selectedPage = templatePage;
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.routes.get(selectedPage || '404 Not Found');
    }
    goTo(pageRoute) {
        if (this.currentRoute === pageRoute)
            return;
        this.updateUrl(pageRoute);
        if (this.currentRoute) {
            const oldPageController = this.getController(this.currentRoute);
            oldPageController.component.element.style.display = 'none';
        }
        this.pageController = this.getController(pageRoute);
        this.pageController.component.element.style.display = 'grid';
        this.currentRoute = pageRoute;
    }
    navigateByArrows() {
        window.addEventListener('popstate', () => {
            this.goTo(this.getCurrentRoute());
        });
    }
}


/***/ }),

/***/ "./src/view/components/footer/FooterComponent.ts":
/*!*******************************************************!*\
  !*** ./src/view/components/footer/FooterComponent.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/view/components/footer/footer.css");


class FooterComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller) {
        super('footer', { controller }, 'footer');
    }
    render() {
        this.footerContainer = document.createElement('div');
        this.footerContainer.classList.add('footer-container');
        this.footerContainer.insertAdjacentHTML('beforeend', `
    <div class="footer__developers-gitHub">
    <a class="footer__developers-gitHub-link" href="https://github.com/LanaVladi">LanaVladi</a>
      <a class="footer__developers-gitHub-link" href="https://github.com/ilyahancharuk">IlyaHancharuk</a>
      <a class="footer__developers-gitHub-link" href="https://github.com/alex962012">AlexVoytenko</a>

    </div>
    <p class="footer__year">2023</p>
    <div class="footer__RSS-logo">
      <a class="footer__RSS-logo-link" href="https://rs.school/js/"><div class='footer-logo-icon'></div></a>
    </div>
    `);
        this.element.append(this.footerContainer);
    }
}


/***/ }),

/***/ "./src/view/components/header/GeolocationComponent.ts":
/*!************************************************************!*\
  !*** ./src/view/components/header/GeolocationComponent.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationComponent": () => (/* binding */ GeolocationComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");

class GeolocationComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, observerToModel) {
        super('geolocation-container', { controller, observerToModel }, 'div');
        this.observerToModel = observerToModel;
    }
    render() {
        this.geolocationButton = document.createElement('button');
        this.geolocationButton.classList.add('geolocation-button');
        this.geolocationButton.innerText = '➤';
        this.element.append(this.geolocationButton);
    }
    addListeners() {
        this.element.addEventListener('click', async () => {
            const cityCoords = await this.props.controller.getGeolocationCoords();
            this.observerToModel.notify("geolocation" /* ViewEvent.geolocation */, { message: cityCoords });
        });
    }
}


/***/ }),

/***/ "./src/view/components/header/HeaderComponent.ts":
/*!*******************************************************!*\
  !*** ./src/view/components/header/HeaderComponent.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/view/components/header/header.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");




class HeaderComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, router, observerToView, language) {
        super('header', { controller, router, observerToView, language }, 'header');
        this.storageKeyLang = 'lang';
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
        this.observerToView.subscribe("temp-unit" /* ModelEvent.temp_unit */, this);
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.componentToday.textContent = langObject.today;
                this.componentFiveDays.textContent = langObject.fiveDay;
                this.componentMap.textContent = langObject.map;
                this.componentAirQuality.textContent = langObject.airQuality;
                break;
            }
            case "today-weather-indicators" /* ModelEvent.today_weather_indicators */: {
                const { temp, icon, cityName, countryCode, id, dataCalcTime, sunrise, sunset } = (params.message);
                this.temperature.textContent = `${temp}°`;
                this.locationName.textContent = `${cityName}, ${countryCode}`;
                this.weatherIcon.src = `${_constants__WEBPACK_IMPORTED_MODULE_1__.weatherIconUrl}${icon}${_constants__WEBPACK_IMPORTED_MODULE_1__.weatherIconImgFormat}`;
                this.updateBackground(id, dataCalcTime, sunrise, sunset);
            }
        }
    }
    render() {
        const headerContainer = document.createElement('div');
        headerContainer.className = 'header-container';
        const headerToolsWrapper = document.createElement('div');
        headerToolsWrapper.className = 'header-tools-wrapper';
        this.headerTools = document.createElement('div');
        this.headerTools.className = 'header-tools';
        this.logo = document.createElement('div');
        this.logo.classList.add('header-logo');
        this.conversion = document.createElement('div');
        this.conversion.className = 'conversion';
        this.conversion.append(this.props.controller.languageController.component.element, this.props.controller.tempUnitController.component.element);
        this.headerTools.append(this.props.controller.searcherController.component.element, this.props.controller.voiceControl.component.element, this.props.controller.geolocationController.component.element, this.conversion);
        this.headerBurgerButton = document.createElement('div');
        this.headerBurgerButton.id = 'header-burger-button';
        this.headerBurgerButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        headerToolsWrapper.append(this.logo, this.headerTools, this.headerBurgerButton);
        const headerNavContainer = document.createElement('nav');
        headerNavContainer.className = 'header-nav-container';
        this.headerNav = document.createElement('ul');
        this.headerNav.classList.add('header-nav');
        this.componentToday = document.createElement('li');
        this.componentToday.classList.add('header-nav-li');
        this.componentToday.textContent = this.props.language.getTranslateRu().today;
        this.componentFiveDays = document.createElement('li');
        this.componentFiveDays.classList.add('header-nav-li');
        this.componentFiveDays.textContent = this.props.language.getTranslateRu().fiveDay;
        this.componentMap = document.createElement('li');
        this.componentMap.classList.add('header-nav-li');
        this.componentMap.textContent = this.props.language.getTranslateRu().map;
        this.componentAirQuality = document.createElement('li');
        this.componentAirQuality.classList.add('header-nav-li');
        this.componentAirQuality.textContent = this.props.controller.language.getTranslateRu().airQuality;
        this.headerNav.append(this.componentToday, this.componentFiveDays, this.componentMap, this.componentAirQuality);
        headerNavContainer.append(this.headerNav);
        const headerLocationContainer = document.createElement('div');
        headerLocationContainer.className = 'header-location-container';
        const headerLocationItem = document.createElement('div');
        headerLocationItem.className = 'header-location-item';
        this.headerLocation = document.createElement('div');
        this.headerLocation.className = 'header-location';
        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'header__weather-icon';
        this.temperature = document.createElement('span');
        this.locationName = document.createElement('span');
        headerLocationItem.append(this.weatherIcon, this.temperature, this.locationName);
        this.headerLocation.append(headerLocationItem);
        headerLocationContainer.append(this.headerLocation);
        headerContainer.append(headerToolsWrapper, headerLocationContainer, headerNavContainer);
        this.element.append(headerContainer);
    }
    addListeners() {
        this.headerNav.addEventListener('click', (event) => {
            if (event.target === this.componentToday) {
                this.props.router.goTo('today');
            }
            if (event.target === this.componentFiveDays) {
                this.props.router.goTo('five-days');
            }
            if (event.target === this.componentMap) {
                this.props.router.goTo('map');
            }
            if (event.target === this.componentAirQuality) {
                this.props.router.goTo('air-quality');
            }
        });
        this.logo.addEventListener('click', () => {
            this.props.router.goTo('today');
        });
        this.headerBurgerButton.addEventListener('click', () => {
            this.headerBurgerButton.classList.toggle('open');
            this.headerTools.classList.toggle('burger-open');
            document.body.classList.toggle('no-scroll-page');
        });
    }
    updateBackground(id, dataCalcTime, sunrise, sunset) {
        const weatherId = id.toString();
        const dayNight = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.convertUnixToDayNight)(dataCalcTime, sunrise, sunset);
        const root = document.getElementById('root');
        const footer = document.querySelector('.footer');
        if (root && footer) {
            root.style.backgroundColor = _constants__WEBPACK_IMPORTED_MODULE_1__.DataToBGStyle[dayNight][weatherId].headerColor;
            root.style.backgroundImage = _constants__WEBPACK_IMPORTED_MODULE_1__.DataToBGStyle[dayNight][weatherId].backgroundGradient;
            footer.style.backgroundColor = _constants__WEBPACK_IMPORTED_MODULE_1__.DataToBGStyle[dayNight][weatherId].headerColor;
        }
    }
}


/***/ }),

/***/ "./src/view/components/header/LanguageComponent.ts":
/*!*********************************************************!*\
  !*** ./src/view/components/header/LanguageComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");

class LanguageComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, observerToModel) {
        super('language-container', { controller, observerToModel }, 'div');
        this.storageKeyLang = 'lang';
        this.lengthOfLocalStorage = 1;
        this.observerToModel = observerToModel;
    }
    render() {
        this.langName = document.createElement('div');
        this.langName.className = 'lang-name';
        const langDefault = this.checkLocalStorageLanguage();
        this.langName.textContent = `${langDefault}`;
        this.langIcon = document.createElement('div');
        this.langIcon.className = 'lang-icon';
        this.element.append(this.langIcon, this.langName);
    }
    checkLocalStorageLanguage() {
        if (localStorage.getItem('lang')) {
            const langList = JSON.parse(`${localStorage.getItem('lang')}`);
            return (this.langName.textContent = langList.toUpperCase());
        }
        else {
            const langList = 'ru';
            return (this.langName.textContent = langList.toUpperCase());
        }
    }
    addListeners() {
        this.element.addEventListener('click', async () => {
            const lang = this.langName.textContent;
            if (lang === 'RU') {
                this.langName.textContent = 'EN';
                this.language = 'en';
            }
            else {
                this.langName.textContent = 'RU';
                this.language = 'ru';
            }
            this.langList = this.language;
            localStorage.setItem(this.storageKeyLang, JSON.stringify(this.langList));
            this.observerToModel.notify("language" /* ViewEvent.language */, { message: this.langList });
        });
    }
}


/***/ }),

/***/ "./src/view/components/header/SearcherComponent.ts":
/*!*********************************************************!*\
  !*** ./src/view/components/header/SearcherComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearcherComponent": () => (/* binding */ SearcherComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _searcher_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searcher.css */ "./src/view/components/header/searcher.css");


class SearcherComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, observerToModel, observerToView) {
        super('searcher-container', { controller, observerToModel, observerToView }, 'div');
        this.storageKeyCity = 'city';
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
        this.observerToView.subscribe("temp-unit" /* ModelEvent.temp_unit */, this);
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.searchInput.placeholder = langObject.searchByCity;
                break;
            }
        }
    }
    render() {
        this.searchInput = document.createElement('input');
        this.searchInput.classList.add('searcher-input');
        this.searchInput.setAttribute('autofocus', 'autofocus');
        this.searchInput.setAttribute('autocomplete', 'true');
        this.searchInput.placeholder = this.props.controller.language.getTranslateRu().searchByCity;
        this.searchIcon = document.createElement('div');
        this.searchIcon.className = 'searcher-icon';
        this.element.append(this.searchInput, this.searchIcon);
    }
    addListeners() {
        this.searchInput.addEventListener('change', () => {
            this.cityName = this.searchInput.value.toLocaleLowerCase();
            this.observerToModel.notify("input" /* ViewEvent.input */, { message: this.cityName, typeEvents: "input" /* ModelEvent.input */ });
            this.searchInput.value = '';
        });
    }
}


/***/ }),

/***/ "./src/view/components/header/TempUnitComponent.ts":
/*!*********************************************************!*\
  !*** ./src/view/components/header/TempUnitComponent.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempUnitComponent": () => (/* binding */ TempUnitComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../constants */ "./src/constants.ts");


class TempUnitComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, observerToModel) {
        super('temperature-unit-container', { controller, observerToModel }, 'select');
        this.observerToModel = observerToModel;
    }
    render() {
        this.celsius = document.createElement('option');
        this.celsius.className = 'option';
        this.celsius.text = '°C';
        this.celsius.value = '°C';
        this.fahrenheit = document.createElement('option');
        this.fahrenheit.text = '°F';
        this.fahrenheit.value = '°F';
        this.fahrenheit.className = 'option';
        this.element.append(this.celsius, this.fahrenheit);
    }
    addListeners() {
        this.element.addEventListener('change', (event) => {
            let tempUnit = event.target.value;
            if (tempUnit === '°C') {
                tempUnit = '°F';
                this.temperatureUnit = _constants__WEBPACK_IMPORTED_MODULE_1__.celsius;
            }
            else {
                tempUnit = '°C';
                this.temperatureUnit = _constants__WEBPACK_IMPORTED_MODULE_1__.fahrenheit;
            }
            this.observerToModel.notify("temp-unit" /* ViewEvent.temp_unit */, { message: this.temperatureUnit });
        });
    }
}


/***/ }),

/***/ "./src/view/components/voiceControl/VoiceControlComponents.ts":
/*!********************************************************************!*\
  !*** ./src/view/components/voiceControl/VoiceControlComponents.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceControlComponent": () => (/* binding */ VoiceControlComponent)
/* harmony export */ });
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _voiceControl_voiceControl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../voiceControl/voiceControl.css */ "./src/view/components/voiceControl/voiceControl.css");


class VoiceControlComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(controller, observerToModel, observerToView, language) {
        super('voice-control-container', { controller, observerToModel, observerToView, language }, 'div');
        this.storageKeyLang = 'lang';
        this.observerToModel = observerToModel;
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.modalInner.innerText = langObject.pleaseSpeak;
                break;
            }
        }
    }
    render() {
        this.voiceControlIcon = document.createElement('div');
        this.voiceControlIcon.className = 'voice-control-icon';
        this.voiceControlModal = document.createElement('div');
        this.voiceControlModal.className = 'voice-control-modal';
        this.voiceControlModal.style.visibility = 'hidden';
        this.modalInner = document.createElement('div');
        this.modalInner.className = 'modal-inner';
        this.modalInner.innerText = this.props.controller.language.getTranslateRu().pleaseSpeak;
        this.voiceRecordAnimation = document.createElement('div');
        this.voiceRecordAnimation.className = 'voice-record-animation';
        this.voiceRecordAnimation.innerHTML = `
            <div class="circle-ripple"></div>
            <div class="circle-ripple-2"></div>
            <div class="circle">
                <div class="circle-2">
                    <div class="microphone-icon"></div>
                </div>
            </div>
        `;
        this.voiceControlModal.append(this.voiceRecordAnimation, this.modalInner);
        this.overlay = document.createElement('div');
        this.overlay.className = 'voice-control-overlay';
        this.element.append(this.voiceControlIcon, this.voiceControlModal, this.overlay);
    }
    addListeners() {
        this.voiceControlIcon.addEventListener('click', async () => {
            this.voiceControlModal.style.visibility = 'visible';
            this.overlay.style.visibility = 'visible';
            const record = await this.props.controller.voiceControlModel.getRecord();
            this.observerToModel.notify("voice" /* ViewEvent.voice */, { message: record, typeEvents: "voice" /* ModelEvent.voice */ });
        });
    }
}


/***/ }),

/***/ "./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.ts":
/*!****************************************************************************!*\
  !*** ./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherFiveDaysPageComponent": () => (/* binding */ WeatherFiveDaysPageComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _WeatherFiveDaysPageComponent_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeatherFiveDaysPageComponent.css */ "./src/view/pages/5-days-weather-page/WeatherFiveDaysPageComponent.css");
/* harmony import */ var _WeatherOneDayComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeatherOneDayComponent */ "./src/view/pages/5-days-weather-page/WeatherOneDayComponent.ts");




class WeatherFiveDaysPageComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(controller, router, observerToView, language) {
        super('five-days-weather', { controller, router, observerToView, language }, 'div');
        this.arrayOneDayComponent = new Array();
        this.storageKeyLang = 'lang';
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        this.observerToView.subscribe("five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.pageName.textContent = langObject.forecastFiveDay;
                this.dailyForecastTimestamp.textContent = langObject.asOf;
                break;
            }
            case "today-weather-indicators" /* ModelEvent.today_weather_indicators */: {
                const { dataCalcTime, timezone } = params.message;
                this.dailyForecastTime.textContent = `${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertUnixToDate)(timezone, dataCalcTime)}, GMT ${timezone}:00`;
                break;
            }
            case "five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */: {
                const { list, cityName } = params.message;
                const filteredArrayDay = list.filter(function (el) {
                    const day = new Date(el.dt_txt);
                    if (day.getHours() === 12) {
                        return el;
                    }
                });
                const filtredArrayNight = list.filter(function (el) {
                    const day = new Date(el.dt_txt);
                    if (day.getHours() === 0) {
                        return el;
                    }
                });
                const newRes = filteredArrayDay.map((el, index) => {
                    el.night = filtredArrayNight[index];
                    return el;
                });
                if (this.locationTitle.textContent === '') {
                    this.dailyForecastDisclosureList.innerHTML = '';
                    newRes.forEach((el) => {
                        const day = new _WeatherOneDayComponent__WEBPACK_IMPORTED_MODULE_3__.WeatherOneDayComponent(this.observerToView, this.language, el);
                        this.dailyForecastDisclosureList.append(day.element);
                        this.arrayOneDayComponent.push(day);
                    });
                }
                else {
                    this.arrayOneDayComponent.forEach((day, index) => {
                        day.update(newRes[index]);
                    });
                }
                this.locationTitle.textContent = `${cityName}`;
                break;
            }
        }
    }
    render() {
        const daysConatainer = document.createElement('div');
        daysConatainer.className = 'five-days-container';
        const locationPageTitle = document.createElement('div');
        locationPageTitle.className = 'location-page-title';
        this.pageName = document.createElement('h1');
        this.pageName.textContent = this.props.language.getTranslateRu().forecastFiveDay;
        this.pageName.className = 'page-name';
        this.locationTitle = document.createElement('span');
        this.locationTitle.className = 'location-title';
        const dailyForecastTimestampBox = document.createElement('div');
        dailyForecastTimestampBox.className = 'daily-forecast-timestamp-box';
        this.dailyForecastTimestamp = document.createElement('span');
        this.dailyForecastTimestamp.className = 'daily-forecast-timestamp';
        this.dailyForecastTimestamp.textContent = this.props.language.getTranslateRu().asOf;
        this.dailyForecastTime = document.createElement('span');
        this.dailyForecastTimestamp.append(this.dailyForecastTime);
        this.dailyForecastDisclosureList = document.createElement('div');
        this.dailyForecastDisclosureList.className = 'daily-forecast-disclosure-list';
        dailyForecastTimestampBox.append(this.dailyForecastTimestamp, this.dailyForecastTime);
        locationPageTitle.append(this.pageName, this.locationTitle);
        daysConatainer.append(locationPageTitle, dailyForecastTimestampBox, this.dailyForecastDisclosureList);
        this.element.append(daysConatainer);
    }
}


/***/ }),

/***/ "./src/view/pages/5-days-weather-page/WeatherOneDayComponent.ts":
/*!**********************************************************************!*\
  !*** ./src/view/pages/5-days-weather-page/WeatherOneDayComponent.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherOneDayComponent": () => (/* binding */ WeatherOneDayComponent)
/* harmony export */ });
/* harmony import */ var _WeatherDayComponent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherDayComponent.css */ "./src/view/pages/5-days-weather-page/WeatherDayComponent.css");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");


class WeatherOneDayComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(observerToView, language, day) {
        super('weather-one-day-container', { observerToView, language }, 'div');
        this.storageKeyLang = 'lang';
        this.day = day;
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.updateElement();
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
        this.observerToView.subscribe("five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */, this);
    }
    updateElement() {
        this.detailsSummaryConditionIcon.src = `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
        this.weatherIcon.src = `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
        this.weatherIconNight.src = `http://openweathermap.org/img/wn/${this.day.night.weather[0].icon}@2x.png`;
        this.dayName.textContent = `${this.getDayofWeek(this.day.dt_txt)}`;
        this.nightOftheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${this.props.language.getTranslateRu().night}`;
        this.detailsSummaryHighTempValue.textContent = `${Math.floor(this.day.main.temp_max)}°`;
        this.detailsSummaryLowTempValue.textContent = `${Math.floor(this.day.night.main.temp)}°`;
        this.detailsSummaryPrecipText.textContent = `${Math.round(this.day.pop * 100)}%`;
        this.detailsSummaryExtended.textContent = `${this.day.weather[0].description}`;
        this.detailsSummaryWindText.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
        this.detailsTableValueHumidity.textContent = `${this.day.main.humidity} %`;
        this.detailsTableValueHumidityNight.textContent = `${this.day.night.main.humidity} %`;
        this.detailsTableValueFeelLike.textContent = `${Math.floor(this.day.main.feels_like)}°`;
        this.detailsTableValueFeelLikeNight.textContent = `${Math.floor(this.day.night.main.feels_like)}°`;
        this.detailsTableValuePressure.textContent = `${this.day.main.pressure} ${this.props.language.getTranslateRu().mb}`;
        this.detailsTableValuePressureNight.textContent = `${this.day.night.main.pressure} ${this.props.language.getTranslateRu().mb}`;
        this.detailsTableValueVisibility.textContent = `${Math.round(this.day.visibility / 1000)} ${this.props.language.getTranslateRu().km}`;
        this.detailsTableValueVisibilityNight.textContent = `${Math.round(this.day.night.visibility / 1000)} ${this.props.language.getTranslateRu().km}`;
        this.temperatureValue.textContent = `${Math.floor(this.day.main.temp)}°`;
        this.temperatureValueNight.textContent = `${Math.floor(this.day.night.main.temp)}°`;
        this.dayOfTheWeek.textContent = `${this.getDayofWeek(this.day.night.dt_txt)} ${this.props.language.getTranslateRu().afternoon}`;
        this.percentageValueDraft.textContent = `${Math.round(this.day.pop * 100)}%`;
        this.percentageValueDraftNight.textContent = `${Math.round(this.day.night.pop * 100)}%`;
        this.percentageValueSpeed.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
        this.percentageValueSpeedNight.textContent = `${Math.floor(this.day.night.wind.speed * 3.6)} ${this.props.language.getTranslateRu().kmH}`;
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.startLang = langObject;
                this.detailsTableLabelVisibility.textContent = langObject.visibility;
                this.detailsTableLabelHumidity.textContent = langObject.humidity;
                this.detailsTableLabelFeelLike.textContent = langObject.feelsLike;
                this.detailsTableLabelPressure.textContent = langObject.pressure;
                this.detailsTableLabelVisibilityNight.textContent = langObject.visibility;
                this.detailsTableLabelHumidityNight.textContent = langObject.humidity;
                this.detailsTableLabelFeelLikeNight.textContent = langObject.feelsLike;
                this.detailsTableLabelPressureNight.textContent = langObject.pressure;
                break;
            }
            case "five-days-weather-indicators" /* ModelEvent.five_days_weather_indicators */: {
                this.detailsSummaryWindText.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.startLang.kmH}`;
                this.detailsTableValueVisibility.textContent = `${Math.round(this.day.visibility / 1000)} ${this.startLang.km}`;
                this.percentageValueSpeed.textContent = `${Math.floor(this.day.wind.speed * 3.6)} ${this.startLang.kmH}`;
                this.percentageValueSpeedNight.textContent = `${Math.floor(this.day.night.wind.speed * 3.6)} ${this.startLang.kmH}`;
                this.detailsTableValueVisibilityNight.textContent = `${Math.round(this.day.night.visibility / 1000)} ${this.startLang.km}`;
                this.detailsTableValuePressure.textContent = `${this.day.main.pressure} ${this.startLang.mb}`;
                this.detailsTableValuePressureNight.textContent = `${this.day.night.main.pressure} ${this.startLang.mb}`;
            }
        }
    }
    update(date) {
        this.day = date;
        this.updateElement();
    }
    render() {
        this.element.className = 'day';
        this.dayWrapper = document.createElement('div');
        this.dayWrapper.className = 'day-wrapper';
        const detailsSummary = document.createElement('div');
        detailsSummary.className = 'details-summary';
        this.dayName = document.createElement('h3');
        this.dayName.className = 'day-name';
        this.dayName.textContent = ``;
        const detailsTemperature = document.createElement('div');
        detailsTemperature.className = 'details-temperature';
        this.detailsSummaryHighTempValue = document.createElement('span');
        this.detailsSummaryHighTempValue.className = 'details-summary--highTempValue';
        const lowTempValue = document.createElement('span');
        lowTempValue.className = 'low-temp-value';
        lowTempValue.textContent = '/';
        this.detailsSummaryLowTempValue = document.createElement('span');
        this.detailsSummaryLowTempValue.className = 'details-summary--lowTempValue';
        const detailsSummaryCondition = document.createElement('div');
        detailsSummaryCondition.className = 'details-summary--condition';
        this.detailsSummaryConditionIcon = document.createElement('img');
        this.detailsSummaryConditionIcon.className = 'details-summary--condition-icon';
        this.detailsSummaryExtended = document.createElement('div');
        this.detailsSummaryExtended.className = 'details-summary-extended';
        this.detailsSummaryExtended.textContent = ``;
        const detailsSummaryPrecip = document.createElement('div');
        detailsSummaryPrecip.className = 'details-summary--precip';
        this.detailsSummaryPrecipText = document.createElement('span');
        this.detailsSummaryPrecipText.textContent = ` %`;
        const detailsSummaryPrecipIcon = document.createElement('div');
        detailsSummaryPrecipIcon.className = 'icon-container precip-item';
        const detailsSummaryWind = document.createElement('div');
        detailsSummaryWind.className = 'details-summary--wind';
        this.detailsSummaryWindText = document.createElement('span');
        this.detailsSummaryWindText.textContent = ``;
        const detailsSummaryWindIcon = document.createElement('div');
        detailsSummaryWindIcon.className = 'icon-container wind-item';
        lowTempValue.append(this.detailsSummaryLowTempValue);
        detailsTemperature.append(this.detailsSummaryHighTempValue, lowTempValue);
        detailsSummaryCondition.append(this.detailsSummaryConditionIcon, this.detailsSummaryExtended);
        detailsSummaryWind.append(detailsSummaryWindIcon, this.detailsSummaryWindText);
        detailsSummaryPrecip.append(detailsSummaryPrecipIcon, this.detailsSummaryPrecipText);
        detailsSummary.append(this.dayName, detailsTemperature, detailsSummaryCondition, detailsSummaryPrecip, detailsSummaryWind);
        this.dayWrapper.append(detailsSummary);
        this.daysContainer = document.createElement('div');
        this.daysContainer.className = 'day-container';
        this.summaryIcon = document.createElement('div');
        this.summaryIcon.className = 'button';
        this.daypartDetails = document.createElement('div');
        this.daypartDetails.className = 'daypart-details';
        const dailyContent = document.createElement('div');
        dailyContent.className = 'daily-content daily-content-day';
        this.dayOfTheWeek = document.createElement('h3');
        this.nightOftheWeek = document.createElement('h3');
        const dailyContentNight = document.createElement('div');
        dailyContentNight.className = 'daily-content daily-content-night';
        const conditionsSummary = document.createElement('div');
        conditionsSummary.className = 'conditions-summary';
        const conditionsSummaryNight = document.createElement('div');
        conditionsSummaryNight.className = 'conditions-summary';
        this.temperatureValue = document.createElement('span');
        this.temperatureValue.className = 'temperature-value';
        this.temperatureValue.textContent = ``;
        this.temperatureValueNight = document.createElement('span');
        this.temperatureValueNight.className = 'temperature-value';
        this.weatherIcon = document.createElement('img');
        this.weatherIcon.className = 'weather-icon';
        this.weatherIconNight = document.createElement('img');
        this.weatherIconNight.className = 'weather-icon';
        const dataPoints = document.createElement('div');
        dataPoints.className = 'data-points';
        const dataPointsNight = document.createElement('div');
        dataPointsNight.className = 'data-points';
        const dailyContentLabelDraft = document.createElement('div');
        dailyContentLabelDraft.className = 'daily-content--label';
        const precipIconBlockDraft = document.createElement('div');
        precipIconBlockDraft.className = 'icon-container precip-item';
        this.percentageValueDraft = document.createElement('span');
        this.percentageValueDraft.textContent = ``;
        const dailyContentLabelDraftNight = document.createElement('div');
        dailyContentLabelDraftNight.className = 'daily-content--label';
        const precipIconBlockDraftNight = document.createElement('div');
        precipIconBlockDraftNight.className = 'icon-container precip-item';
        this.percentageValueDraftNight = document.createElement('span');
        this.percentageValueDraftNight.textContent = ``;
        dailyContentLabelDraft.append(precipIconBlockDraft, this.percentageValueDraft);
        dailyContentLabelDraftNight.append(precipIconBlockDraftNight, this.percentageValueDraftNight);
        const dailyContentLabelSpeed = document.createElement('div');
        dailyContentLabelSpeed.className = 'daily-content--label';
        const precipIconBlockSpeed = document.createElement('div');
        precipIconBlockSpeed.className = 'icon-container wind-item';
        this.percentageValueSpeed = document.createElement('span');
        this.percentageValueSpeed.textContent = ``;
        dailyContentLabelSpeed.append(precipIconBlockSpeed, this.percentageValueSpeed);
        const dailyContentLabelSpeedNigth = document.createElement('div');
        dailyContentLabelSpeedNigth.className = 'daily-content--label';
        const precipIconBlockSpeedNigth = document.createElement('div');
        precipIconBlockSpeedNigth.className = 'icon-container wind-item';
        this.percentageValueSpeedNight = document.createElement('span');
        this.percentageValueSpeedNight.textContent = ``;
        dailyContentLabelSpeedNigth.append(precipIconBlockSpeedNigth, this.percentageValueSpeedNight);
        dataPoints.append(dailyContentLabelDraft, dailyContentLabelSpeed);
        dataPointsNight.append(dailyContentLabelDraftNight, dailyContentLabelSpeedNigth);
        const detailsTableContainer = document.createElement('div');
        detailsTableContainer.className = 'details-table-container details-table-container-day';
        const detailsTableContainerNight = document.createElement('div');
        detailsTableContainerNight.className = 'details-table-container details-table-container-night';
        const detailsTable = document.createElement('ul');
        detailsTable.className = 'details-table';
        const detailsTableNight = document.createElement('ul');
        detailsTableNight.className = 'details-table';
        const listItemHumidity = document.createElement('li');
        listItemHumidity.className = 'list-item';
        const listItemHumidityNigth = document.createElement('li');
        listItemHumidityNigth.className = 'list-item';
        const humidityIcon = document.createElement('div');
        humidityIcon.className = 'icon-container humidity-item';
        const humidityIconNight = document.createElement('div');
        humidityIconNight.className = 'icon-container humidity-item';
        const detailsTabeleFieldHumidity = document.createElement('div');
        detailsTabeleFieldHumidity.className = 'details-table--field';
        const detailsTabeleFieldHumidityNight = document.createElement('div');
        detailsTabeleFieldHumidityNight.className = 'details-table--field';
        this.detailsTableLabelHumidity = document.createElement('span');
        this.detailsTableLabelHumidity.className = 'details-table--label';
        this.detailsTableLabelHumidity.textContent = this.props.language.getTranslateRu().humidity;
        this.detailsTableLabelHumidityNight = document.createElement('span');
        this.detailsTableLabelHumidityNight.className = 'details-table--label';
        this.detailsTableLabelHumidityNight.textContent = this.props.language.getTranslateRu().humidity;
        this.detailsTableValueHumidity = document.createElement('span');
        this.detailsTableValueHumidity.className = 'details-table--value';
        this.detailsTableValueHumidity.textContent = ``;
        this.detailsTableValueHumidityNight = document.createElement('span');
        this.detailsTableValueHumidityNight.className = 'details-table--value';
        this.detailsTableValueHumidityNight.textContent = ``;
        detailsTabeleFieldHumidity.append(this.detailsTableLabelHumidity, this.detailsTableValueHumidity);
        detailsTabeleFieldHumidityNight.append(this.detailsTableLabelHumidityNight, this.detailsTableValueHumidityNight);
        listItemHumidity.append(humidityIcon, detailsTabeleFieldHumidity);
        listItemHumidityNigth.append(humidityIconNight, detailsTabeleFieldHumidityNight);
        const listItemPressure = document.createElement('li');
        listItemPressure.className = 'list-item';
        const listItemPressureNight = document.createElement('li');
        listItemPressureNight.className = 'list-item';
        const pressureIcon = document.createElement('div');
        pressureIcon.className = 'icon-container  pressure-item';
        const pressureIconNight = document.createElement('div');
        pressureIconNight.className = 'icon-container  pressure-item';
        const detailsTabeleFieldPressure = document.createElement('div');
        detailsTabeleFieldPressure.className = 'details-table--field';
        const detailsTabeleFieldPressureNight = document.createElement('div');
        detailsTabeleFieldPressureNight.className = 'details-table--field';
        this.detailsTableLabelPressure = document.createElement('span');
        this.detailsTableLabelPressure.className = 'details-table--label';
        this.detailsTableLabelPressure.textContent = this.props.language.getTranslateRu().pressure;
        this.detailsTableLabelPressureNight = document.createElement('span');
        this.detailsTableLabelPressureNight.className = 'details-table--label';
        this.detailsTableLabelPressureNight.textContent = this.props.language.getTranslateRu().pressure;
        this.detailsTableValuePressure = document.createElement('span');
        this.detailsTableValuePressure.className = 'details-table--value';
        this.detailsTableValuePressure.textContent = ``;
        this.detailsTableValuePressureNight = document.createElement('span');
        this.detailsTableValuePressureNight.className = 'details-table--value';
        this.detailsTableValuePressureNight.textContent = ``;
        detailsTabeleFieldPressure.append(this.detailsTableLabelPressure, this.detailsTableValuePressure);
        detailsTabeleFieldPressureNight.append(this.detailsTableLabelPressureNight, this.detailsTableValuePressureNight);
        listItemPressure.append(pressureIcon, detailsTabeleFieldPressure);
        listItemPressureNight.append(pressureIconNight, detailsTabeleFieldPressureNight);
        const listItemFeelLike = document.createElement('li');
        listItemFeelLike.className = 'list-item';
        const listItemFeelLikeNight = document.createElement('li');
        listItemFeelLikeNight.className = 'list-item';
        const feelLikeIcon = document.createElement('div');
        feelLikeIcon.className = 'icon-container temp-item';
        const feelLikeIconNight = document.createElement('div');
        feelLikeIconNight.className = 'icon-container temp-item';
        const detailsTabeleFieldFeelLike = document.createElement('div');
        detailsTabeleFieldFeelLike.className = 'details-table--field';
        const detailsTabeleFieldFeelLikeNight = document.createElement('div');
        detailsTabeleFieldFeelLikeNight.className = 'details-table--field';
        this.detailsTableLabelFeelLike = document.createElement('span');
        this.detailsTableLabelFeelLike.className = 'details-table--label';
        this.detailsTableLabelFeelLike.textContent = this.props.language.getTranslateRu().feelsLike;
        this.detailsTableLabelFeelLikeNight = document.createElement('span');
        this.detailsTableLabelFeelLikeNight.className = 'details-table--label';
        this.detailsTableLabelFeelLikeNight.textContent = this.props.language.getTranslateRu().feelsLike;
        this.detailsTableValueFeelLike = document.createElement('span');
        this.detailsTableValueFeelLike.className = 'details-table--value';
        this.detailsTableValueFeelLike.textContent = ``;
        this.detailsTableValueFeelLikeNight = document.createElement('span');
        this.detailsTableValueFeelLikeNight.className = 'details-table--value';
        this.detailsTableValueFeelLikeNight.textContent = ``;
        detailsTabeleFieldFeelLike.append(this.detailsTableLabelFeelLike, this.detailsTableValueFeelLike);
        detailsTabeleFieldFeelLikeNight.append(this.detailsTableLabelFeelLikeNight, this.detailsTableValueFeelLikeNight);
        listItemFeelLike.append(feelLikeIcon, detailsTabeleFieldFeelLike);
        listItemFeelLikeNight.append(feelLikeIconNight, detailsTabeleFieldFeelLikeNight);
        const listItemVisibility = document.createElement('li');
        listItemVisibility.className = 'list-item';
        const listItemVisibilityNight = document.createElement('li');
        listItemVisibilityNight.className = 'list-item';
        const visibilityIcon = document.createElement('div');
        visibilityIcon.className = 'icon-container  visibility-item';
        const visibilityIconNight = document.createElement('div');
        visibilityIconNight.className = 'icon-container  visibility-item';
        const detailsTabeleFieldVisibility = document.createElement('div');
        detailsTabeleFieldVisibility.className = 'details-table--field';
        const detailsTabeleFieldVisibilityNight = document.createElement('div');
        detailsTabeleFieldVisibilityNight.className = 'details-table--field';
        this.detailsTableLabelVisibility = document.createElement('span');
        this.detailsTableLabelVisibility.className = 'details-table--label';
        this.detailsTableLabelVisibility.textContent = this.props.language.getTranslateRu().visibility;
        this.detailsTableLabelVisibilityNight = document.createElement('span');
        this.detailsTableLabelVisibilityNight.className = 'details-table--label';
        this.detailsTableLabelVisibilityNight.textContent = this.props.language.getTranslateRu().visibility;
        this.detailsTableValueVisibility = document.createElement('span');
        this.detailsTableValueVisibility.className = 'details-table--value';
        this.detailsTableValueVisibility.textContent = ``;
        this.detailsTableValueVisibilityNight = document.createElement('span');
        this.detailsTableValueVisibilityNight.className = 'details-table--value';
        this.detailsTableValueVisibilityNight.textContent = ``;
        detailsTabeleFieldVisibility.append(this.detailsTableLabelVisibility, this.detailsTableValueVisibility);
        detailsTabeleFieldVisibilityNight.append(this.detailsTableLabelVisibilityNight, this.detailsTableValueVisibilityNight);
        listItemVisibility.append(visibilityIcon, detailsTabeleFieldVisibility);
        listItemVisibilityNight.append(visibilityIconNight, detailsTabeleFieldVisibilityNight);
        conditionsSummary.append(this.temperatureValue, this.weatherIcon, dataPoints);
        conditionsSummaryNight.append(this.temperatureValueNight, this.weatherIconNight, dataPointsNight);
        dailyContent.append(this.dayOfTheWeek, conditionsSummary);
        dailyContentNight.append(this.nightOftheWeek, conditionsSummaryNight);
        detailsTable.append(listItemHumidity, listItemPressure, listItemFeelLike, listItemVisibility);
        detailsTableNight.append(listItemHumidityNigth, listItemPressureNight, listItemFeelLikeNight, listItemVisibilityNight);
        detailsTableContainer.append(detailsTable);
        detailsTableContainerNight.append(detailsTableNight);
        this.daypartDetails.append(dailyContent, dailyContentNight, detailsTableContainer, detailsTableContainerNight);
        this.daysContainer.append(this.dayWrapper, this.daypartDetails, this.summaryIcon);
        this.element.append(this.daysContainer);
    }
    addListeners() {
        this.summaryIcon.addEventListener('click', this.extendedWindow.bind(this));
    }
    extendedWindow() {
        this.dayWrapper.classList.toggle('day-wrapper-none');
        this.daypartDetails.classList.toggle('daypart-details-active');
        this.summaryIcon.classList.toggle('button-up');
        this.summaryIcon.classList.toggle('button');
    }
    getDayofWeek(day) {
        const date = new Date(day);
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            this.weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
            return this.weekDays[date.getDay()] + ' ' + date.getDate();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                this.weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                return this.weekDays[date.getDay()] + ' ' + date.getDate();
            }
            else {
                this.weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
                return this.weekDays[date.getDay()] + ' ' + date.getDate();
            }
        }
    }
}


/***/ }),

/***/ "./src/view/pages/air-quality-page/AirQualityPageComponent.ts":
/*!********************************************************************!*\
  !*** ./src/view/pages/air-quality-page/AirQualityPageComponent.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AirQualityPageComponent": () => (/* binding */ AirQualityPageComponent)
/* harmony export */ });
/* harmony import */ var _AirQualityPageComponent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AirQualityPageComponent.css */ "./src/view/pages/air-quality-page/AirQualityPageComponent.css");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var aqi_us__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aqi-us */ "./node_modules/aqi-us/index.js");



class AirQualityPageComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(controller, router, observerToView, language) {
        super('other-forecast-air-quality', { controller, router, observerToView, language }, 'div');
        this.storageKeyLang = 'lang';
        this.MOLECULAR_WEIGHT_CO = 28.01;
        this.MOLECULAR_WEIGHT_NO2 = 46.01;
        this.MOLECULAR_WEIGHT_O3 = 48;
        this.MOLECULAR_WEIGHT_SO2 = 64.06;
        this.MICRO_G_IN_MILI_G = 1000;
        this.VOLUME_BY_NORMAL_CONDITIONS = 24.45;
        this.BIG_CYRCLE_LENGTH = 320.4424506661589;
        this.CYRCLE_LENGTH = 169.64600329384882;
        this.SEGMENT_COUNT = 6;
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        this.observerToView.subscribe("air-quality-forecast-indicators" /* ModelEvent.air_quality_forecast_indicators */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem(this.storageKeyLang, JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.startLang = langObject;
                this.title.textContent = langObject.airQualityToday;
                this.allPollutantsTitle.textContent = langObject.allPollutants;
                this.moreDetailsText.textContent = langObject.moreDetailsText;
                this.airQualityLevelsCaption.textContent = langObject.airQualityLevelsCaption;
                this.AirQualityPopOverTitle.textContent = langObject.AirQualityPopOverTitle;
                this.AirQualityPopOverBody.textContent = langObject.AirQualityPopOverBody;
                break;
            }
            case "air-quality-forecast-indicators" /* ModelEvent.air_quality_forecast_indicators */: {
                const { pollutants } = params.message;
                this.renderPrymaryPollutant(pollutants);
                this.renderAllPollutants(pollutants);
                this.primaryPollutantInfoTitle.textContent = this.startLang.primaryPollutant;
                this.translatePrimaryPollutant(this.startLang);
                this.translateAllPollutantCharts(this.startLang);
                this.translateLevelList(this.startLang);
                break;
            }
            case "today-weather-indicators" /* ModelEvent.today_weather_indicators */: {
                const { cityName, countryCode } = params.message;
                this.locationPageTitle.textContent = `${cityName}, ${countryCode}`;
                break;
            }
        }
    }
    render() {
        const airQualityContainer = document.createElement('div');
        airQualityContainer.className = 'air-quality-container';
        const titleContainer = document.createElement('h1');
        titleContainer.className = 'air-quality-title';
        this.title = document.createElement('strong');
        this.title.textContent = this.props.language.getTranslateRu().airQualityToday;
        this.locationPageTitle = document.createElement('span');
        this.locationPageTitle.textContent = 'Location';
        titleContainer.append(this.title, ' - ', this.locationPageTitle);
        this.primaryPollutantContainer = document.createElement('div');
        this.primaryPollutantContainer.className = 'primary-pollutant-container';
        const allPollutantsContainer = document.createElement('div');
        allPollutantsContainer.className = 'all-pollutants-container';
        this.allPollutantsTitle = document.createElement('h2');
        this.allPollutantsTitle.className = 'all-pollutants-title';
        this.allPollutantsTitle.textContent = this.props.language.getTranslateRu().allPollutants;
        this.allPollutantCharts = document.createElement('div');
        this.allPollutantCharts.className = 'all-pollutant-charts';
        airQualityContainer.append(titleContainer, this.primaryPollutantContainer);
        allPollutantsContainer.append(this.allPollutantsTitle, this.allPollutantCharts, this.getAllPollutantsFooter());
        this.element.append(airQualityContainer, allPollutantsContainer);
    }
    show() {
        return this.element;
    }
    getAllPollutantsFooter() {
        const element = document.createElement('div');
        element.className = 'all-pollutants-footer';
        this.airQualityMoreDetails = document.createElement('div');
        this.airQualityMoreDetails.className = 'air-quality-moreDetails';
        const infoIcon = document.createElement('span');
        infoIcon.className = 'info-icon';
        this.moreDetailsText = document.createElement('span');
        this.moreDetailsText.textContent = this.props.language.getTranslateRu().moreDetailsText;
        this.airQualityMoreDetails.append(infoIcon, this.moreDetailsText);
        this.airQualityMoreDetails.addEventListener('click', this.openMoreDetails.bind(this));
        this.popover = document.createElement('div');
        this.popover.className = 'popover';
        const popoverCloseContainer = document.createElement('div');
        popoverCloseContainer.className = 'popover-close-container';
        this.popoverClose = document.createElement('div');
        this.popoverClose.className = 'popover-close';
        this.popoverClose.addEventListener('click', this.closeMoreDetails.bind(this));
        const popoverClosePad = document.createElement('div');
        popoverClosePad.className = 'popover-closepad';
        const airQualityPopOverContent = document.createElement('div');
        airQualityPopOverContent.className = 'air-quality-popover-content';
        const AirQualityPopOverText = document.createElement('div');
        AirQualityPopOverText.className = 'air-quality-popover-text';
        this.AirQualityPopOverTitle = document.createElement('h4');
        this.AirQualityPopOverTitle.className = 'air-quality-popover-title';
        this.AirQualityPopOverTitle.textContent = this.props.language.getTranslateRu().AirQualityPopOverTitle;
        this.AirQualityPopOverBody = document.createElement('p');
        this.AirQualityPopOverBody.className = 'air-quality-popover-body';
        this.AirQualityPopOverBody.textContent = this.props.language.getTranslateRu().AirQualityPopOverBody;
        AirQualityPopOverText.append(this.AirQualityPopOverTitle, this.AirQualityPopOverBody);
        airQualityPopOverContent.append(this.getAirQualityLevels(), AirQualityPopOverText);
        popoverClosePad.append(airQualityPopOverContent);
        popoverCloseContainer.append(this.popoverClose, popoverClosePad);
        this.popover.append(popoverCloseContainer);
        element.append(this.airQualityMoreDetails, this.popover);
        return element;
    }
    // IMPLEMENT TRANSLATE!!!
    getAirQualityLevels() {
        const airQualityLevels = document.createElement('div');
        airQualityLevels.className = 'air-quality-levels';
        this.airQualityLevelsCaption = document.createElement('h4');
        this.airQualityLevelsCaption.className = 'air-quality-levels-caption';
        this.airQualityLevelsCaption.textContent = this.props.language.getTranslateRu().airQualityLevelsCaption;
        this.airQualityLevelsList = document.createElement('ul');
        this.airQualityLevelsList.className = 'air-quality-levels-list';
        for (let i = 0; i < 6; i++) {
            const levels = [
                'Хорошее',
                'Среднее',
                'Вредное для чувствительных людей',
                'Вредные условия',
                'Очень вредные условия',
                'Опасно',
            ];
            const airQualityLevel = document.createElement('li');
            airQualityLevel.className = 'air-quality-level';
            const airQualityLevelColor = document.createElement('div');
            airQualityLevelColor.className = 'air-quality-levelColor';
            const airQualityLevelText = document.createElement('span');
            airQualityLevelText.textContent = levels[i];
            airQualityLevel.append(airQualityLevelColor, airQualityLevelText);
            this.airQualityLevelsList.append(airQualityLevel);
        }
        airQualityLevels.append(this.airQualityLevelsCaption, this.airQualityLevelsList);
        return airQualityLevels;
    }
    openMoreDetails() {
        this.popover.classList.add('popover-active');
    }
    closeMoreDetails() {
        this.popover.classList.remove('popover-active');
    }
    renderPrymaryPollutant(pollutants) {
        this.primaryPollutantContainer.innerHTML = '';
        const primaryPollutant = this.getPrimaryPollutant(pollutants);
        const pollutantShortName = primaryPollutant[0];
        const pollutantFullName = this.getPollutantFullName(pollutantShortName);
        const aqi = primaryPollutant[1];
        const { level, levelInfo, levelAttribute } = this.getPollutantSettings(aqi);
        const primaryIndicator = document.createElement('div');
        primaryIndicator.className = 'primary-indicator';
        this.bigChart = document.createElement('div');
        this.bigChart.innerHTML = this.getBigChart(aqi);
        const indicatorLevel = document.createElement('div');
        indicatorLevel.className = 'primary-indicator__level';
        this.levelTitle = document.createElement('span');
        this.levelTitle.textContent = level;
        this.levelInfo = document.createElement('p');
        this.levelInfo.textContent = levelInfo;
        indicatorLevel.append(this.levelTitle, this.levelInfo);
        primaryIndicator.append(this.bigChart, indicatorLevel);
        const primaryPollutantInfo = document.createElement('div');
        primaryPollutantInfo.className = 'primary-pollutant__info';
        this.primaryPollutantInfoTitle = document.createElement('h4');
        this.primaryPollutantInfoTitle.textContent = this.props.language.getTranslateRu().primaryPollutant;
        this.primaryPollutantName = document.createElement('span');
        this.primaryPollutantName.textContent = pollutantFullName;
        primaryPollutantInfo.append(this.primaryPollutantInfoTitle, this.primaryPollutantName);
        this.primaryPollutantContainer.setAttribute('data-pollutant', pollutantShortName);
        this.primaryPollutantContainer.setAttribute('data-level', levelAttribute);
        this.primaryPollutantContainer.append(primaryIndicator, primaryPollutantInfo);
    }
    getPrimaryPollutant(pollutants) {
        const prymaryPollutant = Object.entries(pollutants)
            .filter((pollutant) => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .map((pollutant) => {
            pollutant[1] = this.convertToAqi(pollutant);
            return pollutant;
        })
            .sort((a, b) => {
            if (a[1] > b[1])
                return -1;
            if (a[1] < b[1])
                return 1;
            return 0;
        })[0];
        return prymaryPollutant;
    }
    renderAllPollutants(pollutants) {
        this.allPollutantCharts.innerHTML = '';
        Object.entries(pollutants)
            .filter((pollutant) => pollutant[0] !== 'nh3' && pollutant[0] !== 'no')
            .forEach((pollutant) => {
            const airQualityItem = this.getAirQualityItem(pollutant);
            this.allPollutantCharts.append(airQualityItem);
        });
    }
    getAirQualityItem(pollutant) {
        const aqi = this.convertToAqi(pollutant);
        const { level, levelAttribute } = this.getPollutantSettings(aqi);
        const item = document.createElement('div');
        item.className = 'air-quality-item';
        const chart = document.createElement('div');
        chart.className = 'air-quality-item__chart';
        chart.innerHTML = this.getChart(aqi);
        const pollutantInfo = document.createElement('div');
        pollutantInfo.className = 'air-quality-item__pollutant-info';
        this.pollutantName = document.createElement('span');
        this.pollutantName.className = 'pollutant-info__name';
        this.pollutantName.textContent = this.getPollutantFullName(pollutant[0]);
        const pollutantLevel = document.createElement('span');
        pollutantLevel.className = 'pollutant-info__lavel';
        pollutantLevel.setAttribute('data-level', levelAttribute);
        pollutantLevel.textContent = level;
        const concentration = document.createElement('span');
        concentration.className = 'pollutant-info__concentration';
        concentration.textContent = `${pollutant[1]} `;
        const units = document.createElement('span');
        units.textContent = this.props.language.getTranslateRu().pollutantUnits;
        concentration.append(units);
        pollutantInfo.append(this.pollutantName, pollutantLevel, concentration);
        item.append(chart, pollutantInfo);
        return item;
    }
    // IMPLEMENT TRANSLATE!!!
    getPollutantFullName(pollutantShortName) {
        switch (pollutantShortName) {
            case 'co':
                return this.props.language.getTranslateRu().co;
            case 'no2':
                return this.props.language.getTranslateRu().no2;
            case 'o3':
                return this.props.language.getTranslateRu().o3;
            case 'pm2_5':
                return this.props.language.getTranslateRu().pm2_5;
            case 'pm10':
                return this.props.language.getTranslateRu().pm10;
            case 'so2':
                return this.props.language.getTranslateRu().so2;
            default:
                return '';
        }
    }
    getBigChart(aqi) {
        const { color, factor } = this.getPollutantSettings(aqi);
        const currentSector = (this.BIG_CYRCLE_LENGTH / this.SEGMENT_COUNT) * factor;
        return `
            <svg width="102" height="102" style="border-radius: 50%;display: block;">
                <circle r="51" cx="51" cy="51" transform="rotate(90 51 51)" style="stroke-width:10;stroke: #e7ecf1;" fill='#0000'></circle>
                <circle r="51" cx="51" cy="51" transform="rotate(90 51 51)" style="stroke-width:10;stroke-dasharray:${currentSector} 320.4424506661589;stroke: ${color};transition: stroke-dasharray .3s ease;" fill='#0000'></circle>
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" style="font-size: 4.2rem">${aqi}</text>
            </svg>
        `;
    }
    getChart(aqi) {
        const { color, factor } = this.getPollutantSettings(aqi);
        const currentSector = (this.CYRCLE_LENGTH / this.SEGMENT_COUNT) * factor;
        return `
            <svg width="54" height="54" style="border-radius: 50%;display: block;">
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke: #e7ecf1;" fill='#0000'></circle>
                <circle r="27" cx="27" cy="27" transform="rotate(90 27 27)" style="stroke-width:10;stroke-dasharray:${currentSector} 169.64600329384882;stroke: ${color};transition: stroke-dasharray .3s ease;" fill='#0000'></circle>
                <text x="50%" y="55%" dominant-baseline="middle" alignment-baseline="middle" text-anchor="middle" style="font-size: 1.6rem">${aqi}</text>
            </svg>
        `;
    }
    // IMPLEMENT TRANSLATE!!!
    getPollutantSettings(aqi) {
        let color;
        let factor;
        let level;
        let levelInfo;
        let levelAttribute;
        if (aqi >= 0 && aqi < 50) {
            color = '#00E838';
            factor = 1;
            level = this.props.language.getTranslateRu().good;
            levelInfo = this.props.language.getTranslateRu().goodInfo;
            levelAttribute = 'good';
        }
        else if (aqi >= 50 && aqi < 100) {
            color = '#FFFF24';
            factor = 2;
            level = this.props.language.getTranslateRu().moderate;
            levelInfo = this.props.language.getTranslateRu().moderateInfo;
            levelAttribute = 'moderate';
        }
        else if (aqi >= 100 && aqi < 150) {
            color = '#FF7200';
            factor = 3;
            level = this.props.language.getTranslateRu().unhealthyForGroups;
            levelInfo = this.props.language.getTranslateRu().unhealthyForGroupsInfo;
            levelAttribute = 'unhealthyForGroups';
        }
        else if (aqi >= 150 && aqi < 200) {
            color = '#f00';
            factor = 4;
            level = this.props.language.getTranslateRu().unhealthy;
            levelInfo = this.props.language.getTranslateRu().unhealthyInfo;
            levelAttribute = 'unhealthy';
        }
        else if (aqi >= 200 && aqi < 300) {
            color = '#9d3d8c';
            factor = 5;
            level = this.props.language.getTranslateRu().veryUnhealthy;
            levelInfo = this.props.language.getTranslateRu().veryUnhealthyInfo;
            levelAttribute = 'veryUnhealthy';
        }
        else {
            color = '#8d0021';
            factor = 6;
            level = this.props.language.getTranslateRu().hazardous;
            levelInfo = this.props.language.getTranslateRu().hazardousInfo;
            levelAttribute = 'hazardous';
        }
        return { color, factor, level, levelInfo, levelAttribute };
    }
    convertToAqi(pollutant) {
        const name = pollutant[0];
        const value = pollutant[1];
        switch (name) {
            case 'co': {
                const co_ppm = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MICRO_G_IN_MILI_G / this.MOLECULAR_WEIGHT_CO;
                return aqi_us__WEBPACK_IMPORTED_MODULE_2__.co(co_ppm);
            }
            case 'no2': {
                const no2_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_NO2;
                return aqi_us__WEBPACK_IMPORTED_MODULE_2__.no2(no2_ppb);
            }
            case 'o3': {
                const o3_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_O3;
                const o3_1hr_aqi = aqi_us__WEBPACK_IMPORTED_MODULE_2__.o3_1hr(o3_ppb);
                const o3_8hr_aqi = aqi_us__WEBPACK_IMPORTED_MODULE_2__.o3_8hr(o3_ppb);
                return o3_1hr_aqi || o3_8hr_aqi;
            }
            case 'pm10': {
                return aqi_us__WEBPACK_IMPORTED_MODULE_2__.pm10(value);
            }
            case 'pm2_5': {
                return aqi_us__WEBPACK_IMPORTED_MODULE_2__.pm25(value);
            }
            case 'so2': {
                const so2_ppb = (this.VOLUME_BY_NORMAL_CONDITIONS * value) / this.MOLECULAR_WEIGHT_SO2;
                return aqi_us__WEBPACK_IMPORTED_MODULE_2__.so2(so2_ppb);
            }
            default: {
                return 0;
            }
        }
    }
    translateLevelList(langObject) {
        const keys = [
            'good',
            'moderate',
            'unhealthyForGroups',
            'unhealthy',
            'veryUnhealthy',
            'hazardous',
        ];
        const list = this.airQualityLevelsList.childNodes;
        list.forEach((el, i) => {
            const levelText = el.childNodes[1];
            levelText.textContent = langObject[keys[i]];
        });
    }
    translateAllPollutantCharts(langObject) {
        const keys = ['co', 'no2', 'o3', 'so2', 'pm2_5', 'pm10'];
        const list = this.allPollutantCharts.childNodes;
        list.forEach((el, i) => {
            const pollutantName = el.childNodes[1].childNodes[0];
            const pollutantLevel = el.childNodes[1].childNodes[1];
            const pollutantUnits = el.childNodes[1].childNodes[2].childNodes[1];
            const levelAttribute = pollutantLevel.getAttribute('data-level');
            pollutantLevel.textContent = langObject[levelAttribute];
            pollutantName.textContent = langObject[keys[i]];
            pollutantUnits.textContent = langObject.pollutantUnits;
        });
    }
    translatePrimaryPollutant(langObject) {
        const level = this.primaryPollutantContainer.childNodes[0].childNodes[1].childNodes[0];
        const levelInfo = this.primaryPollutantContainer.childNodes[0].childNodes[1].childNodes[1];
        const pollutantName = this.primaryPollutantContainer.childNodes[1].childNodes[1];
        const levelKey = this.primaryPollutantContainer.getAttribute('data-level');
        const levelInfoKey = `${levelKey}Info`;
        const pollutantKey = this.primaryPollutantContainer.getAttribute('data-pollutant');
        level.textContent = langObject[levelKey];
        levelInfo.textContent = langObject[levelInfoKey];
        pollutantName.textContent = langObject[pollutantKey];
    }
}


/***/ }),

/***/ "./src/view/pages/weather-map-page/WeatherMapPageComponent.ts":
/*!********************************************************************!*\
  !*** ./src/view/pages/weather-map-page/WeatherMapPageComponent.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherMapPageComponent": () => (/* binding */ WeatherMapPageComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _weatherMap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherMap.css */ "./src/view/pages/weather-map-page/weatherMap.css");




class WeatherMapPageComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(controller, router, observerToView, language) {
        super('weather-map', { controller, router, observerToView, language }, 'div');
        this.language = 'ru';
        this.WIDTH_INPUT = 11.1;
        this.isOpen = false;
        this.observerToView = observerToView;
        this.observerToView.subscribe("map" /* ModelEvent.weather_map */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        const mutationObserver = new MutationObserver(this.refresh.bind(this));
        mutationObserver.observe(this.element, { attributes: true });
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                const layer = this.getLayer();
                this.language = this.getLang();
                this.store.set('lang', this.language);
                this.addMetricSelect(layer, this.overlays);
                this.windLayerBtn.textContent = langObject.wind;
                this.tempLayerBtn.textContent = langObject.temp;
                this.pressLayerBtn.textContent = langObject.pressure;
                this.mapSearchInput.placeholder = langObject.searchByCity;
                this.mapSearchButton.textContent = langObject.search;
                this.openFullScreen.textContent = langObject.fullScreen;
                this.windAnimLabel.textContent = langObject.windAnimation;
                this.translateWeatherForecastDays();
                this.translateAltitudeValue();
                break;
            }
            case "today-weather-indicators" /* ModelEvent.today_weather_indicators */: {
                const { coord } = params.message;
                const { lat, lon } = coord;
                if (this._map)
                    this._map.panTo([lat, lon]);
                break;
            }
        }
    }
    getLang() {
        const langName = document.querySelector('.lang-name');
        return langName?.textContent?.toLowerCase();
    }
    refresh() {
        if (this._map) {
            this.windyDiv.style.width = '99.9%';
            this.windyDiv.style.width = '100%';
            this._map.invalidateSize();
        }
    }
    render() {
        this.weatherMapContainer = document.createElement('div');
        this.weatherMapContainer.className = 'weather-map-container';
        this.windyDiv = document.createElement('div');
        this.windyDiv.id = 'windy';
        this.mapControlsContainer = document.createElement('div');
        this.mapControlsContainer.className = 'map-controls-container';
        this.weatherMapContainer.append(this.windyDiv, this.mapControlsContainer);
        this.drawWeatherMap(this.windyDiv);
        this.element.append(this.weatherMapContainer);
    }
    async drawWeatherMap(windyDiv) {
        const [startLat, startLon] = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGeolocation)();
        const options = {
            key: _constants__WEBPACK_IMPORTED_MODULE_0__.apiKeyMapForecast,
            // verbose: true,
            lat: startLat,
            lon: startLon,
            zoom: 5,
        };
        windyInit(options, (windyAPI) => {
            const { broadcast, picker, store, map, overlays } = windyAPI;
            this.overlays = overlays;
            this.store = store;
            store.set('lang', this.language);
            this.renderBurgerButton();
            this.renderLayersButtons(store, overlays);
            this.renderAltitudeInput(store);
            this.renderWindAnimToggler(store);
            this.renderFindMeButton(map);
            this.renderWeatherForecastDays(store);
            this.renderMapSearchForm(map, picker);
            this.renderScreenSizeButtons(map);
            this.addListenersToMap(windyDiv, broadcast, picker, map);
            this._map = map;
        });
    }
    addListenersToMap(windyDiv, broadcast, picker, map) {
        const openPickerCallback = (event) => {
            this.openPicker(event, picker, map);
        };
        picker.on('pickerClosed', () => (this.isOpen = false));
        broadcast.on('redrawFinished', () => {
            windyDiv.addEventListener('click', openPickerCallback);
        });
        windyDiv.addEventListener('click', openPickerCallback);
        windyDiv.addEventListener('mousemove', (event) => {
            if (event.target !== document.getElementById('map-container')) {
                document.getElementById('weather-data-value-display')?.remove();
                return;
            }
            if (event.buttons == 1) {
                windyDiv.removeEventListener('click', openPickerCallback);
            }
            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }
            if (window.innerWidth > 767) {
                const { lat, lng: lon } = map.mouseEventToLatLng(event);
                const coord = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.latLonToDMS)(lat, lon);
                this.displayPosition(coord, event);
            }
        });
        windyDiv.addEventListener('mouseout', () => {
            if (document.getElementById('weather-data-value-display')) {
                document.getElementById('weather-data-value-display')?.remove();
            }
        });
    }
    displayPosition(coord, event) {
        const valueDisplay = document.createElement('div');
        valueDisplay.id = 'weather-data-value-display';
        valueDisplay.innerHTML = `${coord.lat.degrees}°${coord.lat.minutes}'${coord.lat.seconds}", ${coord.lon.degrees}°${coord.lon.minutes}'${coord.lon.seconds}"`;
        document.body.appendChild(valueDisplay);
        valueDisplay.style.left = `${event.clientX + 10}px`;
        valueDisplay.style.top = `${event.clientY + 10}px`;
    }
    openPicker(event, picker, map) {
        if (event.target !== document.getElementById('map-container'))
            return;
        if (!this.isOpen) {
            const { lat, lng: lon } = map.mouseEventToLatLng(event);
            picker.open({ lat, lon });
            this.isOpen = true;
        }
        else {
            picker.close();
            this.isOpen = false;
        }
    }
    renderLayersButtons(store, overlays) {
        this.layersButtons = document.createElement('div');
        this.layersButtons.className = 'layers-buttons';
        this.layerMetricSelect = document.createElement('select');
        this.layerMetricSelect.className = 'layer-metric-select';
        this.windLayerBtn = document.createElement('button');
        this.windLayerBtn.className = 'layer-button active';
        this.windLayerBtn.id = 'wind';
        this.windLayerBtn.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].wind;
        this.tempLayerBtn = document.createElement('button');
        this.tempLayerBtn.className = 'layer-button';
        this.tempLayerBtn.id = 'temp';
        this.tempLayerBtn.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].temp;
        this.pressLayerBtn = document.createElement('button');
        this.pressLayerBtn.className = 'layer-button';
        this.pressLayerBtn.id = 'pressure';
        this.pressLayerBtn.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].pressure;
        this.layersButtons.append(this.windLayerBtn, this.tempLayerBtn, this.pressLayerBtn, this.layerMetricSelect);
        this.mapControlsContainer.append(this.layersButtons);
        const layer = this.getLayer();
        this.addMetricSelect(layer, overlays);
        this.addListnerToLayersButtons(store, overlays);
    }
    addListnerToLayersButtons(store, overlays) {
        this.windLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'wind') {
                this.windLayerBtn.classList.add('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'wind');
                this.addMetricSelect('wind', overlays);
            }
        });
        this.tempLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'temp') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.add('active');
                this.pressLayerBtn.classList.remove('active');
                store.set('overlay', 'temp');
                this.addMetricSelect('temp', overlays);
            }
        });
        this.pressLayerBtn.addEventListener('click', () => {
            if (store.get('overlay') !== 'pressure') {
                this.windLayerBtn.classList.remove('active');
                this.tempLayerBtn.classList.remove('active');
                this.pressLayerBtn.classList.add('active');
                store.set('overlay', 'pressure');
                this.addMetricSelect('pressure', overlays);
            }
        });
        this.layerMetricSelect.addEventListener('change', () => {
            const value = this.layerMetricSelect.value;
            const layer = this.getLayer();
            overlays[layer].setMetric(value);
        });
    }
    getLayer() {
        if (this.layersButtons.querySelector('.active')) {
            const activeElem = this.layersButtons.querySelector('.active');
            if (activeElem) {
                const layer = activeElem.id;
                return layer;
            }
        }
        return 'wind';
    }
    addMetricSelect(layer, overlays) {
        this.layerMetricSelect.innerHTML = '';
        const currentMetric = overlays[layer].metric;
        const arrMetric = overlays[layer].listMetrics();
        arrMetric.forEach((elem, i) => {
            const optionText = this.language === 'en' ? elem : _constants__WEBPACK_IMPORTED_MODULE_0__.unitName.get(elem);
            this.layerMetricSelect.options[i] = new Option(optionText, elem);
            if (currentMetric === elem) {
                this.layerMetricSelect.options[i].selected = true;
            }
        });
    }
    renderBurgerButton() {
        this.burgerButton = document.createElement('div');
        this.burgerButton.id = 'burger-button';
        this.burgerButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        this.weatherMapContainer.append(this.burgerButton);
        this.burgerButton.addEventListener('click', () => {
            this.burgerButton.classList.toggle('open');
            this.mapControlsContainer.classList.toggle('burger-active');
        });
    }
    renderAltitudeInput(store) {
        const altitudeInputContainer = document.createElement('div');
        altitudeInputContainer.className = 'altitude-input-container';
        this.altitudeRange = document.createElement('input');
        this.altitudeRange.className = 'altitude-range';
        this.altitudeRange.type = 'range';
        this.altitudeRange.id = 'altitude';
        this.altitudeRange.min = '0';
        this.altitudeRange.max = '15';
        this.altitudeRange.value = '0';
        this.altitudeValue = document.createElement('label');
        this.altitudeValue.className = 'altitude-value';
        this.altitudeValue.htmlFor = 'altitude';
        this.altitudeValue.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].surface;
        this.altitudeValue.style.top = `11.1rem`;
        altitudeInputContainer.append(this.altitudeRange, this.altitudeValue);
        this.mapControlsContainer.append(altitudeInputContainer);
        this.addListnerToAltitudeInput(store);
    }
    addListnerToAltitudeInput(store) {
        const levels = store.getAllowed('level');
        this.altitudeRange.addEventListener('change', () => {
            store.set('level', levels[+this.altitudeRange.value]);
        });
        this.altitudeRange.addEventListener('input', () => {
            const max = +this.altitudeRange.max;
            const val = +this.altitudeRange.value;
            this.altitudeRange.style.backgroundSize = `${(val * 100) / max}% 100%`;
            const valuesList = this.language === 'en' ? Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.textValuesToAltitude) : Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.textValuesToAltitude);
            this.altitudeValue.innerText = valuesList[+this.altitudeRange.value];
            this.altitudeValue.style.top = `${this.WIDTH_INPUT - (this.WIDTH_INPUT / max) * val}rem`;
        });
    }
    translateAltitudeValue() {
        const valuesList = this.language === 'en' ? Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.textValuesToAltitude) : Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.textValuesToAltitude);
        this.altitudeValue.innerText = valuesList[+this.altitudeRange.value];
    }
    renderFindMeButton(map) {
        this.findMeButton = document.createElement('div');
        this.findMeButton.className = 'find-me-button';
        this.findMeButton.innerText = '➤';
        this.weatherMapContainer.append(this.findMeButton);
        this.addListnerToFindMeButton(map);
    }
    addListnerToFindMeButton(map) {
        this.findMeButton.addEventListener('click', async () => {
            const [startLat, startLon] = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGeolocation)(true);
            map.panTo([startLat, startLon]);
            map.setZoom(_constants__WEBPACK_IMPORTED_MODULE_0__.ZOOM_TO_SELF_POSITION);
        });
    }
    renderWeatherForecastDays(store) {
        this.accTimeLegend = document.createElement('div');
        this.accTimeLegend.id = 'accTime-legend';
        const calendar = store.get('calendar');
        calendar.days.forEach((day) => {
            const dayDiv = document.createElement('div');
            dayDiv.style.width = `${100 / calendar.days.length}%`;
            dayDiv.innerText = this.language === 'en' ? day.displayLong : _constants__WEBPACK_IMPORTED_MODULE_0__.dayName.get(day.displayLong) || '';
            this.accTimeLegend.append(dayDiv);
        });
        const progressBar = document.getElementById('progress-bar');
        progressBar?.append(this.accTimeLegend);
    }
    translateWeatherForecastDays() {
        const calendar = this.store.get('calendar');
        this.accTimeLegend.childNodes.forEach((day, i) => {
            const dayKey = calendar.days[i].displayLong;
            day.textContent = this.language === 'en' ? dayKey : _constants__WEBPACK_IMPORTED_MODULE_0__.dayName.get(dayKey) || '';
        });
    }
    renderMapSearchForm(map, picker) {
        this.mapSearchContainer = document.createElement('div');
        this.mapSearchContainer.className = 'map-search-container';
        this.mapSearchForm = document.createElement('form');
        this.mapSearchForm.className = 'map-search-form';
        this.mapSearchForm.id = 'mapSearchForm';
        this.mapSearchInput = document.createElement('input');
        this.mapSearchInput.className = 'map-search-input';
        this.mapSearchInput.type = 'text';
        this.mapSearchInput.placeholder = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].searchByCity;
        this.mapSearchInput.id = 'location';
        this.mapSearchButton = document.createElement('button');
        this.mapSearchButton.className = 'map-search-button';
        this.mapSearchButton.type = 'submit';
        this.mapSearchButton.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].search;
        this.mapSearchForm.append(this.mapSearchInput, this.mapSearchButton);
        this.mapSearchContainer.append(this.mapSearchForm);
        this.mapControlsContainer.append(this.mapSearchContainer);
        this.addListnerToSearchForm(map, picker);
    }
    addListnerToSearchForm(map, picker) {
        this.mapSearchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const location = this.mapSearchInput.value;
            if (location !== '') {
                const [lat, lon] = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCoordinates)(location);
                map.panTo([lat, lon]);
                picker.open({ lat, lon });
            }
        });
        this.mapSearchInput.addEventListener('focus', () => {
            this.mapSearchContainer.classList.add('active-form');
            setTimeout(() => {
                this.mapSearchButton.style.display = 'inline-block';
            }, 500);
        });
        this.mapSearchInput.addEventListener('focusout', () => {
            setTimeout(() => {
                this.mapSearchContainer.classList.remove('active-form');
                this.mapSearchButton.style.display = 'none';
            }, 500);
        });
    }
    renderScreenSizeButtons(map) {
        this.openFullScreen = document.createElement('button');
        this.openFullScreen.className = 'open-fullscreen-button';
        this.openFullScreen.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].fullScreen;
        this.closeFullScreen = document.createElement('button');
        this.closeFullScreen.className = 'close-fullscreen-button';
        this.closeFullScreen.innerText = '╳';
        this.weatherMapContainer.append(this.openFullScreen, this.closeFullScreen);
        this.addListnerToScreenSizeButtons(map);
    }
    addListnerToScreenSizeButtons(map) {
        this.openFullScreen.addEventListener('click', async () => {
            document.querySelector('.weather-map-container')?.classList.add('fullscreen');
            this.openFullScreen.style.visibility = 'hidden';
            this.closeFullScreen.style.visibility = 'visible';
            map.invalidateSize();
        });
        this.closeFullScreen.addEventListener('click', async () => {
            document.querySelector('.weather-map-container')?.classList.remove('fullscreen');
            this.closeFullScreen.style.visibility = 'hidden';
            this.openFullScreen.style.visibility = 'visible';
            map.invalidateSize();
        });
    }
    renderWindAnimToggler(store) {
        this.windAnimToggler = document.createElement('div');
        this.windAnimToggler.className = 'wind-anim-toggler';
        this.toggler = document.createElement('div');
        this.toggler.id = 'windAnim';
        this.toggler.className = 'switch-btn';
        this.windAnimLabel = document.createElement('div');
        this.windAnimLabel.className = 'wind-anim-label';
        this.windAnimLabel.innerText = _constants__WEBPACK_IMPORTED_MODULE_0__.langObj[this.language].windAnimation;
        this.windAnimToggler.append(this.toggler, this.windAnimLabel);
        this.mapControlsContainer.append(this.windAnimToggler);
        this.addListnerToWindAnimToggler(store);
    }
    addListnerToWindAnimToggler(store) {
        if (store.get('particlesAnim') === 'on') {
            this.toggler.classList.add('switch-on');
        }
        this.windAnimToggler.addEventListener('click', () => {
            if (store.get('particlesAnim') === 'on') {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'off');
            }
            else {
                this.toggler.classList.toggle('switch-on');
                store.set('particlesAnim', 'on');
            }
        });
    }
}


/***/ }),

/***/ "./src/view/pages/weather-today-page/WeatherTodayPageComponent.ts":
/*!************************************************************************!*\
  !*** ./src/view/pages/weather-today-page/WeatherTodayPageComponent.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherTodayPageComponent": () => (/* binding */ WeatherTodayPageComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.ts");
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BaseComponent */ "./src/view/BaseComponent.ts");
/* harmony import */ var _weather_today_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-today-page.css */ "./src/view/pages/weather-today-page/weather-today-page.css");




class WeatherTodayPageComponent extends _BaseComponent__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(controller, router, observerToView, language) {
        super('weather-today', { controller, router, observerToView, language }, 'div');
        this.storageKeyLang = 'lang';
        this.observerToView = observerToView;
        this.language = language;
        this.startLang = this.checkLocalStorageLanguage();
        this.notify({ message: this.startLang, typeEvents: "language" /* ModelEvent.language */ });
        this.observerToView.subscribe("today-weather-indicators" /* ModelEvent.today_weather_indicators */, this);
        this.observerToView.subscribe("language" /* ModelEvent.language */, this);
        this.observerToView.subscribe("temp-unit" /* ModelEvent.temp_unit */, this);
    }
    checkLocalStorageLanguage() {
        if (!JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`)) {
            const startLangInit = 'ru';
            localStorage.setItem('lang', JSON.stringify(startLangInit));
            return this.language.getTranslateRu();
        }
        else {
            const startLangInit = JSON.parse(`${localStorage.getItem(this.storageKeyLang)}`);
            if (startLangInit === 'en') {
                return this.language.getTranslateEn();
            }
            else {
                return this.language.getTranslateRu();
            }
        }
    }
    notify(params) {
        switch (params.typeEvents) {
            case "language" /* ModelEvent.language */: {
                const langObject = params.message;
                this.currentConditionsTitleTimestampName.textContent = langObject.asOf;
                this.todayDetailsTitleName.textContent = langObject.weatherToday;
                this.feelsLikeTempLabel.textContent = langObject.feelsLike;
                this.todayDetailsItemLabelMaxMinTemp.textContent = `${langObject.high}/${langObject.low}`;
                this.todayDetailsItemLabelHumidity.textContent = `${langObject.humidity}`;
                this.todayDetailsItemLabelWind.textContent = `${langObject.wind}`;
                this.todayDetailsItemInfoWindUnit.textContent = `${langObject.kmH}`;
                this.todayDetailsItemLabelCloudiness.textContent = `${langObject.cloudiness}`;
                this.todayDetailsItemLabelPressure.textContent = `${langObject.pressure}`;
                this.todayDetailsItemInfoPressureUnit.textContent = `${langObject.mb}`;
                this.todayDetailsItemLabelVisibility.textContent = `${langObject.visibility}`;
                this.todayDetailsItemInfoVisibilityUnit.textContent = `${langObject.km}`;
                break;
            }
            case "today-weather-indicators" /* ModelEvent.today_weather_indicators */: {
                const { temp, tempMin, tempMax, feelsLike, humidity, pressure, visibility, windSpeed, clouds, sunrise, sunset, icon, description, id, timezone, cityName, countryCode, dataCalcTime, } = params.message;
                this.currentConditionsTitleLocation.textContent = `${cityName}, ${countryCode}`;
                this.currentConditionsTitleTimestampValue.textContent = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertUnixToDate)(timezone, dataCalcTime)}, GMT ${timezone}:00`;
                this.boxTempValue.textContent = `${temp}°`;
                this.boxTempPhrase.textContent = `${description}`;
                this.currentConditionsIcon.src = `${_constants__WEBPACK_IMPORTED_MODULE_0__.weatherIconUrl}${icon}${_constants__WEBPACK_IMPORTED_MODULE_0__.weatherIconImgFormat}`;
                this.feelsLikeTempValue.textContent = `${feelsLike}°`;
                this.todayDetailsTitleValue.textContent = `${cityName}, ${countryCode}`;
                this.sunriseSunsetTimeSunriseTime.textContent = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertUnixToDate)(timezone, sunrise)}`;
                this.sunriseSunsetTimeSunsetTime.textContent = `${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertUnixToDate)(timezone, sunset)}`;
                this.todayDetailsItemInfoMaxTemp.textContent = `${tempMax}°/`;
                this.todayDetailsItemInfoMinTemp.textContent = `${tempMin}°`;
                this.todayDetailsItemInfoHumidity.textContent = `${humidity}%`;
                this.todayDetailsItemInfoWind.textContent = `${windSpeed}`;
                this.todayDetailsItemInfoCloudiness.textContent = `${clouds}%`;
                this.todayDetailsItemInfoPressure.textContent = `${pressure}`;
                this.todayDetailsItemInfoVisibility.textContent = `${visibility}`;
                this.updateBackground(id, dataCalcTime, sunrise, sunset);
                this.updateSunAnimation(sunrise, sunset, dataCalcTime);
            }
        }
    }
    render() {
        this.currentConditions = document.createElement('div');
        this.currentConditions.className = 'current-conditions-card container';
        const currentConditionsTitle = document.createElement('div');
        currentConditionsTitle.className = 'current-conditions-card-title';
        this.currentConditionsTitleLocation = document.createElement('h2');
        this.currentConditionsTitleLocation.className = 'current-conditions-card-title__location';
        const currentConditionsTitleTimestamp = document.createElement('div');
        currentConditionsTitleTimestamp.className = 'current-conditions-card-title__timestamp';
        this.currentConditionsTitleTimestampName = document.createElement('span');
        this.currentConditionsTitleTimestampName.className = 'current-conditions-card-title__timestamp_name';
        this.currentConditionsTitleTimestampName.textContent = this.props.language.getTranslateRu().asOf;
        this.currentConditionsTitleTimestampValue = document.createElement('span');
        this.currentConditionsTitleTimestampValue.className = 'current-conditions-card-title__timestamp_value';
        currentConditionsTitleTimestamp.append(this.currentConditionsTitleTimestampName, this.currentConditionsTitleTimestampValue);
        currentConditionsTitle.append(this.currentConditionsTitleLocation, currentConditionsTitleTimestamp);
        const currentConditionsBox = document.createElement('div');
        currentConditionsBox.className = 'current-conditions-box';
        const currentConditionsBoxTemp = document.createElement('div');
        currentConditionsBoxTemp.className = 'current-conditions-box-temp';
        const currentConditionsBoxIcon = document.createElement('div');
        currentConditionsBoxIcon.className = 'current-conditions-box-icon';
        this.currentConditionsIcon = document.createElement('img');
        this.currentConditionsIcon.className = 'current-conditions-icon';
        this.boxTempValue = document.createElement('div');
        this.boxTempValue.className = 'box-temp-value';
        this.boxTempPhrase = document.createElement('div');
        this.boxTempPhrase.className = 'box-temp-phrase';
        currentConditionsBoxIcon.append(this.currentConditionsIcon);
        currentConditionsBoxTemp.append(this.boxTempValue, this.boxTempPhrase);
        currentConditionsBox.append(currentConditionsBoxTemp, currentConditionsBoxIcon);
        this.currentConditions.append(currentConditionsTitle, currentConditionsBox);
        const todayDetailsCard = document.createElement('div');
        todayDetailsCard.className = 'today-details-card container';
        const todayDetailsTitle = document.createElement('div');
        todayDetailsTitle.className = 'today-details-title';
        this.todayDetailsTitleName = document.createElement('h2');
        this.todayDetailsTitleName.className = 'today-details-title__name';
        this.todayDetailsTitleName.innerText = this.props.language.getTranslateRu().weatherToday;
        this.todayDetailsTitleValue = document.createElement('h2');
        this.todayDetailsTitleValue.className = 'today-details-title__value';
        todayDetailsTitle.append(this.todayDetailsTitleName, this.todayDetailsTitleValue);
        const todayDetailsHeader = document.createElement('div');
        todayDetailsHeader.className = 'today-details-header';
        const feelsLikeTempBox = document.createElement('div');
        feelsLikeTempBox.className = 'today-details-header__feels-like-temp';
        this.feelsLikeTempValue = document.createElement('span');
        this.feelsLikeTempValue.className = 'today-details-header__feels-like-temp_value';
        this.feelsLikeTempLabel = document.createElement('span');
        this.feelsLikeTempLabel.className = 'today-details-header__feels-like-temp_label';
        this.feelsLikeTempLabel.textContent = this.props.language.getTranslateRu().feelsLike;
        feelsLikeTempBox.append(this.feelsLikeTempValue, this.feelsLikeTempLabel);
        const sunriseSunsetBox = document.createElement('div');
        sunriseSunsetBox.className = 'sunrise-sunset-box';
        const sunriseSunsetSvgBox = document.createElement('div');
        sunriseSunsetSvgBox.className = 'sunrise-sunset-svg-box';
        sunriseSunsetBox.insertAdjacentHTML('beforeend', `
       <svg  class="sunrise-sunset">
       <path d="M -13.5 26.5 a 1 1 0 0 0 80 0" class="sunrise-sunset-path" style="transform-origin: 40px 40px;"></path></svg>
       `);
        const sunriseSunsetAnimation = document.createElement('div');
        sunriseSunsetAnimation.className = 'sunrise-sunset-animation';
        this.sunriseSunsetAnimationBox = document.createElement('div');
        this.sunriseSunsetAnimationBox.className = 'sunrise-sunset-animation-box';
        const sunIcon = document.createElement('div');
        sunIcon.className = 'sunrise-sunset-animation-sun-icon';
        this.sunriseSunsetAnimationBox.append(sunIcon);
        sunriseSunsetAnimation.append(this.sunriseSunsetAnimationBox);
        const sunriseSunsetTime = document.createElement('div');
        sunriseSunsetTime.className = 'sunrise-sunset-time';
        this.sunriseSunsetTimeSunriseTime = document.createElement('p');
        this.sunriseSunsetTimeSunriseTime.className = 'sunrise-time';
        this.sunriseSunsetTimeSunsetTime = document.createElement('p');
        this.sunriseSunsetTimeSunsetTime.className = 'sunset-time';
        sunriseSunsetTime.append(this.sunriseSunsetTimeSunriseTime, this.sunriseSunsetTimeSunsetTime);
        sunriseSunsetBox.append(sunriseSunsetTime, sunriseSunsetAnimation);
        todayDetailsHeader.append(feelsLikeTempBox, sunriseSunsetBox);
        // block todayDetailsIndicators
        const todayDetailsIndicators = document.createElement('div');
        todayDetailsIndicators.className = 'today-details-indicators';
        // todayDetailsItemMaxMinTemp
        const todayDetailsItemMaxMinTemp = document.createElement('div');
        todayDetailsItemMaxMinTemp.className = 'todays-details-item max-min-temp';
        const todayDetailsIconContainerTemp = document.createElement('div');
        todayDetailsIconContainerTemp.className = 'icon-container-max-min-temp';
        this.todayDetailsItemLabelMaxMinTemp = document.createElement('div');
        this.todayDetailsItemLabelMaxMinTemp.className = 'today-details-item-label max-min-temp';
        this.todayDetailsItemLabelMaxMinTemp.textContent = `${this.props.language.getTranslateRu().high}/${this.props.language.getTranslateRu().low}`;
        const todayDetailsItemInfoMaxMinTemp = document.createElement('div');
        todayDetailsItemInfoMaxMinTemp.className = 'today-details-item-info max-min-temp';
        this.todayDetailsItemInfoMaxTemp = document.createElement('span');
        this.todayDetailsItemInfoMaxTemp.className = 'today-details-item-info max-temp';
        this.todayDetailsItemInfoMinTemp = document.createElement('span');
        this.todayDetailsItemInfoMinTemp.className = 'today-details-item-info min-temp';
        todayDetailsItemMaxMinTemp.append(todayDetailsIconContainerTemp, this.todayDetailsItemLabelMaxMinTemp, todayDetailsItemInfoMaxMinTemp, this.todayDetailsItemInfoMaxTemp, this.todayDetailsItemInfoMinTemp);
        // todayDetailsItemHumidity
        const todayDetailsItemHumidity = document.createElement('div');
        todayDetailsItemHumidity.className = 'todays-details-item';
        const todayDetailsIconContainerHumidity = document.createElement('div');
        todayDetailsIconContainerHumidity.className = 'icon-container-humidity-item';
        this.todayDetailsItemLabelHumidity = document.createElement('div');
        this.todayDetailsItemLabelHumidity.className = 'today-details-item-label humidity';
        this.todayDetailsItemLabelHumidity.textContent = `${this.props.language.getTranslateRu().humidity}`;
        this.todayDetailsItemInfoHumidity = document.createElement('span');
        this.todayDetailsItemInfoHumidity.className = 'today-details-item-info humidity';
        todayDetailsItemHumidity.append(todayDetailsIconContainerHumidity, this.todayDetailsItemLabelHumidity, this.todayDetailsItemInfoHumidity);
        // todayDetailsItemWind
        const todayDetailsItemWind = document.createElement('div');
        todayDetailsItemWind.className = 'todays-details-item';
        const todayDetailsIconContainerWind = document.createElement('div');
        todayDetailsIconContainerWind.className = 'icon-container-wind-item';
        this.todayDetailsItemLabelWind = document.createElement('div');
        this.todayDetailsItemLabelWind.className = 'today-details-item-label wind';
        this.todayDetailsItemLabelWind.textContent = `${this.props.language.getTranslateRu().wind}`;
        const todayDetailsItemInfoBoxWind = document.createElement('div');
        todayDetailsItemInfoBoxWind.className = 'today-details-item-info-box wind';
        this.todayDetailsItemInfoWind = document.createElement('span');
        this.todayDetailsItemInfoWind.className = 'today-details-item-info wind';
        this.todayDetailsItemInfoWindUnit = document.createElement('span');
        this.todayDetailsItemInfoWindUnit.className = 'today-details-item-info-unit wind';
        this.todayDetailsItemInfoWindUnit.textContent = `${this.props.language.getTranslateRu().kmH}`;
        todayDetailsItemInfoBoxWind.append(this.todayDetailsItemInfoWind, this.todayDetailsItemInfoWindUnit);
        todayDetailsItemWind.append(todayDetailsIconContainerWind, this.todayDetailsItemLabelWind, todayDetailsItemInfoBoxWind);
        // todayDetailsItemCloudiness
        const todayDetailsItemCloudiness = document.createElement('div');
        todayDetailsItemCloudiness.className = 'todays-details-item';
        const todayDetailsIconContainerCloudiness = document.createElement('div');
        todayDetailsIconContainerCloudiness.className = 'icon-container-cloudiness-item';
        this.todayDetailsItemLabelCloudiness = document.createElement('div');
        this.todayDetailsItemLabelCloudiness.className = 'today-details-item-label cloudiness';
        this.todayDetailsItemLabelCloudiness.textContent = `${this.props.language.getTranslateRu().cloudiness}`;
        this.todayDetailsItemInfoCloudiness = document.createElement('span');
        this.todayDetailsItemInfoCloudiness.className = 'today-details-item-info cloudiness';
        todayDetailsItemCloudiness.append(todayDetailsIconContainerCloudiness, this.todayDetailsItemLabelCloudiness, this.todayDetailsItemInfoCloudiness);
        // todayDetailsItemPressure
        const todayDetailsItemPressure = document.createElement('div');
        todayDetailsItemPressure.className = 'todays-details-item';
        const todayDetailsIconContainerPressure = document.createElement('div');
        todayDetailsIconContainerPressure.className = 'icon-container-pressure-item';
        this.todayDetailsItemLabelPressure = document.createElement('div');
        this.todayDetailsItemLabelPressure.className = 'today-details-item-label pressure';
        this.todayDetailsItemLabelPressure.textContent = `${this.props.language.getTranslateRu().pressure}`;
        const todayDetailsItemInfoBoxPressure = document.createElement('div');
        todayDetailsItemInfoBoxPressure.className = 'today-details-item-info-box pressure';
        this.todayDetailsItemInfoPressure = document.createElement('span');
        this.todayDetailsItemInfoPressure.className = 'today-details-item-info pressure';
        this.todayDetailsItemInfoPressureUnit = document.createElement('span');
        this.todayDetailsItemInfoPressureUnit.className = 'today-details-item-info-unit pressure';
        this.todayDetailsItemInfoPressureUnit.textContent = `${this.props.language.getTranslateRu().mb}`;
        todayDetailsItemInfoBoxPressure.append(this.todayDetailsItemInfoPressure, this.todayDetailsItemInfoPressureUnit);
        todayDetailsItemPressure.append(todayDetailsIconContainerPressure, this.todayDetailsItemLabelPressure, todayDetailsItemInfoBoxPressure);
        // todayDetailsItemPressure
        const todayDetailsItemVisibility = document.createElement('div');
        todayDetailsItemVisibility.className = 'todays-details-item';
        const todayDetailsIconContainerVisibility = document.createElement('div');
        todayDetailsIconContainerVisibility.className = 'icon-container-visibility-item';
        this.todayDetailsItemLabelVisibility = document.createElement('div');
        this.todayDetailsItemLabelVisibility.className = 'today-details-item-label visibility';
        this.todayDetailsItemLabelVisibility.textContent = `${this.props.language.getTranslateRu().visibility}`;
        const todayDetailsItemInfoBoxVisibility = document.createElement('div');
        todayDetailsItemInfoBoxVisibility.className = 'today-details-item-info-box visibility';
        this.todayDetailsItemInfoVisibility = document.createElement('span');
        this.todayDetailsItemInfoVisibility.className = 'today-details-item-info visibility';
        this.todayDetailsItemInfoVisibilityUnit = document.createElement('span');
        this.todayDetailsItemInfoVisibilityUnit.className = 'today-details-item-info-unit visibility';
        this.todayDetailsItemInfoVisibilityUnit.textContent = `${this.props.language.getTranslateRu().km}`;
        todayDetailsItemInfoBoxVisibility.append(this.todayDetailsItemInfoVisibility, this.todayDetailsItemInfoVisibilityUnit);
        todayDetailsItemVisibility.append(todayDetailsIconContainerVisibility, this.todayDetailsItemLabelVisibility, todayDetailsItemInfoBoxVisibility);
        todayDetailsIndicators.append(todayDetailsItemMaxMinTemp, todayDetailsItemHumidity, todayDetailsItemWind, todayDetailsItemCloudiness, todayDetailsItemPressure, todayDetailsItemVisibility);
        todayDetailsCard.append(todayDetailsTitle, todayDetailsHeader, todayDetailsIndicators);
        this.element.append(this.currentConditions, todayDetailsCard);
    }
    show() {
        return this.element;
    }
    updateSunAnimation(sunrise, sunset, currentTime) {
        const day = sunset - sunrise;
        const sunPos = currentTime - sunrise;
        const deg = (sunPos * _constants__WEBPACK_IMPORTED_MODULE_0__.HALF_CIRCLE_DEG) / day;
        this.sunriseSunsetAnimationBox.style.transform = `rotate(${deg}deg)`;
    }
    updateBackground(id, dataCalcTime, sunrise, sunset) {
        const weatherId = id.toString();
        const dayNight = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertUnixToDayNight)(dataCalcTime, sunrise, sunset);
        this.currentConditions.style.backgroundImage = `url(${_constants__WEBPACK_IMPORTED_MODULE_0__.DataToBGStyle[dayNight][weatherId].img})`;
    }
}


/***/ }),

/***/ "./src/assets/img/downarrow_120663.png":
/*!*********************************************!*\
  !*** ./src/assets/img/downarrow_120663.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78bcf48d65691c20de44.png";

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac48111e6d2f9c8ca1e3.png";

/***/ }),

/***/ "./src/assets/img/up-arrow_icon-icons.com_73351.png":
/*!**********************************************************!*\
  !*** ./src/assets/img/up-arrow_icon-icons.com_73351.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e53c8e32b5088940918c.png";

/***/ }),

/***/ "./src/assets/svg/cloud-icon.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/cloud-icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "917466e9ae7856424795.svg";

/***/ }),

/***/ "./src/assets/svg/daylight.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/daylight.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54d6e3b791cac2e3c70d.svg";

/***/ }),

/***/ "./src/assets/svg/delete-button-dotted.svg":
/*!*************************************************!*\
  !*** ./src/assets/svg/delete-button-dotted.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86beb67564f96ae421be.svg";

/***/ }),

/***/ "./src/assets/svg/humidity-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/humidity-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48a1a36de3a5cb3e57ba.svg";

/***/ }),

/***/ "./src/assets/svg/info-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/info-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de210c2a4f8765db7f3.svg";

/***/ }),

/***/ "./src/assets/svg/logo.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/logo.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cc000ebea3bd4301279.svg";

/***/ }),

/***/ "./src/assets/svg/popOverCloser.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/popOverCloser.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f9b4062f3c996a0512f.svg";

/***/ }),

/***/ "./src/assets/svg/precip-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/precip-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8b08e62946b047c68a5.svg";

/***/ }),

/***/ "./src/assets/svg/pressure-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/svg/pressure-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d6e4cae9c291f7218df.svg";

/***/ }),

/***/ "./src/assets/svg/sunrise-sunset-path.svg":
/*!************************************************!*\
  !*** ./src/assets/svg/sunrise-sunset-path.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be6a98cd1a8b1b59c0cc.svg";

/***/ }),

/***/ "./src/assets/svg/temp-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/temp-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf13b0b5c4f1a66bfd65.svg";

/***/ }),

/***/ "./src/assets/svg/visibility-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/svg/visibility-icon.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9576bba06edfae7730f.svg";

/***/ }),

/***/ "./src/assets/svg/wind-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/wind-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60e137c0da3c47c307cb.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _view_RenderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/RenderView */ "./src/view/RenderView.ts");


new _view_RenderView__WEBPACK_IMPORTED_MODULE_1__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map