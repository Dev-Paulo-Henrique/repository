exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 5820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4252);
/* harmony import */ var _assets_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Button(_ref) {
  let {
    isOutlined
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isOutlined"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", _objectSpread({
    className: `${(_assets_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button)} ${isOutlined ? (_assets_styles_components_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().outlined) : ""}`
  }, props));
}

/***/ }),

/***/ 9934:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Question; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9997);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6039);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8188);
/* harmony import */ var _assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2893);
/* harmony import */ var _assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7__);










function Question({
  id,
  content,
  author,
  likeId,
  likeCount,
  isAdmin,
  roomId,
  isAnswered = false,
  isHighlighted = false
}) {
  const {
    user
  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)();
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  async function handleLikeQuestion(questionId, likeId) {
    if (!user) {
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().error("Necessário fazer login", {
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

    if (likeId) {
      await _services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await _services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user === null || user === void 0 ? void 0 : user.id
      });
    }
  }

  async function handleDeleteQuestion(questionId) {
    await _services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success("Sugestão foi removida!", {
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

  async function handleCheckQuestionAsAnswered(questionId) {
    await _services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    });
    react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success("Sugestão foi ouvida!", {
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

  function removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[- ]+/g, " ");
  }

  async function handleHighlightQuestion(questionId) {
    await _services_firebase__WEBPACK_IMPORTED_MODULE_5__/* .database.ref */ .Fs.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    });
    react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success("Ouvindo sugestão...", {
      style: {
        background: "#4d96eb",
        color: "#FFF"
      },
      iconTheme: {
        primary: "#FFF",
        secondary: "#FFF"
      },
      icon: "📣"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: `${(_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().question)} ${isAnswered ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().answered) : ""} ${isHighlighted && !isAnswered ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().highlighted) : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      href: `https://www.cifraclub.com.br/${content}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: removerAcentos(content)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "status",
        children: isAnswered ? 'Ouvida' : isHighlighted ? 'Visualizada' : 'Não visto'
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().userInfo),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: author.avatar,
          alt: author.name,
          width: "32",
          height: "32"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: author.name
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: !isAdmin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
          className: `${(_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().likeButton)} ${likeId ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().liked) : ""}`,
          type: "button",
          "aria-label": "Marcar como gostei",
          onClick: () => handleLikeQuestion(id, likeId),
          children: [likeCount > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: likeCount
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
              d: "M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",
              stroke: "#737380",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [!isAnswered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              className: `${!isAnswered ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().answerButton) : ""} ${isHighlighted && !isAnswered ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : ""}`,
              type: "button",
              "aria-label": "Dar destaque \xE0 sugest\xE3o",
              onClick: () => handleHighlightQuestion(id),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z",
                  stroke: "#737380",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              className: `${!isAnswered ? (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().checkButton) : ""}`,
              type: "button",
              "aria-label": "Marcar sugest\xE3o como respondida",
              onClick: () => handleCheckQuestionAsAnswered(id),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                  cx: "12.0003",
                  cy: "11.9998",
                  r: "9.00375",
                  stroke: "#737380",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                  d: "M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193",
                  stroke: "#737380",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().deleteButton),
            type: "button",
            "aria-label": "Remover sugest\xE3o",
            onClick: () => setIsModalOpen(true),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3 5.99988H5H21",
                stroke: "#737380",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z",
                stroke: "#737380",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              })]
            })
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
      isOpen: isModalOpen,
      ariaHideApp: false,
      onRequestClose: () => setIsModalOpen(false),
      contentLabel: "Deseja mesmo excluir o coment\xE1rio?",
      style: {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        content: {
          position: "initial",
          width: "37rem",
          maxWidth: "90vw",
          height: "23rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          border: "none",
          background: "transparent"
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_assets_styles_components_Question_module_scss__WEBPACK_IMPORTED_MODULE_7___default().excludeModal),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M3 5.99988H5H21",
            stroke: "#737380",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z",
            stroke: "#737380",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
          children: "Excluir sugest\xE3o"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: "Tem certeza que voc\xEA deseja exluir esta sugest\xE3o?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            onClick: () => setIsModalOpen(false),
            children: "Cancelar"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            onClick: () => handleDeleteQuestion(id),
            children: "Sim, excluir"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ 8188:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useAuth; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6007);


