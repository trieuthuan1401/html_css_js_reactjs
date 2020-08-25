"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

require("bootstrap");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: _routes["default"],
  mode: 'history'
});
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: router,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');