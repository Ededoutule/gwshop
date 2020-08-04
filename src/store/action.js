import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPES,
    RECEIVE_SHOPS,
} from './mutation-type';

import {
    reqAddress,
    reqFoodTypes,
    reqShops
} from '../api'

export default {
    //异步获取地址
    async getAddress({ commit, state }) {
        //
        const geohash = state.latiitude + ',' + state.longitude;
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
    }
}