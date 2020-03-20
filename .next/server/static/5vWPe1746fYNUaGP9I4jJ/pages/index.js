module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"14":"3ab3d878887ec9d9b890"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

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

/***/ "1JDs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaultPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("11RA");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LoginPage = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "O2ls")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("O2ls")],
    modules: ["../pages/login"]
  }
});

const securePageHoc = Page => class SecurePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static getInitialProps(ctx) {
    return Page.getInitialProps && Page.getInitialProps(ctx);
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/login');
    }
  }

  render() {
    const {
      isAuthenticated
    } = this.props;
    return isAuthenticated ? __jsx(Page, this.props) : __jsx(LoginPage, null);
  }

};

/* harmony default export */ __webpack_exports__["a"] = (Page => Object(_defaultPage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(securePageHoc(Page)));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./hocs/securePage.js
var securePage = __webpack_require__("1JDs");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./graphql/metrics/query/getMetrics.js

const GET_METRICS = external_apollo_boost_["gql"]`
  query {
    accounts {
      account_type {
        Name
      }
      opportunities {
        name
      }
    }
    contacts {
      contact_type {
        Name
      }
    }
    
    opportunities {
      state {
        Name
      }
    }
  }
`;
// CONCATENATED MODULE: ./components/Dashboard/Header.js

var __jsx = external_react_default.a.createElement;

const Header = ({
  loggedUser
}) => {
  return __jsx("header", {
    className: "flex items-center"
  }, __jsx("h1", {
    className: "mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl "
  }, "\xA1Hola ", loggedUser, "!"), __jsx("span", {
    className: "text-4xl"
  }, "\uD83D\uDC4B"));
};

/* harmony default export */ var Dashboard_Header = (Header);
// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./components/Dashboard/assets/EmptyState.js
var EmptyState_jsx = external_react_default.a.createElement;


const EmptyState = props => {
  return EmptyState_jsx("div", {
    className: "flex flex-col items-center my-2"
  }, props.children, EmptyState_jsx("span", {
    className: "mt-1"
  }, "Las m\xE9tricas a\xFAn no est\xE1n disponibles"), EmptyState_jsx("div", {
    style: {
      display: 'none'
    }
  }, "Icons made by ", EmptyState_jsx("a", {
    href: "https://www.flaticon.com/authors/kiranshastry",
    title: "Kiranshastry"
  }, "Kiranshastry"), " from ", EmptyState_jsx("a", {
    href: "https://www.flaticon.com/",
    title: "Flaticon"
  }, "www.flaticon.com")));
};

/* harmony default export */ var assets_EmptyState = (EmptyState);
// CONCATENATED MODULE: ./components/Dashboard/assets/Bar2.js
var Bar2_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Bar2 = props => {
  return Bar2_jsx("svg", _extends({
    width: 150,
    height: 150,
    viewBox: "0 0 455.4 455.4"
  }, props), Bar2_jsx("path", {
    fill: "#00acea",
    d: "M455.4 280.8L427 324.6l28.4 43.8H332.3v-23.7h42.6v-63.9h13.6z"
  }), Bar2_jsx("path", {
    fill: "#00efd1",
    d: "M388.5 9.5v271.3h-13.6v-26h-75.4V9.5z"
  }), Bar2_jsx("path", {
    fill: "#fedb41",
    d: "M374.9 280.8v63.9H273.2v-89.9h101.7z"
  }), Bar2_jsx("path", {
    fill: "#00acea",
    d: "M149.8 111.3h89v190.1h-89z"
  }), Bar2_jsx("path", {
    fill: "#00efd1",
    d: "M0 181.1h89v120.3H0z"
  }), Bar2_jsx("path", {
    d: "M273.2 445.9c-5.5 0-10-4.5-10-10V264.7c0-5.5 4.5-10 10-10s10 4.5 10 10v171.1c0 5.6-4.5 10.1-10 10.1z",
    fill: "#00acea"
  }));
};

/* harmony default export */ var assets_Bar2 = (Bar2);
// CONCATENATED MODULE: ./components/Dashboard/Charts/Accounts.js
var Accounts_jsx = external_react_default.a.createElement;






const Accounts = ({
  loading,
  error,
  data
}) => {
  let formatted = null;
  const {
    0: isEmpty,
    1: setIsEmpty
  } = Object(external_react_["useState"])(false);
  const options = {
    legend: {
      display: false
    }
  };
  if (loading) return Accounts_jsx("p", null, "Loading...");

  if (data) {
    const accounts = [...data.accounts].filter(account => account.account_type);

    if (external_lodash_default.a.isEmpty(accounts)) {
      setIsEmpty(true);
    } else {
      const grouped = external_lodash_default.a.countBy(accounts, account => account.account_type.Name);

      formatted = {
        labels: Object.keys(grouped),
        datasets: [{
          data: Object.values(grouped),
          backgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214'],
          hoverBackgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214']
        }]
      };
    }
  }

  return Accounts_jsx("div", null, Accounts_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Cuentas por tipo"), isEmpty ? Accounts_jsx(assets_EmptyState, null, Accounts_jsx(assets_Bar2, null)) : Accounts_jsx(external_react_chartjs_2_["Bar"], {
    data: formatted,
    options: options
  }));
};

