(function() {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 8434:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Room; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6039);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8188);
/* harmony import */ var _hooks_useRoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4262);
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9934);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5820);
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(499);
/* harmony import */ var _assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6473);
/* harmony import */ var _assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12__);















function Room({
  title
}) {
  const {
    user,
    signInWithGoogle
  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    id: roomId
  } = router.query;
  const {
    0: newQuestion,
    1: setNewQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
  const {
    questions
  } = (0,_hooks_useRoom__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(roomId);

  async function handleSendQuestion(event) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().error("Campo deve ser preenchido!", {
        style: {
          background: "#F56565",
          color: "#FFF"
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#F56565"
        }
      });
      return;
    }

    if (!user) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().error("Usuário não encontrado", {
        style: {
          background: "#F56565",
          color: "#FFF"
        },
        iconTheme: {
          primary: "#FFF",
          secondary: "#F56565"
        }
      });
      return;
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    };
    await _services_firebase__WEBPACK_IMPORTED_MODULE_4__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions`).push(question);
    react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().success("Sugestão enviada!", {
      style: {
        background: "#68D391",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391"
      }
    });
    setNewQuestion("");
  }

  function colocarAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[- ]+/g, "-");
  }

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle();
    }

    react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().success("Logado com sucesso!", {
      style: {
        background: "#68D391",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#68D391"
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: `Letmeask ${title ? title : ""}`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: `A sala ${title} está ao vivo e com tudo preparado para retirar suas dúvidas!`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Enviar sugest\xE3o"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
      className: (_assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z,
          alt: "Letmeask"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
      className: (_assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12___default().main),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          children: title
        }), questions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          children: [questions.length, " ", questions.length > 1 ? "sugestões" : "sugestão"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSendQuestion,
        method: "POST",
        className: (_assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12___default().formAsk),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
          placeholder: "Adicionar artista/louvor",
          value: newQuestion,
          onChange: event => setNewQuestion(colocarAcentos(event.target.value))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_assets_styles_pages_Room_module_scss__WEBPACK_IMPORTED_MODULE_12___default().userInfo),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
              src: user === null || user === void 0 ? void 0 : user.avatar,
              alt: user.name,
              width: "32",
              height: "32"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              children: user.name
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: ["Para enviar uma sugest\xE3o,", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              type: "button",
              onClick: handleLogin,
              children: "fa\xE7a seu login"
            }), "."]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
            type: "submit",
            disabled: !user,
            children: "Enviar sugest\xE3o"
          })]
        })]
      }), questions.map(question => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Question__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
          content: question.content,
          author: question.author,
          likeId: question.likeId,
          likeCount: question.likeCount,
          id: question.id,
          roomId: roomId,
          isAnswered: question.isAnswered,
          isHighlighted: question.isHighlighted
        }, question.id);
      })]
    })]
  });
}
const getStaticProps = async ({
  params
}) => {
  const roomRef = await _services_firebase__WEBPACK_IMPORTED_MODULE_4__/* .database.ref */ .Fs.ref(`rooms/${params.id}`).get();
  const firebaseRoom = roomRef === null || roomRef === void 0 ? void 0 : roomRef.val();

  if (!firebaseRoom) {
    return {
      props: {},
      revalidade: 30
    };
  }

  return {
    props: {
      title: firebaseRoom.title
    },
    revalidate: 30
  };
};
const getStaticPaths = async () => {
  const roomRef = await _services_firebase__WEBPACK_IMPORTED_MODULE_4__/* .database.ref */ .Fs.ref(`rooms`).get();
  const firebaseRooms = roomRef.val();

  if (!firebaseRooms) {
    return {
      paths: [],
      fallback: "blocking"
    };
  }

  const roomsProps = Object.entries(firebaseRooms).map(([key]) => {
    return {
      roomId: key
    };
  });
  const paths = roomsProps.map(room => {
    return {
      params: {
        id: room.roomId
      }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
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

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,260,7,167], function() { return __webpack_exec__(8434); });
module.exports = __webpack_exports__;

})();