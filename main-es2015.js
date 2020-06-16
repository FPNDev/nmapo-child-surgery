(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | route-base-base-module */ "route-base-base-module").then(__webpack_require__.bind(null, /*! ./route/base/base.module */ "./src/app/route/base/base.module.ts")).then(m => m.BaseModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'unik';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_service_device_detector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/service/device-detector.service */ "./src/app/shared/service/device-detector.service.ts");
/* harmony import */ var _taxonomy_taxonomy_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxonomy/taxonomy.module */ "./src/app/taxonomy/taxonomy.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _taxonomy_taxonomy_module__WEBPACK_IMPORTED_MODULE_6__["TaxonomyModule"]
        ],
        providers: [_shared_service_device_detector_service__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/configuration/page/list/healing.ts":
/*!****************************************************!*\
  !*** ./src/app/configuration/page/list/healing.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    url: '/healing',
    display: 'Лікувальна робота',
    keywords: ['лікувальна робота', 'лікування', 'ліки', 'робота', 'здоров`я', 'здоровя']
});


/***/ }),

/***/ "./src/app/configuration/page/list/learning.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/page/list/learning.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    url: '/learning',
    display: 'Навчальна робота',
    keywords: ['навчальна робота', 'навчання', 'робота', 'результати']
});


/***/ }),

/***/ "./src/app/configuration/page/list/science.ts":
/*!****************************************************!*\
  !*** ./src/app/configuration/page/list/science.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    url: '/science',
    display: 'Наукова робота',
    keywords: ['наукова робота', 'наука', 'робота']
});


/***/ }),

/***/ "./src/app/configuration/page/list/teachers.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/page/list/teachers.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_helper_combinations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/helper/combinations */ "./src/app/core/helper/combinations.ts");
/* harmony import */ var _teacher_teachers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../teacher/teachers */ "./src/app/configuration/teacher/teachers.ts");



/* harmony default export */ __webpack_exports__["default"] = ({
    url: '/employee',
    display: 'Працівники',
    keywords: [
        'працівник', 'професор', 'доцент',
        ..._teacher_teachers__WEBPACK_IMPORTED_MODULE_2__["default"]
            .map(t => Object(_core_helper_combinations__WEBPACK_IMPORTED_MODULE_1__["combinations"])([t.last_name, t.first_name, t.surname]))
            .reduce((a, b) => a.concat(b), [])
    ]
});
/*
...teachers
      .map(t => combinations([t.last_name, t.first_name, t.surname]))
      .reduce((a, b) => a.concat(b), [])
 */


/***/ }),

/***/ "./src/app/configuration/page/page.ts":
/*!********************************************!*\
  !*** ./src/app/configuration/page/page.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_healing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/healing */ "./src/app/configuration/page/list/healing.ts");
/* harmony import */ var _list_learning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/learning */ "./src/app/configuration/page/list/learning.ts");
/* harmony import */ var _list_science__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/science */ "./src/app/configuration/page/list/science.ts");
/* harmony import */ var _list_teachers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/teachers */ "./src/app/configuration/page/list/teachers.ts");





/* harmony default export */ __webpack_exports__["default"] = ([_list_healing__WEBPACK_IMPORTED_MODULE_1__["default"], _list_learning__WEBPACK_IMPORTED_MODULE_2__["default"], _list_science__WEBPACK_IMPORTED_MODULE_3__["default"], _list_teachers__WEBPACK_IMPORTED_MODULE_4__["default"]]);


/***/ }),

