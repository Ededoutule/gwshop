import {
    RECEIVE_ADDRESS,
    RECEIVE_FOODTYPES,
    RECEIVE_SHOPS,
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
    }
}