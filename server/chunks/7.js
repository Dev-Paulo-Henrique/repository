exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 6007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": function() { return /* binding */ AuthProvider; }
/* harmony export */ });
/* unused harmony export AuthConsumer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6039);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5998);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);




const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function AuthProvider({
  children
}) {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const unsubscribe = _services_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.onAuthStateChanged */ .I8.onAuthStateChanged(user => {
      if (user) {
        const {
          displayName,
          photoURL,
          uid
        } = user;
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, "letmeask.userId", uid, {
          maxAge: 60 * 60 * 24 // 24 hours

        });

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new _services_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firebase.auth.GoogleAuthProvider */ .wC.auth.GoogleAuthProvider();
    const result = await _services_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.signInWithPopup */ .I8.signInWithPopup(provider);

    if (result.user) {
      const {
        displayName,
        photoURL,
        uid
      } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
    value: {
      user,
      signInWithGoogle
    },
    children: children
  });
}
const AuthConsumer = AuthContext.Consumer;
/* harmony default export */ __webpack_exports__["ZP"] = (AuthContext);

/***/ }),

/***/ 6039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wC": function() { return /* reexport default from dynamic */ firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; },
/* harmony export */   "I8": function() { return /* binding */ auth; },
/* harmony export */   "Fs": function() { return /* binding */ database; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4578);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyBkp0dmP5jLcvPwgMQYNpIK6BmBIGmfaQo",
  authDomain: "chat-9bd07.firebaseapp.com",
  databaseURL: "https://chat-9bd07.firebaseio.com",
  projectId: "chat-9bd07",
  storageBucket: "chat-9bd07.appspot.com",
  messagingSenderId: "1096211615371",
  appId: "1:1096211615371:web:cdc5492dcfb9805788ce8e"
};

if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
const database = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().database();


/***/ })

};
;