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

import {
    reqAddress,
    reqFoodTypes,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopRatings,
    reqShopGoods
} from '../api'

export default {
    //异步获取地址
    async getAddress({ commit, state }) {
        //
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqAddress(geohash)
        if (result.code === 0) {
            const address = result.data;
            commit(RECEIVE_ADDRESS, { address })
        }
    },
    //异步获取食品分类列表
    async getFoodType({ commit }) {
        const result = await reqFoodTypes()
        if (result.code === 0) {
            const foodTypes = result.data;
            commit(RECEIVE_FOODTYPES, { foodTypes })
        }
    },
    //异步获取商店
    async getShops({ commit, state }) {
        //
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        if (result.code === 0) {
            const shops = result.data;
            commit(RECEIVE_SHOPS, { shops })
        }
    },
    //同步记录用户信息
    recordUser({ commit }, userInfo) {
        commit(RECEIVE_USER_INFO, { userInfo })
    },
    //异步获取会话用户
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(RECEIVE_USER_INFO, { userInfo })
        }
    },
    //登出
    async Logout({ commit }) {
        const result = await reqLogout()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商家信息
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
    // 异步获取商家评价列表
    async getShopRatings({ commit }) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
        }
    },
    // 异步获取商家商品列表
    async getShopGoods({ commit }, cb) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
                // 数据更新了, 通知一下组件
            cb && cb()
        }
    }
}