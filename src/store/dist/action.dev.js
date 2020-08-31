"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationType = require("./mutation-type");

var _api = require("../api");

var _default = {
  //异步获取地址
  getAddress: function getAddress(_ref) {
    var commit, state, geohash, result, address;
    return regeneratorRuntime.async(function getAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit, state = _ref.state;
            //
            geohash = state.latitude + ',' + state.longitude;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqAddress)(geohash));

          case 4:
            result = _context.sent;

            if (result.code === 0) {
              address = result.data;
              commit(_mutationType.RECEIVE_ADDRESS, {
                address: address
              });
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  //异步获取食品分类列表
  getFoodType: function getFoodType(_ref2) {
    var commit, result, foodTypes;
    return regeneratorRuntime.async(function getFoodType$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqFoodTypes)());

          case 3:
            result = _context2.sent;

            if (result.code === 0) {
              foodTypes = result.data;
              commit(_mutationType.RECEIVE_FOODTYPES, {
                foodTypes: foodTypes
              });
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  //异步获取商店
  getShops: function getShops(_ref3) {
    var commit, state, longitude, latitude, result, shops;
    return regeneratorRuntime.async(function getShops$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, state = _ref3.state;
            //
            longitude = state.longitude, latitude = state.latitude;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _api.reqShops)(longitude, latitude));

          case 4:
            result = _context3.sent;

            if (result.code === 0) {
              shops = result.data;
              commit(_mutationType.RECEIVE_SHOPS, {
                shops: shops
              });
            }

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  //同步记录用户信息
  recordUser: function recordUser(_ref4, userInfo) {
    var commit = _ref4.commit;
    commit(_mutationType.RECEIVE_USER_INFO, {
      userInfo: userInfo
    });
  },
  //异步获取会话用户
  getUserInfo: function getUserInfo(_ref5) {
    var commit, result, userInfo;
    return regeneratorRuntime.async(function getUserInfo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            commit = _ref5.commit;
            _context4.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqUserInfo)());

          case 3:
            result = _context4.sent;

            if (result.code === 0) {
              userInfo = result.data;
              commit(_mutationType.RECEIVE_USER_INFO, {
                userInfo: userInfo
              });
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  //登出
  Logout: function Logout(_ref6) {
    var commit, result;
    return regeneratorRuntime.async(function Logout$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit = _ref6.commit;
            _context5.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqLogout)());

          case 3:
            result = _context5.sent;

            if (result.code === 0) {
              commit(_mutationType.RESET_USER_INFO);
            }

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  // 异步获取商家信息
  getShopInfo: function getShopInfo(_ref7) {
    var commit, result, info;
    return regeneratorRuntime.async(function getShopInfo$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            commit = _ref7.commit;
            _context6.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopInfo)());

          case 3:
            result = _context6.sent;

            if (result.code === 0) {
              info = result.data;
              commit(_mutationType.RECEIVE_INFO, {
                info: info
              });
            }

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  // 异步获取商家评价列表
  getShopRatings: function getShopRatings(_ref8) {
    var commit, result, ratings;
    return regeneratorRuntime.async(function getShopRatings$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            commit = _ref8.commit;
            _context7.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopRatings)());

          case 3:
            result = _context7.sent;

            if (result.code === 0) {
              ratings = result.data;
              commit(_mutationType.RECEIVE_RATINGS, {
                ratings: ratings
              });
            }

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  // 异步获取商家商品列表
  getShopGoods: function getShopGoods(_ref9, cb) {
    var commit, result, goods;
    return regeneratorRuntime.async(function getShopGoods$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            commit = _ref9.commit;
            _context8.next = 3;
            return regeneratorRuntime.awrap((0, _api.reqShopGoods)());

          case 3:
            result = _context8.sent;

            if (result.code === 0) {
              goods = result.data;
              commit(_mutationType.RECEIVE_GOODS, {
                goods: goods
              }); // 数据更新了, 通知一下组件

              cb && cb();
            }

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  updateFoodCount: function updateFoodCount(_ref10, _ref11) {
    var commit = _ref10.commit;
    var isAdd = _ref11.isAdd,
        food = _ref11.food;

    if (isAdd) {
      commit(_mutationType.INCREMENT_FOOD_COUNT, {
        food: food
      });
    } else {
      commit(_mutationType.DECREMENT_FOOD_COUNT, {
        food: food
      });
    }
  },
  clearCart: function clearCart(_ref12) {
    var commit = _ref12.commit;
    commit(_mutationType.CLEAR_CART);
  }
};
exports["default"] = _default;