/***/ "./src/app/configuration/teacher/list/danulov.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/teacher/list/danulov.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "https://nmapo.edu.ua/images/FakPed/KafDitHirur/1.bmp",
    "first_name": "Олександр",
    "last_name": "Андрійович",
    "surname": "Данилов",
    "since": "1992",
    "description": "<p>\n" +
        "  Доктор медичних наук, професор, завідувач кафедри, автор статей та власник 7 патентів\n" +
        "</p>\n" +
        "<p>\n" +
        "  1963 — 1969 рр. навчався у Алтайському медичному інституті, Барнаул, Росія за спеціальністю «лікувальна справа».\n" +
        "  <br>1972 — 1976 рр. працював лікарем хірургом станції Фастів, Південно-Західної залізниці.\n" +
        "  <br>1976 — 1978 рр. проходив навчання у клінічній ординатурі на кафедрі травматології, ортопедії та військово-польової\n" +
        "  хірургії Київського медичного інституту імені академіка О. О. Богомольця.\n" +
        "  <br>1978 — 1985 рр. працював лікарем-ординатором відділення ортопедії та травматології лікарні «Охматдит».\n" +
        "  <br>1985 — 1992 рр. працював на кафедрі дитячої хірургії в Інституті удосконалення лікарів.\n" +
        "  <br>з 1992 р. по теперішній час працює на кафедрі дитячої хірургії НМАПО ім. П. Л. Шупика.\n" +
        "</p>\n" +
        "<p>\n" +
        "  1984 р. захистив дисертацію на здобуття вченого ступеню кандидата медичних наук за темою <b>«Лікування пошкоджень\n" +
        "  ліктьового нерву у дітей та пошкоджень сухожиль згиначів кисті»</b>. Спеціальність — ортопедія-травматологія. Науковий\n" +
        "  керівник — професор О. В. Дольницький.\n" +
        "</p>\n" +
        "<p>\n" +
        "  1992 р. захистив докторську дисертацію за темою <b>«Лікування травми кисті та її наслідків у дітей»</b>. Спеціальність\n" +
        "  — ортопедія та травматологія. Науковий консультант доктор медичних наук, професор Д. Ю. Кривченя.\n" +
        "</p>\n" +
        "<p>\n" +
        "  1995 р. — присвоєно звання доцента.\n" +
        "  <br>1996 р. — присвоєне звання професора.\n" +
        "</p>\n" +
        "<p>\n" +
        "  Розробляв методи лікування пошкоджень нервів та судин із застосуванням мікрохірург. техніки.\n" +
        "  Нині працює над проблемами мікрохірургічного лікування травми кисті та її наслідків у дітей, а також хірургічного лікування вроджених вад розвитку у дітей.\n" +
        "</p>\n" +
        "</p>\n" +
        "Проводить 230 операцій на рік з патологій опорно-рухової системи.  Серед яких втручання на  кульшовом  колінном та інших суглобах деформації стоп.  Проводить циклі тематичного удосконалення для дитячих хірургів ортопедів сімейних лікарів реабілітологів ."
});


/***/ }),

/***/ "./src/app/configuration/teacher/list/gonchar.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/teacher/list/gonchar.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "https://nmapo.edu.ua/images/FakPed/KafDitHirur/Gonhar.jpg",
    "first_name": "Володимир",
    "last_name": "Володимирович",
    "surname": "Гончар",
    "since": "1999",
    "description": "<p>1971 року народження. В 1996 році закінчив з відзнакою Одеський державний медичний університет. Був рекомендований та вступив в аспірантуру по спеціальності «Дитяча хірургія». В 1999 році закінчив аспірантуру та був прийнятий на роботу асистентом кафедри дитячої хірургії КМАПО ім.П.Л.Шупика. В 2000 році захистив кандилатську дисертацію на тему «Хірургічне лікування ускладнених форм хвороби Гірсшпрунга у дітей».  З  2007 року   обіймає посаду доцента кафедри дитячої хірургії НМАПО імені П.Л.Шупика. В 2010 отримав вчене звання «доцент». В 2015 році запланована наукова робота на здобуття наукового ступеня «доктор медичних наук» на тему «Хіркургічне лікування аноректальних порушень у дітей з патологією невральної трубки»</p><p>Є автором та співавтором більше 30 наукових праць, 4 патентів. Постійно приймає участь в наукових заходах як в Україні так і закордоном. Основна спеціалізація – дитяча проктологія та хірургічне лікування вад розвитку та патології черевної порожнини.</p>"
});


/***/ }),

