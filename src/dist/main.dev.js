"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("./mock/mockServer");

var _mintUi = require("mint-ui");

require("mint-ui/lib/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Button } from 'mint-ui'
//加载mock即可
_vue["default"].component(_mintUi.Button.name, _mintUi.Button);

_vue["default"].component(_mintUi.Cell.name, _mintUi.Cell);

_vue["default"].component(_mintUi.MessageBox.name, _mintUi.MessageBox);

_vue["default"].config.productionTip = false; // Vue.component(Button.naem, Button)

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');