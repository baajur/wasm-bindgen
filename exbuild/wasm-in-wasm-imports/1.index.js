(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, Imports, __wbindgen_number_new, __wbindgen_string_new, __wbg_imports_new, __wbg_log_a7b8bf18fd77b213, __wbindgen_cb_drop, __wbg_instantiate_6072aca399220c01, __wbg_instanceof_Instance_ad66f8e343af3f9d, __wbg_exports_bb6da4e7fe5e2cfe, __wbindgen_is_function, __wbindgen_object_drop_ref, __wbg_get_38f68ddea9e54820, __wbg_set_ede434d91072bd5f, __wbg_call_646f9f3c6af62d21, __wbg_bind_4bfa4426a5849cee, __wbg_new_4d63b46bdff6e16c, __wbg_set_dfa2f1a42cb24532, __wbg_fromEntries_6f07bbca1f6ef9ba, __wbg_resolve_57cbe6ab0b3b60a7, __wbg_then_45c887a50a229274, __wbg_then_9d18941da21f7104, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"run\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Imports\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Imports\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_number_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_imports_new\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_imports_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_a7b8bf18fd77b213\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_a7b8bf18fd77b213\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instantiate_6072aca399220c01\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instantiate_6072aca399220c01\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Instance_ad66f8e343af3f9d\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_instanceof_Instance_ad66f8e343af3f9d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_exports_bb6da4e7fe5e2cfe\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_exports_bb6da4e7fe5e2cfe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_function\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_38f68ddea9e54820\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_get_38f68ddea9e54820\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_ede434d91072bd5f\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_ede434d91072bd5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_646f9f3c6af62d21\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_646f9f3c6af62d21\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bind_4bfa4426a5849cee\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_bind_4bfa4426a5849cee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_4d63b46bdff6e16c\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_4d63b46bdff6e16c\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_dfa2f1a42cb24532\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_dfa2f1a42cb24532\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fromEntries_6f07bbca1f6ef9ba\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_fromEntries_6f07bbca1f6ef9ba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_57cbe6ab0b3b60a7\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_resolve_57cbe6ab0b3b60a7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_45c887a50a229274\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_45c887a50a229274\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_9d18941da21f7104\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_9d18941da21f7104\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_debug_string\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper467\", function() { return _index_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper467\"]; });\n\n\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/*! exports provided: run, Imports, __wbindgen_number_new, __wbindgen_string_new, __wbg_imports_new, __wbg_log_a7b8bf18fd77b213, __wbindgen_cb_drop, __wbg_instantiate_6072aca399220c01, __wbg_instanceof_Instance_ad66f8e343af3f9d, __wbg_exports_bb6da4e7fe5e2cfe, __wbindgen_is_function, __wbindgen_object_drop_ref, __wbg_get_38f68ddea9e54820, __wbg_set_ede434d91072bd5f, __wbg_call_646f9f3c6af62d21, __wbg_bind_4bfa4426a5849cee, __wbg_new_4d63b46bdff6e16c, __wbg_set_dfa2f1a42cb24532, __wbg_fromEntries_6f07bbca1f6ef9ba, __wbg_resolve_57cbe6ab0b3b60a7, __wbg_then_45c887a50a229274, __wbg_then_9d18941da21f7104, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, module, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Imports\", function() { return Imports; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_imports_new\", function() { return __wbg_imports_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_a7b8bf18fd77b213\", function() { return __wbg_log_a7b8bf18fd77b213; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instantiate_6072aca399220c01\", function() { return __wbg_instantiate_6072aca399220c01; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Instance_ad66f8e343af3f9d\", function() { return __wbg_instanceof_Instance_ad66f8e343af3f9d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_exports_bb6da4e7fe5e2cfe\", function() { return __wbg_exports_bb6da4e7fe5e2cfe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_function\", function() { return __wbindgen_is_function; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_38f68ddea9e54820\", function() { return __wbg_get_38f68ddea9e54820; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_ede434d91072bd5f\", function() { return __wbg_set_ede434d91072bd5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_646f9f3c6af62d21\", function() { return __wbg_call_646f9f3c6af62d21; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_bind_4bfa4426a5849cee\", function() { return __wbg_bind_4bfa4426a5849cee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_4d63b46bdff6e16c\", function() { return __wbg_new_4d63b46bdff6e16c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_dfa2f1a42cb24532\", function() { return __wbg_set_dfa2f1a42cb24532; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fromEntries_6f07bbca1f6ef9ba\", function() { return __wbg_fromEntries_6f07bbca1f6ef9ba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_57cbe6ab0b3b60a7\", function() { return __wbg_resolve_57cbe6ab0b3b60a7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_45c887a50a229274\", function() { return __wbg_then_45c887a50a229274; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_9d18941da21f7104\", function() { return __wbg_then_9d18941da21f7104; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper467\", function() { return __wbindgen_closure_wrapper467; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(dtor)(a, state.b);\n            else state.a = a;\n        }\n    };\n    real.original = state;\n    return real;\n}\n\nfunction logError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            let error = (function () {\n                try {\n                    return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n                } catch(_) {\n                    return \"<failed to stringify thrown value>\";\n                }\n            }());\n            console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n            throw e;\n        }\n    };\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_16(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1289770fade9def9\"](arg0, arg1, addHeapObject(arg2));\n}\n\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n/**\n*/\nclass Imports {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    static __wrap(ptr) {\n        const obj = Object.create(Imports.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_imports_free\"](ptr);\n    }\n    /**\n    * @param {number} a\n    * @param {number} b\n    * @returns {number}\n    */\n    native_add(a, b) {\n        if (this.ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.ptr);\n        _assertNum(a);\n        _assertNum(b);\n        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"imports_native_add\"](this.ptr, a, b);\n        return ret;\n    }\n}\n\nconst __wbindgen_number_new = function(arg0) {\n    var ret = arg0;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_imports_new = logError(function(arg0) {\n    var ret = Imports.__wrap(arg0);\n    return addHeapObject(ret);\n});\n\nconst __wbg_log_a7b8bf18fd77b213 = logError(function(arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n});\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbg_instantiate_6072aca399220c01 = logError(function(arg0, arg1, arg2) {\n    var ret = WebAssembly.instantiate(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_instanceof_Instance_ad66f8e343af3f9d = logError(function(arg0) {\n    var ret = getObject(arg0) instanceof WebAssembly.Instance;\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_exports_bb6da4e7fe5e2cfe = logError(function(arg0) {\n    var ret = getObject(arg0).exports;\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_is_function = function(arg0) {\n    var ret = typeof(getObject(arg0)) === 'function';\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_get_38f68ddea9e54820 = handleError(function(arg0, arg1) {\n    var ret = Reflect.get(getObject(arg0), getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_set_ede434d91072bd5f = handleError(function(arg0, arg1, arg2) {\n    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n    _assertBoolean(ret);\n    return ret;\n});\n\nconst __wbg_call_646f9f3c6af62d21 = handleError(function(arg0, arg1, arg2, arg3) {\n    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));\n    return addHeapObject(ret);\n});\n\nconst __wbg_bind_4bfa4426a5849cee = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).bind(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_new_4d63b46bdff6e16c = logError(function() {\n    var ret = new Map();\n    return addHeapObject(ret);\n});\n\nconst __wbg_set_dfa2f1a42cb24532 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).set(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_fromEntries_6f07bbca1f6ef9ba = handleError(function(arg0) {\n    var ret = Object.fromEntries(getObject(arg0));\n    return addHeapObject(ret);\n});\n\nconst __wbg_resolve_57cbe6ab0b3b60a7 = logError(function(arg0) {\n    var ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_45c887a50a229274 = logError(function(arg0, arg1) {\n    var ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n});\n\nconst __wbg_then_9d18941da21f7104 = logError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_closure_wrapper467 = logError(function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 24, __wbg_adapter_16);\n    return addHeapObject(ret);\n});\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __wbg_imports_free, imports_native_add, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1289770fade9def9, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);