var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["route-base-base-module"], {
        /***/ "./node_modules/@angular/forms/fesm2015/forms.js": 
        /*!*******************************************************!*\
          !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
          \*******************************************************/
        /*! exports provided: ɵangular_packages_forms_forms_d, ɵInternalFormsSharedModule, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_z, ɵNgNoValidate, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_y, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_ba, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgFormSelectorWarning, NgModel, NgModelGroup, NumberValueAccessor, RadioControlValueAccessor, RangeValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () { return ɵInternalFormsSharedModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () { return REACTIVE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () { return SHARED_FORM_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () { return TEMPLATE_DRIVEN_DIRECTIVES; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () { return CHECKBOX_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () { return DEFAULT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () { return AbstractControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () { return ngControlStatusHost; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () { return formDirectiveProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () { return NG_FORM_SELECTOR_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () { return formControlBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () { return modelGroupProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () { return ɵNgNoValidate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () { return NUMBER_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () { return RADIO_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () { return RadioControlRegistry; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () { return RANGE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () { return formControlBinding$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () { return controlNameBinding; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () { return formDirectiveProvider$1; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () { return formArrayNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () { return formGroupNameProvider; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () { return SELECT_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () { return ɵNgSelectMultipleOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () { return CHECKBOX_REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () { return EMAIL_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () { return MAX_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () { return MIN_LENGTH_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function () { return PATTERN_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () { return REQUIRED_VALIDATOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () { return AbstractControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () { return AbstractFormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () { return CheckboxControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function () { return ControlContainer; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () { return NG_VALUE_ACCESSOR; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () { return COMPOSITION_BUFFER_MODE; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () { return DefaultValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function () { return NgControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () { return NgControlStatus; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () { return NgControlStatusGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function () { return NgForm; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgFormSelectorWarning", function () { return NgFormSelectorWarning; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function () { return NgModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () { return NgModelGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () { return NumberValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () { return RadioControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () { return RangeValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () { return FormControlDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function () { return FormControlName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () { return FormGroupDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function () { return FormArrayName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function () { return FormGroupName; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () { return NgSelectOption; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () { return SelectControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () { return SelectMultipleControlValueAccessor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () { return CheckboxRequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function () { return EmailValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () { return MaxLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () { return MinLengthValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function () { return PatternValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () { return RequiredValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function () { return FormBuilder; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function () { return AbstractControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function () { return FormArray; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function () { return FormControl; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function () { return FormGroup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () { return NG_ASYNC_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () { return NG_VALIDATORS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function () { return Validators; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function () { return VERSION; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function () { return FormsModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () { return ReactiveFormsModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @license Angular v8.2.14
             * (c) 2010-2019 Google LLC. https://angular.io/
             * License: MIT
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * Defines an interface that acts as a bridge between the Angular forms API and a
             * native element in the DOM.
             *
             * Implement this interface to create a custom form control directive
             * that integrates with Angular forms.
             *
             * @see DefaultValueAccessor
             *
             * \@publicApi
             * @record
             */
            function ControlValueAccessor() { }
            if (false) { }
            /**
             * Used to provide a `ControlValueAccessor` for form controls.
             *
             * See `DefaultValueAccessor` for how to implement one.
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var CHECKBOX_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxControlValueAccessor; })),
                multi: true,
            };
            /**
             * \@description
             * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
             * element.
             *
             * \@usageNotes
             *
             * ### Using a checkbox with a reactive form.
             *
             * The following example shows how to use a checkbox with a reactive form.
             *
             * ```ts
             * const rememberLoginControl = new FormControl();
             * ```
             *
             * ```
             * <input type="checkbox" [formControl]="rememberLoginControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var CheckboxControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function CheckboxControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "checked" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return CheckboxControlValueAccessor;
            }());
            CheckboxControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                            host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                            providers: [CHECKBOX_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            CheckboxControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var DEFAULT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return DefaultValueAccessor; })),
                multi: true
            };
            /**
             * We must check whether the agent is Android because composition events
             * behave differently between iOS and Android.
             * @return {?}
             */
            function _isAndroid() {
                /** @type {?} */
                var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
                return /android (\d+)/.test(userAgent.toLowerCase());
            }
            /**
             * \@description
             * Provide this token to control if form directives buffer IME input until
             * the "compositionend" event occurs.
             * \@publicApi
             * @type {?}
             */
            var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
            /**
             * \@description
             * The default `ControlValueAccessor` for writing a value and listening to changes on input
             * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using the default value accessor
             *
             * The following example shows how to use an input element that activates the default value accessor
             * (in this case, a text field).
             *
             * ```ts
             * const firstNameControl = new FormControl();
             * ```
             *
             * ```
             * <input type="text" [formControl]="firstNameControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var DefaultValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _compositionMode
                 */
                function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._compositionMode = _compositionMode;
                    /**
                     * \@description
                     * The registered callback function called when an input event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * Whether the user is creating a composition string (IME events).
                     */
                    this._composing = false;
                    if (this._compositionMode == null) {
                        this._compositionMode = !_isAndroid();
                    }
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.writeValue = function (value) {
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._handleInput = function (value) {
                    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                        this.onChange(value);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                DefaultValueAccessor.prototype._compositionEnd = function (value) {
                    this._composing = false;
                    this._compositionMode && this.onChange(value);
                };
                return DefaultValueAccessor;
            }());
            DefaultValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                            // TODO: vsavkin replace the above selector with the one below it once
                            // https://github.com/angular/angular/issues/3011 is implemented
                            // selector: '[ngModel],[formControl],[formControlName]',
                            host: {
                                '(input)': '$any(this)._handleInput($event.target.value)',
                                '(blur)': 'onTouched()',
                                '(compositionstart)': '$any(this)._compositionStart()',
                                '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                            },
                            providers: [DEFAULT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            DefaultValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * \@description
             * Base class for control directives.
             *
             * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControlDirective = /** @class */ (function () {
                function AbstractControlDirective() {
                }
                Object.defineProperty(AbstractControlDirective.prototype, "value", {
                    /**
                     * \@description
                     * Reports the value of the control if it is present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.value : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valid", {
                    /**
                     * \@description
                     * Reports whether the control is valid. A control is considered valid if no
                     * validation errors exist with the current value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.valid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
                    /**
                     * \@description
                     * Reports whether the control is invalid, meaning that an error exists in the input value.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.invalid : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pending", {
                    /**
                     * \@description
                     * Reports whether a control is pending, meaning that that async validation is occurring and
                     * errors are not yet available for the input value. If the control is not present, null is
                     * returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pending : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
                    /**
                     * \@description
                     * Reports whether the control is disabled, meaning that the control is disabled
                     * in the UI and is exempt from validation checks and excluded from aggregate
                     * values of ancestor controls. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.disabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
                    /**
                     * \@description
                     * Reports whether the control is enabled, meaning that the control is included in ancestor
                     * calculations of validity or value. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.enabled : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "errors", {
                    /**
                     * \@description
                     * Reports the control's validation errors. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.errors : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
                    /**
                     * \@description
                     * Reports whether the control is pristine, meaning that the user has not yet changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.pristine : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
                    /**
                     * \@description
                     * Reports whether the control is dirty, meaning that the user has changed
                     * the value in the UI. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.dirty : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "touched", {
                    /**
                     * \@description
                     * Reports whether the control is touched, meaning that the user has triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.touched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "status", {
                    /**
                     * \@description
                     * Reports the validation status of the control. Possible values include:
                     * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.status : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
                    /**
                     * \@description
                     * Reports whether the control is untouched, meaning that the user has not yet triggered
                     * a `blur` event on it. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () { return this.control ? this.control.untouched : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable that emits a validation status whenever it is
                     * calculated for the control. If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.statusChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
                    /**
                     * \@description
                     * Returns a multicasting observable of value changes for the control that emits every time the
                     * value of the control changes in the UI or programmatically.
                     * If the control is not present, null is returned.
                     * @return {?}
                     */
                    get: function () {
                        return this.control ? this.control.valueChanges : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Resets the control with the provided value if the control is present.
                 * @param {?=} value
                 * @return {?}
                 */
                AbstractControlDirective.prototype.reset = function (value) {
                    if (value === void 0) { value = undefined; }
                    if (this.control)
                        this.control.reset(value);
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControlDirective.prototype.hasError = function (errorCode, path) {
                    return this.control ? this.control.hasError(errorCode, path) : false;
                };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControlDirective.prototype.getError = function (errorCode, path) {
                    return this.control ? this.control.getError(errorCode, path) : null;
                };
                return AbstractControlDirective;
            }());
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for directives that contain multiple registered instances of `NgControl`.
             * Only used by the forms module.
             *
             * \@publicApi
             * @abstract
             */
            var ControlContainer = /** @class */ (function (_super) {
                __extends(ControlContainer, _super);
                function ControlContainer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ControlContainer.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level form directive for the control.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ControlContainer.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group.
                     * @return {?}
                     */
                    get: function () { return null; },
                    enumerable: true,
                    configurable: true
                });
                return ControlContainer;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @return {?}
             */
            function unimplemented() {
                throw new Error('unimplemented');
            }
            /**
             * \@description
             * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
             * object to a DOM element.
             *
             * \@publicApi
             * @abstract
             */
            var NgControl = /** @class */ (function (_super) {
                __extends(NgControl, _super);
                function NgControl() {
                    var _this = _super.apply(this, __spread(arguments)) || this;
                    /**
                     * \@description
                     * The parent form for the control.
                     *
                     * \@internal
                     */
                    _this._parent = null;
                    /**
                     * \@description
                     * The name for the control
                     */
                    _this.name = null;
                    /**
                     * \@description
                     * The value accessor for the control
                     */
                    _this.valueAccessor = null;
                    /**
                     * \@description
                     * The uncomposed array of synchronous validators for the control
                     *
                     * \@internal
                     */
                    _this._rawValidators = [];
                    /**
                     * \@description
                     * The uncomposed array of async validators for the control
                     *
                     * \@internal
                     */
                    _this._rawAsyncValidators = [];
                    return _this;
                }
                Object.defineProperty(NgControl.prototype, "validator", {
                    /**
                     * \@description
                     * The registered synchronous validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgControl.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The registered async validator function for the control
                     *
                     * @throws An exception that this method is not implemented
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(unimplemented())); },
                    enumerable: true,
                    configurable: true
                });
                return NgControl;
            }(AbstractControlDirective));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var AbstractControlStatus = /** @class */ (function () {
                /**
                 * @param {?} cd
                 */
                function AbstractControlStatus(cd) {
                    this._cd = cd;
                }
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.untouched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.touched : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pristine : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.dirty : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.valid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.invalid : false; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
                    /**
                     * @return {?}
                     */
                    get: function () { return this._cd.control ? this._cd.control.pending : false; },
                    enumerable: true,
                    configurable: true
                });
                return AbstractControlStatus;
            }());
            if (false) { }
            /** @type {?} */
            var ngControlStatusHost = {
                '[class.ng-untouched]': 'ngClassUntouched',
                '[class.ng-touched]': 'ngClassTouched',
                '[class.ng-pristine]': 'ngClassPristine',
                '[class.ng-dirty]': 'ngClassDirty',
                '[class.ng-valid]': 'ngClassValid',
                '[class.ng-invalid]': 'ngClassInvalid',
                '[class.ng-pending]': 'ngClassPending',
            };
            /**
             * \@description
             * Directive automatically applied to Angular form controls that sets CSS classes
             * based on control status.
             *
             * \@usageNotes
             *
             * ### CSS classes applied
             *
             * The following classes are applied as the properties become true:
             *
             * * ng-valid
             * * ng-invalid
             * * ng-pending
             * * ng-pristine
             * * ng-dirty
             * * ng-untouched
             * * ng-touched
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatus = /** @class */ (function (_super) {
                __extends(NgControlStatus, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatus(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatus;
            }(AbstractControlStatus));
            NgControlStatus.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
            ];
            /** @nocollapse */
            NgControlStatus.ctorParameters = function () { return [
                { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * \@description
             * Directive automatically applied to Angular form groups that sets CSS classes
             * based on control status (valid/invalid/dirty/etc).
             *
             * @see `NgControlStatus`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgControlStatusGroup = /** @class */ (function (_super) {
                __extends(NgControlStatusGroup, _super);
                /**
                 * @param {?} cd
                 */
                function NgControlStatusGroup(cd) {
                    return _super.call(this, cd) || this;
                }
                return NgControlStatusGroup;
            }(AbstractControlStatus));
            NgControlStatusGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                            host: ngControlStatusHost
                        },] }
            ];
            /** @nocollapse */
            NgControlStatusGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} value
             * @return {?}
             */
            function isEmptyInputValue(value) {
                // we don't check for string here so it also works with arrays
                return value == null || value.length === 0;
            }
            /**
             * \@description
             * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
             *
             * @see `NG_ASYNC_VALIDATORS`
             *
             * \@usageNotes
             *
             * ### Providing a custom validator
             *
             * The following example registers a custom validator directive. Adding the validator to the
             * existing collection of validators requires the `multi: true` option.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors | null {
             *     return { 'custom': true };
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @type {?}
             */
            var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
            /**
             * \@description
             * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
             *
             * @see `NG_VALIDATORS`
             *
             * \@publicApi
             * @type {?}
             */
            var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
            /**
             * A regular expression that matches valid e-mail addresses.
             *
             * At a high level, this regexp matches e-mail addresses of the format `local-part\@tld`, where:
             * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
             *   punctuation symbols).
             * - `local-part` cannot begin or end with a period (`.`).
             * - `local-part` cannot be longer than 64 characters.
             * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
             *   `foo.com`.
             * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
             *   periods (`.`)).
             * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
             * - A `label` cannot be longer than 63 characters.
             * - The whole address cannot be longer than 254 characters.
             *
             * ## Implementation background
             *
             * This regexp was ported over from AngularJS (see there for git history):
             * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
             * It is based on the
             * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
             * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
             * lengths of different parts of the address). The main differences from the WHATWG version are:
             *   - Disallow `local-part` to begin or end with a period (`.`).
             *   - Disallow `local-part` length to exceed 64 characters.
             *   - Disallow total address length to exceed 254 characters.
             *
             * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
             * @type {?}
             */
            var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            /**
             * \@description
             * Provides a set of built-in validators that can be used by form controls.
             *
             * A validator is a function that processes a `FormControl` or collection of
             * controls and returns an error map or null. A null map means that validation has passed.
             *
             * @see [Form Validation](/guide/form-validation)
             *
             * \@publicApi
             */
            var Validators = /** @class */ (function () {
                function Validators() {
                }
                /**
                 * \@description
                 * Validator that requires the control's value to be greater than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a minimum of 3
                 *
                 * ```typescript
                 * const control = new FormControl(2, Validators.min(3));
                 *
                 * console.log(control.errors); // {min: {min: 3, actual: 2}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} min
                 * @return {?} A validator function that returns an error map with the
                 * `min` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.min = function (min) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                        return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to be less than or equal to the provided number.
                 * The validator exists only as a function and not as a directive.
                 *
                 * \@usageNotes
                 *
                 * ### Validate against a maximum of 15
                 *
                 * ```typescript
                 * const control = new FormControl(16, Validators.max(15));
                 *
                 * console.log(control.errors); // {max: {max: 15, actual: 16}}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} max
                 * @return {?} A validator function that returns an error map with the
                 * `max` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.max = function (max) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = parseFloat(control.value);
                        // Controls with NaN values after parsing should be treated as not having a
                        // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                        return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control have a non-empty value.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field is non-empty
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.required);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `required` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.required = function (control) {
                    return isEmptyInputValue(control.value) ? { 'required': true } : null;
                };
                /**
                 * \@description
                 * Validator that requires the control's value be true. This validator is commonly
                 * used for required checkboxes.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field value is true
                 *
                 * ```typescript
                 * const control = new FormControl('', Validators.requiredTrue);
                 *
                 * console.log(control.errors); // {required: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map that contains the `required` property
                 * set to `true` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.requiredTrue = function (control) {
                    return control.value === true ? null : { 'required': true };
                };
                /**
                 * \@description
                 * Validator that requires the control's value pass an email validation test.
                 *
                 * Tests the value using a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
                 * pattern suitable for common usecases. The pattern is based on the definition of a valid email
                 * address in the [WHATWG HTML specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)
                 * with some enhancements to incorporate more RFC rules (such as rules related to domain names and
                 * the lengths of different parts of the address).
                 *
                 * The differences from the WHATWG version include:
                 * - Disallow `local-part` (the part before the `\@` symbol) to begin or end with a period (`.`).
                 * - Disallow `local-part` to be longer than 64 characters.
                 * - Disallow the whole address to be longer than 254 characters.
                 *
                 * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
                 * validate the value against a different pattern.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field matches a valid email pattern
                 *
                 * ```typescript
                 * const control = new FormControl('bad\@', Validators.email);
                 *
                 * console.log(control.errors); // {email: true}
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?} An error map with the `email` property
                 * if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.email = function (control) {
                    if (isEmptyInputValue(control.value)) {
                        return null; // don't validate empty values to allow optional controls
                    }
                    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be greater than or equal
                 * to the provided minimum length. This validator is also provided by default if you use the
                 * the HTML5 `minlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has a minimum of 3 characters
                 *
                 * ```typescript
                 * const control = new FormControl('ng', Validators.minLength(3));
                 *
                 * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
                 * ```
                 *
                 * ```html
                 * <input minlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} minLength
                 * @return {?} A validator function that returns an error map with the
                 * `minlength` if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.minLength = function (minLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length < minLength ?
                            { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the length of the control's value to be less than or equal
                 * to the provided maximum length. This validator is also provided by default if you use the
                 * the HTML5 `maxlength` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field has maximum of 5 characters
                 *
                 * ```typescript
                 * const control = new FormControl('Angular', Validators.maxLength(5));
                 *
                 * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
                 * ```
                 *
                 * ```html
                 * <input maxlength="5">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} maxLength
                 * @return {?} A validator function that returns an error map with the
                 * `maxlength` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.maxLength = function (maxLength) {
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var length = control.value ? control.value.length : 0;
                        return length > maxLength ?
                            { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                            null;
                    });
                };
                /**
                 * \@description
                 * Validator that requires the control's value to match a regex pattern. This validator is also
                 * provided by default if you use the HTML5 `pattern` attribute.
                 *
                 * \@usageNotes
                 *
                 * ### Validate that the field only contains letters or spaces
                 *
                 * ```typescript
                 * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
                 *
                 * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
                 * ```
                 *
                 * ```html
                 * <input pattern="[a-zA-Z ]*">
                 * ```
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} pattern A regular expression to be used as is to test the values, or a string.
                 * If a string is passed, the `^` character is prepended and the `$` character is
                 * appended to the provided string (if not already present), and the resulting regular
                 * expression is used to test the values.
                 *
                 * @return {?} A validator function that returns an error map with the
                 * `pattern` property if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.pattern = function (pattern) {
                    if (!pattern)
                        return Validators.nullValidator;
                    /** @type {?} */
                    var regex;
                    /** @type {?} */
                    var regexStr;
                    if (typeof pattern === 'string') {
                        regexStr = '';
                        if (pattern.charAt(0) !== '^')
                            regexStr += '^';
                        regexStr += pattern;
                        if (pattern.charAt(pattern.length - 1) !== '$')
                            regexStr += '$';
                        regex = new RegExp(regexStr);
                    }
                    else {
                        regexStr = pattern.toString();
                        regex = pattern;
                    }
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        if (isEmptyInputValue(control.value)) {
                            return null; // don't validate empty values to allow optional controls
                        }
                        /** @type {?} */
                        var value = control.value;
                        return regex.test(value) ? null :
                            { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
                    });
                };
                /**
                 * \@description
                 * Validator that performs no operation.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} control
                 * @return {?}
                 */
                Validators.nullValidator = function (control) { return null; };
                /**
                 * @param {?} validators
                 * @return {?}
                 */
                Validators.compose = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return _mergeErrors(_executeValidators(control, presentValidators));
                    });
                };
                /**
                 * \@description
                 * Compose multiple async validators into a single function that returns the union
                 * of the individual error objects for the provided control.
                 *
                 * @see `updateValueAndValidity()`
                 *
                 * @param {?} validators
                 * @return {?} A validator function that returns an error map with the
                 * merged error objects of the async validators if the validation check fails, otherwise `null`.
                 *
                 */
                Validators.composeAsync = function (validators) {
                    if (!validators)
                        return null;
                    /** @type {?} */
                    var presentValidators = ( /** @type {?} */(validators.filter(isPresent)));
                    if (presentValidators.length == 0)
                        return null;
                    return ( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        /** @type {?} */
                        var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
                    });
                };
                return Validators;
            }());
            /**
             * @param {?} o
             * @return {?}
             */
            function isPresent(o) {
                return o != null;
            }
            /**
             * @param {?} r
             * @return {?}
             */
            function toObservable(r) {
                /** @type {?} */
                var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
                if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs))) {
                    throw new Error("Expected validator to return Promise or Observable.");
                }
                return obs;
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} control
             * @param {?} validators
             * @return {?}
             */
            function _executeAsyncValidators(control, validators) {
                return validators.map(( /**
                 * @param {?} v
                 * @return {?}
                 */function (/**
                 * @param {?} v
                 * @return {?}
                 */ v) { return v(control); }));
            }
            /**
             * @param {?} arrayOfErrors
             * @return {?}
             */
            function _mergeErrors(arrayOfErrors) {
                /** @type {?} */
                var res = arrayOfErrors.reduce(( /**
                 * @param {?} res
                 * @param {?} errors
                 * @return {?}
                 */function (res, errors) {
                    return errors != null ? Object.assign({}, ( /** @type {?} */(res)), errors) : ( /** @type {?} */(res));
                }), {});
                return Object.keys(res).length === 0 ? null : res;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @param {?} validator
             * @return {?}
             */
            function normalizeAsyncValidator(validator) {
                if ((( /** @type {?} */(validator))).validate) {
                    return ( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) { return (( /** @type {?} */(validator))).validate(c); });
                }
                else {
                    return ( /** @type {?} */(validator));
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var NUMBER_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NumberValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a number value and listening to number input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a number input with a reactive form.
             *
             * The following example shows how to use a number input with a reactive form.
             *
             * ```ts
             * const totalCountControl = new FormControl();
             * ```
             *
             * ```
             * <input type="number" [formControl]="totalCountControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NumberValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function NumberValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.writeValue = function (value) {
                    // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
                    /** @type {?} */
                    var normalizedValue = value == null ? '' : value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return NumberValueAccessor;
            }());
            NumberValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [NUMBER_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            NumberValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RADIO_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RadioControlValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * Class used by Angular to track radio buttons. For internal use only.
             */
            var RadioControlRegistry = /** @class */ (function () {
                function RadioControlRegistry() {
                    this._accessors = [];
                }
                /**
                 * \@description
                 * Adds a control to the internal registry. For internal use only.
                 * @param {?} control
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.add = function (control, accessor) {
                    this._accessors.push([control, accessor]);
                };
                /**
                 * \@description
                 * Removes a control from the internal registry. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.remove = function (accessor) {
                    for (var i = this._accessors.length - 1; i >= 0; --i) {
                        if (this._accessors[i][1] === accessor) {
                            this._accessors.splice(i, 1);
                            return;
                        }
                    }
                };
                /**
                 * \@description
                 * Selects a radio button. For internal use only.
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype.select = function (accessor) {
                    var _this = this;
                    this._accessors.forEach(( /**
                     * @param {?} c
                     * @return {?}
                     */function (c) {
                        if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                            c[1].fireUncheck(accessor.value);
                        }
                    }));
                };
                /**
                 * @private
                 * @param {?} controlPair
                 * @param {?} accessor
                 * @return {?}
                 */
                RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
                    if (!controlPair[0].control)
                        return false;
                    return controlPair[0]._parent === accessor._control._parent &&
                        controlPair[1].name === accessor.name;
                };
                return RadioControlRegistry;
            }());
            RadioControlRegistry.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing radio control values and listening to radio control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using radio buttons with reactive form directives
             *
             * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
             * a reactive form, radio buttons in the same group should have the same `formControlName`.
             * Providing a `name` attribute is optional.
             *
             * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RadioControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 * @param {?} _registry
                 * @param {?} _injector
                 */
                function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    this._registry = _registry;
                    this._injector = _injector;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive is initialized. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnInit = function () {
                    this._control = this._injector.get(NgControl);
                    this._checkName();
                    this._registry.add(this._control, this);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
                /**
                 * \@description
                 * Sets the "checked" property value on the radio input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.writeValue = function (value) {
                    this._state = value === this.value;
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this._fn = fn;
                    this.onChange = ( /**
                     * @return {?}
                     */function () {
                        fn(_this.value);
                        _this._registry.select(_this);
                    });
                };
                /**
                 * Sets the "value" on the radio input element and unchecks it.
                 *
                 * @param {?} value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._checkName = function () {
                    if (this.name && this.formControlName && this.name !== this.formControlName) {
                        this._throwNameError();
                    }
                    if (!this.name && this.formControlName)
                        this.name = this.formControlName;
                };
                /**
                 * @private
                 * @return {?}
                 */
                RadioControlValueAccessor.prototype._throwNameError = function () {
                    throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
                };
                return RadioControlValueAccessor;
            }());
            RadioControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                            host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                            providers: [RADIO_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RadioControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: RadioControlRegistry },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
            ]; };
            RadioControlValueAccessor.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var RANGE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RangeValueAccessor; })),
                multi: true
            };
            /**
             * \@description
             * The `ControlValueAccessor` for writing a range value and listening to range input changes.
             * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
             * directives.
             *
             * \@usageNotes
             *
             * ### Using a range input with a reactive form
             *
             * The following example shows how to use a range input with a reactive form.
             *
             * ```ts
             * const ageControl = new FormControl();
             * ```
             *
             * ```
             * <input type="range" [formControl]="ageControl">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var RangeValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function RangeValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@description
                     * The registered callback function called when a change or input event occurs on the input
                     * element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                }
                /**
                 * Sets the "value" property on the input element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.writeValue = function (value) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnChange = function (fn) {
                    this.onChange = ( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) { fn(value == '' ? null : parseFloat(value)); });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the range input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                return RangeValueAccessor;
            }());
            RangeValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                            host: {
                                '(change)': 'onChange($event.target.value)',
                                '(input)': 'onChange($event.target.value)',
                                '(blur)': 'onTouched()'
                            },
                            providers: [RANGE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            RangeValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /** @type {?} */
            var FormErrorExamples = {
                formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
                formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
                formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
                ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
                ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ReactiveErrors = /** @class */ (function () {
                function ReactiveErrors() {
                }
                /**
                 * @return {?}
                 */
                ReactiveErrors.controlParentException = function () {
                    throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.ngModelGroupException = function () {
                    throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.missingFormException = function () {
                    throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.groupParentException = function () {
                    throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.arrayParentException = function () {
                    throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
                };
                /**
                 * @return {?}
                 */
                ReactiveErrors.disabledAttrWarning = function () {
                    console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
                };
                /**
                 * @param {?} directiveName
                 * @return {?}
                 */
                ReactiveErrors.ngModelWarning = function (directiveName) {
                    console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
                        : 'FormControlName') + "#use-with-ngmodel\n    ");
                };
                return ReactiveErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString(id, value) {
                if (id == null)
                    return "" + value;
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * \@description
             * The `ControlValueAccessor` for writing select control values and listening to select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
             * `NgModel` directives.
             *
             * \@usageNotes
             *
             * ### Using select controls in a reactive form
             *
             * The following examples show how to use a select control in a reactive form.
             *
             * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
             *
             * ### Using select controls in a template-driven form
             *
             * To use a select in a template-driven form, simply add an `ngModel` and a `name`
             * attribute to the main `<select>` tag.
             *
             * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
             *
             * ### Customizing option selection
             *
             * Angular uses object identity to select option. It's possible for the identities of items
             * to change while the data does not. This can happen, for example, if the items are produced
             * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
             * second response will produce objects with different identities.
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
             * If `compareWith` is given, Angular selects option by the return value of the function.
             *
             * ```ts
             * const selectedCountriesControl = new FormControl();
             * ```
             *
             * ```
             * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
             *     <option *ngFor="let country of countries" [ngValue]="country">
             *         {{country.name}}
             *     </option>
             * </select>
             *
             * compareFn(c1: Country, c2: Country): boolean {
             *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
             * }
             * ```
             *
             * **Note:** We listen to the 'change' event because 'input' events aren't fired
             * for selects in Firefox and IE:
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
             * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the "value" property on the input element. The "selectedIndex"
                 * property is also set if an ID is provided on the option element.
                 *
                 * @param {?} value The checked value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.writeValue = function (value) {
                    this.value = value;
                    /** @type {?} */
                    var id = this._getOptionId(value);
                    if (id == null) {
                        this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                    }
                    /** @type {?} */
                    var valueString = _buildValueString(id, value);
                    this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} valueString
                     * @return {?}
                     */function (valueString) {
                        _this.value = _this._getOptionValue(valueString);
                        fn(_this.value);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionId = function (value) {
                    var e_1, _a;
                    try {
                        for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            if (this._compareWith(this._optionMap.get(id), value))
                                return id;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId(valueString);
                    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
                };
                return SelectControlValueAccessor;
            }());
            SelectControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                            providers: [SELECT_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgSelectOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function NgSelectOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select)
                        this.id = this._select._registerOption();
                }
                Object.defineProperty(NgSelectOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._select._optionMap.set(this.id, value);
                        this._setElementValue(_buildValueString(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgSelectOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._setElementValue(value);
                        if (this._select)
                            this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                NgSelectOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                NgSelectOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return NgSelectOption;
            }());
            NgSelectOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            NgSelectOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            NgSelectOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SELECT_MULTIPLE_VALUE_ACCESSOR = {
                provide: NG_VALUE_ACCESSOR,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return SelectMultipleControlValueAccessor; })),
                multi: true
            };
            /**
             * @param {?} id
             * @param {?} value
             * @return {?}
             */
            function _buildValueString$1(id, value) {
                if (id == null)
                    return "" + value;
                if (typeof value === 'string')
                    value = "'" + value + "'";
                if (value && typeof value === 'object')
                    value = 'Object';
                return (id + ": " + value).slice(0, 50);
            }
            /**
             * @param {?} valueString
             * @return {?}
             */
            function _extractId$1(valueString) {
                return valueString.split(':')[0];
            }
            /**
             * Mock interface for HTML Options
             * @record
             */
            function HTMLOption() { }
            if (false) { }
            /**
             * Mock interface for HTMLCollection
             * @abstract
             */
            var HTMLCollection = /** @class */ (function () {
                function HTMLCollection() {
                }
                return HTMLCollection;
            }());
            if (false) { }
            /**
             * \@description
             * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select control
             * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
             * directives.
             *
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using a multi-select control
             *
             * The follow example shows you how to use a multi-select control with a reactive form.
             *
             * ```ts
             * const countryControl = new FormControl();
             * ```
             *
             * ```
             * <select multiple name="countries" [formControl]="countryControl">
             *   <option *ngFor="let country of countries" [ngValue]="country">
             *     {{ country.name }}
             *   </option>
             * </select>
             * ```
             *
             * ### Customizing option selection
             *
             * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
             * See the `SelectControlValueAccessor` for usage.
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var SelectMultipleControlValueAccessor = /** @class */ (function () {
                /**
                 * @param {?} _renderer
                 * @param {?} _elementRef
                 */
                function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
                    this._renderer = _renderer;
                    this._elementRef = _elementRef;
                    /**
                     * \@internal
                     */
                    this._optionMap = new Map();
                    /**
                     * \@internal
                     */
                    this._idCounter = 0;
                    /**
                     * \@description
                     * The registered callback function called when a change event occurs on the input element.
                     */
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) { });
                    /**
                     * \@description
                     * The registered callback function called when a blur event occurs on the input element.
                     */
                    this.onTouched = ( /**
                     * @return {?}
                     */function () { });
                    this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"];
                }
                Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
                    /**
                     * \@description
                     * Tracks the option comparison algorithm for tracking identities when
                     * checking for changes.
                     * @param {?} fn
                     * @return {?}
                     */
                    set: function (fn) {
                        if (typeof fn !== 'function') {
                            throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                        }
                        this._compareWith = fn;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the "value" property on one or of more
                 * of the select's options.
                 *
                 * @param {?} value The value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
                    var _this = this;
                    this.value = value;
                    /** @type {?} */
                    var optionSelectedStateSetter;
                    if (Array.isArray(value)) {
                        // convert values to ids
                        /** @type {?} */
                        var ids_1 = value.map(( /**
                         * @param {?} v
                         * @return {?}
                         */function (v) { return _this._getOptionId(v); }));
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); });
                    }
                    else {
                        optionSelectedStateSetter = ( /**
                         * @param {?} opt
                         * @param {?} o
                         * @return {?}
                         */function (opt, o) { opt._setSelected(false); });
                    }
                    this._optionMap.forEach(optionSelectedStateSetter);
                };
                /**
                 * \@description
                 * Registers a function called when the control value changes
                 * and writes an array of the selected options.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
                    var _this = this;
                    this.onChange = ( /**
                     * @param {?} _
                     * @return {?}
                     */function (_) {
                        /** @type {?} */
                        var selected = [];
                        if (_.hasOwnProperty('selectedOptions')) {
                            /** @type {?} */
                            var options = _.selectedOptions;
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                /** @type {?} */
                                var val = _this._getOptionValue(opt.value);
                                selected.push(val);
                            }
                        }
                        // Degrade on IE
                        else {
                            /** @type {?} */
                            var options = ( /** @type {?} */(_.options));
                            for (var i = 0; i < options.length; i++) {
                                /** @type {?} */
                                var opt = options.item(i);
                                if (opt.selected) {
                                    /** @type {?} */
                                    var val = _this._getOptionValue(opt.value);
                                    selected.push(val);
                                }
                            }
                        }
                        _this.value = selected;
                        fn(selected);
                    });
                };
                /**
                 * \@description
                 * Registers a function called when the control is touched.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
                /**
                 * Sets the "disabled" property on the select input element.
                 *
                 * @param {?} isDisabled The disabled value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
                    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
                    /** @type {?} */
                    var id = (this._idCounter++).toString();
                    this._optionMap.set(id, value);
                    return id;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
                    var e_2, _a;
                    try {
                        for (var _b = __values(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var id = _c.value;
                            if (this._compareWith(( /** @type {?} */(this._optionMap.get(id)))._value, value))
                                return id;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return null;
                };
                /**
                 * \@internal
                 * @param {?} valueString
                 * @return {?}
                 */
                SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
                    /** @type {?} */
                    var id = _extractId$1(valueString);
                    return this._optionMap.has(id) ? ( /** @type {?} */(this._optionMap.get(id)))._value : valueString;
                };
                return SelectMultipleControlValueAccessor;
            }());
            SelectMultipleControlValueAccessor.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                            host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                        },] }
            ];
            /** @nocollapse */
            SelectMultipleControlValueAccessor.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
            ]; };
            SelectMultipleControlValueAccessor.propDecorators = {
                compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Marks `<option>` as dynamic, so Angular can be notified when options change.
             *
             * @see `SelectMultipleControlValueAccessor`
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var ɵNgSelectMultipleOption = /** @class */ (function () {
                /**
                 * @param {?} _element
                 * @param {?} _renderer
                 * @param {?} _select
                 */
                function ɵNgSelectMultipleOption(_element, _renderer, _select) {
                    this._element = _element;
                    this._renderer = _renderer;
                    this._select = _select;
                    if (this._select) {
                        this.id = this._select._registerOption(this);
                    }
                }
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "ngValue", {
                    /**
                     * \@description
                     * Tracks the value bound to the option element. Unlike the value binding,
                     * ngValue supports binding to objects.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select == null)
                            return;
                        this._value = value;
                        this._setElementValue(_buildValueString$1(this.id, value));
                        this._select.writeValue(this._select.value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ɵNgSelectMultipleOption.prototype, "value", {
                    /**
                     * \@description
                     * Tracks simple string values bound to the option element.
                     * For objects, use the `ngValue` input binding.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        if (this._select) {
                            this._value = value;
                            this._setElementValue(_buildValueString$1(this.id, value));
                            this._select.writeValue(this._select.value);
                        }
                        else {
                            this._setElementValue(value);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setElementValue = function (value) {
                    this._renderer.setProperty(this._element.nativeElement, 'value', value);
                };
                /**
                 * \@internal
                 * @param {?} selected
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype._setSelected = function (selected) {
                    this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                ɵNgSelectMultipleOption.prototype.ngOnDestroy = function () {
                    if (this._select) {
                        this._select._optionMap.delete(this.id);
                        this._select.writeValue(this._select.value);
                    }
                };
                return ɵNgSelectMultipleOption;
            }());
            ɵNgSelectMultipleOption.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'option' },] }
            ];
            /** @nocollapse */
            ɵNgSelectMultipleOption.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
                { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
            ]; };
            ɵNgSelectMultipleOption.propDecorators = {
                ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngValue',] }],
                value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['value',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} name
             * @param {?} parent
             * @return {?}
             */
            function controlPath(name, parent) {
                return __spread(( /** @type {?} */(parent.path)), [name]);
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpControl(control, dir) {
                if (!control)
                    _throwError(dir, 'Cannot find control with');
                if (!dir.valueAccessor)
                    _throwError(dir, 'No value accessor for form control with');
                control.validator = Validators.compose([( /** @type {?} */(control.validator)), dir.validator]);
                control.asyncValidator = Validators.composeAsync([( /** @type {?} */(control.asyncValidator)), dir.asyncValidator]);
                ( /** @type {?} */(dir.valueAccessor)).writeValue(control.value);
                setUpViewChangePipeline(control, dir);
                setUpModelChangePipeline(control, dir);
                setUpBlurPipeline(control, dir);
                if (( /** @type {?} */(dir.valueAccessor)).setDisabledState) {
                    control.registerOnDisabledChange(( /**
                     * @param {?} isDisabled
                     * @return {?}
                     */function (isDisabled) { ( /** @type {?} */(( /** @type {?} */(dir.valueAccessor)).setDisabledState))(isDisabled); }));
                }
                // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if ((( /** @type {?} */(validator))).registerOnValidatorChange)
                        ( /** @type {?} */((( /** @type {?} */(validator))).registerOnValidatorChange))(( /**
                         * @return {?}
                         */function () { return control.updateValueAndValidity(); }));
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function cleanUpControl(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () { return _noControlError(dir); }));
                dir._rawValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                dir._rawAsyncValidators.forEach(( /**
                 * @param {?} validator
                 * @return {?}
                 */function (validator) {
                    if (validator.registerOnValidatorChange) {
                        validator.registerOnValidatorChange(null);
                    }
                }));
                if (control)
                    control._clearChangeFns();
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpViewChangePipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnChange(( /**
                 * @param {?} newValue
                 * @return {?}
                 */function (newValue) {
                    control._pendingValue = newValue;
                    control._pendingChange = true;
                    control._pendingDirty = true;
                    if (control.updateOn === 'change')
                        updateControl(control, dir);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpBlurPipeline(control, dir) {
                ( /** @type {?} */(dir.valueAccessor)).registerOnTouched(( /**
                 * @return {?}
                 */function () {
                    control._pendingTouched = true;
                    if (control.updateOn === 'blur' && control._pendingChange)
                        updateControl(control, dir);
                    if (control.updateOn !== 'submit')
                        control.markAsTouched();
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function updateControl(control, dir) {
                if (control._pendingDirty)
                    control.markAsDirty();
                control.setValue(control._pendingValue, { emitModelToViewChange: false });
                dir.viewToModelUpdate(control._pendingValue);
                control._pendingChange = false;
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpModelChangePipeline(control, dir) {
                control.registerOnChange(( /**
                 * @param {?} newValue
                 * @param {?} emitModelEvent
                 * @return {?}
                 */function (newValue, emitModelEvent) {
                    // control -> view
                    ( /** @type {?} */(dir.valueAccessor)).writeValue(newValue);
                    // control -> ngModel
                    if (emitModelEvent)
                        dir.viewToModelUpdate(newValue);
                }));
            }
            /**
             * @param {?} control
             * @param {?} dir
             * @return {?}
             */
            function setUpFormContainer(control, dir) {
                if (control == null)
                    _throwError(dir, 'Cannot find control with');
                control.validator = Validators.compose([control.validator, dir.validator]);
                control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
            }
            /**
             * @param {?} dir
             * @return {?}
             */
            function _noControlError(dir) {
                return _throwError(dir, 'There is no FormControl instance attached to form control element with');
            }
            /**
             * @param {?} dir
             * @param {?} message
             * @return {?}
             */
            function _throwError(dir, message) {
                /** @type {?} */
                var messageEnd;
                if (( /** @type {?} */(dir.path)).length > 1) {
                    messageEnd = "path: '" + ( /** @type {?} */(dir.path)).join(' -> ') + "'";
                }
                else if (( /** @type {?} */(dir.path))[0]) {
                    messageEnd = "name: '" + dir.path + "'";
                }
                else {
                    messageEnd = 'unspecified name attribute';
                }
                throw new Error(message + " " + messageEnd);
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeValidators(validators) {
                return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
            }
            /**
             * @param {?} validators
             * @return {?}
             */
            function composeAsyncValidators(validators) {
                return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
                    null;
            }
            /**
             * @param {?} changes
             * @param {?} viewModel
             * @return {?}
             */
            function isPropertyUpdated(changes, viewModel) {
                if (!changes.hasOwnProperty('model'))
                    return false;
                /** @type {?} */
                var change = changes['model'];
                if (change.isFirstChange())
                    return true;
                return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵlooseIdentical"])(viewModel, change.currentValue);
            }
            /** @type {?} */
            var BUILTIN_ACCESSORS = [
                CheckboxControlValueAccessor,
                RangeValueAccessor,
                NumberValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
            ];
            /**
             * @param {?} valueAccessor
             * @return {?}
             */
            function isBuiltInAccessor(valueAccessor) {
                return BUILTIN_ACCESSORS.some(( /**
                 * @param {?} a
                 * @return {?}
                 */function (/**
                 * @param {?} a
                 * @return {?}
                 */ a) { return valueAccessor.constructor === a; }));
            }
            /**
             * @param {?} form
             * @param {?} directives
             * @return {?}
             */
            function syncPendingControls(form, directives) {
                form._syncPendingControls();
                directives.forEach(( /**
                 * @param {?} dir
                 * @return {?}
                 */function (/**
                 * @param {?} dir
                 * @return {?}
                 */ dir) {
                    /** @type {?} */
                    var control = ( /** @type {?} */(dir.control));
                    if (control.updateOn === 'submit' && control._pendingChange) {
                        dir.viewToModelUpdate(control._pendingValue);
                        control._pendingChange = false;
                    }
                }));
            }
            // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
            /**
             * @param {?} dir
             * @param {?} valueAccessors
             * @return {?}
             */
            function selectValueAccessor(dir, valueAccessors) {
                if (!valueAccessors)
                    return null;
                if (!Array.isArray(valueAccessors))
                    _throwError(dir, 'Value accessor was not provided as an array for form control with');
                /** @type {?} */
                var defaultAccessor = undefined;
                /** @type {?} */
                var builtinAccessor = undefined;
                /** @type {?} */
                var customAccessor = undefined;
                valueAccessors.forEach(( /**
                 * @param {?} v
                 * @return {?}
                 */function (v) {
                    if (v.constructor === DefaultValueAccessor) {
                        defaultAccessor = v;
                    }
                    else if (isBuiltInAccessor(v)) {
                        if (builtinAccessor)
                            _throwError(dir, 'More than one built-in value accessor matches form control with');
                        builtinAccessor = v;
                    }
                    else {
                        if (customAccessor)
                            _throwError(dir, 'More than one custom value accessor matches form control with');
                        customAccessor = v;
                    }
                }));
                if (customAccessor)
                    return customAccessor;
                if (builtinAccessor)
                    return builtinAccessor;
                if (defaultAccessor)
                    return defaultAccessor;
                _throwError(dir, 'No valid value accessor for form control with');
                return null;
            }
            /**
             * @template T
             * @param {?} list
             * @param {?} el
             * @return {?}
             */
            function removeDir(list, el) {
                /** @type {?} */
                var index = list.indexOf(el);
                if (index > -1)
                    list.splice(index, 1);
            }
            // TODO(kara): remove after deprecation period
            /**
             * @param {?} name
             * @param {?} type
             * @param {?} instance
             * @param {?} warningConfig
             * @return {?}
             */
            function _ngModelWarning(name, type, instance, warningConfig) {
                if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never')
                    return;
                if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
                    (warningConfig === 'always' && !instance._ngModelWarningSent)) {
                    ReactiveErrors.ngModelWarning(name);
                    type._ngModelWarningSentOnce = true;
                    instance._ngModelWarningSent = true;
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Reports that a FormControl is valid, meaning that no errors exist in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var VALID = 'VALID';
            /**
             * Reports that a FormControl is invalid, meaning that an error exists in the input value.
             *
             * @see `status`
             * @type {?}
             */
            var INVALID = 'INVALID';
            /**
             * Reports that a FormControl is pending, meaning that that async validation is occurring and
             * errors are not yet available for the input value.
             *
             * @see `markAsPending`
             * @see `status`
             * @type {?}
             */
            var PENDING = 'PENDING';
            /**
             * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
             * calculations of validity or value.
             *
             * @see `markAsDisabled`
             * @see `status`
             * @type {?}
             */
            var DISABLED = 'DISABLED';
            /**
             * @param {?} control
             * @param {?} path
             * @param {?} delimiter
             * @return {?}
             */
            function _find(control, path, delimiter) {
                if (path == null)
                    return null;
                if (!(path instanceof Array)) {
                    path = (( /** @type {?} */(path))).split(delimiter);
                }
                if (path instanceof Array && (path.length === 0))
                    return null;
                return (( /** @type {?} */(path))).reduce(( /**
                 * @param {?} v
                 * @param {?} name
                 * @return {?}
                 */function (v, name) {
                    if (v instanceof FormGroup) {
                        return v.controls.hasOwnProperty(( /** @type {?} */(name))) ? v.controls[name] : null;
                    }
                    if (v instanceof FormArray) {
                        return v.at(( /** @type {?} */(name))) || null;
                    }
                    return null;
                }), control);
            }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToValidator(validatorOrOpts) {
                /** @type {?} */
                var validator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).validators :
                    validatorOrOpts)));
                return Array.isArray(validator) ? composeValidators(validator) : validator || null;
            }
            /**
             * @param {?=} asyncValidator
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
                /** @type {?} */
                var origAsyncValidator = ( /** @type {?} */((isOptionsObj(validatorOrOpts) ? (( /** @type {?} */(validatorOrOpts))).asyncValidators :
                    asyncValidator)));
                return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
                    origAsyncValidator || null;
            }
            /**
             * Interface for options provided to an `AbstractControl`.
             *
             * \@publicApi
             * @record
             */
            function AbstractControlOptions() { }
            if (false) { }
            /**
             * @param {?=} validatorOrOpts
             * @return {?}
             */
            function isOptionsObj(validatorOrOpts) {
                return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
                    typeof validatorOrOpts === 'object';
            }
            /**
             * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
             *
             * It provides some of the shared behavior that all controls and groups of controls have, like
             * running validators, calculating status, and resetting state. It also defines the properties
             * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
             * instantiated directly.
             *
             * @see [Forms Guide](/guide/forms)
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             * @see [Dynamic Forms Guide](/guide/dynamic-form)
             *
             * \@publicApi
             * @abstract
             */
            var AbstractControl = /** @class */ (function () {
                /**
                 * Initialize the AbstractControl instance.
                 *
                 * @param {?} validator The function that determines the synchronous validity of this control.
                 * @param {?} asyncValidator The function that determines the asynchronous validity of this
                 * control.
                 */
                function AbstractControl(validator, asyncValidator) {
                    this.validator = validator;
                    this.asyncValidator = asyncValidator;
                    /**
                     * \@internal
                     */
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                    /**
                     * A control is `pristine` if the user has not yet changed
                     * the value in the UI.
                     *
                     * @return True if the user has not yet changed the value in the UI; compare `dirty`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    this.pristine = true;
                    /**
                     * True if the control is marked as `touched`.
                     *
                     * A control is marked `touched` once the user has triggered
                     * a `blur` event on it.
                     */
                    this.touched = false;
                    /**
                     * \@internal
                     */
                    this._onDisabledChange = [];
                }
                Object.defineProperty(AbstractControl.prototype, "parent", {
                    /**
                     * The parent control.
                     * @return {?}
                     */
                    get: function () { return this._parent; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "valid", {
                    /**
                     * A control is `valid` when its `status` is `VALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has passed all of its validation tests,
                     * false otherwise.
                     */
                    get: function () { return this.status === VALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "invalid", {
                    /**
                     * A control is `invalid` when its `status` is `INVALID`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control has failed one or more of its validation checks,
                     * false otherwise.
                     */
                    get: function () { return this.status === INVALID; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "pending", {
                    /**
                     * A control is `pending` when its `status` is `PENDING`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if this control is in the process of conducting a validation check,
                     * false otherwise.
                     */
                    get: function () { return this.status == PENDING; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "disabled", {
                    /**
                     * A control is `disabled` when its `status` is `DISABLED`.
                     *
                     * Disabled controls are exempt from validation checks and
                     * are not included in the aggregate value of their ancestor
                     * controls.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control is disabled, false otherwise.
                     */
                    get: function () { return this.status === DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "enabled", {
                    /**
                     * A control is `enabled` as long as its `status` is not `DISABLED`.
                     *
                     * @see {\@link AbstractControl.status}
                     *
                     * @return {?} True if the control has any status other than 'DISABLED',
                     * false if the status is 'DISABLED'.
                     *
                     */
                    get: function () { return this.status !== DISABLED; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "dirty", {
                    /**
                     * A control is `dirty` if the user has changed the value
                     * in the UI.
                     *
                     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
                     * Programmatic changes to a control's value do not mark it dirty.
                     */
                    get: function () { return !this.pristine; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "untouched", {
                    /**
                     * True if the control has not been marked as touched
                     *
                     * A control is `untouched` if the user has not yet triggered
                     * a `blur` event on it.
                     * @return {?}
                     */
                    get: function () { return !this.touched; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractControl.prototype, "updateOn", {
                    /**
                     * Reports the update strategy of the `AbstractControl` (meaning
                     * the event on which the control updates itself).
                     * Possible values: `'change'` | `'blur'` | `'submit'`
                     * Default value: `'change'`
                     * @return {?}
                     */
                    get: function () {
                        return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the synchronous validators that are active on this control.  Calling
                 * this overwrites any existing sync validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setValidators = function (newValidator) {
                    this.validator = coerceToValidator(newValidator);
                };
                /**
                 * Sets the async validators that are active on this control. Calling this
                 * overwrites any existing async validators.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @param {?} newValidator
                 * @return {?}
                 */
                AbstractControl.prototype.setAsyncValidators = function (newValidator) {
                    this.asyncValidator = coerceToAsyncValidator(newValidator);
                };
                /**
                 * Empties out the sync validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearValidators = function () { this.validator = null; };
                /**
                 * Empties out the async validator list.
                 *
                 * When you add or remove a validator at run time, you must call
                 * `updateValueAndValidity()` for the new validation to take effect.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
                /**
                 * Marks the control as `touched`. A control is touched by focus and
                 * blur events that do not change the value.
                 *
                 * @see `markAsUntouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = true;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsTouched(opts);
                    }
                };
                /**
                 * Marks the control and all its descendant controls as `touched`.
                 * @see `markAsTouched()`
                 * @return {?}
                 */
                AbstractControl.prototype.markAllAsTouched = function () {
                    this.markAsTouched({ onlySelf: true });
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.markAllAsTouched(); }));
                };
                /**
                 * Marks the control as `untouched`.
                 *
                 * If the control has any children, also marks all children as `untouched`
                 * and recalculates the `touched` status of all parent controls.
                 *
                 * @see `markAsTouched()` / `markAsDirty()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after the marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsUntouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = false;
                    this._pendingTouched = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsUntouched({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * Marks the control as `dirty`. A control becomes dirty when
                 * the control's value is changed through the UI; compare `markAsTouched`.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsPristine()`
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes
                 * and emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false.
                 * @return {?}
                 */
                AbstractControl.prototype.markAsDirty = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = false;
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsDirty(opts);
                    }
                };
                /**
                 * Marks the control as `pristine`.
                 *
                 * If the control has any children, marks all children as `pristine`,
                 * and recalculates the `pristine` status of all parent
                 * controls.
                 *
                 * @see `markAsTouched()` / `markAsUntouched()` / `markAsDirty()`
                 *
                 * @param {?=} opts Configuration options that determine how the control emits events after
                 * marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = true;
                    this._pendingDirty = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.markAsPristine({ onlySelf: true }); }));
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * Marks the control as `pending`.
                 *
                 * A control is pending while the control performs async validation.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates changes and
                 * emits events after marking is applied.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
                 * observable emits an event with the latest status the control is marked pending.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.markAsPending = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).status = PENDING;
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.markAsPending(opts);
                    }
                };
                /**
                 * Disables the control. This means the control is exempt from validation checks and
                 * excluded from the aggregate value of any parent. Its status is `DISABLED`.
                 *
                 * If the control has children, all children are also disabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configuration options that determine how the control propagates
                 * changes and emits events after the control is disabled.
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is disabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.disable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = DISABLED;
                    (( /** @type {?} */(this))).errors = null;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.disable(Object.assign({}, opts, { onlySelf: true })); }));
                    this._updateValue();
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(true); }));
                };
                /**
                 * Enables the control. This means the control is included in validation checks and
                 * the aggregate value of its parent. Its status recalculates based on its value and
                 * its validators.
                 *
                 * By default, if the control has children, all children are enabled.
                 *
                 * @see {\@link AbstractControl.status}
                 *
                 * @param {?=} opts Configure options that control how the control propagates changes and
                 * emits events when marked as untouched
                 * * `onlySelf`: When true, mark only this control. When false or not supplied,
                 * marks all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is enabled.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.enable = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    // If parent has been marked artificially dirty we don't want to re-calculate the
                    // parent's dirtiness based on the children.
                    /** @type {?} */
                    var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
                    (( /** @type {?} */(this))).status = VALID;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { control.enable(Object.assign({}, opts, { onlySelf: true })); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                    this._updateAncestors(Object.assign({}, opts, { skipPristineCheck: skipPristineCheck }));
                    this._onDisabledChange.forEach(( /**
                     * @param {?} changeFn
                     * @return {?}
                     */function (changeFn) { return changeFn(false); }));
                };
                /**
                 * @private
                 * @param {?} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateAncestors = function (opts) {
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                        if (!opts.skipPristineCheck) {
                            this._parent._updatePristine();
                        }
                        this._parent._updateTouched();
                    }
                };
                /**
                 * @param {?} parent Sets the parent of the control
                 * @return {?}
                 */
                AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
                /**
                 * Recalculates the value and validation status of the control.
                 *
                 * By default, it also updates the value and validity of its ancestors.
                 *
                 * @param {?=} opts Configuration options determine how the control propagates changes and emits events
                 * after updates and validity checks are applied.
                 * * `onlySelf`: When true, only update this control. When false or not supplied,
                 * update all direct ancestors. Default is false..
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                AbstractControl.prototype.updateValueAndValidity = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    this._setInitialStatus();
                    this._updateValue();
                    if (this.enabled) {
                        this._cancelExistingSubscription();
                        (( /** @type {?} */(this))).errors = this._runValidator();
                        (( /** @type {?} */(this))).status = this._calculateStatus();
                        if (this.status === VALID || this.status === PENDING) {
                            this._runAsyncValidator(opts.emitEvent);
                        }
                    }
                    if (opts.emitEvent !== false) {
                        (( /** @type {?} */(this.valueChanges))).emit(this.value);
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent && !opts.onlySelf) {
                        this._parent.updateValueAndValidity(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTreeValidity = function (opts) {
                    if (opts === void 0) { opts = { emitEvent: true }; }
                    this._forEachChild(( /**
                     * @param {?} ctrl
                     * @return {?}
                     */function (ctrl) { return ctrl._updateTreeValidity(opts); }));
                    this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._setInitialStatus = function () {
                    (( /** @type {?} */(this))).status = this._allControlsDisabled() ? DISABLED : VALID;
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._runValidator = function () {
                    return this.validator ? this.validator(this) : null;
                };
                /**
                 * @private
                 * @param {?=} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
                    var _this = this;
                    if (this.asyncValidator) {
                        (( /** @type {?} */(this))).status = PENDING;
                        /** @type {?} */
                        var obs = toObservable(this.asyncValidator(this));
                        this._asyncValidationSubscription =
                            obs.subscribe(( /**
                             * @param {?} errors
                             * @return {?}
                             */function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); }));
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._cancelExistingSubscription = function () {
                    if (this._asyncValidationSubscription) {
                        this._asyncValidationSubscription.unsubscribe();
                    }
                };
                /**
                 * Sets errors on a form control when running validations manually, rather than automatically.
                 *
                 * Calling `setErrors` also updates the validity of the parent control.
                 *
                 * \@usageNotes
                 * ### Manually set the errors for a control
                 *
                 * ```
                 * const login = new FormControl('someLogin');
                 * login.setErrors({
                 *   notUnique: true
                 * });
                 *
                 * expect(login.valid).toEqual(false);
                 * expect(login.errors).toEqual({ notUnique: true });
                 *
                 * login.setValue('someOtherLogin');
                 *
                 * expect(login.valid).toEqual(true);
                 * ```
                 * @param {?} errors
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype.setErrors = function (errors, opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).errors = errors;
                    this._updateControlsErrors(opts.emitEvent !== false);
                };
                /**
                 * Retrieves a child control given the control's name or path.
                 *
                 * \@usageNotes
                 * ### Retrieve a nested control
                 *
                 * For example, to get a `name` control nested within a `person` sub-group:
                 *
                 * * `this.form.get('person.name');`
                 *
                 * -OR-
                 *
                 * * `this.form.get(['person', 'name']);`
                 * @param {?} path A dot-delimited string or array of string/number values that define the path to the
                 * control.
                 *
                 * @return {?}
                 */
                AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
                /**
                 * \@description
                 * Reports error data for the control with the given path.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} error data for that particular error. If the control or error is not present,
                 * null is returned.
                 */
                AbstractControl.prototype.getError = function (errorCode, path) {
                    /** @type {?} */
                    var control = path ? this.get(path) : this;
                    return control && control.errors ? control.errors[errorCode] : null;
                };
                /**
                 * \@description
                 * Reports whether the control with the given path has the error specified.
                 *
                 * \@usageNotes
                 * For example, for the following `FormGroup`:
                 *
                 * ```
                 * form = new FormGroup({
                 *   address: new FormGroup({ street: new FormControl() })
                 * });
                 * ```
                 *
                 * The path to the 'street' control from the root form would be 'address' -> 'street'.
                 *
                 * It can be provided to this method in one of two formats:
                 *
                 * 1. An array of string control names, e.g. `['address', 'street']`
                 * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
                 *
                 * If no path is given, this method checks for the error on the current control.
                 *
                 * @param {?} errorCode The code of the error to check
                 * @param {?=} path A list of control names that designates how to move from the current control
                 * to the control that should be queried for errors.
                 *
                 * @return {?} whether the given error is present in the control at the given path.
                 *
                 * If the control is not present, false is returned.
                 */
                AbstractControl.prototype.hasError = function (errorCode, path) {
                    return !!this.getError(errorCode, path);
                };
                Object.defineProperty(AbstractControl.prototype, "root", {
                    /**
                     * Retrieves the top-level ancestor of this control.
                     * @return {?}
                     */
                    get: function () {
                        /** @type {?} */
                        var x = this;
                        while (x._parent) {
                            x = x._parent;
                        }
                        return x;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @param {?} emitEvent
                 * @return {?}
                 */
                AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
                    (( /** @type {?} */(this))).status = this._calculateStatus();
                    if (emitEvent) {
                        (( /** @type {?} */(this.statusChanges))).emit(this.status);
                    }
                    if (this._parent) {
                        this._parent._updateControlsErrors(emitEvent);
                    }
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._initObservables = function () {
                    (( /** @type {?} */(this))).valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    (( /** @type {?} */(this))).statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                };
                /**
                 * @private
                 * @return {?}
                 */
                AbstractControl.prototype._calculateStatus = function () {
                    if (this._allControlsDisabled())
                        return DISABLED;
                    if (this.errors)
                        return INVALID;
                    if (this._anyControlsHaveStatus(PENDING))
                        return PENDING;
                    if (this._anyControlsHaveStatus(INVALID))
                        return INVALID;
                    return VALID;
                };
                /**
                 * \@internal
                 * @param {?} status
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsHaveStatus = function (status) {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.status === status; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsDirty = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.dirty; }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractControl.prototype._anyControlsTouched = function () {
                    return this._anyControls(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.touched; }));
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updatePristine = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).pristine = !this._anyControlsDirty();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updatePristine(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._updateTouched = function (opts) {
                    if (opts === void 0) { opts = {}; }
                    (( /** @type {?} */(this))).touched = this._anyControlsTouched();
                    if (this._parent && !opts.onlySelf) {
                        this._parent._updateTouched(opts);
                    }
                };
                /**
                 * \@internal
                 * @param {?} formState
                 * @return {?}
                 */
                AbstractControl.prototype._isBoxedValue = function (formState) {
                    return typeof formState === 'object' && formState !== null &&
                        Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
                };
                /**
                 * \@internal
                 * @param {?} fn
                 * @return {?}
                 */
                AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
                /**
                 * \@internal
                 * @param {?=} opts
                 * @return {?}
                 */
                AbstractControl.prototype._setUpdateStrategy = function (opts) {
                    if (isOptionsObj(opts) && (( /** @type {?} */(opts))).updateOn != null) {
                        this._updateOn = ( /** @type {?} */((( /** @type {?} */(opts))).updateOn));
                    }
                };
                /**
                 * Check to see if parent has been marked artificially dirty.
                 *
                 * \@internal
                 * @private
                 * @param {?=} onlySelf
                 * @return {?}
                 */
                AbstractControl.prototype._parentMarkedDirty = function (onlySelf) {
                    /** @type {?} */
                    var parentDirty = this._parent && this._parent.dirty;
                    return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
                };
                return AbstractControl;
            }());
            if (false) { }
            /**
             * Tracks the value and validation status of an individual form control.
             *
             * This is one of the three fundamental building blocks of Angular forms, along with
             * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
             * implements most of the base functionality for accessing the value, validation status,
             * user interactions and events.
             *
             * @see `AbstractControl`
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see [Usage Notes](#usage-notes)
             *
             * \@usageNotes
             *
             * ### Initializing Form Controls
             *
             * Instantiate a `FormControl`, with an initial value.
             *
             * ```ts
             * const control = new FormControl('some value');
             * console.log(control.value);     // 'some value'
             * ```
             *
             * The following example initializes the control with a form state object. The `value`
             * and `disabled` keys are required in this case.
             *
             * ```ts
             * const control = new FormControl({ value: 'n/a', disabled: true });
             * console.log(control.value);     // 'n/a'
             * console.log(control.status);    // 'DISABLED'
             * ```
             *
             * The following example initializes the control with a sync validator.
             *
             * ```ts
             * const control = new FormControl('', Validators.required);
             * console.log(control.value);      // ''
             * console.log(control.status);     // 'INVALID'
             * ```
             *
             * The following example initializes the control using an options object.
             *
             * ```ts
             * const control = new FormControl('', {
             *    validators: Validators.required,
             *    asyncValidators: myAsyncValidator
             * });
             * ```
             *
             * ### Configure the control to update on a blur event
             *
             * Set the `updateOn` option to `'blur'` to update on the blur `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'blur' });
             * ```
             *
             * ### Configure the control to update on a submit event
             *
             * Set the `updateOn` option to `'submit'` to update on a submit `event`.
             *
             * ```ts
             * const control = new FormControl('', { updateOn: 'submit' });
             * ```
             *
             * ### Reset the control back to an initial value
             *
             * You reset to a specific form state by passing through a standalone
             * value or a form state object that contains both a value and a disabled state
             * (these are the only two properties that cannot be calculated).
             *
             * ```ts
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             *
             * control.reset('Drew');
             *
             * console.log(control.value); // 'Drew'
             * ```
             *
             * ### Reset the control back to an initial value and disabled
             *
             * ```
             * const control = new FormControl('Nancy');
             *
             * console.log(control.value); // 'Nancy'
             * console.log(control.status); // 'VALID'
             *
             * control.reset({ value: 'Drew', disabled: true });
             *
             * console.log(control.value); // 'Drew'
             * console.log(control.status); // 'DISABLED'
             * ```
             *
             * \@publicApi
             */
            var FormControl = /** @class */ (function (_super) {
                __extends(FormControl, _super);
                /**
                 * Creates a new `FormControl` instance.
                 *
                 * @param {?=} formState Initializes the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormControl(formState, validatorOrOpts, asyncValidator) {
                    if (formState === void 0) { formState = null; }
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    /**
                     * \@internal
                     */
                    _this._onChange = [];
                    _this._applyFormState(formState);
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    _this._initObservables();
                    return _this;
                }
                /**
                 * Sets a new value for the form control.
                 *
                 * @param {?} value The new value for the control.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
                 * `onChange` event to
                 * update the view.
                 * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
                 * `ngModelChange`
                 * event to update the model.
                 *
                 * @return {?}
                 */
                FormControl.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    (( /** @type {?} */(this))).value = this._pendingValue = value;
                    if (this._onChange.length && options.emitModelToViewChange !== false) {
                        this._onChange.forEach(( /**
                         * @param {?} changeFn
                         * @return {?}
                         */function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); }));
                    }
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of a control.
                 *
                 * This function is functionally the same as {\@link FormControl#setValue setValue} at this level.
                 * It exists for symmetry with {\@link FormGroup#patchValue patchValue} on `FormGroups` and
                 * `FormArrays`, where it does behave differently.
                 *
                 * @see `setValue` for options
                 * @param {?} value
                 * @param {?=} options
                 * @return {?}
                 */
                FormControl.prototype.patchValue = function (value, options) {
                    if (options === void 0) { options = {}; }
                    this.setValue(value, options);
                };
                /**
                 * Resets the form control, marking it `pristine` and `untouched`, and setting
                 * the value to null.
                 *
                 * @param {?=} formState Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 *
                 * @return {?}
                 */
                FormControl.prototype.reset = function (formState, options) {
                    if (formState === void 0) { formState = null; }
                    if (options === void 0) { options = {}; }
                    this._applyFormState(formState);
                    this.markAsPristine(options);
                    this.markAsUntouched(options);
                    this.setValue(this.value, options);
                    this._pendingChange = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._updateValue = function () { };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormControl.prototype._anyControls = function (condition) { return false; };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
                /**
                 * Register a listener for change events.
                 *
                 * @param {?} fn The method that is called when the value changes
                 * @return {?}
                 */
                FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._clearChangeFns = function () {
                    this._onChange = [];
                    this._onDisabledChange = [];
                    this._onCollectionChange = ( /**
                     * @return {?}
                     */function () { });
                };
                /**
                 * Register a listener for disabled events.
                 *
                 * @param {?} fn The method that is called when the disabled status changes.
                 * @return {?}
                 */
                FormControl.prototype.registerOnDisabledChange = function (fn) {
                    this._onDisabledChange.push(fn);
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormControl.prototype._forEachChild = function (cb) { };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormControl.prototype._syncPendingControls = function () {
                    if (this.updateOn === 'submit') {
                        if (this._pendingDirty)
                            this.markAsDirty();
                        if (this._pendingTouched)
                            this.markAsTouched();
                        if (this._pendingChange) {
                            this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * @private
                 * @param {?} formState
                 * @return {?}
                 */
                FormControl.prototype._applyFormState = function (formState) {
                    if (this._isBoxedValue(formState)) {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState.value;
                        formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                            this.enable({ onlySelf: true, emitEvent: false });
                    }
                    else {
                        (( /** @type {?} */(this))).value = this._pendingValue = formState;
                    }
                };
                return FormControl;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of a group of `FormControl` instances.
             *
             * A `FormGroup` aggregates the values of each child `FormControl` into one object,
             * with each control name as the key.  It calculates its status by reducing the status values
             * of its children. For example, if one of the controls in a group is invalid, the entire
             * group becomes invalid.
             *
             * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormArray`.
             *
             * When instantiating a `FormGroup`, pass in a collection of child controls as the first
             * argument. The key for each child registers the name for the control.
             *
             * \@usageNotes
             *
             * ### Create a form group with 2 controls
             *
             * ```
             * const form = new FormGroup({
             *   first: new FormControl('Nancy', Validators.minLength(2)),
             *   last: new FormControl('Drew'),
             * });
             *
             * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
             * console.log(form.status);  // 'VALID'
             * ```
             *
             * ### Create a form group with a group-level validator
             *
             * You include group-level validators as the second arg, or group-level async
             * validators as the third arg. These come in handy when you want to perform validation
             * that considers the value of more than one child control.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('', Validators.minLength(2)),
             *   passwordConfirm: new FormControl('', Validators.minLength(2)),
             * }, passwordMatchValidator);
             *
             *
             * function passwordMatchValidator(g: FormGroup) {
             *    return g.get('password').value === g.get('passwordConfirm').value
             *       ? null : {'mismatch': true};
             * }
             * ```
             *
             * Like `FormControl` instances, you choose to pass in
             * validators and async validators as part of an options object.
             *
             * ```
             * const form = new FormGroup({
             *   password: new FormControl('')
             *   passwordConfirm: new FormControl('')
             * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
             * ```
             *
             * ### Set the updateOn property for all controls in a form group
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * group level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const c = new FormGroup({
             *   one: new FormControl()
             * }, { updateOn: 'blur' });
             * ```
             *
             * \@publicApi
             */
            var FormGroup = /** @class */ (function (_super) {
                __extends(FormGroup, _super);
                /**
                 * Creates a new `FormGroup` instance.
                 *
                 * @param {?} controls A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormGroup(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Registers a control with the group's list of controls.
                 *
                 * This method does not update the value or validity of the control.
                 * Use {\@link FormGroup#addControl addControl} instead.
                 *
                 * @param {?} name The control name to register in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.registerControl = function (name, control) {
                    if (this.controls[name])
                        return this.controls[name];
                    this.controls[name] = control;
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                    return control;
                };
                /**
                 * Add a control to this group.
                 *
                 * This method also updates the value and validity of the control.
                 *
                 * @param {?} name The control name to add to the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.addControl = function (name, control) {
                    this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Remove a control from this group.
                 *
                 * @param {?} name The control name to remove from the collection
                 * @return {?}
                 */
                FormGroup.prototype.removeControl = function (name) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} name The control name to replace in the collection
                 * @param {?} control Provides the control for the given name
                 * @return {?}
                 */
                FormGroup.prototype.setControl = function (name, control) {
                    if (this.controls[name])
                        this.controls[name]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    delete (this.controls[name]);
                    if (control)
                        this.registerControl(name, control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Check whether there is an enabled control with the given name in the group.
                 *
                 * Reports false for disabled controls. If you'd like to check for existence in the group
                 * only, use {\@link AbstractControl#get get} instead.
                 *
                 * @param {?} controlName The control name to check for existence in the collection
                 *
                 * @return {?} false for disabled controls, true otherwise.
                 */
                FormGroup.prototype.contains = function (controlName) {
                    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
                };
                /**
                 * Sets the value of the `FormGroup`. It accepts an object that matches
                 * the structure of the group, with control names as keys.
                 *
                 * \@usageNotes
                 * ### Set the complete value for the form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl(),
                 *   last: new FormControl()
                 * });
                 *
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.setValue({first: 'Nancy', last: 'Drew'});
                 * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
                 * ```
                 *
                 * @throws When strict checks fail, such as setting the value of a control
                 * that doesn't exist or if you exclude a value of a control that does exist.
                 *
                 * @param {?} value The new value for the control that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events after the value changes.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * @return {?}
                 */
                FormGroup.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        _this._throwIfControlMissing(name);
                        _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormGroup`. It accepts an object with control
                 * names as keys, and does its best to match the values to the correct controls
                 * in the group.
                 *
                 * It accepts both super-sets and sub-sets of the group without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the value for a form group
                 *
                 * ```
                 * const form = new FormGroup({
                 *    first: new FormControl(),
                 *    last: new FormControl()
                 * });
                 * console.log(form.value);   // {first: null, last: null}
                 *
                 * form.patchValue({first: 'Nancy'});
                 * console.log(form.value);   // {first: 'Nancy', last: null}
                 * ```
                 *
                 * @param {?} value The object that matches the structure of the group.
                 * @param {?=} options Configuration options that determine how the control propagates changes and
                 * emits events after the value is patched.
                 * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
                 * true.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormGroup.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    Object.keys(value).forEach(( /**
                     * @param {?} name
                     * @return {?}
                     */function (/**
                     * @param {?} name
                     * @return {?}
                     */ name) {
                        if (_this.controls[name]) {
                            _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
                 * the value of all descendants to null.
                 *
                 * You reset to a specific form state by passing in a map of states
                 * that matches the structure of your form, with control names as keys. The state
                 * is a standalone value or a form state object with both a value and a disabled
                 * status.
                 *
                 * \@usageNotes
                 *
                 * ### Reset the form group values
                 *
                 * ```ts
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * console.log(form.value);  // {first: 'first name', last: 'last name'}
                 *
                 * form.reset({ first: 'name', last: 'last name' });
                 *
                 * console.log(form.value);  // {first: 'name', last: 'last name'}
                 * ```
                 *
                 * ### Reset the form group values and disabled status
                 *
                 * ```
                 * const form = new FormGroup({
                 *   first: new FormControl('first name'),
                 *   last: new FormControl('last name')
                 * });
                 *
                 * form.reset({
                 *   first: {value: 'name', disabled: true},
                 *   last: 'last'
                 * });
                 *
                 * console.log(this.form.value);  // {first: 'name', last: 'last name'}
                 * console.log(this.form.get('first').status);  // 'DISABLED'
                 * ```
                 * @param {?=} value Resets the control with an initial value,
                 * or an object that defines the initial value and disabled state.
                 *
                 * @param {?=} options Configuration options that determine how the control propagates changes
                 * and emits events when the group is reset.
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
                 * false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 *
                 * @return {?}
                 */
                FormGroup.prototype.reset = function (value, options) {
                    if (value === void 0) { value = {}; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the `FormGroup`, including any disabled controls.
                 *
                 * Retrieves all values regardless of disabled status.
                 * The `value` property is the best way to get the value of the group, because
                 * it excludes disabled controls in the `FormGroup`.
                 * @return {?}
                 */
                FormGroup.prototype.getRawValue = function () {
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        acc[name] = control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this._reduceChildren(false, ( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }));
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} name
                 * @return {?}
                 */
                FormGroup.prototype._throwIfControlMissing = function (name) {
                    if (!Object.keys(this.controls).length) {
                        throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.controls[name]) {
                        throw new Error("Cannot find form control with name: " + name + ".");
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormGroup.prototype._forEachChild = function (cb) {
                    var _this = this;
                    Object.keys(this.controls).forEach(( /**
                     * @param {?} k
                     * @return {?}
                     */function (/**
                     * @param {?} k
                     * @return {?}
                     */ k) { return cb(_this.controls[k], k); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        control.setParent(_this);
                        control._registerOnCollectionChange(_this._onCollectionChange);
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._updateValue = function () { (( /** @type {?} */(this))).value = this._reduceValue(); };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormGroup.prototype._anyControls = function (condition) {
                    var _this = this;
                    /** @type {?} */
                    var res = false;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        res = res || (_this.contains(name) && condition(control));
                    }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._reduceValue = function () {
                    var _this = this;
                    return this._reduceChildren({}, ( /**
                     * @param {?} acc
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (acc, control, name) {
                        if (control.enabled || _this.disabled) {
                            acc[name] = control.value;
                        }
                        return acc;
                    }));
                };
                /**
                 * \@internal
                 * @param {?} initValue
                 * @param {?} fn
                 * @return {?}
                 */
                FormGroup.prototype._reduceChildren = function (initValue, fn) {
                    /** @type {?} */
                    var res = initValue;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) { res = fn(res, control, name); }));
                    return res;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroup.prototype._allControlsDisabled = function () {
                    var e_3, _a;
                    try {
                        for (var _b = __values(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var controlName = _c.value;
                            if (this.controls[controlName].enabled) {
                                return false;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return Object.keys(this.controls).length > 0 || this.disabled;
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormGroup.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} name
                     * @return {?}
                     */function (control, name) {
                        if (value[name] === undefined) {
                            throw new Error("Must supply a value for form control with name: '" + name + "'.");
                        }
                    }));
                };
                return FormGroup;
            }(AbstractControl));
            if (false) { }
            /**
             * Tracks the value and validity state of an array of `FormControl`,
             * `FormGroup` or `FormArray` instances.
             *
             * A `FormArray` aggregates the values of each child `FormControl` into an array.
             * It calculates its status by reducing the status values of its children. For example, if one of
             * the controls in a `FormArray` is invalid, the entire array becomes invalid.
             *
             * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
             * along with `FormControl` and `FormGroup`.
             *
             * \@usageNotes
             *
             * ### Create an array of form controls
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy', Validators.minLength(2)),
             *   new FormControl('Drew'),
             * ]);
             *
             * console.log(arr.value);   // ['Nancy', 'Drew']
             * console.log(arr.status);  // 'VALID'
             * ```
             *
             * ### Create a form array with array-level validators
             *
             * You include array-level validators and async validators. These come in handy
             * when you want to perform validation that considers the value of more than one child
             * control.
             *
             * The two types of validators are passed in separately as the second and third arg
             * respectively, or together as part of an options object.
             *
             * ```
             * const arr = new FormArray([
             *   new FormControl('Nancy'),
             *   new FormControl('Drew')
             * ], {validators: myValidator, asyncValidators: myAsyncValidator});
             * ```
             *
             * ### Set the updateOn property for all controls in a form array
             *
             * The options object is used to set a default value for each child
             * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
             * array level, all child controls default to 'blur', unless the child
             * has explicitly specified a different `updateOn` value.
             *
             * ```ts
             * const arr = new FormArray([
             *    new FormControl()
             * ], {updateOn: 'blur'});
             * ```
             *
             * ### Adding or removing controls from a form array
             *
             * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
             * in `FormArray` itself. These methods ensure the controls are properly tracked in the
             * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
             * the `FormArray` directly, as that result in strange and unexpected behavior such
             * as broken change detection.
             *
             * \@publicApi
             */
            var FormArray = /** @class */ (function (_super) {
                __extends(FormArray, _super);
                /**
                 * Creates a new `FormArray` instance.
                 *
                 * @param {?} controls An array of child controls. Each child control is given an index
                 * where it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains validation functions
                 * and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator functions
                 *
                 */
                function FormArray(controls, validatorOrOpts, asyncValidator) {
                    var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
                    _this.controls = controls;
                    _this._initObservables();
                    _this._setUpdateStrategy(validatorOrOpts);
                    _this._setUpControls();
                    _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
                    return _this;
                }
                /**
                 * Get the `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to retrieve the control
                 * @return {?}
                 */
                FormArray.prototype.at = function (index) { return this.controls[index]; };
                /**
                 * Insert a new `AbstractControl` at the end of the array.
                 *
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.push = function (control) {
                    this.controls.push(control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                /**
                 * Insert a new `AbstractControl` at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to insert the control
                 * @param {?} control Form control to be inserted
                 * @return {?}
                 */
                FormArray.prototype.insert = function (index, control) {
                    this.controls.splice(index, 0, control);
                    this._registerControl(control);
                    this.updateValueAndValidity();
                };
                /**
                 * Remove the control at the given `index` in the array.
                 *
                 * @param {?} index Index in the array to remove the control
                 * @return {?}
                 */
                FormArray.prototype.removeAt = function (index) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    this.updateValueAndValidity();
                };
                /**
                 * Replace an existing control.
                 *
                 * @param {?} index Index in the array to replace the control
                 * @param {?} control The `AbstractControl` control to replace the existing control
                 * @return {?}
                 */
                FormArray.prototype.setControl = function (index, control) {
                    if (this.controls[index])
                        this.controls[index]._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this.controls.splice(index, 1);
                    if (control) {
                        this.controls.splice(index, 0, control);
                        this._registerControl(control);
                    }
                    this.updateValueAndValidity();
                    this._onCollectionChange();
                };
                Object.defineProperty(FormArray.prototype, "length", {
                    /**
                     * Length of the control array.
                     * @return {?}
                     */
                    get: function () { return this.controls.length; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Sets the value of the `FormArray`. It accepts an array that matches
                 * the structure of the control.
                 *
                 * This method performs strict checks, and throws an error if you try
                 * to set the value of a control that doesn't exist or if you exclude the
                 * value of a control.
                 *
                 * \@usageNotes
                 * ### Set the values for the controls in the form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *   new FormControl(),
                 *   new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.setValue(['Nancy', 'Drew']);
                 * console.log(arr.value);   // ['Nancy', 'Drew']
                 * ```
                 *
                 * @param {?} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.setValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    this._checkAllValuesPresent(value);
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        _this._throwIfControlMissing(index);
                        _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Patches the value of the `FormArray`. It accepts an array that matches the
                 * structure of the control, and does its best to match the values to the correct
                 * controls in the group.
                 *
                 * It accepts both super-sets and sub-sets of the array without throwing an error.
                 *
                 * \@usageNotes
                 * ### Patch the values for controls in a form array
                 *
                 * ```
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.value);   // [null, null]
                 *
                 * arr.patchValue(['Nancy']);
                 * console.log(arr.value);   // ['Nancy', null]
                 * ```
                 *
                 * @param {?} value Array of latest values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control value is updated.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.patchValue = function (value, options) {
                    var _this = this;
                    if (options === void 0) { options = {}; }
                    value.forEach(( /**
                     * @param {?} newValue
                     * @param {?} index
                     * @return {?}
                     */function (newValue, index) {
                        if (_this.at(index)) {
                            _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                        }
                    }));
                    this.updateValueAndValidity(options);
                };
                /**
                 * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
                 * value of all descendants to null or null maps.
                 *
                 * You reset to a specific form state by passing in an array of states
                 * that matches the structure of the control. The state is a standalone value
                 * or a form state object with both a value and a disabled status.
                 *
                 * \@usageNotes
                 * ### Reset the values in a form array
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * arr.reset(['name', 'last name']);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * ```
                 *
                 * ### Reset the values in a form array and the disabled status for the first control
                 *
                 * ```
                 * this.arr.reset([
                 *   {value: 'name', disabled: true},
                 *   'last'
                 * ]);
                 *
                 * console.log(this.arr.value);  // ['name', 'last name']
                 * console.log(this.arr.get(0).status);  // 'DISABLED'
                 * ```
                 *
                 * @param {?=} value Array of values for the controls
                 * @param {?=} options Configure options that determine how the control propagates changes and
                 * emits events after the value changes
                 *
                 * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
                 * is false.
                 * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
                 * `valueChanges`
                 * observables emit events with the latest status and value when the control is reset.
                 * When false, no events are emitted.
                 * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
                 * updateValueAndValidity} method.
                 * @return {?}
                 */
                FormArray.prototype.reset = function (value, options) {
                    if (value === void 0) { value = []; }
                    if (options === void 0) { options = {}; }
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) {
                        control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
                    }));
                    this._updatePristine(options);
                    this._updateTouched(options);
                    this.updateValueAndValidity(options);
                };
                /**
                 * The aggregate value of the array, including any disabled controls.
                 *
                 * Reports all values regardless of disabled status.
                 * For enabled controls only, the `value` property is the best way to get the value of the array.
                 * @return {?}
                 */
                FormArray.prototype.getRawValue = function () {
                    return this.controls.map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) {
                        return control instanceof FormControl ? control.value : (( /** @type {?} */(control))).getRawValue();
                    }));
                };
                /**
                 * Remove all controls in the `FormArray`.
                 *
                 * \@usageNotes
                 * ### Remove all elements from a FormArray
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 * console.log(arr.length);  // 2
                 *
                 * arr.clear();
                 * console.log(arr.length);  // 0
                 * ```
                 *
                 * It's a simpler and more efficient alternative to removing all elements one by one:
                 *
                 * ```ts
                 * const arr = new FormArray([
                 *    new FormControl(),
                 *    new FormControl()
                 * ]);
                 *
                 * while (arr.length) {
                 *    arr.removeAt(0);
                 * }
                 * ```
                 * @return {?}
                 */
                FormArray.prototype.clear = function () {
                    if (this.controls.length < 1)
                        return;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { })); }));
                    this.controls.splice(0);
                    this.updateValueAndValidity();
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._syncPendingControls = function () {
                    /** @type {?} */
                    var subtreeUpdated = this.controls.reduce(( /**
                     * @param {?} updated
                     * @param {?} child
                     * @return {?}
                     */function (updated, child) {
                        return child._syncPendingControls() ? true : updated;
                    }), false);
                    if (subtreeUpdated)
                        this.updateValueAndValidity({ onlySelf: true });
                    return subtreeUpdated;
                };
                /**
                 * \@internal
                 * @param {?} index
                 * @return {?}
                 */
                FormArray.prototype._throwIfControlMissing = function (index) {
                    if (!this.controls.length) {
                        throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
                    }
                    if (!this.at(index)) {
                        throw new Error("Cannot find form control at index " + index);
                    }
                };
                /**
                 * \@internal
                 * @param {?} cb
                 * @return {?}
                 */
                FormArray.prototype._forEachChild = function (cb) {
                    this.controls.forEach(( /**
                     * @param {?} control
                     * @param {?} index
                     * @return {?}
                     */function (control, index) { cb(control, index); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._updateValue = function () {
                    var _this = this;
                    (( /** @type {?} */(this))).value =
                        this.controls.filter(( /**
                         * @param {?} control
                         * @return {?}
                         */function (control) { return control.enabled || _this.disabled; }))
                            .map(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.value; }));
                };
                /**
                 * \@internal
                 * @param {?} condition
                 * @return {?}
                 */
                FormArray.prototype._anyControls = function (condition) {
                    return this.controls.some(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return control.enabled && condition(control); }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._setUpControls = function () {
                    var _this = this;
                    this._forEachChild(( /**
                     * @param {?} control
                     * @return {?}
                     */function (control) { return _this._registerControl(control); }));
                };
                /**
                 * \@internal
                 * @param {?} value
                 * @return {?}
                 */
                FormArray.prototype._checkAllValuesPresent = function (value) {
                    this._forEachChild(( /**
                     * @param {?} control
                     * @param {?} i
                     * @return {?}
                     */function (control, i) {
                        if (value[i] === undefined) {
                            throw new Error("Must supply a value for form control at index: " + i + ".");
                        }
                    }));
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormArray.prototype._allControlsDisabled = function () {
                    var e_4, _a;
                    try {
                        for (var _b = __values(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var control = _c.value;
                            if (control.enabled)
                                return false;
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return this.controls.length > 0 || this.disabled;
                };
                /**
                 * @private
                 * @param {?} control
                 * @return {?}
                 */
                FormArray.prototype._registerControl = function (control) {
                    control.setParent(this);
                    control._registerOnCollectionChange(this._onCollectionChange);
                };
                return FormArray;
            }(AbstractControl));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgForm; }))
            };
            var ɵ0 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /** @type {?} */
            var resolvedPromise = ((ɵ0))();
            /**
             * \@description
             * Creates a top-level `FormGroup` instance and binds it to a form
             * to track aggregate form value and validation status.
             *
             * As soon as you import the `FormsModule`, this directive becomes active by default on
             * all `<form>` tags.  You don't need to add a special selector.
             *
             * You optionally export the directive into a local template variable using `ngForm` as the key
             * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
             * `FormGroup` instance are duplicated on the directive itself, so a reference to it
             * gives you access to the aggregate value and validity status of the form, as well as
             * user interaction properties like `dirty` and `touched`.
             *
             * To register child controls with the form, use `NgModel` with a `name`
             * attribute. You may use `NgModelGroup` to create sub-groups within the form.
             *
             * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
             * triggered a form submission. The `ngSubmit` event emits the original form
             * submission event.
             *
             * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
             * To import the `FormsModule` but skip its usage in some forms,
             * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
             * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
             * unnecessary because the `<form>` tags are inert. In that case, you would
             * refrain from using the `formGroup` directive.
             *
             * \@usageNotes
             *
             * ### Migrating from deprecated ngForm selector
             *
             * Support for using `ngForm` element selector has been deprecated in Angular v6 and will be removed
             * in Angular v9.
             *
             * This has been deprecated to keep selectors consistent with other core Angular selectors,
             * as element selectors are typically written in kebab-case.
             *
             * Now deprecated:
             * ```html
             * <ngForm #myForm="ngForm">
             * ```
             *
             * After:
             * ```html
             * <ng-form #myForm="ngForm">
             * ```
             *
             * ### Listening for form submission
             *
             * The following example shows how to capture the form values from the "ngSubmit" event.
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Setting the update options
             *
             * The following example shows you how to change the "updateOn" option from its default using
             * ngFormOptions.
             *
             * ```html
             * <form [ngFormOptions]="{updateOn: 'blur'}">
             *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
             * </form>
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgForm = /** @class */ (function (_super) {
                __extends(NgForm, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgForm(validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    /**
                     * \@description
                     * Returns whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    _this._directives = [];
                    /**
                     * \@description
                     * Event emitter for the "ngSubmit" event
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.form =
                        new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
                    return _this;
                }
                /**
                 * \@description
                 * Lifecycle method called after the view is initialized. For internal use only.
                 * @return {?}
                 */
                NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
                Object.defineProperty(NgForm.prototype, "formDirective", {
                    /**
                     * \@description
                     * The directive instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "control", {
                    /**
                     * \@description
                     * The internal `FormGroup` instance.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it is always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgForm.prototype, "controls", {
                    /**
                     * \@description
                     * Returns a map of the controls in this group.
                     * @return {?}
                     */
                    get: function () { return this.form.controls; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        (( /** @type {?} */(dir))).control =
                            ( /** @type {?} */(container.registerControl(dir.name, dir.control)));
                        setUpControl(dir.control, dir);
                        dir.control.updateValueAndValidity({ emitEvent: false });
                        _this._directives.push(dir);
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `NgModel` directive.
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `NgModel` instance from the internal list of directives
                 *
                 * @param {?} dir The `NgModel` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeControl = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                        removeDir(_this._directives, dir);
                    }));
                };
                /**
                 * \@description
                 * Adds a new `NgModelGroup` directive instance to the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.addFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        /** @type {?} */
                        var group = new FormGroup({});
                        setUpFormContainer(group, dir);
                        container.registerControl(dir.name, group);
                        group.updateValueAndValidity({ emitEvent: false });
                    }));
                };
                /**
                 * \@description
                 * Removes the `NgModelGroup` directive instance from the form.
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.removeFormGroup = function (dir) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var container = _this._findContainer(dir.path);
                        if (container) {
                            container.removeControl(dir.name);
                        }
                    }));
                };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
                 *
                 * @param {?} dir The `NgModelGroup` directive instance.
                 * @return {?}
                 */
                NgForm.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `NgControl` directive.
                 *
                 * @param {?} dir The `NgControl` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                NgForm.prototype.updateModel = function (dir, value) {
                    var _this = this;
                    resolvedPromise.then(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var ctrl = ( /** @type {?} */(_this.form.get(( /** @type {?} */(dir.path)))));
                        ctrl.setValue(value);
                    }));
                };
                /**
                 * \@description
                 * Sets the value for this `FormGroup`.
                 *
                 * @param {?} value The new value
                 * @return {?}
                 */
                NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
                /**
                 * \@description
                 * Method called when the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                NgForm.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this._directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                NgForm.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                NgForm.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgForm.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.form._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * \@internal
                 * @param {?} path
                 * @return {?}
                 */
                NgForm.prototype._findContainer = function (path) {
                    path.pop();
                    return path.length ? ( /** @type {?} */(this.form.get(path))) : this.form;
                };
                return NgForm;
            }(ControlContainer));
            NgForm.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,ng-form,[ngForm]',
                            providers: [formDirectiveProvider],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            outputs: ['ngSubmit'],
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            NgForm.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgForm.propDecorators = {
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngFormOptions',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var TemplateDrivenErrors = /** @class */ (function () {
                function TemplateDrivenErrors() {
                }
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelParentException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.formGroupNameException = function () {
                    throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.missingNameException = function () {
                    throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.modelGroupParentException = function () {
                    throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
                };
                /**
                 * @return {?}
                 */
                TemplateDrivenErrors.ngFormWarning = function () {
                    console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ");
                };
                return TemplateDrivenErrors;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * `InjectionToken` to provide to turn off the warning when using 'ngForm' deprecated selector.
             * @type {?}
             */
            var NG_FORM_SELECTOR_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgFormSelectorWarning');
            /**
             * This directive is solely used to display warnings when the deprecated `ngForm` selector is used.
             *
             * @deprecated in Angular v6 and will be removed in Angular v9.
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgFormSelectorWarning = /** @class */ (function () {
                /**
                 * @param {?} ngFormWarning
                 */
                function NgFormSelectorWarning(ngFormWarning) {
                    if (((!ngFormWarning || ngFormWarning === 'once') && !NgFormSelectorWarning._ngFormWarning) ||
                        ngFormWarning === 'always') {
                        TemplateDrivenErrors.ngFormWarning();
                        NgFormSelectorWarning._ngFormWarning = true;
                    }
                }
                return NgFormSelectorWarning;
            }());
            /**
             * Static property used to track whether the deprecation warning for this selector has been sent.
             * Used to support warning config of "once".
             *
             * \@internal
             */
            NgFormSelectorWarning._ngFormWarning = false;
            NgFormSelectorWarning.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'ngForm' },] }
            ];
            /** @nocollapse */
            NgFormSelectorWarning.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_FORM_SELECTOR_WARNING,] }] }
            ]; };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
             *
             * \@publicApi
             */
            var AbstractFormGroupDirective = /** @class */ (function (_super) {
                __extends(AbstractFormGroupDirective, _super);
                function AbstractFormGroupDirective() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * An internal callback method triggered on the instance after the inputs are set.
                 * Registers the group with its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormGroup(this);
                };
                /**
                 * \@description
                 * An internal callback method triggered before the instance is destroyed.
                 * Removes the group from its parent group.
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormGroup(this);
                    }
                };
                Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormGroup(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * The path to this group from the top-level directive.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
                    /**
                     * \@description
                     * The synchronous validators registered with this group.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * The async validators registered with this group.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@internal
                 * @return {?}
                 */
                AbstractFormGroupDirective.prototype._checkParentType = function () { };
                return AbstractFormGroupDirective;
            }(ControlContainer));
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var modelGroupProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModelGroup; }))
            };
            /**
             * \@description
             * Creates and binds a `FormGroup` instance to a DOM element.
             *
             * This directive can only be used as a child of `NgForm` (within `<form>` tags).
             *
             * Use this directive to validate a sub-group of your form separately from the
             * rest of your form, or if some values in your domain model make more sense
             * to consume together in a nested object.
             *
             * Provide a name for the sub-group and it will become the key
             * for the sub-group in the form's full value. If you need direct access, export the directive into
             * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
             *
             * \@usageNotes
             *
             * ### Consuming controls in a grouping
             *
             * The following example shows you how to combine controls together in a sub-group
             * of the form.
             *
             * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModelGroup = /** @class */ (function (_super) {
                __extends(NgModelGroup, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function NgModelGroup(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                NgModelGroup.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelGroupParentException();
                    }
                };
                return NgModelGroup;
            }(AbstractFormGroupDirective));
            NgModelGroup.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
            ];
            /** @nocollapse */
            NgModelGroup.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            NgModelGroup.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelGroup',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formControlBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgModel; }))
            };
            var ɵ0$1 = /**
             * @return {?}
             */ function () { return Promise.resolve(null); };
            /**
             * `ngModel` forces an additional change detection run when its inputs change:
             * E.g.:
             * ```
             * <div>{{myModel.valid}}</div>
             * <input [(ngModel)]="myValue" #myModel="ngModel">
             * ```
             * I.e. `ngModel` can export itself on the element and then be used in the template.
             * Normally, this would result in expressions before the `input` that use the exported directive
             * to have and old value as they have been
             * dirty checked before. As this is a very common case for `ngModel`, we added this second change
             * detection run.
             *
             * Notes:
             * - this is just one extra run no matter how many `ngModel` have been changed.
             * - this is a general problem when using `exportAs` for directives!
             * @type {?}
             */
            var resolvedPromise$1 = ((ɵ0$1))();
            /**
             * \@description
             * Creates a `FormControl` instance from a domain model and binds it
             * to a form control element.
             *
             * The `FormControl` instance tracks the value, user interaction, and
             * validation status of the control and keeps the view synced with the model. If used
             * within a parent form, the directive also registers itself with the form as a child
             * control.
             *
             * This directive is used by itself or as part of a larger form. Use the
             * `ngModel` selector to activate it.
             *
             * It accepts a domain model as an optional `Input`. If you have a one-way binding
             * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
             * class sets the value in the view. If you have a two-way binding with `[()]` syntax
             * (also known as 'banana-box syntax'), the value in the UI always syncs back to
             * the domain model in your class.
             *
             * To inspect the properties of the associated `FormControl` (like validity state),
             * export the directive into a local template variable using `ngModel` as the key (ex: `#myVar="ngModel"`).
             * You then access the control using the directive's `control` property,
             * but most properties used (like `valid` and `dirty`) fall through to the control anyway for direct access.
             * See a full list of properties directly available in `AbstractControlDirective`.
             *
             * @see `RadioControlValueAccessor`
             * @see `SelectControlValueAccessor`
             *
             * \@usageNotes
             *
             * ### Using ngModel on a standalone control
             *
             * The following examples show a simple standalone control using `ngModel`:
             *
             * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
             *
             * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
             * so that the control can be registered with the parent form under that name.
             *
             * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
             * as the parent form syncs the value for you. You access its properties by exporting it into a
             * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
             * needed on form submission.
             *
             * If you do need to populate initial values into your form, using a one-way binding for
             * `ngModel` tends to be sufficient as long as you use the exported form's value rather
             * than the domain model's value on submit.
             *
             * ### Using ngModel within a form
             *
             * The following example shows controls using `ngModel` within a form:
             *
             * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
             *
             * ### Using a standalone ngModel within a group
             *
             * The following example shows you how to use a standalone ngModel control
             * within a form. This controls the display of the form, but doesn't contain form data.
             *
             * ```html
             * <form>
             *   <input name="login" ngModel placeholder="Login">
             *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
             * </form>
             * <!-- form value: {login: ''} -->
             * ```
             *
             * ### Setting the ngModel name attribute through options
             *
             * The following example shows you an alternate way to set the name attribute. The name attribute is used
             * within a custom form component, and the name `\@Input` property serves a different purpose.
             *
             * ```html
             * <form>
             *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
             *   </my-person-control>
             * </form>
             * <!-- form value: {user: ''} -->
             * ```
             *
             * \@ngModule FormsModule
             * \@publicApi
             */
            var NgModel = /** @class */ (function (_super) {
                __extends(NgModel, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 */
                function NgModel(parent, validators, asyncValidators, valueAccessors) {
                    var _this = _super.call(this) || this;
                    _this.control = new FormControl();
                    /**
                     * \@internal
                     */
                    _this._registered = false;
                    /**
                     * \@description
                     * Event emitter for producing the `ngModelChange` event after
                     * the view model updates.
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                NgModel.prototype.ngOnChanges = function (changes) {
                    this._checkForErrors();
                    if (!this._registered)
                        this._setUpControl();
                    if ('isDisabled' in changes) {
                        this._updateDisabled(changes);
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        this._updateValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal
                 * use only.
                 * @return {?}
                 */
                NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
                Object.defineProperty(NgModel.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? controlPath(this.name, this._parent) : [this.name];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this control if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NgModel.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value emitted by `ngModelChange`.
                 * @return {?}
                 */
                NgModel.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpControl = function () {
                    this._setUpdateStrategy();
                    this._isStandalone() ? this._setUpStandalone() :
                        this.formDirective.addControl(this);
                    this._registered = true;
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpdateStrategy = function () {
                    if (this.options && this.options.updateOn != null) {
                        this.control._updateOn = this.options.updateOn;
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._isStandalone = function () {
                    return !this._parent || !!(this.options && this.options.standalone);
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._setUpStandalone = function () {
                    setUpControl(this.control, this);
                    this.control.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkForErrors = function () {
                    if (!this._isStandalone()) {
                        this._checkParentType();
                    }
                    this._checkName();
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkParentType = function () {
                    if (!(this._parent instanceof NgModelGroup) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        TemplateDrivenErrors.formGroupNameException();
                    }
                    else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                        TemplateDrivenErrors.modelParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                NgModel.prototype._checkName = function () {
                    if (this.options && this.options.name)
                        this.name = this.options.name;
                    if (!this._isStandalone() && !this.name) {
                        TemplateDrivenErrors.missingNameException();
                    }
                };
                /**
                 * @private
                 * @param {?} value
                 * @return {?}
                 */
                NgModel.prototype._updateValue = function (value) {
                    var _this = this;
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () { _this.control.setValue(value, { emitViewToModelChange: false }); }));
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                NgModel.prototype._updateDisabled = function (changes) {
                    var _this = this;
                    /** @type {?} */
                    var disabledValue = changes['isDisabled'].currentValue;
                    /** @type {?} */
                    var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
                    resolvedPromise$1.then(( /**
                     * @return {?}
                     */function () {
                        if (isDisabled && !_this.control.disabled) {
                            _this.control.disable();
                        }
                        else if (!isDisabled && _this.control.disabled) {
                            _this.control.enable();
                        }
                    }));
                };
                return NgModel;
            }(NgControl));
            NgModel.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[ngModel]:not([formControlName]):not([formControl])',
                            providers: [formControlBinding],
                            exportAs: 'ngModel'
                        },] }
            ];
            /** @nocollapse */
            NgModel.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
            ]; };
            NgModel.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModelOptions',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             *
             * Adds `novalidate` attribute to all forms by default.
             *
             * `novalidate` is used to disable browser's native form validation.
             *
             * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
             *
             * ```
             * <form ngNativeValidate></form>
             * ```
             *
             * \@publicApi
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             */
            var ɵNgNoValidate = /** @class */ (function () {
                function ɵNgNoValidate() {
                }
                return ɵNgNoValidate;
            }());
            ɵNgNoValidate.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                            host: { 'novalidate': '' },
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Token to provide to turn off the ngModel warning on formControl and formControlName.
             * @type {?}
             */
            var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
            /** @type {?} */
            var formControlBinding$1 = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlDirective; }))
            };
            /**
             * \@description
             * * Syncs a standalone `FormControl` instance to a form control element.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Registering a single form control
             *
             * The following examples shows how to register a standalone control and set its value.
             *
             * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <input [formControl]="control" [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <input [formControl]="control">
             * ```
             *
             * ```ts
             * this.control.setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlDirective = /** @class */ (function (_super) {
                __extends(FormControlDirective, _super);
                /**
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular `FormControlDirective` instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlDirective.prototype.ngOnChanges = function (changes) {
                    if (this._isControlChanged(changes)) {
                        setUpControl(this.form, this);
                        if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                            ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                        }
                        this.form.updateValueAndValidity({ emitEvent: false });
                    }
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
                        this.form.setValue(this.model);
                        this.viewModel = this.model;
                    }
                };
                Object.defineProperty(FormControlDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._rawAsyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlDirective.prototype, "control", {
                    /**
                     * \@description
                     * The `FormControl` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                /**
                 * @private
                 * @param {?} changes
                 * @return {?}
                 */
                FormControlDirective.prototype._isControlChanged = function (changes) {
                    return changes.hasOwnProperty('form');
                };
                return FormControlDirective;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlDirective. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlDirective._ngModelWarningSentOnce = false;
            FormControlDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
            ];
            /** @nocollapse */
            FormControlDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControl',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formDirectiveProvider$1 = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupDirective; }))
            };
            /**
             * \@description
             *
             * Binds an existing `FormGroup` to a DOM element.
             *
             * This directive accepts an existing `FormGroup` instance. It will then use this
             * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
             * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
             * and `FormArrayName` directives.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * ### Register Form Group
             *
             * The following example registers a `FormGroup` with first name and last name controls,
             * and listens for the *ngSubmit* event when the button is clicked.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupDirective = /** @class */ (function (_super) {
                __extends(FormGroupDirective, _super);
                /**
                 * @param {?} _validators
                 * @param {?} _asyncValidators
                 */
                function FormGroupDirective(_validators, _asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._validators = _validators;
                    _this._asyncValidators = _asyncValidators;
                    /**
                     * \@description
                     * Reports whether the form submission has been triggered.
                     */
                    _this.submitted = false;
                    /**
                     * \@description
                     * Tracks the list of added `FormControlName` instances
                     */
                    _this.directives = [];
                    /**
                     * \@description
                     * Tracks the `FormGroup` bound to this directive.
                     */
                    _this.form = ( /** @type {?} */(null));
                    /**
                     * \@description
                     * Emits an event when the form submission has been triggered.
                     */
                    _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormGroupDirective.prototype.ngOnChanges = function (changes) {
                    this._checkFormPresent();
                    if (changes.hasOwnProperty('form')) {
                        this._updateValidators();
                        this._updateDomValue();
                        this._updateRegistrations();
                    }
                };
                Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
                    /**
                     * \@description
                     * Returns this directive's instance.
                     * @return {?}
                     */
                    get: function () { return this; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "control", {
                    /**
                     * \@description
                     * Returns the `FormGroup` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this.form; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormGroupDirective.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array representing the path to this group. Because this directive
                     * always lives at the top level of a form, it always an empty array.
                     * @return {?}
                     */
                    get: function () { return []; },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that sets up the control directive in this group, re-calculates its value
                 * and validity, and adds the instance to the internal list of directives.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addControl = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpControl(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                    this.directives.push(dir);
                    return ctrl;
                };
                /**
                 * \@description
                 * Retrieves the `FormControl` instance from the provided `FormControlName` directive
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getControl = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * \@description
                 * Removes the `FormControlName` instance from the internal list of directives
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
                /**
                 * Adds a new `FormGroupName` directive instance to the form.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormGroup = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form group.
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormGroup = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
                 *
                 * @param {?} dir The `FormGroupName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormGroup = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Adds a new `FormArrayName` directive instance to the form.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.addFormArray = function (dir) {
                    /** @type {?} */
                    var ctrl = this.form.get(dir.path);
                    setUpFormContainer(ctrl, dir);
                    ctrl.updateValueAndValidity({ emitEvent: false });
                };
                /**
                 * No-op method to remove the form array.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.removeFormArray = function (dir) { };
                /**
                 * \@description
                 * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
                 *
                 * @param {?} dir The `FormArrayName` directive instance.
                 * @return {?}
                 */
                FormGroupDirective.prototype.getFormArray = function (dir) { return ( /** @type {?} */(this.form.get(dir.path))); };
                /**
                 * Sets the new value for the provided `FormControlName` directive.
                 *
                 * @param {?} dir The `FormControlName` directive instance.
                 * @param {?} value The new value for the directive's control.
                 * @return {?}
                 */
                FormGroupDirective.prototype.updateModel = function (dir, value) {
                    /** @type {?} */
                    var ctrl = ( /** @type {?} */(this.form.get(dir.path)));
                    ctrl.setValue(value);
                };
                /**
                 * \@description
                 * Method called with the "submit" event is triggered on the form.
                 * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
                 *
                 * @param {?} $event The "submit" event object
                 * @return {?}
                 */
                FormGroupDirective.prototype.onSubmit = function ($event) {
                    (( /** @type {?} */(this))).submitted = true;
                    syncPendingControls(this.form, this.directives);
                    this.ngSubmit.emit($event);
                    return false;
                };
                /**
                 * \@description
                 * Method called when the "reset" event is triggered on the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
                /**
                 * \@description
                 * Resets the form to an initial value and resets its submitted status.
                 *
                 * @param {?=} value The new value for the form.
                 * @return {?}
                 */
                FormGroupDirective.prototype.resetForm = function (value) {
                    if (value === void 0) { value = undefined; }
                    this.form.reset(value);
                    (( /** @type {?} */(this))).submitted = false;
                };
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateDomValue = function () {
                    var _this = this;
                    this.directives.forEach(( /**
                     * @param {?} dir
                     * @return {?}
                     */function (/**
                     * @param {?} dir
                     * @return {?}
                     */ dir) {
                        /** @type {?} */
                        var newCtrl = _this.form.get(dir.path);
                        if (dir.control !== newCtrl) {
                            cleanUpControl(dir.control, dir);
                            if (newCtrl)
                                setUpControl(newCtrl, dir);
                            (( /** @type {?} */(dir))).control = newCtrl;
                        }
                    }));
                    this.form._updateTreeValidity({ emitEvent: false });
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateRegistrations = function () {
                    var _this = this;
                    this.form._registerOnCollectionChange(( /**
                     * @return {?}
                     */function () { return _this._updateDomValue(); }));
                    if (this._oldForm)
                        this._oldForm._registerOnCollectionChange(( /**
                         * @return {?}
                         */function () { }));
                    this._oldForm = this.form;
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._updateValidators = function () {
                    /** @type {?} */
                    var sync = composeValidators(this._validators);
                    this.form.validator = Validators.compose([( /** @type {?} */(this.form.validator)), ( /** @type {?} */(sync))]);
                    /** @type {?} */
                    var async = composeAsyncValidators(this._asyncValidators);
                    this.form.asyncValidator = Validators.composeAsync([( /** @type {?} */(this.form.asyncValidator)), ( /** @type {?} */(async))]);
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormGroupDirective.prototype._checkFormPresent = function () {
                    if (!this.form) {
                        ReactiveErrors.missingFormException();
                    }
                };
                return FormGroupDirective;
            }(ControlContainer));
            FormGroupDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[formGroup]',
                            providers: [formDirectiveProvider$1],
                            host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                            exportAs: 'ngForm'
                        },] }
            ];
            /** @nocollapse */
            FormGroupDirective.ctorParameters = function () { return [
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupDirective.propDecorators = {
                form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroup',] }],
                ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var formGroupNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormGroupName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormGroup` to a DOM element.
             *
             * This directive can only be used with a parent `FormGroupDirective`.
             *
             * It accepts the string name of the nested `FormGroup` to link, and
             * looks for a `FormGroup` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * Use nested form groups to validate a sub-group of a
             * form separately from the rest or to group the values of certain
             * controls into their own nested object.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             *
             * \@usageNotes
             *
             * ### Access the group by name
             *
             * The following example uses the {\@link AbstractControl#get get} method to access the
             * associated `FormGroup`
             *
             * ```ts
             *   this.form.get('name');
             * ```
             *
             * ### Access individual controls in the group
             *
             * The following example uses the {\@link AbstractControl#get get} method to access
             * individual controls within the group using dot syntax.
             *
             * ```ts
             *   this.form.get('name.first');
             * ```
             *
             * ### Register a nested `FormGroup`.
             *
             * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
             * and provides methods to retrieve the nested `FormGroup` and individual controls.
             *
             * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormGroupName = /** @class */ (function (_super) {
                __extends(FormGroupName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormGroupName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@internal
                 * @return {?}
                 */
                FormGroupName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.groupParentException();
                    }
                };
                return FormGroupName;
            }(AbstractFormGroupDirective));
            FormGroupName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
            ];
            /** @nocollapse */
            FormGroupName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormGroupName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formGroupName',] }]
            };
            if (false) { }
            /** @type {?} */
            var formArrayNameProvider = {
                provide: ControlContainer,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormArrayName; }))
            };
            /**
             * \@description
             *
             * Syncs a nested `FormArray` to a DOM element.
             *
             * This directive is designed to be used with a parent `FormGroupDirective` (selector:
             * `[formGroup]`).
             *
             * It accepts the string name of the nested `FormArray` you want to link, and
             * will look for a `FormArray` registered with that name in the parent
             * `FormGroup` instance you passed into `FormGroupDirective`.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Example
             *
             * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormArrayName = /** @class */ (function (_super) {
                __extends(FormArrayName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 */
                function FormArrayName(parent, validators, asyncValidators) {
                    var _this = _super.call(this) || this;
                    _this._parent = parent;
                    _this._validators = validators;
                    _this._asyncValidators = asyncValidators;
                    return _this;
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs are initialized. For internal use only.
                 *
                 * @throws If the directive does not have a valid parent.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnInit = function () {
                    this._checkParentType();
                    ( /** @type {?} */(this.formDirective)).addFormArray(this);
                };
                /**
                 * \@description
                 * A lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormArrayName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeFormArray(this);
                    }
                };
                Object.defineProperty(FormArrayName.prototype, "control", {
                    /**
                     * \@description
                     * The `FormArray` bound to this directive.
                     * @return {?}
                     */
                    get: function () { return ( /** @type {?} */(this.formDirective)).getFormArray(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () {
                        return this._parent ? ( /** @type {?} */(this._parent.formDirective)) : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, this._parent); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._validators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this directive.
                     * @return {?}
                     */
                    get: function () {
                        return composeAsyncValidators(this._asyncValidators);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormArrayName.prototype._checkParentType = function () {
                    if (_hasInvalidParent(this._parent)) {
                        ReactiveErrors.arrayParentException();
                    }
                };
                return FormArrayName;
            }(ControlContainer));
            FormArrayName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
            ];
            /** @nocollapse */
            FormArrayName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
            ]; };
            FormArrayName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formArrayName',] }]
            };
            if (false) { }
            /**
             * @param {?} parent
             * @return {?}
             */
            function _hasInvalidParent(parent) {
                return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
                    !(parent instanceof FormArrayName);
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var controlNameBinding = {
                provide: NgControl,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return FormControlName; }))
            };
            /**
             * \@description
             * Syncs a `FormControl` in an existing `FormGroup` to a form control
             * element by name.
             *
             * @see [Reactive Forms Guide](guide/reactive-forms)
             * @see `FormControl`
             * @see `AbstractControl`
             *
             * \@usageNotes
             *
             * ### Register `FormControl` within a group
             *
             * The following example shows how to register multiple form controls within a form group
             * and set their value.
             *
             * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
             *
             * To see `formControlName` examples with different form control types, see:
             *
             * * Radio buttons: `RadioControlValueAccessor`
             * * Selects: `SelectControlValueAccessor`
             *
             * ### Use with ngModel
             *
             * Support for using the `ngModel` input property and `ngModelChange` event with reactive
             * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
             *
             * Now deprecated:
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first" [(ngModel)]="value">
             * </form>
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * This has been deprecated for a few reasons. First, developers have found this pattern
             * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
             * an input/output property named `ngModel` on the reactive form directive that simply
             * approximates (some of) its behavior. Specifically, it allows getting/setting the value
             * and intercepting value events. However, some of `ngModel`'s other features - like
             * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
             * which has understandably caused some confusion.
             *
             * In addition, this pattern mixes template-driven and reactive forms strategies, which
             * we generally don't recommend because it doesn't take advantage of the full benefits of
             * either strategy. Setting the value in the template violates the template-agnostic
             * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
             * the class removes the convenience of defining forms in the template.
             *
             * To update your code before v7, you'll want to decide whether to stick with reactive form
             * directives (and get/set values using reactive forms patterns) or switch over to
             * template-driven directives.
             *
             * After (choice 1 - use reactive forms):
             *
             * ```html
             * <form [formGroup]="form">
             *   <input formControlName="first">
             * </form>
             * ```
             *
             * ```ts
             * this.form.get('first').setValue('some value');
             * ```
             *
             * After (choice 2 - use template-driven forms):
             *
             * ```html
             * <input [(ngModel)]="value">
             * ```
             *
             * ```ts
             * this.value = 'some value';
             * ```
             *
             * By default, when you use this pattern, you will see a deprecation warning once in dev
             * mode. You can choose to silence this warning by providing a config for
             * `ReactiveFormsModule` at import time:
             *
             * ```ts
             * imports: [
             *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
             * ]
             * ```
             *
             * Alternatively, you can choose to surface a separate warning for each instance of this
             * pattern with a config value of `"always"`. This may help to track down where in the code
             * the pattern is being used as the code is being updated.
             *
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var FormControlName = /** @class */ (function (_super) {
                __extends(FormControlName, _super);
                /**
                 * @param {?} parent
                 * @param {?} validators
                 * @param {?} asyncValidators
                 * @param {?} valueAccessors
                 * @param {?} _ngModelWarningConfig
                 */
                function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
                    var _this = _super.call(this) || this;
                    _this._ngModelWarningConfig = _ngModelWarningConfig;
                    _this._added = false;
                    /**
                     * @deprecated as of v6
                     */
                    _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    /**
                     * \@description
                     * Instance property used to track whether an ngModel warning has been sent out for this
                     * particular FormControlName instance. Used to support warning config of "always".
                     *
                     * \@internal
                     */
                    _this._ngModelWarningSent = false;
                    _this._parent = parent;
                    _this._rawValidators = validators || [];
                    _this._rawAsyncValidators = asyncValidators || [];
                    _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
                    return _this;
                }
                Object.defineProperty(FormControlName.prototype, "isDisabled", {
                    /**
                     * \@description
                     * Triggers a warning that this input should not be used with reactive forms.
                     * @param {?} isDisabled
                     * @return {?}
                     */
                    set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnChanges = function (changes) {
                    if (!this._added)
                        this._setUpControl();
                    if (isPropertyUpdated(changes, this.viewModel)) {
                        _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
                        this.viewModel = this.model;
                        this.formDirective.updateModel(this, this.model);
                    }
                };
                /**
                 * \@description
                 * Lifecycle method called before the directive's instance is destroyed. For internal use only.
                 * @return {?}
                 */
                FormControlName.prototype.ngOnDestroy = function () {
                    if (this.formDirective) {
                        this.formDirective.removeControl(this);
                    }
                };
                /**
                 * \@description
                 * Sets the new value for the view model and emits an `ngModelChange` event.
                 *
                 * @param {?} newValue The new value for the view model.
                 * @return {?}
                 */
                FormControlName.prototype.viewToModelUpdate = function (newValue) {
                    this.viewModel = newValue;
                    this.update.emit(newValue);
                };
                Object.defineProperty(FormControlName.prototype, "path", {
                    /**
                     * \@description
                     * Returns an array that represents the path from the top-level form to this control.
                     * Each index is the string name of the control on that level.
                     * @return {?}
                     */
                    get: function () { return controlPath(this.name, ( /** @type {?} */(this._parent))); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "formDirective", {
                    /**
                     * \@description
                     * The top-level directive for this group if present, otherwise null.
                     * @return {?}
                     */
                    get: function () { return this._parent ? this._parent.formDirective : null; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "validator", {
                    /**
                     * \@description
                     * Synchronous validator function composed of all the synchronous validators
                     * registered with this directive.
                     * @return {?}
                     */
                    get: function () { return composeValidators(this._rawValidators); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FormControlName.prototype, "asyncValidator", {
                    /**
                     * \@description
                     * Async validator function composed of all the async validators registered with this
                     * directive.
                     * @return {?}
                     */
                    get: function () {
                        return ( /** @type {?} */(composeAsyncValidators(this._rawAsyncValidators)));
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._checkParentType = function () {
                    if (!(this._parent instanceof FormGroupName) &&
                        this._parent instanceof AbstractFormGroupDirective) {
                        ReactiveErrors.ngModelGroupException();
                    }
                    else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                        !(this._parent instanceof FormArrayName)) {
                        ReactiveErrors.controlParentException();
                    }
                };
                /**
                 * @private
                 * @return {?}
                 */
                FormControlName.prototype._setUpControl = function () {
                    this._checkParentType();
                    (( /** @type {?} */(this))).control = this.formDirective.addControl(this);
                    if (this.control.disabled && ( /** @type {?} */(this.valueAccessor)).setDisabledState) {
                        ( /** @type {?} */(( /** @type {?} */(this.valueAccessor)).setDisabledState))(true);
                    }
                    this._added = true;
                };
                return FormControlName;
            }(NgControl));
            /**
             * \@description
             * Static property used to track whether any ngModel warnings have been sent across
             * all instances of FormControlName. Used to support warning config of "once".
             *
             * \@internal
             */
            FormControlName._ngModelWarningSentOnce = false;
            FormControlName.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
            ];
            /** @nocollapse */
            FormControlName.ctorParameters = function () { return [
                { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
                { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
            ]; };
            FormControlName.propDecorators = {
                name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['formControlName',] }],
                isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disabled',] }],
                model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngModel',] }],
                update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['ngModelChange',] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@description
             * An interface implemented by classes that perform synchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom validator
             *
             * The following example implements the `Validator` interface to create a
             * validator directive with a custom error key.
             *
             * ```typescript
             * \@Directive({
             *   selector: '[customValidator]',
             *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
             * })
             * class CustomValidatorDirective implements Validator {
             *   validate(control: AbstractControl): ValidationErrors|null {
             *     return {'custom': true};
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function Validator() { }
            if (false) { }
            /**
             * \@description
             * An interface implemented by classes that perform asynchronous validation.
             *
             * \@usageNotes
             *
             * ### Provide a custom async validator directive
             *
             * The following example implements the `AsyncValidator` interface to create an
             * async validator directive with a custom error key.
             *
             * ```typescript
             * import { of as observableOf } from 'rxjs';
             *
             * \@Directive({
             *   selector: '[customAsyncValidator]',
             *   providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: CustomAsyncValidatorDirective, multi:
             * true}]
             * })
             * class CustomAsyncValidatorDirective implements AsyncValidator {
             *   validate(control: AbstractControl): Observable<ValidationErrors|null> {
             *     return observableOf({'custom': true});
             *   }
             * }
             * ```
             *
             * \@publicApi
             * @record
             */
            function AsyncValidator() { }
            if (false) { }
            /**
             * \@description
             * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return RequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var CHECKBOX_REQUIRED_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CheckboxRequiredValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds the `required` validator to any controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required validator using template-driven forms
             *
             * ```
             * <input name="fullName" ngModel required>
             * ```
             *
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             * \@publicApi
             */
            var RequiredValidator = /** @class */ (function () {
                function RequiredValidator() {
                }
                Object.defineProperty(RequiredValidator.prototype, "required", {
                    /**
                     * \@description
                     * Tracks changes to the required attribute bound to this directive.
                     * @return {?}
                     */
                    get: function () { return this._required; },
                    /**
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._required = value != null && value !== false && "" + value !== 'false';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether the control is empty.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                RequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.required(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return RequiredValidator;
            }());
            RequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                            providers: [REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            RequiredValidator.propDecorators = {
                required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * A Directive that adds the `required` validator to checkbox controls marked with the
             * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a required checkbox validator using template-driven forms
             *
             * The following example shows how to add a checkbox required validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="checkbox" name="active" ngModel required>
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var CheckboxRequiredValidator = /** @class */ (function (_super) {
                __extends(CheckboxRequiredValidator, _super);
                function CheckboxRequiredValidator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * \@description
                 * Method that validates whether or not the checkbox has been checked.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                CheckboxRequiredValidator.prototype.validate = function (control) {
                    return this.required ? Validators.requiredTrue(control) : null;
                };
                return CheckboxRequiredValidator;
            }(RequiredValidator));
            CheckboxRequiredValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                            providers: [CHECKBOX_REQUIRED_VALIDATOR],
                            host: { '[attr.required]': 'required ? "" : null' }
                        },] }
            ];
            /**
             * \@description
             * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var EMAIL_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return EmailValidator; })),
                multi: true
            };
            /**
             * A directive that adds the `email` validator to controls marked with the
             * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding an email validator
             *
             * The following example shows how to add an email validator to an input attached to an ngModel binding.
             *
             * ```
             * <input type="email" name="email" ngModel email>
             * <input type="email" name="email" ngModel email="true">
             * <input type="email" name="email" ngModel [email]="true">
             * ```
             *
             * \@publicApi
             * \@ngModule FormsModule
             * \@ngModule ReactiveFormsModule
             */
            var EmailValidator = /** @class */ (function () {
                function EmailValidator() {
                }
                Object.defineProperty(EmailValidator.prototype, "email", {
                    /**
                     * \@description
                     * Tracks changes to the email attribute bound to this directive.
                     * @param {?} value
                     * @return {?}
                     */
                    set: function (value) {
                        this._enabled = value === '' || value === true || value === 'true';
                        if (this._onChange)
                            this._onChange();
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * \@description
                 * Method that validates whether an email address is valid.
                 * Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                EmailValidator.prototype.validate = function (control) {
                    return this._enabled ? Validators.email(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                return EmailValidator;
            }());
            EmailValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                            providers: [EMAIL_VALIDATOR]
                        },] }
            ];
            EmailValidator.propDecorators = {
                email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * A function that receives a control and synchronously returns a map of
             * validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function ValidatorFn() { }
            /**
             * \@description
             * A function that receives a control and returns a Promise or observable
             * that emits validation errors if present, otherwise null.
             *
             * \@publicApi
             * @record
             */
            function AsyncValidatorFn() { }
            /**
             * \@description
             * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MIN_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MinLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds minimum length validation to controls marked with the
             * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` mult-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a minimum length validator
             *
             * The following example shows how to add a minimum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel minlength="4">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MinLengthValidator = /** @class */ (function () {
                function MinLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MinLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('minlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value meets a minimum length
                 * requirement. Returns the validation result if enabled, otherwise null.
                 * @param {?} control
                 * @return {?}
                 */
                MinLengthValidator.prototype.validate = function (control) {
                    return this.minlength == null ? null : this._validator(control);
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MinLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.minLength(parseInt(this.minlength, 10));
                };
                return MinLengthValidator;
            }());
            MinLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                            providers: [MIN_LENGTH_VALIDATOR],
                            host: { '[attr.minlength]': 'minlength ? minlength : null' }
                        },] }
            ];
            MinLengthValidator.propDecorators = {
                minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var MAX_LENGTH_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MaxLengthValidator; })),
                multi: true
            };
            /**
             * A directive that adds max length validation to controls marked with the
             * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a maximum length validator
             *
             * The following example shows how to add a maximum length validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel maxlength="25">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var MaxLengthValidator = /** @class */ (function () {
                function MaxLengthValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                MaxLengthValidator.prototype.ngOnChanges = function (changes) {
                    if ('maxlength' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value exceeds
                 * the maximum length requirement.
                 * @param {?} control
                 * @return {?}
                 */
                MaxLengthValidator.prototype.validate = function (control) {
                    return this.maxlength != null ? this._validator(control) : null;
                };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                MaxLengthValidator.prototype._createValidator = function () {
                    this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
                };
                return MaxLengthValidator;
            }());
            MaxLengthValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                            providers: [MAX_LENGTH_VALIDATOR],
                            host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                        },] }
            ];
            MaxLengthValidator.propDecorators = {
                maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * \@description
             * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
             * @type {?}
             */
            var PATTERN_VALIDATOR = {
                provide: NG_VALIDATORS,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return PatternValidator; })),
                multi: true
            };
            /**
             * \@description
             * A directive that adds regex pattern validation to controls marked with the
             * `pattern` attribute. The regex must match the entire control value.
             * The directive is provided with the `NG_VALIDATORS` multi-provider list.
             *
             * @see [Form Validation](guide/form-validation)
             *
             * \@usageNotes
             *
             * ### Adding a pattern validator
             *
             * The following example shows how to add a pattern validator to an input attached to an
             * ngModel binding.
             *
             * ```html
             * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
             * ```
             *
             * \@ngModule ReactiveFormsModule
             * \@ngModule FormsModule
             * \@publicApi
             */
            var PatternValidator = /** @class */ (function () {
                function PatternValidator() {
                }
                /**
                 * \@description
                 * A lifecycle method called when the directive's inputs change. For internal use
                 * only.
                 *
                 * @param {?} changes A object of key/value pairs for the set of changed inputs.
                 * @return {?}
                 */
                PatternValidator.prototype.ngOnChanges = function (changes) {
                    if ('pattern' in changes) {
                        this._createValidator();
                        if (this._onChange)
                            this._onChange();
                    }
                };
                /**
                 * \@description
                 * Method that validates whether the value matches the
                 * the pattern requirement.
                 * @param {?} control
                 * @return {?}
                 */
                PatternValidator.prototype.validate = function (control) { return this._validator(control); };
                /**
                 * \@description
                 * Registers a callback function to call when the validator inputs change.
                 *
                 * @param {?} fn The callback function
                 * @return {?}
                 */
                PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
                /**
                 * @private
                 * @return {?}
                 */
                PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
                return PatternValidator;
            }());
            PatternValidator.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                            providers: [PATTERN_VALIDATOR],
                            host: { '[attr.pattern]': 'pattern ? pattern : null' }
                        },] }
            ];
            PatternValidator.propDecorators = {
                pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            if (false) { }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var SHARED_FORM_DIRECTIVES = [
                ɵNgNoValidate,
                NgSelectOption,
                ɵNgSelectMultipleOption,
                DefaultValueAccessor,
                NumberValueAccessor,
                RangeValueAccessor,
                CheckboxControlValueAccessor,
                SelectControlValueAccessor,
                SelectMultipleControlValueAccessor,
                RadioControlValueAccessor,
                NgControlStatus,
                NgControlStatusGroup,
                RequiredValidator,
                MinLengthValidator,
                MaxLengthValidator,
                PatternValidator,
                CheckboxRequiredValidator,
                EmailValidator,
            ];
            /** @type {?} */
            var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm, NgFormSelectorWarning];
            /** @type {?} */
            var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
            /**
             * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
             */
            var ɵInternalFormsSharedModule = /** @class */ (function () {
                function ɵInternalFormsSharedModule() {
                }
                return ɵInternalFormsSharedModule;
            }());
            ɵInternalFormsSharedModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: SHARED_FORM_DIRECTIVES,
                            exports: SHARED_FORM_DIRECTIVES,
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} options
             * @return {?}
             */
            function isAbstractControlOptions(options) {
                return (( /** @type {?} */(options))).asyncValidators !== undefined ||
                    (( /** @type {?} */(options))).validators !== undefined ||
                    (( /** @type {?} */(options))).updateOn !== undefined;
            }
            /**
             * \@description
             * Creates an `AbstractControl` from a user-specified configuration.
             *
             * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
             * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
             * forms.
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var FormBuilder = /** @class */ (function () {
                function FormBuilder() {
                }
                /**
                 * \@description
                 * Construct a new `FormGroup` instance.
                 *
                 * @param {?} controlsConfig A collection of child controls. The key for each child is the name
                 * under which it is registered.
                 *
                 * @param {?=} options Configuration options object for the `FormGroup`. The object can
                 * have two shapes:
                 *
                 * 1) `AbstractControlOptions` object (preferred), which consists of:
                 * * `validators`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidators`: A single async validator or array of async validator functions
                 * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
                 * submit')
                 *
                 * 2) Legacy configuration object, which consists of:
                 * * `validator`: A synchronous validator function, or an array of validator functions
                 * * `asyncValidator`: A single async validator or array of async validator functions
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.group = function (controlsConfig, options) {
                    if (options === void 0) { options = null; }
                    /** @type {?} */
                    var controls = this._reduceControls(controlsConfig);
                    /** @type {?} */
                    var validators = null;
                    /** @type {?} */
                    var asyncValidators = null;
                    /** @type {?} */
                    var updateOn = undefined;
                    if (options != null) {
                        if (isAbstractControlOptions(options)) {
                            // `options` are `AbstractControlOptions`
                            validators = options.validators != null ? options.validators : null;
                            asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                            updateOn = options.updateOn != null ? options.updateOn : undefined;
                        }
                        else {
                            // `options` are legacy form group options
                            validators = options['validator'] != null ? options['validator'] : null;
                            asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
                        }
                    }
                    return new FormGroup(controls, { asyncValidators: asyncValidators, updateOn: updateOn, validators: validators });
                };
                /**
                 * \@description
                 * Construct a new `FormControl` with the given state, validators and options.
                 *
                 * \@usageNotes
                 *
                 * ### Initialize a control as disabled
                 *
                 * The following example returns a control with an initial value in a disabled state.
                 *
                 * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
                 * </code-example>
                 * @param {?} formState Initializes the control with an initial state value, or
                 * with an object that contains both a value and a disabled status.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 *
                 * @return {?}
                 */
                FormBuilder.prototype.control = function (formState, validatorOrOpts, asyncValidator) {
                    return new FormControl(formState, validatorOrOpts, asyncValidator);
                };
                /**
                 * Constructs a new `FormArray` from the given array of configurations,
                 * validators and options.
                 *
                 * @param {?} controlsConfig An array of child controls or control configs. Each
                 * child control is given an index when it is registered.
                 *
                 * @param {?=} validatorOrOpts A synchronous validator function, or an array of
                 * such functions, or an `AbstractControlOptions` object that contains
                 * validation functions and a validation trigger.
                 *
                 * @param {?=} asyncValidator A single async validator or array of async validator
                 * functions.
                 * @return {?}
                 */
                FormBuilder.prototype.array = function (controlsConfig, validatorOrOpts, asyncValidator) {
                    var _this = this;
                    /** @type {?} */
                    var controls = controlsConfig.map(( /**
                     * @param {?} c
                     * @return {?}
                     */function (/**
                     * @param {?} c
                     * @return {?}
                     */ c) { return _this._createControl(c); }));
                    return new FormArray(controls, validatorOrOpts, asyncValidator);
                };
                /**
                 * \@internal
                 * @param {?} controlsConfig
                 * @return {?}
                 */
                FormBuilder.prototype._reduceControls = function (controlsConfig) {
                    var _this = this;
                    /** @type {?} */
                    var controls = {};
                    Object.keys(controlsConfig).forEach(( /**
                     * @param {?} controlName
                     * @return {?}
                     */function (/**
                     * @param {?} controlName
                     * @return {?}
                     */ controlName) {
                        controls[controlName] = _this._createControl(controlsConfig[controlName]);
                    }));
                    return controls;
                };
                /**
                 * \@internal
                 * @param {?} controlConfig
                 * @return {?}
                 */
                FormBuilder.prototype._createControl = function (controlConfig) {
                    if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
                        controlConfig instanceof FormArray) {
                        return controlConfig;
                    }
                    else if (Array.isArray(controlConfig)) {
                        /** @type {?} */
                        var value = controlConfig[0];
                        /** @type {?} */
                        var validator = controlConfig.length > 1 ? controlConfig[1] : null;
                        /** @type {?} */
                        var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
                        return this.control(value, validator, asyncValidator);
                    }
                    else {
                        return this.control(controlConfig);
                    }
                };
                return FormBuilder;
            }());
            FormBuilder.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * \@publicApi
             * @type {?}
             */
            var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.14');
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Exports the required providers and directives for template-driven forms,
             * making them available for import by NgModules that import this module.
             *
             * @see [Forms Guide](/guide/forms)
             *
             * \@publicApi
             */
            var FormsModule = /** @class */ (function () {
                function FormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the template-driven forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnDeprecatedNgFormSelector` Configures when to emit a warning when the deprecated
                 * `ngForm` selector is used.
                 * @return {?}
                 */
                FormsModule.withConfig = function (opts) {
                    return {
                        ngModule: FormsModule,
                        providers: [{ provide: NG_FORM_SELECTOR_WARNING, useValue: opts.warnOnDeprecatedNgFormSelector }]
                    };
                };
                return FormsModule;
            }());
            FormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                            providers: [RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * Exports the required infrastructure and directives for reactive forms,
             * making them available for import by NgModules that import this module.
             * @see [Forms](guide/reactive-forms)
             *
             * @see [Reactive Forms Guide](/guide/reactive-forms)
             *
             * \@publicApi
             */
            var ReactiveFormsModule = /** @class */ (function () {
                function ReactiveFormsModule() {
                }
                /**
                 * \@description
                 * Provides options for configuring the reactive forms module.
                 *
                 * @param {?} opts An object of configuration options
                 * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
                 * binding is used with reactive form directives.
                 * @return {?}
                 */
                ReactiveFormsModule.withConfig = function (opts) {
                    return {
                        ngModule: ReactiveFormsModule,
                        providers: [{
                                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                                useValue: opts.warnOnNgModelWithFormControl
                            }]
                    };
                };
                return ReactiveFormsModule;
            }());
            ReactiveFormsModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                            providers: [FormBuilder, RadioControlRegistry],
                            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                        },] }
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=forms.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-heading\">\n  <div class=\"c-container\">\n    <div class=\"un-heading-logo\">\n      <a routerLink=\"/\"><img src=\"assets/img/logo/wide.png\"/></a>\n    </div>\n    <nav class=\"un-heading-menu\">\n      <a [routerLink]=\"'/' + n.link\" class=\"un-heading-menu__item\" *ngFor=\"let n of menu\">{{ n.text }}</a>\n      <a (click)=\"openContacts()\" class=\"un-heading-menu__item\">Контакти</a>\n      <div class=\"un-heading-contacts\" hidden [hidden]=\"!contactsOpen\" #contacts>\n        <ng-container *ngFor=\"let contact of contactList\">\n          <ng-container *ngTemplateOutlet=\"contactEntry; context: {e: contact}\"></ng-container>\n        </ng-container>\n      </div>\n    </nav>\n    <div class=\"un-heading-search\">\n      <a class=\"un-heading-search__btn\" (click)=\"searchActive = true\">\n        <i class=\"material-icons-outlined\">search</i>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"un-search\" *ngIf=\"searchActive\">\n  <div class=\"c-container\">\n    <div class=\"un-search-field\">\n      <input [(ngModel)]=\"searchQuery\"\n             (ngModelChange)=\"search($event)\"\n             placeholder=\"Введіть пошуковий запит\"\n             autofocus>\n      <div class=\"un-search-close\" (click)=\"disableSearch()\"><i class=\"material-icons\">close</i></div>\n    </div>\n    <div class=\"un-search-content\">\n      <div class=\"un-search-content-results\">\n        <div class=\"un-search-content-results-type\" *ngFor=\"let type of searchTypes\">\n          <div class=\"un-search-content-results-type__title\">{{ type.group_display }}</div>\n          <div class=\"un-search-content-results-type__content\" [id]=\"'restype_'+type.id\">\n            <ng-container *ngFor=\"let r of results[type.id]\">\n              <ng-container *ngIf=\"type.id === 'page'\">\n                <ng-container *ngTemplateOutlet=\"pageResult; context: { e: r }\"></ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"type.id === 'teacher'\">\n                <ng-container *ngTemplateOutlet=\"teacherResult; context: { e: r }\"></ng-container>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #pageResult let-record=\"e\">\n  <div class=\"c-tile un-search-result un-search-result--page\">\n    <div class=\"un-search-result__title\">{{ record.reference.display }}</div>\n    <a class=\"un-search-result__goto\" [routerLink]=\"record.reference.url\">Перейти</a>\n  </div>\n</ng-template>\n<ng-template #teacherResult let-record=\"e\">\n  <div class=\"c-tile un-search-result un-search-result--page\">\n    <div class=\"un-search-result__title\">\n      {{ record.reference.surname }} {{ record.reference.first_name }} {{ record.reference.last_name }}\n    </div>\n    <a class=\"un-search-result__goto\" routerLink=\"/employee\">Детальніше</a>\n  </div>\n</ng-template>\n\n<ng-template #contactEntry let-contact=\"e\">\n  <div class=\"un-heading-contact\">\n    <i class=\"un-heading-contact__icon material-icons\">{{ contact.icon }}</i>\n    <span class=\"un-heading-contact__text\">{{ contact.text }}</span>\n    <a class=\"un-heading-contact__goto\" [href]=\"contact.url\"><i class=\"material-icons\">arrow_forward</i></a>\n  </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.html": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.html ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-landing-block\">\n  <div class=\"un-landing-block-heading\">\n    <div class=\"un-landing-block__title\">{{ text }}</div>\n    <a class=\"un-landing-block__action\" *ngIf=\"actionLink\" [routerLink]=\"actionLink\">\n      <span class=\"un-landing-block__action-text\">{{ actionText }}</span>\n      <i class=\"material-icons-outlined\">arrow_forward_ios</i>\n    </a>\n  </div>\n  <div class=\"un-landing-block__content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.html": 
        /*!**********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.html ***!
          \**********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-heading\">\n  <div class=\"c-container\">\n    <div class=\"un-heading-logo\">\n      <a routerLink=\"/\"><img src=\"assets/img/logo/wide.png\"/></a>\n    </div>\n    <nav class=\"un-heading-menu\">\n      <a [routerLink]=\"'/' + n.link\" class=\"un-heading-menu__item\" *ngFor=\"let n of menu\">{{ n.text }}</a>\n      <a (click)=\"openContacts()\" class=\"un-heading-menu__item\">Контакти</a>\n      <div class=\"un-heading-contacts\" hidden [hidden]=\"!contactsOpen\" #contacts>\n        <ng-container *ngFor=\"let contact of contactList\">\n          <ng-container *ngTemplateOutlet=\"contactEntry; context: {e: contact}\"></ng-container>\n        </ng-container>\n      </div>\n    </nav>\n    <div class=\"un-heading-search\">\n      <a class=\"un-heading-search__btn\" (click)=\"searchActive = true\">\n        <i class=\"material-icons-outlined\">search</i>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"un-search\" *ngIf=\"searchActive\">\n  <div class=\"c-container\">\n    <div class=\"un-search-field\">\n      <input [(ngModel)]=\"searchQuery\"\n             (ngModelChange)=\"search($event)\"\n             placeholder=\"Введіть пошуковий запит\"\n             autofocus>\n      <div class=\"un-search-close\" (click)=\"disableSearch()\"><i class=\"material-icons\">close</i></div>\n    </div>\n    <div class=\"un-search-content\">\n      <div class=\"un-search-content-results\">\n        <div class=\"un-search-content-results-type\" *ngFor=\"let type of searchTypes\">\n          <div class=\"un-search-content-results-type__title\">{{ type.group_display }}</div>\n          <div class=\"un-search-content-results-type__content\" [id]=\"'restype_'+type.id\">\n            <ng-container *ngFor=\"let r of results[type.id]\">\n              <ng-container *ngIf=\"type.id === 'page'\">\n                <ng-container *ngTemplateOutlet=\"pageResult; context: { e: r }\"></ng-container>\n              </ng-container>\n              <ng-container *ngIf=\"type.id === 'teacher'\">\n                <ng-container *ngTemplateOutlet=\"teacherResult; context: { e: r }\"></ng-container>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #pageResult let-record=\"e\">\n  <div class=\"c-tile un-search-result un-search-result--page\">\n    <div class=\"un-search-result__title\">{{ record.reference.display }}</div>\n    <a class=\"un-search-result__goto\" [routerLink]=\"record.reference.url\">Перейти</a>\n  </div>\n</ng-template>\n<ng-template #teacherResult let-record=\"e\">\n  <div class=\"c-tile un-search-result un-search-result--page\">\n    <div class=\"un-search-result__title\">\n      {{ record.reference.surname }} {{ record.reference.first_name }} {{ record.reference.last_name }}\n    </div>\n    <a class=\"un-search-result__goto\" routerLink=\"/employee\">Детальніше</a>\n  </div>\n</ng-template>\n\n<ng-template #contactEntry let-contact=\"e\">\n  <div class=\"un-heading-contact\">\n    <i class=\"un-heading-contact__icon material-icons\">{{ contact.icon }}</i>\n    <span class=\"un-heading-contact__text\">{{ contact.text }}</span>\n    <a class=\"un-heading-contact__goto\" [href]=\"contact.url\"><i class=\"material-icons\">arrow_forward</i></a>\n  </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/general-layout/general-layout.component.html": 
        /*!******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/general-layout/general-layout.component.html ***!
          \******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!device.isMobile\">\r\n  <app-desktop-heading class=\"un-control\"></app-desktop-heading>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"device.isMobile\">\r\n  <app-mobile-heading class=\"un-control\"></app-mobile-heading>\r\n</ng-container>\r\n\r\n<div class=\"un-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/employee-page/employee-page.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/employee-page/employee-page.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-employee\">\n  <div class=\"p-page p-page--layout-sb\">\n    <div class=\"p-page-sidebar\">\n      <div class=\"p-page-title\">\n        <span>Науково-педагогічні працівники</span>\n      </div>\n    </div>\n    <div class=\"p-page-content c-container\" #teacherList>\n      <ng-container *ngFor=\"let e of teachers; let i = index\">\n        <ng-container *ngTemplateOutlet=\"singleEmployee; context: {e: e, i: i}\"></ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #singleEmployee let-employee=\"e\" let-i=\"i\">\n  <div class=\"un-employee-entry c-tile\" [attr.data-teacher-id]=\"i\">\n    <div class=\"un-employee-entry__avatar\">\n      <img [src]=\"employee.photo\">\n    </div>\n    <div class=\"un-employee-entry__content\">\n      <div class=\"un-employee-entry-info\">\n        <div class=\"un-employee-entry-info__name\">\n          {{ employee.surname }} {{ employee.first_name }} {{ employee.last_name }}\n        </div>\n        <div class=\"un-employee-entry-info__since\">\n          на кафедрі з {{ employee.since }} року\n        </div>\n      </div>\n      <div class=\"un-employee-entry-description\" [innerHTML]=\"employee.description\">\n      </div>\n    </div>\n  </div>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/healing-page/healing-page.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/healing-page/healing-page.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-learning\">\n  <div class=\"p-page p-page--layout-sb p-page--general\">\n    <div class=\"p-page-sidebar\">\n      <div class=\"p-page-title\">\n        <span>Лікувальна робота</span>\n      </div>\n    </div>\n    <div class=\"p-page-content c-container\">\n      <div class=\"p-cf p-paragraph\">\n        <img class=\"p-image p-image--right\" src=\"https://nmapo.edu.ua/images/FakPed/KafDitHirur/26_12_17-6.jpg\"/>\n        <div class=\"p-paragraph\">\n            <b>Клінічними базами кафедри є:</b>\n            Київські міські дитячі клінічні лікарні №1 і №2, хірургічне відділення Інституту\n            ПАГ, центральна дитяча поліклініка Деснянського району м. Києва та хірургічне відділення Житомирської\n            обласної\n            дитячої клінічної лікарні, яке є філіалом кафедри дитячої хірургії академії\n        </div>\n        <div class=\"p-paragraph\">\n            <b>Викладачі кафедри</b> – лікарі\n            високої кваліфікації, які надають спеціалізовану медичну допомогу дітям з вродженою і набутою хірургічною\n            патологією, в ургентному і плановому порядку, в умовах стаціонару і амбулаторно. Вони володіють сучасними\n            методами діагностики і лікування в дитячій хірургії та впроваджують ці методики через своїх учнів у всіх\n            регіонах України.\n        </div>\n      </div>\n      <div class=\"p-cf p-paragraph\">\n        <img class=\"p-image p-image--right\" src=\"https://nmapo.edu.ua/images/FakPed/KafDitHirur/26_12_17-6.jpg\"/>\n        <div class=\"p-paragraph\">\n          На кафедрі дитячої хірургії НМАПО успішно лікуються хворі з такою складною патологією як хвороба Шпренгеля.\n          Дане захворювання досить складне для діагностики у дітей молодшої вікової групи, в якій найбільший відсоток\n          позитивних результатів лікування. Так, часто високе стояння лопатки розцінюється як прояв сколіозу,\n          порушення постави і т.д. В якості ілюстрації наводимо знімок хворої, у якої хворобу Шпренгеля розцінювали\n          як остеому лопатки. Більшість хірургів вважає, що оперативне лікування захворювання у дітей\n          старше 10-12 років малоефективне. Наш досвід показує, що операція дозволяє поліпшити обсяг рухів в плечовому\n          суглобі і досягти позитивних результатів у формуванні постави. На знімках представлений результат\n          оперативного лікування хвороби Шпренгеля у хворої віком 17 років.\n        </div>\n        <div class=\"p-paragraph\">\n          Ми займаємо одну з лідируючих позицій в світі за рішенням проблеми лікування деформацій кінцівок у хворих\n          з церебральним паралічем. Проводиться корекція деформацій верхніх і нижніх кінцівок. З 1993 року професором\n          Даниловим А.А. проведено більше 2500 успішних операцій хворим з ДЦП. На знімку показаний результат\n          оперативного лікування пронаційних деформацій стоп у хворого зі спастичною диплегією.\n        </div>\n        <div class=\"p-paragraph\">\n          Лікування лійкоподібної деформації грудної клітки являє собою складну проблему у зв'язку з великою\n          кількістю рецидивів і ускладнень в процесі проведення її хірургічної корекції. Застосування консервативних\n          методів у вигляді вакуумного дзвону дозволяє досягти позитивних результатів у 25-30% випадків та у дітей\n          молодшої вікової групи. Ефективним є метод Насса, який дозволяє скоротити час операції і кількість рецидивів.\n          На кафедрі дитячої хірургії професором Даниловим А.А. успішно застосовується даний метод з доповненням\n          операції власними елементами . На знімках показані етапи операції із застосуванням відеоасистенціі.\n        </div>\n        <div class=\"p-paragraph\">\n          На кафедрі виконуються практично всі і види оперативних втручань на органах черевної порожнини, заочеревинного\n          простору, кістково-м’язовій системі, в тому числі дітям з органічними ураженнями центральної нервової системи.\n          Широко застосовується ендовідеоскопічна техніка та технологія електрозварювання живих тканин. Щорічно\n          співробітники кафедри на клінічних базах виконують більше 400 операцій, з яких приблизно 75% високого ступеня\n          тяжкості.\n        </div>\n      </div>\n      <div class=\"p-cf\">\n        <img class=\"p-image\" src=\"https://nmapo.edu.ua/images/FakPed/KafDitHirur/26_12_17-7.jpg\"/>\n        <div class=\"p-paragraph\">\n          Значну частину пацієнтів складають діти із запальними захворюваннями м’яких тканин (флегмони, лімфаденіти,\n          абсцеси тощо) та кістковою хірургічною інфекцією (остеомієліти). Особливу увагу ми звертаємо на дітей раннього\n          віку, тому що ця група пацієнтів є потенційно небезпечною щодо розвитку сепсису.\n        </div>\n        <div class=\"p-paragraph\">\n          Вся лікувальна, організаційна та наукова робота співробітників кафедри має за мету підготовку\n          висококваліфікованих кадрів дитячої хірургії. На кафедрі проходять підготовку не тільки дитячі хірурги, але і\n          лікарі суміжних спеціальностей, клінічні ординатори, аспіранти, які мають стати професіоналами і в самостійній\n          практичній роботі надавати сучасну діагностичну і лікувальну допомогу дітям з хірургічною патологією на\n          європейському рівні.\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/landing-page/landing-page.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/landing-page/landing-page.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-landing\">\n  <div class=\"c-container\">\n    <ng-container *ngTemplateOutlet=\"aboutRef\"></ng-container>\n<!--    <ng-container *ngTemplateOutlet=\"teachersListRef\"></ng-container>-->\n  </div>\n</div>\n\n<ng-template #aboutRef>\n  <div class=\"un-about\">\n    <div class=\"un-about__title\">Кафедра дитячої хірургії НМАПО ім. П.Л. Шупика</div>\n    <div class=\"un-image-wrap un-image-wrap--right\">\n      <img class=\"un-image-wrap__image\" src=\"assets/img/about/employee.jfif\"/>\n      <div class=\"un-image-wrap__text\">\n        багатофункціональний учбовий підрозділ академії, де проводиться\n        навчання не тільки дитячих хірургів, а також сімейних лікарів, педіатрів, лікарів-реабілітологів,\n        ортопедів-травматологів, неврологів. В деяких галузях медицини кафедра є опініон-лідером. Так на кафедрі вперше в\n        світі запропоновані оперативні втручання на опорно-руховій системі у хворих з ДЦП, наслідками родового паралічу\n        верхньої кінцівки, деформаціями грудної клітки.\n      </div>\n    </div>\n    <div class=\"un-image-wrap un-image-wrap--right\">\n      <div class=\"un-image-wrap__images\">\n        <img class=\"un-image-wrap__image\" src=\"assets/img/about/operation.jfif\"/>\n        <img class=\"un-image-wrap__image\" src=\"assets/img/about/chest.jfif\"/>\n      </div>\n      <div class=\"un-image-wrap__text\">\n        Широко застосовуються оперативні втручання та навчання методикам\n        лікування пацієнтів з вродженими вадами розвитку шлунково-кишкового тракту. При навчанні курсантів використовуються,\n        поряд з лекціями і семінарами, показові операції та майстер-класи. Враховуючи назрілу необхідність навчання лікарів\n        різних спеціальностей навичкам реабілітації після різноманітних хірургічних втручань, підготовлені програми з\n        проблематики реабілітації дітей з патологією шлунково-кишкового тракту та опорно-рухового апарату.\n        <p>\n          Запропоновані реабілітаційні заходи направлені на профілактику спайкової хвороби, рецидивів контрактур суглобів у хворих з\n          травмами і захворюваннями ЦНС. З 2018 р. виконуються оперативні втручання на грудній клітці при лійкоподібній\n          деформації.\n        </p>\n      </div>\n    </div>\n    <div class=\"un-image-row\">\n      <div class=\"un-image-row__control\" (click)=\"scroll(true)\">\n        <i class=\"material-icons-outlined\">arrow_back_ios</i>\n      </div>\n      <div class=\"un-image-row__inner\" #scrollBox>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/1.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/2.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/3.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/4.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/5.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/6.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/7.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/8.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/9.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/10.jfif\"/>\n        <img class=\"un-image-row__image\" src=\"assets/img/about/list/11.jfif\"/>\n      </div>\n      <div class=\"un-image-row__control\" (click)=\"scroll(false)\">\n        <i class=\"material-icons-outlined\">arrow_forward_ios</i>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #teachersListRef>\n  <ng-container *ngIf=\"!device.isMobile || true\">\n    <app-desktop-landing-carousel text=\"Працівники\"\n                                  actionText=\"Список працівників\"\n                                  actionLink=\"/employee\">\n      <div class=\"un-landing-teacher-list\">\n        <div class=\"un-landing-teacher\" *ngFor=\"let teacher of teachers\">\n          <div class=\"un-landing-teacher-image\">\n            <img [src]=\"teacher.photo\"/>\n          </div>\n          <div class=\"un-landing-teacher-content\">\n            <div\n              class=\"un-landing-teacher__name\">{{ teacher.surname }} {{ teacher.first_name }} {{ teacher.last_name }}</div>\n            <div class=\"un-landing-teacher__type\">на кафедрі з {{ teacher.since }}</div>\n          </div>\n        </div>\n      </div>\n    </app-desktop-landing-carousel>\n  </ng-container>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/learning-page/learning-page.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/learning-page/learning-page.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-learning\">\n  <div class=\"p-page p-page--layout-sb p-page--general\">\n    <div class=\"p-page-sidebar\">\n      <div class=\"p-page-title\">\n        <span>Навчально-методична робота</span>\n      </div>\n    </div>\n    <div class=\"p-page-content c-container\">\n      <div class=\"p-paragraph\">\n        Кафедра дитячої хірургії НМАПО ім. П.Л. Шупика організована у 1980 році. За минулий період на кафедрі пройшло навчання більше 20000 дитячих хірургів,\n        ортопедів-травматологів та лікарів інших спеціальностей. Випускники кафедри працюють в країнах Близького Сходу, Індії, Пакистані і т.д.\n        Найбільшою популярністю серед слухачів користуються лекції та семінари з проблеми лікування деформацій кінцівок у хворих з церебральним паралічем,\n        артрогрипозом, наслідками пологового паралічу, хворобою Блаунта, високим стоянням лопатки - хворобою Шпренгеля, патологією кульшового суглоба.\n        Професор Данилов А.А. займає одну з лідируючих позицій з проблеми лікування деформацій стоп різної етіології. </div>\n        <div class=\"p-paragraph\">\n          Кафедра запрошує лікарів для підвищення кваліфікації як групами, так і в індивідуальному порядку. <br/>\n        Контакти: тел. +380974987202 ел.пошта danilov.alexandr45@gmail.com\n      </div>\n      <div>\n        <b>Цикли спеціалізації:</b> дитяча хірургія\n      </div>\n      <div>\n        <b>Передатестаційний:</b> дитяча хірургія\n      </div>\n      <div>\n        <b>Стажування:</b> дитяча хірургія\n      </div>\n      <div>\n        <b><i>Тематичного удосконалення:</i></b>\n        <ul class=\"p-col-2\">\n          <li>Актуальні питання дитячої хірургії</li>\n          <li>Невідкладні стани в дитячій хірургії</li>\n          <li>Ургентна дитяча хірургія</li>\n          <li>Гнійна хірургічна інфекція у дітей</li>\n          <li>Абдомінальна лапароскопічна хірургія дитячого віку</li>\n          <li>Лікування переломів кісток та пошкодження суглобів в дитячому та підлітковому віці.</li>\n          <li>Хірургічне лікування дітей з ураженнями ЦНС</li>\n          <li>Амбулаторно-поліклінічна хірургія у дітей</li>\n          <li>Проктологія дитячого віку</li>\n          <li>Хірургічні аспекти андрології дитячого віку</li>\n          <li>Вибрані питання дитячої хірургії</li>\n        </ul>\n      </div>\n      <div class=\"p-paragraph\">\n        Можливе навчання на госпрозрахункових засадах на циклах: на всіх циклах, які проводить кафедра.\n      </div>\n      <div class=\"p-paragraph\">\n        <div><b>План проведення циклів на 2020 рік</b></div>\n        <div class=\"p-table p-w--75\">\n          <div class=\"p-table-head\">\n            <div class=\"p-table-col p-table-col--3\">Назва циклу</div>\n            <div class=\"p-table-col\">Термін</div>\n          </div>\n          <div class=\"p-table-body\">\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Невідкладні стани в дитячій хірургії.В.</div>\n              <div class=\"p-table-col p-align--center\">02.01 - 01.02</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Абдомінальна лапароскопічна хірургія дитячого віку</div>\n              <div class=\"p-table-col p-align--center\">15.01. - 13.02.</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Актуальні питання дитячої хірургії</div>\n              <div class=\"p-table-col p-align--center\">02.02 - 05.03</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Ургентна дитяча хірургія</div>\n              <div class=\"p-table-col p-align--center\">06.03 - 04.04</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Абдомінальна лапароскопічна хірургія дитячого віку</div>\n              <div class=\"p-table-col p-align--center\">16.04 - 18.05</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Актуальні питання дитячої хірургії</div>\n              <div class=\"p-table-col p-align--center\">05.04 - 10.05</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Передатестаційний цикл з дитячої хірургії</div>\n              <div class=\"p-table-col p-align--center\">10.05 - 08.06</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">\n                Стажування з дитячої хірургії (для лікарів, що підтверджують звання лікар-спеціаліст)\n              </div>\n              <div class=\"p-table-col p-align--center\">16.05 - 14.06</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Невідкладні стани в дитячій хірургії.В.</div>\n              <div class=\"p-table-col p-align--center\">03.09 - 02.10</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Абдомінальна лапароскопічна хірургія дитячого віку</div>\n              <div class=\"p-table-col p-align--center\">12.09 - 11.10</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Ургентна дитяча хірургія</div>\n              <div class=\"p-table-col p-align--center\">03.10 - 01.11</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Передатестаційний цикл з дитячої хірургії</div>\n              <div class=\"p-table-col p-align--center\">01.11 - 30.11</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Абдомінальна лапароскопічна хірургія дитячого віку</div>\n              <div class=\"p-table-col p-align--center\">14.11 - 13.12</div>\n            </div>\n            <div class=\"p-table-row\">\n              <div class=\"p-table-col p-table-col--3\">Актуальні питання дитячої хірургії</div>\n              <div class=\"p-table-col p-align--center\">30.11 - 31.12</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/science-page/science-page.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/science-page/science-page.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"un-science\">\n  <div class=\"p-page p-page--layout-sb p-page--general\">\n    <div class=\"p-page-sidebar\">\n      <div class=\"p-page-title\">\n        <span>Наукова робота</span>\n      </div>\n    </div>\n    <div class=\"p-page-content c-container\">\n      <img class=\"p-image p-image--right\" src=\"https://nmapo.edu.ua/images/FakPed/KafDitHirur/26_12_17-8.jpg\">\n      <div class=\"p-paragraph\">\n        На кафедрі виконується НДР за темою:\n        <b>«Розробка комплексних лікувальних програм та вдосконалення методів профілактики ускладненого перебігу\n          хірургічної патології у дітей.»</b>\n      </div>\n      <div class=\"p-paragraph\">\n        Завдяки науковим розробкам співробітниками кафедри отримані 6 патентів, понад 12 авторських свідоцтва,\n        9 нововведень, більш як 20 раціоналізаторських пропозицій.\n      </div>\n      <div class=\"p-paragraph\">\n        До наукової діяльності залучаються клінічні ординатори та лікарі-інтерни за фахом „Дитяча хірургія”, які\n        розробляють індивідуальні науково-дослідні роботи згідно пріоритетних напрямків досліджень кафедри.\n      </div>\n      <div class=\"p-paragraph\">\n        Співробітниками кафедри випускається фаховий журнал «Хірургія дитячого віку».\n        <div>\n          <a class=\"p-attachment\" href=\"https://nmapo.edu.ua/images/FakPed/KafDitHirur/zbirnik_dit_hir.pdf\"\n             target=\"_blank\">\n            <span class=\"p-attachment__type\">pdf</span>\n            Збірник наукових праць \"Сучасні аспекти надання хірургічної допомоги дітям\"\n          </a>\n        </div>\n      </div>\n      <div class=\"p-paragraph\">\n        <b>На сьогодні на кафедрі виконуються дисертації:</b>\n        <ol>\n          <li>\n            Докторські:\n            <ul>\n              <li>Гончар В. В. доцент кафедри, «Хірургічне лікування аноректальних дисфункцій у дітей з патологією\n                невральної\n                трубки».\n              </li>\n              <li>Шевчук Д. С. асистент кафедри, «Лікування нервово-м’язової дисфункції сечового міхура у дітей».</li>\n            </ul>\n          </li>\n          <li>\n            Кандидатські:\n            <ul>\n              <li>Талько М. О. «Лікування деструктивних бактеріальних лімфаденітів та їх ускладнень у дітей».</li>\n              <li>Абдалбари Джэхад «Лікування пронаційних деформацій стоп у дітей з ДЦП».</li>\n            </ul>\n          </li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.less": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.less ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-heading {\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.un-heading .c-container {\n  display: flex;\n  align-items: center;\n}\n.un-heading-logo,\n.un-heading-search {\n  height: 100%;\n  width: 0;\n  flex-grow: 1;\n}\n.un-heading-menu {\n  position: relative;\n  margin: 0 auto;\n}\n.un-heading-menu__item {\n  color: #242424;\n  margin: 0 16px;\n  position: relative;\n}\n.un-heading-menu__item:after {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin: 2px 0 0;\n  height: 2px;\n  background: #0f1914;\n  border-radius: 100px;\n}\n.un-heading-menu__item:hover:after {\n  content: '';\n}\n.un-heading-contacts {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  padding: 12px;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  margin: 20px 0 0;\n}\n.un-heading-contact {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  margin: 8px;\n  border-radius: 4px;\n}\n.un-heading-contact__icon {\n  font-size: 20px;\n  margin: 0 16px 0 0;\n}\n.un-heading-contact__text {\n  margin-right: 16px;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n.un-heading-contact__goto {\n  color: #9d8c5d;\n  margin: 0 0 0 auto;\n}\n.un-heading-contact__goto .material-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  width: 34px;\n  height: 38px;\n}\n.un-heading-contact__goto:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n.un-heading-logo {\n  display: flex;\n  justify-content: flex-start;\n  padding: 8px 0;\n}\n.un-heading-search {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.un-heading-search__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(36, 36, 36, 0.6);\n  height: 80px;\n  width: 88px;\n}\n.un-heading-search__btn:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n.un-search {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #f1eee7;\n  z-index: 10000;\n  -webkit-animation: fadeIn 200ms ease-in-out;\n          animation: fadeIn 200ms ease-in-out;\n  max-height: 100%;\n  overflow: auto;\n}\n.un-search-field {\n  display: flex;\n  align-items: center;\n}\n.un-search-field input {\n  height: 80px;\n  width: 100%;\n  outline: #0000;\n  font-size: 24px;\n  padding: 0 32px;\n  border: none;\n  box-shadow: 0 0 1px 0 rgba(36, 36, 36, 0.05);\n}\n.un-search-close {\n  margin: 0 0 0 36px;\n  line-height: 0;\n  cursor: pointer;\n}\n.un-search-close .material-icons {\n  font-size: 28px;\n  opacity: 0.8;\n}\n.un-search-content-results {\n  margin: 48px 0 0;\n  padding-bottom: 24px;\n}\n.un-search-content-results-type {\n  padding: 40px 0;\n}\n.un-search-content-results-type__title {\n  padding: 0 0 20px 0;\n  font-size: 18px;\n}\n.un-search-content-results-type__content {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -24px;\n}\n.un-search-result {\n  display: flex;\n  align-items: center;\n  margin: 24px;\n  padding: 20px;\n}\n.un-search-result--page,\n.un-search-result--employee {\n  width: calc(50% - 8px * 6);\n}\n.un-search-result__title {\n  font-size: 18px;\n}\n.un-search-result__goto {\n  color: #9d8c5d;\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin: 0 0 0 auto;\n}\n.un-search-result__goto:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9kZXNrdG9wL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC5sZXNzIiwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkIiwic3JjL2FwcC9hcHBzL2Rlc2t0b3AvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9hcHBzL2Rlc2t0b3AvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2dyaWQubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL190b29sdGlwLmxlc3MiLCJzcmMvYXBwL2FwcHMvZGVza3RvcC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvY29tcG9uZW50L2hlYWRpbmcvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9hcHBzL2Rlc2t0b3AvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2dlbmVyYWwubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9wYWdlL19sYXlvdXQtc2IubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvYXBwcy9kZXNrdG9wL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNBWDtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJHQUFBO0FERUY7QUNBQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtIQUFBO0FERUY7QUNDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFGO0FBQ0EsZUFBZTtBRXZDZjtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBRS9DQTtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBQUNBLGdCQUFnQjtBR2hEaEI7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBSGtERjtBRy9DQTtFQUNFO0lBQ0UsZUFBQTtFSGlERjtBQUNGO0FJM0RBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFFQSxpQkFBQTtBSjJERjtBSXpERTtFQUNFLGNBQUE7QUoyREo7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QUE7QVIrU1Y7QVF6U0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBUjBTSjtBUXhTSTs7RUFFRSwwQkFBQTtBUjBTTjtBUXZTSTtFQUNFLGVBQUE7QVJ5U047QVF0U0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FSd1NOO0FRdFNNO0VBQ0Usa0NBQUE7QVJ3U1IiLCJmaWxlIjoic3JjL2FwcC9hcHBzL2Rlc2t0b3AvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSUNPTlMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLyoqIFZBUklBQkxFUyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiogQ09NUE9ORU5UUyAqL1xuLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbn1cbi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAxNnB4IDAgMDtcbn1cbi5jLXRvb2x3aW5kb3ctLXBhcmVudDpob3ZlciAuYy10b29sd2luZG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gIH1cbn1cbi8qKiBQQUdFICovXG4ucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnAtcGFnZS0tZ2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIuOTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLnAtcGFnZSAucC1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNDhweCAyNHB4IDA7XG4gIHdpZHRoOiAyNSU7XG59XG4ucC1wYWdlIC5wLWltYWdlLS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMjRweCA0OHB4O1xufVxuLnAtcGFnZSAucC1pbWFnZS5wLXctLTEwMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucC1wYWdlIC5wLXctLTMwIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNTAge1xuICB3aWR0aDogNTAlO1xufVxuLnAtcGFnZSAucC13LS03NSB7XG4gIHdpZHRoOiA3NSU7XG59XG4ucC1wYWdlIC5wLXctLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGgge1xuICBtYXJnaW46IDJlbSAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnAtcGFnZSBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5ZDhjNWQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudDpob3ZlciB7XG4gIGNvbG9yOiAjOGQ3ZTU0O1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMCA4cHggMCAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG59XG4ucC1wYWdlIC5wLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgLnAtY29sLTIge1xuICBjb2x1bW5zOiAyO1xufVxuLnAtcGFnZSAucC1jb2wtMyB7XG4gIGNvbHVtbnM6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMTBweCAxcHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1hcmdpbjogMCAwIDE2cHggMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sIHtcbiAgd2lkdGg6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTIge1xuICBmbGV4LWdyb3c6IDI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMyB7XG4gIGZsZXgtZ3JvdzogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS00IHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnAtcGFnZSAucC1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnAtcGFnZSAucC1jZiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgdWwgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSB1bCArIC5wLXBhZ2Ugb2wsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMnB4IDhweDtcbiAgfVxuICAucC1wYWdlIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sLTIsXG4gIC5wLXBhZ2UgLnAtY29sLTMge1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbiAgLnAtcGFnZSAucC13LS0zMCxcbiAgLnAtcGFnZSAucC13LS01MCxcbiAgLnAtcGFnZSAucC13LS03NSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAyNHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdG9wOiAwO1xuICB9XG59XG4ucC1wYWdlLS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjZlZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIDAgMCAtODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICB6LWluZGV4OiAwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICB9XG59XG4udW4taGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWY2ZWY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDRweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi51bi1oZWFkaW5nIC5jLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW4taGVhZGluZy1sb2dvLFxuLnVuLWhlYWRpbmctc2VhcmNoIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgZmxleC1ncm93OiAxO1xufVxuLnVuLWhlYWRpbmctbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udW4taGVhZGluZy1tZW51X19pdGVtIHtcbiAgY29sb3I6ICMyNDI0MjQ7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udW4taGVhZGluZy1tZW51X19pdGVtOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDJweCAwIDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxOTE0O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi51bi1oZWFkaW5nLW1lbnVfX2l0ZW06aG92ZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbn1cbi51bi1oZWFkaW5nLWNvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCA0cHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cbi51bi1oZWFkaW5nLWNvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4udW4taGVhZGluZy1jb250YWN0X19pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDAgMTZweCAwIDA7XG59XG4udW4taGVhZGluZy1jb250YWN0X190ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi51bi1oZWFkaW5nLWNvbnRhY3RfX2dvdG8ge1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLnVuLWhlYWRpbmctY29udGFjdF9fZ290byAubWF0ZXJpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLnVuLWhlYWRpbmctY29udGFjdF9fZ290bzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG59XG4udW4taGVhZGluZy1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi51bi1oZWFkaW5nLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW4taGVhZGluZy1zZWFyY2hfX2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjYpO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4OHB4O1xufVxuLnVuLWhlYWRpbmctc2VhcmNoX19idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xufVxuLnVuLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjFlZWU3O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLnVuLXNlYXJjaC1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW4tc2VhcmNoLWZpZWxkIGlucHV0IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogIzAwMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xufVxuLnVuLXNlYXJjaC1jbG9zZSB7XG4gIG1hcmdpbjogMCAwIDAgMzZweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51bi1zZWFyY2gtY2xvc2UgLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG4udW4tc2VhcmNoLWNvbnRlbnQtcmVzdWx0cyB7XG4gIG1hcmdpbjogNDhweCAwIDA7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuLnVuLXNlYXJjaC1jb250ZW50LXJlc3VsdHMtdHlwZSB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi51bi1zZWFyY2gtY29udGVudC1yZXN1bHRzLXR5cGVfX3RpdGxlIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVuLXNlYXJjaC1jb250ZW50LXJlc3VsdHMtdHlwZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAtMjRweDtcbn1cbi51bi1zZWFyY2gtcmVzdWx0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnVuLXNlYXJjaC1yZXN1bHQtLXBhZ2UsXG4udW4tc2VhcmNoLXJlc3VsdC0tZW1wbG95ZWUge1xuICB3aWR0aDogY2FsYyg1MCUgLSA4cHggKiA2KTtcbn1cbi51bi1zZWFyY2gtcmVzdWx0X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi51bi1zZWFyY2gtcmVzdWx0X19nb3RvIHtcbiAgY29sb3I6ICM5ZDhjNWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cbi51bi1zZWFyY2gtcmVzdWx0X19nb3RvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbiIsIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogQGNvbnRhaW5lci13aWR0aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgQG1haW4tZ3JpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCBAbWFpbi1ncmlkICogMS41O1xuICB9XG59XG4iLCIuYy10b29sd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuXG4gIHBhZGRpbmc6IEBzZWNvbmRhcnktZ3JpZCAqIDQgMCAwO1xuXG4gICYtLXBhcmVudDpob3ZlciAmIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiLmMtdGlsZSB7XG4gIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgMCBAYmxhY2stYTA1O1xuICBiYWNrZ3JvdW5kOiBAd2hpdGUtYTEwMDtcbiAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDU7XG4gIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLXRpbGUge1xuICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA0IEBtYWluLWdyaWQgKiAyO1xuICB9XG59XG4iLCIucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xuXG4gICYtLWdlbmVyYWwge1xuICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDI7XG4gICAgbGluZS1oZWlnaHQ6IDIuOTtcblxuICAgIC5wLXBhZ2UtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogOCAwO1xuICAgIH1cbiAgfVxuXG4gIC5wLWltYWdlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgQG1haW4tZ3JpZCAqIDYgQG1haW4tZ3JpZCAqIDMgMDtcblxuICAgIHdpZHRoOiAyNSU7XG5cbiAgICAmLS1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyBAbWFpbi1ncmlkICogNjtcbiAgICB9XG5cbiAgICAmLnAtdy0tMTAwIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5wLXcge1xuICAgICYtLTMwIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuXG4gICAgJi0tNTAge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAmLS03NSB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cblxuICAgICYtLTEwMCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAucC1wYXJhZ3JhcGgge1xuICAgIG1hcmdpbjogMmVtIDA7XG5cbiAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIGIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAucC1hdHRhY2htZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IEBtYWluLWNvbG9yLWRhcms7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogZGFya2VuKEBtYWluLWNvbG9yLWRhcmssIDUlKTtcbiAgICB9XG5cbiAgICAmX190eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMztcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMCBAbWFpbi1ncmlkIDAgQHNlY29uZGFyeS1ncmlkICogNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzAwMDtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICAgICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgICAgICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IEBtYWluLWdyaWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYtMiB7XG4gICAgICBjb2x1bW5zOiAyO1xuICAgIH1cblxuICAgICYtMyB7XG4gICAgICBjb2x1bW5zOiAzO1xuICAgIH1cbiAgfVxuXG4gIC5wLXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBAd2hpdGUtYTEwMDtcbiAgICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgYm94LXNoYWRvdzogMCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAvIDQgQHNlY29uZGFyeS1ncmlkICogMi41IEBzZWNvbmRhcnktZ3JpZCAvIDQgQGJsYWNrLWEwNTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbjogQG1haW4tZ3JpZCAqIDMgMCAwO1xuXG4gICAgJi1oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiBAYmxhY2stYTA1O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDIgMDtcbiAgICB9XG5cbiAgICAmLWNvbCB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIHBhZGRpbmc6IEBzZWNvbmRhcnktZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDM7XG5cbiAgICAgICYtLTIge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICB9XG5cbiAgICAgICYtLTMge1xuICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICB9XG5cbiAgICAgICYtLTQge1xuICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgLnAtY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAucC1hbGlnbiB7XG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAmLS1yaWdodCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAucC1jZiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICB9XG5cbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZSB7XG4gICAgJi0tZ2VuZXJhbCB7XG4gICAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWNvbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbHVtbi1nYXA6IEBtYWluLWdyaWQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmLTIsXG4gICAgICAmLTMge1xuICAgICAgICBjb2x1bW5zOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLXcge1xuICAgICAgJi0tMzAsXG4gICAgICAmLS01MCxcbiAgICAgICYtLTc1IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtaW1hZ2Uge1xuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAzIDAgIWltcG9ydGFudDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnAtYXR0YWNobWVudCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogQG1haW4tZ3JpZCAwIDA7XG5cbiAgICAgICZfX3R5cGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkByOiB+Jy5wLXBhZ2UnO1xuXG5Ae3J9LS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBAbWFpbi1jb2xvci1saWdodDtcbiAgICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkICogNSAwIEBibGFjay1hMDU7XG4gICAgbWF4LXdpZHRoOiBAbWFpbi1ncmlkICogMTA7XG4gICAgbWluLXdpZHRoOiBAbWFpbi1ncmlkICogMTA7XG4gICAgbWFyZ2luOiAwIDAgMCAtQG1haW4tZ3JpZCAqIDEwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChAbWFpbi1ncmlkICogMTApO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICBAe3J9LXNpZGViYXIge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgQHtyfS10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IEBtYWluLWdyaWQgKiAzO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzLjU7XG4gICAgICBjb2xvcjogQGJsYWNrLWE5MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogQHNlY29uZGFyeS1ncmlkO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAe3J9LWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgQHtyfS0tbGF5b3V0LXNiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogMiAwO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4taGVpZ2h0OiBAbWFpbi1ncmlkICogMTA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgQHtyfS1zaWRlYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBtYWluLWdyaWQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBAbWFpbi1ncmlkO1xuXG4gICAgICBAe3J9LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd0aGVtZSc7XG5cbi51bi1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuXG4gIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yLWxpZ2h0O1xuICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkICogNSBAc2Vjb25kYXJ5LWdyaWQgQGJsYWNrLWEwNTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLmMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmLWxvZ28sXG4gICYtc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbiAgJi1tZW51IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIGNvbG9yOiBAYmxhY2stYTEwMDtcbiAgICAgIG1hcmdpbjogMCBAbWFpbi1ncmlkICogMjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiBAc2Vjb25kYXJ5LWdyaWQgLyAyIDAgMDtcbiAgICAgICAgaGVpZ2h0OiBAc2Vjb25kYXJ5LWdyaWQgLyAyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTUsIDI1LCAyMCwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi1jb250YWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBAd2hpdGUtYTEwMDtcbiAgICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiAzO1xuICAgIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA1IEBzZWNvbmRhcnktZ3JpZCBAYmxhY2stYTA1O1xuICAgIG1hcmdpbjogQHNlY29uZGFyeS1ncmlkICogNSAwIDA7XG4gIH1cblxuICAmLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIEBzZWNvbmRhcnktZ3JpZCAqIDIuNTtcbiAgICBtYXJnaW46IEBtYWluLWdyaWQ7XG4gICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuXG4gICAgJl9faWNvbiB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDU7XG4gICAgICBtYXJnaW46IDAgQG1haW4tZ3JpZCAqIDIgMCAwO1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBAbWFpbi1ncmlkICogMjtcbiAgICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuICAgIH1cblxuICAgICZfX2dvdG8ge1xuICAgICAgY29sb3I6IEBtYWluLWNvbG9yLWRhcms7XG4gICAgICBtYXJnaW46IDAgMCAwIGF1dG87XG5cbiAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDU7XG4gICAgICAgIHdpZHRoOiBAc2Vjb25kYXJ5LWdyaWQgKiA4LjU7XG4gICAgICAgIGhlaWdodDogQHNlY29uZGFyeS1ncmlkICogOS41O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgMDtcbiAgfVxuXG4gICYtc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICZfX2J0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IEBibGFjay1hNjA7XG4gICAgICBoZWlnaHQ6IEBtYWluLWdyaWQgKiAxMDtcbiAgICAgIHdpZHRoOiBAbWFpbi1ncmlkICogMTE7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYmxhY2stYTA1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udW4tc2VhcmNoIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gICYtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdXRsaW5lOiAjMDAwMDtcbiAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDM7XG4gICAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgKiA0O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAwIEBibGFjay1hMDU7XG4gICAgfVxuICB9XG5cbiAgJi1jbG9zZSB7XG4gICAgbWFyZ2luOiAwIDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA5O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDc7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgICYtcmVzdWx0cyB7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgKiA2IDAgMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBAbWFpbi1ncmlkICogMztcblxuICAgICAgJi10eXBlIHtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDUgMDtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgcGFkZGluZzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgMDtcbiAgICAgICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDQuNTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbjogKC1AbWFpbi1ncmlkICogMyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLXJlc3VsdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogMztcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogMi41O1xuXG4gICAgJi0tcGFnZSxcbiAgICAmLS1lbXBsb3llZSB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSBAbWFpbi1ncmlkICogNik7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiA0LjU7XG4gICAgfVxuXG4gICAgJl9fZ290byB7XG4gICAgICBjb2xvcjogQG1haW4tY29sb3ItZGFyaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgQG1haW4tZ3JpZCAqIDEuNTtcbiAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBibGFjay1hMDU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: HeadingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function () { return HeadingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_configuration_menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configuration/menu/menu */ "./src/app/configuration/menu/menu.ts");
            /* harmony import */ var _configuration_contact_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../configuration/contact/contact */ "./src/app/configuration/contact/contact.ts");
            /* harmony import */ var _taxonomy_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../taxonomy/service/search.service */ "./src/app/taxonomy/service/search.service.ts");
            var HeadingComponent = /** @class */ (function () {
                function HeadingComponent(searchService, router) {
                    this.searchService = searchService;
                    this.router = router;
                    this.contactList = _configuration_contact_contact__WEBPACK_IMPORTED_MODULE_6__["default"];
                    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.menu = src_app_configuration_menu_menu__WEBPACK_IMPORTED_MODULE_5__["default"];
                    this.contactsClick = 0;
                }
                HeadingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () { return _this.disableSearch(); });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document.body, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () {
                        if (_this.contactsOpen) {
                            if (_this.contactsClick) {
                                _this.contactsClick = Math.max(0, _this.contactsClick - 1);
                            }
                            else {
                                setTimeout(function () {
                                    if (!_this.contactsClick) {
                                        _this.contactsOpen = false;
                                    }
                                });
                            }
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.contactsRef.nativeElement, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () {
                        _this.contactsClick++;
                    });
                };
                HeadingComponent.prototype.openContacts = function () {
                    if (!this.contactsOpen) {
                        this.contactsOpen = true;
                        this.contactsClick++;
                    }
                };
                HeadingComponent.prototype.closeContacts = function () {
                    this.contactsOpen = false;
                    this.contactsClick = 0;
                };
                HeadingComponent.prototype.disableSearch = function () {
                    this.searchQuery = '';
                    this.searchActive = false;
                    this.search(null);
                };
                HeadingComponent.prototype.search = function (s) {
                    var _this = this;
                    if (!s || s.length < 3) {
                        this.results = {};
                        this.searchTypes = null;
                    }
                    else {
                        this.results = this.searchService.searchByType(s);
                        this.searchTypes = this.results ? Object.keys(this.results).map(function (t) { return _this.results[t][0].type; }) : null;
                    }
                };
                HeadingComponent.prototype.ngOnDestroy = function () {
                    this.destroy$.next();
                    this.destroy$.complete();
                };
                return HeadingComponent;
            }());
            HeadingComponent.ctorParameters = function () { return [
                { type: _taxonomy_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contacts', { static: true })
            ], HeadingComponent.prototype, "contactsRef", void 0);
            HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-desktop-heading',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heading.component.less */ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.less")).default]
                })
            ], HeadingComponent);
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.module.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/apps/desktop/layout/general-layout/component/heading/heading.module.ts ***!
          \****************************************************************************************/
        /*! exports provided: HeadingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingModule", function () { return HeadingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heading.component */ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.component.ts");
            var HeadingModule = /** @class */ (function () {
                function HeadingModule() {
                }
                return HeadingModule;
            }());
            HeadingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    exports: [_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"]]
                })
            ], HeadingModule);
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.less": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.less ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-landing-block {\n  margin: 40px 0;\n}\n.un-landing-block-heading {\n  display: flex;\n  align-items: center;\n}\n.un-landing-block__title {\n  font-weight: 500;\n  color: rgba(36, 36, 36, 0.9);\n  font-size: 32px;\n}\n.un-landing-block__action {\n  display: flex;\n  align-items: center;\n  margin: 0 0 0 auto;\n  color: #9d8c5d;\n}\n.un-landing-block__action .material-icons-outlined {\n  margin: 0 0 0 6px;\n  font-size: 16px;\n}\n.un-landing-block__action-text {\n  position: relative;\n}\n.un-landing-block__action:hover .un-landing-block__action-text:after {\n  content: '';\n}\n.un-landing-block__action-text:after {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.8;\n  top: 100%;\n  margin: 2.66666667px 0 0;\n}\n.un-landing-block__content {\n  padding: 40px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL2xhbmRpbmctY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MiLCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWF0ZXJpYWwrSWNvbnN8TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQiLCJzcmMvYXBwL2FwcHMvZGVza3RvcC9wYWdlL2xhbmRpbmctcGFnZS9jb21wb25lbnQvbGFuZGluZy1jYXJvdXNlbC9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMvX2FuaW1hdGlvbnMubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2dyaWQubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3Rvb2x0aXAubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3RpbGUubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2dlbmVyYWwubGVzcyIsInNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2xheW91dC1zYi5sZXNzIiwic3JjL2FwcC9hcHBzL2Rlc2t0b3AvcGFnZS9sYW5kaW5nLXBhZ2UvY29tcG9uZW50L2xhbmRpbmctY2Fyb3VzZWwvRDovUFJPSkVDVFMvdW5pay9zcmMvYXBwL2FwcHMvZGVza3RvcC9wYWdlL2xhbmRpbmctcGFnZS9jb21wb25lbnQvbGFuZGluZy1jYXJvdXNlbC9sYW5kaW5nLWNhcm91c2VsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNBWDtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJHQUFBO0FERUY7QUNBQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtIQUFBO0FERUY7QUNDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFGO0FBQ0EsZUFBZTtBRXZDZjtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBRS9DQTtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBQUNBLGdCQUFnQjtBR2hEaEI7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBSGtERjtBRy9DQTtFQUNFO0lBQ0UsZUFBQTtFSGlERjtBQUNGO0FJM0RBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFFQSxpQkFBQTtBSjJERjtBSXpERTtFQUNFLGNBQUE7QUoyREo7QUt2RUE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FMeUVGO0FLdEVBO0VBQ0U7SUFDRSxrQkFBQTtFTHdFRjtBQUNGO0FBQ0EsVUFBVTtBTW5GVjtFQUNFLFlBQUE7QU5xRkY7QU1uRkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QU5xRko7QU12RkU7RUFLSSxlQUFBO0FOcUZOO0FNN0ZBO0VBYUksV0FBQTtFQUNBLHFCQUFBO0VBRUEsVUFBQTtBTmtGSjtBTWhGSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBTmtGTjtBTS9FSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FOaUZOO0FNNUVJO0VBQ0UsVUFBQTtBTjhFTjtBTTNFSTtFQUNFLFVBQUE7QU42RU47QU0xRUk7RUFDRSxVQUFBO0FONEVOO0FNekVJO0VBQ0UsV0FBQTtBTjJFTjtBTXRIQTtFQWdESSxhQUFBO0FOeUVKO0FNdkVJO0VBQ0UsYUFBQTtBTnlFTjtBTXRFSTtFQUNFLGdCQUFBO0FOd0VOO0FNL0hBO0VBNERJLGdCQUFBO0FOc0VKO0FNbElBO0VBZ0VJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FOcUVKO0FNbkVJO0VBQ0UsY0FBQTtBTnFFTjtBTWxFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QU5vRU47QU1sRU07RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtBTm9FUjtBTTFKQTtFQTRGSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxnQkFBQTtBTmlFSjtBTS9ESTtFQUNFLGVBQUE7T0FBQSxVQUFBO0FOaUVOO0FNOURJO0VBQ0UsZUFBQTtPQUFBLFVBQUE7QU5nRU47QU10S0E7RUEyR0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjhESjtBTTVESTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FOOEROO0FNM0RJO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBTjZETjtBTTNETTtFQUNFLFlBQUE7QU42RFI7QU0xRE07RUFDRSxZQUFBO0FONERSO0FNekRNO0VBQ0UsWUFBQTtBTjJEUjtBTXZESTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QU55RE47QU10REk7RUFDRSxhQUFBO0FOd0ROO0FNek1BO0VBc0pJLGlCQUFBO0VBQ0Esa0JBQUE7QU5zREo7QU1sREk7RUFDRSxnQkFBQTtBTm9ETjtBTWxESTtFQUNFLGtCQUFBO0FOb0ROO0FNbERJO0VBQ0UsaUJBQUE7QU5vRE47QU10TkE7RUF1S0ksZ0JBQUE7QU5rREo7QU16TkE7RUEyS0ksZ0JBQUE7QU5pREo7QU01TkE7O0VBZ0xJLGFBQUE7QU5nREo7QU05Q0k7Ozs7RUFDRSxlQUFBO0FObUROO0FNOUNBO0VBRUk7SUFFSSxpQkFBQTtFTjhDTjtFTWpEQTtJQVFJLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO1NBQUEsZUFBQTtJQUNBLGdCQUFBO0VONENKO0VNMUNJOztJQUVFLGVBQUE7U0FBQSxVQUFBO0VONENOO0VNdkNJOzs7SUFHRSxXQUFBO0VOeUNOO0VNaEVBO0lBNEJJLHNCQUFBO0lBQ0EsNkJBQUE7SUFFQSxXQUFBO0VOc0NKO0VNckVBO0lBbUNJLGNBQUE7SUFDQSxlQUFBO0VOcUNKO0VNbkNJO0lBQ0Usa0JBQUE7RU5xQ047RU1uQ007SUFDRSxlQUFBO0lBQ0EsTUFBQTtFTnFDUjtBQUNGO0FDMVFDO0VNR0MsYUFBQTtFQUNBLGtCQUFBO0FQMFFGO0FDOVFDO0VNT0csbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QVAwUUo7QUN2UkM7RU1pQkcseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QVB5UUo7QUMxUkM7RU1vQkssa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBUHlRTjtBQ3BTQztFTThCTyxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBUHlRUjtBQzFTQztFTXVDRyxZQUFBO0FQc1FKO0FPbFFBO0VOM0NDO0lNNkNHLGNBQUE7RVBvUUY7RUNqVEQ7SU1nREssZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VQb1FKO0VDelREO0lNeURLLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VQbVFKO0VDalVEO0lNaUVPLGdCQUFBO0VQbVFOO0VDcFVEO0lNb0VTLGVBQUE7SUFDQSxrQkFBQTtFUG1RUjtBQUNGO0FRdlVBO0VBQ0UsY0FBQTtBUnlVRjtBUXZVRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBUnlVSjtBUXRVRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FSd1VKO0FRclVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FSdVVKO0FRM1VFO0VBT0ksaUJBQUE7RUFDQSxlQUFBO0FSdVVOO0FRcFVJO0VBQ0Usa0JBQUE7QVJzVU47QVFuVUk7RUFDRSxXQUFBO0FScVVOO0FRbFVJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QVJvVU47QVFoVUU7RUFDRSxlQUFBO0FSa1VKIiwiZmlsZSI6InNyYy9hcHAvYXBwcy9kZXNrdG9wL3BhZ2UvbGFuZGluZy1wYWdlL2NvbXBvbmVudC9sYW5kaW5nLWNhcm91c2VsL2xhbmRpbmctY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSUNPTlMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLyoqIFZBUklBQkxFUyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiogQ09NUE9ORU5UUyAqL1xuLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbn1cbi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAxNnB4IDAgMDtcbn1cbi5jLXRvb2x3aW5kb3ctLXBhcmVudDpob3ZlciAuYy10b29sd2luZG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gIH1cbn1cbi8qKiBQQUdFICovXG4ucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnAtcGFnZS0tZ2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIuOTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLnAtcGFnZSAucC1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNDhweCAyNHB4IDA7XG4gIHdpZHRoOiAyNSU7XG59XG4ucC1wYWdlIC5wLWltYWdlLS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMjRweCA0OHB4O1xufVxuLnAtcGFnZSAucC1pbWFnZS5wLXctLTEwMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucC1wYWdlIC5wLXctLTMwIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNTAge1xuICB3aWR0aDogNTAlO1xufVxuLnAtcGFnZSAucC13LS03NSB7XG4gIHdpZHRoOiA3NSU7XG59XG4ucC1wYWdlIC5wLXctLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGgge1xuICBtYXJnaW46IDJlbSAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnAtcGFnZSBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5ZDhjNWQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudDpob3ZlciB7XG4gIGNvbG9yOiAjOGQ3ZTU0O1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMCA4cHggMCAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG59XG4ucC1wYWdlIC5wLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgLnAtY29sLTIge1xuICBjb2x1bW5zOiAyO1xufVxuLnAtcGFnZSAucC1jb2wtMyB7XG4gIGNvbHVtbnM6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMTBweCAxcHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1hcmdpbjogMCAwIDE2cHggMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sIHtcbiAgd2lkdGg6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTIge1xuICBmbGV4LWdyb3c6IDI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMyB7XG4gIGZsZXgtZ3JvdzogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS00IHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnAtcGFnZSAucC1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnAtcGFnZSAucC1jZiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgdWwgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSB1bCArIC5wLXBhZ2Ugb2wsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMnB4IDhweDtcbiAgfVxuICAucC1wYWdlIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sLTIsXG4gIC5wLXBhZ2UgLnAtY29sLTMge1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbiAgLnAtcGFnZSAucC13LS0zMCxcbiAgLnAtcGFnZSAucC13LS01MCxcbiAgLnAtcGFnZSAucC13LS03NSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAyNHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdG9wOiAwO1xuICB9XG59XG4ucC1wYWdlLS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjZlZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIDAgMCAtODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICB6LWluZGV4OiAwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICB9XG59XG4udW4tbGFuZGluZy1ibG9jayB7XG4gIG1hcmdpbjogNDBweCAwO1xufVxuLnVuLWxhbmRpbmctYmxvY2staGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udW4tbGFuZGluZy1ibG9ja19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjkpO1xuICBmb250LXNpemU6IDMycHg7XG59XG4udW4tbGFuZGluZy1ibG9ja19fYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuICBjb2xvcjogIzlkOGM1ZDtcbn1cbi51bi1sYW5kaW5nLWJsb2NrX19hY3Rpb24gLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi51bi1sYW5kaW5nLWJsb2NrX19hY3Rpb24tdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51bi1sYW5kaW5nLWJsb2NrX19hY3Rpb246aG92ZXIgLnVuLWxhbmRpbmctYmxvY2tfX2FjdGlvbi10ZXh0OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG59XG4udW4tbGFuZGluZy1ibG9ja19fYWN0aW9uLXRleHQ6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luOiAyLjY2NjY2NjY3cHggMCAwO1xufVxuLnVuLWxhbmRpbmctYmxvY2tfX2NvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IEBjb250YWluZXItd2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIEBtYWluLWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDEuNTtcbiAgfVxufVxuIiwiLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcblxuICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiA0IDAgMDtcblxuICAmLS1wYXJlbnQ6aG92ZXIgJiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkIDAgQGJsYWNrLWEwNTtcbiAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA1O1xuICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkICogMjtcbiAgfVxufVxuIiwiLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmLS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjk7XG5cbiAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDggMDtcbiAgICB9XG4gIH1cblxuICAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiA2IEBtYWluLWdyaWQgKiAzIDA7XG5cbiAgICB3aWR0aDogMjUlO1xuXG4gICAgJi0tcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDY7XG4gICAgfVxuXG4gICAgJi5wLXctLTEwMCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAucC13IHtcbiAgICAmLS0zMCB7XG4gICAgICB3aWR0aDogMzMlO1xuICAgIH1cblxuICAgICYtLTUwIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgJi0tNzUge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAmLS0xMDAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnAtcGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnAtYXR0YWNobWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiBAbWFpbi1jb2xvci1kYXJrO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGRhcmtlbihAbWFpbi1jb2xvci1kYXJrLCA1JSk7XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDM7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAwIEBzZWNvbmRhcnktZ3JpZCAqIDY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLTIge1xuICAgICAgY29sdW1uczogMjtcbiAgICB9XG5cbiAgICAmLTMge1xuICAgICAgY29sdW1uczogMztcbiAgICB9XG4gIH1cblxuICAucC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuICAgIGJveC1zaGFkb3c6IDAgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAqIDIuNSBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBibGFjay1hMDU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzIDAgMDtcblxuICAgICYtaGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAyIDA7XG4gICAgfVxuXG4gICAgJi1jb2wge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiAzIEBtYWluLWdyaWQgKiAzO1xuXG4gICAgICAmLS0yIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuXG4gICAgICAmLS0zIHtcbiAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgfVxuXG4gICAgICAmLS00IHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaGVhZCAucC10YWJsZS1jb2wge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnAtYWxpZ24ge1xuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgJi0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLnAtY2Yge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2Uge1xuICAgICYtLWdlbmVyYWwge1xuICAgICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1jb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi0yLFxuICAgICAgJi0zIHtcbiAgICAgICAgY29sdW1uczogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC13IHtcbiAgICAgICYtLTMwLFxuICAgICAgJi0tNTAsXG4gICAgICAmLS03NSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWltYWdlIHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wLWF0dGFjaG1lbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgMCAwO1xuXG4gICAgICAmX190eXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAcjogficucC1wYWdlJztcblxuQHtyfS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItbGlnaHQ7XG4gICAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgMCBAYmxhY2stYTA1O1xuICAgIG1heC13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1pbi13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1hcmdpbjogMCAwIDAgLUBtYWluLWdyaWQgKiAxMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoQG1haW4tZ3JpZCAqIDEwKTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIEB7cn0tdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBAbWFpbi1ncmlkICogMztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgY29sb3I6IEBibGFjay1hOTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQHtyfS1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIEB7cn0tLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDIgMDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWluLWhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiBAbWFpbi1ncmlkO1xuICAgICAgcGFkZGluZy1yaWdodDogQG1haW4tZ3JpZDtcblxuICAgICAgQHtyfS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndGhlbWUnO1xuXG4udW4tbGFuZGluZy1ibG9jayB7XG4gIG1hcmdpbjogQG1haW4tZ3JpZCAqIDUgMDtcblxuICAmLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiBAYmxhY2stYTkwO1xuICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDQ7XG4gIH1cblxuICAmX19hY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMCAwIGF1dG87XG4gICAgY29sb3I6IEBtYWluLWNvbG9yLWRhcms7XG5cbiAgICAubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICAgICAgbWFyZ2luOiAwIDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiAxLjU7XG4gICAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyO1xuICAgIH1cblxuICAgICYtdGV4dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciAmLXRleHQ6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuXG4gICAgJi10ZXh0OmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgICAgb3BhY2l0eTogLjg7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBtYXJnaW46IEBzZWNvbmRhcnktZ3JpZCAvIDEuNSAwIDA7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDUgMDtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: LandingCarouselComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingCarouselComponent", function () { return LandingCarouselComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LandingCarouselComponent = /** @class */ (function () {
                function LandingCarouselComponent() {
                }
                LandingCarouselComponent.prototype.ngOnInit = function () {
                };
                return LandingCarouselComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LandingCarouselComponent.prototype, "actionText", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LandingCarouselComponent.prototype, "actionLink", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], LandingCarouselComponent.prototype, "text", void 0);
            LandingCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-desktop-landing-carousel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-carousel.component.less */ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.less")).default]
                })
            ], LandingCarouselComponent);
            /***/ 
        }),
        /***/ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.module.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: LandingCarouselModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingCarouselModule", function () { return LandingCarouselModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _landing_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-carousel.component */ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.component.ts");
            var LandingCarouselModule = /** @class */ (function () {
                function LandingCarouselModule() {
                }
                return LandingCarouselModule;
            }());
            LandingCarouselModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_landing_carousel_component__WEBPACK_IMPORTED_MODULE_4__["LandingCarouselComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                    ],
                    exports: [_landing_carousel_component__WEBPACK_IMPORTED_MODULE_4__["LandingCarouselComponent"]]
                })
            ], LandingCarouselModule);
            /***/ 
        }),
        /***/ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.less": 
        /*!********************************************************************************************!*\
          !*** ./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.less ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-heading {\n  display: flex;\n  justify-content: center;\n  height: 80px;\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.un-heading .c-container {\n  display: flex;\n  align-items: center;\n}\n.un-heading-logo,\n.un-heading-search {\n  height: 100%;\n  width: 0;\n  flex-grow: 1;\n}\n.un-heading-menu {\n  position: relative;\n  margin: 0 auto;\n}\n.un-heading-menu__item {\n  color: #242424;\n  margin: 0 16px;\n  position: relative;\n}\n.un-heading-menu__item:after {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin: 2px 0 0;\n  height: 2px;\n  background: #0f1914;\n  border-radius: 100px;\n}\n.un-heading-menu__item:hover:after {\n  content: '';\n}\n.un-heading-contacts {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  padding: 12px;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  margin: 20px 0 0;\n}\n.un-heading-contact {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  margin: 8px;\n  border-radius: 4px;\n}\n.un-heading-contact__icon {\n  font-size: 20px;\n  margin: 0 16px 0 0;\n}\n.un-heading-contact__text {\n  margin-right: 16px;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n.un-heading-contact__goto {\n  color: #9d8c5d;\n  margin: 0 0 0 auto;\n}\n.un-heading-contact__goto .material-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  width: 34px;\n  height: 38px;\n}\n.un-heading-contact__goto:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n.un-heading-logo {\n  display: flex;\n  justify-content: flex-start;\n  padding: 8px 0;\n}\n.un-heading-search {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.un-heading-search__btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(36, 36, 36, 0.6);\n  height: 80px;\n  width: 88px;\n}\n.un-heading-search__btn:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n.un-search {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #f1eee7;\n  z-index: 10000;\n  -webkit-animation: fadeIn 200ms ease-in-out;\n          animation: fadeIn 200ms ease-in-out;\n  max-height: 100%;\n  overflow: auto;\n}\n.un-search-field {\n  display: flex;\n  align-items: center;\n}\n.un-search-field input {\n  height: 80px;\n  width: 100%;\n  outline: #0000;\n  font-size: 24px;\n  padding: 0 32px;\n  border: none;\n  box-shadow: 0 0 1px 0 rgba(36, 36, 36, 0.05);\n}\n.un-search-close {\n  margin: 0 0 0 36px;\n  line-height: 0;\n  cursor: pointer;\n}\n.un-search-close .material-icons {\n  font-size: 28px;\n  opacity: 0.8;\n}\n.un-search-content-results {\n  margin: 48px 0 0;\n  padding-bottom: 24px;\n}\n.un-search-content-results-type {\n  padding: 40px 0;\n}\n.un-search-content-results-type__title {\n  padding: 0 0 20px 0;\n  font-size: 18px;\n}\n.un-search-content-results-type__content {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -24px;\n}\n.un-search-result {\n  display: flex;\n  align-items: center;\n  margin: 24px;\n  padding: 20px;\n}\n.un-search-result--page,\n.un-search-result--employee {\n  width: calc(50% - 8px * 6);\n}\n.un-search-result__title {\n  font-size: 18px;\n}\n.un-search-result__goto {\n  color: #9d8c5d;\n  border-radius: 4px;\n  padding: 8px 12px;\n  margin: 0 0 0 auto;\n}\n.un-search-result__goto:hover {\n  background: rgba(36, 36, 36, 0.05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL2hlYWRpbmcuY29tcG9uZW50Lmxlc3MiLCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWF0ZXJpYWwrSWNvbnN8TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWQiLCJzcmMvYXBwL2FwcHMvbW9iaWxlL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMvX2FuaW1hdGlvbnMubGVzcyIsInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2dyaWQubGVzcyIsInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3Rvb2x0aXAubGVzcyIsInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3RpbGUubGVzcyIsInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2dlbmVyYWwubGVzcyIsInNyYy9hcHAvYXBwcy9tb2JpbGUvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L2NvbXBvbmVudC9oZWFkaW5nL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2xheW91dC1zYi5sZXNzIiwic3JjL2FwcC9hcHBzL21vYmlsZS9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvY29tcG9uZW50L2hlYWRpbmcvRDovUFJPSkVDVFMvdW5pay9zcmMvYXBwL2FwcHMvbW9iaWxlL2xheW91dC9nZW5lcmFsLWxheW91dC9jb21wb25lbnQvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNBWDtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJHQUFBO0FERUY7QUNBQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtIQUFBO0FERUY7QUNDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFGO0FBQ0EsZUFBZTtBRXZDZjtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBRS9DQTtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBQUNBLGdCQUFnQjtBR2hEaEI7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBSGtERjtBRy9DQTtFQUNFO0lBQ0UsZUFBQTtFSGlERjtBQUNGO0FJM0RBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFFQSxpQkFBQTtBSjJERjtBSXpERTtFQUNFLGNBQUE7QUoyREo7QUt2RUE7RUFD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QVF6U0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBUjBTSjtBUXhTSTs7RUFFRSwwQkFBQTtBUjBTTjtBUXZTSTtFQUNFLGVBQUE7QVJ5U047QVF0U0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FSd1NOO0FRdFNNO0VBQ0Usa0NBQUE7QVJ3U1IiLCJmaWxlIjoic3JjL2FwcC9hcHBzL21vYmlsZS9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvY29tcG9uZW50L2hlYWRpbmcvaGVhZGluZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBJQ09OUyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4vKiogVkFSSUFCTEVTICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qKiBDT01QT05FTlRTICovXG4uYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgfVxufVxuLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDE2cHggMCAwO1xufVxuLmMtdG9vbHdpbmRvdy0tcGFyZW50OmhvdmVyIC5jLXRvb2x3aW5kb3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLXRpbGUge1xuICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgfVxufVxuLyoqIFBBR0UgKi9cbi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ucC1wYWdlLS1nZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMi45O1xufVxuLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ucC1wYWdlIC5wLWltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCA0OHB4IDI0cHggMDtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2UtLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAyNHB4IDQ4cHg7XG59XG4ucC1wYWdlIC5wLWltYWdlLnAtdy0tMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5wLXBhZ2UgLnAtdy0tMzAge1xuICB3aWR0aDogMzMlO1xufVxuLnAtcGFnZSAucC13LS01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ucC1wYWdlIC5wLXctLTc1IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5wLXBhZ2UgLnAtdy0tMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaCB7XG4gIG1hcmdpbjogMmVtIDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucC1wYWdlIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50OmhvdmVyIHtcbiAgY29sb3I6ICM4ZDdlNTQ7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDhweCAwIDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbn1cbi5wLXBhZ2UgLnAtY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY29sdW1uLWdhcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnAtcGFnZSAucC1jb2wtMiB7XG4gIGNvbHVtbnM6IDI7XG59XG4ucC1wYWdlIC5wLWNvbC0zIHtcbiAgY29sdW1uczogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxMHB4IDFweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDI0cHggMCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wge1xuICB3aWR0aDogMDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS0zIHtcbiAgZmxleC1ncm93OiAzO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTQge1xuICBmbGV4LWdyb3c6IDQ7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucC1wYWdlIC5wLWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucC1wYWdlIC5wLWFsaWduLS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucC1wYWdlIC5wLWNmIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgdWwge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufVxuLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnAtcGFnZSB1bCArIC5wLXBhZ2UgdWwsXG4ucC1wYWdlIHVsICsgLnAtcGFnZSBvbCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSBvbCArIC5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMycHggOHB4O1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnAtcGFnZSAucC1jb2wtMixcbiAgLnAtcGFnZSAucC1jb2wtMyB7XG4gICAgY29sdW1uczogMTtcbiAgfVxuICAucC1wYWdlIC5wLXctLTMwLFxuICAucC1wYWdlIC5wLXctLTUwLFxuICAucC1wYWdlIC5wLXctLTc1IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWltYWdlIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDI0cHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbi5wLXBhZ2UtLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmNmVmO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgMCAwIC04MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tbGF5b3V0LXNiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIH1cbn1cbi51bi1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZjZlZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggNHB4IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnVuLWhlYWRpbmcgLmMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51bi1oZWFkaW5nLWxvZ28sXG4udW4taGVhZGluZy1zZWFyY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBmbGV4LWdyb3c6IDE7XG59XG4udW4taGVhZGluZy1tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi51bi1oZWFkaW5nLW1lbnVfX2l0ZW0ge1xuICBjb2xvcjogIzI0MjQyNDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51bi1oZWFkaW5nLW1lbnVfX2l0ZW06YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMnB4IDAgMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwZjE5MTQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuLnVuLWhlYWRpbmctbWVudV9faXRlbTpob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xufVxuLnVuLWhlYWRpbmctY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDRweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuLnVuLWhlYWRpbmctY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51bi1oZWFkaW5nLWNvbnRhY3RfX2ljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMCAxNnB4IDAgMDtcbn1cbi51bi1oZWFkaW5nLWNvbnRhY3RfX3RleHQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufVxuLnVuLWhlYWRpbmctY29udGFjdF9fZ290byB7XG4gIGNvbG9yOiAjOWQ4YzVkO1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG59XG4udW4taGVhZGluZy1jb250YWN0X19nb3RvIC5tYXRlcmlhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM4cHg7XG59XG4udW4taGVhZGluZy1jb250YWN0X19nb3RvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbn1cbi51bi1oZWFkaW5nLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLnVuLWhlYWRpbmctc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51bi1oZWFkaW5nLXNlYXJjaF9fYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuNik7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg4cHg7XG59XG4udW4taGVhZGluZy1zZWFyY2hfX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG59XG4udW4tc2VhcmNoIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmMWVlZTc7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBhbmltYXRpb246IGZhZGVJbiAyMDBtcyBlYXNlLWluLW91dDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4udW4tc2VhcmNoLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51bi1zZWFyY2gtZmllbGQgaW5wdXQge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiAjMDAwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG59XG4udW4tc2VhcmNoLWNsb3NlIHtcbiAgbWFyZ2luOiAwIDAgMCAzNnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnVuLXNlYXJjaC1jbG9zZSAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi51bi1zZWFyY2gtY29udGVudC1yZXN1bHRzIHtcbiAgbWFyZ2luOiA0OHB4IDAgMDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG4udW4tc2VhcmNoLWNvbnRlbnQtcmVzdWx0cy10eXBlIHtcbiAgcGFkZGluZzogNDBweCAwO1xufVxuLnVuLXNlYXJjaC1jb250ZW50LXJlc3VsdHMtdHlwZV9fdGl0bGUge1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udW4tc2VhcmNoLWNvbnRlbnQtcmVzdWx0cy10eXBlX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0yNHB4O1xufVxuLnVuLXNlYXJjaC1yZXN1bHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDI0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udW4tc2VhcmNoLXJlc3VsdC0tcGFnZSxcbi51bi1zZWFyY2gtcmVzdWx0LS1lbXBsb3llZSB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDhweCAqIDYpO1xufVxuLnVuLXNlYXJjaC1yZXN1bHRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnVuLXNlYXJjaC1yZXN1bHRfX2dvdG8ge1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgbWFyZ2luOiAwIDAgMCBhdXRvO1xufVxuLnVuLXNlYXJjaC1yZXN1bHRfX2dvdG86aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuIiwiQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCIuYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBAY29udGFpbmVyLXdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBAbWFpbi1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgKiAxLjU7XG4gIH1cbn1cbiIsIi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogNCAwIDA7XG5cbiAgJi0tcGFyZW50OmhvdmVyICYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIuYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAwIEBibGFjay1hMDU7XG4gIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNTtcbiAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtdGlsZSB7XG4gICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZCAqIDI7XG4gIH1cbn1cbiIsIi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgJi0tZ2VuZXJhbCB7XG4gICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMjtcbiAgICBsaW5lLWhlaWdodDogMi45O1xuXG4gICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA4IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtaW1hZ2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCBAbWFpbi1ncmlkICogNiBAbWFpbi1ncmlkICogMyAwO1xuXG4gICAgd2lkdGg6IDI1JTtcblxuICAgICYtLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAzIEBtYWluLWdyaWQgKiA2O1xuICAgIH1cblxuICAgICYucC13LS0xMDAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtdyB7XG4gICAgJi0tMzAge1xuICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG5cbiAgICAmLS01MCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYtLTc1IHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgJi0tMTAwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5wLXBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAyZW0gMDtcblxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5wLWF0dGFjaG1lbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogQG1haW4tY29sb3ItZGFyaztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oQG1haW4tY29sb3ItZGFyaywgNSUpO1xuICAgIH1cblxuICAgICZfX3R5cGUge1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgMCBAc2Vjb25kYXJ5LWdyaWQgKiA2O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICAgICAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi0yIHtcbiAgICAgIGNvbHVtbnM6IDI7XG4gICAgfVxuXG4gICAgJi0zIHtcbiAgICAgIGNvbHVtbnM6IDM7XG4gICAgfVxuICB9XG5cbiAgLnAtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICBib3gtc2hhZG93OiAwIEBzZWNvbmRhcnktZ3JpZCAvIDQgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgKiAyLjUgQHNlY29uZGFyeS1ncmlkIC8gNCBAYmxhY2stYTA1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogMyAwIDA7XG5cbiAgICAmLWhlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IEBibGFjay1hMDU7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMiAwO1xuICAgIH1cblxuICAgICYtY29sIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogMyBAbWFpbi1ncmlkICogMztcblxuICAgICAgJi0tMiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIH1cblxuICAgICAgJi0tMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgIH1cblxuICAgICAgJi0tNCB7XG4gICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzLjU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cblxuICAucC1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5wLWFsaWduIHtcbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICYtLXJpZ2h0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNmIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIH1cblxuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlIHtcbiAgICAmLS1nZW5lcmFsIHtcbiAgICAgIC5wLXBhZ2UtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA0IEBtYWluLWdyaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtY29sIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICYtMixcbiAgICAgICYtMyB7XG4gICAgICAgIGNvbHVtbnM6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtdyB7XG4gICAgICAmLS0zMCxcbiAgICAgICYtLTUwLFxuICAgICAgJi0tNzUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1pbWFnZSB7XG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgMCAhaW1wb3J0YW50O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucC1hdHRhY2htZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiBAbWFpbi1ncmlkIDAgMDtcblxuICAgICAgJl9fdHlwZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHI6IH4nLnAtcGFnZSc7XG5cbkB7cn0tLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAe3J9LXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yLWxpZ2h0O1xuICAgIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA1IDAgQGJsYWNrLWEwNTtcbiAgICBtYXgtd2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtaW4td2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtYXJnaW46IDAgMCAwIC1AbWFpbi1ncmlkICogMTA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKEBtYWluLWdyaWQgKiAxMCk7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBAe3J9LXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogQG1haW4tZ3JpZCAqIDM7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIGNvbG9yOiBAYmxhY2stYTkwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEB7cn0tY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBAe3J9LS1sYXlvdXQtc2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgQHtyfS1zaWRlYmFyIHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiAyIDA7XG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgIG1pbi1oZWlnaHQ6IEBtYWluLWdyaWQgKiAxMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogQG1haW4tZ3JpZDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IEBtYWluLWdyaWQ7XG5cbiAgICAgIEB7cn0tdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RoZW1lJztcblxuLnVuLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBAbWFpbi1ncmlkICogMTA7XG5cbiAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItbGlnaHQ7XG4gIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA1IEBzZWNvbmRhcnktZ3JpZCBAYmxhY2stYTA1O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuYy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYtbG9nbyxcbiAgJi1zZWFyY2gge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cblxuICAmLW1lbnUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICZfX2l0ZW0ge1xuICAgICAgY29sb3I6IEBibGFjay1hMTAwO1xuICAgICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiAyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IEBzZWNvbmRhcnktZ3JpZCAvIDIgMCAwO1xuICAgICAgICBoZWlnaHQ6IEBzZWNvbmRhcnktZ3JpZCAvIDI7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxNSwgMjUsIDIwLCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLWNvbnRhY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICAgIHBhZGRpbmc6IEBzZWNvbmRhcnktZ3JpZCAqIDM7XG4gICAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgQHNlY29uZGFyeS1ncmlkIEBibGFjay1hMDU7XG4gICAgbWFyZ2luOiBAc2Vjb25kYXJ5LWdyaWQgKiA1IDAgMDtcbiAgfVxuXG4gICYtY29udGFjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgQHNlY29uZGFyeS1ncmlkICogMi41O1xuICAgIG1hcmdpbjogQG1haW4tZ3JpZDtcbiAgICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG5cbiAgICAmX19pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogNTtcbiAgICAgIG1hcmdpbjogMCBAbWFpbi1ncmlkICogMiAwIDA7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IEBtYWluLWdyaWQgKiAyO1xuICAgICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgfVxuXG4gICAgJl9fZ290byB7XG4gICAgICBjb2xvcjogQG1haW4tY29sb3ItZGFyaztcbiAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcblxuICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogNTtcbiAgICAgICAgd2lkdGg6IEBzZWNvbmRhcnktZ3JpZCAqIDguNTtcbiAgICAgICAgaGVpZ2h0OiBAc2Vjb25kYXJ5LWdyaWQgKiA5LjU7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYmxhY2stYTA1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogQG1haW4tZ3JpZCAwO1xuICB9XG5cbiAgJi1zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJl9fYnRuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogQGJsYWNrLWE2MDtcbiAgICAgIGhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgd2lkdGg6IEBtYWluLWdyaWQgKiAxMTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBibGFjay1hMDU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi51bi1zZWFyY2gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogQG1haW4tY29sb3I7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBhbmltYXRpb246IGZhZGVJbiAyMDBtcyBlYXNlLWluLW91dDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgJi1maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW5wdXQge1xuICAgICAgaGVpZ2h0OiBAbWFpbi1ncmlkICogMTA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG91dGxpbmU6ICMwMDAwO1xuICAgICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMztcbiAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgQGJsYWNrLWEwNTtcbiAgICB9XG4gIH1cblxuICAmLWNsb3NlIHtcbiAgICBtYXJnaW46IDAgMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDk7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogNztcbiAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbiAgfVxuXG4gICYtY29udGVudCB7XG4gICAgJi1yZXN1bHRzIHtcbiAgICAgIG1hcmdpbjogQG1haW4tZ3JpZCAqIDYgMCAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IEBtYWluLWdyaWQgKiAzO1xuXG4gICAgICAmLXR5cGUge1xuICAgICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNSAwO1xuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgQHNlY29uZGFyeS1ncmlkICogNSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogNC41O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luOiAoLUBtYWluLWdyaWQgKiAzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtcmVzdWx0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzO1xuICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiAyLjU7XG5cbiAgICAmLS1wYWdlLFxuICAgICYtLWVtcGxveWVlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIEBtYWluLWdyaWQgKiA2KTtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDQuNTtcbiAgICB9XG5cbiAgICAmX19nb3RvIHtcbiAgICAgIGNvbG9yOiBAbWFpbi1jb2xvci1kYXJrO1xuICAgICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCBAbWFpbi1ncmlkICogMS41O1xuICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: HeadingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function () { return HeadingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_app_configuration_menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configuration/menu/menu */ "./src/app/configuration/menu/menu.ts");
            /* harmony import */ var _configuration_contact_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../configuration/contact/contact */ "./src/app/configuration/contact/contact.ts");
            /* harmony import */ var _taxonomy_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../taxonomy/service/search.service */ "./src/app/taxonomy/service/search.service.ts");
            var HeadingComponent = /** @class */ (function () {
                function HeadingComponent(searchService, router) {
                    this.searchService = searchService;
                    this.router = router;
                    this.contactList = _configuration_contact_contact__WEBPACK_IMPORTED_MODULE_6__["default"];
                    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.menu = src_app_configuration_menu_menu__WEBPACK_IMPORTED_MODULE_5__["default"];
                    this.contactsClick = 0;
                }
                HeadingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () { return _this.disableSearch(); });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document.body, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () {
                        if (_this.contactsOpen) {
                            if (_this.contactsClick) {
                                _this.contactsClick = Math.max(0, _this.contactsClick - 1);
                            }
                            else {
                                setTimeout(function () {
                                    if (!_this.contactsClick) {
                                        _this.contactsOpen = false;
                                    }
                                });
                            }
                        }
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.contactsRef.nativeElement, 'click')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                        .subscribe(function () {
                        _this.contactsClick++;
                    });
                };
                HeadingComponent.prototype.openContacts = function () {
                    if (!this.contactsOpen) {
                        this.contactsOpen = true;
                        this.contactsClick++;
                    }
                };
                HeadingComponent.prototype.closeContacts = function () {
                    this.contactsOpen = false;
                    this.contactsClick = 0;
                };
                HeadingComponent.prototype.disableSearch = function () {
                    this.searchQuery = '';
                    this.searchActive = false;
                    this.search(null);
                };
                HeadingComponent.prototype.search = function (s) {
                    var _this = this;
                    if (!s || s.length < 3) {
                        this.results = {};
                        this.searchTypes = null;
                    }
                    else {
                        this.results = this.searchService.searchByType(s);
                        this.searchTypes = this.results ? Object.keys(this.results).map(function (t) { return _this.results[t][0].type; }) : null;
                    }
                };
                HeadingComponent.prototype.ngOnDestroy = function () {
                    this.destroy$.next();
                    this.destroy$.complete();
                };
                return HeadingComponent;
            }());
            HeadingComponent.ctorParameters = function () { return [
                { type: _taxonomy_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contacts', { static: true })
            ], HeadingComponent.prototype, "contactsRef", void 0);
            HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mobile-heading',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heading.component.less */ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.less")).default]
                })
            ], HeadingComponent);
            /***/ 
        }),
        /***/ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.module.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/apps/mobile/layout/general-layout/component/heading/heading.module.ts ***!
          \***************************************************************************************/
        /*! exports provided: HeadingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingModule", function () { return HeadingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heading.component */ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.component.ts");
            var HeadingModule = /** @class */ (function () {
                function HeadingModule() {
                }
                return HeadingModule;
            }());
            HeadingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    exports: [_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"]]
                })
            ], HeadingModule);
            /***/ 
        }),
        /***/ "./src/app/configuration/contact/contact.ts": 
        /*!**************************************************!*\
          !*** ./src/app/configuration/contact/contact.ts ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony default export */ __webpack_exports__["default"] = ([
                {
                    text: 'pedsurgery_ua@ukr.net',
                    url: 'mailto:pedsurgery_ua@ukr.net',
                    icon: 'alternate_email'
                },
                {
                    text: '(044) 412-04-87',
                    url: 'tel:+380444120487',
                    icon: 'phone'
                }
            ]);
            /***/ 
        }),
        /***/ "./src/app/configuration/menu/menu.ts": 
        /*!********************************************!*\
          !*** ./src/app/configuration/menu/menu.ts ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony default export */ __webpack_exports__["default"] = ([
                { text: 'Про кафедру', link: '' },
                { text: 'Працівники', link: 'employee' },
                { text: 'Навчальна робота', link: 'learning-research' },
                { text: 'Наукова робота', link: 'science-research' },
                { text: 'Лікувальна робота', link: 'healing-research' },
            ]);
            /***/ 
        }),
        /***/ "./src/app/route/base/base.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/route/base/base.module.ts ***!
          \*******************************************/
        /*! exports provided: BaseModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function () { return BaseModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_layout_general_layout_general_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/layout/general-layout/general-layout.component */ "./src/app/shared/layout/general-layout/general-layout.component.ts");
            /* harmony import */ var _shared_layout_general_layout_general_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/layout/general-layout/general-layout.module */ "./src/app/shared/layout/general-layout/general-layout.module.ts");
            /* harmony import */ var _shared_page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/page/employee-page/employee-page.component */ "./src/app/shared/page/employee-page/employee-page.component.ts");
            /* harmony import */ var _shared_page_employee_page_employee_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/page/employee-page/employee-page.module */ "./src/app/shared/page/employee-page/employee-page.module.ts");
            /* harmony import */ var _shared_page_healing_page_healing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/page/healing-page/healing-page.component */ "./src/app/shared/page/healing-page/healing-page.component.ts");
            /* harmony import */ var _shared_page_healing_page_healing_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/page/healing-page/healing-page.module */ "./src/app/shared/page/healing-page/healing-page.module.ts");
            /* harmony import */ var _shared_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/page/landing-page/landing-page.component */ "./src/app/shared/page/landing-page/landing-page.component.ts");
            /* harmony import */ var _shared_page_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/page/landing-page/landing-page.module */ "./src/app/shared/page/landing-page/landing-page.module.ts");
            /* harmony import */ var _shared_page_learning_page_learning_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/page/learning-page/learning-page.component */ "./src/app/shared/page/learning-page/learning-page.component.ts");
            /* harmony import */ var _shared_page_learning_page_learning_page_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/page/learning-page/learning-page.module */ "./src/app/shared/page/learning-page/learning-page.module.ts");
            /* harmony import */ var _shared_page_science_page_science_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/page/science-page/science-page.component */ "./src/app/shared/page/science-page/science-page.component.ts");
            /* harmony import */ var _shared_page_science_page_science_page_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/page/science-page/science-page.module */ "./src/app/shared/page/science-page/science-page.module.ts");
            var routes = [
                {
                    path: '',
                    component: _shared_layout_general_layout_general_layout_component__WEBPACK_IMPORTED_MODULE_3__["GeneralLayoutComponent"],
                    children: [
                        {
                            path: '',
                            component: _shared_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"]
                        },
                        {
                            path: 'employee',
                            children: [
                                {
                                    path: '',
                                    component: _shared_page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_5__["EmployeePageComponent"]
                                },
                                {
                                    path: ':id',
                                    component: _shared_page_employee_page_employee_page_component__WEBPACK_IMPORTED_MODULE_5__["EmployeePageComponent"]
                                }
                            ]
                        },
                        {
                            path: 'science-research',
                            component: _shared_page_science_page_science_page_component__WEBPACK_IMPORTED_MODULE_13__["SciencePageComponent"]
                        },
                        {
                            path: 'learning-research',
                            component: _shared_page_learning_page_learning_page_component__WEBPACK_IMPORTED_MODULE_11__["LearningPageComponent"]
                        },
                        {
                            path: 'healing-research',
                            component: _shared_page_healing_page_healing_page_component__WEBPACK_IMPORTED_MODULE_7__["HealingPageComponent"]
                        },
                    ]
                }
            ];
            var BaseModule = /** @class */ (function () {
                function BaseModule() {
                }
                return BaseModule;
            }());
            BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _shared_layout_general_layout_general_layout_module__WEBPACK_IMPORTED_MODULE_4__["GeneralLayoutModule"],
                        _shared_page_landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_10__["LandingPageModule"],
                        _shared_page_employee_page_employee_page_module__WEBPACK_IMPORTED_MODULE_6__["EmployeePageModule"],
                        _shared_page_science_page_science_page_module__WEBPACK_IMPORTED_MODULE_14__["SciencePageModule"],
                        _shared_page_learning_page_learning_page_module__WEBPACK_IMPORTED_MODULE_12__["LearningPageModule"],
                        _shared_page_healing_page_healing_page_module__WEBPACK_IMPORTED_MODULE_8__["HealingPageModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaseModule);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/general-layout/general-layout.component.less": 
        /*!****************************************************************************!*\
          !*** ./src/app/shared/layout/general-layout/general-layout.component.less ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f1eee7;\n  margin: 0 0 -40px 0;\n}\n.un-content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.un-content ::ng-deep > :not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.un-control {\n  display: block;\n  z-index: 1;\n}\n.un-footer {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  height: 56px;\n}\n.un-footer .c-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  font-size: 16px;\n  font-weight: 500;\n  color: rgba(36, 36, 36, 0.4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9nZW5lcmFsLWxheW91dC9nZW5lcmFsLWxheW91dC5jb21wb25lbnQubGVzcyIsImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZCIsInNyYy9hcHAvc2hhcmVkL2xheW91dC9nZW5lcmFsLWxheW91dC9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMvX2FuaW1hdGlvbnMubGVzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dC9nZW5lcmFsLWxheW91dC9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL19ncmlkLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdG9vbHRpcC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2dlbmVyYWwtbGF5b3V0L0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX3RpbGUubGVzcyIsInNyYy9hcHAvc2hhcmVkL2xheW91dC9nZW5lcmFsLWxheW91dC9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9wYWdlL19nZW5lcmFsLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fbGF5b3V0LXNiLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvRDovUFJPSkVDVFMvdW5pay9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvZ2VuZXJhbC1sYXlvdXQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztB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Z0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RVBvUUo7RUN6VEQ7SU15REssYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RVBtUUo7RUNqVUQ7SU1pRU8sZ0JBQUE7RVBtUU47RUNwVUQ7SU1vRVMsZUFBQTtJQUNBLGtCQUFBO0VQbVFSO0FBQ0Y7QVF2VUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QVJ5VUY7QVF0VUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FSd1VGO0FRM1VBO0VBTUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBUndVSjtBUXBVQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FSc1VGO0FRblVBO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7QVJxVUY7QVF4VUE7RUFNSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBUm9VSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvZ2VuZXJhbC1sYXlvdXQvZ2VuZXJhbC1sYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSUNPTlMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLyoqIFZBUklBQkxFUyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiogQ09NUE9ORU5UUyAqL1xuLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbn1cbi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAxNnB4IDAgMDtcbn1cbi5jLXRvb2x3aW5kb3ctLXBhcmVudDpob3ZlciAuYy10b29sd2luZG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gIH1cbn1cbi8qKiBQQUdFICovXG4ucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnAtcGFnZS0tZ2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIuOTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLnAtcGFnZSAucC1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNDhweCAyNHB4IDA7XG4gIHdpZHRoOiAyNSU7XG59XG4ucC1wYWdlIC5wLWltYWdlLS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMjRweCA0OHB4O1xufVxuLnAtcGFnZSAucC1pbWFnZS5wLXctLTEwMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucC1wYWdlIC5wLXctLTMwIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNTAge1xuICB3aWR0aDogNTAlO1xufVxuLnAtcGFnZSAucC13LS03NSB7XG4gIHdpZHRoOiA3NSU7XG59XG4ucC1wYWdlIC5wLXctLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGgge1xuICBtYXJnaW46IDJlbSAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnAtcGFnZSBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5ZDhjNWQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudDpob3ZlciB7XG4gIGNvbG9yOiAjOGQ3ZTU0O1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMCA4cHggMCAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG59XG4ucC1wYWdlIC5wLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgLnAtY29sLTIge1xuICBjb2x1bW5zOiAyO1xufVxuLnAtcGFnZSAucC1jb2wtMyB7XG4gIGNvbHVtbnM6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMTBweCAxcHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1hcmdpbjogMCAwIDE2cHggMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sIHtcbiAgd2lkdGg6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTIge1xuICBmbGV4LWdyb3c6IDI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMyB7XG4gIGZsZXgtZ3JvdzogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS00IHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnAtcGFnZSAucC1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnAtcGFnZSAucC1jZiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgdWwgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSB1bCArIC5wLXBhZ2Ugb2wsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMnB4IDhweDtcbiAgfVxuICAucC1wYWdlIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sLTIsXG4gIC5wLXBhZ2UgLnAtY29sLTMge1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbiAgLnAtcGFnZSAucC13LS0zMCxcbiAgLnAtcGFnZSAucC13LS01MCxcbiAgLnAtcGFnZSAucC13LS03NSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAyNHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdG9wOiAwO1xuICB9XG59XG4ucC1wYWdlLS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjZlZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIDAgMCAtODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICB6LWluZGV4OiAwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICB9XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmMWVlZTc7XG4gIG1hcmdpbjogMCAwIC00MHB4IDA7XG59XG4udW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi51bi1jb250ZW50IDo6bmctZGVlcCA+IDpub3Qocm91dGVyLW91dGxldCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG59XG4udW4tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxO1xufVxuLnVuLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmOWY2ZWY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDRweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBoZWlnaHQ6IDU2cHg7XG59XG4udW4tZm9vdGVyIC5jLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuNCk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IEBjb250YWluZXItd2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIEBtYWluLWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDEuNTtcbiAgfVxufVxuIiwiLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcblxuICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiA0IDAgMDtcblxuICAmLS1wYXJlbnQ6aG92ZXIgJiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkIDAgQGJsYWNrLWEwNTtcbiAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA1O1xuICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkICogMjtcbiAgfVxufVxuIiwiLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmLS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjk7XG5cbiAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDggMDtcbiAgICB9XG4gIH1cblxuICAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiA2IEBtYWluLWdyaWQgKiAzIDA7XG5cbiAgICB3aWR0aDogMjUlO1xuXG4gICAgJi0tcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDY7XG4gICAgfVxuXG4gICAgJi5wLXctLTEwMCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAucC13IHtcbiAgICAmLS0zMCB7XG4gICAgICB3aWR0aDogMzMlO1xuICAgIH1cblxuICAgICYtLTUwIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgJi0tNzUge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAmLS0xMDAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnAtcGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnAtYXR0YWNobWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiBAbWFpbi1jb2xvci1kYXJrO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGRhcmtlbihAbWFpbi1jb2xvci1kYXJrLCA1JSk7XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDM7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAwIEBzZWNvbmRhcnktZ3JpZCAqIDY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLTIge1xuICAgICAgY29sdW1uczogMjtcbiAgICB9XG5cbiAgICAmLTMge1xuICAgICAgY29sdW1uczogMztcbiAgICB9XG4gIH1cblxuICAucC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuICAgIGJveC1zaGFkb3c6IDAgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAqIDIuNSBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBibGFjay1hMDU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzIDAgMDtcblxuICAgICYtaGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAyIDA7XG4gICAgfVxuXG4gICAgJi1jb2wge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiAzIEBtYWluLWdyaWQgKiAzO1xuXG4gICAgICAmLS0yIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuXG4gICAgICAmLS0zIHtcbiAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgfVxuXG4gICAgICAmLS00IHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaGVhZCAucC10YWJsZS1jb2wge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnAtYWxpZ24ge1xuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgJi0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLnAtY2Yge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2Uge1xuICAgICYtLWdlbmVyYWwge1xuICAgICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1jb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi0yLFxuICAgICAgJi0zIHtcbiAgICAgICAgY29sdW1uczogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC13IHtcbiAgICAgICYtLTMwLFxuICAgICAgJi0tNTAsXG4gICAgICAmLS03NSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWltYWdlIHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wLWF0dGFjaG1lbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgMCAwO1xuXG4gICAgICAmX190eXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAcjogficucC1wYWdlJztcblxuQHtyfS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItbGlnaHQ7XG4gICAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgMCBAYmxhY2stYTA1O1xuICAgIG1heC13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1pbi13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1hcmdpbjogMCAwIDAgLUBtYWluLWdyaWQgKiAxMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoQG1haW4tZ3JpZCAqIDEwKTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIEB7cn0tdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBAbWFpbi1ncmlkICogMztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgY29sb3I6IEBibGFjay1hOTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQHtyfS1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIEB7cn0tLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDIgMDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWluLWhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiBAbWFpbi1ncmlkO1xuICAgICAgcGFkZGluZy1yaWdodDogQG1haW4tZ3JpZDtcblxuICAgICAgQHtyfS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndGhlbWUnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yO1xuICBtYXJnaW46IDAgMCAoLUBtYWluLWdyaWQgKiA1KSAwO1xufVxuXG4udW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcblxuICA6Om5nLWRlZXAgPiA6bm90KHJvdXRlci1vdXRsZXQpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi51bi1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDE7XG59XG5cbi51bi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBAbWFpbi1jb2xvci1saWdodDtcbiAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgQHNlY29uZGFyeS1ncmlkIEBibGFjay1hMDU7XG4gIGhlaWdodDogQG1haW4tZ3JpZCAqIDc7XG5cbiAgLmMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogQGJsYWNrLWE0MDtcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/layout/general-layout/general-layout.component.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/shared/layout/general-layout/general-layout.component.ts ***!
          \**************************************************************************/
        /*! exports provided: GeneralLayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLayoutComponent", function () { return GeneralLayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_device_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/device-detector.service */ "./src/app/shared/service/device-detector.service.ts");
            var GeneralLayoutComponent = /** @class */ (function () {
                function GeneralLayoutComponent(device) {
                    this.device = device;
                }
                GeneralLayoutComponent.prototype.ngOnInit = function () {
                };
                return GeneralLayoutComponent;
            }());
            GeneralLayoutComponent.ctorParameters = function () { return [
                { type: _service_device_detector_service__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"] }
            ]; };
            GeneralLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-general-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layout/general-layout/general-layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general-layout.component.less */ "./src/app/shared/layout/general-layout/general-layout.component.less")).default]
                })
            ], GeneralLayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/layout/general-layout/general-layout.module.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/shared/layout/general-layout/general-layout.module.ts ***!
          \***********************************************************************/
        /*! exports provided: GeneralLayoutModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralLayoutModule", function () { return GeneralLayoutModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _apps_mobile_layout_general_layout_component_heading_heading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apps/mobile/layout/general-layout/component/heading/heading.module */ "./src/app/apps/mobile/layout/general-layout/component/heading/heading.module.ts");
            /* harmony import */ var _general_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-layout.component */ "./src/app/shared/layout/general-layout/general-layout.component.ts");
            /* harmony import */ var src_app_apps_desktop_layout_general_layout_component_heading_heading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/apps/desktop/layout/general-layout/component/heading/heading.module */ "./src/app/apps/desktop/layout/general-layout/component/heading/heading.module.ts");
            var GeneralLayoutModule = /** @class */ (function () {
                function GeneralLayoutModule() {
                }
                return GeneralLayoutModule;
            }());
            GeneralLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_general_layout_component__WEBPACK_IMPORTED_MODULE_5__["GeneralLayoutComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_app_apps_desktop_layout_general_layout_component_heading_heading_module__WEBPACK_IMPORTED_MODULE_6__["HeadingModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                        _apps_mobile_layout_general_layout_component_heading_heading_module__WEBPACK_IMPORTED_MODULE_4__["HeadingModule"]
                    ]
                })
            ], GeneralLayoutModule);
            /***/ 
        }),
        /***/ "./src/app/shared/page/employee-page/employee-page.component.less": 
        /*!************************************************************************!*\
          !*** ./src/app/shared/page/employee-page/employee-page.component.less ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-employee {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.un-employee .p-page-content {\n  padding: 56px 0 24px;\n}\n.un-employee-entry {\n  display: flex;\n}\n.un-employee-entry__avatar {\n  border-radius: 2px;\n  max-width: 200px;\n  min-width: 200px;\n  overflow: hidden;\n}\n.un-employee-entry__content {\n  flex-grow: 1;\n  margin: 0 0 0 48px;\n}\n.un-employee-entry + .un-employee-entry {\n  margin: 48px 0;\n}\n.un-employee-entry-info__name {\n  font-size: 20px;\n  font-weight: 500;\n  color: rgba(36, 36, 36, 0.9);\n}\n.un-employee-entry-info__since {\n  color: rgba(36, 36, 36, 0.5);\n  font-size: 14px;\n  margin: 8px 0 0;\n}\n.un-employee-entry-description {\n  font-size: 16px;\n  margin: 24px 0 0;\n  line-height: 1.9;\n}\n.un-employee-entry-description ::ng-deep b {\n  font-weight: 500;\n}\n.un-employee-entry-description ::ng-deep p:first-child {\n  margin-top: 0;\n}\n.un-employee-entry-description ::ng-deep p:last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 1000px) {\n  .un-employee-entry {\n    display: block;\n  }\n  .un-employee-entry__avatar {\n    margin: 0 0 16px 0;\n    max-width: 100%;\n    min-width: 100%;\n    text-align: center;\n  }\n  .un-employee-entry__content {\n    margin: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2UvZW1wbG95ZWUtcGFnZS9lbXBsb3llZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9lbXBsb3llZS1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9lbXBsb3llZS1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2dyaWQubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvZW1wbG95ZWUtcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL190b29sdGlwLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlL2VtcGxveWVlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9lbXBsb3llZS1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2dlbmVyYWwubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvZW1wbG95ZWUtcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9wYWdlL19sYXlvdXQtc2IubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvZW1wbG95ZWUtcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvc2hhcmVkL3BhZ2UvZW1wbG95ZWUtcGFnZS9lbXBsb3llZS1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNBWDtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJHQUFBO0FERUY7QUNBQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtIQUFBO0FERUY7QUNDQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURDRjtBQ0VBO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFGO0FBQ0EsZUFBZTtBRXZDZjtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBRS9DQTtFQUNFO0lBQ0UsVUFBQTtFRnlDRjtFRXZDQTtJQUNFLFVBQUE7RUZ5Q0Y7QUFDRjtBQUNBLGdCQUFnQjtBR2hEaEI7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBSGtERjtBRy9DQTtFQUNFO0lBQ0UsZUFBQTtFSGlERjtBQUNGO0FJM0RBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBRUEsYUFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFFQSxpQkFBQTtBSjJERjtBSXpERTtFQUNFLGNBQUE7QUoyREo7QUt2RUE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FMeUVGO0FLdEVBO0VBQ0U7SUFDRSxrQkFBQTtFTHdFRjtBQUNGO0FBQ0EsVUFBVTtBTW5GVjtFQUNFLFlBQUE7QU5xRkY7QU1uRkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QU5xRko7QU12RkU7RUFLSSxlQUFBO0FOcUZOO0FNN0ZBO0VBYUksV0FBQTtFQUNBLHFCQUFBO0VBRUEsVUFBQTtBTmtGSjtBTWhGSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBTmtGTjtBTS9FSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FOaUZOO0FNNUVJO0VBQ0UsVUFBQTtBTjhFTjtBTTNFSTtFQUNFLFVBQUE7QU42RU47QU0xRUk7RUFDRSxVQUFBO0FONEVOO0FNekVJO0VBQ0UsV0FBQTtBTjJFTjtBTXRIQTtFQWdESSxhQUFBO0FOeUVKO0FNdkVJO0VBQ0UsYUFBQTtBTnlFTjtBTXRFSTtFQUNFLGdCQUFBO0FOd0VOO0FNL0hBO0VBNERJLGdCQUFBO0FOc0VKO0FNbElBO0VBZ0VJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FOcUVKO0FNbkVJO0VBQ0UsY0FBQTtBTnFFTjtBTWxFSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QU5vRU47QU1sRU07RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtBTm9FUjtBTTFKQTtFQTRGSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxnQkFBQTtBTmlFSjtBTS9ESTtFQUNFLGVBQUE7T0FBQSxVQUFBO0FOaUVOO0FNOURJO0VBQ0UsZUFBQTtPQUFBLFVBQUE7QU5nRU47QU10S0E7RUEyR0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjhESjtBTTVESTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FOOEROO0FNM0RJO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBTjZETjtBTTNETTtFQUNFLFlBQUE7QU42RFI7QU0xRE07RUFDRSxZQUFBO0FONERSO0FNekRNO0VBQ0UsWUFBQTtBTjJEUjtBTXZESTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QU55RE47QU10REk7RUFDRSxhQUFBO0FOd0ROO0FNek1BO0VBc0pJLGlCQUFBO0VBQ0Esa0JBQUE7QU5zREo7QU1sREk7RUFDRSxnQkFBQTtBTm9ETjtBTWxESTtFQUNFLGtCQUFBO0FOb0ROO0FNbERJO0VBQ0UsaUJBQUE7QU5vRE47QU10TkE7RUF1S0ksZ0JBQUE7QU5rREo7QU16TkE7RUEyS0ksZ0JBQUE7QU5pREo7QU01TkE7O0VBZ0xJLGFBQUE7QU5nREo7QU05Q0k7Ozs7RUFDRSxlQUFBO0FObUROO0FNOUNBO0VBRUk7SUFFSSxpQkFBQTtFTjhDTjtFTWpEQTtJQVFJLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO1NBQUEsZUFBQTtJQUNBLGdCQUFBO0VONENKO0VNMUNJOztJQUVFLGVBQUE7U0FBQSxVQUFBO0VONENOO0VNdkNJOzs7SUFHRSxXQUFBO0VOeUNOO0VNaEVBO0lBNEJJLHNCQUFBO0lBQ0EsNkJBQUE7SUFFQSxXQUFBO0VOc0NKO0VNckVBO0lBbUNJLGNBQUE7SUFDQSxlQUFBO0VOcUNKO0VNbkNJO0lBQ0Usa0JBQUE7RU5xQ047RU1uQ007SUFDRSxlQUFBO0lBQ0EsTUFBQTtFTnFDUjtBQUNGO0FDMVFDO0VNR0MsYUFBQTtFQUNBLGtCQUFBO0FQMFFGO0FDOVFDO0VNT0csbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QVAwUUo7QUN2UkM7RU1pQkcseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QVB5UUo7QUMxUkM7RU1vQkssa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBUHlRTjtBQ3BTQztFTThCTyxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBUHlRUjtBQzFTQztFTXVDRyxZQUFBO0FQc1FKO0FPbFFBO0VOM0NDO0lNNkNHLGNBQUE7RVBvUUY7RUNqVEQ7SU1nREssZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0VQb1FKO0VDelREO0lNeURLLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VQbVFKO0VDalVEO0lNaUVPLGdCQUFBO0VQbVFOO0VDcFVEO0lNb0VTLGVBQUE7SUFDQSxrQkFBQTtFUG1RUjtBQUNGO0FRdlVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBUnlVRjtBUXRVSTtFQUNFLG9CQUFBO0FSd1VOO0FRcFVFO0VBQ0UsYUFBQTtBUnNVSjtBUXBVSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FSc1VOO0FRblVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FScVVOO0FRbFVJO0VBQ0UsY0FBQTtBUm9VTjtBUWhVTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FSa1VSO0FRL1RNO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBUmlVUjtBUTdUSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FSK1ROO0FRbFVJO0VBT00sZ0JBQUE7QVI4VFY7QVFyVUk7RUFXTSxhQUFBO0FSNlRWO0FReFVJO0VBY00sZ0JBQUE7QVI2VFY7QVF0VEE7RUFFSTtJQUNFLGNBQUE7RVJ1VEo7RVFyVEk7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RVJ1VE47RVFwVEk7SUFDRSxTQUFBO0VSc1ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnZS9lbXBsb3llZS1wYWdlL2VtcGxveWVlLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSUNPTlMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLyoqIFZBUklBQkxFUyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiogQ09NUE9ORU5UUyAqL1xuLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gIH1cbn1cbi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAxNnB4IDAgMDtcbn1cbi5jLXRvb2x3aW5kb3ctLXBhcmVudDpob3ZlciAuYy10b29sd2luZG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiAzMnB4IDE2cHg7XG4gIH1cbn1cbi8qKiBQQUdFICovXG4ucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnAtcGFnZS0tZ2VuZXJhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIuOTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLnAtcGFnZSAucC1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNDhweCAyNHB4IDA7XG4gIHdpZHRoOiAyNSU7XG59XG4ucC1wYWdlIC5wLWltYWdlLS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAwIDAgMjRweCA0OHB4O1xufVxuLnAtcGFnZSAucC1pbWFnZS5wLXctLTEwMCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ucC1wYWdlIC5wLXctLTMwIHtcbiAgd2lkdGg6IDMzJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNTAge1xuICB3aWR0aDogNTAlO1xufVxuLnAtcGFnZSAucC13LS03NSB7XG4gIHdpZHRoOiA3NSU7XG59XG4ucC1wYWdlIC5wLXctLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGgge1xuICBtYXJnaW46IDJlbSAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnAtcGFnZSBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM5ZDhjNWQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudDpob3ZlciB7XG4gIGNvbG9yOiAjOGQ3ZTU0O1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMCA4cHggMCAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG59XG4ucC1wYWdlIC5wLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgLnAtY29sLTIge1xuICBjb2x1bW5zOiAyO1xufVxuLnAtcGFnZSAucC1jb2wtMyB7XG4gIGNvbHVtbnM6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMTBweCAxcHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1hcmdpbjogMCAwIDE2cHggMDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sIHtcbiAgd2lkdGg6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTIge1xuICBmbGV4LWdyb3c6IDI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMyB7XG4gIGZsZXgtZ3JvdzogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS00IHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnAtcGFnZSAucC1jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLWFsaWduLS1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnAtcGFnZSAucC1jZiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgdWwgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSB1bCArIC5wLXBhZ2Ugb2wsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIG9sIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWdlbmVyYWwgLnAtcGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMnB4IDhweDtcbiAgfVxuICAucC1wYWdlIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sLTIsXG4gIC5wLXBhZ2UgLnAtY29sLTMge1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbiAgLnAtcGFnZSAucC13LS0zMCxcbiAgLnAtcGFnZSAucC13LS01MCxcbiAgLnAtcGFnZSAucC13LS03NSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAyNHB4IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgdG9wOiAwO1xuICB9XG59XG4ucC1wYWdlLS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjZlZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luOiAwIDAgMCAtODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICB6LWluZGV4OiAwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2UtLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICB9XG59XG4udW4tZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG59XG4udW4tZW1wbG95ZWUgLnAtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogNTZweCAwIDI0cHg7XG59XG4udW4tZW1wbG95ZWUtZW50cnkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVuLWVtcGxveWVlLWVudHJ5X19hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udW4tZW1wbG95ZWUtZW50cnlfX2NvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogMCAwIDAgNDhweDtcbn1cbi51bi1lbXBsb3llZS1lbnRyeSArIC51bi1lbXBsb3llZS1lbnRyeSB7XG4gIG1hcmdpbjogNDhweCAwO1xufVxuLnVuLWVtcGxveWVlLWVudHJ5LWluZm9fX25hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuOSk7XG59XG4udW4tZW1wbG95ZWUtZW50cnktaW5mb19fc2luY2Uge1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cbi51bi1lbXBsb3llZS1lbnRyeS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgbGluZS1oZWlnaHQ6IDEuOTtcbn1cbi51bi1lbXBsb3llZS1lbnRyeS1kZXNjcmlwdGlvbiA6Om5nLWRlZXAgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udW4tZW1wbG95ZWUtZW50cnktZGVzY3JpcHRpb24gOjpuZy1kZWVwIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnVuLWVtcGxveWVlLWVudHJ5LWRlc2NyaXB0aW9uIDo6bmctZGVlcCBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC51bi1lbXBsb3llZS1lbnRyeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVuLWVtcGxveWVlLWVudHJ5X19hdmF0YXIge1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudW4tZW1wbG95ZWUtZW50cnlfX2NvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuIiwiQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCIuYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBAY29udGFpbmVyLXdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBAbWFpbi1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgKiAxLjU7XG4gIH1cbn1cbiIsIi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogNCAwIDA7XG5cbiAgJi0tcGFyZW50OmhvdmVyICYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIuYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAwIEBibGFjay1hMDU7XG4gIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNTtcbiAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtdGlsZSB7XG4gICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZCAqIDI7XG4gIH1cbn1cbiIsIi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgJi0tZ2VuZXJhbCB7XG4gICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMjtcbiAgICBsaW5lLWhlaWdodDogMi45O1xuXG4gICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA4IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtaW1hZ2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCBAbWFpbi1ncmlkICogNiBAbWFpbi1ncmlkICogMyAwO1xuXG4gICAgd2lkdGg6IDI1JTtcblxuICAgICYtLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAzIEBtYWluLWdyaWQgKiA2O1xuICAgIH1cblxuICAgICYucC13LS0xMDAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtdyB7XG4gICAgJi0tMzAge1xuICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG5cbiAgICAmLS01MCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYtLTc1IHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgJi0tMTAwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5wLXBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAyZW0gMDtcblxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5wLWF0dGFjaG1lbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogQG1haW4tY29sb3ItZGFyaztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oQG1haW4tY29sb3ItZGFyaywgNSUpO1xuICAgIH1cblxuICAgICZfX3R5cGUge1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgMCBAc2Vjb25kYXJ5LWdyaWQgKiA2O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICAgICAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi0yIHtcbiAgICAgIGNvbHVtbnM6IDI7XG4gICAgfVxuXG4gICAgJi0zIHtcbiAgICAgIGNvbHVtbnM6IDM7XG4gICAgfVxuICB9XG5cbiAgLnAtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICBib3gtc2hhZG93OiAwIEBzZWNvbmRhcnktZ3JpZCAvIDQgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgKiAyLjUgQHNlY29uZGFyeS1ncmlkIC8gNCBAYmxhY2stYTA1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogMyAwIDA7XG5cbiAgICAmLWhlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IEBibGFjay1hMDU7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMiAwO1xuICAgIH1cblxuICAgICYtY29sIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogMyBAbWFpbi1ncmlkICogMztcblxuICAgICAgJi0tMiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIH1cblxuICAgICAgJi0tMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgIH1cblxuICAgICAgJi0tNCB7XG4gICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzLjU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cblxuICAucC1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5wLWFsaWduIHtcbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICYtLXJpZ2h0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNmIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIH1cblxuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlIHtcbiAgICAmLS1nZW5lcmFsIHtcbiAgICAgIC5wLXBhZ2UtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA0IEBtYWluLWdyaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtY29sIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICYtMixcbiAgICAgICYtMyB7XG4gICAgICAgIGNvbHVtbnM6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtdyB7XG4gICAgICAmLS0zMCxcbiAgICAgICYtLTUwLFxuICAgICAgJi0tNzUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1pbWFnZSB7XG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgMCAhaW1wb3J0YW50O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucC1hdHRhY2htZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiBAbWFpbi1ncmlkIDAgMDtcblxuICAgICAgJl9fdHlwZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHI6IH4nLnAtcGFnZSc7XG5cbkB7cn0tLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAe3J9LXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yLWxpZ2h0O1xuICAgIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA1IDAgQGJsYWNrLWEwNTtcbiAgICBtYXgtd2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtaW4td2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtYXJnaW46IDAgMCAwIC1AbWFpbi1ncmlkICogMTA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKEBtYWluLWdyaWQgKiAxMCk7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBAe3J9LXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogQG1haW4tZ3JpZCAqIDM7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIGNvbG9yOiBAYmxhY2stYTkwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEB7cn0tY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBAe3J9LS1sYXlvdXQtc2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgQHtyfS1zaWRlYmFyIHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiAyIDA7XG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgIG1pbi1oZWlnaHQ6IEBtYWluLWdyaWQgKiAxMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogQG1haW4tZ3JpZDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IEBtYWluLWdyaWQ7XG5cbiAgICAgIEB7cn0tdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RoZW1lJztcblxuLnVuLWVtcGxveWVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuXG4gIC5wLXBhZ2Uge1xuICAgICYtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNyAwIEBtYWluLWdyaWQgKiAzO1xuICAgIH1cbiAgfVxuXG4gICYtZW50cnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAmX19hdmF0YXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkIC8gMjtcbiAgICAgIG1heC13aWR0aDogQG1haW4tZ3JpZCAqIDI1O1xuICAgICAgbWluLXdpZHRoOiBAbWFpbi1ncmlkICogMjU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgbWFyZ2luOiAwIDAgMCBAbWFpbi1ncmlkICogNjtcbiAgICB9XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgKiA2IDA7XG4gICAgfVxuXG4gICAgJi1pbmZvIHtcbiAgICAgICZfX25hbWUge1xuICAgICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiBAYmxhY2stYTkwO1xuICAgICAgfVxuXG4gICAgICAmX19zaW5jZSB7XG4gICAgICAgIGNvbG9yOiBAYmxhY2stYTUwO1xuICAgICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgICAgbWFyZ2luOiBAbWFpbi1ncmlkIDAgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDI7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzIDAgMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjk7XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIGIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnVuLWVtcGxveWVlIHtcbiAgICAmLWVudHJ5IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAmX19hdmF0YXIge1xuICAgICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAmX19jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/page/employee-page/employee-page.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/page/employee-page/employee-page.component.ts ***!
          \**********************************************************************/
        /*! exports provided: EmployeePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageComponent", function () { return EmployeePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configuration/teacher/teachers */ "./src/app/configuration/teacher/teachers.ts");
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
            /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
            var EmployeePageComponent = /** @class */ (function () {
                function EmployeePageComponent(route) {
                    this.route = route;
                    this.teachers = src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_3__["default"];
                }
                EmployeePageComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (_a) {
                        var id = _a.id;
                        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isString"])(id)) {
                            var num = Math.min(src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_3__["default"].length - 1, Math.max(0, parseInt(id, 10)));
                            document.body.scrollTop =
                                _this.teacherListRef.nativeElement.children[num].getBoundingClientRect().top +
                                    document.body.scrollTop;
                        }
                    });
                };
                return EmployeePageComponent;
            }());
            EmployeePageComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('teacherList', { static: true })
            ], EmployeePageComponent.prototype, "teacherListRef", void 0);
            EmployeePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/employee-page/employee-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-page.component.less */ "./src/app/shared/page/employee-page/employee-page.component.less")).default]
                })
            ], EmployeePageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/page/employee-page/employee-page.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/page/employee-page/employee-page.module.ts ***!
          \*******************************************************************/
        /*! exports provided: EmployeePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePageModule", function () { return EmployeePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _employee_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-page.component */ "./src/app/shared/page/employee-page/employee-page.component.ts");
            var EmployeePageModule = /** @class */ (function () {
                function EmployeePageModule() {
                }
                return EmployeePageModule;
            }());
            EmployeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_employee_page_component__WEBPACK_IMPORTED_MODULE_3__["EmployeePageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], EmployeePageModule);
            /***/ 
        }),
        /***/ "./src/app/shared/page/healing-page/healing-page.component.less": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/page/healing-page/healing-page.component.less ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-learning {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2UvaGVhbGluZy1wYWdlL2hlYWxpbmctcGFnZS5jb21wb25lbnQubGVzcyIsImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZCIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvaGVhbGluZy1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fZ3JpZC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdG9vbHRpcC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fZ2VuZXJhbC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fbGF5b3V0LXNiLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlL2hlYWxpbmctcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvc2hhcmVkL3BhZ2UvaGVhbGluZy1wYWdlL2hlYWxpbmctcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FDQVg7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyR0FBQTtBREVGO0FDQUE7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrSEFBQTtBREVGO0FDQ0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURBRjtBQUNBLGVBQWU7QUV2Q2Y7RUFDRTtJQUNFLFVBQUE7RUZ5Q0Y7RUV2Q0E7SUFDRSxVQUFBO0VGeUNGO0FBQ0Y7QUUvQ0E7RUFDRTtJQUNFLFVBQUE7RUZ5Q0Y7RUV2Q0E7SUFDRSxVQUFBO0VGeUNGO0FBQ0Y7QUFDQSxnQkFBZ0I7QUdoRGhCO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUhrREY7QUcvQ0E7RUFDRTtJQUNFLGVBQUE7RUhpREY7QUFDRjtBSTNEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUVBLGFBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBRUEsaUJBQUE7QUoyREY7QUl6REU7RUFDRSxjQUFBO0FKMkRKO0FLdkVBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBTHlFRjtBS3RFQTtFQUNFO0lBQ0Usa0JBQUE7RUx3RUY7QUFDRjtBQUNBLFVBQVU7QU1uRlY7RUFDRSxZQUFBO0FOcUZGO0FNbkZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FOcUZKO0FNdkZFO0VBS0ksZUFBQTtBTnFGTjtBTTdGQTtFQWFJLFdBQUE7RUFDQSxxQkFBQTtFQUVBLFVBQUE7QU5rRko7QU1oRkk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QU5rRk47QU0vRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBTmlGTjtBTTVFSTtFQUNFLFVBQUE7QU44RU47QU0zRUk7RUFDRSxVQUFBO0FONkVOO0FNMUVJO0VBQ0UsVUFBQTtBTjRFTjtBTXpFSTtFQUNFLFdBQUE7QU4yRU47QU10SEE7RUFnREksYUFBQTtBTnlFSjtBTXZFSTtFQUNFLGFBQUE7QU55RU47QU10RUk7RUFDRSxnQkFBQTtBTndFTjtBTS9IQTtFQTRESSxnQkFBQTtBTnNFSjtBTWxJQTtFQWdFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBTnFFSjtBTW5FSTtFQUNFLGNBQUE7QU5xRU47QU1sRUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FOb0VOO0FNbEVNO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7QU5vRVI7QU0xSkE7RUE0RkkscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsZ0JBQUE7QU5pRUo7QU0vREk7RUFDRSxlQUFBO09BQUEsVUFBQTtBTmlFTjtBTTlESTtFQUNFLGVBQUE7T0FBQSxVQUFBO0FOZ0VOO0FNdEtBO0VBMkdJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU44REo7QU01REk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBTjhETjtBTTNESTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QU42RE47QU0zRE07RUFDRSxZQUFBO0FONkRSO0FNMURNO0VBQ0UsWUFBQTtBTjREUjtBTXpETTtFQUNFLFlBQUE7QU4yRFI7QU12REk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FOeUROO0FNdERJO0VBQ0UsYUFBQTtBTndETjtBTXpNQTtFQXNKSSxpQkFBQTtFQUNBLGtCQUFBO0FOc0RKO0FNbERJO0VBQ0UsZ0JBQUE7QU5vRE47QU1sREk7RUFDRSxrQkFBQTtBTm9ETjtBTWxESTtFQUNFLGlCQUFBO0FOb0ROO0FNdE5BO0VBdUtJLGdCQUFBO0FOa0RKO0FNek5BO0VBMktJLGdCQUFBO0FOaURKO0FNNU5BOztFQWdMSSxhQUFBO0FOZ0RKO0FNOUNJOzs7O0VBQ0UsZUFBQTtBTm1ETjtBTTlDQTtFQUVJO0lBRUksaUJBQUE7RU44Q047RU1qREE7SUFRSSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtTQUFBLGVBQUE7SUFDQSxnQkFBQTtFTjRDSjtFTTFDSTs7SUFFRSxlQUFBO1NBQUEsVUFBQTtFTjRDTjtFTXZDSTs7O0lBR0UsV0FBQTtFTnlDTjtFTWhFQTtJQTRCSSxzQkFBQTtJQUNBLDZCQUFBO0lBRUEsV0FBQTtFTnNDSjtFTXJFQTtJQW1DSSxjQUFBO0lBQ0EsZUFBQTtFTnFDSjtFTW5DSTtJQUNFLGtCQUFBO0VOcUNOO0VNbkNNO0lBQ0UsZUFBQTtJQUNBLE1BQUE7RU5xQ1I7QUFDRjtBQzFRQztFTUdDLGFBQUE7RUFDQSxrQkFBQTtBUDBRRjtBQzlRQztFTU9HLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FQMFFKO0FDdlJDO0VNaUJHLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FQeVFKO0FDMVJDO0VNb0JLLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QVB5UU47QUNwU0M7RU04Qk8scUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QVB5UVI7QUMxU0M7RU11Q0csWUFBQTtBUHNRSjtBT2xRQTtFTjNDQztJTTZDRyxjQUFBO0VQb1FGO0VDalREO0lNZ0RLLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtFUG9RSjtFQ3pURDtJTXlESyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFUG1RSjtFQ2pVRDtJTWlFTyxnQkFBQTtFUG1RTjtFQ3BVRDtJTW9FUyxlQUFBO0lBQ0Esa0JBQUE7RVBtUVI7QUFDRjtBUXZVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QVJ5VUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnZS9oZWFsaW5nLXBhZ2UvaGVhbGluZy1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIElDT05TICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbi8qKiBWQVJJQUJMRVMgKi9cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyoqIENPTVBPTkVOVFMgKi9cbi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG59XG4uYy10b29sd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMTZweCAwIDA7XG59XG4uYy10b29sd2luZG93LS1wYXJlbnQ6aG92ZXIgLmMtdG9vbHdpbmRvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmMtdGlsZSB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtdGlsZSB7XG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xuICB9XG59XG4vKiogUEFHRSAqL1xuLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjk7XG59XG4ucC1wYWdlLS1nZW5lcmFsIC5wLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDQ4cHggMjRweCAwO1xuICB3aWR0aDogMjUlO1xufVxuLnAtcGFnZSAucC1pbWFnZS0tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDI0cHggNDhweDtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2UucC13LS0xMDAge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnAtcGFnZSAucC13LS0zMCB7XG4gIHdpZHRoOiAzMyU7XG59XG4ucC1wYWdlIC5wLXctLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNzUge1xuICB3aWR0aDogNzUlO1xufVxuLnAtcGFnZSAucC13LS0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wLXBhZ2UgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjOWQ4YzVkO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnQ6aG92ZXIge1xuICBjb2xvcjogIzhkN2U1NDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgOHB4IDAgMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xufVxuLnAtcGFnZSAucC1jb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2x1bW4tZ2FwOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIC5wLWNvbC0yIHtcbiAgY29sdW1uczogMjtcbn1cbi5wLXBhZ2UgLnAtY29sLTMge1xuICBjb2x1bW5zOiAzO1xufVxuLnAtcGFnZSAucC10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDEwcHggMXB4IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMjRweCAwIDA7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXJnaW46IDAgMCAxNnB4IDA7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbCB7XG4gIHdpZHRoOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS0yIHtcbiAgZmxleC1ncm93OiAyO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTMge1xuICBmbGV4LWdyb3c6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tNCB7XG4gIGZsZXgtZ3JvdzogNDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCAucC10YWJsZS1jb2wge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wLXBhZ2UgLnAtY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnAtcGFnZSAucC1hbGlnbi0tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wLXBhZ2UgLnAtY2Yge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnAtcGFnZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG59XG4ucC1wYWdlIHVsLFxuLnAtcGFnZSBvbCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIHVsICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2UgdWwgKyAucC1wYWdlIG9sLFxuLnAtcGFnZSBvbCArIC5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSBvbCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlLS1nZW5lcmFsIC5wLXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZzogMzJweCA4cHg7XG4gIH1cbiAgLnAtcGFnZSAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAucC1wYWdlIC5wLWNvbC0yLFxuICAucC1wYWdlIC5wLWNvbC0zIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG4gIC5wLXBhZ2UgLnAtdy0tMzAsXG4gIC5wLXBhZ2UgLnAtdy0tNTAsXG4gIC5wLXBhZ2UgLnAtdy0tNzUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wLXBhZ2UgLnAtaW1hZ2Uge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDAgMjRweCAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHRvcDogMDtcbiAgfVxufVxuLnAtcGFnZS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICNmOWY2ZWY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMCAwIDAgLTgwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KTtcbiAgei1pbmRleDogMDtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC45KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2UtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlLS1sYXlvdXQtc2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgfVxufVxuLnVuLWxlYXJuaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cblxuLm1hdGVyaWFsLWljb25zLW91dGxpbmVkIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuIiwiQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCIuYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBAY29udGFpbmVyLXdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCBAbWFpbi1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgKiAxLjU7XG4gIH1cbn1cbiIsIi5jLXRvb2x3aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogNCAwIDA7XG5cbiAgJi0tcGFyZW50OmhvdmVyICYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIuYy10aWxlIHtcbiAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAwIEBibGFjay1hMDU7XG4gIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNTtcbiAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtdGlsZSB7XG4gICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZCAqIDI7XG4gIH1cbn1cbiIsIi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgJi0tZ2VuZXJhbCB7XG4gICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMjtcbiAgICBsaW5lLWhlaWdodDogMi45O1xuXG4gICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA4IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtaW1hZ2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMCBAbWFpbi1ncmlkICogNiBAbWFpbi1ncmlkICogMyAwO1xuXG4gICAgd2lkdGg6IDI1JTtcblxuICAgICYtLXJpZ2h0IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAzIEBtYWluLWdyaWQgKiA2O1xuICAgIH1cblxuICAgICYucC13LS0xMDAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnAtdyB7XG4gICAgJi0tMzAge1xuICAgICAgd2lkdGg6IDMzJTtcbiAgICB9XG5cbiAgICAmLS01MCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYtLTc1IHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuXG4gICAgJi0tMTAwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5wLXBhcmFncmFwaCB7XG4gICAgbWFyZ2luOiAyZW0gMDtcblxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5wLWF0dGFjaG1lbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogQG1haW4tY29sb3ItZGFyaztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oQG1haW4tY29sb3ItZGFyaywgNSUpO1xuICAgIH1cblxuICAgICZfX3R5cGUge1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQgMCBAc2Vjb25kYXJ5LWdyaWQgKiA2O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICAgICAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJi0yIHtcbiAgICAgIGNvbHVtbnM6IDI7XG4gICAgfVxuXG4gICAgJi0zIHtcbiAgICAgIGNvbHVtbnM6IDM7XG4gICAgfVxuICB9XG5cbiAgLnAtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IEB3aGl0ZS1hMTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICBib3gtc2hhZG93OiAwIEBzZWNvbmRhcnktZ3JpZCAvIDQgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgKiAyLjUgQHNlY29uZGFyeS1ncmlkIC8gNCBAYmxhY2stYTA1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogMyAwIDA7XG5cbiAgICAmLWhlYWQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6IEBibGFjay1hMDU7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMiAwO1xuICAgIH1cblxuICAgICYtY29sIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogQHNlY29uZGFyeS1ncmlkICogMyBAbWFpbi1ncmlkICogMztcblxuICAgICAgJi0tMiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIH1cblxuICAgICAgJi0tMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMztcbiAgICAgIH1cblxuICAgICAgJi0tNCB7XG4gICAgICAgIGZsZXgtZ3JvdzogNDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzLjU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cblxuICAucC1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5wLWFsaWduIHtcbiAgICAmLS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgICYtLWNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICYtLXJpZ2h0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNmIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIH1cblxuICB1bCxcbiAgb2wge1xuICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlIHtcbiAgICAmLS1nZW5lcmFsIHtcbiAgICAgIC5wLXBhZ2UtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA0IEBtYWluLWdyaWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtY29sIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sdW1uLWdhcDogQG1haW4tZ3JpZDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICYtMixcbiAgICAgICYtMyB7XG4gICAgICAgIGNvbHVtbnM6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtdyB7XG4gICAgICAmLS0zMCxcbiAgICAgICYtLTUwLFxuICAgICAgJi0tNzUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1pbWFnZSB7XG4gICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgMCAhaW1wb3J0YW50O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucC1hdHRhY2htZW50IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiBAbWFpbi1ncmlkIDAgMDtcblxuICAgICAgJl9fdHlwZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHI6IH4nLnAtcGFnZSc7XG5cbkB7cn0tLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAe3J9LXNpZGViYXIge1xuICAgIGJhY2tncm91bmQ6IEBtYWluLWNvbG9yLWxpZ2h0O1xuICAgIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgKiA1IDAgQGJsYWNrLWEwNTtcbiAgICBtYXgtd2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtaW4td2lkdGg6IEBtYWluLWdyaWQgKiAxMDtcbiAgICBtYXJnaW46IDAgMCAwIC1AbWFpbi1ncmlkICogMTA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKEBtYWluLWdyaWQgKiAxMCk7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICBAe3J9LXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogQG1haW4tZ3JpZCAqIDM7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIGNvbG9yOiBAYmxhY2stYTkwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEB7cn0tY29udGVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBAe3J9LS1sYXlvdXQtc2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgQHtyfS1zaWRlYmFyIHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiAyIDA7XG4gICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgIG1pbi1oZWlnaHQ6IEBtYWluLWdyaWQgKiAxMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogQG1haW4tZ3JpZDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IEBtYWluLWdyaWQ7XG5cbiAgICAgIEB7cn0tdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3RoZW1lJztcblxuLnVuLWxlYXJuaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/page/healing-page/healing-page.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/page/healing-page/healing-page.component.ts ***!
          \********************************************************************/
        /*! exports provided: HealingPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealingPageComponent", function () { return HealingPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HealingPageComponent = /** @class */ (function () {
                function HealingPageComponent() {
                }
                HealingPageComponent.prototype.ngOnInit = function () {
                };
                return HealingPageComponent;
            }());
            HealingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-healing-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./healing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/healing-page/healing-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./healing-page.component.less */ "./src/app/shared/page/healing-page/healing-page.component.less")).default]
                })
            ], HealingPageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/page/healing-page/healing-page.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shared/page/healing-page/healing-page.module.ts ***!
          \*****************************************************************/
        /*! exports provided: HealingPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealingPageModule", function () { return HealingPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _healing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./healing-page.component */ "./src/app/shared/page/healing-page/healing-page.component.ts");
            var HealingPageModule = /** @class */ (function () {
                function HealingPageModule() {
                }
                return HealingPageModule;
            }());
            HealingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_healing_page_component__WEBPACK_IMPORTED_MODULE_3__["HealingPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], HealingPageModule);
            /***/ 
        }),
        /***/ "./src/app/shared/page/landing-page/landing-page.component.less": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/page/landing-page/landing-page.component.less ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-landing {\n  overflow: hidden;\n}\n.un-landing-news-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -32px;\n}\n.un-landing-news {\n  display: flex;\n  background: #fafafa;\n  box-shadow: 0 0 20px 4px rgba(36, 36, 36, 0.05);\n  width: calc(50% - 8px * 8);\n  margin: 32px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.un-landing-news-image,\n.un-landing-news-content {\n  width: 0;\n}\n.un-landing-news-image {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 2;\n}\n.un-landing-news-image img {\n  flex-grow: 1;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.un-landing-news-content {\n  padding: 24px 20px;\n  flex-grow: 4;\n}\n.un-landing-news-text {\n  height: 160px;\n}\n.un-landing-news-text__title {\n  font-size: 20px;\n  letter-spacing: 0.005em;\n  margin: 0 0 8px 0;\n}\n.un-landing-news-text__text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n  max-height: calc(1rem * 1.6 * 4);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  line-height: 1.7;\n  letter-spacing: 0.3px;\n}\n.un-landing-news-go {\n  display: flex;\n  justify-content: flex-end;\n}\n.un-landing-news-go__btn {\n  color: #9d8c5d;\n  margin: -8px;\n  padding: 8px;\n  border-radius: 4px;\n}\n.un-landing-news-go__btn:hover {\n  background: rgba(36, 36, 36, 0.025);\n}\n.un-landing-teacher-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -24px;\n}\n.un-landing-teacher {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  width: calc(33% - 8px * 6);\n  margin: 24px;\n  padding: 24px;\n  border-radius: 4px;\n  background: #fafafa;\n}\n.un-landing-teacher-image {\n  display: flex;\n  justify-content: center;\n}\n.un-landing-teacher-image img {\n  height: 112px;\n  min-width: 112px;\n  max-width: 112px;\n  border-radius: 100%;\n  overflow: hidden;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top center;\n     object-position: top center;\n  box-shadow: 0 0 1px 0 rgba(36, 36, 36, 0.9);\n}\n.un-landing-teacher-content {\n  text-align: center;\n  margin: 32px 0 0;\n  line-height: 1.6;\n}\n.un-landing-teacher__name {\n  font-size: 20px;\n  margin: 0 0 8px 0;\n}\n.un-landing-teacher__type {\n  color: rgba(36, 36, 36, 0.8);\n}\n.un-about {\n  padding: 40px 0 80px;\n}\n.un-about__title {\n  color: #413b0c;\n  font-size: 32px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  line-height: 3;\n  margin: 0 0 24px;\n}\n.un-about .un-image-wrap {\n  display: flex;\n  align-items: flex-start;\n  margin: 0 -32px;\n}\n.un-about .un-image-wrap__image,\n.un-about .un-image-wrap__text {\n  margin: 0 32px;\n}\n.un-about .un-image-wrap__images {\n  display: flex;\n  flex-direction: column;\n  max-width: 30%;\n  min-width: 30%;\n  padding: 1em 0 0;\n  margin: -8px 32px;\n}\n.un-about .un-image-wrap__images .un-image-wrap__image {\n  max-width: 100%;\n  min-width: 100%;\n  margin: 0;\n}\n.un-about .un-image-wrap__images .un-image-wrap__image + .un-image-wrap__image {\n  margin: 40px 0 0;\n}\n.un-about .un-image-wrap__image {\n  margin-top: 1em;\n  min-width: 30%;\n  max-width: 30%;\n}\n.un-about .un-image-wrap__text {\n  font-size: 20px;\n  line-height: 2.6;\n}\n.un-about .un-image-wrap--right .un-image-wrap__image,\n.un-about .un-image-wrap--right .un-image-wrap__images {\n  order: 2;\n}\n.un-about .un-image-wrap + .un-image-wrap {\n  padding: 32px 0 0;\n}\n.un-about .un-image-row {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  margin: 64px -24px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.un-about .un-image-row__control {\n  cursor: pointer;\n  margin: 0 24px;\n  opacity: 0.4;\n}\n.un-about .un-image-row__control:hover {\n  opacity: 0.5;\n}\n.un-about .un-image-row__inner {\n  display: flex;\n  overflow: hidden;\n  width: 0;\n  flex-grow: 1;\n  position: relative;\n}\n.un-about .un-image-row__image {\n  min-width: 33.3333%;\n  max-width: 33.3333%;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .un-about .un-image-wrap {\n    display: block;\n    margin: 0;\n  }\n  .un-about .un-image-wrap__images {\n    flex-direction: row;\n    min-width: 100%;\n    margin: 0 -8px;\n  }\n  .un-about .un-image-wrap__images .un-image-wrap__image {\n    min-width: 0;\n    width: 0;\n    flex-grow: 1;\n  }\n  .un-about .un-image-wrap__images .un-image-wrap__image + .un-image-wrap__image {\n    margin: 0;\n  }\n  .un-about .un-image-wrap__image {\n    min-width: unset;\n    max-width: unset;\n    width: 100%;\n    margin: 0;\n    padding: 8px;\n  }\n  .un-about .un-image-wrap__text {\n    margin: 0;\n  }\n  .un-about .un-image-row {\n    align-items: unset;\n  }\n  .un-about .un-image-row__control {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0 24px;\n  }\n  .un-about .un-image-row__image {\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQubGVzcyIsImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZCIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGFuZGluZy1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sYW5kaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fZ3JpZC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sYW5kaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdG9vbHRpcC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sYW5kaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sYW5kaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fZ2VuZXJhbC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sYW5kaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fbGF5b3V0LXNiLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlL2xhbmRpbmctcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvc2hhcmVkL3BhZ2UvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FDQVg7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyR0FBQTtBREVGO0FDQUE7RUFDRSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrSEFBQTtBREVGO0FDQ0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURBRjtBQUNBLGVBQWU7QUV2Q2Y7RUFDRTtJQUNFLFVBQUE7RUZ5Q0Y7RUV2Q0E7SUFDRSxVQUFBO0VGeUNGO0FBQ0Y7QUUvQ0E7RUFDRTtJQUNFLFVBQUE7RUZ5Q0Y7RUV2Q0E7SUFDRSxVQUFBO0VGeUNGO0FBQ0Y7QUFDQSxnQkFBZ0I7QUdoRGhCO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUhrREY7QUcvQ0E7RUFDRTtJQUNFLGVBQUE7RUhpREY7QUFDRjtBSTNEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUVBLGFBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBRUEsaUJBQUE7QUoyREY7QUl6REU7RUFDRSxjQUFBO0FKMkRKO0FLdkVBO0VBQ0UsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBTHlFRjtBS3RFQTtFQUNFO0lBQ0Usa0JBQUE7RUx3RUY7QUFDRjtBQUNBLFVBQVU7QU1uRlY7RUFDRSxZQUFBO0FOcUZGO0FNbkZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FOcUZKO0FNdkZFO0VBS0ksZUFBQTtBTnFGTjtBTTdGQTtFQWFJLFdBQUE7RUFDQSxxQkFBQTtFQUVBLFVBQUE7QU5rRko7QU1oRkk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QU5rRk47QU0vRUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBTmlGTjtBTTVFSTtFQUNFLFVBQUE7QU44RU47QU0zRUk7RUFDRSxVQUFBO0FONkVOO0FNMUVJO0VBQ0UsVUFBQTtBTjRFTjtBTXpFSTtFQUNFLFdBQUE7QU4yRU47QU10SEE7RUFnREksYUFBQTtBTnlFSjtBTXZFSTtFQUNFLGFBQUE7QU55RU47QU10RUk7RUFDRSxnQkFBQTtBTndFTjtBTS9IQTtFQTRESSxnQkFBQTtBTnNFSjtBTWxJQTtFQWdFSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBTnFFSjtBTW5FSTtFQUNFLGNBQUE7QU5xRU47QU1sRUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FOb0VOO0FNbEVNO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLE9BQUE7QU5vRVI7QU0xSkE7RUE0RkkscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsZ0JBQUE7QU5pRUo7QU0vREk7RUFDRSxlQUFBO09BQUEsVUFBQTtBTmlFTjtBTTlESTtFQUNFLGVBQUE7T0FBQSxVQUFBO0FOZ0VOO0FNdEtBO0VBMkdJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU44REo7QU01REk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBTjhETjtBTTNESTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QU42RE47QU0zRE07RUFDRSxZQUFBO0FONkRSO0FNMURNO0VBQ0UsWUFBQTtBTjREUjtBTXpETTtFQUNFLFlBQUE7QU4yRFI7QU12REk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FOeUROO0FNdERJO0VBQ0UsYUFBQTtBTndETjtBTXpNQTtFQXNKSSxpQkFBQTtFQUNBLGtCQUFBO0FOc0RKO0FNbERJO0VBQ0UsZ0JBQUE7QU5vRE47QU1sREk7RUFDRSxrQkFBQTtBTm9ETjtBTWxESTtFQUNFLGlCQUFBO0FOb0ROO0FNdE5BO0VBdUtJLGdCQUFBO0FOa0RKO0FNek5BO0VBMktJLGdCQUFBO0FOaURKO0FNNU5BOztFQWdMSSxhQUFBO0FOZ0RKO0FNOUNJOzs7O0VBQ0UsZUFBQTtBTm1ETjtBTTlDQTtFQUVJO0lBRUksaUJBQUE7RU44Q047RU1qREE7SUFRSSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtTQUFBLGVBQUE7SUFDQSxnQkFBQTtFTjRDSjtFTTFDSTs7SUFFRSxlQUFBO1NBQUEsVUFBQTtFTjRDTjtFTXZDSTs7O0lBR0UsV0FBQTtFTnlDTjtFTWhFQTtJQTRCSSxzQkFBQTtJQUNBLDZCQUFBO0lBRUEsV0FBQTtFTnNDSjtFTXJFQTtJQW1DSSxjQUFBO0lBQ0EsZUFBQTtFTnFDSjtFTW5DSTtJQUNFLGtCQUFBO0VOcUNOO0VNbkNNO0lBQ0UsZUFBQTtJQUNBLE1BQUE7RU5xQ1I7QUFDRjtBQzFRQztFTUdDLGFBQUE7RUFDQSxrQkFBQTtBUDBRRjtBQzlRQztFTU9HLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FQMFFKO0FDdlJDO0VNaUJHLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FQeVFKO0FDMVJDO0VNb0JLLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QVB5UU47QUNwU0M7RU04Qk8scUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QVB5UVI7QUMxU0M7RU11Q0csWUFBQTtBUHNRSjtBT2xRQTtFTjNDQztJTTZDRyxjQUFBO0VQb1FGO0VDalREO0lNZ0RLLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtFUG9RSjtFQ3pURDtJTXlESyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFUG1RSjtFQ2pVRDtJTWlFTyxnQkFBQTtFUG1RTjtFQ3BVRDtJTW9FUyxlQUFBO0lBQ0Esa0JBQUE7RVBtUVI7QUFDRjtBUXZVQTtFQUNFLGdCQUFBO0FSeVVGO0FRdlVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FSeVVKO0FRdFVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FSd1VKO0FRdFVJOztFQUVFLFFBQUE7QVJ3VU47QVFyVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FSdVVOO0FRMVVJO0VBTUksWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QVJ1VVI7QVFuVUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QVJxVU47QVFsVUk7RUFDRSxhQUFBO0FSb1VOO0FRbFVNO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QVJvVVI7QVFqVU07RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFFQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QVJpVVI7QVE3VEk7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QVIrVE47QVE3VE07RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBUitUUjtBUTdUUTtFQUNFLG1DQUFBO0FSK1RWO0FRelRFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FSMlRKO0FReFRFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FSeVRKO0FRdlRJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FSeVROO0FRM1RJO0VBS0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDhCQUFBO0tBQUEsMkJBQUE7RUFDQSwyQ0FBQTtBUnlUUjtBUXJUSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUnVUTjtBUXBUSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBUnNUTjtBUW5USTtFQUNFLDRCQUFBO0FScVROO0FRaFRBO0VBQ0Usb0JBQUE7QVJrVEY7QVFoVEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QVJrVEo7QVEzVEE7RUFhSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FSaVRKO0FRL1NJOztFQUVFLGNBQUE7QVJpVE47QVE5U0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QVJnVE47QVE3U1E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QVIrU1Y7QVFsVFE7RUFNSSxnQkFBQTtBUitTWjtBUXpTSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBUjJTTjtBUXhTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBUjBTTjtBUXJTUTs7RUFFRSxRQUFBO0FSdVNWO0FRaldBO0VBZ0VNLGlCQUFBO0FSb1NOO0FRcFdBO0VBcUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBUmtTSjtBUWhTSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBUmtTTjtBUWhTTTtFQUNFLFlBQUE7QVJrU1I7QVE5Ukk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FSZ1NOO0FRN1JJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QVIrUk47QVExUkE7RUFDRTtJQUVJLGNBQUE7SUFDQSxTQUFBO0VSMlJKO0VRelJJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFUjJSTjtFUXhSUTtJQUNFLFlBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFUjBSVjtFUTdSUTtJQU1JLFNBQUE7RVIwUlo7RVFwUkk7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VSc1JOO0VRblJJO0lBQ0UsU0FBQTtFUnFSTjtFUXJUQTtJQXFDSSxrQkFBQTtFUm1SSjtFUWpSSTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RVJtUk47RVFoUkk7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFUmtSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2UvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBJQ09OUyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4vKiogVkFSSUFCTEVTICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qKiBDT01QT05FTlRTICovXG4uYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgfVxufVxuLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDE2cHggMCAwO1xufVxuLmMtdG9vbHdpbmRvdy0tcGFyZW50OmhvdmVyIC5jLXRvb2x3aW5kb3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLXRpbGUge1xuICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgfVxufVxuLyoqIFBBR0UgKi9cbi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ucC1wYWdlLS1nZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMi45O1xufVxuLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ucC1wYWdlIC5wLWltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCA0OHB4IDI0cHggMDtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2UtLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAyNHB4IDQ4cHg7XG59XG4ucC1wYWdlIC5wLWltYWdlLnAtdy0tMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5wLXBhZ2UgLnAtdy0tMzAge1xuICB3aWR0aDogMzMlO1xufVxuLnAtcGFnZSAucC13LS01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ucC1wYWdlIC5wLXctLTc1IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5wLXBhZ2UgLnAtdy0tMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaCB7XG4gIG1hcmdpbjogMmVtIDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucC1wYWdlIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50OmhvdmVyIHtcbiAgY29sb3I6ICM4ZDdlNTQ7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDhweCAwIDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbn1cbi5wLXBhZ2UgLnAtY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY29sdW1uLWdhcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnAtcGFnZSAucC1jb2wtMiB7XG4gIGNvbHVtbnM6IDI7XG59XG4ucC1wYWdlIC5wLWNvbC0zIHtcbiAgY29sdW1uczogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxMHB4IDFweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDI0cHggMCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wge1xuICB3aWR0aDogMDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS0zIHtcbiAgZmxleC1ncm93OiAzO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTQge1xuICBmbGV4LWdyb3c6IDQ7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucC1wYWdlIC5wLWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucC1wYWdlIC5wLWFsaWduLS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucC1wYWdlIC5wLWNmIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgdWwge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufVxuLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnAtcGFnZSB1bCArIC5wLXBhZ2UgdWwsXG4ucC1wYWdlIHVsICsgLnAtcGFnZSBvbCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSBvbCArIC5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMycHggOHB4O1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnAtcGFnZSAucC1jb2wtMixcbiAgLnAtcGFnZSAucC1jb2wtMyB7XG4gICAgY29sdW1uczogMTtcbiAgfVxuICAucC1wYWdlIC5wLXctLTMwLFxuICAucC1wYWdlIC5wLXctLTUwLFxuICAucC1wYWdlIC5wLXctLTc1IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWltYWdlIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDI0cHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbi5wLXBhZ2UtLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmNmVmO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgMCAwIC04MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tbGF5b3V0LXNiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIH1cbn1cbi51bi1sYW5kaW5nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51bi1sYW5kaW5nLW5ld3MtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAtMzJweDtcbn1cbi51bi1sYW5kaW5nLW5ld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCA0cHggcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4ICogOCk7XG4gIG1hcmdpbjogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVuLWxhbmRpbmctbmV3cy1pbWFnZSxcbi51bi1sYW5kaW5nLW5ld3MtY29udGVudCB7XG4gIHdpZHRoOiAwO1xufVxuLnVuLWxhbmRpbmctbmV3cy1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMjtcbn1cbi51bi1sYW5kaW5nLW5ld3MtaW1hZ2UgaW1nIHtcbiAgZmxleC1ncm93OiAxO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi51bi1sYW5kaW5nLW5ld3MtY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHggMjBweDtcbiAgZmxleC1ncm93OiA0O1xufVxuLnVuLWxhbmRpbmctbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cbi51bi1sYW5kaW5nLW5ld3MtdGV4dF9fdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAwNWVtO1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cbi51bi1sYW5kaW5nLW5ld3MtdGV4dF9fdGV4dCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMXJlbSAqIDEuNiAqIDQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuLnVuLWxhbmRpbmctbmV3cy1nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4udW4tbGFuZGluZy1uZXdzLWdvX19idG4ge1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgbWFyZ2luOiAtOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi51bi1sYW5kaW5nLW5ld3MtZ29fX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzYsIDM2LCAzNiwgMC4wMjUpO1xufVxuLnVuLWxhbmRpbmctdGVhY2hlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgLTI0cHg7XG59XG4udW4tbGFuZGluZy10ZWFjaGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogY2FsYygzMyUgLSA4cHggKiA2KTtcbiAgbWFyZ2luOiAyNHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG4udW4tbGFuZGluZy10ZWFjaGVyLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udW4tbGFuZGluZy10ZWFjaGVyLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTEycHg7XG4gIG1pbi13aWR0aDogMTEycHg7XG4gIG1heC13aWR0aDogMTEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuOSk7XG59XG4udW4tbGFuZGluZy10ZWFjaGVyLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzJweCAwIDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG4udW4tbGFuZGluZy10ZWFjaGVyX19uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cbi51bi1sYW5kaW5nLXRlYWNoZXJfX3R5cGUge1xuICBjb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjgpO1xufVxuLnVuLWFib3V0IHtcbiAgcGFkZGluZzogNDBweCAwIDgwcHg7XG59XG4udW4tYWJvdXRfX3RpdGxlIHtcbiAgY29sb3I6ICM0MTNiMGM7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDM7XG4gIG1hcmdpbjogMCAwIDI0cHg7XG59XG4udW4tYWJvdXQgLnVuLWltYWdlLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIC0zMnB4O1xufVxuLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX19pbWFnZSxcbi51bi1hYm91dCAudW4taW1hZ2Utd3JhcF9fdGV4dCB7XG4gIG1hcmdpbjogMCAzMnB4O1xufVxuLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX19pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDFlbSAwIDA7XG4gIG1hcmdpbjogLThweCAzMnB4O1xufVxuLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX19pbWFnZXMgLnVuLWltYWdlLXdyYXBfX2ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbi51bi1hYm91dCAudW4taW1hZ2Utd3JhcF9faW1hZ2VzIC51bi1pbWFnZS13cmFwX19pbWFnZSArIC51bi1pbWFnZS13cmFwX19pbWFnZSB7XG4gIG1hcmdpbjogNDBweCAwIDA7XG59XG4udW4tYWJvdXQgLnVuLWltYWdlLXdyYXBfX2ltYWdlIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG59XG4udW4tYWJvdXQgLnVuLWltYWdlLXdyYXBfX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjY7XG59XG4udW4tYWJvdXQgLnVuLWltYWdlLXdyYXAtLXJpZ2h0IC51bi1pbWFnZS13cmFwX19pbWFnZSxcbi51bi1hYm91dCAudW4taW1hZ2Utd3JhcC0tcmlnaHQgLnVuLWltYWdlLXdyYXBfX2ltYWdlcyB7XG4gIG9yZGVyOiAyO1xufVxuLnVuLWFib3V0IC51bi1pbWFnZS13cmFwICsgLnVuLWltYWdlLXdyYXAge1xuICBwYWRkaW5nOiAzMnB4IDAgMDtcbn1cbi51bi1hYm91dCAudW4taW1hZ2Utcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiA2NHB4IC0yNHB4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnVuLWFib3V0IC51bi1pbWFnZS1yb3dfX2NvbnRyb2wge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAyNHB4O1xuICBvcGFjaXR5OiAwLjQ7XG59XG4udW4tYWJvdXQgLnVuLWltYWdlLXJvd19fY29udHJvbDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi51bi1hYm91dCAudW4taW1hZ2Utcm93X19pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51bi1hYm91dCAudW4taW1hZ2Utcm93X19pbWFnZSB7XG4gIG1pbi13aWR0aDogMzMuMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMyU7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC51bi1hYm91dCAudW4taW1hZ2Utd3JhcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC51bi1hYm91dCAudW4taW1hZ2Utd3JhcF9faW1hZ2VzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgLThweDtcbiAgfVxuICAudW4tYWJvdXQgLnVuLWltYWdlLXdyYXBfX2ltYWdlcyAudW4taW1hZ2Utd3JhcF9faW1hZ2Uge1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX19pbWFnZXMgLnVuLWltYWdlLXdyYXBfX2ltYWdlICsgLnVuLWltYWdlLXdyYXBfX2ltYWdlIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX19pbWFnZSB7XG4gICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbiAgLnVuLWFib3V0IC51bi1pbWFnZS13cmFwX190ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnVuLWFib3V0IC51bi1pbWFnZS1yb3cge1xuICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcbiAgfVxuICAudW4tYWJvdXQgLnVuLWltYWdlLXJvd19fY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gIH1cbiAgLnVuLWFib3V0IC51bi1pbWFnZS1yb3dfX2ltYWdlIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IEBjb250YWluZXItd2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIEBtYWluLWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDEuNTtcbiAgfVxufVxuIiwiLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcblxuICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiA0IDAgMDtcblxuICAmLS1wYXJlbnQ6aG92ZXIgJiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkIDAgQGJsYWNrLWEwNTtcbiAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA1O1xuICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkICogMjtcbiAgfVxufVxuIiwiLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmLS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjk7XG5cbiAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDggMDtcbiAgICB9XG4gIH1cblxuICAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiA2IEBtYWluLWdyaWQgKiAzIDA7XG5cbiAgICB3aWR0aDogMjUlO1xuXG4gICAgJi0tcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDY7XG4gICAgfVxuXG4gICAgJi5wLXctLTEwMCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAucC13IHtcbiAgICAmLS0zMCB7XG4gICAgICB3aWR0aDogMzMlO1xuICAgIH1cblxuICAgICYtLTUwIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgJi0tNzUge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAmLS0xMDAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnAtcGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnAtYXR0YWNobWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiBAbWFpbi1jb2xvci1kYXJrO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGRhcmtlbihAbWFpbi1jb2xvci1kYXJrLCA1JSk7XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDM7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAwIEBzZWNvbmRhcnktZ3JpZCAqIDY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLTIge1xuICAgICAgY29sdW1uczogMjtcbiAgICB9XG5cbiAgICAmLTMge1xuICAgICAgY29sdW1uczogMztcbiAgICB9XG4gIH1cblxuICAucC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuICAgIGJveC1zaGFkb3c6IDAgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAqIDIuNSBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBibGFjay1hMDU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzIDAgMDtcblxuICAgICYtaGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAyIDA7XG4gICAgfVxuXG4gICAgJi1jb2wge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiAzIEBtYWluLWdyaWQgKiAzO1xuXG4gICAgICAmLS0yIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuXG4gICAgICAmLS0zIHtcbiAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgfVxuXG4gICAgICAmLS00IHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaGVhZCAucC10YWJsZS1jb2wge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnAtYWxpZ24ge1xuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgJi0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLnAtY2Yge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2Uge1xuICAgICYtLWdlbmVyYWwge1xuICAgICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1jb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi0yLFxuICAgICAgJi0zIHtcbiAgICAgICAgY29sdW1uczogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC13IHtcbiAgICAgICYtLTMwLFxuICAgICAgJi0tNTAsXG4gICAgICAmLS03NSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWltYWdlIHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wLWF0dGFjaG1lbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgMCAwO1xuXG4gICAgICAmX190eXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAcjogficucC1wYWdlJztcblxuQHtyfS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItbGlnaHQ7XG4gICAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgMCBAYmxhY2stYTA1O1xuICAgIG1heC13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1pbi13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1hcmdpbjogMCAwIDAgLUBtYWluLWdyaWQgKiAxMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoQG1haW4tZ3JpZCAqIDEwKTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIEB7cn0tdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBAbWFpbi1ncmlkICogMztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgY29sb3I6IEBibGFjay1hOTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQHtyfS1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIEB7cn0tLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDIgMDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWluLWhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiBAbWFpbi1ncmlkO1xuICAgICAgcGFkZGluZy1yaWdodDogQG1haW4tZ3JpZDtcblxuICAgICAgQHtyfS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndGhlbWUnO1xuXG4udW4tbGFuZGluZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJi1uZXdzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogKC1AbWFpbi1ncmlkICogNCk7XG4gIH1cblxuICAmLW5ld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItcGFuZTtcbiAgICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkICogNSBAc2Vjb25kYXJ5LWdyaWQgQGJsYWNrLWEwNTtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSBAbWFpbi1ncmlkICogOCk7XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogNDtcbiAgICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYtaW1hZ2UsXG4gICAgJi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICYtaW1hZ2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWdyb3c6IDI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiAzIEBtYWluLWdyaWQgKiAyLjU7XG4gICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGhlaWdodDogQG1haW4tZ3JpZCAqIDIwO1xuXG4gICAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4wMDVlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAwO1xuICAgICAgfVxuXG4gICAgICAmX190ZXh0IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcblxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDFyZW0gKiAxLjYgKiA0KTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1nbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgJl9fYnRuIHtcbiAgICAgICAgY29sb3I6IEBtYWluLWNvbG9yLWRhcms7XG4gICAgICAgIG1hcmdpbjogLUBtYWluLWdyaWQ7XG4gICAgICAgIHBhZGRpbmc6IEBtYWluLWdyaWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBAYmxhY2stYTAyNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtdGVhY2hlci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDAgKC1AbWFpbi1ncmlkICogMyk7XG4gIH1cblxuICAmLXRlYWNoZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogY2FsYygzMyUgLSBAbWFpbi1ncmlkICogNik7XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogMztcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogMztcbiAgICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG5cbiAgICBiYWNrZ3JvdW5kOiBAbWFpbi1jb2xvci1wYW5lO1xuXG4gICAgJi1pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogQG1haW4tZ3JpZCAqIDE0O1xuICAgICAgICBtaW4td2lkdGg6IEBtYWluLWdyaWQgKiAxNDtcbiAgICAgICAgbWF4LXdpZHRoOiBAbWFpbi1ncmlkICogMTQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCBAYmxhY2stYTkwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtY29udGVudCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgKiA0IDAgMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgfVxuXG4gICAgJl9fbmFtZSB7XG4gICAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyLjU7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkIDA7XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICBjb2xvcjogQGJsYWNrLWE4MDtcbiAgICB9XG4gIH1cbn1cblxuLnVuLWFib3V0IHtcbiAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDUgMCBAbWFpbi1ncmlkICogMTA7XG5cbiAgJl9fdGl0bGUge1xuICAgIGNvbG9yOiAjNDEzYjBjO1xuICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogQHNlY29uZGFyeS1ncmlkIC8gMjtcbiAgICBsaW5lLWhlaWdodDogMztcbiAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMztcbiAgfVxuXG4gIC51bi1pbWFnZS13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMCAoLUBtYWluLWdyaWQgKiA0KTtcblxuICAgICZfX2ltYWdlLFxuICAgICZfX3RleHQge1xuICAgICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiA0O1xuICAgIH1cblxuICAgICZfX2ltYWdlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgbWluLXdpZHRoOiAzMCU7XG4gICAgICBwYWRkaW5nOiAxZW0gMCAwO1xuICAgICAgbWFyZ2luOiAtQG1haW4tZ3JpZCBAbWFpbi1ncmlkICogNDtcblxuICAgICAgLnVuLWltYWdlLXdyYXAge1xuICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICArIC51bi1pbWFnZS13cmFwX19pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW46IEBtYWluLWdyaWQgKiA1IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgIG1heC13aWR0aDogMzAlO1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiA1O1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNjtcbiAgICB9XG5cbiAgICAmLS1yaWdodCB7XG4gICAgICAudW4taW1hZ2Utd3JhcCB7XG4gICAgICAgICZfX2ltYWdlLFxuICAgICAgICAmX19pbWFnZXMge1xuICAgICAgICAgIG9yZGVyOiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgKyAudW4taW1hZ2Utd3JhcCB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCAwIDA7XG4gICAgfVxuICB9XG5cbiAgLnVuLWltYWdlLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiBAbWFpbi1ncmlkICogOCAoLUBtYWluLWdyaWQgKiAzKSAwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgJl9fY29udHJvbCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW46IDAgQG1haW4tZ3JpZCAqIDM7XG4gICAgICBvcGFjaXR5OiAuNDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2lubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgbWluLXdpZHRoOiAzMy4zMzMzJTtcbiAgICAgIG1heC13aWR0aDogMzMuMzMzMyU7XG4gICAgICBwYWRkaW5nOiAwIEBtYWluLWdyaWQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAudW4tYWJvdXQge1xuICAgIC51bi1pbWFnZS13cmFwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAmX19pbWFnZXMge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAoLUBtYWluLWdyaWQpO1xuXG4gICAgICAgIC51bi1pbWFnZS13cmFwIHtcbiAgICAgICAgICAmX19pbWFnZSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICAgICAgKyAudW4taW1hZ2Utd3JhcF9faW1hZ2Uge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZDtcbiAgICAgIH1cblxuICAgICAgJl9fdGV4dCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudW4taW1hZ2Utcm93IHtcbiAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcblxuICAgICAgJl9fY29udHJvbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDM7XG4gICAgICB9XG5cbiAgICAgICZfX2ltYWdlIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/page/landing-page/landing-page.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/page/landing-page/landing-page.component.ts ***!
          \********************************************************************/
        /*! exports provided: LandingPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () { return LandingPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _service_device_detector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/device-detector.service */ "./src/app/shared/service/device-detector.service.ts");
            /* harmony import */ var src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configuration/teacher/teachers */ "./src/app/configuration/teacher/teachers.ts");
            var LandingPageComponent = /** @class */ (function () {
                function LandingPageComponent(device) {
                    this.device = device;
                    this.teachers = src_app_configuration_teacher_teachers__WEBPACK_IMPORTED_MODULE_5__["default"];
                    this.scrolling = false;
                    this.slide = 0;
                }
                LandingPageComponent.prototype.ngOnInit = function () {
                };
                LandingPageComponent.prototype.scroll = function (reverse) {
                    var _this = this;
                    if (this.scrolling) {
                        return;
                    }
                    var c = function (s) { return _this.scrollBox.nativeElement.children[s].offsetLeft; };
                    var scrollFrom = c(this.slide);
                    var scrollTo = 0;
                    if (reverse) {
                        this.slide = Math.max(0, this.slide - 1);
                    }
                    else {
                        this.slide = Math.min(this.scrollBox.nativeElement.children.length - 1, this.slide + 1);
                    }
                    scrollTo = c(this.slide);
                    var scrollWidth = this.scrollBox.nativeElement.scrollWidth - this.scrollBox.nativeElement.offsetWidth;
                    if (scrollTo > scrollWidth) {
                        scrollTo = scrollWidth;
                        this.slide--;
                    }
                    if (scrollTo !== scrollFrom) {
                        this.scrolling = true;
                        var scrollTime = 100;
                        var scrollInterval = 5;
                        var scrollSteps_1 = scrollTime / scrollInterval;
                        var scrollPerStep_1 = (scrollTo - scrollFrom) / scrollSteps_1;
                        var scrollStep_1 = 0;
                        var stop$_1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(scrollInterval)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(stop$_1))
                            .subscribe(function () {
                            if (++scrollStep_1 === scrollSteps_1) {
                                _this.scrollBox.nativeElement.scrollLeft = scrollTo;
                                stop$_1.next();
                                stop$_1.complete();
                                _this.scrolling = false;
                            }
                            else {
                                _this.scrollBox.nativeElement.scrollLeft = scrollFrom + (scrollPerStep_1 * scrollStep_1);
                            }
                        });
                    }
                };
                return LandingPageComponent;
            }());
            LandingPageComponent.ctorParameters = function () { return [
                { type: _service_device_detector_service__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollBox', { static: false })
            ], LandingPageComponent.prototype, "scrollBox", void 0);
            LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-landing-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/landing-page/landing-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.less */ "./src/app/shared/page/landing-page/landing-page.component.less")).default]
                })
            ], LandingPageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/page/landing-page/landing-page.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shared/page/landing-page/landing-page.module.ts ***!
          \*****************************************************************/
        /*! exports provided: LandingPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () { return LandingPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _apps_desktop_page_landing_page_component_landing_carousel_landing_carousel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.module */ "./src/app/apps/desktop/page/landing-page/component/landing-carousel/landing-carousel.module.ts");
            /* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/shared/page/landing-page/landing-page.component.ts");
            var LandingPageModule = /** @class */ (function () {
                function LandingPageModule() {
                }
                return LandingPageModule;
            }());
            LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _apps_desktop_page_landing_page_component_landing_carousel_landing_carousel_module__WEBPACK_IMPORTED_MODULE_3__["LandingCarouselModule"]
                    ]
                })
            ], LandingPageModule);
            /***/ 
        }),
        /***/ "./src/app/shared/page/learning-page/learning-page.component.less": 
        /*!************************************************************************!*\
          !*** ./src/app/shared/page/learning-page/learning-page.component.less ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-learning {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGVhcm5pbmctcGFnZS9sZWFybmluZy1wYWdlLmNvbXBvbmVudC5sZXNzIiwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1hdGVyaWFsK0ljb25zfE1hdGVyaWFsK0ljb25zK091dGxpbmVkIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sZWFybmluZy1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sZWFybmluZy1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL2NvbXBvbmVudHMvX2dyaWQubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGVhcm5pbmctcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9jb21wb25lbnRzL190b29sdGlwLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlL2xlYXJuaW5nLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9sZWFybmluZy1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3BhZ2UvX2dlbmVyYWwubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGVhcm5pbmctcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hc3NldHMvc2Nzcy9wYWdlL19sYXlvdXQtc2IubGVzcyIsInNyYy9hcHAvc2hhcmVkL3BhZ2UvbGVhcm5pbmctcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvc2hhcmVkL3BhZ2UvbGVhcm5pbmctcGFnZS9sZWFybmluZy1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUNBWDtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFD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QUNBLFNBQUE7SUFDQSxlQUFBO0VQb1FKO0VDelREO0lNeURLLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VQbVFKO0VDalVEO0lNaUVPLGdCQUFBO0VQbVFOO0VDcFVEO0lNb0VTLGVBQUE7SUFDQSxrQkFBQTtFUG1RUjtBQUNGO0FRdlVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBUnlVRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlL2xlYXJuaW5nLXBhZ2UvbGVhcm5pbmctcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBJQ09OUyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y1Mi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05aLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zb3V0bGluZWQvdjIxL2dvay1IN3p6RGtkblJlbDgtRFE2S0FYSjY5d1AxdEduZjRaR2hVY2Qub3RmKSBmb3JtYXQoJ29wZW50eXBlJyk7XG59XG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4vKiogVkFSSUFCTEVTICovXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qKiBDT01QT05FTlRTICovXG4uYy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgfVxufVxuLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDE2cHggMCAwO1xufVxuLmMtdG9vbHdpbmRvdy0tcGFyZW50OmhvdmVyIC5jLXRvb2x3aW5kb3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDAgcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLXRpbGUge1xuICAgIHBhZGRpbmc6IDMycHggMTZweDtcbiAgfVxufVxuLyoqIFBBR0UgKi9cbi5wLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ucC1wYWdlLS1nZW5lcmFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMi45O1xufVxuLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ucC1wYWdlIC5wLWltYWdlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCA0OHB4IDI0cHggMDtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2UtLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDAgMCAyNHB4IDQ4cHg7XG59XG4ucC1wYWdlIC5wLWltYWdlLnAtdy0tMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5wLXBhZ2UgLnAtdy0tMzAge1xuICB3aWR0aDogMzMlO1xufVxuLnAtcGFnZSAucC13LS01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ucC1wYWdlIC5wLXctLTc1IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5wLXBhZ2UgLnAtdy0tMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaCB7XG4gIG1hcmdpbjogMmVtIDA7XG59XG4ucC1wYWdlIC5wLXBhcmFncmFwaDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucC1wYWdlIGIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzlkOGM1ZDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50OmhvdmVyIHtcbiAgY29sb3I6ICM4ZDdlNTQ7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDhweCAwIDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdhdHRhY2hfZmlsZSc7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMDtcbn1cbi5wLXBhZ2UgLnAtY29sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY29sdW1uLWdhcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnAtcGFnZSAucC1jb2wtMiB7XG4gIGNvbHVtbnM6IDI7XG59XG4ucC1wYWdlIC5wLWNvbC0zIHtcbiAgY29sdW1uczogMztcbn1cbi5wLXBhZ2UgLnAtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxMHB4IDFweCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDI0cHggMCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wge1xuICB3aWR0aDogMDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS0zIHtcbiAgZmxleC1ncm93OiAzO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTQge1xuICBmbGV4LWdyb3c6IDQ7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWhlYWQgLnAtdGFibGUtY29sIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucC1wYWdlIC5wLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucC1wYWdlIC5wLWNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucC1wYWdlIC5wLWFsaWduLS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucC1wYWdlIC5wLWNmIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wLXBhZ2UgdWwge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufVxuLnAtcGFnZSB1bCxcbi5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnAtcGFnZSB1bCArIC5wLXBhZ2UgdWwsXG4ucC1wYWdlIHVsICsgLnAtcGFnZSBvbCxcbi5wLXBhZ2Ugb2wgKyAucC1wYWdlIHVsLFxuLnAtcGFnZSBvbCArIC5wLXBhZ2Ugb2wge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tZ2VuZXJhbCAucC1wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMycHggOHB4O1xuICB9XG4gIC5wLXBhZ2UgLnAtY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sdW1uLWdhcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnAtcGFnZSAucC1jb2wtMixcbiAgLnAtcGFnZSAucC1jb2wtMyB7XG4gICAgY29sdW1uczogMTtcbiAgfVxuICAucC1wYWdlIC5wLXctLTMwLFxuICAucC1wYWdlIC5wLXctLTUwLFxuICAucC1wYWdlIC5wLXctLTc1IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucC1wYWdlIC5wLWltYWdlIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDI0cHggMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZTpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbi5wLXBhZ2UtLWxheW91dC1zYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmNmVmO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW46IDAgMCAwIC04MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDM2LCAzNiwgMzYsIDAuOSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZS0tbGF5b3V0LXNiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciAucC1wYWdlLXRpdGxlIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XG4gIH1cbn1cbi51bi1sZWFybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92NTIvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOWi50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29uc291dGxpbmVkL3YyMS9nb2stSDd6ekRrZG5SZWw4LURRNktBWEo2OXdQMXRHbmY0WkdoVWNkLm90ZikgZm9ybWF0KCdvcGVudHlwZScpO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbiIsIkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiLmMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogQGNvbnRhaW5lci13aWR0aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgQG1haW4tZ3JpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCBAbWFpbi1ncmlkICogMS41O1xuICB9XG59XG4iLCIuYy10b29sd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFuaW1hdGlvbjogZmFkZUluIDEwMG1zIGVhc2UtaW4tb3V0O1xuXG4gIHBhZGRpbmc6IEBzZWNvbmRhcnktZ3JpZCAqIDQgMCAwO1xuXG4gICYtLXBhcmVudDpob3ZlciAmIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiLmMtdGlsZSB7XG4gIGJveC1zaGFkb3c6IDAgMCBAc2Vjb25kYXJ5LWdyaWQgMCBAYmxhY2stYTA1O1xuICBiYWNrZ3JvdW5kOiBAd2hpdGUtYTEwMDtcbiAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDU7XG4gIGJvcmRlci1yYWRpdXM6IEBzZWNvbmRhcnktZ3JpZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLXRpbGUge1xuICAgIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA0IEBtYWluLWdyaWQgKiAyO1xuICB9XG59XG4iLCIucC1wYWdlIHtcbiAgZmxleC1ncm93OiAxO1xuXG4gICYtLWdlbmVyYWwge1xuICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDI7XG4gICAgbGluZS1oZWlnaHQ6IDIuOTtcblxuICAgIC5wLXBhZ2UtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogOCAwO1xuICAgIH1cbiAgfVxuXG4gIC5wLWltYWdlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgQG1haW4tZ3JpZCAqIDYgQG1haW4tZ3JpZCAqIDMgMDtcblxuICAgIHdpZHRoOiAyNSU7XG5cbiAgICAmLS1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyBAbWFpbi1ncmlkICogNjtcbiAgICB9XG5cbiAgICAmLnAtdy0tMTAwIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5wLXcge1xuICAgICYtLTMwIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuXG4gICAgJi0tNTAge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAmLS03NSB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgIH1cblxuICAgICYtLTEwMCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAucC1wYXJhZ3JhcGgge1xuICAgIG1hcmdpbjogMmVtIDA7XG5cbiAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gIGIge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAucC1hdHRhY2htZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IEBtYWluLWNvbG9yLWRhcms7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgbGluZWFyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogZGFya2VuKEBtYWluLWNvbG9yLWRhcmssIDUlKTtcbiAgICB9XG5cbiAgICAmX190eXBlIHtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMztcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMCBAbWFpbi1ncmlkIDAgQHNlY29uZGFyeS1ncmlkICogNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzAwMDtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnYXR0YWNoX2ZpbGUnO1xuICAgICAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgICAgICAgZm9udC1zaXplOiBAbWFpbi1ncmlkICogMztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wLWNvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1nYXA6IEBtYWluLWdyaWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYtMiB7XG4gICAgICBjb2x1bW5zOiAyO1xuICAgIH1cblxuICAgICYtMyB7XG4gICAgICBjb2x1bW5zOiAzO1xuICAgIH1cbiAgfVxuXG4gIC5wLXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBAd2hpdGUtYTEwMDtcbiAgICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG4gICAgYm94LXNoYWRvdzogMCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAvIDQgQHNlY29uZGFyeS1ncmlkICogMi41IEBzZWNvbmRhcnktZ3JpZCAvIDQgQGJsYWNrLWEwNTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbjogQG1haW4tZ3JpZCAqIDMgMCAwO1xuXG4gICAgJi1oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiBAYmxhY2stYTA1O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDIgMDtcbiAgICB9XG5cbiAgICAmLWNvbCB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIHBhZGRpbmc6IEBzZWNvbmRhcnktZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDM7XG5cbiAgICAgICYtLTIge1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICB9XG5cbiAgICAgICYtLTMge1xuICAgICAgICBmbGV4LWdyb3c6IDM7XG4gICAgICB9XG5cbiAgICAgICYtLTQge1xuICAgICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1oZWFkIC5wLXRhYmxlLWNvbCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgLnAtY2VudGVyIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cblxuICAucC1hbGlnbiB7XG4gICAgJi0tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAmLS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAmLS1yaWdodCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cblxuICAucC1jZiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICB9XG5cbiAgdWwsXG4gIG9sIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnAtcGFnZSB7XG4gICAgJi0tZ2VuZXJhbCB7XG4gICAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWNvbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbHVtbi1nYXA6IEBtYWluLWdyaWQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmLTIsXG4gICAgICAmLTMge1xuICAgICAgICBjb2x1bW5zOiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLXcge1xuICAgICAgJi0tMzAsXG4gICAgICAmLS01MCxcbiAgICAgICYtLTc1IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnAtaW1hZ2Uge1xuICAgICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAzIDAgIWltcG9ydGFudDtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnAtYXR0YWNobWVudCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogQG1haW4tZ3JpZCAwIDA7XG5cbiAgICAgICZfX3R5cGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkByOiB+Jy5wLXBhZ2UnO1xuXG5Ae3J9LS1sYXlvdXQtc2Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBAbWFpbi1jb2xvci1saWdodDtcbiAgICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkICogNSAwIEBibGFjay1hMDU7XG4gICAgbWF4LXdpZHRoOiBAbWFpbi1ncmlkICogMTA7XG4gICAgbWluLXdpZHRoOiBAbWFpbi1ncmlkICogMTA7XG4gICAgbWFyZ2luOiAwIDAgMCAtQG1haW4tZ3JpZCAqIDEwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChAbWFpbi1ncmlkICogMTApO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICBAe3J9LXNpZGViYXIge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgQHtyfS10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IEBtYWluLWdyaWQgKiAzO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgZm9udC1zaXplOiBAc2Vjb25kYXJ5LWdyaWQgKiAzLjU7XG4gICAgICBjb2xvcjogQGJsYWNrLWE5MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogQHNlY29uZGFyeS1ncmlkO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAe3J9LWNvbnRlbnQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgQHtyfS0tbGF5b3V0LXNiIHtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogMiAwO1xuICAgICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4taGVpZ2h0OiBAbWFpbi1ncmlkICogMTA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgQHtyfS1zaWRlYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBtYWluLWdyaWQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBAbWFpbi1ncmlkO1xuXG4gICAgICBAe3J9LXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd0aGVtZSc7XG5cbi51bi1sZWFybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/page/learning-page/learning-page.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/page/learning-page/learning-page.component.ts ***!
          \**********************************************************************/
        /*! exports provided: LearningPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningPageComponent", function () { return LearningPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LearningPageComponent = /** @class */ (function () {
                function LearningPageComponent() {
                }
                LearningPageComponent.prototype.ngOnInit = function () {
                };
                return LearningPageComponent;
            }());
            LearningPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-learning-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/learning-page/learning-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-page.component.less */ "./src/app/shared/page/learning-page/learning-page.component.less")).default]
                })
            ], LearningPageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/page/learning-page/learning-page.module.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shared/page/learning-page/learning-page.module.ts ***!
          \*******************************************************************/
        /*! exports provided: LearningPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningPageModule", function () { return LearningPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _learning_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-page.component */ "./src/app/shared/page/learning-page/learning-page.component.ts");
            var LearningPageModule = /** @class */ (function () {
                function LearningPageModule() {
                }
                return LearningPageModule;
            }());
            LearningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_learning_page_component__WEBPACK_IMPORTED_MODULE_3__["LearningPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], LearningPageModule);
            /***/ 
        }),
        /***/ "./src/app/shared/page/science-page/science-page.component.less": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/page/science-page/science-page.component.less ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/** ICONS */\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Material Icons Outlined';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v21/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcd.otf) format('opentype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n.material-icons-outlined {\n  font-family: 'Material Icons Outlined';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n}\n/** VARIABLES */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/** COMPONENTS */\n.c-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n@media screen and (max-width: 1000px) {\n  .c-container {\n    padding: 0 12px;\n  }\n}\n.c-toolwindow {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n  -webkit-animation: fadeIn 100ms ease-in-out;\n          animation: fadeIn 100ms ease-in-out;\n  padding: 16px 0 0;\n}\n.c-toolwindow--parent:hover .c-toolwindow {\n  display: block;\n}\n.c-tile {\n  box-shadow: 0 0 4px 0 rgba(36, 36, 36, 0.05);\n  background: #ffffff;\n  padding: 40px;\n  border-radius: 4px;\n}\n@media screen and (max-width: 1000px) {\n  .c-tile {\n    padding: 32px 16px;\n  }\n}\n/** PAGE */\n.p-page {\n  flex-grow: 1;\n}\n.p-page--general {\n  font-size: 16px;\n  line-height: 2.9;\n}\n.p-page--general .p-page-content {\n  padding: 64px 0;\n}\n.p-page .p-image {\n  float: left;\n  margin: 0 48px 24px 0;\n  width: 25%;\n}\n.p-page .p-image--right {\n  float: right;\n  margin: 0 0 24px 48px;\n}\n.p-page .p-image.p-w--100 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.p-page .p-w--30 {\n  width: 33%;\n}\n.p-page .p-w--50 {\n  width: 50%;\n}\n.p-page .p-w--75 {\n  width: 75%;\n}\n.p-page .p-w--100 {\n  width: 100%;\n}\n.p-page .p-paragraph {\n  margin: 2em 0;\n}\n.p-page .p-paragraph:first-of-type {\n  margin-top: 0;\n}\n.p-page .p-paragraph:last-of-type {\n  margin-bottom: 0;\n}\n.p-page b {\n  font-weight: 500;\n}\n.p-page .p-attachment {\n  position: relative;\n  color: #9d8c5d;\n  transition: color 200ms linear;\n}\n.p-page .p-attachment:hover {\n  color: #8d7e54;\n}\n.p-page .p-attachment__type {\n  font-size: 12px;\n  line-height: 0;\n  padding: 0 8px 0 24px;\n  font-weight: 500;\n  color: #000;\n}\n.p-page .p-attachment__type:before {\n  content: 'attach_file';\n  font-family: 'Material Icons';\n  font-size: 24px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n.p-page .p-col {\n  display: inline-block;\n  width: 100%;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  overflow: hidden;\n}\n.p-page .p-col-2 {\n  -moz-columns: 2;\n       columns: 2;\n}\n.p-page .p-col-3 {\n  -moz-columns: 3;\n       columns: 3;\n}\n.p-page .p-table {\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 10px 1px rgba(36, 36, 36, 0.05);\n  line-height: 1.5;\n  margin: 24px 0 0;\n}\n.p-page .p-table-head {\n  display: flex;\n  background: rgba(36, 36, 36, 0.05);\n  margin: 0 0 16px 0;\n}\n.p-page .p-table-col {\n  width: 0;\n  flex-grow: 1;\n  padding: 12px 24px;\n}\n.p-page .p-table-col--2 {\n  flex-grow: 2;\n}\n.p-page .p-table-col--3 {\n  flex-grow: 3;\n}\n.p-page .p-table-col--4 {\n  flex-grow: 4;\n}\n.p-page .p-table-head .p-table-col {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-align: center;\n}\n.p-page .p-table-row {\n  display: flex;\n}\n.p-page .p-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n.p-page .p-align--left {\n  text-align: left;\n}\n.p-page .p-align--center {\n  text-align: center;\n}\n.p-page .p-align--right {\n  text-align: right;\n}\n.p-page .p-cf {\n  overflow: hidden;\n}\n.p-page ul {\n  list-style: disc;\n}\n.p-page ul,\n.p-page ol {\n  margin-top: 0;\n}\n.p-page ul + .p-page ul,\n.p-page ul + .p-page ol,\n.p-page ol + .p-page ul,\n.p-page ol + .p-page ol {\n  margin-top: 1em;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--general .p-page-content {\n    padding: 32px 8px;\n  }\n  .p-page .p-col {\n    display: inline-block;\n    width: 100%;\n    -moz-column-gap: 8px;\n         column-gap: 8px;\n    overflow: hidden;\n  }\n  .p-page .p-col-2,\n  .p-page .p-col-3 {\n    -moz-columns: 1;\n         columns: 1;\n  }\n  .p-page .p-w--30,\n  .p-page .p-w--50,\n  .p-page .p-w--75 {\n    width: 100%;\n  }\n  .p-page .p-image {\n    float: none !important;\n    margin: 0 0 24px 0 !important;\n    width: 100%;\n  }\n  .p-page .p-attachment {\n    display: block;\n    margin: 8px 0 0;\n  }\n  .p-page .p-attachment__type {\n    position: relative;\n  }\n  .p-page .p-attachment__type:before {\n    transform: none;\n    top: 0;\n  }\n}\n.p-page--layout-sb {\n  display: flex;\n  position: relative;\n}\n.p-page--layout-sb .p-page-sidebar {\n  background: #f9f6ef;\n  box-shadow: 0 0 20px 0 rgba(36, 36, 36, 0.05);\n  max-width: 80px;\n  min-width: 80px;\n  margin: 0 0 0 -80px;\n  transform: translateX(80px);\n  z-index: 0;\n}\n.p-page--layout-sb .p-page-sidebar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  font-size: 14px;\n  color: rgba(36, 36, 36, 0.9);\n  font-weight: 500;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n}\n.p-page--layout-sb .p-page-sidebar .p-page-title span {\n  display: inline-block;\n  transform: rotate(90deg);\n  transform-origin: left center;\n  white-space: nowrap;\n}\n.p-page--layout-sb .p-page-content {\n  flex-grow: 1;\n}\n@media screen and (max-width: 1000px) {\n  .p-page--layout-sb {\n    display: block;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    padding: 16px 0;\n    max-width: unset;\n    min-width: unset;\n    min-height: 80px;\n    margin: 0;\n    transform: none;\n  }\n  .p-page--layout-sb .p-page-sidebar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title {\n    position: static;\n  }\n  .p-page--layout-sb .p-page-sidebar .p-page-title span {\n    transform: none;\n    white-space: unset;\n  }\n}\n.un-science {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2Uvc2NpZW5jZS1wYWdlL3NjaWVuY2UtcGFnZS5jb21wb25lbnQubGVzcyIsImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZCIsInNyYy9hcHAvc2hhcmVkL3BhZ2Uvc2NpZW5jZS1wYWdlL0Q6L1BST0pFQ1RTL3VuaWsvc3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fYW5pbWF0aW9ucy5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fZ3JpZC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdG9vbHRpcC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50cy9fdGlsZS5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fZ2VuZXJhbC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2UvRDovUFJPSkVDVFMvdW5pay9zcmMvYXNzZXRzL3Njc3MvcGFnZS9fbGF5b3V0LXNiLmxlc3MiLCJzcmMvYXBwL3NoYXJlZC9wYWdlL3NjaWVuY2UtcGFnZS9EOi9QUk9KRUNUUy91bmlrL3NyYy9hcHAvc2hhcmVkL3BhZ2Uvc2NpZW5jZS1wYWdlL3NjaWVuY2UtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FDQVg7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFD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Q0EsZUFBQTtFUG9RSjtFQ3pURDtJTXlESyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFUG1RSjtFQ2pVRDtJTWlFTyxnQkFBQTtFUG1RTjtFQ3BVRDtJTW9FUyxlQUFBO0lBQ0Esa0JBQUE7RVBtUVI7QUFDRjtBUXZVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QVJ5VUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnZS9zY2llbmNlLXBhZ2Uvc2NpZW5jZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIElDT05TICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWQnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbi8qKiBWQVJJQUJMRVMgKi9cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyoqIENPTVBPTkVOVFMgKi9cbi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5jLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICB9XG59XG4uYy10b29sd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMTZweCAwIDA7XG59XG4uYy10b29sd2luZG93LS1wYXJlbnQ6aG92ZXIgLmMtdG9vbHdpbmRvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmMtdGlsZSB7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmMtdGlsZSB7XG4gICAgcGFkZGluZzogMzJweCAxNnB4O1xuICB9XG59XG4vKiogUEFHRSAqL1xuLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5wLXBhZ2UtLWdlbmVyYWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyLjk7XG59XG4ucC1wYWdlLS1nZW5lcmFsIC5wLXBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2Uge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDQ4cHggMjRweCAwO1xuICB3aWR0aDogMjUlO1xufVxuLnAtcGFnZSAucC1pbWFnZS0tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMCAwIDI0cHggNDhweDtcbn1cbi5wLXBhZ2UgLnAtaW1hZ2UucC13LS0xMDAge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnAtcGFnZSAucC13LS0zMCB7XG4gIHdpZHRoOiAzMyU7XG59XG4ucC1wYWdlIC5wLXctLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5wLXBhZ2UgLnAtdy0tNzUge1xuICB3aWR0aDogNzUlO1xufVxuLnAtcGFnZSAucC13LS0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cbi5wLXBhZ2UgLnAtcGFyYWdyYXBoOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnAtcGFnZSAucC1wYXJhZ3JhcGg6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wLXBhZ2UgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjOWQ4YzVkO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBsaW5lYXI7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnQ6aG92ZXIge1xuICBjb2xvcjogIzhkN2U1NDtcbn1cbi5wLXBhZ2UgLnAtYXR0YWNobWVudF9fdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgOHB4IDAgMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucC1wYWdlIC5wLWF0dGFjaG1lbnRfX3R5cGU6YmVmb3JlIHtcbiAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xufVxuLnAtcGFnZSAucC1jb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2x1bW4tZ2FwOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucC1wYWdlIC5wLWNvbC0yIHtcbiAgY29sdW1uczogMjtcbn1cbi5wLXBhZ2UgLnAtY29sLTMge1xuICBjb2x1bW5zOiAzO1xufVxuLnAtcGFnZSAucC10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDEwcHggMXB4IHJnYmEoMzYsIDM2LCAzNiwgMC4wNSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMjRweCAwIDA7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM2LCAzNiwgMzYsIDAuMDUpO1xuICBtYXJnaW46IDAgMCAxNnB4IDA7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbCB7XG4gIHdpZHRoOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtY29sLS0yIHtcbiAgZmxleC1ncm93OiAyO1xufVxuLnAtcGFnZSAucC10YWJsZS1jb2wtLTMge1xuICBmbGV4LWdyb3c6IDM7XG59XG4ucC1wYWdlIC5wLXRhYmxlLWNvbC0tNCB7XG4gIGZsZXgtZ3JvdzogNDtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtaGVhZCAucC10YWJsZS1jb2wge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wLXBhZ2UgLnAtdGFibGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wLXBhZ2UgLnAtY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5wLXBhZ2UgLnAtYWxpZ24tLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnAtcGFnZSAucC1hbGlnbi0tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnAtcGFnZSAucC1hbGlnbi0tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wLXBhZ2UgLnAtY2Yge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnAtcGFnZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG59XG4ucC1wYWdlIHVsLFxuLnAtcGFnZSBvbCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucC1wYWdlIHVsICsgLnAtcGFnZSB1bCxcbi5wLXBhZ2UgdWwgKyAucC1wYWdlIG9sLFxuLnAtcGFnZSBvbCArIC5wLXBhZ2UgdWwsXG4ucC1wYWdlIG9sICsgLnAtcGFnZSBvbCB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlLS1nZW5lcmFsIC5wLXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZzogMzJweCA4cHg7XG4gIH1cbiAgLnAtcGFnZSAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAucC1wYWdlIC5wLWNvbC0yLFxuICAucC1wYWdlIC5wLWNvbC0zIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG4gIC5wLXBhZ2UgLnAtdy0tMzAsXG4gIC5wLXBhZ2UgLnAtdy0tNTAsXG4gIC5wLXBhZ2UgLnAtdy0tNzUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wLXBhZ2UgLnAtaW1hZ2Uge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDAgMjRweCAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDhweCAwIDA7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnAtcGFnZSAucC1hdHRhY2htZW50X190eXBlOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHRvcDogMDtcbiAgfVxufVxuLnAtcGFnZS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2Utc2lkZWJhciB7XG4gIGJhY2tncm91bmQ6ICNmOWY2ZWY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgzNiwgMzYsIDM2LCAwLjA1KTtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMCAwIDAgLTgwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KTtcbiAgei1pbmRleDogMDtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC45KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnAtcGFnZS0tbGF5b3V0LXNiIC5wLXBhZ2UtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAucC1wYWdlLS1sYXlvdXQtc2Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIC5wLXBhZ2UtLWxheW91dC1zYiAucC1wYWdlLXNpZGViYXIgLnAtcGFnZS10aXRsZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAucC1wYWdlLS1sYXlvdXQtc2IgLnAtcGFnZS1zaWRlYmFyIC5wLXBhZ2UtdGl0bGUgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgfVxufVxuLnVuLXNjaWVuY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjUyL2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTloudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnNvdXRsaW5lZC92MjEvZ29rLUg3enpEa2RuUmVsOC1EUTZLQVhKNjl3UDF0R25mNFpHaFVjZC5vdGYpIGZvcm1hdCgnb3BlbnR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG59XG4iLCJAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiIsIi5jLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IEBjb250YWluZXItd2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIEBtYWluLWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAqIDEuNTtcbiAgfVxufVxuIiwiLmMtdG9vbHdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICBkaXNwbGF5OiBub25lO1xuICBhbmltYXRpb246IGZhZGVJbiAxMDBtcyBlYXNlLWluLW91dDtcblxuICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiA0IDAgMDtcblxuICAmLS1wYXJlbnQ6aG92ZXIgJiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi5jLXRpbGUge1xuICBib3gtc2hhZG93OiAwIDAgQHNlY29uZGFyeS1ncmlkIDAgQGJsYWNrLWEwNTtcbiAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gIHBhZGRpbmc6IEBtYWluLWdyaWQgKiA1O1xuICBib3JkZXItcmFkaXVzOiBAc2Vjb25kYXJ5LWdyaWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuYy10aWxlIHtcbiAgICBwYWRkaW5nOiBAbWFpbi1ncmlkICogNCBAbWFpbi1ncmlkICogMjtcbiAgfVxufVxuIiwiLnAtcGFnZSB7XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmLS1nZW5lcmFsIHtcbiAgICBmb250LXNpemU6IEBtYWluLWdyaWQgKiAyO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjk7XG5cbiAgICAucC1wYWdlLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDggMDtcbiAgICB9XG4gIH1cblxuICAucC1pbWFnZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwIEBtYWluLWdyaWQgKiA2IEBtYWluLWdyaWQgKiAzIDA7XG5cbiAgICB3aWR0aDogMjUlO1xuXG4gICAgJi0tcmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luOiAwIDAgQG1haW4tZ3JpZCAqIDMgQG1haW4tZ3JpZCAqIDY7XG4gICAgfVxuXG4gICAgJi5wLXctLTEwMCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAucC13IHtcbiAgICAmLS0zMCB7XG4gICAgICB3aWR0aDogMzMlO1xuICAgIH1cblxuICAgICYtLTUwIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgJi0tNzUge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICAmLS0xMDAge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnAtcGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDJlbSAwO1xuXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnAtYXR0YWNobWVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiBAbWFpbi1jb2xvci1kYXJrO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGxpbmVhcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGRhcmtlbihAbWFpbi1jb2xvci1kYXJrLCA1JSk7XG4gICAgfVxuXG4gICAgJl9fdHlwZSB7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDM7XG4gICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgIHBhZGRpbmc6IDAgQG1haW4tZ3JpZCAwIEBzZWNvbmRhcnktZ3JpZCAqIDY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ2F0dGFjaF9maWxlJztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogQG1haW4tZ3JpZCAqIDM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucC1jb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLTIge1xuICAgICAgY29sdW1uczogMjtcbiAgICB9XG5cbiAgICAmLTMge1xuICAgICAgY29sdW1uczogMztcbiAgICB9XG4gIH1cblxuICAucC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogQHdoaXRlLWExMDA7XG4gICAgYm9yZGVyLXJhZGl1czogQHNlY29uZGFyeS1ncmlkO1xuICAgIGJveC1zaGFkb3c6IDAgQHNlY29uZGFyeS1ncmlkIC8gNCBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBzZWNvbmRhcnktZ3JpZCAqIDIuNSBAc2Vjb25kYXJ5LWdyaWQgLyA0IEBibGFjay1hMDU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IEBtYWluLWdyaWQgKiAzIDAgMDtcblxuICAgICYtaGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogQGJsYWNrLWEwNTtcbiAgICAgIG1hcmdpbjogMCAwIEBtYWluLWdyaWQgKiAyIDA7XG4gICAgfVxuXG4gICAgJi1jb2wge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiBAc2Vjb25kYXJ5LWdyaWQgKiAzIEBtYWluLWdyaWQgKiAzO1xuXG4gICAgICAmLS0yIHtcbiAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgfVxuXG4gICAgICAmLS0zIHtcbiAgICAgICAgZmxleC1ncm93OiAzO1xuICAgICAgfVxuXG4gICAgICAmLS00IHtcbiAgICAgICAgZmxleC1ncm93OiA0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtaGVhZCAucC10YWJsZS1jb2wge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IEBzZWNvbmRhcnktZ3JpZCAqIDMuNTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgfVxuXG4gIC5wLWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnAtYWxpZ24ge1xuICAgICYtLWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgJi0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgJi0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLnAtY2Yge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLXRvcDogMDtcblxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wLXBhZ2Uge1xuICAgICYtLWdlbmVyYWwge1xuICAgICAgLnAtcGFnZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDQgQG1haW4tZ3JpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC1jb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2x1bW4tZ2FwOiBAbWFpbi1ncmlkO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJi0yLFxuICAgICAgJi0zIHtcbiAgICAgICAgY29sdW1uczogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucC13IHtcbiAgICAgICYtLTMwLFxuICAgICAgJi0tNTAsXG4gICAgICAmLS03NSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wLWltYWdlIHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgMCBAbWFpbi1ncmlkICogMyAwICFpbXBvcnRhbnQ7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wLWF0dGFjaG1lbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IEBtYWluLWdyaWQgMCAwO1xuXG4gICAgICAmX190eXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAcjogficucC1wYWdlJztcblxuQHtyfS0tbGF5b3V0LXNiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEB7cn0tc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZDogQG1haW4tY29sb3ItbGlnaHQ7XG4gICAgYm94LXNoYWRvdzogMCAwIEBzZWNvbmRhcnktZ3JpZCAqIDUgMCBAYmxhY2stYTA1O1xuICAgIG1heC13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1pbi13aWR0aDogQG1haW4tZ3JpZCAqIDEwO1xuICAgIG1hcmdpbjogMCAwIDAgLUBtYWluLWdyaWQgKiAxMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoQG1haW4tZ3JpZCAqIDEwKTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5cbiAgQHtyfS1zaWRlYmFyIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIEB7cn0tdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBAbWFpbi1ncmlkICogMztcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogQHNlY29uZGFyeS1ncmlkICogMy41O1xuICAgICAgY29sb3I6IEBibGFjay1hOTA7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IEBzZWNvbmRhcnktZ3JpZDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQHtyfS1jb250ZW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIEB7cn0tLWxheW91dC1zYiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAe3J9LXNpZGViYXIge1xuICAgICAgcGFkZGluZzogQG1haW4tZ3JpZCAqIDIgMDtcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgbWluLWhlaWdodDogQG1haW4tZ3JpZCAqIDEwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cblxuICAgIEB7cn0tc2lkZWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiBAbWFpbi1ncmlkO1xuICAgICAgcGFkZGluZy1yaWdodDogQG1haW4tZ3JpZDtcblxuICAgICAgQHtyfS10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAndGhlbWUnO1xuXG4udW4tc2NpZW5jZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/page/science-page/science-page.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/page/science-page/science-page.component.ts ***!
          \********************************************************************/
        /*! exports provided: SciencePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SciencePageComponent", function () { return SciencePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SciencePageComponent = /** @class */ (function () {
                function SciencePageComponent() {
                }
                SciencePageComponent.prototype.ngOnInit = function () {
                };
                return SciencePageComponent;
            }());
            SciencePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-science-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./science-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page/science-page/science-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./science-page.component.less */ "./src/app/shared/page/science-page/science-page.component.less")).default]
                })
            ], SciencePageComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/page/science-page/science-page.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/shared/page/science-page/science-page.module.ts ***!
          \*****************************************************************/
        /*! exports provided: SciencePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SciencePageModule", function () { return SciencePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _science_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./science-page.component */ "./src/app/shared/page/science-page/science-page.component.ts");
            var SciencePageModule = /** @class */ (function () {
                function SciencePageModule() {
                }
                return SciencePageModule;
            }());
            SciencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_science_page_component__WEBPACK_IMPORTED_MODULE_3__["SciencePageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ]
                })
            ], SciencePageModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=route-base-base-module-es2015.js.map
//# sourceMappingURL=route-base-base-module-es5.js.map
//# sourceMappingURL=route-base-base-module-es5.js.map