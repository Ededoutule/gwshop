"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  totalCount: function totalCount(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count;
    }, 0);
  },
  totalPrice: function totalPrice(state) {
    return state.cartFoods.reduce(function (preTotal, food) {
      return preTotal + food.count * food.price;
    }, 0);
  }
};
exports["default"] = _default;