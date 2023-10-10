/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'AudioPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    isDetails: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var __returned__ = {
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'DeleteButton',
  props: {
    mode: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['file', 'cover'].includes(value);
      }
    },
    resourceName: {
      type: String,
      required: true
    },
    resourceId: {
      type: Number,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;

    // composables
    var _useLocalization = (0,laravel_nova__WEBPACK_IMPORTED_MODULE_1__.useLocalization)(),
      __ = _useLocalization.__;

    // variables
    var showModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var deleting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    // computed properties
    var label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (props.mode === 'file') {
        return __('Delete File');
      }
      return __('Delete Cover');
    });
    function remove() {
      return _remove.apply(this, arguments);
    }
    function _remove() {
      _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, params;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = "/nova-api/".concat(props.resourceName, "/").concat(props.resourceId, "/field/").concat(props.fieldName);
              params = props.mode === 'cover' ? '?cover=true' : '';
              deleting.value = true;
              _context.next = 5;
              return Nova.request()["delete"](url + params).then(function () {
                Nova.success(__("The ".concat(props.mode, " has been deleted!")));
                Nova.visit("/resources/".concat(props.resourceName, "/").concat(props.resourceId));
              })["catch"](function (error) {
                Nova.error(error);
              })["finally"](function () {
                deleting.value = false;
                showModal.value = false;
              });
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _remove.apply(this, arguments);
    }
    var __returned__ = {
      props: props,
      __: __,
      showModal: showModal,
      deleting: deleting,
      label: label,
      remove: remove,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get useLocalization() {
        return laravel_nova__WEBPACK_IMPORTED_MODULE_1__.useLocalization;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createFile(file) {
  return {
    name: file.name,
    extension: file.name.split('.').pop(),
    type: file.type,
    originalFile: file,
    processing: false,
    progress: 0
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FilePicker',
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__.HandlesValidationErrors, laravel_nova__WEBPACK_IMPORTED_MODULE_0__.DependentFormField],
  emits: ['update:modelValue'],
  props: ['originalAttributeName', 'resourceId', 'resourceName', 'relatedResourceName', 'relatedResourceId', 'viaRelationship', 'field', 'cover', 'isCover', 'errors'],
  inject: ['removeFile'],
  expose: ['beforeRemove'],
  data: function data() {
    return {
      file: null,
      previewFile: null,
      thumbnailFile: null,
      fileName: '',
      thumbnailFileName: '',
      removeModalOpen: false,
      missing: false,
      deleted: false,
      src: null,
      uploadErrors: new laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Errors(),
      uploading: false,
      thumbnailUploading: false,
      uploadProgress: 0,
      thumbnailUploadProgress: 0,
      startedDrag: false,
      uploadModalShown: false
    };
  },
  computed: {
    acceptedTypes: function acceptedTypes() {
      if (this.isCover) {
        return 'image/png, image/jpeg';
      }
      return null;
    },
    files: function files() {
      return this.file ? [this.file] : [];
    },
    hasError: function hasError() {
      return this.uploadErrors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.uploadErrors.first(this.fieldAttribute);
      }
    },
    idAttr: function idAttr() {
      return this.labelFor;
    },
    labelFor: function labelFor() {
      var name = this.resourceName;
      if (this.relatedResourceName) {
        name += '-' + this.relatedResourceName;
      }
      return "file-".concat(name, "-").concat(this.fieldAttribute);
    },
    hasValue: function hasValue() {
      return Boolean(this.field.value || this.imageUrl) && !Boolean(this.deleted) && !Boolean(this.missing);
    },
    shouldShowLoader: function shouldShowLoader() {
      return !Boolean(this.deleted) && Boolean(this.imageUrl);
    },
    shouldShowField: function shouldShowField() {
      return Boolean(!this.currentlyIsReadonly);
    },
    shouldShowRemoveButton: function shouldShowRemoveButton() {
      return Boolean(this.currentField.deletable && !this.currentlyIsReadonly);
    },
    imageUrl: function imageUrl() {
      return this.currentField.previewUrl || this.currentField.thumbnailUrl;
    },
    maxWidth: function maxWidth() {
      return this.currentField.maxWidth || 320;
    }
  },
  watch: {
    file: {
      immediate: true,
      handler: function handler(file) {
        this.$emit('update:modelValue', file);
      }
    }
  },
  methods: {
    preparePreviewImage: function preparePreviewImage() {
      if (this.hasValue && this.imageUrl) {
        this.fetchPreviewImage();
      }
      if (this.hasValue && !this.imageUrl) {
        this.previewFile = createFile({
          name: this.currentField.value,
          type: this.currentField.value.split('.').pop()
        });
      }
    },
    fetchPreviewImage: function fetchPreviewImage() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data, name;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(_this.imageUrl);
            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.blob();
            case 5:
              data = _context.sent;
              name = _this.currentField.value.split('/').pop();
              _this.previewFile = createFile(new File([data], name, {
                type: data.type
              }));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleFileChange: function handleFileChange(newFiles) {
      this.file = createFile(newFiles[0]);
    },
    confirmRemoval: function confirmRemoval() {
      this.removeModalOpen = true;
    },
    closeRemoveModal: function closeRemoveModal() {
      this.removeModalOpen = false;
    },
    beforeRemove: function beforeRemove() {
      this.removeUploadedFile();
    },
    removeUploadedFile: function removeUploadedFile() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _error$response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.removeFile(_this2.fieldAttribute);
            case 3:
              _this2.$emit('file-deleted');
              _this2.deleted = true;
              _this2.file = null;
              Nova.success(_this2.__('The file was deleted!'));
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              if (((_error$response = _context2.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422) {
                _this2.uploadErrors = new laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Errors(_context2.t0.response.data.errors);
              }
            case 12:
              _context2.prev = 12;
              _this2.closeRemoveModal();
              return _context2.finish(12);
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9, 12, 15]]);
      }))();
    },
    removeFile: function removeFile() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var resourceName, resourceId, relatedResourceName, relatedResourceId, viaRelationship, attribute, uri, query;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.uploadErrors = new laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Errors();
              resourceName = _this3.resourceName, resourceId = _this3.resourceId, relatedResourceName = _this3.relatedResourceName, relatedResourceId = _this3.relatedResourceId, viaRelationship = _this3.viaRelationship;
              attribute = _this3.originalAttributeName;
              uri = _this3.viaRelationship ? "/nova-api/".concat(resourceName, "/").concat(resourceId, "/").concat(relatedResourceName, "/").concat(relatedResourceId, "/field/").concat(attribute, "?viaRelationship=").concat(viaRelationship) : "/nova-api/".concat(resourceName, "/").concat(resourceId, "/field/").concat(attribute);
              query = '?cover=' + (_this3.isCover ? 'true' : 'false');
              _context3.prev = 5;
              _context3.next = 8;
              return Nova.request()["delete"](uri + query);
            case 8:
              _this3.closeRemoveModal();
              _this3.deleted = true;
              _this3.$emit('file-deleted');
              Nova.success(_this3.__('The file was deleted!'));
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](5);
              _this3.closeRemoveModal();
              if (_context3.t0.response.status === 422) {
                _this3.uploadErrors = new laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Errors(_context3.t0.response.data.errors);
              }
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 14]]);
      }))();
    }
  },
  mounted: function mounted() {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this4.preparePreviewImage();
            if (!_this4.isCover) {
              _this4.field.fill = function (formData) {
                var attribute = _this4.fieldAttribute;
                if (_this4.file) {
                  formData.append(attribute + '[original]', _this4.file.originalFile, _this4.file.name);
                }
                if (_this4.cover) {
                  formData.append(attribute + '[cover]', _this4.cover.originalFile, _this4.cover.name);
                }
              };
            }
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue");
/* harmony import */ var _AudioPlayer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer.vue */ "./resources/js/components/AudioPlayer.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'FilePreview',
  props: {
    field: {
      type: Object,
      required: true
    },
    isDetails: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;

    // computed properties
    var isImage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.field.meta.type === 'IMAGE';
    });
    var isVideo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.field.meta.type === 'VIDEO';
    });
    var isAudio = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.field.meta.type === 'AUDIO';
    });
    var maxWidth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.isDetails ? 220 : 64;
    });
    var aspect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.isDetails ? 'aspect-auto' : 'aspect-square';
    });
    var __returned__ = {
      props: props,
      isImage: isImage,
      isVideo: isVideo,
      isAudio: isAudio,
      maxWidth: maxWidth,
      aspect: aspect,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      VideoPlayer: _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      AudioPlayer: _AudioPlayer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vidstack_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vidstack/player */ "./node_modules/vidstack/dist/dev/define/vidstack-player.js");
/* harmony import */ var vidstack_player_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vidstack/player/layouts */ "./node_modules/vidstack/dist/dev/define/vidstack-player-layouts.js");
/* harmony import */ var vidstack_player_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vidstack/player/ui */ "./node_modules/vidstack/dist/dev/define/vidstack-player-ui.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      required: true
    },
    poster: {
      type: String,
      required: true
    },
    meta: {
      type: Object,
      required: true
    },
    isDetails: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var __returned__ = {
      props: props
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FilePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FilePreview.vue */ "./resources/js/components/FilePreview.vue");
/* harmony import */ var _components_DeleteButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DeleteButton.vue */ "./resources/js/components/DeleteButton.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DeleteButton: _components_DeleteButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilePreview: _components_FilePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['resource', 'resourceName', 'resourceId', 'field', 'index'],
  data: function data() {
    return {
      src: this.field.previewUrl,
      autoplay: false
    };
  },
  computed: {
    shouldShowFile: function shouldShowFile() {
      return Boolean(this.field.previewUrl);
    },
    shouldShowToolbar: function shouldShowToolbar() {
      return Boolean(this.field.downloadable && this.field.thumbnailUrl);
    },
    coverField: function coverField() {
      return _objectSpread(_objectSpread({}, this.field), {}, {
        name: this.field.name + ' (' + this.__('Cover') + ')'
      });
    }
  },
  methods: {
    download: function download() {
      var resourceName = this.resourceName,
        resourceId = this.resourceId;
      var attribute = this.field.attribute;
      var link = document.createElement('a');
      link.href = "/nova-api/".concat(resourceName, "/").concat(resourceId, "/download/").concat(attribute);
      link.download = 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FilePicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FilePicker.vue */ "./resources/js/components/FilePicker.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['resourceName', 'resourceId', 'relatedResourceName', 'relatedResourceId', 'viaRelationship', 'field', 'errors'],
  components: {
    FilePicker: _components_FilePicker_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      file: null,
      cover: null,
      coverProps: null
    };
  },
  created: function created() {
    var coverProps = JSON.parse(JSON.stringify(this.$props));
    var attribute = coverProps.field.attribute;
    var coverAttribute = attribute + '_cover';
    coverProps.field.attribute = coverAttribute;
    coverProps.field.indexName = coverProps.field.indexName + '(Cover)';
    coverProps.field.name = coverProps.field.indexName;
    coverProps.field.sortableUriKey = coverProps.field.sortableUriKey + '_cover';
    coverProps.field.uniqueKey = coverProps.field.uniqueKey.replace(attribute, coverAttribute);
    coverProps.field.dependentComponentKey = coverProps.field.dependentComponentKey.replace(attribute, coverAttribute);
    coverProps.field.validationKey = coverProps.field.validationKey.replace('.original', '.cover');
    coverProps.field.value = coverProps.field.thumbnailUrl;
    coverProps.field.previewUrl = coverProps.field.thumbnailUrl;
    this.coverProps = coverProps;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_FilePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FilePreview.vue */ "./resources/js/components/FilePreview.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['viaResource', 'viaResourceId', 'resourceName', 'field'],
  components: {
    FilePreview: _components_FilePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-070e61bc"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["audio", {
      small: !$props.isDetails
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("audio", {
    src: $props.src,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.isDetails ? 'w-full' : ''),
    controlslist: "nodownload",
    controls: ""
  }, null, 10 /* CLASS, PROPS */, _hoisted_1)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "class mt-1"
};
var _hoisted_2 = ["onSubmit"];
var _hoisted_3 = {
  "class": "leading-normal"
};
var _hoisted_4 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  var _component_ModalHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalHeader");
  var _component_ModalContent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalContent");
  var _component_LinkButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LinkButton");
  var _component_LoadingButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LoadingButton");
  var _component_ModalFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalFooter");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.showModal = true;
    })
  }, _ctx.$attrs, {
    "class": "cursor-pointer text-red-500 inline-flex items-center"
  }), [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
    "class": "mr-2",
    type: "trash",
    "view-box": "0 0 24 24",
    width: "16",
    height: "16"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.label), 1 /* TEXT */)], 16 /* FULL_PROPS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Modal, {
    "data-testid": "delete-resource-modal",
    show: $setup.showModal,
    role: "alertdialog",
    size: "sm"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.remove, ["prevent"]),
        "class": "mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalHeader, {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.label)
        }, null, 8 /* PROPS */, ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalContent, null, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.__("Are you sure you want to delete the selected ".concat($props.mode, "?"))), 1 /* TEXT */)];
          }),

          _: 1 /* STABLE */
        })];
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalFooter, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LinkButton, {
            type: "button",
            "data-testid": "cancel-button",
            dusk: "cancel-delete-button",
            onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $setup.showModal = false;
            }, ["prevent"])),
            "class": "mr-3"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.__('Cancel')), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LoadingButton, {
            ref: "confirmButton",
            dusk: "confirm-delete-button",
            processing: $setup.deleting,
            disabled: $setup.deleting,
            component: "DangerButton",
            type: "submit"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.__('Delete')), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["processing", "disabled"])])];
        }),
        _: 1 /* STABLE */
      })], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2)];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["show"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "space-y-4"
};
var _hoisted_2 = {
  key: 0,
  "class": "grid grid-cols-4 gap-x-6 gap-y-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FilePreviewBlock = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FilePreviewBlock");
  var _component_ConfirmUploadRemovalModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConfirmUploadRemovalModal");
  var _component_DropZone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropZone");
  var _component_DefaultField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultField");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultField, {
    field: _ctx.currentField,
    "label-for": $options.labelFor,
    errors: $props.errors,
    "show-help-text": !_ctx.isReadonly && _ctx.showHelpText,
    "full-width-content": _ctx.fullWidthContent
  }, {
    field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _ctx$file;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" ORIGINAL FILE "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$options.hasValue && _ctx.previewFile && $options.files.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_ctx.previewFile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FilePreviewBlock, {
        key: 0,
        file: _ctx.previewFile,
        removable: $options.shouldShowRemoveButton,
        onRemoved: $options.confirmRemoval,
        rounded: $props.field.rounded,
        dusk: "".concat($props.field.attribute, "-delete-link")
      }, null, 8 /* PROPS */, ["file", "removable", "onRemoved", "rounded", "dusk"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Upload Removal Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ConfirmUploadRemovalModal, {
        show: _ctx.removeModalOpen,
        onConfirm: $options.removeUploadedFile,
        onClose: $options.closeRemoveModal
      }, null, 8 /* PROPS */, ["show", "onConfirm", "onClose"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" DropZone "), $options.shouldShowField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DropZone, {
        key: 1,
        files: $options.files,
        onFileChanged: $options.handleFileChange,
        onFileRemoved: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.file = null;
        }),
        rounded: $props.field.rounded,
        "accepted-types": $options.acceptedTypes,
        disabled: (_ctx$file = _ctx.file) === null || _ctx$file === void 0 ? void 0 : _ctx$file.processing,
        dusk: "".concat($props.field.attribute, "-delete-link"),
        "input-dusk": $props.field.attribute
      }, null, 8 /* PROPS */, ["files", "onFileChanged", "rounded", "accepted-types", "disabled", "dusk", "input-dusk"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["field", "label-for", "errors", "show-help-text", "full-width-content"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 1,
  "class": "inline-block"
};
var _hoisted_2 = {
  key: 3
};
var _hoisted_3 = {
  key: 4
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$field$cover, _$props$field$meta;
  var _component_ImageLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ImageLoader");
  return $setup.isVideo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["VideoPlayer"], {
    key: 0,
    src: $props.field.original,
    poster: (_$props$field$cover = $props.field.cover) !== null && _$props$field$cover !== void 0 ? _$props$field$cover : '',
    meta: $props.field.meta,
    "is-details": $props.isDetails
  }, null, 8 /* PROPS */, ["src", "poster", "meta", "is-details"])) : $setup.isImage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ImageLoader, {
    src: $props.field.original,
    maxWidth: $setup.maxWidth,
    aspect: $setup.aspect
  }, null, 8 /* PROPS */, ["src", "maxWidth", "aspect"])])) : $setup.isAudio ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["AudioPlayer"], {
    key: 2,
    src: $props.field.original,
    "is-details": $props.isDetails
  }, null, 8 /* PROPS */, ["src", "is-details"])) : (_$props$field$meta = $props.field.meta) !== null && _$props$field$meta !== void 0 && _$props$field$meta.name && $props.isDetails ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.meta.name), 1 /* TEXT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "—"));
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9e3bdfbe"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = ["title", "src"];
var _hoisted_2 = ["src", "alt"];
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("media-provider", null, null, -1 /* HOISTED */);
});
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("media-video-layout", null, null, -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["video", {
      small: !$props.isDetails
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("media-player", {
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop", "prevent"])),
    "class": "media-player",
    title: $props.meta.name,
    src: $props.src,
    crossorigin: ""
  }, [$props.poster ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("media-poster", {
    key: 0,
    "class": "vds-poster",
    src: $props.poster,
    alt: $props.meta.name
  }, null, 8 /* PROPS */, _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_3, _hoisted_4], 8 /* PROPS */, _hoisted_1)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 1
};
var _hoisted_2 = {
  "class": "flex items-center text-sm mt-3 gap-6"
};
var _hoisted_3 = {
  key: 0,
  "class": "flex items-center"
};
var _hoisted_4 = {
  "class": "class mt-1"
};
var _hoisted_5 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FilePreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FilePreview");
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  var _component_LinkButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LinkButton");
  var _component_DeleteButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteButton");
  var _component_PanelItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PanelItem");
  var _component_ImageLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ImageLoader");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PanelItem, {
    index: $props.index,
    field: $props.field
  }, {
    value: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$options.shouldShowFile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FilePreview, {
        key: 0,
        field: $props.field.displayedAs,
        "is-details": true
      }, null, 8 /* PROPS */, ["field"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, "—")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$options.shouldShowToolbar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_3, [$props.field.downloadable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LinkButton, {
        key: 0,
        onKeydown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.download, ["prevent"]), ["enter"]),
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.download, ["prevent"]),
        dusk: $props.field.attribute + '-download-link',
        tabindex: "0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            "class": "mr-2",
            type: "download",
            width: "16",
            height: "16"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Download')), 1 /* TEXT */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onKeydown", "onClick", "dusk"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.shouldShowFile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DeleteButton, {
        key: 1,
        mode: "file",
        "resource-id": $props.resourceId,
        "resource-name": $props.resourceName,
        "field-name": $props.field.attribute,
        field: $props.field
      }, null, 8 /* PROPS */, ["resource-id", "resource-name", "field-name", "field"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["index", "field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PanelItem, {
    index: $props.index + '-cover',
    field: $options.coverField
  }, {
    value: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$options.coverField.displayedAs.cover && $options.coverField.displayCoverUploader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ImageLoader, {
        aspect: "aspect-auto",
        src: $options.coverField.displayedAs.cover,
        maxWidth: 280
      }, null, 8 /* PROPS */, ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteButton, {
        "class": "mt-6",
        mode: "cover",
        "resource-id": $props.resourceId,
        "resource-name": $props.resourceName,
        "field-name": $props.field.attribute,
        field: $props.field
      }, null, 8 /* PROPS */, ["resource-id", "resource-name", "field-name", "field"])], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, "—"))];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["index", "field"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_file_picker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("file-picker");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_file_picker, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    modelValue: _ctx.file,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.file = $event;
    })
  }, _ctx.$props, {
    "original-attribute-name": $props.field.attribute,
    cover: _ctx.cover
  }), null, 16 /* FULL_PROPS */, ["modelValue", "original-attribute-name", "cover"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)() + " ", 1 /* TEXT */), (_ctx.file || $props.resourceId) && _ctx.coverProps && _ctx.coverProps.field.displayCoverUploader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_file_picker, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    key: 0,
    modelValue: _ctx.cover,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.cover = $event;
    })
  }, _ctx.coverProps, {
    "original-attribute-name": $props.field.attribute,
    errors: $props.errors,
    "is-cover": true
  }), null, 16 /* FULL_PROPS */, ["modelValue", "original-attribute-name", "errors"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FilePreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FilePreview");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", null, [$props.field.previewUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_FilePreview, {
    key: 0,
    field: $props.field.displayedAs,
    "is-details": false
  }, null, 8 /* PROPS */, ["field"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_1, "—"))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".audio[data-v-070e61bc] {\n  position: relative;\n  width: 100%;\n  min-width: 300px;\n  max-width: 800px;\n  display: inline-block;\n}\n.audio.small[data-v-070e61bc] {\n  max-width: 270px;\n}\n.audio audio[data-v-070e61bc] {\n  width: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".video[data-v-9e3bdfbe] {\n  position: relative;\n  width: 100%;\n  min-width: 300px;\n  max-width: 800px;\n  display: inline-block;\n}\n.video.small[data-v-9e3bdfbe] {\n  max-width: 270px;\n}\n.video[data-v-9e3bdfbe] .vds-poster img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}", ""]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_070e61bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_070e61bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_070e61bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/AudioPlayer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AudioPlayer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudioPlayer_vue_vue_type_template_id_070e61bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true */ "./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true");
/* harmony import */ var _AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _AudioPlayer_vue_vue_type_style_index_0_id_070e61bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true */ "./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AudioPlayer_vue_vue_type_template_id_070e61bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-070e61bc"],['__file',"resources/js/components/AudioPlayer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/DeleteButton.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/DeleteButton.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteButton_vue_vue_type_template_id_25843a28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteButton.vue?vue&type=template&id=25843a28 */ "./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28");
/* harmony import */ var _DeleteButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteButton.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteButton_vue_vue_type_template_id_25843a28__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/DeleteButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FilePicker.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FilePicker.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilePicker_vue_vue_type_template_id_7d05e4d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePicker.vue?vue&type=template&id=7d05e4d5 */ "./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5");
/* harmony import */ var _FilePicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePicker.vue?vue&type=script&lang=js */ "./resources/js/components/FilePicker.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FilePicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FilePicker_vue_vue_type_template_id_7d05e4d5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/FilePicker.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/FilePreview.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/FilePreview.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilePreview_vue_vue_type_template_id_1acf6791__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=template&id=1acf6791 */ "./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791");
/* harmony import */ var _FilePreview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FilePreview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FilePreview_vue_vue_type_template_id_1acf6791__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/FilePreview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true */ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true");
/* harmony import */ var _VideoPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true */ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VideoPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-9e3bdfbe"],['__file',"resources/js/components/VideoPlayer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/fields/DetailField.vue":
/*!*********************************************!*\
  !*** ./resources/js/fields/DetailField.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailField_vue_vue_type_template_id_2d7a5a31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailField.vue?vue&type=template&id=2d7a5a31 */ "./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31");
/* harmony import */ var _DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailField.vue?vue&type=script&lang=js */ "./resources/js/fields/DetailField.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DetailField_vue_vue_type_template_id_2d7a5a31__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/fields/DetailField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/fields/FormField.vue":
/*!*******************************************!*\
  !*** ./resources/js/fields/FormField.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormField_vue_vue_type_template_id_30a0331e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField.vue?vue&type=template&id=30a0331e */ "./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e");
/* harmony import */ var _FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField.vue?vue&type=script&lang=js */ "./resources/js/fields/FormField.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormField_vue_vue_type_template_id_30a0331e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/fields/FormField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/fields/IndexField.vue":
/*!********************************************!*\
  !*** ./resources/js/fields/IndexField.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexField_vue_vue_type_template_id_3654eaf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexField.vue?vue&type=template&id=3654eaf0 */ "./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0");
/* harmony import */ var _IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexField.vue?vue&type=script&lang=js */ "./resources/js/fields/IndexField.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_IndexField_vue_vue_type_template_id_3654eaf0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/fields/IndexField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteButton.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FilePicker.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/FilePicker.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilePicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePreview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePreview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilePreview.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/fields/DetailField.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/fields/DetailField.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/fields/FormField.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/fields/FormField.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/fields/IndexField.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/fields/IndexField.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_template_id_070e61bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_template_id_070e61bc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=template&id=070e61bc&scoped=true");


/***/ }),

/***/ "./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_template_id_25843a28__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteButton_vue_vue_type_template_id_25843a28__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteButton.vue?vue&type=template&id=25843a28 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/DeleteButton.vue?vue&type=template&id=25843a28");


/***/ }),

/***/ "./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePicker_vue_vue_type_template_id_7d05e4d5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePicker_vue_vue_type_template_id_7d05e4d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilePicker.vue?vue&type=template&id=7d05e4d5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePicker.vue?vue&type=template&id=7d05e4d5");


/***/ }),

/***/ "./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePreview_vue_vue_type_template_id_1acf6791__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FilePreview_vue_vue_type_template_id_1acf6791__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FilePreview.vue?vue&type=template&id=1acf6791 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/FilePreview.vue?vue&type=template&id=1acf6791");


/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_template_id_9e3bdfbe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=template&id=9e3bdfbe&scoped=true");


/***/ }),

/***/ "./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31":
/*!***************************************************************************!*\
  !*** ./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_2d7a5a31__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_2d7a5a31__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=template&id=2d7a5a31 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/DetailField.vue?vue&type=template&id=2d7a5a31");


/***/ }),

/***/ "./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e":
/*!*************************************************************************!*\
  !*** ./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_30a0331e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_30a0331e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=template&id=30a0331e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/FormField.vue?vue&type=template&id=30a0331e");


/***/ }),

/***/ "./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0":
/*!**************************************************************************!*\
  !*** ./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_template_id_3654eaf0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_IndexField_vue_vue_type_template_id_3654eaf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./IndexField.vue?vue&type=template&id=3654eaf0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/fields/IndexField.vue?vue&type=template&id=3654eaf0");


/***/ }),

/***/ "./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AudioPlayer_vue_vue_type_style_index_0_id_070e61bc_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/AudioPlayer.vue?vue&type=style&index=0&id=070e61bc&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VideoPlayer_vue_vue_type_style_index_0_id_9e3bdfbe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/VideoPlayer.vue?vue&type=style&index=0&id=9e3bdfbe&lang=scss&scoped=true");


/***/ }),

/***/ "laravel-nova":
/*!******************************!*\
  !*** external "LaravelNova" ***!
  \******************************/
/***/ ((module) => {

module.exports = LaravelNova;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ }),

/***/ "./node_modules/media-captions/dist/dev.js":
/*!*************************************************!*\
  !*** ./node_modules/media-captions/dist/dev.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptionsRenderer: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   ParseError: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   ParseErrorCode: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   TextCue: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   VTTCue: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   VTTRegion: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   createVTTCueTemplate: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   parseByteStream: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   parseResponse: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   parseText: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   parseTextStream: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   parseVTTTimestamp: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   renderVTTCueString: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   renderVTTTokensString: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   tokenizeVTTCue: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   updateTimedVTTCueNodes: () => (/* reexport safe */ _dev_index_js__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _dev_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev/index.js */ "./node_modules/media-captions/dist/dev/index.js");



/***/ }),

/***/ "./node_modules/media-captions/dist/dev/errors.js":
/*!********************************************************!*\
  !*** ./node_modules/media-captions/dist/dev/errors.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParseErrorBuilder: () => (/* binding */ ParseErrorBuilder)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/media-captions/dist/dev/index.js");


const ParseErrorBuilder = {
  _badVTTHeader() {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadSignature,
      reason: "missing WEBVTT file header",
      line: 1
    });
  },
  _badStartTimestamp(startTime, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadTimestamp,
      reason: `cue start timestamp \`${startTime}\` is invalid on line ${line}`,
      line
    });
  },
  _badEndTimestamp(endTime, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadTimestamp,
      reason: `cue end timestamp \`${endTime}\` is invalid on line ${line}`,
      line
    });
  },
  _badRangeTimestamp(startTime, endTime, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadTimestamp,
      reason: `cue end timestamp \`${endTime}\` is greater than start \`${startTime}\` on line ${line}`,
      line
    });
  },
  _badCueSetting(name, value, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadSettingValue,
      reason: `invalid value for cue setting \`${name}\` on line ${line} (value: ${value})`,
      line
    });
  },
  _unknownCueSetting(name, value, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.UnknownSetting,
      reason: `unknown cue setting \`${name}\` on line ${line} (value: ${value})`,
      line
    });
  },
  _badRegionSetting(name, value, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadSettingValue,
      reason: `invalid value for region setting \`${name}\` on line ${line} (value: ${value})`,
      line
    });
  },
  _unknownRegionSetting(name, value, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.UnknownSetting,
      reason: `unknown region setting \`${name}\` on line ${line} (value: ${value})`,
      line
    });
  },
  // SSA-specific errors
  _missingFormat(type, line) {
    return new _index_js__WEBPACK_IMPORTED_MODULE_0__.P({
      code: _index_js__WEBPACK_IMPORTED_MODULE_0__.c.BadFormat,
      reason: `format missing for \`${type}\` block on line ${line}`,
      line
    });
  }
};




/***/ }),

/***/ "./node_modules/media-captions/dist/dev/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/media-captions/dist/dev/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CaptionsRenderer),
/* harmony export */   P: () => (/* binding */ ParseError),
/* harmony export */   T: () => (/* binding */ TextCue),
/* harmony export */   V: () => (/* binding */ VTTParser),
/* harmony export */   a: () => (/* binding */ VTTBlock),
/* harmony export */   b: () => (/* binding */ VTTCue),
/* harmony export */   c: () => (/* binding */ ParseErrorCode),
/* harmony export */   d: () => (/* binding */ parseResponse),
/* harmony export */   e: () => (/* binding */ parseByteStream),
/* harmony export */   f: () => (/* binding */ parseText),
/* harmony export */   g: () => (/* binding */ parseTextStream),
/* harmony export */   h: () => (/* binding */ VTTRegion),
/* harmony export */   i: () => (/* binding */ createVTTCueTemplate),
/* harmony export */   j: () => (/* binding */ renderVTTTokensString),
/* harmony export */   p: () => (/* binding */ parseVTTTimestamp),
/* harmony export */   r: () => (/* binding */ renderVTTCueString),
/* harmony export */   t: () => (/* binding */ tokenizeVTTCue),
/* harmony export */   u: () => (/* binding */ updateTimedVTTCueNodes)
/* harmony export */ });
const ParseErrorCode = {
  LoadFail: 0,
  BadSignature: 1,
  BadTimestamp: 2,
  BadSettingValue: 3,
  BadFormat: 4,
  UnknownSetting: 5
};
class ParseError extends Error {
  code;
  line;
  constructor(init) {
    super(init.reason);
    this.code = init.code;
    this.line = init.line;
  }
}

const LINE_TERMINATOR_RE = /\r?\n|\r/gm;
class TextLineTransformStream {
  writable;
  readable;
  constructor(encoding) {
    const transformer = new TextStreamLineIterator(encoding);
    this.writable = new WritableStream({
      write(chunk) {
        transformer.transform(chunk);
      },
      close() {
        transformer.close();
      }
    });
    this.readable = new ReadableStream({
      start(controller) {
        transformer.onLine = (line) => controller.enqueue(line);
        transformer.onClose = () => controller.close();
      }
    });
  }
}
class TextStreamLineIterator {
  _buffer = "";
  _decoder;
  onLine;
  onClose;
  constructor(encoding) {
    this._decoder = new TextDecoder(encoding);
  }
  transform(chunk) {
    this._buffer += this._decoder.decode(chunk, { stream: true });
    const lines = this._buffer.split(LINE_TERMINATOR_RE);
    this._buffer = lines.pop() || "";
    for (let i = 0; i < lines.length; i++)
      this.onLine(lines[i].trim());
  }
  close() {
    if (this._buffer)
      this.onLine(this._buffer.trim());
    this._buffer = "";
    this.onClose();
  }
}

async function parseText(text, options) {
  const stream = new ReadableStream({
    start(controller) {
      const lines = text.split(LINE_TERMINATOR_RE);
      for (const line of lines)
        controller.enqueue(line);
      controller.close();
    }
  });
  return parseTextStream(stream, options);
}
async function parseTextStream(stream, options) {
  const type = options?.type ?? "vtt";
  let factory;
  if (typeof type === "string") {
    switch (type) {
      case "srt":
        factory = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./srt-parser.js */ "./node_modules/media-captions/dist/dev/srt-parser.js"))).default;
        break;
      case "ssa":
      case "ass":
        factory = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ssa-parser.js */ "./node_modules/media-captions/dist/dev/ssa-parser.js"))).default;
        break;
      default:
        factory = (await Promise.resolve().then(function () { return vttParser; })).default;
    }
  } else {
    factory = type;
  }
  let result;
  const reader = stream.getReader(), parser = factory(), errors = options?.errors !== false || !!options?.strict || !!options?.errors;
  await parser.init({
    strict: false,
    ...options,
    errors,
    type,
    cancel() {
      reader.cancel();
      result = parser.done(true);
    }
  });
  let i = 1;
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      parser.parse("", i);
      result = parser.done(false);
      break;
    }
    parser.parse(value, i);
    i++;
  }
  return result;
}

async function parseResponse(response, options) {
  const res = await response;
  if (!res.ok || !res.body) {
    let error;
    {
      error = new ParseError({
        code: ParseErrorCode.LoadFail,
        reason: !res.ok ? `response is not ok (status: ${res.status})` : `response body is missing (status: ${res.status})`,
        line: -1
      });
      options?.onError?.(error);
    }
    return {
      metadata: {},
      cues: [],
      regions: [],
      errors: [error]
    };
  }
  const contentType = res.headers.get("content-type") || "", type = contentType.match(/text\/(.*?)(?:;|$)/)?.[1], encoding = contentType.match(/charset=(.*?)(?:;|$)/)?.[1];
  return parseByteStream(res.body, { type, encoding, ...options });
}
async function parseByteStream(stream, { encoding = "utf-8", ...options } = {}) {
  const textStream = stream.pipeThrough(new TextLineTransformStream(encoding));
  return parseTextStream(textStream, options);
}

class TextCue extends EventTarget {
  /**
   * A string that identifies the cue.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/id}
   */
  id = "";
  /**
   * A `double` that represents the video time that the cue will start being displayed, in seconds.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/startTime}
   */
  startTime;
  /**
   * A `double` that represents the video time that the cue will stop being displayed, in seconds.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/endTime}
   */
  endTime;
  /**
   * Returns a string with the contents of the cue.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/text}
   */
  text;
  /**
   * A `boolean` for whether the video will pause when this cue stops being displayed.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/TextTrackCue/pauseOnExit}
   */
  pauseOnExit = false;
  constructor(startTime, endTime, text) {
    super();
    this.startTime = startTime;
    this.endTime = endTime;
    this.text = text;
  }
  addEventListener(type, listener, options) {
    super.addEventListener(type, listener, options);
  }
  removeEventListener(type, listener, options) {
    super.removeEventListener(type, listener, options);
  }
}

const CueBase = window.VTTCue;
class VTTCue extends CueBase {
  /**
   * A `VTTRegion` object describing the video's sub-region that the cue will be drawn onto,
   * or `null` if none is assigned.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/region}
   */
  region = null;
  /**
   * The cue writing direction.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/vertical}
   */
  vertical = "";
  /**
   * Returns `true` if the `VTTCue.line` attribute is an integer number of lines or a percentage
   * of the video size.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/snapToLines}
   */
  snapToLines = true;
  /**
   * Returns the line positioning of the cue. This can be the string `'auto'` or a number whose
   * interpretation depends on the value of `VTTCue.snapToLines`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/line}
   */
  line = "auto";
  /**
   * Returns an enum representing the alignment of the `VTTCue.line`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/lineAlign}
   */
  lineAlign = "start";
  /**
   * Returns the indentation of the cue within the line. This can be the string `'auto'` or a
   * number representing the percentage of the `VTTCue.region`, or the video size if `VTTCue`.region`
   * is `null`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/position}
   */
  position = "auto";
  /**
   * Returns an enum representing the alignment of the cue. This is used to determine what
   * the `VTTCue.position` is anchored to. The default is `'auto'`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/positionAlign}
   */
  positionAlign = "auto";
  /**
   * Returns a double representing the size of the cue, as a percentage of the video size.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/size}
   */
  size = 100;
  /**
   * Returns an enum representing the alignment of all the lines of text within the cue box.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/VTTCue/align}
   */
  align = "center";
  /**
   * Additional styles associated with the cue.
   */
  style;
}

class VTTRegion {
  /**
   * A string that identifies the region.
   */
  id = "";
  /**
   * A `double` representing the width of the region, as a percentage of the video.
   */
  width = 100;
  /**
   * A `double` representing the height of the region, in number of lines.
   */
  lines = 3;
  /**
   * A `double` representing the region anchor X offset, as a percentage of the region.
   */
  regionAnchorX = 0;
  /**
   * A `double` representing the region anchor Y offset, as a percentage of the region.
   */
  regionAnchorY = 100;
  /**
   * A `double` representing the viewport anchor X offset, as a percentage of the video.
   */
  viewportAnchorX = 0;
  /**
   * A `double` representing the viewport anchor Y offset, as a percentage of the video.
   */
  viewportAnchorY = 100;
  /**
   * An enum representing how adding new cues will move existing cues.
   */
  scroll = "";
}

const COMMA$1 = ",", PERCENT_SIGN$1 = "%";
function toNumber(text) {
  const num = parseInt(text, 10);
  return !Number.isNaN(num) ? num : null;
}
function toPercentage(text) {
  const num = parseInt(text.replace(PERCENT_SIGN$1, ""), 10);
  return !Number.isNaN(num) && num >= 0 && num <= 100 ? num : null;
}
function toCoords(text) {
  if (!text.includes(COMMA$1))
    return null;
  const [x, y] = text.split(COMMA$1).map(toPercentage);
  return x !== null && y !== null ? [x, y] : null;
}
function toFloat(text) {
  const num = parseFloat(text);
  return !Number.isNaN(num) ? num : null;
}

const HEADER_MAGIC = "WEBVTT", COMMA = ",", PERCENT_SIGN = "%", SETTING_SEP_RE = /[:=]/, SETTING_LINE_RE = /^[\s\t]*(region|vertical|line|position|size|align)[:=]/, NOTE_BLOCK_START = "NOTE", REGION_BLOCK_START = "REGION", REGION_BLOCK_START_RE = /^REGION:?[\s\t]+/, SPACE_RE = /[\s\t]+/, TIMESTAMP_SEP = "-->", TIMESTAMP_SEP_RE = /[\s\t]*-->[\s\t]+/, ALIGN_RE = /start|center|end|left|right/, LINE_ALIGN_RE = /start|center|end/, POS_ALIGN_RE = /line-(?:left|right)|center|auto/, TIMESTAMP_RE = /^(?:(\d{1,2}):)?(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;
var VTTBlock = /* @__PURE__ */ ((VTTBlock2) => {
  VTTBlock2[VTTBlock2["None"] = 0] = "None";
  VTTBlock2[VTTBlock2["Header"] = 1] = "Header";
  VTTBlock2[VTTBlock2["Cue"] = 2] = "Cue";
  VTTBlock2[VTTBlock2["Region"] = 3] = "Region";
  VTTBlock2[VTTBlock2["Note"] = 4] = "Note";
  return VTTBlock2;
})(VTTBlock || {});
class VTTParser {
  _init;
  _block = 0 /* None */;
  _metadata = {};
  _regions = {};
  _cues = [];
  _cue = null;
  _region = null;
  _errors = [];
  _errorBuilder;
  _prevLine = "";
  async init(init) {
    this._init = init;
    if (init.strict)
      this._block = 1 /* Header */;
    if (init.errors)
      this._errorBuilder = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./errors.js */ "./node_modules/media-captions/dist/dev/errors.js"))).ParseErrorBuilder;
  }
  parse(line, lineCount) {
    if (line === "") {
      if (this._cue) {
        this._cues.push(this._cue);
        this._init.onCue?.(this._cue);
        this._cue = null;
      } else if (this._region) {
        this._regions[this._region.id] = this._region;
        this._init.onRegion?.(this._region);
        this._region = null;
      } else if (this._block === 1 /* Header */) {
        this._parseHeader(line, lineCount);
        this._init.onHeaderMetadata?.(this._metadata);
      }
      this._block = 0 /* None */;
    } else if (this._block) {
      switch (this._block) {
        case 1 /* Header */:
          this._parseHeader(line, lineCount);
          break;
        case 2 /* Cue */:
          if (this._cue) {
            const hasText = this._cue.text.length > 0;
            if (!hasText && SETTING_LINE_RE.test(line)) {
              this._parseCueSettings(line.split(SPACE_RE), lineCount);
            } else {
              this._cue.text += (hasText ? "\n" : "") + line;
            }
          }
          break;
        case 3 /* Region */:
          this._parseRegionSettings(line.split(SPACE_RE), lineCount);
          break;
      }
    } else if (line.startsWith(NOTE_BLOCK_START)) {
      this._block = 4 /* Note */;
    } else if (line.startsWith(REGION_BLOCK_START)) {
      this._block = 3 /* Region */;
      this._region = new VTTRegion();
      this._parseRegionSettings(line.replace(REGION_BLOCK_START_RE, "").split(SPACE_RE), lineCount);
    } else if (line.includes(TIMESTAMP_SEP)) {
      const result = this._parseTimestamp(line, lineCount);
      if (result) {
        this._cue = new VTTCue(result[0], result[1], "");
        this._cue.id = this._prevLine;
        this._parseCueSettings(result[2], lineCount);
      }
      this._block = 2 /* Cue */;
    } else if (lineCount === 1) {
      this._parseHeader(line, lineCount);
    }
    this._prevLine = line;
  }
  done() {
    return {
      metadata: this._metadata,
      cues: this._cues,
      regions: Object.values(this._regions),
      errors: this._errors
    };
  }
  _parseHeader(line, lineCount) {
    if (lineCount > 1) {
      if (SETTING_SEP_RE.test(line)) {
        const [key, value] = line.split(SETTING_SEP_RE);
        if (key)
          this._metadata[key] = (value || "").replace(SPACE_RE, "");
      }
    } else if (line.startsWith(HEADER_MAGIC)) {
      this._block = 1 /* Header */;
    } else {
      this._handleError(this._errorBuilder?._badVTTHeader());
    }
  }
  _parseTimestamp(line, lineCount) {
    const [startTimeText, trailingText = ""] = line.split(TIMESTAMP_SEP_RE), [endTimeText, ...settingsText] = trailingText.split(SPACE_RE), startTime = parseVTTTimestamp(startTimeText), endTime = parseVTTTimestamp(endTimeText);
    if (startTime !== null && endTime !== null && endTime > startTime) {
      return [startTime, endTime, settingsText];
    } else {
      if (startTime === null) {
        this._handleError(this._errorBuilder?._badStartTimestamp(startTimeText, lineCount));
      }
      if (endTime === null) {
        this._handleError(this._errorBuilder?._badEndTimestamp(endTimeText, lineCount));
      }
      if (startTime != null && endTime !== null && endTime > startTime) {
        this._handleError(this._errorBuilder?._badRangeTimestamp(startTime, endTime, lineCount));
      }
    }
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#region-settings-parsing}
   */
  _parseRegionSettings(settings, line) {
    let badValue;
    for (let i = 0; i < settings.length; i++) {
      if (SETTING_SEP_RE.test(settings[i])) {
        badValue = false;
        const [name, value] = settings[i].split(SETTING_SEP_RE);
        switch (name) {
          case "id":
            this._region.id = value;
            break;
          case "width":
            const width = toPercentage(value);
            if (width !== null)
              this._region.width = width;
            else
              badValue = true;
            break;
          case "lines":
            const lines = toNumber(value);
            if (lines !== null)
              this._region.lines = lines;
            else
              badValue = true;
            break;
          case "regionanchor":
            const region = toCoords(value);
            if (region !== null) {
              this._region.regionAnchorX = region[0];
              this._region.regionAnchorY = region[1];
            } else
              badValue = true;
            break;
          case "viewportanchor":
            const viewport = toCoords(value);
            if (viewport !== null) {
              this._region.viewportAnchorX = viewport[0];
              this._region.viewportAnchorY = viewport[1];
            } else
              badValue = true;
            break;
          case "scroll":
            if (value === "up")
              this._region.scroll = "up";
            else
              badValue = true;
            break;
          default:
            this._handleError(this._errorBuilder?._unknownRegionSetting(name, value, line));
        }
        if (badValue) {
          this._handleError(this._errorBuilder?._badRegionSetting(name, value, line));
        }
      }
    }
  }
  /**
   * @see {@link https://www.w3.org/TR/webvtt1/#cue-timings-and-settings-parsing}
   */
  _parseCueSettings(settings, line) {
    let badValue;
    for (let i = 0; i < settings.length; i++) {
      badValue = false;
      if (SETTING_SEP_RE.test(settings[i])) {
        const [name, value] = settings[i].split(SETTING_SEP_RE);
        switch (name) {
          case "region":
            const region = this._regions[value];
            if (region)
              this._cue.region = region;
            break;
          case "vertical":
            if (value === "lr" || value === "rl") {
              this._cue.vertical = value;
              this._cue.region = null;
            } else
              badValue = true;
            break;
          case "line":
            const [linePos, lineAlign] = value.split(COMMA);
            if (linePos.includes(PERCENT_SIGN)) {
              const percentage = toPercentage(linePos);
              if (percentage !== null) {
                this._cue.line = percentage;
                this._cue.snapToLines = false;
              } else
                badValue = true;
            } else {
              const number = toFloat(linePos);
              if (number !== null)
                this._cue.line = number;
              else
                badValue = true;
            }
            if (LINE_ALIGN_RE.test(lineAlign)) {
              this._cue.lineAlign = lineAlign;
            } else if (lineAlign) {
              badValue = true;
            }
            if (this._cue.line !== "auto")
              this._cue.region = null;
            break;
          case "position":
            const [colPos, colAlign] = value.split(COMMA), position = toPercentage(colPos);
            if (position !== null)
              this._cue.position = position;
            else
              badValue = true;
            if (colAlign && POS_ALIGN_RE.test(colAlign)) {
              this._cue.positionAlign = colAlign;
            } else if (colAlign) {
              badValue = true;
            }
            break;
          case "size":
            const size = toPercentage(value);
            if (size !== null) {
              this._cue.size = size;
              if (size < 100)
                this._cue.region = null;
            } else {
              badValue = true;
            }
            break;
          case "align":
            if (ALIGN_RE.test(value)) {
              this._cue.align = value;
            } else {
              badValue = true;
            }
            break;
          default:
            this._handleError(this._errorBuilder?._unknownCueSetting(name, value, line));
        }
        if (badValue) {
          this._handleError(this._errorBuilder?._badCueSetting(name, value, line));
        }
      }
    }
  }
  _handleError(error) {
    if (!error)
      return;
    this._errors.push(error);
    if (this._init.strict) {
      this._init.cancel();
      throw error;
    } else {
      this._init.onError?.(error);
    }
  }
}
function parseVTTTimestamp(timestamp) {
  const match = timestamp.match(TIMESTAMP_RE);
  if (!match)
    return null;
  const hours = match[1] ? parseInt(match[1], 10) : 0, minutes = parseInt(match[2], 10), seconds = parseInt(match[3], 10), milliseconds = match[4] ? parseInt(match[4].padEnd(3, "0"), 10) : 0, total = hours * 3600 + minutes * 60 + seconds + milliseconds / 1e3;
  if (hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0 || minutes > 59 || seconds > 59) {
    return null;
  }
  return total;
}
function createVTTParser() {
  return new VTTParser();
}

var vttParser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VTTBlock: VTTBlock,
  VTTParser: VTTParser,
  default: createVTTParser,
  parseVTTTimestamp: parseVTTTimestamp
});

const DIGIT_RE = /[0-9]/, MULTI_SPACE_RE = /[\s\t]+/, TAG_NAME = {
  c: "span",
  i: "i",
  b: "b",
  u: "u",
  ruby: "ruby",
  rt: "rt",
  v: "span",
  lang: "span",
  timestamp: "span"
}, HTML_ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": "\xA0",
  "&lrm;": "\u200E",
  "&rlm;": "\u200F"
}, HTML_ENTITY_RE = /&(?:amp|lt|gt|quot|#(0+)?39|nbsp|lrm|rlm);/g, COLORS = /* @__PURE__ */ new Set([
  "white",
  "lime",
  "cyan",
  "red",
  "yellow",
  "magenta",
  "blue",
  "black"
]), BLOCK_TYPES = /* @__PURE__ */ new Set(Object.keys(TAG_NAME));
function tokenizeVTTCue(cue) {
  let buffer = "", mode = 1 /* Data */, result = [], stack = [], node;
  for (let i = 0; i < cue.text.length; i++) {
    const char = cue.text[i];
    switch (mode) {
      case 1 /* Data */:
        if (char === "<") {
          addText();
          mode = 2 /* Tag */;
        } else {
          buffer += char;
        }
        break;
      case 2 /* Tag */:
        switch (char) {
          case "\n":
          case "	":
          case " ":
            addNode();
            mode = 4 /* Annotation */;
            break;
          case ".":
            addNode();
            mode = 3 /* Class */;
            break;
          case "/":
            mode = 5 /* EndTag */;
            break;
          case ">":
            addNode();
            mode = 1 /* Data */;
            break;
          default:
            if (!buffer && DIGIT_RE.test(char))
              mode = 6 /* Timestamp */;
            buffer += char;
            break;
        }
        break;
      case 3 /* Class */:
        switch (char) {
          case "	":
          case " ":
          case "\n":
            addClass();
            if (node)
              node.class?.trim();
            mode = 4 /* Annotation */;
            break;
          case ".":
            addClass();
            break;
          case ">":
            addClass();
            if (node)
              node.class?.trim();
            mode = 1 /* Data */;
            break;
          default:
            buffer += char;
        }
        break;
      case 4 /* Annotation */:
        if (char === ">") {
          buffer = buffer.replace(MULTI_SPACE_RE, " ");
          if (node?.type === "v")
            node.voice = replaceHTMLEntities(buffer);
          else if (node?.type === "lang")
            node.lang = replaceHTMLEntities(buffer);
          buffer = "";
          mode = 1 /* Data */;
        } else {
          buffer += char;
        }
        break;
      case 5 /* EndTag */:
        if (char === ">") {
          buffer = "";
          node = stack.pop();
          mode = 1 /* Data */;
        }
        break;
      case 6 /* Timestamp */:
        if (char === ">") {
          const time = parseVTTTimestamp(buffer);
          if (time !== null && time >= cue.startTime && time <= cue.endTime) {
            buffer = "timestamp";
            addNode();
            node.time = time;
          }
          buffer = "";
          mode = 1 /* Data */;
        } else {
          buffer += char;
        }
        break;
    }
  }
  function addNode() {
    if (BLOCK_TYPES.has(buffer)) {
      const parent = node;
      node = createBlockNode(buffer);
      if (parent) {
        if (stack[stack.length - 1] !== parent)
          stack.push(parent);
        parent.children.push(node);
      } else
        result.push(node);
    }
    buffer = "";
    mode = 1 /* Data */;
  }
  function addClass() {
    if (node && buffer) {
      const color = buffer.replace("bg_", "");
      if (COLORS.has(color)) {
        node[buffer.startsWith("bg_") ? "bgColor" : "color"] = color;
      } else {
        node.class = !node.class ? buffer : node.class + " " + buffer;
      }
    }
    buffer = "";
  }
  function addText() {
    if (!buffer)
      return;
    const text = { type: "text", data: replaceHTMLEntities(buffer) };
    node ? node.children.push(text) : result.push(text);
    buffer = "";
  }
  if (mode === 1 /* Data */)
    addText();
  return result;
}
function createBlockNode(type) {
  return {
    tagName: TAG_NAME[type],
    type,
    children: []
  };
}
function replaceHTMLEntities(text) {
  return text.replace(HTML_ENTITY_RE, (entity) => HTML_ENTITIES[entity] || "'");
}

function setCSSVar(el, name, value) {
  el.style.setProperty(`--${name}`, value + "");
}
function setDataAttr(el, name, value = true) {
  el.setAttribute(`data-${name}`, value === true ? "" : value + "");
}
function setPartAttr(el, name) {
  el.setAttribute("data-part", name);
}
function getLineHeight(el) {
  return parseFloat(getComputedStyle(el).lineHeight) || 0;
}

function createVTTCueTemplate(cue) {
  const template = document.createElement("template");
  template.innerHTML = renderVTTCueString(cue);
  return { cue, content: template.content };
}
function renderVTTCueString(cue, currentTime = 0) {
  return renderVTTTokensString(tokenizeVTTCue(cue), currentTime);
}
function renderVTTTokensString(tokens, currentTime = 0) {
  let attrs, result = "";
  for (const token of tokens) {
    if (token.type === "text") {
      result += token.data;
    } else {
      const isTimestamp = token.type === "timestamp";
      attrs = {};
      attrs.class = token.class;
      attrs.title = token.type === "v" && token.voice;
      attrs.lang = token.type === "lang" && token.lang;
      attrs["data-part"] = token.type === "v" && "voice";
      if (isTimestamp) {
        attrs["data-part"] = "timed";
        attrs["data-time"] = token.time;
        attrs["data-future"] = token.time > currentTime;
        attrs["data-past"] = token.time < currentTime;
      }
      attrs.style = `${token.color ? `color: ${token.color};` : ""}${token.bgColor ? `background-color: ${token.bgColor};` : ""}`;
      const attributes = Object.entries(attrs).filter((v) => v[1]).map((v) => `${v[0]}="${v[1] === true ? "" : v[1]}"`).join(" ");
      result += `<${token.tagName}${attributes ? " " + attributes : ""}>${renderVTTTokensString(
        token.children
      )}</${token.tagName}>`;
    }
  }
  return result;
}
function updateTimedVTTCueNodes(root, currentTime) {
  for (const el of root.querySelectorAll('[data-part="timed"]')) {
    const time = Number(el.getAttribute("data-time"));
    if (Number.isNaN(time))
      continue;
    if (time > currentTime)
      setDataAttr(el, "future");
    else
      el.removeAttribute("data-future");
    if (time < currentTime)
      setDataAttr(el, "past");
    else
      el.removeAttribute("data-past");
  }
}

function debounce(fn, delay) {
  let timeout = null, args;
  function run() {
    clear();
    fn(...args);
    args = void 0;
  }
  function clear() {
    clearTimeout(timeout);
    timeout = null;
  }
  function debounce2() {
    args = [].slice.call(arguments);
    clear();
    timeout = setTimeout(run, delay);
  }
  return debounce2;
}

const STARTING_BOX = Symbol("STARTING_BOX" );
function createBox(box) {
  if (box instanceof HTMLElement) {
    return {
      top: box.offsetTop,
      width: box.clientWidth,
      height: box.clientHeight,
      left: box.offsetLeft,
      right: box.offsetLeft + box.clientWidth,
      bottom: box.offsetTop + box.clientHeight
    };
  }
  return { ...box };
}
function moveBox(box, axis, delta) {
  switch (axis) {
    case "+x":
      box.left += delta;
      box.right += delta;
      break;
    case "-x":
      box.left -= delta;
      box.right -= delta;
      break;
    case "+y":
      box.top += delta;
      box.bottom += delta;
      break;
    case "-y":
      box.top -= delta;
      box.bottom -= delta;
      break;
  }
}
function isBoxCollision(a, b) {
  return a.left <= b.right && a.right >= b.left && a.top <= b.bottom && a.bottom >= b.top;
}
function isAnyBoxCollision(box, boxes) {
  for (let i = 0; i < boxes.length; i++)
    if (isBoxCollision(box, boxes[i]))
      return boxes[i];
  return null;
}
function isWithinBox(container, box) {
  return box.top >= 0 && box.bottom <= container.height && box.left >= 0 && box.right <= container.width;
}
function isBoxOutOfBounds(container, box, axis) {
  switch (axis) {
    case "+x":
      return box.left < 0;
    case "-x":
      return box.right > container.width;
    case "+y":
      return box.top < 0;
    case "-y":
      return box.bottom > container.height;
  }
}
function calcBoxIntersectPercentage(container, box) {
  const x = Math.max(0, Math.min(container.width, box.right) - Math.max(0, box.left)), y = Math.max(0, Math.min(container.height, box.bottom) - Math.max(0, box.top)), intersectArea = x * y;
  return intersectArea / (container.height * container.width);
}
function createCSSBox(container, box) {
  return {
    top: box.top / container.height,
    left: box.left / container.width,
    right: (container.width - box.right) / container.width,
    bottom: (container.height - box.bottom) / container.height
  };
}
function resolveRelativeBox(container, box) {
  box.top = box.top * container.height;
  box.left = box.left * container.width;
  box.right = container.width - box.right * container.width;
  box.bottom = container.height - box.bottom * container.height;
  return box;
}
const BOX_SIDES = ["top", "left", "right", "bottom"];
function setBoxCSSVars(el, container, box, prefix) {
  const cssBox = createCSSBox(container, box);
  for (const side of BOX_SIDES) {
    setCSSVar(el, `${prefix}-${side}`, cssBox[side] * 100 + "%");
  }
}
function avoidBoxCollisions(container, box, boxes, axis) {
  let percentage = 1, positionedBox, startBox = { ...box };
  for (let i = 0; i < axis.length; i++) {
    while (isBoxOutOfBounds(container, box, axis[i]) || isWithinBox(container, box) && isAnyBoxCollision(box, boxes)) {
      moveBox(box, axis[i], 1);
    }
    if (isWithinBox(container, box))
      return box;
    const intersection = calcBoxIntersectPercentage(container, box);
    if (percentage > intersection) {
      positionedBox = { ...box };
      percentage = intersection;
    }
    box = { ...startBox };
  }
  return positionedBox || startBox;
}

const POSITION_OVERRIDE = Symbol("POSITION_OVERRIDE" );
function positionCue(container, cue, displayEl, boxes) {
  let cueEl = displayEl.firstElementChild, line = computeCueLine(cue), displayBox, axis = [];
  if (!displayEl[STARTING_BOX]) {
    displayEl[STARTING_BOX] = createStartingBox(container, displayEl);
  }
  displayBox = resolveRelativeBox(container, { ...displayEl[STARTING_BOX] });
  if (displayEl[POSITION_OVERRIDE]) {
    axis = [displayEl[POSITION_OVERRIDE] === "top" ? "+y" : "-y", "+x", "-x"];
  } else if (cue.snapToLines) {
    let size;
    switch (cue.vertical) {
      case "":
        axis = ["+y", "-y"];
        size = "height";
        break;
      case "rl":
        axis = ["+x", "-x"];
        size = "width";
        break;
      case "lr":
        axis = ["-x", "+x"];
        size = "width";
        break;
    }
    let step = getLineHeight(cueEl), position = step * Math.round(line), maxPosition = container[size] + step, initialAxis = axis[0];
    if (Math.abs(position) > maxPosition) {
      position = position < 0 ? -1 : 1;
      position *= Math.ceil(maxPosition / step) * step;
    }
    if (line < 0) {
      position += cue.vertical === "" ? container.height : container.width;
      axis = axis.reverse();
    }
    moveBox(displayBox, initialAxis, position);
  } else {
    const isHorizontal = cue.vertical === "", posAxis = isHorizontal ? "+y" : "+x", size = isHorizontal ? displayBox.height : displayBox.width;
    moveBox(
      displayBox,
      posAxis,
      (isHorizontal ? container.height : container.width) * line / 100
    );
    moveBox(
      displayBox,
      posAxis,
      cue.lineAlign === "center" ? size / 2 : cue.lineAlign === "end" ? size : 0
    );
    axis = isHorizontal ? ["-y", "+y", "-x", "+x"] : ["-x", "+x", "-y", "+y"];
  }
  displayBox = avoidBoxCollisions(container, displayBox, boxes, axis);
  setBoxCSSVars(displayEl, container, displayBox, "cue");
  return displayBox;
}
function createStartingBox(container, cueEl) {
  const box = createBox(cueEl), pos = getStyledPositions(cueEl);
  cueEl[POSITION_OVERRIDE] = false;
  if (pos.top) {
    box.top = pos.top;
    box.bottom = pos.top + box.height;
    cueEl[POSITION_OVERRIDE] = "top";
  }
  if (pos.bottom) {
    const bottom = container.height - pos.bottom;
    box.top = bottom - box.height;
    box.bottom = bottom;
    cueEl[POSITION_OVERRIDE] = "bottom";
  }
  if (pos.left)
    box.left = pos.left;
  if (pos.right)
    box.right = container.width - pos.right;
  return createCSSBox(container, box);
}
function getStyledPositions(el) {
  const positions = {};
  for (const side of BOX_SIDES) {
    positions[side] = parseFloat(el.style.getPropertyValue(`--cue-${side}`));
  }
  return positions;
}
function computeCueLine(cue) {
  if (cue.line === "auto") {
    if (!cue.snapToLines) {
      return 100;
    } else {
      return -1;
    }
  }
  return cue.line;
}
function computeCuePosition(cue) {
  if (cue.position === "auto") {
    switch (cue.align) {
      case "start":
      case "left":
        return 0;
      case "right":
      case "end":
        return 100;
      default:
        return 50;
    }
  }
  return cue.position;
}
function computeCuePositionAlignment(cue, dir) {
  if (cue.positionAlign === "auto") {
    switch (cue.align) {
      case "start":
        return dir === "ltr" ? "line-left" : "line-right";
      case "end":
        return dir === "ltr" ? "line-right" : "line-left";
      case "center":
        return "center";
      default:
        return `line-${cue.align}`;
    }
  }
  return cue.positionAlign;
}

const REGION_AXIS = ["-y", "+y", "-x", "+x"];
function positionRegion(container, region, regionEl, boxes) {
  let cues = Array.from(regionEl.querySelectorAll('[data-part="cue-display"]')), height = 0, limit = Math.max(0, cues.length - region.lines);
  for (let i = cues.length - 1; i >= limit; i--) {
    height += cues[i].offsetHeight;
  }
  setCSSVar(regionEl, "region-height", height + "px");
  if (!regionEl[STARTING_BOX]) {
    regionEl[STARTING_BOX] = createCSSBox(container, createBox(regionEl));
  }
  let box = { ...regionEl[STARTING_BOX] };
  box = resolveRelativeBox(container, box);
  box.width = regionEl.clientWidth;
  box.height = height;
  box.right = box.left + box.width;
  box.bottom = box.top + height;
  box = avoidBoxCollisions(container, box, boxes, REGION_AXIS);
  setBoxCSSVars(regionEl, container, box, "region");
  return box;
}

class CaptionsRenderer {
  overlay;
  _overlayBox;
  _currentTime = 0;
  _dir = "ltr";
  _activeCues = [];
  _isResizing = false;
  _resizeObserver;
  _regions = /* @__PURE__ */ new Map();
  _cues = /* @__PURE__ */ new Map();
  /* Text direction. */
  get dir() {
    return this._dir;
  }
  set dir(dir) {
    this._dir = dir;
    setDataAttr(this.overlay, "dir", dir);
  }
  get currentTime() {
    return this._currentTime;
  }
  set currentTime(time) {
    this._currentTime = time;
    this.update();
  }
  constructor(overlay, init) {
    this.overlay = overlay;
    this.dir = init?.dir ?? "ltr";
    overlay.setAttribute("translate", "yes");
    overlay.setAttribute("aria-live", "off");
    overlay.setAttribute("aria-atomic", "true");
    setPartAttr(overlay, "captions");
    this._updateOverlay();
    this._resizeObserver = new ResizeObserver(this._resizing.bind(this));
    this._resizeObserver.observe(overlay);
  }
  changeTrack({ regions, cues }) {
    this.reset();
    this._buildRegions(regions);
    for (const cue of cues)
      this._cues.set(cue, null);
    this.update();
  }
  addCue(cue) {
    this._cues.set(cue, null);
    this.update();
  }
  removeCue(cue) {
    this._cues.delete(cue);
    this.update();
  }
  update(forceUpdate = false) {
    this._render(forceUpdate);
  }
  reset() {
    this._cues.clear();
    this._regions.clear();
    this._activeCues = [];
    this.overlay.textContent = "";
  }
  destroy() {
    this.reset();
    this._resizeObserver.disconnect();
  }
  _resizing() {
    this._isResizing = true;
    this._resize();
  }
  _resize = debounce(() => {
    this._isResizing = false;
    this._updateOverlay();
    for (const el of this._regions.values()) {
      el[STARTING_BOX] = null;
    }
    for (const el of this._cues.values()) {
      if (el)
        el[STARTING_BOX] = null;
    }
    this._render(true);
  }, 50);
  _updateOverlay() {
    this._overlayBox = createBox(this.overlay);
    setCSSVar(this.overlay, "overlay-width", this._overlayBox.width + "px");
    setCSSVar(this.overlay, "overlay-height", this._overlayBox.height + "px");
  }
  _render(forceUpdate = false) {
    if (!this._cues.size || this._isResizing)
      return;
    let cue, activeCues = [...this._cues.keys()].filter((cue2) => this._currentTime >= cue2.startTime && this._currentTime <= cue2.endTime).sort(
      (cueA, cueB) => cueA.startTime !== cueB.startTime ? cueA.startTime - cueB.startTime : cueA.endTime - cueB.endTime
    ), activeRegions = activeCues.map((cue2) => cue2.region);
    for (let i = 0; i < this._activeCues.length; i++) {
      cue = this._activeCues[i];
      if (activeCues[i] === cue)
        continue;
      if (cue.region && !activeRegions.includes(cue.region)) {
        const regionEl = this._regions.get(cue.region.id);
        if (regionEl) {
          regionEl.removeAttribute("data-active");
          forceUpdate = true;
        }
      }
      const cueEl = this._cues.get(cue);
      if (cueEl) {
        cueEl.remove();
        forceUpdate = true;
      }
    }
    for (let i = 0; i < activeCues.length; i++) {
      cue = activeCues[i];
      let cueEl = this._cues.get(cue);
      if (!cueEl)
        this._cues.set(cue, cueEl = this._createCueElement(cue));
      const regionEl = this._hasRegion(cue) && this._regions.get(cue.region.id);
      if (regionEl && !regionEl.hasAttribute("data-active")) {
        requestAnimationFrame(() => setDataAttr(regionEl, "active"));
        forceUpdate = true;
      }
      if (!cueEl.isConnected) {
        (regionEl || this.overlay).append(cueEl);
        forceUpdate = true;
      }
    }
    if (forceUpdate) {
      const boxes = [], seen = /* @__PURE__ */ new Set();
      for (let i = activeCues.length - 1; i >= 0; i--) {
        cue = activeCues[i];
        if (seen.has(cue.region || cue))
          continue;
        const isRegion = this._hasRegion(cue), el = isRegion ? this._regions.get(cue.region.id) : this._cues.get(cue);
        if (isRegion) {
          boxes.push(positionRegion(this._overlayBox, cue.region, el, boxes));
        } else {
          boxes.push(positionCue(this._overlayBox, cue, el, boxes));
        }
        seen.add(isRegion ? cue.region : cue);
      }
    }
    updateTimedVTTCueNodes(this.overlay, this._currentTime);
    this._activeCues = activeCues;
  }
  _buildRegions(regions) {
    if (!regions)
      return;
    for (const region of regions) {
      const el = this._createRegionElement(region);
      this._regions.set(region.id, el);
      this.overlay.append(el);
    }
  }
  _createRegionElement(region) {
    const el = document.createElement("div");
    setPartAttr(el, "region");
    setDataAttr(el, "id", region.id);
    setDataAttr(el, "scroll", region.scroll);
    setCSSVar(el, "region-width", region.width + "%");
    setCSSVar(el, "region-anchor-x", region.regionAnchorX);
    setCSSVar(el, "region-anchor-y", region.regionAnchorY);
    setCSSVar(el, "region-viewport-anchor-x", region.viewportAnchorX);
    setCSSVar(el, "region-viewport-anchor-y", region.viewportAnchorY);
    setCSSVar(el, "region-lines", region.lines);
    return el;
  }
  _createCueElement(cue) {
    const display = document.createElement("div"), position = computeCuePosition(cue), positionAlignment = computeCuePositionAlignment(cue, this._dir);
    setPartAttr(display, "cue-display");
    if (cue.vertical !== "")
      setDataAttr(display, "vertical");
    setCSSVar(display, "cue-text-align", cue.align);
    if (cue.style) {
      for (const prop of Object.keys(cue.style)) {
        display.style.setProperty(prop, cue.style[prop]);
      }
    }
    if (!this._hasRegion(cue)) {
      setCSSVar(
        display,
        "cue-writing-mode",
        cue.vertical === "" ? "horizontal-tb" : cue.vertical === "lr" ? "vertical-lr" : "vertical-rl"
      );
      if (!cue.style?.["--cue-width"]) {
        let maxSize = position;
        if (positionAlignment === "line-left") {
          maxSize = 100 - position;
        } else if (positionAlignment === "center" && position <= 50) {
          maxSize = position * 2;
        } else if (positionAlignment === "center" && position > 50) {
          maxSize = (100 - position) * 2;
        }
        const size = cue.size < maxSize ? cue.size : maxSize;
        if (cue.vertical === "")
          setCSSVar(display, "cue-width", size + "%");
        else
          setCSSVar(display, "cue-height", size + "%");
      }
    } else {
      setCSSVar(
        display,
        "cue-offset",
        `${position - (positionAlignment === "line-right" ? 100 : positionAlignment === "center" ? 50 : 0)}%`
      );
    }
    const el = document.createElement("div");
    setPartAttr(el, "cue");
    if (cue.id)
      setDataAttr(el, "id", cue.id);
    el.innerHTML = renderVTTCueString(cue);
    display.append(el);
    return display;
  }
  _hasRegion(cue) {
    return cue.region && cue.size === 100 && cue.vertical === "" && cue.line === "auto";
  }
}




/***/ }),

/***/ "./node_modules/media-captions/dist/dev/srt-parser.js":
/*!************************************************************!*\
  !*** ./node_modules/media-captions/dist/dev/srt-parser.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SRTParser: () => (/* binding */ SRTParser),
/* harmony export */   "default": () => (/* binding */ createSRTParser)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/media-captions/dist/dev/index.js");


const MILLISECOND_SEP_RE = /,/g, TIMESTAMP_SEP = "-->";
class SRTParser extends _index_js__WEBPACK_IMPORTED_MODULE_0__.V {
  parse(line, lineCount) {
    if (line === "") {
      if (this._cue) {
        this._cues.push(this._cue);
        this._init.onCue?.(this._cue);
        this._cue = null;
      }
      this._block = _index_js__WEBPACK_IMPORTED_MODULE_0__.a.None;
    } else if (this._block === _index_js__WEBPACK_IMPORTED_MODULE_0__.a.Cue) {
      this._cue.text += (this._cue.text ? "\n" : "") + line;
    } else if (line.includes(TIMESTAMP_SEP)) {
      const result = this._parseTimestamp(line, lineCount);
      if (result) {
        this._cue = new _index_js__WEBPACK_IMPORTED_MODULE_0__.b(result[0], result[1], result[2].join(" "));
        this._cue.id = this._prevLine;
        this._block = _index_js__WEBPACK_IMPORTED_MODULE_0__.a.Cue;
      }
    }
    this._prevLine = line;
  }
  _parseTimestamp(line, lineCount) {
    return super._parseTimestamp(line.replace(MILLISECOND_SEP_RE, "."), lineCount);
  }
}
function createSRTParser() {
  return new SRTParser();
}




/***/ }),

/***/ "./node_modules/media-captions/dist/dev/ssa-parser.js":
/*!************************************************************!*\
  !*** ./node_modules/media-captions/dist/dev/ssa-parser.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSAParser: () => (/* binding */ SSAParser),
/* harmony export */   "default": () => (/* binding */ createSSAParser)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/media-captions/dist/dev/index.js");


const FORMAT_START_RE = /^Format:[\s\t]*/, STYLE_START_RE = /^Style:[\s\t]*/, DIALOGUE_START_RE = /^Dialogue:[\s\t]*/, FORMAT_SPLIT_RE = /[\s\t]*,[\s\t]*/, STYLE_FUNCTION_RE = /\{[^}]+\}/g, NEW_LINE_RE = /\\N/g, STYLES_SECTION_START_RE = /^\[(.*)[\s\t]?Styles\]$/, EVENTS_SECTION_START_RE = /^\[(.*)[\s\t]?Events\]$/;
class SSAParser {
  _init;
  _section = 0 /* None */;
  _cue = null;
  _cues = [];
  _errors = [];
  _format = null;
  _errorBuilder;
  _styles = {};
  async init(init) {
    this._init = init;
    if (init.errors)
      this._errorBuilder = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./errors.js */ "./node_modules/media-captions/dist/dev/errors.js"))).ParseErrorBuilder;
  }
  parse(line, lineCount) {
    if (this._section) {
      switch (this._section) {
        case 1 /* Style */:
          if (line === "") {
            this._section = 0 /* None */;
          } else if (STYLE_START_RE.test(line)) {
            if (this._format) {
              const styles = line.replace(STYLE_START_RE, "").split(FORMAT_SPLIT_RE);
              this._parseStyles(styles);
            } else {
              this._handleError(this._errorBuilder?._missingFormat("Style", lineCount));
            }
          } else if (FORMAT_START_RE.test(line)) {
            this._format = line.replace(FORMAT_START_RE, "").split(FORMAT_SPLIT_RE);
          } else if (EVENTS_SECTION_START_RE.test(line)) {
            this._format = null;
            this._section = 2 /* Event */;
          }
          break;
        case 2 /* Event */:
          if (line === "") {
            this._commitCue();
          } else if (DIALOGUE_START_RE.test(line)) {
            this._commitCue();
            if (this._format) {
              const dialogue = line.replace(DIALOGUE_START_RE, "").split(FORMAT_SPLIT_RE), cue = this._parseDialogue(dialogue, lineCount);
              if (cue)
                this._cue = cue;
            } else {
              this._handleError(this._errorBuilder?._missingFormat("Dialogue", lineCount));
            }
          } else if (this._cue) {
            this._cue.text += "\n" + line.replace(STYLE_FUNCTION_RE, "").replace(NEW_LINE_RE, "\n");
          } else if (FORMAT_START_RE.test(line)) {
            this._format = line.replace(FORMAT_START_RE, "").split(FORMAT_SPLIT_RE);
          } else if (STYLES_SECTION_START_RE.test(line)) {
            this._format = null;
            this._section = 1 /* Style */;
          } else if (EVENTS_SECTION_START_RE.test(line)) {
            this._format = null;
          }
      }
    } else if (line === "") ; else if (STYLES_SECTION_START_RE.test(line)) {
      this._format = null;
      this._section = 1 /* Style */;
    } else if (EVENTS_SECTION_START_RE.test(line)) {
      this._format = null;
      this._section = 2 /* Event */;
    }
  }
  done() {
    return {
      metadata: {},
      cues: this._cues,
      regions: [],
      errors: this._errors
    };
  }
  _commitCue() {
    if (!this._cue)
      return;
    this._cues.push(this._cue);
    this._init.onCue?.(this._cue);
    this._cue = null;
  }
  _parseStyles(values) {
    let name = "Default", styles = {}, outlineX, align = "center", vertical = "bottom", marginV, outlineY = 1.2, outlineColor, bgColor, borderStyle = 3, transform = [];
    for (let i = 0; i < this._format.length; i++) {
      const field = this._format[i], value = values[i];
      switch (field) {
        case "Name":
          name = value;
          break;
        case "Fontname":
          styles["font-family"] = value;
          break;
        case "Fontsize":
          styles["font-size"] = `calc(${value} / var(--overlay-height))`;
          break;
        case "PrimaryColour":
          const color = parseColor(value);
          if (color)
            styles["--cue-color"] = color;
          break;
        case "BorderStyle":
          borderStyle = parseInt(value, 10);
          break;
        case "BackColour":
          bgColor = parseColor(value);
          break;
        case "OutlineColour":
          const _outlineColor = parseColor(value);
          if (_outlineColor)
            outlineColor = _outlineColor;
          break;
        case "Bold":
          if (parseInt(value))
            styles["font-weight"] = "bold";
          break;
        case "Italic":
          if (parseInt(value))
            styles["font-style"] = "italic";
          break;
        case "Underline":
          if (parseInt(value))
            styles["text-decoration"] = "underline";
          break;
        case "StrikeOut":
          if (parseInt(value))
            styles["text-decoration"] = "line-through";
          break;
        case "Spacing":
          styles["letter-spacing"] = value + "px";
          break;
        case "AlphaLevel":
          styles["opacity"] = parseFloat(value);
          break;
        case "ScaleX":
          transform.push(`scaleX(${parseFloat(value) / 100})`);
          break;
        case "ScaleY":
          transform.push(`scaleY(${parseFloat(value) / 100})`);
          break;
        case "Angle":
          transform.push(`rotate(${value}deg)`);
          break;
        case "Shadow":
          outlineY = parseInt(value, 10) * 1.2;
          break;
        case "MarginL":
          styles["--cue-width"] = "auto";
          styles["--cue-left"] = parseFloat(value) + "px";
          break;
        case "MarginR":
          styles["--cue-width"] = "auto";
          styles["--cue-right"] = parseFloat(value) + "px";
          break;
        case "MarginV":
          marginV = parseFloat(value);
          break;
        case "Outline":
          outlineX = parseInt(value, 10);
          break;
        case "Alignment":
          const alignment = parseInt(value, 10);
          if (alignment >= 4)
            vertical = alignment >= 7 ? "top" : "center";
          switch (alignment % 3) {
            case 1:
              align = "start";
              break;
            case 2:
              align = "center";
              break;
            case 3:
              align = "end";
              break;
          }
      }
    }
    styles._vertical = vertical;
    styles["--cue-white-space"] = "normal";
    styles["--cue-line-height"] = "normal";
    styles["--cue-text-align"] = align;
    if (vertical === "center") {
      styles[`--cue-top`] = "50%";
      transform.push("translateY(-50%)");
    } else {
      styles[`--cue-${vertical}`] = (marginV || 0) + "px";
    }
    if (borderStyle === 1) {
      styles["--cue-padding-y"] = "0";
    }
    if (borderStyle === 1 || bgColor) {
      styles["--cue-bg-color"] = borderStyle === 1 ? "none" : bgColor;
    }
    if (borderStyle === 3 && outlineColor) {
      styles["--cue-outline"] = `${outlineX}px solid ${outlineColor}`;
    }
    if (borderStyle === 1 && typeof outlineX === "number") {
      const color = bgColor ?? "#000";
      styles["--cue-text-shadow"] = [
        outlineColor && buildTextShadow(outlineX * 1.2, outlineY * 1.2, outlineColor),
        outlineColor ? buildTextShadow(outlineX * (outlineX / 2), outlineY * (outlineX / 2), color) : buildTextShadow(outlineX, outlineY, color)
      ].filter(Boolean).join(", ");
    }
    if (transform.length)
      styles["--cue-transform"] = transform.join(" ");
    this._styles[name] = styles;
  }
  _parseDialogue(values, lineCount) {
    const fields = this._buildFields(values);
    const timestamp = this._parseTimestamp(fields.Start, fields.End, lineCount);
    if (!timestamp)
      return;
    const cue = new _index_js__WEBPACK_IMPORTED_MODULE_0__.b(timestamp[0], timestamp[1], ""), styles = { ...this._styles[fields.Style] || {} }, voice = fields.Name ? `<v ${fields.Name}>` : "";
    const vertical = styles._vertical, marginLeft = fields.MarginL && parseFloat(fields.MarginL), marginRight = fields.MarginR && parseFloat(fields.MarginR), marginV = fields.MarginV && parseFloat(fields.MarginV);
    if (marginLeft) {
      styles["--cue-width"] = "auto";
      styles["--cue-left"] = marginLeft + "px";
    }
    if (marginRight) {
      styles["--cue-width"] = "auto";
      styles["--cue-right"] = marginRight + "px";
    }
    if (marginV && vertical !== "center") {
      styles[`--cue-${vertical}`] = marginV + "px";
    }
    cue.text = voice + values.slice(this._format.length - 1).join(", ").replace(STYLE_FUNCTION_RE, "").replace(NEW_LINE_RE, "\n");
    delete styles._vertical;
    if (Object.keys(styles).length)
      cue.style = styles;
    return cue;
  }
  _buildFields(values) {
    const fields = {};
    for (let i = 0; i < this._format.length; i++) {
      fields[this._format[i]] = values[i];
    }
    return fields;
  }
  _parseTimestamp(startTimeText, endTimeText, lineCount) {
    const startTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.p)(startTimeText), endTime = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.p)(endTimeText);
    if (startTime !== null && endTime !== null && endTime > startTime) {
      return [startTime, endTime];
    } else {
      if (startTime === null) {
        this._handleError(this._errorBuilder?._badStartTimestamp(startTimeText, lineCount));
      }
      if (endTime === null) {
        this._handleError(this._errorBuilder?._badEndTimestamp(endTimeText, lineCount));
      }
      if (startTime != null && endTime !== null && endTime > startTime) {
        this._handleError(this._errorBuilder?._badRangeTimestamp(startTime, endTime, lineCount));
      }
    }
  }
  _handleError(error) {
    if (!error)
      return;
    this._errors.push(error);
    if (this._init.strict) {
      this._init.cancel();
      throw error;
    } else {
      this._init.onError?.(error);
    }
  }
}
function parseColor(color) {
  const abgr = parseInt(color.replace("&H", ""), 16);
  if (abgr >= 0) {
    const a = abgr >> 24 & 255 ^ 255;
    const alpha = a / 255;
    const b = abgr >> 16 & 255;
    const g = abgr >> 8 & 255;
    const r = abgr & 255;
    return "rgba(" + [r, g, b, alpha].join(",") + ")";
  }
  return null;
}
function buildTextShadow(x, y, color) {
  const noOfShadows = Math.ceil(2 * Math.PI * x);
  let textShadow = "";
  for (let i = 0; i < noOfShadows; i++) {
    const theta = 2 * Math.PI * i / noOfShadows;
    textShadow += x * Math.cos(theta) + "px " + y * Math.sin(theta) + "px 0 " + color + (i == noOfShadows - 1 ? "" : ",");
  }
  return textShadow;
}
function createSSAParser() {
  return new SSAParser();
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-022dcf66.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-022dcf66.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AsyncDirective),
/* harmony export */   P: () => (/* binding */ PartType),
/* harmony export */   d: () => (/* binding */ directive),
/* harmony export */   h: () => (/* binding */ html),
/* harmony export */   i: () => (/* binding */ ifDefined),
/* harmony export */   r: () => (/* binding */ render),
/* harmony export */   u: () => (/* binding */ unsafeSVG)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a$1, _b$1, _c, _d;
// Use window for browser builds because IE11 doesn't have globalThis.
const global = window;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    ;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
{
    (_a$1 = global.litIssuedWarnings) !== null && _a$1 !== void 0 ? _a$1 : (global.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ((_b$1 = global.ShadyDOM) === null || _b$1 === void 0 ? void 0 : _b$1.inUse) &&
    ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = () => d.createComment('');
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT$1 = 1;
const SVG_RESULT$1 = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT$1);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined
        ? policy.createHTML(stringFromTSA)
        : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT$1 ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT$1 ? '</svg>' : '');
    // Returned as an array for terseness
    return [trustFromTemplateString(strings, htmlResult), attrNames];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT$1) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _necessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        this._$parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            (parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        var _a;
        if (this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._$parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
// Apply polyfills if available
const polyfillSupport = global.litHtmlPolyfillSupportDevMode
    ;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.8.0');
if (global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    var _a, _b;
    if (container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = debugLogRenderId++ ;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
{
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;
((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = (part) => part.strings === undefined;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
 * the connected state of directives and run `disconnected`/ `reconnected`
 * callbacks.
 *
 * @return True if there were children to disconnect; false otherwise
 */
const notifyChildrenConnectedChanged = (parent, isConnected) => {
    var _a, _b;
    const children = parent._$disconnectableChildren;
    if (children === undefined) {
        return false;
    }
    for (const obj of children) {
        // The existence of `_$notifyDirectiveConnectionChanged` is used as a "brand" to
        // disambiguate AsyncDirectives from other DisconnectableChildren
        // (as opposed to using an instanceof check to know when to call it); the
        // redundancy of "Directive" in the API name is to avoid conflicting with
        // `_$notifyConnectionChanged`, which exists `ChildParts` which are also in
        // this list
        // Disconnect Directive (and any nested directives contained within)
        // This property needs to remain unminified.
        (_b = (_a = obj)['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
        // Disconnect Part/TemplateInstance
        notifyChildrenConnectedChanged(obj, isConnected);
    }
    return true;
};
/**
 * Removes the given child from its parent list of disconnectable children, and
 * if the parent list becomes empty as a result, removes the parent from its
 * parent, and so forth up the tree when that causes subsequent parent lists to
 * become empty.
 */
const removeDisconnectableFromParent = (obj) => {
    let parent, children;
    do {
        if ((parent = obj._$parent) === undefined) {
            break;
        }
        children = parent._$disconnectableChildren;
        children.delete(obj);
        obj = parent;
    } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
};
const addDisconnectableToParent = (obj) => {
    // Climb the parent tree, creating a sparse tree of children needing
    // disconnection
    for (let parent; (parent = obj._$parent); obj = parent) {
        let children = parent._$disconnectableChildren;
        if (children === undefined) {
            parent._$disconnectableChildren = children = new Set();
        }
        else if (children.has(obj)) {
            // Once we've reached a parent that already contains this child, we
            // can short-circuit
            break;
        }
        children.add(obj);
        installDisconnectAPI(parent);
    }
};
/**
 * Changes the parent reference of the ChildPart, and updates the sparse tree of
 * Disconnectable children accordingly.
 *
 * Note, this method will be patched onto ChildPart instances and called from
 * the core code when parts are moved between different parents.
 */
function reparentDisconnectables(newParent) {
    if (this._$disconnectableChildren !== undefined) {
        removeDisconnectableFromParent(this);
        this._$parent = newParent;
        addDisconnectableToParent(this);
    }
    else {
        this._$parent = newParent;
    }
}
/**
 * Sets the connected state on any directives contained within the committed
 * value of this part (i.e. within a TemplateInstance or iterable of
 * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
 * any directives stored on the ChildPart (when `valueOnly` is false).
 *
 * `isClearingValue` should be passed as `true` on a top-level part that is
 * clearing itself, and not as a result of recursively disconnecting directives
 * as part of a `clear` operation higher up the tree. This both ensures that any
 * directive on this ChildPart that produced a value that caused the clear
 * operation is not disconnected, and also serves as a performance optimization
 * to avoid needless bookkeeping when a subtree is going away; when clearing a
 * subtree, only the top-most part need to remove itself from the parent.
 *
 * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
 * result of truncating an iterable.
 *
 * Note, this method will be patched onto ChildPart instances and called from the
 * core code when parts are cleared or the connection state is changed by the
 * user.
 */
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
    const value = this._$committedValue;
    const children = this._$disconnectableChildren;
    if (children === undefined || children.size === 0) {
        return;
    }
    if (isClearingValue) {
        if (Array.isArray(value)) {
            // Iterable case: Any ChildParts created by the iterable should be
            // disconnected and removed from this ChildPart's disconnectable
            // children (starting at `fromPartIndex` in the case of truncation)
            for (let i = fromPartIndex; i < value.length; i++) {
                notifyChildrenConnectedChanged(value[i], false);
                removeDisconnectableFromParent(value[i]);
            }
        }
        else if (value != null) {
            // TemplateInstance case: If the value has disconnectable children (will
            // only be in the case that it is a TemplateInstance), we disconnect it
            // and remove it from this ChildPart's disconnectable children
            notifyChildrenConnectedChanged(value, false);
            removeDisconnectableFromParent(value);
        }
    }
    else {
        notifyChildrenConnectedChanged(this, isConnected);
    }
}
/**
 * Patches disconnection API onto ChildParts.
 */
const installDisconnectAPI = (obj) => {
    var _a, _b;
    var _c, _d;
    if (obj.type == PartType.CHILD) {
        (_a = (_c = obj)._$notifyConnectionChanged) !== null && _a !== void 0 ? _a : (_c._$notifyConnectionChanged = notifyChildPartConnectedChanged);
        (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : (_d._$reparentDisconnectables = reparentDisconnectables);
    }
};
/**
 * An abstract `Directive` base class whose `disconnected` method will be
 * called when the part containing the directive is cleared as a result of
 * re-rendering, or when the user calls `part.setConnected(false)` on
 * a part that was previously rendered containing the directive (as happens
 * when e.g. a LitElement disconnects from the DOM).
 *
 * If `part.setConnected(true)` is subsequently called on a
 * containing part, the directive's `reconnected` method will be called prior
 * to its next `update`/`render` callbacks. When implementing `disconnected`,
 * `reconnected` should also be implemented to be compatible with reconnection.
 *
 * Note that updates may occur while the directive is disconnected. As such,
 * directives should generally check the `this.isConnected` flag during
 * render/update to determine whether it is safe to subscribe to resources
 * that may prevent garbage collection.
 */
class AsyncDirective extends Directive {
    constructor() {
        super(...arguments);
        // @internal
        this._$disconnectableChildren = undefined;
    }
    /**
     * Initialize the part with internal fields
     * @param part
     * @param parent
     * @param attributeIndex
     */
    _$initialize(part, parent, attributeIndex) {
        super._$initialize(part, parent, attributeIndex);
        addDisconnectableToParent(this);
        this.isConnected = part._$isConnected;
    }
    // This property needs to remain unminified.
    /**
     * Called from the core code when a directive is going away from a part (in
     * which case `shouldRemoveFromParent` should be true), and from the
     * `setChildrenConnected` helper function when recursively changing the
     * connection state of a tree (in which case `shouldRemoveFromParent` should
     * be false).
     *
     * @param isConnected
     * @param isClearingDirective - True when the directive itself is being
     *     removed; false when the tree is being disconnected
     * @internal
     */
    ['_$notifyDirectiveConnectionChanged'](isConnected, isClearingDirective = true) {
        var _a, _b;
        if (isConnected !== this.isConnected) {
            this.isConnected = isConnected;
            if (isConnected) {
                (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
            }
            else {
                (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
        if (isClearingDirective) {
            notifyChildrenConnectedChanged(this, isConnected);
            removeDisconnectableFromParent(this);
        }
    }
    /**
     * Sets the value of the directive's Part outside the normal `update`/`render`
     * lifecycle of a directive.
     *
     * This method should not be called synchronously from a directive's `update`
     * or `render`.
     *
     * @param directive The directive to update
     * @param value The value to set
     */
    setValue(value) {
        if (isSingleExpression(this.__part)) {
            this.__part._$setValue(value, this);
        }
        else {
            // this.__attributeIndex will be defined in this case, but
            // assert it in dev mode
            if (this.__attributeIndex === undefined) {
                throw new Error(`Expected this.__attributeIndex to be a number`);
            }
            const newValues = [...this.__part._$committedValue];
            newValues[this.__attributeIndex] = value;
            this.__part._$setValue(newValues, this, 0);
        }
    }
    /**
     * User callbacks for implementing logic to release any resources/subscriptions
     * that may have been retained by this directive. Since directives may also be
     * re-connected, `reconnected` should also be implemented to restore the
     * working state of the directive prior to the next render.
     */
    disconnected() { }
    reconnected() { }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = (value) => value !== null && value !== void 0 ? value : nothing;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const HTML_RESULT = 1;
class UnsafeHTMLDirective extends Directive {
    constructor(partInfo) {
        super(partInfo);
        this._value = nothing;
        if (partInfo.type !== PartType.CHILD) {
            throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
        }
    }
    render(value) {
        if (value === nothing || value == null) {
            this._templateResult = undefined;
            return (this._value = value);
        }
        if (value === noChange) {
            return value;
        }
        if (typeof value != 'string') {
            throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
        }
        if (value === this._value) {
            return this._templateResult;
        }
        this._value = value;
        const strings = [value];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        strings.raw = strings;
        // WARNING: impersonating a TemplateResult like this is extremely
        // dangerous. Third-party directives should not do this.
        return (this._templateResult = {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            ['_$litType$']: this.constructor
                .resultType,
            strings,
            values: [],
        });
    }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const SVG_RESULT = 2;
class UnsafeSVGDirective extends UnsafeHTMLDirective {
}
UnsafeSVGDirective.directiveName = 'unsafeSVG';
UnsafeSVGDirective.resultType = SVG_RESULT;
/**
 * Renders the result as SVG, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeSVG = directive(UnsafeSVGDirective);




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ LiveButton),
/* harmony export */   A: () => (/* binding */ ARIAKeyShortcuts),
/* harmony export */   B: () => (/* binding */ isHTMLAudioElement),
/* harmony export */   C: () => (/* binding */ isHTMLVideoElement),
/* harmony export */   D: () => (/* binding */ DefaultAudioLayout),
/* harmony export */   E: () => (/* binding */ isHTMLMediaElement),
/* harmony export */   F: () => (/* binding */ FullscreenController),
/* harmony export */   G: () => (/* binding */ sliderContext),
/* harmony export */   H: () => (/* binding */ HLSProviderLoader),
/* harmony export */   I: () => (/* binding */ DefaultLayout),
/* harmony export */   J: () => (/* binding */ defaultLayoutContext),
/* harmony export */   K: () => (/* binding */ useDefaultLayoutLang),
/* harmony export */   L: () => (/* binding */ Logger),
/* harmony export */   M: () => (/* binding */ MediaProvider),
/* harmony export */   N: () => (/* binding */ Controls),
/* harmony export */   O: () => (/* binding */ Tooltip),
/* harmony export */   P: () => (/* binding */ PlayerQueryList),
/* harmony export */   Q: () => (/* binding */ TooltipContent),
/* harmony export */   R: () => (/* binding */ ToggleButton),
/* harmony export */   S: () => (/* binding */ Slider),
/* harmony export */   T: () => (/* binding */ Thumbnail),
/* harmony export */   U: () => (/* binding */ PlayButton),
/* harmony export */   V: () => (/* binding */ VideoQualityList),
/* harmony export */   W: () => (/* binding */ CaptionButton),
/* harmony export */   X: () => (/* binding */ FullscreenButton),
/* harmony export */   Y: () => (/* binding */ MuteButton),
/* harmony export */   Z: () => (/* binding */ PIPButton),
/* harmony export */   _: () => (/* binding */ SeekButton),
/* harmony export */   a: () => (/* binding */ MediaPlayer),
/* harmony export */   a0: () => (/* binding */ sliderState),
/* harmony export */   a1: () => (/* binding */ SliderController),
/* harmony export */   a2: () => (/* binding */ SliderVideo),
/* harmony export */   a3: () => (/* binding */ SliderValue),
/* harmony export */   a4: () => (/* binding */ SliderPreview),
/* harmony export */   a5: () => (/* binding */ updateSliderPreviewPlacement),
/* harmony export */   a6: () => (/* binding */ VolumeSlider),
/* harmony export */   a7: () => (/* binding */ TimeSlider),
/* harmony export */   a8: () => (/* binding */ SliderChapters),
/* harmony export */   a9: () => (/* binding */ Menu),
/* harmony export */   aa: () => (/* binding */ MenuButton),
/* harmony export */   ab: () => (/* binding */ MenuPortal),
/* harmony export */   ac: () => (/* binding */ menuPortalContext),
/* harmony export */   ad: () => (/* binding */ MenuItems),
/* harmony export */   ae: () => (/* binding */ RadioGroup),
/* harmony export */   af: () => (/* binding */ Radio),
/* harmony export */   ag: () => (/* binding */ ChaptersRadioGroup),
/* harmony export */   ah: () => (/* binding */ AudioRadioGroup),
/* harmony export */   ai: () => (/* binding */ CaptionsRadioGroup),
/* harmony export */   aj: () => (/* binding */ SpeedRadioGroup),
/* harmony export */   ak: () => (/* binding */ QualityRadioGroup),
/* harmony export */   al: () => (/* binding */ Gesture),
/* harmony export */   am: () => (/* binding */ Captions),
/* harmony export */   an: () => (/* binding */ Poster),
/* harmony export */   ao: () => (/* binding */ Time),
/* harmony export */   ap: () => (/* binding */ ThumbnailsLoader),
/* harmony export */   aq: () => (/* binding */ FocusVisibleController),
/* harmony export */   ar: () => (/* binding */ tooltipContext),
/* harmony export */   b: () => (/* binding */ useDefaultLayoutContext),
/* harmony export */   c: () => (/* binding */ DefaultVideoLayout),
/* harmony export */   d: () => (/* binding */ formatSpokenTime),
/* harmony export */   e: () => (/* binding */ List),
/* harmony export */   f: () => (/* binding */ formatTime),
/* harmony export */   g: () => (/* binding */ canFullscreen),
/* harmony export */   h: () => (/* binding */ ScreenOrientationController),
/* harmony export */   i: () => (/* binding */ MediaRemoteControl),
/* harmony export */   j: () => (/* binding */ MediaControls),
/* harmony export */   k: () => (/* binding */ MEDIA_KEY_SHORTCUTS),
/* harmony export */   l: () => (/* binding */ mediaState),
/* harmony export */   m: () => (/* binding */ mediaContext),
/* harmony export */   n: () => (/* binding */ TimeRange),
/* harmony export */   o: () => (/* binding */ getTimeRangesStart),
/* harmony export */   p: () => (/* binding */ getTimeRangesEnd),
/* harmony export */   q: () => (/* binding */ TextRenderers),
/* harmony export */   r: () => (/* binding */ TextTrackList),
/* harmony export */   s: () => (/* binding */ softResetMediaState),
/* harmony export */   t: () => (/* binding */ AudioTrackList),
/* harmony export */   u: () => (/* binding */ useMediaContext),
/* harmony export */   v: () => (/* binding */ AudioProviderLoader),
/* harmony export */   w: () => (/* binding */ VideoProviderLoader),
/* harmony export */   x: () => (/* binding */ isAudioProvider),
/* harmony export */   y: () => (/* binding */ isVideoProvider),
/* harmony export */   z: () => (/* binding */ isHLSProvider)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vidstack-2b92eda6.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js");
/* harmony import */ var _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-6ab269cd.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js");
/* harmony import */ var _vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vidstack-ba5dcbce.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-ba5dcbce.js");
/* harmony import */ var _vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vidstack-063df485.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-063df485.js");







var _a$1;
const GROUPED_LOG = Symbol("GROUPED_LOG" );
class GroupedLog {
  constructor(logger, level, title, root, parent) {
    this.logger = logger;
    this.level = level;
    this.title = title;
    this.root = root;
    this.parent = parent;
    this[_a$1] = true;
    this.logs = [];
  }
  static {
    _a$1 = GROUPED_LOG;
  }
  log(...data) {
    this.logs.push({ data });
    return this;
  }
  labelledLog(label, ...data) {
    this.logs.push({ label, data });
    return this;
  }
  groupStart(title) {
    return new GroupedLog(this.logger, this.level, title, this.root ?? this, this);
  }
  groupEnd() {
    this.parent?.logs.push(this);
    return this.parent ?? this;
  }
  dispatch() {
    return this.logger.dispatch(this.level, this.root ?? this);
  }
}
function isGroupedLog(data) {
  return !!data?.[GROUPED_LOG];
}

class Logger {
  constructor() {
    this._target = null;
  }
  error(...data) {
    return this.dispatch("error", ...data);
  }
  warn(...data) {
    return this.dispatch("warn", ...data);
  }
  info(...data) {
    return this.dispatch("info", ...data);
  }
  debug(...data) {
    return this.dispatch("debug", ...data);
  }
  errorGroup(title) {
    return new GroupedLog(this, "error", title);
  }
  warnGroup(title) {
    return new GroupedLog(this, "warn", title);
  }
  infoGroup(title) {
    return new GroupedLog(this, "info", title);
  }
  debugGroup(title) {
    return new GroupedLog(this, "debug", title);
  }
  setTarget(newTarget) {
    this._target = newTarget;
  }
  dispatch(level, ...data) {
    return this._target?.dispatchEvent(
      new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("vds-log", {
        bubbles: true,
        composed: true,
        detail: { level, data }
      })
    ) || false;
  }
}

var _a;
class List extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.I {
  constructor() {
    super(...arguments);
    this._items = [];
    /* @internal */
    this[_a] = false;
  }
  get length() {
    return this._items.length;
  }
  get readonly() {
    return this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._readonly];
  }
  /**
   * Transform list to an array.
   */
  toArray() {
    return [...this._items];
  }
  [(_a = _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._readonly, Symbol.iterator)]() {
    return this._items.values();
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._add](item, trigger) {
    const index = this._items.length;
    if (!("" + index in this)) {
      Object.defineProperty(this, index, {
        get() {
          return this._items[index];
        }
      });
    }
    if (this._items.includes(item))
      return;
    this._items.push(item);
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("add", { detail: item, trigger }));
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._remove](item, trigger) {
    const index = this._items.indexOf(item);
    if (index >= 0) {
      this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onRemove]?.(item, trigger);
      this._items.splice(index, 1);
      this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("remove", { detail: item, trigger }));
    }
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._reset](trigger) {
    for (const item of [...this._items])
      this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._remove](item, trigger);
    this._items = [];
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._setReadonly](false, trigger);
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onReset]?.();
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._setReadonly](readonly, trigger) {
    if (this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._readonly] === readonly)
      return;
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._readonly] = readonly;
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("readonly-change", { detail: readonly, trigger }));
  }
}

var key = {
    fullscreenEnabled: 0,
    fullscreenElement: 1,
    requestFullscreen: 2,
    exitFullscreen: 3,
    fullscreenchange: 4,
    fullscreenerror: 5,
    fullscreen: 6
};
var webkit = [
    'webkitFullscreenEnabled',
    'webkitFullscreenElement',
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror',
    '-webkit-full-screen',
];
var moz = [
    'mozFullScreenEnabled',
    'mozFullScreenElement',
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozfullscreenchange',
    'mozfullscreenerror',
    '-moz-full-screen',
];
var ms$1 = [
    'msFullscreenEnabled',
    'msFullscreenElement',
    'msRequestFullscreen',
    'msExitFullscreen',
    'MSFullscreenChange',
    'MSFullscreenError',
    '-ms-fullscreen',
];
// so it doesn't throw if no window or document
var document$1 = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
var vendor = (('fullscreenEnabled' in document$1 && Object.keys(key)) ||
    (webkit[0] in document$1 && webkit) ||
    (moz[0] in document$1 && moz) ||
    (ms$1[0] in document$1 && ms$1) ||
    []);
var fscreen = {
    requestFullscreen: function (element) { return element[vendor[key.requestFullscreen]](); },
    requestFullscreenFunction: function (element) { return element[vendor[key.requestFullscreen]]; },
    get exitFullscreen() { return document$1[vendor[key.exitFullscreen]].bind(document$1); },
    get fullscreenPseudoClass() { return ":" + vendor[key.fullscreen]; },
    addEventListener: function (type, handler, options) { return document$1.addEventListener(vendor[key[type]], handler, options); },
    removeEventListener: function (type, handler, options) { return document$1.removeEventListener(vendor[key[type]], handler, options); },
    get fullscreenEnabled() { return Boolean(document$1[vendor[key.fullscreenEnabled]]); },
    set fullscreenEnabled(val) { },
    get fullscreenElement() { return document$1[vendor[key.fullscreenElement]]; },
    set fullscreenElement(val) { },
    get onfullscreenchange() { return document$1[("on" + vendor[key.fullscreenchange]).toLowerCase()]; },
    set onfullscreenchange(handler) { return document$1[("on" + vendor[key.fullscreenchange]).toLowerCase()] = handler; },
    get onfullscreenerror() { return document$1[("on" + vendor[key.fullscreenerror]).toLowerCase()]; },
    set onfullscreenerror(handler) { return document$1[("on" + vendor[key.fullscreenerror]).toLowerCase()] = handler; },
};

var fscreen$1 = fscreen;

const CAN_FULLSCREEN = fscreen$1.fullscreenEnabled;
class FullscreenController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor() {
    super(...arguments);
    /**
     * Tracks whether we're the active fullscreen event listener. Fullscreen events can only be
     * listened to globally on the document so we need to know if they relate to the current host
     * element or not.
     */
    this._listening = false;
    this._active = false;
  }
  get active() {
    return this._active;
  }
  get supported() {
    return CAN_FULLSCREEN;
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(fscreen$1, "fullscreenchange", this._onFullscreenChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(fscreen$1, "fullscreenerror", this._onFullscreenError.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._onDisconnect.bind(this));
  }
  async _onDisconnect() {
    if (CAN_FULLSCREEN)
      await this.exit();
  }
  _onFullscreenChange(event) {
    const active = isFullscreen(this.el);
    if (active === this._active)
      return;
    if (!active)
      this._listening = false;
    this._active = active;
    this.dispatch("fullscreen-change", { detail: active, trigger: event });
  }
  _onFullscreenError(event) {
    if (!this._listening)
      return;
    this.dispatch("fullscreen-error", { detail: null, trigger: event });
    this._listening = false;
  }
  async enter() {
    try {
      this._listening = true;
      if (!this.el || isFullscreen(this.el))
        return;
      assertFullscreenAPI();
      return fscreen$1.requestFullscreen(this.el);
    } catch (error) {
      this._listening = false;
      throw error;
    }
  }
  async exit() {
    if (!this.el || !isFullscreen(this.el))
      return;
    assertFullscreenAPI();
    return fscreen$1.exitFullscreen();
  }
}
function canFullscreen() {
  return CAN_FULLSCREEN;
}
function isFullscreen(host) {
  if (fscreen$1.fullscreenElement === host)
    return true;
  try {
    return host.matches(
      // @ts-expect-error - `fullscreenPseudoClass` is missing from `@types/fscreen`.
      fscreen$1.fullscreenPseudoClass
    );
  } catch (error) {
    return false;
  }
}
function assertFullscreenAPI() {
  if (CAN_FULLSCREEN)
    return;
  throw Error(
    "[vidstack] fullscreen API is not enabled or supported in this environment" 
  );
}

const CAN_USE_SCREEN_ORIENTATION_API = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.a)();
class ScreenOrientationController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor() {
    super(...arguments);
    this._type = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(getScreenOrientation());
    this._locked = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
  }
  /**
   * The current screen orientation type.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get type() {
    return this._type();
  }
  /**
   * Whether the screen orientation is currently locked.
   *
   * @signal
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation}
   * @see https://w3c.github.io/screen-orientation/#screen-orientation-types-and-locks
   */
  get locked() {
    return this._locked();
  }
  /**
   * Whether the viewport is in a portrait orientation.
   *
   * @signal
   */
  get portrait() {
    return this._type().startsWith("portrait");
  }
  /**
   * Whether the viewport is in a landscape orientation.
   *
   * @signal
   */
  get landscape() {
    return this._type().startsWith("landscape");
  }
  /**
   * Whether the native Screen Orientation API is available.
   */
  get supported() {
    return CAN_USE_SCREEN_ORIENTATION_API;
  }
  onConnect() {
    if (CAN_USE_SCREEN_ORIENTATION_API) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(screen.orientation, "change", this._onOrientationChange.bind(this));
    } else {
      const query = window.matchMedia("(orientation: landscape)");
      query.onchange = this._onOrientationChange.bind(this);
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => query.onchange = null);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._onDisconnect.bind(this));
  }
  async _onDisconnect() {
    if (CAN_USE_SCREEN_ORIENTATION_API && this._locked())
      await this.unlock();
  }
  _onOrientationChange(event) {
    this._type.set(getScreenOrientation());
    this.dispatch("orientation-change", {
      detail: {
        orientation: (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._type),
        lock: this._currentLock
      },
      trigger: event
    });
  }
  /**
   * Locks the orientation of the screen to the desired orientation type using the
   * Screen Orientation API.
   *
   * @param lockType - The screen lock orientation type.
   * @throws Error - If screen orientation API is unavailable.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @see {@link https://w3c.github.io/screen-orientation}
   */
  async lock(lockType) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._locked) || this._currentLock === lockType)
      return;
    assertScreenOrientationAPI();
    await screen.orientation.lock(lockType);
    this._locked.set(true);
    this._currentLock = lockType;
  }
  /**
   * Unlocks the orientation of the screen to it's default state using the Screen Orientation
   * API. This method will throw an error if the API is unavailable.
   *
   * @throws Error - If screen orientation API is unavailable.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @see {@link https://w3c.github.io/screen-orientation}
   */
  async unlock() {
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._locked))
      return;
    assertScreenOrientationAPI();
    this._currentLock = void 0;
    await screen.orientation.unlock();
    this._locked.set(false);
  }
}
function assertScreenOrientationAPI() {
  if (CAN_USE_SCREEN_ORIENTATION_API)
    return;
  throw Error(
    "[vidstack] screen orientation API is not available" 
  );
}
function getScreenOrientation() {
  if (CAN_USE_SCREEN_ORIENTATION_API)
    return window.screen.orientation.type;
  return window.innerWidth >= window.innerHeight ? "landscape-primary" : "portrait-primary";
}

class TimeRange {
  get length() {
    return this._ranges.length;
  }
  constructor(start, end) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.M)(start)) {
      this._ranges = start;
    } else if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(start) && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(end)) {
      this._ranges = [[start, end]];
    } else {
      this._ranges = [];
    }
  }
  start(index) {
    throwIfEmpty(this._ranges.length);
    throwIfOutOfRange("start", index, this._ranges.length - 1);
    return this._ranges[index][0] ?? Infinity;
  }
  end(index) {
    throwIfEmpty(this._ranges.length);
    throwIfOutOfRange("end", index, this._ranges.length - 1);
    return this._ranges[index][1] ?? Infinity;
  }
}
function getTimeRangesStart(range) {
  if (!range.length)
    return null;
  let min = range.start(0);
  for (let i = 1; i < range.length; i++) {
    const value = range.start(i);
    if (value < min)
      min = value;
  }
  return min;
}
function getTimeRangesEnd(range) {
  if (!range.length)
    return null;
  let max = range.end(0);
  for (let i = 1; i < range.length; i++) {
    const value = range.end(i);
    if (value > max)
      max = value;
  }
  return max;
}
function throwIfEmpty(length) {
  if (!length)
    throw new Error("`TimeRanges` object is empty." );
}
function throwIfOutOfRange(fnName, index, end) {
  if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(index) || index < 0 || index > end) {
    throw new Error(
      `Failed to execute '${fnName}' on 'TimeRanges': The index provided (${index}) is non-numeric or out of bounds (0-${end}).`
    );
  }
}

const mediaState = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
  audioTracks: [],
  audioTrack: null,
  autoplay: false,
  autoplayError: void 0,
  buffered: new TimeRange(),
  duration: 0,
  canLoad: false,
  canFullscreen: false,
  canPictureInPicture: false,
  canPlay: false,
  controls: false,
  controlsVisible: false,
  crossorigin: null,
  poster: "",
  currentTime: 0,
  ended: false,
  error: void 0,
  fullscreen: false,
  loop: false,
  logLevel: "warn" ,
  mediaType: "unknown",
  muted: false,
  paused: true,
  played: new TimeRange(),
  playing: false,
  playsinline: false,
  pictureInPicture: false,
  preload: "metadata",
  playbackRate: 1,
  qualities: [],
  quality: null,
  autoQuality: false,
  canSetQuality: true,
  canSetVolume: false,
  seekable: new TimeRange(),
  seeking: false,
  source: { src: "", type: "" },
  sources: [],
  started: false,
  title: "",
  textTracks: [],
  textTrack: null,
  volume: 1,
  waiting: false,
  get viewType() {
    return this.providedViewType !== "unknown" ? this.providedViewType : this.inferredViewType;
  },
  get streamType() {
    return this.providedStreamType !== "unknown" ? this.providedStreamType : this.inferredStreamType;
  },
  get currentSrc() {
    return this.source;
  },
  get bufferedStart() {
    return getTimeRangesStart(this.buffered) ?? 0;
  },
  get bufferedEnd() {
    return getTimeRangesEnd(this.buffered) ?? 0;
  },
  get seekableStart() {
    return getTimeRangesStart(this.seekable) ?? 0;
  },
  get seekableEnd() {
    return this.canPlay ? getTimeRangesEnd(this.seekable) ?? Infinity : 0;
  },
  get seekableWindow() {
    return Math.max(0, this.seekableEnd - this.seekableStart);
  },
  // ~~ responsive design ~~
  pointer: "fine",
  orientation: "landscape",
  width: 0,
  height: 0,
  mediaWidth: 0,
  mediaHeight: 0,
  // ~~ user props ~~
  userBehindLiveEdge: false,
  // ~~ live props ~~
  liveEdgeTolerance: 10,
  minLiveDVRWindow: 60,
  get canSeek() {
    return /unknown|on-demand|:dvr/.test(this.streamType) && Number.isFinite(this.seekableWindow) && (!this.live || /:dvr/.test(this.streamType) && this.seekableWindow >= this.minLiveDVRWindow);
  },
  get live() {
    return this.streamType.includes("live") || !Number.isFinite(this.duration);
  },
  get liveEdgeStart() {
    return this.live && Number.isFinite(this.seekableEnd) ? Math.max(0, (this.liveSyncPosition ?? this.seekableEnd) - this.liveEdgeTolerance) : 0;
  },
  get liveEdge() {
    return this.live && (!this.canSeek || !this.userBehindLiveEdge && this.currentTime >= this.liveEdgeStart);
  },
  get liveEdgeWindow() {
    return this.live && Number.isFinite(this.seekableEnd) ? this.seekableEnd - this.liveEdgeStart : 0;
  },
  // ~~ internal props ~~
  autoplaying: false,
  inferredViewType: "unknown",
  providedViewType: "unknown",
  providedStreamType: "unknown",
  inferredStreamType: "unknown",
  liveSyncPosition: null
});
const DO_NOT_RESET_ON_SRC_CHANGE = /* @__PURE__ */ new Set([
  "autoplay",
  "canFullscreen",
  "canLoad",
  "canPictureInPicture",
  "canSetVolume",
  "controls",
  "crossorigin",
  "fullscreen",
  "height",
  "logLevel",
  "loop",
  "mediaHeight",
  "mediaWidth",
  "mediaType",
  "muted",
  "orientation",
  "pictureInPicture",
  "playsinline",
  "pointer",
  "poster",
  "preload",
  "providedStreamType",
  "inferredViewType",
  "providedViewType",
  "source",
  "sources",
  "textTrack",
  "textTracks",
  "title",
  "volume",
  "width"
]);
function softResetMediaState($media) {
  mediaState.reset($media, (prop) => !DO_NOT_RESET_ON_SRC_CHANGE.has(prop));
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
}

const mediaContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();
function useMediaContext() {
  return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(mediaContext);
}

class MediaRemoteControl {
  constructor(_logger = new Logger() ) {
    this._logger = _logger;
    this._target = null;
    this._player = null;
    this._prevTrackIndex = -1;
  }
  /**
   * Set the target from which to dispatch media requests events from. The events should bubble
   * up from this target to the `<media-player>` element.
   *
   * @example
   * ```ts
   * const button = document.querySelector('button');
   * remote.setTarget(button);
   * ```
   */
  setTarget(target) {
    this._target = target;
    this._logger?.setTarget(target);
  }
  /**
   * Returns the current `<media-player>` element. This method will attempt to find the player by
   * searching up from either the given `target` or default target set via `remote.setTarget`.
   *
   * @example
   * ```ts
   * const player = remote.getPlayer();
   * ```
   */
  getPlayer(target) {
    if (this._player)
      return this._player;
    (target ?? this._target)?.dispatchEvent(
      new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("find-media-player", {
        detail: (player) => void (this._player = player),
        bubbles: true,
        composed: true
      })
    );
    return this._player;
  }
  /**
   * Set the current `<media-player>` element so the remote can support toggle methods such as
   * `togglePaused` as they rely on the current media state.
   */
  setPlayer(player) {
    this._player = player;
  }
  /**
   * Dispatch a request to start the media loading process. This will only work if the media
   * player has been initialized with a custom loading strategy `<media-player load="custom">`.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/loading#loading-strategies}
   */
  startLoading(trigger) {
    this._dispatchRequest("media-start-loading", trigger);
  }
  /**
   * Dispatch a request to begin/resume media playback.
   */
  play(trigger) {
    this._dispatchRequest("media-play-request", trigger);
  }
  /**
   * Dispatch a request to pause media playback.
   */
  pause(trigger) {
    this._dispatchRequest("media-pause-request", trigger);
  }
  /**
   * Dispatch a request to set the media volume to mute (0).
   */
  mute(trigger) {
    this._dispatchRequest("media-mute-request", trigger);
  }
  /**
   * Dispatch a request to unmute the media volume and set it back to it's previous state.
   */
  unmute(trigger) {
    this._dispatchRequest("media-unmute-request", trigger);
  }
  /**
   * Dispatch a request to enter fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/fullscreen#media-remote}
   */
  enterFullscreen(target, trigger) {
    this._dispatchRequest("media-enter-fullscreen-request", trigger, target);
  }
  /**
   * Dispatch a request to exit fullscreen.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/fullscreen#media-remote}
   */
  exitFullscreen(target, trigger) {
    this._dispatchRequest("media-exit-fullscreen-request", trigger, target);
  }
  /**
   * Dispatch a request to enter picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/picture-in-picture#media-remote}
   */
  enterPictureInPicture(trigger) {
    this._dispatchRequest("media-enter-pip-request", trigger);
  }
  /**
   * Dispatch a request to exit picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/picture-in-picture#media-remote}
   */
  exitPictureInPicture(trigger) {
    this._dispatchRequest("media-exit-pip-request", trigger);
  }
  /**
   * Notify the media player that a seeking process is happening and to seek to the given `time`.
   */
  seeking(time, trigger) {
    this._dispatchRequest("media-seeking-request", trigger, time);
  }
  /**
   * Notify the media player that a seeking operation has completed and to seek to the given `time`.
   * This is generally called after a series of `remote.seeking()` calls.
   */
  seek(time, trigger) {
    this._dispatchRequest("media-seek-request", trigger, time);
  }
  seekToLiveEdge(trigger) {
    this._dispatchRequest("media-live-edge-request", trigger);
  }
  /**
   * Dispatch a request to update the media volume to the given `volume` level which is a value
   * between 0 and 1.
   *
   * @example
   * ```ts
   * remote.changeVolume(0); // 0%
   * remote.changeVolume(0.05); // 5%
   * remote.changeVolume(0.5); // 50%
   * remote.changeVolume(0.75); // 70%
   * remote.changeVolume(1); // 100%
   * ```
   */
  changeVolume(volume, trigger) {
    this._dispatchRequest("media-volume-change-request", trigger, Math.max(0, Math.min(1, volume)));
  }
  /**
   * Dispatch a request to change the current audio track.
   *
   * @example
   * ```ts
   * remote.changeAudioTrack(1); // track at index 1
   * ```
   */
  changeAudioTrack(index, trigger) {
    this._dispatchRequest("media-audio-track-change-request", trigger, index);
  }
  /**
   * Dispatch a request to change the video quality. The special value `-1` represents auto quality
   * selection.
   *
   * @example
   * ```ts
   * remote.changeQuality(-1); // auto
   * remote.changeQuality(1); // quality at index 1
   * ```
   */
  changeQuality(index, trigger) {
    this._dispatchRequest("media-quality-change-request", trigger, index);
  }
  /**
   * Request auto quality selection.
   */
  requestAutoQuality(trigger) {
    this.changeQuality(-1, trigger);
  }
  /**
   * Dispatch a request to change the mode of the text track at the given index.
   *
   * @example
   * ```ts
   * remote.changeTextTrackMode(1, 'showing'); // track at index 1
   * ```
   */
  changeTextTrackMode(index, mode, trigger) {
    this._dispatchRequest("media-text-track-change-request", trigger, {
      index,
      mode
    });
  }
  /**
   * Dispatch a request to change the media playback rate.
   *
   * @example
   * ```ts
   * remote.changePlaybackRate(0.5); // Half the normal speed
   * remote.changePlaybackRate(1); // Normal speed
   * remote.changePlaybackRate(1.5); // 50% faster than normal
   * remote.changePlaybackRate(2); // Double the normal speed
   * ```
   */
  changePlaybackRate(rate, trigger) {
    this._dispatchRequest("media-rate-change-request", trigger, rate);
  }
  /**
   * Dispatch a request to resume idle tracking on controls. Refer to for more information.
   */
  resumeControls(trigger) {
    this._dispatchRequest("media-resume-controls-request", trigger);
  }
  /**
   * Dispatch a request to pause controls idle tracking. Pausing tracking will result in the
   * controls being visible until `remote.resumeControls()` is called. This method
   * is generally used when building custom controls and you'd like to prevent the UI from
   * disappearing.
   *
   * @example
   * ```ts
   * // Prevent controls hiding while menu is being interacted with.
   * function onSettingsOpen() {
   *   remote.pauseControls();
   * }
   *
   * function onSettingsClose() {
   *   remote.resumeControls();
   * }
   * ```
   */
  pauseControls(trigger) {
    this._dispatchRequest("media-pause-controls-request", trigger);
  }
  /**
   * Dispatch a request to toggle the media playback state.
   */
  togglePaused(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.togglePaused.name);
      return;
    }
    if (player.state.paused)
      this.play(trigger);
    else
      this.pause(trigger);
  }
  /**
   * Dispatch a request to toggle the controls visibility.
   */
  toggleControls(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.toggleControls.name);
      return;
    }
    if (!player.controls.showing) {
      player.controls.show(0, trigger);
    } else {
      player.controls.hide(0, trigger);
    }
  }
  /**
   * Dispatch a request to toggle the media muted state.
   */
  toggleMuted(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.toggleMuted.name);
      return;
    }
    if (player.state.muted)
      this.unmute(trigger);
    else
      this.mute(trigger);
  }
  /**
   * Dispatch a request to toggle the media fullscreen state.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/fullscreen#media-remote}
   */
  toggleFullscreen(target, trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.toggleFullscreen.name);
      return;
    }
    if (player.state.fullscreen)
      this.exitFullscreen(target, trigger);
    else
      this.enterFullscreen(target, trigger);
  }
  /**
   * Dispatch a request to toggle the media picture-in-picture mode.
   *
   * @docs {@link https://www.vidstack.io/docs/player/core-concepts/picture-in-picture#media-remote}
   */
  togglePictureInPicture(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.togglePictureInPicture.name);
      return;
    }
    if (player.state.pictureInPicture)
      this.exitPictureInPicture(trigger);
    else
      this.enterPictureInPicture(trigger);
  }
  /**
   * Turn captions off.
   */
  disableCaptions(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.disableCaptions.name);
      return;
    }
    const tracks = player.state.textTracks, track = player.state.textTrack;
    if (track) {
      const index = tracks.indexOf(track);
      this.changeTextTrackMode(index, "disabled", trigger);
    }
  }
  /**
   * Dispatch a request to toggle the current captions mode.
   */
  toggleCaptions(trigger) {
    const player = this.getPlayer(trigger?.target);
    if (!player) {
      this._noPlayerWarning(this.toggleCaptions.name);
      return;
    }
    const tracks = player.state.textTracks, track = player.state.textTrack;
    if (track) {
      const index = tracks.indexOf(track);
      this.changeTextTrackMode(index, "disabled", trigger);
      this._prevTrackIndex = index;
    } else {
      let index = this._prevTrackIndex;
      if (!tracks[index] || !(0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(tracks[index])) {
        index = -1;
      }
      if (index === -1) {
        index = tracks.findIndex((track2) => (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track2) && track2.default);
      }
      if (index === -1) {
        index = tracks.findIndex((track2) => (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track2));
      }
      if (index >= 0)
        this.changeTextTrackMode(index, "showing", trigger);
      this._prevTrackIndex = -1;
    }
  }
  _dispatchRequest(type, trigger, detail) {
    const request = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(type, {
      bubbles: true,
      composed: true,
      detail,
      trigger
    });
    let target = trigger?.target || null;
    if (target && target instanceof _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C)
      target = target.el;
    const shouldUsePlayer = !target || target === document || target === window || target === document.body || this._player?.el && target instanceof Node && !this._player.el.contains(target);
    target = shouldUsePlayer ? this._target ?? this.getPlayer()?.el : target ?? this._target;
    {
      this._logger?.debugGroup(`\u{1F4E8} dispatching \`${type}\``).labelledLog("Target", target).labelledLog("Player", this._player).labelledLog("Request Event", request).labelledLog("Trigger Event", trigger).dispatch();
    }
    if (this._player) {
      this._player.canPlayQueue._enqueue(type, () => target?.dispatchEvent(request));
    } else {
      target?.dispatchEvent(request);
    }
  }
  _noPlayerWarning(method) {
    {
      console.warn(
        `[vidstack] attempted to call \`MediaRemoteControl.${method}\`() that requires player but failed because remote could not find a parent player element from target`
      );
    }
  }
}

class MediaPlayerController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
}

class MediaControls extends MediaPlayerController {
  constructor() {
    super(...arguments);
    this._idleTimer = -2;
    this._pausedTracking = false;
    this._focusedItem = null;
    /**
     * The default amount of delay in milliseconds while media playback is progressing without user
     * activity to indicate an idle state (i.e., hide controls).
     *
     * @defaultValue 2000
     */
    this.defaultDelay = 2e3;
  }
  /**
   * Whether media controls are currently visible.
   */
  get showing() {
    return this.$state.controlsVisible();
  }
  /**
   * Show controls.
   */
  show(delay = 0, trigger) {
    this._clearIdleTimer();
    if (!this._pausedTracking) {
      this._changeVisibility(true, delay, trigger);
    }
  }
  /**
   * Hide controls.
   */
  hide(delay = this.defaultDelay, trigger) {
    this._clearIdleTimer();
    if (!this._pausedTracking) {
      this._changeVisibility(false, delay, trigger);
    }
  }
  /**
   * Whether all idle tracking on controls should be paused until resumed again.
   */
  pause(trigger) {
    this._pausedTracking = true;
    this._clearIdleTimer();
    this._changeVisibility(true, 0, trigger);
  }
  resume(trigger) {
    this._pausedTracking = false;
    if (this.$state.paused())
      return;
    this._changeVisibility(false, this.defaultDelay, trigger);
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPaused.bind(this));
    const onPlay = this._onPlay.bind(this), onPause = this._onPause.bind(this);
    this.listen("can-play", (event) => this.show(0, event));
    this.listen("play", onPlay);
    this.listen("pause", onPause);
    this.listen("autoplay-fail", onPause);
  }
  _watchPaused() {
    const { paused, started, autoplayError } = this.$state;
    if (paused() || autoplayError() && !started())
      return;
    const onStopIdle = this._onStopIdle.bind(this);
    for (const eventType of ["pointerup", "keydown"]) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this.el, eventType, onStopIdle);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      if (this.$state.pointer() === "fine") {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this.el, "pointermove", onStopIdle);
      }
    });
  }
  _onPlay(event) {
    this.show(0, event);
    this.hide(this.defaultDelay, event);
  }
  _onPause(event) {
    this.show(0, event);
  }
  _clearIdleTimer() {
    window.clearTimeout(this._idleTimer);
    this._idleTimer = -1;
  }
  _onStopIdle(event) {
    if (event.MEDIA_GESTURE || this._pausedTracking)
      return;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.t)(event)) {
      if (event.key === "Escape") {
        this.el?.focus();
        this._focusedItem = null;
      } else if (this._focusedItem) {
        event.preventDefault();
        requestAnimationFrame(() => {
          this._focusedItem?.focus();
          this._focusedItem = null;
        });
      }
    }
    this.show(0, event);
    this.hide(this.defaultDelay, event);
  }
  _changeVisibility(visible, delay, trigger) {
    if (delay === 0) {
      this._onChange(visible, trigger);
      return;
    }
    this._idleTimer = window.setTimeout(() => {
      this._onChange(visible && !this._pausedTracking, trigger);
    }, delay);
  }
  _onChange(visible, trigger) {
    if (this.$state.controlsVisible() === visible)
      return;
    this.$state.controlsVisible.set(visible);
    if (!visible && document.activeElement && this.el?.contains(document.activeElement)) {
      this._focusedItem = document.activeElement;
      requestAnimationFrame(() => this.el?.focus());
    }
    this.dispatch("controls-change", {
      detail: visible,
      trigger
    });
  }
}

class NativeTextRenderer {
  constructor() {
    this.priority = 0;
    this._display = true;
    this._video = null;
    this._track = null;
    this._tracks = /* @__PURE__ */ new Set();
  }
  canRender() {
    return true;
  }
  attach(video) {
    this._video = video;
    video.textTracks.onchange = this._onChange.bind(this);
  }
  addTrack(track) {
    this._tracks.add(track);
    this._attachTrack(track);
  }
  removeTrack(track) {
    track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._native]?.remove?.();
    track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._native] = null;
    this._tracks.delete(track);
  }
  changeTrack(track) {
    const current = track?.[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._native];
    if (current && current.track.mode !== "showing") {
      current.track.mode = "showing";
    }
    this._track = track;
  }
  setDisplay(display) {
    this._display = display;
    this._onChange();
  }
  detach() {
    if (this._video)
      this._video.textTracks.onchange = null;
    for (const track of this._tracks)
      this.removeTrack(track);
    this._tracks.clear();
    this._video = null;
    this._track = null;
  }
  _attachTrack(track) {
    if (!this._video)
      return;
    const el = track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._native] ??= this._createTrackElement(track);
    if (el instanceof HTMLElement) {
      this._video.append(el);
      el.track.mode = el.default ? "showing" : "hidden";
    }
  }
  _createTrackElement(track) {
    const el = document.createElement("track"), isDefault = track.default || track.mode === "showing", isSupported = track.src && track.type === "vtt";
    el.id = track.id;
    el.src = isSupported ? track.src : "https://cdn.jsdelivr.net/npm/vidstack@next/empty.vtt";
    el.label = track.label;
    el.kind = track.kind;
    el.default = isDefault;
    track.language && (el.srclang = track.language);
    if (isDefault && !isSupported) {
      this._copyCues(track, el.track);
    }
    return el;
  }
  _copyCues(track, native) {
    if (track.src && track.type === "vtt" || native.cues?.length)
      return;
    for (const cue of track.cues)
      native.addCue(cue);
  }
  _onChange(event) {
    for (const track of this._tracks) {
      const nativeTrack = track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._native]?.track;
      if (!nativeTrack)
        continue;
      if (!this._display) {
        nativeTrack.mode = "disabled";
        continue;
      }
      const isShowing = nativeTrack.mode === "showing";
      if (isShowing)
        this._copyCues(track, nativeTrack);
      track.setMode(isShowing ? "showing" : "disabled", event);
    }
  }
}

class TextRenderers {
  constructor(_media) {
    this._media = _media;
    this._video = null;
    this._renderers = [];
    this._nativeDisplay = false;
    this._nativeRenderer = null;
    this._customRenderer = null;
    const textTracks = _media.textTracks;
    this._textTracks = textTracks;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchControls.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._detach.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "add", this._onAddTrack.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "remove", this._onRemoveTrack.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "mode-change", this._update.bind(this));
  }
  _watchControls() {
    const { $state, $iosControls } = this._media;
    this._nativeDisplay = $state.controls() || $iosControls();
    this._update();
  }
  add(renderer) {
    this._renderers.push(renderer);
    this._update();
  }
  remove(renderer) {
    renderer.detach();
    this._renderers.splice(this._renderers.indexOf(renderer), 1);
    this._update();
  }
  /* @internal */
  _attachVideo(video) {
    requestAnimationFrame(() => {
      this._video = video;
      if (video) {
        this._nativeRenderer = new NativeTextRenderer();
        this._nativeRenderer.attach(video);
        for (const track of this._textTracks)
          this._addNativeTrack(track);
      }
      this._update();
    });
  }
  _addNativeTrack(track) {
    if (!(0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track))
      return;
    this._nativeRenderer?.addTrack(track);
  }
  _removeNativeTrack(track) {
    if (!(0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track))
      return;
    this._nativeRenderer?.removeTrack(track);
  }
  _onAddTrack(event) {
    this._addNativeTrack(event.detail);
  }
  _onRemoveTrack(event) {
    this._removeNativeTrack(event.detail);
  }
  _update() {
    if (!this._video) {
      this._detach();
      return;
    }
    const currentTrack = this._textTracks.selected;
    if (this._nativeDisplay || currentTrack?.[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._nativeHLS]) {
      this._customRenderer?.changeTrack(null);
      this._nativeRenderer.setDisplay(true);
      this._nativeRenderer.changeTrack(currentTrack);
      return;
    }
    this._nativeRenderer.setDisplay(false);
    this._nativeRenderer.changeTrack(null);
    if (!currentTrack) {
      this._customRenderer?.changeTrack(null);
      return;
    }
    const customRenderer = this._renderers.sort((a, b) => a.priority - b.priority).find((loader) => loader.canRender(currentTrack));
    if (this._customRenderer !== customRenderer) {
      this._customRenderer?.detach();
      customRenderer?.attach(this._video);
      this._customRenderer = customRenderer ?? null;
    }
    customRenderer?.changeTrack(currentTrack);
  }
  _detach() {
    this._nativeRenderer?.detach();
    this._nativeRenderer = null;
    this._customRenderer?.detach();
    this._customRenderer = null;
  }
}

class TextTrackList extends List {
  constructor() {
    super(...arguments);
    this._canLoad = false;
    this._defaults = {};
    this._onTrackModeChangeBind = this._onTrackModeChange.bind(this);
  }
  get selected() {
    const track = this._items.find((t) => t.mode === "showing" && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(t));
    return track ?? null;
  }
  add(init, trigger) {
    const isTrack = init instanceof _vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.a, track = isTrack ? init : new _vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.a(init);
    if (this._defaults[init.kind] && init.default)
      delete init.default;
    track.addEventListener("mode-change", this._onTrackModeChangeBind);
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._add](track, trigger);
    track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._crossorigin] = this[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._crossorigin];
    if (this._canLoad)
      track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._canLoad]();
    if (init.default) {
      this._defaults[init.kind] = track;
      track.mode = "showing";
    }
    return this;
  }
  remove(track, trigger) {
    if (!this._items.includes(track))
      return;
    if (track === this._defaults[track.kind])
      delete this._defaults[track.kind];
    track.mode = "disabled";
    track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._onModeChange] = null;
    track.removeEventListener("mode-change", this._onTrackModeChangeBind);
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._remove](track, trigger);
    return this;
  }
  clear(trigger) {
    for (const track of this._items)
      this.remove(track, trigger);
    return this;
  }
  getById(id) {
    return this._items.find((track) => track.id === id) ?? null;
  }
  getByKind(kind) {
    const kinds = Array.isArray(kind) ? kind : [kind];
    return this._items.filter((track) => kinds.includes(track.kind));
  }
  /* @internal */
  [(_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._canLoad)]() {
    if (this._canLoad)
      return;
    for (const track of this._items)
      track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._canLoad]();
    this._canLoad = true;
  }
  _onTrackModeChange(event) {
    const track = event.detail;
    if (track.mode === "showing") {
      const kinds = (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track) ? ["captions", "subtitles"] : [track.kind];
      for (const t of this._items) {
        if (t.mode === "showing" && t != track && kinds.includes(t.kind)) {
          t.mode = "disabled";
        }
      }
    }
    this.dispatchEvent(
      new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("mode-change", {
        detail: event.detail,
        trigger: event
      })
    );
  }
}

const SELECTED = Symbol("SELECTED" );
class SelectList extends List {
  get selected() {
    return this._items.find((item) => item.selected) ?? null;
  }
  get selectedIndex() {
    return this._items.findIndex((item) => item.selected);
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onRemove](item, trigger) {
    this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._select](item, false, trigger);
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._add](item, trigger) {
    item[SELECTED] = false;
    Object.defineProperty(item, "selected", {
      get() {
        return this[SELECTED];
      },
      set: (selected) => {
        if (this.readonly)
          return;
        this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onUserSelect]?.();
        this[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._select](item, selected);
      }
    });
    super[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._add](item, trigger);
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._select](item, selected, trigger) {
    if (selected === item[SELECTED])
      return;
    const prev = this.selected;
    item[SELECTED] = selected;
    const changed = !selected ? prev === item : prev !== item;
    if (changed) {
      if (prev)
        prev[SELECTED] = false;
      this.dispatchEvent(
        new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("change", {
          detail: { prev, current: this.selected },
          trigger
        })
      );
    }
  }
}

class AudioTrackList extends SelectList {
  getById(id) {
    if (id === "")
      return null;
    return this._items.find((track) => track.id === id) ?? null;
  }
}

const globalEval = eval;
const equalsRE = /:\s+'?"?(.*?)'?"?\)/g, notRE = /\s+not\s+/g, andRE = /\s+and\s+/g, orRE = /\s+or\s+/g, pxRE = /(\d)px/g;
class PlayerQueryList extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.I {
  constructor(store, query) {
    super();
    this._evaluation = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)("true");
    this._mediaProps = /* @__PURE__ */ new Set();
    this._mediaMatches = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(true);
    this.$matches = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(() => {
      let currentEval = this._evaluation();
      if (currentEval === "never")
        return false;
      for (const prop of this._mediaProps) {
        const value = this._mediaStore[prop](), replaceValue = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(value) ? `'${value}'` : value + "";
        currentEval = currentEval.replace((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.x)(prop), replaceValue);
      }
      return globalEval(`!!(${currentEval})`) && this._mediaMatches();
    });
    this._query = query;
    this._mediaStore = store;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.P)((dispose) => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchQuery.bind(this));
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchMatches.bind(this));
      this._dispose = dispose;
    });
  }
  static {
    this.create = (query) => {
      const media = useMediaContext();
      return new PlayerQueryList(media.$state, query);
    };
  }
  get query() {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.L)(this._query);
  }
  get matches() {
    return this.$matches();
  }
  _watchQuery() {
    const query = this.query;
    if (query === "")
      return;
    if (query === "never") {
      this._evaluation.set(query);
      return;
    }
    const queryList = query.trim().split(/\s*,\s*/g), mediaQueries = queryList.filter((q) => q.startsWith("@media")).join(","), playerQueries = queryList.filter((q) => !q.startsWith("@media"));
    if (mediaQueries.length) {
      const mediaQuery = window.matchMedia(mediaQueries), onChange = () => void this._mediaMatches.set(mediaQuery.matches);
      onChange();
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(mediaQuery, "change", onChange);
    }
    if (playerQueries.length) {
      const evaluation = this._buildQueryEval(playerQueries), validProps = Object.keys(mediaState.record);
      for (const query2 of evaluation.matchAll(/\(([-a-zA-Z]+)\s/g)) {
        const prop = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Q)(query2[1]);
        if (validProps.includes(prop)) {
          this._mediaProps.add(prop);
        }
      }
      this._evaluation.set(evaluation);
    }
    return () => {
      this._mediaProps.clear();
      this._evaluation.set("true");
      this._mediaMatches.set(true);
    };
  }
  _watchMatches() {
    this.$matches();
    this.dispatchEvent(new Event("change"));
  }
  _buildQueryEval(queryList) {
    return queryList.map(
      (query) => "(" + query.replace(equalsRE, ' == "$1")').replace(notRE, "!").replace(andRE, " && ").replace(orRE, " || ").replace(pxRE, "$1").trim() + ")"
    ).join(" || ");
  }
  destroy() {
    this._dispose();
  }
}

class VideoQualityList extends SelectList {
  constructor() {
    super(...arguments);
    this._auto = false;
    /**
     * Configures quality switching:
     *
     * - `current`: Trigger an immediate quality level switch. This will abort the current fragment
     * request if any, flush the whole buffer, and fetch fragment matching with current position
     * and requested quality level.
     *
     * - `next`: Trigger a quality level switch for next fragment. This could eventually flush
     * already buffered next fragment.
     *
     * - `load`: Set quality level for next loaded fragment.
     *
     * @see {@link https://vidstack.io/docs/player/core-concepts/quality#switch}
     * @see {@link https://github.com/video-dev/hls.js/blob/master/docs/API.md#quality-switch-control-api}
     */
    this.switch = "current";
  }
  /**
   * Whether automatic quality selection is enabled.
   */
  get auto() {
    return this._auto || this.readonly;
  }
  /* @internal */
  [(_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onUserSelect)]() {
    this[_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._setAuto](false);
  }
  /* @internal */
  [_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._onReset](trigger) {
    this[_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._setAuto](false, trigger);
  }
  /**
   * Request automatic quality selection (if supported). This will be a no-op if the list is
   * `readonly` as that already implies auto-selection.
   */
  autoSelect(trigger) {
    if (this.readonly || this._auto || !this[_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._enableAuto])
      return;
    this[_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._enableAuto]?.();
    this[_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._setAuto](true, trigger);
  }
  /* @internal */
  [_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.Q._setAuto](auto, trigger) {
    if (this._auto === auto)
      return;
    this._auto = auto;
    this.dispatchEvent(
      new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("auto-change", {
        detail: auto,
        trigger
      })
    );
  }
}

function isAudioProvider(provider) {
  return provider?.$$PROVIDER_TYPE === "AUDIO";
}
function isVideoProvider(provider) {
  return provider?.$$PROVIDER_TYPE === "VIDEO";
}
function isHLSProvider(provider) {
  return provider?.$$PROVIDER_TYPE === "HLS";
}
function isHTMLAudioElement(element) {
  return element instanceof HTMLAudioElement;
}
function isHTMLVideoElement(element) {
  return element instanceof HTMLVideoElement;
}
function isHTMLMediaElement(element) {
  return isHTMLAudioElement(element) || isHTMLVideoElement(element);
}

const MEDIA_KEY_SHORTCUTS = {
  togglePaused: "k Space",
  toggleMuted: "m",
  toggleFullscreen: "f",
  togglePictureInPicture: "i",
  toggleCaptions: "c",
  seekBackward: "ArrowLeft",
  seekForward: "ArrowRight",
  volumeUp: "ArrowUp",
  volumeDown: "ArrowDown"
};
const MODIFIER_KEYS = /* @__PURE__ */ new Set(["Shift", "Alt", "Meta", "Control"]), BUTTON_SELECTORS = 'button, [role="button"]', IGNORE_SELECTORS = 'input, textarea, select, [contenteditable], [role^="menuitem"]';
class MediaKeyboardController extends MediaPlayerController {
  constructor(_media) {
    super();
    this._media = _media;
    this._timeSlider = null;
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onTargetChange.bind(this));
  }
  _onTargetChange() {
    const { keyDisabled, keyTarget } = this.$props;
    if (keyDisabled())
      return;
    const target = keyTarget() === "player" ? this.el : document, $active = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    if (target === this.el) {
      this.listen("focusin", () => $active.set(true));
      this.listen("focusout", (event) => {
        if (!this.el.contains(event.target))
          $active.set(false);
      });
    } else {
      if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)($active))
        $active.set(document.querySelector("[data-media-player]") === this.el);
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "focusin", (event) => {
        const activePlayer = event.composedPath().find((el) => el instanceof Element && el.localName === "media-player");
        if (activePlayer !== void 0)
          $active.set(this.el === activePlayer);
      });
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      if (!$active())
        return;
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, "keyup", this._onKeyUp.bind(this));
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, "keydown", this._onKeyDown.bind(this));
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, "keydown", this._onPreventVideoKeys.bind(this), { capture: true });
    });
  }
  _onKeyUp(event) {
    const focused = document.activeElement, sliderFocused = focused?.classList.contains("vds-slider");
    if (!event.key || !this.$state.canSeek() || sliderFocused || focused?.matches(IGNORE_SELECTORS)) {
      return;
    }
    const method = this._getMatchingMethod(event);
    if (method?.startsWith("seek")) {
      event.preventDefault();
      event.stopPropagation();
      if (this._timeSlider) {
        this._forwardTimeKeyboardEvent(event);
        this._timeSlider = null;
      } else {
        this._media.remote.seek(this._seekTotal, event);
        this._seekTotal = void 0;
      }
    }
    if (method?.startsWith("volume")) {
      const volumeSlider = this.el.querySelector("[data-media-volume-slider]");
      volumeSlider?.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("keyup", { trigger: event }));
    }
  }
  _onKeyDown(event) {
    if (!event.key || MODIFIER_KEYS.has(event.key))
      return;
    const focused = document.activeElement;
    if (focused?.matches(IGNORE_SELECTORS) || (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.i)(event) && focused?.matches(BUTTON_SELECTORS)) {
      return;
    }
    const sliderFocused = focused?.classList.contains("vds-slider"), method = this._getMatchingMethod(event);
    if (!method && !event.metaKey && /[0-9]/.test(event.key) && !sliderFocused) {
      event.preventDefault();
      event.stopPropagation();
      this._media.remote.seek(this.$state.duration() / 10 * Number(event.key), event);
      return;
    }
    if (!method || /volume|seek/.test(method) && sliderFocused)
      return;
    event.preventDefault();
    event.stopPropagation();
    switch (method) {
      case "seekForward":
      case "seekBackward":
        this._seeking(event, method);
        break;
      case "volumeUp":
      case "volumeDown":
        const volumeSlider = this.el.querySelector("[data-media-volume-slider]");
        if (volumeSlider) {
          volumeSlider.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("keydown", { trigger: event }));
        } else {
          const value = event.shiftKey ? 0.1 : 0.05;
          this._media.remote.changeVolume(
            this.$state.volume() + (method === "volumeUp" ? +value : -value),
            event
          );
        }
        break;
      case "toggleFullscreen":
        this._media.remote.toggleFullscreen("prefer-media", event);
        break;
      default:
        this._media.remote[method]?.(event);
    }
  }
  _onPreventVideoKeys(event) {
    if (isHTMLMediaElement(event.target) && this._getMatchingMethod(event)) {
      event.preventDefault();
    }
  }
  _getMatchingMethod(event) {
    const keyShortcuts = {
      ...this.$props.keyShortcuts(),
      ...this._media.ariaKeys
    };
    return Object.keys(keyShortcuts).find(
      (method) => keyShortcuts[method].split(" ").some(
        (keys) => replaceSymbolKeys(keys).replace(/Control/g, "Ctrl").split("+").every(
          (key) => MODIFIER_KEYS.has(key) ? event[key.toLowerCase() + "Key"] : event.key === key.replace("Space", " ")
        )
      )
    );
  }
  _calcSeekAmount(event, type) {
    const seekBy = event.shiftKey ? 10 : 5;
    return this._seekTotal = Math.max(
      0,
      Math.min(
        (this._seekTotal ?? this.$state.currentTime()) + (type === "seekForward" ? +seekBy : -seekBy),
        this.$state.duration()
      )
    );
  }
  _forwardTimeKeyboardEvent(event) {
    this._timeSlider?.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(event.type, { trigger: event }));
  }
  _seeking(event, type) {
    if (!this.$state.canSeek())
      return;
    if (!this._timeSlider)
      this._timeSlider = this.el.querySelector("[data-media-time-slider]");
    if (this._timeSlider) {
      this._forwardTimeKeyboardEvent(event);
    } else {
      this._media.remote.seeking(this._calcSeekAmount(event, type), event);
    }
  }
}
const SYMBOL_KEY_MAP = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function replaceSymbolKeys(key) {
  return key.replace(/Shift\+(\d)/g, (_, num) => SYMBOL_KEY_MAP[num - 1]);
}

class ARIAKeyShortcuts extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor(_shortcut) {
    super();
    this._shortcut = _shortcut;
  }
  onAttach(el) {
    const { $props, ariaKeys } = useMediaContext(), keys = el.getAttribute("aria-keyshortcuts");
    if (keys) {
      ariaKeys[this._shortcut] = keys;
      {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
          delete ariaKeys[this._shortcut];
        });
      }
      return;
    }
    const shortcuts = $props.keyShortcuts()[this._shortcut];
    if (shortcuts)
      el.setAttribute("aria-keyshortcuts", shortcuts);
  }
}

class AudioProviderLoader {
  canPlay({ src, type }) {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src) ? _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.A.test(src) || _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.l.has(type) || src.startsWith("blob:") && type === "audio/object" : type === "audio/object";
  }
  mediaType() {
    return "audio";
  }
  async load() {
    if (!this.target) {
      throw Error(
        "[vidstack] `<audio>` element was not found - did you forget to include `<media-provider>`?"
      );
    }
    return new (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../providers/vidstack-audio.js */ "./node_modules/vidstack/dist/dev/providers/vidstack-audio.js"))).AudioProvider(this.target);
  }
}

class VideoProviderLoader {
  canPlay(src) {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src.src) ? _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.V.test(src.src) || _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.m.has(src.type) || src.src.startsWith("blob:") && src.type === "video/object" || (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.h)(src) && (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.b)() : src.type === "video/object";
  }
  mediaType() {
    return "video";
  }
  async load(context) {
    if (!this.target) {
      throw Error(
        "[vidstack] `<video>` element was not found - did you forget to include media provider?"
      );
    }
    return new (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../providers/vidstack-video.js */ "./node_modules/vidstack/dist/dev/providers/vidstack-video.js"))).VideoProvider(this.target, context);
  }
}

class HLSProviderLoader extends VideoProviderLoader {
  static {
    this.supported = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.i)();
  }
  preconnect() {
    (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.p)("https://cdn.jsdelivr.net", "preconnect");
  }
  canPlay({ src, type }) {
    return HLSProviderLoader.supported && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src) && (_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.H.test(src) || _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.n.has(type));
  }
  async load(context) {
    if (!this.target) {
      throw Error(
        "[vidstack] `<video>` element was not found - did you forget to include `<media-provider>`?"
      );
    }
    return new (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../providers/vidstack-hls.js */ "./node_modules/vidstack/dist/dev/providers/vidstack-hls.js"))).HLSProvider(this.target, context);
  }
}

const MEDIA_ATTRIBUTES = Symbol("MEDIA_ATTRIBUTES" );
const mediaAttributes = [
  "autoplay",
  "autoplayError",
  "canFullscreen",
  "canPictureInPicture",
  "canLoad",
  "canPlay",
  "canSeek",
  "ended",
  "fullscreen",
  "loop",
  "live",
  "liveEdge",
  "mediaType",
  "muted",
  "paused",
  "pictureInPicture",
  "playing",
  "playsinline",
  "seeking",
  "started",
  "streamType",
  "viewType",
  "waiting"
];

const mediaPlayerProps = {
  autoplay: false,
  controls: false,
  currentTime: 0,
  crossorigin: null,
  fullscreenOrientation: "landscape",
  load: "visible",
  logLevel: "warn" ,
  loop: false,
  muted: false,
  paused: true,
  playsinline: false,
  playbackRate: 1,
  poster: "",
  preload: "metadata",
  preferNativeHLS: false,
  src: "",
  controlsDelay: 2e3,
  viewType: "unknown",
  streamType: "unknown",
  volume: 1,
  liveEdgeTolerance: 10,
  minLiveDVRWindow: 60,
  keyDisabled: false,
  keyTarget: "player",
  keyShortcuts: MEDIA_KEY_SHORTCUTS,
  title: ""
};

const MEDIA_EVENTS = [
  "abort",
  "can-play",
  "can-play-through",
  "duration-change",
  "emptied",
  "ended",
  "error",
  "fullscreen-change",
  "loaded-data",
  "loaded-metadata",
  "load-start",
  "media-type-change",
  "pause",
  "play",
  "playing",
  "progress",
  "seeked",
  "seeking",
  "source-change",
  "sources-change",
  "stalled",
  "started",
  "suspend",
  "stream-type-change",
  "replay",
  // 'time-update',
  "view-type-change",
  "volume-change",
  "waiting"
] ;
class MediaEventsLogger extends MediaPlayerController {
  constructor(_media) {
    super();
    this._media = _media;
  }
  onConnect() {
    const handler = this._onMediaEvent.bind(this);
    for (const eventType of MEDIA_EVENTS)
      this.listen(eventType, handler);
  }
  _onMediaEvent(event) {
    this._media.logger?.debugGroup(`\u{1F4E1} dispatching \`${event.type}\``).labelledLog("Media Store", { ...this.$state }).labelledLog("Event", event).dispatch();
  }
}

class MediaLoadController extends MediaPlayerController {
  constructor(_callback) {
    super();
    this._callback = _callback;
  }
  async onAttach(el) {
    const load = this.$props.load();
    if (load === "eager") {
      requestAnimationFrame(this._callback);
    } else if (load === "idle") {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.R)(this._callback);
    } else if (load === "visible") {
      const observer = new IntersectionObserver((entries) => {
        if (!this.scope)
          return;
        if (entries[0].isIntersecting) {
          observer.disconnect();
          this._callback();
        }
      });
      observer.observe(el);
      return observer.disconnect.bind(observer);
    }
  }
}

let seenAutoplayWarning = false;
class MediaPlayerDelegate {
  constructor(_handle, _media) {
    this._handle = _handle;
    this._media = _media;
  }
  _dispatch(type, ...init) {
    this._handle(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(type, init?.[0]));
  }
  async _ready(info, trigger) {
    const { $state, logger } = this._media;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)($state.canPlay))
      return;
    this._dispatch("can-play", { detail: info, trigger });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
    {
      logger?.infoGroup("-~-~-~-~-~-~- \u2705 MEDIA READY -~-~-~-~-~-~-").labelledLog("Media Store", { ...$state }).labelledLog("Trigger Event", trigger).dispatch();
    }
    if ($state.canPlay() && $state.autoplay() && !$state.started()) {
      await this._attemptAutoplay();
    }
  }
  async _attemptAutoplay() {
    const { player, $state } = this._media;
    $state.autoplaying.set(true);
    try {
      await player.play();
      this._dispatch("autoplay", { detail: { muted: $state.muted() } });
    } catch (error) {
      if (!seenAutoplayWarning) {
        const muteMsg = !$state.muted() ? " Attempting with volume muted will most likely resolve the issue." : "";
        this._media.logger?.errorGroup("autoplay request failed").labelledLog(
          "Message",
          `Autoplay was requested but failed most likely due to browser autoplay policies.${muteMsg}`
        ).labelledLog("Error", error).labelledLog("See", "https://developer.chrome.com/blog/autoplay").dispatch();
        seenAutoplayWarning = true;
      }
      this._dispatch("autoplay-fail", {
        detail: {
          muted: $state.muted(),
          error
        }
      });
    } finally {
      $state.autoplaying.set(false);
    }
  }
}

class Queue {
  constructor() {
    this._queue = /* @__PURE__ */ new Map();
  }
  /**
   * Queue the given `item` under the given `key` to be processed at a later time by calling
   * `serve(key)`.
   */
  _enqueue(key, item) {
    if (!this._queue.has(key))
      this._queue.set(key, /* @__PURE__ */ new Set());
    this._queue.get(key).add(item);
  }
  /**
   * Process all items in queue for the given `key`.
   */
  _serve(key, callback) {
    const items = this._queue.get(key);
    if (items)
      for (const item of items)
        callback(item);
    this._queue.delete(key);
  }
  /**
   * Removes all queued items under the given `key`.
   */
  _delete(key) {
    this._queue.delete(key);
  }
  /**
   * The number of items currently queued under the given `key`.
   */
  _size(key) {
    return this._queue.get(key)?.size ?? 0;
  }
  /**
   * Clear all items in the queue.
   */
  _reset() {
    this._queue.clear();
  }
}

class MediaRequestContext {
  constructor() {
    this._seeking = false;
    this._looping = false;
    this._replaying = false;
    this._queue = new Queue();
  }
}
class MediaRequestManager extends MediaPlayerController {
  constructor(_stateMgr, _request, _media) {
    super();
    this._stateMgr = _stateMgr;
    this._request = _request;
    this._media = _media;
    this._wasPIPActive = false;
    this._provider = _media.$provider;
    this._controls = new MediaControls();
    this._fullscreen = new FullscreenController();
    this._orientation = new ScreenOrientationController();
  }
  onConnect() {
    const names = Object.getOwnPropertyNames(Object.getPrototypeOf(this)), handle = this._handleRequest.bind(this);
    for (const name of names) {
      if (name.startsWith("media-")) {
        this.listen(name, handle);
      }
    }
    this.listen("fullscreen-change", this._onFullscreenChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onControlsHideDelayChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onFullscreenSupportChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onPiPSupportChange.bind(this));
  }
  _handleRequest(event) {
    event.stopPropagation();
    {
      this._media.logger?.infoGroup(`\u{1F4EC} received \`${event.type}\``).labelledLog("Request", event).dispatch();
    }
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider))
      this[event.type]?.(event);
  }
  async _play(requestEvent) {
    const { canPlay, paused, ended, autoplaying, seekableStart } = this.$state;
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(paused))
      return;
    try {
      const provider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider);
      throwIfNotReadyForPlayback(provider, (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(canPlay));
      if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(ended)) {
        provider.currentTime = seekableStart() + 0.1;
      }
      return await provider.play();
    } catch (error) {
      {
        this._media.logger?.errorGroup("play request failed").labelledLog("Request", requestEvent).labelledLog("Error", error).dispatch();
      }
      const errorEvent = this.createEvent("play-fail", { detail: (0,_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.c)(error) });
      errorEvent.autoplay = autoplaying();
      this._stateMgr._handle(errorEvent);
      throw error;
    }
  }
  async _pause() {
    const { canPlay, paused } = this.$state;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(paused))
      return;
    const provider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider);
    throwIfNotReadyForPlayback(provider, (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(canPlay));
    return provider.pause();
  }
  _seekToLiveEdge() {
    const { canPlay, live, liveEdge, canSeek, liveSyncPosition, seekableEnd, userBehindLiveEdge } = this.$state;
    userBehindLiveEdge.set(false);
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => !live() || liveEdge() || !canSeek()))
      return;
    const provider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider);
    throwIfNotReadyForPlayback(provider, (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(canPlay));
    provider.currentTime = liveSyncPosition() ?? seekableEnd() - 2;
  }
  async _enterFullscreen(target = "prefer-media") {
    const provider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider);
    const adapter = target === "prefer-media" && this._fullscreen.supported || target === "media" ? this._fullscreen : provider?.fullscreen;
    throwIfFullscreenNotSupported(target, adapter);
    if (adapter.active)
      return;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$state.pictureInPicture)) {
      this._wasPIPActive = true;
      await this._exitPictureInPicture();
    }
    return adapter.enter();
  }
  async _exitFullscreen(target = "prefer-media") {
    const provider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._provider);
    const adapter = target === "prefer-media" && this._fullscreen.supported || target === "media" ? this._fullscreen : provider?.fullscreen;
    throwIfFullscreenNotSupported(target, adapter);
    if (!adapter.active)
      return;
    if (this._orientation.locked)
      await this._orientation.unlock();
    try {
      const result = await adapter.exit();
      if (this._wasPIPActive && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$state.canPictureInPicture)) {
        await this._enterPictureInPicture();
      }
      return result;
    } finally {
      this._wasPIPActive = false;
    }
  }
  async _enterPictureInPicture() {
    this._throwIfPIPNotSupported();
    if (this.$state.pictureInPicture())
      return;
    return await this._provider().pictureInPicture.enter();
  }
  async _exitPictureInPicture() {
    this._throwIfPIPNotSupported();
    if (!this.$state.pictureInPicture())
      return;
    return await this._provider().pictureInPicture.exit();
  }
  _throwIfPIPNotSupported() {
    if (this.$state.canPictureInPicture())
      return;
    throw Error(
      `[vidstack] picture-in-picture is not currently available` 
    );
  }
  _onControlsHideDelayChange() {
    this._controls.defaultDelay = this.$props.controlsDelay();
  }
  _onFullscreenSupportChange() {
    const { canLoad, canFullscreen } = this.$state, supported = this._fullscreen.supported || this._provider()?.fullscreen?.supported || false;
    if (canLoad() && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(canFullscreen) === supported)
      return;
    canFullscreen.set(supported);
  }
  _onPiPSupportChange() {
    const { canLoad, canPictureInPicture } = this.$state, supported = this._provider()?.pictureInPicture?.supported || false;
    if (canLoad() && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(canPictureInPicture) === supported)
      return;
    canPictureInPicture.set(supported);
  }
  ["media-audio-track-change-request"](event) {
    if (this._media.audioTracks.readonly) {
      {
        this._media.logger?.warnGroup(`[vidstack] attempted to change audio track but it is currently read-only`).labelledLog("Event", event).dispatch();
      }
      return;
    }
    const index = event.detail, track = this._media.audioTracks[index];
    if (track) {
      this._request._queue._enqueue("audioTrack", event);
      track.selected = true;
    } else {
      this._media.logger?.warnGroup("[vidstack] failed audio track change request (invalid index)").labelledLog("Audio Tracks", this._media.audioTracks.toArray()).labelledLog("Index", index).labelledLog("Event", event).dispatch();
    }
  }
  async ["media-enter-fullscreen-request"](event) {
    try {
      this._request._queue._enqueue("fullscreen", event);
      await this._enterFullscreen(event.detail);
    } catch (error) {
      this._onFullscreenError(error, event);
    }
  }
  async ["media-exit-fullscreen-request"](event) {
    try {
      this._request._queue._enqueue("fullscreen", event);
      await this._exitFullscreen(event.detail);
    } catch (error) {
      this._onFullscreenError(error, event);
    }
  }
  async _onFullscreenChange(event) {
    if (!event.detail)
      return;
    try {
      const lockType = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$props.fullscreenOrientation);
      if (this._orientation.supported && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(lockType)) {
        await this._orientation.lock(lockType);
      }
    } catch (error) {
      {
        this._media.logger?.errorGroup("fullscreen orientation change failed").labelledLog("Event", event).labelledLog("Error", error).dispatch();
      }
    }
  }
  _onFullscreenError(error, request) {
    {
      this._media.logger?.errorGroup("fullscreen request failed").labelledLog("Request", request).labelledLog("Error", error).dispatch();
    }
    this._stateMgr._handle(
      this.createEvent("fullscreen-error", {
        detail: (0,_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.c)(error)
      })
    );
  }
  async ["media-enter-pip-request"](event) {
    try {
      this._request._queue._enqueue("pip", event);
      await this._enterPictureInPicture();
    } catch (error) {
      this._onPictureInPictureError(error, event);
    }
  }
  async ["media-exit-pip-request"](event) {
    try {
      this._request._queue._enqueue("pip", event);
      await this._exitPictureInPicture();
    } catch (error) {
      this._onPictureInPictureError(error, event);
    }
  }
  _onPictureInPictureError(error, request) {
    {
      this._media.logger?.errorGroup("pip request failed").labelledLog("Request", request).labelledLog("Error", error).dispatch();
    }
    this._stateMgr._handle(
      this.createEvent("picture-in-picture-error", {
        detail: (0,_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_3__.c)(error)
      })
    );
  }
  ["media-live-edge-request"](event) {
    const { live, liveEdge, canSeek } = this.$state;
    if (!live() || liveEdge() || !canSeek())
      return;
    this._request._queue._enqueue("seeked", event);
    try {
      this._seekToLiveEdge();
    } catch (error) {
      this._media.logger?.error("seek to live edge fail", error);
    }
  }
  ["media-loop-request"](event) {
    window.requestAnimationFrame(async () => {
      try {
        this._request._looping = true;
        this._request._replaying = true;
        await this._play(event);
      } catch (e) {
        this._request._looping = false;
        this._request._replaying = false;
      }
    });
  }
  async ["media-pause-request"](event) {
    if (this.$state.paused())
      return;
    try {
      this._request._queue._enqueue("pause", event);
      await this._provider().pause();
    } catch (error) {
      {
        this._media.logger?.errorGroup("\u03C0ause request failed").labelledLog("Request", event).labelledLog("Error", error).dispatch();
      }
      this._request._queue._delete("pause");
      this._media.logger?.error("pause-fail", error);
    }
  }
  async ["media-play-request"](event) {
    if (!this.$state.paused())
      return;
    try {
      this._request._queue._enqueue("play", event);
      await this._play(event);
    } catch (e) {
    }
  }
  ["media-rate-change-request"](event) {
    if (this.$state.playbackRate() === event.detail)
      return;
    this._request._queue._enqueue("rate", event);
    this._provider().playbackRate = event.detail;
  }
  ["media-quality-change-request"](event) {
    if (this._media.qualities.readonly) {
      {
        this._media.logger?.warnGroup(`[vidstack] attempted to change video quality but it is currently read-only`).labelledLog("Event", event).dispatch();
      }
      return;
    }
    this._request._queue._enqueue("quality", event);
    const index = event.detail;
    if (index < 0) {
      this._media.qualities.autoSelect(event);
    } else {
      const quality = this._media.qualities[index];
      if (quality) {
        quality.selected = true;
      } else {
        this._media.logger?.warnGroup("[vidstack] failed quality change request (invalid index)").labelledLog("Qualities", this._media.qualities.toArray()).labelledLog("Index", index).labelledLog("Event", event).dispatch();
      }
    }
  }
  ["media-pause-controls-request"](event) {
    this._request._queue._enqueue("controls", event);
    this._controls.pause(event);
  }
  ["media-resume-controls-request"](event) {
    this._request._queue._enqueue("controls", event);
    this._controls.resume(event);
  }
  ["media-seek-request"](event) {
    const { seekableStart, seekableEnd, ended, canSeek, live, userBehindLiveEdge } = this.$state;
    if (ended())
      this._request._replaying = true;
    this._request._seeking = false;
    this._request._queue._delete("seeking");
    const boundTime = Math.min(Math.max(seekableStart() + 0.1, event.detail), seekableEnd() - 0.1);
    if (!Number.isFinite(boundTime) || !canSeek())
      return;
    this._request._queue._enqueue("seeked", event);
    this._provider().currentTime = boundTime;
    if (live() && event.isOriginTrusted && Math.abs(seekableEnd() - boundTime) >= 2) {
      userBehindLiveEdge.set(true);
    }
  }
  ["media-seeking-request"](event) {
    this._request._queue._enqueue("seeking", event);
    this.$state.seeking.set(true);
    this._request._seeking = true;
  }
  ["media-start-loading"](event) {
    if (this.$state.canLoad())
      return;
    this._request._queue._enqueue("load", event);
    this._stateMgr._handle(this.createEvent("can-load"));
  }
  ["media-text-track-change-request"](event) {
    const { index, mode } = event.detail, track = this._media.textTracks[index];
    if (track) {
      this._request._queue._enqueue("textTrack", event);
      track.setMode(mode, event);
    } else {
      this._media.logger?.warnGroup("[vidstack] failed text track change request (invalid index)").labelledLog("Text Tracks", this._media.textTracks.toArray()).labelledLog("Index", index).labelledLog("Event", event).dispatch();
    }
  }
  ["media-mute-request"](event) {
    if (this.$state.muted())
      return;
    this._request._queue._enqueue("volume", event);
    this._provider().muted = true;
  }
  ["media-unmute-request"](event) {
    const { muted, volume } = this.$state;
    if (!muted())
      return;
    this._request._queue._enqueue("volume", event);
    this._media.$provider().muted = false;
    if (volume() === 0) {
      this._request._queue._enqueue("volume", event);
      this._provider().volume = 0.25;
    }
  }
  ["media-volume-change-request"](event) {
    const { muted, volume } = this.$state;
    const newVolume = event.detail;
    if (volume() === newVolume)
      return;
    this._request._queue._enqueue("volume", event);
    this._provider().volume = newVolume;
    if (newVolume > 0 && muted()) {
      this._request._queue._enqueue("volume", event);
      this._provider().muted = false;
    }
  }
}
function throwIfNotReadyForPlayback(provider, canPlay) {
  if (provider && canPlay)
    return;
  throw Error(
    `[vidstack] media is not ready - wait for \`can-play\` event.` 
  );
}
function throwIfFullscreenNotSupported(target, fullscreen) {
  if (fullscreen?.supported)
    return;
  throw Error(
    `[vidstack] fullscreen is not currently available on target \`${target}\`` 
  );
}

var functionDebounce = debounce;

function debounce(fn, wait, callFirst) {
  var timeout = null;
  var debouncedFn = null;

  var clear = function() {
    if (timeout) {
      clearTimeout(timeout);

      debouncedFn = null;
      timeout = null;
    }
  };

  var flush = function() {
    var call = debouncedFn;
    clear();

    if (call) {
      call();
    }
  };

  var debounceWrapper = function() {
    if (!wait) {
      return fn.apply(this, arguments);
    }

    var context = this;
    var args = arguments;
    var callNow = callFirst && !timeout;
    clear();

    debouncedFn = function() {
      fn.apply(context, args);
    };

    timeout = setTimeout(function() {
      timeout = null;

      if (!callNow) {
        var call = debouncedFn;
        debouncedFn = null;

        return call();
      }
    }, wait);

    if (callNow) {
      return debouncedFn();
    }
  };

  debounceWrapper.cancel = clear;
  debounceWrapper.flush = flush;

  return debounceWrapper;
}

var functionThrottle = throttle;

function throttle(fn, interval, options) {
  var timeoutId = null;
  var throttledFn = null;
  var leading = (options && options.leading);
  var trailing = (options && options.trailing);

  if (leading == null) {
    leading = true; // default
  }

  if (trailing == null) {
    trailing = !leading; //default
  }

  if (leading == true) {
    trailing = false; // forced because there should be invocation per call
  }

  var cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  var flush = function() {
    var call = throttledFn;
    cancel();

    if (call) {
      call();
    }
  };

  var throttleWrapper = function() {
    var callNow = leading && !timeoutId;
    var context = this;
    var args = arguments;

    throttledFn = function() {
      return fn.apply(context, args);
    };

    if (!timeoutId) {
      timeoutId = setTimeout(function() {
        timeoutId = null;

        if (trailing) {
          return throttledFn();
        }
      }, interval);
    }

    if (callNow) {
      callNow = false;
      return throttledFn();
    }
  };

  throttleWrapper.cancel = cancel;
  throttleWrapper.flush = flush;

  return throttleWrapper;
}

const TRACKED_EVENT = /* @__PURE__ */ new Set([
  "autoplay",
  "autoplay-fail",
  "can-load",
  "sources-change",
  "source-change",
  "load-start",
  "abort",
  "error",
  "loaded-metadata",
  "loaded-data",
  "can-play",
  "play",
  "play-fail",
  "pause",
  "playing",
  "seeking",
  "seeked",
  "waiting"
]);

class MediaStateManager extends MediaPlayerController {
  constructor(_request, _media) {
    super();
    this._request = _request;
    this._media = _media;
    this._trackedEvents = /* @__PURE__ */ new Map();
    this._firingWaiting = false;
    this["seeking"] = functionThrottle(
      (event) => {
        const { seeking, currentTime, paused } = this.$state;
        seeking.set(true);
        currentTime.set(event.detail);
        this._satisfyRequest("seeking", event);
        if (paused()) {
          this._waitingTrigger = event;
          this._fireWaiting();
        }
      },
      150,
      { leading: true }
    );
    this._fireWaiting = functionDebounce(() => {
      if (!this._waitingTrigger)
        return;
      this._firingWaiting = true;
      const { waiting, playing } = this.$state;
      waiting.set(true);
      playing.set(false);
      const event = this.createEvent("waiting", { trigger: this._waitingTrigger });
      this._trackedEvents.set("waiting", event);
      this.dispatch(event);
      this._waitingTrigger = void 0;
      this._firingWaiting = false;
    }, 300);
  }
  onAttach(el) {
    el.setAttribute("aria-busy", "true");
  }
  onConnect(el) {
    this._addTextTrackListeners();
    this._addQualityListeners();
    this._addAudioTrackListeners();
    this.listen("fullscreen-change", this["fullscreen-change"].bind(this));
    this.listen("fullscreen-error", this["fullscreen-error"].bind(this));
    if (!this._media.$state.paused()) {
      requestAnimationFrame(() => {
        this._media.$provider()?.play();
      });
    }
  }
  _handle(event) {
    const type = event.type;
    this[event.type]?.(event);
    {
      if (TRACKED_EVENT.has(type))
        this._trackedEvents.set(type, event);
      this.dispatch(event);
    }
  }
  _resetTracking() {
    this._stopWaiting();
    this._request._replaying = false;
    this._request._looping = false;
    this._firingWaiting = false;
    this._waitingTrigger = void 0;
    this._trackedEvents.clear();
  }
  _satisfyRequest(request, event) {
    this._request._queue._serve(request, (requestEvent) => {
      event.request = requestEvent;
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, requestEvent);
    });
  }
  _addTextTrackListeners() {
    this._onTextTracksChange();
    this._onTextTrackModeChange();
    const textTracks = this._media.textTracks;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "add", this._onTextTracksChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "remove", this._onTextTracksChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTracks, "mode-change", this._onTextTrackModeChange.bind(this));
  }
  _addQualityListeners() {
    const qualities = this._media.qualities;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(qualities, "add", this._onQualitiesChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(qualities, "remove", this._onQualitiesChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(qualities, "change", this._onQualityChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(qualities, "auto-change", this._onAutoQualityChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(qualities, "readonly-change", this._onCanSetQualityChange.bind(this));
  }
  _addAudioTrackListeners() {
    const audioTracks = this._media.audioTracks;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(audioTracks, "add", this._onAudioTracksChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(audioTracks, "remove", this._onAudioTracksChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(audioTracks, "change", this._onAudioTrackChange.bind(this));
  }
  _onTextTracksChange(event) {
    const { textTracks } = this.$state;
    textTracks.set(this._media.textTracks.toArray());
    this.dispatch("text-tracks-change", {
      detail: textTracks(),
      trigger: event
    });
  }
  _onTextTrackModeChange(event) {
    if (event)
      this._satisfyRequest("textTrack", event);
    const current = this._media.textTracks.selected, { textTrack } = this.$state;
    if (textTrack() !== current) {
      textTrack.set(current);
      this.dispatch("text-track-change", {
        detail: current,
        trigger: event
      });
    }
  }
  _onAudioTracksChange(event) {
    const { audioTracks } = this.$state;
    audioTracks.set(this._media.audioTracks.toArray());
    this.dispatch("audio-tracks-change", {
      detail: audioTracks(),
      trigger: event
    });
  }
  _onAudioTrackChange(event) {
    const { audioTrack } = this.$state;
    audioTrack.set(this._media.audioTracks.selected);
    this._satisfyRequest("audioTrack", event);
    this.dispatch("audio-track-change", {
      detail: audioTrack(),
      trigger: event
    });
  }
  _onQualitiesChange(event) {
    const { qualities } = this.$state;
    qualities.set(this._media.qualities.toArray());
    this.dispatch("qualities-change", {
      detail: qualities(),
      trigger: event
    });
  }
  _onQualityChange(event) {
    const { quality } = this.$state;
    quality.set(this._media.qualities.selected);
    this._satisfyRequest("quality", event);
    this.dispatch("quality-change", {
      detail: quality(),
      trigger: event
    });
  }
  _onAutoQualityChange() {
    this.$state.autoQuality.set(this._media.qualities.auto);
  }
  _onCanSetQualityChange() {
    this.$state.canSetQuality.set(!this._media.qualities.readonly);
  }
  ["provider-change"](event) {
    const prevProvider = this._media.$provider(), newProvider = event.detail;
    if (prevProvider?.type === newProvider?.type)
      return;
    prevProvider?.destroy?.();
    this._media.$provider.set(event.detail);
    if (prevProvider && event.detail === null)
      this._resetMediaState(event);
  }
  ["provider-loader-change"](event) {
    {
      this._media.logger?.infoGroup(`Loader change \`${event.detail?.constructor.name}\``).labelledLog("Event", event).dispatch();
    }
  }
  ["autoplay"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("play"));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("can-play"));
    this.$state.autoplayError.set(void 0);
  }
  ["autoplay-fail"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("play-fail"));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("can-play"));
    this.$state.autoplayError.set(event.detail);
    this._resetTracking();
  }
  ["can-load"](event) {
    this.$state.canLoad.set(true);
    this._trackedEvents.set("can-load", event);
    this._satisfyRequest("load", event);
    this._media.textTracks[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._canLoad]();
  }
  ["media-type-change"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("source-change"));
    const viewType = this.$state.viewType();
    this.$state.mediaType.set(event.detail);
    const providedViewType = this.$state.providedViewType(), currentViewType = providedViewType === "unknown" ? event.detail : providedViewType;
    if (viewType !== currentViewType) {
      {
        setTimeout(() => {
          requestAnimationFrame(() => {
            if (!this.scope)
              return;
            this.$state.inferredViewType.set(event.detail);
            this.dispatch("view-type-change", {
              detail: currentViewType,
              trigger: event
            });
          });
        }, 0);
      }
    }
  }
  ["stream-type-change"](event) {
    const { streamType, inferredStreamType } = this.$state;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("source-change"));
    inferredStreamType.set(event.detail);
    event.detail = streamType();
  }
  ["rate-change"](event) {
    this.$state.playbackRate.set(event.detail);
    this._satisfyRequest("rate", event);
  }
  ["sources-change"](event) {
    this.$state.sources.set(event.detail);
  }
  ["source-change"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("sources-change"));
    this._resetMediaState(event);
    this._trackedEvents.set(event.type, event);
    this.$state.source.set(event.detail);
    this.el?.setAttribute("aria-busy", "true");
    {
      this._media.logger?.infoGroup("\u{1F4FC} Media source change").labelledLog("Source", event.detail).dispatch();
    }
  }
  _resetMediaState(event) {
    this._media.audioTracks[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._reset](event);
    this._media.qualities[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._reset](event);
    this._resetTracking();
    softResetMediaState(this._media.$state);
  }
  ["abort"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("source-change"));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("can-load"));
  }
  ["load-start"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("source-change"));
  }
  ["error"](event) {
    this.$state.error.set(event.detail);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("abort"));
  }
  ["loaded-metadata"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("load-start"));
  }
  ["loaded-data"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("load-start"));
  }
  ["can-play"](event) {
    if (event.trigger?.type !== "loadedmetadata") {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("loaded-metadata"));
    }
    this._onCanPlayDetail(event.detail);
    this.el?.setAttribute("aria-busy", "false");
  }
  ["can-play-through"](event) {
    this._onCanPlayDetail(event.detail);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("can-play"));
  }
  _onCanPlayDetail(detail) {
    const { seekable, seekableEnd, buffered, duration, canPlay } = this.$state;
    seekable.set(detail.seekable);
    buffered.set(detail.buffered);
    duration.set(seekableEnd);
    canPlay.set(true);
  }
  ["duration-change"](event) {
    const { live, duration } = this.$state, time = event.detail;
    if (!live())
      duration.set(!Number.isNaN(time) ? time : 0);
  }
  ["progress"](event) {
    const { buffered, seekable, live, duration, seekableEnd } = this.$state, detail = event.detail;
    buffered.set(detail.buffered);
    seekable.set(detail.seekable);
    if (live()) {
      duration.set(seekableEnd);
      this.dispatch("duration-change", {
        detail: seekableEnd(),
        trigger: event
      });
    }
  }
  ["play"](event) {
    const { paused, autoplayError, ended, autoplaying } = this.$state;
    event.autoplay = autoplaying();
    if (this._request._looping || !paused()) {
      event.stopImmediatePropagation();
      return;
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("waiting"));
    this._satisfyRequest("play", event);
    paused.set(false);
    autoplayError.set(void 0);
    if (ended() || this._request._replaying) {
      this._request._replaying = false;
      ended.set(false);
      this._handle(this.createEvent("replay", { trigger: event }));
    }
  }
  ["play-fail"](event) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("play"));
    this._satisfyRequest("play", event);
    const { paused, playing } = this.$state;
    paused.set(true);
    playing.set(false);
    this._resetTracking();
  }
  ["playing"](event) {
    const playEvent = this._trackedEvents.get("play");
    if (playEvent) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("waiting"));
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, playEvent);
    } else {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("seeked"));
    }
    setTimeout(() => this._resetTracking(), 0);
    const { paused, playing, seeking, ended } = this.$state;
    paused.set(false);
    playing.set(true);
    seeking.set(false);
    ended.set(false);
    if (this._request._looping) {
      event.stopImmediatePropagation();
      this._request._looping = false;
      return;
    }
    this["started"](event);
  }
  ["started"](event) {
    const { started, live, liveSyncPosition, seekableEnd } = this.$state;
    if (!started()) {
      if (live()) {
        const end = liveSyncPosition() ?? seekableEnd() - 2;
        if (Number.isFinite(end))
          this._media.$provider().currentTime = end;
      }
      started.set(true);
      this._handle(this.createEvent("started", { trigger: event }));
    }
  }
  ["pause"](event) {
    if (this._request._looping) {
      event.stopImmediatePropagation();
      return;
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("seeked"));
    this._satisfyRequest("pause", event);
    const { paused, playing, seeking } = this.$state;
    paused.set(true);
    playing.set(false);
    seeking.set(false);
    this._resetTracking();
  }
  ["time-update"](event) {
    const { currentTime, played, waiting } = this.$state, detail = event.detail;
    currentTime.set(detail.currentTime);
    played.set(detail.played);
    waiting.set(false);
    for (const track of this._media.textTracks) {
      track[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._updateActiveCues](detail.currentTime, event);
    }
  }
  ["volume-change"](event) {
    const { volume, muted } = this.$state, detail = event.detail;
    volume.set(detail.volume);
    muted.set(detail.muted || detail.volume === 0);
    this._satisfyRequest("volume", event);
  }
  ["seeked"](event) {
    const { seeking, currentTime, paused, duration, ended } = this.$state;
    if (this._request._seeking) {
      seeking.set(true);
      event.stopImmediatePropagation();
    } else if (seeking()) {
      const waitingEvent = this._trackedEvents.get("waiting");
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, waitingEvent);
      if (waitingEvent?.trigger?.type !== "seeking") {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.q)(event, this._trackedEvents.get("seeking"));
      }
      if (paused())
        this._stopWaiting();
      seeking.set(false);
      if (event.detail !== duration())
        ended.set(false);
      currentTime.set(event.detail);
      this._satisfyRequest("seeked", event);
      const origin = event.originEvent;
      if (origin && origin.isTrusted && !/seek/.test(origin.type)) {
        this["started"](event);
      }
    }
  }
  ["waiting"](event) {
    if (this._firingWaiting || this._request._seeking)
      return;
    event.stopImmediatePropagation();
    this._waitingTrigger = event;
    this._fireWaiting();
  }
  ["ended"](event) {
    if (this._request._looping) {
      event.stopImmediatePropagation();
      return;
    }
    const { paused, playing, seeking, ended } = this.$state;
    paused.set(true);
    playing.set(false);
    seeking.set(false);
    ended.set(true);
    this._resetTracking();
  }
  _stopWaiting() {
    this._fireWaiting.cancel();
    this.$state.waiting.set(false);
  }
  ["fullscreen-change"](event) {
    this.$state.fullscreen.set(event.detail);
    this._satisfyRequest("fullscreen", event);
  }
  ["fullscreen-error"](event) {
    this._satisfyRequest("fullscreen", event);
  }
  ["picture-in-picture-change"](event) {
    this.$state.pictureInPicture.set(event.detail);
    this._satisfyRequest("pip", event);
  }
  ["picture-in-picture-error"](event) {
    this._satisfyRequest("pip", event);
  }
}

class MediaStateSync extends MediaPlayerController {
  onSetup() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLogLevelChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onAutoplayChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onPosterChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLoopChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onControlsChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onCrossOriginChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onPlaysinlineChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLiveToleranceChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLiveChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLiveEdgeChange.bind(this));
  }
  _onLogLevelChange() {
    this.$state.logLevel.set(this.$props.logLevel());
  }
  _onAutoplayChange() {
    const autoplay = this.$props.autoplay();
    this.$state.autoplay.set(autoplay);
    this.dispatch("autoplay-change", { detail: autoplay });
  }
  _onLoopChange() {
    const loop = this.$props.loop();
    this.$state.loop.set(loop);
    this.dispatch("loop-change", { detail: loop });
  }
  _onControlsChange() {
    const controls = this.$props.controls();
    this.$state.controls.set(controls);
  }
  _onPosterChange() {
    const poster = this.$props.poster();
    this.$state.poster.set(poster);
    this.dispatch("poster-change", { detail: poster });
  }
  _onCrossOriginChange() {
    const crossorigin = this.$props.crossorigin();
    this.$state.crossorigin.set(crossorigin === true ? "" : crossorigin);
  }
  _onPlaysinlineChange() {
    const playsinline = this.$props.playsinline();
    this.$state.playsinline.set(playsinline);
    this.dispatch("playsinline-change", { detail: playsinline });
  }
  _onLiveChange() {
    this.dispatch("live-change", { detail: this.$state.live() });
  }
  _onLiveToleranceChange() {
    this.$state.liveEdgeTolerance.set(this.$props.liveEdgeTolerance());
    this.$state.minLiveDVRWindow.set(this.$props.minLiveDVRWindow());
  }
  _onLiveEdgeChange() {
    this.dispatch("live-edge-change", { detail: this.$state.liveEdge() });
  }
}

const LOCAL_STORAGE_KEY = "@vidstack/log-colors";
const savedColors = init();
function getLogColor(key) {
  return savedColors.get(key);
}
function saveLogColor(key, { color = generateColor(), overwrite = false } = {}) {
  if (!savedColors.has(key) || overwrite) {
    savedColors.set(key, color);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Object.entries(savedColors)));
  }
}
function generateColor() {
  return `hsl(${Math.random() * 360}, 55%, 70%)`;
}
function init() {
  let colors;
  try {
    colors = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  } catch {
  }
  return new Map(Object.entries(colors ?? {}));
}

const LogLevelValue = Object.freeze({
  silent: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4
});
const LogLevelColor = Object.freeze({
  silent: "white",
  error: "hsl(6, 58%, 50%)",
  warn: "hsl(51, 58%, 50%)",
  info: "hsl(219, 58%, 50%)",
  debug: "hsl(280, 58%, 50%)"
});

const s = 1e3;
const m = s * 60;
const h = m * 60;
const d = h * 24;
function ms(val) {
  const msAbs = Math.abs(val);
  if (msAbs >= d) {
    return Math.round(val / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(val / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(val / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(val / s) + "s";
  }
  return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(val, 2) + "ms";
}

class LogPrinter extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor() {
    super(...arguments);
    this._level = "warn" ;
  }
  /**
   * The current log level.
   */
  get logLevel() {
    return this._level ;
  }
  set logLevel(level) {
    this._level = level;
  }
  onConnect() {
    this.listen("vds-log", (event) => {
      event.stopPropagation();
      const element = event.path?.[0] ?? (event.target instanceof _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V ? event.target.el : event.target), eventTargetName = element?.$$COMPONENT_NAME?.replace(/^_/, "").replace(/Instance$/, "") ?? element?.tagName.toLowerCase() ?? "unknown";
      const { level = "warn", data } = event.detail ?? {};
      if (LogLevelValue[this._level] < LogLevelValue[level]) {
        return;
      }
      saveLogColor(eventTargetName);
      const hint = data?.length === 1 && isGroupedLog(data[0]) ? data[0].title : (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(data?.[0]) ? data[0] : "";
      console.groupCollapsed(
        `%c${level.toUpperCase()}%c ${eventTargetName}%c ${hint.slice(0, 50)}${hint.length > 50 ? "..." : ""}`,
        `background: ${LogLevelColor[level]}; color: white; padding: 1.5px 2.2px; border-radius: 2px; font-size: 11px;`,
        `color: ${getLogColor(eventTargetName)}; padding: 4px 0px; font-size: 11px;`,
        "color: gray; font-size: 11px; padding-left: 4px;"
      );
      if (data?.length === 1 && isGroupedLog(data[0])) {
        if (element)
          data[0].logs.unshift({ label: "Element", data: [element] });
        printGroup(level, data[0]);
      } else if (data) {
        print(level, ...data);
      }
      this._printTimeDiff();
      printStackTrace();
      console.groupEnd();
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      this._lastLogged = void 0;
    });
  }
  _printTimeDiff() {
    labelledPrint("Time since last log", this._calcLastLogTimeDiff());
  }
  _calcLastLogTimeDiff() {
    const time = performance.now();
    const diff = time - (this._lastLogged ?? (this._lastLogged = performance.now()));
    this._lastLogged = time;
    return ms(diff);
  }
}
function print(level, ...data) {
  console[level](...data);
}
function labelledPrint(label, ...data) {
  console.log(`%c${label}:`, "color: gray", ...data);
}
function printStackTrace() {
  console.groupCollapsed("%cStack Trace", "color: gray");
  console.trace();
  console.groupEnd();
}
function printGroup(level, groupedLog) {
  for (const log of groupedLog.logs) {
    if (isGroupedLog(log)) {
      console.groupCollapsed(groupedLog.title);
      printGroup(level, log);
      console.groupEnd();
    } else if ("label" in log && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(log.label)) {
      labelledPrint(log.label, ...log.data);
    } else {
      print(level, ...log.data);
    }
  }
}

let $keyboard = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
{
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "pointerdown", () => {
    $keyboard.set(false);
  });
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "keydown", (e) => {
    if (e.metaKey || e.altKey || e.ctrlKey)
      return;
    $keyboard.set(true);
  });
}
class FocusVisibleController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor() {
    super(...arguments);
    this._focused = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      if (!$keyboard()) {
        this._focused.set(false);
        updateFocusAttr(el, false);
        this.listen("pointerenter", this._onPointerEnter.bind(this));
        this.listen("pointerleave", this._onPointerLeave.bind(this));
        return;
      }
      const active = document.activeElement === el;
      this._focused.set(active);
      updateFocusAttr(el, active);
      this.listen("focus", this._onFocus.bind(this));
      this.listen("blur", this._onBlur.bind(this));
    });
  }
  focused() {
    return this._focused();
  }
  _onFocus() {
    this._focused.set(true);
    updateFocusAttr(this.el, true);
  }
  _onBlur() {
    this._focused.set(false);
    updateFocusAttr(this.el, false);
  }
  _onPointerEnter() {
    updateHoverAttr(this.el, true);
  }
  _onPointerLeave() {
    updateHoverAttr(this.el, false);
  }
}
function updateFocusAttr(el, isFocused) {
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-focus", isFocused);
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-hocus", isFocused);
}
function updateHoverAttr(el, isHovering) {
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-hocus", isHovering);
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-hover", isHovering);
}

class RequestQueue {
  constructor() {
    this._serving = false;
    this._pending = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.G)();
    this._queue = /* @__PURE__ */ new Map();
  }
  /**
   * The number of callbacks that are currently in queue.
   */
  get _size() {
    return this._queue.size;
  }
  /**
   * Whether items in the queue are being served immediately, otherwise they're queued to
   * be processed later.
   */
  get _isServing() {
    return this._serving;
  }
  /**
   * Waits for the queue to be flushed (ie: start serving).
   */
  async _waitForFlush() {
    if (this._serving)
      return;
    await this._pending.promise;
  }
  /**
   * Queue the given `callback` to be invoked at a later time by either calling the `serve()` or
   * `start()` methods. If the queue has started serving (i.e., `start()` was already called),
   * then the callback will be invoked immediately.
   *
   * @param key - Uniquely identifies this callback so duplicates are ignored.
   * @param callback - The function to call when this item in the queue is being served.
   */
  _enqueue(key, callback) {
    if (this._serving) {
      callback();
      return;
    }
    this._queue.delete(key);
    this._queue.set(key, callback);
  }
  /**
   * Invokes the callback with the given `key` in the queue (if it exists).
   */
  _serve(key) {
    this._queue.get(key)?.();
    this._queue.delete(key);
  }
  /**
   * Flush all queued items and start serving future requests immediately until `stop()` is called.
   */
  _start() {
    this._flush();
    this._serving = true;
    if (this._queue.size > 0)
      this._flush();
  }
  /**
   * Stop serving requests, they'll be queued until you begin processing again by calling `start()`.
   */
  _stop() {
    this._serving = false;
  }
  /**
   * Stop serving requests, empty the request queue, and release any promises waiting for the
   * queue to flush.
   */
  _reset() {
    this._stop();
    this._queue.clear();
    this._release();
  }
  _flush() {
    for (const key of this._queue.keys())
      this._serve(key);
    this._release();
  }
  _release() {
    this._pending.resolve();
    this._pending = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.G)();
  }
}

var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target, key, result);
  return result;
};
const _MediaPlayer = class _MediaPlayer extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this.canPlayQueue = new RequestQueue();
    this._initState();
    new MediaStateSync();
    const context = {
      player: this,
      scope: (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.g)(),
      qualities: new VideoQualityList(),
      audioTracks: new AudioTrackList(),
      $provider: (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null),
      $props: this.$props,
      $state: this.$state
    };
    {
      const logPrinter = new LogPrinter();
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
        logPrinter.logLevel = this.$props.logLevel();
      });
    }
    context.logger = new Logger();
    context.remote = new MediaRemoteControl(context.logger );
    context.remote.setPlayer(this);
    context.$iosControls = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(this._isIOSControls.bind(this));
    context.textTracks = new TextTrackList();
    context.textTracks[_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.T._crossorigin] = this.$state.crossorigin;
    context.textRenderers = new TextRenderers(context);
    context.ariaKeys = {};
    this._media = context;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(mediaContext, context);
    this.orientation = new ScreenOrientationController();
    new FocusVisibleController();
    new MediaKeyboardController(context);
    new MediaEventsLogger(context);
    const request = new MediaRequestContext();
    this._stateMgr = new MediaStateManager(request, context);
    this._requestMgr = new MediaRequestManager(this._stateMgr, request, context);
    context.delegate = new MediaPlayerDelegate(
      this._stateMgr._handle.bind(this._stateMgr),
      context
    );
    new MediaLoadController(this.startLoading.bind(this));
  }
  static {
    this.props = mediaPlayerProps;
  }
  static {
    this.state = mediaState;
  }
  get _provider() {
    return this._media.$provider();
  }
  onSetup() {
    this._setupMediaAttributes();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchCanPlay.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchMuted.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPaused.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchVolume.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchCurrentTime.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPlaysinline.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPlaybackRate.bind(this));
  }
  onAttach(el) {
    el.setAttribute("data-media-player", "");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "region");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchTitle.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchOrientation.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(el, "find-media-player", this._onFindPlayer.bind(this));
  }
  onConnect(el) {
    if (_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.o)
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-iphone", "");
    (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.c)().then(this.$state.canSetVolume.set);
    const pointerQuery = window.matchMedia("(pointer: coarse)");
    this._onPointerChange(pointerQuery);
    pointerQuery.onchange = this._onPointerChange.bind(this);
    const resize = new ResizeObserver((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.K)(this._onResize.bind(this)));
    resize.observe(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onResize.bind(this));
    this.dispatch("media-player-connect", {
      detail: this,
      bubbles: true,
      composed: true
    });
    this._media.logger.setTarget(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      resize.disconnect();
      pointerQuery.onchange = null;
      this._media.logger.setTarget(null);
    });
  }
  onDestroy() {
    this._media.player = null;
    this.canPlayQueue._reset();
  }
  _initState() {
    const providedProps = {
      viewType: "providedViewType",
      streamType: "providedStreamType"
    };
    for (const prop2 of Object.keys(this.$props)) {
      this.$state[providedProps[prop2] ?? prop2]?.set(this.$props[prop2]());
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onProvidedTypesChange.bind(this));
    this.$state.muted.set(this.$props.muted() || this.$props.volume() === 0);
  }
  _watchTitle() {
    const { title } = this.$props, { live, viewType } = this.$state, isLive = live(), type = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.U)(viewType()), typeText = type !== "Unknown" ? `${isLive ? "Live " : ""}${type}` : isLive ? "Live" : "Media";
    const newTitle = title();
    if (newTitle) {
      this.el?.setAttribute("data-title", newTitle);
      this.el?.removeAttribute("title");
    }
    const currentTitle = this.el?.getAttribute("data-title") || "";
    this.$state.title.set(currentTitle);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(
      this.el,
      "aria-label",
      currentTitle ? `${typeText} - ${currentTitle}` : typeText + " Player"
    );
  }
  _watchOrientation() {
    const orientation = this.orientation.landscape ? "landscape" : "portrait";
    this.$state.orientation.set(orientation);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el, "data-orientation", orientation);
    this._onResize();
  }
  _watchCanPlay() {
    if (this.$state.canPlay() && this._provider)
      this.canPlayQueue._start();
    else
      this.canPlayQueue._stop();
  }
  _onProvidedTypesChange() {
    this.$state.providedViewType.set(this.$props.viewType());
    this.$state.providedStreamType.set(this.$props.streamType());
  }
  _setupMediaAttributes() {
    if (_MediaPlayer[MEDIA_ATTRIBUTES]) {
      this.setAttributes(_MediaPlayer[MEDIA_ATTRIBUTES]);
      return;
    }
    const $attrs = {
      "data-captions": function() {
        const track = this.$state.textTrack();
        return !!track && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track);
      },
      "data-ios-controls": function() {
        return this._media.$iosControls();
      },
      "data-controls": function() {
        return this.controls.showing;
      },
      "data-buffering": function() {
        const { canPlay, waiting } = this.$state;
        return !canPlay() || waiting();
      },
      "data-error": function() {
        const { error } = this.$state;
        return !!error();
      }
    };
    const alias = {
      canPictureInPicture: "can-pip",
      pictureInPicture: "pip"
    };
    for (const prop2 of mediaAttributes) {
      const attrName = "data-" + (alias[prop2] ?? (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.x)(prop2));
      $attrs[attrName] = function() {
        return this.$state[prop2]();
      };
    }
    delete $attrs.title;
    _MediaPlayer[MEDIA_ATTRIBUTES] = $attrs;
    this.setAttributes($attrs);
  }
  _onFindPlayer(event) {
    event.detail(this);
  }
  _onResize() {
    if (!this.el)
      return;
    const width = this.el.clientWidth, height = this.el.clientHeight;
    this.$state.width.set(width);
    this.$state.height.set(height);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.el, "--player-width", width + "px");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.el, "--player-height", height + "px");
  }
  _onPointerChange(queryList) {
    const pointer = queryList.matches ? "coarse" : "fine";
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el, "data-pointer", pointer);
    this.$state.pointer.set(pointer);
    this._onResize();
  }
  _isIOSControls() {
    return !canFullscreen() && this.$state.mediaType() === "video" && (this.$state.controls() && !this.$props.playsinline() || this.$state.fullscreen());
  }
  get provider() {
    return this._provider;
  }
  get controls() {
    return this._requestMgr._controls;
  }
  get qualities() {
    return this._media.qualities;
  }
  get audioTracks() {
    return this._media.audioTracks;
  }
  get textTracks() {
    return this._media.textTracks;
  }
  get textRenderers() {
    return this._media.textRenderers;
  }
  get paused() {
    return this._provider?.paused ?? true;
  }
  set paused(paused) {
    this._queuePausedUpdate(paused);
  }
  _watchPaused() {
    this._queuePausedUpdate(this.$props.paused());
  }
  _queuePausedUpdate(paused) {
    if (paused) {
      this.canPlayQueue._enqueue("paused", () => this._requestMgr._pause());
    } else
      this.canPlayQueue._enqueue("paused", () => this._requestMgr._play());
  }
  get muted() {
    return this._provider?.muted ?? false;
  }
  set muted(muted) {
    this._queueMutedUpdate(muted);
  }
  _watchMuted() {
    this._queueMutedUpdate(this.$props.muted());
  }
  _queueMutedUpdate(muted) {
    this.canPlayQueue._enqueue("muted", () => this._provider.muted = muted);
  }
  get currentTime() {
    return this._provider?.currentTime ?? 0;
  }
  set currentTime(time) {
    this._queueCurrentTimeUpdate(time);
  }
  _watchCurrentTime() {
    this._queueCurrentTimeUpdate(this.$props.currentTime());
  }
  _queueCurrentTimeUpdate(time) {
    this.canPlayQueue._enqueue("currentTime", () => {
      const adapter = this._provider;
      if (time !== adapter.currentTime) {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => {
          const boundTime = Math.min(
            Math.max(this.$state.seekableStart() + 0.1, time),
            this.$state.seekableEnd() - 0.1
          );
          if (Number.isFinite(boundTime))
            adapter.currentTime = boundTime;
        });
      }
    });
  }
  get volume() {
    return this._provider?.volume ?? 1;
  }
  set volume(volume) {
    this._queueVolumeUpdate(volume);
  }
  _watchVolume() {
    this._queueVolumeUpdate(this.$props.volume());
  }
  _queueVolumeUpdate(volume) {
    const clampedVolume = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.p)(0, volume, 1);
    this.canPlayQueue._enqueue("volume", () => this._provider.volume = clampedVolume);
  }
  get playsinline() {
    return this._provider?.playsinline ?? false;
  }
  set playsinline(inline) {
    this._queuePlaysinlineUpdate(inline);
  }
  _watchPlaysinline() {
    this._queuePlaysinlineUpdate(this.$props.playsinline());
  }
  _queuePlaysinlineUpdate(inline) {
    this.canPlayQueue._enqueue("playsinline", () => this._provider.playsinline = inline);
  }
  get playbackRate() {
    return this._provider?.playbackRate ?? 1;
  }
  set playbackRate(rate) {
    this._queuePlaybackRateUpdate(rate);
  }
  _watchPlaybackRate() {
    this._queuePlaybackRateUpdate(this.$props.playbackRate());
  }
  _queuePlaybackRateUpdate(rate) {
    this.canPlayQueue._enqueue("rate", () => this._provider.playbackRate = rate);
  }
  async play() {
    return this._requestMgr._play();
  }
  async pause() {
    return this._requestMgr._pause();
  }
  async enterFullscreen(target) {
    return this._requestMgr._enterFullscreen(target);
  }
  async exitFullscreen(target) {
    return this._requestMgr._exitFullscreen(target);
  }
  enterPictureInPicture() {
    return this._requestMgr._enterPictureInPicture();
  }
  exitPictureInPicture() {
    return this._requestMgr._exitPictureInPicture();
  }
  seekToLiveEdge() {
    this._requestMgr._seekToLiveEdge();
  }
  startLoading() {
    this._media.delegate._dispatch("can-load");
  }
  matchQuery(query) {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.s)(() => PlayerQueryList.create(query), this.scope);
  }
  destroy() {
    this._media.remote.setPlayer(null);
    this.dispatch("destroy");
  }
};
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "canPlayQueue", 2);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "provider", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "controls", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "orientation", 2);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "qualities", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "audioTracks", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "textTracks", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "textRenderers", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "paused", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "muted", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "currentTime", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "volume", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "playsinline", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], _MediaPlayer.prototype, "playbackRate", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "play", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "pause", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "enterFullscreen", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "exitFullscreen", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "enterPictureInPicture", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "exitPictureInPicture", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "seekToLiveEdge", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "startLoading", 1);
__decorateClass$f([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], _MediaPlayer.prototype, "matchQuery", 1);
let MediaPlayer = _MediaPlayer;

let warned = /* @__PURE__ */ new Set() ;
const SETUP = Symbol("SETUP" );
class SourceSelection {
  constructor(_domSources, _media, _loader) {
    this._domSources = _domSources;
    this._media = _media;
    this._loader = _loader;
    this._initialize = false;
    const HLS_LOADER = new HLSProviderLoader(), VIDEO_LOADER = new VideoProviderLoader(), AUDIO_LOADER = new AudioProviderLoader();
    this._loaders = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(() => {
      return _media.$props.preferNativeHLS() ? [VIDEO_LOADER, AUDIO_LOADER, HLS_LOADER] : [HLS_LOADER, VIDEO_LOADER, AUDIO_LOADER];
    });
    const { $state } = _media;
    $state.sources.set(normalizeSrc(_media.$props.src()));
    for (const src of $state.sources()) {
      const loader = this._loaders().find((loader2) => loader2.canPlay(src));
      if (!loader)
        continue;
      const mediaType = loader.mediaType(src);
      this._media.$state.source.set(src);
      this._media.$state.mediaType.set(mediaType);
      this._media.$state.inferredViewType.set(mediaType);
      this._loader.set(loader);
      this._initialize = true;
    }
  }
  connect() {
    const loader = this._loader();
    if (this._initialize) {
      this._notifySourceChange(this._media.$state.source(), loader);
      this._notifyLoaderChange(loader);
      this._initialize = false;
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onSourcesChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onSourceChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onConnect.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLoadSource.bind(this));
  }
  _onSourcesChange() {
    this._media.delegate._dispatch("sources-change", {
      detail: [...normalizeSrc(this._media.$props.src()), ...this._domSources()]
    });
  }
  _onSourceChange() {
    const { $state } = this._media;
    const sources = $state.sources(), currentSource = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)($state.source), newSource = this._findNewSource(currentSource, sources), noMatch = sources[0]?.src && !newSource.src && !newSource.type;
    if (noMatch && !warned.has(newSource.src) && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._loader)) {
      const source = sources[0];
      console.warn(
        `[vidstack] could not find a loader for any of the given media sources, consider providing \`type\`:

<media-provider>
  <source src="${source.src}" type="video/mp4" />
</media-provider>"

Falling back to fetching source headers...`
      );
      warned.add(newSource.src);
    }
    if (noMatch) {
      const { crossorigin } = $state, credentials = (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.g)(crossorigin()), abort = new AbortController();
      Promise.all(
        sources.map(
          (source) => (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(source.src) && source.type === "?" ? fetch(source.src, {
            method: "HEAD",
            credentials,
            signal: abort.signal
          }).then((res) => {
            source.type = res.headers.get("content-type") || "??";
            return source;
          }).catch(() => source) : source
        )
      ).then((sources2) => {
        if (abort.signal.aborted)
          return;
        this._findNewSource((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)($state.source), sources2);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
      });
      return () => abort.abort();
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
  }
  _findNewSource(currentSource, sources) {
    let newSource = { src: "", type: "" }, newLoader = null;
    for (const src of sources) {
      const loader = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._loaders).find((loader2) => loader2.canPlay(src));
      if (loader) {
        newSource = src;
        newLoader = loader;
      }
    }
    if (!isSameSrc(currentSource, newSource)) {
      this._notifySourceChange(newSource, newLoader);
    }
    if (newLoader !== (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._loader)) {
      this._notifyLoaderChange(newLoader);
    }
    return newSource;
  }
  _notifySourceChange(src, loader) {
    this._media.delegate._dispatch("source-change", { detail: src });
    this._media.delegate._dispatch("media-type-change", {
      detail: loader?.mediaType(src) || "unknown"
    });
  }
  _notifyLoaderChange(loader) {
    this._media.delegate._dispatch("provider-change", { detail: null });
    loader && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => loader.preconnect?.(this._media));
    this._loader.set(loader);
    this._media.delegate._dispatch("provider-loader-change", { detail: loader });
  }
  _onConnect() {
    const provider = this._media.$provider();
    if (!provider || provider[SETUP])
      return;
    if (this._media.$state.canLoad()) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Y)(() => provider.setup(this._media));
      provider[SETUP] = true;
      return;
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => provider.preconnect?.(this._media));
  }
  _onLoadSource() {
    const provider = this._media.$provider(), source = this._media.$state.source();
    if (isSameSrc(provider?.currentSrc, source)) {
      return;
    }
    if (this._media.$state.canLoad()) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => provider?.loadSource(source, (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._media.$state.preload)));
      return;
    }
    try {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(source.src) && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.p)(new URL(source.src).origin, "preconnect");
    } catch (error) {
      {
        this._media.logger?.infoGroup(`Failed to preconnect to source: ${source.src}`).labelledLog("Error", error).dispatch();
      }
    }
  }
}
function normalizeSrc(src) {
  return ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.M)(src) ? src : [!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src) && "src" in src ? src : { src }]).map(
    ({ src: src2, type }) => ({
      src: src2,
      type: type ?? (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src2) || src2.startsWith("blob:") ? "video/object" : "?")
    })
  );
}
function isSameSrc(a, b) {
  return a?.src === b?.src && a?.type === b?.type;
}

class Tracks {
  constructor(_domTracks, _media) {
    this._domTracks = _domTracks;
    this._media = _media;
    this._prevTracks = [];
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onTracksChange.bind(this));
  }
  _onTracksChange() {
    const newTracks = this._domTracks();
    for (const oldTrack of this._prevTracks) {
      if (!newTracks.some((t) => t.id === oldTrack.id)) {
        const track = oldTrack.id && this._media.textTracks.getById(oldTrack.id);
        if (track)
          this._media.textTracks.remove(track);
      }
    }
    for (const newTrack of newTracks) {
      const id = newTrack.id || _vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.a.createId(newTrack);
      if (!this._media.textTracks.getById(id)) {
        newTrack.id = id;
        this._media.textTracks.add(newTrack);
      }
    }
    this._prevTracks = newTracks;
  }
}

var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target, key, result);
  return result;
};
class MediaProvider extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._domSources = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)([]);
    this._domTracks = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)([]);
    this._loader = null;
    this._loadRafId = -1;
  }
  static {
    this.state = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
      loader: null
    });
  }
  onSetup() {
    this._media = useMediaContext();
    this._sources = new SourceSelection(this._domSources, this._media, this.$state.loader);
  }
  onAttach(el) {
    el.setAttribute("data-media-provider", "");
  }
  onConnect(el) {
    this._sources.connect();
    new Tracks(this._domTracks, this._media);
    const resize = new ResizeObserver((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.K)(this._onResize.bind(this)));
    resize.observe(el);
    const mutation = new MutationObserver(this._onMutation.bind(this));
    mutation.observe(el, { attributes: true, childList: true });
    if (_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.g) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(el, "touchstart", (e) => e.preventDefault(), { passive: false });
    }
    this._onResize();
    this._onMutation();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      resize.disconnect();
      mutation.disconnect();
    });
  }
  load(target) {
    window.cancelAnimationFrame(this._loadRafId);
    this._loadRafId = requestAnimationFrame(() => this._runLoader(target));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      window.cancelAnimationFrame(this._loadRafId);
    });
  }
  _runLoader(target) {
    if (!this.scope)
      return;
    const loader = this.$state.loader(), { $provider } = this._media;
    if (this._loader === loader && loader?.target === target && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)($provider))
      return;
    this._destroyProvider();
    this._loader = loader;
    if (loader)
      loader.target = target || null;
    if (!loader || !target)
      return;
    loader.load(this._media).then((provider) => {
      if (!this.scope)
        return;
      if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$state.loader) !== loader)
        return;
      this._media.delegate._dispatch("provider-change", {
        detail: provider
      });
    });
  }
  onDestroy() {
    this._loader = null;
    this._destroyProvider();
  }
  _destroyProvider() {
    this._media.delegate._dispatch("provider-change", { detail: null });
  }
  _onResize() {
    if (!this.el)
      return;
    const player = this._media.player, width = this.el.offsetWidth, height = this.el.offsetHeight;
    if (!player)
      return;
    player.$state.mediaWidth.set(width);
    player.$state.mediaHeight.set(height);
    if (player.el) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(player.el, "--media-width", width + "px");
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(player.el, "--media-height", height + "px");
    }
  }
  _onMutation() {
    const sources = [], tracks = [], children = this.el.children;
    for (const el of children) {
      if (el instanceof HTMLSourceElement) {
        sources.push({
          src: el.src,
          type: el.type
        });
      } else if (el instanceof HTMLTrackElement) {
        tracks.push({
          id: el.id,
          src: el.src,
          kind: el.track.kind,
          language: el.srclang,
          label: el.label,
          default: el.default,
          type: el.getAttribute("data-type")
        });
      }
    }
    this._domSources.set(sources);
    this._domTracks.set(tracks);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
  }
}
__decorateClass$e([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], MediaProvider.prototype, "load", 1);

class Controls extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      hideDelay: 2e3
    };
  }
  onSetup() {
    this._media = useMediaContext();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHideDelay.bind(this));
  }
  onAttach(el) {
    const { pictureInPicture, fullscreen } = this._media.$state;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, "pointer-events", "none");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "group");
    this.setAttributes({
      "data-visible": this._isShowing.bind(this),
      "data-fullscreen": fullscreen,
      "data-pip": pictureInPicture
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      this.dispatch("change", { detail: this._isShowing() });
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      const isFullscreen = fullscreen();
      for (const side of ["top", "right", "bottom", "left"]) {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, `padding-${side}`, isFullscreen && `env(safe-area-inset-${side})`);
      }
    });
  }
  _watchHideDelay() {
    const { controls } = this._media.player, { hideDelay } = this.$props;
    controls.defaultDelay = hideDelay();
  }
  _isShowing() {
    const { controlsVisible } = this._media.$state;
    return controlsVisible();
  }
}

class Popper extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor(_delegate) {
    super();
    this._delegate = _delegate;
    this._showTimerId = -1;
    this._hideRafId = -1;
    this._stopAnimationEndListener = null;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchTrigger.bind(this));
  }
  onDestroy() {
    this._stopAnimationEndListener?.();
    this._stopAnimationEndListener = null;
  }
  _watchTrigger() {
    const trigger = this._delegate._trigger();
    if (!trigger) {
      this.hide();
      return;
    }
    const show = this.show.bind(this), hide = this.hide.bind(this);
    this._delegate._listen(trigger, show, hide);
  }
  show(trigger) {
    window.cancelAnimationFrame(this._hideRafId);
    this._hideRafId = -1;
    this._stopAnimationEndListener?.();
    this._stopAnimationEndListener = null;
    this._showTimerId = window.setTimeout(
      () => {
        this._showTimerId = -1;
        const content = this._delegate._content();
        if (content)
          content.style.removeProperty("display");
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => this._delegate._onChange(true, trigger));
      },
      this._delegate._showDelay?.() ?? 0
    );
  }
  hide(trigger) {
    window.clearTimeout(this._showTimerId);
    this._showTimerId = -1;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => this._delegate._onChange(false, trigger));
    this._hideRafId = requestAnimationFrame(() => {
      this._hideRafId = -1;
      const content = this._delegate._content();
      if (content) {
        const isAnimated = (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.h)(content);
        const onHide = () => {
          content.style.display = "none";
          this._stopAnimationEndListener = null;
        };
        if (isAnimated) {
          this._stopAnimationEndListener?.();
          const stop = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(content, "animationend", onHide, { once: true });
          this._stopAnimationEndListener = stop;
        } else {
          onHide();
        }
      }
    });
  }
}

const tooltipContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();

let id = 0;
class Tooltip extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._id = `media-tooltip-${++id}`;
    this._trigger = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._content = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    new FocusVisibleController();
    const { showDelay } = this.$props;
    new Popper({
      _trigger: this._trigger,
      _content: this._content,
      _showDelay: showDelay,
      _listen(trigger, show, hide) {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(trigger, "touchstart", (e) => e.preventDefault());
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(trigger, "focus", show);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(trigger, "blur", hide);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(trigger, "mouseenter", show);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(trigger, "mouseleave", hide);
      },
      _onChange: this._onShowingChange.bind(this)
    });
  }
  static {
    this.props = {
      showDelay: 500
    };
  }
  onAttach(el) {
    el.style.setProperty("display", "contents");
  }
  onSetup() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(tooltipContext, {
      _trigger: this._trigger,
      _content: this._content,
      _attachTrigger: this._attachTrigger.bind(this),
      _detachTrigger: this._detachTrigger.bind(this),
      _attachContent: this._attachContent.bind(this),
      _detachContent: this._detachContent.bind(this)
    });
  }
  _attachTrigger(el) {
    this._trigger.set(el);
    el.removeAttribute("aria-label");
    let tooltipName = el.getAttribute("data-media-tooltip");
    if (tooltipName) {
      this.el?.setAttribute(`data-media-${tooltipName}-tooltip`, "");
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-describedby", this._id);
  }
  _detachTrigger(el) {
    el.removeAttribute("data-describedby");
    el.removeAttribute("aria-describedby");
    this._trigger.set(null);
  }
  _attachContent(el) {
    el.setAttribute("id", this._id);
    el.style.display = "none";
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "tooltip");
    this._content.set(el);
  }
  _detachContent(el) {
    el.removeAttribute("id");
    el.removeAttribute("role");
    this._content.set(null);
  }
  _onShowingChange(isShowing) {
    const trigger = this._trigger(), content = this._content();
    if (trigger) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(trigger, "aria-describedby", isShowing ? this._id : null);
    }
    for (const el of [this.el, trigger, content]) {
      el && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-visible", isShowing);
    }
  }
}

class TooltipContent extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      placement: "top center",
      offset: 0,
      alignOffset: 0
    };
  }
  constructor() {
    super();
    new FocusVisibleController();
    const { placement } = this.$props;
    this.setAttributes({
      "data-placement": placement
    });
  }
  onAttach(el) {
    this._attach(el);
    Object.assign(el.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content"
    });
  }
  onConnect(el) {
    this._attach(el);
    const tooltip = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(tooltipContext);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => tooltip._detachContent(el));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
        if (!this.connectScope)
          return;
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPlacement.bind(this));
      })
    );
  }
  _attach(el) {
    const tooltip = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(tooltipContext);
    tooltip._attachContent(el);
  }
  _watchPlacement() {
    const { placement, offset: mainOffset, alignOffset } = this.$props;
    return (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.el, this._getTrigger(), placement(), {
      offsetVarName: "media-tooltip",
      xOffset: alignOffset(),
      yOffset: mainOffset()
    });
  }
  _getTrigger() {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(tooltipContext)._trigger();
  }
}

class ToggleButtonController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor(_delegate) {
    super();
    this._delegate = _delegate;
    new FocusVisibleController();
    if (_delegate._keyShortcut) {
      new ARIAKeyShortcuts(_delegate._keyShortcut);
    }
  }
  static {
    this.props = {
      disabled: false
    };
  }
  onSetup() {
    const { disabled } = this.$props;
    this.setAttributes({
      "data-pressed": this._delegate._isPressed,
      "aria-pressed": this._isARIAPressed.bind(this),
      "aria-disabled": () => disabled() ? "true" : null
    });
  }
  onAttach(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "button");
  }
  onConnect(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(el, this._onMaybePress.bind(this));
  }
  _isARIAPressed() {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Z)(this._delegate._isPressed());
  }
  _onPressed(event) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__._)(this._delegate._isPressed)) {
      this._delegate._isPressed.set((p) => !p);
    }
  }
  _onMaybePress(event) {
    const disabled = this.$props.disabled() || this.el.hasAttribute("data-disabled");
    if (disabled) {
      event.stopImmediatePropagation();
      return;
    }
    event.preventDefault();
    (this._delegate._onPress ?? this._onPressed)(event);
  }
}

var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
class ToggleButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._pressed = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    new ToggleButtonController({
      _isPressed: this._pressed
    });
  }
  static {
    this.props = {
      disabled: false,
      defaultPressed: false
    };
  }
  get pressed() {
    return this._pressed();
  }
}
__decorateClass$d([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], ToggleButton.prototype, "pressed", 1);

class PlayButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: "togglePaused",
      _onPress: this._onPress.bind(this)
    });
  }
  static {
    this.props = ToggleButtonController.props;
  }
  onSetup() {
    this._media = useMediaContext();
    const { paused, ended } = this._media.$state;
    this.setAttributes({
      "data-paused": paused,
      "data-ended": ended
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-tooltip", "play");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  _onPress(event) {
    const remote = this._media.remote;
    this._isPressed() ? remote.pause(event) : remote.play(event);
  }
  _isPressed() {
    const { paused } = this._media.$state;
    return !paused();
  }
  _getLabel() {
    const { paused } = this._media.$state;
    return paused() ? "Play" : "Pause";
  }
}

function ariaBool(value) {
  return value ? "true" : "false";
}
function $ariaBool(signal) {
  return () => ariaBool(signal());
}

class CaptionButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: "toggleCaptions",
      _onPress: this._onPress.bind(this)
    });
  }
  static {
    this.props = ToggleButtonController.props;
  }
  onSetup() {
    this._media = useMediaContext();
    this.setAttributes({
      "data-active": this._isPressed.bind(this),
      "data-supported": () => !this._isHidden(),
      "aria-hidden": $ariaBool(this._isHidden.bind(this))
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-tooltip", "caption");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  _onPress(event) {
    this._media.remote.toggleCaptions(event);
  }
  _isPressed() {
    const { textTrack } = this._media.$state, track = textTrack();
    return !!track && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track);
  }
  _isHidden() {
    const { textTracks } = this._media.$state;
    return textTracks().filter(_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i).length == 0;
  }
  _getLabel() {
    const { textTrack } = this._media.$state;
    return textTrack() ? "Closed-Captions Off" : "Closed-Captions On";
  }
}

class FullscreenButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: "toggleFullscreen",
      _onPress: this._onPress.bind(this)
    });
  }
  static {
    this.props = {
      ...ToggleButtonController.props,
      target: "prefer-media"
    };
  }
  onSetup() {
    this._media = useMediaContext();
    const { fullscreen } = this._media.$state, isSupported = this._isSupported.bind(this);
    this.setAttributes({
      "data-active": fullscreen,
      "data-supported": isSupported,
      "aria-hidden": $ariaBool(() => !isSupported())
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-tooltip", "fullscreen");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  _onPress(event) {
    const remote = this._media.remote, target = this.$props.target();
    this._isPressed() ? remote.exitFullscreen(target, event) : remote.enterFullscreen(target, event);
  }
  _isPressed() {
    const { fullscreen } = this._media.$state;
    return fullscreen();
  }
  _isSupported() {
    const { canFullscreen } = this._media.$state;
    return canFullscreen();
  }
  _getLabel() {
    const { fullscreen } = this._media.$state;
    return fullscreen() ? "Exit Fullscreen" : "Enter Fullscreen";
  }
}

class MuteButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: "toggleMuted",
      _onPress: this._onPress.bind(this)
    });
  }
  static {
    this.props = ToggleButtonController.props;
  }
  onSetup() {
    this._media = useMediaContext();
    this.setAttributes({
      "data-muted": this._isPressed.bind(this),
      "data-state": this._getState.bind(this)
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-mute-button", "");
    el.setAttribute("data-media-tooltip", "mute");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  _onPress(event) {
    const remote = this._media.remote;
    this._isPressed() ? remote.unmute(event) : remote.mute(event);
  }
  _isPressed() {
    const { muted, volume } = this._media.$state;
    return muted() || volume() === 0;
  }
  _getLabel() {
    return this._isPressed() ? "Unmute" : "Mute";
  }
  _getState() {
    const { muted, volume } = this._media.$state, $volume = volume();
    if (muted() || $volume === 0)
      return "muted";
    else if ($volume >= 0.5)
      return "high";
    else if ($volume < 0.5)
      return "low";
  }
}

class PIPButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: "togglePictureInPicture",
      _onPress: this._onPress.bind(this)
    });
  }
  static {
    this.props = ToggleButtonController.props;
  }
  onSetup() {
    this._media = useMediaContext();
    const { pictureInPicture } = this._media.$state, isSupported = this._isSupported.bind(this);
    this.setAttributes({
      "data-active": pictureInPicture,
      "data-supported": isSupported,
      "aria-hidden": $ariaBool(() => !isSupported())
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-tooltip", "pip");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  _onPress(event) {
    const remote = this._media.remote;
    this._isPressed() ? remote.exitPictureInPicture(event) : remote.enterPictureInPicture(event);
  }
  _isPressed() {
    const { pictureInPicture } = this._media.$state;
    return pictureInPicture();
  }
  _isSupported() {
    const { canPictureInPicture } = this._media.$state;
    return canPictureInPicture();
  }
  _getLabel() {
    const { pictureInPicture } = this._media.$state;
    return pictureInPicture() ? "Exit Picture In Picture" : "Enter Picture In Picture";
  }
}

class SeekButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new FocusVisibleController();
  }
  static {
    this.props = {
      disabled: false,
      seconds: 30
    };
  }
  onSetup() {
    this._media = useMediaContext();
    const { seeking } = this._media.$state, { seconds } = this.$props, isSupported = this._isSupported.bind(this);
    this.setAttributes({
      seconds,
      "data-seeking": seeking,
      "data-supported": isSupported,
      "aria-hidden": $ariaBool(() => !isSupported())
    });
  }
  onAttach(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "button");
    el.setAttribute("data-media-tooltip", "seek");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.e)(el, this._getLabel.bind(this));
  }
  onConnect(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(el, this._onPress.bind(this));
  }
  _isSupported() {
    const { canSeek } = this._media.$state;
    return canSeek();
  }
  _getLabel() {
    const { seconds } = this.$props;
    return `Seek ${seconds() > 0 ? "forward" : "backward"} ${seconds()} seconds`;
  }
  _onPress(event) {
    const { seconds, disabled } = this.$props;
    if (disabled())
      return;
    const { currentTime } = this._media.$state, seekTo = currentTime() + seconds();
    this._media.remote.seek(seekTo, event);
  }
}

class LiveButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new FocusVisibleController();
  }
  static {
    this.props = {
      disabled: false
    };
  }
  onSetup() {
    this._media = useMediaContext();
    const { disabled } = this.$props, { live, liveEdge } = this._media.$state, isHidden = () => !live();
    this.setAttributes({
      "data-edge": liveEdge,
      "data-hidden": isHidden,
      "aria-disabled": $ariaBool(disabled),
      "aria-hidden": $ariaBool(isHidden)
    });
  }
  onAttach(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "button");
    el.setAttribute("data-media-tooltip", "live");
  }
  onConnect(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(el, this._onPress.bind(this));
  }
  _onPress(event) {
    const { disabled } = this.$props, { liveEdge } = this._media.$state;
    if (disabled() || liveEdge())
      return;
    this._media.remote.seekToLiveEdge(event);
  }
}

const sliderState = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
  min: 0,
  max: 100,
  value: 0,
  pointerValue: 0,
  focused: false,
  dragging: false,
  pointing: false,
  get active() {
    return this.dragging || this.focused || this.pointing;
  },
  get fillRate() {
    return calcRate(this.min, this.max, this.value);
  },
  get fillPercent() {
    return this.fillRate * 100;
  },
  get pointerRate() {
    return calcRate(this.min, this.max, this.pointerValue);
  },
  get pointerPercent() {
    return this.pointerRate * 100;
  }
});
function calcRate(min, max, value) {
  const range = max - min, offset = value - min;
  return range > 0 ? offset / range : 0;
}

function getClampedValue(min, max, value, step) {
  return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.p)(min, (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(value, (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.j)(step)), max);
}
function getValueFromRate(min, max, rate, step) {
  const boundRate = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.p)(0, rate, 1), range = max - min, fill = range * boundRate, stepRatio = fill / step, steps = step * stepRatio;
  return min + steps;
}

const SliderKeyDirection = {
  Left: -1,
  ArrowLeft: -1,
  Up: 1,
  ArrowUp: 1,
  Right: 1,
  ArrowRight: 1,
  Down: -1,
  ArrowDown: -1
};
class SliderEventsController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor(_delegate, _media) {
    super();
    this._delegate = _delegate;
    this._media = _media;
    this._provider = null;
    this._touchX = null;
    this._touchStartValue = null;
    this._onDocumentPointerMove = functionThrottle(
      (event) => {
        this._updatePointerValue(this._getPointerValue(event), event);
      },
      20,
      { leading: true }
    );
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._attachEventListeners.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._attachPointerListeners.bind(this));
    if (this._delegate._swipeGesture) {
      const provider = this._media.player.el?.querySelector(
        "media-provider,[data-media-provider]"
      );
      if (provider) {
        this._provider = provider;
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(provider, "touchstart", this._onTouchStart.bind(this));
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(provider, "touchmove", this._onTouchMove.bind(this));
      }
    }
  }
  _onTouchStart(event) {
    this._touchX = event.touches[0].clientX;
  }
  _onTouchMove(event) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(this._touchX))
      return;
    event.preventDefault();
    if (this.$state.dragging())
      return;
    const diff = event.touches[0].clientX - this._touchX;
    if (Math.abs(diff) > 20) {
      this._touchX = event.touches[0].clientX;
      this._touchStartValue = this.$state.value();
      this._onStartDragging(this._touchStartValue, event);
    }
  }
  _attachEventListeners() {
    if (this._delegate._isDisabled())
      return;
    this.listen("focus", this._onFocus.bind(this));
    this.listen("pointerenter", this._onPointerEnter.bind(this));
    this.listen("pointermove", this._onPointerMove.bind(this));
    this.listen("pointerleave", this._onPointerLeave.bind(this));
    this.listen("pointerdown", this._onPointerDown.bind(this));
    this.listen("keydown", this._onKeyDown.bind(this));
    this.listen("keyup", this._onKeyUp.bind(this));
  }
  _attachPointerListeners() {
    if (this._delegate._isDisabled() || !this.$state.dragging())
      return;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "pointerup", this._onDocumentPointerUp.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "pointermove", this._onDocumentPointerMove.bind(this));
    if (_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.g) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(document, "touchmove", this._onDocumentTouchMove.bind(this), {
        passive: false
      });
    }
  }
  _onFocus() {
    this._updatePointerValue(this.$state.value());
  }
  _updateValue(newValue, trigger) {
    const { value, min, max, dragging } = this.$state;
    const clampedValue = Math.max(min(), Math.min(newValue, max()));
    value.set(clampedValue);
    const event = this.createEvent("value-change", { detail: clampedValue, trigger });
    this.dispatch(event);
    this._delegate._onValueChange?.(event);
    if (dragging()) {
      const event2 = this.createEvent("drag-value-change", { detail: clampedValue, trigger });
      this.dispatch(event2);
      this._delegate._onDragValueChange?.(event2);
    }
  }
  _updatePointerValue(value, trigger) {
    const { pointerValue, dragging } = this.$state;
    pointerValue.set(value);
    this.dispatch("pointer-value-change", { detail: value, trigger });
    if (dragging()) {
      this._updateValue(value, trigger);
    }
  }
  _getPointerValue(event) {
    let thumbPositionRate, rect = this.el.getBoundingClientRect(), { min, max } = this.$state;
    if (this.$props.orientation() === "vertical") {
      const { bottom: trackBottom, height: trackHeight } = rect;
      thumbPositionRate = (trackBottom - event.clientY) / trackHeight;
    } else {
      if (this._touchX && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(this._touchStartValue)) {
        const { width } = this._provider.getBoundingClientRect(), rate = (event.clientX - this._touchX) / width, range = max() - min(), diff = range * Math.abs(rate);
        thumbPositionRate = (rate < 0 ? this._touchStartValue - diff : this._touchStartValue + diff) / range;
      } else {
        const { left: trackLeft, width: trackWidth } = rect;
        thumbPositionRate = (event.clientX - trackLeft) / trackWidth;
      }
    }
    return Math.max(
      min(),
      Math.min(
        max(),
        this._delegate._roundValue(
          getValueFromRate(min(), max(), thumbPositionRate, this._delegate._getStep())
        )
      )
    );
  }
  _onPointerEnter(event) {
    this.$state.pointing.set(true);
  }
  _onPointerMove(event) {
    const { dragging } = this.$state;
    if (dragging())
      return;
    this._updatePointerValue(this._getPointerValue(event), event);
  }
  _onPointerLeave(event) {
    this.$state.pointing.set(false);
  }
  _onPointerDown(event) {
    if (event.button !== 0)
      return;
    const value = this._getPointerValue(event);
    this._onStartDragging(value, event);
    this._updatePointerValue(value, event);
  }
  _onStartDragging(value, trigger) {
    const { dragging } = this.$state;
    if (dragging())
      return;
    dragging.set(true);
    this._media.remote.pauseControls(trigger);
    const event = this.createEvent("drag-start", { detail: value, trigger });
    this.dispatch(event);
    this._delegate._onDragStart?.(event);
  }
  _onStopDragging(value, trigger) {
    const { dragging } = this.$state;
    if (!dragging())
      return;
    dragging.set(false);
    this._media.remote.resumeControls(trigger);
    const event = this.createEvent("drag-end", { detail: value, trigger });
    this.dispatch(event);
    this._delegate._onDragEnd?.(event);
    this._touchX = null;
    this._touchStartValue = null;
  }
  _onKeyDown(event) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.$)(event)) {
      const trigger = event.trigger;
      if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.t)(trigger))
        event = trigger;
      else
        return;
    }
    const { key } = event;
    const { min, max } = this.$state;
    let newValue;
    if (key === "Home" || key === "PageUp") {
      newValue = min();
    } else if (key === "End" || key === "PageDown") {
      newValue = max();
    } else if (!event.metaKey && /[0-9]/.test(key)) {
      newValue = (max() - min()) / 10 * Number(key);
    }
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(newValue)) {
      this._updatePointerValue(newValue, event);
      this._updateValue(newValue, event);
      return;
    }
    const value = this._getKeyValue(event);
    if (!value)
      return;
    const repeat = key === this._lastDownKey;
    if (!this.$state.dragging() && repeat)
      this._onStartDragging(value, event);
    this._updatePointerValue(value, event);
    if (!repeat)
      this._updateValue(value, event);
    this._lastDownKey = key;
  }
  _onKeyUp(event) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.$)(event)) {
      const trigger = event.trigger;
      if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.t)(trigger))
        event = trigger;
      else
        return;
    }
    this._lastDownKey = "";
    const { dragging, value } = this.$state;
    if (!dragging())
      return;
    const newValue = this._getKeyValue(event) ?? value();
    this._updatePointerValue(newValue);
    this._onStopDragging(newValue, event);
  }
  _getKeyValue(event) {
    const { key, shiftKey } = event, isValidKey = Object.keys(SliderKeyDirection).includes(key);
    if (!isValidKey)
      return;
    const { shiftKeyMultiplier } = this.$props;
    const { value } = this.$state, step = this._delegate._getStep(), keyStep = this._delegate._getKeyStep();
    const modifiedStep = !shiftKey ? keyStep : keyStep * shiftKeyMultiplier(), direction = Number(SliderKeyDirection[key]), diff = modifiedStep * direction, steps = (value() + diff) / step;
    return Number((step * steps).toFixed(3));
  }
  // -------------------------------------------------------------------------------------------
  // Document (Pointer Events)
  // -------------------------------------------------------------------------------------------
  _onDocumentPointerUp(event) {
    if (event.button !== 0)
      return;
    const value = this._getPointerValue(event);
    this._updatePointerValue(value, event);
    this._onStopDragging(value, event);
  }
  _onDocumentTouchMove(event) {
    event.preventDefault();
  }
}

const sliderValueFormatContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)(() => ({}));

const sliderContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();

class SliderController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor(_delegate) {
    super();
    this._delegate = _delegate;
    this._updateSliderVars = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.K)(
      (fillPercent, pointerPercent) => {
        this.el?.style.setProperty("--slider-fill", fillPercent + "%");
        this.el?.style.setProperty("--slider-pointer", pointerPercent + "%");
      }
    );
  }
  static {
    this.props = {
      disabled: false,
      step: 1,
      keyStep: 1,
      orientation: "horizontal",
      shiftKeyMultiplier: 5
    };
  }
  onSetup() {
    this._media = useMediaContext();
    const focus = new FocusVisibleController();
    focus.attach(this);
    this.$state.focused = focus.focused.bind(focus);
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(sliderValueFormatContext)) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(sliderValueFormatContext);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(sliderContext, {
      _orientation: this.$props.orientation,
      _disabled: this._delegate._isDisabled,
      _preview: (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null)
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchDisabled.bind(this));
    this._setupAttrs();
    new SliderEventsController(this._delegate, this._media).attach(this);
  }
  onAttach(el) {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "slider");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "autocomplete", "off");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchCSSVars.bind(this));
  }
  // -------------------------------------------------------------------------------------------
  // Watch
  // -------------------------------------------------------------------------------------------
  _watchValue() {
    const { dragging, value, min, max } = this.$state;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(dragging))
      return;
    value.set(getClampedValue(min(), max(), value(), this._delegate._getStep()));
  }
  _watchDisabled() {
    if (!this._delegate._isDisabled())
      return;
    const { dragging, pointing } = this.$state;
    dragging.set(false);
    pointing.set(false);
  }
  // -------------------------------------------------------------------------------------------
  // ARIA
  // -------------------------------------------------------------------------------------------
  _getARIADisabled() {
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Z)(this._delegate._isDisabled());
  }
  // -------------------------------------------------------------------------------------------
  // Attributes
  // -------------------------------------------------------------------------------------------
  _setupAttrs() {
    const { orientation } = this.$props, { dragging, active, pointing } = this.$state;
    this.setAttributes({
      "data-dragging": dragging,
      "data-pointing": pointing,
      "data-active": active,
      "aria-disabled": this._getARIADisabled.bind(this),
      "aria-valuemin": this.$state.min,
      "aria-valuemax": this.$state.max,
      "aria-valuenow": this._delegate._getARIAValueNow,
      "aria-valuetext": this._delegate._getARIAValueText,
      "aria-orientation": orientation
    });
  }
  _watchCSSVars() {
    const { fillPercent, pointerPercent } = this.$state;
    this._updateSliderVars((0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(fillPercent(), 3), (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(pointerPercent(), 3));
  }
}

class Slider extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      ...SliderController.props,
      min: 0,
      max: 100,
      value: 0
    };
  }
  static {
    this.state = sliderState;
  }
  constructor() {
    super();
    new SliderController({
      _getStep: this.$props.step,
      _getKeyStep: this.$props.keyStep,
      _roundValue: Math.round,
      _isDisabled: this.$props.disabled,
      _getARIAValueNow: this._getARIAValueNow.bind(this),
      _getARIAValueText: this._getARIAValueText.bind(this)
    });
  }
  onSetup() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchMinMax.bind(this));
  }
  // -------------------------------------------------------------------------------------------
  // Props
  // -------------------------------------------------------------------------------------------
  _getARIAValueNow() {
    const { value } = this.$state;
    return Math.round(value());
  }
  _getARIAValueText() {
    const { value, max } = this.$state;
    return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(value() / max() * 100, 2) + "%";
  }
  // -------------------------------------------------------------------------------------------
  // Watch
  // -------------------------------------------------------------------------------------------
  _watchMinMax() {
    const { min, max } = this.$props;
    this.$state.min.set(min());
    this.$state.max.set(max());
  }
}

const cache = /* @__PURE__ */ new Map(), pending = /* @__PURE__ */ new Set(), registry = /* @__PURE__ */ new Set();
class ThumbnailsLoader {
  constructor($src, _media) {
    this.$src = $src;
    this._media = _media;
    this.$cues = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)([]);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLoadCues.bind(this));
    registry.add(this);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => registry.delete(this));
  }
  static create(src) {
    const media = useMediaContext();
    return new ThumbnailsLoader(src, media);
  }
  _onLoadCues() {
    const { canLoad } = this._media.$state;
    if (!canLoad())
      return;
    const controller = new AbortController(), { crossorigin } = this._media.$state;
    const src = this.$src();
    if (!src)
      return;
    if (cache.has(src)) {
      const cues = cache.get(src);
      cache.delete(src);
      cache.set(src, cues);
      if (cache.size > 30) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
      this.$cues.set(cache.get(src));
    } else if (!pending.has(src)) {
      pending.add(src);
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! media-captions */ "./node_modules/media-captions/dist/dev.js")).then(({ parseResponse }) => {
        parseResponse(
          fetch(src, {
            signal: controller.signal,
            credentials: (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.g)(crossorigin())
          })
        ).then(({ cues }) => {
          this.$cues.set(cues);
          for (const t of registry) {
            if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(t.$src) === src)
              t.$cues.set(cues);
          }
          cache.set(src, cues);
          pending.delete(src);
        }).catch(_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a1);
      });
    }
    return () => {
      this.$cues.set([]);
    };
  }
}

class Thumbnail extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._styleResets = [];
    this._requestResize = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.K)(this._resize.bind(this));
  }
  static {
    this.props = {
      src: "",
      time: 0
    };
  }
  static {
    this.state = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
      src: "",
      img: null,
      coords: null,
      activeCue: null,
      loading: false,
      error: null,
      hidden: false
    });
  }
  onSetup() {
    this._media = useMediaContext();
    this._thumbnails = ThumbnailsLoader.create(this.$props.src);
    this.setAttributes({
      "data-loading": this._isLoading.bind(this),
      "data-error": this._hasError.bind(this),
      "data-hidden": this.$state.hidden,
      "aria-hidden": $ariaBool(this.$state.hidden)
    });
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchImg.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHidden.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLoadStart.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onFindActiveCue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onResolveThumbnail.bind(this));
  }
  _watchImg() {
    const img = this.$state.img();
    if (!img)
      return;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(img, "load", this._onLoaded.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(img, "error", this._onError.bind(this));
  }
  _onLoadStart() {
    const { src, loading, error } = this.$state;
    src();
    loading.set(true);
    error.set(null);
  }
  _onLoaded() {
    const { loading, error } = this.$state;
    loading.set(false);
    error.set(null);
    this._requestResize();
  }
  _onError(event) {
    const { loading, error } = this.$state;
    loading.set(false);
    error.set(event);
  }
  _isLoading() {
    const { loading, hidden } = this.$state;
    return !hidden() && loading();
  }
  _hasError() {
    const { error } = this.$state;
    return !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(error());
  }
  _watchHidden() {
    const { hidden } = this.$state, { duration } = this._media.$state, cues = this._thumbnails.$cues();
    hidden.set(this._hasError() || !Number.isFinite(duration()) || cues.length === 0);
  }
  _getTime() {
    return this.$props.time();
  }
  _onFindActiveCue() {
    const time = this._getTime(), { activeCue } = this.$state, { duration } = this._media.$state, cues = this._thumbnails.$cues();
    if (!cues || !Number.isFinite(duration())) {
      activeCue.set(null);
      return;
    }
    activeCue.set((0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.f)(cues, time));
  }
  _onResolveThumbnail() {
    const { src } = this.$props, { coords, activeCue } = this.$state, cue = activeCue(), baseURL = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(src);
    if (!baseURL || !cue) {
      this.$state.src.set("");
      this._resetStyles();
      return;
    }
    const [_src, _coords = ""] = (cue.text || "").split("#");
    coords.set(this._resolveThumbnailCoords(_coords));
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(coords)) {
      this._resetStyles();
      return;
    }
    this.$state.src.set(this._resolveThumbnailSrc(baseURL, _src));
    this._requestResize();
  }
  _resolveThumbnailSrc(baseURL, src) {
    return !/https?:/.test(src) ? `${baseURL.split("/").slice(0, -1).join("/")}${src.replace(/^\/?/, "/")}`.replace(
      /^\/\//,
      "/"
    ) : src;
  }
  _resolveThumbnailCoords(coords) {
    const [props, values] = coords.split("="), resolvedCoords = {}, coordValues = values?.split(",");
    if (!props || !values)
      return null;
    for (let i = 0; i < props.length; i++)
      resolvedCoords[props[i]] = +coordValues[i];
    return resolvedCoords;
  }
  _resize() {
    if (!this.scope)
      return;
    const img = this.$state.img(), coords = this.$state.coords();
    if (!img || !coords || !this.el)
      return;
    const { w, h, x, y } = coords, { maxWidth, maxHeight, minWidth, minHeight } = getComputedStyle(this.el), minRatio = Math.max(parseInt(minWidth) / w, parseInt(minHeight) / h), maxRatio = Math.min(parseInt(maxWidth) / w, parseInt(maxHeight) / h), scale = maxRatio < 1 ? maxRatio : minRatio > 1 ? minRatio : 1;
    this._style(this.el, "--thumbnail-width", `${w * scale}px`);
    this._style(this.el, "--thumbnail-height", `${h * scale}px`);
    this._style(img, "width", `${img.naturalWidth * scale}px`);
    this._style(img, "height", `${img.naturalHeight * scale}px`);
    this._style(img, "transform", `translate(-${x * scale}px, -${y * scale}px)`);
    this._style(img, "max-width", "none");
  }
  _style(el, name, value) {
    el.style.setProperty(name, value);
    this._styleResets.push(() => el.style.removeProperty(name));
  }
  _resetStyles() {
    for (const reset of this._styleResets)
      reset();
    this._styleResets = [];
  }
}

var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
class SliderVideo extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      src: null
    };
  }
  static {
    this.state = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
      video: null,
      src: null,
      canPlay: false,
      error: null,
      hidden: false
    });
  }
  get video() {
    return this.$state.video();
  }
  onSetup() {
    this._media = useMediaContext();
    this._slider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.u)(Slider.state);
    this.setAttributes({
      "data-loading": this._isLoading.bind(this),
      "data-hidden": this.$state.hidden,
      "data-error": this._hasError.bind(this),
      "aria-hidden": $ariaBool(this.$state.hidden)
    });
  }
  onAttach(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchVideo.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchSrc.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHidden.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onSrcChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onUpdateTime.bind(this));
  }
  _watchVideo() {
    const video = this.$state.video();
    if (!video)
      return;
    if (video.readyState >= 2)
      this._onCanPlay();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(video, "canplay", this._onCanPlay.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(video, "error", this._onError.bind(this));
  }
  _watchSrc() {
    const { src } = this.$state, { canLoad } = this._media.$state;
    src.set(canLoad() ? this.$props.src() : null);
  }
  _isLoading() {
    const { canPlay, hidden } = this.$state;
    return !canPlay() && !hidden();
  }
  _hasError() {
    const { error } = this.$state;
    return !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(error);
  }
  _watchHidden() {
    const { src, hidden } = this.$state, { canLoad, duration } = this._media.$state;
    hidden.set(canLoad() && (!src() || this._hasError() || !Number.isFinite(duration())));
  }
  _onSrcChange() {
    const { src, canPlay, error } = this.$state;
    src();
    canPlay.set(false);
    error.set(null);
  }
  _onCanPlay(event) {
    const { canPlay, error } = this.$state;
    canPlay.set(true);
    error.set(null);
    this.dispatch("can-play", { trigger: event });
  }
  _onError(event) {
    const { canPlay, error } = this.$state;
    canPlay.set(false);
    error.set(event);
    this.dispatch("error", { trigger: event });
  }
  _onUpdateTime() {
    const { video, canPlay } = this.$state, { duration } = this._media.$state, { pointerRate } = this._slider, media = video(), canUpdate = canPlay() && media && Number.isFinite(duration()) && Number.isFinite(pointerRate());
    if (canUpdate) {
      media.currentTime = pointerRate() * duration();
    }
  }
}
__decorateClass$c([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], SliderVideo.prototype, "video", 1);

function padNumberWithZeroes(num, expectedLength) {
  const str = String(num);
  const actualLength = str.length;
  const shouldPad = actualLength < expectedLength;
  if (shouldPad) {
    const padLength = expectedLength - actualLength;
    const padding = `0`.repeat(padLength);
    return `${padding}${num}`;
  }
  return str;
}
function parseTime(duration) {
  const hours = Math.trunc(duration / 3600);
  const minutes = Math.trunc(duration % 3600 / 60);
  const seconds = Math.trunc(duration % 60);
  const fraction = Number((duration - Math.trunc(duration)).toPrecision(3));
  return {
    hours,
    minutes,
    seconds,
    fraction
  };
}
function formatTime(duration, shouldPadHours = false, shouldPadMinutes = false, shouldAlwaysShowHours = false) {
  const { hours, minutes, seconds } = parseTime(duration);
  const paddedHours = shouldPadHours ? padNumberWithZeroes(hours, 2) : hours;
  const paddedMinutes = shouldPadMinutes ? padNumberWithZeroes(minutes, 2) : minutes;
  const paddedSeconds = padNumberWithZeroes(seconds, 2);
  if (hours > 0 || shouldAlwaysShowHours) {
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }
  return `${paddedMinutes}:${paddedSeconds}`;
}
function formatSpokenTime(duration) {
  const spokenParts = [];
  const { hours, minutes, seconds } = parseTime(duration);
  if (hours > 0) {
    spokenParts.push(`${hours} hour`);
  }
  if (minutes > 0) {
    spokenParts.push(`${minutes} min`);
  }
  if (seconds > 0 || spokenParts.length === 0) {
    spokenParts.push(`${seconds} sec`);
  }
  return spokenParts.join(" ");
}

var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
class SliderValue extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      type: "current",
      format: null,
      showHours: false,
      padHours: false,
      padMinutes: false,
      decimalPlaces: 2
    };
  }
  onSetup() {
    this._slider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.u)(Slider.state);
    this._format = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(sliderValueFormatContext);
    this._text = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(this.getValueText.bind(this));
  }
  getValueText() {
    const { type, format, decimalPlaces, padHours, padMinutes, showHours } = this.$props;
    const { value: sliderValue, pointerValue, min, max } = this._slider;
    const value = type() === "current" ? sliderValue() : pointerValue();
    if (format() === "percent") {
      const range = max() - min();
      const percent = value / range * 100;
      return (this._format.percent ?? _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(percent, decimalPlaces()) + "\uFE6A";
    } else if (format() === "time") {
      return (this._format.time ?? formatTime)(value, padHours(), padMinutes(), showHours());
    } else {
      return this._format.value?.(value) ?? value.toFixed(2);
    }
  }
}
__decorateClass$b([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], SliderValue.prototype, "getValueText", 1);

class SliderPreview extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      offset: 0,
      noClamp: false
    };
  }
  onSetup() {
    this._slider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(sliderContext);
    const { active } = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.u)(Slider.state);
    this.setAttributes({
      "data-visible": active
    });
  }
  onAttach(el) {
    Object.assign(el.style, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content"
    });
  }
  onConnect(el) {
    const { _preview } = this._slider;
    _preview.set(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => _preview.set(null));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._updatePlacement.bind(this));
    const resize = new ResizeObserver(this._updatePlacement.bind(this));
    resize.observe(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => resize.disconnect());
  }
  _updatePlacement() {
    const { _disabled, _orientation } = this._slider;
    if (_disabled())
      return;
    const el = this.el, { offset, noClamp } = this.$props;
    updateSliderPreviewPlacement(el, {
      clamp: !noClamp(),
      offset: offset(),
      orientation: _orientation()
    });
  }
}
function updateSliderPreviewPlacement(el, {
  clamp,
  offset,
  orientation
}) {
  const { width, height } = el.getBoundingClientRect(), styles = {
    top: null,
    right: null,
    bottom: null,
    left: null
  };
  styles[orientation === "horizontal" ? "bottom" : "left"] = `calc(100% + var(--media-slider-preview-offset, ${offset}px))`;
  if (orientation === "horizontal") {
    const widthHalf = width / 2;
    if (!clamp) {
      styles.left = `calc(var(--slider-pointer) - ${widthHalf}px)`;
    } else {
      const leftClamp = `max(0px, calc(var(--slider-pointer) - ${widthHalf}px))`, rightClamp = `calc(100% - ${width}px)`;
      styles.left = `min(${leftClamp}, ${rightClamp})`;
    }
  } else {
    const heightHalf = height / 2;
    if (!clamp) {
      styles.bottom = `calc(var(--slider-pointer) - ${heightHalf}px)`;
    } else {
      const topClamp = `max(${heightHalf}px, calc(var(--slider-pointer) - ${heightHalf}px))`, bottomClamp = `calc(100% - ${height}px)`;
      styles.bottom = `min(${topClamp}, ${bottomClamp})`;
    }
  }
  Object.assign(el.style, styles);
}

class VolumeSlider extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._throttleVolumeChange = functionThrottle(this._onVolumeChange.bind(this), 25);
  }
  static {
    this.props = SliderController.props;
  }
  static {
    this.state = sliderState;
  }
  onSetup() {
    this._media = useMediaContext();
    new SliderController({
      _getStep: this.$props.step,
      _getKeyStep: this.$props.keyStep,
      _isDisabled: this.$props.disabled,
      _roundValue: Math.round,
      _getARIAValueNow: this._getARIAValueNow.bind(this),
      _getARIAValueText: this._getARIAValueText.bind(this),
      _onDragValueChange: this._onDragValueChange.bind(this),
      _onValueChange: this._onValueChange.bind(this)
    }).attach(this);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchVolume.bind(this));
  }
  onAttach(el) {
    el.setAttribute("data-media-volume-slider", "");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "aria-label", "Media volume");
    const { canSetVolume } = this._media.$state;
    this.setAttributes({
      "data-supported": canSetVolume,
      "aria-hidden": $ariaBool(() => !canSetVolume())
    });
  }
  _getARIAValueNow() {
    const { value } = this.$state;
    return Math.round(value());
  }
  _getARIAValueText() {
    const { value, max } = this.$state;
    return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(value() / max() * 100, 2) + "%";
  }
  _watchVolume() {
    const { muted, volume } = this._media.$state;
    const newValue = muted() ? 0 : volume() * 100;
    this.$state.value.set(newValue);
    this.dispatch("value-change", { detail: newValue });
  }
  _onVolumeChange(event) {
    if (!event.trigger)
      return;
    const mediaVolume = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(event.detail / 100, 3);
    this._media.remote.changeVolume(mediaVolume, event);
  }
  _onValueChange(event) {
    this._throttleVolumeChange(event);
  }
  _onDragValueChange(event) {
    this._throttleVolumeChange(event);
  }
}

class TimeSlider extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._chapter = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._playingBeforeDragStart = false;
    new SliderController({
      _swipeGesture: true,
      _getStep: this._getStep.bind(this),
      _getKeyStep: this._getKeyStep.bind(this),
      _isDisabled: this._isDisabled.bind(this),
      _roundValue: this._roundValue,
      _getARIAValueNow: this._getARIAValueNow.bind(this),
      _getARIAValueText: this._getARIAValueText.bind(this),
      _onDragStart: this._onDragStart.bind(this),
      _onDragValueChange: this._onDragValueChange.bind(this),
      _onDragEnd: this._onDragEnd.bind(this),
      _onValueChange: this._onValueChange.bind(this)
    });
  }
  static {
    this.props = {
      ...SliderController.props,
      pauseWhileDragging: false,
      seekingRequestThrottle: 100
    };
  }
  static {
    this.state = sliderState;
  }
  onSetup() {
    this._media = useMediaContext();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(sliderValueFormatContext, {
      value: this._formatValue.bind(this),
      time: this._formatTime.bind(this)
    });
    this.setAttributes({
      "data-chapters": this._hasChapters.bind(this)
    });
    this.setStyles({
      "--slider-progress": this._calcBufferedPercent.bind(this)
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchCurrentTime.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchSeekingThrottle.bind(this));
  }
  onAttach(el) {
    el.setAttribute("data-media-time-slider", "");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "aria-label", "Media time");
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPreviewing.bind(this));
    (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.o)(this._media.textTracks, "chapters", this._chapter.set);
  }
  _calcBufferedPercent() {
    const { bufferedEnd, duration } = this._media.$state;
    return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(Math.min(bufferedEnd() / Math.max(duration(), 1), 1) * 100, 3) + "%";
  }
  _hasChapters() {
    const { duration } = this._media.$state;
    return this._chapter()?.cues.length && Number.isFinite(duration()) && duration() > 0;
  }
  _watchSeekingThrottle() {
    this._dispatchSeeking = functionThrottle(
      this._seeking.bind(this),
      this.$props.seekingRequestThrottle()
    );
  }
  _watchCurrentTime() {
    const { currentTime } = this._media.$state, { value, dragging } = this.$state, newValue = this._timeToPercent(currentTime());
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(dragging)) {
      value.set(newValue);
      this.dispatch("value-change", { detail: newValue });
    }
  }
  _watchPreviewing() {
    const player = this._media.player.el, { _preview } = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(sliderContext);
    player && _preview() && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(player, "data-preview", this.$state.active());
  }
  _seeking(time, event) {
    this._media.remote.seeking(time, event);
  }
  _seek(time, percent, event) {
    this._dispatchSeeking.cancel();
    const { live } = this._media.$state;
    if (live() && percent >= 99) {
      this._media.remote.seekToLiveEdge(event);
      return;
    }
    this._media.remote.seek(time, event);
  }
  _onDragStart(event) {
    const { pauseWhileDragging } = this.$props;
    if (pauseWhileDragging()) {
      const { paused } = this._media.$state;
      this._playingBeforeDragStart = !paused();
      this._media.remote.pause(event);
    }
  }
  _onDragValueChange(event) {
    this._dispatchSeeking(this._percentToTime(event.detail), event);
  }
  _onDragEnd(event) {
    const percent = event.detail;
    this._seek(this._percentToTime(percent), percent, event);
    const { pauseWhileDragging } = this.$props;
    if (pauseWhileDragging() && this._playingBeforeDragStart) {
      this._media.remote.play(event);
      this._playingBeforeDragStart = false;
    }
  }
  _onValueChange(event) {
    const { dragging } = this.$state;
    if (dragging() || !event.trigger)
      return;
    this._onDragEnd(event);
  }
  // -------------------------------------------------------------------------------------------
  // Props
  // -------------------------------------------------------------------------------------------
  _getStep() {
    const value = this.$props.step() / this._media.$state.duration() * 100;
    return Number.isFinite(value) ? value : 1;
  }
  _getKeyStep() {
    const value = this.$props.keyStep() / this._media.$state.duration() * 100;
    return Number.isFinite(value) ? value : 1;
  }
  _roundValue(value) {
    return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(value, 3);
  }
  _isDisabled() {
    const { canSeek } = this._media.$state;
    return this.$props.disabled() || !canSeek();
  }
  // -------------------------------------------------------------------------------------------
  // ARIA
  // -------------------------------------------------------------------------------------------
  _getARIAValueNow() {
    const { value } = this.$state;
    return Math.round(value());
  }
  _getARIAValueText() {
    const time = this._percentToTime(this.$state.value()), { duration } = this._media.$state;
    return Number.isFinite(time) ? `${formatSpokenTime(time)} out of ${formatSpokenTime(duration())}` : "live";
  }
  // -------------------------------------------------------------------------------------------
  // Format
  // -------------------------------------------------------------------------------------------
  _percentToTime(percent) {
    const { duration } = this._media.$state;
    return Math.round(percent / 100 * duration());
  }
  _timeToPercent(time) {
    const { liveEdge, duration } = this._media.$state, rate = Math.max(0, Math.min(1, liveEdge() ? 1 : Math.min(time, duration()) / duration()));
    return Number.isNaN(rate) ? 0 : Number.isFinite(rate) ? rate * 100 : 100;
  }
  _formatValue(percent) {
    const time = this._percentToTime(percent), { live, duration } = this._media.$state;
    return Number.isFinite(time) ? (live() ? time - duration() : time).toFixed(0) : "LIVE";
  }
  _formatTime(percent, padHours, padMinutes, showHours) {
    const time = this._percentToTime(percent), { live, duration } = this._media.$state, value = live() ? time - duration() : time;
    return Number.isFinite(time) ? `${value < 0 ? "-" : ""}${formatTime(
      Math.abs(value),
      padHours,
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(padMinutes) ? Math.abs(value) >= 3600 : padMinutes,
      showHours
    )}` : "LIVE";
  }
}

var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
class SliderChapters extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._titleEl = null;
    this._chapter = null;
    this._currentTrack = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._refs = [];
    this._cues = [];
    this._$cues = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(this._cues);
    this._activeIndex = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(-1);
    this._activePointerIndex = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(-1);
    this._bufferedIndex = 0;
    this._updateBufferedPercent = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.K)((bufferedPercent) => {
      let percent;
      for (let i = this._bufferedIndex; i < this._refs.length; i++) {
        percent = this._calcPercent(this._cues[i], bufferedPercent);
        this._refs[i].style.setProperty("--chapter-progress", percent + "%");
        if (percent < 100) {
          this._bufferedIndex = i;
          break;
        }
      }
    });
    this._bufferedPercent = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(this._calcMediaBufferedPercent.bind(this));
  }
  static {
    this.props = {
      disabled: false
    };
  }
  get cues() {
    return this._$cues();
  }
  get activeCue() {
    return this._cues[this._activeIndex()] || null;
  }
  get activePointerCue() {
    return this._cues[this._activePointerIndex()] || null;
  }
  onSetup() {
    this._media = useMediaContext();
    this._sliderState = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.u)(TimeSlider.state);
  }
  onAttach(el) {
    const onChapterChange = this._onChapterChange.bind(this);
    (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.o)(this._media.textTracks, "chapters", onChapterChange);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onTrackChange.bind(this));
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._reset.bind(this));
  }
  setRefs(refs) {
    this._refs = refs;
    this._updateScope?.dispose();
    if (this._refs.length === 1) {
      const el = this._refs[0];
      el.style.width = "100%";
      el.style.setProperty("--chapter-fill", "var(--slider-fill)");
      el.style.setProperty("--chapter-progress", "var(--slider-progress)");
    } else if (this._refs.length > 0) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.s)(() => this._update(), this._updateScope = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a2)());
    }
  }
  _setTrack(track) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._currentTrack) === track)
      return;
    this._currentTrack.set(track);
    this._reset();
    this._build();
  }
  _build() {
    const track = this._currentTrack();
    if (!track?.cues.length || this._cues.length)
      return;
    const chapters = this._fillGaps(track.cues);
    this._cues = chapters;
    this._$cues.set(chapters);
    if (chapters[0].startTime === 0) {
      this._activeIndex.set(0);
    }
  }
  _reset() {
    if (!this._cues.length)
      return;
    this._refs = [];
    this._cues = [];
    this._$cues.set(this._cues);
    this._activeIndex.set(-1);
    this._activePointerIndex.set(-1);
    this._bufferedIndex = 0;
    this._updateScope?.dispose();
  }
  _update() {
    this._updateContainerWidths();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchFillPercent.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPointerPercent.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchBufferedPercent.bind(this));
  }
  _getEndTime() {
    return this._cues[this._cues.length - 1].endTime;
  }
  _updateContainerWidths() {
    let cue, endTime = this._getEndTime();
    for (let i = 0; i < this._cues.length; i++) {
      cue = this._cues[i];
      this._refs[i].style.width = (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)((cue.endTime - cue.startTime) / endTime * 100, 3) + "%";
    }
  }
  _watchFillPercent() {
    const { liveEdge } = this._media.$state;
    let { fillPercent, value } = this._sliderState, prevActiveIndex = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._activeIndex), currentChapter = this._cues[prevActiveIndex], currentActiveIndex = this._findActiveChapterIndex(
      currentChapter.startTime <= (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(value) ? prevActiveIndex : 0,
      fillPercent()
    );
    if (liveEdge()) {
      this._updateFillPercents(0, this._cues.length, "100%");
    } else if (currentActiveIndex > prevActiveIndex) {
      this._updateFillPercents(prevActiveIndex, currentActiveIndex, "100%");
    } else if (currentActiveIndex < prevActiveIndex) {
      this._updateFillPercents(currentActiveIndex + 1, prevActiveIndex + 1, "0%");
    }
    const percent = liveEdge() ? "100%" : this._calcPercent(this._cues[currentActiveIndex], fillPercent()) + "%";
    this._updateFillPercent(this._refs[currentActiveIndex], percent);
    this._activeIndex.set(currentActiveIndex);
  }
  _watchPointerPercent() {
    let { pointing, pointerPercent } = this._sliderState;
    if (!pointing()) {
      this._activePointerIndex.set(-1);
      return;
    }
    const activeIndex = this._findActiveChapterIndex(0, pointerPercent());
    this._activePointerIndex.set(activeIndex);
  }
  _updateFillPercents(start, end, percent) {
    for (let i = start; i < end; i++)
      this._updateFillPercent(this._refs[i], percent);
  }
  _updateFillPercent(ref, percent) {
    ref.style.setProperty("--chapter-fill", percent);
  }
  _findActiveChapterIndex(startIndex, percent) {
    let chapterPercent = 0;
    for (let i = startIndex; i < this._cues.length; i++) {
      chapterPercent = this._calcPercent(this._cues[i], percent);
      if (chapterPercent >= 0 && chapterPercent < 100)
        return i;
    }
    return 0;
  }
  _watchBufferedPercent() {
    this._updateBufferedPercent(this._bufferedPercent());
  }
  _calcMediaBufferedPercent() {
    const { bufferedEnd, duration } = this._media.$state;
    return (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(Math.min(bufferedEnd() / Math.max(duration(), 1), 1), 3) * 100;
  }
  _calcPercent(cue, percent) {
    const lastChapter = this._cues[this._cues.length - 1], startPercent = cue.startTime / lastChapter.endTime * 100, endPercent = cue.endTime / lastChapter.endTime * 100;
    return Math.max(
      0,
      (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(
        percent >= endPercent ? 100 : (percent - startPercent) / (endPercent - startPercent) * 100,
        3
      )
    );
  }
  _fillGaps(cues) {
    const chapters = [];
    if (cues[0].startTime !== 0) {
      chapters.push(new window.VTTCue(0, cues[0].startTime, ""));
    }
    for (let i = 0; i < cues.length - 1; i++) {
      const currentCue = cues[i], nextCue = cues[i + 1];
      chapters.push(currentCue);
      if (nextCue) {
        const timeDiff = nextCue.startTime - currentCue.endTime;
        if (timeDiff > 0) {
          chapters.push(new window.VTTCue(currentCue.endTime, currentCue.endTime + timeDiff, ""));
        }
      }
    }
    chapters.push(cues[cues.length - 1]);
    return chapters;
  }
  _onChapterChange(track) {
    this._chapter = track;
    this._onTrackChange();
  }
  _onTrackChange() {
    if (!this.scope)
      return;
    const { disabled } = this.$props;
    if (disabled())
      return;
    this._setTrack(this._chapter);
    this._titleEl = this._findParentSlider()?.querySelector('[data-part="chapter-title"]') || null;
    if (this._titleEl)
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onChapterTitleChange.bind(this));
    return () => {
      this._setTrack(null);
      if (this._titleEl) {
        this._titleEl.textContent = "";
        this._titleEl = null;
      }
    };
  }
  _onChapterTitleChange() {
    const cue = this.activePointerCue || this.activeCue;
    if (this._titleEl)
      this._titleEl.textContent = cue?.text || "";
  }
  _findParentSlider() {
    let node = this.el;
    while (node && node.getAttribute("role") !== "slider") {
      node = node.parentElement;
    }
    return node;
  }
}
__decorateClass$a([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], SliderChapters.prototype, "cues", 1);
__decorateClass$a([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], SliderChapters.prototype, "activeCue", 1);
__decorateClass$a([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], SliderChapters.prototype, "activePointerCue", 1);
__decorateClass$a([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], SliderChapters.prototype, "setRefs", 1);

const menuContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();

const FOCUSABLE_ELEMENTS_SELECTOR = /* @__PURE__ */ [
  "a[href]",
  "[tabindex]",
  "input",
  "select",
  "button"
].map((selector) => `${selector}:not([aria-hidden])`).join(",");
const VALID_KEYS = /* @__PURE__ */ new Set([
  "Escape",
  "Tab",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "PageUp",
  "End",
  "PageDown",
  "Enter",
  " "
]);
class MenuFocusController {
  constructor(_delegate) {
    this._delegate = _delegate;
    this._index = 0;
    this._el = null;
    this._elements = [];
  }
  get _items() {
    return this._elements;
  }
  _attachMenu(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(el, "focus", this._onFocus.bind(this));
    this._el = el;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      this._el = null;
    });
    return this;
  }
  _listen() {
    if (!this._el)
      return;
    this._update();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._el, "keyup", this._onKeyUp.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._el, "keydown", this._onKeyDown.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      this._index = 0;
      this._elements = [];
    });
  }
  _update() {
    this._index = 0;
    this._elements = this._getFocusableElements();
  }
  _scroll(index = this._findActiveIndex()) {
    const element = this._elements[index], container = this._delegate._getScrollContainer();
    if (element && container) {
      requestAnimationFrame(() => {
        container.scrollTop = element.offsetTop - container.offsetHeight / 2 + element.offsetHeight / 2;
      });
    }
  }
  _focusAt(index) {
    this._index = index;
    this._elements[index]?.focus();
    this._scroll(index);
  }
  _findActiveIndex() {
    return this._elements.findIndex((el) => el.getAttribute("aria-checked") === "true");
  }
  _onFocus() {
    this._update();
    setTimeout(() => {
      const index = this._findActiveIndex();
      this._focusAt(index >= 0 ? index : 0);
    }, 100);
  }
  _onKeyUp(event) {
    if (!VALID_KEYS.has(event.key))
      return;
    event.stopPropagation();
    event.preventDefault();
  }
  _onKeyDown(event) {
    if (!VALID_KEYS.has(event.key))
      return;
    event.stopPropagation();
    event.preventDefault();
    switch (event.key) {
      case "Escape":
        this._delegate._closeMenu(event);
        break;
      case "Tab":
        this._focusAt(this._nextIndex(event.shiftKey ? -1 : 1));
        break;
      case "ArrowUp":
        this._focusAt(this._nextIndex(-1));
        break;
      case "ArrowDown":
        this._focusAt(this._nextIndex(1));
        break;
      case "Home":
      case "PageUp":
        this._focusAt(0);
        break;
      case "End":
      case "PageDown":
        this._focusAt(this._elements.length - 1);
        break;
    }
  }
  _nextIndex(delta) {
    let index = this._index;
    do {
      index = (index + delta + this._elements.length) % this._elements.length;
    } while (this._elements[index]?.offsetParent === null);
    return index;
  }
  _getFocusableElements() {
    if (!this._el)
      return [];
    const focusableElements = this._el.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR), elements = [];
    const is = (node) => {
      return node.getAttribute("role") === "menu";
    };
    for (const el of focusableElements) {
      if (el instanceof HTMLElement && el.offsetParent !== null && // does not have display: none
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.i)(this._el, el, is)) {
        elements.push(el);
      }
    }
    return elements;
  }
}

var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
let idCount = 0;
class Menu extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._expanded = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    this._disabled = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    this._trigger = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._content = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._isTriggerDisabled = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    this._submenus = /* @__PURE__ */ new Set();
    this._menuObserver = null;
    this._removeSubmenuBind = this._removeSubmenu.bind(this);
    this._onSubmenuOpenBind = this._onSubmenuOpen.bind(this);
    this._onSubmenuCloseBind = this._onSubmenuClose.bind(this);
    const { showDelay } = this.$props;
    this._popper = new Popper({
      _trigger: this._trigger,
      _content: this._content,
      _showDelay: showDelay,
      _listen: (trigger, show, hide) => {
        (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(trigger, (event) => {
          if (this._expanded())
            hide(event);
          else
            show(event);
        });
        const closeTarget = this._getCloseTarget();
        if (closeTarget) {
          (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(closeTarget, (event) => {
            event.stopPropagation();
            hide(event);
          });
        }
      },
      _onChange: this._onExpandedChange.bind(this)
    });
  }
  static {
    this.props = {
      showDelay: 0
    };
  }
  get triggerElement() {
    return this._trigger();
  }
  get contentElement() {
    return this._content();
  }
  get isSubmenu() {
    return !!this._parentMenu;
  }
  onSetup() {
    this._media = useMediaContext();
    const currentIdCount = ++idCount;
    this._menuId = `media-menu-${currentIdCount}`;
    this._menuButtonId = `media-menu-button-${currentIdCount}`;
    this._focus = new MenuFocusController({
      _getScrollContainer: this._findScrollContainer.bind(this),
      _closeMenu: this.close.bind(this)
    });
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._parentMenu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
    this.setAttributes({
      "data-open": this._expanded,
      "data-submenu": this.isSubmenu,
      "data-disabled": this._isDisabled.bind(this)
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(menuContext, {
      _button: this._trigger,
      _expanded: this._expanded,
      _hint: (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(""),
      _disable: this._disable.bind(this),
      _attachMenuButton: this._attachMenuButton.bind(this),
      _attachMenuItems: this._attachMenuItems.bind(this),
      _attachObserver: this._attachObserver.bind(this),
      _disableMenuButton: this._disableMenuButton.bind(this),
      _addSubmenu: this._addSubmenu.bind(this)
    });
  }
  onAttach(el) {
    el.style.setProperty("display", "contents");
    this._focus._attachMenu(el);
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchExpanded.bind(this));
    if (this.isSubmenu)
      this._parentMenu?._addSubmenu(this);
    requestAnimationFrame(() => {
      this._onResize();
    });
  }
  onDestroy() {
    this._trigger.set(null);
    this._content.set(null);
    this._menuObserver = null;
  }
  _watchExpanded() {
    const expanded = this._isExpanded();
    this._onResize();
    this._updateMenuItemsHidden(expanded);
    if (!expanded)
      return;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      const { height } = this._media.$state, content = this._content();
      content && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(content, "--player-height", height() + "px");
    });
    this._focus._listen();
    this.listen("pointerup", this._onPointerUp.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(window, "pointerup", this._onWindowPointerUp.bind(this));
  }
  _attachMenuButton(button) {
    const el = button.el, isMenuItem = this.isSubmenu, isARIADisabled = $ariaBool(this._isDisabled.bind(this));
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", isMenuItem ? "-1" : "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", isMenuItem ? "menuitem" : "button");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "id", this._menuButtonId);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "aria-haspopup", "menu");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "aria-expanded", "false");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-submenu", this.isSubmenu);
    if (!this.isSubmenu) {
      this._stopClickPropagation(el);
    }
    const watchAttrs = () => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-open", this._expanded());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "aria-disabled", isARIADisabled());
    };
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(watchAttrs);
    this._trigger.set(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      this._trigger.set(null);
    });
  }
  _attachMenuItems(items) {
    const el = items.el;
    el.style.setProperty("display", "none");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "id", this._menuId);
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "menu");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", "-1");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-submenu", this.isSubmenu);
    this._content.set(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => this._content.set(null));
    if (!this.isSubmenu) {
      this._stopClickPropagation(el);
    }
    const watchAttrs = () => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(el, "data-open", this._expanded());
    };
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(watchAttrs);
    this._focus._attachMenu(el);
    this._updateMenuItemsHidden(false);
    requestAnimationFrame(this._onResize.bind(this));
  }
  _attachObserver(observer) {
    this._menuObserver = observer;
  }
  _stopClickPropagation(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(el, "click", (e) => e.stopPropagation());
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(el, "pointerup", (e) => e.stopPropagation());
  }
  _updateMenuItemsHidden(expanded) {
    const content = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._content);
    if (content)
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(content, "aria-hidden", (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!expanded));
  }
  _disableMenuButton(disabled) {
    this._isTriggerDisabled.set(disabled);
  }
  _onExpandedChange(isExpanded, event) {
    event?.stopPropagation();
    if (this._expanded() === isExpanded)
      return;
    if (this._isDisabled()) {
      if (isExpanded)
        this._popper.hide(event);
      return;
    }
    const trigger = this._trigger(), content = this._content();
    if (trigger) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(trigger, "aria-controls", isExpanded && this._menuId);
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(trigger, "aria-expanded", (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isExpanded));
    }
    if (content)
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(content, "aria-labelledby", isExpanded && this._menuButtonId);
    this._expanded.set(isExpanded);
    this._toggleMediaControls(event);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.t)(event)) {
      if (isExpanded) {
        content?.focus();
      } else {
        trigger?.focus();
      }
      for (const el of [this.el, content]) {
        el && el.setAttribute("data-keyboard", "");
      }
    } else {
      for (const el of [this.el, content]) {
        el && el.removeAttribute("data-keyboard");
      }
    }
    this.dispatch(isExpanded ? "open" : "close", { trigger: event });
    if (isExpanded) {
      if (!this.isSubmenu && this._media.activeMenu !== this) {
        this._media.activeMenu?.close(event);
        this._media.activeMenu = this;
      }
      this._menuObserver?._onOpen?.(event);
    } else {
      if (this.isSubmenu) {
        setTimeout(() => {
          for (const el of this._submenus)
            el.close(event);
        }, 300);
      } else {
        this._media.activeMenu = null;
      }
      this._menuObserver?._onClose?.(event);
    }
    if (isExpanded && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.t)(event)) {
      requestAnimationFrame(() => {
        this._focus._update();
        setTimeout(() => {
          this._focus._scroll();
        }, 100);
      });
    }
  }
  _isExpanded() {
    return !this._isDisabled() && this._expanded();
  }
  _isDisabled() {
    return this._disabled() || this._isTriggerDisabled();
  }
  _disable(disabled) {
    this._disabled.set(disabled);
  }
  _onPointerUp(event) {
    event.stopPropagation();
  }
  _onWindowPointerUp(event) {
    if (this.isSubmenu)
      return setTimeout(this.close.bind(this, event), 800);
    else
      this.close(event);
  }
  _getCloseTarget() {
    const target = this.el.querySelector('[data-part="close-target"]');
    return (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.i)(this.el, target, (node) => node.getAttribute("role") === "menu") ? target : null;
  }
  _findScrollContainer() {
    if (!this.isSubmenu) {
      const content = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._content);
      return content || null;
    } else {
      let el = this.el;
      while (el && el.tagName !== "media-menu" && el.hasAttribute("data-submenu")) {
        el = el.parentNode;
      }
      return el;
    }
  }
  _toggleMediaControls(trigger) {
    if (this.isSubmenu)
      return;
    if (this._expanded())
      this._media.remote.pauseControls(trigger);
    else
      this._media.remote.resumeControls(trigger);
  }
  _addSubmenu(menu) {
    this._submenus.add(menu);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(menu, "open", this._onSubmenuOpenBind);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(menu, "close", this._onSubmenuCloseBind);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._removeSubmenuBind);
  }
  _removeSubmenu(menu) {
    this._submenus.delete(menu);
  }
  _onSubmenuOpen(event) {
    for (const target of this._submenus) {
      if (target !== event.target) {
        for (const el of [target.el, target.triggerElement]) {
          el?.setAttribute("aria-hidden", "true");
        }
      }
    }
    requestAnimationFrame(() => {
      this._onResize();
    });
  }
  _onSubmenuClose() {
    for (const target of this._submenus) {
      for (const el of [target.el, target.triggerElement]) {
        el?.setAttribute("aria-hidden", "false");
      }
    }
    requestAnimationFrame(() => {
      this._onResize();
    });
  }
  _onResize() {
    const content = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._content);
    if (!content || false)
      return;
    let { paddingTop, paddingBottom, borderTopWidth, borderBottomWidth } = getComputedStyle(content), height = parseFloat(paddingTop) + parseFloat(paddingBottom) + parseFloat(borderTopWidth) + parseFloat(borderBottomWidth), children = [...content.children];
    for (const child of children) {
      if (child instanceof HTMLElement && child.style.display === "contents") {
        children.push(...child.children);
      } else {
        height += child.offsetHeight || 0;
      }
    }
    requestAnimationFrame(() => {
      if (!content)
        return;
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(content, "data-resizing", "");
      setTimeout(() => {
        if (content)
          (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(content, "data-resizing", false);
      }, 400);
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(content, "--menu-height", height + "px");
    });
  }
  open(trigger) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._expanded))
      return;
    this._popper.show(trigger);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
  }
  close(trigger) {
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._expanded))
      return;
    this._popper.hide(trigger);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.N)();
  }
}
__decorateClass$9([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], Menu.prototype, "triggerElement", 1);
__decorateClass$9([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], Menu.prototype, "contentElement", 1);
__decorateClass$9([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], Menu.prototype, "isSubmenu", 1);
__decorateClass$9([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], Menu.prototype, "open", 1);
__decorateClass$9([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], Menu.prototype, "close", 1);

var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
class MenuButton extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new FocusVisibleController();
  }
  static {
    this.props = {
      disabled: false
    };
  }
  get expanded() {
    return this._menu?._expanded() ?? false;
  }
  onSetup() {
    this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
  }
  onAttach(el) {
    this._menu._attachMenuButton(this);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchDisabled.bind(this));
  }
  onConnect(el) {
    const hint = Array.from(el.querySelectorAll('[data-part="hint"]')).pop();
    if (hint) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
        const text = this._menu._hint();
        if (text)
          hint.textContent = text;
      });
    }
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(el, (trigger) => {
      this.dispatch("select", { trigger });
    });
  }
  _watchDisabled() {
    this._menu._disableMenuButton(this.$props.disabled());
  }
}
__decorateClass$8([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], MenuButton.prototype, "expanded", 1);

class MenuPortal extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._target = null;
  }
  static {
    this.props = {
      container: null,
      disabled: false
    };
  }
  onSetup() {
    this._media = useMediaContext();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(menuPortalContext, {
      _attach: this._attachElement.bind(this)
    });
  }
  onAttach(el) {
    el.style.setProperty("display", "contents");
  }
  // Need this so connect scope is defined.
  onConnect(el) {
  }
  onDestroy() {
    this._target?.remove();
    this._target = null;
  }
  _attachElement(el) {
    this._portal(false);
    this._target = el;
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
        if (!this.connectScope)
          return;
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchDisabled.bind(this));
      });
    });
  }
  _watchDisabled() {
    const { fullscreen } = this._media.$state, { disabled } = this.$props, _disabled = disabled();
    this._portal(_disabled === "fullscreen" ? !fullscreen() : !_disabled);
  }
  _portal(shouldPortal) {
    if (!this._target)
      return;
    let container = this._getContainer(this.$props.container());
    if (!container)
      return;
    const isPortalled = this._target.parentElement === container;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._target, "data-portal", shouldPortal);
    if (shouldPortal) {
      if (!isPortalled) {
        this._target.remove();
        container.append(this._target);
      }
    } else if (isPortalled && this._target.parentElement === container) {
      this._target.remove();
      this.el?.append(this._target);
    }
  }
  _getContainer(selector) {
    if (selector instanceof HTMLElement)
      return selector;
    return selector ? document.querySelector(selector) : document.body;
  }
}
const menuPortalContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();

class MenuItems extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new FocusVisibleController();
    const { placement } = this.$props;
    this.setAttributes({
      "data-placement": placement
    });
  }
  static {
    this.props = {
      placement: null,
      offset: 0,
      alignOffset: 0
    };
  }
  onAttach(el) {
    this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    this._menu._attachMenuItems(this);
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuPortalContext)) {
      const portal = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuPortalContext);
      if (portal) {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(menuPortalContext, null);
        portal._attach(el);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => portal._attach(null));
      }
    }
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchPlacement.bind(this));
  }
  _watchPlacement() {
    if (!this.el)
      return;
    const placement = this.$props.placement();
    if (placement) {
      Object.assign(this.el.style, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "max-content"
      });
      const { offset: mainOffset, alignOffset } = this.$props;
      return (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.d)(this.el, this._getButton(), placement, {
        offsetVarName: "media-menu",
        xOffset: alignOffset(),
        yOffset: mainOffset()
      });
    } else {
      this.el.removeAttribute("style");
      this.el.style.display = "none";
    }
  }
  _getButton() {
    return this._menu._button();
  }
}

const radioControllerContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();

class RadioGroupController extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.V {
  constructor() {
    super(...arguments);
    this._group = /* @__PURE__ */ new Set();
    this._value = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)("");
    this._controller = null;
    this._onChangeBind = this._onChange.bind(this);
  }
  get _values() {
    return Array.from(this._group).map((radio) => radio._value());
  }
  get value() {
    return this._value();
  }
  set value(value) {
    this._onChange(value);
  }
  onSetup() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(radioControllerContext, {
      add: this._addRadio.bind(this),
      remove: this._removeRadio.bind(this)
    });
  }
  onAttach(el) {
    const isMenuItem = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext);
    if (!isMenuItem)
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", "radiogroup");
    this.setAttributes({ value: this._value });
  }
  onDestroy() {
    this._group.clear();
  }
  _addRadio(radio) {
    if (this._group.has(radio))
      return;
    this._group.add(radio);
    radio._onCheck = this._onChangeBind;
    radio._check(radio._value() === this._value());
  }
  _removeRadio(radio) {
    radio._onCheck = null;
    this._group.delete(radio);
  }
  _onChange(newValue, trigger) {
    const currentValue = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._value);
    if (!newValue || newValue === currentValue)
      return;
    const currentRadio = this._findRadio(currentValue), newRadio = this._findRadio(newValue);
    currentRadio?._check(false, trigger);
    newRadio?._check(true, trigger);
    this._value.set(newValue);
    this._onValueChange?.(newValue, trigger);
  }
  _findRadio(newValue) {
    for (const radio of this._group) {
      if (newValue === (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(radio._value))
        return radio;
    }
    return null;
  }
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
class RadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      value: ""
    };
  }
  get values() {
    return this._controller._values;
  }
  get value() {
    return this._controller.value;
  }
  onSetup() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
  }
  _watchValue() {
    this._controller.value = this.$props.value();
  }
  _onValueChange(value, trigger) {
    const event = this.createEvent("change", { detail: value, trigger });
    this.dispatch(event);
  }
}
__decorateClass$7([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], RadioGroup.prototype, "values", 1);
__decorateClass$7([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], RadioGroup.prototype, "value", 1);

var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
class Radio extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._checked = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(false);
    this._controller = {
      _value: this.$props.value,
      _check: this._check.bind(this),
      _onCheck: null
    };
    new FocusVisibleController();
  }
  static {
    this.props = {
      value: ""
    };
  }
  get checked() {
    return this._checked();
  }
  onSetup() {
    this.setAttributes({
      value: this.$props.value,
      "data-checked": this._checked,
      "aria-checked": $ariaBool(this._checked)
    });
  }
  onAttach(el) {
    const isMenuItem = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext);
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "tabindex", isMenuItem ? "-1" : "0");
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.s)(el, "role", isMenuItem ? "menuitemradio" : "radio");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
  }
  onConnect(el) {
    this._addToGroup();
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_4__.o)(el, this._onPress.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._onDisconnect.bind(this));
  }
  _onDisconnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.s)(() => {
      const group = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(radioControllerContext);
      group.remove(this._controller);
    }, this.connectScope);
  }
  _addToGroup() {
    const group = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(radioControllerContext);
    group.add(this._controller);
  }
  _watchValue() {
    const { value } = this.$props, newValue = value();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._checked)) {
      this._controller._onCheck?.(newValue);
    }
  }
  _onPress(event) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._checked))
      return;
    this._onChange(true, event);
    this._onSelect(event);
    this._controller._onCheck?.((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$props.value), event);
  }
  _check(value, trigger) {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._checked) === value)
      return;
    this._onChange(value, trigger);
  }
  _onChange(value, trigger) {
    this._checked.set(value);
    this.dispatch("change", { detail: value, trigger });
  }
  _onSelect(trigger) {
    this.dispatch("select", { trigger });
  }
}
__decorateClass$6([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], Radio.prototype, "checked", 1);

var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
class ChaptersRadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._index = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(0);
    this._track = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)(null);
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      thumbnails: ""
    };
  }
  get value() {
    return this._controller.value;
  }
  get disabled() {
    const track = this._track();
    return !track || !track.cues.length;
  }
  onSetup() {
    this._media = useMediaContext();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
    const { thumbnails } = this.$props;
    this.setAttributes({
      "data-thumbnails": () => !!thumbnails()
    });
  }
  onAttach(el) {
    this._menu?._attachObserver({
      _onOpen: this._onOpen.bind(this)
    });
  }
  getOptions() {
    const track = this._track();
    if (!track)
      return [];
    return track.cues.map((cue, i) => ({
      cue,
      value: i + "",
      label: cue.text,
      startTime: formatTime(cue.startTime, false, cue.startTime >= 3600),
      duration: formatSpokenTime(cue.endTime - cue.startTime)
    }));
  }
  _onOpen() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(() => this._watchCurrentTime());
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchCurrentTime.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchControllerDisabled.bind(this));
    (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.o)(this._media.textTracks, "chapters", this._track.set);
  }
  _watchValue() {
    this._controller.value = this._getValue();
  }
  _watchCurrentTime() {
    if (!this._menu?._expanded())
      return;
    const track = this._track();
    if (!track) {
      this._index.set(-1);
      return;
    }
    const { currentTime } = this._media.$state, time = currentTime(), activeCueIndex = track.cues.findIndex((cue) => (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.b)(cue, time));
    this._index.set(activeCueIndex);
    if (activeCueIndex >= 0) {
      const cue = track.cues[activeCueIndex], radio = this.el.querySelector(`[aria-checked='true']`), playedPercent = (time - cue.startTime) / (cue.endTime - cue.startTime) * 100;
      radio && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(radio, "--progress", (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(playedPercent, 3) + "%");
    }
  }
  _watchControllerDisabled() {
    this._menu?._disable(this.disabled);
  }
  _getValue() {
    return this._index() + "";
  }
  _onValueChange(value, trigger) {
    if (this.disabled || !trigger)
      return;
    const index = +value, cues = this._track()?.cues;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(index) && cues?.[index]) {
      this._index.set(index);
      this._media.remote.seek(cues[index].startTime, trigger);
      this.dispatch("change", { detail: cues[index], trigger });
    }
  }
}
__decorateClass$5([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], ChaptersRadioGroup.prototype, "value", 1);
__decorateClass$5([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], ChaptersRadioGroup.prototype, "disabled", 1);
__decorateClass$5([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], ChaptersRadioGroup.prototype, "getOptions", 1);

var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
class AudioRadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      emptyLabel: "Default"
    };
  }
  get value() {
    return this._controller.value;
  }
  get disabled() {
    const { audioTracks } = this._media.$state;
    return audioTracks().length === 0;
  }
  onSetup() {
    this._media = useMediaContext();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchControllerDisabled.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHintText.bind(this));
  }
  getOptions() {
    const { audioTracks } = this._media.$state;
    return audioTracks().map((track) => ({
      track,
      label: track.label,
      value: track.label.toLowerCase()
    }));
  }
  _watchValue() {
    this._controller.value = this._getValue();
  }
  _watchHintText() {
    const { emptyLabel } = this.$props, { audioTrack } = this._media.$state, track = audioTrack();
    this._menu?._hint.set(track?.label ?? emptyLabel());
  }
  _watchControllerDisabled() {
    this._menu?._disable(this.disabled);
  }
  _getValue() {
    const { audioTrack } = this._media.$state;
    const track = audioTrack();
    return track ? track.label.toLowerCase() : "";
  }
  _onValueChange(value, trigger) {
    if (this.disabled)
      return;
    const index = this._media.audioTracks.toArray().findIndex((track) => track.label.toLowerCase() === value);
    if (index >= 0) {
      const track = this._media.audioTracks[index];
      this._media.remote.changeAudioTrack(index, trigger);
      this.dispatch("change", { detail: track, trigger });
    }
  }
}
__decorateClass$4([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], AudioRadioGroup.prototype, "value", 1);
__decorateClass$4([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], AudioRadioGroup.prototype, "disabled", 1);
__decorateClass$4([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], AudioRadioGroup.prototype, "getOptions", 1);

var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
class CaptionsRadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      offLabel: "Off"
    };
  }
  get value() {
    return this._controller.value;
  }
  get disabled() {
    const { textTracks } = this._media.$state;
    return textTracks().filter(_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i).length === 0;
  }
  onSetup() {
    this._media = useMediaContext();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
  }
  onConnect(el) {
    super.onConnect?.(el);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchControllerDisabled.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHintText.bind(this));
  }
  getOptions() {
    const { offLabel } = this.$props, { textTracks } = this._media.$state;
    return [
      { value: "off", label: offLabel },
      ...textTracks().filter(_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i).map((track) => ({
        track,
        label: track.label,
        value: track.label.toLowerCase()
      }))
    ];
  }
  _watchValue() {
    this._controller.value = this._getValue();
  }
  _watchHintText() {
    const { offLabel } = this.$props, { textTrack } = this._media.$state, track = textTrack();
    this._menu?._hint.set(
      track && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track) && track.mode === "showing" ? track.label : offLabel()
    );
  }
  _watchControllerDisabled() {
    this._menu?._disable(this.disabled);
  }
  _getValue() {
    const { textTrack } = this._media.$state, track = textTrack();
    return track && (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track) && track.mode === "showing" ? track.label.toLowerCase() : "off";
  }
  _onValueChange(value, trigger) {
    if (this.disabled)
      return;
    if (value === "off") {
      const track = this._media.textTracks.selected;
      if (track) {
        const index2 = this._media.textTracks.toArray().indexOf(track);
        this._media.remote.changeTextTrackMode(index2, "disabled", trigger);
        this.dispatch("change", { detail: null, trigger });
      }
      return;
    }
    const index = this._media.textTracks.toArray().findIndex((track) => track.label.toLowerCase() === value);
    if (index >= 0) {
      const track = this._media.textTracks[index];
      this._media.remote.changeTextTrackMode(index, "showing", trigger);
      this.dispatch("change", { detail: track, trigger });
    }
  }
}
__decorateClass$3([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], CaptionsRadioGroup.prototype, "value", 1);
__decorateClass$3([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], CaptionsRadioGroup.prototype, "disabled", 1);
__decorateClass$3([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], CaptionsRadioGroup.prototype, "getOptions", 1);

var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
class SpeedRadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      normalLabel: "Normal",
      rates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
    };
  }
  get value() {
    return this._controller.value;
  }
  onSetup() {
    this._media = useMediaContext();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHintText.bind(this));
  }
  getOptions() {
    const { rates, normalLabel } = this.$props;
    return rates().map((rate) => ({
      label: rate === 1 ? normalLabel : rate + "\xD7",
      value: rate + ""
    }));
  }
  _watchValue() {
    this._controller.value = this._getValue();
  }
  _watchHintText() {
    const { normalLabel } = this.$props, { playbackRate } = this._media.$state, rate = playbackRate();
    this._menu?._hint.set(rate === 1 ? normalLabel() : rate + "\xD7");
  }
  _getValue() {
    const { playbackRate } = this._media.$state;
    return playbackRate() + "";
  }
  _onValueChange(value, trigger) {
    const rate = +value;
    this._media.remote.changePlaybackRate(rate, trigger);
    this.dispatch("change", { detail: rate, trigger });
  }
}
__decorateClass$2([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], SpeedRadioGroup.prototype, "value", 1);
__decorateClass$2([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], SpeedRadioGroup.prototype, "getOptions", 1);

var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
class QualityRadioGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    this._sortedQualities = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(() => {
      const { qualities } = this._media.$state;
      return [...qualities()].sort(
        (a, b) => b.height === a.height ? b.bitrate - a.bitrate : b.height - a.height
      );
    });
    this._controller = new RadioGroupController();
    this._controller._onValueChange = this._onValueChange.bind(this);
  }
  static {
    this.props = {
      autoLabel: "Auto",
      hideBitrate: false
    };
  }
  get value() {
    return this._controller.value;
  }
  get disabled() {
    const { canSetQuality, qualities } = this._media.$state;
    return !canSetQuality() || qualities().length === 0;
  }
  onSetup() {
    this._media = useMediaContext();
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a0)(menuContext)) {
      this._menu = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(menuContext);
    }
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchValue.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchControllerDisabled.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHintText.bind(this));
  }
  getOptions() {
    const { autoLabel, hideBitrate } = this.$props;
    return [
      { value: "auto", label: autoLabel },
      ...this._sortedQualities().map((quality) => {
        const rate = `${(0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.r)(quality.bitrate / 1e6, 2)} Mbps`;
        return {
          quality,
          label: quality.height + "p",
          value: this._getQualityId(quality),
          bitrate: () => !hideBitrate() ? rate : null
        };
      })
    ];
  }
  _watchValue() {
    this._controller.value = this._getValue();
  }
  _watchHintText() {
    const { autoLabel } = this.$props, { autoQuality, quality } = this._media.$state, qualityText = quality() ? quality().height + "p" : "";
    this._menu?._hint.set(!autoQuality() ? qualityText : autoLabel() + ` (${qualityText})`);
  }
  _watchControllerDisabled() {
    const { qualities } = this._media.$state;
    this._menu?._disable(qualities().length === 0);
  }
  _onValueChange(value, trigger) {
    if (this.disabled)
      return;
    if (value === "auto") {
      this._media.remote.changeQuality(-1, trigger);
      this.dispatch("change", { detail: "auto", trigger });
      return;
    }
    const { qualities } = this._media.$state, index = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(qualities).findIndex((quality) => this._getQualityId(quality) === value);
    if (index >= 0) {
      const quality = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(qualities)[index];
      this._media.remote.changeQuality(index, trigger);
      this.dispatch("change", { detail: quality, trigger });
    }
  }
  _getValue() {
    const { quality, autoQuality } = this._media.$state;
    if (autoQuality())
      return "auto";
    const currentQuality = quality();
    return currentQuality ? this._getQualityId(currentQuality) : "auto";
  }
  _getQualityId(quality) {
    return quality.height + "_" + quality.bitrate;
  }
}
__decorateClass$1([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], QualityRadioGroup.prototype, "value", 1);
__decorateClass$1([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], QualityRadioGroup.prototype, "disabled", 1);
__decorateClass$1([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.X
], QualityRadioGroup.prototype, "getOptions", 1);

class Gesture extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this._provider = null;
    this._presses = 0;
    this._pressTimerId = -1;
  }
  static {
    this.props = {
      event: void 0,
      action: void 0
    };
  }
  onSetup() {
    this._media = useMediaContext();
    const { event, action } = this.$props;
    this.setAttributes({
      event,
      action
    });
  }
  onAttach(el) {
    el.setAttribute("data-media-gesture", "");
    el.style.setProperty("pointer-events", "none");
  }
  onConnect(el) {
    this._provider = this._media.player.el?.querySelector(
      "[data-media-provider]"
    );
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._attachListener.bind(this));
  }
  _attachListener() {
    let eventType = this.$props.event();
    if (!this._provider || !eventType)
      return;
    if (/^dbl/.test(eventType)) {
      eventType = eventType.split(/^dbl/)[1];
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(
      this._provider,
      eventType,
      this._acceptEvent.bind(this)
    );
  }
  _acceptEvent(event) {
    if (!this._inBounds(event) || (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.r)(event) && (event.button !== 0 || this._media.activeMenu)) {
      return;
    }
    event.MEDIA_GESTURE = true;
    event.preventDefault();
    const isDblEvent = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$props.event)?.startsWith("dbl");
    if (!isDblEvent) {
      if (this._presses === 0) {
        setTimeout(() => {
          if (this._presses === 1)
            this._handleEvent(event);
        }, 250);
      }
    } else if (this._presses === 1) {
      queueMicrotask(() => this._handleEvent(event));
      clearTimeout(this._pressTimerId);
      this._presses = 0;
      return;
    }
    if (this._presses === 0) {
      this._pressTimerId = window.setTimeout(() => {
        this._presses = 0;
      }, 275);
    }
    this._presses++;
  }
  _handleEvent(event) {
    this.el.setAttribute("data-triggered", "");
    requestAnimationFrame(() => {
      if (this._isTopLayer()) {
        this._performAction((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.$props.action), event);
      }
      requestAnimationFrame(() => {
        this.el.removeAttribute("data-triggered");
      });
    });
  }
  /** Validate event occurred in gesture bounds. */
  _inBounds(event) {
    if (!this.el)
      return false;
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.r)(event) || (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a3)(event) || (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a4)(event)) {
      const touch = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a4)(event) ? event.touches[0] : void 0;
      const clientX = touch?.clientX ?? event.clientX;
      const clientY = touch?.clientY ?? event.clientY;
      const rect = this.el.getBoundingClientRect();
      const inBounds = clientY >= rect.top && clientY <= rect.bottom && clientX >= rect.left && clientX <= rect.right;
      return event.type.includes("leave") ? !inBounds : inBounds;
    }
    return true;
  }
  /** Validate gesture has the highest z-index in this triggered group. */
  _isTopLayer() {
    const gestures = this._media.player.el.querySelectorAll(
      "[data-media-gesture][data-triggered]"
    );
    return Array.from(gestures).sort(
      (a, b) => +getComputedStyle(b).zIndex - +getComputedStyle(a).zIndex
    )[0] === this.el;
  }
  _performAction(action, trigger) {
    if (!action)
      return;
    const [method, value] = action.replace(/:([a-z])/, "-$1").split(":");
    if (action.includes(":fullscreen")) {
      this._media.remote.toggleFullscreen("prefer-media", trigger);
    } else if (action.includes("seek:")) {
      this._media.remote.seek((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._media.$state.currentTime) + (+value || 0), trigger);
    } else {
      this._media.remote[(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.Q)(method)](trigger);
    }
  }
}

class CaptionsTextRenderer {
  constructor(_renderer) {
    this._renderer = _renderer;
    this.priority = 10;
    this._track = null;
    this._disposal = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a5)();
  }
  attach() {
  }
  canRender() {
    return true;
  }
  detach() {
    this._disposal.empty();
    this._renderer.reset();
    this._track = null;
  }
  changeTrack(track) {
    if (!track || this._track === track)
      return;
    this._disposal.empty();
    if (track.readyState < 2) {
      this._renderer.reset();
      this._disposal.add(
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(track, "load", () => this._changeTrack(track), { once: true })
      );
    } else {
      this._changeTrack(track);
    }
    this._disposal.add(
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(track, "add-cue", (event) => {
        this._renderer.addCue(event.detail);
      }),
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(track, "remove-cue", (event) => {
        this._renderer.removeCue(event.detail);
      })
    );
    this._track = track;
  }
  _changeTrack(track) {
    this._renderer.changeTrack({
      cues: [...track.cues],
      regions: [...track.regions]
    });
  }
}

class Captions extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      textDir: "ltr"
    };
  }
  onSetup() {
    this._media = useMediaContext();
    this.setAttributes({
      "aria-hidden": $ariaBool(this._isHidden.bind(this))
    });
  }
  onAttach(el) {
    el.style.setProperty("pointer-events", "none");
  }
  onConnect(el) {
    if (this._renderer) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchViewType.bind(this));
      return;
    }
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! media-captions */ "./node_modules/media-captions/dist/dev.js")).then((lib) => {
      if (!this.connectScope)
        return;
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.s)(() => {
        this._lib = lib;
        const { CaptionsRenderer } = this._lib;
        this._renderer = new CaptionsRenderer(el);
        this._textRenderer = new CaptionsTextRenderer(this._renderer);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchViewType.bind(this));
      }, this.connectScope);
    });
  }
  onDestroy() {
    if (this._textRenderer) {
      this._textRenderer.detach();
      this._media.textRenderers.remove(this._textRenderer);
    }
    this._renderer?.destroy();
  }
  _isHidden() {
    const { textTrack } = this._media.$state, track = textTrack();
    return !track || !(0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.i)(track);
  }
  _watchViewType() {
    const { viewType } = this._media.$state;
    if (viewType() === "audio") {
      return this._setupAudioView();
    } else {
      return this._setupVideoView();
    }
  }
  _setupAudioView() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onTrackChange.bind(this));
    return () => {
      this.el.textContent = "";
    };
  }
  _onTrackChange() {
    if (this._isHidden())
      return;
    const { textTrack } = this._media.$state;
    this._onCueChange();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(textTrack(), "cue-change", this._onCueChange.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onUpdateTimedNodes.bind(this));
  }
  _onCueChange() {
    this.el.textContent = "";
    const { currentTime, textTrack } = this._media.$state, time = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(currentTime), activeCues = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(textTrack).activeCues;
    const { renderVTTCueString } = this._lib;
    for (const cue of activeCues) {
      const cueEl = document.createElement("div");
      cueEl.setAttribute("data-part", "cue");
      cueEl.innerHTML = renderVTTCueString(cue, time);
      this.el.append(cueEl);
    }
  }
  _onUpdateTimedNodes() {
    const { currentTime } = this._media.$state, { updateTimedVTTCueNodes } = this._lib;
    updateTimedVTTCueNodes(this.el, currentTime());
  }
  _setupVideoView() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchTextDirection.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchMediaTime.bind(this));
    this._media.textRenderers.add(this._textRenderer);
    return () => {
      this.el.textContent = "";
      this._textRenderer.detach();
      this._media.textRenderers.remove(this._textRenderer);
    };
  }
  _watchTextDirection() {
    this._renderer.dir = this.$props.textDir();
  }
  _watchMediaTime() {
    if (this._isHidden())
      return;
    const { currentTime } = this._media.$state;
    this._renderer.currentTime = currentTime();
  }
}

class Poster extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      src: void 0,
      alt: void 0
    };
  }
  static {
    this.state = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
      img: null,
      src: null,
      alt: null,
      loading: true,
      error: null,
      hidden: false
    });
  }
  onSetup() {
    this._media = useMediaContext();
    this._watchImgSrc();
    this._watchImgAlt();
    this._watchHidden();
  }
  onAttach(el) {
    el.style.setProperty("pointer-events", "none");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchImg.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchImgSrc.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchImgAlt.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchHidden.bind(this));
    const { started } = this._media.$state;
    this.setAttributes({
      "data-visible": () => !started(),
      "data-loading": this._isLoading.bind(this),
      "data-error": this._hasError.bind(this),
      "data-hidden": this.$state.hidden
    });
  }
  onConnect(el) {
    const { canLoad, poster } = this._media.$state;
    window.requestAnimationFrame(() => {
      if (!canLoad())
        (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_2__.p)(poster());
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._onLoadStart.bind(this));
  }
  _hasError() {
    const { error } = this.$state;
    return !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(error());
  }
  _watchHidden() {
    const { src } = this.$props, { poster } = this._media.$state;
    this.$state.hidden.set(this._hasError() || !(src() || poster()));
  }
  _isLoading() {
    const { loading, hidden } = this.$state;
    return !hidden() && loading();
  }
  _watchImg() {
    const img = this.$state.img();
    if (!img)
      return;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(img, "load", this._onLoad.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(img, "error", this._onError.bind(this));
  }
  _watchImgSrc() {
    const { src: _src } = this.$props, { src } = this.$state, { canLoad, poster } = this._media.$state;
    const _poster = _src() || poster();
    src.set(canLoad() && _poster.length ? _poster : null);
  }
  _watchImgAlt() {
    const { src, alt } = this.$state;
    alt.set(src() ? this.$props.alt() : null);
  }
  _onLoadStart() {
    const { loading, error } = this.$state, { canLoad, poster } = this._media.$state;
    loading.set(canLoad() && !!poster());
    error.set(null);
  }
  _onLoad() {
    const { loading, error } = this.$state;
    loading.set(false);
    error.set(null);
  }
  _onError(event) {
    const { loading, error } = this.$state;
    loading.set(false);
    error.set(event);
  }
}

class Time extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      type: "current",
      showHours: false,
      padHours: null,
      padMinutes: null,
      remainder: false
    };
  }
  static {
    this.state = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.S({
      timeText: ""
    });
  }
  onSetup() {
    this._media = useMediaContext();
    this._watchTime();
    const { type, remainder } = this.$props;
    this.setAttributes({
      "data-type": type,
      "data-remainder": remainder
    });
  }
  onAttach(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchTime.bind(this));
  }
  _watchTime() {
    const { type, remainder, padHours, padMinutes, showHours } = this.$props, seconds = this._getSeconds(type()), duration = this._media.$state.duration();
    if (!Number.isFinite(seconds + duration)) {
      this.$state.timeText.set("LIVE");
      return;
    }
    const time = remainder() ? Math.max(0, duration - seconds) : seconds, formattedTime = formatTime(
      time,
      padHours(),
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(padMinutes()) ? time >= 3600 : padMinutes(),
      showHours()
    );
    this.$state.timeText.set(formattedTime);
  }
  _getSeconds(type) {
    const { bufferedEnd, duration, currentTime } = this._media.$state;
    switch (type) {
      case "buffered":
        return bufferedEnd();
      case "duration":
        return duration();
      default:
        return currentTime();
    }
  }
}

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
class DefaultLayout extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super(...arguments);
    this.menuContainer = null;
  }
  static {
    this.props = {
      when: "",
      smallWhen: "",
      thumbnails: "",
      customIcons: false,
      translations: null,
      menuGroup: "bottom",
      noModal: false
    };
  }
  get isMatch() {
    return this._whenQueryList.matches;
  }
  get isSmallLayout() {
    return this._whenSmQueryList.matches;
  }
  onSetup() {
    const { when, smallWhen, thumbnails, translations, menuGroup, noModal } = this.$props;
    this._whenQueryList = PlayerQueryList.create(when);
    this._whenSmQueryList = PlayerQueryList.create(smallWhen);
    this.setAttributes({
      "data-match": this._whenQueryList.$matches,
      "data-size": () => this._whenSmQueryList.matches ? "sm" : null
    });
    const self = this;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.T)(defaultLayoutContext, {
      smQueryList: this._whenSmQueryList,
      thumbnails,
      translations,
      menuGroup,
      noModal,
      get menuContainer() {
        return self.menuContainer;
      }
    });
  }
}
__decorateClass([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], DefaultLayout.prototype, "menuContainer", 2);
__decorateClass([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], DefaultLayout.prototype, "isMatch", 1);
__decorateClass([
  _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.W
], DefaultLayout.prototype, "isSmallLayout", 1);
class DefaultAudioLayout extends DefaultLayout {
  static {
    this.props = {
      ...super.props,
      when: "(view-type: audio)",
      smallWhen: "(width < 576)"
    };
  }
}
class DefaultVideoLayout extends DefaultLayout {
  static {
    this.props = {
      ...super.props,
      when: "(view-type: video)",
      smallWhen: "(width < 576) or (height < 380)"
    };
  }
}
function useDefaultLayoutLang(translations, word) {
  return translations()?.[word] ?? word;
}
const defaultLayoutContext = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.O)();
function useDefaultLayoutContext() {
  return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(defaultLayoutContext);
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-063df485.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-063df485.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ createTemplate),
/* harmony export */   b: () => (/* binding */ cloneTemplate),
/* harmony export */   c: () => (/* binding */ cloneTemplateContent),
/* harmony export */   d: () => (/* binding */ autoPlacement),
/* harmony export */   e: () => (/* binding */ setARIALabel),
/* harmony export */   h: () => (/* binding */ hasAnimation),
/* harmony export */   i: () => (/* binding */ isElementParent),
/* harmony export */   o: () => (/* binding */ onPress),
/* harmony export */   r: () => (/* binding */ requestScopedAnimationFrame),
/* harmony export */   s: () => (/* binding */ setAttributeIfEmpty)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");


function setAttributeIfEmpty(target, name, value) {
  if (!target.hasAttribute(name))
    target.setAttribute(name, value);
}
function setARIALabel(target, label) {
  if (target.hasAttribute("aria-label") || target.hasAttribute("aria-describedby"))
    return;
  function updateAriaDescription() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(target, "aria-label", label());
  }
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(updateAriaDescription);
}
function isElementParent(owner, node, test) {
  while (node) {
    if (node === owner) {
      return true;
    } else if (test?.(node)) {
      break;
    } else {
      node = node.parentElement;
    }
  }
  return false;
}
function onPress(target, handler) {
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, "pointerup", (event) => {
    if (event.button === 0)
      handler(event);
  });
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(target, "keydown", (event) => {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.i)(event))
      handler(event);
  });
}
function requestScopedAnimationFrame(callback) {
  let scope = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.g)(), id = window.requestAnimationFrame(() => {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.s)(callback, scope);
    id = -1;
  });
  return () => void window.cancelAnimationFrame(id);
}
function cloneTemplate(template, length, onCreate) {
  let current, prev = template, parent = template.parentElement, content = template.content.firstElementChild, elements = [];
  if (!content && template.firstElementChild) {
    template.innerHTML = template.firstElementChild.outerHTML;
    template.firstElementChild.remove();
    content = template.content.firstElementChild;
  }
  if (content?.nodeType !== 1) {
    throw Error("[vidstack] template must contain root element");
  }
  for (let i = 0; i < length; i++) {
    current = document.importNode(content, true);
    onCreate?.(current, i);
    parent.insertBefore(current, prev.nextSibling);
    elements.push(current);
    prev = current;
  }
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
    for (let i = 0; i < elements.length; i++)
      elements[i].remove();
  });
  return elements;
}
function createTemplate(content) {
  const template = document.createElement("template");
  template.innerHTML = content;
  return template.content;
}
function cloneTemplateContent(content) {
  const fragment = content.cloneNode(true);
  return fragment.firstElementChild;
}
function autoPlacement(el, trigger, placement, {
  offsetVarName,
  xOffset,
  yOffset,
  ...options
}) {
  if (!el)
    return;
  const floatingPlacement = placement.replace(" ", "-").replace("-center", "");
  (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, "visibility", !trigger ? "hidden" : null);
  if (!trigger)
    return;
  const negateY = (y) => placement.includes("top") ? `calc(-1 * ${y})` : y;
  return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.b)(trigger, el, () => {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.c)(trigger, el, { placement: floatingPlacement, ...options }).then(({ x, y }) => {
      Object.assign(el.style, {
        top: `calc(${y + "px"} + ${negateY(
          yOffset ? yOffset + "px" : `var(--${offsetVarName}-y-offset, 0px)`
        )})`,
        left: `calc(${x + "px"} + ${xOffset ? xOffset + "px" : `var(--${offsetVarName}-x-offset, 0px)`}`
      });
    });
  });
}
function hasAnimation(el) {
  const styles = getComputedStyle(el);
  return styles.animationName !== "none";
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-0d51c467.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-0d51c467.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
var Icon$10 = `<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>`;

var Icon$15 = `<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>`;

var Icon$20 = `<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>`;

var Icon$24 = `<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>`;

var Icon$25 = `<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>`;

var Icon$37 = `<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>`;

var Icon$38 = `<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>`;

var Icon$51 = `<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>`;

var Icon$52 = `<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>`;

var Icon$55 = `<path d="M25.14 25.1089C25.0171 25.2532 24.8356 25.3333 24.646 25.3333H22.8124C22.1084 25.3333 21.7734 24.1872 22.2745 23.6927C23.9161 22.0729 24.9336 19.822 24.9336 17.3333C24.9336 12.3997 20.9336 8.39973 16 8.39973C11.0664 8.39973 7.06641 12.3997 7.06641 17.3333C7.06641 19.822 8.08389 22.0729 9.72555 23.6927C10.2266 24.1872 9.89155 25.3333 9.18762 25.3333H7.35398C7.16436 25.3333 6.98294 25.2532 6.86001 25.1089C5.07703 23.015 4 20.2991 4 17.3333C4 10.7057 9.3724 5.33333 16 5.33333C22.6276 5.33333 28 10.7057 28 17.3333C28 20.2991 26.923 23.015 25.14 25.1089Z" fill="currentColor"/> <path d="M21.1992 14.3399C21.4595 14.0796 21.4595 13.6575 21.1992 13.3971L20.2564 12.4543C19.996 12.194 19.5739 12.194 19.3136 12.4543L16.4492 15.3187C16.4185 15.3493 16.3749 15.3629 16.332 15.3568C16.2236 15.3414 16.1127 15.3334 16 15.3334C14.7113 15.3334 13.6667 16.378 13.6667 17.6667C13.6667 18.9554 14.7113 20 16 20C17.2887 20 18.3333 18.9554 18.3333 17.6667C18.3333 17.5464 18.3242 17.4283 18.3067 17.313C18.3001 17.2696 18.3136 17.2255 18.3446 17.1945L21.1992 14.3399Z" fill="currentColor"/>`;

var Icon$56 = `<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>`;

var Icon$57 = `<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>`;

var Icon$58 = `<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>`;

var Icon$59 = `<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>`;

var Icon$71 = `<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>`;

var Icon$74 = `<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>`;

var Icon$78 = `<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>`;

var Icon$83 = `<path d="M18.6669 10.4001C18.6669 10.7683 18.3684 11.0667 18.0002 11.0667H16.2668C15.8987 11.0667 15.6002 10.7683 15.6002 10.4001V9.86674C15.6002 9.7931 15.5405 9.73341 15.4669 9.73341H5.99998C5.63179 9.73341 5.33331 9.43493 5.33331 9.06674V7.33341C5.33331 6.96522 5.63179 6.66674 5.99998 6.66674H15.4669C15.5405 6.66674 15.6002 6.60704 15.6002 6.53341V6.00007C15.6002 5.63188 15.8987 5.3334 16.2668 5.3334H18.0002C18.3684 5.3334 18.6669 5.63188 18.6669 6.00007V10.4001Z" fill="currentColor"/> <path d="M11.3334 18.8668C11.7016 18.8668 12.0001 18.5683 12.0001 18.2001V13.8001C12.0001 13.4319 11.7016 13.1335 11.3334 13.1335H9.60006C9.23187 13.1335 8.93339 13.4319 8.93339 13.8001V14.3335C8.93339 14.4071 8.8737 14.4668 8.80006 14.4668H6.00006C5.63187 14.4668 5.33339 14.7653 5.33339 15.1335V16.8668C5.33339 17.235 5.63187 17.5335 6.00006 17.5335H8.80006C8.8737 17.5335 8.93339 17.5932 8.93339 17.6668V18.2001C8.93339 18.5683 9.23187 18.8668 9.60006 18.8668H11.3334Z" fill="currentColor"/> <path d="M18.6667 26.0001C18.6667 26.3683 18.3682 26.6668 18 26.6668H16.2667C15.8985 26.6668 15.6 26.3683 15.6 26.0001V25.4668C15.6 25.3931 15.5403 25.3334 15.4667 25.3334H6.00014C5.63195 25.3334 5.33348 25.0349 5.33348 24.6668V22.9334C5.33348 22.5652 5.63195 22.2668 6.00014 22.2668H15.4667C15.5403 22.2668 15.6 22.2071 15.6 22.1334V21.6001C15.6 21.2319 15.8985 20.9334 16.2667 20.9334H18C18.3682 20.9334 18.6667 21.2319 18.6667 21.6001V26.0001Z" fill="currentColor"/> <path d="M22 24.6668C22 25.0349 22.2985 25.3334 22.6667 25.3334H26.0001C26.3683 25.3334 26.6668 25.0349 26.6668 24.6668V22.9334C26.6668 22.5652 26.3683 22.2668 26.0001 22.2668H22.6667C22.2985 22.2668 22 22.5652 22 22.9334V24.6668Z" fill="currentColor"/> <path d="M16.0001 17.5335C15.6319 17.5335 15.3334 17.235 15.3334 16.8668V15.1335C15.3334 14.7653 15.6319 14.4668 16.0001 14.4668H26.0001C26.3683 14.4668 26.6667 14.7653 26.6667 15.1335V16.8668C26.6667 17.235 26.3683 17.5335 26.0001 17.5335H16.0001Z" fill="currentColor"/> <path d="M22.0002 9.06674C22.0002 9.43493 22.2987 9.73341 22.6669 9.73341H26C26.3682 9.73341 26.6666 9.43493 26.6666 9.06674V7.3334C26.6666 6.96521 26.3682 6.66674 26 6.66674H22.6669C22.2987 6.66674 22.0002 6.96522 22.0002 7.33341V9.06674Z" fill="currentColor"/>`;

var Icon$85 = `<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>`;

var Icon$101 = `<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>`;

var Icon$102 = `<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>`;

const icons = {
  play: Icon$59,
  pause: Icon$56,
  replay: Icon$71,
  mute: Icon$52,
  "volume-low": Icon$102,
  "volume-high": Icon$101,
  "cc-on": Icon$24,
  "cc-off": Icon$25,
  "pip-enter": Icon$58,
  "pip-exit": Icon$57,
  "fs-enter": Icon$38,
  "fs-exit": Icon$37,
  "seek-forward": Icon$78,
  "seek-backward": Icon$74,
  "menu-chapters": Icon$15,
  "menu-settings": Icon$85,
  "menu-arrow-left": Icon$10,
  "menu-arrow-right": Icon$20,
  "menu-audio": Icon$51,
  "menu-speed": Icon$55,
  "menu-quality": Icon$83,
  "menu-captions": Icon$25
};




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-213dac5a.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-213dac5a.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $computed),
/* harmony export */   D: () => (/* binding */ DefaultTimeSlider),
/* harmony export */   L: () => (/* binding */ LitElement),
/* harmony export */   S: () => (/* binding */ SlotManager),
/* harmony export */   a: () => (/* binding */ DefaultSeekButton),
/* harmony export */   b: () => (/* binding */ DefaultPlayButton),
/* harmony export */   c: () => (/* binding */ DefaultMuteButton),
/* harmony export */   d: () => (/* binding */ DefaultVolumeSlider),
/* harmony export */   e: () => (/* binding */ DefaultCaptionButton),
/* harmony export */   f: () => (/* binding */ DefaultChaptersMenu),
/* harmony export */   g: () => (/* binding */ DefaultSettingsMenu),
/* harmony export */   h: () => (/* binding */ DefaultTimeInfo),
/* harmony export */   i: () => (/* binding */ DefaultLiveButton),
/* harmony export */   j: () => (/* binding */ createMenuContainer),
/* harmony export */   k: () => (/* binding */ DefaultLayoutIconsLoader),
/* harmony export */   l: () => (/* binding */ DefaultPIPButton),
/* harmony export */   m: () => (/* binding */ DefaultFullscreenButton)
/* harmony export */ });
/* harmony import */ var _vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-022dcf66.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-022dcf66.js");
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");




class SignalDirective extends _vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.A {
  constructor(part) {
    super(part);
    this._signal = null;
    this._stop = null;
    this._isAttr = false;
    this._isAttr = part.type === _vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.P.ATTRIBUTE;
  }
  render(signal) {
    if (this._signal !== signal) {
      this._signal = signal;
      this.disconnected();
      if (this.isConnected)
        this._watch();
    }
    const value = this._signal();
    return this._isAttr ? (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.i)(value) : value;
  }
  reconnected() {
    this._watch();
  }
  disconnected() {
    this._stop?.();
    this._stop = null;
    this.setValue(null);
  }
  _watch() {
    if (!this._signal)
      return;
    this._stop = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.e)(this._onValueChange.bind(this));
  }
  _onValueChange() {
    {
      try {
        this.setValue(this._signal?.());
      } catch (error) {
        if (error instanceof Error && error.message.includes("This `ChildPart` has no `parentNode`")) {
          const svelteDynamicImportExample = [
            "{#await import('./Player.svelte') then {default: Player}}",
            "  <svelte:component this={Player} />",
            "{/await}"
          ].join("\n");
          console.warn(
            `[vidstack]: Failed to render most likely due to a hydration issue with your framework. Dynamically importing the player should resolve the issue.

Svelte Example:

${svelteDynamicImportExample}`
          );
        } else {
          console.error(error);
        }
      }
    }
  }
}
const $signal = (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.d)(SignalDirective);
function $computed(compute) {
  return $signal((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.j)(compute));
}

class LitElement extends HTMLElement {
  constructor() {
    super(...arguments);
    this.rootPart = null;
  }
  connectedCallback() {
    this.rootPart = (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.r)(this.render(), this, {
      renderBefore: this.firstChild
    });
    this.rootPart.setConnected(true);
  }
  disconnectedCallback() {
    this.rootPart?.setConnected(false);
    this.rootPart = null;
  }
}

class SlotObserver {
  constructor(_root, _callback) {
    this._root = _root;
    this._callback = _callback;
    this.elements = /* @__PURE__ */ new Set();
    this._onMutation = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.K)(this._update.bind(this));
  }
  connect() {
    this._update();
    const observer = new MutationObserver(this._onMutation);
    observer.observe(this._root, { childList: true });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.o)(() => observer.disconnect());
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.o)(this.disconnect.bind(this));
  }
  disconnect() {
    this.elements.clear();
  }
  assign(template, slot) {
    if (template instanceof Node) {
      slot.textContent = "";
      slot.append(template);
    } else {
      (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.r)(template, slot);
    }
    if (!slot.style.display) {
      slot.style.display = "contents";
    }
    const el = slot.firstElementChild;
    if (!el)
      return;
    const classList = slot.getAttribute("data-class");
    if (classList)
      el.classList.add(...classList.split(" "));
  }
  _update() {
    for (const slot of this._root.querySelectorAll("slot")) {
      if (slot.hasAttribute("name"))
        this.elements.add(slot);
    }
    this._callback(this.elements);
  }
}

let id = 0, slotIdAttr = "data-slot-id";
class SlotManager {
  constructor(_root) {
    this._root = _root;
    this._onMutation = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.K)(this._update.bind(this));
    this.slots = new SlotObserver(_root, this._update.bind(this));
  }
  connect() {
    this.slots.connect();
    this._update();
    const mutations = new MutationObserver(this._onMutation);
    mutations.observe(this._root, { childList: true });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.o)(() => mutations.disconnect());
  }
  _update() {
    for (const node of this._root.children) {
      if (node.nodeType !== 1)
        continue;
      const name = node.getAttribute("slot");
      if (!name)
        continue;
      node.style.display = "none";
      let slotId = node.getAttribute(slotIdAttr);
      if (!slotId) {
        node.setAttribute(slotIdAttr, slotId = ++id + "");
      }
      for (const slot of this.slots.elements) {
        if (slot.getAttribute("name") !== name || slot.getAttribute(slotIdAttr) === slotId) {
          continue;
        }
        const clone = document.importNode(node, true);
        if (name.includes("-icon"))
          clone.classList.add("vds-icon");
        clone.style.display = "";
        clone.removeAttribute("slot");
        this.slots.assign(clone, slot);
        slot.setAttribute(slotIdAttr, slotId);
      }
    }
  }
}

function renderMenuButton({ label, icon }) {
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${icon}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${$signal(label)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `;
}

function $i18n(translations, key) {
  return $computed(() => (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.K)(translations, key));
}
function DefaultPlayButton({ tooltip }) {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button">
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-play-tooltip-text">${$i18n(translations, "Play")}</span>
        <span class="vds-pause-tooltip-text">${$i18n(translations, "Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultMuteButton({ tooltip }) {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button">
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-mute-tooltip-text">${$i18n(translations, "Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${$i18n(translations, "Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultCaptionButton({ tooltip }) {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button">
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-cc-on-tooltip-text">${$i18n(translations, "Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${$i18n(translations, "Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultPIPButton() {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button">
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${$i18n(translations, "Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${$i18n(translations, "Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultFullscreenButton({ tooltip }) {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button">
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        <span class="vds-fs-enter-tooltip-text">${$i18n(translations, "Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${$i18n(translations, "Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultSeekButton({
  seconds,
  tooltip
}) {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button class="vds-seek-button vds-button" seconds=${seconds}>
          ${seconds >= 0 ? (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`<slot name="seek-forward-icon"></slot>` : (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${tooltip}>
        ${$i18n(translations, seconds >= 0 ? "Seek Forward" : "Seek Backward")}
      </media-tooltip-content>
    </media-tooltip>
  `;
}
function DefaultVolumeSlider() {
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-volume-slider class="vds-volume-slider vds-slider">
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value
          class="vds-slider-value"
          type="pointer"
          format="percent"
        ></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `;
}
function DefaultTimeSlider() {
  const { smQueryList, thumbnails } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-time-slider class="vds-time-slider vds-slider">
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${$signal(smQueryList.$matches)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${$signal(thumbnails)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value
          class="vds-slider-value"
          type="pointer"
          format="time"
        ></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `;
}
function DefaultLiveButton() {
  const { live } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  return live() ? (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-live-button class="vds-live-button">
      <span class="vds-live-button-text">LIVE</span>
    </media-live-button
  ` : null;
}
function DefaultTimeGroup() {
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `;
}
function DefaultTimeInfo() {
  const { live } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  return live() ? DefaultLiveButton() : DefaultTimeGroup();
}
function MenuPortal(container, template) {
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-menu-portal .container=${container} disabled="fullscreen">
      ${template}
    </media-menu-portal>
  `;
}
function DefaultChaptersMenu({
  placement,
  tooltip,
  portal
}) {
  const { viewType } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state, { translations, smQueryList, thumbnails, menuContainer, noModal, menuGroup } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)(), $placement = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.j)(
    () => noModal() ? (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.L)(placement) : !smQueryList.matches ? (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.L)(placement) : null
  ), $offset = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.j)(
    () => !smQueryList.matches && menuGroup() === "bottom" && viewType() === "video" ? 26 : 0
  );
  const items = (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${$signal($placement)}
      offset=${$signal($offset)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${$signal(thumbnails)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button class="vds-menu-button vds-button">
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.z)(tooltip) ? $signal(tooltip) : tooltip}
        >
          ${$i18n(translations, "Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${portal ? MenuPortal(menuContainer, items) : items}
    </media-menu>
  `;
}
function DefaultSettingsMenu({
  placement,
  portal,
  tooltip
}) {
  const { viewType } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state, { translations, smQueryList, menuContainer, noModal, menuGroup } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)(), $placement = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.j)(
    () => noModal() ? (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.L)(placement) : !smQueryList.matches ? (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.L)(placement) : null
  ), $offset = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.j)(
    () => !smQueryList.matches && menuGroup() === "bottom" && viewType() === "video" ? 26 : 0
  );
  const items = (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${$signal($placement)}
      offset=${$signal($offset)}
    >
      ${DefaultAudioSubmenu()}${DefaultSpeedSubmenu()}${DefaultQualitySubmenu()}${DefaultCaptionsSubmenu()}
    </media-menu-items>
  `;
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button class="vds-menu-button vds-button">
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.z)(tooltip) ? $signal(tooltip) : tooltip}
        >
          ${$i18n(translations, "Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${portal ? MenuPortal(menuContainer, items) : items}
    </media-menu>
  `;
}
function DefaultAudioSubmenu() {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${renderMenuButton({
    label: () => (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.K)(translations, "Audio"),
    icon: "menu-audio"
  })}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${$i18n(translations, "Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `;
}
function DefaultSpeedSubmenu() {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${renderMenuButton({
    label: () => (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.K)(translations, "Speed"),
    icon: "menu-speed"
  })}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${$i18n(translations, "Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `;
}
function DefaultQualitySubmenu() {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${renderMenuButton({
    label: () => (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.K)(translations, "Quality"),
    icon: "menu-quality"
  })}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${$i18n(translations, "Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `;
}
function DefaultCaptionsSubmenu() {
  const { translations } = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${renderMenuButton({
    label: () => (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.K)(translations, "Captions"),
    icon: "menu-captions"
  })}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${$i18n(translations, "Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `;
}
function createMenuContainer(className) {
  let container = document.querySelector(`body > .${className}`);
  if (!container) {
    container = document.createElement("div");
    container.style.display = "contents";
    container.classList.add(className);
    document.body.append(container);
  }
  return container;
}

function Icon({ name, class: _class, state, paths }) {
  return (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`<svg
    class="${"vds-icon" + (_class ? ` ${_class}` : "")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${(0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.i)(name ?? state)}
  >
    ${!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.k)(paths) ? $signal(paths) : (0,_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.u)(paths)}
  </svg>`;
}

class IconsLoader {
  constructor(_root) {
    this._root = _root;
    this._icons = {};
    this._loaded = false;
    this.slots = new SlotObserver(_root, this._insertIcons.bind(this));
  }
  connect() {
    this.slots.connect();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.o)(this.disconnect.bind(this));
  }
  load() {
    this._load().then((icons) => {
      this._icons = icons;
      this._loaded = true;
      this._insertIcons();
    });
  }
  disconnect() {
    for (const { slot } of this._iterate()) {
      slot.textContent = "";
    }
  }
  *_iterate() {
    for (const iconName of Object.keys(this._icons)) {
      const slotName = `${iconName}-icon`;
      for (const slot of this.slots.elements) {
        if (slot.name !== slotName)
          continue;
        yield { icon: this._icons[iconName], slot };
      }
    }
  }
  _insertIcons() {
    if (!this._loaded)
      return;
    for (const { icon, slot } of this._iterate()) {
      this.slots.assign(icon, slot);
    }
  }
}

class LayoutIconsLoader extends IconsLoader {
  connect() {
    const player = this._findPlayerElement();
    if (!player)
      return;
    super.connect();
    if (player.$state.canLoad()) {
      this.load();
    } else {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_1__.l)(player, "can-load", () => this.load(), { once: true });
    }
  }
  _findPlayerElement() {
    let node = this._root.parentElement;
    while (node && node.localName !== "media-player") {
      node = node.parentElement;
    }
    return node;
  }
}

class DefaultLayoutIconsLoader extends LayoutIconsLoader {
  async _load() {
    const paths = (await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./vidstack-0d51c467.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-0d51c467.js"))).icons, icons = {};
    for (const iconName of Object.keys(paths)) {
      icons[iconName] = Icon({ name: iconName, paths: paths[iconName] });
    }
    return icons;
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TextTrackSymbol),
/* harmony export */   a: () => (/* binding */ TextTrack),
/* harmony export */   b: () => (/* binding */ isCueActive),
/* harmony export */   f: () => (/* binding */ findActiveCue),
/* harmony export */   g: () => (/* binding */ getRequestCredentials),
/* harmony export */   i: () => (/* binding */ isTrackCaptionKind),
/* harmony export */   l: () => (/* binding */ loadScript),
/* harmony export */   o: () => (/* binding */ observeActiveTextTrack),
/* harmony export */   p: () => (/* binding */ preconnect)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");



function preconnect(url, rel = "preconnect") {
  const exists = document.querySelector(`link[href="${url}"]`);
  if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(exists))
    return true;
  const link = document.createElement("link");
  link.rel = rel;
  link.href = url;
  link.crossOrigin = "true";
  document.head.append(link);
  return true;
}
const pendingRequests = {};
function loadScript(src) {
  if (pendingRequests[src])
    return pendingRequests[src].promise;
  const promise = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.G)(), exists = document.querySelector(`script[src="${src}"]`);
  if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.F)(exists)) {
    promise.resolve();
    return promise.promise;
  }
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    promise.resolve();
    delete pendingRequests[src];
  };
  script.onerror = () => {
    promise.reject();
    delete pendingRequests[src];
  };
  setTimeout(() => document.head.append(script), 0);
  return promise.promise;
}
function getRequestCredentials(crossorigin) {
  return crossorigin === "use-credentials" ? "include" : (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(crossorigin) ? "same-origin" : void 0;
}

const CROSSORIGIN = Symbol("TEXT_TRACK_CROSSORIGIN" ), READY_STATE = Symbol("TEXT_TRACK_READY_STATE" ), UPDATE_ACTIVE_CUES = Symbol("TEXT_TRACK_UPDATE_ACTIVE_CUES" ), CAN_LOAD = Symbol("TEXT_TRACK_CAN_LOAD" ), ON_MODE_CHANGE = Symbol("TEXT_TRACK_ON_MODE_CHANGE" ), NATIVE = Symbol("TEXT_TRACK_NATIVE" ), NATIVE_HLS = Symbol("TEXT_TRACK_NATIVE_HLS" );
const TextTrackSymbol = {
  _crossorigin: CROSSORIGIN,
  _readyState: READY_STATE,
  _updateActiveCues: UPDATE_ACTIVE_CUES,
  _canLoad: CAN_LOAD,
  _onModeChange: ON_MODE_CHANGE,
  _native: NATIVE,
  _nativeHLS: NATIVE_HLS
};

function findActiveCue(cues, time) {
  for (let i = 0, len = cues.length; i < len; i++) {
    if (isCueActive(cues[i], time))
      return cues[i];
  }
  return null;
}
function isCueActive(cue, time) {
  return time >= cue.startTime && time < cue.endTime;
}
function observeActiveTextTrack(tracks, kind, onChange) {
  let currentTrack = null;
  function onModeChange() {
    const kinds = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(kind) ? [kind] : kind, track = tracks.toArray().find((track2) => kinds.includes(track2.kind) && track2.mode === "showing");
    if (track === currentTrack)
      return;
    if (!track) {
      onChange(null);
      return;
    }
    if (track.readyState == 2) {
      onChange(track);
    } else {
      onChange(null);
      track.addEventListener("load", () => onChange(track), { once: true });
    }
    currentTrack = track;
  }
  onModeChange();
  return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(tracks, "mode-change", onModeChange);
}

var _a, _b, _c;
class TextTrack extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.I {
  constructor(init) {
    super();
    this.id = "";
    this.label = "";
    this.language = "";
    this.default = false;
    this._canLoad = false;
    this._currentTime = 0;
    this._mode = "disabled";
    this._metadata = {};
    this._regions = [];
    this._cues = [];
    this._activeCues = [];
    /* @internal */
    this[_a] = 0;
    /* @internal */
    this[_b] = null;
    /* @internal */
    this[_c] = null;
    for (const prop of Object.keys(init))
      this[prop] = init[prop];
    if (!this.type)
      this.type = "vtt";
    if (init.content) {
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! media-captions */ "./node_modules/media-captions/dist/dev.js")).then(({ parseText, VTTCue, VTTRegion }) => {
        if (init.type === "json") {
          this._parseJSON(init.content, VTTCue, VTTRegion);
        } else {
          parseText(init.content, { type: init.type }).then(({ cues, regions }) => {
            this._cues = cues;
            this._regions = regions;
            this._readyState();
          });
        }
      });
    } else if (!init.src)
      this[TextTrackSymbol._readyState] = 2;
    if (isTrackCaptionKind(this) && !this.label) {
      throw Error(`[vidstack]: captions text track created without label: \`${this.src}\``);
    }
  }
  static createId(track) {
    return `id::${track.type}-${track.kind}-${track.src ?? track.label}`;
  }
  get metadata() {
    return this._metadata;
  }
  get regions() {
    return this._regions;
  }
  get cues() {
    return this._cues;
  }
  get activeCues() {
    return this._activeCues;
  }
  /**
   * - 0: Not Loading
   * - 1: Loading
   * - 2: Ready
   * - 3: Error
   */
  get readyState() {
    return this[TextTrackSymbol._readyState];
  }
  get mode() {
    return this._mode;
  }
  set mode(mode) {
    this.setMode(mode);
  }
  addCue(cue, trigger) {
    let i = 0, length = this._cues.length;
    for (i = 0; i < length; i++)
      if (cue.endTime <= this._cues[i].startTime)
        break;
    if (i === length)
      this._cues.push(cue);
    else
      this._cues.splice(i, 0, cue);
    if (trigger?.type !== "cuechange") {
      this[TextTrackSymbol._native]?.track.addCue(cue);
    }
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("add-cue", { detail: cue, trigger }));
    if (isCueActive(cue, this._currentTime)) {
      this[TextTrackSymbol._updateActiveCues](this._currentTime, trigger);
    }
  }
  removeCue(cue, trigger) {
    const index = this._cues.indexOf(cue);
    if (index >= 0) {
      const isActive = this._activeCues.includes(cue);
      this._cues.splice(index, 1);
      this[TextTrackSymbol._native]?.track.removeCue(cue);
      this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("remove-cue", { detail: cue, trigger }));
      if (isActive) {
        this[TextTrackSymbol._updateActiveCues](this._currentTime, trigger);
      }
    }
  }
  setMode(mode, trigger) {
    if (this._mode === mode)
      return;
    this._mode = mode;
    if (mode === "disabled") {
      this._activeCues = [];
      this._activeCuesChanged();
    } else if (this.readyState === 2) {
      this[TextTrackSymbol._updateActiveCues](this._currentTime, trigger);
    } else {
      this._load();
    }
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("mode-change", { detail: this, trigger }));
    this[TextTrackSymbol._onModeChange]?.();
  }
  /* @internal */
  [(_a = TextTrackSymbol._readyState, _b = TextTrackSymbol._onModeChange, _c = TextTrackSymbol._native, TextTrackSymbol._updateActiveCues)](currentTime, trigger) {
    this._currentTime = currentTime;
    if (this.mode === "disabled" || !this._cues.length)
      return;
    const activeCues = [];
    for (let i = 0, length = this._cues.length; i < length; i++) {
      const cue = this._cues[i];
      if (isCueActive(cue, currentTime))
        activeCues.push(cue);
    }
    let changed = activeCues.length !== this._activeCues.length;
    if (!changed) {
      for (let i = 0; i < activeCues.length; i++) {
        if (!this._activeCues.includes(activeCues[i])) {
          changed = true;
          break;
        }
      }
    }
    this._activeCues = activeCues;
    if (changed)
      this._activeCuesChanged(trigger);
  }
  /* @internal */
  [TextTrackSymbol._canLoad]() {
    this._canLoad = true;
    if (this._mode !== "disabled")
      this._load();
  }
  async _load() {
    if (!this._canLoad || !this.src || this[TextTrackSymbol._readyState] > 0)
      return;
    this[TextTrackSymbol._readyState] = 1;
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("load-start"));
    try {
      const { parseResponse, VTTCue, VTTRegion } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! media-captions */ "./node_modules/media-captions/dist/dev.js")), crossorigin = this[TextTrackSymbol._crossorigin]?.();
      const response = fetch(this.src, {
        headers: this.type === "json" ? { "Content-Type": "application/json" } : void 0,
        credentials: getRequestCredentials(crossorigin)
      });
      if (this.type === "json") {
        this._parseJSON(await (await response).text(), VTTCue, VTTRegion);
      } else {
        const { errors, metadata, regions, cues } = await parseResponse(response, {
          type: this.type,
          encoding: this.encoding
        });
        if (errors[0]?.code === 0) {
          throw errors[0];
        } else {
          this._metadata = metadata;
          this._regions = regions;
          this._cues = cues;
        }
      }
      this._readyState();
    } catch (error) {
      this._errorState(error);
    }
  }
  _readyState() {
    this[TextTrackSymbol._readyState] = 2;
    if (!this.src || this.type !== "vtt") {
      const nativeTrack = this[TextTrackSymbol._native]?.track;
      if (nativeTrack)
        for (const cue of this._cues)
          nativeTrack.addCue(cue);
    }
    const loadEvent = new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("load");
    this[TextTrackSymbol._updateActiveCues](this._currentTime, loadEvent);
    this.dispatchEvent(loadEvent);
  }
  _errorState(error) {
    this[TextTrackSymbol._readyState] = 3;
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("error", { detail: error }));
  }
  _parseJSON(json, VTTCue, VTTRegion) {
    try {
      json = JSON.parse(json);
      if (json.regions) {
        this._regions = json.regions.map((json2) => Object.assign(new VTTRegion(), json2));
      }
      if (json.cues) {
        this._cues = json.cues.filter((json2) => (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(json2.startTime) && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(json2.endTime)).map((json2) => Object.assign(new VTTCue(0, 0, ""), json2));
      }
    } catch (error) {
      {
        console.error(`[vidstack] failed to parse JSON captions at: \`${this.src}\`

`, error);
      }
      this._errorState(error);
    }
  }
  _activeCuesChanged(trigger) {
    this.dispatchEvent(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("cue-change", { trigger }));
  }
}
const captionRE = /captions|subtitles/;
function isTrackCaptionKind(track) {
  return captionRE.test(track.kind);
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-32b73851.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-32b73851.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ HTMLMediaProvider),
/* harmony export */   R: () => (/* binding */ RAFLoop)
/* harmony export */ });
/* harmony import */ var _vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-6ab269cd.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js");
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");



class RAFLoop {
  constructor(_callback) {
    this._callback = _callback;
  }
  _start() {
    if (!(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(this._id))
      return;
    this._loop();
  }
  _stop() {
    if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.A)(this._id))
      window.cancelAnimationFrame(this._id);
    this._id = void 0;
  }
  _loop() {
    this._id = window.requestAnimationFrame(() => {
      if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(this._id))
        return;
      this._callback();
      this._loop();
    });
  }
}

class HTMLMediaEvents {
  constructor(_provider, _ctx) {
    this._provider = _provider;
    this._ctx = _ctx;
    this._disposal = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.B)();
    this._waiting = false;
    this._attachedLoadStart = false;
    this._attachedCanPlay = false;
    this._timeRAF = new RAFLoop(this._onRAF.bind(this));
    this._handlers = /* @__PURE__ */ new Map() ;
    this._handleDevEvent = this._onDevEvent.bind(this) ;
    this._attachInitialListeners();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._attachTimeUpdate.bind(this));
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._onDispose.bind(this));
  }
  get _media() {
    return this._provider.media;
  }
  get _delegate() {
    return this._ctx.delegate;
  }
  _onDispose() {
    this._attachedLoadStart = false;
    this._attachedCanPlay = false;
    this._timeRAF._stop();
    this._disposal.empty();
  }
  /**
   * The `timeupdate` event fires surprisingly infrequently during playback, meaning your progress
   * bar (or whatever else is synced to the currentTime) moves in a choppy fashion. This helps
   * resolve that by retrieving time updates in a request animation frame loop.
   */
  _onRAF() {
    const newTime = this._provider.currentTime;
    if (this._ctx.$state.currentTime() !== newTime)
      this._updateCurrentTime(newTime);
  }
  _attachInitialListeners() {
    {
      this._ctx.logger?.info("attaching initial listeners");
    }
    this._attachEventListener("loadstart", this._onLoadStart);
    this._attachEventListener("abort", this._onAbort);
    this._attachEventListener("emptied", this._onEmptied);
    this._attachEventListener("error", this._onError);
    this._ctx.logger?.debug("attached initial media event listeners");
  }
  _attachLoadStartListeners() {
    if (this._attachedLoadStart)
      return;
    {
      this._ctx.logger?.info("attaching load start listeners");
    }
    this._disposal.add(
      this._attachEventListener("loadeddata", this._onLoadedData),
      this._attachEventListener("loadedmetadata", this._onLoadedMetadata),
      this._attachEventListener("canplay", this._onCanPlay),
      this._attachEventListener("canplaythrough", this._onCanPlayThrough),
      this._attachEventListener("durationchange", this._onDurationChange),
      this._attachEventListener("play", this._onPlay),
      this._attachEventListener("progress", this._onProgress),
      this._attachEventListener("stalled", this._onStalled),
      this._attachEventListener("suspend", this._onSuspend)
    );
    this._attachedLoadStart = true;
  }
  _attachCanPlayListeners() {
    if (this._attachedCanPlay)
      return;
    {
      this._ctx.logger?.info("attaching can play listeners");
    }
    this._disposal.add(
      this._attachEventListener("pause", this._onPause),
      this._attachEventListener("playing", this._onPlaying),
      this._attachEventListener("ratechange", this._onRateChange),
      this._attachEventListener("seeked", this._onSeeked),
      this._attachEventListener("seeking", this._onSeeking),
      this._attachEventListener("ended", this._onEnded),
      this._attachEventListener("volumechange", this._onVolumeChange),
      this._attachEventListener("waiting", this._onWaiting)
    );
    this._attachedCanPlay = true;
  }
  _attachEventListener(eventType, handler) {
    this._handlers.set(eventType, handler);
    return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(
      this._media,
      eventType,
      this._handleDevEvent 
    );
  }
  _onDevEvent(event2) {
    this._ctx.logger?.debugGroup(`\u{1F4FA} provider fired \`${event2.type}\``).labelledLog("Provider", this._provider).labelledLog("Event", event2).labelledLog("Media Store", { ...this._ctx.$state }).dispatch();
    this._handlers.get(event2.type)?.call(this, event2);
  }
  _updateCurrentTime(time, trigger) {
    this._delegate._dispatch("time-update", {
      // Avoid errors where `currentTime` can have higher precision.
      detail: {
        currentTime: Math.min(time, this._ctx.$state.seekableEnd()),
        played: this._media.played
      },
      trigger
    });
  }
  _onLoadStart(event2) {
    if (this._media.networkState === 3) {
      this._onAbort(event2);
      return;
    }
    this._attachLoadStartListeners();
    this._delegate._dispatch("load-start", { trigger: event2 });
  }
  _onAbort(event2) {
    this._delegate._dispatch("abort", { trigger: event2 });
  }
  _onEmptied() {
    this._delegate._dispatch("emptied", { trigger: event });
  }
  _onLoadedData(event2) {
    this._delegate._dispatch("loaded-data", { trigger: event2 });
  }
  _onLoadedMetadata(event2) {
    this._onStreamTypeChange();
    this._attachCanPlayListeners();
    this._delegate._dispatch("volume-change", {
      detail: {
        volume: this._media.volume,
        muted: this._media.muted
      }
    });
    this._delegate._dispatch("loaded-metadata", { trigger: event2 });
    if (_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.g && (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.h)(this._ctx.$state.source())) {
      this._delegate._ready(this._getCanPlayDetail(), event2);
    }
  }
  _getCanPlayDetail() {
    return {
      duration: this._media.duration,
      buffered: this._media.buffered,
      seekable: this._media.seekable
    };
  }
  _onStreamTypeChange() {
    if (this._ctx.$state.live())
      return;
    const isLive = !Number.isFinite(this._media.duration);
    this._delegate._dispatch("stream-type-change", {
      detail: isLive ? "live" : "on-demand"
    });
  }
  _onPlay(event2) {
    if (!this._ctx.$state.canPlay)
      return;
    this._delegate._dispatch("play", { trigger: event2 });
  }
  _onPause(event2) {
    if (this._media.readyState === 1 && !this._waiting)
      return;
    this._waiting = false;
    this._timeRAF._stop();
    this._delegate._dispatch("pause", { trigger: event2 });
  }
  _onCanPlay(event2) {
    this._onStreamTypeChange();
    this._delegate._ready(this._getCanPlayDetail(), event2);
  }
  _onCanPlayThrough(event2) {
    if (this._ctx.$state.started())
      return;
    this._delegate._dispatch("can-play-through", {
      trigger: event2,
      detail: this._getCanPlayDetail()
    });
  }
  _onPlaying(event2) {
    this._waiting = false;
    this._delegate._dispatch("playing", { trigger: event2 });
    this._timeRAF._start();
  }
  _onStalled(event2) {
    this._delegate._dispatch("stalled", { trigger: event2 });
    if (this._media.readyState < 3) {
      this._waiting = true;
      this._delegate._dispatch("waiting", { trigger: event2 });
    }
  }
  _onWaiting(event2) {
    if (this._media.readyState < 3) {
      this._waiting = true;
      this._delegate._dispatch("waiting", { trigger: event2 });
    }
  }
  _onEnded(event2) {
    this._timeRAF._stop();
    this._updateCurrentTime(this._media.duration, event2);
    this._delegate._dispatch("end", { trigger: event2 });
    if (this._ctx.$state.loop()) {
      this._onLoop();
    } else {
      this._delegate._dispatch("ended", { trigger: event2 });
    }
  }
  _attachTimeUpdate() {
    if (this._ctx.$state.paused()) {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._media, "timeupdate", this._onTimeUpdate.bind(this));
    }
  }
  _onTimeUpdate(event2) {
    this._updateCurrentTime(this._media.currentTime, event2);
  }
  _onDurationChange(event2) {
    if (this._ctx.$state.ended()) {
      this._updateCurrentTime(this._media.duration, event2);
    }
    this._delegate._dispatch("duration-change", {
      detail: this._media.duration,
      trigger: event2
    });
  }
  _onVolumeChange(event2) {
    this._delegate._dispatch("volume-change", {
      detail: {
        volume: this._media.volume,
        muted: this._media.muted
      },
      trigger: event2
    });
  }
  _onSeeked(event2) {
    this._updateCurrentTime(this._media.currentTime, event2);
    this._delegate._dispatch("seeked", {
      detail: this._media.currentTime,
      trigger: event2
    });
    if (Math.trunc(this._media.currentTime) === Math.trunc(this._media.duration) && (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.j)(this._media.duration) > (0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.j)(this._media.currentTime)) {
      this._updateCurrentTime(this._media.duration, event2);
      if (!this._media.ended) {
        this._ctx.player.dispatch(
          new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("media-play-request", {
            trigger: event2
          })
        );
      }
    }
  }
  _onSeeking(event2) {
    this._delegate._dispatch("seeking", {
      detail: this._media.currentTime,
      trigger: event2
    });
  }
  _onProgress(event2) {
    this._delegate._dispatch("progress", {
      detail: {
        buffered: this._media.buffered,
        seekable: this._media.seekable
      },
      trigger: event2
    });
  }
  _onLoop() {
    const hasCustomControls = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.E)(this._media.controls);
    if (hasCustomControls)
      this._media.controls = false;
    this._ctx.player.dispatch(new _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("media-loop-request"));
  }
  _onSuspend(event2) {
    this._delegate._dispatch("suspend", { trigger: event2 });
  }
  _onRateChange(event2) {
    this._delegate._dispatch("rate-change", {
      detail: this._media.playbackRate,
      trigger: event2
    });
  }
  _onError(event2) {
    const error = this._media.error;
    if (!error)
      return;
    this._delegate._dispatch("error", {
      detail: {
        message: error.message,
        code: error.code,
        mediaError: error
      },
      trigger: event2
    });
  }
}

class NativeAudioTracks {
  constructor(_provider, _context) {
    this._provider = _provider;
    this._context = _context;
    this._nativeTracks.onaddtrack = this._onAddNativeTrack.bind(this);
    this._nativeTracks.onremovetrack = this._onRemoveNativeTrack.bind(this);
    this._nativeTracks.onchange = this._onChangeNativeTrack.bind(this);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._context.audioTracks, "change", this._onChangeTrack.bind(this));
  }
  get _nativeTracks() {
    return this._provider.media.audioTracks;
  }
  _onAddNativeTrack(event) {
    const _track = event.track;
    if (_track.label === "")
      return;
    const audioTrack = {
      id: _track.id + "",
      label: _track.label,
      language: _track.language,
      kind: _track.kind,
      selected: false
    };
    this._context.audioTracks[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._add](audioTrack, event);
    if (_track.enabled)
      audioTrack.selected = true;
  }
  _onRemoveNativeTrack(event) {
    const track = this._context.audioTracks.getById(event.track.id);
    if (track)
      this._context.audioTracks[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._remove](track, event);
  }
  _onChangeNativeTrack(event) {
    let enabledTrack = this._getEnabledNativeTrack();
    if (!enabledTrack)
      return;
    const track = this._context.audioTracks.getById(enabledTrack.id);
    if (track)
      this._context.audioTracks[_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.L._select](track, true, event);
  }
  _getEnabledNativeTrack() {
    return Array.from(this._nativeTracks).find((track) => track.enabled);
  }
  _onChangeTrack(event) {
    const { current } = event.detail;
    if (!current)
      return;
    const track = this._nativeTracks.getTrackById(current.id);
    if (track) {
      const prev = this._getEnabledNativeTrack();
      if (prev)
        prev.enabled = false;
      track.enabled = true;
    }
  }
}

class HTMLMediaProvider {
  constructor(_media) {
    this._media = _media;
    this._currentSrc = null;
  }
  setup(context) {
    new HTMLMediaEvents(this, context);
    if ("audioTracks" in this.media)
      new NativeAudioTracks(this, context);
    this.playsinline = context.$state.playsinline();
  }
  get type() {
    return "";
  }
  get media() {
    return this._media;
  }
  get currentSrc() {
    return this._currentSrc;
  }
  get paused() {
    return this._media.paused;
  }
  get muted() {
    return this._media.muted;
  }
  set muted(muted) {
    this._media.muted = muted;
  }
  get volume() {
    return this._media.volume;
  }
  set volume(volume) {
    this._media.volume = volume;
  }
  get currentTime() {
    return this._media.currentTime;
  }
  set currentTime(time) {
    this._media.currentTime = time;
  }
  get playsinline() {
    return this._media.hasAttribute("playsinline");
  }
  set playsinline(playsinline) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._media, "playsinline", playsinline);
  }
  get playbackRate() {
    return this._media.playbackRate;
  }
  set playbackRate(rate) {
    this._media.playbackRate = rate;
  }
  async play() {
    return this._media.play();
  }
  async pause() {
    return this._media.pause();
  }
  async loadSource({ src, type }, preload) {
    this._media.preload = preload;
    if ((0,_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_1__.k)(src)) {
      this._media.srcObject = src;
    } else {
      this._media.srcObject = null;
      this._media.src = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src) ? src : window.URL.createObjectURL(src);
    }
    this._media.load();
    this._currentSrc = { src, type };
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ isDOMEvent),
/* harmony export */   A: () => (/* binding */ isNumber),
/* harmony export */   B: () => (/* binding */ useDisposalBin),
/* harmony export */   C: () => (/* binding */ Component),
/* harmony export */   D: () => (/* binding */ DOMEvent),
/* harmony export */   E: () => (/* binding */ isNil),
/* harmony export */   F: () => (/* binding */ isNull),
/* harmony export */   G: () => (/* binding */ deferredPromise),
/* harmony export */   H: () => (/* binding */ Host),
/* harmony export */   I: () => (/* binding */ EventsTarget),
/* harmony export */   J: () => (/* binding */ waitTimeout),
/* harmony export */   K: () => (/* binding */ animationFrameThrottle),
/* harmony export */   L: () => (/* binding */ unwrap),
/* harmony export */   M: () => (/* binding */ isArray),
/* harmony export */   N: () => (/* binding */ tick),
/* harmony export */   O: () => (/* binding */ createContext),
/* harmony export */   P: () => (/* binding */ root),
/* harmony export */   Q: () => (/* binding */ kebabToCamelCase),
/* harmony export */   R: () => (/* binding */ waitIdlePeriod),
/* harmony export */   S: () => (/* binding */ State),
/* harmony export */   T: () => (/* binding */ provideContext),
/* harmony export */   U: () => (/* binding */ uppercaseFirstChar),
/* harmony export */   V: () => (/* binding */ ViewController),
/* harmony export */   W: () => (/* binding */ prop),
/* harmony export */   X: () => (/* binding */ method),
/* harmony export */   Y: () => (/* binding */ untrack),
/* harmony export */   Z: () => (/* binding */ ariaBool),
/* harmony export */   _: () => (/* binding */ isWriteSignal),
/* harmony export */   a: () => (/* binding */ setStyle),
/* harmony export */   a0: () => (/* binding */ hasProvidedContext),
/* harmony export */   a1: () => (/* binding */ noop),
/* harmony export */   a2: () => (/* binding */ createScope),
/* harmony export */   a3: () => (/* binding */ isMouseEvent),
/* harmony export */   a4: () => (/* binding */ isTouchEvent),
/* harmony export */   a5: () => (/* binding */ createDisposalBin),
/* harmony export */   b: () => (/* binding */ autoUpdate),
/* harmony export */   c: () => (/* binding */ computePosition),
/* harmony export */   d: () => (/* binding */ defineCustomElement),
/* harmony export */   e: () => (/* binding */ effect),
/* harmony export */   f: () => (/* binding */ setAttribute),
/* harmony export */   g: () => (/* binding */ getScope),
/* harmony export */   h: () => (/* binding */ signal),
/* harmony export */   i: () => (/* binding */ isKeyboardClick),
/* harmony export */   j: () => (/* binding */ computed),
/* harmony export */   k: () => (/* binding */ isString),
/* harmony export */   l: () => (/* binding */ listenEvent),
/* harmony export */   m: () => (/* binding */ hasTriggerEvent),
/* harmony export */   n: () => (/* binding */ findTriggerEvent),
/* harmony export */   o: () => (/* binding */ onDispose),
/* harmony export */   p: () => (/* binding */ peek),
/* harmony export */   q: () => (/* binding */ appendTriggerEvent),
/* harmony export */   r: () => (/* binding */ isPointerEvent),
/* harmony export */   s: () => (/* binding */ scoped),
/* harmony export */   t: () => (/* binding */ isKeyboardEvent),
/* harmony export */   u: () => (/* binding */ useState),
/* harmony export */   v: () => (/* binding */ useContext),
/* harmony export */   w: () => (/* binding */ walkTriggerEventChain),
/* harmony export */   x: () => (/* binding */ camelToKebabCase),
/* harmony export */   y: () => (/* binding */ isUndefined),
/* harmony export */   z: () => (/* binding */ isFunction)
/* harmony export */ });
const SCOPE = Symbol("SCOPE" );

let scheduledEffects = false, runningEffects = false, currentScope = null, currentObserver = null, currentObservers = null, currentObserversIndex = 0, effects = [], defaultContext = {};
const NOOP = () => {
}, STATE_CLEAN = 0, STATE_CHECK = 1, STATE_DIRTY = 2, STATE_DISPOSED = 3;
function flushEffects() {
  scheduledEffects = true;
  queueMicrotask(runEffects);
}
function runEffects() {
  if (!effects.length) {
    scheduledEffects = false;
    return;
  }
  runningEffects = true;
  for (let i = 0; i < effects.length; i++) {
    if (effects[i]._state !== STATE_CLEAN)
      runTop(effects[i]);
  }
  effects = [];
  scheduledEffects = false;
  runningEffects = false;
}
function runTop(node) {
  let ancestors = [node];
  while (node = node[SCOPE]) {
    if (node._effect && node._state !== STATE_CLEAN)
      ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    updateCheck(ancestors[i]);
  }
}
function root(init) {
  const scope = createScope();
  return compute(scope, !init.length ? init : init.bind(null, dispose.bind(scope)), null);
}
function peek(fn) {
  return compute(currentScope, fn, null);
}
function untrack(fn) {
  return compute(null, fn, null);
}
function tick() {
  if (!runningEffects)
    runEffects();
}
function getScope() {
  return currentScope;
}
function scoped(run, scope) {
  try {
    return compute(scope, run, null);
  } catch (error) {
    handleError(scope, error);
    return;
  }
}
function getContext(key, scope = currentScope) {
  return scope?._context[key];
}
function setContext(key, value, scope = currentScope) {
  if (scope)
    scope._context = { ...scope._context, [key]: value };
}
function onDispose(disposable) {
  if (!disposable || !currentScope)
    return disposable || NOOP;
  const node = currentScope;
  if (!node._disposal) {
    node._disposal = disposable;
  } else if (Array.isArray(node._disposal)) {
    node._disposal.push(disposable);
  } else {
    node._disposal = [node._disposal, disposable];
  }
  return function removeDispose() {
    if (node._state === STATE_DISPOSED)
      return;
    disposable.call(null);
    if (isFunction$1(node._disposal)) {
      node._disposal = null;
    } else if (Array.isArray(node._disposal)) {
      node._disposal.splice(node._disposal.indexOf(disposable), 1);
    }
  };
}
function dispose(self = true) {
  if (this._state === STATE_DISPOSED)
    return;
  let head = self ? this._prevSibling || this[SCOPE] : this, current = this._nextSibling, next = null;
  while (current && current[SCOPE] === this) {
    dispose.call(current, true);
    disposeNode(current);
    next = current._nextSibling;
    current._nextSibling = null;
    current = next;
  }
  if (self)
    disposeNode(this);
  if (current)
    current._prevSibling = !self ? this : this._prevSibling;
  if (head)
    head._nextSibling = current;
}
function disposeNode(node) {
  node._state = STATE_DISPOSED;
  if (node._disposal)
    emptyDisposal(node);
  if (node._sources)
    removeSourceObservers(node, 0);
  if (node._prevSibling)
    node._prevSibling._nextSibling = null;
  node[SCOPE] = null;
  node._sources = null;
  node._observers = null;
  node._prevSibling = null;
  node._context = defaultContext;
  node._handlers = null;
}
function emptyDisposal(scope) {
  try {
    if (Array.isArray(scope._disposal)) {
      for (let i = scope._disposal.length - 1; i >= 0; i--) {
        const callable = scope._disposal[i];
        callable.call(callable);
      }
    } else {
      scope._disposal.call(scope._disposal);
    }
    scope._disposal = null;
  } catch (error) {
    handleError(scope, error);
  }
}
function compute(scope, compute2, observer) {
  const prevScope = currentScope, prevObserver = currentObserver;
  currentScope = scope;
  currentObserver = observer;
  try {
    return compute2.call(scope);
  } finally {
    currentScope = prevScope;
    currentObserver = prevObserver;
  }
}
function handleError(scope, error) {
  if (!scope || !scope._handlers)
    throw error;
  let i = 0, len = scope._handlers.length, coercedError = coerceError(error);
  for (i = 0; i < len; i++) {
    try {
      scope._handlers[i](coercedError);
      break;
    } catch (error2) {
      coercedError = coerceError(error2);
    }
  }
  if (i === len)
    throw coercedError;
}
function coerceError(error) {
  return error instanceof Error ? error : Error(JSON.stringify(error));
}
function read() {
  if (this._state === STATE_DISPOSED)
    return this._value;
  if (currentObserver && !this._effect) {
    if (!currentObservers && currentObserver._sources && currentObserver._sources[currentObserversIndex] == this) {
      currentObserversIndex++;
    } else if (!currentObservers)
      currentObservers = [this];
    else
      currentObservers.push(this);
  }
  if (this._compute)
    updateCheck(this);
  return this._value;
}
function write(newValue) {
  const value = isFunction$1(newValue) ? newValue(this._value) : newValue;
  if (this._changed(this._value, value)) {
    this._value = value;
    if (this._observers) {
      for (let i = 0; i < this._observers.length; i++) {
        notify(this._observers[i], STATE_DIRTY);
      }
    }
  }
  return this._value;
}
const ScopeNode = function Scope() {
  this[SCOPE] = null;
  this._nextSibling = null;
  this._prevSibling = null;
  if (currentScope)
    currentScope.append(this);
};
const ScopeProto = ScopeNode.prototype;
ScopeProto._context = defaultContext;
ScopeProto._handlers = null;
ScopeProto._compute = null;
ScopeProto._disposal = null;
ScopeProto.append = function(child) {
  child[SCOPE] = this;
  child._prevSibling = this;
  if (this._nextSibling) {
    if (child._nextSibling) {
      let tail = child._nextSibling;
      while (tail._nextSibling)
        tail = tail._nextSibling;
      tail._nextSibling = this._nextSibling;
      this._nextSibling._prevSibling = tail;
    } else {
      child._nextSibling = this._nextSibling;
      this._nextSibling._prevSibling = child;
    }
  }
  this._nextSibling = child;
  child._context = child._context === defaultContext ? this._context : { ...this._context, ...child._context };
  if (this._handlers) {
    child._handlers = !child._handlers ? this._handlers : [...child._handlers, ...this._handlers];
  }
};
ScopeProto.dispose = function() {
  dispose.call(this);
};
function createScope() {
  return new ScopeNode();
}
const ComputeNode = function Computation(initialValue, compute2, options) {
  ScopeNode.call(this);
  this._state = compute2 ? STATE_DIRTY : STATE_CLEAN;
  this._init = false;
  this._effect = false;
  this._sources = null;
  this._observers = null;
  this._value = initialValue;
  this.id = options?.id ?? (this._compute ? "computed" : "signal");
  if (compute2)
    this._compute = compute2;
  if (options && options.dirty)
    this._changed = options.dirty;
};
const ComputeProto = ComputeNode.prototype;
Object.setPrototypeOf(ComputeProto, ScopeProto);
ComputeProto._changed = isNotEqual;
ComputeProto.call = read;
function createComputation(initialValue, compute2, options) {
  return new ComputeNode(initialValue, compute2, options);
}
function isNotEqual(a, b) {
  return a !== b;
}
function isFunction$1(value) {
  return typeof value === "function";
}
function updateCheck(node) {
  if (node._state === STATE_CHECK) {
    for (let i = 0; i < node._sources.length; i++) {
      updateCheck(node._sources[i]);
      if (node._state === STATE_DIRTY) {
        break;
      }
    }
  }
  if (node._state === STATE_DIRTY)
    update(node);
  else
    node._state = STATE_CLEAN;
}
function cleanup(node) {
  if (node._nextSibling && node._nextSibling[SCOPE] === node)
    dispose.call(node, false);
  if (node._disposal)
    emptyDisposal(node);
  node._handlers = node[SCOPE] ? node[SCOPE]._handlers : null;
}
function update(node) {
  let prevObservers = currentObservers, prevObserversIndex = currentObserversIndex;
  currentObservers = null;
  currentObserversIndex = 0;
  try {
    cleanup(node);
    const result = compute(node, node._compute, node);
    if (currentObservers) {
      if (node._sources)
        removeSourceObservers(node, currentObserversIndex);
      if (node._sources && currentObserversIndex > 0) {
        node._sources.length = currentObserversIndex + currentObservers.length;
        for (let i = 0; i < currentObservers.length; i++) {
          node._sources[currentObserversIndex + i] = currentObservers[i];
        }
      } else {
        node._sources = currentObservers;
      }
      let source;
      for (let i = currentObserversIndex; i < node._sources.length; i++) {
        source = node._sources[i];
        if (!source._observers)
          source._observers = [node];
        else
          source._observers.push(node);
      }
    } else if (node._sources && currentObserversIndex < node._sources.length) {
      removeSourceObservers(node, currentObserversIndex);
      node._sources.length = currentObserversIndex;
    }
    if (!node._effect && node._init) {
      write.call(node, result);
    } else {
      node._value = result;
      node._init = true;
    }
  } catch (error) {
    if (!node._init && typeof node._value === "undefined") {
      console.error(
        `computed \`${node.id}\` threw error during first run, this can be fatal.

Solutions:

1. Set the \`initial\` option to silence this error`,
        "\n2. Or, use an `effect` if the return value is not being used",
        "\n\n",
        error
      );
    }
    handleError(node, error);
    if (node._state === STATE_DIRTY) {
      cleanup(node);
      if (node._sources)
        removeSourceObservers(node, 0);
    }
    return;
  }
  currentObservers = prevObservers;
  currentObserversIndex = prevObserversIndex;
  node._state = STATE_CLEAN;
}
function notify(node, state) {
  if (node._state >= state)
    return;
  if (node._effect && node._state === STATE_CLEAN) {
    effects.push(node);
    if (!scheduledEffects)
      flushEffects();
  }
  node._state = state;
  if (node._observers) {
    for (let i = 0; i < node._observers.length; i++) {
      notify(node._observers[i], STATE_CHECK);
    }
  }
}
function removeSourceObservers(node, index) {
  let source, swap;
  for (let i = index; i < node._sources.length; i++) {
    source = node._sources[i];
    if (source._observers) {
      swap = source._observers.indexOf(node);
      source._observers[swap] = source._observers[source._observers.length - 1];
      source._observers.pop();
    }
  }
}

function noop(...args) {
}
function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isNil(value) {
  return isNull(value) || isUndefined(value);
}
function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function isArray(value) {
  return Array.isArray(value);
}

const EVENT = Event, DOM_EVENT = Symbol("DOM_EVENT");
class DOMEvent extends EVENT {
  [DOM_EVENT] = true;
  /**
   * The event detail.
   */
  detail;
  /**
   * The preceding event that was responsible for this event being fired.
   */
  trigger;
  /**
   * Walks up the event chain (following each `trigger`) and returns the origin event
   * that started the chain.
   */
  get originEvent() {
    return getOriginEvent(this) ?? this;
  }
  /**
   * Walks up the event chain (following each `trigger`) and determines whether the initial
   * event was triggered by the end user (ie: check whether `isTrusted` on the `originEvent` `true`).
   */
  get isOriginTrusted() {
    return getOriginEvent(this)?.isTrusted ?? false;
  }
  constructor(type, ...init) {
    super(type, init[0]);
    this.detail = init[0]?.detail;
    this.trigger = init[0]?.trigger;
  }
}
function isDOMEvent(event) {
  return !!event?.[DOM_EVENT];
}
function getOriginEvent(event) {
  let trigger = event.trigger;
  while (trigger && trigger.trigger) {
    trigger = trigger.trigger;
  }
  return trigger;
}
function walkTriggerEventChain(event, callback) {
  if (!isDOMEvent(event))
    return;
  let trigger = event.trigger;
  while (trigger) {
    const returnValue = callback(trigger);
    if (returnValue)
      return [trigger, returnValue];
    trigger = trigger.trigger;
  }
  return;
}
function findTriggerEvent(event, type) {
  return walkTriggerEventChain(event, (e) => e.type === type)?.[0];
}
function hasTriggerEvent(event, type) {
  return !!findTriggerEvent(event, type);
}
function appendTriggerEvent(event, trigger) {
  const origin = getOriginEvent(event) ?? event;
  if (origin === trigger) {
    throw Error(
      "[maverick] attemping to append event as a trigger on itself (cyclic)" 
    );
  }
  if (typeof origin.trigger !== "undefined") {
    console.warn(
      `[maverick] overwriting existing trigger event: \`${origin.trigger.type}\` -> \`${trigger?.type}\`

`,
      "Event:\n",
      event,
      "Origin Event:\n",
      origin,
      "Trigger Event:\n",
      trigger
    );
  }
  Object.defineProperty(origin, "trigger", {
    configurable: true,
    enumerable: true,
    get: () => trigger
  });
}
class EventsTarget extends EventTarget {
  /** @internal type only */
  $ts__events;
  addEventListener(type, callback, options) {
    return super.addEventListener(type, callback, options);
  }
  removeEventListener(type, callback, options) {
    return super.removeEventListener(type, callback, options);
  }
}
function listenEvent(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return onDispose(() => target.removeEventListener(type, handler, options));
}
function isPointerEvent(event) {
  return !!event?.type.startsWith("pointer");
}
function isTouchEvent(event) {
  return !!event?.type.startsWith("touch");
}
function isMouseEvent(event) {
  return /^(click|mouse)/.test(event?.type ?? "");
}
function isKeyboardEvent(event) {
  return !!event?.type.startsWith("key");
}
function isKeyboardClick(event) {
  return isKeyboardEvent(event) && (event.key === "Enter" || event.key === " ");
}
function setAttribute(host, name, value) {
  if (!host)
    return;
  else if (!value && value !== "" && value !== 0) {
    host.removeAttribute(name);
  } else {
    const attrValue = value === true ? "" : value + "";
    if (host.getAttribute(name) !== attrValue) {
      host.setAttribute(name, attrValue);
    }
  }
}
function setStyle(host, property, value) {
  if (!host)
    return;
  else if (!value && value !== 0) {
    host.style.removeProperty(property);
  } else {
    host.style.setProperty(property, value + "");
  }
}

function signal(initialValue, options) {
  const node = createComputation(initialValue, null, options), signal2 = read.bind(node);
  signal2.node = node;
  signal2[SCOPE] = true;
  signal2.set = write.bind(node);
  return signal2;
}
function isReadSignal(fn) {
  return isFunction$1(fn) && SCOPE in fn;
}
function computed(compute, options) {
  const node = createComputation(
    options?.initial,
    compute,
    options
  ), signal2 = read.bind(node);
  signal2[SCOPE] = true;
  signal2.node = node;
  return signal2;
}
function effect$1(effect2, options) {
  const signal2 = createComputation(
    null,
    function runEffect() {
      let effectResult = effect2();
      isFunction$1(effectResult) && onDispose(effectResult);
      return null;
    },
    { id: options?.id ?? "effect" } 
  );
  signal2._effect = true;
  update(signal2);
  {
    return function stopEffect() {
      dispose.call(signal2, true);
    };
  }
}
function isWriteSignal(fn) {
  return isReadSignal(fn) && "set" in fn;
}

const effect = effect$1;

function createContext(provide) {
  return { id: Symbol(), provide };
}
function provideContext(context, value, scope = getScope()) {
  if (!scope) {
    throw Error("[maverick] attempting to provide context outside root");
  }
  const hasProvidedValue = !isUndefined(value);
  if (!hasProvidedValue && !context.provide) {
    throw Error("[maverick] context can not be provided without a value or `provide` function");
  }
  setContext(context.id, hasProvidedValue ? value : context.provide?.(), scope);
}
function useContext(context) {
  const value = getContext(context.id);
  if (isUndefined(value)) {
    throw Error("[maverick] attempting to use context without providing first");
  }
  return value;
}
function hasProvidedContext(context) {
  return !isUndefined(getContext(context.id));
}

const PROPS = /* @__PURE__ */ Symbol("PROPS" );
const METHODS = /* @__PURE__ */ Symbol("METHODS" );
const ON_DISPATCH = /* @__PURE__ */ Symbol("ON_DISPATCH" );

const EMPTY_PROPS = {};
class Instance {
  /** @internal type only */
  $ts__events;
  /** @internal type only */
  $ts__vars;
  /* @internal */
  [ON_DISPATCH] = null;
  $el = signal(null);
  _el = null;
  _scope = null;
  _attachScope = null;
  _connectScope = null;
  _component = null;
  _destroyed = false;
  _props = EMPTY_PROPS;
  _attrs = null;
  _styles = null;
  _state;
  _$state;
  _setupCallbacks = [];
  _attachCallbacks = [];
  _connectCallbacks = [];
  _destroyCallbacks = [];
  constructor(Component, scope, init) {
    this._scope = scope;
    if (init?.scope)
      init.scope.append(scope);
    let stateFactory = Component.state, props = Component.props;
    if (stateFactory) {
      this._$state = stateFactory.create();
      this._state = new Proxy(this._$state, {
        get: (_, prop) => this._$state[prop]()
      });
      provideContext(stateFactory, this._$state);
    }
    if (props) {
      this._props = createInstanceProps(props);
      if (init?.props) {
        for (const prop of Object.keys(init.props)) {
          this._props[prop]?.set(init.props[prop]);
        }
      }
    }
    onDispose(this._destroy.bind(this));
  }
  _setup() {
    scoped(() => {
      for (const callback of this._setupCallbacks)
        callback();
    }, this._scope);
  }
  _attach(el) {
    if (this._el)
      return;
    this._el = el;
    this.$el.set(el);
    {
      el.$$COMPONENT_NAME = this._component?.constructor.name;
    }
    scoped(() => {
      this._attachScope = createScope();
      scoped(() => {
        for (const callback of this._attachCallbacks)
          callback(this._el);
        this._attachAttrs();
        this._attachStyles();
      }, this._attachScope);
    }, this._scope);
    el.dispatchEvent(new Event("attached"));
  }
  _detach() {
    this._attachScope?.dispose();
    this._attachScope = null;
    this._connectScope = null;
    if (this._el) {
      this._el.$$COMPONENT_NAME = null;
    }
    this._el = null;
    this.$el.set(null);
  }
  _connect() {
    if (!this._el || !this._attachScope || !this._connectCallbacks.length)
      return;
    scoped(() => {
      this._connectScope = createScope();
      scoped(() => {
        for (const callback of this._connectCallbacks)
          callback(this._el);
      }, this._connectScope);
    }, this._attachScope);
  }
  _disconnect() {
    this._connectScope?.dispose();
    this._connectScope = null;
  }
  _destroy() {
    if (this._destroyed)
      return;
    this._destroyed = true;
    scoped(() => {
      for (const callback of this._destroyCallbacks)
        callback(this._el);
    }, this._scope);
    const el = this._el;
    this._detach();
    this._scope.dispose();
    this._setupCallbacks.length = 0;
    this._attachCallbacks.length = 0;
    this._connectCallbacks.length = 0;
    this._destroyCallbacks.length = 0;
    this._component = null;
    this._attrs = null;
    this._styles = null;
    this._props = EMPTY_PROPS;
    this._scope = null;
    this._state = EMPTY_PROPS;
    this._$state = null;
    if (el)
      delete el.$;
  }
  _addHooks(target) {
    if (target.onSetup)
      this._setupCallbacks.push(target.onSetup.bind(target));
    if (target.onAttach)
      this._attachCallbacks.push(target.onAttach.bind(target));
    if (target.onConnect)
      this._connectCallbacks.push(target.onConnect.bind(target));
    if (target.onDestroy)
      this._destroyCallbacks.push(target.onDestroy.bind(target));
  }
  _attachAttrs() {
    if (!this._attrs)
      return;
    for (const name of Object.keys(this._attrs)) {
      if (isFunction(this._attrs[name])) {
        effect(this._setAttr.bind(this, name));
      } else {
        setAttribute(this._el, name, this._attrs[name]);
      }
    }
  }
  _attachStyles() {
    if (!this._styles)
      return;
    for (const name of Object.keys(this._styles)) {
      if (isFunction(this._styles[name])) {
        effect(this._setStyle.bind(this, name));
      } else {
        setStyle(this._el, name, this._styles[name]);
      }
    }
  }
  _setAttr(name) {
    setAttribute(this._el, name, this._attrs[name].call(this._component));
  }
  _setStyle(name) {
    setStyle(this._el, name, this._styles[name].call(this._component));
  }
}
function createInstanceProps(props) {
  const $props = {};
  for (const name of Object.keys(props)) {
    const def = props[name];
    $props[name] = signal(def, def);
  }
  return $props;
}

let currentInstance = { $$: null };
function createComponent(Component, init) {
  return root(() => {
    currentInstance.$$ = new Instance(Component, getScope(), init);
    const component = new Component();
    currentInstance.$$._component = component;
    currentInstance.$$ = null;
    return component;
  });
}
class ViewController extends EventTarget {
  /** @internal */
  $$;
  get el() {
    return this.$$._el;
  }
  get $el() {
    return this.$$.$el();
  }
  get scope() {
    return this.$$._scope;
  }
  get attachScope() {
    return this.$$._attachScope;
  }
  get connectScope() {
    return this.$$._connectScope;
  }
  /** @internal */
  get $props() {
    return this.$$._props;
  }
  /** @internal */
  get $state() {
    return this.$$._$state;
  }
  get state() {
    return this.$$._state;
  }
  constructor() {
    super();
    if (currentInstance.$$)
      this.attach(currentInstance);
  }
  attach({ $$ }) {
    this.$$ = $$;
    $$._addHooks(this);
    return this;
  }
  addEventListener(type, callback, options) {
    if (!this.el) {
      const name = this.constructor.name;
      console.warn(`[maverick] adding event listener to \`${name}\` before element is attached`);
    }
    this.listen(type, callback, options);
  }
  removeEventListener(type, callback, options) {
    this.el?.removeEventListener(type, callback, options);
  }
  /**
   * This method can be used to specify attributes that should be set on the host element. Any
   * attributes that are assigned to a function will be considered a signal and updated accordingly.
   */
  setAttributes(attributes) {
    if (!this.$$._attrs)
      this.$$._attrs = {};
    Object.assign(this.$$._attrs, attributes);
  }
  /**
   * This method can be used to specify styles that should set be set on the host element. Any
   * styles that are assigned to a function will be considered a signal and updated accordingly.
   */
  setStyles(styles) {
    if (!this.$$._styles)
      this.$$._styles = {};
    Object.assign(this.$$._styles, styles);
  }
  /**
   * This method is used to satisfy the CSS variables contract specified on the current
   * component. Other CSS variables can be set via the `setStyles` method.
   */
  setCSSVars(vars) {
    this.setStyles(vars);
  }
  /**
   * Type-safe utility for creating component DOM events.
   */
  createEvent(type, ...init) {
    return new DOMEvent(type, init[0]);
  }
  /**
   * Creates a `DOMEvent` and dispatches it from the host element. This method is typed to
   * match all component events.
   */
  dispatch(type, ...init) {
    if (!this.el)
      return false;
    const event = type instanceof Event ? type : new DOMEvent(type, init[0]);
    Object.defineProperty(event, "target", {
      get: () => this.$$._component
    });
    return untrack(() => {
      this.$$[ON_DISPATCH]?.(event);
      return this.el.dispatchEvent(event);
    });
  }
  dispatchEvent(event) {
    return this.dispatch(event);
  }
  /**
   * Adds an event listener for the given `type` and returns a function which can be invoked to
   * remove the event listener.
   *
   * - The listener is removed if the current scope is disposed.
   * - This method is safe to use on the server (noop).
   */
  listen(type, handler, options) {
    if (!this.el)
      return noop;
    return listenEvent(this.el, type, handler, options);
  }
}

class Component extends ViewController {
  subscribe(callback) {
    if (!this.state) {
      const name = this.constructor.name;
      throw Error(
        `[maverick] component \`${name}\` can not be subscribed to because it has no internal state`
      );
    }
    return scoped(() => effect(() => callback(this.state)), this.$$._scope);
  }
  destroy() {
    this.$$._destroy();
  }
}

function prop(target, propertyKey, descriptor) {
  if (!target[PROPS])
    target[PROPS] = /* @__PURE__ */ new Set();
  target[PROPS].add(propertyKey);
}
function method(target, propertyKey, descriptor) {
  if (!target[METHODS])
    target[METHODS] = /* @__PURE__ */ new Set();
  target[METHODS].add(propertyKey);
}

class State {
  id = Symbol("STATE" );
  record;
  _descriptors;
  constructor(record) {
    this.record = record;
    this._descriptors = Object.getOwnPropertyDescriptors(record);
  }
  create() {
    const store = {}, state = new Proxy(store, { get: (_, prop) => store[prop]() });
    for (const name of Object.keys(this.record)) {
      const getter = this._descriptors[name].get;
      store[name] = getter ? computed(getter.bind(state)) : signal(this.record[name]);
    }
    return store;
  }
  reset(record, filter) {
    for (const name of Object.keys(record)) {
      if (!this._descriptors[name].get && (!filter || filter(name))) {
        record[name].set(this.record[name]);
      }
    }
  }
}
function useState(state) {
  return useContext(state);
}

function runAll(fns, arg) {
  for (const fn of fns)
    fn(arg);
}

function camelToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function kebabToCamelCase(str) {
  return str.replace(/-./g, (x) => x[1].toUpperCase());
}
function uppercaseFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function unwrap(fn) {
  return isFunction(fn) ? fn() : fn;
}

function ariaBool(value) {
  return value ? "true" : "false";
}

function createDisposalBin() {
  const disposal = /* @__PURE__ */ new Set();
  return {
    add(...callbacks) {
      for (const callback of callbacks)
        disposal.add(callback);
    },
    empty() {
      for (const callback of disposal)
        callback();
      disposal.clear();
    }
  };
}
function useDisposalBin() {
  const disposal = createDisposalBin();
  onDispose(disposal.empty);
  return disposal;
}

function deferredPromise() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

function waitTimeout(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
function animationFrameThrottle(func) {
  let id = -1, lastArgs;
  function throttle(...args) {
    lastArgs = args;
    if (id >= 0)
      return;
    id = window.requestAnimationFrame(() => {
      func.apply(this, lastArgs);
      id = -1;
      lastArgs = void 0;
    });
  }
  return throttle;
}
const requestIdleCallback = typeof window !== "undefined" ? "requestIdleCallback" in window ? window.requestIdleCallback : (cb) => window.setTimeout(cb, 1) : noop;
function waitIdlePeriod(callback, options) {
  return new Promise((resolve) => {
    requestIdleCallback((deadline) => {
      callback?.(deadline);
      resolve();
    }, options);
  });
}

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

function getCssDimensions(element) {
  const css = getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

const getElementRects = async function (_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...(await getDimensionsFn(floating))
    }
  };
};

function isRTL(element) {
  return getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

const STRING = (v) => v === null ? "" : v + "";
const NULLABLE_STRING = (v) => v === null ? null : v + "";
const NUMBER = (v) => v === null ? 0 : Number(v);
const BOOLEAN = (v) => v !== null;
const FUNCTION = () => null;
const ARRAY = (v) => v === null ? [] : JSON.parse(v);
const OBJECT = (v) => v === null ? {} : JSON.parse(v);
function inferAttributeConverter(value) {
  if (value === null)
    return NULLABLE_STRING;
  switch (typeof value) {
    case "undefined":
      return STRING;
    case "string":
      return STRING;
    case "boolean":
      return BOOLEAN;
    case "number":
      return NUMBER;
    case "function":
      return FUNCTION;
    case "object":
      return isArray(value) ? ARRAY : OBJECT;
    default:
      return STRING;
  }
}

const ATTRS = /* @__PURE__ */ Symbol("ATTRS" );
const SETUP = /* @__PURE__ */ Symbol("SETUP" );
const SETUP_STATE = /* @__PURE__ */ Symbol("SETUP_STATE" );
const SETUP_CALLBACKS = /* @__PURE__ */ Symbol("SETUP_CALLBACKS" );

function Host(Super, Component) {
  class MaverickElement extends Super {
    static attrs;
    static [ATTRS] = null;
    static get observedAttributes() {
      if (!this[ATTRS] && Component.props) {
        const map = /* @__PURE__ */ new Map();
        for (const propName of Object.keys(Component.props)) {
          let attr = this.attrs?.[propName], attrName = isString(attr) ? attr : !attr ? attr : attr?.attr;
          if (attrName === false)
            continue;
          if (!attrName)
            attrName = camelToKebabCase(propName);
          map.set(attrName, {
            _prop: propName,
            _converter: attr && !isString(attr) && attr?.converter || inferAttributeConverter(Component.props[propName])
          });
        }
        this[ATTRS] = map;
      }
      return this[ATTRS] ? Array.from(this[ATTRS].keys()) : [];
    }
    $;
    [SETUP_STATE] = 0 /* Idle */;
    [SETUP_CALLBACKS] = null;
    keepAlive = false;
    forwardKeepAlive = true;
    get scope() {
      return this.$.$$._scope;
    }
    get attachScope() {
      return this.$.$$._attachScope;
    }
    get connectScope() {
      return this.$.$$._connectScope;
    }
    get $props() {
      return this.$.$$._props;
    }
    get $state() {
      return this.$.$$._$state;
    }
    get state() {
      return this.$.state;
    }
    constructor(...args) {
      super(...args);
      this.$ = scoped(() => createComponent(Component), null);
      this.$.$$._addHooks(this);
      if (Component.props) {
        const props = this.$props, descriptors = Object.getOwnPropertyDescriptors(this);
        for (const prop of Object.keys(descriptors)) {
          if (prop in Component.props) {
            props[prop].set(this[prop]);
            delete this[prop];
          }
        }
      }
    }
    attributeChangedCallback(name, _, newValue) {
      const Ctor = this.constructor;
      if (!Ctor[ATTRS]) {
        super.attributeChangedCallback?.(name, _, newValue);
        return;
      }
      const def = Ctor[ATTRS].get(name);
      if (def)
        this[def._prop] = def._converter(newValue);
    }
    connectedCallback() {
      const instance = this.$?.$$;
      if (!instance || instance._destroyed)
        return;
      if (this[SETUP_STATE] !== 2 /* Ready */) {
        setup.call(this);
        return;
      }
      if (!this.isConnected)
        return;
      if (this.hasAttribute("keep-alive")) {
        this.keepAlive = true;
      }
      instance._connect();
      if (isArray(this[SETUP_CALLBACKS]))
        runAll(this[SETUP_CALLBACKS], this);
      this[SETUP_CALLBACKS] = null;
      const callback = super.connectedCallback;
      if (callback)
        scoped(() => callback.call(this), this.connectScope);
      return;
    }
    disconnectedCallback() {
      const instance = this.$?.$$;
      if (!instance || instance._destroyed)
        return;
      instance._disconnect();
      const callback = super.disconnectedCallback;
      if (callback)
        callback.call(this);
      if (!this.keepAlive && !this.hasAttribute("keep-alive")) {
        requestAnimationFrame(() => {
          if (!this.isConnected)
            instance._destroy();
        });
      }
    }
    [SETUP]() {
      const instance = this.$.$$, Ctor = this.constructor;
      if (instance._destroyed) {
        console.warn(`[maverick] attempted attaching to destroyed element \`${this.tagName}\``);
      }
      if (instance._destroyed)
        return;
      const attrs = Ctor[ATTRS];
      if (attrs) {
        for (const attr of this.attributes) {
          let def = attrs.get(attr.name);
          if (def && def._converter) {
            instance._props[def._prop].set(def._converter(this.getAttribute(attr.name)));
          }
        }
      }
      instance._setup();
      instance._attach(this);
      this[SETUP_STATE] = 2 /* Ready */;
      this.connectedCallback();
    }
    // @ts-expect-error
    subscribe(callback) {
      return this.$.subscribe(callback);
    }
    destroy() {
      this.disconnectedCallback();
      this.$.destroy();
    }
  }
  extendProto(MaverickElement, Component);
  return MaverickElement;
}
function extendProto(Element, Component) {
  const ElementProto = Element.prototype, ComponentProto = Component.prototype;
  if (Component.props) {
    for (const prop of Object.keys(Component.props)) {
      Object.defineProperty(ElementProto, prop, {
        enumerable: true,
        configurable: true,
        get() {
          return this.$props[prop]();
        },
        set(value) {
          this.$props[prop].set(value);
        }
      });
    }
  }
  if (ComponentProto[PROPS]) {
    for (const name of ComponentProto[PROPS]) {
      Object.defineProperty(ElementProto, name, {
        enumerable: true,
        configurable: true,
        get() {
          return this.$[name];
        },
        set(value) {
          this.$[name] = value;
        }
      });
    }
  }
  if (ComponentProto[METHODS]) {
    for (const name of ComponentProto[METHODS]) {
      ElementProto[name] = function(...args) {
        return this.$[name](...args);
      };
    }
  }
}
function setup() {
  if (this[SETUP_STATE] !== 0 /* Idle */)
    return;
  this[SETUP_STATE] = 1 /* Pending */;
  const parent = findParent(this), isParentRegistered = parent && window.customElements.get(parent.localName), isParentSetup = parent && parent[SETUP_STATE] === 2 /* Ready */;
  if (parent && (!isParentRegistered || !isParentSetup)) {
    waitForParent.call(this, parent);
    return;
  }
  attach.call(this, parent);
}
async function waitForParent(parent) {
  await window.customElements.whenDefined(parent.localName);
  if (parent[SETUP_STATE] !== 2 /* Ready */) {
    await new Promise((res) => (parent[SETUP_CALLBACKS] ??= []).push(res));
  }
  attach.call(this, parent);
}
function attach(parent) {
  if (!this.isConnected)
    return;
  if (parent) {
    if (parent.keepAlive && parent.forwardKeepAlive) {
      this.keepAlive = true;
      this.setAttribute("keep-alive", "");
    }
    const scope = this.$.$$._scope;
    if (scope)
      parent.$.$$._attachScope.append(scope);
  }
  this[SETUP]();
}
function findParent(host) {
  let node = host.parentNode, prefix = host.localName.split("-", 1)[0] + "-";
  while (node) {
    if (node.nodeType === 1 && node.localName.startsWith(prefix)) {
      return node;
    }
    node = node.parentNode;
  }
  return null;
}

function defineCustomElement(element, throws = false) {
  if (throws || !window.customElements.get(element.tagName)) {
    window.customElements.define(element.tagName, element);
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-62f50269.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-62f50269.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MediaChaptersRadioGroupElement),
/* harmony export */   B: () => (/* binding */ MediaSpeedRadioGroupElement),
/* harmony export */   C: () => (/* binding */ MediaQualityRadioGroupElement),
/* harmony export */   D: () => (/* binding */ MediaRadioElement),
/* harmony export */   E: () => (/* binding */ MediaRadioGroupElement),
/* harmony export */   F: () => (/* binding */ MediaSliderElement),
/* harmony export */   G: () => (/* binding */ MediaSliderThumbnailElement),
/* harmony export */   H: () => (/* binding */ MediaSliderValueElement),
/* harmony export */   I: () => (/* binding */ MediaSliderVideoElement),
/* harmony export */   J: () => (/* binding */ MediaTimeSliderElement),
/* harmony export */   K: () => (/* binding */ MediaSliderPreviewElement),
/* harmony export */   L: () => (/* binding */ MediaVolumeSliderElement),
/* harmony export */   M: () => (/* binding */ MediaCaptionsElement),
/* harmony export */   N: () => (/* binding */ MediaSliderChaptersElement),
/* harmony export */   a: () => (/* binding */ MediaGestureElement),
/* harmony export */   b: () => (/* binding */ MediaPosterElement),
/* harmony export */   c: () => (/* binding */ MediaThumbnailElement),
/* harmony export */   d: () => (/* binding */ MediaTimeElement),
/* harmony export */   e: () => (/* binding */ MediaControlsElement),
/* harmony export */   f: () => (/* binding */ MediaControlsGroupElement),
/* harmony export */   g: () => (/* binding */ MediaChapterTitleElement),
/* harmony export */   h: () => (/* binding */ MediaLayoutElement),
/* harmony export */   i: () => (/* binding */ MediaPlayButtonElement),
/* harmony export */   j: () => (/* binding */ MediaMuteButtonElement),
/* harmony export */   k: () => (/* binding */ MediaCaptionButtonElement),
/* harmony export */   l: () => (/* binding */ MediaFullscreenButtonElement),
/* harmony export */   m: () => (/* binding */ MediaPIPButtonElement),
/* harmony export */   n: () => (/* binding */ MediaSeekButtonElement),
/* harmony export */   o: () => (/* binding */ MediaToggleButtonElement),
/* harmony export */   p: () => (/* binding */ MediaLiveButtonElement),
/* harmony export */   q: () => (/* binding */ MediaTooltipElement),
/* harmony export */   r: () => (/* binding */ MediaTooltipTriggerElement),
/* harmony export */   s: () => (/* binding */ MediaTooltipContentElement),
/* harmony export */   t: () => (/* binding */ MediaAudioRadioGroupElement),
/* harmony export */   u: () => (/* binding */ MediaCaptionsRadioGroupElement),
/* harmony export */   v: () => (/* binding */ MediaMenuElement),
/* harmony export */   w: () => (/* binding */ MediaMenuButtonElement),
/* harmony export */   x: () => (/* binding */ MediaMenuPortalElement),
/* harmony export */   y: () => (/* binding */ MediaMenuItemElement),
/* harmony export */   z: () => (/* binding */ MediaMenuItemsElement)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");
/* harmony import */ var _vidstack_eb8d860b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vidstack-eb8d860b.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-eb8d860b.js");
/* harmony import */ var _vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vidstack-2b92eda6.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js");
/* harmony import */ var _vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vidstack-063df485.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-063df485.js");






class MediaCaptionsElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.am) {
  static {
    this.tagName = "media-captions";
  }
}

class MediaGestureElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.al) {
  static {
    this.tagName = "media-gesture";
  }
}

class MediaPosterElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.an) {
  constructor() {
    super(...arguments);
    this._img = document.createElement("img");
  }
  static {
    this.tagName = "media-poster";
  }
  onSetup() {
    this._media = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.$state.img.set(this._img);
  }
  onConnect() {
    const { src, alt } = this.$state, { crossorigin } = this._media.$state;
    if (this._img.parentNode !== this) {
      this.prepend(this._img);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._img, "src", src());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._img, "alt", alt());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._img, "crossorigin", crossorigin());
    });
  }
}

const imgTemplate = /* @__PURE__ */ (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.a)(
  '<img loading="eager" decoding="async" aria-hidden="true">'
);
class MediaThumbnailElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.T) {
  constructor() {
    super(...arguments);
    this._img = this._createImg();
  }
  static {
    this.tagName = "media-thumbnail";
  }
  onSetup() {
    this._media = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.$state.img.set(this._img);
  }
  onConnect() {
    const { src } = this.$state, { crossorigin } = this._media.$props;
    if (this._img.parentNode !== this) {
      this.prepend(this._img);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._img, "src", src());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._img, "crossorigin", crossorigin());
    });
  }
  _createImg() {
    return (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.c)(imgTemplate);
  }
}

class MediaTimeElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ao) {
  static {
    this.tagName = "media-time";
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      this.textContent = this.$state.timeText();
    });
  }
}

class MediaControlsElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.N) {
  static {
    this.tagName = "media-controls";
  }
}

class MediaControlsGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_eb8d860b_js__WEBPACK_IMPORTED_MODULE_3__.C) {
  static {
    this.tagName = "media-controls-group";
  }
}

class ChapterTitle extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
}
class MediaChapterTitleElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, ChapterTitle) {
  constructor() {
    super(...arguments);
    this._chapterTitle = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.h)("");
    this._title = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(() => {
      const { title, started } = this._media.$state;
      return started() ? this._chapterTitle() || title() : title();
    });
  }
  static {
    this.tagName = "media-chapter-title";
  }
  onSetup() {
    this._media = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  onConnect() {
    (0,_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_4__.o)(this._media.textTracks, "chapters", (track) => {
      if (!track) {
        this._chapterTitle.set("");
        return;
      }
      const onCueChange = () => {
        const activeCue = track?.activeCues[0];
        this._chapterTitle.set(activeCue?.text || "");
      };
      onCueChange();
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(track, "cue-change", onCueChange);
    });
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      this.textContent = this._title();
    });
  }
}

class MediaLayout extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  static {
    this.props = {
      when: ""
    };
  }
}
class MediaLayoutElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, MediaLayout) {
  static {
    this.tagName = "media-layout";
  }
  onSetup() {
    this.query = _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.P.create(this.$props.when);
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchQuery.bind(this));
  }
  _watchQuery() {
    const root = this.firstElementChild, isTemplate = root?.localName === "template", isHTMLElement = root instanceof HTMLElement;
    if (!this.query.matches) {
      if (isTemplate) {
        for (const el of this.children) {
          if (el.localName !== "template")
            el.remove();
        }
      } else if (isHTMLElement) {
        root.style.display = "none";
      }
      return;
    }
    if (isTemplate) {
      this.append(root.cloneNode(true));
    } else if (isHTMLElement) {
      root.style.display = "";
    }
  }
}

class MediaPlayButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.U) {
  static {
    this.tagName = "media-play-button";
  }
}

class MediaMuteButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.Y) {
  static {
    this.tagName = "media-mute-button";
  }
}

class MediaCaptionButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.W) {
  static {
    this.tagName = "media-caption-button";
  }
}

class MediaFullscreenButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.X) {
  static {
    this.tagName = "media-fullscreen-button";
  }
}

class MediaPIPButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.Z) {
  static {
    this.tagName = "media-pip-button";
  }
}

class MediaSeekButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__._) {
  static {
    this.tagName = "media-seek-button";
  }
}

class MediaToggleButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.R) {
  static {
    this.tagName = "media-toggle-button";
  }
}

class MediaLiveButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.$) {
  static {
    this.tagName = "media-live-button";
  }
}

class MediaTooltipElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.O) {
  static {
    this.tagName = "media-tooltip";
  }
}

class MediaTooltipTriggerElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_eb8d860b_js__WEBPACK_IMPORTED_MODULE_3__.T) {
  static {
    this.tagName = "media-tooltip-trigger";
  }
  onConnect() {
    this.style.display = "contents";
  }
}

class MediaTooltipContentElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.Q) {
  static {
    this.tagName = "media-tooltip-content";
  }
}

function renderMenuItemsTemplate(el, onCreate) {
  (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
    if (!el.connectScope)
      return;
    const template = el.querySelector("template");
    if (!template)
      return;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      if (!template.content.firstElementChild?.localName && !template.firstElementChild) {
        throw Error("[vidstack] menu items template requires root element");
      }
      const options = el.getOptions();
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.b)(template, options.length, (radio, i) => {
        const { label, value } = options[i], labelEl = radio.querySelector(`[data-part="label"]`);
        radio.setAttribute("value", value);
        if (labelEl) {
          if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(label)) {
            labelEl.textContent = label;
          } else {
            (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
              labelEl.textContent = label();
            });
          }
        }
        onCreate?.(radio, options[i], i);
      });
    });
  });
}

class MediaAudioRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ah) {
  static {
    this.tagName = "media-audio-radio-group";
  }
  onConnect() {
    renderMenuItemsTemplate(this);
  }
}

class MediaCaptionsRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ai) {
  static {
    this.tagName = "media-captions-radio-group";
  }
  onConnect() {
    renderMenuItemsTemplate(this);
  }
}

class MediaMenuElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a9) {
  static {
    this.tagName = "media-menu";
  }
}

class MediaMenuButtonElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.aa) {
  static {
    this.tagName = "media-menu-button";
  }
}

class MediaMenuPortalElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ab) {
  static {
    this.tagName = "media-menu-portal";
  }
  static {
    this.attrs = {
      disabled: {
        converter(value) {
          if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(value))
            return value;
          return value !== null;
        }
      }
    };
  }
}

class MediaMenuItemElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_eb8d860b_js__WEBPACK_IMPORTED_MODULE_3__.M) {
  static {
    this.tagName = "media-menu-item";
  }
}

class MediaMenuItemsElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ad) {
  static {
    this.tagName = "media-menu-items";
  }
}

class MediaChaptersRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ag) {
  static {
    this.tagName = "media-chapters-radio-group";
  }
  onConnect() {
    renderMenuItemsTemplate(this, (el, option) => {
      const { cue, startTime, duration } = option, thumbnailEl = el.querySelector(".vds-thumbnail,media-thumbnail"), startEl = el.querySelector('[data-part="start-time"]'), durationEl = el.querySelector('[data-part="duration"]');
      if (startEl)
        startEl.textContent = startTime;
      if (durationEl)
        durationEl.textContent = duration;
      if (thumbnailEl) {
        thumbnailEl.setAttribute("time", cue.startTime + "");
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
          const { thumbnails } = this.$props;
          thumbnailEl.setAttribute("src", thumbnails());
        });
      }
    });
  }
}

class MediaSpeedRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.aj) {
  static {
    this.tagName = "media-speed-radio-group";
  }
  onConnect() {
    renderMenuItemsTemplate(this);
  }
}

class MediaQualityRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ak) {
  static {
    this.tagName = "media-quality-radio-group";
  }
  onConnect() {
    renderMenuItemsTemplate(this, (el, option) => {
      const bitrate = option.bitrate, bitrateEl = el.querySelector('[data-part="bitrate"]');
      if (bitrate && bitrateEl) {
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
          bitrateEl.textContent = bitrate() || "";
        });
      }
    });
  }
}

class MediaRadioElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.af) {
  static {
    this.tagName = "media-radio";
  }
}

class MediaRadioGroupElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ae) {
  static {
    this.tagName = "media-radio-group";
  }
}

class MediaSliderElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.S) {
  static {
    this.tagName = "media-slider";
  }
}

class MediaSliderThumbnailElement extends MediaThumbnailElement {
  static {
    this.tagName = "media-slider-thumbnail";
  }
  onSetup() {
    super.onSetup();
    this._slider = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.u)(_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.S.state);
  }
  onConnect() {
    super.onConnect();
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._watchTime.bind(this));
  }
  _watchTime() {
    const { duration } = this._media.$state;
    this.time = this._slider.pointerRate() * duration();
  }
}

class MediaSliderValueElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a3) {
  static {
    this.tagName = "media-slider-value";
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      this.textContent = this.getValueText();
    });
  }
}

const videoTemplate = /* @__PURE__ */ (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.a)(
  `<video muted playsinline preload="none" style="max-width: unset;"></video>`
);
class MediaSliderVideoElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a2) {
  constructor() {
    super(...arguments);
    this._video = this._createVideo();
  }
  static {
    this.tagName = "media-slider-video";
  }
  onSetup() {
    this._media = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.$state.video.set(this._video);
  }
  onConnect() {
    const { crossorigin, canLoad } = this._media.$state, { src } = this.$state;
    if (this._video.parentNode !== this) {
      this.prepend(this._video);
    }
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._video, "src", src());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._video, "crossorigin", crossorigin());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._video, "preload", canLoad() ? "auto" : "none");
    });
  }
  _createVideo() {
    return (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.c)(videoTemplate);
  }
}

class MediaTimeSliderElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a7) {
  static {
    this.tagName = "media-time-slider";
  }
}

class MediaSliderPreviewElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a4) {
  static {
    this.tagName = "media-slider-preview";
  }
}

class MediaVolumeSliderElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a6) {
  static {
    this.tagName = "media-volume-slider";
  }
}

class MediaSliderChaptersElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a8) {
  constructor() {
    super(...arguments);
    this._template = null;
  }
  static {
    this.tagName = "media-slider-chapters";
  }
  onConnect() {
    (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
      if (!this.connectScope)
        return;
      const template = this.querySelector("template");
      if (template) {
        this._template = template;
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._renderTemplate.bind(this));
      }
    });
  }
  _renderTemplate() {
    if (!this._template)
      return;
    const elements = (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.b)(this._template, this.cues.length || 1);
    this.setRefs(elements);
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AUDIO_EXTENSIONS),
/* harmony export */   H: () => (/* binding */ HLS_VIDEO_EXTENSIONS),
/* harmony export */   I: () => (/* binding */ IS_CHROME),
/* harmony export */   L: () => (/* binding */ ListSymbol),
/* harmony export */   V: () => (/* binding */ VIDEO_EXTENSIONS),
/* harmony export */   a: () => (/* binding */ canOrientScreen),
/* harmony export */   b: () => (/* binding */ canPlayHLSNatively),
/* harmony export */   c: () => (/* binding */ canChangeVolume),
/* harmony export */   d: () => (/* binding */ canUsePictureInPicture),
/* harmony export */   e: () => (/* binding */ canUseVideoPresentation),
/* harmony export */   f: () => (/* binding */ canRotateScreen),
/* harmony export */   g: () => (/* binding */ IS_SAFARI),
/* harmony export */   h: () => (/* binding */ isHLSSrc),
/* harmony export */   i: () => (/* binding */ isHLSSupported),
/* harmony export */   j: () => (/* binding */ getNumberOfDecimalPlaces),
/* harmony export */   k: () => (/* binding */ isMediaStream),
/* harmony export */   l: () => (/* binding */ AUDIO_TYPES),
/* harmony export */   m: () => (/* binding */ VIDEO_TYPES),
/* harmony export */   n: () => (/* binding */ HLS_VIDEO_TYPES),
/* harmony export */   o: () => (/* binding */ IS_IPHONE),
/* harmony export */   p: () => (/* binding */ clampNumber),
/* harmony export */   r: () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");


const ADD = Symbol("LIST_ADD" ), REMOVE = Symbol("LIST_REMOVE" ), RESET = Symbol("LIST_RESET" ), SELECT = Symbol("LIST_SELECT" ), READONLY = Symbol("LIST_READONLY" ), SET_READONLY = Symbol("LIST_SET_READONLY" ), ON_RESET = Symbol("LIST_ON_RESET" ), ON_REMOVE = Symbol("LIST_ON_REMOVE" ), ON_USER_SELECT = Symbol("LIST_ON_USER_SELECT" );
const ListSymbol = {
  _add: ADD,
  _remove: REMOVE,
  _reset: RESET,
  _select: SELECT,
  _readonly: READONLY,
  _setReadonly: SET_READONLY,
  _onReset: ON_RESET,
  _onRemove: ON_REMOVE,
  _onUserSelect: ON_USER_SELECT
};

const UA = navigator?.userAgent.toLowerCase() || "";
const IS_IOS = /iphone|ipad|ipod|ios|crios|fxios/i.test(UA);
const IS_IPHONE = /(iphone|ipod)/gi.test(navigator?.platform || "");
const IS_CHROME = !!window.chrome;
const IS_SAFARI = !!window.safari || IS_IOS;
function canOrientScreen() {
  return canRotateScreen() && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(screen.orientation.unlock);
}
function canRotateScreen() {
  return !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(window.screen.orientation) && !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(window.screen.orientation.lock);
}
function canPlayHLSNatively(video) {
  if (!video)
    video = document.createElement("video");
  return video.canPlayType("application/vnd.apple.mpegurl").length > 0;
}
function canUsePictureInPicture(video) {
  return !!document.pictureInPictureEnabled && !video.disablePictureInPicture;
}
function canUseVideoPresentation(video) {
  return (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(video.webkitSupportsPresentationMode) && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(video.webkitSetPresentationMode);
}
async function canChangeVolume() {
  const video = document.createElement("video");
  video.volume = 0.5;
  await (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.J)(0);
  return video.volume === 0.5;
}
function getMediaSource() {
  return window?.MediaSource ?? window?.WebKitMediaSource;
}
function getSourceBuffer() {
  return window?.SourceBuffer ?? window?.WebKitSourceBuffer;
}
function isHLSSupported() {
  const MediaSource = getMediaSource();
  if ((0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(MediaSource))
    return false;
  const isTypeSupported = MediaSource && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(MediaSource.isTypeSupported) && MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
  const SourceBuffer = getSourceBuffer();
  const isSourceBufferValid = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(SourceBuffer) || !(0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(SourceBuffer.prototype) && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(SourceBuffer.prototype.appendBuffer) && (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(SourceBuffer.prototype.remove);
  return !!isTypeSupported && !!isSourceBufferValid;
}

const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const AUDIO_TYPES = /* @__PURE__ */ new Set([
  "audio/mpeg",
  "audio/ogg",
  "audio/3gp",
  "audio/mp4",
  "audio/webm",
  "audio/flac"
]);
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const VIDEO_TYPES = /* @__PURE__ */ new Set([
  "video/mp4",
  "video/webm",
  "video/3gp",
  "video/ogg",
  "video/avi",
  "video/mpeg"
]);
const HLS_VIDEO_EXTENSIONS = /\.(m3u8)($|\?)/i;
const HLS_VIDEO_TYPES = /* @__PURE__ */ new Set([
  // Apple sanctioned
  "application/vnd.apple.mpegurl",
  // Apple sanctioned for backwards compatibility
  "audio/mpegurl",
  // Very common
  "audio/x-mpegurl",
  // Very common
  "application/x-mpegurl",
  // Included for completeness
  "video/x-mpegurl",
  "video/mpegurl",
  "application/mpegurl"
]);
function isHLSSrc({ src, type }) {
  return typeof src === "string" && HLS_VIDEO_EXTENSIONS.test(src) || HLS_VIDEO_TYPES.has(type);
}
function isMediaStream(src) {
  return typeof window.MediaStream !== "undefined" && src instanceof window.MediaStream;
}

function round(num, decimalPlaces = 2) {
  return Number(num.toFixed(decimalPlaces));
}
function getNumberOfDecimalPlaces(num) {
  return String(num).split(".")[1]?.length ?? 0;
}
function clampNumber(min, value, max) {
  return Math.max(min, Math.min(max, value));
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-ba5dcbce.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-ba5dcbce.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ QualitySymbol),
/* harmony export */   c: () => (/* binding */ coerceToError)
/* harmony export */ });
const SET_AUTO = Symbol("SET_AUTO_QUALITY" ), ENABLE_AUTO = Symbol("ENABLE_AUTO_QUALITY" );
const QualitySymbol = {
  _setAuto: SET_AUTO,
  _enableAuto: ENABLE_AUTO
};

function coerceToError(error) {
  return error instanceof Error ? error : Error(JSON.stringify(error));
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-eb8d860b.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-eb8d860b.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ControlsGroup),
/* harmony export */   M: () => (/* binding */ MenuItem),
/* harmony export */   T: () => (/* binding */ TooltipTrigger)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");
/* harmony import */ var _vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vidstack-063df485.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-063df485.js");




class ControlsGroup extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  onAttach(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, "pointer-events", "auto");
  }
}

class TooltipTrigger extends _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.C {
  constructor() {
    super();
    new _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.aq();
  }
  onConnect(el) {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(
      (0,_vidstack_063df485_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => {
        if (!this.connectScope)
          return;
        this._attach();
        const tooltip = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ar);
        (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
          const button = this._getButton();
          button && tooltip._detachTrigger(button);
        });
      })
    );
  }
  _attach() {
    const button = this._getButton(), tooltip = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.v)(_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.ar);
    button && tooltip._attachTrigger(button);
  }
  _getButton() {
    return this.el.firstElementChild?.getAttribute("role") === "button" ? this.el.firstElementChild : this.el;
  }
}

class MenuItem extends _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.aa {
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/chunks/vidstack-ef8b416e.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/chunks/vidstack-ef8b416e.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MediaProviderElement),
/* harmony export */   a: () => (/* binding */ MediaPlayerElement)
/* harmony export */ });
/* harmony import */ var _vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");



class MediaProviderElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.M) {
  constructor() {
    super(...arguments);
    this._mediaElement = null;
  }
  static {
    this.tagName = "media-provider";
  }
  onSetup() {
    this._media = (0,_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.setAttribute("keep-alive", "");
  }
  onDestroy() {
    this._mediaElement?.remove();
    this._mediaElement = null;
  }
  onConnect() {
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      const loader = this.$state.loader();
      const media = loader ? loader.mediaType() === "audio" ? this._createAudio() : this._createVideo() : null;
      if (this._mediaElement !== media) {
        const parent = this._mediaElement?.parentElement ?? this;
        this._mediaElement?.remove();
        this._mediaElement = media;
        if (media)
          parent.prepend(media);
      }
      this.load(media);
    });
  }
  _createAudio() {
    const audio = this._mediaElement instanceof HTMLAudioElement ? this._mediaElement : document.createElement("audio");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(audio, "preload", "none");
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(audio, "aria-hidden", "true");
    const { controls, crossorigin } = this._media.$state;
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(audio, "controls", controls());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(audio, "crossorigin", crossorigin());
    });
    return audio;
  }
  _createVideo() {
    const video = this._mediaElement instanceof HTMLVideoElement ? this._mediaElement : document.createElement("video");
    const { controls, crossorigin, poster } = this._media.$state, $poster = (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.j)(() => poster() && controls() ? poster() : null);
    (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(video, "controls", controls());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(video, "crossorigin", crossorigin());
      (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.f)(video, "poster", $poster());
    });
    return video;
  }
}

class MediaPlayerElement extends (0,_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.H)(HTMLElement, _vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_1__.a) {
  static {
    this.tagName = "media-player";
  }
  static {
    this.attrs = {
      preferNativeHLS: "prefer-native-hls"
    };
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/define/vidstack-audio-layout.js":
/*!************************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/define/vidstack-audio-layout.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaAudioLayoutElement: () => (/* binding */ MediaAudioLayoutElement)
/* harmony export */ });
/* harmony import */ var _chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-022dcf66.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-022dcf66.js");
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");
/* harmony import */ var _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-213dac5a.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-213dac5a.js");










function DefaultAudioLayoutLarge() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.D)()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.a)({ seconds: -10, tooltip: "top start" })}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.b)({ tooltip: "top" })}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.a)({
    tooltip: "top",
    seconds: 10
  })}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.h)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.c)({ tooltip: "top" })}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.d)()}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.e)({ tooltip: "top" })} ${DefaultAudioMenus()}
      </media-controls-group>
    </media-controls>
  `;
}
function DefaultAudioLayoutSmall() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(DefaultLivePlayButton)}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.c)({ tooltip: "top start" })}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.i)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.e)({ tooltip: "top" })}${DefaultAudioMenus()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.D)()}</media-controls-group>

      ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(DefaultTimeControlsGroup)}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(DefaultBottomControlsGroup)}
    </media-controls>
  `;
}
function DefaultLivePlayButton() {
  const { live, canSeek } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  return live() && !canSeek() ? (0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.b)({ tooltip: "top start" }) : null;
}
function DefaultTimeControlsGroup() {
  const { live } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  return !live() ? (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      ` : null;
}
function DefaultBottomControlsGroup() {
  const { canSeek } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  return canSeek() ? (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.a)({ seconds: -10, tooltip: "top" })}
          ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.b)({ tooltip: "top" })}
          ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.a)({ tooltip: "top", seconds: 10 })}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      ` : null;
}
function DefaultAudioMenus() {
  const placement = "top end";
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.f)({ tooltip: "top", placement, portal: true })}
    ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.g)({ tooltip: "top end", placement, portal: true })}
  `;
}

class MediaAudioLayoutElement extends (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.H)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.L, _chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.D) {
  static {
    this.tagName = "media-audio-layout";
  }
  onSetup() {
    this.forwardKeepAlive = false;
    this._media = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.classList.add("vds-audio-layout");
    this.menuContainer = (0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.j)("vds-audio-layout");
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.e)(() => {
      if (!this.menuContainer)
        return;
      (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.f)(this.menuContainer, "data-size", this.isSmallLayout && "sm");
    });
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.o)(() => this.menuContainer?.remove());
  }
  onConnect() {
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.e)(() => {
      if (this.$props.customIcons()) {
        new _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.S(this).connect();
      } else {
        new _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.k(this).connect();
      }
    });
  }
  _render() {
    const { streamType } = this._media.$state;
    return this.isMatch && streamType() !== "unknown" ? this.isSmallLayout ? DefaultAudioLayoutSmall() : DefaultAudioLayoutLarge() : null;
  }
  render() {
    return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(this._render.bind(this))}`;
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/define/vidstack-player-layouts.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/define/vidstack-player-layouts.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _vidstack_audio_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vidstack-audio-layout.js */ "./node_modules/vidstack/dist/dev/define/vidstack-audio-layout.js");
/* harmony import */ var _vidstack_video_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vidstack-video-layout.js */ "./node_modules/vidstack/dist/dev/define/vidstack-video-layout.js");












(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_2__.d)(_vidstack_audio_layout_js__WEBPACK_IMPORTED_MODULE_0__.MediaAudioLayoutElement);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_2__.d)(_vidstack_video_layout_js__WEBPACK_IMPORTED_MODULE_1__.MediaVideoLayoutElement);


/***/ }),

/***/ "./node_modules/vidstack/dist/dev/define/vidstack-player-ui.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/define/vidstack-player-ui.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-62f50269.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-62f50269.js");










(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.h);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.e);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.f);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.b);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.k);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.l);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.j);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.m);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.i);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.n);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.o);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.F);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.L);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.J);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.N);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.K);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.H);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.G);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.I);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.v);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.w);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.x);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.z);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.y);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.t);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.u);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.B);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.C);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.A);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.E);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.D);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.q);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.r);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.s);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.a);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.c);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.M);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.p);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.d);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_62f50269_js__WEBPACK_IMPORTED_MODULE_1__.g);


/***/ }),

/***/ "./node_modules/vidstack/dist/dev/define/vidstack-player.js":
/*!******************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/define/vidstack-player.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _chunks_vidstack_ef8b416e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-ef8b416e.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-ef8b416e.js");









(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_ef8b416e_js__WEBPACK_IMPORTED_MODULE_1__.a);
(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.d)(_chunks_vidstack_ef8b416e_js__WEBPACK_IMPORTED_MODULE_1__.M);


/***/ }),

/***/ "./node_modules/vidstack/dist/dev/define/vidstack-video-layout.js":
/*!************************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/define/vidstack-video-layout.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaVideoLayoutElement: () => (/* binding */ MediaVideoLayoutElement)
/* harmony export */ });
/* harmony import */ var _chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-022dcf66.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-022dcf66.js");
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vidstack-02e38e8c.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-02e38e8c.js");
/* harmony import */ var _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-213dac5a.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-213dac5a.js");










function DefaultVideoLayoutLarge() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    ${DefaultVideoGestures()}${DefaultBufferingIndicator()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(DefaultControlsGroupTop)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.D)()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.b)({ tooltip: "top start" })}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.c)({ tooltip: "top" })}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.d)()}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.h)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.e)({ tooltip: "top" })}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(DefaultBottomMenuGroup)}
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.l)()} ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.m)({ tooltip: "top end" })}
      </media-controls-group>
    </media-controls>
  `;
}
function DefaultBottomMenuGroup() {
  const { menuGroup } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)();
  return menuGroup() === "bottom" ? DefaultVideoMenus() : null;
}
function DefaultControlsGroupTop() {
  const { menuGroup } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)(), children = menuGroup() === "top" ? (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
            <div class="vds-controls-spacer"></div>
            ${DefaultVideoMenus()}
          ` : null;
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <media-controls-group class="vds-controls-group">${children}</media-controls-group>
  `;
}
function DefaultVideoLayoutSmall() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    ${DefaultVideoGestures()}${DefaultBufferingIndicator()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.e)({ tooltip: "bottom" })}
        ${DefaultVideoMenus()}${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.c)({ tooltip: "bottom end" })}
      </media-controls-group>

      <div class="vds-controls-group">${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.b)({ tooltip: "top" })}</div>

      <media-controls-group class="vds-controls-group">
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.h)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.m)({ tooltip: "top end" })}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.D)()}</media-controls-group>
    </media-controls>

    ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(StartDuration)}
  `;
}
function StartDuration() {
  const { duration } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)().$state;
  if (duration() === 0)
    return null;
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `;
}
function DefaultBufferingIndicator() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <div class="vds-buffering-indicator">
      <svg class="vds-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="vds-buffering-track" cx="60" cy="60" r="54" stroke="currentColor"></circle>
        <circle
          class="vds-buffering-track-fill"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
        ></circle>
      </svg>
    </div>
  `;
}
function DefaultVideoMenus() {
  const { menuGroup, smQueryList } = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.b)(), $side = () => menuGroup() === "top" || smQueryList.matches ? "bottom" : "top", $tooltip = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.j)(() => `${$side()} ${menuGroup() === "top" ? "end" : "center"}`), $placement = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.j)(() => `${$side()} end`);
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.f)({ tooltip: $tooltip, placement: $placement, portal: true })}
    ${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.g)({ tooltip: $tooltip, placement: $placement, portal: true })}
  `;
}
function DefaultVideoGestures() {
  return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `;
}

class MediaVideoLayoutElement extends (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.H)(_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.L, _chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.c) {
  static {
    this.tagName = "media-video-layout";
  }
  onSetup() {
    this.forwardKeepAlive = false;
    this._media = (0,_chunks_vidstack_02e38e8c_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.classList.add("vds-video-layout");
    this.menuContainer = (0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.j)("vds-video-layout");
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.e)(() => {
      if (!this.menuContainer)
        return;
      (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.f)(this.menuContainer, "data-size", this.isSmallLayout && "sm");
    });
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.o)(() => this.menuContainer?.remove());
  }
  onConnect() {
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_3__.e)(() => {
      if (this.$props.customIcons()) {
        new _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.S(this).connect();
      } else {
        new _chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.k(this).connect();
      }
    });
  }
  _render() {
    const { streamType } = this._media.$state;
    return this.isMatch ? streamType() === "unknown" ? DefaultBufferingIndicator() : this.isSmallLayout ? DefaultVideoLayoutSmall() : DefaultVideoLayoutLarge() : null;
  }
  render() {
    return (0,_chunks_vidstack_022dcf66_js__WEBPACK_IMPORTED_MODULE_0__.h)`${(0,_chunks_vidstack_213dac5a_js__WEBPACK_IMPORTED_MODULE_1__.$)(this._render.bind(this))}`;
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/providers/vidstack-audio.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/providers/vidstack-audio.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioProvider: () => (/* binding */ AudioProvider)
/* harmony export */ });
/* harmony import */ var _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-32b73851.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-32b73851.js");




class AudioProvider extends _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_0__.H {
  constructor() {
    super(...arguments);
    this.$$PROVIDER_TYPE = "AUDIO";
  }
  get type() {
    return "audio";
  }
  setup(context) {
    super.setup(context);
    if (this.type === "audio")
      context.delegate._dispatch("provider-setup", { detail: this });
  }
  /**
   * The native HTML `<audio>` element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement}
   */
  get audio() {
    return this._media;
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/providers/vidstack-hls.js":
/*!******************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/providers/vidstack-hls.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HLSProvider: () => (/* binding */ HLSProvider)
/* harmony export */ });
/* harmony import */ var _chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vidstack-2b92eda6.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js");
/* harmony import */ var _chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/vidstack-6ab269cd.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js");
/* harmony import */ var _vidstack_video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vidstack-video.js */ "./node_modules/vidstack/dist/dev/providers/vidstack-video.js");
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");
/* harmony import */ var _chunks_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-ba5dcbce.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-ba5dcbce.js");
/* harmony import */ var _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vidstack-32b73851.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-32b73851.js");








const toDOMEventType = (type) => (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.x)(type);
class HLSController {
  constructor(_video) {
    this._video = _video;
    this._instance = null;
    this._stopLiveSync = null;
    this._config = {};
    this._callbacks = /* @__PURE__ */ new Set();
  }
  get instance() {
    return this._instance;
  }
  setup(ctor, context) {
    this._ctx = context;
    const isLive = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(context.$state.streamType).includes("live"), isLiveLowLatency = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(context.$state.streamType).includes("ll-");
    this._instance = new ctor({
      lowLatencyMode: isLiveLowLatency,
      backBufferLength: isLiveLowLatency ? 4 : isLive ? 8 : void 0,
      renderTextTracksNatively: false,
      ...this._config
    });
    const dispatcher = this._dispatchHLSEvent.bind(this);
    for (const event of Object.values(ctor.Events))
      this._instance.on(event, dispatcher);
    this._instance.on(ctor.Events.ERROR, this._onError.bind(this));
    for (const callback of this._callbacks)
      callback(this._instance);
    context.player.dispatch(new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("hls-instance", { detail: this._instance }));
    this._instance.attachMedia(this._video);
    this._instance.on(ctor.Events.AUDIO_TRACK_SWITCHED, this._onAudioSwitch.bind(this));
    this._instance.on(ctor.Events.LEVEL_SWITCHED, this._onLevelSwitched.bind(this));
    this._instance.on(ctor.Events.LEVEL_LOADED, this._onLevelLoaded.bind(this));
    this._instance.on(ctor.Events.NON_NATIVE_TEXT_TRACKS_FOUND, this._onTracksFound.bind(this));
    this._instance.on(ctor.Events.CUES_PARSED, this._onCuesParsed.bind(this));
    context.qualities[_chunks_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_1__.Q._enableAuto] = this._enableAutoQuality.bind(this);
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(context.qualities, "change", this._onQualityChange.bind(this));
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(context.audioTracks, "change", this._onAudioChange.bind(this));
    this._stopLiveSync = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.e)(this._liveSync.bind(this));
  }
  _liveSync() {
    if (!this._ctx.$state.live())
      return;
    const raf = new _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_2__.R(this._liveSyncPosition.bind(this));
    raf._start();
    return raf._stop.bind(raf);
  }
  _liveSyncPosition() {
    this._ctx.$state.liveSyncPosition.set(this._instance?.liveSyncPosition ?? Infinity);
  }
  _dispatchHLSEvent(eventType, detail) {
    this._ctx.player?.dispatch(new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(toDOMEventType(eventType), { detail }));
  }
  _onTracksFound(eventType, data) {
    const event = new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(eventType, { detail: data });
    let currentTrack = -1;
    for (let i = 0; i < data.tracks.length; i++) {
      const nonNativeTrack = data.tracks[i], init = nonNativeTrack.subtitleTrack ?? nonNativeTrack.closedCaptions, track = new _chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__.a({
        id: `hls-${nonNativeTrack.kind}${i}`,
        src: init?.url,
        label: nonNativeTrack.label,
        language: init?.lang,
        kind: nonNativeTrack.kind
      });
      track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__.T._readyState] = 2;
      track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__.T._onModeChange] = () => {
        if (track.mode === "showing") {
          this._instance.subtitleTrack = i;
          currentTrack = i;
        } else if (currentTrack === i) {
          this._instance.subtitleTrack = -1;
          currentTrack = -1;
        }
      };
      if (nonNativeTrack.default)
        track.setMode("showing", event);
      this._ctx.textTracks.add(track, event);
    }
  }
  _onCuesParsed(eventType, data) {
    const track = this._ctx.textTracks.getById(`hls-${data.track}`);
    if (!track)
      return;
    const event = new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(eventType, { detail: data });
    for (const cue of data.cues) {
      cue.positionAlign = "auto";
      track.addCue(cue, event);
    }
  }
  _onAudioSwitch(eventType, data) {
    const track = this._ctx.audioTracks[data.id];
    if (track) {
      this._ctx.audioTracks[_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.L._select](
        track,
        true,
        new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(eventType, { detail: data })
      );
    }
  }
  _onLevelSwitched(eventType, data) {
    const quality = this._ctx.qualities[data.level];
    if (quality) {
      this._ctx.qualities[_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.L._select](
        quality,
        true,
        new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(eventType, { detail: data })
      );
    }
  }
  _onLevelLoaded(eventType, data) {
    if (this._ctx.$state.canPlay())
      return;
    const { type, live, totalduration: duration } = data.details;
    const event = new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D(eventType, { detail: data });
    this._ctx.delegate._dispatch("stream-type-change", {
      detail: live ? type === "EVENT" && Number.isFinite(duration) ? "live:dvr" : "live" : "on-demand",
      trigger: event
    });
    this._ctx.delegate._dispatch("duration-change", { detail: duration, trigger: event });
    const media = this._instance.media;
    if (this._instance.currentLevel === -1) {
      this._ctx.qualities[_chunks_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_1__.Q._setAuto](true, event);
    }
    for (const track of this._instance.audioTracks) {
      this._ctx.audioTracks[_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.L._add](
        {
          id: track.id + "",
          label: track.name,
          language: track.lang || "",
          kind: "main"
        },
        event
      );
    }
    for (const level of this._instance.levels) {
      this._ctx.qualities[_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.L._add](
        {
          width: level.width,
          height: level.height,
          codec: level.codecSet,
          bitrate: level.bitrate
        },
        event
      );
    }
    media.dispatchEvent(new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("canplay", { trigger: event }));
  }
  _onError(eventType, data) {
    {
      this._ctx.logger?.errorGroup(`HLS error \`${eventType}\``).labelledLog("Media Element", this._instance?.media).labelledLog("HLS Instance", this._instance).labelledLog("Event Type", eventType).labelledLog("Data", data).labelledLog("Src", (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(this._ctx.$state.source)).labelledLog("Media Store", { ...this._ctx.$state }).dispatch();
    }
    if (data.fatal) {
      switch (data.type) {
        case "networkError":
          this._instance?.startLoad();
          break;
        case "mediaError":
          this._instance?.recoverMediaError();
          break;
        default:
          this._instance?.destroy();
          this._instance = null;
          break;
      }
    }
  }
  _enableAutoQuality() {
    if (this._instance)
      this._instance.currentLevel = -1;
  }
  _onQualityChange() {
    const { qualities } = this._ctx;
    if (!this._instance || qualities.auto)
      return;
    this._instance[qualities.switch + "Level"] = qualities.selectedIndex;
    if (_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.I)
      this._video.currentTime = this._video.currentTime;
  }
  _onAudioChange() {
    const { audioTracks } = this._ctx;
    if (this._instance && this._instance.audioTrack !== audioTracks.selectedIndex) {
      this._instance.audioTrack = audioTracks.selectedIndex;
    }
  }
  _destroy() {
    if (this._ctx)
      this._ctx.qualities[_chunks_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_1__.Q._enableAuto] = void 0;
    this._instance?.destroy();
    this._instance = null;
    this._stopLiveSync?.();
    this._stopLiveSync = null;
    this._ctx?.logger?.info("\u{1F3D7}\uFE0F Destroyed HLS instance");
  }
}

class HLSLibLoader {
  constructor(_lib, _ctx, _callback) {
    this._lib = _lib;
    this._ctx = _ctx;
    this._callback = _callback;
    this._startLoading();
  }
  async _startLoading() {
    this._ctx.logger?.info("\u{1F3D7}\uFE0F Loading HLS Library");
    const callbacks = {
      onLoadStart: this._onLoadStart.bind(this),
      onLoaded: this._onLoaded.bind(this),
      onLoadError: this._onLoadError.bind(this)
    };
    let ctor = await loadHLSScript(this._lib, callbacks);
    if ((0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(ctor) && !(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(this._lib))
      ctor = await importHLS(this._lib, callbacks);
    if (!ctor)
      return null;
    if (!ctor.isSupported()) {
      const message = "[vidstack]: `hls.js` is not supported in this environment";
      this._ctx.logger?.error(message);
      this._ctx.player.dispatch(new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("hls-unsupported"));
      this._ctx.delegate._dispatch("error", { detail: { message, code: 4 } });
      return null;
    }
    return ctor;
  }
  _onLoadStart() {
    {
      this._ctx.logger?.infoGroup("Starting to load `hls.js`").labelledLog("URL", this._lib).dispatch();
    }
    this._ctx.player.dispatch(new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("hls-lib-load-start"));
  }
  _onLoaded(ctor) {
    {
      this._ctx.logger?.infoGroup("Loaded `hls.js`").labelledLog("Library", this._lib).labelledLog("Constructor", ctor).dispatch();
    }
    this._ctx.player.dispatch(
      new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("hls-lib-loaded", {
        detail: ctor
      })
    );
    this._callback(ctor);
  }
  _onLoadError(e) {
    const error = (0,_chunks_vidstack_ba5dcbce_js__WEBPACK_IMPORTED_MODULE_1__.c)(e);
    {
      this._ctx.logger?.errorGroup("Failed to load `hls.js`").labelledLog("Library", this._lib).labelledLog("Error", e).dispatch();
    }
    this._ctx.player.dispatch(
      new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("hls-lib-load-error", {
        detail: error
      })
    );
    this._ctx.delegate._dispatch("error", {
      detail: { message: error.message, code: 4 }
    });
  }
}
async function importHLS(loader, callbacks = {}) {
  if ((0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.y)(loader))
    return void 0;
  callbacks.onLoadStart?.();
  if (loader.prototype && loader.prototype !== Function) {
    callbacks.onLoaded?.(loader);
    return loader;
  }
  try {
    const ctor = (await loader())?.default;
    if (ctor && !!ctor.isSupported) {
      callbacks.onLoaded?.(ctor);
    } else {
      throw Error(
         true ? "[vidstack] failed importing `hls.js`. Dynamic import returned invalid constructor." : 0
      );
    }
    return ctor;
  } catch (err) {
    callbacks.onLoadError?.(err);
  }
  return void 0;
}
async function loadHLSScript(src, callbacks = {}) {
  if (!(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src))
    return void 0;
  callbacks.onLoadStart?.();
  try {
    await (0,_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__.l)(src);
    if (!(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.z)(window.Hls)) {
      throw Error(
         true ? "[vidstack] failed loading `hls.js`. Could not find a valid `Hls` constructor on window" : 0
      );
    }
    const ctor = window.Hls;
    callbacks.onLoaded?.(ctor);
    return ctor;
  } catch (err) {
    callbacks.onLoadError?.(err);
  }
  return void 0;
}

const JS_DELIVR_CDN = "https://cdn.jsdelivr.net";
class HLSProvider extends _vidstack_video_js__WEBPACK_IMPORTED_MODULE_5__.VideoProvider {
  constructor() {
    super(...arguments);
    this.$$PROVIDER_TYPE = "HLS";
    this._ctor = null;
    this._controller = new HLSController(this.video);
    this._library = `${JS_DELIVR_CDN}/npm/hls.js@^1.0.0/dist/hls${".js" }`;
  }
  /**
   * The `hls.js` constructor.
   */
  get ctor() {
    return this._ctor;
  }
  /**
   * The current `hls.js` instance.
   */
  get instance() {
    return this._controller.instance;
  }
  static {
    /**
     * Whether `hls.js` is supported in this environment.
     */
    this.supported = (0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_4__.i)();
  }
  get type() {
    return "hls";
  }
  get canLiveSync() {
    return true;
  }
  /**
   * The `hls.js` configuration object.
   *
   * @see {@link https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning}
   */
  get config() {
    return this._controller._config;
  }
  set config(config) {
    this._controller._config = config;
  }
  /**
   * The `hls.js` constructor (supports dynamic imports) or a URL of where it can be found.
   *
   * @defaultValue `https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.min.js`
   */
  get library() {
    return this._library;
  }
  set library(library) {
    this._library = library;
  }
  preconnect() {
    if (!(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(this._library))
      return;
    (0,_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_3__.p)(this._library);
  }
  setup(context) {
    super.setup(context);
    new HLSLibLoader(this._library, context, (ctor) => {
      this._ctor = ctor;
      this._controller.setup(ctor, context);
      context.delegate._dispatch("provider-setup", { detail: this });
      const src = (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.p)(context.$state.source);
      if (src)
        this.loadSource(src);
    });
  }
  async loadSource({ src }) {
    if (!(0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.k)(src))
      return;
    this._controller.instance?.loadSource(src);
  }
  /**
   * The given callback is invoked when a new `hls.js` instance is created and right before it's
   * attached to media.
   */
  onInstance(callback) {
    const instance = this._controller.instance;
    if (instance)
      callback(instance);
    this._controller._callbacks.add(callback);
    return () => this._controller._callbacks.delete(callback);
  }
  destroy() {
    this._controller._destroy();
  }
}




/***/ }),

/***/ "./node_modules/vidstack/dist/dev/providers/vidstack-video.js":
/*!********************************************************************!*\
  !*** ./node_modules/vidstack/dist/dev/providers/vidstack-video.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoProvider: () => (/* binding */ VideoProvider)
/* harmony export */ });
/* harmony import */ var _chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vidstack-6ab269cd.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-6ab269cd.js");
/* harmony import */ var _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vidstack-32b73851.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-32b73851.js");
/* harmony import */ var _chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/vidstack-2b92eda6.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-2b92eda6.js");
/* harmony import */ var _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vidstack-454b84a7.js */ "./node_modules/vidstack/dist/dev/chunks/vidstack-454b84a7.js");






class NativeHLSTextTracks {
  constructor(_video, _context) {
    this._video = _video;
    this._context = _context;
    _video.textTracks.onaddtrack = this._onAddTrack.bind(this);
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(this._onDispose.bind(this));
  }
  _onAddTrack(event) {
    const nativeTrack = event.track;
    if (!nativeTrack || findTextTrackElement(this._video, nativeTrack))
      return;
    const track = new _chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__.a({
      id: nativeTrack.id,
      kind: nativeTrack.kind,
      label: nativeTrack.label,
      language: nativeTrack.language,
      type: "vtt"
    });
    track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__.T._native] = { track: nativeTrack };
    track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__.T._readyState] = 2;
    track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__.T._nativeHLS] = true;
    let lastIndex = 0;
    const onCueChange = (event2) => {
      if (!nativeTrack.cues)
        return;
      for (let i = lastIndex; i < nativeTrack.cues.length; i++) {
        track.addCue(nativeTrack.cues[i], event2);
        lastIndex++;
      }
    };
    onCueChange(event);
    nativeTrack.oncuechange = onCueChange;
    this._context.textTracks.add(track, event);
    track.setMode(nativeTrack.mode, event);
  }
  _onDispose() {
    this._video.textTracks.onaddtrack = null;
    for (const track of this._context.textTracks) {
      const nativeTrack = track[_chunks_vidstack_2b92eda6_js__WEBPACK_IMPORTED_MODULE_1__.T._native]?.track;
      if (nativeTrack?.oncuechange)
        nativeTrack.oncuechange = null;
    }
  }
}
function findTextTrackElement(video, track) {
  return Array.from(video.children).find((el) => el.track === track);
}

class VideoPictureInPicture {
  constructor(_video, _media) {
    this._video = _video;
    this._media = _media;
    this._onChange = (active, event) => {
      this._media.delegate._dispatch("picture-in-picture-change", {
        detail: active,
        trigger: event
      });
    };
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._video, "enterpictureinpicture", this._onEnter.bind(this));
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._video, "leavepictureinpicture", this._onExit.bind(this));
  }
  get active() {
    return document.pictureInPictureElement === this._video;
  }
  get supported() {
    return (0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__.d)(this._video);
  }
  async enter() {
    return this._video.requestPictureInPicture();
  }
  exit() {
    return document.exitPictureInPicture();
  }
  _onEnter(event) {
    this._onChange(true, event);
  }
  _onExit(event) {
    this._onChange(false, event);
  }
}

class VideoPresentation {
  constructor(_video, _media) {
    this._video = _video;
    this._media = _media;
    this._mode = "inline";
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.l)(this._video, "webkitpresentationmodechanged", this._onModeChange.bind(this));
  }
  get _supported() {
    return (0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__.e)(this._video);
  }
  async _setPresentationMode(mode) {
    if (this._mode === mode)
      return;
    this._video.webkitSetPresentationMode(mode);
  }
  _onModeChange() {
    const prevMode = this._mode;
    this._mode = this._video.webkitPresentationMode;
    {
      this._media.logger?.infoGroup("presentation mode change").labelledLog("Mode", this._mode).labelledLog("Event", event).dispatch();
    }
    this._media.player?.dispatch(
      new _chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.D("video-presentation-change", {
        detail: this._mode,
        trigger: event
      })
    );
    ["fullscreen", "picture-in-picture"].forEach((type) => {
      if (this._mode === type || prevMode === type) {
        this._media.delegate._dispatch(`${type}-change`, {
          detail: this._mode === type,
          trigger: event
        });
      }
    });
  }
}
class FullscreenPresentationAdapter {
  constructor(_presentation) {
    this._presentation = _presentation;
  }
  get active() {
    return this._presentation._mode === "fullscreen";
  }
  get supported() {
    return this._presentation._supported;
  }
  async enter() {
    this._presentation._setPresentationMode("fullscreen");
  }
  async exit() {
    this._presentation._setPresentationMode("inline");
  }
}
class PIPPresentationAdapter {
  constructor(_presentation) {
    this._presentation = _presentation;
  }
  get active() {
    return this._presentation._mode === "picture-in-picture";
  }
  get supported() {
    return this._presentation._supported;
  }
  async enter() {
    this._presentation._setPresentationMode("picture-in-picture");
  }
  async exit() {
    this._presentation._setPresentationMode("inline");
  }
}

class VideoProvider extends _chunks_vidstack_32b73851_js__WEBPACK_IMPORTED_MODULE_3__.H {
  constructor(video, context) {
    super(video);
    this.$$PROVIDER_TYPE = "VIDEO";
    if ((0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__.e)(video)) {
      const presentation = new VideoPresentation(video, context);
      this.fullscreen = new FullscreenPresentationAdapter(presentation);
      this.pictureInPicture = new PIPPresentationAdapter(presentation);
    } else if ((0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__.d)(video)) {
      this.pictureInPicture = new VideoPictureInPicture(video, context);
    }
  }
  get type() {
    return "video";
  }
  setup(context) {
    super.setup(context);
    if ((0,_chunks_vidstack_6ab269cd_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.video)) {
      new NativeHLSTextTracks(this.video, context);
    }
    context.textRenderers._attachVideo(this.video);
    (0,_chunks_vidstack_454b84a7_js__WEBPACK_IMPORTED_MODULE_0__.o)(() => {
      context.textRenderers._attachVideo(null);
    });
    if (this.type === "video")
      context.delegate._dispatch("provider-setup", { detail: this });
  }
  /**
   * The native HTML `<video>` element.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement}
   */
  get video() {
    return this._media;
  }
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/field.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fields_IndexField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields/IndexField */ "./resources/js/fields/IndexField.vue");
/* harmony import */ var _fields_DetailField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/DetailField */ "./resources/js/fields/DetailField.vue");
/* harmony import */ var _fields_FormField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/FormField */ "./resources/js/fields/FormField.vue");



Nova.booting(function (Vue) {
  Vue.component('index-nova-larupload', _fields_IndexField__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Vue.component('detail-nova-larupload', _fields_DetailField__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Vue.component('form-nova-larupload', _fields_FormField__WEBPACK_IMPORTED_MODULE_2__["default"]);
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./resources/scss/field.scss ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;