function useAuth() {
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP);
  return value;
}

/***/ }),

/***/ 4262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useRoom; }
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8188);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6039);





function useRoom(roomId) {
  const {
    user
  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  const {
    0: questions,
    1: setQuestions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const roomRef = _services_firebase__WEBPACK_IMPORTED_MODULE_4__/* .database.ref */ .Fs.ref(`rooms/${roomId}`);
    roomRef.on("value", room => {
      var _databaseRoom$questio;

      const databaseRoom = room.val();

      if (databaseRoom !== null && databaseRoom !== void 0 && databaseRoom.closedAt && (user === null || user === void 0 ? void 0 : user.id) !== (databaseRoom === null || databaseRoom === void 0 ? void 0 : databaseRoom.authorId)) {
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.error("Sala foi encerrada pelo admin", {
          style: {
            background: "#F56565",
            color: "#FFF"
          },
          iconTheme: {
            primary: "#FFF",
            secondary: "#F56565"
          }
        });
        next_router__WEBPACK_IMPORTED_MODULE_0___default().push("/");
        return () => {
          roomRef.off("value");
        };
      }

      const firebaseQuestions = (_databaseRoom$questio = databaseRoom === null || databaseRoom === void 0 ? void 0 : databaseRoom.questions) !== null && _databaseRoom$questio !== void 0 ? _databaseRoom$questio : {};
      console.log(databaseRoom);
      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        var _value$likes, _Object$entries$find, _value$likes2;

        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values((_value$likes = value.likes) !== null && _value$likes !== void 0 ? _value$likes : {}).length,
          likeId: (_Object$entries$find = Object.entries((_value$likes2 = value.likes) !== null && _value$likes2 !== void 0 ? _value$likes2 : {}).find(([key, like]) => like.authorId === (user === null || user === void 0 ? void 0 : user.id))) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0]
        };
      });
      const orderQuestionsByLikeCount = parsedQuestions.sort((roomA, roomB) => roomA.likeCount < roomB.likeCount ? 1 : roomA.likeCount > roomB.likeCount ? -1 : 0);
      const orderQuestionByNotAnswer = orderQuestionsByLikeCount.sort((roomA, roomB) => roomA.isAnswered > roomB.isAnswered ? 1 : roomA.isAnswered < roomB.isAnswered ? -1 : 0);
      setTitle(databaseRoom === null || databaseRoom === void 0 ? void 0 : databaseRoom.title);
      setQuestions(orderQuestionByNotAnswer);
    });
    return () => {
      roomRef.off("value");
    };
  }, [roomId, user === null || user === void 0 ? void 0 : user.id]);
  return {
    questions,
    title
  };
}

/***/ }),

/***/ 499:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/src/assets/images/logo.3cce2a2fa907efa8055d031fbe657811.svg","height":75,"width":157});

/***/ }),

/***/ 4252:
/***/ (function(module) {

// Exports
module.exports = {
	"button": "Button_button__OL_Oi",
	"outlined": "Button_outlined__1psc_"
};


/***/ }),

/***/ 2893:
/***/ (function(module) {

// Exports
module.exports = {
	"question": "Question_question__2kn3I",
	"answered": "Question_answered__2hShl",
	"highlighted": "Question_highlighted__1xirx",
	"userInfo": "Question_userInfo__U2YvF",
	"likeButton": "Question_likeButton__1KPQo",
	"liked": "Question_liked__2Et9s",
	"deleteButton": "Question_deleteButton__2rLnM",
	"checkButton": "Question_checkButton__2JQKe",
	"answerButton": "Question_answerButton__KnjXL",
	"active": "Question_active__2PWd4",
	"excludeModal": "Question_excludeModal__1ioNQ"
};


/***/ }),

/***/ 6473:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Room_header__1nI-0",
	"main": "Room_main__3B9c-",
	"formAsk": "Room_formAsk__2cjtZ",
	"userInfo": "Room_userInfo__1G0UB",
	"excludeModal": "Room_excludeModal__3dFP-"
};


/***/ })

};
;