/* harmony default export */ var Charts_Accounts = (Accounts);
// CONCATENATED MODULE: ./components/Dashboard/Charts/AccountsWithOpportunities.js
var AccountsWithOpportunities_jsx = external_react_default.a.createElement;



const AccountsWithOportunities = ({
  data,
  error,
  loading
}) => {
  let counter = false;
  if (loading) return AccountsWithOpportunities_jsx("p", null, "Loading...");

  if (data) {
    const number = external_lodash_default()([...data.accounts]).filter(account => account.opportunities.length).size();

    counter = number;
  }

  return AccountsWithOpportunities_jsx("div", {
    className: "flex flex-col justify-between"
  }, AccountsWithOpportunities_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Cuentas con oportunidades"), AccountsWithOpportunities_jsx("h3", {
    className: "text-blue-wingu text-center text-6xl"
  }, counter), (error || !counter) && AccountsWithOpportunities_jsx("span", {
    className: "text-center"
  }, "Las m\xE9tricas a\xFAn no est\xE1n disponibles"));
};

/* harmony default export */ var AccountsWithOpportunities = (AccountsWithOportunities);
// CONCATENATED MODULE: ./components/Dashboard/assets/Bar.js
var Bar_jsx = external_react_default.a.createElement;

function Bar_extends() { Bar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Bar_extends.apply(this, arguments); }



const BarSvg = props => {
  return Bar_jsx("svg", Bar_extends({
    height: 150,
    width: 150,
    viewBox: "0 0 386.1 386.1"
  }, props), Bar_jsx("g", {
    fill: "#FFBD2E"
  }, Bar_jsx("path", {
    d: "M324.3 21.05h61.8v241.5h-61.8zM216.2 67.05h60.7v195.5h-60.7zM108.1 113.05h60.7v149.5h-60.7zM0 193.55h60.7v69H0z"
  })), Bar_jsx("g", {
    fill: "#00DE89"
  }, Bar_jsx("path", {
    d: "M324.3 261.55h61.8v103.5h-61.8zM216.2 261.55h60.7v103.5h-60.7zM108.1 261.55h60.7v103.5h-60.7zM0 261.55h60.7v103.5H0z"
  })));
};

/* harmony default export */ var Bar = (BarSvg);
// CONCATENATED MODULE: ./components/Dashboard/Charts/Contacts.js
var Contacts_jsx = external_react_default.a.createElement;






const Contacts = ({
  loading,
  error,
  data
}) => {
  let formatted = null;
  const {
    0: isEmpty,
    1: setIsEmpty
  } = Object(external_react_["useState"])(false);
  const options = {
    legend: {
      display: false
    }
  };
  if (loading) return Contacts_jsx("p", null, "Loading...");

  if (data) {
    const contacts = [...data.contacts].filter(contact => contact.contact_type);

    if (!contacts) {
      setIsEmpty(true);
    } else {
      const grouped = external_lodash_default.a.countBy(contacts, contact => contact.contact_type.Name);

      formatted = {
        labels: Object.keys(grouped),
        datasets: [{
          data: Object.values(grouped),
          backgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214'],
          hoverBackgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214']
        }]
      };
    }
  }

  return Contacts_jsx("div", null, Contacts_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Contacto por tipo"), isEmpty ? Contacts_jsx(assets_EmptyState, null, Contacts_jsx(Bar, null)) : Contacts_jsx(external_react_chartjs_2_["Bar"], {
    data: formatted,
    options: options
  }));
};

/* harmony default export */ var Charts_Contacts = (Contacts);
// CONCATENATED MODULE: ./components/Dashboard/assets/Pie.js
var Pie_jsx = external_react_default.a.createElement;

function Pie_extends() { Pie_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Pie_extends.apply(this, arguments); }