/***/ "./src/app/configuration/teacher/list/gorbatiuk.ts":
/*!*********************************************************!*\
  !*** ./src/app/configuration/teacher/list/gorbatiuk.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "data:image/jpeg;base64,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",
    "first_name": "Ольга",
    "last_name": "Михайлівна",
    "surname": "Горбатюк",
    "since": "1993",
    "description": "<p>\n" +
        "  Доктор медичних наук (2002), професор (2004).\n" +
        "  <br>Закінчила Київський мед. інститут (1978).\n" +
        "</p>\n" +
        "<p>\n" +
        "  У 1988–93рр. працювала у київському Інститут педіатрії, акушерства і гінекології; від 1993 – у Національній медичній академії післядиплом. освіти (Київ): від 1999 – доцент.\n" +
        "  <br>З 2003 року є головним дитячим хірургом МОЗ України.\n" +
        "</p>\n" +
        "<p>\n" +
        "  Наукові дослідження: абдомінал. хірургія дитячого віку, пластична хірургія, педіатр. андрологія.\n" +
        "</p>"
});


/***/ }),

/***/ "./src/app/configuration/teacher/list/gorelik.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/teacher/list/gorelik.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "https://evroklinika.com/wp-content/uploads/2019/03/ortoped-travmatolog-u-horelik-300x300.jpg",
    "first_name": "Валерія",
    "last_name": "Володимирівна",
    "surname": "Горелік",
    "since": "2005",
    "description": "\n" +
        "<p>\n" +
        "Доцент кафедри НМАПО ім. Шупика, кандидат медичних наук, є участником асоціації дитячих хірургів.\n" +
        "</p>\n" +
        "<p>\n" +
        "  1996 закінчила Одеський національний медичний університет, спеціалізація дитячого хірурга і ортопеда.\n" +
        "</p>\n" +
        "<p>\n" +
        "Провідний оперуючий ортопед – хірург складних ортопедичних та неврологічних патологій (ДЦП, клешоногість та інші). \n" +
        "Більше 20 років роботи в провідних державних та приватних клініках.\n" +
        "</p>"
});


/***/ }),

/***/ "./src/app/configuration/teacher/list/momotov.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/teacher/list/momotov.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "https://nmapo.edu.ua/images/FakPed/KafDitHirur/Momotov.jpg",
    "first_name": "Андрій",
    "last_name": "Олександрович",
    "surname": "Момотов",
    "since": "2012 ",
    "description": '<p>У 1996 закінчив Луганський державний медичний університет. На кафедрі дитячої хірургії Луганського медичного' +
        ' університету пройшов шлях від лаборанта до доцента кафедри.</p>' +
        '<p>В 2002 році захистив кандидатську дисертацію за темою "Йоддицерин в комплексному лікуванні гострого гематогенного' +
        ' остеомієліту у дітей."</p>' +
        '<p>У 2007 році по переводу почав працювати на посаді заступника головного лікаря з лікувальної роботи дитячої' +
        ' поліклініки №2 Дніпровського району м.Києва.</p>' +
        '<p>З 2012 року працює на кафедрі дитячої хірургії НМАПО імені П.Л. Шупика.</p>'
});


/***/ }),

/***/ "./src/app/configuration/teacher/list/ribalchenko.ts":
/*!***********************************************************!*\
  !*** ./src/app/configuration/teacher/list/ribalchenko.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/* harmony default export */ __webpack_exports__["default"] = ({
    "photo": "https://nmapo.edu.ua/images/FakPed/KafDitHirur/Ribalhenko.jpg",
    "first_name": "Василь",
    "last_name": "Федорович",
    "surname": "Рибальченко",
    "since": "2010",
    "description": '<p>Лікарський стаж – 40 років. З 1999 року вища категорія за фахом "дитяча хірургія".</p>' +
        '<p><b>Здобутки:</b> 350 наукових праць з яких: 17 - навчальних посібників які затверджені МОН, та ЦМК МОЗ, 18 патентів на винаходи 6 - рацпропозицій.</p>' +
        '<p><b>Відзнаки</b>: Нагороджений орденом «Знак пошани», подяки від: Міністра охорони здоров’я України, Яготинської районної державної адміністрації та райради Київської області, Управління охорони здоров’я Житомирської ОДА.</p>' +
        '<p><b>Лікувальна робота</b>: Приорітетним є розробка та впровадження новітніх інноваційних технологій в лікуванні вроджених та набутих недуг травного каналу. Зокрема розроблена та впроваджена методика лікування тотального агангліозу товстого кишечника (патент України), а також використання обгрунтованих нових кишечних швів (три патенти України). Вперше в дитячій хірургії обгрунтований новий підхід в лікуванні вад розвитку товстого кишечника, хвороби Пайра, Гірсшпрунга, первинного та вторинного мегаректуму, анальної тріщини, нетримання калу у дітей та геморою у дітей раннього віку. Особисто розроблена нова стратегія обстеження та лікування дітей з закрепами, що викладено (Навчально-методичний посібник. Синдром закрепів у дітей.)</p>'
});


/***/ }),

/***/ "./src/app/configuration/teacher/teachers.ts":
/*!***************************************************!*\
  !*** ./src/app/configuration/teacher/teachers.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_danulov__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/danulov */ "./src/app/configuration/teacher/list/danulov.ts");
/* harmony import */ var _list_gorbatiuk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/gorbatiuk */ "./src/app/configuration/teacher/list/gorbatiuk.ts");
/* harmony import */ var _list_gorelik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/gorelik */ "./src/app/configuration/teacher/list/gorelik.ts");
/* harmony import */ var _list_ribalchenko__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/ribalchenko */ "./src/app/configuration/teacher/list/ribalchenko.ts");
/* harmony import */ var _list_momotov__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/momotov */ "./src/app/configuration/teacher/list/momotov.ts");
/* harmony import */ var _list_gonchar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/gonchar */ "./src/app/configuration/teacher/list/gonchar.ts");







/* harmony default export */ __webpack_exports__["default"] = ([
    _list_danulov__WEBPACK_IMPORTED_MODULE_1__["default"], _list_ribalchenko__WEBPACK_IMPORTED_MODULE_4__["default"], _list_momotov__WEBPACK_IMPORTED_MODULE_5__["default"], _list_gonchar__WEBPACK_IMPORTED_MODULE_6__["default"], _list_gorbatiuk__WEBPACK_IMPORTED_MODULE_2__["default"], _list_gorelik__WEBPACK_IMPORTED_MODULE_3__["default"]
]);


/***/ }),

/***/ "./src/app/core/helper/combinations.ts":
/*!*********************************************!*\
  !*** ./src/app/core/helper/combinations.ts ***!
  \*********************************************/
/*! exports provided: combinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinations", function() { return combinations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function make(arr, el) {
    let i;
    const len = arr.length;
    const res = [];
    for (i = len; i >= 0; i--) {
        res.push(([]).concat(arr.slice(0, i), [el], arr.slice(i)));
    }
    return res;
}
function combinations(arr) {
    let prev, curr, el, i;
    const len = arr.length;
    curr = [[arr[0]]];
    for (i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];
        prev.forEach(function (item) {
            curr = curr.concat(make(item, el));
        });
    }
    return curr.map(c => c.join(' '));
}


/***/ }),

/***/ "./src/app/shared/service/device-detector.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/service/device-detector.service.ts ***!
  \***********************************************************/
/*! exports provided: DeviceDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorService", function() { return DeviceDetectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeviceDetectorService = class DeviceDetectorService {
    constructor() {
        this.isMobile = false;
        window.onresize = () => this.determine();
        if ('screen' in window && 'orientation' in window.screen) {
            screen.orientation.onchange = () => this.determine();
        }
        this.determine();
    }
    determine() {
        this.isMobile = 'matchMedia' in window ?
            (window.matchMedia('screen and (max-width: 768px)').matches) :
            window.innerWidth <= 768;
    }
};
DeviceDetectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DeviceDetectorService);



/***/ }),

/***/ "./src/app/taxonomy/parser/list/page.parser.ts":
/*!*****************************************************!*\
  !*** ./src/app/taxonomy/parser/list/page.parser.ts ***!
  \*****************************************************/
/*! exports provided: PageParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageParser", function() { return PageParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_configuration_page_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/page/page */ "./src/app/configuration/page/page.ts");
/* harmony import */ var _type_page_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/page.type */ "./src/app/taxonomy/type/page.type.ts");




