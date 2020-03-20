module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "11RA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Mk/8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = (Page => {
  var _temp;

  return _temp = class DefaultPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "logout", eve => {
        if (eve.key === "logout") {
          next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/?logout=${eve.newValue}`);
        }
      });
    }

    static async getInitialProps({
      req
    }) {
      const loggedUser = false ? undefined : Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__[/* getUserFromServerCookie */ "a"])(req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(req);
      let path = req ? req.pathname : "";
      path = "";
      return _objectSpread({}, pageProps, {
        loggedUser,
        currentUrl: path,
        isAuthenticated: !!loggedUser
      });
    }

    componentDidMount() {
      window.addEventListener("storage", this.logout, false);
    }

    componentWillUnmount() {
      window.removeEventListener("storage", this.logout, false);
    }

    render() {
      return __jsx(Page, this.props);
    }

  }, _temp;
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2ls");


/***/ }),

/***/ "Mk/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export strapiRegister */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strapiLogin; });
/* unused harmony export setToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserFromServerCookie; });
/* unused harmony export getUserFromLocalCookie */
/* unused harmony export extractInfoFromHash */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g/JY");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* /lib/auth.js */




const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default.a(apiUrl);
const strapiRegister = (username, email, password) => {
  if (true) {
    return undefined;
  }

  strapi.register(username, email, password).then(res => {
    setToken(res);
  });
  return Promise.resolve();
}; //use strapi to get a JWT and token object, save
//to approriate cookei for future requests

const strapiLogin = (email, password) => {
  if (true) {
    return;
  } // Get a token


  strapi.login(email, password).then(res => {
    setToken(res);
  });
  return Promise.resolve();
};
const setToken = token => {
  if (true) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("username", token.user.username);
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("jwt", token.jwt);
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("id", token.user.id);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("username")) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  }
};
const unsetToken = () => {
  if (true) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("jwt");
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("username");
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("cart"); // to support logging out from all windows

  window.localStorage.setItem("logout", Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/login");
};
const getUserFromServerCookie = req => {
  if (!req.headers.cookie || "") {
    return undefined;
  }

  let username = req.headers.cookie.split(";").find(user => user.trim().startsWith("username="));

  if (username) {
    username = username.split("=")[1];
  }

  const jwtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="));

  if (!jwtCookie) {
    return undefined;
  }

  const jwt = jwtCookie.split("=")[1];
  return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwt), username;
};
const getUserFromLocalCookie = () => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("username");
}; //these will be used if you expand to a provider such as Auth0

const getQueryParams = () => {
  const params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3;
  });
  return params;
};

const extractInfoFromHash = () => {
  if (true) {
    return undefined;
  }

  const {
    id_token,
    state
  } = getQueryParams();
  return {
    token: id_token,
    secret: state
  };
};

/***/ }),

/***/ "O2ls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./hocs/defaultPage.js
var defaultPage = __webpack_require__("11RA");

// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__("Mk/8");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/LoginForm/index.js

var __jsx = external_react_default.a.createElement;


const LoginForm = props => {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');

  const handleSubmit = async e => {
    e.preventDefault();
    const result = props.submit({
      email,
      password
    }); // if (result) {
    //   const token = result.data.login.jwt
    //   localStorage.setItem('token', token)
    //   Router.push("/")
    // }
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "md:w-full bg-white shadow-md rounded px-8 pt-6 pb-8"
  }, __jsx("div", {
    className: "mb-4 w-full text-center"
  }, __jsx("span", {
    className: "text-blue-wingu font-title text-2xl uppercase"
  }, "Iniciar sesi\xF3n")), __jsx("div", {
    className: "mb-4"
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "email"
  }, "Correo electr\xF3nico"), __jsx("input", {
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    id: "email",
    type: "text",
    placeholder: "ejemplo@winguweb.org",
    value: email,
    onChange: event => setEmail(event.target.value)
  })), __jsx("div", {
    className: "mb-6"
  }, __jsx("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "password"
  }, "Contrase\xF1a"), __jsx("input", {
    className: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
    id: "password",
    type: "password",
    placeholder: "******************",
    value: password,
    onChange: event => setPassword(event.target.value)
  }), !password && __jsx("p", {
    className: "text-red-500 text-xs italic"
  }, "Por favor, ingrese una contrase\xF1a.")), __jsx("div", {
    className: "flex items-center justify-center"
  }, __jsx("button", {
    className: "bg-blue-wingu text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
    type: "submit"
  }, "Ingresar")));
};

/* harmony default export */ var components_LoginForm = (LoginForm);
// CONCATENATED MODULE: ./pages/login.js

var login_jsx = external_react_default.a.createElement;







const Login = props => {
  Object(external_react_["useEffect"])(() => {
    if (props.isAuthenticated) {
      router_default.a.push("/"); // redirect if you're already logged in
    }
  }, []);

  const onSubmit = ({
    email,
    password
  }) => {
    Object(auth["b" /* strapiLogin */])(email, password).then(() => console.log(external_js_cookie_default.a.get('user')));
  };

  return login_jsx("div", {
    className: "h-screen max-h-screen "
  }, login_jsx("div", {
    className: "h-full w-full max-w-xs mx-auto flex items-center"
  }, login_jsx(components_LoginForm, {
    submit: onSubmit
  })));
};

/* harmony default export */ var login = __webpack_exports__["default"] = (Object(defaultPage["a" /* default */])(Login));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g/JY":
/***/ (function(module, exports) {

module.exports = require("strapi-sdk-javascript/build/main");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });