(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
// EXTERNAL MODULE: ./src/contexts/AuthContext.tsx
var AuthContext = __webpack_require__(6007);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/assets/styles/components/DarkModeSwitch.module.scss
var DarkModeSwitch_module = __webpack_require__(9486);
var DarkModeSwitch_module_default = /*#__PURE__*/__webpack_require__.n(DarkModeSwitch_module);
;// CONCATENATED MODULE: ./src/components/DarkModeSwitch.tsx




function DarkModeSwitch() {
  const {
    0: isDarkModeActive,
    1: setIsDarkModeActive
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("letmeask-darkMode")) {
      activeDarkMode();
    }
  }, [isDarkModeActive]);

  function activeDarkMode() {
    document.getElementsByTagName("html")[0].classList.add("dark-mode");
    localStorage.setItem("letmeask-darkMode", "true");
    setIsDarkModeActive(true);
  }

  function desactiveDarkMode() {
    document.getElementsByTagName("html")[0].classList.remove("dark-mode");
    localStorage.removeItem("letmeask-darkMode");
    setIsDarkModeActive(false);
  }

  function darkModeController() {
    isDarkModeActive ? desactiveDarkMode() : activeDarkMode();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
    className: (DarkModeSwitch_module_default()).darkModeSwitch,
    htmlFor: "darkModeInput",
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      id: "darkModeInput",
      type: "checkbox",
      checked: isDarkModeActive,
      onChange: darkModeController
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: `${isDarkModeActive ? (DarkModeSwitch_module_default()).showMoon : ""}`
    })]
  });
}
;// CONCATENATED MODULE: ./src/pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AuthContext/* AuthProvider */.Ho, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
      position: "top-right"
    }), /*#__PURE__*/jsx_runtime_.jsx(DarkModeSwitch, {})]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9486:
/***/ (function(module) {

// Exports
module.exports = {
	"darkModeSwitch": "DarkModeSwitch_darkModeSwitch__73tYR",
	"showMoon": "DarkModeSwitch_showMoon__1Kmp2"
};


/***/ }),

/***/ 9421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ 5942:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ 4578:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/database");;

/***/ }),

/***/ 5998:
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6533:
/***/ (function(module) {

"use strict";
module.exports = require("react-hot-toast");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [7], function() { return __webpack_exec__(8815); });
module.exports = __webpack_exports__;

})();