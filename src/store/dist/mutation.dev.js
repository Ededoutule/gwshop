"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _mutationType = require("./mutation-type");

var _RECEIVE_ADDRESS$RECE;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_RECEIVE_ADDRESS$RECE = {}, _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_ADDRESS, function (state, _ref) {
  var address = _ref.address;
  state.address = address;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_FOODTYPES, function (state, _ref2) {
  var foodTypes = _ref2.foodTypes;
  state.foodTypes = foodTypes;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_SHOPS, function (state, _ref3) {
  var shops = _ref3.shops;
  state.shops = shops;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_USER_INFO, function (state, _ref4) {
  var userInfo = _ref4.userInfo;
  state.userInfo = userInfo;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RESET_USER_INFO, function (state) {
  state.userInfo = {};
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_GOODS, function (state, _ref5) {
  var goods = _ref5.goods;
  state.goods = goods;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_RATINGS, function (state, _ref6) {
  var ratings = _ref6.ratings;
  state.ratings = ratings;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.RECEIVE_INFO, function (state, _ref7) {
  var info = _ref7.info;
  state.info = info;
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.INCREMENT_FOOD_COUNT, function (state, _ref8) {
  var food = _ref8.food;

  if (!food.count) {
    _vue["default"].set(food, 'count', 1); // food.count = 1;


    state.cartFoods.push(food);
  } else {
    food.count++;
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.DECREMENT_FOOD_COUNT, function (state, _ref9) {
  var food = _ref9.food;

  if (food.count) {
    food.count--;

    if (food.count === 0) {
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1);
    }
  }
}), _defineProperty(_RECEIVE_ADDRESS$RECE, _mutationType.CLEAR_CART, function (state) {
  state.cartFoods.forEach(function (food) {
    food.count = 0;
  });
  state.cartFoods = [];
}), _RECEIVE_ADDRESS$RECE);

exports["default"] = _default;