import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'
import mutations from './mutation';
import state from './state';

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})