const SvgPie = props => {
  return Pie_jsx("svg", Pie_extends({
    width: 150,
    height: 150,
    viewBox: "0 0 410 409"
  }, props), Pie_jsx("title", null, "114-analytics-137"), Pie_jsx("g", {
    fillRule: "nonzero",
    fill: "none"
  }, Pie_jsx("path", {
    d: "M409.6 181.7H307.8l82-81.9.2-.1c12.9 25.4 19.6 53.5 19.6 82z",
    fill: "#2681FF"
  }), Pie_jsx("path", {
    d: "M389.9 99.7l-.1.1-81.9 82h-79.4v-.6L356.4 53.3l.3.3c13.3 13.6 24.6 29.1 33.2 46.1z",
    fill: "#00DE89"
  }), Pie_jsx("path", {
    d: "M356.3 53.3L228.4 181.2v-80l81.3-81.3c17.2 8.6 32.9 19.9 46.6 33.4z",
    fill: "#2681FF"
  }), Pie_jsx("path", {
    d: "M181.2 227.8h181.2c0 50.1-20.5 95.2-53 128.2-33.9 34.1-80.1 53.2-128.2 53.002C81.5 409.002 0 328.1 0 227.8c0-50.1 20.5-95.2 53-128.2 33.9-34.1 80.1-53.2 128.2-53.002V227.8z",
    fill: "#FFBD2E"
  }), Pie_jsx("path", {
    d: "M309.7 19.9l-81.3 81.3V.6c28.3-.1 56.1 6.5 81.3 19.3z",
    fill: "#00DE89"
  })));
};

/* harmony default export */ var Pie = (SvgPie);
// CONCATENATED MODULE: ./components/Dashboard/Charts/Opportunities.js
var Opportunities_jsx = external_react_default.a.createElement;






const Opportunities = ({
  loading,
  error,
  data
}) => {
  const {
    0: isEmpty,
    1: setIsEmpty
  } = Object(external_react_["useState"])(false);
  let formatted = {};
  const options = {
    legend: {
      position: 'right'
    }
  };

  if (data) {
    const opp = [...data.opportunities];

    if (external_lodash_default.a.isEmpty(opp)) {
      setIsEmpty(true);
    } else {
      const grouped = external_lodash_default.a.countBy(opp, op => op.state.Name);

      formatted = {
        labels: Object.keys(grouped),
        datasets: [{
          data: Object.values(grouped),
          backgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214'],
          hoverBackgroundColor: ['#2680FF', '#FFBD2E', '#00DE89', '#ff7214']
        }]
      };
    }
  }

  if (loading) return Opportunities_jsx("p", null, "Loading...");
  return Opportunities_jsx("div", null, Opportunities_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Oportunidades por estado"), isEmpty ? Opportunities_jsx(assets_EmptyState, null, Opportunities_jsx(Pie, null)) : Opportunities_jsx(external_react_chartjs_2_["Pie"], {
    data: formatted,
    options: options
  }));
};

/* harmony default export */ var Charts_Opportunities = (Opportunities);
// CONCATENATED MODULE: ./components/Dashboard/index.js

var Dashboard_jsx = external_react_default.a.createElement;








const Dashboard = ({
  loggedUser
}) => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(GET_METRICS);
  return Dashboard_jsx("div", {
    className: "p-2"
  }, Dashboard_jsx(Dashboard_Header, {
    loggedUser: loggedUser
  }), Dashboard_jsx("div", {
    className: "mt-4"
  }, Dashboard_jsx("div", {
    className: "row flex mb-4"
  }, Dashboard_jsx("div", {
    className: "w-1/2 p-2"
  }, Dashboard_jsx(Charts_Opportunities, {
    loading: loading,
    error: error,
    data: data
  })), Dashboard_jsx("div", {
    className: "w-1/2 p-2"
  }, Dashboard_jsx(Charts_Contacts, {
    loading: loading,
    error: error,
    data: data
  }))), Dashboard_jsx("div", {
    className: "row flex mb-4"
  }, Dashboard_jsx("div", {
    className: "w-1/2 p-2"
  }, Dashboard_jsx(Charts_Accounts, {
    loading: loading,
    error: error,
    data: data
  })), Dashboard_jsx("div", {
    className: "w-1/2 p-2"
  }, Dashboard_jsx(AccountsWithOpportunities, {
    loading: loading,
    error: error,
    data: data
  })))));
};

/* harmony default export */ var components_Dashboard = (Dashboard);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;



const Index = props => {
  const {
    loggedUser
  } = props;
  return pages_jsx(components_Dashboard, {
    loggedUser: loggedUser
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(securePage["a" /* default */])(Index));

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g/JY":
/***/ (function(module, exports) {

module.exports = require("strapi-sdk-javascript/build/main");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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