let PageParser = class PageParser {
    get() {
        const pageType = new _type_page_type__WEBPACK_IMPORTED_MODULE_3__["PageType"]();
        return src_app_configuration_page_page__WEBPACK_IMPORTED_MODULE_2__["default"].map(t => {
            return {
                type: pageType,
                texts: t.keywords,
                reference: t
            };
        });
    }
};
PageParser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PageParser);



/***/ }),

/***/ "./src/app/taxonomy/parser/list/teacher.parser.ts":
/*!********************************************************!*\
  !*** ./src/app/taxonomy/parser/list/teacher.parser.ts ***!
  \********************************************************/
/*! exports provided: TeacherParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherParser", function() { return TeacherParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_helper_combinations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/helper/combinations */ "./src/app/core/helper/combinations.ts");
/* harmony import */ var src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configuration/teacher/teachers */ "./src/app/configuration/teacher/teachers.ts");
/* harmony import */ var _type_teacher_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/teacher.type */ "./src/app/taxonomy/type/teacher.type.ts");





let TeacherParser = class TeacherParser {
    get() {
        const teacherType = new _type_teacher_type__WEBPACK_IMPORTED_MODULE_4__["TeacherType"]();
        return src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_3__["default"].map(t => {
            return {
                type: teacherType,
                texts: [
                    ...Object(_core_helper_combinations__WEBPACK_IMPORTED_MODULE_2__["combinations"])([t.first_name, t.surname, t.last_name]),
                    t.first_name,
                    t.last_name,
                    t.surname,
                    t.description.replace(/<\w+\/?>/g, '')
                ].map(text => text.replace(/(\s){2,}/g, '$1')),
                reference: t
            };
        });
    }
};
TeacherParser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TeacherParser);



/***/ }),

/***/ "./src/app/taxonomy/parser/taxonomy.parser.ts":
/*!****************************************************!*\
  !*** ./src/app/taxonomy/parser/taxonomy.parser.ts ***!
  \****************************************************/
/*! exports provided: TaxonomyParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyParser", function() { return TaxonomyParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_page_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/page.parser */ "./src/app/taxonomy/parser/list/page.parser.ts");
/* harmony import */ var _list_teacher_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/teacher.parser */ "./src/app/taxonomy/parser/list/teacher.parser.ts");




let TaxonomyParser = class TaxonomyParser {
    constructor(teacher, page) {
        this.teacher = teacher;
        this.page = page;
    }
    parse() {
        return [
            ...this.teacher.get(),
            ...this.page.get()
        ];
    }
};
TaxonomyParser.ctorParameters = () => [
    { type: _list_teacher_parser__WEBPACK_IMPORTED_MODULE_3__["TeacherParser"] },
    { type: _list_page_parser__WEBPACK_IMPORTED_MODULE_2__["PageParser"] }
];
TaxonomyParser = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TaxonomyParser);



/***/ }),

/***/ "./src/app/taxonomy/service/search.service.ts":
/*!****************************************************!*\
  !*** ./src/app/taxonomy/service/search.service.ts ***!
  \****************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taxonomy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxonomy.service */ "./src/app/taxonomy/service/taxonomy.service.ts");



let SearchService = class SearchService {
    constructor(taxonomy) {
        this.taxonomy = taxonomy;
    }
    search(s) {
        const complex = [];
        const taxonomy = this.taxonomy.getAll();
        for (const record of taxonomy) {
            let t = 0;
            for (const text of record.texts) {
                if (text.toLocaleLowerCase().includes(s)) {
                    if (!complex[t]) {
                        complex[t] = [record];
                    }
                    else {
                        complex[t].push(record);
                    }
                    break;
                }
                t++;
            }
        }
        return complex.reduce((a, b) => a.concat(b), []);
    }
    searchByType(s) {
        const complex = {};
        const taxonomy = this.taxonomy.getAll();
        if (s) {
            s = s.toLocaleLowerCase();
        }
        let hasInclusions = false;
        for (const record of taxonomy) {
            let t = 0;
            for (const text of record.texts) {
                if (text.toLocaleLowerCase().includes(s)) {
                    if (!(record.type.id in complex)) {
                        complex[record.type.id] = [];
                    }
                    if (!complex[record.type.id][t]) {
                        complex[record.type.id][t] = [record];
                    }
                    else {
                        complex[record.type.id][t].push(record);
                    }
                    hasInclusions = true;
                    break;
                }
                t++;
            }
        }
        const results = {};
        for (const c in complex) {
            if (complex.hasOwnProperty(c)) {
                results[c] = complex[c].reduce((a, b) => a.concat(b), []);
            }
        }
        return hasInclusions ? results : null;
    }
};
SearchService.ctorParameters = () => [
    { type: _taxonomy_service__WEBPACK_IMPORTED_MODULE_2__["TaxonomyService"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchService);



/***/ }),

/***/ "./src/app/taxonomy/service/taxonomy.service.ts":
/*!******************************************************!*\
  !*** ./src/app/taxonomy/service/taxonomy.service.ts ***!
  \******************************************************/
/*! exports provided: TaxonomyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyService", function() { return TaxonomyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parser_taxonomy_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parser/taxonomy.parser */ "./src/app/taxonomy/parser/taxonomy.parser.ts");




let TaxonomyService = class TaxonomyService {
    constructor(parser) {
        this.taxonomy = [];
        this.add(...parser.parse());
    }
    add(...r) {
        this.taxonomy.push(...r);
    }
    getType(t) {
        const sr = Object(util__WEBPACK_IMPORTED_MODULE_2__["isString"])(t) ? t : t.id;
        return this.taxonomy.filter(t => t.type.id === sr);
    }
    getTypes(ts) {
        const ids = ts.map(t => Object(util__WEBPACK_IMPORTED_MODULE_2__["isString"])(t) ? t : t.id);
        return this.taxonomy.filter(t => ids.includes(t.type.id));
    }
    getAll() {
        return [...this.taxonomy];
    }
};
TaxonomyService.ctorParameters = () => [
    { type: _parser_taxonomy_parser__WEBPACK_IMPORTED_MODULE_3__["TaxonomyParser"] }
];
TaxonomyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TaxonomyService);



/***/ }),

/***/ "./src/app/taxonomy/taxonomy.module.ts":
/*!*********************************************!*\
  !*** ./src/app/taxonomy/taxonomy.module.ts ***!
  \*********************************************/
/*! exports provided: TaxonomyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomyModule", function() { return TaxonomyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _parser_list_page_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser/list/page.parser */ "./src/app/taxonomy/parser/list/page.parser.ts");
/* harmony import */ var _parser_list_teacher_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser/list/teacher.parser */ "./src/app/taxonomy/parser/list/teacher.parser.ts");
/* harmony import */ var _parser_taxonomy_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser/taxonomy.parser */ "./src/app/taxonomy/parser/taxonomy.parser.ts");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/search.service */ "./src/app/taxonomy/service/search.service.ts");
/* harmony import */ var _service_taxonomy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/taxonomy.service */ "./src/app/taxonomy/service/taxonomy.service.ts");







let TaxonomyModule = class TaxonomyModule {
};
TaxonomyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            _parser_list_teacher_parser__WEBPACK_IMPORTED_MODULE_3__["TeacherParser"],
            _parser_list_page_parser__WEBPACK_IMPORTED_MODULE_2__["PageParser"],
            _parser_taxonomy_parser__WEBPACK_IMPORTED_MODULE_4__["TaxonomyParser"],
            _service_taxonomy_service__WEBPACK_IMPORTED_MODULE_6__["TaxonomyService"],
            _service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        ]
    })
], TaxonomyModule);



/***/ }),

/***/ "./src/app/taxonomy/type/page.type.ts":
/*!********************************************!*\
  !*** ./src/app/taxonomy/type/page.type.ts ***!
  \********************************************/
/*! exports provided: PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageType", function() { return PageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PageType {
    constructor() {
        this.group_display = 'Сторінки';
        this.display = 'Сторінка';
        this.id = 'page';
    }
}


/***/ }),

/***/ "./src/app/taxonomy/type/teacher.type.ts":
/*!***********************************************!*\
  !*** ./src/app/taxonomy/type/teacher.type.ts ***!
  \***********************************************/
/*! exports provided: TeacherType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherType", function() { return TeacherType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TeacherType {
    constructor() {
        this.group_display = 'Працівники';
        this.display = 'Працівник';
        this.id = 'teacher';
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\unik\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map