exports.ids = [14];
exports.modules = {

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

/***/ })

};;