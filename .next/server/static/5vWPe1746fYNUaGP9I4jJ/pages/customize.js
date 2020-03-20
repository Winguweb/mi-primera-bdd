module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O8KJ");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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

/***/ "O8KJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./graphql/customFields/query/getCustomFields.js

const GET_CUSTOM_FIELDS = external_apollo_boost_["gql"]`
  query {
    contactTypes {
      id
      Name
    }
    origins {
      id
      Name
    }
    accountTypes {
      id
      name
    }
    states {
      id
      Name
    } 
    opportunityTypes {
      id
      Name
    }
  }
`;
// EXTERNAL MODULE: ./hocs/securePage.js
var securePage = __webpack_require__("1JDs");

// CONCATENATED MODULE: ./components/CustomFields/Header.js

var __jsx = external_react_default.a.createElement;

const Header = () => __jsx("header", {
  className: "w-full flex items-center justify-between"
}, __jsx("h1", {
  className: "mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl "
}, "Configuraci\xF3n de campos"));

/* harmony default export */ var CustomFields_Header = (Header);
// CONCATENATED MODULE: ./components/CustomFields/FieldModule.js

var FieldModule_jsx = external_react_default.a.createElement;

const FieldModule = ({
  name,
  fields
}) => {
  return FieldModule_jsx("div", {
    className: "w-1/2 pr-4"
  }, FieldModule_jsx("div", null, FieldModule_jsx("span", null, name)), FieldModule_jsx("div", {
    className: "bg-purple-white shadow rounded border-0 p-4 mt-4 min-h-1/4 flex flex-wrap justify-start"
  }, FieldModule_jsx("div", {
    className: "w-full"
  }, fields && fields.map(field => FieldModule_jsx("button", {
    className: "button text-white bg-blue-wingu flex items-center justify-center p-4 font-bold rounded mr-4",
    key: field.id
  }, FieldModule_jsx("span", {
    className: "mr-4"
  }, field.Name), FieldModule_jsx("span", null, "x")))), FieldModule_jsx("div", null, FieldModule_jsx("div", {
    className: "relative my-4"
  }, FieldModule_jsx("input", {
    type: "text",
    className: "w-full bg-purple-white shadow rounded border-0 p-4",
    placeholder: "Agregar nueva opci\xF3n"
  })))));
};

/* harmony default export */ var CustomFields_FieldModule = (FieldModule);
// CONCATENATED MODULE: ./components/CustomFields/index.js

var CustomFields_jsx = external_react_default.a.createElement;



const CustomFields = ({
  data
}) => {
  const {
    contactTypes,
    origins,
    accountTypes,
    states,
    opportunityTypes
  } = data;
  return CustomFields_jsx("div", {
    className: "p-2"
  }, CustomFields_jsx(CustomFields_Header, null), CustomFields_jsx("div", {
    className: "mt-4"
  }, CustomFields_jsx("div", {
    className: "py-2 w-full"
  }, CustomFields_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Campos de contacto"), CustomFields_jsx("div", {
    className: "flex"
  }, CustomFields_jsx(CustomFields_FieldModule, {
    name: "Origen",
    fields: origins
  }), CustomFields_jsx(CustomFields_FieldModule, {
    name: "Tipo",
    fields: contactTypes
  }))), CustomFields_jsx("div", {
    className: "py-2 w-full"
  }, CustomFields_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Campos de cuenta"), CustomFields_jsx("div", {
    className: "flex"
  }, CustomFields_jsx(CustomFields_FieldModule, {
    name: "Tipo",
    fields: accountTypes
  }))), CustomFields_jsx("div", {
    className: "py-2 w-full"
  }, CustomFields_jsx("h2", {
    className: "text-lg mb-4 font-bold"
  }, "Campos de oportunidades"), CustomFields_jsx("div", {
    className: "flex"
  }, CustomFields_jsx(CustomFields_FieldModule, {
    name: "Estado",
    fields: states
  }), CustomFields_jsx(CustomFields_FieldModule, {
    name: "Tipo",
    fields: opportunityTypes
  })))));
};

/* harmony default export */ var components_CustomFields = (CustomFields);
// CONCATENATED MODULE: ./pages/customize.js

var customize_jsx = external_react_default.a.createElement;





const Customize = props => {
  return customize_jsx(external_react_apollo_["Query"], {
    query: GET_CUSTOM_FIELDS
  }, ({
    loading,
    data,
    error
  }) => {
    if (loading || !data) {
      return customize_jsx("p", null, "Cargando...");
    }

    return customize_jsx(components_CustomFields, {
      data: data
    });
  });
};

/* harmony default export */ var customize = __webpack_exports__["default"] = (Object(securePage["a" /* default */])(Customize));

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

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ })

/******/ });