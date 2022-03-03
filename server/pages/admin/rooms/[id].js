(function() {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 1729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AdminRoom; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: ./src/services/firebase.ts
var firebase = __webpack_require__(6039);
// EXTERNAL MODULE: ./src/hooks/useRoom.tsx
var useRoom = __webpack_require__(4262);
// EXTERNAL MODULE: ./src/components/Question.tsx
var Question = __webpack_require__(9934);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
;// CONCATENATED MODULE: ./src/assets/images/copy.svg
/* harmony default export */ var copy = ({"src":"/_next/static/image/src/assets/images/copy.b8f09a77889694caee5f5938c400c062.svg","height":20,"width":20});
// EXTERNAL MODULE: ./src/assets/styles/components/RoomCode.module.scss
var RoomCode_module = __webpack_require__(3110);
var RoomCode_module_default = /*#__PURE__*/__webpack_require__.n(RoomCode_module);
;// CONCATENATED MODULE: ./src/components/RoomCode.tsx








function RoomCode() {
  const {
    0: copied,
    1: setCopied
  } = (0,external_react_.useState)(false);

  async function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText("thiagobatistadsilva87@gmail.com");
    setCopied(true);
    external_react_hot_toast_default().success("Copiado para o clipboard!", {
      style: {
        background: "#97c4f8",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#a0cafa"
      },
      icon: "📎"
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: `${(RoomCode_module_default()).roomCode} ${copied ? (RoomCode_module_default()).copied : ""}`,
      onClick: copyRoomCodeToClipboard,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: copy,
          alt: "Copiar c\xF3digo da sala"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "PIX"
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(5820);
// EXTERNAL MODULE: ./src/assets/images/logo.svg
var logo = __webpack_require__(499);
// EXTERNAL MODULE: ./src/assets/styles/pages/Room.module.scss
var Room_module = __webpack_require__(6473);
var Room_module_default = /*#__PURE__*/__webpack_require__.n(Room_module);
// EXTERNAL MODULE: ./src/hooks/useAuth.tsx
var useAuth = __webpack_require__(8188);
;// CONCATENATED MODULE: ./src/pages/admin/rooms/[id].tsx






 // import { useState } from "react";
// import toast from "react-hot-toast";
// import Modal from "react-modal";









function AdminRoom() {
  const {
    user,
    signInWithGoogle
  } = (0,useAuth/* default */.Z)();
  const router = (0,router_.useRouter)();
  const {
    id: roomId
  } = router.query;
  const {
    title,
    questions
  } = (0,useRoom/* default */.Z)(roomId); //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   async function handleEndRoom() {
  //     await database.ref(`rooms/${roomId}`).update({
  //       closedAt: new Date(),
  //     });
  //     toast.success("Sala foi fechada!", {
  //       style: {
  //         background: "#68D391",
  //         color: "#FFF",
  //       },
  //       iconTheme: {
  //         primary: "#FFF",
  //         secondary: "#68D391",
  //       },
  //     });
  //     Router.push("/");
  //   }

  async function send() {
    const roomRef = firebase/* database.ref */.Fs.ref(`rooms/${roomId}`); // const firebaseRoom = await roomRef.push({
    //   title: 'Repertório',
    //   authorId: user?.id,
    // });

    router_default().push(`/rooms/${roomRef.key}`);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (Room_module_default()).header,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: logo/* default */.Z,
          alt: "Letmeask"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(RoomCode, {}), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            type: "button",
            disabled: !user,
            onClick: send,
            children: "Enviar sugest\xE3o"
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: (Room_module_default()).main,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: title
        }), questions.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [questions.length, " ", questions.length > 1 ? "sugestões" : "sugestão"]
        })]
      }), questions.map(question => {
        return /*#__PURE__*/jsx_runtime_.jsx(Question/* default */.Z, {
          id: question.id,
          content: question.content,
          author: question.author,
          isAdmin: true,
          roomId: roomId,
          isAnswered: question.isAnswered,
          isHighlighted: question.isHighlighted
        }, question.id);
      })]
    })]
  });
}
const getServerSideProps = async ctx => {
  const {
    id: roomId
  } = ctx === null || ctx === void 0 ? void 0 : ctx.query;
  const {
    ["letmeask.userId"]: userId
  } = (0,external_nookies_.parseCookies)(ctx);
  const roomRef = await firebase/* database.ref */.Fs.ref(`rooms/${roomId}`).get();
  const firebaseRoom = roomRef.val();
  const {
    authorId: adminId
  } = firebaseRoom;

  if (adminId !== userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

/***/ }),

/***/ 3110:
/***/ (function(module) {

// Exports
module.exports = {
	"roomCode": "RoomCode_roomCode__3BD30"
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [597,260,7,167], function() { return __webpack_exec__(1729); });
module.exports = __webpack_exports__;

})();