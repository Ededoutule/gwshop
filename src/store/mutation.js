import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPES,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO
} from './mutation-type';

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEIVE_FOODTYPES](state, { foodTypes }) {
        state.foodTypes = foodTypes
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    }
}